// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=valdi_core/src/debugging/DaemonClientManager
// args: e, s
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.message = e;
  this.client = s;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/debugging/DaemonClientManager
function {
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=228B file=valdi_core/src/debugging/DaemonClientManager
// args: e
// locals: this
function {
  this = this;
  this.client.submitRequest({forward_client_payload: {client_id: this.message.senderClientId, payload_string: e(this.message.requestId)}}, function <atom:0>);
  return;
}

// fn <atom:0>  args=4 vars=5 closure=1 cpool=0 bc=60B file=valdi_core/src/debugging/DaemonClientManager
// args: e, s, t, i
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.client = e;
  this.requestId = s;
  this.resolve = t;
  this.reject = i;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=116B file=valdi_core/src/debugging/DaemonClientManager
// args: e
// locals: s, this
function {
  this = this;
  let s;
  s = this.resolve;
  if (!(s)) goto L_73;
  this.resolve = undefined;
  this.reject = undefined;
  clearTimeout(this.timeout);
  s(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=116B file=valdi_core/src/debugging/DaemonClientManager
// args: e
// locals: s, this
function {
  this = this;
  let s;
  s = this.reject;
  if (!(s)) goto L_73;
  this.resolve = undefined;
  this.reject = undefined;
  clearTimeout(this.timeout);
  s(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=66B file=valdi_core/src/debugging/DaemonClientManager
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.daemonClients = [];
  this.listeners = [];
  this.idSequence = 0;
  this.pendingMessages = [];
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=317B file=valdi_core/src/debugging/DaemonClientManager
// args: e
// locals: s, this
function {
  this = this;
  this.listeners.push(e);
  if (!(this.daemonClients.length)) goto L_13c;
  if (!(e.onAvailabilityChanged)) goto L_bf;
  e.onAvailabilityChanged(true);
  if (!(e.onClientConnected)) goto L_13c;
  let s;
  for (const s of this.daemonClients) {
    e.onClientConnected(s);
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=161B file=valdi_core/src/debugging/DaemonClientManager
// args: e
// locals: s, this
function {
  this = this;
  let s;
  s = this.listeners.indexOf(e);
  if (!((s >= 0))) goto L_a0;
  this.listeners.splice(s, 1);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=228B file=valdi_core/src/debugging/DaemonClientManager
// args: e, s
// locals: t, i, this
function {
  this = this;
  let t;
  t = 0;
  if (!((t < this.pendingMessages.length))) goto L_e3;
  let i;
  i = this.pendingMessages[t];
  if (!((i.requestId === e))) goto L_d7;
  this.pendingMessages.splice(t, 1);
  s(i);
  t = <t_new>;
  (t++);
  goto L_7;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=160B file=valdi_core/src/debugging/DaemonClientManager
// args: e
// locals: s
// closure: i, t
function {
  if (!((e == null))) goto L_9;
  e;
  goto L_2a;
  if (!(undefined.error)) goto L_73;
  i(e.error.error_message);
  return;
  if (!(e)) goto L_8e;
  try { // catch -> L_81
  t(e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_8d
  i(s);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  i(new Error("No data returned"));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=41B file=valdi_core/src/debugging/DaemonClientManager
// args: t, i
// closure: e, s
function {
  e.submitRequest(s, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=1 bc=12B file=valdi_core/src/debugging/DaemonClientManager
// args: e, s
function {
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=42B file=valdi_core/src/debugging/DaemonClientManager
// args: e
function {
  return e.doReject("Request timed out");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=43B file=valdi_core/src/debugging/DaemonClientManager
// closure: this, a
function {
  this.fulfillMessage(a, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=valdi_core/src/debugging/DaemonClientManager
// args: s
// closure: e
function {
  return s.doReject(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=43B file=valdi_core/src/debugging/DaemonClientManager
// args: e
// closure: this, a
function {
  this.fulfillMessage(a, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=6 cpool=2 bc=336B file=valdi_core/src/debugging/DaemonClientManager
// args: n, o
// locals: a, l
// closure: this, PendingMessage, e, s, t, i
function {
  let l;
  let a;
  this.idSequence = (this.idSequence ++);
  a = this.idSequence.toString();
  l = new PendingMessage(e, a, n, o);
  this.pendingMessages.push(l);
  l.timeout = setTimeout(function <atom:0>, s);
  this.submitRequest(e, {forward_client_payload: {client_id: t, payload_string: i(a)}}).catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=1 bc=14B file=valdi_core/src/debugging/DaemonClientManager
// args: e, t, i
// locals: this
// closure: PendingMessage, s
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=74B file=valdi_core/src/debugging/DaemonClientManager
// args: e
// closure: s
function {
  e.doReject(s.body);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=valdi_core/src/debugging/DaemonClientManager
// args: e
// closure: s
function {
  e.doResolve(s);
  return;
}

// fn <atom:0>  args=3 vars=10 closure=2 cpool=2 bc=1392B file=valdi_core/src/debugging/DaemonClientManager
// args: s, t, i
// locals: e, e#1, e#2, s#1, n, e#3, this
// closure: e, ReceivedDaemonClientMessage
function {
  this = this;
  if (!((s === 1))) goto L_1a6;
  if (!((this.daemonClients.indexOf(t) >= 0))) goto L_59;
  s;
  return;
  // [栈深重同步 0 -> 1]
  this.daemonClients.push(t);
  let e;
  for (const e of this.listeners) {
    if (!((1 === this.daemonClients.length))) goto L_148;
    if (!(e.onAvailabilityChanged)) goto L_148;
    e.onAvailabilityChanged(true);
    if (!(e.onClientConnected)) goto L_199;
    e.onClientConnected(t);
    // [栈深重同步 3 -> 4]
  }
  goto L_56f;
  if (!((_it1 === 2))) goto L_352;
  let e#1;
  e#1 = this.daemonClients.indexOf(t);
  if (!((e#1 >= 0))) goto L_56f;
  this.daemonClients.splice(e#1, 1);
  let e#2;
  for (const e#2 of this.listeners) {
    if ((this.daemonClients.length)) goto L_2f4;
    if (!(e#2.onAvailabilityChanged)) goto L_2f4;
    e#2.onAvailabilityChanged(false);
    if (!(e#2.onClientDisconnected)) goto L_345;
    e#2.onClientDisconnected(t);
    // [栈深重同步 3 -> 4]
  }
  goto L_56f;
  if (!((_it2 === 3))) goto L_56f;
  let n;
  let s#1;
  s#1 = e.Messages.parse(i.senderClientId, i.payload);
  if (!((-1 === s#1.type))) goto L_463;
  this.fulfillMessage(s#1.requestId, function <atom:0>);
  return;
  // [栈深重同步 0 -> 1]
  if (!(e.isAnyResponse(s#1))) goto L_4db;
  this.fulfillMessage(s#1.requestId, function <atom:0>);
  return;
  // [栈深重同步 0 -> 1]
  n = new ReceivedDaemonClientMessage(s#1, t);
  let e#3;
  for (const e#3 of this.listeners) {
    if (!(e#3.onMessage)) goto L_565;
    e#3.onMessage(n);
    // [栈深重同步 3 -> 4]
  }
  // close_loc s#1
  return;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=12 bc=280B file=valdi_core/src/debugging/DaemonClientManager
// args: require, module, exports
// locals: e, ReceivedDaemonClientMessage, <class_fields_init>, ReceivedDaemonClientMessage#1, s, PendingMessage, <class_fields_init>#1, PendingMessage#1, DaemonClientManager, <class_fields_init>#2, DaemonClientManager#1
function {
  let DaemonClientManager#1;
  let PendingMessage#1;
  let s;
  let ReceivedDaemonClientMessage#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ReceivedDaemonClientMessage = undefined;
  exports.DaemonClientManager = undefined;
  e = require("./Messages");
  let ReceivedDaemonClientMessage;
  let <class_fields_init>;
  class ReceivedDaemonClientMessage extends undefined { ... }
  <proto:ReceivedDaemonClientMessage>.respond = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ReceivedDaemonClientMessage>;
  ReceivedDaemonClientMessage = function <atom:0>;
  // close_loc <class_fields_init>
  ReceivedDaemonClientMessage#1 = function <atom:0>;
  exports.ReceivedDaemonClientMessage = ReceivedDaemonClientMessage#1;
  s = 10000;
  let PendingMessage;
  let <class_fields_init>#1;
  class PendingMessage extends undefined { ... }
  <proto:PendingMessage>.doResolve = function <atom:0>;
  <proto:PendingMessage>.doReject = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:PendingMessage>;
  PendingMessage = function <atom:0>;
  // close_loc <class_fields_init>#1
  PendingMessage#1 = function <atom:0>;
  let DaemonClientManager;
  let <class_fields_init>#2;
  class DaemonClientManager extends undefined { ... }
  <proto:DaemonClientManager>.addListener = function <atom:0>;
  <proto:DaemonClientManager>.removeListener = function <atom:0>;
  <proto:DaemonClientManager>.fulfillMessage = function <atom:0>;
  <proto:DaemonClientManager>.submitRequest = function <atom:0>;
  <proto:DaemonClientManager>.submitMessage = function <atom:0>;
  <proto:DaemonClientManager>.onEvent = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:DaemonClientManager>;
  DaemonClientManager = function <atom:0>;
  // close_loc <class_fields_init>#2
  DaemonClientManager#1 = function <atom:0>;
  exports.DaemonClientManager = DaemonClientManager#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/DaemonClientManager
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
