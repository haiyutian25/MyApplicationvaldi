// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=valdi_core/src/debugging/DebugSettings
// args: e
function {
  e.Toggle = "toggle";
  e.Select = "select";
  e.Text = "text";
  e.Number = "number";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/debugging/DebugSettings
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/debugging/DebugSettings
function {
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=230B file=valdi_core/src/debugging/DebugSettings
// args: t
// locals: i, t#1
// closure: e
function {
  let i;
  i = t[(t.length - 1)];
  if (!((undefined !== i))) goto L_e5;
  let t#1;
  if (!((e.get(i.label) == null))) goto L_6a;
  e.get(i.label);
  t#1 = [];
  t#1.push(i);
  e.set(i.label, t#1);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=valdi_core/src/debugging/DebugSettings
// args: e
// closure: i
function {
  return (e !== i);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=571B file=valdi_core/src/debugging/DebugSettings
// args: e
// closure: n, r
function {
  if ((n.has(e.id))) goto L_23a;
  n.add(e.id);
  if (!((undefined === e.description))) goto L_10f;
  goto L_137;
  // [栈深重同步 4 -> 3]
  null;
  {description: e.description};
  if (!((undefined === e.options))) goto L_1da;
  goto L_208;
  // [栈深重同步 4 -> 3]
  // append([], 0, e.options)
  e.options;
  null;
  {options: []};
  r.push({defaultValue: e.defaultValue, id: e.id, kind: e.kind, label: e.label, value: e.get()});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=73B file=valdi_core/src/debugging/DebugSettings
// args: e
// closure: n, r
function {
  e.settings.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=2 bc=256B file=valdi_core/src/debugging/DebugSettings
// args: e
// locals: i, n, r
// closure: t
function {
  let r;
  let n;
  let i;
  i = e[(e.length - 1)];
  if (!((undefined === i))) goto L_18;
  return;
  n = new Set();
  r = [];
  // append([i], 1, e.filter(function <atom:0>))
  e.filter(function <atom:0>);
  [i].forEach(function <atom:0>);
  t.push({id: i.id, label: i.label, settings: r});
  return;
}

// fn g  args=0 vars=2 closure=2 cpool=2 bc=128B file=valdi_core/src/debugging/DebugSettings
// locals: e, t
// closure: o, u
function {
  let t;
  let e;
  e = new Map();
  o.forEach(function <atom:0>);
  t = [];
  e.forEach(function <atom:0>);
  return {contractVersion: 1, groups: t, revision: u};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=valdi_core/src/debugging/DebugSettings
// args: e
// closure: t
function {
  return (e.id === t);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=valdi_core/src/debugging/DebugSettings
// args: e
// closure: t
function {
  return (e.id === t);
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=200B file=valdi_core/src/debugging/DebugSettings
// args: e
// locals: i
// closure: t, s, n
function {
  let i;
  if (!((undefined !== s))) goto L_b;
  return;
  i = e[(e.length - 1)];
  if (!((undefined !== i))) goto L_c7;
  if (!((i !== n))) goto L_c7;
  if (!((i.label === n.label))) goto L_c7;
  s = i.settings.find(function <atom:0>);
  i.settings.find(function <atom:0>);
  return;
}

// fn l  args=2 vars=6 closure=1 cpool=2 bc=330B file=valdi_core/src/debugging/DebugSettings
// args: e, t
// locals: i, n, r, s
// closure: o
function {
  let s;
  let r;
  let n;
  let i;
  i = o.get(e);
  if (!((i == null))) goto L_40;
  i;
  goto L_47;
  n = undefined[(i.length - 1)];
  if (!((undefined === n))) goto L_83;
  throw new Error("Unknown debug settings group: ".concat(e));
  r = n.settings.find(function <atom:0>);
  if (!((undefined !== r))) goto L_d9;
  return r;
  s = undefined;
  o.forEach(function <atom:0>);
  if (!((undefined !== s))) goto L_110;
  return s;
  throw new Error("Unknown debug setting: ".concat(e, ".", t));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=valdi_core/src/debugging/DebugSettings
// args: e
// closure: t
function {
  return (e.value === t);
}

// fn a  args=2 vars=2 closure=1 cpool=1 bc=964B file=valdi_core/src/debugging/DebugSettings
// args: e, t
// closure: r
function {
  if (!((e.kind === r.Toggle))) goto L_ab;
  if (!(("boolean" != typeof t))) goto L_ab;
  throw new TypeError("Debug setting ".concat(e.id, " requires a boolean value"));
  if (!((e.kind === r.Text))) goto L_156;
  if (!(("string" != typeof t))) goto L_156;
  throw new TypeError("Debug setting ".concat(e.id, " requires a string value"));
  if (!((e.kind === r.Number))) goto L_233;
  if ((("number" != typeof t))) goto L_1d7;
  if (!(!Number.isFinite(t))) goto L_233;
  throw new TypeError("Debug setting ".concat(e.id, " requires a finite number"));
  if (!((e.kind === r.Select))) goto L_34a;
  if (((undefined === e.options))) goto L_2ee;
  if (!(!e.options.some(function <atom:0>))) goto L_34a;
  throw new TypeError("Debug setting ".concat(e.id, " requires one of its declared options"));
  if (!(("boolean" != typeof t))) goto L_3c2;
  if (!(("number" != typeof t))) goto L_3c2;
  if (!(("string" != typeof t))) goto L_3c2;
  throw new TypeError("Debug setting ".concat(e.id, " requires a primitive value"));
  return t;
}

// fn c  args=3 vars=4 closure=4 cpool=0 bc=66B file=valdi_core/src/debugging/DebugSettings
// args: e, t, i
// locals: n
// closure: l, a, u, g
function {
  let n;
  n = l(e, t);
  n.set(a(n, i));
  u = <u_new>;
  (u++);
  return g();   // tail call
}

// fn f  args=1 vars=3 closure=3 cpool=0 bc=533B file=valdi_core/src/debugging/DebugSettings
// args: e
// locals: t, t#1
// closure: g, c, l
function {
  let t;
  if (!((e.action == null))) goto L_2f;
  e.action;
  t = "list";
  if (!(("list" === t))) goto L_3f;
  return g();   // tail call
  if ((("string" != typeof e.groupId))) goto L_95;
  if (!(("string" != typeof e.settingId))) goto L_a6;
  throw new Error("Debug setting changes require groupId and settingId");
  if (!(("set" === t))) goto L_11b;
  return c(e.groupId, e.settingId, e.value);   // tail call
  if (!(("reset" === t))) goto L_1df;
  let t#1;
  t#1 = l(e.groupId, e.settingId);
  return c(e.groupId, e.settingId, t#1.defaultValue);   // tail call
  throw new Error("Unsupported debug settings action: ".concat(t));
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=135B file=valdi_core/src/debugging/DebugSettings
// args: e, t
// locals: n, r
// closure: i, f
function {
  let n;
  if (!((e !== i))) goto L_b;
  return;
  if (!(("object" == typeof t))) goto L_1d;
  if (!((null !== t))) goto L_1d;
  goto L_1e;
  // [栈深重同步 1 -> 0]
  n = {};
  try { // catch -> L_54
  return Promise.resolve(f(n));
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_86
  return Promise.reject(r);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=27B file=valdi_core/src/debugging/DebugSettings
// args: e, t
// closure: f
function {
  return f({action: "reset", groupId: e, settingId: t});   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=33B file=valdi_core/src/debugging/DebugSettings
// args: e, t, i
// closure: f
function {
  return f({action: "set", groupId: e, settingId: t, value: i});   // tail call
}

// fn p  args=0 vars=1 closure=5 cpool=3 bc=153B file=valdi_core/src/debugging/DebugSettings
// locals: t
// closure: i, f, s, e, g
function {
  let t;
  if (!((undefined !== s))) goto L_b;
  return;
  t = {messageReceived: function <atom:0>};
  e.jsx.addCustomMessageHandler(t);
  s = t;
  t;
  globalThis.__VALDI_DEBUG_SETTINGS__ = {getSnapshot: g, resetValue: function <atom:0>, setValue: function <atom:0>};
  return;
}

// fn b  args=0 vars=0 closure=3 cpool=0 bc=145B file=valdi_core/src/debugging/DebugSettings
// closure: o, s, e
function {
  if (!((0 === o.size))) goto L_90;
  if (!((undefined !== s))) goto L_90;
  e.jsx.removeCustomMessageHandler(s);
  s = undefined;
  undefined;
  // [栈深重同步 2 -> 1]
  globalThis;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=318B file=valdi_core/src/debugging/DebugSettings
// args: t
// closure: i, e, a
function {
  if (((0 === t.id.length))) goto L_72;
  if (!(i.has(t.id))) goto L_ce;
  throw new Error("Debug settings group ".concat(e.id, " contains an invalid or duplicate setting id"));
  i.add(t.id);
  a(t, t.defaultValue);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=0 bc=319B file=valdi_core/src/debugging/DebugSettings
// locals: t, i
// closure: r, o, e, u, b
function {
  let i;
  let t;
  if (!(r)) goto L_c;
  return;
  r = true;
  true;
  t = o.get(e.id);
  if (!((t == null))) goto L_68;
  t;
  goto L_8d;
  i = undefined.indexOf(e);
  if (!((undefined !== t))) goto L_139;
  if (!((undefined !== i))) goto L_139;
  if (!((i >= 0))) goto L_139;
  t.splice(i, 1);
  if (!((0 === t.length))) goto L_131;
  o.delete(e.id);
  u = <u_new>;
  (u++);
  b();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=15B file=valdi_core/src/debugging/DebugSettings
// closure: r, u
function {
  if ((r)) goto L_e;
  u = <u_new>;
  (u++);
  return;
}

// fn h  args=1 vars=4 closure=7 cpool=3 bc=498B file=valdi_core/src/debugging/DebugSettings
// args: e
// locals: i, n, r
// closure: a, o, u, b, t, d, p
function {
  let r;
  let n;
  let i;
  if (!(!t.getValdiRuntime().isDebugEnabled)) goto L_56;
  return d;
  if (((0 === e.id.length))) goto L_a4;
  if (!((0 === e.label.length))) goto L_b5;
  throw new Error("Debug settings groups require a non-empty id and label");
  i = new Set();
  e.settings.forEach(function <atom:0>);
  p();
  if (!((o.get(e.id) == null))) goto L_15e;
  o.get(e.id);
  n = [];
  n.push(e);
  o.set(e.id, n);
  u = <u_new>;
  (u++);
  r = false;
  return {dispose: function <atom:0>, notifyChange: function <atom:0>};
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=11 bc=232B file=valdi_core/src/debugging/DebugSettings
// args: require, module, exports
// locals: e, t, i, n, r, o, s, u, d, g, l, a, c, f, p, b, h
function {
  g = function g;
  l = function l;
  a = function a;
  c = function c;
  f = function f;
  p = function p;
  b = function b;
  h = function h;
  let d;
  let u;
  let s;
  let o;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DebugSettingKind = undefined;
  exports.registerDebugSettingsGroup = undefined;
  e = require("../JSXBootstrap");
  t = require("../ValdiRuntimeProvider");
  i = "ValdiDebuggerSettings";
  n = 1;
  if ((r)) goto L_b4;
  r = {};
  exports.DebugSettingKind = {};
  !function <atom:0>({});
  o = new Map();
  s = undefined;
  u = 0;
  d = {dispose: function <atom:0>, notifyChange: function <atom:0>};
  exports.registerDebugSettingsGroup = h;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/DebugSettings
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
