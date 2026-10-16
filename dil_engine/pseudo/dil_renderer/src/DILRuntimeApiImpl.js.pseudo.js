// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=161B file=dil_renderer/src/DILRuntimeApiImpl
// args: s
// closure: t, e
function {
  if (!(Object.prototype.hasOwnProperty.call(t, s))) goto L_a0;
  return Object.is(e[s], t[s]);
}

// fn u  args=2 vars=3 closure=0 cpool=1 bc=188B file=dil_renderer/src/DILRuntimeApiImpl
// args: e, t
// locals: s
function {
  let s;
  if (!(Object.is(e, t))) goto L_33;
  return true;
  s = Object.keys(e);
  if (!((s.length === Object.keys(t).length))) goto L_bb;
  return s.every(function <atom:0>);
}

// fn <atom:0>  args=5 vars=6 closure=1 cpool=0 bc=153B file=dil_renderer/src/DILRuntimeApiImpl
// args: e, t, s, o, i
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.htmlViewMessengerRuntime = e;
  this.host = t;
  this.statePersistence = s;
  this.speechSynthesis = o;
  this.dictation = i;
  this.activeBreakpoints = [];
  this.appData = {};
  this.constants = {};
  this.theme = "light";
  this.dataVersion = 0;
  this.timeSubscriptions = new Map();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_renderer/src/DILRuntimeApiImpl
// locals: this
function {
  this = this;
  return this.rootValue;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=dil_renderer/src/DILRuntimeApiImpl
// locals: this
function {
  this = this;
  this.rootValue = undefined;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=dil_renderer/src/DILRuntimeApiImpl
// args: e, t
// closure: o
function {
  return (e === o[t]);
}

// fn <atom:0>  args=4 vars=6 closure=1 cpool=1 bc=538B file=dil_renderer/src/DILRuntimeApiImpl
// args: e, t, s, o
// locals: t#1, this
// closure: u
function {
  this = this;
  if (!((undefined === this.hostIsMobile))) goto L_ca;
  let t#1;
  t#1 = e.__dilHost;
  if (!((null !== t#1))) goto L_c1;
  if (!(("object" == typeof t#1))) goto L_c1;
  if (!(!Array.isArray(t#1))) goto L_c1;
  this.hostIsMobile = (true === t#1.isMobile);
  if (!(u(this.appData, e))) goto L_1bc;
  if (!(u(this.constants, t))) goto L_1bc;
  if (!((this.theme === s))) goto L_1bc;
  if (!((this.activeBreakpoints.length === o.length))) goto L_1bc;
  if ((this.activeBreakpoints.every(function <atom:0>))) goto L_219;
  this.dataVersion = (this.dataVersion ++);
  this.appData = e;
  this.constants = t;
  this.theme = s;
  this.activeBreakpoints = o;
  o;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=2 bc=476B file=dil_renderer/src/DILRuntimeApiImpl
// args: e
// locals: t, this
// closure: r
function {
  this = this;
  this.rootValue = e;
  if (!(r.isDILRuntimeElement(e))) goto L_1da;
  if (!(("function" == typeof e.type))) goto L_1da;
  if (!((e.props == null))) goto L_95;
  e.props;
  goto L_b6;
  if (!(("string" == typeof undefined.key))) goto L_1da;
  if (!(new RegExp("^body:\\d+$").test(e.props.key))) goto L_1da;
  let t;
  null;
  e.props;
  t = {};
  delete "key";
  this.rootValue = r.createDilElement(e.type, t, e.children);
  // [栈深重同步 1 -> 0]
  return e;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=77B file=dil_renderer/src/DILRuntimeApiImpl
// closure: e, this
function {
  if (!((undefined === e))) goto L_28;
  return this.appData;
  return e(this.appData);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=dil_renderer/src/DILRuntimeApiImpl
// args: e
// locals: this
function {
  this = this;
  return this.readData(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=77B file=dil_renderer/src/DILRuntimeApiImpl
// closure: e, this
function {
  if (!((undefined === e))) goto L_28;
  return this.constants;
  return e(this.constants);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=dil_renderer/src/DILRuntimeApiImpl
// args: e
// locals: this
function {
  this = this;
  return this.readData(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=dil_renderer/src/DILRuntimeApiImpl
// closure: e
function {
  return e;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=43B file=dil_renderer/src/DILRuntimeApiImpl
// args: e, t, s
// locals: this
function {
  this = this;
  return this.useMemo(function <atom:0>, t, s);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=0 bc=514B file=dil_renderer/src/DILRuntimeApiImpl
// args: t, s, o
// locals: i, r, n, e, this
// closure: e
function {
  this = this;
  let n;
  let r;
  let i;
  i = this.host.requireCurrentHookFrame("useEffect");
  r = this.readHook(i, 0, o);
  n = r.hook;
  if (!((undefined === n))) goto L_db;
  n = {kind: 0, cleanup: undefined, deps: undefined};
  {kind: 0, cleanup: undefined, deps: undefined};
  r.hook = n;
  n;
  if (((undefined === s))) goto L_158;
  if (((undefined === n.deps))) goto L_158;
  if (!(!e.areDependenciesEqual(n.deps, s))) goto L_201;
  let e;
  e = n.deps;
  n.deps = s;
  this.host.enqueuePendingEffect({frame: i, slot: r, hook: n, effect: t, previousDeps: e});
  return;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=262B file=dil_renderer/src/DILRuntimeApiImpl
// args: e
// locals: t, s, o, i, this
// closure: a
function {
  this = this;
  let i;
  let o;
  let s;
  let t;
  t = this.host.requireCurrentHookFrame("useId");
  s = this.readHook(t, 1, e);
  o = s.hook;
  if (!((undefined !== o))) goto L_d9;
  return o.value;
  a = <a_new>;
  i = ("dil-" + (a++));
  s.hook = {kind: 1, value: i};
  return i;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=46B file=dil_renderer/src/DILRuntimeApiImpl
// args: e, t
// locals: this
function {
  this = this;
  return this.useHtmlViewMessengerHook("useDILMessenger", e, t);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=46B file=dil_renderer/src/DILRuntimeApiImpl
// args: e, t
// locals: this
function {
  this = this;
  return this.useHtmlViewMessengerHook("useHtmlViewMessenger", e, t);   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=1 cpool=0 bc=448B file=dil_renderer/src/DILRuntimeApiImpl
// args: e, s, o
// locals: i, r, n, h, a, this
// closure: t
function {
  this = this;
  let a;
  let h;
  let n;
  let r;
  let i;
  i = this.host.requireCurrentHookFrame(e);
  r = this.readHook(i, 3, o);
  n = r.hook;
  if (!((undefined !== n))) goto L_122;
  n.messenger.updateOptions(s);
  return n.publicApi;
  h = new t.DILHtmlViewMessengerApiImpl(this.htmlViewMessengerRuntime, s);
  a = t.createDILHtmlViewMessengerApiFacade(h);
  r.hook = {kind: 3, messenger: h, publicApi: a};
  return a;
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=0 bc=373B file=dil_renderer/src/DILRuntimeApiImpl
// args: t, s, o
// locals: i, r, n, h, this
// closure: e
function {
  this = this;
  let h;
  let n;
  let r;
  let i;
  i = this.host.requireCurrentHookFrame("useMemo");
  r = this.readHook(i, 2, o);
  n = r.hook;
  if (!((undefined !== n))) goto L_125;
  if (!(e.areDependenciesEqual(n.deps, s))) goto L_125;
  return n.value;
  h = t();
  if (!((undefined === n))) goto L_153;
  r.hook = {kind: 2, value: h, deps: s};
  goto L_170;
  // [栈深重同步 1 -> 0]
  n.value = h;
  n.deps = s;
  s;
  return h;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=282B file=dil_renderer/src/DILRuntimeApiImpl
// locals: e
// closure: this, i
function {
  let e;
  if (!((this.timeSubscriptions.get(i) == null))) goto L_52;
  this.timeSubscriptions.get(i);
  e = (0 - 1);
  if (!((e <= 0))) goto L_a7;
  goto L_f3;
  // [栈深重同步 1 -> 0]
  this.timeSubscriptions.set(i, e);
  this.updateTimeInterval();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=246B file=dil_renderer/src/DILRuntimeApiImpl
// closure: this, i, o, r
function {
  if (!(o)) goto L_f5;
  if (!(r.isMounted)) goto L_f5;
  if (!((this.timeSubscriptions.get(i) == null))) goto L_c6;
  this.timeSubscriptions.get(i);
  this.timeSubscriptions.set(i, (0 + 1));
  this.updateTimeInterval();
  return function <atom:0>;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=312B file=dil_renderer/src/DILRuntimeApiImpl
// args: e, t, s
// locals: o, i, r, this
function {
  this = this;
  let r;
  let i;
  let o;
  if (((undefined === e))) goto L_13;
  o = e;
  if (!(("boolean" != typeof o))) goto L_2f;
  throw new TypeError("DIL.useNow expects a boolean");
  if (!((undefined === t))) goto L_39;
  goto L_3a;
  // [栈深重同步 1 -> 0]
  i = t;
  if ((("number" != typeof i))) goto L_80;
  if ((!Number.isFinite(i))) goto L_80;
  if (!((i < 50))) goto L_91;
  throw new TypeError("DIL.useNow expects intervalMs to be a finite number greater than or equal to 50");
  r = this.host.requireCurrentHookFrame("useNow");
  this.useEffect(function <atom:0>, [o, i], s);
  return Date.now();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=dil_renderer/src/DILRuntimeApiImpl
// closure: this
function {
  return this.host.scheduleRender();   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=1 bc=298B file=dil_renderer/src/DILRuntimeApiImpl
// locals: e, t, this
// closure: h, n
function {
  this = this;
  let e;
  e = undefined;
  let t;
  for (const t of this.timeSubscriptions.keys()) {
    if (((undefined === e))) goto L_64;
    if (!((t < e))) goto L_6f;
    e = t;
    t;
  }
  if (!((e !== this.timeIntervalMs))) goto L_129;
  if (!((undefined !== this.timeInterval))) goto L_fe;
  h(this.timeInterval);
  this.timeInterval = undefined;
  undefined;
  this.timeIntervalMs = e;
  if (!((undefined !== e))) goto L_129;
  this.timeInterval = n(function <atom:0>, e);
  n(function <atom:0>, e);
  return;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=256B file=dil_renderer/src/DILRuntimeApiImpl
// args: e, t
// locals: s, o, i, r, this
function {
  this = this;
  let r;
  let i;
  let o;
  let s;
  s = this.host.requireCurrentHookFrame("useRef");
  o = this.readHook(s, 4, t);
  i = o.hook;
  if (!((undefined !== i))) goto L_d9;
  return i.ref;
  r = {current: e};
  o.hook = {kind: 4, ref: r};
  return r;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=111B file=dil_renderer/src/DILRuntimeApiImpl
// closure: s, this
function {
  if (!(s.isMounted)) goto L_6e;
  this.host.scheduleRender();
  return;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=1 bc=432B file=dil_renderer/src/DILRuntimeApiImpl
// args: e, t
// locals: s, i, r, this
// closure: o
function {
  this = this;
  let r;
  let i;
  let s;
  s = this.host.requireCurrentHookFrame("useDictation");
  i = this.readHook(s, 7, t);
  r = i.hook;
  if (!((undefined === r))) goto L_11d;
  r = {kind: 7, owner: new o.DILDictationOwner(this.dictation, function <atom:0>)};
  {kind: 7, owner: new o.DILDictationOwner(this.dictation, function <atom:0>)};
  i.hook = r;
  r;
  r.owner.setOptions(e);
  return r.owner.snapshot();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=111B file=dil_renderer/src/DILRuntimeApiImpl
// closure: r, this
function {
  if (!(r.isMounted)) goto L_6e;
  this.host.scheduleRender();
  return;
}

// fn <atom:0>  args=3 vars=9 closure=2 cpool=1 bc=694B file=dil_renderer/src/DILRuntimeApiImpl
// args: e, t, o
// locals: r, n, h, a, u, this
// closure: i, s
function {
  this = this;
  let u;
  let a;
  let h;
  let n;
  let r;
  r = this.host.requireCurrentHookFrame("useSpeechSynthesizer");
  n = i.normalizeDILSpeechSource(e);
  h = JSON.stringify(n);
  a = this.readHook(r, 6, o);
  u = a.hook;
  if (!((undefined !== u))) goto L_157;
  if (((u.owner.sourceKey === h))) goto L_223;
  if (!((u == null))) goto L_169;
  u;
  goto L_1ae;
  undefined.owner.dispose();
  u = {kind: 6, owner: new s.DILSpeechOwner(h, n, this.speechSynthesis, function <atom:0>)};
  {kind: 6, owner: new s.DILSpeechOwner(h, n, this.speechSynthesis, function <atom:0>)};
  a.hook = u;
  u;
  u.owner.setLogging(t);
  return u.owner.snapshot();   // tail call
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=0 bc=490B file=dil_renderer/src/DILRuntimeApiImpl
// args: e, t, s
// locals: o, i, r, n, h, a, this
function {
  this = this;
  let a;
  let h;
  let n;
  let r;
  let i;
  let o;
  o = this.host.requireCurrentHookFrame("useState");
  i = o.hookIndex;
  r = this.readHook(o, 5, s);
  n = r.hook;
  if (!((undefined !== n))) goto L_12b;
  return [n.value, n.setter];
  if (!(("function" == typeof e))) goto L_139;
  goto L_13a;
  // [栈深重同步 1 -> 0]
  h = e;
  a = this.statePersistence.createStateHook(o, h, t, i);
  r.hook = a;
  return [a.value, a.setter];
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=dil_renderer/src/DILRuntimeApiImpl
// closure: this
function {
  return this.theme;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=83B file=dil_renderer/src/DILRuntimeApiImpl
// locals: e, this
function {
  this = this;
  let e;
  e = this.readData(function <atom:0>);
  return {isDark: ("dark" === e), isLight: ("light" === e), theme: e};
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=dil_renderer/src/DILRuntimeApiImpl
// closure: this, e
function {
  return this.activeBreakpoints.includes(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=dil_renderer/src/DILRuntimeApiImpl
// args: e
// locals: this
function {
  this = this;
  return this.readData(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=dil_renderer/src/DILRuntimeApiImpl
// locals: this
function {
  this = this;
  return (true === this.hostIsMobile);
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=92B file=dil_renderer/src/DILRuntimeApiImpl
// closure: t, this, s, e
function {
  if (!((t !== this.dataVersion))) goto L_57;
  s = e();
  e();
  t = this.dataVersion;
  this.dataVersion;
  return s;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=1 bc=227B file=dil_renderer/src/DILRuntimeApiImpl
// args: e
// locals: t, s, this
function {
  this = this;
  let s;
  let t;
  t = this.dataVersion;
  s = e();
  if (!((this.host.getCurrentHookFrame() == null))) goto L_7c;
  this.host.getCurrentHookFrame();
  goto L_de;
  if (!((undefined.dataDependencies == null))) goto L_a5;
  undefined.dataDependencies;
  goto L_de;
  undefined.push({value: s, getSnapshot: function <atom:0>});
  return s;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=0 bc=500B file=dil_renderer/src/DILRuntimeApiImpl
// args: e, t, s
// locals: o, i, this
function {
  this = this;
  let i;
  let o;
  o = e.hookIndex;
  i = e.hooks[o];
  e.hookIndex = (e.hookIndex ++);
  if (((undefined === i))) goto L_ad;
  if (!((i.owner !== s))) goto L_170;
  if (!((i == null))) goto L_be;
  i;
  goto L_df;
  if (!((undefined !== undefined.hook))) goto L_12f;
  this.host.disposeHook(i, true);
  i = {owner: s, hook: undefined};
  {owner: s, hook: undefined};
  e.hooks[o] = i;
  return i;
  if (!((undefined !== i.hook))) goto L_1f0;
  if (!((i.hook.kind !== t))) goto L_1f0;
  throw new Error("DIL hooks must be called in the same order on every render.");
  return i;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=26 bc=482B file=dil_renderer/src/DILRuntimeApiImpl
// args: require, module, exports
// locals: e, t, s, o, i, r, n, h, a, u, DILRuntimeApiImpl, <class_fields_init>, DILRuntimeApiImpl#1
function {
  u = function u;
  let DILRuntimeApiImpl#1;
  let a;
  let h;
  let n;
  let r;
  let i;
  let o;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILRuntimeApiImpl = undefined;
  e = require("./DILHookRuntime");
  t = require("./DILHtmlViewMessenger");
  s = require("./DILSpeechOwner");
  o = require("./DILDictationOwner");
  i = require("./DILSpeechSynthesis");
  r = require("./DILElement");
  n = setInterval.bind(globalThis);
  h = clearInterval.bind(globalThis);
  a = 0;
  let DILRuntimeApiImpl;
  let <class_fields_init>;
  class DILRuntimeApiImpl extends undefined { ... }
  <proto:DILRuntimeApiImpl>.renderedRootValue = function <atom:0>;
  <proto:DILRuntimeApiImpl>.clearRenderedRootValue = function <atom:0>;
  <proto:DILRuntimeApiImpl>.updateVariables = function <atom:0>;
  <proto:DILRuntimeApiImpl>.render = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useAppData = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useConstants = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useCallback = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useEffect = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useId = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useDILMessenger = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useHtmlViewMessenger = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useHtmlViewMessengerHook = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useMemo = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useNow = function <atom:0>;
  <proto:DILRuntimeApiImpl>.updateTimeInterval = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useRef = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useDictation = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useSpeechSynthesizer = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useState = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useTheme = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useBreakpoint = function <atom:0>;
  <proto:DILRuntimeApiImpl>.useIsMobile = function <atom:0>;
  <proto:DILRuntimeApiImpl>.readData = function <atom:0>;
  <proto:DILRuntimeApiImpl>.readHook = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILRuntimeApiImpl>;
  DILRuntimeApiImpl = function <atom:0>;
  // close_loc <class_fields_init>
  DILRuntimeApiImpl#1 = function <atom:0>;
  exports.DILRuntimeApiImpl = DILRuntimeApiImpl#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILRuntimeApiImpl
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
