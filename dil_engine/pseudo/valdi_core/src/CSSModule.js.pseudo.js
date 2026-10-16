// fn <atom:0>  args=2 vars=4 closure=3 cpool=0 bc=142B file=valdi_core/src/CSSModule
// args: e, u
// locals: d, i
// closure: t, r, o
function {
  let d;
  d = e[u];
  if (!((undefined === d))) goto L_8a;
  let i;
  i = t[u];
  if (!(i)) goto L_46;
  d = r.getRule(i);
  r.getRule(i);
  if (!((undefined === d))) goto L_59;
  d = null;
  null;
  e[u] = d;
  o.setObjectId(d);
  return d;
}

// fn d  args=2 vars=3 closure=2 cpool=1 bc=27B file=valdi_core/src/CSSModule
// args: e, t
// locals: r
// closure: o, i
function {
  let r;
  r = i(e);
  return new Proxy({}, {get: function <atom:0>});
}

// fn i  args=1 vars=2 closure=3 cpool=0 bc=92B file=valdi_core/src/CSSModule
// args: e
// locals: t
// closure: r, u, o
function {
  let t;
  t = r.getCSSModule(u, e);
  o.setObjectId(t);
  return t;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=261B file=valdi_core/src/CSSModule
// args: require, module, exports
// locals: e, t, o, r, u, d, i
function {
  d = function d;
  i = function i;
  let u;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.makeModule = undefined;
  exports.getNativeModule = undefined;
  e = require("./ValdiRuntimeProvider");
  t = require("./ModuleLoaderGlobal");
  o = require("./utils/IdentifyableObject");
  r = e.getValdiRuntime();
  u = t.getModuleLoader(module).package;
  exports.makeModule = d;
  exports.getNativeModule = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/CSSModule
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
