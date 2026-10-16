// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_core/src/DILRootComponent
// args: e
function {
  e.Initial = 0;
  e[0] = "Initial";
  e.External = 1;
  e[1] = "External";
  e.LocalAction = 2;
  e[2] = "LocalAction";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=43B file=dil_core/src/DILRootComponent
// locals: this
// closure: t
function {
  this = this;
  t.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_core/src/DILRootComponent
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
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
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=177B file=dil_core/src/DILRootComponent
// closure: this
function {
  if ((this.isDestroyed())) goto L_b0;
  if (!((this.context.registerOnEventHandler == null))) goto L_7f;
  this.context.registerOnEventHandler;
  this.context;
  goto L_a6;
  // [栈深重同步 2 -> 3]
  this.eventRegistration = <?>.call(undefined, this.onEvent);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=121B file=dil_core/src/DILRootComponent
// closure: this
function {
  if (!((this.context.userInteractionTracker == null))) goto L_4d;
  this.context.userInteractionTracker;
  goto L_71;
  if (!((undefined.consumeCurrent() == null))) goto L_78;
  undefined.consumeCurrent();
  return false;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=408B file=dil_core/src/DILRootComponent
// args: e
// locals: t, i
// closure: this, V, ie
function {
  let i;
  let t;
  t = e.opGenui;
  null;
  e;
  if ((("object" != typeof t))) goto L_74;
  if (((null === t))) goto L_74;
  if (!(Array.isArray(t))) goto L_79;
  goto L_7c;
  // [栈深重同步 3 -> 2]
  null;
  t;
  if (!(("live-activity" === this.context.presentationSurface))) goto L_d5;
  goto L_d6;
  // [栈深重同步 3 -> 2]
  if (!(!V.Device.isDesktop())) goto L_130;
  i = {opGenui: {surface: undefined}, __dilHost: {isMobile: ie()}};
  if (!((this.context.transformAppData == null))) goto L_189;
  this.context.transformAppData;
  this.context;
  goto L_18f;
  // [栈深重同步 1 -> 2]
  if (!((<?>.call(undefined, i) == null))) goto L_197;
  <?>.call(undefined, i);
  return i;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=168B file=dil_core/src/DILRootComponent
// args: e
// closure: this
function {
  if (!((this.state.isDarkMode !== e))) goto L_a7;
  this.celEnvironment.dark = e;
  this.setState({isDarkMode: e});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=dil_core/src/DILRootComponent
// closure: t
function {
  return t;
}

// fn <atom:0>  args=1 vars=12 closure=14 cpool=1 bc=2077B file=dil_core/src/DILRootComponent
// args: t
// locals: d, l, h, e, t#1, n, a, e#1, t#2, e#2, e#3
// closure: n, q, e, c, this, v, i, g, s, r, o, K, a, te
function {
  let h;
  let l;
  let d;
  if (!((t.completedAction == null))) goto L_33;
  t.completedAction;
  d = n;
  if (!((d.payload == null))) goto L_60;
  d.payload;
  goto L_81;
  l = undefined.success_state;
  if (!(q.isVersionAtLeast(247))) goto L_db;
  if (!(("client" !== e))) goto L_db;
  goto L_dc;
  // [栈深重同步 1 -> 0]
  h = undefined;
  if (!(q.isVersionAtLeast(247))) goto L_465;
  if (!(t.success)) goto L_465;
  if (!(c.isCELMap(h))) goto L_465;
  if (!(!this.isDestroyed())) goto L_465;
  let a;
  let n;
  let t#1;
  let e;
  e = v.getDILRootWidgetRenderer(this.getWidgetRenderer());
  if (!((undefined !== e))) goto L_21f;
  if (!((undefined !== i))) goto L_21f;
  goto L_220;
  // [栈深重同步 1 -> 0]
  t#1 = undefined;
  if (!((undefined === i))) goto L_23b;
  if (!((undefined !== e))) goto L_24b;
  goto L_24b;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== t#1))) goto L_24b;
  n = (t#1 === r);
  if (!((undefined === t#1))) goto L_27d;
  goto L_2e9;
  // [栈深重同步 1 -> 0]
  a = t#1.getCurrentWidgetState(this.celState.value);
  if (!(n)) goto L_465;
  if (!(c.isCELMap(a))) goto L_465;
  let t#2;
  let e#1;
  if (!(c.isCELMap(l))) goto L_356;
  goto L_357;
  // [栈深重同步 2 -> 1]
  null;
  {};
  null;
  h;
  e#1 = {};
  t#2 = this.reconcileWidgetState(a, e#1, o);
  if (!(this.mergeWidgetState(t#2, i))) goto L_464;
  this.reportRootStateChange(K.LocalAction);
  this.renderer.renderComponent(this, undefined);
  if (!(q.isVersionAtLeast(72))) goto L_63e;
  if (!(t.success)) goto L_63e;
  if (!(!this.isDestroyed())) goto L_63e;
  if (!((undefined === h))) goto L_63e;
  if (!(c.isCELMap(l))) goto L_63e;
  let e#2;
  e#2 = d.successStatePatches;
  if (!((undefined === e#2))) goto L_597;
  goto L_598;
  // [栈深重同步 4 -> 3]
  if (!(this.celState.applyUpdates(undefined, undefined, e#2))) goto L_63d;
  this.reportRootStateChange(K.LocalAction);
  this.renderer.renderComponent(this, undefined);
  if (!(q.isVersionAtLeast(72))) goto L_81b;
  if (!(t.success)) goto L_81b;
  if (!(("client" === e))) goto L_81b;
  if (!((true !== this.context.isModelWrittenDIL))) goto L_81b;
  if (!(!this.isDestroyed())) goto L_81b;
  if (!(this.hostPresence.value)) goto L_81b;
  if (!((undefined !== a))) goto L_81b;
  let e#3;
  if (!((d.payload == null))) goto L_79c;
  d.payload;
  goto L_7bd;
  e#3 = undefined.success_action;
  if (!(te(e#3))) goto L_81b;
  return this.dispatchClientSuccessAction(a, e#3).then(function <atom:0>);   // tail call
  return t;
}

// fn <atom:0>  args=2 vars=11 closure=8 cpool=1 bc=1100B file=dil_core/src/DILRootComponent
// args: e, t
// locals: i, n, e#1, i#1, o, s, r, a, d
// closure: q, c, this, v, g, K, te, ee
function {
  let n;
  let i;
  if (!(this.celState.applyUpdates(e.replaceState, e.updateState, e.patchState))) goto L_153;
  this.reportRootStateChange(K.LocalAction);
  this.renderer.renderComponent(this, undefined);
  if (!((this.context.localActionHandler == null))) goto L_1a1;
  this.context.localActionHandler;
  goto L_21f;
  i = undefined.handleLocalAction(e, {celScope: this.makeRootCELScope(), widgetRenderer: this.getWidgetRenderer()});
  if (!((undefined === i))) goto L_22a;
  goto L_24e;
  // [栈深重同步 1 -> 0]
  n = i.hostAction;
  if (!((undefined !== n))) goto L_44b;
  if (!(ee(n))) goto L_44b;
  let d;
  let a;
  let r;
  let s;
  let o;
  let i#1;
  let e#1;
  if (((undefined === undefined))) goto L_2ed;
  e#1 = <to_object>(undefined).handler;
  i#1 = <to_object>(undefined).stateScope;
  o = <to_object>(undefined).widgetId;
  <to_object>(undefined);
  goto L_2f3;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_27f;
  // [栈深重同步 1 -> 0]
  if (!(("client" === e#1))) goto L_301;
  goto L_34d;
  // [栈深重同步 1 -> 0]
  s = v.getDILRootWidgetRenderer(this.getWidgetRenderer());
  if (!((undefined !== s))) goto L_38a;
  if (!((undefined !== i#1))) goto L_38a;
  goto L_38b;
  // [栈深重同步 1 -> 0]
  r = undefined;
  a = this.context.actionsHandler;
  if (!((a == null))) goto L_3df;
  a;
  goto L_407;
  d = undefined.dispatchHostActionPayload(n, t);
  if (!((undefined !== d))) goto L_439;
  return d.then(function <atom:0>);   // tail call
  // close_loc a
  // close_loc r
  // close_loc s
  // close_loc o
  // close_loc i#1
  // close_loc e#1
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=353B file=dil_core/src/DILRootComponent
// args: t
// closure: this, e
function {
  if (!((undefined === this.context.reportError))) goto L_c5;
  if (!(e.isLoggingEnabled)) goto L_160;
  goto L_160;
  // [栈深重同步 1 -> 0]
  if ((this.isApplyingJsonPatchUpdate)) goto L_158;
  this.context.reportError(t, {isIncrementalUpdate: this.isRenderingAnimatedUpdate});
  return;
}

// fn <atom:0>  args=0 vars=11 closure=4 cpool=0 bc=2365B file=dil_core/src/DILRootComponent
// locals: t, t#1, i, n, e, t#2, n#1, o, e#1, t#3, s
// closure: e, this, q, Y
function {
  let s;
  let o;
  let n#1;
  let i;
  let t#1;
  if (!((undefined !== e.jsonPatch))) goto L_b8;
  if (!((this.hostMessageIsStreaming == null))) goto L_ad;
  this.hostMessageIsStreaming;
  this.lastPatchWasStreaming = (false !== this.viewModel.messageIsStreaming);
  (false !== this.viewModel.messageIsStreaming);
  if (!(q.isVersionAtLeast(124))) goto L_1b0;
  let t;
  t = e.hasPresentHost;
  if (!((undefined !== t))) goto L_1af;
  if (!((t !== this.hostPresence.value))) goto L_1af;
  this.hostPresence.next(t);
  t#1 = false;
  i = false;
  if (!(q.isVersionAtLeast(122))) goto L_36d;
  let n;
  n = e.clientActionsUpdate;
  if (!((undefined !== n))) goto L_36d;
  let e;
  i = true;
  true;
  if (!((undefined === this.context.getSupportedClientActions))) goto L_28b;
  goto L_2d3;
  // [栈深重同步 1 -> 0]
  e = this.context.getSupportedClientActions();
  t#1 = Y(this.celEnvironment.supportedClientActions, e);
  Y(this.celEnvironment.supportedClientActions, e);
  if (!(t#1)) goto L_36c;
  if (!((undefined === e))) goto L_359;
  goto L_362;
  // [栈深重同步 2 -> 1]
  // append([], 0, e)
  e;
  this.celEnvironment.supportedClientActions = [];
  [];
  if (!(q.isVersionAtLeast(74))) goto L_432;
  let t#2;
  t#2 = e.hostStateUpdate;
  if (!((undefined !== t#2))) goto L_431;
  i = true;
  true;
  this.hostMessageIsStreaming = t#2.messageIsStreaming;
  this.hostEntityActionsReady = t#2.entityActionsReady;
  t#2.entityActionsReady;
  n#1 = this.updateStreamingState();
  o = false;
  if (!((undefined !== e.jsonPatch))) goto L_4d2;
  this.applyJsonPatchEvent(e.jsonPatch);
  goto L_6a6;
  if (!(n#1)) goto L_6a6;
  if (!((undefined !== this.compileResult))) goto L_6a6;
  let t#3;
  let e#1;
  e#1 = this.captureRootWidgetState();
  t#3 = this.compiler.recompileAfterFailure(this.compileResult, {errorMode: this.viewModel.errorMode});
  if (!((t#3 !== this.compileResult))) goto L_6a5;
  this.updateCompileResult(t#3, e#1);
  if (!((1 === t#3.kind))) goto L_69e;
  this.restoreSandboxState(t#3);
  o = true;
  true;
  if (!((undefined !== e.copyContentRequest))) goto L_717;
  this.handleCopyContentRequest(e.copyContentRequest);
  s = this.getHostActionReadiness();
  if (!((undefined === e.jsonPatch))) goto L_8a0;
  if ((o)) goto L_873;
  if ((t#1)) goto L_873;
  if (!(i)) goto L_873;
  if (((this.renderedEntityActionsReady !== s.entityActionsReady))) goto L_873;
  if (((this.renderedWidgetVoiceSessionsReady !== s.widgetVoiceSessionsReady))) goto L_873;
  if (!((this.renderedWorkingStatus !== this.shouldShowWorkingStatus()))) goto L_8a0;
  this.renderIncrementalUpdate(false);
  if (!(q.isVersionAtLeast(74))) goto L_93c;
  if (!((undefined !== e.hostStateUpdate))) goto L_93c;
  this.elicitationHostUpdates.next();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=1 bc=45B file=dil_core/src/DILRootComponent
// args: e
// closure: this, q, Y, H
function {
  H.trace("DILRootComponent.onEvent", function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=170B file=dil_core/src/DILRootComponent
// args: e
// locals: t
// closure: this
function {
  let t;
  if (!(!this.renderer.isComponentAlive(this))) goto L_52;
  return;
  if ((e)) goto L_7e;
  t = this.isMessageStreaming();
  this.renderIncrementalUpdate(t);
  return;
}

// fn <atom:0>  args=3 vars=3 closure=3 cpool=0 bc=792B file=dil_core/src/DILRootComponent
// args: e, t, i
// closure: this, L, K
function {
  if (!((undefined !== i))) goto L_1a5;
  if (!((this.compileResult == null))) goto L_35;
  this.compileResult;
  goto L_56;
  if (((1 !== undefined.kind))) goto L_83;
  if (!((this.v2WidgetStateSnapshots[i] === e))) goto L_86;
  return;
  null;
  this.v2WidgetStateSnapshots;
  {}[i] = e;
  e;
  this.v2WidgetStateSnapshots = {};
  if (!((this.context.rootStateChangeHandler == null))) goto L_10f;
  this.context.rootStateChangeHandler;
  this.context;
  goto L_1a3;
  // [栈深重同步 1 -> 2]
  if (!((t === L.DILStateSnapshotChangeOrigin.LocalAction))) goto L_17d;
  goto L_19f;
  // [栈深重同步 4 -> 3]
  <?>.call(undefined, e, K.Initial, i);
  return;
  if (!((this.compileResult == null))) goto L_1d2;
  this.compileResult;
  goto L_1f3;
  if (!((1 === undefined.kind))) goto L_317;
  if (!((e !== this.v2StateSnapshot))) goto L_317;
  this.v2StateSnapshot = e;
  if (!((this.context.rootStateChangeHandler == null))) goto L_284;
  this.context.rootStateChangeHandler;
  this.context;
  goto L_317;
  // [栈深重同步 1 -> 2]
  if (!((t === L.DILStateSnapshotChangeOrigin.LocalAction))) goto L_2f2;
  goto L_314;
  // [栈深重同步 4 -> 3]
  return;
}

// fn <atom:0>  args=2 vars=5 closure=5 cpool=0 bc=753B file=dil_core/src/DILRootComponent
// args: e, t
// locals: i, n, o
// closure: this, v, g, c, K
function {
  let o;
  let n;
  let i;
  if (((undefined === this.context.reconcileWidgetState))) goto L_78;
  if (!((undefined === t.stateScope))) goto L_7b;
  return;
  i = v.getDILRootWidgetRenderer(this.getWidgetRenderer());
  if (!((undefined === i))) goto L_d2;
  goto L_11c;
  // [栈深重同步 1 -> 0]
  n = g.findDILWidgetStateScope(i, t.stateScope);
  if (!((n !== t))) goto L_125;
  return;
  if (!((this.embeddedStateBeforeCompile == null))) goto L_1fa;
  this.embeddedStateBeforeCompile;
  o = this.context.reconcileWidgetState(t.getCurrentWidgetState(this.celState.value), e, n.widgetId);
  if (!(c.isCELMap(o))) goto L_2f0;
  if (!(this.mergeWidgetState(o, t.stateScope))) goto L_2f0;
  this.reportRootStateChange(K.External);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=201B file=dil_core/src/DILRootComponent
// args: t, i
// closure: e, this
function {
  if (!(e.isLoggingEnabled)) goto L_74;
  console.warn(t, i.error_message);
  if (!((this.context.reportWarning == null))) goto L_c3;
  this.context.reportWarning;
  this.context;
  goto L_c8;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=17 cpool=11 bc=548B file=dil_core/src/DILRootComponent
// locals: this, this.active_func, new.target, arguments
// closure: V, ie, q, c, v, g, K, te, ee, e, Y, H, L, <class_fields_init>, y, j, F
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
  this.state = {isDarkMode: false};
  this.anchoredOverlayPresenter = new y.DILAnchoredOverlayController();
  this.hasCompiledDIL = false;
  this.hasComponentRefreshSchedule = false;
  this.hasParsedInitialState = false;
  this.hostPresence = new j.BehaviorSubject(true);
  this.elicitationHostUpdates = new F.Subject();
  this.hasStreamingEventHandler = false;
  this.messageWasStreaming = false;
  this.isApplyingJsonPatchUpdate = false;
  this.isRenderingAnimatedUpdate = false;
  this.lastPatchWasStreaming = false;
  this.renderedEntityActionsReady = false;
  this.renderedWidgetVoiceSessionsReady = false;
  this.renderedWorkingStatus = false;
  this.v2WidgetStateSnapshots = {};
  this.registerOnEventHandler = function <atom:0>;
  this.consumeUserInteraction = function <atom:0>;
  this.makeDILV2AppData = function <atom:0>;
  this.handleDarkModeChange = function <atom:0>;
  this.dispatchActionPayload = function <atom:0>;
  this.reportError = function <atom:0>;
  this.onEvent = function <atom:0>;
  this.onNeedsSandboxRerender = function <atom:0>;
  this.onSandboxStateChanged = function <atom:0>;
  this.reconcileEmbeddedInitialState = function <atom:0>;
  this.reportCELWarning = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=dil_core/src/DILRootComponent
// closure: e
function {
  return e.now();   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=10 cpool=1 bc=2094B file=dil_core/src/DILRootComponent
// locals: e, t, i, this
// closure: w, k, h, I, V, ie, l, v, X, d
function {
  this = this;
  let i;
  let t;
  let e;
  w.initializeDILColors();
  e = k.resolveDILTimer();
  this.celState = new h.CELState();
  t = this.viewModel.initialRenderState;
  if (!((undefined === t))) goto L_d7;
  goto L_ff;
  // [栈深重同步 1 -> 0]
  i = I.getExplicitDILRenderTheme(t);
  if (!((undefined === i))) goto L_153;
  goto L_15c;
  // [栈深重同步 3 -> 2]
  this.state = {isDarkMode: ("dark" === i)};
  this.celEnvironment = {dark: this.state.isDarkMode, mobile: ie(), now: function <atom:0>, presentationSurface: this.context.presentationSurface, state: this.celState, supportedClientActions: this.viewModel.supportedClientActions};
  this.celRuntime = l.createCELRuntimeForDIL(this.celEnvironment);
  if (!((this.context.copyContentProvider == null))) goto L_417;
  this.context.copyContentProvider;
  goto L_438;
  if (!((undefined === this.context.reconcileWidgetState))) goto L_517;
  goto L_539;
  // [栈深重同步 10 -> 9]
  this.compiler = new v.DILCompiler(this.context.widgetsMap, this.context.elementsMap, X(this.context.elementRenderObserver, undefined.elementRenderObserver), new d.CELExpressionResolver(this.celRuntime), this.reportError, {onHostAction: this.dispatchActionPayload, onInitialStateUpdate: this.reconcileEmbeddedInitialState, onActionError: this.context.reportActionError, onNeedsRerender: this.onNeedsSandboxRerender, onRenderStateChanged: this.context.onRenderStateChanged, onStateChanged: this.onSandboxStateChanged, transformAppData: this.makeDILV2AppData, speechSynthesis: this.context.speechSynthesis, dictation: this.context.dictation, hostPresence: this.hostPresence}, e.fixedTimeMs);
  this.updateAppearanceSubscription();
  this.hasStreamingEventHandler = (undefined !== this.context.registerOnEventHandler);
  if (!(this.hasStreamingEventHandler)) goto L_82d;
  this.renderer.onRenderComplete(this.registerOnEventHandler);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=395B file=dil_core/src/DILRootComponent
// locals: this
function {
  this = this;
  this.compiler.dispose();
  if (!((this.darkModeObserver == null))) goto L_73;
  this.darkModeObserver;
  goto L_97;
  undefined.cancel();
  this.darkModeObserver = undefined;
  if (!((this.eventRegistration == null))) goto L_cd;
  this.eventRegistration;
  goto L_f1;
  undefined.cancel();
  this.eventRegistration = undefined;
  this.hostPresence.complete();
  this.elicitationHostUpdates.complete();
  return;
}

// fn <atom:0>  args=0 vars=13 closure=1 cpool=0 bc=2784B file=dil_core/src/DILRootComponent
// locals: e, t, i, n, o, s, r, a, e#1, t#1, e#2, t#2, this
// closure: K
function {
  this = this;
  let a;
  let r;
  let s;
  let o;
  let n;
  let i;
  let t;
  let e;
  e = this.updateStreamingState();
  this.updateAppearanceSubscription();
  t = !this.hasCompiledDIL;
  if (!((this.compileResult == null))) goto L_b9;
  this.compileResult;
  goto L_da;
  i = undefined.kind;
  n = this.captureRootWidgetState();
  o = this.viewModel.dilJsonObject;
  s = (this.compiledErrorMode !== this.viewModel.errorMode);
  r = undefined;
  if (!((undefined !== o))) goto L_268;
  if (!(this.hasCompiledDIL)) goto L_215;
  if (!((this.compiledDilJsonObject === o))) goto L_215;
  if ((!s)) goto L_38e;
  r = this.compileDIL(o);
  this.compileDIL(o);
  this.compiledDilJson = undefined;
  this.compiledDilJsonObject = o;
  goto L_38e;
  // [栈深重同步 1 -> 0]
  if (!(this.hasCompiledDIL)) goto L_2ff;
  if (!((this.compiledDilJson === this.viewModel.dilJson))) goto L_2ff;
  if ((!s)) goto L_38e;
  r = this.compileDIL(undefined);
  this.compileDIL(undefined);
  this.compiledDilJson = this.viewModel.dilJson;
  this.compiledDilJsonObject = undefined;
  undefined;
  if (!((undefined === r))) goto L_4ba;
  if (!(e)) goto L_4ba;
  if (!((undefined !== this.compileResult))) goto L_4ba;
  r = this.compiler.recompileAfterFailure(this.compileResult, {errorMode: this.viewModel.errorMode});
  this.compiler.recompileAfterFailure(this.compileResult, {errorMode: this.viewModel.errorMode});
  if (!((r === this.compileResult))) goto L_4ba;
  r = undefined;
  undefined;
  if (!((undefined !== r))) goto L_54f;
  this.hasCompiledDIL = true;
  this.compiledErrorMode = this.viewModel.errorMode;
  this.updateCompileResult(r, n);
  a = this.parseViewModelInitialState();
  if (!((this.compileResult == null))) goto L_5a4;
  this.compileResult;
  goto L_5c5;
  if (!((1 !== undefined.kind))) goto L_7a9;
  if ((t)) goto L_5d7;
  if (!((1 === i))) goto L_5e8;
  this.v2StateSnapshot = undefined;
  undefined;
  if (!((this.compileResult == null))) goto L_615;
  this.compileResult;
  goto L_636;
  if (!((0 === undefined.kind))) goto L_7a7;
  if (!(t)) goto L_66c;
  goto L_7a7;
  // [栈深重同步 1 -> 0]
  if (!(a)) goto L_7a7;
  if (!((undefined !== this.parsedInitialState))) goto L_7a7;
  if (!(this.celState.applyUpdates(undefined, this.reconcileWidgetState(this.currentRootWidgetState(), this.parsedInitialState, undefined), undefined))) goto L_7a7;
  this.reportRootStateChange(K.External);
  return;
  if ((t)) goto L_7bc;
  if (((1 !== i))) goto L_7bc;
  if (!(a)) goto L_7f2;
  this.v2StateSnapshot = this.serializeParsedInitialState();
  this.serializeParsedInitialState();
  this.compileResult.setStateSnapshot(this.v2StateSnapshot);
  if (!((this.hydratedWidgetStateSnapshots !== this.viewModel.widgetStateSnapshots))) goto L_a2a;
  let e#1;
  if (!((this.viewModel.widgetStateSnapshots == null))) goto L_918;
  this.viewModel.widgetStateSnapshots;
  e#1 = {};
  let t#1;
  for (const t#1 of Object.keys(this.v2WidgetStateSnapshots)) {
    if (!((undefined === e#1[t#1]))) goto L_9c6;
    this.compileResult.setStateSnapshot(undefined, t#1);
  }
  this.v2WidgetStateSnapshots = e#1;
  this.hydratedWidgetStateSnapshots = this.viewModel.widgetStateSnapshots;
  let t#2;
  let e#2;
  const _it2 = Object.entries(this.v2WidgetStateSnapshots);
  goto L_ad9;
  const _it3 = <value(_it2)>;
  <done(_it3)>;
  e#2 = <value(_it3)>;
  <done(_it3)>;
  t#2 = <value(_it3)>;
  this.compileResult.setStateSnapshot(t#2, e#2);
  if (!(<done(_it2)>)) goto L_a7f;
  <value(_it2)>;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=121B file=dil_core/src/DILRootComponent
// args: e
function {
  if (!(("appData" !== e.p))) goto L_78;
  return !e.p.startsWith("appData/");
}

// fn <atom:0>  args=1 vars=9 closure=3 cpool=1 bc=1849B file=dil_core/src/DILRootComponent
// args: e
// locals: t, i, n, o, s, r, a, this
// closure: Q, Z, W
function {
  this = this;
  let r;
  let s;
  let o;
  let n;
  let i;
  let t;
  t = {json: this.viewModel.dilJson, parsed: e};
  i = {errorMode: this.viewModel.errorMode};
  n = this.compileResult;
  if (((undefined === n))) goto L_1ed;
  if (!(!this.isMessageStreaming())) goto L_23c;
  if (((true !== this.context.isModelWrittenDIL))) goto L_1ed;
  if (((1 !== n.kind))) goto L_1ed;
  if (!((this.compiledErrorMode !== this.viewModel.errorMode))) goto L_23c;
  return this.compiler.compile(t, i);   // tail call
  o = e;
  s = this.compiledDilJsonObject;
  if (!((undefined === o))) goto L_34c;
  try { // catch -> L_2f6
  o = JSON.parse(this.viewModel.dilJson);
  JSON.parse(this.viewModel.dilJson);
  t.parsed = o;
  <?>;
  goto L_34c;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_34b
  return this.compiler.compile(t, i);
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(Q(o))) goto L_39f;
  this.observeComponentRefreshSchedule(o.appData);
  if (!(!this.isMessageStreaming())) goto L_43c;
  if (!(!this.hasComponentRefreshSchedule)) goto L_43c;
  return this.compiler.compile(t, i);   // tail call
  if (!((undefined === s))) goto L_51f;
  if (!((undefined !== this.compiledDilJson))) goto L_51f;
  try { // catch -> L_4c9
  s = JSON.parse(this.compiledDilJson);
  JSON.parse(this.compiledDilJson);
  <?>;
  goto L_51f;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_51e
  return this.compiler.compile(t, i);
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (((undefined === s))) goto L_531;
  if (!(!Z(s, o))) goto L_580;
  return this.compiler.compile(t, i);   // tail call
  r = W.makeDILStreamingJSONPatch(s, o);
  if (!(!this.isMessageStreaming())) goto L_64e;
  if (!(r.some(function <atom:0>))) goto L_64e;
  return this.compiler.compile(t, i);   // tail call
  if (!((0 === r.length))) goto L_65a;
  return n;
  try { // catch -> L_6bd
  return this.compiler.incrementalCompile({json: undefined, parsed: r}, n, i);
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_738
  this.refreshCompiledInitialStateSnapshot(this.compiler.readRetainedInitialState(n));
  throw a;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=115B file=dil_core/src/DILRootComponent
// args: e
// closure: this, $
function {
  if (!((true === this.context.isModelWrittenDIL))) goto L_6f;
  goto L_70;
  // [栈深重同步 3 -> 2]
  return this.dispatchActionPayload(e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=1637B file=dil_core/src/DILRootComponent
// locals: this
// closure: $, a
function {
  this = this;
  if (!((true === this.context.isModelWrittenDIL))) goto L_ec;
  if (!((this.context.assetURLAuthorization == null))) goto L_ed;
  this.context.assetURLAuthorization;
  goto L_ed;
  // [栈深重同步 2 -> 1]
  if (!((this.context.userInteractionTracker == null))) goto L_467;
  this.context.userInteractionTracker;
  goto L_488;
  return {anchoredOverlayPresenter: this.anchoredOverlayPresenter, dispatchActionPayload: function <atom:0>, assetURLAuthorization: undefined, disableStreamingAnimations: this.context.disableStreamingAnimations, enhancedStreamingAnimationsEnabled: this.isEnhancedStreamingAnimationsEnabled(), sensitiveImageBlurEnabled: this.isSensitiveImageBlurEnabled(), clientDefinedWidgetAppBlockMessengerVersion: this.context.clientDefinedWidgetAppBlockMessengerVersion, clientDefinedWidgetViewFactory: this.context.clientDefinedWidgetViewFactory, nativeChartViewFactory: this.context.nativeChartViewFactory, nativePopoverPresentationEnabled: this.context.nativePopoverPresentationEnabled, nativePopoverMeasuredWidthEnabled: this.context.nativePopoverMeasuredWidthEnabled, platformServices: this.context.platformServices, hostPresence: this.hostPresence, elicitationShownHandler: this.context.elicitationShownHandler, elicitationHostUpdates: this.elicitationHostUpdates, reportWarning: this.context.reportWarning, runWithUserInteraction: undefined.run, observeInteraction: this.context.observeInteraction, consumeUserInteraction: this.consumeUserInteraction, textSelectionMenuActions: this.context.textSelectionMenuActions, textSelectionGroupAttributes: this.context.textSelectionGroupAttributes, textSelectionMenuActionHandler: this.context.textSelectionMenuActionHandler, useNativeLatexRenderer: this.context.useNativeLatexRenderer, webLatexRendererClass: this.context.webLatexRendererClass};
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=238B file=dil_core/src/DILRootComponent
// closure: this, t, E, n
function {
  this.renderContent();
  t.beginComponent(E.DILAnchoredOverlayComponent, n, undefined, undefined);
  t.setViewModelProperty("presenter", this.anchoredOverlayPresenter);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=6 cpool=1 bc=538B file=dil_core/src/DILRootComponent
// locals: e, this
// closure: t, E, n, m, DILActionDispacherContextProvider, i
function {
  this = this;
  let e;
  e = this.getHostActionReadiness();
  this.renderedEntityActionsReady = e.entityActionsReady;
  this.renderedWidgetVoiceSessionsReady = e.widgetVoiceSessionsReady;
  this.renderedWorkingStatus = this.shouldShowWorkingStatus();
  m.setDILCELWarningReporter(this.celRuntime, this.reportCELWarning);
  t.beginComponent(DILActionDispacherContextProvider, i, undefined, undefined);
  if ((t.hasContext())) goto L_1c7;
  t.setContext(this.makeActionDispatcherContext());
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=423B file=dil_core/src/DILRootComponent
// args: t
// closure: e, this, B
function {
  if (!((this.context.transformAppData == null))) goto L_70;
  this.context.transformAppData;
  this.context;
  goto L_97;
  // [栈深重同步 3 -> 4]
  if (!((<?>.call(undefined, e.appData) == null))) goto L_c0;
  <?>.call(undefined, e.appData);
  if (!((this.viewModel.activeBreakpoints == null))) goto L_130;
  this.viewModel.activeBreakpoints;
  e.renderFunction(e.appData, this.resolveDILTheme(), B, this.makeRenderOptions(t));
  if (!(this.renderedWorkingStatus)) goto L_1a6;
  this.renderWorkingStatus(t);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=1 bc=512B file=dil_core/src/DILRootComponent
// locals: e, this
// closure: B, t, f, o, P
function {
  this = this;
  let e;
  if (!(this.compiler.hasSandboxPermanentlyFailed())) goto L_c7;
  t.beginComponent(f.DILSandboxCrashView, o, undefined, undefined);
  t.endComponent();
  return;
  e = this.compileResult;
  if (!((undefined !== e))) goto L_1ff;
  if (!((0 !== e.kind))) goto L_16d;
  goto L_1ff;
  // [栈深重同步 1 -> 0]
  e.widgetRenderer.onRender(this.makeRootCELScope(), this.makeRenderState());
  return;
}

// fn <atom:0>  args=1 vars=4 closure=7 cpool=0 bc=885B file=dil_core/src/DILRootComponent
// args: e
// locals: i, n, this
// closure: P, _, t, s, M, r, O
function {
  this = this;
  let n;
  let i;
  i = P.beginDILV2AutoSpacingElement("text", {}, e);
  if (!(("dark" === this.resolveDILTheme()))) goto L_88;
  goto L_ac;
  // [栈深重同步 1 -> 0]
  n = _.OAI_LIGHT_COLOR_PALETTE;
  try { // catch -> L_344
  t.beginRender(s, "working-status");
  if (!((i == null))) goto L_116;
  i;
  goto L_137;
  t.setAttributeNumber("marginTop", undefined.margin);
  t.beginComponent(M.DILWorkingStatus, r, undefined, undefined);
  t.setViewModelProperty("color", n[O.OAIColor.TextSecondary]);
  t.setViewModelProperty("enabled", (true !== this.context.disableStreamingAnimations));
  t.setViewModelProperty("highlightColor", n[O.OAIColor.TextPrimary]);
  t.endComponent();
  t.endRender();
  <?>;
  // gosub (finally 块) 842
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 842
  throw <?>;
  P.endDILV2AutoSpacingElement(i);
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=519B file=dil_core/src/DILRootComponent
// args: e
// locals: this
function {
  this = this;
  if (!((this.compileResult == null))) goto L_2e;
  this.compileResult;
  goto L_4f;
  if (!((1 === undefined.kind))) goto L_97;
  goto L_98;
  // [栈深重同步 2 -> 1]
  if (!((this.compileResult == null))) goto L_c8;
  this.compileResult;
  goto L_e9;
  if (!((1 === undefined.kind))) goto L_131;
  goto L_132;
  // [栈深重同步 2 -> 1]
  return {clientDefinedWidgets: undefined, constants: undefined, isModelWrittenDIL: (true === this.context.isModelWrittenDIL), isSourceStreaming: this.isMessageStreaming(), renderState: e, streamingAnimation: this.resolveStreamingAnimation(), enhancedStreamingAnimationsEnabled: this.isEnhancedStreamingAnimationsEnabled()};
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=421B file=dil_core/src/DILRootComponent
// locals: e, this
function {
  this = this;
  let e;
  if (!((this.compileResult == null))) goto L_30;
  this.compileResult;
  goto L_51;
  if (!((0 === undefined.kind))) goto L_99;
  goto L_9a;
  // [栈深重同步 1 -> 0]
  e = undefined;
  if (!((undefined === e))) goto L_e6;
  return this.celRuntime.globalScope;
  null;
  e;
  null;
  this.celState.value;
  return this.celRuntime.globalScope.subscopeWithValues({state: {}});
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=83B file=dil_core/src/DILRootComponent
// locals: this
function {
  this = this;
  if (!(this.state.isDarkMode)) goto L_4d;
  return "dark";
  return "light";
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=547B file=dil_core/src/DILRootComponent
// locals: e, t, this
// closure: I, V
function {
  this = this;
  let t;
  let e;
  e = this.viewModel.initialRenderState;
  if (!((undefined === e))) goto L_56;
  goto L_7e;
  // [栈深重同步 1 -> 0]
  t = I.getExplicitDILRenderTheme(e);
  if (!((undefined !== t))) goto L_114;
  if (!((this.darkModeObserver == null))) goto L_b3;
  this.darkModeObserver;
  goto L_d7;
  undefined.cancel();
  this.darkModeObserver = undefined;
  goto L_222;
  // [栈深重同步 1 -> 0]
  if (!((undefined === this.darkModeObserver))) goto L_222;
  this.handleDarkModeChange(V.Device.isDarkMode());
  this.darkModeObserver = V.Device.observeDarkMode(this.handleDarkModeChange);
  V.Device.observeDarkMode(this.handleDarkModeChange);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=412B file=dil_core/src/DILRootComponent
// locals: e, this
// closure: u, D, R, A
function {
  this = this;
  let e;
  if (!((this.viewModel.initialRenderState == null))) goto L_75;
  this.viewModel.initialRenderState;
  e = new u.DILRenderState();
  return D.renderStateWithDILTransientRenderAbort(R.renderStateWithDILStreaming(A.renderStateWithDILWarningReporter(e, this.context.reportWarning), this.resolveStreamingAnimation(), this.isEnhancedStreamingAnimationsEnabled()), this.shouldAbortTransientRenderErrors());   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=669B file=dil_core/src/DILRootComponent
// locals: this
// closure: C
function {
  this = this;
  if (!((true !== this.context.disableStreamingAnimations))) goto L_257;
  if (!((this.hostMessageIsStreaming == null))) goto L_b9;
  this.hostMessageIsStreaming;
  if (((false !== this.viewModel.messageIsStreaming))) goto L_107;
  if (!(this.isRenderingAnimatedUpdate)) goto L_257;
  if (!(this.lastPatchWasStreaming)) goto L_257;
  if ((this.isMessageStreaming())) goto L_17e;
  if (!(this.hasStreamingEventHandler)) goto L_257;
  if (!(this.isRenderingAnimatedUpdate)) goto L_257;
  if (!((true === this.viewModel.snappyStreamingAnimations))) goto L_211;
  return C.DILStreamingAnimation.Snappy;
  return C.DILStreamingAnimation.Normal;
  return C.DILStreamingAnimation.Disabled;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=368B file=dil_core/src/DILRootComponent
// locals: this
// closure: e
function {
  this = this;
  if (!((undefined === this.enhancedStreamingAnimationsEnabled))) goto L_14d;
  try { // catch -> L_e0
  if (!((this.context.platformServices == null))) goto L_7e;
  this.context.platformServices;
  goto L_d3;
  if (!((undefined.experimentService == null))) goto L_a7;
  undefined.experimentService;
  goto L_d3;
  this.enhancedStreamingAnimationsEnabled = (true === undefined.isFeatureFlagEnabled({flagName: "1425786161"}));
  <?>;
  goto L_14d;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_14c
  if (!(e.isLoggingEnabled)) goto L_13c;
  console.warn("Unable to read the DIL streaming animations flag.");
  this.enhancedStreamingAnimationsEnabled = false;
  <?>;
  goto L_14d;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return this.enhancedStreamingAnimationsEnabled;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=368B file=dil_core/src/DILRootComponent
// locals: this
// closure: e
function {
  this = this;
  if (!((undefined === this.sensitiveImageBlurEnabled))) goto L_14d;
  try { // catch -> L_e0
  if (!((this.context.platformServices == null))) goto L_7e;
  this.context.platformServices;
  goto L_d3;
  if (!((undefined.experimentService == null))) goto L_a7;
  undefined.experimentService;
  goto L_d3;
  this.sensitiveImageBlurEnabled = (true === undefined.isFeatureFlagEnabled({flagName: "751809275"}));
  <?>;
  goto L_14d;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_14c
  if (!(e.isLoggingEnabled)) goto L_13c;
  console.warn("Unable to read the DIL sensitive image blur flag.");
  this.sensitiveImageBlurEnabled = false;
  <?>;
  goto L_14d;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return this.sensitiveImageBlurEnabled;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=111B file=dil_core/src/DILRootComponent
// locals: this
function {
  this = this;
  if (!((true === this.context.abortTransientIncrementalRenderErrors))) goto L_6e;
  return this.isRenderingAnimatedUpdate;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=332B file=dil_core/src/DILRootComponent
// args: t, i
// locals: n, this
// closure: J, e
function {
  this = this;
  try { // catch -> L_33
  (await t.dispatchHostActionPayload(i));
  <?>;
  goto L_14a;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_149
  if (!((undefined !== this.context.reportActionError))) goto L_ee;
  goto L_145;
  // [栈深重同步 1 -> 0]
  if (!(e.isLoggingEnabled)) goto L_145;
  console.warn("DIL client success action failed", n);
  <?>;
  goto L_14a;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=151B file=dil_core/src/DILRootComponent
// locals: this
function {
  this = this;
  if (!((this.compileResult == null))) goto L_2d;
  this.compileResult;
  goto L_4e;
  if (!((0 === undefined.kind))) goto L_95;
  return this.compileResult.widgetRenderer;
  return undefined;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=112B file=dil_core/src/DILRootComponent
// locals: this
function {
  this = this;
  if (!((this.hostMessageIsStreaming == null))) goto L_6f;
  this.hostMessageIsStreaming;
  return (true === this.viewModel.messageIsStreaming);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=273B file=dil_core/src/DILRootComponent
// locals: this
function {
  this = this;
  if (!(this.isMessageStreaming())) goto L_110;
  if (!((this.compileResult == null))) goto L_59;
  this.compileResult;
  goto L_7a;
  if (!((1 === undefined.kind))) goto L_110;
  if (!(this.compileResult.appDirectiveSequenceActive)) goto L_110;
  return !this.compiler.hasSandboxPermanentlyFailed();
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=106B file=dil_core/src/DILRootComponent
// locals: e, t, this
function {
  this = this;
  let t;
  let e;
  e = this.isMessageStreaming();
  if (!(this.messageWasStreaming)) goto L_58;
  t = !e;
  this.messageWasStreaming = e;
  return t;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=219B file=dil_core/src/DILRootComponent
// args: e
// locals: t, i, this
function {
  this = this;
  e.setStateSnapshot(this.v2StateSnapshot);
  let i;
  let t;
  const _it1 = Object.entries(this.v2WidgetStateSnapshots);
  goto L_d4;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  t = <value(_it2)>;
  <done(_it2)>;
  i = <value(_it2)>;
  e.setStateSnapshot(i, t);
  if (!(<done(_it1)>)) goto L_9e;
  <value(_it1)>;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=141B file=dil_core/src/DILRootComponent
// locals: this
function {
  this = this;
  if (!((this.context.getHostActionReadiness == null))) goto L_4e;
  this.context.getHostActionReadiness;
  this.context;
  goto L_51;
  // [栈深重同步 1 -> 2]
  if (!((<?>.call(undefined) == null))) goto L_8c;
  <?>.call(undefined);
  if (!((this.hostEntityActionsReady == null))) goto L_80;
  this.hostEntityActionsReady;
  return {entityActionsReady: false, widgetVoiceSessionsReady: false};
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=350B file=dil_core/src/DILRootComponent
// closure: this
function {
  if (!((this.context.copyContentProvider == null))) goto L_4a;
  this.context.copyContentProvider;
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((this.compileResult == null))) goto L_eb;
  this.compileResult;
  goto L_10c;
  if (!((1 === undefined.kind))) goto L_154;
  goto L_155;
  // [栈深重同步 4 -> 3]
  return <?>.captureCopyContent({celScope: this.makeRootCELScope(), widgetRenderer: this.getWidgetRenderer(), clientDefinedWidgets: undefined});
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_core/src/DILRootComponent
// closure: this
function {
  return this.isDestroyed();   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=81B file=dil_core/src/DILRootComponent
// args: e, t
// closure: this
function {
  if (!((this.context.reportWarning == null))) goto L_4b;
  this.context.reportWarning;
  this.context;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>, e, t);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=125B file=dil_core/src/DILRootComponent
// args: t
// closure: this, e
function {
  if (!((this.context.copyContentResponseHandler == null))) goto L_4b;
  this.context.copyContentResponseHandler;
  this.context;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>, {requestId: e.requestId, value: t});
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=4 bc=206B file=dil_core/src/DILRootComponent
// closure: this, e, b
function {
  if ((this.isDestroyed())) goto L_cd;
  b.resolveDILCopyContent(e, {captureSnapshot: function <atom:0>, hasNativeWidgetHost: (undefined !== this.context.clientDefinedWidgetViewFactory), isCancelled: function <atom:0>, reportWarning: function <atom:0>, complete: function <atom:0>});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=47B file=dil_core/src/DILRootComponent
// args: e
// locals: this
// closure: b, H
function {
  this = this;
  H.trace("DILRootComponent.copyContent", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=3 cpool=0 bc=1212B file=dil_core/src/DILRootComponent
// locals: t, i, n, o, e
// closure: this, x, e
function {
  let n;
  let i;
  let t;
  if (!((undefined === this.compileResult))) goto L_30;
  return;
  if (!((true === this.context.enableDebugEventsRecording))) goto L_12d;
  x.DILDebugEventsRecorder.get().recordJsonPatch(this.renderer.contextId, e);
  t = this.captureRootWidgetState();
  this.isApplyingJsonPatchUpdate = true;
  i = this.compileResult.renderFunction;
  n = undefined;
  try { // catch -> L_2bb
  n = this.compiler.incrementalCompile({json: e.patch, parsed: e.patchObject}, this.compileResult, {errorMode: this.viewModel.errorMode});
  this.compiler.incrementalCompile({json: e.patch, parsed: e.patchObject}, this.compileResult, {errorMode: this.viewModel.errorMode});
  <?>;
  // gosub (finally 块) 855
  undefined;
  goto L_364;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_351
  this.refreshCompiledInitialStateSnapshot(this.compiler.readRetainedInitialState(this.compileResult));
  throw o;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 855
  throw <?>;
  this.isApplyingJsonPatchUpdate = false;
  // ret (finally 块) 
  this.updateCompileResult(n, t);
  if (!((1 === n.kind))) goto L_494;
  let e;
  e = (n.renderFunction !== i);
  if (!(e)) goto L_417;
  this.restoreSandboxState(n);
  if ((e)) goto L_467;
  if (!((this.renderedWorkingStatus !== this.shouldShowWorkingStatus()))) goto L_492;
  this.renderIncrementalUpdate(false);
  return;
  this.renderIncrementalUpdate(true);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=47B file=dil_core/src/DILRootComponent
// args: e
// locals: this
// closure: x, H
function {
  this = this;
  H.trace("DILRootComponent.applyJsonPatch", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=73B file=dil_core/src/DILRootComponent
// closure: this
function {
  this.renderer.renderComponent(this, undefined);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=1 bc=380B file=dil_core/src/DILRootComponent
// args: e
// locals: t, e#1, this
// closure: C, z, G
function {
  this = this;
  this.isRenderingAnimatedUpdate = e;
  try { // catch -> L_168
  let t;
  t = function <atom:0>;
  if (!(e)) goto L_115;
  if (!((true !== this.context.disableStreamingAnimations))) goto L_115;
  let e#1;
  e#1 = (this.resolveStreamingAnimation() !== C.DILStreamingAnimation.Disabled);
  if (!(e#1)) goto L_109;
  goto L_10c;
  // [栈深重同步 3 -> 2]
  this.animate(G, t);
  goto L_15f;
  this.renderer.batchUpdates(t);
  <?>;
  // gosub (finally 块) 366
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 366
  throw <?>;
  this.isRenderingAnimatedUpdate = false;
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=740B file=dil_core/src/DILRootComponent
// locals: e, this
// closure: N, K
function {
  this = this;
  let e;
  if (!((this.compileResult == null))) goto L_30;
  this.compileResult;
  goto L_51;
  if (!((0 === undefined.kind))) goto L_99;
  goto L_9a;
  // [栈深重同步 1 -> 0]
  e = undefined;
  if (!((undefined === this.parsedInitialState))) goto L_162;
  if (!((e == null))) goto L_112;
  e;
  this.celState.applyUpdates(N, undefined, undefined);
  this.reportRootStateChange(K.Initial);
  return undefined;
  if (!((undefined === e))) goto L_221;
  this.celState.applyUpdates(this.parsedInitialState, undefined, undefined);
  this.reportRootStateChange(K.Initial);
  return undefined;
  null;
  e;
  null;
  this.parsedInitialState;
  this.celState.applyUpdates({}, undefined, undefined);
  this.reportRootStateChange(K.Initial);
  return undefined;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=191B file=dil_core/src/DILRootComponent
// args: e
// locals: this
function {
  this = this;
  if (!((this.context.rootStateChangeHandler == null))) goto L_4e;
  this.context.rootStateChangeHandler;
  this.context;
  goto L_be;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=115B file=dil_core/src/DILRootComponent
// locals: this
function {
  this = this;
  null;
  this.compiledInitialStateSnapshot;
  null;
  this.celState.value;
  return {};
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=384B file=dil_core/src/DILRootComponent
// locals: e, this
// closure: S, p
function {
  this = this;
  let e;
  this.embeddedStateBeforeCompile = undefined;
  if (((undefined === this.context.reconcileWidgetState))) goto L_a6;
  if (!((this.compileResult == null))) goto L_84;
  this.compileResult;
  goto L_a5;
  if (!((0 !== undefined.kind))) goto L_a9;
  return;
  e = S.copyDILWidgetState(this.currentRootWidgetState());
  if (!((e[p.DIL_LOCAL_STATE_ROOT_KEY] == null))) goto L_148;
  e[p.DIL_LOCAL_STATE_ROOT_KEY];
  {}[p.DIL_LOCAL_STATE_ROOT_KEY] = {};
  {};
  this.embeddedStateBeforeCompile = {};
  delete p.DIL_LOCAL_STATE_ROOT_KEY;
  return e;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=136B file=dil_core/src/DILRootComponent
// args: e, t, i
// locals: n, this
// closure: c
function {
  this = this;
  let n;
  if (!((this.context.reconcileWidgetState == null))) goto L_51;
  this.context.reconcileWidgetState;
  this.context;
  goto L_57;
  // [栈深重同步 1 -> 2]
  n = <?>.call(undefined, e, t, i);
  if (!(c.isCELMap(n))) goto L_86;
  return n;
  return t;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=453B file=dil_core/src/DILRootComponent
// args: e, t
// locals: i, n, this
// closure: p, S
function {
  this = this;
  let n;
  let i;
  null;
  e;
  i = {};
  if (!((undefined !== t))) goto L_3f;
  // [栈深重同步 2 -> 1]
  i;
  n = S.copyDILWidgetState(i);
  if (!((undefined === t))) goto L_ba;
  return this.celState.applyUpdates(undefined, n, undefined);
  null;
  p.readDILLocalScopedState(this.celState.value, t);
  null;
  n;
  return this.celState.applyUpdates(undefined, undefined, {op: "set", path: {key: p.DIL_LOCAL_STATE_ROOT_KEY, next: {key: t}}, value: {}});
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=269B file=dil_core/src/DILRootComponent
// args: e
// locals: this
function {
  this = this;
  if (!((1 === e.kind))) goto L_71;
  this.observeComponentRefreshSchedule(e.appData);
  if (!((this.context.trustedNetworkAppDataHandler == null))) goto L_be;
  this.context.trustedNetworkAppDataHandler;
  this.context;
  goto L_10c;
  // [栈深重同步 1 -> 2]
  if (!((1 === e.kind))) goto L_108;
  goto L_109;
  // [栈深重同步 3 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=49B file=dil_core/src/DILRootComponent
// args: e
// closure: Q
function {
  if (!(Q(e))) goto L_30;
  return ("boolean" == typeof e.enabled);
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=237B file=dil_core/src/DILRootComponent
// args: e
// locals: t, i, this
// closure: Q
function {
  this = this;
  let i;
  let t;
  if ((this.hasComponentRefreshSchedule)) goto L_32;
  if (!(!Q(e))) goto L_35;
  return;
  t = e.opGenui;
  if (!(Q(t))) goto L_85;
  goto L_86;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!(Q(i))) goto L_e3;
  this.hasComponentRefreshSchedule = Object.values(i).some(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=0 bc=792B file=dil_core/src/DILRootComponent
// args: e, t
// locals: i, this
// closure: S, c, K
function {
  this = this;
  if (!((this.compileResult == null))) goto L_2d;
  this.compileResult;
  goto L_4e;
  if (!((0 === undefined.kind))) goto L_29e;
  if (!((0 === e.kind))) goto L_29e;
  if (!((undefined !== e.initialState))) goto L_29e;
  if (!((undefined !== this.context.reconcileWidgetState))) goto L_29e;
  if (!(!S.areDILWidgetStateValuesEqual(this.compiledInitialStateSnapshot, e.initialState))) goto L_29e;
  let i;
  null;
  this.currentRootWidgetState();
  null;
  t;
  i = this.context.reconcileWidgetState({}, e.initialState, undefined);
  if (!(c.isCELMap(i))) goto L_29d;
  if (!(this.mergeWidgetState(i, undefined))) goto L_29d;
  this.reportRootStateChange(K.External);
  this.compileResult = e;
  this.refreshCompiledInitialStateSnapshot(e.initialState);
  this.reportTrustedNetworkAppData(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=143B file=dil_core/src/DILRootComponent
// args: e
// locals: this
// closure: S
function {
  this = this;
  if (((undefined === e))) goto L_4f;
  if (!((undefined === this.context.reconcileWidgetState))) goto L_54;
  goto L_7a;
  // [栈深重同步 2 -> 1]
  this.compiledInitialStateSnapshot = S.copyDILWidgetState(e);
  this.embeddedStateBeforeCompile = undefined;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=603B file=dil_core/src/DILRootComponent
// locals: e, this
function {
  this = this;
  if (!((undefined === this.viewModel.initialState))) goto L_95;
  let e;
  e = this.hasParsedInitialState;
  this.hasParsedInitialState = false;
  this.parsedInitialState = undefined;
  this.parsedInitialStateJson = undefined;
  return e;
  if ((!this.hasParsedInitialState)) goto L_122;
  if (!((this.parsedInitialStateJson !== this.viewModel.initialState))) goto L_25a;
  this.hasParsedInitialState = true;
  this.parsedInitialStateJson = this.viewModel.initialState;
  this.parsedInitialState = this.compiler.parseInitialState(this.viewModel.initialState, this.viewModel.errorMode);
  return true;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=118B file=dil_core/src/DILRootComponent
// locals: this
function {
  this = this;
  if (!((undefined === this.parsedInitialState))) goto L_2a;
  return undefined;
  return JSON.stringify(this.parsedInitialState);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_core/src/DILRootComponent
// args: e
// closure: t
function {
  return t.includes(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_core/src/DILRootComponent
// args: t
// closure: e
function {
  return e.includes(t);   // tail call
}

// fn Y  args=2 vars=2 closure=0 cpool=2 bc=101B file=dil_core/src/DILRootComponent
// args: e, t
function {
  if (((undefined === e))) goto L_a;
  if (!((undefined === t))) goto L_10;
  return (e !== t);
  if ((!e.every(function <atom:0>))) goto L_64;
  return !t.every(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=96B file=dil_core/src/DILRootComponent
// args: i
// closure: e, t
function {
  if (!((e.sourceGenerationChanged == null))) goto L_2b;
  e.sourceGenerationChanged;
  e;
  goto L_2f;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, i);
  if (!((t.sourceGenerationChanged == null))) goto L_5b;
  t.sourceGenerationChanged;
  t;
  goto L_5f;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=80B file=dil_core/src/DILRootComponent
// args: i, n
// closure: e, t
function {
  e.beginRender(i, n);
  t.beginRender(i, n);
  return;
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=0 bc=82B file=dil_core/src/DILRootComponent
// args: i, n, o
// closure: e, t
function {
  e.beginElement(i, n, o);
  t.beginElement(i, n, o);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=80B file=dil_core/src/DILRootComponent
// args: i, n
// closure: e, t
function {
  e.setProp(i, n);
  t.setProp(i, n);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=80B file=dil_core/src/DILRootComponent
// args: i, n
// closure: e, t
function {
  e.setChildren(i, n);
  t.setChildren(i, n);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=76B file=dil_core/src/DILRootComponent
// closure: e, t
function {
  e.endElement();
  t.endElement();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=78B file=dil_core/src/DILRootComponent
// args: i
// closure: e, t
function {
  e.endRender(i);
  t.endRender(i);
  return;
}

// fn X  args=2 vars=2 closure=0 cpool=7 bc=100B file=dil_core/src/DILRootComponent
// args: e, t
function {
  if (!((undefined === e))) goto L_7;
  return t;
  if (!((undefined === t))) goto L_e;
  return e;
  return {sourceGenerationChanged: function <atom:0>, beginRender: function <atom:0>, beginElement: function <atom:0>, setProp: function <atom:0>, setChildren: function <atom:0>, endElement: function <atom:0>, endRender: function <atom:0>};
}

// fn Q  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_core/src/DILRootComponent
// args: e
function {
  if (!((null !== e))) goto L_3e;
  if (!(("object" == typeof e))) goto L_3e;
  return !Array.isArray(e);
}

// fn Z  args=2 vars=6 closure=0 cpool=0 bc=443B file=dil_core/src/DILRootComponent
// args: e, t
// locals: i, n, o, s
function {
  let s;
  let o;
  let n;
  let i;
  if (((null === e))) goto L_8a;
  if (((null === t))) goto L_8a;
  if ((("object" != typeof e))) goto L_8a;
  if ((("object" != typeof t))) goto L_8a;
  if ((Array.isArray(e))) goto L_8a;
  if (!(Array.isArray(t))) goto L_8f;
  return false;
  i = e;
  n = t;
  if ((("string" == typeof i.code))) goto L_ed;
  o = ("string" == typeof i.compiledDil);
  if ((("string" == typeof n.code))) goto L_148;
  s = ("string" == typeof n.compiledDil);
  if ((o)) goto L_153;
  if (!(s)) goto L_160;
  if (!(o)) goto L_1ba;
  return s;
  if (!(("string" == typeof i.type))) goto L_1ba;
  return ("string" == typeof n.type);
}

// fn $  args=1 vars=7 closure=0 cpool=0 bc=331B file=dil_core/src/DILRootComponent
// args: e
// locals: t, i, n, o, e#1, t#1
function {
  let o;
  let n;
  let i;
  let t;
  null;
  e;
  t = {};
  delete "nativeWidgetResolutionId";
  delete "componentName";
  i = new Map([[e, t]]);
  n = e;
  o = t;
  if (!((undefined !== n.fallbackAction))) goto L_147;
  let t#1;
  let e#1;
  n = n.fallbackAction;
  n.fallbackAction;
  e#1 = i.get(n);
  if (!((undefined !== e#1))) goto L_e0;
  o.fallbackAction = e#1;
  goto L_147;
  null;
  n;
  t#1 = {};
  delete "nativeWidgetResolutionId";
  delete "componentName";
  o.fallbackAction = t#1;
  i.set(n, t#1);
  o = t#1;
  t#1;
  goto L_42;
  // [栈深重同步 4 -> 2]
  return t;
}

// fn ee  args=1 vars=1 closure=0 cpool=0 bc=157B file=dil_core/src/DILRootComponent
// args: e
function {
  if (((undefined !== e.type))) goto L_9c;
  if (((undefined !== e.handler))) goto L_9c;
  if (((undefined !== e.loadingBehavior))) goto L_9c;
  return (undefined !== e.payload);
}

// fn te  args=1 vars=1 closure=1 cpool=0 bc=329B file=dil_core/src/DILRootComponent
// args: e
// closure: c
function {
  if (!(c.isCELMap(e))) goto L_148;
  if (!(("client" === e.handler))) goto L_148;
  if (!(("string" == typeof e.type))) goto L_148;
  if (!((e.type.trim().length > 0))) goto L_148;
  if (((undefined === e.payload))) goto L_148;
  return c.isCELMap(e.payload);
}

// fn ie  args=0 vars=0 closure=1 cpool=0 bc=297B file=dil_core/src/DILRootComponent
// closure: V
function {
  if (!(V.Device.isWeb())) goto L_94;
  return !V.Device.isDesktop();
  if ((V.Device.isIOS())) goto L_128;
  return V.Device.isAndroid();
}

// fn <atom:0>  args=3 vars=66 closure=0 cpool=53 bc=1729B file=dil_core/src/DILRootComponent
// args: require, module, exports
// locals: e, t, i, n, o, s, r, a, d, c, l, h, p, S, m, v, g, u, R, I, D, A, C, L, y, E, b, x, f, M, W, k, w, P, O, _, U, T, q, V, H, J, j, F, N, B, G, z, K, DILActionDispacherContextProvider, <class_fields_init>, DILActionDispacherContextProvider#1, DILRootComponent, <class_fields_init>#1, DILRootComponent#1, Y, X, Q, Z, $, ee, te, ie
function {
  Y = function Y;
  X = function X;
  Q = function Q;
  Z = function Z;
  $ = function $;
  ee = function ee;
  te = function te;
  ie = function ie;
  let DILRootComponent#1;
  let DILActionDispacherContextProvider#1;
  let z;
  let G;
  let B;
  let N;
  let F;
  let j;
  let J;
  let H;
  let V;
  let q;
  let T;
  let U;
  let _;
  let O;
  let P;
  let w;
  let k;
  let W;
  let M;
  let f;
  let x;
  let b;
  let E;
  let y;
  let L;
  let C;
  let A;
  let D;
  let I;
  let R;
  let u;
  let g;
  let v;
  let m;
  let S;
  let p;
  let h;
  let l;
  let c;
  let d;
  let a;
  let r;
  let s;
  let o;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILRootStateChangeOrigin = undefined;
  exports.DILActionDispacherContextProvider = undefined;
  exports.DILRootComponent = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeComponentPrototype(undefined, "RQmLIlGGGCv7OeIe");
  n = t.makeComponentPrototype(["depth", 0], "Y0fudrzXK1iCM20u");
  o = t.makeComponentPrototype(undefined, "Uv4vvszT7o4EfT_9");
  s = t.makeNodePrototype("layout", undefined, "AEzyh4GjmmZV4R8A");
  r = t.makeComponentPrototype(undefined, "4vqlTXs3MIDMBMF0");
  a = require("./DILAssetURLAuthorization");
  d = require("cel/src/CELRuntime");
  c = require("cel/src/CELValue");
  l = require("dil_cel/src/createCELRuntimeForDIL");
  h = require("dil_cel/src/CELState");
  p = require("dil_cel/src/DILScopedState");
  S = require("dil_cel/src/DILWidgetState");
  m = require("dil_cel/src/utils/Warnings");
  v = require("dil_compiler/src/DILCompiler");
  g = require("dil_compiler/src/DILWidgetRendererUnwrap");
  u = require("dil_compiler/src/DILRenderState");
  R = require("dil_compiler/src/DILStreamingRenderState");
  I = require("dil_compiler/src/DILThemeRenderState");
  D = require("dil_compiler/src/DILTransientRenderAbort");
  A = require("dil_compiler/src/DILWarningRenderState");
  C = require("dil_renderer/src/DILRenderer");
  L = require("dil_renderer/src/DILStatePersistence");
  y = require("dil_core/src/DILAnchoredOverlay");
  E = require("dil_core/src/DILAnchoredOverlayComponent");
  b = require("dil_core/src/DILCopyContentResolver");
  x = require("dil_core/src/DILDebugEventsRecorder");
  f = require("dil_core/src/DILSandboxCrashView");
  M = require("./DILWorkingStatus");
  W = require("dil_core/src/DILStreamingJSONPatch");
  k = require("dil_core/src/DILTimer");
  w = require("dil_core/src/colors/DILColorsInit");
  P = require("dil_core/src/layout/DILV2AutoSpacing");
  O = require("oai_core/src/OAITokens");
  _ = require("oai_core/src/OAITheme");
  U = require("valdi_core/src/AnimationOptions");
  T = require("valdi_core/src/Component");
  q = require("valdi_core/src/CompilerIntrinsics");
  V = require("valdi_core/src/Device");
  H = require("valdi_core/src/utils/Trace");
  J = require("valdi_core/src/utils/ErrorUtils");
  j = require("valdi_rxjs/src/BehaviorSubject");
  F = require("valdi_rxjs/src/Subject");
  w.initializeDILColors();
  N = {};
  B = [];
  G = {duration: 0.22, appearanceBehavior: {enterAttributes: U.AnimationAppearance.FADE, exitAttributes: U.AnimationAppearance.FADE}};
  z = {duration: 0.22, appearanceBehavior: {enterAttributes: U.AnimationAppearance.FADE}};
  if ((K)) goto L_4e9;
  K = {};
  exports.DILRootStateChangeOrigin = {};
  !function <atom:0>({});
  let DILActionDispacherContextProvider;
  let <class_fields_init>;
  class DILActionDispacherContextProvider extends T.Component { ... }
  <proto:DILActionDispacherContextProvider>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILActionDispacherContextProvider>;
  DILActionDispacherContextProvider = function <atom:0>;
  // close_loc <class_fields_init>
  DILActionDispacherContextProvider#1 = function <atom:0>;
  exports.DILActionDispacherContextProvider = DILActionDispacherContextProvider#1;
  let DILRootComponent;
  let <class_fields_init>#1;
  class DILRootComponent extends T.StatefulComponent { ... }
  <proto:DILRootComponent>.onCreate = function <atom:0>;
  <proto:DILRootComponent>.onDestroy = function <atom:0>;
  <proto:DILRootComponent>.onViewModelUpdate = function <atom:0>;
  <proto:DILRootComponent>.compileDIL = function <atom:0>;
  <proto:DILRootComponent>.makeActionDispatcherContext = function <atom:0>;
  <proto:DILRootComponent>.onRender = function <atom:0>;
  <proto:DILRootComponent>.renderContent = function <atom:0>;
  <proto:DILRootComponent>.renderWorkingStatus = function <atom:0>;
  <proto:DILRootComponent>.makeRenderOptions = function <atom:0>;
  <proto:DILRootComponent>.makeRootCELScope = function <atom:0>;
  <proto:DILRootComponent>.resolveDILTheme = function <atom:0>;
  <proto:DILRootComponent>.updateAppearanceSubscription = function <atom:0>;
  <proto:DILRootComponent>.makeRenderState = function <atom:0>;
  <proto:DILRootComponent>.resolveStreamingAnimation = function <atom:0>;
  <proto:DILRootComponent>.isEnhancedStreamingAnimationsEnabled = function <atom:0>;
  <proto:DILRootComponent>.isSensitiveImageBlurEnabled = function <atom:0>;
  <proto:DILRootComponent>.shouldAbortTransientRenderErrors = function <atom:0>;
  <proto:DILRootComponent>.dispatchClientSuccessAction = function <atom:0>;
  <proto:DILRootComponent>.getWidgetRenderer = function <atom:0>;
  <proto:DILRootComponent>.isMessageStreaming = function <atom:0>;
  <proto:DILRootComponent>.shouldShowWorkingStatus = function <atom:0>;
  <proto:DILRootComponent>.updateStreamingState = function <atom:0>;
  <proto:DILRootComponent>.restoreSandboxState = function <atom:0>;
  <proto:DILRootComponent>.getHostActionReadiness = function <atom:0>;
  <proto:DILRootComponent>.handleCopyContentRequest = function <atom:0>;
  <proto:DILRootComponent>.applyJsonPatchEvent = function <atom:0>;
  <proto:DILRootComponent>.renderIncrementalUpdate = function <atom:0>;
  <proto:DILRootComponent>.replaceInitialState = function <atom:0>;
  <proto:DILRootComponent>.reportRootStateChange = function <atom:0>;
  <proto:DILRootComponent>.currentRootWidgetState = function <atom:0>;
  <proto:DILRootComponent>.captureRootWidgetState = function <atom:0>;
  <proto:DILRootComponent>.reconcileWidgetState = function <atom:0>;
  <proto:DILRootComponent>.mergeWidgetState = function <atom:0>;
  <proto:DILRootComponent>.reportTrustedNetworkAppData = function <atom:0>;
  <proto:DILRootComponent>.observeComponentRefreshSchedule = function <atom:0>;
  <proto:DILRootComponent>.updateCompileResult = function <atom:0>;
  <proto:DILRootComponent>.refreshCompiledInitialStateSnapshot = function <atom:0>;
  <proto:DILRootComponent>.parseViewModelInitialState = function <atom:0>;
  <proto:DILRootComponent>.serializeParsedInitialState = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILRootComponent>;
  DILRootComponent = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILRootComponent#1 = function <atom:0>;
  exports.DILRootComponent = DILRootComponent#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILRootComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
