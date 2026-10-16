// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=valdi_core/src/BuildType
// args: e
function {
  e.Dev = "dev";
  e.Gold = "gold";
  e.Alpha = "alpha";
  e.Prod = "prod";
  return;
}

// fn r  args=0 vars=1 closure=2 cpool=0 bc=86B file=valdi_core/src/BuildType
// locals: e
// closure: o, t
function {
  let e;
  e = o.buildType;
  if (!((undefined === e))) goto L_52;
  return t.Dev;
  return e;
}

// fn i  args=0 vars=1 closure=2 cpool=0 bc=87B file=valdi_core/src/BuildType
// locals: e
// closure: r, t
function {
  let e;
  e = r();
  if (((e == t.Prod))) goto L_56;
  return (e == t.Alpha);
}

// fn d  args=0 vars=0 closure=1 cpool=0 bc=4B file=valdi_core/src/BuildType
// closure: i
function {
  return !i();
}

// fn n  args=0 vars=1 closure=2 cpool=0 bc=129B file=valdi_core/src/BuildType
// locals: e
// closure: r, t
function {
  let e;
  e = r();
  if (((e == t.Dev))) goto L_80;
  if (((e == t.Gold))) goto L_80;
  return (e == t.Alpha);
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=5 bc=249B file=valdi_core/src/BuildType
// args: require, module, exports
// locals: e, t, o, r, i, d, n
function {
  r = function r;
  i = function i;
  d = function d;
  n = function n;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BuildType = undefined;
  exports.getBuildType = undefined;
  exports.isProdBuild = undefined;
  exports.isDevBuild = undefined;
  exports.isInternalBuild = undefined;
  e = require("./ValdiRuntimeProvider");
  if ((t)) goto L_a0;
  t = {};
  exports.BuildType = {};
  !function <atom:0>({});
  o = e.getValdiRuntime();
  exports.getBuildType = r;
  exports.isProdBuild = i;
  exports.isDevBuild = d;
  exports.isInternalBuild = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/BuildType
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
