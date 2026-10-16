# 内联的 `inflate_fast()` 逐语句对齐（native `0x520f14` 的 `LEN` 段）

> 2026-10-16。左侧 = `native/pseudocode/inflate.ANNOTATED.c` 的 **`LEN` case 段（伪码 842-1135，294 行）**；
> 右侧 = **官方 zlib 1.3.1** `native/zlib-1.3.1/inffast.c:54-300`（`inflate_fast()`）+ `inflate.c:1030-1038`（门控）。
> 结论：**`inflate_fast()` 被内联，且逐语句对得上** ✓

---

## 0. 结论与结构

`LEN` case 的 294 行**不是一段代码，而是三段**（编译器把内联函数与调用点合并了）：

| 段 | 伪码行 | 源码 | 内容 |
|---|---|---|---|
| **A. 门控 + RESTORE + LOAD** | 843-845 | `inflate.c:1031-1037` | `if (have >= 6 && left >= 258) { RESTORE(); inflate_fast(…); LOAD(); … }` |
| **B. 内联的 `inflate_fast()`** | 846-~1090 | **`inffast.c:54-300`** | 局部装载 → 主循环（`dolen`/`dodist`）→ 窗口复制 → 尾部回写 |
| **C. `LEN` 慢路径** | ~1090-1135 | `inflate.c:1039-1078` | `back = 0` → 逐符号查表 → `LIT`/end-of-block/`LENEXT` |

## 1. 段 A：门控与 RESTORE（伪码 843-845 ↔ inflate.c:1031-1037）🔒

```c
/* 伪码 */
843: if ((5 < uVar17) && (0x101 < uVar42)) {     /* have > 5 && left > 257  ⟺  have >= 6 && left >= 258 */
844:   state->hold = hold;                        /* RESTORE() */
845:   state->bits = bits;                        /* RESTORE() */
```
⟹ 与 `inflate.c:1031` 的 `have >= 6 && left >= 258` 严格等价（编译器改写成 `> 5` / `> 257`）。
这也解释了为什么常量 `0x102`(258) 在伪码里**不出现**（见 `RECON_inflate.md §7.5`）。

## 2. 段 B：`inflate_fast()` 的局部装载（伪码 846-854 ↔ inffast.c:82-100）🔒🔒

| 伪码 | inffast.c | 对应语句 |
|---|---|---|
| 846 | 99 | `lmask = (1U << state->lenbits) - 1`（`uVar14 = state->lenbits`） |
| 847 | 100 | `dmask = (1U << state->distbits) - 1` |
| 848 | 91 | `wsize = state->wsize` |
| 849 | 92 | `whave = state->whave` |
| 850 | 93 | `wnext = state->wnext` |
| 851 | 94 | `window = state->window` |
| 853 | 97 | `lcode = state->lencode` |
| 854 | 98 | `dcode = state->distcode` |

（`hold`/`bits` 在 844-845 已从 `state` 取；`in`/`out`/`beg`/`end` 来自 `strm->next_in/next_out` 与 `start`）

**边界常量也对上了**（inffast.c:84/87）：

| inffast.c | 语义 | 伪码 |
|---|---|---|
| `last = in + (strm->avail_in - 5)` | 输入上界留 5 字节余量 | 常量 `5` |
| `end = out + (strm->avail_out - 257)` | 输出上界留 257 字节余量 | 常量 **`0x101`(257)** ✓（LEN 段出现 1 次，且与门控的 `> 257` 同源） |

## 3. 段 B：主循环（`dolen` / `dodist`）🔒

| inffast.c | 语义 | 伪码证据 |
|---|---|---|
| 104-110 | `do { if (bits < 15) { 连续两次 8 位填充 } here = lcode + (hold & lmask);` | **`bits < 0xf` ×3** ✓✓（源码 105、136 两处 + 结构性第三处） |
| 111-116 | `here = lcode + (hold & lmask)` → `op = here->bits; hold >>= op; bits -= op; op = here->op;` | 伪码 921-922 / 938 的 **`lencode + (~(-1 << (lenbits & 0x1f)) & …)`** ✓✓ |
| 117-122 | `op == 0` → **literal** `*out++ = here->val` | ✓ |
| 123-135 | `op & 16` → **length base**：`len = here->val`；`op &= 15`；按 `op` 有额外位 → `len += hold & ((1U<<op)-1)` | `>> 4 & 1`（= `op & 16`）✓、`~(-1 << …)` = `((1U<<op)-1)` ✓ |
| 136-142 | 再次 `if (bits < 15)` 双倍填充 → `here = dcode + (hold & dmask)` | `bits < 0xf` ✓、伪码 1015-1016 **`distcode + (~(-1 << (distbits & 0x1f)) & …)`** ✓✓ |
| 143-158 | `dodist:` → `dist = here->val`；`op &= 15`；按 `op` 补位（最多两次 8 位） | ✓ |
| 159-166 | `dist += hold & ((1U<<op)-1)`；**`#ifdef INFLATE_STRICT`：`dist > dmax` → `"invalid distance too far back"`** | 字符串 `0x34ffe` ✓ |
| 267-275 | `(op & 64) == 0` → 二级距离码 `goto dodist`；否则 `"invalid distance code"` | **`>> 6 & 1`**（= `op & 64`）✓✓、字符串 `0x3913e` ✓ |
| 277-290 | `(op & 64) == 0` → 二级长度码 `goto dolen`；`op & 32` → **end-of-block**（`mode = TYPE`）；否则 `"invalid literal/length code"` | `>> 6 & 1`、**`>> 5 & 1`**（= `op & 32`）✓✓、字符串 `0x4ab44` ✓ |

> **位测试的渲染**：AArch64 的 `tbz`/`tbnz` 被 Ghidra 渲染成 `>> n & 1`，所以
> `op & 64` / `op & 32` / `op & 16` 在伪码里是 `>> 6 & 1` ×3 / `>> 5 & 1` ×2 / `>> 4 & 1` ×1，
> **不以 `0x40`/`0x20`/`0x10` 字面量出现** —— 这解释了"常量稀缺"的现象，不是漏解。

## 4. 段 B：窗口复制（伪码 1093-1108 ↔ inffast.c:170-239）🔒🔒

伪码里这一段是**最长的连续字段访问群**，与源码三种情形一一对应：

| inffast.c | 语义 | 伪码 |
|---|---|---|
| 170-173 | `op = out - beg;`（输出内可用距离）`if (dist > op) { op = dist - op; if (op > whave) {` | `if ((pvVar10->whave < uVar14) && …` （1093）✓ |
| 174-178 | `if (state->sane) { strm->msg = "invalid distance too far back"; mode = BAD; }` | `(pvVar10->sane != 0)` → 同字符串（1094）✓✓ |
| 200-202 | `from = window; if (wnext == 0) { from += wsize - op; … }` | `uVar25 = state->wnext;`（1098）、`uVar25 = state->wsize - uVar33;`（1104）✓✓ |
| 208 / 219 / 226 / 237 | `from = out - dist;`（"rest from output"） | `pbVar29 = (byte *)(pvVar10->window + uVar25);`（1108）等 ✓ |
| 240-250 | `while (len > 2) { *out++ = *from++; ×3; len -= 3; } if (len) { … }` | 3 字节展开复制循环 ✓ |
| 252-265 | `else { from = out - dist; do { *out++ = *from++; ×3; len -= 3; } while (len > 2); … }` | ✓（`} while (` 命中 ×1） |
| 180-198 | `#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR` 的填零路径 | 属性由 `sane` 判定；该宏分支代码在伪码中未单独出现（未定义该宏）✓ |

## 5. 段 B：尾部回写（inffast.c:~292-300）🔒

| inffast.c | 伪码 |
|---|---|
| `state->hold = hold; state->bits = bits;` | `state->hold =` / `state->bits =` 各 1 次（与 844-845 的 RESTORE 分别计数 → 共 2 次） ✓ |
| `strm->next_in += in - (unsigned long)(strm->next_in …)`、`strm->avail_in -= …`、`next_out`/`avail_out` 同步 | `strm.next_out = pbVar36 + 1;`（伪码 914）等 ✓ |
| 回到 `inflate.c:1034-1037`：`LOAD(); if (state->mode == TYPE) state->back = -1;` | 伪码 1093 之前的 `back` 赋值群 ✓（`back/was` 在 LEN 段共 11 处） |

## 6. 段 C：`LEN` 慢路径（伪码 ~1090-1135 ↔ inflate.c:1039-1078）

与 `RECON_inflate_body.md §11.1` 已对齐的内容相同（`back`/`was`/`lencode`/`lenbits`/`extra`/`length` 等）。
**注意**：慢路径与内联的 fast 路径**共享同一段伪码空间**（编译器把两者都放在 `LEN` case 里），
按源码顺序即可区分：fast 路径在前（门控成立时才走），慢路径在后（门控不成立时走）。

## 7. 结论与局限

**结论**：native 侧最后一个实质代码块也完成逐语句对齐 ——
`inflate_fast()`（`inffast.c:54-300`）在二进制里**被内联进 `LEN` case**，且
①局部装载（8 个字段）②主循环（`dolen`/`dodist` + 位填充）③窗口复制三情形 ④尾部回写
**全部逐语句对应**，并有 5 类指纹支撑（`bits < 0xf`、`0x101`(257) 余量、
`~(-1<<n)` 掩码、`>> 5/6 & 1` 位测试、`0x34ffe` 等字符串）。

**局限**：
1. 内联后 fast 路径与慢路径**共享**一段伪码空间，两者边界在伪码里靠"门控块"分隔，
   没有独立函数边界（所以无法像 `inflate_table` 那样给出"函数级"行区间）
2. 该构建**未定义** `INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR`（填零路径不存在）——
   与 `dil_compiler` 只需正确数据的用途一致
3. 剩余的 3 处偏移访问形态与 `L_<状态>_<序号>` 位置命名（全局性小项，见 `RECON_inflate.md §8`）
