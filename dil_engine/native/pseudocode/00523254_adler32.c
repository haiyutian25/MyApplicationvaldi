// adler32
// 地址 00523254
// 由 Ghidra 12.1.3 对**切片 ELF** 全量分析后反编译得到（见 REPORT_native.md 附录 A）
// fn adler32  入口=00523254  字节数=704 (GhidraScript)
// 定位: state变量=null  strm变量=null (GhidraScript)
// [类型标注: 命名变量 0 处，偏移访问指针 0 处] (GhidraScript)

ulong adler32(ulong param_1,byte *param_2,uint param_3)

{
  byte *pbVar1;
  long lVar2;
  long lVar3;
  long lVar4;
  long lVar5;
  long lVar6;
  long lVar7;
  long lVar8;
  long lVar9;
  long lVar10;
  long lVar11;
  long lVar12;
  long lVar13;
  long lVar14;
  long lVar15;
  long lVar16;
  bool bVar17;
  ulong uVar18;
  ulong uVar19;
  ulong uVar20;
  int iVar21;
  byte *pbVar22;
  
  uVar19 = param_1 >> 0x10 & 0xffff;
  param_1 = param_1 & 0xffff;
  if (param_3 == 1) {
    param_1 = param_1 + *param_2;
    uVar18 = param_1 - 0xfff1;
    if (param_1 < 0xfff1) {
      uVar18 = param_1;
    }
    uVar19 = uVar18 + uVar19;
    uVar20 = uVar19 * 0x10000 - 0xfff10000;
    if (uVar19 < 0xfff1) {
      uVar20 = uVar19 * 0x10000;
    }
    return uVar20 | uVar18;
  }
  if (param_2 == (byte *)0x0) {
    uVar19 = OUTLINED_FUNCTION_6923();
    return uVar19;
  }
  uVar18 = (ulong)param_3;
  if (0xf < param_3) {
    for (; 0x15a < uVar18 >> 4; uVar18 = uVar18 - 0x15b0) {
      iVar21 = -0x15b;
      pbVar22 = param_2;
      do {
        bVar17 = iVar21 != -1;
        iVar21 = iVar21 + 1;
        lVar2 = param_1 + *pbVar22;
        lVar3 = lVar2 + (ulong)pbVar22[1];
        lVar4 = lVar3 + (ulong)pbVar22[2];
        lVar5 = lVar4 + (ulong)pbVar22[3];
        lVar6 = lVar5 + (ulong)pbVar22[4];
        lVar7 = lVar6 + (ulong)pbVar22[5];
        lVar8 = lVar7 + (ulong)pbVar22[6];
        lVar9 = lVar8 + (ulong)pbVar22[7];
        lVar10 = lVar9 + (ulong)pbVar22[8];
        lVar11 = lVar10 + (ulong)pbVar22[9];
        lVar12 = lVar11 + (ulong)pbVar22[10];
        lVar13 = lVar12 + (ulong)pbVar22[0xb];
        lVar14 = lVar13 + (ulong)pbVar22[0xc];
        lVar15 = lVar14 + (ulong)pbVar22[0xd];
        pbVar1 = pbVar22 + 0xf;
        lVar16 = lVar15 + (ulong)pbVar22[0xe];
        pbVar22 = pbVar22 + 0x10;
        param_1 = lVar16 + (ulong)*pbVar1;
        uVar19 = lVar2 + uVar19 + lVar3 + lVar4 + lVar5 + lVar6 + lVar7 + lVar8 + lVar9 + lVar10 +
                 lVar11 + lVar12 + lVar13 + lVar14 + lVar15 + lVar16 + param_1;
      } while (bVar17);
      param_2 = param_2 + 0x15b0;
      param_1 = param_1 % 0xfff1;
      uVar19 = uVar19 % 0xfff1;
    }
    if (uVar18 != 0) {
      for (; 0xf < uVar18; uVar18 = uVar18 - 0x10) {
        lVar2 = param_1 + *param_2;
        lVar3 = lVar2 + (ulong)param_2[1];
        lVar4 = lVar3 + (ulong)param_2[2];
        lVar5 = lVar4 + (ulong)param_2[3];
        lVar6 = lVar5 + (ulong)param_2[4];
        lVar7 = lVar6 + (ulong)param_2[5];
        lVar8 = lVar7 + (ulong)param_2[6];
        lVar9 = lVar8 + (ulong)param_2[7];
        lVar10 = lVar9 + (ulong)param_2[8];
        lVar11 = lVar10 + (ulong)param_2[9];
        lVar12 = lVar11 + (ulong)param_2[10];
        lVar13 = lVar12 + (ulong)param_2[0xb];
        lVar14 = lVar13 + (ulong)param_2[0xc];
        lVar15 = lVar14 + (ulong)param_2[0xd];
        pbVar22 = param_2 + 0xf;
        lVar16 = lVar15 + (ulong)param_2[0xe];
        param_2 = param_2 + 0x10;
        param_1 = lVar16 + (ulong)*pbVar22;
        uVar19 = lVar2 + uVar19 + lVar3 + lVar4 + lVar5 + lVar6 + lVar7 + lVar8 + lVar9 + lVar10 +
                 lVar11 + lVar12 + lVar13 + lVar14 + lVar15 + lVar16 + param_1;
      }
      for (uVar20 = 0; uVar18 != uVar20; uVar20 = uVar20 + 1) {
        param_1 = param_1 + param_2[uVar20];
        uVar19 = param_1 + uVar19;
      }
      param_1 = param_1 % 0xfff1;
      uVar19 = uVar19 % 0xfff1;
    }
    return param_1 | uVar19 << 0x10;
  }
  for (; uVar18 != 0; uVar18 = uVar18 - 1) {
    param_1 = param_1 + *param_2;
    uVar19 = param_1 + uVar19;
    param_2 = param_2 + 1;
  }
  uVar18 = param_1 - 0xfff1;
  if (param_1 < 0xfff1) {
    uVar18 = param_1;
  }
  return uVar18 | (uVar19 % 0xfff1) * 0x10000;
}

 (GhidraScript)
