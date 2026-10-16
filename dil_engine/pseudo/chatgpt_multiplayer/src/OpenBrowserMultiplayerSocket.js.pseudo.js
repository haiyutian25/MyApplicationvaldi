// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=199B file=chatgpt_multiplayer/src/OpenBrowserMultiplayerSocket
// closure: s, i, d, p, E, y
function {
  s = false;
  false;
  i.removeEventListener("open", d);
  i.removeEventListener("message", p);
  i.removeEventListener("close", E);
  i.removeEventListener("error", y);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=0 bc=235B file=chatgpt_multiplayer/src/OpenBrowserMultiplayerSocket
// args: e, r
// locals: o
// closure: s, l, a, n, i
function {
  let o;
  if (!(!s)) goto L_a;
  return;
  l();
  if (((1000 === e))) goto L_24;
  if (!((e >= 3000))) goto L_29;
  if (!((e <= 4999))) goto L_29;
  goto L_2c;
  // [栈深重同步 1 -> 0]
  o = 4000;
  if (!((a == null))) goto L_36;
  a;
  goto L_ae;
  undefined.close(n.MultiplayerDebugEventKind.SOCKET_CLOSE_REQUESTED, {code: o, reason: r});
  try { // catch -> L_e2
  i.close(o, r);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_ea
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=59B file=chatgpt_multiplayer/src/OpenBrowserMultiplayerSocket
// args: e
// closure: s, c, t
function {
  if (!(s)) goto L_3a;
  c(4000, "multiplayer connection failed");
  t.onFailure(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=311B file=chatgpt_multiplayer/src/OpenBrowserMultiplayerSocket
// closure: s, a, n, i, o, u, e, t
function {
  if (!(s)) goto L_136;
  if (!((a == null))) goto L_13;
  a;
  goto L_81;
  undefined.socket(n.MultiplayerDebugEventKind.SOCKET_OPEN, i, undefined, undefined);
  if (!((i.protocol !== o[0]))) goto L_10f;
  goto L_136;
  // [栈深重同步 1 -> 0]
  t.onOpen();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=374B file=chatgpt_multiplayer/src/OpenBrowserMultiplayerSocket
// args: r
// closure: s, a, n, u, e, t
function {
  if (!(s)) goto L_175;
  if (!((a == null))) goto L_14;
  a;
  goto L_9f;
  undefined.frame(n.MultiplayerDebugDirection.INCOMING, r.data);
  if (!(("string" != typeof r.data))) goto L_12c;
  goto L_175;
  // [栈深重同步 1 -> 0]
  t.onMessage(r.data);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=339B file=chatgpt_multiplayer/src/OpenBrowserMultiplayerSocket
// args: e
// closure: s, a, n, l, t
function {
  if (!(s)) goto L_152;
  if (!((a == null))) goto L_14;
  a;
  goto L_f3;
  undefined.close(n.MultiplayerDebugEventKind.SOCKET_CLOSE, {code: e.code, reason: e.reason, wasClean: e.wasClean});
  l();
  t.onClose({code: e.code, reason: "The multiplayer connection closed."});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=212B file=chatgpt_multiplayer/src/OpenBrowserMultiplayerSocket
// closure: a, n, u, e
function {
  if (!((a == null))) goto L_9;
  a;
  goto L_73;
  undefined.record(n.MultiplayerDebugEventKind.SOCKET_ERROR, {});
  u({kind: 1, reason: e.OAIMultiplayerConnectionFailureReason.RETRYABLE, message: "The multiplayer connection failed."});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=167B file=chatgpt_multiplayer/src/OpenBrowserMultiplayerSocket
// args: e
// closure: s, a, n, i
function {
  if (!(s)) goto L_a6;
  if (!((a == null))) goto L_13;
  a;
  goto L_7d;
  undefined.frame(n.MultiplayerDebugDirection.OUTGOING, e);
  i.send(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=74B file=chatgpt_multiplayer/src/OpenBrowserMultiplayerSocket
// args: e
// closure: c
function {
  return c(e.code, e.reason);   // tail call
}

// fn r  args=4 vars=13 closure=2 cpool=9 bc=583B file=chatgpt_multiplayer/src/OpenBrowserMultiplayerSocket
// args: r, o, t, a
// locals: i, s, l, c, u, d, p, E, y
// closure: n, e
function {
  let y;
  let E;
  let p;
  let d;
  let u;
  let c;
  let l;
  let s;
  let i;
  i = new globalThis.WebSocket(r, Array.from(o));
  s = true;
  if (!((undefined !== a))) goto L_8d;
  i.binaryType = "arraybuffer";
  "arraybuffer";
  l = function <atom:0>;
  c = function <atom:0>;
  u = function <atom:0>;
  d = function <atom:0>;
  p = function <atom:0>;
  E = function <atom:0>;
  y = function <atom:0>;
  i.addEventListener("open", d);
  i.addEventListener("message", p);
  i.addEventListener("close", E);
  i.addEventListener("error", y);
  if (!((a == null))) goto L_195;
  a;
  goto L_22c;
  undefined.socket(n.MultiplayerDebugEventKind.SOCKET_CREATED, i, r, Array.from(o));
  return {send: function <atom:0>, close: function <atom:0>};
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=chatgpt_multiplayer/src/OpenBrowserMultiplayerSocket
// args: require, module, exports
// locals: e, n, r
function {
  r = function r;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.openBrowserMultiplayerSocket = undefined;
  e = require("./OAIMultiplayerConnectionService");
  n = require("./MultiplayerDebugEvent");
  exports.openBrowserMultiplayerSocket = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/OpenBrowserMultiplayerSocket
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
