// 本文件由 tools/ghidra_annotate.py 对 Ghidra 原始反编译结果做**表驱动改写**产生：
//   1. `*(T *)((long)VAR + 0xNN)` → `VAR->field`（含 inflate_state 与 gz_header 两张表）
//   2. `0x3f34..0x3f53` → zlib 的 inflate_mode 状态名（HEAD=16180 起连续）
//   3. `(void *)0xNNNNN` → 从 .so 读出的字符串字面量（均为 zlib 的 strm->msg 原文）
//   4. `_DAT_00031ac8` → `HEAD`（该全局实测值 = 16180）
//   5. `LAB_xxxxxx` → `L_<所在状态>_<序号>`（按 case 位置机械命名，非语义标签）
// 改写统计: 字段 275、gz_header 9、状态常量 81、字符串 20、全局常量 11、标签 159

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
  if (state == (inflate_state *)0x0) goto valdi_throw_Failed_to_initialize_gzip_in;
  state->strm = &strm;
  state->window = (void *)0x0;
  state->mode = HEAD /*16180*/;
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
      uVar15 = HEAD /*16180*/;
      if (iVar13 == 0) {
        state->dmax = 0x8000;
        puVar1 = &state->codes;
        state->next = puVar1;
        state->lencode = puVar1;
        state->distcode = puVar1;
        uVar11 = HEAD /*16180*/;
        uVar38 = param_4;
        if (0xffff < param_4) {
          uVar38 = 0x10000;
        }
        _DAT_00031ac8 /*溢出槽*/ = (undefined4)uVar15;
        DAT_00031ac8_4 = SUB84(uVar15,4);
        uVar26 = DAT_00031ac8_4;
        state->mode = HEAD /*16180*/;
        _DAT_00031ac8 /*溢出槽*/ = uVar11;
        state->last = uVar26;
        strm.total_in = 0;
        state->head = (void *)0x0;
        state->total = 0;
        strm.total_out = 0;
        strm.msg = (void *)0x0;
        strm.adler = 0;
        state->hold = 0;
        state->havedict = 0;
        uVar15 = 1 /*同一 8B 存储含 back=-1（sane=1;back=-1 被合并）*/;
        state->flags = 0xffffffff;
        state->bits = 0;
        uVar11 = 1 /*同一 8B 存储含 back=-1（sane=1;back=-1 被合并）*/;
        _DAT_00031ec0 /*溢出槽*/ = (undefined4)uVar15;
        DAT_00031ec0_4 = SUB84(uVar15,4);
        uVar26 = DAT_00031ec0_4;
        state->sane = 1 /*同一 8B 存储含 back=-1（sane=1;back=-1 被合并）*/;
        _DAT_00031ec0 /*溢出槽*/ = uVar11;
        state->back = uVar26;
        param_1[1] = 0;
        param_1[2] = 0;
        *param_1 = 0;
        func_0x00490108(param_1,uVar38);
        uVar14 = 0;
return_epilogue:
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
            goto L_pre_3;
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
          iVar13 = state->mode;
          pbVar37 = (byte *)(lVar16 + uVar38);
          if (iVar13 == TYPE /*16191*/) {
            iVar13 = TYPEDO /*16192*/;
            state->mode = TYPEDO /*16192*/;
            pbVar37 = strm.next_out;
            uVar42 = strm.avail_out;
          }
          uVar39 = state->hold;
          uVar44 = 0;
          uVar38 = (ulong)state->bits;
          lVar16 = (long)state + 0x558;
          lVar2 = (long)state + 0x98;
          pbVar35 = strm.next_in;
          uVar17 = strm.avail_in;
          uVar43 = uVar42;
L_pre_4:
          if (0x1d < iVar13 - 0x3f34U) goto valdi_throw_Failed_to_inflate_gzip_widge;
          uVar14 = 0xfffffffd;
          uVar41 = uVar38 & 0xffffffff;
          pvVar27 = (inflate_state *)0x4ff76;
          pbVar36 = pbVar37;
          switch(iVar13) {
          case HEAD /*16180*/:
            uVar14 = pvVar10->wrap;
            if (uVar14 == 0) {
              uVar26 = TYPEDO /*16192*/;
              goto L_HEAD_1;
            }
            while (uVar38 = uVar41, uVar38 < 0x10) {
              if (uVar17 == 0) {
                uVar17 = 0;
                goto L_HEAD_2;
              }
              uVar17 = uVar17 - 1;
              uVar39 = ((ulong)*pbVar35 << (uVar38 & 0x3f)) + uVar39;
              pbVar35 = pbVar35 + 1;
              uVar41 = uVar38 + 8;
            }
            if (((uVar14 >> 1 & 1) == 0) || (uVar39 != 0x8b1f)) {
              if (pvVar10->head != 0) {
                pvVar10->head->done = 0xffffffff;
                uVar14 = pvVar10->wrap;
              }
              if (((uVar14 & 1) == 0) || (((uVar39 & 0xff) * 0x100 + (uVar39 >> 8)) % 0x1f != 0)) {
                pvVar12 = "incorrect header check";
                goto set_msg_bad;
              }
              pvVar12 = "unknown compression method";
              if ((uVar39 & 0xf) != 8) goto set_msg_bad;
              uVar25 = (uint)(uVar39 >> 4) & 0xf;
              uVar14 = uVar25 + 8;
              uVar33 = pvVar10->wbits;
              if (pvVar10->wbits == 0) {
                pvVar10->wbits = uVar14;
                uVar33 = uVar14;
              }
              if (uVar25 < 8 && uVar14 <= uVar33) {
                auVar45 = func_0x006e996c();
                uVar44 = uVar44 & 0xffffffff;
                pvVar10->flags = 0;
                pvVar10->dmax = extraout_w9_01 << (ulong)(extraout_w8_01 & 0x1f);
                strm.adler = adler32(auVar45._0_8_,auVar45._8_8_,0);
                uVar38 = 0;
                uVar26 = TYPE /*16191*/;
                if ((uVar39 & 0x2000) != 0) {
                  uVar26 = DICTID /*16189*/;
                }
                uVar39 = 0;
                pvVar10->check = strm.adler;
              }
              else {
                uVar39 = uVar39 >> 4;
                strm.msg = "invalid window size";
                uVar26 = BAD /*16209*/;
                uVar38 = (ulong)((int)uVar38 - 4);
              }
              goto L_HEAD_4;
            }
            if (pvVar10->wbits == 0) {
              pvVar10->wbits = 0xf;
            }
            uVar15 = func_0x006f1dcc();
            pvVar10->check = uVar15;
            local_64 = CONCAT22(local_64._2_2_,0x8b1f);
            uVar15 = crc32(uVar15,&local_64,2);
            uVar39 = 0;
            uVar38 = 0;
            uVar26 = FLAGS /*16181*/;
            pvVar10->check = uVar15;
            goto L_HEAD_5;
          case FLAGS /*16181*/:
            for (; uVar41 < 0x10; uVar41 = uVar41 + 8) {
              if (uVar17 == 0) goto L_HEAD_2;
              uVar17 = uVar17 - 1;
              uVar39 = ((ulong)*pbVar35 << (uVar41 & 0x3f)) + uVar39;
              pbVar35 = pbVar35 + 1;
            }
            uVar14 = (uint)uVar39;
            pvVar10->flags = uVar14;
            if ((uVar14 & 0xff) == 8) {
              if ((uVar39 & 0xe000) == 0) {
                if (pvVar10->head != (uint *)0x0) {
                  *pvVar10->head = uVar14 >> 8 & 1;
                  uVar14 = pvVar10->flags;
                }
                if (((uVar14 >> 9 & 1) != 0) && ((pvVar10->wrap >> 2 & 1) != 0)) {
                  local_64 = CONCAT22(local_64._2_2_,(short)uVar39);
                  uVar44 = uVar44 & 0xffffffff;
                  uVar15 = crc32(pvVar10->check,&local_64,2);
                  pvVar10->check = uVar15;
                }
                uVar39 = 0;
                uVar38 = 0;
                pvVar10->mode = TIME /*16182*/;
                goto caseD_TIME;
              }
              pvVar27 = (inflate_state *)0x3c3f1;
            }
            pvVar10->mode = BAD /*16209*/;
            uVar38 = uVar41 & 0xffffffff;
            strm.msg = pvVar27;
            break;
          case TIME /*16182*/:
caseD_TIME:
            while ((uVar38 & 0xffffffff) < 0x20) {
              if (uVar17 == 0) goto L_HEAD_2;
              uVar44 = func_0x006ef0c8(uVar44);
            }
            if (pvVar10->head != 0) {
              pvVar10->head->time = uVar39;
            }
            if (((((byte *)&pvVar10->flags)[1] >> 1 & 1) != 0) &&
               ((pvVar10->wrap >> 2 & 1) != 0)) {
              local_64 = (undefined4)uVar39;
              uVar44 = uVar44 & 0xffffffff;
              uVar15 = crc32(pvVar10->check,&local_64,4);
              pvVar10->check = uVar15;
            }
            uVar39 = 0;
            uVar38 = 0;
            pvVar10->mode = OS /*16183*/;
          case OS /*16183*/:
            while ((uVar38 & 0xffffffff) < 0x10) {
              if (uVar17 == 0) goto L_HEAD_2;
              uVar44 = func_0x006ef0c8(uVar44);
            }
            if (pvVar10->head != 0) {
              pvVar10->head->os = (uint)uVar39 & 0xff;
              *(int *)(pvVar10->head + 0x14) = (int)(uVar39 >> 8);
            }
            uVar14 = pvVar10->flags;
            if (((uVar14 >> 9 & 1) != 0) && ((pvVar10->wrap >> 2 & 1) != 0)) {
              local_64 = CONCAT22(local_64._2_2_,(short)uVar39);
              uVar44 = uVar44 & 0xffffffff;
              uVar15 = crc32(pvVar10->check,&local_64,2);
              pvVar10->check = uVar15;
            }
            uVar39 = 0;
            uVar38 = 0;
            pvVar10->mode = EXLEN /*16184*/;
joined_r0x0052140c:
            if ((uVar14 >> 10 & 1) == 0) {
              if (pvVar10->head != 0) {
                pvVar10->head->extra = 0;
              }
            }
            else {
              while ((uVar38 & 0xffffffff) < 0x10) {
                if (uVar17 == 0) goto L_HEAD_2;
                uVar44 = func_0x006ef0c8(uVar44);
              }
              pvVar10->length = (int)uVar39;
              if (pvVar10->head != 0) {
                pvVar10->head->extra_len = (int)uVar39;
                uVar14 = pvVar10->flags;
              }
              if (((uVar14 >> 9 & 1) == 0) || ((pvVar10->wrap >> 2 & 1) == 0)) {
                uVar39 = 0;
                uVar38 = 0;
              }
              else {
                local_64 = CONCAT22(local_64._2_2_,(short)uVar39);
                uVar44 = uVar44 & 0xffffffff;
                uVar15 = crc32(pvVar10->check,&local_64,2);
                uVar39 = 0;
                uVar38 = 0;
                pvVar10->check = uVar15;
              }
            }
            pvVar10->mode = EXTRA /*16185*/;
caseD_EXTRA:
            uVar14 = pvVar10->flags;
            if ((uVar14 >> 10 & 1) != 0) {
              uVar25 = pvVar10->length;
              uVar33 = uVar25;
              if (uVar17 <= uVar25) {
                uVar33 = uVar17;
              }
              if (uVar33 != 0) {
                lVar28 = pvVar10->head;
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
                    uVar14 = pvVar10->flags;
                  }
                }
                if (((uVar14 >> 9 & 1) != 0) && ((pvVar10->wrap >> 2 & 1) != 0)) {
                  uVar44 = uVar44 & 0xffffffff;
                  uVar15 = crc32(pvVar10->check,pbVar35,uVar33);
                  pvVar10->check = uVar15;
                }
                pbVar35 = pbVar35 + uVar33;
                uVar17 = uVar17 - uVar33;
                uVar25 = pvVar10->length - uVar33;
                pvVar10->length = uVar25;
              }
              if (uVar25 != 0) goto L_HEAD_2;
            }
            pvVar10->length = 0;
            pvVar10->mode = NAME /*16186*/;
joined_r0x00521440:
            if ((uVar14 >> 0xb & 1) == 0) {
              if (pvVar10->head != 0) {
                pvVar10->head->name = 0;
              }
            }
            else {
              if (uVar17 == 0) goto L_HEAD_2;
              uVar41 = 0;
              do {
                lVar28 = pvVar10->head;
                bVar5 = pbVar35[uVar41];
                if ((lVar28 != 0) && (lVar31 = *(long *)(lVar28 + 0x28), lVar31 != 0)) {
                  uVar14 = pvVar10->length;
                  if (uVar14 < *(uint *)(lVar28 + 0x30)) {
                    pvVar10->length = uVar14 + 1;
                    *(byte *)(lVar31 + (ulong)uVar14) = bVar5;
                  }
                }
                uVar41 = uVar41 + 1;
              } while ((bVar5 != 0) && (uVar41 < uVar17));
              if (((((byte *)&pvVar10->flags)[1] >> 1 & 1) != 0) &&
                 ((pvVar10->wrap >> 2 & 1) != 0)) {
                uVar44 = uVar44 & 0xffffffff;
                uVar15 = crc32(pvVar10->check,pbVar35,uVar41 & 0xffffffff);
                pvVar10->check = uVar15;
              }
              pbVar35 = pbVar35 + (uVar41 & 0xffffffff);
              uVar17 = uVar17 - (int)uVar41;
              if (bVar5 != 0) goto L_HEAD_2;
            }
            pvVar10->length = 0;
            pvVar10->mode = COMMENT /*16187*/;
caseD_COMMENT:
            if ((((byte *)&pvVar10->flags)[1] >> 4 & 1) == 0) {
              if (pvVar10->head != 0) {
                pvVar10->head->comment = 0;
              }
            }
            else {
              if (uVar17 == 0) goto L_HEAD_2;
              uVar41 = 0;
              do {
                lVar28 = pvVar10->head;
                bVar5 = pbVar35[uVar41];
                if ((lVar28 != 0) && (lVar31 = *(long *)(lVar28 + 0x38), lVar31 != 0)) {
                  uVar14 = pvVar10->length;
                  if (uVar14 < *(uint *)(lVar28 + 0x40)) {
                    pvVar10->length = uVar14 + 1;
                    *(byte *)(lVar31 + (ulong)uVar14) = bVar5;
                  }
                }
                uVar41 = uVar41 + 1;
              } while ((bVar5 != 0) && (uVar41 < uVar17));
              if (((((byte *)&pvVar10->flags)[1] >> 1 & 1) != 0) &&
                 ((pvVar10->wrap >> 2 & 1) != 0)) {
                uVar44 = uVar44 & 0xffffffff;
                uVar15 = crc32(pvVar10->check,pbVar35,uVar41 & 0xffffffff);
                pvVar10->check = uVar15;
              }
              pbVar35 = pbVar35 + (uVar41 & 0xffffffff);
              uVar17 = uVar17 - (int)uVar41;
              if (bVar5 != 0) goto L_HEAD_2;
            }
            pvVar10->mode = HCRC /*16188*/;
caseD_HCRC:
            if ((pvVar10->flags >> 9 & 1) != 0) {
              for (uVar38 = uVar38 & 0xffffffff; uVar38 < 0x10; uVar38 = uVar38 + 8) {
                if (uVar17 == 0) goto L_HEAD_2;
                uVar17 = uVar17 - 1;
                uVar39 = ((ulong)*pbVar35 << (uVar38 & 0x3f)) + uVar39;
                pbVar35 = pbVar35 + 1;
              }
              if (((pvVar10->wrap >> 2 & 1) != 0) &&
                 (uVar39 != pvVar10->check)) {
                strm.msg = "header crc mismatch";
L_OS_1:
                pvVar10->mode = BAD /*16209*/;
                break;
              }
              uVar39 = 0;
              uVar38 = 0;
            }
            if (pvVar10->head != 0) {
              pvVar10->head->hcrc =
                   pvVar10->flags >> 9 & 1;
              pvVar10->head->done = 1;
            }
            strm.adler = func_0x006f1dcc();
            uVar26 = TYPE /*16191*/;
            pvVar10->check = strm.adler;
L_HEAD_5:
            uVar44 = uVar44 & 0xffffffff;
            pvVar10->mode = uVar26;
            break;
          case EXLEN /*16184*/:
            uVar14 = pvVar10->flags;
            goto joined_r0x0052140c;
          case EXTRA /*16185*/:
            goto caseD_EXTRA;
          case NAME /*16186*/:
            uVar14 = pvVar10->flags;
            goto joined_r0x00521440;
          case COMMENT /*16187*/:
            goto caseD_COMMENT;
          case HCRC /*16188*/:
            goto caseD_HCRC;
          case DICTID /*16189*/:
            for (; uVar41 < 0x20; uVar41 = uVar41 + 8) {
              if (uVar17 == 0) goto L_HEAD_2;
              uVar17 = uVar17 - 1;
              uVar39 = ((ulong)*pbVar35 << (uVar41 & 0x3f)) + uVar39;
              pbVar35 = pbVar35 + 1;
            }
            uVar38 = 0;
            uVar14 = ((uint)uVar39 & 0xff00ff00) >> 8 | ((uint)uVar39 & 0xff00ff) << 8;
            strm.adler = (ulong)(uVar14 >> 0x10 | uVar14 << 0x10);
            uVar39 = 0;
            pvVar10->check = strm.adler;
            pvVar10->mode = DICT /*16190*/;
          case DICT /*16190*/:
            if (pvVar10->havedict == 0) {
              func_0x006ead54();
              goto valdi_throw_Failed_to_inflate_gzip_widge;
            }
            uVar44 = uVar44 & 0xffffffff;
            strm.adler = adler32(0,0,0);
            pvVar10->check = strm.adler;
            pvVar10->mode = TYPE /*16191*/;
caseD_TYPE:
            uVar14 = (uint)uVar38;
            if (pvVar10->last == 0) {
              while ((uint)uVar38 < 3) {
                if (uVar17 == 0) goto L_DICT_1;
                uVar17 = uVar17 - 1;
                uVar39 = ((ulong)*pbVar35 << (uVar38 & 0x3f)) + uVar39;
                pbVar35 = pbVar35 + 1;
                uVar38 = (ulong)(uVar14 | 8);
              }
              pvVar10->last = (uint)uVar39 & 1;
              uVar15 = 9;
              uVar26 = STORED /*16193*/;
              switch((uint)uVar39 >> 1 & 3) {
              case 1:
                pvVar10->lencode = 0xabbd6;
                pvVar10->distcode = 0xac3d6;
                uVar26 = LEN_ /*16199*/;
                pvVar10->lenbits = uVar15;
                break;
              case 2:
                uVar26 = TABLE /*16196*/;
                break;
              case 3:
                strm.msg = "invalid block type";
                uVar26 = BAD /*16209*/;
              }
              uVar39 = uVar39 >> 3;
              pvVar10->mode = uVar26;
              uVar38 = (ulong)((uint)uVar38 - 3);
            }
            else {
              uVar38 = (ulong)(uVar14 & 0xfffffff8);
              uVar39 = uVar39 >> (uVar14 & 7);
              uVar26 = CHECK /*16206*/;
L_HEAD_1:
              pvVar10->mode = uVar26;
            }
            break;
          default:
            goto caseD_TYPE;
          case STORED /*16193*/:
            uVar14 = (uint)uVar38;
            uVar38 = (ulong)(uVar14 & 0xfffffff8);
            uVar39 = uVar39 >> (ulong)(uVar14 & 7);
            while (uVar38 < 0x20) {
              if (uVar17 == 0) goto L_HEAD_2;
              uVar44 = func_0x006ef0c8(uVar44);
            }
            if ((uVar39 & 0xffff ^ uVar39 >> 0x10) == 0xffff) {
              uVar38 = 0;
              uVar14 = (uint)uVar39;
              uVar39 = 0;
              pvVar10->length = uVar14 & 0xffff;
              pvVar10->mode = COPY_ /*16194*/;
              goto caseD_COPY_;
            }
            strm.msg = "invalid stored block lengths";
            goto L_OS_1;
          case COPY_ /*16194*/:
caseD_COPY_:
            pvVar10->mode = COPY /*16195*/;
          case COPY /*16195*/:
            uVar14 = pvVar10->length;
            if (uVar14 == 0) {
              uVar26 = TYPE /*16191*/;
              goto L_HEAD_1;
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
              pvVar10->length = pvVar10->length - uVar14;
              pbVar36 = pbVar37 + uVar14;
              break;
            }
            goto L_HEAD_2;
          case TABLE /*16196*/:
            for (; uVar41 < 0xe; uVar41 = uVar41 + 8) {
              if (uVar17 == 0) goto L_HEAD_2;
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
            pvVar10->nlen = (int)uVar27 + 0x101;
            pvVar10->ndist = (int)uVar30 + 1;
            pvVar10->ncode = (int)uVar23;
            if (uVar27 < 0x1e && uVar30 < 0x1e) {
              uVar14 = 0;
              pvVar10->have = 0;
              pvVar10->mode = LENLENS /*16197*/;
              goto L_TABLE_1;
            }
            strm.msg = "too many length or distance symbols";
            goto L_TABLE_2;
          case LENLENS /*16197*/:
            uVar14 = pvVar10->have;
            uVar23 = (ulong)pvVar10->ncode;
L_TABLE_1:
            uVar41 = (ulong)uVar14;
            while (uVar41 < uVar23) {
              uVar33 = (uint)uVar38;
              while ((uint)uVar38 < 3) {
                if (uVar17 == 0) {
                  uVar17 = 0;
                  goto L_HEAD_2;
                }
                uVar17 = uVar17 - 1;
                uVar39 = ((ulong)*pbVar35 << (uVar38 & 0x3f)) + uVar39;
                pbVar35 = pbVar35 + 1;
                uVar38 = (ulong)(uVar33 | 8);
              }
              uVar38 = (ulong)((uint)uVar38 - 3);
              uVar14 = uVar14 + 1;
              pvVar10->have = (int)(uVar41 + 1);
              uVar7 = (ushort)uVar39;
              uVar39 = uVar39 >> 3;
              pvVar10->lens[(ulong)*(ushort *)(uVar41 * 2 + 0xabbb0)] =
                   uVar7 & 7;
              uVar41 = uVar41 + 1;
            }
            for (lVar28 = 0; (ulong)uVar14 + lVar28 < 0x13; lVar28 = lVar28 + 1) {
              pvVar10->have = (int)uVar41 + (int)lVar28 + 1;
              pvVar10->lens[(ulong)*(ushort *)((ulong)uVar14 * 2 + 0xabbb0 + lVar28 * 2)] = 0;
            }
            pvVar10->next = lVar16;
            pvVar10->lencode = lVar16;
            pvVar10->lenbits = 7;
            uVar14 = inflate_table(0,lVar2,0x13,&pvVar10->next,&pvVar10->lenbits,
                                   &pvVar10->work);
            uVar44 = (ulong)uVar14;
            if (uVar14 == 0) {
              uVar14 = 0;
              pvVar10->have = 0;
              pvVar10->mode = CODELENS /*16198*/;
              goto L_LENLENS_1;
            }
            pvVar12 = "invalid code lengths set";
            goto set_msg_bad;
          case CODELENS /*16198*/:
            uVar14 = pvVar10->have;
L_LENLENS_1:
            iVar13 = pvVar10->nlen;
            uVar33 = pvVar10->ndist + iVar13;
            while (uVar14 < uVar33) {
              uVar38 = uVar38 & 0xffffffff;
              while( true ) {
                lVar28 = pvVar10->lencode +
                         (ulong)(~(-1 << (ulong)(pvVar10->lenbits & 0x1f)) &
                                (uint)uVar39) * 4;
                bVar5 = *(byte *)(lVar28 + 1);
                uVar41 = (ulong)bVar5;
                if (uVar41 <= uVar38) break;
                if (uVar17 == 0) goto L_DICT_1;
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
                pvVar10->have = uVar14;
                uVar38 = (ulong)((int)uVar38 - uVar25);
                pvVar10->lens[uVar23] = uVar7;
              }
              else {
                if (uVar7 == 0x10) {
                  for (; uVar38 < uVar41 + 2; uVar38 = uVar38 + 8) {
                    if (uVar17 == 0) goto L_CODELENS_1;
                    uVar17 = uVar17 - 1;
                    uVar39 = ((ulong)*pbVar35 << (uVar38 & 0x3f)) + uVar39;
                    pbVar35 = pbVar35 + 1;
                  }
                  uVar39 = uVar39 >> (uVar41 & 0x3f);
                  uVar25 = (int)uVar38 - uVar25;
                  uVar38 = (ulong)uVar25;
                  if (uVar14 != 0) {
                    uVar38 = (ulong)(uVar25 - 2);
                    uVar34 = pvVar10->lens[(ulong)(uVar14 - 1)];
                    uVar25 = (uint)uVar39;
                    uVar39 = uVar39 >> 2;
                    iVar32 = (uVar25 & 3) + 3;
                    goto L_CODELENS_2;
                  }
L_CODELENS_3:
                  strm.msg = "invalid bit length repeat";
                  pvVar12 = strm.msg;
                  goto set_msg_bad;
                }
                if (uVar7 == 0x11) {
                  for (; uVar38 < uVar41 + 3; uVar38 = uVar38 + 8) {
                    if (uVar17 == 0) goto L_CODELENS_1;
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
                    if (uVar17 == 0) goto L_CODELENS_1;
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
L_CODELENS_2:
                if (uVar33 < iVar32 + uVar14) goto L_CODELENS_3;
                for (; iVar32 != 0; iVar32 = iVar32 + -1) {
                  uVar41 = (ulong)uVar14;
                  uVar14 = uVar14 + 1;
                  pvVar10->lens[uVar41] = uVar34;
                }
                pvVar10->have = uVar14;
              }
            }
            if (pvVar10->lens[256] == 0) {
              strm.msg = "invalid code -- missing end-of-block";
            }
            else {
              pvVar10->next = lVar16;
              pvVar10->lencode = lVar16;
              pvVar10->lenbits = 9;
              uVar14 = inflate_table(1,lVar2,iVar13,&pvVar10->next,&pvVar10->lenbits,
                                     &pvVar10->work);
              if (uVar14 == 0) {
                pvVar10->distcode = pvVar10->next;
                pvVar10->distbits = 6;
                uVar14 = inflate_table(2,lVar2 + (ulong)pvVar10->nlen * 2,
                                       pvVar10->ndist,&pvVar10->next,
                                       &pvVar10->distbits,&pvVar10->work);
                uVar44 = (ulong)uVar14;
                if (uVar14 == 0) {
                  pvVar10->mode = LEN_ /*16199*/;
                  goto caseD_LEN_;
                }
                strm.msg = "invalid distances set";
              }
              else {
                uVar44 = (ulong)uVar14;
                strm.msg = "invalid literal/lengths set";
              }
            }
L_TABLE_2:
            uVar26 = BAD /*16209*/;
            goto L_HEAD_1;
          case LEN_ /*16199*/:
caseD_LEN_:
            pvVar10->mode = LEN /*16200*/;
          case LEN /*16200*/:
            if ((5 < uVar17) && (0x101 < uVar42)) {
              pvVar10->hold = uVar39;
              pvVar10->bits = (int)uVar38;
              uVar14 = state->lenbits;
              uVar33 = state->distbits;
              iVar13 = state->wsize;
              uVar25 = state->whave;
              uVar4 = state->wnext;
              pbVar3 = state->window;
              uVar38 = state->hold;
              lVar28 = state->lencode;
              lVar31 = state->distcode;
              uVar18 = state->bits;
              pbVar29 = pbVar35 + (uVar17 - 5);
L_LEN_1:
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
                  goto L_LEN_2;
                }
                if ((bVar5 >> 6 & 1) != 0) {
                  if ((bVar5 >> 5 & 1) == 0) {
                    strm.msg = "invalid literal/length code";
                    goto L_LEN_3;
                  }
                  uVar26 = TYPE /*16191*/;
                  goto L_LEN_4;
                }
                pbVar40 = (byte *)(lVar28 + (ulong)*(ushort *)(pbVar40 + 2) * 4 +
                                  (uVar38 & (uint)~(-1 << (ulong)(bVar5 & 0x1f))) * 4);
              }
              strm.next_out = pbVar36 + 1;
              *pbVar36 = pbVar40[2];
              goto L_LEN_5;
            }
            pvVar10->back = 0;
            uVar38 = uVar38 & 0xffffffff;
            while( true ) {
              pbVar29 = (byte *)(pvVar10->lencode +
                                (ulong)(~(-1 << (ulong)(pvVar10->lenbits & 0x1f)) &
                                       (uint)uVar39) * 4);
              bVar5 = pbVar29[1];
              uVar41 = (ulong)bVar5;
              if (uVar41 <= uVar38) break;
              if (uVar17 == 0) goto L_LEN_6;
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
                pbVar29 = (byte *)(pvVar10->lencode +
                                  ((ulong)(((uint)uVar39 &
                                           ~(-1 << (ulong)((uint)bVar6 + (uint)bVar5 & 0x1f))) >>
                                          (uVar41 & 0x3f)) + (ulong)uVar7) * 4);
                if (pbVar29[1] + uVar41 <= uVar38) break;
                if (uVar17 == 0) goto L_LEN_6;
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
            pvVar10->back = (int)uVar23 + (int)uVar41;
            pvVar10->length = (uint)uVar7;
            if (bVar6 == 0) {
              uVar26 = LIT /*16205*/;
L_HEAD_4:
              pvVar10->mode = uVar26;
              break;
            }
            if ((bVar6 >> 5 & 1) != 0) {
              pvVar10->back = 0xffffffff;
              pvVar10->mode = TYPE /*16191*/;
              break;
            }
            if ((bVar6 >> 6 & 1) != 0) {
              pvVar12 = "invalid literal/length code";
set_msg_bad:
              strm.msg = pvVar12;
              uVar26 = BAD /*16209*/;
              goto L_HEAD_4;
            }
            uVar14 = bVar6 & 0xf;
            pvVar10->extra = uVar14;
            pvVar10->mode = LENEXT /*16201*/;
            if ((bVar6 & 0xf) == 0) {
L_LEN_7:
              iVar13 = pvVar10->length;
            }
            else {
L_LEN_8:
              uVar38 = uVar38 & 0xffffffff;
              while( true ) {
                uVar33 = (uint)uVar38;
                if (uVar14 <= uVar33) break;
                if (uVar17 == 0) goto L_DICT_1;
                uVar17 = uVar17 - 1;
                uVar41 = uVar38 & 0x3f;
                uVar38 = (ulong)(uVar33 + 8);
                uVar39 = ((ulong)*pbVar35 << uVar41) + uVar39;
                pbVar35 = pbVar35 + 1;
              }
              uVar38 = (ulong)(uVar33 - uVar14);
              uVar33 = (uint)uVar39;
              uVar39 = uVar39 >> ((ulong)uVar14 & 0x3f);
              pvVar10->back = pvVar10->back + uVar14;
              iVar13 = pvVar10->length +
                       (uVar33 & (-1 << (ulong)(uVar14 & 0x1f) ^ 0xffffffffU));
              pvVar10->length = iVar13;
            }
            pvVar10->was = iVar13;
            pvVar10->mode = DIST /*16202*/;
caseD_DIST:
            uVar38 = uVar38 & 0xffffffff;
            while( true ) {
              pbVar29 = (byte *)(pvVar10->distcode +
                                (ulong)(~(-1 << (ulong)(pvVar10->distbits & 0x1f)) &
                                       (uint)uVar39) * 4);
              bVar5 = pbVar29[1];
              uVar41 = (ulong)bVar5;
              if (uVar41 <= uVar38) break;
              if (uVar17 == 0) goto L_DICT_1;
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
                pbVar29 = (byte *)(pvVar10->distcode +
                                  ((ulong)(((uint)uVar39 &
                                           ~(-1 << (ulong)((uint)bVar6 + (uint)bVar5 & 0x1f))) >>
                                          (uVar41 & 0x3f)) + (ulong)uVar7) * 4);
                if (pbVar29[1] + uVar41 <= uVar38) break;
                if (uVar17 == 0) goto L_DICT_1;
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
              iVar13 = pvVar10->back + (uint)bVar5;
              uVar41 = (ulong)pbVar29[1];
            }
            else {
              iVar13 = pvVar10->back;
            }
            uVar39 = uVar39 >> (uVar41 & 0x3f);
            uVar38 = (ulong)(uint)((int)uVar38 - (int)uVar41);
            pvVar10->back = iVar13 + (int)uVar41;
            if ((bVar6 >> 6 & 1) != 0) {
              pvVar12 = "invalid distance code";
              goto set_msg_bad;
            }
            uVar14 = bVar6 & 0xf;
            pvVar10->offset = (uint)uVar7;
            pvVar10->extra = uVar14;
            pvVar10->mode = DISTEXT /*16203*/;
            if ((bVar6 & 0xf) != 0) {
L_LEN_9:
              uVar38 = uVar38 & 0xffffffff;
              while( true ) {
                uVar33 = (uint)uVar38;
                if (uVar14 <= uVar33) break;
                if (uVar17 == 0) goto L_DICT_1;
                uVar17 = uVar17 - 1;
                uVar41 = uVar38 & 0x3f;
                uVar38 = (ulong)(uVar33 + 8);
                uVar39 = ((ulong)*pbVar35 << uVar41) + uVar39;
                pbVar35 = pbVar35 + 1;
              }
              uVar38 = (ulong)(uVar33 - uVar14);
              uVar33 = (uint)uVar39;
              uVar39 = uVar39 >> ((ulong)uVar14 & 0x3f);
              pvVar10->back = pvVar10->back + uVar14;
              pvVar10->offset =
                   pvVar10->offset +
                   (uVar33 & (-1 << (ulong)(uVar14 & 0x1f) ^ 0xffffffffU));
            }
L_LEN_10:
            pvVar10->mode = MATCH /*16204*/;
caseD_MATCH:
            if (uVar42 != 0) {
              uVar14 = pvVar10->offset;
              if (uVar43 - uVar42 < uVar14) {
                uVar14 = uVar14 - (uVar43 - uVar42);
                if ((pvVar10->whave < uVar14) &&
                   (pvVar10->sane != 0)) {
                  strm.msg = "invalid distance too far back";
                  goto L_TABLE_2;
                }
                uVar25 = pvVar10->wnext;
                uVar33 = uVar14 - uVar25;
                if (uVar14 < uVar25 || uVar33 == 0) {
                  uVar25 = uVar25 - uVar14;
                }
                else {
                  uVar25 = pvVar10->wsize - uVar33;
                  uVar14 = uVar33;
                }
                uVar33 = pvVar10->length;
                pbVar29 = (byte *)(pvVar10->window + (ulong)uVar25);
                if (uVar33 <= uVar14) {
                  uVar14 = uVar33;
                }
              }
              else {
                uVar33 = pvVar10->length;
                pbVar29 = pbVar37 + -(ulong)uVar14;
                uVar14 = uVar33;
              }
              if (uVar42 <= uVar14) {
                uVar14 = uVar42;
              }
              pvVar10->length = uVar33 - uVar14;
              uVar33 = uVar14;
              do {
                uVar33 = uVar33 - 1;
                pbVar36 = pbVar37 + 1;
                *pbVar37 = *pbVar29;
                pbVar29 = pbVar29 + 1;
                pbVar37 = pbVar36;
              } while (uVar33 != 0);
              uVar42 = uVar42 - uVar14;
              if (pvVar10->length != 0) break;
              uVar26 = LEN /*16200*/;
              goto L_HEAD_1;
            }
            goto L_HEAD_2;
          case LENEXT /*16201*/:
            uVar14 = pvVar10->extra;
            if (uVar14 != 0) goto L_LEN_8;
            goto L_LEN_7;
          case DIST /*16202*/:
            goto caseD_DIST;
          case DISTEXT /*16203*/:
            uVar14 = pvVar10->extra;
            if (uVar14 != 0) goto L_LEN_9;
            goto L_LEN_10;
          case MATCH /*16204*/:
            goto caseD_MATCH;
          case LIT /*16205*/:
            if (uVar42 == 0) goto L_HEAD_2;
            uVar42 = uVar42 - 1;
            pbVar36 = pbVar37 + 1;
            *pbVar37 = (byte)pvVar10->length;
            pvVar10->mode = LEN /*16200*/;
            break;
          case CHECK /*16206*/:
            uVar14 = 0;
            if (pvVar10->wrap != 0) {
              for (; uVar41 < 0x20; uVar41 = uVar41 + 8) {
                if (uVar17 == 0) goto L_HEAD_2;
                uVar17 = uVar17 - 1;
                uVar39 = ((ulong)*pbVar35 << (uVar41 & 0x3f)) + uVar39;
                pbVar35 = pbVar35 + 1;
              }
              uVar38 = (ulong)(uVar43 - uVar42);
              strm.total_out = strm.total_out + uVar38;
              uVar14 = pvVar10->wrap;
              pvVar10->total = pvVar10->total + uVar38;
              uVar33 = uVar14 & 4;
              if (((uVar14 >> 2 & 1) != 0) && (uVar43 != uVar42)) {
                uVar44 = uVar44 & 0xffffffff;
                if (pvVar10->flags == 0) {
                  strm.adler = adler32(pvVar10->check,(long)pbVar37 - uVar38)
                  ;
                }
                else {
                  strm.adler = crc32();
                }
                pvVar10->check = strm.adler;
                uVar14 = pvVar10->wrap;
                uVar33 = uVar14 & 4;
              }
              uVar43 = uVar42;
              if (uVar33 != 0) {
                uVar33 = ((uint)uVar39 & 0xff00ff00) >> 8 | ((uint)uVar39 & 0xff00ff) << 8;
                uVar38 = (ulong)(uVar33 >> 0x10 | uVar33 << 0x10);
                if (pvVar10->flags != 0) {
                  uVar38 = uVar39;
                }
                if (uVar38 != pvVar10->check) {
                  strm.msg = "incorrect data check";
                  pvVar10->mode = BAD /*16209*/;
                  uVar38 = uVar41 & 0xffffffff;
                  break;
                }
              }
              uVar39 = 0;
              uVar38 = 0;
            }
            pvVar10->mode = LENGTH /*16207*/;
            goto joined_r0x00521530;
          case LENGTH /*16207*/:
            uVar14 = pvVar10->wrap;
joined_r0x00521530:
            if ((uVar14 != 0) && (pvVar10->flags != 0)) {
              for (uVar38 = uVar38 & 0xffffffff; uVar38 < 0x20; uVar38 = uVar38 + 8) {
                if (uVar17 == 0) goto L_HEAD_2;
                uVar17 = uVar17 - 1;
                uVar39 = ((ulong)*pbVar35 << (uVar38 & 0x3f)) + uVar39;
                pbVar35 = pbVar35 + 1;
              }
              if (((uVar14 >> 2 & 1) == 0) || (uVar39 == pvVar10->total))
              goto L_LENGTH_1;
              strm.msg = "incorrect length check";
              goto L_OS_1;
            }
L_LENGTH_1:
            pvVar10->mode = DONE /*16208*/;
caseD_DONE:
            uVar14 = 1;
            goto caseD_BAD;
          case DONE /*16208*/:
            goto caseD_DONE;
          case BAD /*16209*/:
            goto caseD_BAD;
          }
          goto L_BAD_1;
        }
        goto valdi_throw_Failed_to_inflate_gzip_widge;
      }
    }
  }
init_fail_free_state:
  func_0x006f8bfc();
  zcfree();
  strm.state = (void *)0x0;
valdi_throw_Failed_to_initialize_gzip_in:
  uVar15 = OUTLINED_FUNCTION_734();
  uVar15 = func_0x006a6450(uVar15,0x4ff53);
  func_0x006e2488(uVar15,0x74eb20,0x49c430);
  func_0x006dd7fc();
  func_0x006dd3bc();
  OUTLINED_FUNCTION_102(0x734888);
  return;
L_CODELENS_1:
  uVar17 = 0;
  goto L_HEAD_2;
L_LEN_2:
  bVar5 = *pbVar21;
  uVar38 = uVar38 >> ((ulong)pbVar21[1] & 0x3f);
  uVar17 = (int)uVar39 - (uint)pbVar21[1];
  uVar39 = (ulong)uVar17;
  pbVar35 = pbVar40;
  if ((bVar5 >> 4 & 1) != 0) goto L_BAD_3;
  if ((bVar5 >> 6 & 1) != 0) {
    strm.msg = "invalid distance code";
    goto L_LEN_3;
  }
  pbVar21 = (byte *)(lVar31 + (ulong)*(ushort *)(pbVar21 + 2) * 4 +
                    (uVar38 & (uint)~(-1 << (ulong)(bVar5 & 0x1f))) * 4);
  goto L_LEN_2;
L_BAD_3:
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
    if ((uVar25 < uVar17) && (state->sane != 0)) {
      strm.msg = "invalid distance too far back";
L_LEN_3:
      uVar26 = BAD /*16209*/;
L_LEN_4:
      state->mode = uVar26;
      strm.next_out = pbVar36;
      goto L_BAD_4;
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
L_LEN_5:
  uVar18 = (uint)uVar39;
  pbVar36 = strm.next_out;
  if (pbVar29 <= pbVar35 || pbVar37 + (uVar42 - 0x101) <= strm.next_out) goto L_BAD_4;
  goto L_LEN_1;
L_BAD_4:
  uVar14 = (uint)uVar39 & 7;
  pbVar35 = pbVar35 + -(uVar39 >> 3);
  uVar42 = ((int)(pbVar37 + (uVar42 - 0x101)) - (int)strm.next_out) + 0x101;
  strm.pad_1c = strm.pad_1c;
  strm.avail_out = uVar42;
  uVar17 = ((int)pbVar29 - (int)pbVar35) + 5;
  state->bits = uVar14;
  strm.pad_0c = strm.pad_0c;
  strm.avail_in = uVar17;
  state->hold = uVar38 & (uint)~(-1 << (ulong)uVar14);
  uVar39 = pvVar10->hold;
  uVar38 = (ulong)pvVar10->bits;
  pbVar36 = strm.next_out;
  strm.next_in = pbVar35;
  if (pvVar10->mode == TYPE /*16191*/) {
    pvVar10->back = 0xffffffff;
  }
L_BAD_1:
  iVar13 = pvVar10->mode;
  pbVar37 = pbVar36;
  goto L_pre_4;
L_LEN_6:
  uVar17 = 0;
L_HEAD_2:
  uVar14 = (uint)uVar44;
caseD_BAD:
  func_0x006ead54(pvVar10->wsize);
  pvVar12 = strm.state;
  if ((extraout_w8_02 == 0) && ((uVar43 == uVar42 || (DONE /*16208*/ < pvVar10->mode))))
  goto L_BAD_5;
  lVar16 = state->window;
  if (lVar16 == 0) {
    lVar16 = (*strm.zalloc)(strm.opaque,1 << (ulong)(state->wbits & 0x1f),1);
    pvVar12->window = lVar16;
    if (lVar16 == 0) {
      pvVar10->mode = MEM /*16210*/;
valdi_throw_Failed_to_inflate_gzip_widge:
      func_0x006f7c70();
      uVar15 = OUTLINED_FUNCTION_734();
      func_0x006a6450(uVar15,0x4ed5b);
L_pre_3:
      func_0x006f4f44();
      func_0x006ea7ec();
      goto init_fail_free_state;
    }
  }
  uVar17 = pvVar12->wsize;
  if (uVar17 == 0) {
    pvVar12->whave = 0;
    uVar17 = 1 << (ulong)(pvVar12->wbits & 0x1f);
    pvVar12->wsize = uVar17;
  }
  uVar42 = uVar43 - uVar42;
  if (uVar42 < uVar17) {
    uVar17 = uVar17 - pvVar12->wnext;
    uVar33 = uVar17;
    if (uVar42 <= uVar17) {
      uVar33 = uVar42;
    }
    func_0x006ecc68(lVar16 + (ulong)pvVar12->wnext,(long)pbVar37 - (ulong)uVar42);
    if (uVar17 < uVar42) {
      func_0x006ecc68(pvVar12->window,(long)pbVar37 - (ulong)(uVar42 - uVar33)
                     );
      iVar13 = pvVar12->wsize;
      pvVar12->wnext = uVar42 - uVar33;
      goto updatewindow_tail;
    }
    uVar42 = pvVar12->wnext + uVar33;
    uVar17 = 0;
    if (uVar42 != pvVar12->wsize) {
      uVar17 = uVar42;
    }
    pvVar12->wnext = uVar17;
    if (pvVar12->whave < pvVar12->wsize) {
      iVar13 = pvVar12->whave + uVar33;
      goto updatewindow_tail;
    }
  }
  else {
    func_0x006fbd10(lVar16,(long)pbVar37 - (ulong)uVar17,(ulong)uVar17);
    iVar13 = pvVar12->wsize;
    pvVar12->wnext = 0;
updatewindow_tail:
    pvVar12->whave = iVar13;
  }
  uVar42 = strm.avail_out;
  uVar17 = strm.avail_in;
L_BAD_5:
  uVar38 = (ulong)(uVar43 - uVar42);
  strm.total_out = strm.total_out + uVar38;
  strm.total_in = strm.total_in + (ulong)(uVar9 - uVar17);
  pvVar10->total = pvVar10->total + uVar38;
  if (((pvVar10->wrap >> 2 & 1) != 0) && (uVar43 != uVar42)) {
    if (pvVar10->flags == 0) {
      strm.adler = adler32(pvVar10->check,(long)strm.next_out - uVar38);
    }
    else {
      strm.adler = crc32();
    }
    pvVar10->check = strm.adler;
  }
  func_0x006e0638(pvVar10->last);
  iVar13 = 0x100;
  if (extraout_w10_01 != COPY_ /*16194*/ && extraout_w10_01 != LEN_ /*16199*/) {
    iVar13 = 0;
  }
  strm.data_type =
       extraout_w9_02 + extraout_w8_03 * 0x40 + (uint)(extraout_w10_01 == extraout_w11) * 0x80 +
       iVar13;
  if (((uVar9 == uVar17 && uVar43 == uVar42) && (uVar14 == 0)) || (1 < uVar14)) goto valdi_throw_Failed_to_inflate_gzip_widge;
  goto return_epilogue;
L_DICT_1:
  uVar14 = (uint)uVar44;
  uVar17 = 0;
  goto caseD_BAD;
}

 (GhidraScript)
