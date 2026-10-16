// fn r  args=2 vars=5 closure=0 cpool=0 bc=114B file=valdi_core/src/utils/PropertyList
// args: r, e
// locals: t, o, t#1
function {
  if (!(Array.isArray(r))) goto L_59;
  let t;
  t = r.length;
  let o;
  o = 0;
  if (!(((o + 1) < t))) goto L_71;
  o = <o_new>;
  o = <o_new>;
  e(r[(o++)], r[(o++)]);
  goto L_37;
  let t#1;
  for (const t#1 of r) {
    e(t#1, r[t#1]);
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  return;
}

// fn e  args=2 vars=5 closure=0 cpool=0 bc=178B file=valdi_core/src/utils/PropertyList
// args: r, e
// locals: t, o, t#1
function {
  if (!(Array.isArray(r))) goto L_a3;
  let o;
  let t;
  t = r.indexOf(e);
  if (((t < 0))) goto L_6a;
  if (!(((t + 1) == r.length))) goto L_6d;
  return;
  o = r[(t + 1)];
  r.splice(t, 2);
  return o;
  let t#1;
  t#1 = r[e];
  delete e;
  return t#1;
}

// fn t  args=2 vars=4 closure=0 cpool=0 bc=97B file=valdi_core/src/utils/PropertyList
// args: r, e
// locals: t, o
function {
  if (!(Array.isArray(r))) goto L_5d;
  let t;
  t = r.length;
  let o;
  o = 0;
  if (!(((o + 1) < t))) goto L_5a;
  if (!((r[o] === e))) goto L_4e;
  return true;
  o = (o + 2);
  (o + 2);
  goto L_37;
  return false;
  return (e in r);
}

// fn o  args=1 vars=6 closure=0 cpool=0 bc=118B file=valdi_core/src/utils/PropertyList
// args: r
// locals: e, t, o, t#1, n
function {
  let t;
  let e;
  if (!(!Array.isArray(r))) goto L_35;
  return r;
  e = {};
  t = r.length;
  let o;
  o = 0;
  if (!(((o + 1) < t))) goto L_72;
  let n;
  let t#1;
  o = <o_new>;
  t#1 = r[(o++)];
  o = <o_new>;
  n = r[(o++)];
  e[t#1] = n;
  goto L_3f;
  return e;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=157B file=valdi_core/src/utils/PropertyList
// args: require, module, exports
// locals: r, e, t, o
function {
  r = function r;
  e = function e;
  t = function t;
  o = function o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.enumeratePropertyList = undefined;
  exports.removeProperty = undefined;
  exports.hasProperty = undefined;
  exports.propertyListToObject = undefined;
  exports.enumeratePropertyList = r;
  exports.removeProperty = e;
  exports.hasProperty = t;
  exports.propertyListToObject = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/PropertyList
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
