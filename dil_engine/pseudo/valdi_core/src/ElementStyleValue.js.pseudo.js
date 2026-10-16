// fn n  args=1 vars=4 closure=3 cpool=0 bc=307B file=valdi_core/src/ElementStyleValue
// args: n
// locals: o, i, l
// closure: r, t, e
function {
  let l;
  let i;
  let o;
  if ((("object" != typeof n))) goto L_18;
  if (!((null === n))) goto L_1c;
  return n;
  o = r.get(n);
  if (!((undefined !== o))) goto L_50;
  return o;
  i = t.getValdiRuntime();
  if ((!e.isVersionAtLeast(260))) goto L_c9;
  if (!((undefined === i.createElementStyleValue))) goto L_da;
  throw new Error("This host does not support conditional Element styles");
  l = i.createElementStyleValue(n);
  r.set(n, l);
  return l;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=117B file=valdi_core/src/ElementStyleValue
// args: require, module, exports
// locals: e, t, r, n
function {
  n = function n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.prepareElementStyleValue = undefined;
  e = require("./CompilerIntrinsics");
  t = require("./ValdiRuntimeProvider");
  r = new WeakMap();
  exports.prepareElementStyleValue = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/ElementStyleValue
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
