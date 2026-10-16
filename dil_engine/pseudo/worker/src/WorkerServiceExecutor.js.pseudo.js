// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=worker/src/WorkerServiceExecutor
// args: e
// closure: s
function {
  s(e.data);
  return;
}

// fn r  args=0 vars=0 closure=1 cpool=1 bc=18B file=worker/src/WorkerServiceExecutor
// closure: s
function {
  onmessage = function <atom:0>;
  onmessage;
  return;
}

// fn s  args=1 vars=5 closure=2 cpool=0 bc=426B file=worker/src/WorkerServiceExecutor
// args: r
// locals: s, o, i, s#1
// closure: require, e
function {
  try { // catch -> L_154
  let i;
  let o;
  let s;
  s = require(r.file, true, true)[r.className];
  // append([], 0, r.args)
  r.args;
  o = new s().start.apply(new s(), []);
  i = {api: e.unpromisifyObject(o.api), dispose: o.dispose};
  r.callback(i, undefined);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  s#1 = <?>;
  try { // catch -> L_1a9
  r.callback(undefined, e.toServiceError(s#1));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=115B file=worker/src/WorkerServiceExecutor
// args: require, module, exports
// locals: e, r, s
function {
  r = function r;
  s = function s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.processWorkerServiceExecutorTask = undefined;
  e = require("./utils/WorkerServiceBridgeUtils");
  if (!(("undefined" != typeof postMessage))) goto L_66;
  r();
  exports.processWorkerServiceExecutorTask = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=worker/src/WorkerServiceExecutor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
