// fn m  args=1 vars=3 closure=3 cpool=0 bc=216B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: e
// locals: o, i
// closure: n, t, I
function {
  let i;
  let o;
  o = new n.TextEncoder().encode(e);
  i = t.Base64.fromByteArray(o, {urlSafe: true});
  return "".concat(I(e), "#", i);   // tail call
}

// fn v  args=4 vars=4 closure=3 cpool=0 bc=25B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: e, t, n, o
// closure: m, L, M
function {
  return {url: m(L(t)), postLoadJavaScript: M(e, t, n, o)};
}

// fn y  args=2 vars=4 closure=5 cpool=0 bc=103B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: e, t
// locals: n, o
// closure: E, f, c, s, $
function {
  let o;
  let n;
  n = E(f, c, {theme: t});
  o = E(f, s, {state: e});
  return "
(function() {
  window.dispatchEvent(new MessageEvent('message', { data: ".concat($(n), " }));
  window.dispatchEvent(new MessageEvent('message', { data: ", $(o), " }));
})();
");   // tail call
}

// fn h  args=1 vars=1 closure=1 cpool=0 bc=16B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: e
// closure: s
function {
  return {type: s, state: e};
}

// fn W  args=1 vars=1 closure=1 cpool=0 bc=16B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: e
// closure: a
function {
  return {type: a, padding: e};
}

// fn x  args=1 vars=7 closure=6 cpool=0 bc=866B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: o
// locals: i, e, d, a, s, c
// closure: t, n, B, r, u, e
function {
  let c;
  let s;
  let a;
  let d;
  let i;
  i = undefined;
  try { // catch -> L_104
  let e;
  e = t.Base64.toByteArray(o);
  i = JSON.parse(new n.TextDecoder().decode(e.buffer));
  JSON.parse(new n.TextDecoder().decode(e.buffer));
  <?>;
  goto L_10e;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_10d
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  d = B(i);
  if (!((d == null))) goto L_120;
  d;
  goto L_141;
  a = B(undefined.params);
  if (!((a == null))) goto L_14f;
  a;
  goto L_170;
  s = B(undefined.action);
  if (!((s == null))) goto L_17e;
  s;
  goto L_19f;
  c = undefined.payload;
  if (!((d == null))) goto L_1ac;
  d;
  goto L_1cd;
  if (!((undefined.source === r))) goto L_361;
  if (!(("string" == typeof d.id))) goto L_361;
  if (!((d.method === u))) goto L_361;
  if (!((a == null))) goto L_243;
  a;
  goto L_264;
  if (!(("client" === undefined.handler))) goto L_361;
  if (!((s == null))) goto L_27a;
  s;
  goto L_29b;
  if (!(("string" == typeof undefined.type))) goto L_361;
  if (((null == c))) goto L_2d3;
  if (!(e.isCELMap(c))) goto L_361;
  if (!(e.isCELMap(c))) goto L_35a;
  goto L_35b;
  // [栈深重同步 2 -> 1]
  return {id: d.id, type: s.type, localValues: {}};
  return;
}

// fn S  args=1 vars=1 closure=2 cpool=0 bc=63B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: e
// closure: $, l
function {
  return "window.postMessage(".concat($({method: l, sourceId: e}), ", window.origin || window.location.origin || '*');");   // tail call
}

// fn L  args=1 vars=1 closure=0 cpool=0 bc=48B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: e
function {
  return JSON.stringify({theme: e});   // tail call
}

// fn D  args=1 vars=3 closure=0 cpool=0 bc=210B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: e
// locals: t, n
function {
  let t;
  t = 0;
  let n;
  n = 0;
  if (!((n < e.length))) goto L_55;
  t = ((((t << 5) - t) + e.charCodeAt(n)) | 0);
  ((((t << 5) - t) + e.charCodeAt(n)) | 0);
  n = <n_new>;
  (n++);
  goto L_a;
  return "".concat(e.length.toString(36), "-", (t >>> 0).toString(36));   // tail call
}

// fn I  args=1 vars=1 closure=3 cpool=0 bc=56B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: e
// closure: o, i, D
function {
  return "".concat(o, "?", i, "=", D(e));   // tail call
}

// fn M  args=4 vars=5 closure=5 cpool=0 bc=219B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: e, t, n, o
// locals: i
// closure: E, w, d, c, $
function {
  let i;
  if (!((t == null))) goto L_25;
  t;
  if (!((n == null))) goto L_37;
  n;
  // append([{type: c, theme: "light"}], 1, [])
  [];
  i = E(w, d, {widget: e, messages: [{type: c, theme: "light"}]});
  if (!(o.enableNativeBridge)) goto L_91;
  goto L_96;
  // [栈深重同步 3 -> 2]
  if (!(o.disableDocumentScroll)) goto L_c6;
  goto L_c7;
  // [栈深重同步 5 -> 4]
  return "
(function() {
".concat("
  if (window.WidgetNative != null && window.WidgetNative.__valdiDILWidgetAdapter === true) {
    delete window.WidgetNative;
  }", "
", "", "
  var nativeEnvelope = ", $(i), ";
  var attempts = 0;
  function configureWidget() {
    window.dispatchEvent(new MessageEvent('message', { data: nativeEnvelope }));
    attempts += 1;
    if (attempts < 20) {
      window.setTimeout(configureWidget, 100);
    }
  }
  configureWidget();
})();
");   // tail call
}

// fn B  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: e
function {
  if (!((null !== e))) goto L_3e;
  if (!(("object" == typeof e))) goto L_3e;
  if (!(!Array.isArray(e))) goto L_3e;
  return e;
  return;
}

// fn E  args=3 vars=4 closure=3 cpool=0 bc=240B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: e, o, i
// locals: d
// closure: r, t, n
function {
  let d;
  d = {source: r, id: e, method: o, params: i};
  return {type: "message", msg: t.Base64.fromByteArray(new n.TextEncoder().encode(JSON.stringify(d)))};
}

// fn $  args=1 vars=1 closure=0 cpool=4 bc=134B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: e
function {
  return JSON.stringify(e).replace(new RegExp("\\u2028"), "\u2028").replace(new RegExp("\\u2029"), "\u2029");   // tail call
}

// fn <atom:0>  args=3 vars=33 closure=0 cpool=16 bc=401B file=dil_widgets/src/webview/DILWidgetWebUrl
// args: require, module, exports
// locals: e, t, n, o, i, r, d, a, s, c, u, l, g, p, w, f, m, v, y, h, W, x, S, L, D, I, M, B, E, $
function {
  m = function m;
  v = function v;
  y = function y;
  h = function h;
  W = function W;
  x = function x;
  S = function S;
  L = function L;
  D = function D;
  I = function I;
  M = function M;
  B = function B;
  E = function E;
  $ = function $;
  let f;
  let w;
  let p;
  let g;
  let l;
  let u;
  let c;
  let s;
  let a;
  let d;
  let r;
  let i;
  let o;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createDILWidgetWebContent = undefined;
  exports.createDILWidgetUpdateJavaScript = undefined;
  exports.createDILWidgetSetStateMessage = undefined;
  exports.createDILWidgetSetPaddingMessage = undefined;
  exports.parseDILWidgetActionMessage = undefined;
  exports.createDILWidgetActionResponseJavaScript = undefined;
  e = require("cel/src/CELValue");
  t = require("coreutils/src/Base64");
  n = require("coreutils/src/unicode/TextCoding");
  o = "https://cdn.platform.openai.com/deployments/widgets/index.html";
  i = "dilPayloadId";
  r = "dil-widget";
  d = "dil-configure-widget";
  a = "dil-set-padding";
  s = "dil-set-state";
  c = "dil-set-theme";
  u = "dil-widget-action";
  l = "dil-widget-action-response";
  g = 20;
  p = 100;
  w = "1";
  f = "2";
  exports.createDILWidgetWebContent = v;
  exports.createDILWidgetUpdateJavaScript = y;
  exports.createDILWidgetSetStateMessage = h;
  exports.createDILWidgetSetPaddingMessage = W;
  exports.parseDILWidgetActionMessage = x;
  exports.createDILWidgetActionResponseJavaScript = S;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/webview/DILWidgetWebUrl
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
