// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=35B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.failures = new Map();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=153B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// args: e
// locals: n, i
// closure: d, f, u, s
function {
  let i;
  let n;
  if (!(!d)) goto L_d;
  return;
  d = false;
  false;
  f = false;
  false;
  n = u;
  u = undefined;
  undefined;
  if (!((n == null))) goto L_30;
  n;
  goto L_5d;
  if (!((undefined.cancel == null))) goto L_5a;
  undefined.cancel;
  undefined;
  goto L_5d;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  i = s;
  s = undefined;
  undefined;
  if (!((i == null))) goto L_73;
  i;
  goto L_98;
  undefined.close(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=434B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// locals: e
// closure: l, this, i
function {
  let e;
  if (!((l == null))) goto L_f;
  l;
  goto L_30;
  if (!((undefined === undefined.affinity))) goto L_34;
  return;
  e = this.failures.get(i.documentId);
  if (((undefined === e))) goto L_142;
  if (!((e.affinity == null))) goto L_11a;
  e.affinity;
  goto L_13b;
  if (!((undefined.ownerGeneration == null))) goto L_141;
  undefined.ownerGeneration;
  if (!((l.affinity.ownerGeneration >= -1))) goto L_1b1;
  this.failures.set(i.documentId, l);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=161B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// args: e
// closure: d, p, y, t
function {
  if (!(d)) goto L_a0;
  if (!((1 === e.kind))) goto L_36;
  p();
  if (!((1 === e.kind))) goto L_66;
  goto L_69;
  // [栈深重同步 3 -> 2]
  y({code: 4401, reason: "multiplayer connection failed"});
  t.onFailure(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=97B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// closure: h, n
function {
  return h({kind: 1, reason: n.OAIMultiplayerConnectionFailureReason.RETRYABLE, message: "The multiplayer connection failed."});   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=308B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// args: i, t
// locals: o
// closure: e, h, n
function {
  let o;
  o = e.multiplayerAdmissionFailureReason(i);
  if (!(t)) goto L_34;
  goto L_35;
  // [栈深重同步 3 -> 2]
  if ((!t)) goto L_d7;
  if (!((o !== n.OAIMultiplayerConnectionFailureReason.UNKNOWN))) goto L_de;
  if (!((o !== n.OAIMultiplayerConnectionFailureReason.RETRYABLE))) goto L_de;
  goto L_123;
  // [栈深重同步 3 -> 2]
  h({kind: 0, reason: n.OAIMultiplayerConnectionFailureReason.GRANT_EXPIRED, message: "The multiplayer authorization could not be loaded."});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=81B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// args: e
// closure: d, f, s, m
function {
  if (!(d)) goto L_50;
  if (!(f)) goto L_50;
  try { // catch -> L_42
  if (!((s == null))) goto L_1a;
  s;
  goto L_3f;
  undefined.send(e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_4f
  m();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=8 cpool=0 bc=904B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// args: i
// closure: d, u, e, h, n, o, A, l
function {
  if (!(d)) goto L_387;
  u = undefined;
  undefined;
  if (((i.endpoint !== e.endpoint))) goto L_285;
  if (((i.expiresAt <= e.expiresAt))) goto L_285;
  if (!((i.affinity == null))) goto L_d6;
  i.affinity;
  goto L_f7;
  if (!((e.affinity == null))) goto L_123;
  e.affinity;
  goto L_144;
  if (((undefined.routeToken !== undefined.routeToken))) goto L_285;
  if (!((i.affinity == null))) goto L_176;
  i.affinity;
  goto L_197;
  if (!((e.affinity == null))) goto L_1c3;
  e.affinity;
  goto L_1e4;
  if (((undefined.podUid !== undefined.podUid))) goto L_285;
  if (!((i.affinity == null))) goto L_216;
  i.affinity;
  goto L_237;
  if (!((e.affinity == null))) goto L_263;
  e.affinity;
  goto L_284;
  if (!((undefined.ownerGeneration !== undefined.ownerGeneration))) goto L_2e9;
  goto L_387;
  // [栈深重同步 1 -> 0]
  if (!((o.onAdmission == null))) goto L_316;
  o.onAdmission;
  o;
  goto L_31a;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, i);
  A(JSON.stringify({type: "reauthorize", connection_grant: i.connectionGrant}));
  if (!(d)) goto L_387;
  l = i;
  i;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// args: e
// closure: v
function {
  return v(e, true);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=2 bc=198B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// locals: e
// closure: d, u, h, n, o, A, l, v, c
function {
  let e;
  if ((!d)) goto L_19;
  if (((undefined !== u))) goto L_19;
  if (!((undefined === l))) goto L_1c;
  return;
  e = l;
  u = c.fetch(undefined);
  c.fetch(undefined);
  Promise.resolve(u).then(function <atom:0>).catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=10 cpool=1 bc=538B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// args: e
// locals: i, e#1, r
// closure: d, u, h, n, o, A, l, v, c, t
function {
  let i;
  if (!(!d)) goto L_a;
  return;
  i = undefined;
  try { // catch -> L_43
  i = JSON.parse(e);
  JSON.parse(e);
  <?>;
  goto L_76;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_75
  t.onMessage(e);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(("object" == typeof i))) goto L_1f1;
  if (!((null !== i))) goto L_1f1;
  if (!(!Array.isArray(i))) goto L_1f1;
  let e#1;
  e#1 = i.type;
  if ((("reauthorize" === e#1))) goto L_132;
  if (!(("heartbeat" === e#1))) goto L_1f1;
  if (!((l == null))) goto L_110;
  l;
  goto L_131;
  if (!((undefined !== undefined.affinity))) goto L_1f1;
  if (!((1 !== Object.keys(i).length))) goto L_1c9;
  h({kind: 3, reason: n.OAIMultiplayerConnectionFailureReason.INVALID_RESPONSE, message: "The multiplayer control message is invalid."});
  return;
  if (!(("reauthorize" === e#1))) goto L_1f0;
  try { // catch -> L_1df
  function <atom:0>();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_1ef
  v(r, true);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
  t.onMessage(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=52B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// closure: d, f, t
function {
  if (!(d)) goto L_33;
  f = true;
  true;
  t.onOpen();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=99B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// args: e
// closure: d, p, y, t
function {
  if (!(d)) goto L_62;
  if (!((4408 !== e.code))) goto L_35;
  p();
  y(e);
  t.onClose(e);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=17 cpool=2 bc=863B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// locals: n, m, v
// closure: d, f, t, p, y, c, e, i, o, u, a, this, r, l, M, h, s
function {
  let v;
  let m;
  let n;
  if (!(!d)) goto L_11;
  return undefined; // async
  c = new e.MultiplayerAdmissionClient(i.documentId, o);
  new e.MultiplayerAdmissionClient(i.documentId, o);
  u = c.fetch(a);
  c.fetch(a);
  n = (await u);
  if (!(!d)) goto L_a1;
  return undefined; // async
  u = undefined;
  undefined;
  if (!((this.failures.get(i.documentId) === r))) goto L_187;
  this.failures.delete(i.documentId);
  l = n;
  n;
  if (!((o.onAdmission == null))) goto L_1bd;
  o.onAdmission;
  o;
  goto L_1c3;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, n);
  if (!(!d)) goto L_1cc;
  return undefined; // async
  m = ["chatgpt-multiplayer", ("multiplayer-grant." + n.connectionGrant)];
  if (!((undefined !== n.affinity))) goto L_29b;
  m.push(("multiplayer-route." + n.affinity.routeToken));
  v = o.openSocket(n.endpoint, m, {onOpen: function <atom:0>, onMessage: M, onFailure: h, onClose: function <atom:0>});
  if (!(d)) goto L_322;
  s = v;
  goto L_35c;
  // [栈深重同步 1 -> 0]
  v.close({code: 1000, reason: "multiplayer connection closed"});
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=21B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// args: e
// closure: l, v, m
function {
  if (!((undefined === l))) goto L_10;
  goto L_14;
  // [栈深重同步 1 -> 0]
  m();
  return;
}

// fn <atom:0>  args=3 vars=19 closure=2 cpool=9 bc=502B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// args: i, t, o
// locals: r, a, s, l, c, u, d, f, y, p, h, m, v, A, M, this
// closure: n, e
function {
  this = this;
  let M;
  let A;
  let v;
  let m;
  let h;
  let p;
  let y;
  let f;
  let d;
  let u;
  let c;
  let l;
  let s;
  let a;
  let r;
  r = this.failures.get(i.documentId);
  if (!((undefined !== r))) goto L_11b;
  if (!((r.expiresAt > (Date.now() / 1000)))) goto L_11b;
  goto L_11c;
  // [栈深重同步 1 -> 0]
  a = undefined;
  s = undefined;
  l = undefined;
  c = undefined;
  u = undefined;
  d = true;
  f = false;
  y = function <atom:0>;
  p = function <atom:0>;
  h = function <atom:0>;
  m = function <atom:0>;
  v = function <atom:0>;
  A = function <atom:0>;
  M = function <atom:0>;
  Promise.resolve().then(function <atom:0>).catch(function <atom:0>);
  return {send: A, close: y};
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=138B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// args: require, module, exports
// locals: e, n, MultiplayerConnectionService, <class_fields_init>, MultiplayerConnectionService#1
function {
  let MultiplayerConnectionService#1;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MultiplayerConnectionService = undefined;
  e = require("./MultiplayerAdmissionClient");
  n = require("./OAIMultiplayerConnectionService");
  let MultiplayerConnectionService;
  let <class_fields_init>;
  class MultiplayerConnectionService extends undefined { ... }
  <proto:MultiplayerConnectionService>.connect = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MultiplayerConnectionService>;
  MultiplayerConnectionService = function <atom:0>;
  // close_loc <class_fields_init>
  MultiplayerConnectionService#1 = function <atom:0>;
  exports.MultiplayerConnectionService = MultiplayerConnectionService#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/MultiplayerConnectionService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
