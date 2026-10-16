// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=68B file=worker/test_workers/EchoWorker
// args: e
// closure: s
function {
  if (!(("ping" === e.data))) goto L_3c;
  if (!(s)) goto L_3c;
  postMessage(s);
  close();
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=197B file=worker/test_workers/EchoWorker
// args: require, module, exports
// locals: e, s
function {
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  e = require("coreutils/src/url");
  s = e.paramsFromUrl(location.search).echo;
  onmessage = function <atom:0>;
  onmessage;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=worker/test_workers/EchoWorker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
