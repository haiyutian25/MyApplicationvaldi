// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=101B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e, t
// locals: s
// closure: this
function {
  let s;
  s = new Error(e);
  s.stack = t;
  this.bindings.reportUnhandledError(s);
  return;
}

// fn <atom:0>  args=4 vars=5 closure=4 cpool=1 bc=886B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e, t, s, i
// locals: this
// closure: <class_fields_init>, o, n, r
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.bindings = e;
  this.context = t;
  this.componentSource = i;
  this.componentReferenceProperty = Symbol("openai.valdi.dil.quickjsComponentReference");
  this.componentWrappersById = new Map();
  this.hostComponentFunctions = new WeakSet();
  this.guestCallableWrappersById = new Map();
  this.hostStateById = new Map();
  this.messengers = new Map();
  this.privateValueAttachments = [];
  this.stateRecordProperty = Symbol("openai.valdi.dil.quickjsStateRecord");
  this.nextStateId = 1;
  this.context.setEvaluationTimeout(o);
  this.context.setUnhandledErrorHandler(function <atom:0>);
  this.context.setValueToGlobalObject("__dilHostBridge", this.createHostBridge());
  this.context.setValueToGlobalObject("__dilComponentNames", s);
  this.context.setValueToGlobalObject("__dilAllowedGlobalNames", n.getDILSandboxAllowedGlobalNames());
  this.context.setValueToGlobalObject("__dilFixedTimeMs", e.fixedTimeMs);
  this.guestExports = this.context.evaluate(r.DIL_SANDBOX_QUICKJS_BOOTSTRAP_SOURCE);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// locals: this
function {
  this = this;
  this.guestExports.beginRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=7B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// closure: t, e
function {
  return t(e);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=2 bc=229B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.guestExports.evaluate;
  this.bindings.trace("DILRenderer.compileJS", function <atom:0>);
  this.bindings.trace("DILRenderer.evaluateJS", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=562B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// locals: e, this
function {
  this = this;
  let e;
  for (const e of this.privateValueAttachments) {
    Reflect.deleteProperty(e.owner, e.property);
  }
  this.privateValueAttachments.length = 0;
  this.context.dispose();
  this.componentWrappersById.clear();
  this.guestCallableWrappersById.clear();
  this.hostStateById.clear();
  this.messengers.clear();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// closure: t
function {
  return t;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=119B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e
// locals: t
// closure: this
function {
  let t;
  t = this.componentSource(e);
  return this.bindings.trace("DILRenderer.loadComponent", function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=107B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e
// closure: s, this
function {
  return s.createDILSandboxComponentGenUI(e, this.bindings.genUIFacade);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=107B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// closure: this
function {
  return this.createHostHooks(this.bindings.createWidgetRuntimeApi());   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=78B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: t
// closure: e, this
function {
  e.render(this.decodeGuestValue(t));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// closure: e
function {
  return e.useAppData(undefined);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: t
// closure: e
function {
  return e.useBreakpoint(t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// closure: e
function {
  return e.useConstants(undefined);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// closure: e
function {
  return e.useIsMobile();   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=69B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e, t, s
// locals: r
// closure: this
function {
  let r;
  r = this.requireStateRecord(e);
  r.hostValue = t;
  r.guestGetter = s;
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=109B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e, t, s
// locals: r
// closure: this
function {
  let r;
  r = this.requireStateRecord(e);
  r.hostValue = t;
  r.guestGetter = s;
  r.setter(t);
  return;
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=77B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e, t, s
// closure: this
function {
  return this.requireMessenger(e).commands[t](s);   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=77B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e, t, s
// closure: this
function {
  this.requireMessenger(e).emit(t, s);
  return;
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=76B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e, t, s
// closure: this
function {
  return this.requireMessenger(e).on(t, s);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// closure: e
function {
  return e.useTheme();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=14 bc=360B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// locals: e, this
// closure: s
function {
  this = this;
  let e;
  e = this.bindings.runtimeApiFacade;
  null;
  this.createHostHooks(e);
  return {componentSource: function <atom:0>, componentGenUI: function <atom:0>, componentHooks: function <atom:0>, modelGenUI: this.bindings.modelGenUIFacade, render: function <atom:0>, useAppData: function <atom:0>, useBreakpoint: function <atom:0>, useConstants: function <atom:0>, useIsMobile: function <atom:0>, rememberState: function <atom:0>, setState: function <atom:0>, sendMessengerCommand: function <atom:0>, emitMessengerEvent: function <atom:0>, onMessengerEvent: function <atom:0>, useTheme: function <atom:0>};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=40B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: t, s
// closure: e
function {
  e.useEffect(t, s);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// closure: e
function {
  return e.useId();   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: t, s
// closure: e
function {
  return e.useMemo(t, s);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: t, s
// closure: e
function {
  return e.useNow(t, s);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: t
// closure: e
function {
  return e.useRef(t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: t, s
// closure: e
function {
  return e.useSpeechSynthesizer(t, s);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=40B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: t, s
// closure: this, e
function {
  return this.useState(e, t, s);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=40B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: t, s
// closure: this, e
function {
  return this.useMessenger(e, t, s);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=8 bc=100B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e
// locals: this
function {
  this = this;
  return {useEffect: function <atom:0>, useId: function <atom:0>, useMemo: function <atom:0>, useNow: function <atom:0>, useRef: function <atom:0>, useSpeechSynthesizer: function <atom:0>, useState: function <atom:0>, useMessenger: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// closure: t
function {
  return t.getValue();   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=662B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e, t, s
// locals: r, n, o, this
function {
  this = this;
  let o;
  let n;
  let r;
  if (((undefined === undefined))) goto L_1c;
  const _it1 = undefined;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_47;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_10;
  // [栈深重同步 1 -> 0]
  o = this.getPrivateValue(n, this.stateRecordProperty);
  if (!((undefined === o))) goto L_1c8;
  this.nextStateId = <this.nextStateId_new>;
  o = {id: (this.nextStateId++), setter: n, guestGetter: t.getValue, hostValue: r};
  {id: (this.nextStateId++), setter: n, guestGetter: t.getValue, hostValue: r};
  this.attachPrivateValue(n, this.stateRecordProperty, o);
  goto L_239;
  // [栈深重同步 1 -> 0]
  if ((Object.is(o.hostValue, r))) goto L_239;
  o.hostValue = r;
  o.guestGetter = undefined;
  undefined;
  return {id: o.id, value: r, guestGetter: o.guestGetter};
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=145B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.hostStateById.get(e);
  if (!((undefined === t))) goto L_8d;
  throw new Error("Unknown QuickJS DIL state ".concat(e, "."));
  return t;
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=0 bc=274B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e, s, r
// locals: n, o, i, this
// closure: t
function {
  this = this;
  let i;
  let o;
  let n;
  if (!(r)) goto L_36;
  goto L_5c;
  // [栈深重同步 1 -> 0]
  n = e.useDILMessenger(s);
  o = t.getDILHtmlViewMessengerHost(n);
  if (!((undefined === o))) goto L_9c;
  throw new Error("DIL messenger is missing its host identity.");
  i = o.channelId;
  this.messengers.set(i, n);
  return i;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=145B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.messengers.get(e);
  if (!((undefined === t))) goto L_8d;
  throw new Error("Unknown QuickJS DIL messenger ".concat(e, "."));
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e
// closure: this
function {
  return this.decodeGuestValue(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e
// closure: this
function {
  return this.decodeGuestValue(e);   // tail call
}

// fn <atom:0>  args=1 vars=6 closure=5 cpool=2 bc=703B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: t
// locals: s, s#1, r, e, this
// closure: i, u, e, a, c
function {
  this = this;
  let r;
  let s;
  if (!(Array.isArray(t))) goto L_5c;
  return t.map(function <atom:0>);   // tail call
  if (!(("function" == typeof t))) goto L_8d;
  return this.wrapGuestCallable(t);   // tail call
  if (((null === t))) goto L_9c;
  if (!(("object" != typeof t))) goto L_a0;
  return t;
  s = t;
  if (!((s[i] === u))) goto L_1bc;
  let s#1;
  s#1 = t;
  return e.createDilElement(this.decodeElementType(s#1.type), this.decodeGuestValue(s#1.props), s#1.children.map(function <atom:0>));   // tail call
  if (!((s[i] === a))) goto L_1f0;
  return this.componentWrapper(t);   // tail call
  if (!((s[i] === c))) goto L_222;
  return e.DIL_FRAGMENT;
  r = Object.create(null);
  let e;
  for (const e of Object.keys(s)) {
    r[e] = this.decodeGuestValue(s[e]);
  }
  return r;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=323B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e
// locals: t, s, this
function {
  this = this;
  let s;
  let t;
  t = this.guestExports.functionId(e);
  s = this.guestCallableWrappersById.get(t);
  if (!((undefined === s))) goto L_13e;
  s = this.guestExports.wrapCallable(e);
  this.guestExports.wrapCallable(e);
  this.guestCallableWrappersById.set(t, s);
  return s;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=101B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: t
// locals: this
// closure: i, c, e
function {
  this = this;
  if (!(("string" == typeof t))) goto L_e;
  return t;
  if (!((t[i] === c))) goto L_3e;
  return e.DIL_FRAGMENT;
  return this.componentWrapper(t);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=189B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: t
// locals: s
// closure: e, this
function {
  let s;
  s = e.fn(this.encodeHostValue(t));
  return this.decodeGuestValue(this.guestExports.encodeRenderable(s));   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=1 bc=702B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e
// locals: t, s, this
function {
  this = this;
  let s;
  let t;
  if (!(this.hostComponentFunctions.has(e.fn))) goto L_95;
  return e.fn;
  t = this.guestExports.functionId(e.fn);
  s = this.componentWrappersById.get(t);
  if (((undefined !== s))) goto L_2b9;
  s = function <atom:0>;
  function <atom:0>;
  Object.defineProperty(s, "name", {value: this.guestExports.functionName(e.fn)});
  this.componentWrappersById.set(t, s);
  this.attachPrivateValue(s, this.componentReferenceProperty, e.fn);
  return s;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e
// closure: this
function {
  return this.encodeHostValue(e);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=426B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: t
// locals: s, e, this
// closure: e
function {
  this = this;
  let s;
  if (!(Array.isArray(t))) goto L_58;
  return t.map(function <atom:0>);   // tail call
  if (!(e.isDILRuntimeElement(t))) goto L_a6;
  return this.encodeHostElement(t);   // tail call
  if (!(("function" == typeof t))) goto L_ff;
  if (!((this.getPrivateValue(t, this.componentReferenceProperty) == null))) goto L_fe;
  this.getPrivateValue(t, this.componentReferenceProperty);
  return t;
  if (((null === t))) goto L_10e;
  if (!(("object" != typeof t))) goto L_112;
  return t;
  s = Object.create(null);
  let e;
  for (const e of Object.keys(t)) {
    s[e] = this.encodeHostValue(t[e]);
  }
  return s;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e
// closure: this
function {
  return this.encodeHostValue(e);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=1 bc=639B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: t
// locals: s, e, this
// closure: e, i, c, a, u
function {
  this = this;
  let s;
  s = undefined;
  if (!((t.type === e.DIL_FRAGMENT))) goto L_61;
  {}[i] = c;
  c;
  s = {};
  {};
  goto L_1d4;
  if (!(("function" == typeof t.type))) goto L_1ad;
  let e;
  e = this.getPrivateValue(t.type, this.componentReferenceProperty);
  if (!((undefined === e))) goto L_16d;
  this.hostComponentFunctions.add(t.type);
  {}[i] = a;
  a;
  if (!((e == null))) goto L_1a1;
  e;
  s = {fn: t.type};
  {fn: t.type};
  goto L_1d4;
  s = t.type;
  t.type;
  {}[i] = u;
  u;
  return {type: s, props: this.encodeHostValue(t.props), children: t.children.map(function <atom:0>)};
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=43B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e, t
function {
  return Reflect.get(e, t);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=144B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e, t, s
// locals: this
function {
  this = this;
  Object.defineProperty(e, t, {configurable: true, value: s});
  this.privateValueAttachments.push({owner: e, property: t});
  return;
}

// fn l  args=4 vars=4 closure=1 cpool=0 bc=12B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: e, t, s, r
// closure: DILSandboxQuickJSEvaluator
function {
  return new DILSandboxQuickJSEvaluator(e, t, s, r);
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=19 bc=353B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// args: require, module, exports
// locals: e, t, s, r, n, o, i, a, u, c, DILSandboxQuickJSEvaluator, <class_fields_init>, DILSandboxQuickJSEvaluator#1, l
function {
  l = function l;
  let DILSandboxQuickJSEvaluator#1;
  let c;
  let u;
  let a;
  let i;
  let o;
  let n;
  let r;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createDILQuickJSSourceEvaluator = undefined;
  e = require("dil_renderer/src/DILElement");
  t = require("dil_renderer/src/DILHtmlViewMessenger");
  s = require("./DILSandboxComponentGlobals");
  r = require("./DILSandboxQuickJSBootstrap.generated");
  n = require("./DILSandboxGlobals");
  o = 1000;
  i = "__openaiDILQuickJSWireKind";
  a = "component";
  u = "element";
  c = "fragment";
  let DILSandboxQuickJSEvaluator;
  let <class_fields_init>;
  class DILSandboxQuickJSEvaluator extends undefined { ... }
  <proto:DILSandboxQuickJSEvaluator>.beginRender = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.evaluate = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.dispose = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.createHostBridge = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.createHostHooks = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.useState = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.requireStateRecord = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.useMessenger = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.requireMessenger = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.decodeGuestValue = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.wrapGuestCallable = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.decodeElementType = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.componentWrapper = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.encodeHostValue = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.encodeHostElement = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.getPrivateValue = function <atom:0>;
  <proto:DILSandboxQuickJSEvaluator>.attachPrivateValue = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxQuickJSEvaluator>;
  DILSandboxQuickJSEvaluator = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxQuickJSEvaluator#1 = function <atom:0>;
  exports.createDILQuickJSSourceEvaluator = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxQuickJSEvaluator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
