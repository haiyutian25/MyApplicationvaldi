// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=19B file=valdi_core/src/Init
// args: r
// closure: o, e
function {
  r = ...0;
  // append([e], 1, r)
  r;
  return o.apply(undefined, [e]);
}

// fn e  args=2 vars=2 closure=0 cpool=1 bc=7B file=valdi_core/src/Init
// args: o, e
function {
  if (!(o)) goto L_6;
  return function <atom:0>;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=71B file=valdi_core/src/Init
// args: r
// closure: o, e
function {
  if (!(("tslib" === r))) goto L_13;
  return o(e, "valdi_core/src/tslib");   // tail call
  throw new Error("Invalid root module ".concat(r));
}

// fn o  args=2 vars=5 closure=0 cpool=1 bc=62B file=valdi_core/src/Init
// args: e, r
// locals: t, n, o
function {
  o = <special_object 2>;
  t = {};
  n = {};
  {}.exports = t;
  e(r, function <atom:0>, n, t);
  return n.exports;
}

// fn u  args=1 vars=1 closure=3 cpool=0 bc=166B file=valdi_core/src/Init
// args: o
// closure: t, e, n
function {
  return t.create(o, e(runtime.loadJsModule, o), e(runtime.getSourceMap, o), e(runtime.loadModule, o), n);   // tail call
}

// fn <atom:0>  args=0 vars=7 closure=1 cpool=3 bc=420B file=valdi_core/src/Init
// locals: o, e, r, t, n, u, d
// closure: module
function {
  e = function e;
  u = function u;
  let d;
  let n;
  let t;
  let r;
  let o;
  o = globalThis;
  if (!(module)) goto L_44;
  if (!(module.loader)) goto L_44;
  return;
  if ((module.package)) goto L_90;
  r = runtime.package;
  t = function o(e(runtime.loadJsModule, r), "valdi_core/src/ModuleLoader");
  n = ("commonjs" === runtime.moduleLoaderType);
  d = u(r);
  o.moduleLoader = d;
  o.Long = d.load("valdi_core/src/Long", true);
  d.load("valdi_core/src/PostInit", true).postInit();
  module.moduleLoaderFactory = u;
  return;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=1 bc=19B file=valdi_core/src/Init
// args: require, module, exports
function {
  if (!(module)) goto L_e;
  module.sourceMapLineOffset = 1;
  !function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/Init
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
