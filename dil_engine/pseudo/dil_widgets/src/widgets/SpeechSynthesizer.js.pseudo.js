// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=dil_widgets/src/widgets/SpeechSynthesizer
// args: e
function {
  e.PlayRequested = "play_requested";
  e.StopRequested = "stop_requested";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=84B file=dil_widgets/src/widgets/SpeechSynthesizer
// args: e
// closure: this
function {
  if ((this.isDestroyed())) goto L_53;
  this.setState(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=215B file=dil_widgets/src/widgets/SpeechSynthesizer
// closure: this, d
function {
  if (!((this.state.status === d.SpeechSynthesisStatus.Idle))) goto L_b2;
  return this.playAction;
  return this.stopAction;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=1401B file=dil_widgets/src/widgets/SpeechSynthesizer
// args: e
// locals: e#1
// closure: v, b, this, S, d
function {
  if (!((e.type !== v))) goto L_a1;
  if (!((e.type !== b))) goto L_a1;
  if (!((this.context == null))) goto L_7b;
  this.context;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.dispatchActionPayload(e);
  if ((this.isDestroyed())) goto L_1c2;
  if ((("client" !== e.handler))) goto L_1c2;
  if (!((e.payload == null))) goto L_128;
  e.payload;
  goto L_149;
  if (((undefined.id !== this.ownerId))) goto L_1c2;
  if (!((undefined !== e.cause))) goto L_1c2;
  if (!(!("user" !== e.cause))) goto L_578;
  if (!((e.type === b))) goto L_2eb;
  let e#1;
  if (!((this.context == null))) goto L_222;
  this.context;
  goto L_24f;
  if (!((undefined.consumeUserInteraction == null))) goto L_24c;
  undefined.consumeUserInteraction;
  undefined;
  goto L_24f;
  // [栈深重同步 1 -> 2]
  e#1 = <?>.call(undefined);
  this.owner.stop();
  if (!(e#1)) goto L_2e9;
  this.notifyRequest(S.StopRequested);
  return;
  if (!(this.hasPresentHost)) goto L_577;
  if (!((true !== this.viewModel.disabled))) goto L_577;
  if (!(this.owner.state.available)) goto L_577;
  if (!((this.owner.state.status === d.SpeechSynthesisStatus.Idle))) goto L_577;
  if (!((this.context == null))) goto L_4b1;
  this.context;
  goto L_4de;
  if (!((undefined.consumeUserInteraction == null))) goto L_4db;
  undefined.consumeUserInteraction;
  undefined;
  goto L_4de;
  // [栈深重同步 1 -> 2]
  if (!(<?>.call(undefined))) goto L_577;
  this.owner.play();
  this.notifyRequest(S.PlayRequested);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=3 bc=406B file=dil_widgets/src/widgets/SpeechSynthesizer
// locals: this, this.active_func, new.target, arguments
// closure: d, v, b, S, <class_fields_init>, f
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.state = {status: d.SpeechSynthesisStatus.Idle, available: false, error: null};
  this.hasPresentHost = true;
  f = <f_new>;
  this.ownerId = ("speech-" + (f++));
  this.playAction = {type: v, handler: "client", payload: {id: this.ownerId}, loadingBehavior: "none"};
  this.stopAction = {type: b, handler: "client", payload: {id: this.ownerId}, loadingBehavior: "none"};
  this.handleState = function <atom:0>;
  this.getDefaultAction = function <atom:0>;
  this.dispatchAction = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=87B file=dil_widgets/src/widgets/SpeechSynthesizer
// args: e
// closure: this
function {
  this.hasPresentHost = e;
  if ((e)) goto L_56;
  this.owner.stop();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=557B file=dil_widgets/src/widgets/SpeechSynthesizer
// locals: this
// closure: d, u
function {
  this = this;
  null;
  this.context;
  this.controlContext = {dispatchActionPayload: this.dispatchAction};
  if (!((this.context == null))) goto L_aa;
  this.context;
  goto L_cb;
  this.owner = d.createSpeechSynthesizer(undefined.platformServices, u.NativeReferencesContext.fromComponent(this), this.handleState);
  this.owner.setSource(this.viewModel);
  if (!((this.context == null))) goto L_1d4;
  this.context;
  goto L_223;
  if (!((undefined.hostPresence == null))) goto L_1fd;
  undefined.hostPresence;
  goto L_223;
  this.hostPresenceSubscription = undefined.subscribe(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=429B file=dil_widgets/src/widgets/SpeechSynthesizer
// locals: this
// closure: d
function {
  this = this;
  this.owner.setSource(this.viewModel);
  if (!((true === this.viewModel.disabled))) goto L_1ac;
  if (!((this.owner.state.status !== d.SpeechSynthesisStatus.Idle))) goto L_1ac;
  this.owner.stop();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=152B file=dil_widgets/src/widgets/SpeechSynthesizer
// locals: this
function {
  this = this;
  if (!((this.hostPresenceSubscription == null))) goto L_2c;
  this.hostPresenceSubscription;
  goto L_50;
  undefined.unsubscribe();
  this.owner.dispose();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=dil_widgets/src/widgets/SpeechSynthesizer
// closure: this
function {
  this.renderControls();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=521B file=dil_widgets/src/widgets/SpeechSynthesizer
// locals: this
// closure: t, s, w, l, i
function {
  this = this;
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", w.root);
  t.setAttributes(this.baseViewAttributes);
  t.beginComponent(l.DILActionDispacherContextProvider, i, undefined, undefined);
  if ((t.hasContext())) goto L_18e;
  t.setContext(this.controlContext);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=645B file=dil_widgets/src/widgets/SpeechSynthesizer
// closure: t, y, n, this, d, p
function {
  t.beginComponent(y.Button, n, undefined, undefined);
  if (!((this.state.status === d.SpeechSynthesisStatus.Idle))) goto L_14f;
  goto L_197;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("label", p.default.speechSynthesizerStop());
  t.setViewModelProperty("disabled", (true === this.viewModel.disabled));
  t.setViewModelProperty("onClickAction", this.getDefaultAction);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=7 cpool=1 bc=958B file=dil_widgets/src/widgets/SpeechSynthesizer
// locals: e, this
// closure: t, y, n, d, p, o, w
function {
  this = this;
  if (!((undefined !== this.viewModel.renderControls))) goto L_2a8;
  let e;
  e = this.state.error;
  if (!((null === e))) goto L_172;
  goto L_250;
  // [栈深重同步 4 -> 3]
  if (!((undefined === e.errorCode))) goto L_1c7;
  goto L_1f1;
  // [栈深重同步 5 -> 4]
  null;
  {errorCode: e.errorCode};
  if (!((undefined === e.httpStatus))) goto L_221;
  goto L_24b;
  // [栈深重同步 5 -> 4]
  null;
  {httpStatus: e.httpStatus};
  this.viewModel.renderControls({status: this.state.status, available: this.state.available, error: {failureStage: e.failureStage}, play: this.playAction, stop: this.stopAction});
  return;
  t.beginRender(o, undefined);
  t.setAttributeStyle("style", w.defaultControls);
  if (!(this.state.available)) goto L_36f;
  function <atom:0>();
  this.renderStatus();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=0 bc=737B file=dil_widgets/src/widgets/SpeechSynthesizer
// locals: e, this
// closure: p, d, t, r, w
function {
  this = this;
  let e;
  if (!(this.state.available)) goto L_1b7;
  if (!((null !== this.state.error))) goto L_df;
  goto L_1ff;
  // [栈深重同步 1 -> 0]
  if (!((this.state.status === d.SpeechSynthesisStatus.Loading))) goto L_1b4;
  goto L_1ff;
  // [栈深重同步 1 -> 0]
  goto L_1ff;
  // [栈深重同步 1 -> 0]
  e = p.default.speechSynthesizerUnavailable();
  if (!((undefined !== e))) goto L_2e0;
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", w.status);
  t.setAttributeString("value", e);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=87B file=dil_widgets/src/widgets/SpeechSynthesizer
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_56;
  console.warn("SpeechSynthesizer onEventAction failed");
  return;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=1 bc=315B file=dil_widgets/src/widgets/SpeechSynthesizer
// args: t
// locals: s, t#1, i, i#1, this
// closure: e
function {
  this = this;
  let s;
  s = {event: {type: t}};
  try { // catch -> L_db
  let i;
  let t#1;
  if (!((this.viewModel.onEventAction == null))) goto L_6c;
  this.viewModel.onEventAction;
  this.viewModel;
  goto L_72;
  // [栈深重同步 1 -> 2]
  t#1 = <?>.call(undefined, s);
  if (!((null == t#1))) goto L_7d;
  return undefined;
  i = this.dispatchAction(t#1);
  if (!((i == null))) goto L_b2;
  i;
  goto L_d8;
  undefined.catch(function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i#1 = <?>;
  try { // catch -> L_13a
  if (!(e.isLoggingEnabled)) goto L_137;
  console.warn("SpeechSynthesizer onEventAction failed");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=26 closure=0 cpool=9 bc=1029B file=dil_widgets/src/widgets/SpeechSynthesizer
// args: require, module, exports
// locals: e, t, s, i, o, n, r, a, l, h, d, c, u, p, y, S, v, b, f, SpeechSynthesizer, <class_fields_init>, SpeechSynthesizer#1, w
function {
  let w;
  let SpeechSynthesizer#1;
  let f;
  let b;
  let v;
  let y;
  let p;
  let u;
  let c;
  let d;
  let h;
  let l;
  let a;
  let r;
  let n;
  let o;
  let i;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SpeechSynthesizer = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  s = t.makeNodePrototype("view", undefined, "38uuCLqP5x_KPElw");
  i = t.makeComponentPrototype(undefined, "XV0L8RnEfPZxuvLo");
  o = t.makeNodePrototype("layout", undefined, "QhKPBgSdIJWnRZpr");
  n = t.makeComponentPrototype(["size", "sm", "variant", "outline"], "YANfuNAZ-oJJ41iz");
  r = t.makeNodePrototype("label", undefined, "9QhVqAyOX5Z1w52e");
  a = require("dil_core/src/DILComponent");
  l = require("dil_core/src/DILRootComponent");
  h = require("dil_core/src/typography/DILDynamicFont");
  d = require("oai_platform_services/src/SpeechSynthesizer");
  c = require("valdi_core/src/Style");
  u = require("valdi_core/src/NativeReferences");
  p = require("../Strings");
  y = require("./Button");
  if ((S)) goto L_235;
  S = {};
  !function <atom:0>({});
  v = "speech_synthesizer.play";
  b = "speech_synthesizer.stop";
  f = 0;
  let SpeechSynthesizer;
  let <class_fields_init>;
  class SpeechSynthesizer extends a.DILStatefulComponent { ... }
  <proto:SpeechSynthesizer>.onCreate = function <atom:0>;
  <proto:SpeechSynthesizer>.onViewModelUpdate = function <atom:0>;
  <proto:SpeechSynthesizer>.onDestroy = function <atom:0>;
  <proto:SpeechSynthesizer>.onRender = function <atom:0>;
  <proto:SpeechSynthesizer>.renderControls = function <atom:0>;
  <proto:SpeechSynthesizer>.renderStatus = function <atom:0>;
  <proto:SpeechSynthesizer>.notifyRequest = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SpeechSynthesizer>;
  SpeechSynthesizer = function <atom:0>;
  // close_loc <class_fields_init>
  SpeechSynthesizer#1 = function <atom:0>;
  exports.SpeechSynthesizer = SpeechSynthesizer#1;
  SpeechSynthesizer#1.properties = ["style", "theme", "text", "language", "pronunciationHint", "playbackSpeed", "version", "source", "disabled", "onEventAction"];
  w = {root: new c.Style({flexDirection: "column", alignItems: "flex-start"}), defaultControls: new c.Style({flexDirection: "column", alignItems: "flex-start"}), status: new c.Style({font: h.dynamicSystemFontForSize(16), color: "color-text-secondary", numberOfLines: 0, accessibilityStateLiveRegion: true})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/SpeechSynthesizer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
