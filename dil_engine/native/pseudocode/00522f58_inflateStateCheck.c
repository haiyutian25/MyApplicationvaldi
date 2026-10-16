// inflateStateCheck
// 地址 00522f58
// 由 Ghidra 12.1.3 对**切片 ELF** 全量分析后反编译得到（见 REPORT_native.md 附录 A）
// fn inflateStateCheck  入口=00522f58  字节数=68 (GhidraScript)
// 定位: state变量=null  strm变量=null (GhidraScript)
// [类型标注: 命名变量 0 处，偏移访问指针 0 处] (GhidraScript)

ulong inflateStateCheck(long param_1)

{
  ulong uVar1;
  long *plVar2;
  
  if ((((param_1 != 0) && (*(long *)(param_1 + 0x40) != 0)) && (*(long *)(param_1 + 0x48) != 0)) &&
     ((plVar2 = *(long **)(param_1 + 0x38), plVar2 != (long *)0x0 && (*plVar2 == param_1)))) {
    return (ulong)((int)plVar2[1] - 0x3f54U < 0xffffffe0);
  }
  uVar1 = OUTLINED_FUNCTION_6923();
  return uVar1;
}

 (GhidraScript)
