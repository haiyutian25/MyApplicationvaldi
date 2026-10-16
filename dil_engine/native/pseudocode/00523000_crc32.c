// crc32
// 地址 00523000
// 由 Ghidra 12.1.3 对**切片 ELF** 全量分析后反编译得到（见 REPORT_native.md 附录 A）
// fn crc32  入口=00523000  字节数=596 (GhidraScript)
// 定位: state变量=null  strm变量=null (GhidraScript)
// [类型标注: 命名变量 0 处，偏移访问指针 0 处] (GhidraScript)

void crc32(uint param_1,ulong *param_2,uint param_3)

{
  byte *pbVar1;
  uint *puVar2;
  uint *puVar3;
  uint *puVar4;
  uint *puVar5;
  ulong uVar6;
  ulong extraout_x8;
  ulong extraout_x8_00;
  ulong uVar7;
  ulong uVar8;
  ulong extraout_x9;
  ulong uVar9;
  ulong uVar10;
  ulong uVar11;
  ulong uVar12;
  ulong uVar13;
  ulong uVar14;
  long lVar15;
  ulong *puVar16;
  ulong uVar17;
  ulong uVar18;
  ulong uVar19;
  ulong unaff_x24;
  ulong unaff_x25;
  
  if (param_2 == (ulong *)0x0) {
    OUTLINED_FUNCTION_430();
    return;
  }
  uVar17 = (ulong)param_3;
  uVar8 = (ulong)~param_1;
  puVar16 = param_2;
  if (0x2e < param_3) {
    for (; (uVar17 != 0 && (((ulong)param_2 & 7) != 0)); param_2 = (ulong *)((long)param_2 + 1)) {
      puVar16 = (ulong *)((long)puVar16 + 1);
      uVar17 = uVar17 - 1;
    }
    func_0x006f1110(0x28);
    uVar8 = 0;
    if (extraout_x8 != 0) {
      uVar8 = uVar17 / extraout_x8;
    }
    uVar19 = 0;
    uVar18 = 0;
    uVar9 = extraout_x9 & 0xffffffff;
    uVar7 = uVar8;
    while (uVar7 = uVar7 - 1, uVar7 != 0) {
      uVar14 = puVar16[4] ^ uVar18;
      uVar11 = puVar16[1] ^ unaff_x25;
      uVar10 = *puVar16 ^ uVar9;
      uVar12 = puVar16[2] ^ unaff_x24;
      uVar13 = puVar16[3] ^ uVar19;
      unaff_x25 = (ulong)*(uint *)((uVar11 & 0xff) * 4 + 0xac858);
      uVar9 = (ulong)*(uint *)((uVar10 & 0xff) * 4 + 0xac858);
      unaff_x24 = (ulong)*(uint *)((uVar12 & 0xff) * 4 + 0xac858);
      uVar19 = (ulong)*(uint *)((uVar13 & 0xff) * 4 + 0xac858);
      uVar18 = (ulong)*(uint *)((uVar14 & 0xff) * 4 + 0xac858);
      lVar15 = 0xacc58;
      for (uVar6 = 8; uVar6 != 0x40; uVar6 = uVar6 + 8) {
        puVar2 = (uint *)(lVar15 + (uVar11 >> (uVar6 & 0x3f) & 0xff) * 4);
        puVar3 = (uint *)(lVar15 + (uVar12 >> (uVar6 & 0x3f) & 0xff) * 4);
        puVar4 = (uint *)(lVar15 + (uVar13 >> (uVar6 & 0x3f) & 0xff) * 4);
        uVar9 = *(uint *)(lVar15 + (uVar10 >> (uVar6 & 0x3f) & 0xff) * 4) ^ uVar9;
        puVar5 = (uint *)(lVar15 + (uVar14 >> (uVar6 & 0x3f) & 0xff) * 4);
        lVar15 = lVar15 + 0x400;
        unaff_x25 = *puVar2 ^ unaff_x25;
        unaff_x24 = *puVar3 ^ unaff_x24;
        uVar19 = *puVar4 ^ uVar19;
        uVar18 = *puVar5 ^ uVar18;
      }
      puVar16 = puVar16 + 5;
    }
    uVar17 = uVar17 + uVar8 * -0x28;
    crc_word(*puVar16 ^ uVar9);
    func_0x006f1908(puVar16[1] ^ unaff_x25);
    func_0x006f1908(puVar16[2] ^ unaff_x24);
    func_0x006f1908(puVar16[3] ^ uVar19);
    uVar8 = func_0x006f1908(puVar16[4] ^ uVar18);
    param_2 = puVar16 + 5;
    uVar8 = uVar8 & 0xffffffff;
  }
  for (; 7 < uVar17; uVar17 = uVar17 - 8) {
    func_0x006de520((ulong)*(uint *)(((ulong)((uint)(byte)*param_2 ^ (uint)uVar8) & 0xff) * 4 +
                                    0xac458) ^ uVar8 >> 8);
    func_0x006de520();
    func_0x006de520();
    func_0x006de520();
    func_0x006de520();
    func_0x006de520();
    pbVar1 = (byte *)((long)param_2 + 7);
    param_2 = param_2 + 1;
    uVar8 = (ulong)*(uint *)(((ulong)((uint)*pbVar1 ^ (uint)extraout_x8_00) & 0xff) * 4 + 0xac458) ^
            extraout_x8_00 >> 8;
  }
  for (uVar7 = 0; uVar17 != uVar7; uVar7 = uVar7 + 1) {
    uVar8 = (ulong)*(uint *)(((ulong)((uint)*(byte *)((long)param_2 + uVar7) ^ (uint)uVar8) & 0xff)
                             * 4 + 0xac458) ^ uVar8 >> 8;
  }
  OUTLINED_FUNCTION_35(uVar8 ^ 0xffffffff);
  return;
}

 (GhidraScript)
