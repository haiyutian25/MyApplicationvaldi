# C 阶段报告：QuickJS 字节码逆向（Stage 1 完成）

- 目标：把引擎层模块的 QuickJS 预编译字节码变成可读结构
- 依据：本仓库 vendored 的 QuickJS 源码（`third-party/quickjs/src/quickjs/`），**不是猜的**
- 日期：2026-10-15 ｜ 分级：🔒 确定 ｜ 🔍 确证 ｜ 💡 推断 ｜ ❓ 未知

---

## 0. 结论

| 项 | 结果 |
|---|---|
| 容器格式 | 🔒 **完全逆向**，与 QuickJS 源码逐字段对应 |
| 解析器 | `tools/qjs_bc.py`（Stage 1：头部 + 对象图 + 函数元数据） |
| 全量验证 | 🔒 **1051/1051 文件字节级完全对齐，0 失败**（8.53 MB 字节码） |
| 提取成果 | **10,387 个函数**（名称/参数/局部变量/闭包变量/常量池/字节码长度），其中 9,440 个函数带具名局部变量 |
| 操作码级反汇编 | ✅ **完成**（Stage 2，见 §5）：**1,374,398 条指令**，结构 100% 字节精确 |

---

## 1. 格式规格（源码依据 → 实现）

`.valdimodule` 内 `.js` 条目 = `u32 magic(0x0100C634)` + 以下负载：

| 段 | 编码 | 源码依据 |
|---|---|---|
| 版本 | `u8`（实测 = `0x01`，即 `BC_BASE_VERSION`，未启用 BIGNUM） | `quickjs.c:32747` |
| 原子数 | `leb128` | `JS_WriteObjectAtoms` `quickjs.c:33512` |
| 原子表 | 逐条 `leb128((len<<1) \| is_wide)` + 内容（wide 时按 UTF-16LE） | `JS_WriteString` `quickjs.c:32966` |
| 对象图 | `u8 tag` 起，tag 枚举 1=null 2=undefined 3/4=bool 5=int32(sleb) 6=float64 7=string **14=函数** 15=module …20=ObjectValue 21=ObjectReference | `BCTagEnum` `quickjs.c:32722` |
| 原子引用 | `leb128(idx<<1)`；奇数 = tagged int 原子 | `bc_put_atom` `quickjs.c:32858` |
| 函数体 | `u16 flags`（11 个位域，bit10 = has_debug）→ `u8 js_mode` → `atom 函数名` → `leb×7`（arg/var/defined_arg/stack/closure/cpool/bytecode_len）→ `leb local_count` → 局部变量表（atom 名 + scope_level + scope_next + u8 flags）→ 闭包变量表 → **字节码原始体**（原子操作数已替换为 32 位索引） → `has_debug ? atom 文件名 + leb 行号 + leb pc2line_len + bytes` → `cpool_count` 个嵌套对象 → `u32` | `JS_WriteFunctionTag` `quickjs.c:33115`、`JS_ReadFunctionTag` `quickjs.c:34005` |

**原子表被写在最前面**（虽然写入端先写对象图，随后 `JS_WriteObjectAtoms` 把原子表 memmove 到开头，`quickjs.c:33519-33527`）——这正是观测到的字节顺序。

---

## 2. 一个必须标定的坑（重要）

**动态原子基准不能直接用仓库里的 `quickjs-atom.h` 条目数。**

- 仓库 `quickjs-atom.h` 有 225 条 `DEF`，故 `JS_ATOM_END = 226`
- 但**实测所有模块的基准都是 215**（差 11）
- 💡 推断：产出这批字节码的编译器所用 QuickJS 构建，其预定义原子集比当前仓库版本少 11 个（该 fork 的原子表随版本演进过）

**解法（已实现）**：模块根函数的 `debug.filename` 必然指向动态原子 0（即模块路径），因此 `base = 该字段原始值 / 2`。自动标定后，arg 名、局部变量名、文件名**全部正确**。🔒

标定前后对比（`dil_core/src/DILActionDispatcherContext.js`）：

```
标定前: name=Symbol.unscopables  locals: Symbol.replace, Symbol.search, Symbol.split  debug=Symbol.matchAll
标定后: name=<eval>              locals: require, module, exports                      debug=dil_core/src/DILActionDispatcherContext
```

---

## 3. 现在能读出什么（Stage 1 可读度）

对每个文件：**精确原子表**（业务标识符）、**完整函数清单**，示例（`dil_core/src/DILComponent.js`，124 原子 / 37 函数 / 12655 B 完全对齐）：

```
(0) name=<atom:0> args=3 vars=0 closure=0 cpool=0 bc=56B debug=Y
    locals: require, module, exports
...
```

`dil_widgets/src/DILProductAnalytics.js` 的根函数：
```
args=3  closure=8
locals: i, d, c, u, a, __esModule, enrichDILProductShownEvent,
        coreutils/src/url, foundation/src/uuid, valdi_core/src/Device, ./DILProductAnalyticsMetadata, …
closure: module, require, dil_widgets/src/DILProductAnalytics
```
→ 函数作用域、依赖、导出名一次性可见 🔒

---

## 4. 产物

| 路径 | 内容 |
|---|---|
| `structures/*.struct.txt`（14 份，共 ~8.9 MB） | 各模块逐文件：原子表 + 函数清单（名称/参数/局部/闭包/常量池/字节码长度） |
| `structures_report.txt` | 批量导出统计 |
| `tools/qjs_bc.py` | Stage-1 解析器（含自动标定），可 `--atoms/--json` |
| `tools/dump_structures.py` | 批量结构导出 |
| `tools/hex_at.py` | 头部定位 + 十六进制核对 |

覆盖：11 个 `dil_*` + `widgets` + `valdi_core` + `foundation` = **1051 文件 / 10387 函数**。

复现：
```powershell
python tools\qjs_bc.py <某个预编译 .js>          # 单文件
python tools\dump_structures.py <模块目录> <输出目录>   # 批量
```

---

## 5. Stage 2：操作码级反汇编（已完成）

### 5.1 成果

| 指标 | 值 |
|---|---|
| 反汇编文件 | 2124 |
| 函数 | 29454 |
| **指令** | **1,374,398** |
| 结构校验（指令流恰好走完字节码） | 🔒 **100.00%（0 走不完 / 0 invalid / 0 越界）** |
| 产物 | `disasm/*.disasm.txt`（86 份，51.5 MB） |

操作码表、短操作码重映射、操作数宽度全部取自本仓库 vendored QuickJS 源码，未做任何猜测。

### 5.2 反汇编可读性示例

`dil_math/src/renderMathSvg.js`（派生类构造函数，含 `super()` 与类字段初始化）：

```asm
-- fn name=<atom:0> args=2 vars=3 closure=2 cpool=0 bc=164B
   locals: t, e, this.active_func, new.target, this
   closure: <class_fields_init>, MathSvgRenderError
     0  special_object 2
     2  put_loc0 0: t
     3  special_object 3
     5  put_loc1 1: e
     6  set_loc_uninitialized 2: this.active_func
     9  check_ctor
    10  get_loc0 0: t
    11  get_super
    12  get_loc1 1: e
    13  get_arg1 1: e
    14  call_constructor #args=1
    17  dup
    18  put_loc_check_init 2: this.active_func
    21  get_var_ref_check 0: <class_fields_init>
    24  dup
    25  if_false8 -> 0022
```

模块 Prologue（CommonJS/ESM 互操作）也能完整读出：

```asm
     0  get_var Object
     5  get_field2 defineProperty  ;+28B
    38  get_arg0 0: require
    39  push_atom_value __esModule
    44  object
    45  push_0 0
    46  lnot
    47  define_field value
    52  call_method #args=3
    55  return_undef
```
≡ `Object.defineProperty(require, "__esModule", { value: true })`

### 5.3 Stage 2 踩到的 4 个坑（均已解决，🔒）

| # | 坑 | 事实与解法 |
|---|---|---|
| 1 | `JS_IC_SIZE` 未知 | `JS_PropCache_tsn` 是 `packed` 结构体（`quickjs.h:702-707`）→ **28**；`get_field*` 的 size = 28+5 |
| 2 | `CONFIG_BIGNUM` | 该宏影响**两条操作码**（`mul_pow10`/`math_mod`）是否存在，进而决定其后全部编号。实测**关闭**：开启时干净走完率 87.4%，关闭后 **100%** |
| 3 | size 表达式求值 | `put_field` 的 size 写作 `5 + sizeof(uint32_t)`，直接 `eval` 会因 `uint32_t` 未定义而退化成 1 → 需先把 `sizeof(...)` 正则替换为 4 |
| 4 | 预定义原子名偏移 | 字节码内原子操作数**不做 `<<1`**（≠ 元数据编码）；且产出字节码的构建比仓库 `quickjs-atom.h` 少 5 条 Intl/bignum 相关原子 → **id ≥ 141 需 +5 校正**（实证：`get_var 145` 语义为 `Object`＝仓库 id 150）。校正后高频预定义原子全部语义自洽：`value`/`Object`/`defineProperty`/`Array`/`String`/`Number`/`Math`/`concat`/`enumerable` |

### 5.4 已知边界

- `obj[5]` 这类 **tagged int 原子**（值 = `(5<<1)|1`，很小且为奇数）与低编号预定义原子存在理论歧义，当前按预定义原子解释（❓ 影响面极小）
- 内联缓存槽（`;+28B`）在静态字节码中是零填充，不参与语义

### 5.5 工具

| 脚本 | 用途 |
|---|---|
| `tools/qjs_disasm.py` | 单文件反汇编（`--bytes/--max-funcs`） |
| `tools/dump_disasm.py` | 批量反汇编导出 |
| `tools/validate_disasm.py` | 全量结构校验（干净走完率 / invalid 率 / 越界） |
| `tools/diag_ops.py` / `diag_case.py` | 错位诊断（定位 size 偏小的操作码） |
| `tools/top_atoms.py` | 高频原子统计，用于人工核查映射 |
