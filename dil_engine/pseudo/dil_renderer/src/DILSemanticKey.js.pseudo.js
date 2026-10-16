// fn t  args=1 vars=4 closure=1 cpool=0 bc=76B file=dil_renderer/src/DILSemanticKey
// args: e
// locals: t, o, r
// closure: n
function {
  let t;
  t = -1;
  let o;
  o = 0;
  if (!((o < e.length))) goto L_48;
  let r;
  r = n(e[o]);
  if (!((0 !== r))) goto L_3e;
  if (((r > 1))) goto L_32;
  if (!((-1 !== t))) goto L_36;
  return -1;
  t = o;
  o;
  o = <o_new>;
  (o++);
  goto L_a;
  return t;
}

// fn n  args=1 vars=4 closure=2 cpool=0 bc=289B file=dil_renderer/src/DILSemanticKey
// args: t
// locals: o, r, e
// closure: e, n
function {
  let r;
  let o;
  if (((null == t))) goto L_1c;
  if ((("boolean" == typeof t))) goto L_1c;
  if (!(("" === t))) goto L_20;
  return 0;
  if (!(Array.isArray(t))) goto L_50;
  goto L_e6;
  // [栈深重同步 1 -> 0]
  if (!(e.isDILRuntimeElement(t))) goto L_e5;
  if (!((t.type === e.DIL_FRAGMENT))) goto L_e5;
  goto L_e6;
  // [栈深重同步 1 -> 0]
  o = undefined;
  if (!((undefined === o))) goto L_f0;
  return 1;
  r = 0;
  let e;
  for (const e of o) {
    r = (r + n(e));
    (r + n(e));
    if (!((r > 1))) continue;
    return 2;
    // [栈深重同步 0 -> 3]
  }
  return r;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=96B file=dil_renderer/src/DILSemanticKey
// args: require, module, exports
// locals: e, t, n
function {
  t = function t;
  n = function n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getSinglePotentialHostRootIndex = undefined;
  e = require("./DILElement");
  exports.getSinglePotentialHostRootIndex = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILSemanticKey
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
