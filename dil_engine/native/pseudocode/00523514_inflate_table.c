// inflate_table
// 地址 00523514
// 由 Ghidra 12.1.3 对**切片 ELF** 全量分析后反编译得到（见 REPORT_native.md 附录 A）
// fn inflate_table  入口=00523514  字节数=976 (GhidraScript)
// 定位: state变量=null  strm变量=null (GhidraScript)
// [类型标注: 命名变量 0 处，偏移访问指针 0 处] (GhidraScript)

void inflate_table(int param_1,ushort *param_2,ulong param_3,long *param_4,uint *param_5,
                  long param_6)

{
  undefined1 *puVar1;
  uint uVar2;
  undefined1 uVar3;
  uint uVar4;
  ushort *puVar5;
  uint uVar6;
  long lVar7;
  uint uVar8;
  short sVar9;
  int iVar10;
  uint uVar11;
  uint uVar12;
  long lVar13;
  undefined4 *puVar14;
  undefined8 uVar15;
  uint uVar16;
  ulong uVar17;
  uint uVar18;
  uint uVar19;
  ulong uVar20;
  ulong uVar21;
  uint uVar22;
  long lVar23;
  uint uVar24;
  uint uVar25;
  ushort uVar26;
  undefined1 uVar27;
  uint uVar28;
  ushort auStack_a0 [16];
  ushort local_80 [16];
  
  for (lVar13 = 0; lVar13 != 0x20; lVar13 = lVar13 + 2) {
    *(undefined2 *)((long)local_80 + lVar13) = 0;
  }
  puVar5 = param_2;
  for (uVar17 = param_3 & 0xffffffff; uVar17 != 0; uVar17 = uVar17 - 1) {
    local_80[*puVar5] = local_80[*puVar5] + 1;
    puVar5 = puVar5 + 1;
  }
  uVar17 = 0xf;
  while (uVar16 = (uint)uVar17, local_80[uVar17] == 0) {
    uVar17 = (ulong)(uVar16 - 1);
    if (uVar16 - 1 == 0) goto LAB_00523598;
  }
  uVar20 = 1;
  uVar18 = *param_5;
  if (uVar16 <= *param_5) {
    uVar18 = uVar16;
  }
  for (; (uVar21 = uVar17, uVar17 != uVar20 && (uVar21 = uVar20, local_80[uVar20] == 0));
      uVar20 = uVar20 + 1) {
  }
  lVar13 = 2;
  if (uVar18 <= (uint)uVar21) {
    uVar18 = (uint)uVar21;
  }
  iVar10 = 1;
  while (lVar13 != 0x20) {
    puVar5 = (ushort *)((long)local_80 + lVar13);
    lVar13 = lVar13 + 2;
    iVar10 = iVar10 * 2 - (uint)*puVar5;
    if (iVar10 < 0) {
      uVar15 = 0xffffffff;
      goto LAB_005238a8;
    }
  }
  if ((iVar10 == 0) || ((uVar15 = 0xffffffff, param_1 != 0 && (uVar16 == 1)))) {
    sVar9 = 0;
    for (lVar13 = 2; *(short *)((long)auStack_a0 + lVar13) = sVar9, lVar13 != 0x1e;
        lVar13 = lVar13 + 2) {
      sVar9 = *(short *)((long)local_80 + lVar13) + sVar9;
    }
    for (uVar17 = 0; (param_3 & 0xffffffff) != uVar17; uVar17 = uVar17 + 1) {
      uVar20 = (ulong)param_2[uVar17];
      if (uVar20 != 0) {
        uVar26 = auStack_a0[uVar20];
        auStack_a0[uVar20] = uVar26 + 1;
        *(short *)(param_6 + (ulong)uVar26 * 2) = (short)uVar17;
      }
    }
    if (param_1 == 0) {
      uVar22 = 0x14;
      lVar13 = param_6;
      lVar23 = param_6;
    }
    else if (param_1 == 1) {
      uVar22 = 0x101;
      lVar13 = 0xae896;
      lVar23 = 0xae858;
    }
    else {
      uVar22 = 0;
      lVar13 = 0xae914;
      lVar23 = 0xae8d4;
    }
    uVar15 = 1;
    if ((param_1 != 1 || uVar18 < 10) && (param_1 != 2 || uVar18 < 10)) {
      uVar24 = 1 << (ulong)(uVar18 & 0x1f);
      lVar7 = *param_4;
      uVar25 = 0;
      uVar8 = 0;
      uVar4 = uVar24 - 1;
      uVar11 = 0xffffffff;
      uVar12 = uVar18;
      uVar6 = 0;
      while( true ) {
        uVar12 = 1 << (ulong)(uVar12 & 0x1f);
        do {
          uVar26 = *(ushort *)(param_6 + (ulong)uVar25 * 2);
          if (uVar26 + 1 < uVar22) {
            uVar27 = 0;
          }
          else if (uVar26 < uVar22) {
            uVar26 = 0;
            uVar27 = 0x60;
          }
          else {
            uVar27 = *(undefined1 *)(lVar13 + (ulong)(uVar26 - uVar22) * 2);
            uVar26 = *(ushort *)(lVar23 + (ulong)(uVar26 - uVar22) * 2);
          }
          uVar19 = (uint)uVar21;
          iVar10 = -1 << (ulong)(uVar19 - uVar6 & 0x1f);
          uVar2 = uVar12;
          do {
            uVar28 = (uVar8 >> (ulong)(uVar6 & 0x1f)) + iVar10 + uVar2;
            uVar2 = uVar2 + iVar10;
            puVar1 = (undefined1 *)(lVar7 + (ulong)uVar28 * 4);
            *puVar1 = uVar27;
            uVar3 = (undefined1)(uVar19 - uVar6);
            puVar1[1] = uVar3;
            *(ushort *)(puVar1 + 2) = uVar26;
          } while (uVar2 != 0);
          uVar2 = 1 << (ulong)(uVar19 - 1 & 0x1f);
          do {
            uVar28 = uVar2;
            uVar2 = uVar28 >> 1;
          } while ((uVar28 & uVar8) != 0);
          uVar26 = local_80[uVar21 & 0xffffffff];
          uVar2 = uVar28 - 1 & uVar8;
          uVar25 = uVar25 + 1;
          local_80[uVar21 & 0xffffffff] = uVar26 - 1;
          uVar8 = 0;
          if (uVar28 != 0) {
            uVar8 = uVar2 + uVar28;
          }
          if ((ushort)(uVar26 - 1) == 0) {
            if (uVar19 == uVar16) {
              if (uVar8 != 0) {
                puVar1 = (undefined1 *)(lVar7 + (ulong)uVar8 * 4);
                *puVar1 = 0x40;
                puVar1[1] = uVar3;
                *(undefined2 *)(puVar1 + 2) = 0;
              }
              *param_4 = *param_4 + (ulong)uVar24 * 4;
              goto LAB_005235c0;
            }
            uVar21 = (ulong)param_2[*(ushort *)(param_6 + (ulong)uVar25 * 2)];
          }
          uVar2 = uVar8 & uVar4;
        } while ((uint)uVar21 <= uVar18 || uVar2 == uVar11);
        lVar7 = lVar7 + (ulong)uVar12 * 4;
        uVar19 = uVar18;
        if (uVar6 != 0) {
          uVar19 = uVar6;
        }
        uVar17 = uVar21 & 0xffffffff;
        for (iVar10 = 1 << (ulong)((uint)uVar21 - uVar19 & 0x1f);
            (uVar12 = (uint)uVar17, uVar12 < uVar16 &&
            (puVar5 = local_80 + uVar17, 0 < (int)(iVar10 - (uint)*puVar5)));
            iVar10 = (iVar10 - (uint)*puVar5) * 2) {
          uVar17 = (ulong)(uVar12 + 1);
        }
        uVar12 = uVar12 - uVar19;
        uVar15 = 1;
        uVar24 = (1 << (ulong)(uVar12 & 0x1f)) + uVar24;
        if ((0x354 < uVar24 && param_1 == 1) ||
           ((param_1 == 2 && 0x24f < uVar24) && (param_1 != 2 || uVar24 != 0x250))) break;
        *(char *)(*param_4 + (ulong)uVar2 * 4) = (char)uVar12;
        *(char *)(*param_4 + (ulong)uVar2 * 4 + 1) = (char)uVar18;
        *(short *)(*param_4 + (ulong)uVar2 * 4 + 2) =
             (short)((uint)((int)lVar7 - (int)*param_4) >> 2);
        uVar11 = uVar2;
        uVar6 = uVar19;
      }
    }
  }
LAB_005238a8:
  OUTLINED_FUNCTION_161(uVar15);
  OUTLINED_FUNCTION_6345();
  return;
LAB_00523598:
  puVar14 = (undefined4 *)*param_4;
  *param_4 = (long)(puVar14 + 1);
  *puVar14 = 0x140;
  puVar14 = (undefined4 *)*param_4;
  *param_4 = (long)(puVar14 + 1);
  *puVar14 = 0x140;
  uVar18 = 1;
LAB_005235c0:
  uVar15 = 0;
  *param_5 = uVar18;
  goto LAB_005238a8;
}

 (GhidraScript)
