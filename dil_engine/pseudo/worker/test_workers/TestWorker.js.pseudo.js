// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=360B file=worker/test_workers/TestWorker
// args: s
// locals: r
// closure: o, e
function {
  let r;
  r = s.data;
  if (!(("hello" === r[0]))) goto L_12e;
  if (!((123 === r[1]))) goto L_12e;
  if (!(o.inWorker())) goto L_12e;
  if (!(e.isLoggingEnabled)) goto L_c3;
  console.log("worker: received host message");
  if (!(e.isLoggingEnabled)) goto L_11a;
  console.log("worker: sending reply message");
  goto L_160;
  // [栈深重同步 1 -> 0]
  if (!(("close" === r[0]))) goto L_155;
  close();
  goto L_160;
  // [栈深重同步 1 -> 0]
  postMessage("fail");
  close();
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=219B file=worker/test_workers/TestWorker
// args: require, module, exports
// locals: e, o
function {
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  o = require("worker/src/Worker");
  if (!(e.isLoggingEnabled)) goto L_c8;
  console.log("worker: started!");
  onmessage = function <atom:0>;
  onmessage;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=worker/test_workers/TestWorker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
