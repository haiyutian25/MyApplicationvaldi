// fn r  args=2 vars=3 closure=1 cpool=0 bc=59B file=dil_renderer/src/DILApiFacade
// args: e, r
// locals: o
// closure: t
function {
  let o;
  null;
  e;
  o = {};
  t.set(o, r);
  return o;
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=52B file=dil_renderer/src/DILApiFacade
// args: e
// closure: E
function {
  Object.setPrototypeOf(e, null);
  E(e, false);
  return e;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=147B file=dil_renderer/src/DILApiFacade
// args: r, o
// locals: n
// closure: I, t, e
function {
  let n;
  n = I(r, 0, t.get(r));
  if (!(("client" === n.handler))) goto L_8f;
  if (!(("log_event" === n.type))) goto L_8f;
  goto L_90;
  // [栈深重同步 3 -> 2]
  return e(n, undefined);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=223B file=dil_renderer/src/DILApiFacade
// args: t
// locals: r, o
// closure: e, I
function {
  let o;
  let r;
  r = t.nativeWidgetResolutionId;
  o = t.componentName;
  if ((("string" != typeof r))) goto L_74;
  if ((!r)) goto L_74;
  if ((("string" != typeof o))) goto L_74;
  if (!(!o)) goto L_85;
  throw new Error("Registered component action is missing its bound target.");
  null;
  I(t, 0, undefined);
  if (!(("client" === t.handler))) goto L_c2;
  goto L_c7;
  // [栈深重同步 3 -> 2]
  return e({handler: "server", nativeWidgetResolutionId: r, componentName: o});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=30B file=dil_renderer/src/DILApiFacade
// args: t
// closure: e
function {
  e({handler: "client", payload: t, type: "log_event"});
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=42B file=dil_renderer/src/DILApiFacade
// args: t, r
// closure: e
function {
  null;
  r;
  e({handler: "client", payload: {query: t}, type: "issue_new_turn"});
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=71B file=dil_renderer/src/DILApiFacade
// args: t, r, o
// locals: n
// closure: e
function {
  let n;
  n = {category: t, query: r};
  if (!((undefined !== o))) goto L_26;
  n.extraParams = o;
  o;
  e({handler: "client", payload: n, type: "open_entity_detail"});
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=42B file=dil_renderer/src/DILApiFacade
// args: t, r
// closure: e
function {
  e({handler: "client", payload: {images: t, selected_index: r}, type: "open_image_lightbox"});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=36B file=dil_renderer/src/DILApiFacade
// args: t
// closure: e
function {
  e({handler: "client", payload: {url: t}, type: "open_url"});
  return;
}

// fn p  args=1 vars=1 closure=3 cpool=7 bc=61B file=dil_renderer/src/DILApiFacade
// args: e
// closure: I, t, l
function {
  return l({dispatchAction: function <atom:0>, dispatchWidgetAction: function <atom:0>, logEvent: function <atom:0>, issueNewTurn: function <atom:0>, openEntityDetail: function <atom:0>, openImageLightbox: function <atom:0>, openUrl: function <atom:0>});   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=107B file=dil_renderer/src/DILApiFacade
// args: t
// locals: arguments
// closure: e
function {
  arguments = <special_object 0>;
  if (((1 !== arguments.length))) goto L_13;
  if (!(("string" != typeof t))) goto L_24;
  throw new TypeError("GenUI.copy requires one text string.");
  e.dispatchAction({handler: "client", payload: {value: t}, type: "copy"});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=75B file=dil_renderer/src/DILApiFacade
// args: t
// locals: arguments
// closure: e
function {
  arguments = <special_object 0>;
  if (((1 !== arguments.length))) goto L_13;
  if (!(("string" != typeof t))) goto L_24;
  throw new TypeError("GenUI.issueNewTurn requires one query string.");
  e.issueNewTurn(t);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=0 bc=251B file=dil_renderer/src/DILApiFacade
// args: t
// locals: r, r#1, arguments
// closure: a, w, e, b
function {
  arguments = <special_object 0>;
  if (!((1 !== arguments.length))) goto L_16;
  throw new TypeError(a);
  if (!((null !== t))) goto L_aa;
  if (!(("object" == typeof t))) goto L_aa;
  if (!(("refId" in t))) goto L_aa;
  let r;
  r = w(t);
  e.openEntityDetail(r.category, r.refId);
  return;
  let r#1;
  r#1 = b(t);
  null;
  r#1;
  e.dispatchAction({handler: "client", type: "open_entity_detail", payload: {}});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=75B file=dil_renderer/src/DILApiFacade
// args: t
// locals: arguments
// closure: e
function {
  arguments = <special_object 0>;
  if (((1 !== arguments.length))) goto L_13;
  if (!(("string" != typeof t))) goto L_24;
  throw new TypeError("GenUI.openUrl requires one URL string.");
  e.openUrl(t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=dil_renderer/src/DILApiFacade
// closure: e, r
function {
  return e.dispatchAction(r);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=1 bc=67B file=dil_renderer/src/DILApiFacade
// args: t
// locals: r, arguments
// closure: e, s, y, d
function {
  arguments = <special_object 0>;
  let r;
  if (!((1 !== arguments.length))) goto L_19;
  throw new TypeError(s);
  null;
  y(t);
  r = {handler: "server", type: "genui.run_plugin_tool", payload: {}};
  return d(function <atom:0>);   // tail call
}

// fn u  args=1 vars=1 closure=7 cpool=5 bc=47B file=dil_renderer/src/DILApiFacade
// args: e
// closure: a, w, b, s, y, d, l
function {
  return l({copy: function <atom:0>, issueNewTurn: function <atom:0>, openEntityDetail: function <atom:0>, openUrl: function <atom:0>, runPluginTool: function <atom:0>});   // tail call
}

// fn d  args=1 vars=3 closure=1 cpool=0 bc=481B file=dil_renderer/src/DILApiFacade
// args: t
// locals: e, t#1
// closure: e
function {
  try { // catch -> L_1a2
  let e;
  e = (await t());
  if (!((null !== e))) goto L_19f;
  if (!(("object" == typeof e))) goto L_19f;
  let t#1;
  t#1 = e;
  if (!(("error" === t#1.status))) goto L_e4;
  if (!(("string" == typeof t#1.statusMessage))) goto L_e4;
  if (!(t#1.statusMessage)) goto L_e4;
  return {status: "error", message: t#1.statusMessage}; // async
  if (!(("success" === t#1.status))) goto L_19f;
  if (!(("string" == typeof t#1.dataJSON))) goto L_19f;
  return {status: "success", data: JSON.parse(t#1.dataJSON)}; // async
  <?>;
  goto L_1ac;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_1ab
  <?>;
  goto L_1ac;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return {status: "error", message: e.DIL_PLUGIN_TOOL_UNCONFIRMED}; // async
}

// fn y  args=1 vars=4 closure=3 cpool=0 bc=465B file=dil_renderer/src/DILApiFacade
// args: e
// locals: t, r, o
// closure: f, s, g
function {
  let o;
  let r;
  let t;
  if (!(!f(e))) goto L_1c;
  throw new TypeError(s);
  t = Reflect.ownKeys(e);
  if (!((Object.getOwnPropertyDescriptor(e, "tool") == null))) goto L_7e;
  Object.getOwnPropertyDescriptor(e, "tool");
  goto L_9f;
  r = undefined.value;
  if (!((Object.getOwnPropertyDescriptor(e, "arguments") == null))) goto L_d7;
  Object.getOwnPropertyDescriptor(e, "arguments");
  goto L_f8;
  o = undefined.value;
  if (!((2 === t.length))) goto L_1a4;
  if (!(t.includes("tool"))) goto L_1a4;
  if (!(t.includes("arguments"))) goto L_1a4;
  if (!(("string" == typeof r))) goto L_1a4;
  if (!(r.trim())) goto L_1a4;
  if (!(!f(o))) goto L_1b4;
  throw new TypeError(s);
  return {tool: r, arguments: g(o, new Set())};
}

// fn f  args=1 vars=2 closure=0 cpool=0 bc=164B file=dil_renderer/src/DILApiFacade
// args: e
// locals: t
function {
  let t;
  if (((null === e))) goto L_40;
  if ((("object" != typeof e))) goto L_40;
  if (!(Array.isArray(e))) goto L_45;
  return false;
  t = Object.getPrototypeOf(e);
  if (((t === Object.prototype))) goto L_a3;
  return (null === t);
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=0 bc=149B file=dil_renderer/src/DILApiFacade
// args: r, o
// locals: n
// closure: e, s, g, t
function {
  let n;
  n = Object.getOwnPropertyDescriptor(e, o);
  if (((undefined === n))) goto L_5d;
  if (!(!n.enumerable)) goto L_6c;
  throw new TypeError(s);
  return g(n.value, t);   // tail call
}

// fn g  args=2 vars=6 closure=3 cpool=1 bc=844B file=dil_renderer/src/DILApiFacade
// args: e, t
// locals: r, o, n, r#1
// closure: s, g, f
function {
  if (((null === e))) goto L_53;
  if ((("string" == typeof e))) goto L_53;
  if ((("boolean" == typeof e))) goto L_53;
  if (!(("number" == typeof e))) goto L_57;
  if (!(Number.isFinite(e))) goto L_57;
  return e;
  if ((("object" != typeof e))) goto L_be;
  if ((t.has(e))) goto L_be;
  if (!(!Array.isArray(e))) goto L_cd;
  if (!(!f(e))) goto L_cd;
  throw new TypeError(s);
  t.add(e);
  try { // catch -> L_31e
  let o;
  let r;
  r = Reflect.ownKeys(e);
  if (!(Array.isArray(e))) goto L_200;
  if (((Object.getPrototypeOf(e) !== Array.prototype))) goto L_1b7;
  if (!((r.length !== (e.length + 1)))) goto L_1c6;
  throw new TypeError(s);
  // gosub (finally 块) 804
  return Array.from({length: e.length}, function <atom:0>);
  o = Object.create(null);
  let n;
  for (const n of r) {
    let r#1;
    r#1 = Object.getOwnPropertyDescriptor(e, n);
    if ((("string" != typeof n))) goto L_2cd;
    if (((undefined === r#1))) goto L_2cd;
    if ((!r#1.enumerable)) goto L_2cd;
    if (!((undefined === r#1.value))) goto L_2dc;
    throw new TypeError(s);
    o[n] = g(r#1.value, t);
  }
  // gosub (finally 块) 804
  return o;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 804
  throw <?>;
  t.delete(e);
  // ret (finally 块) 
}

// fn h  args=2 vars=2 closure=2 cpool=0 bc=63B file=dil_renderer/src/DILApiFacade
// args: e, t
// closure: n, i
function {
  if (!((t.length <= n))) goto L_3e;
  if (!((i.exec(t) == null))) goto L_3a;
  i.exec(t);
  goto L_3c;
  return (undefined[1] === e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=19B file=dil_renderer/src/DILApiFacade
// args: e
function {
  if (!(("category" !== e))) goto L_12;
  return ("refId" !== e);
}

// fn w  args=1 vars=5 closure=2 cpool=1 bc=346B file=dil_renderer/src/DILApiFacade
// args: e
// locals: t, r, o, n
// closure: a, h
function {
  let n;
  let o;
  let r;
  let t;
  if (((null === e))) goto L_49;
  if ((("object" != typeof e))) goto L_49;
  if (!(Array.isArray(e))) goto L_58;
  throw new TypeError(a);
  t = e;
  r = Reflect.ownKeys(t);
  o = t.category;
  n = t.refId;
  if (((2 !== r.length))) goto L_139;
  if ((r.some(function <atom:0>))) goto L_139;
  if (!(("product" !== o))) goto L_11e;
  if ((("business" !== o))) goto L_139;
  if ((("string" != typeof n))) goto L_139;
  if (!(!h(o, n))) goto L_148;
  throw new TypeError(a);
  return {category: o, refId: n};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=52B file=dil_renderer/src/DILApiFacade
// args: e
function {
  if (!(("category" !== e))) goto L_33;
  if (!(("value" !== e))) goto L_33;
  if (!(("disambig" !== e))) goto L_33;
  if (!(("location" !== e))) goto L_33;
  return ("address" !== e);
}

// fn b  args=1 vars=5 closure=3 cpool=1 bc=1028B file=dil_renderer/src/DILApiFacade
// args: e
// locals: t, r, o, n
// closure: a, m, c
function {
  let n;
  let o;
  let r;
  let t;
  if (((null === e))) goto L_49;
  if ((("object" != typeof e))) goto L_49;
  if (!(Array.isArray(e))) goto L_58;
  throw new TypeError(a);
  t = e;
  r = Reflect.ownKeys(t);
  if ((!r.includes("category"))) goto L_112;
  if ((!r.includes("value"))) goto L_112;
  if (!(r.some(function <atom:0>))) goto L_121;
  throw new TypeError(a);
  o = m(t.category, 128).toLowerCase();
  if (!(("entity_sidebar_follow_up" === o))) goto L_187;
  throw new TypeError(a);
  if (!(("business" === o))) goto L_19a;
  goto L_19d;
  // [栈深重同步 2 -> 1]
  if (!(r.includes("disambig"))) goto L_22f;
  goto L_230;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!(r.includes("location"))) goto L_294;
  goto L_295;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!(r.includes("address"))) goto L_2f9;
  goto L_2fa;
  // [栈深重同步 2 -> 1]
  null;
  {};
  n = {category: o, value: m(t.value, 1024)};
  if (!(c.has(n.category))) goto L_400;
  if (!(!n.address)) goto L_400;
  if ((!n.location)) goto L_3f1;
  if (!(("user" === n.location.toLowerCase()))) goto L_400;
  throw new TypeError(a);
  return n;
}

// fn m  args=2 vars=2 closure=1 cpool=0 bc=110B file=dil_renderer/src/DILApiFacade
// args: e, t
// closure: a
function {
  if ((("string" != typeof e))) goto L_3a;
  if (((e.length > t))) goto L_3a;
  if (!(!e.trim())) goto L_49;
  throw new TypeError(a);
  return e.trim();   // tail call
}

// fn I  args=3 vars=9 closure=2 cpool=0 bc=605B file=dil_renderer/src/DILApiFacade
// args: e, t, r
// locals: o, n, i, a, s, c
// closure: v, I
function {
  let c;
  let s;
  let a;
  let i;
  let n;
  let o;
  if (((null === e))) goto L_4f;
  if ((("object" != typeof e))) goto L_4f;
  if (!(Array.isArray(e))) goto L_60;
  throw new Error("GenUI.dispatchAction requires an action object.");
  o = e;
  if (!((v(o.handler, "handler") == null))) goto L_98;
  v(o.handler, "handler");
  n = {handler: "client"};
  i = v(o.type, "type");
  if (!((undefined !== i))) goto L_e3;
  n.type = i;
  i;
  a = v(o.loadingBehavior, "loadingBehavior");
  if (!((undefined !== a))) goto L_129;
  n.loadingBehavior = a;
  a;
  s = o.payload;
  if (!((undefined !== s))) goto L_1ee;
  if (((null === s))) goto L_19d;
  if ((("object" != typeof s))) goto L_19d;
  if (!(Array.isArray(s))) goto L_1ae;
  throw new Error("GenUI.dispatchAction requires payload to be an object.");
  null;
  s;
  n.payload = {};
  delete "followup_metadata";
  // [栈深重同步 1 -> 0]
  c = o.fallbackAction;
  if (!((undefined !== c))) goto L_244;
  if (!((t >= 3))) goto L_22f;
  throw new Error("GenUI.dispatchAction exceeds the maximum fallback depth.");
  n.fallbackAction = I(c, (t + 1), r);
  if (!((undefined === r))) goto L_24d;
  return n;
  null;
  n;
  null;
  r;
  return {};
}

// fn v  args=2 vars=2 closure=0 cpool=0 bc=75B file=dil_renderer/src/DILApiFacade
// args: e, t
function {
  if (!((undefined !== e))) goto L_4a;
  if (!(("string" != typeof e))) goto L_48;
  throw new Error("GenUI.dispatchAction requires ".concat(t, " to be a string."));
  return e;
  return;
}

// fn E  args=2 vars=2 closure=1 cpool=0 bc=14B file=dil_renderer/src/DILApiFacade
// args: e, t
// closure: A
function {
  A(e, t, new WeakSet());
  return;
}

// fn A  args=3 vars=5 closure=2 cpool=0 bc=502B file=dil_renderer/src/DILApiFacade
// args: e, t, r
// locals: o, n
// closure: O, A
function {
  if (!(O(e))) goto L_1f5;
  if (!(!r.has(e))) goto L_1f5;
  r.add(e);
  if (!(t)) goto L_8e;
  A(Object.getPrototypeOf(e), t, r);
  let o;
  for (const o of Reflect.ownKeys(e)) {
    let n;
    n = Object.getOwnPropertyDescriptor(e, o);
    if (!((undefined !== n))) goto L_184;
    if (!(("value" in n))) goto L_133;
    goto L_184;
    // [栈深重同步 4 -> 3]
    A(n.get, t, r);
    A(n.set, t, r);
  }
  Object.freeze(e);
  if (!(!Object.isFrozen(e))) goto L_1f5;
  throw new Error("Failed to freeze an object in the object graph.");
  return;
}

// fn O  args=1 vars=1 closure=0 cpool=0 bc=28B file=dil_renderer/src/DILApiFacade
// args: e
function {
  if (!(("object" == typeof e))) goto L_f;
  if (((null !== e))) goto L_1b;
  return ("function" == typeof e);
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=19 bc=421B file=dil_renderer/src/DILApiFacade
// args: require, module, exports
// locals: e, t, r, o, n, i, a, s, c, l, p, u, d, y, f, g, h, w, b, m, I, v, E, A, O
function {
  r = function r;
  l = function l;
  p = function p;
  u = function u;
  d = function d;
  y = function y;
  f = function f;
  g = function g;
  h = function h;
  w = function w;
  b = function b;
  m = function m;
  I = function I;
  v = function v;
  E = function E;
  A = function A;
  O = function O;
  let c;
  let s;
  let a;
  let i;
  let n;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.bindDILClientAction = undefined;
  exports.hardenApiFacade = undefined;
  exports.createDILGenUIFacade = undefined;
  exports.createDILModelGenUIFacade = undefined;
  exports.readDILModelPluginToolPayload = undefined;
  exports.isDILModelEntityReference = undefined;
  exports.readDILModelNamedEntity = undefined;
  exports.freezeObjectGraph = undefined;
  e = require("./DILAPI");
  t = new WeakMap();
  exports.bindDILClientAction = r;
  o = 3;
  n = 128;
  i = new RegExp("^turn(?:0|[1-9]\\d*)(product|business)(?:0|[1-9]\\d*)(?![\\s\\S])");
  a = "GenUI.openEntityDetail requires one reference or named entity.";
  s = "GenUI.runPluginTool requires one tool name and JSON arguments object.";
  c = new Set(["local_business", "restaurant", "hotel", "hospital", "point_of_interest", "urgent_care"]);
  exports.hardenApiFacade = l;
  exports.createDILGenUIFacade = p;
  exports.createDILModelGenUIFacade = u;
  exports.readDILModelPluginToolPayload = y;
  exports.isDILModelEntityReference = h;
  exports.readDILModelNamedEntity = b;
  exports.freezeObjectGraph = E;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILApiFacade
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
