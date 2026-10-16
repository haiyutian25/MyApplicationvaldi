// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=140B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: e, t, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.contextId = e;
  this.worker = t;
  this.errorReporter = r;
  this.active = true;
  this.hosts = new Map();
  this.nextRegistrationId = 1;
  this.nextRequestId = 1;
  this.pendingCommands = new Map();
  this.transports = new Map();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=40B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: e, r
// closure: this, t
function {
  return this.sendCommand(t, e, r);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=41B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: e, r
// closure: this, t
function {
  this.sendEvent(t, e, r);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: e
// closure: this, t
function {
  return this.registerTransport(t, e);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=3 bc=248B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: t
// locals: r, this
// closure: e
function {
  this = this;
  let r;
  r = this.hosts.get(t);
  if (((undefined !== r))) goto L_f3;
  r = e.createDILHtmlViewMessengerHost(t, {command: function <atom:0>, event: function <atom:0>, registerTransport: function <atom:0>});
  e.createDILHtmlViewMessengerHost(t, {command: function <atom:0>, event: function <atom:0>, registerTransport: function <atom:0>});
  this.hosts.set(t, r);
  return r;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// locals: this
function {
  this = this;
  return (0 !== this.pendingCommands.size);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=351B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: e
// locals: t, this
function {
  this = this;
  this.active = false;
  this.hosts.clear();
  this.transports.clear();
  let t;
  for (const t of this.pendingCommands.values()) {
    t.reject(e);
  }
  this.pendingCommands.clear();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=73B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: t
// closure: this, e
function {
  return this.finishWorkerCommand(e.requestId, t, undefined);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=75B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: t
// closure: this, e, r
function {
  return this.finishWorkerCommand(e.requestId, undefined, r(t));   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=2 bc=525B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: e
// locals: t, s, n, this
// closure: r
function {
  this = this;
  let s;
  let t;
  t = this.transports.get(e.channelId);
  if (!((undefined === t))) goto L_c7;
  this.respondToWorkerCommand(e.requestId, undefined, "DIL html-view messenger is unavailable");
  return;
  s = undefined;
  try { // catch -> L_162
  s = t.transport.command(e.type, e.data);
  t.transport.command(e.type, e.data);
  <?>;
  goto L_1b8;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_1b7
  this.finishWorkerCommand(e.requestId, undefined, r(n));
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  Promise.resolve(s).then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=369B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: e
// locals: t, s, this
// closure: r
function {
  this = this;
  let t;
  if (!((this.transports.get(e.channelId) == null))) goto L_75;
  this.transports.get(e.channelId);
  goto L_96;
  t = undefined.transport;
  if (!((undefined !== t))) goto L_170;
  try { // catch -> L_114
  t.event(e.type, e.data);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_16f
  this.errorReporter.reportError(new Error(r(s)));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=423B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.pendingCommands.get(e.requestId);
  if (!((undefined !== t))) goto L_1a6;
  this.pendingCommands.delete(e.requestId);
  if (!((undefined !== e.error))) goto L_15d;
  goto L_1a6;
  // [栈深重同步 1 -> 0]
  t.resolve(e.result);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=285B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// closure: this, e, s, r
function {
  if (!((this.transports.get(e) === s))) goto L_11c;
  this.transports.delete(e);
  this.worker.postSignal({kind: 1, contextId: this.contextId, channelId: e, registrationId: r});
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=1 bc=313B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: e, t
// locals: r, s, this
function {
  this = this;
  let s;
  let r;
  r = this.nextRegistrationId;
  this.nextRegistrationId = (this.nextRegistrationId + 1);
  s = {id: r, transport: t};
  this.transports.set(e, s);
  this.worker.postSignal({kind: 0, contextId: this.contextId, channelId: e, registrationId: r});
  return function <atom:0>;
}

// fn <atom:0>  args=2 vars=2 closure=5 cpool=0 bc=232B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: n, o
// closure: this, s, e, t, r
function {
  this.pendingCommands.set(s, {reject: o, resolve: n});
  this.worker.postSignal({kind: 2, contextId: this.contextId, channelId: e, requestId: s, type: t, data: r});
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=189B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: e, t, r
// locals: s, this
function {
  this = this;
  let s;
  if (!(!this.active)) goto L_61;
  return Promise.reject(new Error("DIL sandbox html-view messenger context is unavailable"));   // tail call
  s = this.nextRequestId;
  this.nextRequestId = (this.nextRequestId + 1);
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=178B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: e, t, r
// locals: this
function {
  this = this;
  if (!(this.active)) goto L_b1;
  this.worker.postSignal({kind: 3, contextId: this.contextId, channelId: e, type: t, data: r});
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=81B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: e, t, r
// locals: this
function {
  this = this;
  if (!(this.active)) goto L_50;
  this.respondToWorkerCommand(e, t, r);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=137B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: e, t, r
// locals: this
function {
  this = this;
  this.worker.postSignal({kind: 4, contextId: this.contextId, requestId: e, result: t, error: r});
  return;
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=72B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: e
// closure: t
function {
  return t.toDILSandboxError(e).message;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=13 bc=222B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// args: require, module, exports
// locals: e, t, DILSandboxHostHtmlViewMessengerState, <class_fields_init>, DILSandboxHostHtmlViewMessengerState#1, r
function {
  r = function r;
  let DILSandboxHostHtmlViewMessengerState#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSandboxHostHtmlViewMessengerState = undefined;
  e = require("dil_renderer/src/DILHtmlViewMessenger");
  t = require("./DILSandboxError");
  let DILSandboxHostHtmlViewMessengerState;
  let <class_fields_init>;
  class DILSandboxHostHtmlViewMessengerState extends undefined { ... }
  <proto:DILSandboxHostHtmlViewMessengerState>.resolveHost = function <atom:0>;
  <proto:DILSandboxHostHtmlViewMessengerState>.hasPendingWork = function <atom:0>;
  <proto:DILSandboxHostHtmlViewMessengerState>.reset = function <atom:0>;
  <proto:DILSandboxHostHtmlViewMessengerState>.receiveWorkerCommand = function <atom:0>;
  <proto:DILSandboxHostHtmlViewMessengerState>.receiveWorkerEvent = function <atom:0>;
  <proto:DILSandboxHostHtmlViewMessengerState>.receiveWorkerCommandResponse = function <atom:0>;
  <proto:DILSandboxHostHtmlViewMessengerState>.registerTransport = function <atom:0>;
  <proto:DILSandboxHostHtmlViewMessengerState>.sendCommand = function <atom:0>;
  <proto:DILSandboxHostHtmlViewMessengerState>.sendEvent = function <atom:0>;
  <proto:DILSandboxHostHtmlViewMessengerState>.finishWorkerCommand = function <atom:0>;
  <proto:DILSandboxHostHtmlViewMessengerState>.respondToWorkerCommand = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxHostHtmlViewMessengerState>;
  DILSandboxHostHtmlViewMessengerState = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxHostHtmlViewMessengerState#1 = function <atom:0>;
  exports.DILSandboxHostHtmlViewMessengerState = DILSandboxHostHtmlViewMessengerState#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxHostHtmlViewMessengerState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
