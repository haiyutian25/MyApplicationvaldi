// fn e  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_compiler/src/DILContainerGutterRenderState
// args: e, r
// closure: t
function {
  return e.withProperty(t, r);   // tail call
}

// fn r  args=1 vars=2 closure=2 cpool=0 bc=56B file=dil_compiler/src/DILContainerGutterRenderState
// args: e
// locals: r
// closure: t, n
function {
  let r;
  r = e.getProperty(t);
  if (!(n(r))) goto L_37;
  return r;
  return;
}

// fn n  args=1 vars=2 closure=1 cpool=0 bc=190B file=dil_compiler/src/DILContainerGutterRenderState
// args: t
// locals: e
// closure: o
function {
  let e;
  if (((null == t))) goto L_12;
  if (!(("object" != typeof t))) goto L_17;
  return false;
  e = t;
  if (!(o(e.top))) goto L_bd;
  if (!(o(e.right))) goto L_bd;
  if (!(o(e.bottom))) goto L_bd;
  return o(e.left);
}

// fn o  args=1 vars=1 closure=0 cpool=0 bc=67B file=dil_compiler/src/DILContainerGutterRenderState
// args: t
function {
  if ((("string" == typeof t))) goto L_42;
  if (!(("number" == typeof t))) goto L_42;
  return Number.isFinite(t);
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=4 bc=129B file=dil_compiler/src/DILContainerGutterRenderState
// args: require, module, exports
// locals: t, e, r, n, o
function {
  e = function e;
  r = function r;
  n = function n;
  o = function o;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderStateWithDILContainerGutter = undefined;
  exports.getDILContainerGutterContext = undefined;
  t = Symbol("DILContainerGutter");
  exports.renderStateWithDILContainerGutter = e;
  exports.getDILContainerGutterContext = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILContainerGutterRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
