// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_renderer/src/DILDynamicSourceEvaluator
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=5B file=dil_renderer/src/DILDynamicSourceEvaluator
// closure: a, t
function {
  return a(t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=143B file=dil_renderer/src/DILDynamicSourceEvaluator
// closure: r, e
function {
  r(e.runtimeApiFacade, e.jsxRuntimeFacade, e.modelGenUIFacade, e.dateConstructor);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=2 bc=93B file=dil_renderer/src/DILDynamicSourceEvaluator
// args: t
// locals: r
// closure: a, e
function {
  let r;
  r = e.trace("DILRenderer.compileJS", function <atom:0>);
  e.trace("DILRenderer.evaluateJS", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_renderer/src/DILDynamicSourceEvaluator
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=3 bc=26B file=dil_renderer/src/DILDynamicSourceEvaluator
// args: e
// closure: a
function {
  return {beginRender: function <atom:0>, evaluate: function <atom:0>, dispose: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_renderer/src/DILDynamicSourceEvaluator
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=dil_renderer/src/DILDynamicSourceEvaluator
// closure: t
function {
  return t;
}

// fn t  args=6 vars=7 closure=1 cpool=2 bc=213B file=dil_renderer/src/DILDynamicSourceEvaluator
// args: e, t, a, r, o, c
// locals: n
// closure: exports
function {
  let n;
  n = exports.createDILDynamicSourceEvaluator({dateConstructor: o, fixedTimeMs: undefined, genUIFacade: undefined, jsxRuntimeFacade: a, modelGenUIFacade: r, reportUnhandledError: function <atom:0>, runtimeApiFacade: t, createWidgetRuntimeApi: function <atom:0>, trace: c});
  try { // catch -> L_a5
  n.evaluate(e);
  <?>;
  // gosub (finally 块) 171
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 171
  throw <?>;
  n.dispose();
  // ret (finally 块) 
  return;
}

// fn a  args=1 vars=1 closure=0 cpool=0 bc=72B file=dil_renderer/src/DILDynamicSourceEvaluator
// args: e
function {
  return new Function("DIL", "__dil", "GenUI", "Date", ""use strict";
".concat(e));
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=120B file=dil_renderer/src/DILDynamicSourceEvaluator
// args: require, module, exports
// locals: e, t, a
function {
  t = function t;
  a = function a;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createDILDynamicSourceEvaluator = undefined;
  exports.evaluateDILSource = undefined;
  e = function <atom:0>;
  exports.createDILDynamicSourceEvaluator = e;
  exports.evaluateDILSource = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILDynamicSourceEvaluator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
