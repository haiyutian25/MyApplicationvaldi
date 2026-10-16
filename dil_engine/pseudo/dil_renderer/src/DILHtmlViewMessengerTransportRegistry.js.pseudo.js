// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=76B file=dil_renderer/src/DILHtmlViewMessengerTransportRegistry
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.errorReporter = e;
  this.htmlViewMessengerChannelIndex = 0;
  this.htmlViewMessengerTransports = new Map();
  this.queuedHtmlViewMessengerMessages = new Map();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=149B file=dil_renderer/src/DILHtmlViewMessengerTransportRegistry
// closure: this, e, s
function {
  if (!((this.htmlViewMessengerTransports.get(e) === s))) goto L_94;
  this.htmlViewMessengerTransports.delete(e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=118B file=dil_renderer/src/DILHtmlViewMessengerTransportRegistry
// args: e, s
// locals: this
function {
  this = this;
  this.htmlViewMessengerTransports.set(e, s);
  this.flushQueuedHtmlViewMessengerMessages(e, s);
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=129B file=dil_renderer/src/DILHtmlViewMessengerTransportRegistry
// locals: e, this
function {
  this = this;
  let e;
  e = "dil_html_view_messenger_".concat(this.htmlViewMessengerChannelIndex);
  this.htmlViewMessengerChannelIndex = (this.htmlViewMessengerChannelIndex ++);
  return e;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=70B file=dil_renderer/src/DILHtmlViewMessengerTransportRegistry
// args: r, n
// closure: this, e, t, s
function {
  this.queueHtmlViewMessengerMessage(e, {data: t, kind: 0, reject: n, resolve: r, type: s});
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=236B file=dil_renderer/src/DILHtmlViewMessengerTransportRegistry
// args: e, s, t
// locals: r, n, this
function {
  this = this;
  let r;
  r = this.htmlViewMessengerTransports.get(e);
  if (!((undefined === r))) goto L_60;
  return new Promise(function <atom:0>);
  try { // catch -> L_b9
  return Promise.resolve(r.command(s, t));
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_eb
  return Promise.reject(n);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=185B file=dil_renderer/src/DILHtmlViewMessengerTransportRegistry
// args: e, s, t
// locals: r, this
function {
  this = this;
  let r;
  r = this.htmlViewMessengerTransports.get(e);
  if (!((undefined !== r))) goto L_7f;
  goto L_b8;
  // [栈深重同步 1 -> 0]
  this.queueHtmlViewMessengerMessage(e, {data: t, kind: 1, type: s});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=201B file=dil_renderer/src/DILHtmlViewMessengerTransportRegistry
// args: e, s
// locals: t, this
function {
  this = this;
  let t;
  if (!((this.queuedHtmlViewMessengerMessages.get(e) == null))) goto L_54;
  this.queuedHtmlViewMessengerMessages.get(e);
  t = [];
  t.push(s);
  this.queuedHtmlViewMessengerMessages.set(e, t);
  return;
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=0 bc=784B file=dil_renderer/src/DILHtmlViewMessengerTransportRegistry
// args: s, t
// locals: r, s#1, n, n#1, this
// closure: e
function {
  this = this;
  let r;
  r = this.queuedHtmlViewMessengerMessages.get(s);
  if (!((undefined !== r))) goto L_30f;
  this.queuedHtmlViewMessengerMessages.delete(s);
  let s#1;
  for (const s#1 of r) {
    if (!((0 === s#1.kind))) goto L_218;
    try { // catch -> L_1e4
    Promise.resolve(t.command(s#1.type, s#1.data)).then(s#1.resolve, s#1.reject);
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    n = <?>;
    try { // catch -> L_217
    s#1.reject(n);
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    try { // catch -> L_28e
    t.event(s#1.type, s#1.data);
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    n#1 = <?>;
    try { // catch -> L_305
    this.errorReporter.reportError(e.toError(n#1));
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=7 bc=166B file=dil_renderer/src/DILHtmlViewMessengerTransportRegistry
// args: require, module, exports
// locals: e, DILHtmlViewMessengerTransportRegistry, <class_fields_init>, DILHtmlViewMessengerTransportRegistry#1
function {
  let DILHtmlViewMessengerTransportRegistry#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILHtmlViewMessengerTransportRegistry = undefined;
  e = require("./DILRuntimeUtils");
  let DILHtmlViewMessengerTransportRegistry;
  let <class_fields_init>;
  class DILHtmlViewMessengerTransportRegistry extends undefined { ... }
  <proto:DILHtmlViewMessengerTransportRegistry>.register = function <atom:0>;
  <proto:DILHtmlViewMessengerTransportRegistry>.nextChannelId = function <atom:0>;
  <proto:DILHtmlViewMessengerTransportRegistry>.sendCommand = function <atom:0>;
  <proto:DILHtmlViewMessengerTransportRegistry>.emitEvent = function <atom:0>;
  <proto:DILHtmlViewMessengerTransportRegistry>.queueHtmlViewMessengerMessage = function <atom:0>;
  <proto:DILHtmlViewMessengerTransportRegistry>.flushQueuedHtmlViewMessengerMessages = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILHtmlViewMessengerTransportRegistry>;
  DILHtmlViewMessengerTransportRegistry = function <atom:0>;
  // close_loc <class_fields_init>
  DILHtmlViewMessengerTransportRegistry#1 = function <atom:0>;
  exports.DILHtmlViewMessengerTransportRegistry = DILHtmlViewMessengerTransportRegistry#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILHtmlViewMessengerTransportRegistry
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
