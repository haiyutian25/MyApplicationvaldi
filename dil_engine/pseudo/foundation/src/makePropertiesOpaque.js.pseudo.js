// fn t  args=1 vars=3 closure=1 cpool=0 bc=74B file=foundation/src/makePropertiesOpaque
// args: e
// locals: t, o
// closure: r
function {
  let t;
  t = {};
  let o;
  for (const o of e) {
    t[o] = r.makeOpaque(e[o]);
  }
  <catch>;
  return t;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=134B file=foundation/src/makePropertiesOpaque
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.makePropertiesOpaque = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider");
  r = e.getValdiRuntime();
  exports.makePropertiesOpaque = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/makePropertiesOpaque
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
