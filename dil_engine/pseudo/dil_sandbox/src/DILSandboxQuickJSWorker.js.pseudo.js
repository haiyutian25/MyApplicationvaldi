// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=dil_sandbox/src/DILSandboxQuickJSWorker
// args: e
// closure: t, r
function {
  return t.getDILComponentSource(e, r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=1 bc=118B file=dil_sandbox/src/DILSandboxQuickJSWorker
// args: u
// closure: t, r, e, i, o
function {
  return e.createDILQuickJSSourceEvaluator(u, i.createQuickJSContext(), o.getDILComponentNames(), function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=1 bc=3B file=dil_sandbox/src/DILSandboxQuickJSWorker
// args: r
// closure: t, e, i, o
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=1 bc=219B file=dil_sandbox/src/DILSandboxQuickJSWorker
// args: require, module, exports
// locals: e, r, o, t, u, i
function {
  let i;
  let u;
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  e = require("./DILSandboxQuickJSEvaluator");
  r = require("./DILSandboxWorkerCore");
  o = require("./DILComponentNames");
  t = require("./DILComponentSources");
  u = require("ValdiWASMModule_quickjs");
  i = u.getExportedModule("quickjs/src/QuickJS");
  r.startDILSandboxWorker({initializeSourceEvaluator: function <atom:0>, recursivelyFreezeAllowedGlobals: false});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxQuickJSWorker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
