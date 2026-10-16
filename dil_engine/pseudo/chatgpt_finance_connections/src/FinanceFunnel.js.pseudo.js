// fn r  args=0 vars=0 closure=2 cpool=0 bc=526B file=chatgpt_finance_connections/src/FinanceFunnel
// closure: i, n
function {
  if (!(i.Device.isWeb())) goto L_132;
  if (!(i.Device.isDesktop())) goto L_ea;
  goto L_208;
  // [栈深重同步 2 -> 1]
  goto L_208;
  // [栈深重同步 2 -> 1]
  if (!(i.Device.isAndroid())) goto L_1c3;
  goto L_208;
  // [栈深重同步 2 -> 1]
  return {flow_path: "first_party", platform: n.FinanceFunnelPlatform.IOS};
}

// fn t  args=2 vars=2 closure=1 cpool=0 bc=180B file=chatgpt_finance_connections/src/FinanceFunnel
// args: n, i
// closure: e
function {
  try { // catch -> L_51
  (await n.recordFunnelEvent(i).result);
  <?>;
  goto L_b2;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_b1
  if (!(e.isLoggingEnabled)) goto L_ad;
  console.warn("Finance funnel event delivery failed");
  <?>;
  goto L_b2;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=178B file=chatgpt_finance_connections/src/FinanceFunnel
// args: require, module, exports
// locals: e, n, i, r, t
function {
  r = function r;
  t = function t;
  let i;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.financeFunnelStart = undefined;
  exports.sendFinanceFunnelEvent = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  n = require("chatgpt_finance/src/FinanceFunnelModels");
  i = require("valdi_core/src/Device");
  exports.financeFunnelStart = r;
  exports.sendFinanceFunnelEvent = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_connections/src/FinanceFunnel
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
