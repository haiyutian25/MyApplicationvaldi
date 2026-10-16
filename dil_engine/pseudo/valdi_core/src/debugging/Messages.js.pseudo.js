// fn e  args=1 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/debugging/Messages
// args: e
function {
  return (e.type < 0);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=60B file=valdi_core/src/debugging/Messages
// args: e
function {
  return JSON.stringify({type: 2, requestId: e, body: {}});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=61B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: -2, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=60B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: 3, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=61B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: -3, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=60B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: 4, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=61B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: -4, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=60B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: 5, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=61B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: -5, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=60B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: 6, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=61B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: -6, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=60B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: 7, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=61B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: -7, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=61B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: 8, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=61B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: -8, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=62B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: 1000, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=62B file=valdi_core/src/debugging/Messages
// args: e, t
function {
  return JSON.stringify({type: -1000, requestId: e, body: t});   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=265B file=valdi_core/src/debugging/Messages
// args: e, t
// locals: r, s, n
function {
  let n;
  let s;
  let r;
  r = undefined;
  s = undefined;
  if (!(("string" == typeof t))) goto L_1f;
  r = t;
  goto L_b8;
  // [栈深重同步 1 -> 0]
  r = "".concat(t.name, ": ", t.message);
  "".concat(t.name, ": ", t.message);
  s = t.stack;
  t.stack;
  n = {message: r, stack: s};
  return JSON.stringify({type: -1, requestId: e, body: n});   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=386B file=valdi_core/src/debugging/Messages
// args: e, t
// locals: r
function {
  if (!(("string" == typeof t))) goto L_141;
  if (!(e)) goto L_141;
  let r;
  r = JSON.parse(t);
  if (!(r.type)) goto L_141;
  if (!((undefined !== r.body))) goto L_141;
  if (!(r.requestId)) goto L_141;
  return {senderClientId: e, requestId: r.requestId, body: r.body, type: r.type};
  throw new Error("Failed to parse message (".concat(typeof e, ", ", typeof t, ")"));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=18 bc=217B file=valdi_core/src/debugging/Messages
// args: e
function {
  e.listContextsRequest = function <atom:0>;
  e.listContextsResponse = function <atom:0>;
  e.getContextTreeRequest = function <atom:0>;
  e.getContextTreeResponse = function <atom:0>;
  e.takeElementSnapshotRequest = function <atom:0>;
  e.takeElementSnapshotResponse = function <atom:0>;
  e.dumpHeapRequest = function <atom:0>;
  e.dumpHeapResponse = function <atom:0>;
  e.performanceTraceStatusRequest = function <atom:0>;
  e.performanceTraceStatusResponse = function <atom:0>;
  e.performanceTraceStartRequest = function <atom:0>;
  e.performanceTraceStartResponse = function <atom:0>;
  e.performanceTraceStopRequest = function <atom:0>;
  e.performanceTraceStopResponse = function <atom:0>;
  e.customMessageRequest = function <atom:0>;
  e.customMessageResponse = function <atom:0>;
  e.errorResponse = function <atom:0>;
  e.parse = function <atom:0>;
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=114B file=valdi_core/src/debugging/Messages
// args: require, module, exports
// locals: e, t
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isAnyResponse = undefined;
  exports.Messages = undefined;
  exports.isAnyResponse = e;
  if ((t)) goto L_70;
  t = {};
  exports.Messages = {};
  function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/Messages
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
