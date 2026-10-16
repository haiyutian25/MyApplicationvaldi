// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=valdi_core/src/AssetCatalog
// args: t
// closure: e
function {
  return "".concat(e, " ", t);   // tail call
}

// fn s  args=1 vars=1 closure=0 cpool=1 bc=3B file=valdi_core/src/AssetCatalog
// args: e
function {
  return function <atom:0>;
}

// fn l  args=1 vars=5 closure=2 cpool=0 bc=394B file=valdi_core/src/AssetCatalog
// args: e
// locals: t, a, e#1, e#2
// closure: o, s
function {
  let t;
  t = {};
  let a;
  for (const a of e) {
    if (!(("string" == typeof a))) goto L_86;
    let e#1;
    e#1 = a.split(":");
    t[o.toCamelCase(e#1[(e#1.length - 1)])] = s(a);
   continue;
    let e#2;
    if (!((a.name == null))) goto L_14c;
    a.name;
    e#2 = a.path.substring((a.path.lastIndexOf(":") + 1));
    t[o.toCamelCase(e#2)] = a;
  }
  return t;
}

// fn n  args=1 vars=1 closure=3 cpool=0 bc=47B file=valdi_core/src/AssetCatalog
// args: e
// closure: l, a, r
function {
  return l(a.getAssets(r, e));   // tail call
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=3 bc=265B file=valdi_core/src/AssetCatalog
// args: require, module, exports
// locals: e, t, o, a, r, s, l, n
function {
  s = function s;
  l = function l;
  n = function n;
  let r;
  let a;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.makeCatalog = undefined;
  exports.loadCatalog = undefined;
  e = require("./ValdiRuntimeProvider");
  t = require("./ModuleLoaderGlobal");
  o = require("./utils/StringUtils");
  a = e.getValdiRuntime();
  r = t.getModuleLoader(module).package;
  exports.makeCatalog = l;
  exports.loadCatalog = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/AssetCatalog
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
