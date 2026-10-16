# ② 报告：反汇编 → 伪 JS（全量 85 个模块 / 28,872 函数 / 1,365,526 指令）

> 本报告最初是 `dil_sandbox` 单项试点（见 §0.1），现已推进到**全量**（§0.2）。

- 目标：把 QuickJS 字节码恢复到可读伪 JS，并量化质量
- 日期：2026-10-15 ｜ 分级：🔒 确定 ｜ 🔍 确证 ｜ 💡 推断 ｜ ❓ 未知

---

## 0.2 全量结果（当前状态）

| 指标 | 值 |
|---|---|
| 覆盖 | **85 个模块 / 1,834 文件 / 28,872 函数** |
| 指令总数 | **1,365,526** |
| **栈效应与操作码表一致** | **1,364,303 / 1,365,526 = 99.91%** 🔒 |
| 未特化指令 | 330（三个模块的零散复杂操作码） |
| 产物 | `pseudo/<模块>/…pseudo.js`（1,834 份，22.6 MB） |
| for-of 折叠 | 已折叠出 `for (const v of expr)` 块（含循环变量名与 `continue` 重写） |

**DIL 引擎 9 个模块**：

| 模块 | 文件 | 函数 | 指令 | 栈不符 | 问题函数 |
|---|---:|---:|---:|---:|---:|
| `dil_core` | 43 | 565 | 24,780 | 30 | 19 |
| `dil_renderer` | 26 | 417 | 15,631 | 59 | 32 |
| `dil_compiler` | 36 | 426 | 12,028 | 22 | 16 |
| `dil_text` | 39 | 435 | 20,636 | 5 | 5 |
| `dil_charts` | 5 | 316 | 21,411 | 1 | 1 |
| `dil_cel` | 15 | 191 | 7,735 | 11 | 9 |
| `dil_math` | 1 | 16 | 556 | 1 | 1 |
| `dil_widgets` | 231 | 3,464 | 172,155 | 86 | 62 |
| `dil_sandbox` | 37 | 554 | 21,624 | 78 | 34 |
| **小计** | **433** | **6,384** | **296,556** | 293 | 179 |

语料中最大的两个模块：`collaborative_editor`（4,180 函数 / 181,432 指令）、`dil_widgets`（3,464 / 172,155）。

## 0.1 试点结果（`dil_sandbox`，已并入上表）

| 机器可校验指标 | 值 |
|---|---|
| 指令总数 | 21,624 |
| 栈效应与操作码表一致 | 21,537 / 21,624 = 99.60% |
| 操作码覆盖 | 134 个已用操作码全部特化 |
| 不可达死代码（已跳过并计数） | 421 |
| 多路径栈深不一致（已重同步并就地标注） | 243 |

**通用回退的兜底逻辑**：未特化操作码一律按操作码表的 `n_pop/n_push` 维护栈深 —— 因此**栈模型永远自洽**（可机器校验），只是可读度低。这是"宁可不漂亮，也不能把推断当事实"的落地点。

---

## 1. 真实样本

### 1.1 模块体（`DILSandboxProtocol.js`）

```js
function {                                  // args: require, module, exports
  e = function e;                           // 局部 e = 校验函数
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isDILSandboxBoundServerAction = undefined;
  exports.isDILSandboxBoundServerAction = e;
  return;
}
```

### 1.2 校验链（`&&` 短路）

```js
function {                                  // args: e
  if (!(("server" === e.handler))) goto L_da;
  if (!((typeof e.nativeWidgetResolutionId === "string"))) goto L_da;
  if (!((e.nativeWidgetResolutionId.length > 0))) goto L_da;
  if (!((typeof e.componentName === "string"))) goto L_da;
  return (e.componentName.length > 0);
}
```
（原语义为 `return a && b && c && d;` —— 目前保留显式 goto 以**不丢语义**，`&&` 折叠列为改进项。）

### 1.3 类构造（`DILSandboxCallbackResults.js`）

```js
function {                                  // args: e, t   locals: this
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.contextId = e;
  this.post = t;
  this.pending = new Map();                 // ← 精确原子表修正后才正确（原先误为 BigFloat）
  this.nextId = 1;
  return;
}
```

### 1.4 Promise/超时回调（含 try/catch）

```js
let d;
d = setTimeout(function <atom:0>, o);
this.pending.set(s, {resolve: n, reject: c, timeout: d});   // 对象字面量已折叠
try { // catch -> L_e5
  this.post({kind: 6, contextId: this.contextId, ...});
  ...
  c(e.toDILSandboxError(l));
```

---

## 2. 顺带修掉 3 个**保真度 bug**（影响此前所有产物，已重生成）

| # | bug | 事实 | 影响面 |
|---|---|---|---|
| 1 | **局部变量与参数是两个独立索引空间** | `var_buf` 只有 `var_count` 槽、`arg_buf` 独立（`quickjs.c:15206/15898/15922`）→ `get_loc N` 应取 `vardefs[arg_count + N]`，而非 `vardefs[N]` | **所有 `get_loc*/put_loc*/set_loc*` 的变量名**；`structures/`、`disasm/` 已按修正重生成 |
| 2 | 操作码表 `fmt` 解析用 `rindex(")")` | 行尾注释含 `)`（如 `(dup_x1)`）会把 fmt 截断成垃圾 | `insert2/3/4` 名义解析错；**`define_class_computed` 的原子操作数被静默丢弃** |
| 3 | 预定义原子名靠偏移猜测 | 仓库 `quickjs-atom.h` 与产出字节码的构建**中间有增删**，偏移不是单一常数（实证：`V=186`→`Set` 需 k=0，`V=145`→`Object` 需 k=5） | 全局名（Object/Map/Promise…）可能错标 |

**#3 的根治**：运行时 `.so` 里就带着它自己的原子表 —— `js_atom_init`（`.symtab`，`0xc246b`，2023 B）。提取后得到**精确名单**：
- 214 条（含一个空串 `JS_ATOM_empty_string`，逐行文本会丢它，故用 JSON 存）
- 推导 `first_atom = 1 + 214 = 215`
- **与实测标定（根函数 `debug.filename` → 动态原子 0 → base=215）精确吻合** 🔒 —— 一次独立交叉验证
- 修正后高频原子全部语义自洽：`145→Object`、`146→Array`、`147→Error`、`175→Map`、`186→Promise`、`64→value`、`101→defineProperty`

> 另修：`qjs_disasm.py` 的 main 曾默认 `CONFIG_BIGNUM=on`（而产物用 off），会把同一批字节解成不同操作码（`fclosure8 0` vs `push_i16 -12800`）—— 已统一为 **off**（实测 off 才语义正确）。

---

## 3. 设计与实现

- `tools/qjs_ops.py`：类型化指令解码；用**"消费字节 + 内联缓存槽 == 表声明 size"**做交叉校验（全语料 0 例不符）
- `tools/qjs_pseudo.py`：
  - 表达式栈重建（字面量/成员/调用/算术/对象字面量折叠/类构造）
  - `dup; if_xx L; drop` 惯用法识别（`drop` 是第二高频指令，即 `&&`/`?:` 的固有形态）
  - 线性发射 + 标签/goto（**不丢语义**），跳转目标做栈深重同步并就地标注
  - 不可达代码跳过（避免污染栈模型）
  - **栈效应断言**：每条特化实现必须与操作码表 `n_pop/n_push` 一致 → 不一致立即计入指标，而非静默出错

## 3.5 循环结构化（本轮完成）

**QuickJS 把 for-of 降级为"条件在底部"**：`<iterable>; for_of_start; goto L_cond; <循环体>; L_cond: for_of_next…; if(!done) goto <循环体>`。故循环体在字节码里位于条件**之前**，必须重排才能给出 JS 形态 → 采用**行级拼接**折叠。

两个关键修正：

| 项 | 事实 |
|---|---|
| **`label` 跳转偏移是「有符号 int32」** | 我最初按无符号读，导致所有**反向跳转（循环回边）**目标算成 `2^32+目标`，还误判成"bit28 标志位"。这是 Stage-2 反汇编里反向跳转目标全错的根因 —— `qjs_ops.py` 与 `qjs_disasm.py` 均已修正 |
| 迭代器栈效应 | 按 `quickjs.c:16251-16283` 的 CASE 逐条核对：`for_of_start` 弹1推3、`for_of_next` 弹3推5、`iterator_close` 弹3推0、`await` 弹1推1 等 |

成果：**47 处 for-of 折叠**，含循环变量名提取与"跳到条件处"→`continue` 重写：

```js
const _it1 = Object.keys(t);
for (const t of this.pendingBatches.splice(0)) {
  y = <value(_it1)>;
  r#1 = t[y];
  if (((undefined === r#1))) continue;
  ...
}
```

指标随之改善：未特化 **221 → 0**、不可达 **421 → 0**、栈效应不符 **167 → 78**（受影响函数 111 → 34）、栈下溢 100 → 87。

## 3.6 附带发现：`DILSandboxQuickJSBootstrap` 内嵌自身源码

`dil_sandbox/src/DILSandboxQuickJSBootstrap.generated.js` 把一个**完整源码字符串**导出为
`exports.DIL_SANDBOX_QUICKJS_BOOTSTRAP_SOURCE`（首行注释：*"Bazel embeds this file as source text. It executes only inside QuickJS."*）—— 与 `dil_generated_components` 同一手法。
其内容是**沙箱加固逻辑**（删除非白名单的 `RegExp` 属性、冻结全局、私有值封装等），安全相关，可直接读源码，无需解编译。

> ⚠️ **自检更正**：我一度用 `grep 'for (const'` 在伪码产物里找折叠成果，命中的其实**全是这段内嵌源码**，据此误报"折叠成功"。实际当时折叠一次都没触发（原因：折叠判断被插在 BRANCH 处理器之后成了死代码）。现已修正并复核。

## 3.7 全量推进（本轮完成）

一条命令跑完 85 个模块（`tools/pseudo_all.py`，Python 侧聚合以免控制台编码干扰）：

```powershell
python tools\pseudo_all.py          # 全部模块 + 汇总表 -> dil_engine\pseudo_report.txt
python tools\pseudo_all.py dil_     # 仅 DIL 引擎
```

**产物 1,834 份伪码 / 22.6 MB**，覆盖引擎层 + 框架层（`valdi_core`/`valdi_rxjs`/`web_platform`/`widgets`…）。

### 折叠产出的清理（本轮收尾）

修掉两处遗留瑕疵后，循环输出已干净：

```js
o = e.filter(function <atom:0>);
let t;
for (const t of I) {
  if (!(e.includes(t.requiredHostActionType))) goto L_1cf;
  o.push(t.actionType);
}
return o;
```
（原先残留的 `const _it1 = I;` 声明行、循环尾部的 `<value(_it1)>;` 与 `// iterator_close` 均已吞掉）

另修一处**折叠顺序 bug**：删声明行后重新切片 body，会把"已剥掉绑定行"的结果覆盖回去 → 改为**先删声明行、再取 body**。

## 4. 剩余工作（按收益排序）

1. **嵌套循环**：`loop_open` 是单槽设计，嵌套 for-of 只折叠外层（当前 99.91% 之外的多数不一致源于此）
2. `&&`/`||`/`?:` 折叠：把 `if (!(a)) goto L; …` 链折回 `a && b && c`
3. `if/else` 结构化（目前只有单分支 goto 形态）
4. 通用路径占位符（`<?>`）细化：现仅 330 条未特化指令

## 5. 产物与复现

| 路径 | 内容 |
|---|---|
| `pseudo/<模块>/**/*.pseudo.js` | **1,834 个文件的伪 JS**（含每函数的参数/局部/闭包头部） |
| `pseudo_report.txt` | 分模块指标汇总（文件/函数/指令/未特化/栈不符/下溢/重同步/不可达） |
| `native/atom_init.txt` | 从 `.so` 提取的**精确**预定义原子表（JSON） |
| `tools/qjs_ops.py` / `qjs_pseudo.py` / `pseudo_stats.py` / `pseudo_all.py` | 解码、解编译、单模块指标、全量批量 |
| `tools/extract_atom_init.py` / `calib_predef.py` / `opcode_hist.py` | 原子表提取与标定、操作码分布 |

```powershell
python tools\extract_atom_init.py <so> dil_engine\native\atom_init.txt   # 精确原子表
python tools\qjs_pseudo.py <某个预编译.js> --all                          # 单文件伪码
python tools\pseudo_stats.py <模块目录> <输出目录>                          # 单模块 + 指标
python tools\pseudo_all.py                                                # 全量 + 汇总表
```
