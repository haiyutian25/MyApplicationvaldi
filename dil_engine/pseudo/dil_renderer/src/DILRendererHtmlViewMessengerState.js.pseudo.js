// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=86B file=dil_renderer/src/DILRendererHtmlViewMessengerState
// args: r
// locals: this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.receivers = new Map();
  this.transports = new e.DILHtmlViewMessengerTransportRegistry(r);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=149B file=dil_renderer/src/DILRendererHtmlViewMessengerState
// closure: this, e, r
function {
  if (!((this.receivers.get(e) === r))) goto L_94;
  this.receivers.delete(e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=78B file=dil_renderer/src/DILRendererHtmlViewMessengerState
// args: e, r
// locals: this
function {
  this = this;
  this.receivers.set(e, r);
  return function <atom:0>;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=74B file=dil_renderer/src/DILRendererHtmlViewMessengerState
// args: e, r
// locals: this
function {
  this = this;
  return this.transports.register(e, r);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=182B file=dil_renderer/src/DILRendererHtmlViewMessengerState
// args: e, r, t
// locals: s, this
function {
  this = this;
  let s;
  s = this.receivers.get(e);
  if (!((undefined === s))) goto L_8d;
  throw new Error("Unknown DIL html-view messenger channel "".concat(e, """));
  return s.command(r, t);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=120B file=dil_renderer/src/DILRendererHtmlViewMessengerState
// args: e, r, t
// locals: this
function {
  this = this;
  if (!((this.receivers.get(e) == null))) goto L_51;
  this.receivers.get(e);
  goto L_77;
  undefined.event(r, t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=dil_renderer/src/DILRendererHtmlViewMessengerState
// locals: this
function {
  this = this;
  return this.transports.nextChannelId();   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=75B file=dil_renderer/src/DILRendererHtmlViewMessengerState
// args: e, r, t
// locals: this
function {
  this = this;
  return this.transports.sendCommand(e, r, t);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=76B file=dil_renderer/src/DILRendererHtmlViewMessengerState
// args: e, r, t
// locals: this
function {
  this = this;
  this.transports.emitEvent(e, r, t);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=8 bc=174B file=dil_renderer/src/DILRendererHtmlViewMessengerState
// args: require, module, exports
// locals: e, DILRendererHtmlViewMessengerState, <class_fields_init>, DILRendererHtmlViewMessengerState#1
function {
  let DILRendererHtmlViewMessengerState#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILRendererHtmlViewMessengerState = undefined;
  e = require("./DILHtmlViewMessengerTransportRegistry");
  let DILRendererHtmlViewMessengerState;
  let <class_fields_init>;
  class DILRendererHtmlViewMessengerState extends undefined { ... }
  <proto:DILRendererHtmlViewMessengerState>.registerReceiver = function <atom:0>;
  <proto:DILRendererHtmlViewMessengerState>.registerTransport = function <atom:0>;
  <proto:DILRendererHtmlViewMessengerState>.receiveCommand = function <atom:0>;
  <proto:DILRendererHtmlViewMessengerState>.receiveEvent = function <atom:0>;
  <proto:DILRendererHtmlViewMessengerState>.nextChannelId = function <atom:0>;
  <proto:DILRendererHtmlViewMessengerState>.sendCommand = function <atom:0>;
  <proto:DILRendererHtmlViewMessengerState>.emitEvent = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILRendererHtmlViewMessengerState>;
  DILRendererHtmlViewMessengerState = function <atom:0>;
  // close_loc <class_fields_init>
  DILRendererHtmlViewMessengerState#1 = function <atom:0>;
  exports.DILRendererHtmlViewMessengerState = DILRendererHtmlViewMessengerState#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILRendererHtmlViewMessengerState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
