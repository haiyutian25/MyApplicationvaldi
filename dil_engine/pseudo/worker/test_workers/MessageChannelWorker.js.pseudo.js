// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=115B file=worker/test_workers/MessageChannelWorker
// args: s
// closure: e
function {
  e.port1.postMessage(["worker channel reply", s.data]);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=120B file=worker/test_workers/MessageChannelWorker
// args: e
// closure: o, r
function {
  o.postMessage(["worker reply", e.data, e.ports.length, r]);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=2 bc=443B file=worker/test_workers/MessageChannelWorker
// args: e
// locals: s, e#1, s#1, o, r
function {
  let r;
  let o;
  let s;
  s = e;
  if (!(("transfer from worker" === s.data))) goto L_12e;
  let s#1;
  let e#1;
  e#1 = new MessageChannel();
  s#1 = postMessage;
  e#1.port1.onmessage = function <atom:0>;
  s#1({type: "worker channel", port: e#1.port2}, [e#1.port2]);
  e#1.port1.postMessage("queued in worker");
  return;
  o = s.data.port;
  r = (o === s.ports[0]);
  delete "onmessage";
  o.onmessage = function <atom:0>;
  globalThis;
  return;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=1 bc=74B file=worker/test_workers/MessageChannelWorker
// args: require, module, exports
function {
  Object.defineProperty(exports, "__esModule", {value: true});
  onmessage = function <atom:0>;
  onmessage;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=worker/test_workers/MessageChannelWorker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
