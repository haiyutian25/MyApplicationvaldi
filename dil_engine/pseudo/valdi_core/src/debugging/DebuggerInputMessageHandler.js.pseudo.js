// fn s  args=2 vars=2 closure=0 cpool=0 bc=58B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e, t
function {
  if (!(("number" == typeof e))) goto L_38;
  if (!(Number.isFinite(e))) goto L_38;
  return e;
  return t;
}

// fn c  args=1 vars=1 closure=0 cpool=0 bc=14B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e
function {
  if (!(("string" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn r  args=2 vars=3 closure=0 cpool=0 bc=60B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e, t
// locals: i
function {
  let i;
  i = e.getAttribute(t);
  if (!(("function" == typeof i))) goto L_3a;
  return i;
  return undefined;
}

// fn l  args=2 vars=3 closure=1 cpool=0 bc=171B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e, t
// locals: i
// closure: l
function {
  if (!(e.element)) goto L_73;
  t.push({element: e.element});
  let i;
  for (const i of e.children) {
    l(i, t);
  }
  return;
}

// fn o  args=1 vars=3 closure=1 cpool=0 bc=71B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e
// locals: t, i
// closure: l
function {
  let i;
  let t;
  t = e.getRootVirtualNode();
  if (!(!t)) goto L_36;
  return [];
  i = [];
  l(t, i);
  return i;
}

// fn a  args=1 vars=3 closure=0 cpool=2 bc=409B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e
// locals: t, e#1
function {
  let t;
  t = e.selector;
  if (!(("object" == typeof t))) goto L_3d;
  if (!((null !== t))) goto L_3d;
  return t;
  if (!(("string" == typeof t))) goto L_f9;
  let e#1;
  e#1 = t.match(new RegExp("^\\[accessibilityId=(?:\"([^\"]+)\"|'([^']+)')\\]$"));
  if (!(e#1)) goto L_97;
  if (!((e#1[1] == null))) goto L_91;
  e#1[1];
  return {accessibilityId: e#1[2]};
  if (!(t.startsWith("#"))) goto L_f0;
  goto L_f3;
  // [栈深重同步 2 -> 1]
  return {accessibilityId: t};
  if (!((undefined !== e.accessibilityId))) goto L_148;
  return {accessibilityId: e.accessibilityId};
  if (!((undefined !== e.elementId))) goto L_197;
  return {elementId: e.elementId};
  return undefined;
}

// fn d  args=2 vars=2 closure=0 cpool=0 bc=347B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e, t
function {
  if (((undefined === t.elementId))) goto L_6d;
  if (!((e.id === t.elementId))) goto L_15a;
  if (((undefined === t.accessibilityId))) goto L_e9;
  if (!((e.getAttribute("accessibilityId") === t.accessibilityId))) goto L_15a;
  if (((undefined === t.tag))) goto L_15a;
  return (e.tag === t.tag);
}

// fn u  args=1 vars=2 closure=2 cpool=0 bc=544B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e
// locals: t
// closure: r, n
function {
  let t;
  t = [];
  if (!(r(e, "onTap"))) goto L_5c;
  t.push(n.Tap);
  if (!(("textfield" !== e.tag))) goto L_b1;
  if ((("textview" !== e.tag))) goto L_145;
  t.push(n.Focus, n.Text, n.Key);
  if (!(("scroll" !== e.tag))) goto L_1ce;
  if (!((undefined === e.getAttribute("contentOffsetX")))) goto L_1ce;
  if (((undefined === e.getAttribute("contentOffsetY")))) goto L_21b;
  t.push(n.Scroll);
  return t;
}

// fn b  args=1 vars=3 closure=3 cpool=0 bc=1065B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: t
// locals: i, n
// closure: e, c, u
function {
  let n;
  let i;
  i = e.RenderedElementUtils.absolutePosition(t);
  n = c(t.getAttribute("value"));
  if (!((t.parent == null))) goto L_cf;
  t.parent;
  goto L_f0;
  if (!((c(t.getAttribute("accessibilityValue")) == null))) goto L_245;
  c(t.getAttribute("accessibilityValue"));
  if (!((false !== t.getAttribute("enabled")))) goto L_2da;
  return {elementId: t.id, parentElementId: undefined.id, tag: t.tag, accessibilityId: c(t.getAttribute("accessibilityId")), accessibilityCategory: c(t.getAttribute("accessibilityCategory")), accessibilityNavigation: c(t.getAttribute("accessibilityNavigation")), accessibilityLabel: c(t.getAttribute("accessibilityLabel")), accessibilityHint: c(t.getAttribute("accessibilityHint")), accessibilityValue: n, selected: (true === t.getAttribute("accessibilityStateSelected")), enabled: (true !== t.getAttribute("accessibilityStateDisabled")), focused: (true === t.getAttribute("focused")), frame: t.frame, absoluteFrame: {x: i.x, y: i.y, width: t.frame.width, height: t.frame.height}, actions: u(t)};
}

// fn g  args=2 vars=2 closure=0 cpool=0 bc=98B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e, t
function {
  if (!((e.type == null))) goto L_35;
  e.type;
  return {contractVersion: 1, handled: t, type: "", contextId: e.contextId};
}

// fn f  args=3 vars=7 closure=1 cpool=0 bc=447B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e, t, i
// locals: n, c, r, l
// closure: s
function {
  let l;
  let r;
  let c;
  let n;
  n = e.getAttribute("selection");
  if (!(Array.isArray(n))) goto L_70;
  goto L_72;
  // [栈深重同步 1 -> 0]
  c = i.length;
  if (!(Array.isArray(n))) goto L_ac;
  goto L_ae;
  // [栈深重同步 1 -> 0]
  r = i.length;
  l = Math.max(0, Math.min(i.length, s(t.selectionStart, c)));
  return {text: i, selectionStart: l, selectionEnd: Math.max(l, Math.min(i.length, s(t.selectionEnd, r)))};
}

// fn m  args=2 vars=4 closure=1 cpool=0 bc=87B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e, t
// locals: i, e#1
// closure: r
function {
  let i;
  i = e;
  if (!(i)) goto L_56;
  let e#1;
  e#1 = r(i, t);
  if (!(e#1)) goto L_2b;
  return {element: i, callback: e#1};
  i = i.parent;
  i.parent;
  goto L_5;
  return;
}

// fn y  args=1 vars=2 closure=0 cpool=0 bc=152B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e
// locals: t
function {
  let t;
  t = e;
  if (!(t)) goto L_97;
  if ((("textfield" === t.tag))) goto L_65;
  if (!(("textview" === t.tag))) goto L_6b;
  return t;
  t = t.parent;
  t.parent;
  goto L_5;
  return;
}

// fn I  args=1 vars=2 closure=0 cpool=0 bc=206B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e
// locals: t
function {
  let t;
  t = e;
  if (!(t)) goto L_cd;
  if ((("scroll" === t.tag))) goto L_9b;
  if (((undefined !== t.getAttribute("contentOffsetX")))) goto L_9b;
  if (!((undefined !== t.getAttribute("contentOffsetY")))) goto L_a1;
  return t;
  t = t.parent;
  t.parent;
  goto L_5;
  return;
}

// fn p  args=3 vars=7 closure=4 cpool=0 bc=597B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e, t, i
// locals: n, s, t#1, l
// closure: f, r, g, c
function {
  let l;
  let s;
  let n;
  n = f(e, t, i);
  s = r(e, "onWillChange");
  if (!(s)) goto L_8d;
  let t#1;
  t#1 = s(n);
  if (!(t#1)) goto L_8c;
  if (!(("string" == typeof t#1.text))) goto L_8c;
  n = f(e, t#1, t#1.text);
  f(e, t#1, t#1.text);
  e.setAttributes({value: n.text, selection: [n.selectionStart, n.selectionEnd]});
  l = r(e, "onChange");
  if (!(l)) goto L_144;
  l(n);
  null;
  g(t, true);
  return {elementId: e.id, accessibilityId: c(e.getAttribute("accessibilityId")), action: "onChange", actionElementId: e.id, value: n.text, selectionStart: n.selectionStart, selectionEnd: n.selectionEnd};
}

// fn h  args=2 vars=12 closure=5 cpool=0 bc=1541B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e, t
// locals: i, n, s, i#1, c, l, o, a, c#1, r
// closure: c, f, r, g, p
function {
  let s;
  let n;
  let i;
  if (!((t.key == null))) goto L_31;
  t.key;
  i = "";
  if (!((c(e.getAttribute("value")) == null))) goto L_64;
  c(e.getAttribute("value"));
  n = "";
  s = f(e, t, n);
  if ((("Enter" === i))) goto L_83;
  if (!(("Return" === i))) goto L_279;
  let i#1;
  i#1 = r(e, "onReturn");
  if (!(i#1)) goto L_1f1;
  i#1(s);
  if (!((false !== e.getAttribute("closesWhenReturnKeyPressed")))) goto L_101;
  e.setAttribute("focused", false);
  null;
  g(t, true);
  return {elementId: e.id, accessibilityId: c(e.getAttribute("accessibilityId")), action: "onReturn", actionElementId: e.id, value: n, selectionStart: s.selectionStart, selectionEnd: s.selectionEnd};
  null;
  g(t, false);
  return {elementId: e.id, message: "Element ".concat(e.id, " does not expose onReturn.")};
  if (!(("Escape" === i))) goto L_351;
  e.setAttribute("focused", false);
  null;
  g(t, true);
  return {elementId: e.id, accessibilityId: c(e.getAttribute("accessibilityId")), action: "focused", actionElementId: e.id, value: n};
  if ((("Backspace" === i))) goto L_367;
  if (!(("Delete" === i))) goto L_4a1;
  let a;
  let o;
  let l;
  let c;
  c = r(e, "onWillDelete");
  if (!(c)) goto L_390;
  c(s);
  l = s.selectionStart;
  o = s.selectionEnd;
  if (!((l === o))) goto L_427;
  if (!(("Backspace" === i))) goto L_405;
  if (!((l > 0))) goto L_405;
  l = (l - 1);
  goto L_427;
  // [栈深重同步 1 -> 0]
  if (!(("Delete" === i))) goto L_427;
  if (!((o < n.length))) goto L_427;
  o = (o + 1);
  (o + 1);
  a = (n.slice(0, l) + n.slice(o));
  null;
  t;
  return p(e, {selectionStart: l, selectionEnd: l}, a);   // tail call
  if (!((1 === i.length))) goto L_59c;
  let r;
  let c#1;
  c#1 = ((n.slice(0, s.selectionStart) + i) + n.slice(s.selectionEnd));
  r = (s.selectionStart + i.length);
  null;
  t;
  return p(e, {selectionStart: r, selectionEnd: r}, c#1);   // tail call
  null;
  g(t, false);
  return {elementId: e.id, message: "Unsupported key '".concat(i, "'.")};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=106B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e
function {
  e.Capabilities = "capabilities";
  e.Query = "query";
  e.Tap = "tap";
  e.Focus = "focus";
  e.Text = "text";
  e.Key = "key";
  e.Scroll = "scroll";
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.getRendererForContextId = e;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=114B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e, i
// locals: n, this
// closure: t
function {
  this = this;
  let n;
  if (!((e !== t))) goto L_d;
  return;
  if (!((null !== i))) goto L_1f;
  if (!(("object" == typeof i))) goto L_1f;
  goto L_20;
  // [栈深重同步 1 -> 0]
  n = {};
  return Promise.resolve(this.handle(n));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=4B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e
// closure: n
function {
  return n[e];
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e
// closure: d, l
function {
  return d(e.element, l);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e
// closure: b
function {
  return b(e.element);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: e
// closure: b
function {
  return b(e.element);   // tail call
}

// fn <atom:0>  args=1 vars=18 closure=14 cpool=4 bc=4484B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: t
// locals: i, r, l, u, f, i#1, n, r#1, l#1, e, i#2, e#1, e#2, e#3, i#3, n#1, this
// closure: n, d, b, g, o, a, m, e, s, c, y, p, h, I
function {
  this = this;
  let f;
  let u;
  let l;
  let r;
  let i;
  if (!((t.type === n.Capabilities))) goto L_105;
  null;
  g(t, true);
  return {action: n.Capabilities, supportedTypes: Object.keys(n).map(function <atom:0>), selectorForms: ["elementId", "accessibilityId", "selector: "#accessibilityId"", "selector: "[accessibilityId=\"accessibilityId\"]"", "selector: { elementId?, accessibilityId?, tag? }"]};
  if (!(!t.contextId)) goto L_140;
  null;
  g(t, false);
  return {message: "A contextId is required."};
  i = this.getRendererForContextId(t.contextId);
  if (!(!i)) goto L_1f0;
  null;
  g(t, false);
  return {message: "No Valdi renderer found for context ".concat(t.contextId, ".")};
  r = o(i);
  l = a(t);
  if (!(l)) goto L_22e;
  goto L_231;
  // [栈深重同步 1 -> 0]
  u = r;
  if (!((t.type === n.Query))) goto L_2da;
  null;
  g(t, true);
  return {action: n.Query, elements: u.map(function <atom:0>)};
  if (!(!l)) goto L_2f6;
  null;
  g(t, false);
  return {message: "An elementId, accessibilityId, or selector is required."};
  if (!(!u.length)) goto L_313;
  null;
  g(t, false);
  return {message: "No element matched the debugger input selector."};
  if (!((u.length > 1))) goto L_38c;
  null;
  g(t, false);
  return {message: "Debugger input selector matched ".concat(u.length, " elements; use a unique accessibilityId or elementId."), elements: u.map(function <atom:0>)};
  f = u[0].element;
  if (!((t.type === n.Tap))) goto L_a1d;
  let l#1;
  let r#1;
  let n;
  let i#1;
  i#1 = m(f, "onTap");
  if (!(!i#1)) goto L_4ad;
  null;
  g(t, false);
  return {elementId: f.id, message: "Element ".concat(f.id, " and its ancestors do not expose onTap.")};
  if (((false === i#1.element.getAttribute("enabled")))) goto L_551;
  if (!((true === i#1.element.getAttribute("accessibilityStateDisabled")))) goto L_64d;
  null;
  g(t, false);
  return {elementId: f.id, actionElementId: i#1.element.id, message: "Element ".concat(i#1.element.id, " is disabled.")};
  n = e.RenderedElementUtils.absolutePosition(i#1.element);
  r#1 = (s(t.x, (n.x + (i#1.element.frame.width / 2))) - n.x);
  l#1 = (s(t.y, (n.y + (i#1.element.frame.height / 2))) - n.y);
  i#1.callback({state: 2, x: r#1, y: l#1, absoluteX: (n.x + r#1), absoluteY: (n.y + l#1), pointerCount: 1, pointerLocations: [{pointerId: 0, x: r#1, y: l#1}], eventTime: (Date.now() / 1000)});
  null;
  g(t, true);
  return {elementId: f.id, accessibilityId: c(f.getAttribute("accessibilityId")), action: "onTap", actionElementId: i#1.element.id};
  if (!((t.type === n.Focus))) goto L_bff;
  let i#2;
  let e;
  e = y(f);
  if (!(!e)) goto L_b0b;
  null;
  g(t, false);
  return {elementId: f.id, message: "Element ".concat(f.id, " is not a text input.")};
  i#2 = (false !== t.focused);
  e.setAttribute("focused", i#2);
  null;
  g(t, true);
  return {elementId: e.id, accessibilityId: c(e.getAttribute("accessibilityId")), action: "focused", actionElementId: e.id};
  if (!((t.type === n.Text))) goto L_d70;
  let e#1;
  e#1 = y(f);
  if (!(e#1)) goto L_ce4;
  e#1.setAttribute("focused", true);
  if (!((t.text == null))) goto L_ce2;
  t.text;
  if (!((t.value == null))) goto L_ce2;
  t.value;
  return p(e#1, t, "");
  null;
  g(t, false);
  return {elementId: f.id, message: "Element ".concat(f.id, " is not a text input.")};
  if (!((t.type === n.Key))) goto L_e60;
  let e#2;
  e#2 = y(f);
  if (!(e#2)) goto L_dd4;
  return h(e#2, t);
  null;
  g(t, false);
  return {elementId: f.id, message: "Element ".concat(f.id, " is not a text input.")};
  if (!((t.type === n.Scroll))) goto L_10f4;
  let n#1;
  let i#3;
  let e#3;
  e#3 = I(f);
  if (!(!e#3)) goto L_f51;
  null;
  g(t, false);
  return {elementId: f.id, message: "Element ".concat(f.id, " is not in a scroll container.")};
  i#3 = (s(e#3.getAttribute("contentOffsetX"), 0) + s(t.deltaX, 0));
  n#1 = (s(e#3.getAttribute("contentOffsetY"), 0) + s(t.deltaY, 0));
  e#3.setAttributes({contentOffsetAnimated: false, contentOffsetX: i#3, contentOffsetY: n#1});
  null;
  g(t, true);
  return {elementId: f.id, accessibilityId: c(f.getAttribute("accessibilityId")), action: "contentOffset", actionElementId: e#3.id, contentOffsetX: i#3, contentOffsetY: n#1};
  null;
  g(t, false);
  if (!((t.type == null))) goto L_1176;
  t.type;
  return {elementId: f.id, message: "Unsupported debugger input type '".concat("", "'.")};
}

// fn <atom:0>  args=3 vars=26 closure=0 cpool=20 bc=249B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// args: require, module, exports
// locals: e, t, i, n, s, c, r, l, o, a, d, u, b, g, f, m, y, I, p, h, DebuggerInputMessageHandler, <class_fields_init>, DebuggerInputMessageHandler#1
function {
  s = function s;
  c = function c;
  r = function r;
  l = function l;
  o = function o;
  a = function a;
  d = function d;
  u = function u;
  b = function b;
  g = function g;
  f = function f;
  m = function m;
  y = function y;
  I = function I;
  p = function p;
  h = function h;
  let DebuggerInputMessageHandler#1;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DebuggerInputType = undefined;
  exports.DebuggerInputMessageHandler = undefined;
  e = require("../utils/RenderedElementUtils");
  t = "ValdiDebuggerInput";
  i = 1;
  if ((n)) goto L_be;
  n = {};
  exports.DebuggerInputType = {};
  !function <atom:0>({});
  let DebuggerInputMessageHandler;
  let <class_fields_init>;
  class DebuggerInputMessageHandler extends undefined { ... }
  <proto:DebuggerInputMessageHandler>.messageReceived = function <atom:0>;
  <proto:DebuggerInputMessageHandler>.handle = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DebuggerInputMessageHandler>;
  DebuggerInputMessageHandler = function <atom:0>;
  // close_loc <class_fields_init>
  DebuggerInputMessageHandler#1 = function <atom:0>;
  exports.DebuggerInputMessageHandler = DebuggerInputMessageHandler#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/DebuggerInputMessageHandler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
