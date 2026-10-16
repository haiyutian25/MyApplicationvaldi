// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=81B file=dil_sandbox/src/DILSandboxWorker
// args: o
// closure: r, e
function {
  r.installDILSandboxComponentGlobals(globalThis, o);
  return e.createDILDynamicSourceEvaluator;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=147B file=dil_sandbox/src/DILSandboxWorker
// args: require, module, exports
// locals: e, r, o
function {
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  e = require("dil_renderer/src/DILDynamicSourceEvaluator");
  r = require("./DILSandboxComponentGlobals");
  o = require("./DILSandboxWorkerCore");
  o.startDILSandboxWorker({initializeSourceEvaluator: function <atom:0>, recursivelyFreezeAllowedGlobals: true});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxWorker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
