// fn <atom:0>  args=4 vars=5 closure=1 cpool=0 bc=109B file=dil_sandbox/src/DILSandboxWorkerHtmlViewMessengerState
// args: e, t, s, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.contextId = e;
  this.runtime = t;
  this.post = s;
  this.reportError = r;
  this.nextRequestId = 1;
  this.pendingCommands = new Map();
  this.transports = new Map();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=411B file=dil_sandbox/src/DILSandboxWorkerHtmlViewMessengerState
// locals: t, e, t#1, this
function {
  this = this;
  let e;
  let t;
  for (const t of this.transports.values()) {
    t.unregister();
  }
  this.transports.clear();
  e = new Error("DIL sandbox html-view messenger context was disposed");
  let t#1;
  for (const t#1 of this.pendingCommands.values()) {
    t#1.reject(e);
  }
  this.pendingCommands.clear();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=40B file=dil_sandbox/src/DILSandboxWorkerHtmlViewMessengerState
// args: t, s
// closure: this, e
function {
  return this.sendCommandToHost(e, t, s);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=102B file=dil_sandbox/src/DILSandboxWorkerHtmlViewMessengerState
// args: t, s
// closure: this, e
function {
  this.post({kind: 6, contextId: this.contextId, channelId: e, type: t, data: s});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=2 bc=305B file=dil_sandbox/src/DILSandboxWorkerHtmlViewMessengerState
// args: e, t
// locals: s, this
function {
  this = this;
  let s;
  if (!((this.transports.get(e) == null))) goto L_54;
  this.transports.get(e);
  goto L_78;
  undefined.unregister();
  s = {command: function <atom:0>, event: function <atom:0>};
  this.transports.set(e, {id: t, unregister: this.runtime.registerHtmlViewMessengerTransport(e, s)});
  return;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=484B file=dil_sandbox/src/DILSandboxWorkerHtmlViewMessengerState
// args: e, t
// locals: s, r, n, o, this
function {
  this = this;
  let r;
  let s;
  s = this.transports.get(e);
  if (!((s == null))) goto L_5d;
  s;
  goto L_7e;
  if (!((undefined.id !== t))) goto L_83;
  return;
  this.transports.delete(e);
  s.unregister();
  r = new Error("DIL html-view messenger was disconnected");
  let o;
  let n;
  const _it1 = this.pendingCommands;
  goto L_1da;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  n = <value(_it2)>;
  <done(_it2)>;
  o = <value(_it2)>;
  if (!((o.channelId === e))) goto L_1d9;
  this.pendingCommands.delete(n);
  o.reject(r);
  if (!(<done(_it1)>)) goto L_130;
  <value(_it1)>;
  return;
}

// fn <atom:0>  args=4 vars=7 closure=1 cpool=0 bc=377B file=dil_sandbox/src/DILSandboxWorkerHtmlViewMessengerState
// args: t, s, r, n
// locals: e, o, this
// closure: e
function {
  this = this;
  try { // catch -> L_c1
  let e;
  e = (await this.runtime.receiveHtmlViewMessengerCommand(s, r, n));
  this.post({kind: 7, contextId: this.contextId, requestId: t, result: e, error: undefined});
  <?>;
  goto L_177;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_176
  this.post({kind: 7, contextId: this.contextId, requestId: t, result: undefined, error: e.toDILSandboxError(o).message});
  <?>;
  goto L_177;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=168B file=dil_sandbox/src/DILSandboxWorkerHtmlViewMessengerState
// args: t, s, r
// locals: n, this
// closure: e
function {
  this = this;
  try { // catch -> L_53
  this.runtime.receiveHtmlViewMessengerEvent(t, s, r);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_a7
  this.reportError(e.toDILSandboxError(n));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=258B file=dil_sandbox/src/DILSandboxWorkerHtmlViewMessengerState
// args: e, t, s
// locals: r, this
function {
  this = this;
  let r;
  r = this.pendingCommands.get(e);
  if (!((undefined !== r))) goto L_101;
  this.pendingCommands.delete(e);
  if (!((undefined !== s))) goto L_d9;
  goto L_101;
  // [栈深重同步 1 -> 0]
  r.resolve(t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=6 cpool=0 bc=336B file=dil_sandbox/src/DILSandboxWorkerHtmlViewMessengerState
// args: o, i
// locals: d
// closure: this, n, t, s, r, e
function {
  this.pendingCommands.set(n, {channelId: t, reject: i, resolve: o});
  try { // catch -> L_d4
  this.post({kind: 5, contextId: this.contextId, channelId: t, requestId: n, type: s, data: r});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  d = <?>;
  try { // catch -> L_14f
  this.pendingCommands.delete(n);
  i(e.toDILSandboxError(d));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=1 bc=97B file=dil_sandbox/src/DILSandboxWorkerHtmlViewMessengerState
// args: t, s, r
// locals: n, this
// closure: e
function {
  this = this;
  let n;
  n = this.nextRequestId;
  this.nextRequestId = (this.nextRequestId + 1);
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=8 bc=174B file=dil_sandbox/src/DILSandboxWorkerHtmlViewMessengerState
// args: require, module, exports
// locals: e, DILSandboxWorkerHtmlViewMessengerState, <class_fields_init>, DILSandboxWorkerHtmlViewMessengerState#1
function {
  let DILSandboxWorkerHtmlViewMessengerState#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSandboxWorkerHtmlViewMessengerState = undefined;
  e = require("./DILSandboxError");
  let DILSandboxWorkerHtmlViewMessengerState;
  let <class_fields_init>;
  class DILSandboxWorkerHtmlViewMessengerState extends undefined { ... }
  <proto:DILSandboxWorkerHtmlViewMessengerState>.dispose = function <atom:0>;
  <proto:DILSandboxWorkerHtmlViewMessengerState>.registerTransport = function <atom:0>;
  <proto:DILSandboxWorkerHtmlViewMessengerState>.unregisterTransport = function <atom:0>;
  <proto:DILSandboxWorkerHtmlViewMessengerState>.receiveCommand = function <atom:0>;
  <proto:DILSandboxWorkerHtmlViewMessengerState>.receiveEvent = function <atom:0>;
  <proto:DILSandboxWorkerHtmlViewMessengerState>.receiveCommandResponse = function <atom:0>;
  <proto:DILSandboxWorkerHtmlViewMessengerState>.sendCommandToHost = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxWorkerHtmlViewMessengerState>;
  DILSandboxWorkerHtmlViewMessengerState = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxWorkerHtmlViewMessengerState#1 = function <atom:0>;
  exports.DILSandboxWorkerHtmlViewMessengerState = DILSandboxWorkerHtmlViewMessengerState#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxWorkerHtmlViewMessengerState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
