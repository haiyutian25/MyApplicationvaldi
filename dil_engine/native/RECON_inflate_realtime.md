# 真机运行时验证记录（native 解压模块）

> 2026-10-16。设备：Redmi 6 Pro（sakura / Android 9 / arm64-v8a / Magisk root），
> 经 frp 隧道 `adb connect 101.42.15.60:6000` 接入；目标 App：`com.openai.chatgpt` **1.2026.279**。
> 工具：`tools/frida_native_verify.py`（frida-python 17.18.0 + 设备端 frida-server 17.18.0）。

---

## 1. 为什么不需要另做 App

要回答的是"**我们离线分析的那份字节，是不是设备上正在跑的那份**"以及"**行为是否如还原所描述**"。
这两件事都能在**已装的 ChatGPT** 里完成：

| 验证 | 做法 | 需要 App 吗 |
|---|---|---|
| A 字节一致性 | 设备 APK 与本地 APK 哈希比对 + 运行时读函数首字节 | ❌ |
| B 运行时行为 | Frida 注入：`dlopen` APK 内的 .so → 按还原的 ABI 调用 → 校验输出 | ❌ |
| C 边界/上限 | 调用时显式传还原出的 `0x1000000`（16 MiB） | ❌ |
| D 引擎侧行为 | 需 hook QuickJS 内部（未做，见 §5） | ❌（但更费劲） |

## 2. 结果：四项全部通过 🔒

### 2.1 字节一致性（哈希链 + 运行时双重确认）

| 环节 | 值 |
|---|---|
| 设备 `split_config.arm64_v8a.apk` sha256 | `80f9d942…4cd342` |
| 本地同一 APK sha256 | `80f9d942…4cd342` | **★ 一致** |
| APK 内 `lib/arm64-v8a/libopenai_xplat_export.so` | `732e7e0ac5a7f1e8…`，`method=0`（STORED 未压缩 ⟹ **mmap 的就是文件字节**） |
| 我们离线分析的那份 .so | `732e7e0ac5a7f1e8…` | **★ 一致** |
| **运行时**：模块基址 `0x7cd9447000` 处 `0x520f14` 首 16 字节 | `ff4304d1fd7b0ba9fc6f0ca9fa670da9` |
| 本地文件同偏移首 16 字节 | `ff4304d1fd7b0ba9fc6f0ca9fa670da9` | **★ 一致** |

⟹ **离线还原的对象 = 设备运行时执行的对象**（且反汇编为 `sub sp,sp,#0x110 / stp x29,x30 / stp x28,x27 / stp x26,x25`）。

### 2.2 ABI（由 `gunzipUtf8` 调用点反汇编确定）

```asm
00520ec8  ldp  x9, x2, [x1, #8]     ; x2 = bytes.size
00520ecc  add  x0, sp, #8           ; ★ x0 = 栈上 24B 输出槽
00520ed0  mov  w3, #0x1000000       ; ★ x3 = 16 MiB
00520ed4  mov  x19, x8              ; 保存**自己**的 sret（x8 属于 gunzipUtf8）
00520ed8  mov  x1, x9               ; x1 = data
00520edc  bl   #0x520f14
```

⟹ **`inflateGzipPayloadWithZlib(std::string* out /*x0*/, const uint8_t* data /*x1*/, unsigned size /*x2*/, unsigned long limit /*x3*/)`**
（x8 是调用者自己的 sret，被调函数**不用** x8 —— 这点曾让我误判，反汇编才定死。）

### 2.3 行为（真实调用，输出逐字节一致）

```
[small]  gzip(67B JSON) 83 B  → 输出 67 B
         "{\"v\":1,\"dil\":\"<Box padding=8><Text>hello from native</Text></Box>\"}"   ★ 与原文一致
[64KiB]  gzip(64 KiB 'A') 97 B → 输出 65536 B  "AAAA…"                                ★
```

### 2.4 上限

调用时显式传入还原出的 **`0x1000000` = 16 MiB** 并成功 —— 与 JS 侧 `DILStateSnapshotCodec`（8192 B/128/512 条目）
构成**两层限额**的结论一致。

## 3. 实测得到的**新事实**（此前没有）

### 3.1 返回字符串的布局 ≠ libc++ `std::string`

24 字节返回对象的真机 dump（两次调用）：

| payload | `[0:8]` | `[8:16]` | `[16:24]` |
|---|---|---|---|
| small | `0x0000000000010011` | **67**（= 期望输出长度） | `0x7cf0cedf00`（数据指针） |
| 64KiB | `0x0000000000010011` | **65536**（= 期望长度） | `0x7cf18e13c0`（数据指针） |

⟹ 布局为 **`{ ?@0, size@8, data@16 }`**；`@0` 恒为 `0x00010011`（疑为引用计数/标志）。
**与 libc++ `std::string` 的 `{data@0, size@8, cap@16}` 不同** ⟹ 更像 **Valdi 自己的字符串类型**
（这也是 `gunzipUtf8` 在尾部还要调 3 个函数做转换的原因）。

> 方法教训：我先按 libc++ 的两种布局各猜一次都错（还把指针当内联缓冲读，触发 `access violation accessing 0x10011`）。
> 最终改用 **dump 原始字节 + 用已知期望长度定位字段**的办法 —— "用数据认布局"比"凭知识猜布局"可靠。

### 3.2 该 .so 是**懒加载**的

干净启动（`am force-stop` + 重启）后，`Process.enumerateModules()` 列出的 243 个模块里**没有**它
（`liblkjingle_peerconnection`/`libsentry` 等都已加载）⟹ **`libopenai_xplat_export.so` 只在真正用到
Valdi/DIL 渲染面时才载入**，不在启动时加载。（其 `DT_NEEDED` 只有系统库、无 `libc++_shared`，
所以可以安全地在宿主进程里 `dlopen` 它来做验证。）

### 3.3 两套 zlib 并存

该 .so 的 `DT_NEEDED` 含 **`libz.so`**（系统 zlib），而我们的解压器用的是**静态链入**的另一份 zlib
（`.so` 内部自带 `inflate_table`/`crc32`/`adler32`/13 条 zlib 错误文案）。

## 4. 踩坑与规避（都已修，工具可直接复用）

| # | 坑 | 现象 | 修法 |
|---|---|---|---|
| 1 | **两个 frida-server 抢端口** | `create_script`/`load` 超时 | 只保留**一个** frida-server（`kill -9` 后重启） |
| 2 | **被 dlopen 污染过的进程让注入卡死** | `script.load()` 永不返回（同进程早前成功过） | **重启 App** 得到干净进程；验证本身会 dlopen，故验证后如需再注入应重启 App |
| 3 | **Frida 读 `/proc/self/maps` 会阻塞** | agent 顶层代码卡住 ⟹ `load()` 卡住 | **不用 File API**；改用 `Process.enumerateModules()` |
| 4 | **Frida 17 已无 `Module.getExportByName`** | `TypeError: not a function` | 用 `Module.getGlobalExportByName("dlopen")` |
| 5 | **Frida 17 QuickJS 无 `atob`** | `ReferenceError: 'atob' is not defined` | 负载改成**字节数组**（`writeByteArray` 直接接受） |
| 6 | **`Process.findModuleByName` 路线取不到 base** | `m.base` 为 undefined | 用 `Process.enumerateModules()` 遍历取 `m.base`（Frida 17 属性是**非枚举 getter**，`Object.keys` 为空但可读） |
| 7 | **`adb shell "su -c '… &'"` 不返回** | 命令挂住直到超时 | 宿主侧 `Start-Process` 后台发起，命令立即返回 |

## 5. 仍未做

- **引擎侧（DIL/QuickJS）的运行时验证**：需 hook QuickJS 内部（`Bytecode`/`JSValue`）或读 DIL 运行时日志，
  未做。目前引擎结论仍全部来自静态（伪 JS + 架构解读）。
- **真实调用路径的观察**：本次是**主动调用**（合成输入）。若要让 App 自己走一次
  `CompressedWidgetState` → `gunzipUtf8` → `inflateGzipPayloadWithZlib`，需要 App 渲染到
  DIL widget（其 widget state 走压缩路径）——可作为后续。

## 5b. 引擎侧运行时验证（2026-10-16 第二轮）

### 5b.1 已确证：库是**懒加载**，且**打开 DIL 对话即被引擎加载**

| 观测 | 结果 |
|---|---|
| 主聊天页（输入框/键盘，含抽屉） | **不**加载该库（243 个模块里无它） |
| 干净重启 + 只做浏览 | **不**加载 |
| **打开一个 DIL 组件文档对话**（内含真实渲染的 widget：图标网格 / Favicon / Link / Entity / Cite 示例） | ★ **库被加载**（基址 `0x7cd9c44000`，size 7,741,440） |

⟹ 与"该库是 Valdi/DIL 渲染面才需要"的判断一致；也印证它**不是**启动期依赖。

### 5b.2 已确证（反汇编级）：**加载即自注册 + 类描述符 → JS 接口**

```asm
; _GLOBAL__sub_I_CompressedWidgetStateInflater.cpp @0x460dd4 —— 库加载时的静态初始化
0x460de8  adr   x9, #0x520b10        ; 工厂的 zoo::Function 包装
0x460e10  bl    #0x69705c            ; → Valdi::RegisterModuleFactory(...)   ★ 注册
0x460e20  blr   x8

; 工厂 onLoadModule() @0x520e2c —— 引擎真正装载模块时
0x520e48  bl    #0x522b3c            ; → CompressedWidgetStateInflaterModule::getRegisteredClass()
0x520e50  bl    #0x6971c0            ; → Valdi::CppGeneratedInterface::CppGeneratedInterface(RegisteredCppGeneratedClass*)
```

⟹ **`dlopen` → 静态初始化 → `Valdi::RegisterModuleFactory(工厂)` → `onLoadModule() →
getRegisteredClass() → CppGeneratedInterface` → JS 侧获得 `gunzipUtf8` / `gunzipUtf8WithLimit`**。
这条链路正是离线看到的那份 `.rodata` TS schema 被暴露给 QuickJS 的机制。

### 5b.3 未捕获到"真实 `gunzipUtf8`/`inflate` 调用"（原因已定位，非工具问题）

用 `tools/frida_observe.py` 挂了 8 个钩子（`dlopen`/`android_dlopen_ext`、静态初始化、`onLoadModule`、
`RegisterModuleFactory`、`gunzipUtf8`、`gunzipUtf8WithLimit`、`inflateGzipPayloadWithZlib`），并尝试了
**全部免网络的触发方式，均未命中**：

| 尝试 | 结果 | 解读 |
|---|---|---|
| 滚动对话（来回多次） | 无调用 | **与引擎结论自洽**：memo 判据命中（props 引用相等 + 依赖全等）⟹ 跳过重算 |
| 点 widget 内图标按钮 | 无调用 | 该对话的 widget 是**静态文档示例**（无状态） |
| 切后台 → 回前台 | 无调用 | 同上（复用缓存输出） |
| 挂 `RegisterModuleFactory`/静态初始化 | 无事件 | 库在**观测器注入之前**就已加载 ⟹ 注册已发生过 |

**根本约束**：该路径服务于"**widget 状态压进可分享载荷**"（分享的测验/新生成互动组件）类场景，
其**首次渲染需要网络**；而本机 App 需要**代理**，代理与 **frp（观测通道）互斥** ⟹ 观测窗口与触发条件互斥。

**下次可复现的配方**（任一条件满足时即可抓到，脚本已就绪）：
1. 让代理与 frp **并存**（例如把 frida-server 走 USB/局域网而非 frp），然后按下面顺序操作：
   注入观察器 → 打开一个**含压缩状态 widget** 的对话（分享的测验 / 让模型新生成一个互动组件）→ 首次渲染即命中；
2. 或者：先用代理打开该类对话（让内容落到本地缓存）→ 切回 frp → **重启 App 并注入观察器** →
   从缓存打开该对话（若离线可加载，即为首次渲染 → 命中）。

命中后应能看到：`on_load_module`（若在新进程内加载）→ `gunzipUtf8`/`gunzipUtf8WithLimit`（x1 指向的
`BytesView` 前 2 字节应为 `1f 8b`）→ `inflate`（`size`、`limit` 是否 `0x1000000`、输入头是否 gzip）→
`inflate_ret`（返回对象的 24 字节与输出文本长度）。

### 5b.4 ★ **已捕获到"引擎加载该库"的真实时刻**（本次最有价值的一条）

把观察器**在 App 冷启动之后、库加载之前**注入（`force-stop` → 启动 → 注入 → 再驱动 UI），
随后用 adb 驱动 UI（打开侧边栏 → 点对话）触发渲染，日志拿到了：

```json
{"t":"attach","pid":9445}
{"t":"info","msg":"已挂 android_dlopen_ext"}
{"t":"info","msg":"已挂 dlopen"}
{"t":"ready","msg":"观察器就绪（等待库加载与真实调用）"}
{"t":"dlopen","lib":"/data/app/com.openai.chatgpt-…/split_config.arm64_v8a.apk!/lib/arm64-v8a/libopenai_xplat_export.so"}
{"t":"loaded","base":"0x7cd8291000","size":7741440,"msg":"模块已映射，开始装钩子"}
```

⟹ **打开 DIL 对话时，引擎用 `android_dlopen_ext` 从 APK 内（`<zip>!/lib/arm64-v8a/…`）加载该库** ——
"懒加载 + 由引擎按需加载"的**运行时铁证**；且钩子在加载后立即装上（后续调用可捕获）。

> 关键操作顺序（否则抓不到）：`am force-stop` → 启动 App → **注入观察器** → 再驱动 UI 打开对话。
> 若先打开对话再注入，就只能看到"库已加载"而错过 `dlopen` 事件。

### 5b.5 仍未命中 `gunzipUtf8`/`inflate`（本地缓存的 DIL 对话都不走压缩状态路径）

驱动脚本依次尝试（每次均在观察器在线状态下）：

| 动作 | 结果 |
|---|---|
| 打开「智能UI介绍」（渲染出 **DIL 组件目录表**：Box/Row/Col/Grid… Chart/MapWidgetV2/Icon、Link/Entity/Cite、CodeBlock/WritingBlock/AppBlock） | 仅 `dlopen`/`loaded` |
| 打开「解释智能UI」 | 仅上述 |
| 打开「介绍 Valdi 框架」/「Hexo主题制作方式」 | 仅上述 |
| 在上述对话内滚动、点组件图标 | 无 native 调用 |
| 切前后台 | 无 native 调用 |

⟹ 这些对话渲染的是**普通 DIL widget**，其 `initialState` 不是压缩形态，因此不命中该路径。

**触发条件（已由 JS 侧伪码精确定义，见 §5b.6）**：widget 的 `initialState` /
`__chatgptWidgetViewState` 必须是 `{__encoding:"gzip-json-base64url-v1",
__compressed:"<base64url>"}`。该形态由**服务端下发**（紧凑编码，便于放进 URL/传输），
移动端本地缓存的对话里都不具备 —— 结合 5b.3 的约束（App 需代理、代理与 frp 互斥），
当时无法构造该场景。

**解除约束的具体办法（任一即可）**：
1. **代理加"绕过/直连"规则**：在代理 App 里把 frp 的 VPS 地址（`101.42.15.60`）或 Termux/adb 进程
   加入 bypass（或用"分应用代理"，只让 ChatGPT 走代理）⟹ 代理与 frp **并存**，即可在生成 widget 时全程观察；
2. **让 frida 不走 frp**（USB / 局域网 adb）⟹ 同上；
3. ~~若不便改网络：先在有代理时生成/打开性格测验或共享对话~~ —— **该建议基于错误推测，作废**：
   触发条件不是"某个移动端功能"，而是**服务端下发的压缩 `initialState`**（见 §5b.6）。
   用户已确认移动端**没有"对话压缩"这类功能** ⟹ 移动端不具备产生该形态的入口。
   要在本机观测，只剩"**改写本地缓存里某个 widget 的 `initialState`**"这种人工造场景的方式
   （需先定位其存储形态，风险与工作量都较高，未做）。

---

## 5b.6 🔒 触发条件的精确定义与跨层闭环（JS 侧伪码证据）

### 5b.6.1 判定与解析（`dil_compiler/src/CompressedWidgetState.js`）

```js
/* 判定：是不是"压缩态" */
function p(e) {
  return u(e)                                     /* 是对象（非 null / 非数组） */
      && e.__encoding === "gzip-json-base64url-v1" /* ★ 编码标识（模块级常量 s） */
      && typeof e.__compressed === "string";       /* ★ 载荷在 __compressed 字段 */
}

/* 解析：parseWidgetInitialStateValue */
function a(s) {
  if (!p(s)) return s;                             /* 非压缩态 → 原样返回 */
  const e = Base64.toByteArray(s.__compressed);    /* base64url → 字节 */
  if (isVersionAtLeast(15)) { o = i.gunzipUtf8(e); }  /* ★★ 调 native（**只传 1 个参数**） */
  return JSON.parse(o);
  /* catch → DILDiagnosticError{phase:"DIL JSON parse",
              message:"Failed to decode compressed widget state: " + String(o)} */
}
```

| 事实 | 值 | 意义 |
|---|---|---|
| 编码格式名 | **`"gzip-json-base64url-v1"`**（模块常量 `s`） | base64url(gzip(JSON)) —— **可放进 URL/传输**的紧凑编码 |
| 载荷字段 | `__compressed`（string） | 与 `__encoding` 一起构成"压缩态对象" |
| 调用 | **`gunzipUtf8(e)`，1 个实参** | ⟹ 生效的就是 native 的**默认上限 `0x1000000`**（§5b.2/§2.4 的还原得到闭环印证） |
| 版本门控 | `isVersionAtLeast(15)` | 编译器版本 ≥15 才走该分支 |
| JS 侧同名常量 | `n = 16777216`（= 16 MiB） | 与 native 默认值同数 —— 两侧一致的限额 |
| 失败包装 | `DILDiagnosticError{phase:"DIL JSON parse"}` | 与 native 的两条 Valdi 异常文案构成完整错误链 |

### 5b.6.2 消费方（谁会把 `initialState` 交给它）

- `dil_compiler/src/DILCompiler.js`（`require("./CompressedWidgetState")`）
- `dil_compiler/src/DILInitialStateScopeWidgetRenderer.js`：
  ```js
  i = r.parseWidgetInitialStateValue(e[a]);   // a = "__chatgptWidgetViewState"
  n = r.parseWidgetInitialStateValue(e[p]);   // p = "initialState"
  e1 = r.parseWidgetInitialStateValue(e1.initialState);
  ```
  （同处还有 `s = "__chatgptWidgetRefId"`、`o = "__chatgptStateAliases"`）

⟹ 这条路径的真身是：**widget 初始状态（`initialState` / `__chatgptWidgetViewState`）的紧凑编码解析**，
与"对话压缩"无关（我早先的推测不准确，已更正）。

### 5b.6.3 结论：为什么移动端抓不到

| 环节 | 状态 |
|---|---|
| native 函数本身 | ✅ 已主动调用验证（解压逐字节一致、16 MiB、gzip-only） |
| 引擎加载该库 | ✅ 已捕获 `dlopen` 真实时刻（§5b.4） |
| JS→native 调用链 | ✅ 已由两侧伪码对齐（本节） |
| **真实调用事件** | ❌ **不可得**：触发需服务端下发带 `__encoding:"gzip-json-base64url-v1"` 的 `initialState`，移动端无产生该形态的入口（用户确认），本地缓存的 4 个 DIL 对话均不具备 |

⟹ 这是**场景不可达**，不是工具或方法问题。观测器（8 钩子）与复现配方已就绪，
一旦在具备该形态的环境（服务端下发 / 其他平台）下运行，可直接取到完整链路事件。

---

## 5b.7 🔒 服务端实发载荷形态（用户提供实例 + 代码侧闭环）

### 5b.7.1 实发是**明文 JSON 节点树**，不是压缩载荷

用户给出的服务端载荷实例（`model_dil_v2`）：

```json
{ "type": "document", "version": "v2", "code": "intelligent-ui-demo",
  "children": [
    { "type": "heading",  "children": "欢迎使用智能界面" },
    { "type": "paragraph","children": "这是一个由节点结构组成的 Intelligent UI 示例，…" },
    { "type": "card", "children": [
        { "type": "heading",   "children": "今日任务" },
        { "type": "paragraph", "children": "完成你的每日计划" },
        { "type": "list", "children": [
            { "type": "list-item", "children": "阅读文档" },
            { "type": "list-item", "children": "整理项目进度" },
            { "type": "list-item", "children": "完成本周计划" } ] },
        { "type": "progress", "children": "任务完成进度" } ] },
    { "type": "button", "children": "开始使用" } ] }
```

### 5b.7.2 代码侧闭环：这条载荷由谁解码

`chatgpt_services/src/generated_ui/ModelWrittenDILDecoder.js`：

```js
/* decodeModelWrittenDILResult(message, text, source) */
d = t.model_dil_v2;
if (是对象(d) && typeof d.code === "string")                     /* ★ 正是载荷里的 code 字段 */
    return n(addChatGPTClientDefinedWidgetFallbacks(d, t), t, l);  /* 再走客户端定义组件 fallback */
a = …;  /* 另一路：metadata 形态 */
if (是对象(a) && 是对象(a.dil) && typeof a.dil.type === "string"
    && 文本为空 && a.dil.type === "Response" && Array.isArray(a.dil.children) && 非空)
    return n(a.dil, t, l);
console.warn("Ignoring invalid model-written DIL v2 in …");      /* 否则只告警 + 走 fallbackMarkdown */
```

⟹ **服务端下发的是 `model_dil_v2` 明文对象（`code` 字段指向客户端定义组件）**，
经 `ModelWrittenDILDecoder` → `ChatGPTClientDefinedWidgetFallbacks` → `DILCompiler` 编译 →
`dil_widgets` 的 `ElementsRegistry` 渲染。**全链路不含压缩/解压**。

### 5b.7.3 载荷元素类型 vs 还原出的元素注册表（`dil_widgets/src/ElementsRegistry.js`，72 条）

| 载荷里的 `type` | 元素注册表 | 说明 |
|---|---|---|
| `card` / `list` / `list-item` / `button` / `code` | **命中** | `DILCardElementRenderer` / `DILListElementRenderer` / `DILButtonElementRenderer` / `TextElementRenderer("code")` |
| `heading` / `paragraph` | 不在元素注册表 | 它们是**文本/markdown 侧节点**（`mdast`：`{type:"paragraph",children:[]}`、`{type:"heading",depth:0,…}`），由文本渲染层处理 |
| `document` / `progress` / `version` | 不在元素注册表 | `document/version` 是**文档封装层**字段；`progress` 不在 `dil_widgets` 的客户端定义元素表内（属另一渲染层或较新 schema） |

→ 说明该 schema 是**多层混合**（文档封装 + 文本节点 + DIL 元素），这解释了为什么"元素注册表"不能覆盖全部 `type`。

### 5b.7.4 对一个悬案的结论

| 项 | 结论 |
|---|---|
| `CompressedWidgetState` / `gunzipUtf8` 是否在当前移动端流程中被调用 | **不调用** —— 服务端实发明文 `model_dil_v2`；压缩路径需要 `{__encoding:"gzip-json-base64url-v1"}` 形态，该流程不产生 |
| 之前"找对话来触发"的思路 | 前提错误（不是"没找到入口"，而是**这条流程本身不发压缩载荷**）；已在 §5b.5 作废该建议 |
| native inflater 的地位 | **已注册、可调用、行为已完整验证**（主动调用 + 逐语句对齐），但在当前移动端流程中**未被触发** |

## 6. 复现

```powershell
# 0) 环境：设备 + 单个 frida-server
adb connect 101.42.15.60:6000
adb shell "su -c 'pkill -9 -f frida-server; cd /data/local/tmp && nohup ./frida-server >/dev/null 2>&1 &'"
# 1) 复位 App（避免被上次 dlopen 污染）
adb shell "am force-stop com.openai.chatgpt"
adb shell "monkey -p com.openai.chatgpt -c android.intent.category.LAUNCHER 1"
# 2) 验证（后台跑 + 轮询日志，不要在命令里干等）
python tools\frida_native_verify.py
```

脚本自身会：定位 App pid → attach → 枚举模块（缺则 `dlopen` APK 内那份，并用"新增模块"兜底定位）
→ 自校验函数首字节 → 按 4 参 ABI 调用两组负载 → 校验输出与上限。
