# native `inflateGzipPayloadWithZlib` 函数体还原

> 2026-10-15。方法：**切片 ELF + Ghidra 定向分析 + 结构体类型标注 + 表驱动改写**（见 `APPENDIX_B_pseudocode.md`）。
> 本文给出**函数体级的还原结论与全部证据**。
> 分级：🔒 确定（有二进制证据）｜🔍 确证（多路互证）｜💡 推断

---

## 0. 一句话结论 🔒

`0x520f14`（7096 B，`snap::valdi_modules::dil_compiler::(anonymous)::inflateGzipPayloadWithZlib`）
= **zlib 的 `inflateInit2_(strm, 31, …)` 被内联 + zlib 完整的 `inflate()` 状态机被内联**。

不是"某个自己写的解压器"，而是 **zlib 原样链入**（函数体里是 zlib 的 `strm->msg` 原文、`inflate_mode` 枚举原文常量）。

## 1. 证据链：结构体逐字段吻合 🔒

反编译里初始化段出现的**每一次写入**，都能对上 zlib 的 `inflateInit2_` + `inflateReset`：

| 偏移 | 字段 | 二进制里写入的值 | 对应的 zlib 行为 |
|---|---|---|---|
| 0x00 | `strm` | `&strm` | `state->strm = strm;` |
| 0x08 | `mode` | `16180` (0x3F34) | `state->mode = HEAD;  /* to pass state test in inflateReset2() */` |
| 0x0c | `last` | 0 | `state->last = 0;` |
| 0x10 | `wrap` | **6** | `wrap = (windowBits >> 4) + 5` ⟹ **windowBits = 31** |
| 0x14 | `havedict` | 0 | `state->havedict = 0;` |
| 0x18 | `flags` | **-1** | `state->flags = -1;  /* 待判 zlib 头 */` |
| 0x1c | `dmax` | **32768** | `state->dmax = 32768U;` |
| 0x28 | `total` | 0 | `state->total = 0;` |
| 0x30 | `head` | 0 | `state->head = Z_NULL;` |
| 0x38 | `wbits` | **15** | `windowBits &= 15` ⟹ 31 & 15 = 15 |
| 0x3c | `wsize` | 0 | `state->wsize = 0;` |
| 0x40/0x44 | `whave`/`wnext` | 0 | `state->whave = 0; state->wnext = 0;` |
| 0x48 | `window` | 0 | `state->window = Z_NULL;` |
| 0x50 | `hold` | 0 | `state->hold = 0;` |
| 0x58 | `bits` | 0 | `state->bits = 0;` |
| 0x68/0x70/0x90 | `lencode`/`distcode`/`next` | 同一个指针 `&state->codes` | `state->lencode = state->distcode = state->next = state->codes;` |

**参数推论（🔒 由 `wrap`/`wbits` 反推）**：`wrap = (windowBits >> 4) + 5 = 6` 且 `wbits = windowBits & 15 = 15`
⟹ **`windowBits = 31`**，按 zlib 约定 = **只接受 gzip 头 + 校验 check 值**
（`wrap & 2` = 允许 gzip、`wrap & 4` = 校验；代码里正是 `(wrap >> 1 & 1)` 与 `(wrap & 1)` 的判断）。
这与函数名 `gunzipUtf8`、以及 `gunzipUtf8` 传入的 16 MiB 上限**完全自洽**。

另：`state = zcalloc(0, 1, 0x1bf8)` — **0x1BF8 = 7160 字节**，
与本次重建的 `inflate_state` 大小（7140 B）只差 20 字节（说明该构建的 `inflate_state` 尾部比公开版多几个字段）💡。

## 2. 状态机全貌 🔒（`inflate_mode` 枚举原文）

反编译把模式分派渲染成了 **switch**，分支值就是 zlib 的枚举值（`HEAD = 16180` 起连续）。
**28 个分支全部就位**（缺 `TYPE`/`TYPEDO` 的独立 case —— 它们走 fallthrough；`MEM`/`SYNC` 本函数内未用到）：

| 状态 | 值 | 行 | 状态 | 值 | 行 |
|---|---:|---:|---|---:|---:|
| `HEAD` | 16180 | 219 | `COPY_` | 16194 | 612 |
| `FLAGS` | 16181 | 287 | `COPY` | 16195 | 615 |
| `TIME` | 16182 | 319 | `TABLE` | 16196 | 639 |
| `OS` | 16183 | 338 | `LENLENS` | 16197 | 663 |
| `EXLEN` | 16184 | 519 | `CODELENS` | 16198 | 709 |
| `EXTRA` | 16185 | 522 | `LEN_` | 16199 | 830 |
| `NAME` | 16186 | 524 | `LEN` | 16200 | 833 |
| `COMMENT` | 16187 | 527 | `LENEXT` | 16201 | 1127 |
| `HCRC` | 16188 | 529 | `DIST` | 16202 | 1131 |
| `DICTID` | 16189 | 531 | `DISTEXT` | 16203 | 1133 |
| `DICT` | 16190 | 544 | `MATCH` | 16204 | 1137 |
| `STORED` | 16193 | 594 | `LIT` | 16205 | 1139 |
| | | | `CHECK` | 16206 | 1146 |
| | | | `LENGTH` | 16207 | 1192 |
| | | | `DONE` | 16208 | 1212 |
| | | | `BAD` | 16209 | 1214 |

## 3. zlib 宏 ↔ 二进制形态 🔒

| zlib 宏 | 二进制里的形态 |
|---|---|
| `NEEDBITS(n)` | `while (bits < n) { if (have == 0) goto inf_leave; … hold += (ulong)(*next++) << bits; bits += 8; }` |
| `PULLBYTE()` | `if (have == 0) goto inf_leave;` |
| `INITBITS()` | `hold = 0; bits = 0;` |
| `CRC2(check, word)` | `hbuf[0]=word; hbuf[1]=word>>8; check = crc32(check, hbuf, 2);` —— 伪代码里是 `local_64 = CONCAT22(…, 0x8b1f); crc32(check, &local_64, 2)`（LE 下正好是 `1f 8b`） |
| `strm->msg = "…"` | `pvVar27 = (void *)0xNNNNN;` → 改写成字符串字面量 |
| `state->mode = X` | `uVar = 0x3fXX;` / `case 0x3fXX:` |
| `updatewindow()` / `inflate_fast()` | 本构建**未内联**（`inflate_table` 是独立函数；`inflate_fast` 未出现在调用面） |

## 4. 错误信息：13 条与 zlib 原文逐字一致 🔒

从 `.rodata` 直接读出的 `strm->msg` 赋值点：

| 地址 | 字符串 | zlib 中的位置 |
|---|---|---|
| 0x4bdc9 | `incorrect header check` | HEAD（zlib 头校验失败） |
| 0x44a7b | `invalid block type` | TYPE |
| 0x380c1 | `invalid stored block lengths` | STORED |
| 0x3b1e5 | `invalid literal/lengths set` | TABLE |
| 0x41914 | `too many length or distance symbols` | TABLE |
| 0x34fe4 | `invalid bit length repeat` | LENLENS / CODELENS |
| 0x4ab44 | `invalid literal/length code` | LEN |
| 0x4bde0 | `invalid code -- missing end-of-block` | LEN |
| 0x3913e | `invalid distance code` | DIST |
| 0x34ffe | `invalid distance too far back` | MATCH（`sane` 检查） |
| 0x4789f | `incorrect length check` | CHECK（gzip 尾部） |
| 0x3c3f1 | `unknown header flags set` | FLAGS |
| 0x4788b | `invalid window size` | HEAD（zlib 头 `len` 检查） |

> 这 13 条字符串是 **zlib 独有**的措辞 —— 出现它们即等价于"实现确实是 zlib"，无需再靠符号名推断。

## 5. 还原后的代码（节选）

`HEAD` 分支（`inflate.ANNOTATED.c` 行 219–252）：

```c
case HEAD /*16180*/:
  uVar13 = state->wrap;
  if (uVar13 == 0) { state->mode = TYPEDO; goto …; }
  NEEDBITS(16);                                  /* while (bits < 16) { PULLBYTE(); hold += next++ << bits; bits += 8; } */
  if (((state->wrap & 2) == 0) || (hold != 0x8b1f)) {        /* 非 gzip 魔数 */
    if (state->head != Z_NULL) state->head->done = -1;
    if (((state->wrap & 1) == 0) || (((hold & 0xff) << 8) + (hold >> 8)) % 31 != 0) {
      strm->msg = "incorrect header check"; state->mode = BAD; goto …;
    }
    strm->msg = "unknown compression method";
    if ((hold & 0xf) != Z_DEFLATED) { state->mode = BAD; goto …; }
    len = ((hold >> 4) & 0xf) + 8;                            /* BITS(4) + 8 */
    if (state->wbits == 0) state->wbits = len;
    if (len > 15 || len > state->wbits) { strm->msg = "invalid window size"; state->mode = BAD; goto …; }
    …
  }
  /* gzip 分支： */
  state->check = crc32(0L, Z_NULL, 0);
  CRC2(state->check, hold);                                   /* hbuf = {1f, 8b} */
  INITBITS();
  state->mode = FLAGS;
```

与 zlib `inflate.c` 的 `case HEAD:` **逐语句对应**（含 `wrap & 2`、`0x8b1f`、`head->done = -1`、
`% 31`、`BITS(4) != Z_DEFLATED`、`len = BITS(4) + 8`、`if (wbits == 0) wbits = len`）。

## 6. 产出与复现

| 路径 | 内容 |
|---|---|
| `native/pseudocode/inflate.ANNOTATED.c` | **1511 行**，已改写为 `state->field` / 状态名 / 字符串形式 |
| `native/pseudocode/*.c` | 11 个函数（inflate / inflate_table / crc32 / adler32 / inflateStateCheck / zcalloc / zcfree / gunzipUtf8 / gunzipUtf8WithLimit / 两个 thunk） |
| `native/ghidra_winA.txt` | Ghidra 原始输出（含类型标注诊断） |

```powershell
# 生成切片（多段小 ELF）
python tools\elf_window.py <so> native\win_A.elf 0x520000:0x4000 0x6d9000:0x4000 0x9f000:0x2000
# 受控运行 Ghidra（堆 1200M / 峰值超 2200M 强杀）
powershell -File tools\ghidra_run_guarded.ps1 -Bat <analyzeHeadless.bat> -CmdArgs @(...) …
# 表驱动改写
python tools\ghidra_annotate.py <原始伪代码.c> <so> native\pseudocode\inflate.ANNOTATED.c
```

## 7. 第二轮：原 4 项 ❓ 已清 🔒

### 7.1 结构体尺寸**闭合**（强证据）

二进制访问 `+0x1be8 / +0x1bec / +0x1bf0` 三个 4 字节字段（= `sane` / `back` / `was`），
把 `codes` 定为 5776 B 后，结构体总长 **0x1BF8 = 7160** —— 与 `zcalloc(0, 1, 0x1bf8)` 的分配量**完全相等** ✓✓
（修正前结构体只有 7140 B，Ghidra 才会把尾部写成 `&state[1].strm + 4` 这种怪形态。）

### 7.2 `gz_header` 结构逐字段确认

`state->head`（`gz_header*`）被访问的 9 个偏移**全部**对上 zlib 的公开 `gz_header` 布局：

```c
pvVar10->head->done = 0xffffffff;   /* 0x48 */      pvVar10->head->hcrc     = …;  /* 0x44 */
pvVar10->head->time = …;            /* 0x08 */      pvVar10->head->comment  = 0;  /* 0x38 */
pvVar10->head->os   = …;            /* 0x10 */      pvVar10->head->name     = 0;  /* 0x28 */
pvVar10->head->extra = 0;           /* 0x18 */      pvVar10->head->extra_len = …; /* 0x20 */
pvVar10->head->done = 1;            /* 0x48 */
```

### 7.3 `flags` 的字节子域 = gzip 头标志位（三处全部自洽）

```c
if (((((byte *)&pvVar10->flags)[1] >> 1 & 1) != 0) && …   // bit9 = 0x200 = FHCRC  → 随后 mode = HCRC  ✓
if ((((byte *)&pvVar10->flags)[1] >> 4 & 1) == 0) { … }   // bit12 = 0x1000 = FCOMMENT → 随后 mode = COMMENT ✓
```
与 zlib 的 `flags & 0x0200`（HCRC）、`flags & 0x1000`（COMMENT）、`flags & 0x0008`（FNAME）判定一致。

### 7.4 全局常量全部解析，且发现它们是**编译器溢出槽**

| 全局 | 值 | 用法 |
|---|---|---|
| `_DAT_00031ac8` | **16180 = HEAD** | `state->mode = HEAD`；但代码里还有 `_DAT_00031ac8 = …` **写入** |
| `_DAT_00031ec0` | u64 `0xffffffff00000001` = `{1, -1}` | 对应 `state->sane = 1; state->back = -1;`（合并成一次 8B 存储） |
| `_DAT_00031698` | **9** | 用于 `lenbits`/根表位数一类 |

→ 这些 `.rodata` 全局**被当作寄存器溢出槽读写**（`_DAT_00031ac8 = (undefined4)uVar15;`），
所以改写器**只在右值位置替换**、左侧保留原名并标注"溢出槽"。

### 7.5 `inflate_fast()` **存在且被内联**（⚠️ **更正**：早先判为"不存在"是错的）

早先我按"符号表无 `inflate_fast`、常量 `0x102`(258) 出现 0 次"判定该构建关掉了快速路径 —— **错了**。
拿到 zlib **1.3.1** 源码后核对，门控在 `inflate.c:1030-1031`：

```c
        case LEN:
            if (have >= 6 && left >= 258) {
                RESTORE();
                inflate_fast(strm, out);
```

二进制里正是这段（`case LEN /*16200*/` 的开头）：

```c
case 0x3f48:                                    /* case LEN */
  if ((5 < uVar17) && (0x101 < uVar42)) {       /* have > 5 && left > 257  ⟺  have >= 6 && left >= 258 */
    *(ulong *)((long)pvVar10 + 0x50) = uVar39;  /* state->hold = hold（RESTORE 的一部分） */
```

- 编译器把 `>= 6` 写成 `5 <`、`>= 258` 写成 `0x101 <` ⟹ **`0x102` 当然不出现**（我早先选错了判据形态）
- 符号表里没有 `inflate_fast`，是因为它被**内联**（`ZLIB_INTERNAL` + 单调用点，`-O2`/LTO 下必然内联）；
  `inffast.c` 的位填充特征在函数体里可见（`bits < 0xf` 出现 3 次 ✓，源码 `inffast.c:105/136`）
- `lmask`/`dmask` 在源码里是**算出来的**（`lmask = (1U << state->lenbits) - 1`），故找不到 `0x1ff` 字面量 —— 与"已内联"一致
- Valdi 的 `third-party/zlib/zlib.BUILD` 的 `srcs` 里**明确含 `inffast.c`** ✓

### 7.7 版本锁定：**zlib 1.3.1**（madler 官方源码，C 语言）🔒

两条独立来源互相印证：

1. **Valdi 仓库钉的依赖**（`Valdi/dependencies.bzl:318-323`）：
   ```
   name = "zlib",  strip_prefix = "zlib-1.3.1",
   url = "https://github.com/madler/zlib/releases/download/v1.3.1/zlib-1.3.1.tar.xz"
   ```
   （另有 `zlib_chromium` / `zlib_skia`，是给 Web/Skia 用的，与本模块无关。）
2. **本机一份未改动的 zlib 源码**（Ghidra 自带：`Ghidra/Features/Decompiler/src/decompile/zlib/`），
   其 `zlib.h` 为 `#define ZLIB_VERSION "1.3.1"` / `ZLIB_VERNUM 0x1310` —— 与上一条**同版本**。

**结构性闭合**：`inftrees.h` 的 `#define ENOUGH (ENOUGH_LENS + ENOUGH_DISTS) = 852 + 592 = 1444`
⟹ `codes[1444] × 4 = 5776` 字节 —— **正是二进制里量到的值**；加上前置字段后
`sizeof(struct inflate_state) = 7160 = 0x1BF8` = `zcalloc(0, 1, 0x1bf8)` ✓✓✓

参考源码已入库：**`native/zlib-1.3.1/`**（15 个文件 / 252 KB，含 `inflate.c` / `inflate.h` /
`inffast.c` / `inffast.h` / `inftrees.c` / `inftrees.h` / `zlib.h` / `zconf.h` 等）。

### 7.8 源码行号地图（逐行对齐用）🔒

| 组件 | zlib 1.3.1 源码位置 |
|---|---|
| `inflateStateCheck` | `inflate.c:98` |
| `inflateReset` / `inflateReset2` / `inflateInit2_` | `inflate.c:134` / `145` / `182` |
| `inflate()` | `inflate.c:594` |
| 状态机各 case | `HEAD`626 `FLAGS`675 `TIME`695 `OS`704 `EXLEN`715 `EXTRA`729 `NAME`753 `COMMENT`775 `HCRC`796 `DICTID`814 `DICT`820 `TYPE`828 `TYPEDO`831 `STORED`867 `COPY_`882 `COPY`885 `TABLE`902 `LENLENS`921 `CODELENS`943 `LEN_`1027 `LEN`1030 `LENEXT`1080 `DIST`1091 `DISTEXT`1119 `MATCH`1136 `LIT`1181 `CHECK`1187 `LENGTH`1212 `DONE`1226 `BAD`1229 `MEM`1232 `SYNC`1234 |
| 快速路径门控 / `inflate_fast` | `inflate.c:1030-1031` ／ `inffast.c:54`（`dolen:`112、`dodist:`143） |
| `inflate_table` | `inftrees.c:36`（阶段：累计长度 105、过订阅/不完整检查 129、生成偏移 139、排序 144、建表 214、`ENOUGH` 守卫 208/277） |

**`inflate_table()` 的结构级确认**（`native/pseudocode/00523514_inflate_table.c`，213 行）：

| 二进制里的证据 | 值 | 对应 1.3.1 源码 |
|---|---|---|
| 立即数 `0x354` | **852** | `ENOUGH_LENS` ✓ |
| 立即数 `0x250` | **592** | `ENOUGH_DISTS` ✓ |
| 立即数 `0xf` | 15 | `MAXBITS` ✓ |
| 4 个相邻数据地址 `0xae858/0xae896/0xae8d4/0xae914` | — | `inftrees.c` 的静态表 `lbase[]`/`lext[]`/`dbase[]`/`dext[]` ✓ |

⟹ **`inflate_table()` 即 zlib 1.3.1 的 `inftrees.c:inflate_table`**，其各阶段可按上表在 213 行伪码里定位。

### 7.6 改写覆盖率（`inflate.ANNOTATED.c`）

| 项 | 处数 |
|---|---:|
| `inflate_state` 字段（含 `lens[]`/`work[]` 下标、`flags` 子域） | **264** |
| `gz_header` 字段 | 9 |
| 状态常量 → 状态名 | 81 |
| 字符串字面量 | 20 |
| 全局常量 | 11 |
| 标签 `LAB_…` → `L_<状态>_<序号>` | 115 |
| **剩余 `((long)… + …)` 形态** | **3**（同一处变量下标的数组写法，未覆盖） |

## 8. 仍未做的（真正的边界）

1. ✅ **已完成**：`inflate_table()` 的逐语句对齐 —— 见 **`RECON_inflate_table.md`**
   （213 行伪码 ↔ `inftrees.c:36-303` 逐语句一一对应；四张静态表**数据级**验证通过）
2. ✅ **已完成**：`inflate()` **本体**的逐语句对齐（分 3 轮）—— 见 **`RECON_inflate_body.md`**
   （源码 594-1267 ↔ 伪码 1-1512；`HEAD`…`SYNC` 与 `inf_leave` 全部对齐，含 10 类"指纹"验证）
3. 剩余 3 处偏移形态；`L_<状态>_<序号>` 是**位置命名**，未映射到 zlib 的 `inf_leave`/`bad` 语义标签
4. ✅ 内联边界已确认：`inflate_fast()`（LEN 段 294 行）、`fixedtables()`、`updatewindow()` 均**内联**；
   而 `inflate_table()` / `inflateStateCheck()` 保持**独立符号**
5. ✅ **已完成**：**内联的 `inflate_fast()`** 逐语句对齐 —— 见 **`RECON_inffast.md`**
   （`inffast.c:54-300` ↔ 伪码 842-1135；局部装载/主循环/窗口复制三情形/尾部回写全部对应）
6. ✅ **已完成：真机运行时验证** —— 见 **`RECON_inflate_realtime.md`**
   （设备 APK 哈希 = 本地 + 运行时函数首字节 = 本地文件；按还原的 4 参 ABI 调用，
   gzip→原文**逐字节一致**；16 MiB 上限即调用时所用值。另实测出返回字符串布局
   `{?@0, size@8, data@16}` ≠ libc++ `std::string`，更像 Valdi 自有字符串类型。）

## 9. 改写器覆盖率（`inflate.ANNOTATED.c` 最终态）与语义标签

### 9.1 覆盖率：偏移访问**清零**

| 项 | 处数 |
|---|---:|
| `inflate_state` 字段（含 `lens[]`/`work[]` 下标与常量下标、`flags` 字节子域） | **275** |
| `gz_header` 字段 | 9 |
| 状态常量 → 状态名 | 81 |
| 字符串字面量（`.rodata` 直读） | 20 |
| 全局常量（`_DAT_*`） | 11 |
| 标签（位置名 + 语义名） | 159 |
| **剩余 `((long)… + …)` 形态** | **0** ✓ |

三种难形态（都已解决，记下来备查）：
1. **索引表达式内部也含 `* 2 + 0x…`**（如 `lens[order[i]]` = `*(u16 *)((long)X + (ulong)*(u16*)(i*2+0xabbb0) * 2 + 0x98)`）
   → 索引匹配必须**贪婪**（非贪婪会咬到内层偏移，导致处理器拒绝改写）
2. **跨行折行**（Ghidra 按行宽折断，`*(undefined2 *)` 与 `((long)…` 之间换行）→ 模式需容许 `\s*`
3. **裸地址实参**（`(long)X + 0x90` 作为 `inflate_table` 的 `code **table` 实参）→ 改写为 `&X->next`；
   终结符须容许 `,`（多实参调用）

⟹ 最终三处 `inflate_table` 调用与源码逐参对应：

```c
/* 伪码 */  inflate_table(0, lVar2, 0x13, &state->next, &state->lenbits, &state->work);
/* 源码 */  inflate_table(CODES, state->lens, 19, &(state->next), &(state->lenbits), state->work);
/* 伪码 */  inflate_table(2, lVar2 + nlen*2, ndist, …);
/* 源码 */  inflate_table(DISTS, state->lens + state->nlen, state->ndist, …);
```

### 9.2 语义标签（规则驱动、可复核）

`tools/ghidra_annotate.py` 第 7 步按"块内容"分类命名，现已生效：

| 语义名 | 规则 | 出现 |
|---|---|---|
| `caseD_<状态名>` | 跳转表 per-case 入口 `switchD_…_caseD_<hex>` → 用 `inflate_mode` 表反查 | **10 个**（TIME/EXTRA/COMMENT/HCRC/TYPE/COPY_/LEN_/DIST/MATCH/DONE/BAD） |
| `inf_leave` | 块内含 `data_type =`（源码 `inflate.c:1246` 起） | 1 |
| `set_msg_bad` | 块内 `strm.msg = …` + `mode = BAD`（zlib 的报错三连） | 1 |
| `init_fail_free_state` | 块内 `zcfree(); strm.state = NULL`（`inflateInit2_` 失败清理） | 1 |
| `valdi_throw_<文案>` | 块内调用 `func_0x006a6450`（`Valdi::Exception` 构造） | **2** |
| `updatewindow_tail` | 块内更新 `whave` 且涉 `avail_out` | 1 |
| `return_epilogue` | 块内含 `OUTLINED_FUNCTION_*`（外提共享尾声） | 1 |
| `L_<所在状态>_<序号>` | 其余（同 case 内的内部块，位置命名） | 29 |

### 9.3 🔒 两条 **Valdi 层异常文案**（本模块的用户可见错误）

从 `.rodata` 直读 `Valdi::Exception` 构造处的字符串参数：

| 地址 | 文案 | 触发点 |
|---|---|---|
| `0x4ff53` | **`"Failed to initialize gzip inflater"`** | `inflateInit2_` 返回值非 OK 时（伪码 `L_pre_1` / `valdi_throw_Failed_to_initialize_gzip_in…`） |
| `0x4ed5b` | **`"Failed to inflate gzip widget state"`** | `inflate()` 返回数据错误时（伪码 `L_pre_5` / `valdi_throw_Failed_to_inflate_gzip_widge…`） |

→ 这两条就是 `dil_compiler` 解压 widget state 失败时**抛给 JS 侧**的错误文案
（调用点：`dil_compiler/src/CompressedWidgetState.js`），与 `gunzipUtf8` 的 TS 契约呼应。
