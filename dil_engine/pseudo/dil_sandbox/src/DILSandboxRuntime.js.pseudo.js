// fn <atom:0>  args=1 vars=7 closure=3 cpool=0 bc=536B file=dil_sandbox/src/DILSandboxRuntime
// args: <atom:0>
// locals: t, s, n, i, o, this
// closure: <class_fields_init>, r, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  t = <to_object>(<atom:0>).requestRender;
  s = <to_object>(<atom:0>).fixedTimeMs;
  n = <to_object>(<atom:0>).errorMode;
  i = <to_object>(<atom:0>).asyncErrorHandler;
  o = {};
  <to_object>(<atom:0>);
  {requestRender: null, fixedTimeMs: null, errorMode: null, asyncErrorHandler: null};
  this.errors = [];
  this.pendingFlushes = [];
  this.requestRender = t;
  this.asyncErrorHandler = i;
  this.delegate = new r.DILRenderBufferDelegate(o.elementsMetadata);
  null;
  o;
  this.renderer = new e.DILRenderer({delegate: this.delegate, errorReporter: this, scheduler: this});
  this.context = this.renderer.createRenderContext(s, n);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=dil_sandbox/src/DILSandboxRuntime
// args: e
// locals: this
function {
  this = this;
  this.errors.push(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=41B file=dil_sandbox/src/DILSandboxRuntime
// args: e
// locals: this
function {
  this = this;
  this.asyncErrorHandler(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=dil_sandbox/src/DILSandboxRuntime
// args: e
// locals: this
function {
  this = this;
  this.pendingFlushes.push(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=dil_sandbox/src/DILSandboxRuntime
// locals: this
function {
  this = this;
  this.requestRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=155B file=dil_sandbox/src/DILSandboxRuntime
// args: e
// locals: this
function {
  this = this;
  this.errors.length = 0;
  this.context.updateSource(e);
  return this.takeErrors();   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=74B file=dil_sandbox/src/DILSandboxRuntime
// args: e, r
// locals: this
function {
  this = this;
  return this.context.setStateSnapshot(e, r);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_sandbox/src/DILSandboxRuntime
// locals: this
function {
  this = this;
  this.context.commitStateSnapshot();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=89B file=dil_sandbox/src/DILSandboxRuntime
// args: e
// locals: this
function {
  this = this;
  return {encoded: this.renderOnce(e), errors: this.takeErrors()};
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=276B file=dil_sandbox/src/DILSandboxRuntime
// args: e
// locals: r, s, this
// closure: t
function {
  this = this;
  let s;
  let r;
  r = this.renderOnce(e);
  s = this.takeErrors();
  if (((undefined !== r))) goto L_101;
  this.context.clearRenderedRoot();
  r = this.renderOnce(e);
  this.renderOnce(e);
  s = t(s, this.takeErrors());
  t(s, this.takeErrors());
  return {encoded: r, errors: s};
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=74B file=dil_sandbox/src/DILSandboxRuntime
// args: e, r
// locals: this
function {
  this = this;
  return this.delegate.invokeFunction(e, r);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=dil_sandbox/src/DILSandboxRuntime
// locals: this
function {
  this = this;
  return this.delegate.takeRetiredCallbacks();   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=74B file=dil_sandbox/src/DILSandboxRuntime
// args: e, r
// locals: this
function {
  this = this;
  return this.renderer.registerDILHtmlViewMessengerTransport(e, r);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=75B file=dil_sandbox/src/DILSandboxRuntime
// args: e, r, t
// locals: this
function {
  this = this;
  return this.renderer.receiveDILHtmlViewMessengerCommand(e, r, t);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=76B file=dil_sandbox/src/DILSandboxRuntime
// args: e, r, t
// locals: this
function {
  this = this;
  this.renderer.receiveDILHtmlViewMessengerEvent(e, r, t);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=219B file=dil_sandbox/src/DILSandboxRuntime
// locals: e, r, this
function {
  this = this;
  let e;
  if (!((0 === this.pendingFlushes.length))) goto L_2d;
  return;
  this.errors.length = 0;
  e = this.pendingFlushes.splice(0);
  let r;
  for (const r of e) {
    r();
  }
  return this.takeErrors();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=266B file=dil_sandbox/src/DILSandboxRuntime
// locals: this
// closure: t
function {
  this = this;
  this.errors.length = 0;
  this.context.dispose();
  this.delegate.dispose();
  return t(this.takeErrors(), this.flush());   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=625B file=dil_sandbox/src/DILSandboxRuntime
// args: r
// locals: this
// closure: e
function {
  this = this;
  this.errors.length = 0;
  this.delegate.beginBatch();
  this.context.render(r.appData, r.theme, r.activeBreakpoints, {constants: r.constants, isSourceStreaming: false, streamingAnimation: e.DILStreamingAnimation.Disabled});
  if (!(!this.context.didLastRenderFail())) goto L_22a;
  return this.delegate.finishBatch();   // tail call
  this.delegate.discardBatch();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=113B file=dil_sandbox/src/DILSandboxRuntime
// locals: this
function {
  this = this;
  if (!((0 !== this.errors.length))) goto L_70;
  return this.errors.splice(0);   // tail call
  return;
}

// fn t  args=2 vars=2 closure=0 cpool=0 bc=98B file=dil_sandbox/src/DILSandboxRuntime
// args: e, r
function {
  if (!((undefined === r))) goto L_7;
  return e;
  if (!((undefined === e))) goto L_32;
  return r.slice();
  // append([], 0, r)
  r;
  e.push.apply(e, []);
  return e;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=20 bc=278B file=dil_sandbox/src/DILSandboxRuntime
// args: require, module, exports
// locals: e, r, DILSandboxRuntime, <class_fields_init>, DILSandboxRuntime#1, t
function {
  t = function t;
  let DILSandboxRuntime#1;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSandboxRuntime = undefined;
  e = require("dil_renderer/src/DILRenderer");
  r = require("./DILRenderOperations");
  let DILSandboxRuntime;
  let <class_fields_init>;
  class DILSandboxRuntime extends undefined { ... }
  <proto:DILSandboxRuntime>.reportError = function <atom:0>;
  <proto:DILSandboxRuntime>.reportUnhandledError = function <atom:0>;
  <proto:DILSandboxRuntime>.scheduleFlush = function <atom:0>;
  <proto:DILSandboxRuntime>.scheduleRender = function <atom:0>;
  <proto:DILSandboxRuntime>.updateSource = function <atom:0>;
  <proto:DILSandboxRuntime>.setStateSnapshot = function <atom:0>;
  <proto:DILSandboxRuntime>.commitStateSnapshot = function <atom:0>;
  <proto:DILSandboxRuntime>.render = function <atom:0>;
  <proto:DILSandboxRuntime>.renderSourceUpdate = function <atom:0>;
  <proto:DILSandboxRuntime>.invokeFunction = function <atom:0>;
  <proto:DILSandboxRuntime>.takeRetiredCallbacks = function <atom:0>;
  <proto:DILSandboxRuntime>.registerHtmlViewMessengerTransport = function <atom:0>;
  <proto:DILSandboxRuntime>.receiveHtmlViewMessengerCommand = function <atom:0>;
  <proto:DILSandboxRuntime>.receiveHtmlViewMessengerEvent = function <atom:0>;
  <proto:DILSandboxRuntime>.flush = function <atom:0>;
  <proto:DILSandboxRuntime>.dispose = function <atom:0>;
  <proto:DILSandboxRuntime>.renderOnce = function <atom:0>;
  <proto:DILSandboxRuntime>.takeErrors = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxRuntime>;
  DILSandboxRuntime = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxRuntime#1 = function <atom:0>;
  exports.DILSandboxRuntime = DILSandboxRuntime#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxRuntime
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
