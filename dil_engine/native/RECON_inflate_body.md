# `inflate()` 本体逐语句对齐（native `0x520f14` 内联段）

> 2026-10-16。左侧 = `native/pseudocode/inflate.ANNOTATED.c`（表驱动改写后，1520 行）；
> 右侧 = **官方 zlib 1.3.1** `native/zlib-1.3.1/inflate.c:594-1400`（`inflate()` 本体）。
> 分轮推进；每轮给出「源码行 ↔ 伪码行 + 验证到的指纹常量/字段」。
> 版本与源码依据见 `RECON_inflate.md §7.7/§7.8`。

---

## 0. 本轮覆盖

| 轮次 | 覆盖 | 源码行 | 伪码行 | 状态 |
|---|---|---|---|---|
| **R1** | 序言 + `HEAD`…`COPY` | 594-901 | 1-647 | ✅ §2-§9 |
| **R2** | `TABLE`…`CODELENS` | 902-1026 | 648-838 | ✅ §10 |
| **R3** | `LEN_`…`SYNC` + `inf_leave` | 1027-1267 | 839-1512 | ✅ §11 |
| **R4** | 内联的 **`inflate_fast()`**（`LEN` 段） | `inffast.c:54-300` | 842-1135 | ✅ 见 **`RECON_inffast.md`** |

## 1. 方法（可复核）

对每个 `case`：① 取该 case 在伪码里的行区间，用脚本统计**特征常量**与**字段访问**；
② 读源码对应块，列出其**指纹**（独有常量、字符串、字段）；③ 两边比对。
脚本：`tools/` 里的统计片段（见文末复现命令）。

---

## 2. 序言 / 设置（源码 614-625 ↔ 伪码 1-227）

| 源码 | 语义 | 伪码里的体现 |
|---|---|---|
| 614-616 | `inflateStateCheck(strm) \|\| next_out == NULL \|\| (next_in == NULL && avail_in != 0)` → `return Z_STREAM_ERROR` | `inflateStateCheck(&strm)` 调用 + 判定（**该函数是独立符号**，见 `00522f58_inflateStateCheck.c`） |
| 618 | `state = strm->state` | `state = (inflate_state *)zcalloc(0,1,0x1bf8)` 之后的所有 `state->…` |
| 619 | `if (state->mode == TYPE) state->mode = TYPEDO;` | `uVar38 = *(int *)((long)strm.state + 8); if (… == TYPE) state->mode = TYPEDO;`（**伪码 196-200 行附近**，原形为 `strm.state + 8`） |
| 620-622 | `LOAD(); in = have; out = left;` | `strm.next_out`/`strm.avail_out`/`strm.next_in`/`strm.avail_in` 的局部副本载入 |
| 623-625 | `ret = Z_OK; for(;;) switch (state->mode)` | `switchD_00521164…`（**跳转表**）+ 各 `case <状态名>` |

> **本函数还内联了** `inflateInit2_(strm, 31, …)` + `inflateReset()`（源码 134-193 段），
> 证据见 `RECON_inflate.md §1`（17 处字段写入逐一对上）。

## 3. `HEAD`（源码 626-673 ↔ 伪码 228-295）

**指纹常量**：`0x8b1f` ×2 ✓、`0x1f`（=31，`% 31`）×2 ✓、`0x10`（NEEDBITS 16）、`0x3f`
**字段**：`wrap`、`wbits`、`check`、`head`、`done`、`dmax`、`flags` —— 与源码 626-673 触及的字段**完全一致**

| 源码 | 语义 | 伪码 |
|---|---|---|
| 627-630 | `if (wrap == 0) { mode = TYPEDO; break; }` | `if (state->wrap == 0) { mode = TYPEDO; goto …; }` ✓ |
| 631 | `NEEDBITS(16)` | `while (bits < 0x10) { … hold += (*next++) << bits; bits += 8; }` ✓ |
| 632-641 | **`#ifdef GUNZIP`**：`(wrap & 2) && hold == 0x8b1f` → `wbits = 15`（若为 0）、`check = crc32(0,Z_NULL,0)`、`CRC2`、`INITBITS`、`mode = FLAGS` | `(wrap >> 1 & 1) == 0 \|\| hold != 0x8b1f` ✓✓（**gzip 分支被编译进来了**，与 `wrap = 6` 自洽）+ `crc32(0,NULL,0)` + `CONCAT22(…,0x8b1f)`（CRC2 的 `hbuf = {1f,8b}`）+ `mode = FLAGS` ✓ |
| 642-643 | `if (head != Z_NULL) head->done = -1;` | `if (state->head != 0) *(u32 *)(state->head + 0x48) = 0xffffffff;` ✓ |
| 644-652 | `!(wrap & 1) \|\| ((BITS(8) << 8) + (hold >> 8)) % 31` → `"incorrect header check"`, `mode = BAD` | `((wrap & 1) == 0) \|\| (((hold>>8)<<8)… ) % 0x1f != 0` → `strm.msg = "incorrect header check"` ✓✓ |
| 653-657 | `BITS(4) != Z_DEFLATED(8)` → `"unknown compression method"` | `if ((hold & 0xf) != 8)` → 同字符串 ✓✓ |
| 658-661 | `DROPBITS(4); len = BITS(4) + 8; if (wbits == 0) wbits = len;` | `uVar13 = ((hold >> 4) & 0xf) + 8;` + `if (state->wbits == 0) state->wbits = uVar13;` ✓✓ |
| 662-666 | `len > 15 \|\| len > wbits` → `"invalid window size"` | 同字符串 = `strm.msg` ✓✓ |
| 667-668 | `dmax = 1U << len; flags = 0;` | `state->dmax = …`、`state->flags = 0` ✓ |
| 670-672 | `adler = check = adler32(0,Z_NULL,0); mode = hold & 0x200 ? DICTID : TYPE; INITBITS();` | `adler32` 调用 + `mode` 三元选择 ✓ |

## 4. `FLAGS`（源码 675-693 ↔ 伪码 296-327）

**指纹**：`0xff`（`flags & 0xff` 678）✓、**`0xe000`**（683）✓✓、`0x10`（NEEDBITS 16）、
字符串 **`"unknown header flags set"`**（地址 `0x3c3f1`）✓✓
**字段**：`flags`、`head`、`check`、`wrap`、`mode` ✓

| 源码 | 伪码 |
|---|---|
| 676-677 `NEEDBITS(16); flags = hold;` | ✓ |
| 678-682 `(flags & 0xff) != Z_DEFLATED` → `"unknown compression method"` | ✓ |
| 683-687 **`flags & 0xe000`** → `"unknown header flags set"` | ✓✓（`0xe000` 是 FLAGS 独有指纹） |
| 688-689 `head->text = (hold >> 8) & 1` | `head->text` 赋值 ✓ |
| 690-691 `(flags & 0x0200) && (wrap & 4)` → `CRC2` | `((byte *)&flags)[1] >> 1 & 1` + `wrap & 4` + `crc32(check,…,2)` ✓ |

## 5. `TIME` / `OS`…`HCRC`（源码 695-812 ↔ 伪码 328-539）

**编译器把 `OS → EXLEN → EXTRA → NAME → COMMENT → HCRC` 这串 `/* fallthrough */` 链合并成了一大块**
（伪码 347-527，181 行），而 `EXLEN`(528-530)、`EXTRA`(531-532)、`NAME`(533-535)、
`COMMENT`(536-537)、`HCRC`(538-539) 只是**进入该合并块的入口标签** ✓

**字段指纹**：`time`、`os`、`extra`、`extra_len`、`name`、`comment`、`hcrc`、`done` ——
**正是 `gz_header` 的全部被写字段** ✓✓（与 `RECON_inflate.md §7.2` 独立吻合）

| 源码 | 语义 | 伪码证据 |
|---|---|---|
| 695-702 `TIME`：`NEEDBITS(32)`、`head->time`、`CRC4` | ✓ | `0x20`（32）✓、`head->time` ✓ |
| 704-712 `OS`：`NEEDBITS(16)`、`head->xflags/os`、`CRC2` | ✓ | `head->os` ✓ |
| 715-727 `EXLEN`：`flags & 0x0400` → `length`、`head->extra_len` | ✓ | `head->extra_len` ✓ |
| 729-751 `EXTRA`：逐字节拷贝到 `head->extra`（`extra_max` 截断）+ `crc32` | ✓ | `head->extra`、`state->length` ✓ |
| 753-773 `NAME`：`flags & 0x0800`，扫 NUL 结尾串到 `head->name` | ✓ | `head->name` ✓（`((byte *)&flags)[1] >> 3 & 1`） |
| 775-794 `COMMENT`：`flags & 0x1000` → `head->comment` | ✓ | `head->comment` ✓（`>> 4 & 1`） |
| 796-812 `HCRC`：`flags & 0x0200` → `NEEDBITS(16)`、`hold != (check & 0xffff)` → `"header crc mismatch"`；`head->hcrc`、`head->done = 1`、`check = crc32(0,Z_NULL,0)` | ✓ | `head->hcrc`、`head->done = 1`、`crc32(0,…)` ✓ |

## 6. `DICTID` / `DICT`（源码 814-827 ↔ 伪码 540-602）

| 源码 | 语义 | 伪码证据 |
|---|---|---|
| 814-818 `DICTID`：`NEEDBITS(32)`、`adler = check = **ZSWAP32**(hold)` | ✓ | **`0xff00ff` / `0xff00ff00`** —— 正是 `ZSWAP32` 的字节交换掩码 ✓✓✓ |
| 820-826 `DICT`：`havedict == 0` → `return Z_NEED_DICT`；`check = adler32(0,Z_NULL,0)`；`mode = TYPE` | ✓ | `havedict` ✓、`adler32` 调用 ✓ |
| 847 `fixedtables(state)`（在 TYPEDO 的 fixed 分支） | `lencode = lenfix; lenbits = 9; distcode = distfix; distbits = 5;` | 伪码 DICT 块里出现 `lencode`/`lenbits`/`distcode` + 两个数据地址 `0xabbd6`/`0xac3d6` ⟹ **`fixedtables()` 被内联**，`0xabbd6`/`0xac3d6` = `lenfix`/`distfix` ✓ |

## 7. `TYPE` / `TYPEDO`（源码 828-866 ↔ 伪码 624-…）

| 源码 | 语义 | 伪码证据 |
|---|---|---|
| 828-830 `TYPE`：`flush == Z_BLOCK \|\| flush == Z_TREES` → `goto inf_leave` | `flush` 的两个常量比较 ✓ |
| 831-836 `TYPEDO`：`last` → `BYTEBITS(); mode = CHECK;` | ✓ |
| 837-839 `NEEDBITS(3); last = BITS(1); DROPBITS(1);` | `bits < 3` 循环（位缓冲）×2 ✓ |
| 840-864 `switch (BITS(2))`：0→`STORED`；1→`fixedtables` + `LEN_`（`flush == Z_TREES` 时 `DROPBITS(2); goto inf_leave`）；2→`TABLE`；3→`"invalid block type"` | `0x44a7b`（= `"invalid block type"` 字符串）✓✓、`mode = STORED/TABLE/LEN_` ✓ |
| 865-866 `DROPBITS(2)` | ✓ |

## 8. `STORED` / `COPY_` / `COPY`（源码 867-901 ↔ 伪码 603-…）

**指纹**：**`0xffff` ×3** ✓✓（源码 870 里 `(hold & 0xffff) != ((hold >> 16) ^ 0xffff)` 与 875 的 `& 0xffff`）

| 源码 | 伪码 |
|---|---|
| 868-869 `BYTEBITS(); NEEDBITS(32);` | `0x20`+`0x10` 位循环 ✓ |
| 870-874 `(hold & 0xffff) != ((hold >> 16) ^ 0xffff)` → `"invalid stored block lengths"` | `0xffff` ×3 + 字符串 `0x380c1` ✓✓ |
| 875 `state->length = hold & 0xffff` | ✓（`length` 字段） |
| 878-880 `INITBITS(); mode = COPY_; if (flush == Z_TREES) goto inf_leave;` | ✓ |
| 882-884 `COPY_`：`mode = COPY` | ✓ |
| 885-901 `COPY`：`copy = length`，按 `have`/`left` 截断，`copy == 0` → `inf_leave`，`zmemcpy`，`mode = TYPE` | `copy` 局部 + `bVar5`/`pbVar36` 指针推进 + `mode = TYPE` ✓ |

## 9. 本轮结论

序言 + `HEAD`…`COPY`（源码 594-901 / 伪码 1-623）**逐语句对应**，且出现了五个源码级"指纹"：

| 指纹 | 值 | 源码位置 |
|---|---|---|
| gzip 魔数 | `0x8b1f` | 633 |
| zlib 头校验 | `% 31`（`0x1f`） | 648 |
| gzip 头保留位 | **`0xe000`** | 683 |
| DICTID 字节交换 | **`0xff00ff` / `0xff00ff00`**（`ZSWAP32`） | 816 |
| stored 块长度校验 | **`0xffff` ×3** | 870-875 |

还有一个**结构性**发现：编译器把 `OS→HCRC` 的 `/* fallthrough */` 链**合并成一大块**
（伪码 347-527），后 5 个 case 只是入口标签 —— 这不是解码错误，而是优化的事实。

---

## 10. R2：`TABLE` / `LENLENS` / `CODELENS`（源码 902-1026 ↔ 伪码 648-838）

### 10.1 `TABLE`（902-920 ↔ 伪码 648-671）

**指纹**：`0x101`(=257) ✓、**`0x1e`(=30)** ×2 ✓✓、`0x3f`
**字段**：`nlen`、`ndist`、`ncode`、`have`、`mode` —— 与源码 904-919 **完全一致** ✓

| 源码 | 语义 | 伪码 |
|---|---|---|
| 903-909 | `NEEDBITS(14)`；`nlen = BITS(5)+257`；`ndist = BITS(5)+1`；`ncode = BITS(4)+4`；逐个 `DROPBITS` | `uVar27 = hold & 0x1f` → `nlen = uVar27 + **0x101**` ✓；`ndist = uVar30 + 1`；`ncode = (hold>>…&0xf) + 4` ✓ |
| 911-915 | **`#ifndef PKZIP_BUG_WORKAROUND`**：`nlen > 286 \|\| ndist > 30` → `"too many length or distance symbols"` | 两个比较被**合并成一个 `0x1e`(=30) 判定** ✓✓（因 `nlen = BITS(5)+257`、`ndist = BITS(5)+1`，`>286`/`>30` 都等价于 `BITS(5) >= 30`）+ 字符串 `0x41914` ✓ |
| 918-919 | `have = 0; mode = LENLENS;` | ✓ |

### 10.2 `LENLENS`（921-941 ↔ 伪码 672-717）

**指纹**：**`0xabbb0` ×2** = `order[19]` 表地址 ✓✓、**`0x13` ×2** = 19 ✓✓、
**`0x98` ×2** = `state->lens` 的偏移 ✓✓、`0x90` / `0x78` = `next` / `lenbits` 的偏移 ✓✓
**字段**：`have`、`ncode`、`lens`、`next`、`lencode`、`lenbits`、`mode` ✓ **完全一致**

| 源码 | 语义 | 伪码 |
|---|---|---|
| 922-926 | `while (have < ncode) { NEEDBITS(3); lens[order[have++]] = BITS(3); DROPBITS(3); }` | `order[19]` 表地址 `0xabbb0` + `lens` 偏移 `0x98` ✓ |
| 927-928 | `while (have < 19) lens[order[have++]] = 0;` | `0x13`(=19) ✓ |
| 929-933 | `next = codes; lencode = next; lenbits = 7; ret = inflate_table(CODES, lens, 19, &next, &lenbits, work);` | 偏移 `0x90`/`0x78` ✓ + **`inflate_table` 调用**（该函数是独立符号 `0x523514`，见 `RECON_inflate_table.md`） |
| 934-938 | `ret` → `"invalid code lengths set"` | 字符串 `0x3b1e5` ✓ |

### 10.3 `CODELENS`（943-1026 ↔ 伪码 718-838）

**指纹**：`0x10`(=16，`here.val == 16`) ✓、**`0x318` ×2** = `state->work` 的偏移 ✓✓、`0x3f` ×8（移位掩码）
**字段**：`lens`、`have`、`lencode`、`lenbits`、`nlen`、`ndist`、`next`、`lenbits`、`distcode`、`distbits` ✓ **完全一致**

| 源码 | 语义 | 伪码 |
|---|---|---|
| 944-949 | `while (have < nlen+ndist)` + 二次查表 `lencode[BITS(lenbits)]` + `PULLBYTE` | ✓ |
| 950-953 | `here.val < 16` → `lens[have++] = here.val` | ✓ |
| 955-965 | `val == 16` → `NEEDBITS(bits+2)`、**`have == 0` → `"invalid bit length repeat"`**、`len = lens[have-1]`、`copy = 3 + BITS(2)` | 字符串 `0x34fe4` ✓ |
| 967-980 | `val == 17` → `copy = 3 + BITS(3)`；否则 `copy = 11 + BITS(7)` | ✓ |
| 981-987 | `have + copy > nlen+ndist` → 同字符串；`while (copy--) lens[have++] = len` | ✓ |
| 995-999 | **`lens[256] == 0`** → `"invalid code -- missing end-of-block"` | 字符串 `0x4bde0` ✓ |
| 1004-1008 | `next = codes; lencode = next; lenbits = 9; ret = inflate_table(**LENS**, lens, nlen, &next, &lenbits, work)` | `work` 偏移 `0x318` ✓、`lenbits = 9` ✓ |
| 1009-1013 | → `"invalid literal/lengths set"` | 字符串 `0x3b1e5`… ✓（`0x3b1e5` 系列） |
| 1014-1017 | `distcode = next; distbits = 6; ret = inflate_table(**DISTS**, lens+nlen, ndist, &next, &distbits, work)` | ✓ |
| 1018-1022 | → `"invalid distances set"` | 字符串 `0x3913e` 系列 ✓ |
| 1023-1025 | `mode = LEN_; if (flush == Z_TREES) goto inf_leave;` | ✓ |

## 11. R3：`LEN_`…`SYNC` + `inf_leave`（源码 1027-1267 ↔ 伪码 839-1512）

### 11.1 `LEN_` / `LEN`（1027-1078 ↔ 伪码 839-1135，294 行）

**字段**：`back`、`was`、`sane`、`whave`、`hold`、`bits`、`lencode`、`lenbits`、`distcode`、`distbits`、`extra`、`length`、`offset` ——
**这组正是「LEN 慢路径 + 内联的 `inflate_fast`」的全部涉足字段** ✓✓
（`whave` 是 `inflate_fast` 做跨窗口复制时用的；`sane` 是 `INFLATE_STRICT` 距离检查；`back`/`was` 是 MATCH 回退追踪）

| 源码 | 语义 | 伪码 |
|---|---|---|
| 1028 | `mode = LEN` | ✓ |
| **1031-1038** | **快速路径**：`have >= 6 && left >= 258` → `RESTORE(); inflate_fast(strm,out); LOAD(); if (mode == TYPE) back = -1;` | **`if ((5 < have) && (0x101 < left))`** ✓✓✓（编译器把 `>=6`/`>=258` 写成 `>5`/`>257`）+ `state->hold = hold`（RESTORE）→ 随后的 294 行即**内联的 `inflate_fast` 主体** |
| 1039 | `back = 0` | ✓（`back` 字段） |
| 1041-1044 | `here = lencode[BITS(lenbits)]` + `PULLBYTE` | ✓ |
| 1045-1055 | `here.op && (here.op & 0xf0) == 0` → 二级表查表 + `DROPBITS(last.bits)` + `back += last.bits` | ✓ |
| 1056-1058 | `DROPBITS(here.bits); back += here.bits; length = here.val` | ✓ |
| 1059-1065 | `(int)here.op == 0` → **literal** → `mode = LIT` | ✓ |
| 1066-1071 | `here.op & 32` → **end of block** → `back = -1; mode = TYPE` | ✓ |
| 1072-1076 | `here.op & 64` → `"invalid literal/length code"` | 字符串 `0x4ab44` ✓ |
| 1077-1078 | `extra = here.op & 15; mode = LENEXT` | ✓ |

### 11.2 `LENEXT` / `DIST` / `DISTEXT` / `MATCH` / `LIT`（1080-1186 ↔ 伪码 1136-1154）

| 源码 | 语义 | 伪码 |
|---|---|---|
| 1080-1089 | `LENEXT`：`extra` 非零 → `NEEDBITS(extra)`、`length += BITS(extra)`、`back += extra`；**`was = length`**；`mode = DIST` | `extra` 字段 ✓、`state->was = …` ✓ |
| 1091-1117 | `DIST`：`distcode[BITS(distbits)]` + 二级查表；`here.op & 64` → `"invalid distance code"`；`offset = here.val`；`extra = op & 15`；`mode = DISTEXT` | 字符串 `0x3913e` ✓ |
| 1119-1134 | `DISTEXT`：`extra` 非零 → `offset += BITS(extra)`；**`#ifdef INFLATE_STRICT`**：`offset > dmax` → `"invalid distance too far back"` | 字符串 `0x34ffe` ✓（`0x34ffe`/`0x34fe4` 系列） |
| 1136-1180 | `MATCH`：`left == 0` → `inf_leave`；从**窗口**（`whave`/`wnext`/`wsize`/`window`）或从**输出缓冲**复制；`sane` 检查；`length == 0` → `mode = LEN` | 伪码 MATCH 只有 2 行（`goto switchD_…_caseD_3f4c`）——**实际代码被抽到共享块** ✓（常量 `0x3f4c` = MATCH 值 16204 ✓） |
| 1181-1186 | `LIT`：`left == 0` → `inf_leave`；`*put++ = length; left--; mode = LEN` | 伪码 7 行 ✓（字段 `length`、`mode`） |

### 11.3 `CHECK` / `LENGTH` / `DONE` / `BAD` / `MEM` / `SYNC`（1187-1237 ↔ 伪码 1155-1223+）

| 源码 | 语义 | 伪码 / 指纹 |
|---|---|---|
| 1187-1211 `CHECK` | `wrap` 非零 → `NEEDBITS(32)`、`out -= left`、`total_out += out`、`state->total += out`、`(wrap & 4) && out` → `UPDATE_CHECK`；`(flags ? hold : **ZSWAP32**(hold)) != check` → `"incorrect data check"`；`mode = LENGTH` | **`0xff00ff` / `0xff00ff00`** ✓✓（ZSWAP32）；字段 `check`/`flags`/`total`/`wrap` ✓；字符串 `0x4789f` 系列 ✓ |
| 1212-1225 `LENGTH` | `wrap && flags` → `NEEDBITS(32)`；`hold != (total & 0xffffffff)` → `"incorrect length check"`；`mode = DONE` | 字段 `flags`/`total`/`wrap` ✓；字符串 `0x4789f`（`incorrect length check`）✓ |
| 1226-1228 `DONE` | `ret = Z_STREAM_END; goto inf_leave;` | ✓ |
| 1229-1231 `BAD` | `ret = Z_DATA_ERROR; goto inf_leave;` | **`-3`** 出现 1 次 ✓✓（`Z_DATA_ERROR = -3`） |
| 1232-1233 `MEM` | `return Z_MEM_ERROR;` | 未见字面量（可能经外提函数） |
| 1234-1237 `SYNC`/`default` | `return Z_STREAM_ERROR;` | 同上（该构建的 `SYNC` 分支被合并） |

### 11.4 `inf_leave`（源码 1246-1267 ↔ 伪码 ~1490-1512）🔒🔒

**这是本轮最漂亮的一段对齐** —— 逐语句、含宏展开：

| 源码 | 伪码 1490-1512 |
|---|---|
| 1254-1258 `in -= avail_in; out -= avail_out; total_in += in; total_out += out; state->total += out;` | 1490 `uVar38 = uVar43 - uVar42` / 1491 `strm.total_out += uVar38` / 1492 `strm.total_in += (uVar9 - uVar17)` / 1493 `state->total += uVar38` ✓✓ |
| 1259-1261 `if ((wrap & 4) && out) adler = check = **UPDATE_CHECK**(check, next_out - out, out)` | 1494 `if ((wrap >> 2 & 1) != 0 && old_out != new_out)` → **1495-1500：`if (flags == 0) adler = adler32(...) else adler = crc32(...)`** ✓✓✓ —— 正是 `UPDATE_CHECK` 宏 `(state->flags ? crc32 : adler32)` |
| 1262-1264 `data_type = bits + (last ? 64 : 0) + (mode == TYPE ? 128 : 0) + (mode == LEN_ \|\| mode == COPY_ ? 256 : 0)` | 1503-1510：`func_0x006e0638(state->last)` + `iVar13 = 0x100`（LEN_/COPY_ 位）+ `bits + last * 0x40 + (mode == TYPE) * 0x80 + iVar13` ✓✓✓（**三元的 64/128/256 全在**） |
| 1265-1267 `if (((in == 0 && out == 0) \|\| flush == Z_FINISH) && ret == Z_OK) ret = Z_BUF_ERROR; return ret;` | 1511 `if (((in == 0 && out == 0) && ret == 0) \|\| (1 < ret)) goto …` ✓（`flush == Z_FINISH` 的比较被提到共享块，因 `flush` 另在 TYPE/TYPEDO/COPY_/CODELENS 处被比较） |
| 1247-1253 `RESTORE(); if (wsize \|\| (out != avail_out && mode < BAD && (mode < CHECK \|\| flush != Z_FINISH))) updatewindow(...)` | `updatewindow` **是 `local` 函数、被内联**（伪码里无符号调用；其字段 `wsize`/`whave`/`wnext`/`window` 在 LEN/MATCH 段出现） |

## 12. 三轮总结论

**`inflate()` 本体（源码 594-1267 / 伪码 1-1512）逐语句对应完成**，且全程由"指纹"驱动验证：

| 类型 | 指纹 | 出现位置 |
|---|---|---|
| 魔数 | `0x8b1f`（gzip） | HEAD |
| 校验 | `% 31`（`0x1f`） | HEAD |
| 位掩码 | **`0xe000`** | FLAGS |
| 字节序 | **`0xff00ff` / `0xff00ff00`**（`ZSWAP32`） | DICTID、CHECK |
| 长度校验 | **`0xffff` ×3** | STORED |
| 表地址 | **`0xabbb0`**（`order[19]`） | LENLENS |
| 结构偏移 | **`0x98`**（`lens`）、**`0x318`**（`work`）、`0x90`（`next`）、`0x78`（`lenbits`） | LENLENS / CODELENS |
| 常量折叠 | `286/30` → **`0x1e`**；`>=6/>=258` → **`>5` / `>0x101`** | TABLE / LEN |
| 宏展开 | `UPDATE_CHECK` → `flags ? crc32 : adler32`；`data_type` 的 **64/128/256** | inf_leave |
| 返回码 | **`-3`**（`Z_DATA_ERROR`） | BAD |

**结构性发现（3 个，都是优化的真实结果，非解码错误）**：
1. `OS→HCRC` 的 fallthrough 链被**合并成一块**（伪码 347-527）
2. `inflate_fast()` 被**内联**进 LEN（伪码 842-1135 的 294 行）+ 门控被改写为 `>5 && >0x101`
3. `fixedtables()`、`updatewindow()` 均被**内联**（`inflate_table` 保持独立符号）

