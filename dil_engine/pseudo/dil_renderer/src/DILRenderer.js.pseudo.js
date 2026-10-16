// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=dil_renderer/src/DILRenderer
// args: e
function {
  e.Disabled = 0;
  e[0] = "Disabled";
  e.Normal = 1;
  e[1] = "Normal";
  e.Snappy = 2;
  e[2] = "Snappy";
  e.Neutral = 3;
  e[3] = "Neutral";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=dil_renderer/src/DILRenderer
// args: e
function {
  e.ReportAndAbortRender = 0;
  e[0] = "ReportAndAbortRender";
  e.ReportAndSkipSubtree = 1;
  e[1] = "ReportAndSkipSubtree";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=dil_renderer/src/DILRenderer
// args: e
function {
  e.UnregisteredElement = "unregistered-element";
  e.MissingRetainedNode = "missing-retained-node";
  e.NodeIdentityMismatch = "node-identity-mismatch";
  return;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=210B file=dil_renderer/src/DILRenderer
// args: e, t
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, DILSkippedChildError
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("Skipped invalid DIL selected child (".concat(e, ")."));
  if (!(<class_fields_init>)) goto L_50;
  <class_fields_init>.call(this);
  new new.target("Skipped invalid DIL selected child (".concat(e, ")."));
  this.reason = e;
  this.parentNodeType = t;
  Object.setPrototypeOf(this, DILSkippedChildError.prototype);
  this.name = "DILSkippedChildError";
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=dil_renderer/src/DILRenderer
// args: e
function {
  e.RenderedNodes = 0;
  e[0] = "RenderedNodes";
  e.PrimitiveText = 1;
  e[1] = "PrimitiveText";
  e.ResolvedValues = 2;
  e[2] = "ResolvedValues";
  e.OpaqueTree = 3;
  e[3] = "OpaqueTree";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=dil_renderer/src/DILRenderer
// args: e
function {
  e.Element = 0;
  e[0] = "Element";
  e.Text = 1;
  e[1] = "Text";
  return;
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=41B file=dil_renderer/src/DILRenderer
// args: e, t, r
// closure: this
function {
  this.emitHtmlViewMessengerEvent(e, t, r);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_renderer/src/DILRenderer
// closure: this
function {
  return this.nextHtmlViewMessengerChannelId();   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=dil_renderer/src/DILRenderer
// args: e, t
// closure: this
function {
  return this.registerDILHtmlViewMessengerReceiver(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=dil_renderer/src/DILRenderer
// args: e, t
// closure: this
function {
  return this.registerDILHtmlViewMessengerTransport(e, t);   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=40B file=dil_renderer/src/DILRenderer
// args: e, t, r
// closure: this
function {
  return this.sendHtmlViewMessengerCommand(e, t, r);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=5 bc=98B file=dil_renderer/src/DILRenderer
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.options = e;
  this.runtimeHtmlViewMessenger = {emitHtmlViewMessengerEvent: function <atom:0>, nextHtmlViewMessengerChannelId: function <atom:0>, registerHtmlViewMessengerReceiver: function <atom:0>, registerHtmlViewMessengerTransport: function <atom:0>, sendHtmlViewMessengerCommand: function <atom:0>};
  return;
}

// fn <atom:0>  args=4 vars=4 closure=1 cpool=0 bc=127B file=dil_renderer/src/DILRenderer
// args: e, r, n, s
// closure: t
function {
  t.render(e, r, n, s);
  if ((t.didLastRenderFail())) goto L_7e;
  t.commitStateSnapshot();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=1 bc=122B file=dil_renderer/src/DILRenderer
// args: e
// locals: t, this
// closure: s
function {
  this = this;
  let t;
  t = this.createRenderContext(undefined, s.ReportAndAbortRender);
  t.updateSource(e);
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=85B file=dil_renderer/src/DILRenderer
// closure: s, e, n, t, r
function {
  if (!((n.constants == null))) goto L_4d;
  n.constants;
  s.render(e, {}, t, r);
  return;
}

// fn <atom:0>  args=4 vars=4 closure=2 cpool=1 bc=78B file=dil_renderer/src/DILRenderer
// args: e, t, r, n
// closure: s, this
function {
  this.options.trace("DILRenderer.render", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=dil_renderer/src/DILRenderer
// closure: s
function {
  s.commitStateSnapshot();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=dil_renderer/src/DILRenderer
// closure: s
function {
  return s.didLastRenderFail();   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_renderer/src/DILRenderer
// args: e, t
// closure: s
function {
  return s.setStateSnapshot(e, t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=dil_renderer/src/DILRenderer
// args: e
// closure: s
function {
  s.evaluate(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=dil_renderer/src/DILRenderer
// closure: s
function {
  s.clearRenderedRoot();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=dil_renderer/src/DILRenderer
// closure: s
function {
  s.dispose();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=7 bc=876B file=dil_renderer/src/DILRenderer
// args: r, n
// locals: s, this
// closure: e, t
function {
  this = this;
  let s;
  s = new e.DILRenderFunctionRuntime(this.options.elementsMetadata, this.options.delegate, this.options.errorReporter, n, this.runtimeHtmlViewMessenger, this.options.scheduler, this.options.trace, t.createDILDateConstructor(r), r, this.options.genUI, this.options.stateChangeHandler, this.options.speechSynthesis, this.options.dictation, this.options.sourceEvaluatorFactory);
  return {render: function <atom:0>, commitStateSnapshot: function <atom:0>, didLastRenderFail: function <atom:0>, setStateSnapshot: function <atom:0>, updateSource: function <atom:0>, clearRenderedRoot: function <atom:0>, dispose: function <atom:0>};
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=77B file=dil_renderer/src/DILRenderer
// args: e, t
// locals: this
function {
  this = this;
  return this.getHtmlViewMessengerState().registerTransport(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=77B file=dil_renderer/src/DILRenderer
// args: e, t
// locals: this
function {
  this = this;
  return this.getHtmlViewMessengerState().registerReceiver(e, t);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=146B file=dil_renderer/src/DILRenderer
// args: e, t, r
// locals: n, this
function {
  this = this;
  let n;
  n = this.htmlViewMessengerState;
  if (!((undefined === n))) goto L_68;
  throw new Error("Unknown DIL html-view messenger channel "".concat(e, """));
  return n.receiveCommand(e, t, r);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=84B file=dil_renderer/src/DILRenderer
// args: e, t, r
// locals: this
function {
  this = this;
  if (!((this.htmlViewMessengerState == null))) goto L_2c;
  this.htmlViewMessengerState;
  goto L_53;
  undefined.receiveEvent(e, t, r);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=dil_renderer/src/DILRenderer
// locals: this
function {
  this = this;
  return this.getHtmlViewMessengerState().nextChannelId();   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=78B file=dil_renderer/src/DILRenderer
// args: e, t, r
// locals: this
function {
  this = this;
  return this.getHtmlViewMessengerState().sendCommand(e, t, r);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=79B file=dil_renderer/src/DILRenderer
// args: e, t, r
// locals: this
function {
  this = this;
  this.getHtmlViewMessengerState().emitEvent(e, t, r);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=169B file=dil_renderer/src/DILRenderer
// locals: e, this
// closure: r
function {
  this = this;
  let e;
  if (!((this.htmlViewMessengerState == null))) goto L_97;
  this.htmlViewMessengerState;
  e = new r.DILRendererHtmlViewMessengerState(this.options.errorReporter);
  this.htmlViewMessengerState = e;
  return e;
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=17 bc=457B file=dil_renderer/src/DILRenderer
// args: require, module, exports
// locals: e, t, r, n, s, i, o, d, DILSkippedChildError, <class_fields_init>, DILSkippedChildError#1, DILRenderer, <class_fields_init>#1, DILRenderer#1
function {
  let DILRenderer#1;
  let DILSkippedChildError#1;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILStreamingAnimation = undefined;
  exports.DILRenderErrorMode = undefined;
  exports.DILSkippedChildReason = undefined;
  exports.DILSkippedChildError = undefined;
  exports.DILElementChildrenMode = undefined;
  exports.DILElementRenderNodeKind = undefined;
  exports.DILRenderer = undefined;
  e = require("./DILRenderFunctionRuntime");
  t = require("./DILSourceEvaluator");
  r = require("./DILRendererHtmlViewMessengerState");
  if ((n)) goto L_c0;
  n = {};
  exports.DILStreamingAnimation = {};
  !function <atom:0>({});
  if ((s)) goto L_d9;
  s = {};
  exports.DILRenderErrorMode = {};
  function <atom:0>({});
  if ((i)) goto L_f1;
  i = {};
  exports.DILSkippedChildReason = {};
  function <atom:0>({});
  let DILSkippedChildError;
  let <class_fields_init>;
  class DILSkippedChildError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:DILSkippedChildError>;
  DILSkippedChildError = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILSkippedChildError
  DILSkippedChildError#1 = function <atom:0>;
  exports.DILSkippedChildError = DILSkippedChildError#1;
  if ((o)) goto L_137;
  o = {};
  exports.DILElementChildrenMode = {};
  function <atom:0>({});
  if ((d)) goto L_14f;
  d = {};
  exports.DILElementRenderNodeKind = {};
  function <atom:0>({});
  let DILRenderer;
  let <class_fields_init>#1;
  class DILRenderer extends undefined { ... }
  <proto:DILRenderer>.createRenderFunction = function <atom:0>;
  <proto:DILRenderer>.createRenderContext = function <atom:0>;
  <proto:DILRenderer>.registerDILHtmlViewMessengerTransport = function <atom:0>;
  <proto:DILRenderer>.registerDILHtmlViewMessengerReceiver = function <atom:0>;
  <proto:DILRenderer>.receiveDILHtmlViewMessengerCommand = function <atom:0>;
  <proto:DILRenderer>.receiveDILHtmlViewMessengerEvent = function <atom:0>;
  <proto:DILRenderer>.nextHtmlViewMessengerChannelId = function <atom:0>;
  <proto:DILRenderer>.sendHtmlViewMessengerCommand = function <atom:0>;
  <proto:DILRenderer>.emitHtmlViewMessengerEvent = function <atom:0>;
  <proto:DILRenderer>.getHtmlViewMessengerState = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILRenderer>;
  DILRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILRenderer#1 = function <atom:0>;
  exports.DILRenderer = DILRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
