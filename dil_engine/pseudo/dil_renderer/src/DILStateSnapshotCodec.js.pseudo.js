// fn r  args=2 vars=2 closure=1 cpool=0 bc=62B file=dil_renderer/src/DILStateSnapshotCodec
// args: t, e
// closure: s
function {
  try { // catch -> L_34
  return s(JSON.parse(t), e);
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_3d
  return null;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn n  args=4 vars=5 closure=2 cpool=0 bc=62B file=dil_renderer/src/DILStateSnapshotCodec
// args: t, e, r, n
// locals: o
// closure: u, s
function {
  let o;
  if (!((t == null))) goto L_d;
  t;
  goto L_2e;
  o = u(undefined.state);
  o[e] = r;
  return s(o, n);   // tail call
}

// fn o  args=3 vars=4 closure=2 cpool=0 bc=62B file=dil_renderer/src/DILStateSnapshotCodec
// args: t, e, r
// locals: n
// closure: u, s
function {
  let n;
  if (!((t == null))) goto L_d;
  t;
  goto L_2e;
  n = u(undefined.state);
  delete e;
  return s(n, r);   // tail call
}

// fn s  args=2 vars=4 closure=3 cpool=0 bc=270B file=dil_renderer/src/DILStateSnapshotCodec
// args: e, r
// locals: n, o
// closure: c, i, t
function {
  try { // catch -> L_104
  let o;
  let n;
  if ((!c(e))) goto L_30;
  if (!(!i(e, 0, new WeakSet(), {entries: 0, maxEntries: r}))) goto L_35;
  return null;
  n = JSON.stringify(e);
  if (!((new TextEncoder().encode(n).byteLength > t))) goto L_ba;
  return null;
  o = JSON.parse(n);
  if (!(c(o))) goto L_101;
  goto L_102;
  // [栈深重同步 1 -> 0]
  return null;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_10d
  return null;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn u  args=1 vars=3 closure=0 cpool=0 bc=123B file=dil_renderer/src/DILStateSnapshotCodec
// args: t
// locals: e, r
function {
  let e;
  e = Object.create(null);
  if (!((undefined !== t))) goto L_77;
  let r;
  for (const r of Object.keys(t)) {
    e[r] = t[r];
  }
  return e;
}

// fn i  args=4 vars=6 closure=3 cpool=0 bc=701B file=dil_renderer/src/DILStateSnapshotCodec
// args: t, e, r, n
// locals: o, o#1
// closure: f, a, c
function {
  if (!((e > 8))) goto L_9;
  return false;
  if (((null === t))) goto L_18;
  if (!(("boolean" == typeof t))) goto L_1d;
  return true;
  if (!(("string" == typeof t))) goto L_2c;
  return !f(t);
  if (!(("number" == typeof t))) goto L_60;
  return Number.isFinite(t);   // tail call
  if ((("object" != typeof t))) goto L_92;
  if (!(r.has(t))) goto L_97;
  return false;
  r.add(t);
  try { // catch -> L_28f
  if (!(Array.isArray(t))) goto L_20e;
  if (((Object.getPrototypeOf(t) !== Array.prototype))) goto L_1c6;
  if (((t.length > (n.maxEntries - n.entries)))) goto L_1c6;
  if (!((Reflect.ownKeys(t).length !== (t.length + 1)))) goto L_1d1;
  // gosub (finally 块) 661
  return false;
  let o;
  o = 0;
  if (!((o < t.length))) goto L_205;
  if (!(!a(t, String(o), e, r, n))) goto L_1fb;
  // gosub (finally 块) 661
  return false;
  o = <o_new>;
  (o++);
  goto L_1d6;
  // gosub (finally 块) 661
  return true;
  if (!(!c(t))) goto L_21d;
  // gosub (finally 块) 661
  return false;
  let o#1;
  for (const o#1 of Reflect.ownKeys(t)) {
    if ((("string" != typeof o#1))) goto L_271;
    if ((f(o#1))) goto L_271;
    if (!(!a(t, o#1, e, r, n))) continue;
    // gosub (finally 块) 661
    return false;
    // [栈深重同步 0 -> 3]
  }
  // gosub (finally 块) 661
  return true;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 661
  throw <?>;
  r.delete(t);
  // ret (finally 块) 
}

// fn a  args=5 vars=6 closure=1 cpool=0 bc=314B file=dil_renderer/src/DILStateSnapshotCodec
// args: t, e, r, n, o
// locals: s
// closure: i
function {
  let s;
  s = Object.getOwnPropertyDescriptor(t, e);
  if (((undefined === s))) goto L_87;
  if ((!s.enumerable)) goto L_87;
  if (!(!(undefined === s.value))) goto L_139;
  o.entries = (o.entries ++);
  if (!((o.entries <= o.maxEntries))) goto L_139;
  return i(s.value, (r + 1), n, o);
}

// fn c  args=1 vars=2 closure=0 cpool=0 bc=164B file=dil_renderer/src/DILStateSnapshotCodec
// args: t
// locals: e
function {
  let e;
  if (((null === t))) goto L_40;
  if ((("object" != typeof t))) goto L_40;
  if (!(Array.isArray(t))) goto L_45;
  return false;
  e = Object.getPrototypeOf(t);
  if (((e === Object.prototype))) goto L_a3;
  return (null === e);
}

// fn f  args=1 vars=1 closure=0 cpool=0 bc=28B file=dil_renderer/src/DILStateSnapshotCodec
// args: t
function {
  try { // catch -> L_11
  encodeURIComponent(t);
  return false;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_1b
  return true;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=9 bc=219B file=dil_renderer/src/DILStateSnapshotCodec
// args: require, module, exports
// locals: t, e, r, n, o, s, u, i, a, c, f
function {
  r = function r;
  n = function n;
  o = function o;
  s = function s;
  u = function u;
  i = function i;
  a = function a;
  c = function c;
  f = function f;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_ROOT_STATE_MAX_ENTRIES = undefined;
  exports.DIL_WIDGET_STATE_MAX_ENTRIES = undefined;
  exports.parseDILStateSnapshot = undefined;
  exports.setDILStateSnapshotValue = undefined;
  exports.removeDILStateSnapshotValue = undefined;
  t = 8192;
  e = 8;
  exports.DIL_ROOT_STATE_MAX_ENTRIES = 128;
  exports.DIL_WIDGET_STATE_MAX_ENTRIES = 512;
  exports.parseDILStateSnapshot = r;
  exports.setDILStateSnapshotValue = n;
  exports.removeDILStateSnapshotValue = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILStateSnapshotCodec
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
