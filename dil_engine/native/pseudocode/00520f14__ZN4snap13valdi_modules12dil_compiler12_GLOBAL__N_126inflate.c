// _ZN4snap13valdi_modules12dil_compiler12_GLOBAL__N_126inflateGzipPayloadWithZlibERKN5Valdi9BytesViewEm
// 地址 00520f14
// 由 Ghidra 12.1.3 对**切片 ELF** 全量分析后反编译得到（见 REPORT_native.md 附录 A）
// fn _ZNSt6__ndk120__shared_ptr_emplaceIZN4snap13valdi_modules12dil_compiler46CompressedWidgetStateInflaterModuleFactoryImpl12onLoadModuleEvE39CompressedWidgetStateInflaterModuleImplNS_9allocatorIS5_EEED2Ev  入口=00520f14  字节数=7068 (GhidraScript)
// 定位: state变量=plVar12  strm变量=local_d8 (GhidraScript)
// [类型标注: 命名变量 2 处，偏移访问指针 1 处] (GhidraScript)

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void _ZNSt6__ndk120__shared_ptr_emplaceIZN4snap13valdi_modules12dil_compiler46CompressedWidgetStateInflaterModuleFactoryImpl12onLoadModuleEvE39CompressedWidgetStateInflaterModuleImplNS_9allocatorIS5_EEED2Ev
               (undefined8 *param_1,void *param_2,uint param_3,ulong param_4)

{
  undefined1 *puVar1;
  long lVar2;
  byte *pbVar3;
  uint uVar4;
  byte bVar5;
  byte bVar6;
  ushort uVar7;
  uint uVar8;
  uint uVar9;
  void *pvVar10;
  undefined8 uVar11;
  void *pvVar12;
  int iVar13;
  uint uVar14;
  inflate_state *state;
  undefined8 uVar15;
  long lVar16;
  ulong extraout_x1;
  ulong extraout_x1_00;
  uint uVar17;
  uint uVar18;
  uint uVar19;
  long lVar20;
  byte *pbVar21;
  uint uVar22;
  ulong uVar23;
  int extraout_w8;
  int extraout_w8_00;
  int iVar24;
  uint uVar25;
  uint extraout_w8_01;
  undefined4 uVar26;
  int extraout_w8_02;
  int extraout_w8_03;
  ulong uVar27;
  inflate_state *pvVar27;
  long lVar28;
  byte *pbVar29;
  int extraout_w9;
  int extraout_w9_00;
  int extraout_w9_01;
  int extraout_w9_02;
  ulong uVar30;
  long lVar31;
  int extraout_w10;
  int extraout_w10_00;
  int iVar32;
  int extraout_w10_01;
  uint uVar33;
  int extraout_w11;
  ulong extraout_x11;
  undefined2 uVar34;
  byte *pbVar35;
  byte *pbVar36;
  byte *pbVar37;
  ulong uVar38;
  ulong uVar39;
  byte *pbVar40;
  ulong uVar41;
  uint uVar42;
  uint uVar43;
  ulong uVar44;
  undefined1 auVar45 [16];
  z_stream strm;
  undefined4 local_64;
  
  strm.reserved = 0;
  strm.total_in = 0;
  strm.avail_out = 0;
  strm.pad_1c = 0;
  strm.next_out = (void *)0x0;
  strm.pad_0c = 0;
  strm.avail_in = param_3;
  strm.state = (void *)0x0;
  strm.opaque = (void *)0x0;
  strm.adler = 0;
  strm.data_type = 0;
  strm.pad_3c = 0;
  strm.msg = (void *)0x0;
  strm.total_out = 0;
  strm.zalloc = zcalloc;
  strm.zfree = zcfree;
  strm.next_in = param_2;
  state = (inflate_state *)zcalloc(0,1,0x1bf8);
  if (state == (inflate_state *)0x0) goto LAB_00522a6c;
  state->strm = &strm;
  state->window = (void *)0x0;
  state->mode = 0x3f34;
  strm.state = state;
  iVar13 = inflateStateCheck(&strm);
  if (iVar13 == 0) {
    state->wrap = 6;
    state->wbits = 0xf;
    iVar13 = inflateStateCheck(&strm);
    if (iVar13 == 0) {
      state->whave = 0;
      state->wnext = 0;
      state->wsize = 0;
      iVar13 = inflateStateCheck(&strm);
      uVar15 = _DAT_00031ac8;
      if (iVar13 == 0) {
        state->dmax = 0x8000;
        puVar1 = &state->codes;
        state->next = puVar1;
        state->lencode = puVar1;
        state->distcode = puVar1;
        uVar11 = _DAT_00031ac8;
        uVar38 = param_4;
        if (0xffff < param_4) {
          uVar38 = 0x10000;
        }
        _DAT_00031ac8 = (undefined4)uVar15;
        DAT_00031ac8_4 = SUB84(uVar15,4);
        uVar26 = DAT_00031ac8_4;
        state->mode = _DAT_00031ac8;
        _DAT_00031ac8 = uVar11;
        state->last = uVar26;
        strm.total_in = 0;
        state->head = (void *)0x0;
        state->total = 0;
        strm.total_out = 0;
        strm.msg = (void *)0x0;
        strm.adler = 0;
        state->hold = 0;
        state->havedict = 0;
        uVar15 = _DAT_00031ec0;
        state->flags = 0xffffffff;
        state->bits = 0;
        uVar11 = _DAT_00031ec0;
        _DAT_00031ec0 = (undefined4)uVar15;
        DAT_00031ec0_4 = SUB84(uVar15,4);
        uVar26 = DAT_00031ec0_4;
        state->sane = _DAT_00031ec0;
        _DAT_00031ec0 = uVar11;
        state->back = uVar26;
        param_1[1] = 0;
        param_1[2] = 0;
        *param_1 = 0;
        func_0x00490108(param_1,uVar38);
        uVar14 = 0;
LAB_00521058:
        if (uVar14 != 0) {
          func_0x00490108(param_1,strm.total_out);
          func_0x006f7c70();
          OUTLINED_FUNCTION_160();
          OUTLINED_FUNCTION_5998();
          return;
        }
        func_0x006e8124(param_1[1]);
        uVar38 = extraout_x1;
        iVar32 = extraout_w10;
        iVar24 = extraout_w8;
        iVar13 = extraout_w9;
        if (extraout_x1 == extraout_x11) {
          if (extraout_x1 == param_4) {
            func_0x006f7c70();
            uVar15 = OUTLINED_FUNCTION_734();
            func_0x006a6450(uVar15,0x51e71);
            goto LAB_00522a58;
          }
          uVar38 = extraout_x1 << 1;
          if (param_4 <= extraout_x1 << 1) {
            uVar38 = param_4;
          }
          uVar15 = func_0x00490108(param_1,uVar38);
          func_0x006f4ec8(param_1[1],uVar15,strm.total_out);
          uVar38 = extraout_x1_00;
          iVar32 = extraout_w10_00;
          iVar24 = extraout_w8_00;
          iVar13 = extraout_w9_00;
        }
        lVar16 = (long)param_1 + 1;
        if (iVar32 != 0) {
          lVar16 = param_1[2];
          iVar13 = iVar24;
        }
        uVar42 = iVar13 - (int)uVar38;
        strm.avail_out = uVar42;
        strm.next_out = (byte *)(lVar16 + uVar38);
        iVar13 = inflateStateCheck(&strm);
        pvVar10 = strm.state;
        if (((iVar13 == 0) && (lVar16 != 0)) &&
           ((uVar9 = strm.avail_in, strm.next_in != (void *)0x0 || (strm.avail_in == 0)))) {
          iVar13 = *(int *)((long)strm.state + 8);
          pbVar37 = (byte *)(lVar16 + uVar38);
          if (iVar13 == 0x3f3f) {
            iVar13 = 0x3f40;
            *(undefined4 *)((long)strm.state + 8) = 0x3f40;
            pbVar37 = strm.next_out;
            uVar42 = strm.avail_out;
          }
          uVar39 = *(ulong *)((long)strm.state + 0x50);
          uVar44 = 0;
          uVar38 = (ulong)*(uint *)((long)strm.state + 0x58);
          lVar16 = (long)strm.state + 0x558;
          lVar2 = (long)strm.state + 0x98;
          pbVar35 = strm.next_in;
          uVar17 = strm.avail_in;
          uVar43 = uVar42;
LAB_00521130:
          if (0x1d < iVar13 - 0x3f34U) goto LAB_00522a40;
          uVar14 = 0xfffffffd;
          uVar41 = uVar38 & 0xffffffff;
          pvVar27 = (inflate_state *)0x4ff76;
          pbVar36 = pbVar37;
          switch(iVar13) {
          case 0x3f34:
            uVar14 = *(uint *)((long)pvVar10 + 0x10);
            if (uVar14 == 0) {
              uVar26 = 0x3f40;
              goto LAB_00522758;
            }
            while (uVar38 = uVar41, uVar38 < 0x10) {
              if (uVar17 == 0) {
                uVar17 = 0;
                goto LAB_005227c4;
              }
              uVar17 = uVar17 - 1;
              uVar39 = ((ulong)*pbVar35 << (uVar38 & 0x3f)) + uVar39;
              pbVar35 = pbVar35 + 1;
              uVar41 = uVar38 + 8;
            }
            if (((uVar14 >> 1 & 1) == 0) || (uVar39 != 0x8b1f)) {
              if (*(long *)((long)pvVar10 + 0x30) != 0) {
                *(undefined4 *)(*(long *)((long)pvVar10 + 0x30) + 0x48) = 0xffffffff;
                uVar14 = *(uint *)((long)pvVar10 + 0x10);
              }
              if (((uVar14 & 1) == 0) || (((uVar39 & 0xff) * 0x100 + (uVar39 >> 8)) % 0x1f != 0)) {
                pvVar12 = (void *)0x4bdc9;
                goto LAB_005226fc;
              }
              pvVar12 = (void *)0x4ff76;
              if ((uVar39 & 0xf) != 8) goto LAB_005226fc;
              uVar25 = (uint)(uVar39 >> 4) & 0xf;
              uVar14 = uVar25 + 8;
              uVar33 = *(uint *)((long)pvVar10 + 0x38);
              if (*(uint *)((long)pvVar10 + 0x38) == 0) {
                *(uint *)((long)pvVar10 + 0x38) = uVar14;
                uVar33 = uVar14;
              }
              if (uVar25 < 8 && uVar14 <= uVar33) {
                auVar45 = func_0x006e996c();
                uVar44 = uVar44 & 0xffffffff;
                *(undefined4 *)((long)pvVar10 + 0x18) = 0;
                *(int *)((long)pvVar10 + 0x1c) = extraout_w9_01 << (ulong)(extraout_w8_01 & 0x1f);
                strm.adler = adler32(auVar45._0_8_,auVar45._8_8_,0);
                uVar38 = 0;
                uVar26 = 0x3f3f;
                if ((uVar39 & 0x2000) != 0) {
                  uVar26 = 0x3f3d;
                }
                uVar39 = 0;
                *(ulong *)((long)pvVar10 + 0x20) = strm.adler;
              }
              else {
                uVar39 = uVar39 >> 4;
                strm.msg = (void *)0x4788b;
                uVar26 = 0x3f51;
                uVar38 = (ulong)((int)uVar38 - 4);
              }
              goto LAB_00522700;
            }
            if (*(int *)((long)pvVar10 + 0x38) == 0) {
              *(undefined4 *)((long)pvVar10 + 0x38) = 0xf;
            }
            uVar15 = func_0x006f1dcc();
            *(undefined8 *)((long)pvVar10 + 0x20) = uVar15;
            local_64 = CONCAT22(local_64._2_2_,0x8b1f);
            uVar15 = crc32(uVar15,&local_64,2);
            uVar39 = 0;
            uVar38 = 0;
            uVar26 = 0x3f35;
            *(undefined8 *)((long)pvVar10 + 0x20) = uVar15;
            goto LAB_00521e4c;
          case 0x3f35:
            for (; uVar41 < 0x10; uVar41 = uVar41 + 8) {
              if (uVar17 == 0) goto LAB_005227c4;
              uVar17 = uVar17 - 1;
              uVar39 = ((ulong)*pbVar35 << (uVar41 & 0x3f)) + uVar39;
              pbVar35 = pbVar35 + 1;
            }
            uVar14 = (uint)uVar39;
            *(uint *)((long)pvVar10 + 0x18) = uVar14;
            if ((uVar14 & 0xff) == 8) {
              if ((uVar39 & 0xe000) == 0) {
                if (*(uint **)((long)pvVar10 + 0x30) != (uint *)0x0) {
                  **(uint **)((long)pvVar10 + 0x30) = uVar14 >> 8 & 1;
                  uVar14 = *(uint *)((long)pvVar10 + 0x18);
                }
                if (((uVar14 >> 9 & 1) != 0) && ((*(byte *)((long)pvVar10 + 0x10) >> 2 & 1) != 0)) {
                  local_64 = CONCAT22(local_64._2_2_,(short)uVar39);
                  uVar44 = uVar44 & 0xffffffff;
                  uVar15 = crc32(*(undefined8 *)((long)pvVar10 + 0x20),&local_64,2);
                  *(undefined8 *)((long)pvVar10 + 0x20) = uVar15;
                }
                uVar39 = 0;
                uVar38 = 0;
                *(undefined4 *)((long)pvVar10 + 8) = 0x3f36;
                goto switchD_00521164_caseD_3f36;
              }
              pvVar27 = (inflate_state *)0x3c3f1;
            }
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f51;
            uVar38 = uVar41 & 0xffffffff;
            strm.msg = pvVar27;
            break;
          case 0x3f36:
switchD_00521164_caseD_3f36:
            while ((uVar38 & 0xffffffff) < 0x20) {
              if (uVar17 == 0) goto LAB_005227c4;
              uVar44 = func_0x006ef0c8(uVar44);
            }
            if (*(long *)((long)pvVar10 + 0x30) != 0) {
              *(ulong *)(*(long *)((long)pvVar10 + 0x30) + 8) = uVar39;
            }
            if (((*(byte *)((long)pvVar10 + 0x19) >> 1 & 1) != 0) &&
               ((*(byte *)((long)pvVar10 + 0x10) >> 2 & 1) != 0)) {
              local_64 = (undefined4)uVar39;
              uVar44 = uVar44 & 0xffffffff;
              uVar15 = crc32(*(undefined8 *)((long)pvVar10 + 0x20),&local_64,4);
              *(undefined8 *)((long)pvVar10 + 0x20) = uVar15;
            }
            uVar39 = 0;
            uVar38 = 0;
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f37;
          case 0x3f37:
            while ((uVar38 & 0xffffffff) < 0x10) {
              if (uVar17 == 0) goto LAB_005227c4;
              uVar44 = func_0x006ef0c8(uVar44);
            }
            if (*(long *)((long)pvVar10 + 0x30) != 0) {
              *(uint *)(*(long *)((long)pvVar10 + 0x30) + 0x10) = (uint)uVar39 & 0xff;
              *(int *)(*(long *)((long)pvVar10 + 0x30) + 0x14) = (int)(uVar39 >> 8);
            }
            uVar14 = *(uint *)((long)pvVar10 + 0x18);
            if (((uVar14 >> 9 & 1) != 0) && ((*(byte *)((long)pvVar10 + 0x10) >> 2 & 1) != 0)) {
              local_64 = CONCAT22(local_64._2_2_,(short)uVar39);
              uVar44 = uVar44 & 0xffffffff;
              uVar15 = crc32(*(undefined8 *)((long)pvVar10 + 0x20),&local_64,2);
              *(undefined8 *)((long)pvVar10 + 0x20) = uVar15;
            }
            uVar39 = 0;
            uVar38 = 0;
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f38;
joined_r0x0052140c:
            if ((uVar14 >> 10 & 1) == 0) {
              if (*(long *)((long)pvVar10 + 0x30) != 0) {
                *(undefined8 *)(*(long *)((long)pvVar10 + 0x30) + 0x18) = 0;
              }
            }
            else {
              while ((uVar38 & 0xffffffff) < 0x10) {
                if (uVar17 == 0) goto LAB_005227c4;
                uVar44 = func_0x006ef0c8(uVar44);
              }
              *(int *)((long)pvVar10 + 0x5c) = (int)uVar39;
              if (*(long *)((long)pvVar10 + 0x30) != 0) {
                *(int *)(*(long *)((long)pvVar10 + 0x30) + 0x20) = (int)uVar39;
                uVar14 = *(uint *)((long)pvVar10 + 0x18);
              }
              if (((uVar14 >> 9 & 1) == 0) || ((*(byte *)((long)pvVar10 + 0x10) >> 2 & 1) == 0)) {
                uVar39 = 0;
                uVar38 = 0;
              }
              else {
                local_64 = CONCAT22(local_64._2_2_,(short)uVar39);
                uVar44 = uVar44 & 0xffffffff;
                uVar15 = crc32(*(undefined8 *)((long)pvVar10 + 0x20),&local_64,2);
                uVar39 = 0;
                uVar38 = 0;
                *(undefined8 *)((long)pvVar10 + 0x20) = uVar15;
              }
            }
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f39;
switchD_00521164_caseD_3f39:
            uVar14 = *(uint *)((long)pvVar10 + 0x18);
            if ((uVar14 >> 10 & 1) != 0) {
              uVar25 = *(uint *)((long)pvVar10 + 0x5c);
              uVar33 = uVar25;
              if (uVar17 <= uVar25) {
                uVar33 = uVar17;
              }
              if (uVar33 != 0) {
                lVar28 = *(long *)((long)pvVar10 + 0x30);
                if ((lVar28 != 0) && (*(long *)(lVar28 + 0x18) != 0)) {
                  uVar4 = *(uint *)(lVar28 + 0x24);
                  uVar25 = *(int *)(lVar28 + 0x20) - uVar25;
                  if (uVar25 <= uVar4 && uVar4 - uVar25 != 0) {
                    uVar44 = uVar44 & 0xffffffff;
                    uVar14 = uVar4 - uVar25;
                    if (uVar25 + uVar33 <= uVar4) {
                      uVar14 = uVar33;
                    }
                    func_0x006fbd10(*(long *)(lVar28 + 0x18) + (ulong)uVar25,pbVar35,uVar14);
                    uVar14 = *(uint *)((long)pvVar10 + 0x18);
                  }
                }
                if (((uVar14 >> 9 & 1) != 0) && ((*(byte *)((long)pvVar10 + 0x10) >> 2 & 1) != 0)) {
                  uVar44 = uVar44 & 0xffffffff;
                  uVar15 = crc32(*(undefined8 *)((long)pvVar10 + 0x20),pbVar35,uVar33);
                  *(undefined8 *)((long)pvVar10 + 0x20) = uVar15;
                }
                pbVar35 = pbVar35 + uVar33;
                uVar17 = uVar17 - uVar33;
                uVar25 = *(int *)((long)pvVar10 + 0x5c) - uVar33;
                *(uint *)((long)pvVar10 + 0x5c) = uVar25;
              }
              if (uVar25 != 0) goto LAB_005227c4;
            }
            *(undefined4 *)((long)pvVar10 + 0x5c) = 0;
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f3a;
joined_r0x00521440:
            if ((uVar14 >> 0xb & 1) == 0) {
              if (*(long *)((long)pvVar10 + 0x30) != 0) {
                *(undefined8 *)(*(long *)((long)pvVar10 + 0x30) + 0x28) = 0;
              }
            }
            else {
              if (uVar17 == 0) goto LAB_005227c4;
              uVar41 = 0;
              do {
                lVar28 = *(long *)((long)pvVar10 + 0x30);
                bVar5 = pbVar35[uVar41];
                if ((lVar28 != 0) && (lVar31 = *(long *)(lVar28 + 0x28), lVar31 != 0)) {
                  uVar14 = *(uint *)((long)pvVar10 + 0x5c);
                  if (uVar14 < *(uint *)(lVar28 + 0x30)) {
                    *(uint *)((long)pvVar10 + 0x5c) = uVar14 + 1;
                    *(byte *)(lVar31 + (ulong)uVar14) = bVar5;
                  }
                }
                uVar41 = uVar41 + 1;
              } while ((bVar5 != 0) && (uVar41 < uVar17));
              if (((*(byte *)((long)pvVar10 + 0x19) >> 1 & 1) != 0) &&
                 ((*(byte *)((long)pvVar10 + 0x10) >> 2 & 1) != 0)) {
                uVar44 = uVar44 & 0xffffffff;
                uVar15 = crc32(*(undefined8 *)((long)pvVar10 + 0x20),pbVar35,uVar41 & 0xffffffff);
                *(undefined8 *)((long)pvVar10 + 0x20) = uVar15;
              }
              pbVar35 = pbVar35 + (uVar41 & 0xffffffff);
              uVar17 = uVar17 - (int)uVar41;
              if (bVar5 != 0) goto LAB_005227c4;
            }
            *(undefined4 *)((long)pvVar10 + 0x5c) = 0;
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f3b;
switchD_00521164_caseD_3f3b:
            if ((*(byte *)((long)pvVar10 + 0x19) >> 4 & 1) == 0) {
              if (*(long *)((long)pvVar10 + 0x30) != 0) {
                *(undefined8 *)(*(long *)((long)pvVar10 + 0x30) + 0x38) = 0;
              }
            }
            else {
              if (uVar17 == 0) goto LAB_005227c4;
              uVar41 = 0;
              do {
                lVar28 = *(long *)((long)pvVar10 + 0x30);
                bVar5 = pbVar35[uVar41];
                if ((lVar28 != 0) && (lVar31 = *(long *)(lVar28 + 0x38), lVar31 != 0)) {
                  uVar14 = *(uint *)((long)pvVar10 + 0x5c);
                  if (uVar14 < *(uint *)(lVar28 + 0x40)) {
                    *(uint *)((long)pvVar10 + 0x5c) = uVar14 + 1;
                    *(byte *)(lVar31 + (ulong)uVar14) = bVar5;
                  }
                }
                uVar41 = uVar41 + 1;
              } while ((bVar5 != 0) && (uVar41 < uVar17));
              if (((*(byte *)((long)pvVar10 + 0x19) >> 1 & 1) != 0) &&
                 ((*(byte *)((long)pvVar10 + 0x10) >> 2 & 1) != 0)) {
                uVar44 = uVar44 & 0xffffffff;
                uVar15 = crc32(*(undefined8 *)((long)pvVar10 + 0x20),pbVar35,uVar41 & 0xffffffff);
                *(undefined8 *)((long)pvVar10 + 0x20) = uVar15;
              }
              pbVar35 = pbVar35 + (uVar41 & 0xffffffff);
              uVar17 = uVar17 - (int)uVar41;
              if (bVar5 != 0) goto LAB_005227c4;
            }
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f3c;
switchD_00521164_caseD_3f3c:
            if ((*(uint *)((long)pvVar10 + 0x18) >> 9 & 1) != 0) {
              for (uVar38 = uVar38 & 0xffffffff; uVar38 < 0x10; uVar38 = uVar38 + 8) {
                if (uVar17 == 0) goto LAB_005227c4;
                uVar17 = uVar17 - 1;
                uVar39 = ((ulong)*pbVar35 << (uVar38 & 0x3f)) + uVar39;
                pbVar35 = pbVar35 + 1;
              }
              if (((*(byte *)((long)pvVar10 + 0x10) >> 2 & 1) != 0) &&
                 (uVar39 != *(ushort *)((long)pvVar10 + 0x20))) {
                strm.msg = (void *)0x51eab;
LAB_00521e60:
                *(undefined4 *)((long)pvVar10 + 8) = 0x3f51;
                break;
              }
              uVar39 = 0;
              uVar38 = 0;
            }
            if (*(long *)((long)pvVar10 + 0x30) != 0) {
              *(uint *)(*(long *)((long)pvVar10 + 0x30) + 0x44) =
                   *(uint *)((long)pvVar10 + 0x18) >> 9 & 1;
              *(undefined4 *)(*(long *)((long)pvVar10 + 0x30) + 0x48) = 1;
            }
            strm.adler = func_0x006f1dcc();
            uVar26 = 0x3f3f;
            *(ulong *)((long)pvVar10 + 0x20) = strm.adler;
LAB_00521e4c:
            uVar44 = uVar44 & 0xffffffff;
            *(undefined4 *)((long)pvVar10 + 8) = uVar26;
            break;
          case 0x3f38:
            uVar14 = *(uint *)((long)pvVar10 + 0x18);
            goto joined_r0x0052140c;
          case 0x3f39:
            goto switchD_00521164_caseD_3f39;
          case 0x3f3a:
            uVar14 = *(uint *)((long)pvVar10 + 0x18);
            goto joined_r0x00521440;
          case 0x3f3b:
            goto switchD_00521164_caseD_3f3b;
          case 0x3f3c:
            goto switchD_00521164_caseD_3f3c;
          case 0x3f3d:
            for (; uVar41 < 0x20; uVar41 = uVar41 + 8) {
              if (uVar17 == 0) goto LAB_005227c4;
              uVar17 = uVar17 - 1;
              uVar39 = ((ulong)*pbVar35 << (uVar41 & 0x3f)) + uVar39;
              pbVar35 = pbVar35 + 1;
            }
            uVar38 = 0;
            uVar14 = ((uint)uVar39 & 0xff00ff00) >> 8 | ((uint)uVar39 & 0xff00ff) << 8;
            strm.adler = (ulong)(uVar14 >> 0x10 | uVar14 << 0x10);
            uVar39 = 0;
            *(ulong *)((long)pvVar10 + 0x20) = strm.adler;
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f3e;
          case 0x3f3e:
            if (*(int *)((long)pvVar10 + 0x14) == 0) {
              func_0x006ead54();
              goto LAB_00522a40;
            }
            uVar44 = uVar44 & 0xffffffff;
            strm.adler = adler32(0,0,0);
            *(ulong *)((long)pvVar10 + 0x20) = strm.adler;
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f3f;
switchD_00521164_caseD_3f3f:
            uVar14 = (uint)uVar38;
            if (*(int *)((long)pvVar10 + 0xc) == 0) {
              while ((uint)uVar38 < 3) {
                if (uVar17 == 0) goto LAB_005227dc;
                uVar17 = uVar17 - 1;
                uVar39 = ((ulong)*pbVar35 << (uVar38 & 0x3f)) + uVar39;
                pbVar35 = pbVar35 + 1;
                uVar38 = (ulong)(uVar14 | 8);
              }
              *(uint *)((long)pvVar10 + 0xc) = (uint)uVar39 & 1;
              uVar15 = _DAT_00031698;
              uVar26 = 0x3f41;
              switch((uint)uVar39 >> 1 & 3) {
              case 1:
                *(undefined8 *)((long)pvVar10 + 0x68) = 0xabbd6;
                *(undefined8 *)((long)pvVar10 + 0x70) = 0xac3d6;
                uVar26 = 0x3f47;
                *(undefined8 *)((long)pvVar10 + 0x78) = uVar15;
                break;
              case 2:
                uVar26 = 0x3f44;
                break;
              case 3:
                strm.msg = (void *)0x44a7b;
                uVar26 = 0x3f51;
              }
              uVar39 = uVar39 >> 3;
              *(undefined4 *)((long)pvVar10 + 8) = uVar26;
              uVar38 = (ulong)((uint)uVar38 - 3);
            }
            else {
              uVar38 = (ulong)(uVar14 & 0xfffffff8);
              uVar39 = uVar39 >> (uVar14 & 7);
              uVar26 = 0x3f4e;
LAB_00522758:
              *(undefined4 *)((long)pvVar10 + 8) = uVar26;
            }
            break;
          default:
            goto switchD_00521164_caseD_3f3f;
          case 0x3f41:
            uVar14 = (uint)uVar38;
            uVar38 = (ulong)(uVar14 & 0xfffffff8);
            uVar39 = uVar39 >> (ulong)(uVar14 & 7);
            while (uVar38 < 0x20) {
              if (uVar17 == 0) goto LAB_005227c4;
              uVar44 = func_0x006ef0c8(uVar44);
            }
            if ((uVar39 & 0xffff ^ uVar39 >> 0x10) == 0xffff) {
              uVar38 = 0;
              uVar14 = (uint)uVar39;
              uVar39 = 0;
              *(uint *)((long)pvVar10 + 0x5c) = uVar14 & 0xffff;
              *(undefined4 *)((long)pvVar10 + 8) = 0x3f42;
              goto switchD_00521164_caseD_3f42;
            }
            strm.msg = (void *)0x380c1;
            goto LAB_00521e60;
          case 0x3f42:
switchD_00521164_caseD_3f42:
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f43;
          case 0x3f43:
            uVar14 = *(uint *)((long)pvVar10 + 0x5c);
            if (uVar14 == 0) {
              uVar26 = 0x3f3f;
              goto LAB_00522758;
            }
            if (uVar17 <= uVar14) {
              uVar14 = uVar17;
            }
            if (uVar42 <= uVar14) {
              uVar14 = uVar42;
            }
            if (uVar14 != 0) {
              func_0x006e1c94(pbVar37);
              uVar44 = uVar44 & 0xffffffff;
              func_0x006fbd10();
              pbVar35 = pbVar35 + uVar14;
              uVar17 = uVar17 - uVar14;
              uVar42 = uVar42 - uVar14;
              *(uint *)((long)pvVar10 + 0x5c) = *(int *)((long)pvVar10 + 0x5c) - uVar14;
              pbVar36 = pbVar37 + uVar14;
              break;
            }
            goto LAB_005227c4;
          case 0x3f44:
            for (; uVar41 < 0xe; uVar41 = uVar41 + 8) {
              if (uVar17 == 0) goto LAB_005227c4;
              uVar17 = uVar17 - 1;
              uVar39 = ((ulong)*pbVar35 << (uVar41 & 0x3f)) + uVar39;
              pbVar35 = pbVar35 + 1;
            }
            uVar30 = uVar39 >> 5 & 0x1f;
            uVar27 = uVar39 & 0x1f;
            uVar38 = uVar39 >> 10;
            uVar39 = uVar39 >> 0xe;
            uVar23 = (uVar38 & 0xf) + 4;
            uVar38 = (ulong)((int)uVar41 - 0xe);
            *(int *)((long)pvVar10 + 0x84) = (int)uVar27 + 0x101;
            *(int *)((long)pvVar10 + 0x88) = (int)uVar30 + 1;
            *(int *)((long)pvVar10 + 0x80) = (int)uVar23;
            if (uVar27 < 0x1e && uVar30 < 0x1e) {
              uVar14 = 0;
              *(undefined4 *)((long)pvVar10 + 0x8c) = 0;
              *(undefined4 *)((long)pvVar10 + 8) = 0x3f45;
              goto LAB_00521820;
            }
            strm.msg = (void *)0x41914;
            goto LAB_005226bc;
          case 0x3f45:
            uVar14 = *(uint *)((long)pvVar10 + 0x8c);
            uVar23 = (ulong)*(uint *)((long)pvVar10 + 0x80);
LAB_00521820:
            uVar41 = (ulong)uVar14;
            while (uVar41 < uVar23) {
              uVar33 = (uint)uVar38;
              while ((uint)uVar38 < 3) {
                if (uVar17 == 0) {
                  uVar17 = 0;
                  goto LAB_005227c4;
                }
                uVar17 = uVar17 - 1;
                uVar39 = ((ulong)*pbVar35 << (uVar38 & 0x3f)) + uVar39;
                pbVar35 = pbVar35 + 1;
                uVar38 = (ulong)(uVar33 | 8);
              }
              uVar38 = (ulong)((uint)uVar38 - 3);
              uVar14 = uVar14 + 1;
              *(int *)((long)pvVar10 + 0x8c) = (int)(uVar41 + 1);
              uVar7 = (ushort)uVar39;
              uVar39 = uVar39 >> 3;
              *(ushort *)((long)pvVar10 + (ulong)*(ushort *)(uVar41 * 2 + 0xabbb0) * 2 + 0x98) =
                   uVar7 & 7;
              uVar41 = uVar41 + 1;
            }
            for (lVar28 = 0; (ulong)uVar14 + lVar28 < 0x13; lVar28 = lVar28 + 1) {
              *(int *)((long)pvVar10 + 0x8c) = (int)uVar41 + (int)lVar28 + 1;
              *(undefined2 *)
               ((long)pvVar10 +
               (ulong)*(ushort *)((ulong)uVar14 * 2 + 0xabbb0 + lVar28 * 2) * 2 + 0x98) = 0;
            }
            *(long *)((long)pvVar10 + 0x90) = lVar16;
            *(long *)((long)pvVar10 + 0x68) = lVar16;
            *(undefined4 *)((long)pvVar10 + 0x78) = 7;
            uVar14 = inflate_table(0,lVar2,0x13,(long)pvVar10 + 0x90,(long)pvVar10 + 0x78,
                                   (long)pvVar10 + 0x318);
            uVar44 = (ulong)uVar14;
            if (uVar14 == 0) {
              uVar14 = 0;
              *(undefined4 *)((long)pvVar10 + 0x8c) = 0;
              *(undefined4 *)((long)pvVar10 + 8) = 0x3f46;
              goto LAB_00521210;
            }
            pvVar12 = (void *)0x52f1f;
            goto LAB_005226fc;
          case 0x3f46:
            uVar14 = *(uint *)((long)pvVar10 + 0x8c);
LAB_00521210:
            iVar13 = *(int *)((long)pvVar10 + 0x84);
            uVar33 = *(int *)((long)pvVar10 + 0x88) + iVar13;
            while (uVar14 < uVar33) {
              uVar38 = uVar38 & 0xffffffff;
              while( true ) {
                lVar28 = *(long *)((long)pvVar10 + 0x68) +
                         (ulong)(~(-1 << (ulong)(*(uint *)((long)pvVar10 + 0x78) & 0x1f)) &
                                (uint)uVar39) * 4;
                bVar5 = *(byte *)(lVar28 + 1);
                uVar41 = (ulong)bVar5;
                if (uVar41 <= uVar38) break;
                if (uVar17 == 0) goto LAB_005227dc;
                uVar17 = uVar17 - 1;
                uVar41 = uVar38 & 0x3f;
                uVar38 = uVar38 + 8;
                uVar39 = ((ulong)*pbVar35 << uVar41) + uVar39;
                pbVar35 = pbVar35 + 1;
              }
              uVar7 = *(ushort *)(lVar28 + 2);
              uVar25 = (uint)bVar5;
              if (uVar7 < 0x10) {
                uVar23 = (ulong)uVar14;
                uVar14 = uVar14 + 1;
                uVar39 = uVar39 >> (uVar41 & 0x3f);
                *(uint *)((long)pvVar10 + 0x8c) = uVar14;
                uVar38 = (ulong)((int)uVar38 - uVar25);
                *(ushort *)((long)pvVar10 + uVar23 * 2 + 0x98) = uVar7;
              }
              else {
                if (uVar7 == 0x10) {
                  for (; uVar38 < uVar41 + 2; uVar38 = uVar38 + 8) {
                    if (uVar17 == 0) goto LAB_005229d0;
                    uVar17 = uVar17 - 1;
                    uVar39 = ((ulong)*pbVar35 << (uVar38 & 0x3f)) + uVar39;
                    pbVar35 = pbVar35 + 1;
                  }
                  uVar39 = uVar39 >> (uVar41 & 0x3f);
                  uVar25 = (int)uVar38 - uVar25;
                  uVar38 = (ulong)uVar25;
                  if (uVar14 != 0) {
                    uVar38 = (ulong)(uVar25 - 2);
                    uVar34 = *(undefined2 *)((long)pvVar10 + (ulong)(uVar14 - 1) * 2 + 0x98);
                    uVar25 = (uint)uVar39;
                    uVar39 = uVar39 >> 2;
                    iVar32 = (uVar25 & 3) + 3;
                    goto LAB_00521390;
                  }
LAB_00521f2c:
                  strm.msg = (void *)0x34fe4;
                  pvVar12 = strm.msg;
                  goto LAB_005226fc;
                }
                if (uVar7 == 0x11) {
                  for (; uVar38 < uVar41 + 3; uVar38 = uVar38 + 8) {
                    if (uVar17 == 0) goto LAB_005229d0;
                    uVar17 = uVar17 - 1;
                    uVar39 = ((ulong)*pbVar35 << (uVar38 & 0x3f)) + uVar39;
                    pbVar35 = pbVar35 + 1;
                  }
                  uVar41 = uVar39 >> (uVar41 & 0x3f);
                  uVar34 = 0;
                  uVar38 = (ulong)(((int)uVar38 - uVar25) - 3);
                  uVar39 = uVar41 >> 3;
                  iVar32 = ((uint)uVar41 & 7) + 3;
                }
                else {
                  for (; uVar38 < uVar41 + 7; uVar38 = uVar38 + 8) {
                    if (uVar17 == 0) goto LAB_005229d0;
                    uVar17 = uVar17 - 1;
                    uVar39 = ((ulong)*pbVar35 << (uVar38 & 0x3f)) + uVar39;
                    pbVar35 = pbVar35 + 1;
                  }
                  uVar41 = uVar39 >> (uVar41 & 0x3f);
                  uVar34 = 0;
                  uVar38 = (ulong)(((int)uVar38 - uVar25) - 7);
                  uVar39 = uVar41 >> 7;
                  iVar32 = ((uint)uVar41 & 0x7f) + 0xb;
                }
LAB_00521390:
                if (uVar33 < iVar32 + uVar14) goto LAB_00521f2c;
                for (; iVar32 != 0; iVar32 = iVar32 + -1) {
                  uVar41 = (ulong)uVar14;
                  uVar14 = uVar14 + 1;
                  *(undefined2 *)((long)pvVar10 + uVar41 * 2 + 0x98) = uVar34;
                }
                *(uint *)((long)pvVar10 + 0x8c) = uVar14;
              }
            }
            if (*(short *)((long)pvVar10 + 0x298) == 0) {
              strm.msg = (void *)0x4bde0;
            }
            else {
              *(long *)((long)pvVar10 + 0x90) = lVar16;
              *(long *)((long)pvVar10 + 0x68) = lVar16;
              *(undefined4 *)((long)pvVar10 + 0x78) = 9;
              uVar14 = inflate_table(1,lVar2,iVar13,(long)pvVar10 + 0x90,(long)pvVar10 + 0x78,
                                     (long)pvVar10 + 0x318);
              if (uVar14 == 0) {
                *(undefined8 *)((long)pvVar10 + 0x70) = *(undefined8 *)((long)pvVar10 + 0x90);
                *(undefined4 *)((long)pvVar10 + 0x7c) = 6;
                uVar14 = inflate_table(2,lVar2 + (ulong)*(uint *)((long)pvVar10 + 0x84) * 2,
                                       *(undefined4 *)((long)pvVar10 + 0x88),(long)pvVar10 + 0x90,
                                       (long)pvVar10 + 0x7c,(long)pvVar10 + 0x318);
                uVar44 = (ulong)uVar14;
                if (uVar14 == 0) {
                  *(undefined4 *)((long)pvVar10 + 8) = 0x3f47;
                  goto switchD_00521164_caseD_3f47;
                }
                strm.msg = (void *)0x4dd38;
              }
              else {
                uVar44 = (ulong)uVar14;
                strm.msg = (void *)0x3b1e5;
              }
            }
LAB_005226bc:
            uVar26 = 0x3f51;
            goto LAB_00522758;
          case 0x3f47:
switchD_00521164_caseD_3f47:
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f48;
          case 0x3f48:
            if ((5 < uVar17) && (0x101 < uVar42)) {
              *(ulong *)((long)pvVar10 + 0x50) = uVar39;
              *(int *)((long)pvVar10 + 0x58) = (int)uVar38;
              uVar14 = *(uint *)((long)strm.state + 0x78);
              uVar33 = *(uint *)((long)strm.state + 0x7c);
              iVar13 = *(int *)((long)strm.state + 0x3c);
              uVar25 = *(uint *)((long)strm.state + 0x40);
              uVar4 = *(uint *)((long)strm.state + 0x44);
              pbVar3 = *(byte **)((long)strm.state + 0x48);
              uVar38 = *(ulong *)((long)strm.state + 0x50);
              lVar28 = *(long *)((long)strm.state + 0x68);
              lVar31 = *(long *)((long)strm.state + 0x70);
              uVar18 = *(uint *)((long)strm.state + 0x58);
              pbVar29 = pbVar35 + (uVar17 - 5);
LAB_00522004:
              uVar39 = (ulong)uVar18;
              if (uVar18 < 0xf) {
                bVar5 = *pbVar35;
                pbVar40 = pbVar35 + 1;
                pbVar35 = pbVar35 + 2;
                uVar41 = uVar39 & 0x3f;
                uVar39 = (ulong)(uVar18 | 0x10);
                uVar38 = ((ulong)bVar5 << uVar41) + uVar38 +
                         ((ulong)*pbVar40 << ((ulong)(uVar18 + 8) & 0x3f));
              }
              pbVar40 = (byte *)(lVar28 + (uVar38 & (uint)~(-1 << (ulong)(uVar14 & 0x1f))) * 4);
              while( true ) {
                bVar5 = *pbVar40;
                uVar38 = uVar38 >> ((ulong)pbVar40[1] & 0x3f);
                uVar17 = (int)uVar39 - (uint)pbVar40[1];
                uVar39 = (ulong)uVar17;
                if (bVar5 == 0) break;
                if ((bVar5 >> 4 & 1) != 0) {
                  uVar18 = (uint)*(ushort *)(pbVar40 + 2);
                  uVar19 = bVar5 & 0xf;
                  pbVar40 = pbVar35;
                  if ((bVar5 & 0xf) != 0) {
                    if (uVar17 < uVar19) {
                      pbVar40 = pbVar35 + 1;
                      uVar17 = uVar17 + 8;
                      uVar38 = ((ulong)*pbVar35 << (uVar39 & 0x3f)) + uVar38;
                    }
                    uVar39 = (ulong)(uVar17 - uVar19);
                    uVar17 = (uint)uVar38;
                    uVar38 = uVar38 >> uVar19;
                    uVar18 = (uVar17 & (-1 << uVar19 ^ 0xffffffffU)) + uVar18;
                  }
                  uVar17 = (uint)uVar39;
                  if (uVar17 < 0xf) {
                    bVar5 = *pbVar40;
                    pbVar35 = pbVar40 + 1;
                    pbVar40 = pbVar40 + 2;
                    uVar41 = uVar39 & 0x3f;
                    uVar39 = (ulong)(uVar17 | 0x10);
                    uVar38 = ((ulong)bVar5 << uVar41) + uVar38 +
                             ((ulong)*pbVar35 << ((ulong)(uVar17 + 8) & 0x3f));
                  }
                  pbVar21 = (byte *)(lVar31 + (uVar38 & (uint)~(-1 << (ulong)(uVar33 & 0x1f))) * 4);
                  goto LAB_00522104;
                }
                if ((bVar5 >> 6 & 1) != 0) {
                  if ((bVar5 >> 5 & 1) == 0) {
                    strm.msg = (void *)0x4ab44;
                    goto LAB_00522428;
                  }
                  uVar26 = 0x3f3f;
                  goto LAB_00522438;
                }
                pbVar40 = (byte *)(lVar28 + (ulong)*(ushort *)(pbVar40 + 2) * 4 +
                                  (uVar38 & (uint)~(-1 << (ulong)(bVar5 & 0x1f))) * 4);
              }
              strm.next_out = pbVar36 + 1;
              *pbVar36 = pbVar40[2];
              goto LAB_00522080;
            }
            *(undefined4 *)((long)pvVar10 + 0x1bec) = 0;
            uVar38 = uVar38 & 0xffffffff;
            while( true ) {
              pbVar29 = (byte *)(*(long *)((long)pvVar10 + 0x68) +
                                (ulong)(~(-1 << (ulong)(*(uint *)((long)pvVar10 + 0x78) & 0x1f)) &
                                       (uint)uVar39) * 4);
              bVar5 = pbVar29[1];
              uVar41 = (ulong)bVar5;
              if (uVar41 <= uVar38) break;
              if (uVar17 == 0) goto LAB_005229b4;
              uVar17 = uVar17 - 1;
              uVar41 = uVar38 & 0x3f;
              uVar38 = uVar38 + 8;
              uVar39 = ((ulong)*pbVar35 << uVar41) + uVar39;
              pbVar35 = pbVar35 + 1;
            }
            bVar6 = *pbVar29;
            uVar7 = *(ushort *)(pbVar29 + 2);
            if (bVar6 - 1 < 0xf) {
              while( true ) {
                pbVar29 = (byte *)(*(long *)((long)pvVar10 + 0x68) +
                                  ((ulong)(((uint)uVar39 &
                                           ~(-1 << (ulong)((uint)bVar6 + (uint)bVar5 & 0x1f))) >>
                                          (uVar41 & 0x3f)) + (ulong)uVar7) * 4);
                if (pbVar29[1] + uVar41 <= uVar38) break;
                if (uVar17 == 0) goto LAB_005229b4;
                uVar17 = uVar17 - 1;
                uVar23 = uVar38 & 0x3f;
                uVar38 = uVar38 + 8;
                uVar39 = ((ulong)*pbVar35 << uVar23) + uVar39;
                pbVar35 = pbVar35 + 1;
              }
              uVar7 = *(ushort *)(pbVar29 + 2);
              bVar6 = *pbVar29;
              uVar39 = uVar39 >> (uVar41 & 0x3f);
              uVar38 = (ulong)((int)uVar38 - (uint)bVar5);
              uVar23 = uVar41;
              uVar41 = (ulong)pbVar29[1];
            }
            else {
              uVar23 = 0;
            }
            uVar39 = uVar39 >> (uVar41 & 0x3f);
            uVar38 = (ulong)(uint)((int)uVar38 - (int)uVar41);
            *(int *)((long)pvVar10 + 0x1bec) = (int)uVar23 + (int)uVar41;
            *(uint *)((long)pvVar10 + 0x5c) = (uint)uVar7;
            if (bVar6 == 0) {
              uVar26 = 0x3f4d;
LAB_00522700:
              *(undefined4 *)((long)pvVar10 + 8) = uVar26;
              break;
            }
            if ((bVar6 >> 5 & 1) != 0) {
              *(undefined4 *)((long)pvVar10 + 0x1bec) = 0xffffffff;
              *(undefined4 *)((long)pvVar10 + 8) = 0x3f3f;
              break;
            }
            if ((bVar6 >> 6 & 1) != 0) {
              pvVar12 = (void *)0x4ab44;
LAB_005226fc:
              strm.msg = pvVar12;
              uVar26 = 0x3f51;
              goto LAB_00522700;
            }
            uVar14 = bVar6 & 0xf;
            *(uint *)((long)pvVar10 + 100) = uVar14;
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f49;
            if ((bVar6 & 0xf) == 0) {
LAB_00522500:
              iVar13 = *(int *)((long)pvVar10 + 0x5c);
            }
            else {
LAB_005213d8:
              uVar38 = uVar38 & 0xffffffff;
              while( true ) {
                uVar33 = (uint)uVar38;
                if (uVar14 <= uVar33) break;
                if (uVar17 == 0) goto LAB_005227dc;
                uVar17 = uVar17 - 1;
                uVar41 = uVar38 & 0x3f;
                uVar38 = (ulong)(uVar33 + 8);
                uVar39 = ((ulong)*pbVar35 << uVar41) + uVar39;
                pbVar35 = pbVar35 + 1;
              }
              uVar38 = (ulong)(uVar33 - uVar14);
              uVar33 = (uint)uVar39;
              uVar39 = uVar39 >> ((ulong)uVar14 & 0x3f);
              *(uint *)((long)pvVar10 + 0x1bec) = *(int *)((long)pvVar10 + 0x1bec) + uVar14;
              iVar13 = *(int *)((long)pvVar10 + 0x5c) +
                       (uVar33 & (-1 << (ulong)(uVar14 & 0x1f) ^ 0xffffffffU));
              *(int *)((long)pvVar10 + 0x5c) = iVar13;
            }
            *(int *)((long)pvVar10 + 0x1bf0) = iVar13;
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f4a;
switchD_00521164_caseD_3f4a:
            uVar38 = uVar38 & 0xffffffff;
            while( true ) {
              pbVar29 = (byte *)(*(long *)((long)pvVar10 + 0x70) +
                                (ulong)(~(-1 << (ulong)(*(uint *)((long)pvVar10 + 0x7c) & 0x1f)) &
                                       (uint)uVar39) * 4);
              bVar5 = pbVar29[1];
              uVar41 = (ulong)bVar5;
              if (uVar41 <= uVar38) break;
              if (uVar17 == 0) goto LAB_005227dc;
              uVar17 = uVar17 - 1;
              uVar41 = uVar38 & 0x3f;
              uVar38 = uVar38 + 8;
              uVar39 = ((ulong)*pbVar35 << uVar41) + uVar39;
              pbVar35 = pbVar35 + 1;
            }
            bVar6 = *pbVar29;
            uVar7 = *(ushort *)(pbVar29 + 2);
            if (bVar6 < 0x10) {
              while( true ) {
                pbVar29 = (byte *)(*(long *)((long)pvVar10 + 0x70) +
                                  ((ulong)(((uint)uVar39 &
                                           ~(-1 << (ulong)((uint)bVar6 + (uint)bVar5 & 0x1f))) >>
                                          (uVar41 & 0x3f)) + (ulong)uVar7) * 4);
                if (pbVar29[1] + uVar41 <= uVar38) break;
                if (uVar17 == 0) goto LAB_005227dc;
                uVar17 = uVar17 - 1;
                uVar23 = uVar38 & 0x3f;
                uVar38 = uVar38 + 8;
                uVar39 = ((ulong)*pbVar35 << uVar23) + uVar39;
                pbVar35 = pbVar35 + 1;
              }
              uVar7 = *(ushort *)(pbVar29 + 2);
              uVar39 = uVar39 >> (uVar41 & 0x3f);
              bVar6 = *pbVar29;
              uVar38 = (ulong)((int)uVar38 - (uint)bVar5);
              iVar13 = *(int *)((long)pvVar10 + 0x1bec) + (uint)bVar5;
              uVar41 = (ulong)pbVar29[1];
            }
            else {
              iVar13 = *(int *)((long)pvVar10 + 0x1bec);
            }
            uVar39 = uVar39 >> (uVar41 & 0x3f);
            uVar38 = (ulong)(uint)((int)uVar38 - (int)uVar41);
            *(int *)((long)pvVar10 + 0x1bec) = iVar13 + (int)uVar41;
            if ((bVar6 >> 6 & 1) != 0) {
              pvVar12 = (void *)0x3913e;
              goto LAB_005226fc;
            }
            uVar14 = bVar6 & 0xf;
            *(uint *)((long)pvVar10 + 0x60) = (uint)uVar7;
            *(uint *)((long)pvVar10 + 100) = uVar14;
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f4b;
            if ((bVar6 & 0xf) != 0) {
LAB_0052261c:
              uVar38 = uVar38 & 0xffffffff;
              while( true ) {
                uVar33 = (uint)uVar38;
                if (uVar14 <= uVar33) break;
                if (uVar17 == 0) goto LAB_005227dc;
                uVar17 = uVar17 - 1;
                uVar41 = uVar38 & 0x3f;
                uVar38 = (ulong)(uVar33 + 8);
                uVar39 = ((ulong)*pbVar35 << uVar41) + uVar39;
                pbVar35 = pbVar35 + 1;
              }
              uVar38 = (ulong)(uVar33 - uVar14);
              uVar33 = (uint)uVar39;
              uVar39 = uVar39 >> ((ulong)uVar14 & 0x3f);
              *(uint *)((long)pvVar10 + 0x1bec) = *(int *)((long)pvVar10 + 0x1bec) + uVar14;
              *(uint *)((long)pvVar10 + 0x60) =
                   *(int *)((long)pvVar10 + 0x60) +
                   (uVar33 & (-1 << (ulong)(uVar14 & 0x1f) ^ 0xffffffffU));
            }
LAB_00522680:
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f4c;
switchD_00521164_caseD_3f4c:
            if (uVar42 != 0) {
              uVar14 = *(uint *)((long)pvVar10 + 0x60);
              if (uVar43 - uVar42 < uVar14) {
                uVar14 = uVar14 - (uVar43 - uVar42);
                if ((*(uint *)((long)pvVar10 + 0x40) < uVar14) &&
                   (*(int *)((long)pvVar10 + 0x1be8) != 0)) {
                  strm.msg = (void *)0x34ffe;
                  goto LAB_005226bc;
                }
                uVar25 = *(uint *)((long)pvVar10 + 0x44);
                uVar33 = uVar14 - uVar25;
                if (uVar14 < uVar25 || uVar33 == 0) {
                  uVar25 = uVar25 - uVar14;
                }
                else {
                  uVar25 = *(int *)((long)pvVar10 + 0x3c) - uVar33;
                  uVar14 = uVar33;
                }
                uVar33 = *(uint *)((long)pvVar10 + 0x5c);
                pbVar29 = (byte *)(*(long *)((long)pvVar10 + 0x48) + (ulong)uVar25);
                if (uVar33 <= uVar14) {
                  uVar14 = uVar33;
                }
              }
              else {
                uVar33 = *(uint *)((long)pvVar10 + 0x5c);
                pbVar29 = pbVar37 + -(ulong)uVar14;
                uVar14 = uVar33;
              }
              if (uVar42 <= uVar14) {
                uVar14 = uVar42;
              }
              *(uint *)((long)pvVar10 + 0x5c) = uVar33 - uVar14;
              uVar33 = uVar14;
              do {
                uVar33 = uVar33 - 1;
                pbVar36 = pbVar37 + 1;
                *pbVar37 = *pbVar29;
                pbVar29 = pbVar29 + 1;
                pbVar37 = pbVar36;
              } while (uVar33 != 0);
              uVar42 = uVar42 - uVar14;
              if (*(int *)((long)pvVar10 + 0x5c) != 0) break;
              uVar26 = 0x3f48;
              goto LAB_00522758;
            }
            goto LAB_005227c4;
          case 0x3f49:
            uVar14 = *(uint *)((long)pvVar10 + 100);
            if (uVar14 != 0) goto LAB_005213d8;
            goto LAB_00522500;
          case 0x3f4a:
            goto switchD_00521164_caseD_3f4a;
          case 0x3f4b:
            uVar14 = *(uint *)((long)pvVar10 + 100);
            if (uVar14 != 0) goto LAB_0052261c;
            goto LAB_00522680;
          case 0x3f4c:
            goto switchD_00521164_caseD_3f4c;
          case 0x3f4d:
            if (uVar42 == 0) goto LAB_005227c4;
            uVar42 = uVar42 - 1;
            pbVar36 = pbVar37 + 1;
            *pbVar37 = (byte)*(undefined4 *)((long)pvVar10 + 0x5c);
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f48;
            break;
          case 0x3f4e:
            uVar14 = 0;
            if (*(int *)((long)pvVar10 + 0x10) != 0) {
              for (; uVar41 < 0x20; uVar41 = uVar41 + 8) {
                if (uVar17 == 0) goto LAB_005227c4;
                uVar17 = uVar17 - 1;
                uVar39 = ((ulong)*pbVar35 << (uVar41 & 0x3f)) + uVar39;
                pbVar35 = pbVar35 + 1;
              }
              uVar38 = (ulong)(uVar43 - uVar42);
              strm.total_out = strm.total_out + uVar38;
              uVar14 = *(uint *)((long)pvVar10 + 0x10);
              *(ulong *)((long)pvVar10 + 0x28) = *(long *)((long)pvVar10 + 0x28) + uVar38;
              uVar33 = uVar14 & 4;
              if (((uVar14 >> 2 & 1) != 0) && (uVar43 != uVar42)) {
                uVar44 = uVar44 & 0xffffffff;
                if (*(int *)((long)pvVar10 + 0x18) == 0) {
                  strm.adler = adler32(*(undefined8 *)((long)pvVar10 + 0x20),(long)pbVar37 - uVar38)
                  ;
                }
                else {
                  strm.adler = crc32();
                }
                *(ulong *)((long)pvVar10 + 0x20) = strm.adler;
                uVar14 = *(uint *)((long)pvVar10 + 0x10);
                uVar33 = uVar14 & 4;
              }
              uVar43 = uVar42;
              if (uVar33 != 0) {
                uVar33 = ((uint)uVar39 & 0xff00ff00) >> 8 | ((uint)uVar39 & 0xff00ff) << 8;
                uVar38 = (ulong)(uVar33 >> 0x10 | uVar33 << 0x10);
                if (*(int *)((long)pvVar10 + 0x18) != 0) {
                  uVar38 = uVar39;
                }
                if (uVar38 != *(ulong *)((long)pvVar10 + 0x20)) {
                  strm.msg = (void *)0x4ff91;
                  *(undefined4 *)((long)pvVar10 + 8) = 0x3f51;
                  uVar38 = uVar41 & 0xffffffff;
                  break;
                }
              }
              uVar39 = 0;
              uVar38 = 0;
            }
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f4f;
            goto joined_r0x00521530;
          case 0x3f4f:
            uVar14 = *(uint *)((long)pvVar10 + 0x10);
joined_r0x00521530:
            if ((uVar14 != 0) && (*(int *)((long)pvVar10 + 0x18) != 0)) {
              for (uVar38 = uVar38 & 0xffffffff; uVar38 < 0x20; uVar38 = uVar38 + 8) {
                if (uVar17 == 0) goto LAB_005227c4;
                uVar17 = uVar17 - 1;
                uVar39 = ((ulong)*pbVar35 << (uVar38 & 0x3f)) + uVar39;
                pbVar35 = pbVar35 + 1;
              }
              if (((uVar14 >> 2 & 1) == 0) || (uVar39 == *(uint *)((long)pvVar10 + 0x28)))
              goto LAB_005229e8;
              strm.msg = (void *)0x4789f;
              goto LAB_00521e60;
            }
LAB_005229e8:
            *(undefined4 *)((long)pvVar10 + 8) = 0x3f50;
switchD_00521164_caseD_3f50:
            uVar14 = 1;
            goto switchD_00521164_caseD_3f51;
          case 0x3f50:
            goto switchD_00521164_caseD_3f50;
          case 0x3f51:
            goto switchD_00521164_caseD_3f51;
          }
          goto LAB_00522764;
        }
        goto LAB_00522a40;
      }
    }
  }
LAB_00522a60:
  func_0x006f8bfc();
  zcfree();
  strm.state = (void *)0x0;
LAB_00522a6c:
  uVar15 = OUTLINED_FUNCTION_734();
  uVar15 = func_0x006a6450(uVar15,0x4ff53);
  func_0x006e2488(uVar15,0x74eb20,0x49c430);
  func_0x006dd7fc();
  func_0x006dd3bc();
  OUTLINED_FUNCTION_102(0x734888);
  return;
LAB_005229d0:
  uVar17 = 0;
  goto LAB_005227c4;
LAB_00522104:
  bVar5 = *pbVar21;
  uVar38 = uVar38 >> ((ulong)pbVar21[1] & 0x3f);
  uVar17 = (int)uVar39 - (uint)pbVar21[1];
  uVar39 = (ulong)uVar17;
  pbVar35 = pbVar40;
  if ((bVar5 >> 4 & 1) != 0) goto LAB_0052213c;
  if ((bVar5 >> 6 & 1) != 0) {
    strm.msg = (void *)0x3913e;
    goto LAB_00522428;
  }
  pbVar21 = (byte *)(lVar31 + (ulong)*(ushort *)(pbVar21 + 2) * 4 +
                    (uVar38 & (uint)~(-1 << (ulong)(bVar5 & 0x1f))) * 4);
  goto LAB_00522104;
LAB_0052213c:
  uVar22 = bVar5 & 0xf;
  uVar19 = uVar17;
  if (uVar17 < uVar22) {
    pbVar35 = pbVar40 + 1;
    uVar19 = uVar17 + 8;
    uVar38 = ((ulong)*pbVar40 << (uVar39 & 0x3f)) + uVar38;
    if (uVar19 < uVar22) {
      uVar38 = ((ulong)pbVar40[1] << ((ulong)uVar19 & 0x3f)) + uVar38;
      pbVar35 = pbVar40 + 2;
      uVar19 = uVar17 + 0x10;
    }
  }
  uVar41 = uVar38 & (uint)~(-1 << uVar22);
  uVar38 = uVar38 >> uVar22;
  uVar41 = uVar41 + *(ushort *)(pbVar21 + 2);
  uVar8 = (int)pbVar36 - ((int)pbVar37 - (uVar43 - uVar42));
  uVar17 = (uint)uVar41 - uVar8;
  uVar39 = (ulong)(uVar19 - uVar22);
  if ((uint)uVar41 < uVar8 || uVar17 == 0) {
    lVar20 = -(uVar41 & 0xffffffff);
    pbVar36 = pbVar36 + -3;
    do {
      pbVar40 = pbVar36;
      uVar18 = uVar18 - 3;
      pbVar36 = pbVar40 + 3;
      *pbVar36 = pbVar40[lVar20 + 3];
      pbVar40[4] = pbVar40[lVar20 + 4];
      pbVar40[5] = pbVar40[lVar20 + 5];
    } while (2 < uVar18);
    if (uVar18 == 0) {
      strm.next_out = pbVar40 + 6;
    }
    else {
      pbVar40[6] = pbVar36[lVar20 + 3];
      if (uVar18 == 2) {
        strm.next_out = pbVar40 + 8;
        pbVar40[7] = pbVar36[lVar20 + 4];
      }
      else {
        strm.next_out = pbVar40 + 7;
      }
    }
  }
  else {
    if ((uVar25 < uVar17) && (*(int *)((long)strm.state + 0x1be8) != 0)) {
      strm.msg = (void *)0x34ffe;
LAB_00522428:
      uVar26 = 0x3f51;
LAB_00522438:
      *(undefined4 *)((long)strm.state + 8) = uVar26;
      strm.next_out = pbVar36;
      goto LAB_0052243c;
    }
    uVar19 = uVar18;
    if (uVar4 == 0) {
      uVar22 = uVar18 - uVar17;
      pbVar40 = pbVar3 + (iVar13 - uVar17);
      pbVar21 = pbVar36;
      if (uVar17 <= uVar18 && uVar22 != 0) {
        do {
          uVar17 = uVar17 - 1;
          pbVar36 = pbVar21 + 1;
          *pbVar21 = *pbVar40;
          pbVar40 = pbVar40 + 1;
          pbVar21 = pbVar36;
        } while (uVar17 != 0);
        pbVar40 = pbVar36 + -uVar41;
        uVar19 = uVar22;
      }
    }
    else if (uVar4 < uVar17) {
      uVar19 = uVar18 - (uVar17 - uVar4);
      uVar23 = (ulong)((uVar4 + iVar13) - uVar17);
      pbVar40 = pbVar36;
      if (uVar18 < uVar17 - uVar4 || uVar19 == 0) {
        pbVar40 = pbVar3 + uVar23;
        uVar19 = uVar18;
      }
      else {
        do {
          pbVar21 = pbVar3 + uVar23;
          uVar17 = uVar17 - 1;
          uVar23 = uVar23 + 1;
          pbVar36 = pbVar40 + 1;
          *pbVar40 = *pbVar21;
          pbVar40 = pbVar36;
        } while (uVar4 != uVar17);
        pbVar40 = pbVar3;
        if (uVar4 < uVar19) {
          lVar20 = 0;
          do {
            pbVar36[lVar20] = pbVar3[lVar20];
            lVar20 = lVar20 + 1;
          } while (uVar4 != (uint)lVar20);
          pbVar36 = pbVar36 + lVar20;
          pbVar40 = pbVar36 + -(uVar41 & 0xffffffff);
          uVar19 = uVar19 - uVar4;
        }
      }
    }
    else {
      uVar22 = uVar18 - uVar17;
      pbVar40 = pbVar3 + (uVar4 - uVar17);
      pbVar21 = pbVar36;
      if (uVar17 <= uVar18 && uVar22 != 0) {
        do {
          uVar17 = uVar17 - 1;
          pbVar36 = pbVar21 + 1;
          *pbVar21 = *pbVar40;
          pbVar40 = pbVar40 + 1;
          pbVar21 = pbVar36;
        } while (uVar17 != 0);
        pbVar40 = pbVar36 + -(uVar41 & 0xffffffff);
        uVar19 = uVar22;
      }
    }
    while (2 < uVar19) {
      *pbVar36 = *pbVar40;
      pbVar36[1] = pbVar40[1];
      pbVar36[2] = pbVar40[2];
      pbVar36 = pbVar36 + 3;
      pbVar40 = pbVar40 + 3;
      uVar19 = uVar19 - 3;
    }
    strm.next_out = pbVar36;
    if (uVar19 != 0) {
      strm.next_out = pbVar36 + 1;
      *pbVar36 = *pbVar40;
      if (uVar19 == 2) {
        strm.next_out = pbVar36 + 2;
        pbVar36[1] = pbVar40[1];
      }
    }
  }
LAB_00522080:
  uVar18 = (uint)uVar39;
  pbVar36 = strm.next_out;
  if (pbVar29 <= pbVar35 || pbVar37 + (uVar42 - 0x101) <= strm.next_out) goto LAB_0052243c;
  goto LAB_00522004;
LAB_0052243c:
  uVar14 = (uint)uVar39 & 7;
  pbVar35 = pbVar35 + -(uVar39 >> 3);
  uVar42 = ((int)(pbVar37 + (uVar42 - 0x101)) - (int)strm.next_out) + 0x101;
  strm.pad_1c = strm.pad_1c;
  strm.avail_out = uVar42;
  uVar17 = ((int)pbVar29 - (int)pbVar35) + 5;
  *(uint *)((long)strm.state + 0x58) = uVar14;
  strm.pad_0c = strm.pad_0c;
  strm.avail_in = uVar17;
  *(ulong *)((long)strm.state + 0x50) = uVar38 & (uint)~(-1 << (ulong)uVar14);
  uVar39 = *(ulong *)((long)pvVar10 + 0x50);
  uVar38 = (ulong)*(uint *)((long)pvVar10 + 0x58);
  pbVar36 = strm.next_out;
  strm.next_in = pbVar35;
  if (*(int *)((long)pvVar10 + 8) == 0x3f3f) {
    *(undefined4 *)((long)pvVar10 + 0x1bec) = 0xffffffff;
  }
LAB_00522764:
  iVar13 = *(int *)((long)pvVar10 + 8);
  pbVar37 = pbVar36;
  goto LAB_00521130;
LAB_005229b4:
  uVar17 = 0;
LAB_005227c4:
  uVar14 = (uint)uVar44;
switchD_00521164_caseD_3f51:
  func_0x006ead54(*(undefined4 *)((long)pvVar10 + 0x3c));
  pvVar12 = strm.state;
  if ((extraout_w8_02 == 0) && ((uVar43 == uVar42 || (0x3f50 < *(uint *)((long)pvVar10 + 8)))))
  goto LAB_005228c4;
  lVar16 = *(long *)((long)strm.state + 0x48);
  if (lVar16 == 0) {
    lVar16 = (*strm.zalloc)(strm.opaque,1 << (ulong)(*(uint *)((long)strm.state + 0x38) & 0x1f),1);
    *(long *)((long)pvVar12 + 0x48) = lVar16;
    if (lVar16 == 0) {
      *(undefined4 *)((long)pvVar10 + 8) = 0x3f52;
LAB_00522a40:
      func_0x006f7c70();
      uVar15 = OUTLINED_FUNCTION_734();
      func_0x006a6450(uVar15,0x4ed5b);
LAB_00522a58:
      func_0x006f4f44();
      func_0x006ea7ec();
      goto LAB_00522a60;
    }
  }
  uVar17 = *(uint *)((long)pvVar12 + 0x3c);
  if (uVar17 == 0) {
    *(undefined8 *)((long)pvVar12 + 0x40) = 0;
    uVar17 = 1 << (ulong)(*(uint *)((long)pvVar12 + 0x38) & 0x1f);
    *(uint *)((long)pvVar12 + 0x3c) = uVar17;
  }
  uVar42 = uVar43 - uVar42;
  if (uVar42 < uVar17) {
    uVar17 = uVar17 - *(uint *)((long)pvVar12 + 0x44);
    uVar33 = uVar17;
    if (uVar42 <= uVar17) {
      uVar33 = uVar42;
    }
    func_0x006ecc68(lVar16 + (ulong)*(uint *)((long)pvVar12 + 0x44),(long)pbVar37 - (ulong)uVar42);
    if (uVar17 < uVar42) {
      func_0x006ecc68(*(undefined8 *)((long)pvVar12 + 0x48),(long)pbVar37 - (ulong)(uVar42 - uVar33)
                     );
      iVar13 = *(int *)((long)pvVar12 + 0x3c);
      *(uint *)((long)pvVar12 + 0x44) = uVar42 - uVar33;
      goto LAB_005228b8;
    }
    uVar42 = *(int *)((long)pvVar12 + 0x44) + uVar33;
    uVar17 = 0;
    if (uVar42 != *(uint *)((long)pvVar12 + 0x3c)) {
      uVar17 = uVar42;
    }
    *(uint *)((long)pvVar12 + 0x44) = uVar17;
    if (*(uint *)((long)pvVar12 + 0x40) < *(uint *)((long)pvVar12 + 0x3c)) {
      iVar13 = *(uint *)((long)pvVar12 + 0x40) + uVar33;
      goto LAB_005228b8;
    }
  }
  else {
    func_0x006fbd10(lVar16,(long)pbVar37 - (ulong)uVar17,(ulong)uVar17);
    iVar13 = *(int *)((long)pvVar12 + 0x3c);
    *(undefined4 *)((long)pvVar12 + 0x44) = 0;
LAB_005228b8:
    *(int *)((long)pvVar12 + 0x40) = iVar13;
  }
  uVar42 = strm.avail_out;
  uVar17 = strm.avail_in;
LAB_005228c4:
  uVar38 = (ulong)(uVar43 - uVar42);
  strm.total_out = strm.total_out + uVar38;
  strm.total_in = strm.total_in + (ulong)(uVar9 - uVar17);
  *(ulong *)((long)pvVar10 + 0x28) = *(long *)((long)pvVar10 + 0x28) + uVar38;
  if (((*(byte *)((long)pvVar10 + 0x10) >> 2 & 1) != 0) && (uVar43 != uVar42)) {
    if (*(int *)((long)pvVar10 + 0x18) == 0) {
      strm.adler = adler32(*(undefined8 *)((long)pvVar10 + 0x20),(long)strm.next_out - uVar38);
    }
    else {
      strm.adler = crc32();
    }
    *(ulong *)((long)pvVar10 + 0x20) = strm.adler;
  }
  func_0x006e0638(*(undefined4 *)((long)pvVar10 + 0xc));
  iVar13 = 0x100;
  if (extraout_w10_01 != 0x3f42 && extraout_w10_01 != 0x3f47) {
    iVar13 = 0;
  }
  strm.data_type =
       extraout_w9_02 + extraout_w8_03 * 0x40 + (uint)(extraout_w10_01 == extraout_w11) * 0x80 +
       iVar13;
  if (((uVar9 == uVar17 && uVar43 == uVar42) && (uVar14 == 0)) || (1 < uVar14)) goto LAB_00522a40;
  goto LAB_00521058;
LAB_005227dc:
  uVar14 = (uint)uVar44;
  uVar17 = 0;
  goto switchD_00521164_caseD_3f51;
}

 (GhidraScript)
