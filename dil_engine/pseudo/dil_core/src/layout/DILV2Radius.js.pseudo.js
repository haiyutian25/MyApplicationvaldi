// fn o  args=1 vars=1 closure=1 cpool=0 bc=187B file=dil_core/src/layout/DILV2Radius
// args: t
// closure: e
function {
  if (((null === t))) goto L_f;
  if (!(("object" != typeof t))) goto L_15;
  return e(t);
  return {topLeft: e(t.topLeft), topRight: e(t.topRight), bottomRight: e(t.bottomRight), bottomLeft: e(t.bottomLeft)};
}

// fn e  args=1 vars=1 closure=1 cpool=0 bc=24B file=dil_core/src/layout/DILV2Radius
// args: o
// closure: t
function {
  if (!(("string" == typeof o))) goto L_16;
  if (!((t[o] == null))) goto L_17;
  t[o];
  return o;
  return o;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=118B file=dil_core/src/layout/DILV2Radius
// args: require, module, exports
// locals: t, o, e
function {
  o = function o;
  e = function e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.normalizeDILV2Radius = undefined;
  t = {lg: 12, xl: 16, 2xl: 20, 3xl: 24};
  exports.normalizeDILV2Radius = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/layout/DILV2Radius
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
