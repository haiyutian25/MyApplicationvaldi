// fn o  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_sandbox/src/DILTraceCollector
// args: l, r
// closure: e
function {
  return e.polyfilledTracesToPerfettoJSON(l, r);   // tail call
}

// fn c  args=0 vars=1 closure=3 cpool=0 bc=120B file=dil_sandbox/src/DILTraceCollector
// locals: e
// closure: r, o, l
function {
  let e;
  e = (await r.DILSandbox.collectTraces());
  return o(l.collectPolyfilledTraces(), e); // async
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=142B file=dil_sandbox/src/DILTraceCollector
// args: require, module, exports
// locals: e, l, r, o, c
function {
  o = function o;
  c = function c;
  let r;
  let l;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.makeDILPolyfilledTraceJSON = undefined;
  exports.collectDILPolyfilledTraceJSON = undefined;
  e = require("dil_renderer/src/PolyfilledTraceCollector");
  l = require("dil_renderer/src/PolyfilledTracer");
  r = require("./DILSandbox");
  exports.makeDILPolyfilledTraceJSON = o;
  exports.collectDILPolyfilledTraceJSON = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILTraceCollector
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
