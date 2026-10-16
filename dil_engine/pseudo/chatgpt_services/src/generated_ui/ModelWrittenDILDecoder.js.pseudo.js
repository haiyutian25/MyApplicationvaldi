// fn t  args=3 vars=5 closure=4 cpool=0 bc=948B file=chatgpt_services/src/generated_ui/ModelWrittenDILDecoder
// args: t, l, o
// locals: d, a
// closure: r, n, i, e
function {
  let a;
  let d;
  if (!((undefined === t))) goto L_c;
  return;
  d = t.model_dil_v2;
  if (!((null != d))) goto L_119;
  if (!(r(d))) goto L_9b;
  if (!(("string" == typeof d.code))) goto L_9b;
  return n(i.addChatGPTClientDefinedWidgetFallbacks(d, t), t, l);
  if (!(e.isLoggingEnabled)) goto L_116;
  console.warn("Ignoring invalid model-written DIL v2 in ".concat(o));
  return undefined;
  a = t.model_dil;
  if (!((null != a))) goto L_3b3;
  if (!(r(a))) goto L_337;
  if (!(r(a.dil))) goto L_337;
  if (!(("string" == typeof a.dil.type))) goto L_337;
  if (((0 !== l.trim().length))) goto L_308;
  if ((("Response" !== a.dil.type))) goto L_308;
  if (!(Array.isArray(a.dil.children))) goto L_3b3;
  if (!((0 !== a.dil.children.length))) goto L_3b3;
  return n(a.dil, t, l);   // tail call
  if (!(e.isLoggingEnabled)) goto L_3b2;
  console.warn("Ignoring invalid model-written DIL metadata in ".concat(o));
  return;
}

// fn n  args=3 vars=5 closure=1 cpool=0 bc=327B file=chatgpt_services/src/generated_ui/ModelWrittenDILDecoder
// args: e, i, t
// locals: n, l
// closure: r
function {
  let l;
  let n;
  n = i.view_state;
  if (!(r(n))) goto L_a7;
  if (!(r(n.root))) goto L_a7;
  goto L_a8;
  // [栈深重同步 1 -> 0]
  l = undefined;
  if (!(("string" == typeof e.fallbackMarkdown))) goto L_f9;
  goto L_fa;
  // [栈深重同步 2 -> 1]
  if (!((undefined === l))) goto L_109;
  goto L_112;
  // [栈深重同步 2 -> 1]
  null;
  {initialState: l};
  return {fallbackMarkdown: t, rawPayload: JSON.stringify(e)};
}

// fn r  args=1 vars=1 closure=0 cpool=0 bc=63B file=chatgpt_services/src/generated_ui/ModelWrittenDILDecoder
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=147B file=chatgpt_services/src/generated_ui/ModelWrittenDILDecoder
// args: require, module, exports
// locals: e, i, t, n, r
function {
  t = function t;
  n = function n;
  r = function r;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.decodeModelWrittenDILResult = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("./ChatGPTClientDefinedWidgetFallbacks");
  exports.decodeModelWrittenDILResult = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/generated_ui/ModelWrittenDILDecoder
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
