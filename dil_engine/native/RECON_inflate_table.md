# `inflate_table()` 逐语句对齐（native `0x523514`）

> 2026-10-16。左侧 = `native/pseudocode/00523514_inflate_table.c`（Ghidra 切片分析产物，213 行）；
> 右侧 = **官方 zlib 1.3.1** `native/zlib-1.3.1/inftrees.c:36-303`（本机 Ghidra 自带同版本源码，
> 见 `RECON_inflate.md §7.7`）。
> 结论：**逐语句一一对应，无缺无余** ✓

---

## 0. 结论

`0x523514`（976 B）= zlib 1.3.1 的 **`inftrees.c:inflate_table()`**，一字不差地对应；
函数体内不存在的只有源码里的**注释**。**这是 native 侧第一个"逐行级"还原完成的函数。**

## 1. 形参映射（6 个对 6 个）🔒

```c
/* 伪码 */ void inflate_table(int param_1, ushort *param_2, ulong param_3,
                              long *param_4, uint *param_5, long param_6)
/* 源码 */ int inflate_table(codetype type, unsigned short FAR *lens, unsigned codes,
                              code FAR * FAR *table, unsigned FAR *bits, unsigned short FAR *work)
```

| 伪码 | 源码 | 局部变量对应 |
|---|---|---|
| `param_1` | `type` | 0=CODES / 1=LENS / 2=DISTS |
| `param_2` | `lens` | 码长数组 |
| `param_3` | `codes` | 符号数 |
| `param_4` | `table` | `**code`（输出表指针） |
| `param_5` | `bits` | `*bits`（in/out：根表位数） |
| `param_6` | `work` | 排序工作区 |
| `local_80` | `count[16]` | 各长度的码数 |
| `auStack_a0` | `offs[16]` | 各长度的起始下标 |
| `lVar13`/`lVar23` | `extra`/`base` | 见 §3 |

## 2. 逐阶段对齐表 🔒

| 伪码行 | 源码行 | 内容（源码语义） |
|---|---|---|
| 43-45 | 106-107 | `for (len=0; len<=MAXBITS; len++) count[len] = 0;`（清 0x20=32 字节） |
| 46-50 | 108-109 | `for (sym=0; sym<codes; sym++) count[lens[sym]]++;` |
| 51-55 | 113-114 | `for (max=MAXBITS; max>=1; max--) if (count[max] != 0) break;` |
| 56-60 | 112, 115 | `root = *bits; if (root > max) root = max;` |
| 61-63 | 125-126 | `for (min=1; min<max; min++) if (count[min] != 0) break;` |
| 64-67 | 127 | `if (root < min) root = min;` |
| 68-77 | 130-135 | `left = 1; for (len=1..15){ left <<= 1; left -= count[len]; if (left<0) return -1; }`（过订阅） |
| 78 | 136-137 | `if (left > 0 && (type == CODES \|\| max != 1)) return -1;`（不完整集） |
| 80-83 | 140-142 | `offs[1]=0; for(len=1;len<MAXBITS;len++) offs[len+1]=offs[len]+count[len];` |
| 84-91 | 145-146 | `for(sym=0;sym<codes;sym++) if(lens[sym]) work[offs[lens[sym]]++] = sym;` |
| 92-96 | 180-184 | `case CODES: base = extra = work; match = 20;`（`uVar22 = 0x14` ✓） |
| 97-101 | 185-189 | `case LENS: base = lbase; extra = lext; match = 257;`（`0xae858` / `0xae896` / `0x101` ✓） |
| 102-106 | 190-194 | `default /*DISTS*/: base = dbase; extra = dext; match = 0;`（`0xae8d4` / `0xae914` ✓） |
| 107-108 | 204-205 + **208-210** | `used = 1U << root; mask = used - 1;` + **`ENOUGH` 守卫**（见 §4） |
| 111-116 | 197-203 | `huff=0; sym=0; len=min; next=*table; curr=root; drop=0; low=(unsigned)-1;` |
| 117-131 | 213-227 | 建表项 `here`：`bits = len-drop`；`work[sym]+1 < match` → `op=0,val=work[sym]`；`>= match` → `op=extra[…],val=base[…]`；否则 `op = 32+64`（`uVar27 = **0x60**` ✓）、`val=0` |
| 132-143 | 229-236 | 复制填充：`incr = 1U<<(len-drop); fill = 1U<<curr; do{ fill -= incr; next[(huff>>drop)+fill] = here; } while (fill);` |
| 144-148 | 238-247 | 反向递增：`incr=1U<<(len-1); while(huff & incr) incr >>= 1; if(incr){huff&=incr-1; huff+=incr;} else huff=0;` |
| 149-157 | 249-254 | `sym++; if (--count[len] == 0) { if (len == max) break; len = lens[work[sym]]; }` |
| 158-166 | 252 + 292-297 | `len == max` 跳出 + 收尾：`here.op = 64`（`*puVar1 = **0x40**` ✓）、`here.bits = len-drop`、`next[huff] = here` |
| 170-171 | 256-257 | `if (len > root && (huff & mask) != low)` → 需建子表 |
| 172-176 | 259-263 | `if (drop == 0) drop = root; next += min;` |
| 177-183 | 265-273 | 定子表长度：`curr = len-drop; left = 1<<curr; while (curr+drop < max){ left -= count[curr+drop]; if (left<=0) break; curr++; left <<= 1; }` |
| 184-188 | 276-279 | `used += 1U<<curr;` + **第二处 `ENOUGH` 守卫**（`0x354`/`0x250` ✓） |
| 189-192 | 281-285 | `low = huff & mask; (*table)[low].op = curr; .bits = root; .val = next - *table;` |
| 202-209 | **116-123** | **`max == 0` 分支**：`here.op=64; here.bits=1; here.val=0; *(*table)++ = here; *(*table)++ = here; *bits = 1; return 0;` —— 伪码里 `*puVar14 = **0x140**` ✓（见 §4） |
| 210-213 | 299-301 | `*table += used; *bits = root; return 0;` |
| 199-201 | 302 | `return`（被编译器**外提**成共享尾声 `OUTLINED_FUNCTION_161(uVar15)`，`uVar15` 即返回值） |

> 伪码里 `LAB_00523598` = `max == 0` 的入口（源码 116），`LAB_005235c0` = 统一收尾（源码 299-301），
> `LAB_005238a8` = `return uVar15`。控制流平铺后顺序与源码不同，但**每个基本块都能一一对上**。

## 3. 四张静态表 —— **二进制内容与源码逐项一致** 🔒🔒

源码里的 `static const unsigned short` 四张表，在伪码里就是四个相邻的 `.rodata` 立即数地址。
**直接从 `.so` 读出这四段数据、与 zlib 1.3.1 源码逐项比对**：

| 伪码地址 | 源码 | 项数 | 内容比对 |
|---|---|---|---|
| `0xae858` | `lbase[31]`（长度码 257..285 基准） | 31 | **逐项一致** ✓ |
| `0xae896` | `lext[31]`（长度码额外位） | 31 | **逐项一致** ✓ |
| `0xae8d4` | `dbase[32]`（距离码 0..29 基准） | 32 | **逐项一致** ✓ |
| `0xae914` | `dext[32]`（距离码额外位） | 32 | **逐项一致** ✓ |

地址间距与数组尺寸也吻合：`0xae896-0xae858 = 0x3E = 62 = 31×2` ✓，`0xae914-0xae8d4 = 0x40 = 64 = 32×2` ✓。

比对时的期望值（源码原文）：

```
lbase = 3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0
lext  = 16×8, 17×4, 18×4, 19×4, 20×4, 21×4, 16, 203, 77
dbase = 1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0
dext  = 16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64
```

> 意义：不只是**结构**对上 —— 连**表数据**都是 zlib 1.3.1 的原样（`lext` 结尾那组 `16, 203, 77`
> 是 zlib 特有的写法，别的实现在这两格几乎不可能恰好也是这组值）。这是"该构建就是 zlib 1.3.1"
> 的**数据级**证据，与 §7.7 的版本证据（仓库钉版 + `ENOUGH=1444` 布局闭合）互相独立。

### 3b. 源码里 `match` 的取值也在伪码里出现了

| 源码 | 伪码 | 说明 |
|---|---|---|
| `case CODES: match = 20;` | `uVar22 = 0x14` | 0x14 = 20 ✓ |
| `case LENS: match = 257;` | `uVar22 = 0x101` | 0x101 = 257 ✓ |
| `default /*DISTS*/: match = 0;` | `uVar22 = 0` | ✓ |

## 4. 三条"编译器强度削减"的证据（都自洽）🔒

| 源码 | 伪码 | 解释 |
|---|---|---|
| `here.op = 32 + 64`（end of block，源码 225） | `uVar27 = **0x60**` | 0x60 = 96 = 32+64 ✓ 常量折叠 |
| `here.op=64; here.bits=1; here.val=0;`（`max==0`，源码 117-119） | `*puVar14 = **0x140**` | `code` = `{u8 op; u8 bits; u16 val}`，LE 打包 = `64 \| 1<<8 \| 0<<16` = `0x140` ✓ 三字段合并成一次 4 字节存储 |
| `used > ENOUGH_LENS(852)` / `used > ENOUGH_DISTS(592)`（源码 208-210、277-279） | `(type != LENS \|\| root < 10) && (type != DISTS \|\| root < 10)` | 此处 `used = 1U << root`，而 **512 < 852 ≤ 1024 且 512 < 592 ≤ 1024** ⟹ `used > 852` ⟺ `root ≥ 10`（DISTS 同理）✓ **编译器把乘法式守卫削减成了一次比较**；`return 1` 即伪码里的 `uVar15 = 1` |

> 第 3 条特别值得记：`852`/`592` 这两个**没出现在伪码里**的常量，反而因为落在
> `[512, 1024)` 区间而被削减成 `root >= 10` —— 我先在别处验证到 `0x354`/`0x250` 字面量的存在，
> 再把 `root >= 10` 反推回 `ENOUGH`，两边闭合。

## 5. 局限（诚实边界）

1. 少量被**外提的共享尾声**（`OUTLINED_FUNCTION_161`/`6345`）未展开为具体的 `return` 语句；
   `uVar15` 的取值路径（`-1` / `0` / `1`）需按源码三处 `return` 对照
2. 伪码里 `LAB_*` 标签未改名为源码的 `inf_leave`/`bad`（这里没有这两个标签，仅有三个内部块）
3. 局部变量的**类型**未标注（`count[]`/`offs[]` 已按源码识别为 `unsigned short[16]`，
   但 Ghidra 输出里仍是 `local_80`/`auStack_a0` 这类栈名）—— 若需要，可用
   `tools/ghidra_annotate.py` 同法补一张偏移表（收益有限，未做）

## 6. 复现

```powershell
# 切片（该函数所在段 + 4 张静态表所在数据段）
python tools\elf_window.py <so> native\win_A.elf 0x520000:0x4000 0x6d9000:0x4000 0x9f000:0x2000
# 受控运行（堆 1200M / java 峰值超 2200M 强杀）
& tools\ghidra_run_guarded.ps1 -Bat <analyzeHeadless.bat> -CmdArgs @(...) -Out native\ghidra_winA.txt
# 抽取 / 改写
python tools\ghidra_extract.py native\ghidra_winA.txt native\pseudocode
```
