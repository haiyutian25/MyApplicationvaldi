// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=105B file=math_jax/src/mathjax_src/mathjax
// args: e, r
// closure: exports
function {
  return exports.mathjax.handlers.document(e, r);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=357B file=math_jax/src/mathjax_src/mathjax
// args: require, module, exports
// locals: e, r, t, n
function {
  let n;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.mathjax = undefined;
  e = require("./components/version");
  r = require("./core/HandlerList");
  t = require("./util/Retries");
  n = require("./util/context");
  exports.mathjax = {version: e.VERSION, context: n.context, handlers: new r.HandlerList(), document: function <atom:0>, handleRetriesFor: t.handleRetriesFor, retryAfter: t.retryAfter, asyncLoad: null, asyncIsSynchronous: false};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/mathjax
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
