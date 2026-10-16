// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=45B file=dil_core/src/DILCopyContentResolver
// closure: o, r
function {
  if ((o)) goto L_2c;
  return r.isCancelled();
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=54B file=dil_core/src/DILCopyContentResolver
// args: e
// closure: i, o, r
function {
  if ((i())) goto L_35;
  o = true;
  true;
  r.complete(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=6B file=dil_core/src/DILCopyContentResolver
// closure: s
function {
  s("");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=161B file=dil_core/src/DILCopyContentResolver
// args: e
// closure: r, c
function {
  if (!((e instanceof Error))) goto L_55;
  goto L_5c;
  // [栈深重同步 5 -> 4]
  if (!((e instanceof Error))) goto L_8e;
  goto L_93;
  // [栈深重同步 5 -> 4]
  r.reportWarning("Unable to serialize rendered DIL content for copy.", {error_message: String(e), error_name: "Error"});
  c();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=7 cpool=0 bc=97B file=dil_core/src/DILCopyContentResolver
// args: e
// locals: t, t#1
// closure: i, n, l, s, o, a, c
function {
  if (!(!i())) goto L_60;
  if (!((undefined !== e))) goto L_5b;
  try { // catch -> L_4c
  let t;
  t = n(e, l);
  s(o.serialize(t));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t#1 = <?>;
  try { // catch -> L_5a
  a(t#1);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  c();
  return;
}

// fn t  args=2 vars=11 closure=2 cpool=5 bc=470B file=dil_core/src/DILCopyContentResolver
// args: t, r
// locals: o, i, s, c, a, o#1, d, l, d#1
// closure: n, e
function {
  let a;
  let c;
  let s;
  let i;
  let o;
  o = false;
  i = function <atom:0>;
  s = function <atom:0>;
  c = function <atom:0>;
  a = function <atom:0>;
  try { // catch -> L_1c5
  let l;
  let d;
  let o#1;
  o#1 = r.captureSnapshot();
  if (!((undefined === o#1))) goto L_77;
  c();
  return undefined;
  if (!(!e.isVersionAtLeast(118))) goto L_d1;
  s(o#1.serialize(undefined));
  return undefined;
  d = t.resolveNativeWidgets;
  if (!((undefined !== d))) goto L_14b;
  if (!(r.hasNativeWidgetHost)) goto L_14b;
  if (!(!(o#1.nativeContentReferenceIndices.length > 0))) goto L_17e;
  s(o#1.serialize(undefined));
  return undefined;
  l = new Set(o#1.nativeContentReferenceIndices);
  // append([], 0, l)
  l;
  d([], function <atom:0>);
  // close_loc l
  // close_loc o#1
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  d#1 = <?>;
  try { // catch -> L_1d5
  a(d#1);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn n  args=2 vars=5 closure=0 cpool=0 bc=258B file=dil_core/src/DILCopyContentResolver
// args: e, t
// locals: n, r, e#1
function {
  let n;
  n = new Map();
  let r;
  for (const r of e) {
    let e#1;
    e#1 = r.contentReferenceIndex;
    if ((!t.has(e#1))) goto L_95;
    if (!(n.has(e#1))) goto L_a6;
    throw new Error("Unexpected or duplicate native copy content reference index.");
    n.set(e#1, r.markdown);
  }
  return n;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=96B file=dil_core/src/DILCopyContentResolver
// args: require, module, exports
// locals: e, t, n
function {
  t = function t;
  n = function n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveDILCopyContent = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  exports.resolveDILCopyContent = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILCopyContentResolver
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
