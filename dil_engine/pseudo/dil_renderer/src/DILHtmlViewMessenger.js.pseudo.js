// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, t
// closure: this
function {
  return this.receiveCommand(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, t
// closure: this
function {
  return this.receiveEvent(e, t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=dil_renderer/src/DILHtmlViewMessenger
// args: e
// closure: this
function {
  return this.renderer.registerHtmlViewMessengerTransport(this.channelId, e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, t
// closure: this
function {
  return this.receiveCommand(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, t
// closure: this
function {
  return this.receiveEvent(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=5 bc=293B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, t
// locals: this
// closure: <class_fields_init>, n
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.renderer = e;
  this.eventHandlers = new Map();
  this.options = t;
  this.channelId = e.nextHtmlViewMessengerChannelId();
  this.host = n(this.channelId, {command: function <atom:0>, event: function <atom:0>, registerTransport: function <atom:0>});
  this.unregisterReceiver = e.registerHtmlViewMessengerReceiver(this.channelId, {command: function <atom:0>, event: function <atom:0>});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=dil_renderer/src/DILHtmlViewMessenger
// args: e
// locals: this
function {
  this = this;
  this.options = e;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=162B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, t
// locals: n, this
function {
  this = this;
  let n;
  if (!((this.options == null))) goto L_2f;
  this.options;
  goto L_5a;
  if (!((undefined.commands == null))) goto L_58;
  undefined.commands;
  goto L_5a;
  n = undefined[e];
  if (!((undefined === n))) goto L_9b;
  throw new Error("Unknown DIL html-view messenger command "".concat(e, """));
  return n(t);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=107B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, t
// locals: n, r, this
function {
  this = this;
  let n;
  n = this.eventHandlers.get(e);
  if (!((undefined !== n))) goto L_6a;
  let r;
  for (const r of n) {
    r(t);
  }
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=109B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, t
// locals: this
function {
  this = this;
  this.renderer.emitHtmlViewMessengerEvent(this.channelId, e, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=108B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, t
// locals: this
function {
  this = this;
  return this.renderer.sendHtmlViewMessengerCommand(this.channelId, e, t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=49B file=dil_renderer/src/DILHtmlViewMessenger
// closure: n, t
function {
  if (!((n == null))) goto L_b;
  n;
  goto L_30;
  undefined.delete(t);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=1 bc=219B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, t
// locals: n, this
function {
  this = this;
  let n;
  n = this.eventHandlers.get(e);
  if (!((undefined === n))) goto L_ae;
  n = new Set();
  new Set();
  this.eventHandlers.set(e, n);
  n.add(t);
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_renderer/src/DILHtmlViewMessenger
// locals: this
function {
  this = this;
  return this.host;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=111B file=dil_renderer/src/DILHtmlViewMessenger
// locals: this
function {
  this = this;
  this.unregisterReceiver();
  this.eventHandlers.clear();
  return;
}

// fn n  args=2 vars=3 closure=1 cpool=0 bc=177B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, t
// locals: n
// closure: i
function {
  let n;
  n = {channelId: e, command: t.command, event: t.event, registerTransport: t.registerTransport};
  return Object.freeze(i(n, n));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=dil_renderer/src/DILHtmlViewMessenger
// args: e
// closure: t, r
function {
  return t.sendCommand(r, e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=171B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, r
// locals: s
// closure: t, n
function {
  let s;
  if ((("string" != typeof r))) goto L_16;
  if (!(("then" === r))) goto L_19;
  return;
  s = n.get(r);
  if (!((undefined === s))) goto L_a6;
  s = Object.freeze(function <atom:0>);
  Object.freeze(function <atom:0>);
  n.set(r, s);
  return s;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=40B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, n
// closure: t
function {
  t.emit(e, n);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=5B file=dil_renderer/src/DILHtmlViewMessenger
// closure: r
function {
  r();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=86B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, n
// locals: r
// closure: t
function {
  let r;
  r = t.on(e, n);
  return Object.freeze(function <atom:0>);   // tail call
}

// fn r  args=1 vars=3 closure=2 cpool=3 bc=192B file=dil_renderer/src/DILHtmlViewMessenger
// args: t
// locals: n, r
// closure: i, e
function {
  let r;
  let n;
  n = new Map();
  r = i({commands: new Proxy(Object.create(null), {get: function <atom:0>}), emit: function <atom:0>, on: function <atom:0>}, t.getHost());
  return e.hardenApiFacade(r);   // tail call
}

// fn s  args=1 vars=1 closure=1 cpool=0 bc=36B file=dil_renderer/src/DILHtmlViewMessenger
// args: e
// closure: t
function {
  if (!(("object" == typeof e))) goto L_f;
  if (((null !== e))) goto L_1b;
  if (!(("function" == typeof e))) goto L_23;
  return e[t];
  return;
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=0 bc=54B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, r, s
// closure: t, n
function {
  if (!((r === t))) goto L_9;
  return n;
  return Reflect.get(e, r, s);
}

// fn i  args=2 vars=2 closure=1 cpool=1 bc=24B file=dil_renderer/src/DILHtmlViewMessenger
// args: e, n
// closure: t
function {
  return new Proxy(e, {get: function <atom:0>});
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=13 bc=283B file=dil_renderer/src/DILHtmlViewMessenger
// args: require, module, exports
// locals: e, t, DILHtmlViewMessengerApiImpl, <class_fields_init>, DILHtmlViewMessengerApiImpl#1, n, r, s, i
function {
  n = function n;
  r = function r;
  s = function s;
  i = function i;
  let DILHtmlViewMessengerApiImpl#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILHtmlViewMessengerApiImpl = undefined;
  exports.createDILHtmlViewMessengerHost = undefined;
  exports.createDILHtmlViewMessengerApiFacade = undefined;
  exports.getDILHtmlViewMessengerHost = undefined;
  e = require("./DILApiFacade");
  t = Symbol("DILHtmlViewMessengerHost");
  let DILHtmlViewMessengerApiImpl;
  let <class_fields_init>;
  class DILHtmlViewMessengerApiImpl extends undefined { ... }
  <proto:DILHtmlViewMessengerApiImpl>.updateOptions = function <atom:0>;
  <proto:DILHtmlViewMessengerApiImpl>.receiveCommand = function <atom:0>;
  <proto:DILHtmlViewMessengerApiImpl>.receiveEvent = function <atom:0>;
  <proto:DILHtmlViewMessengerApiImpl>.emit = function <atom:0>;
  <proto:DILHtmlViewMessengerApiImpl>.sendCommand = function <atom:0>;
  <proto:DILHtmlViewMessengerApiImpl>.on = function <atom:0>;
  <proto:DILHtmlViewMessengerApiImpl>.getHost = function <atom:0>;
  <proto:DILHtmlViewMessengerApiImpl>.dispose = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILHtmlViewMessengerApiImpl>;
  DILHtmlViewMessengerApiImpl = function <atom:0>;
  // close_loc <class_fields_init>
  DILHtmlViewMessengerApiImpl#1 = function <atom:0>;
  exports.DILHtmlViewMessengerApiImpl = DILHtmlViewMessengerApiImpl#1;
  exports.createDILHtmlViewMessengerHost = n;
  exports.createDILHtmlViewMessengerApiFacade = r;
  exports.getDILHtmlViewMessengerHost = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILHtmlViewMessenger
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
