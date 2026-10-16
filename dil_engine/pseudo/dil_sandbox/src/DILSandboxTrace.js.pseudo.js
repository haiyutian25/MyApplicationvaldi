// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=98B file=dil_sandbox/src/DILSandboxTrace
// args: n, t
// closure: e
function {
  if (!((e == null))) goto L_9;
  e;
  goto L_61;
  if (!((undefined.instantTrace == null))) goto L_32;
  undefined.instantTrace;
  goto L_61;
  undefined.call(e, n, ["requestId", t]);
  return;
}

// fn e  args=1 vars=1 closure=0 cpool=1 bc=3B file=dil_sandbox/src/DILSandboxTrace
// args: e
function {
  return function <atom:0>;
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=150B file=dil_sandbox/src/DILSandboxTrace
// args: e
function {
  if (!((e === 0))) goto L_c;
  return "DILSandbox.HostSendRegisterElementRegistryRequest";
  if (!((e === 1))) goto L_17;
  return "DILSandbox.HostSendCreateContextRequest";
  if (!((e === 2))) goto L_22;
  return "DILSandbox.HostSendUpdateSourceRequest";
  if (!((e === 3))) goto L_2d;
  return "DILSandbox.HostSendRenderRequest";
  if (!((e === 4))) goto L_38;
  return "DILSandbox.HostSendCommitRequest";
  if (!((e === 5))) goto L_43;
  return "DILSandbox.HostSendDestroyContextRequest";
  if (!((e === 6))) goto L_4e;
  return "DILSandbox.HostSendInvokeFunctionRequest";
  if (!((e === 7))) goto L_59;
  return "DILSandbox.HostSendInitializeChannelRequest";
  if (!((e === 8))) goto L_65;
  return "DILSandbox.HostSendInitializeLegacyRequest";
  if (!((e === 9))) goto L_71;
  return "DILSandbox.HostSendUpdateStateSnapshotRequest";
  if (!((e === 10))) goto L_7d;
  return "DILSandbox.HostSendSignalRequest";
  if (!((e === 11))) goto L_89;
  return "DILSandbox.HostSendCollectPolyfilledTracesRequest";
  if (!((e === 12))) goto L_95;
  return "DILSandbox.HostSendHostActionResponseRequest";
  e;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=dil_sandbox/src/DILSandboxTrace
// args: e, n
function {
  return n();   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=32B file=dil_sandbox/src/DILSandboxTrace
// args: e, a
// closure: n, t
function {
  n(e);
  try { // catch -> L_14
  // gosub (finally 块) 26
  return a();
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 26
  throw <?>;
  t();
  // ret (finally 块) 
}

// fn t  args=1 vars=3 closure=0 cpool=2 bc=204B file=dil_sandbox/src/DILSandboxTrace
// args: e
// locals: n, t
function {
  let t;
  let n;
  if (!((e == null))) goto L_f;
  e;
  goto L_5d;
  if (!((undefined.beginTrace == null))) goto L_38;
  undefined.beginTrace;
  goto L_5d;
  n = undefined.bind(e);
  if (!((e == null))) goto L_67;
  e;
  goto L_b5;
  if (!((undefined.endTrace == null))) goto L_90;
  undefined.endTrace;
  goto L_b5;
  t = undefined.bind(e);
  if (((undefined === n))) goto L_c4;
  if (!((undefined === t))) goto L_c9;
  return function <atom:0>;
  return function <atom:0>;
}

// fn a  args=1 vars=1 closure=0 cpool=0 bc=150B file=dil_sandbox/src/DILSandboxTrace
// args: e
function {
  if (!((e === 0))) goto L_c;
  return "DILSandbox.RegisterElementRegistry";
  if (!((e === 1))) goto L_17;
  return "DILSandbox.CreateContext";
  if (!((e === 2))) goto L_22;
  return "DILSandbox.UpdateSource";
  if (!((e === 3))) goto L_2d;
  return "DILSandbox.Render";
  if (!((e === 4))) goto L_38;
  return "DILSandbox.Commit";
  if (!((e === 5))) goto L_43;
  return "DILSandbox.DestroyContext";
  if (!((e === 6))) goto L_4e;
  return "DILSandbox.InvokeFunction";
  if (!((e === 7))) goto L_59;
  return "DILSandbox.InitializeChannel";
  if (!((e === 8))) goto L_65;
  return "DILSandbox.InitializeLegacy";
  if (!((e === 9))) goto L_71;
  return "DILSandbox.UpdateStateSnapshot";
  if (!((e === 10))) goto L_7d;
  return "DILSandbox.Signal";
  if (!((e === 11))) goto L_89;
  return "DILSandbox.CollectPolyfilledTraces";
  if (!((e === 12))) goto L_95;
  return "DILSandbox.HostActionResponse";
  e;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=157B file=dil_sandbox/src/DILSandboxTrace
// args: require, module, exports
// locals: e, n, t, a
function {
  e = function e;
  n = function n;
  t = function t;
  a = function a;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.makeSandboxInstantTraceFn = undefined;
  exports.dilSandboxHostSendRequestTraceTag = undefined;
  exports.makeSandboxTraceFn = undefined;
  exports.dilSandboxOperationTraceTag = undefined;
  exports.makeSandboxInstantTraceFn = e;
  exports.dilSandboxHostSendRequestTraceTag = n;
  exports.makeSandboxTraceFn = t;
  exports.dilSandboxOperationTraceTag = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxTrace
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
