// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=112B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// locals: t
// closure: T
function {
  let t;
  t = T.get(e);
  if (!((undefined === t))) goto L_6c;
  throw new Error("Unknown DIL sandbox context ".concat(e, "."));
  return t;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// closure: this
function {
  return this.dispatchHostAction(e, t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=90B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// closure: this
function {
  return this.post({kind: 11, contextId: this.contextId, command: e});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=dil_sandbox/src/DILSandboxWorkerCore
// closure: this
function {
  return this.activeInteractionId;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=90B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// closure: this
function {
  return this.post({kind: 12, contextId: this.contextId, command: e});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=dil_sandbox/src/DILSandboxWorkerCore
// closure: this
function {
  return this.activeInteractionId;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=dil_sandbox/src/DILSandboxWorkerCore
// closure: this
function {
  return this.requestRender(false);   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=40B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t, r
// closure: this
function {
  return this.stateSnapshotChanged(e, t, r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// closure: this
function {
  return this.reportError(e, 1);   // tail call
}

// fn <atom:0>  args=4 vars=6 closure=8 cpool=8 bc=553B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t, r, i
// locals: s, this
// closure: <class_fields_init>, h, n, u, l, c, x, F
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let s;
  this.contextId = e;
  this.disposed = false;
  this.dirty = false;
  this.dirtyAnimated = false;
  this.nextRenderSequence = 1;
  this.pendingRenderCallbacks = [];
  this.renderScheduled = false;
  this.sourceGeneration = 0;
  this.hostActionRequests = new h.DILSandboxHostActionRequests(e);
  s = n.createDILGenUIFacade(function <atom:0>);
  this.speech = new u.DILSandboxWorkerSpeech(function <atom:0>, function <atom:0>);
  this.dictation = new l.DILSandboxWorkerDictation(function <atom:0>, function <atom:0>);
  this.runtime = new c.DILSandboxRuntime({elementsMetadata: t.elementsMetadata, requestRender: function <atom:0>, trace: x, fixedTimeMs: r, errorMode: i, genUI: s, stateChangeHandler: function <atom:0>, speechSynthesis: this.speech, dictation: this.dictation, asyncErrorHandler: function <atom:0>, sourceEvaluatorFactory: F()});
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=114B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t, r
// locals: this
function {
  this = this;
  this.hostActionRequests.invalidate();
  this.applySource(e, t, r);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=530B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// locals: this
// closure: n
function {
  this = this;
  if (!((undefined !== e.source))) goto L_70;
  this.hostActionRequests.invalidate();
  n.freezeObjectGraph(e.appData, false);
  this.lastRenderInput = e;
  if (!((undefined !== e.source))) goto L_1ca;
  if (!((e.sourceGeneration == null))) goto L_17c;
  e.sourceGeneration;
  this.evaluateSource(e.source, this.sourceGeneration);
  this.renderSourceUpdate(e, e.animated);
  return;
  this.renderActive(e.animated);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=280B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// locals: this
function {
  this = this;
  if (!((this.pendingRenderCallbacks.length > 0))) goto L_bf;
  if (!((this.pendingRenderCallbacks[0].renderSequence <= e))) goto L_bf;
  this.pendingRenderCallbacks.shift();
  goto L_2;
  if (!((this.inFlightRenderSequence === e))) goto L_117;
  this.inFlightRenderSequence = undefined;
  this.scheduleFlush();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=349B file=dil_sandbox/src/DILSandboxWorkerCore
// locals: this
function {
  this = this;
  this.pendingRenderCallbacks.length = 0;
  this.hostActionRequests.invalidate();
  try { // catch -> L_149
  if (!((this.htmlViewMessengerState == null))) goto L_a4;
  this.htmlViewMessengerState;
  goto L_c8;
  undefined.dispose();
  this.htmlViewMessengerState = undefined;
  this.reportErrors(this.runtime.dispose());
  <?>;
  // gosub (finally 块) 335
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 335
  throw <?>;
  this.disposed = true;
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=75B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// locals: this
function {
  this = this;
  this.runtime.setStateSnapshot(e, t);
  return;
}

// fn <atom:0>  args=4 vars=7 closure=1 cpool=0 bc=352B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t, r, n
// locals: i, s, this
// closure: p
function {
  this = this;
  let i;
  i = undefined;
  this.activeInteractionId = r;
  try { // catch -> L_6f
  i = this.runtime.invokeFunction(e, t);
  this.runtime.invokeFunction(e, t);
  <?>;
  // gosub (finally 块) 249
  undefined;
  goto L_105;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_f3
  if (!((undefined === n))) goto L_7c;
  throw s;
  this.completeFunction(n, undefined, p.toDILSandboxError(s).message);
  // gosub (finally 块) 249
  return undefined;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 249
  throw <?>;
  this.activeInteractionId = undefined;
  // ret (finally 块) 
  if (!((undefined === n))) goto L_136;
  goto L_15f;
  // [栈深重同步 1 -> 0]
  this.observeFunctionResult(n, i);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=212B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// locals: r, this
// closure: I, p
function {
  this = this;
  try { // catch -> L_59
  this.completeFunction(e, I.copyDILSandboxCallbackValue((await t)), undefined);
  <?>;
  goto L_d2;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_d1
  this.completeFunction(e, undefined, p.toDILSandboxError(r).message);
  <?>;
  goto L_d2;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=143B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t, r
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_8e;
  this.post({kind: 14, contextId: this.contextId, completionId: e, result: t, error: r});
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=78B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// locals: this
function {
  this = this;
  this.getHtmlViewMessengerState().registerTransport(e, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=78B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// locals: this
function {
  this = this;
  this.getHtmlViewMessengerState().unregisterTransport(e, t);
  return;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=118B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t, r, n
// locals: this
function {
  this = this;
  this.observeAsyncResult(this.getHtmlViewMessengerState().receiveCommand(e, t, r, n), 1);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=79B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t, r
// locals: this
function {
  this = this;
  this.getHtmlViewMessengerState().receiveEvent(e, t, r);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=79B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t, r
// locals: this
function {
  this = this;
  this.getHtmlViewMessengerState().receiveCommandResponse(e, t, r);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=75B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// locals: this
function {
  this = this;
  this.dictation.receive(e, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=75B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// locals: this
function {
  this = this;
  this.speech.receive(e, t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=188B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_bb;
  if (((this.sourceGeneration !== e.sourceGeneration))) goto L_bb;
  this.hostActionRequests.complete(e);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=3 cpool=0 bc=716B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// locals: r, n, i, this
// closure: s, a, L
function {
  this = this;
  let i;
  let n;
  let r;
  r = s.isNonConsumingAction(e.type, e.handler);
  if (!(r)) goto L_7d;
  goto L_9f;
  // [栈深重同步 1 -> 0]
  n = this.activeInteractionId;
  if (!(!r)) goto L_e5;
  if (!((undefined === n))) goto L_e5;
  if (!(!a.isDILSandboxBoundServerAction(e))) goto L_e5;
  throw new Error("DIL sandbox host actions require a fresh user interaction.");
  if (!(this.disposed)) goto L_124;
  return L({status: "error", statusMessage: "The widget is no longer available."});   // tail call
  if (!(("server" === e.handler))) goto L_1dd;
  i = this.hostActionRequests.begin(this.sourceGeneration, ("genui.run_plugin_tool" === e.type));
  if (!((undefined === t))) goto L_297;
  goto L_29e;
  // [栈深重同步 4 -> 3]
  null;
  {componentScope: t};
  this.post({kind: 4, contextId: this.contextId, requestId: i.requestId, sourceGeneration: this.sourceGeneration, interactionId: n, action: e});
  return i.result;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// closure: this
function {
  return this.post(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// closure: this
function {
  return this.reportError(e, 1);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=2 bc=174B file=dil_sandbox/src/DILSandboxWorkerCore
// locals: e, this
// closure: m
function {
  this = this;
  let e;
  if (!((this.htmlViewMessengerState == null))) goto L_9c;
  this.htmlViewMessengerState;
  e = new m.DILSandboxWorkerHtmlViewMessengerState(this.contextId, this.runtime, function <atom:0>, function <atom:0>);
  this.htmlViewMessengerState = e;
  return e;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=131B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t, r
// locals: n, this
function {
  this = this;
  let n;
  this.evaluateSource(e, r);
  n = this.lastRenderInput;
  if (!((undefined !== n))) goto L_82;
  this.renderSourceUpdate(n, t);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=223B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  this.hostActionRequests.invalidate();
  this.sourceGeneration = t;
  r = this.runtime.updateSource(e);
  if (!((r == null))) goto L_ab;
  r;
  goto L_ad;
  this.sourceError = undefined[0];
  this.reportErrors(r);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=349B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  r = this.runtime.renderSourceUpdate(e);
  this.reportErrors(r.errors);
  if (!((undefined !== r.encoded))) goto L_15c;
  if (!((undefined === this.sourceError))) goto L_159;
  this.sendOperations(r.encoded, t, (undefined === r.errors));
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=510B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// locals: t, r, this
function {
  this = this;
  let r;
  let t;
  t = this.lastRenderInput;
  if (!((undefined === t))) goto L_33;
  return;
  if (!((undefined !== this.sourceError))) goto L_a3;
  this.reportError(this.sourceError, 1);
  r = this.runtime.render(t);
  this.reportErrors(r.errors);
  if (!((undefined !== r.encoded))) goto L_1fd;
  if (!((undefined === this.sourceError))) goto L_1fa;
  this.sendOperations(r.encoded, e, (undefined === r.errors));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=187B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// locals: this
function {
  this = this;
  this.dirty = true;
  if ((this.dirtyAnimated)) goto L_36;
  this.dirtyAnimated = e;
  if (!((undefined !== this.activeInteractionId))) goto L_94;
  this.pendingRenderInteractionId = this.activeInteractionId;
  this.activeInteractionId;
  this.scheduleFlush();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=259B file=dil_sandbox/src/DILSandboxWorkerCore
// closure: this
function {
  try { // catch -> L_ef
  if ((this.disposed)) goto L_e5;
  this.flushRender();
  this.reportErrors(this.runtime.flush());
  this.flushRender();
  <?>;
  // gosub (finally 块) 245
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 245
  throw <?>;
  this.renderScheduled = false;
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=97B file=dil_sandbox/src/DILSandboxWorkerCore
// locals: this
// closure: A
function {
  this = this;
  if ((this.renderScheduled)) goto L_60;
  if ((this.disposed)) goto L_60;
  this.renderScheduled = true;
  A(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=185B file=dil_sandbox/src/DILSandboxWorkerCore
// locals: e, this
function {
  this = this;
  if (!(this.dirty)) goto L_b8;
  if (!(!this.disposed)) goto L_b8;
  let e;
  e = this.dirtyAnimated;
  this.dirty = false;
  this.dirtyAnimated = false;
  this.renderActive(e);
  goto L_2;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=701B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t, r
// locals: n, i, s, this
function {
  this = this;
  let s;
  let i;
  let n;
  this.nextRenderSequence = <this.nextRenderSequence_new>;
  n = (this.nextRenderSequence++);
  this.inFlightRenderSequence = n;
  i = this.runtime.takeRetiredCallbacks();
  if (!((i.length > 0))) goto L_ee;
  this.pendingRenderCallbacks.push({renderSequence: n, callbacks: i});
  s = this.pendingRenderInteractionId;
  this.pendingRenderInteractionId = undefined;
  this.post({kind: 0, contextId: this.contextId, renderSequence: n, sourceGeneration: this.sourceGeneration, successful: r, animated: t, descriptor: e.descriptor, descriptorSize: e.descriptorSize, attachedValues: e.attachedValues, interactionScopes: e.interactionScopes, interactionId: s});
  this.runtime.commitStateSnapshot();
  this.scheduleFlush();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=79B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// locals: this
// closure: $
function {
  this = this;
  if ((this.disposed)) goto L_4e;
  $(this.contextId, e, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=40B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// closure: this, t
function {
  this.reportError(e, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=77B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// locals: this
// closure: L
function {
  this = this;
  if (((null === e))) goto L_4c;
  if (!(("object" != typeof e))) goto L_1d;
  if ((("function" != typeof e))) goto L_4c;
  L(e).catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=104B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t, r
// locals: this
function {
  this = this;
  this.post({kind: 3, contextId: this.contextId, stateSnapshot: e, origin: t, widgetId: r});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=64B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// locals: t, this
function {
  this = this;
  if (!((undefined !== e))) goto L_3f;
  let t;
  for (const t of e) {
    this.reportError(t, 1);
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// closure: M
function {
  M(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=43B file=dil_sandbox/src/DILSandboxWorkerCore
// closure: P, t, n
function {
  return P(t.messageId, n);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=10B file=dil_sandbox/src/DILSandboxWorkerCore
// closure: O, t, n
function {
  return O(t, n);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=2 bc=288B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// locals: t
// closure: P, n, O, x, S
function {
  let t;
  t = e.data;
  if (!((7 !== t.kind))) goto L_d0;
  if (!((8 === t.kind))) goto L_11f;
  goto L_11f;
  // [栈深重同步 1 -> 0]
  x(S.dilSandboxOperationTraceTag(t.kind), function <atom:0>);
  return;
}

// fn V  args=1 vars=2 closure=10 cpool=1 bc=257B file=dil_sandbox/src/DILSandboxWorkerCore
// args: r
// locals: n
// closure: P, O, x, S, E, d, t, e, C, g
function {
  let n;
  if (!((undefined !== E))) goto L_19;
  throw new Error("DIL sandbox worker is already started.");
  globalThis.RegExp = d.createSandboxRegExp(RegExp);
  n = new t.DILComponentSourceLoader(e.DIL_COMPONENT_LOADERS);
  E = r.initializeSourceEvaluator(n);
  r.initializeSourceEvaluator(n);
  C = r.recursivelyFreezeAllowedGlobals;
  r.recursivelyFreezeAllowedGlobals;
  g.onmessage = function <atom:0>;
  return;
}

// fn F  args=0 vars=0 closure=1 cpool=0 bc=26B file=dil_sandbox/src/DILSandboxWorkerCore
// closure: E
function {
  if (!((undefined === E))) goto L_16;
  throw new Error("DIL sandbox worker has not been started.");
  return E;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=38B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// closure: N, t
function {
  N(e.data, t);
  return;
}

// fn O  args=2 vars=3 closure=6 cpool=1 bc=215B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// locals: r
// closure: N, M, o, g, C, j
function {
  let r;
  r = e.port;
  M = r.postMessage.bind(r);
  r.postMessage.bind(r);
  o.hardenSandboxGlobal(g, C);
  r.onmessage = function <atom:0>;
  j(e.messageId);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=38B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// closure: N, t
function {
  N(e.data, t);
  return;
}

// fn P  args=2 vars=2 closure=4 cpool=1 bc=59B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// closure: N, g, o, j
function {
  g.onmessage = function <atom:0>;
  o.lockDownSandboxGlobal(g);
  j(e);
  return;
}

// fn G  args=1 vars=3 closure=2 cpool=0 bc=1135B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// locals: t, r
// closure: T, $
function {
  let t;
  t = T.get(e.contextId);
  if (!((undefined !== t))) goto L_46e;
  try { // catch -> L_43e
  if (!((e.kind === 0))) goto L_f2;
  t.registerHtmlViewMessengerTransport(e.channelId, e.registrationId);
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((<?> === 1))) goto L_166;
  t.unregisterHtmlViewMessengerTransport(e.channelId, e.registrationId);
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((<?> === 2))) goto L_221;
  t.receiveHtmlViewMessengerCommand(e.requestId, e.channelId, e.type, e.data);
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((<?> === 3))) goto L_2ba;
  t.receiveHtmlViewMessengerEvent(e.channelId, e.type, e.data);
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((<?> === 4))) goto L_353;
  t.receiveHtmlViewMessengerCommandResponse(e.requestId, e.result, e.error);
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((<?> === 6))) goto L_3c7;
  t.receiveDictationEvent(e.id, e.event);
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((<?> === 5))) goto L_43b;
  t.receiveSpeechState(e.id, e.state);
  return undefined;
  // [栈深重同步 0 -> 1]
  <?>;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_46d
  $(e.contextId, r, 1);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=6B file=dil_sandbox/src/DILSandboxWorkerCore
// closure: W, e
function {
  return W(e, undefined);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=76B file=dil_sandbox/src/DILSandboxWorkerCore
// args: t
// closure: W, e, p
function {
  return W(e, p.toDILSandboxError(t).message);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=7B file=dil_sandbox/src/DILSandboxWorkerCore
// closure: _, r
function {
  return _(r);   // tail call
}

// fn N  args=2 vars=10 closure=13 cpool=3 bc=1073B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// locals: r, n, e#1, t#1, n#1, i, s, e#2
// closure: W, p, _, M, v, f, w, y, x, S, i, $, j
function {
  let n;
  let r;
  r = e.message;
  if (!(("requiredComponents" in r))) goto L_a7;
  if (!((undefined !== r.requiredComponents))) goto L_a7;
  goto L_a8;
  // [栈深重同步 1 -> 0]
  n = undefined;
  if (!((undefined !== n))) goto L_145;
  M({kind: 13, contextId: r.contextId, messageId: e.messageId, loading: true});
  n.then(function <atom:0>, function <atom:0>);
  return undefined; // async
  try { // catch -> L_390
  if (!((3 === r.kind))) goto L_2a3;
  let t#1;
  let e#1;
  e#1 = r.appData;
  t#1 = r.constants;
  if ((("string" == typeof e#1))) goto L_1dd;
  if (!(("string" == typeof t#1))) goto L_2a3;
  let i;
  let n#1;
  if ((("string" != typeof e#1))) goto L_200;
  if (!(("string" != typeof t#1))) goto L_211;
  throw new Error("DIL sandbox render app data and constants must both be serialized.");
  n#1 = v(e#1);
  if (((null === n#1))) goto L_238;
  if ((("object" != typeof n#1))) goto L_238;
  if (!(f(n#1))) goto L_249;
  throw new Error("DIL sandbox render app data must be a JSON object.");
  i = v(t#1);
  if (((null === i))) goto L_270;
  if ((("object" != typeof i))) goto L_270;
  if (!(f(i))) goto L_281;
  throw new Error("DIL sandbox render constants must be a JSON object.");
  r = w(y(null), r, {appData: n#1, constants: i});
  w(y(null), r, {appData: n#1, constants: i});
  (await x(S.dilSandboxOperationTraceTag(r.kind), function <atom:0>));
  if (!((11 === r.kind))) goto L_384;
  M({kind: 10, contextId: 0, traceCollectionId: r.traceCollectionId, traces: i.collectPolyfilledTraces()});
  <?>;
  // gosub (finally 块) 1031
  undefined;
  goto L_42f;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_401
  let e#2;
  if (!((6 === r.kind))) goto L_3c6;
  goto L_3c7;
  // [栈深重同步 1 -> 0]
  e#2 = 1;
  $(r.contextId, s, e#2);
  <?>;
  // gosub (finally 块) 1031
  undefined;
  goto L_42f;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1031
  throw <?>;
  j(e.messageId);
  // ret (finally 块) 
  return undefined; // async
}

// fn _  args=1 vars=5 closure=5 cpool=0 bc=2314B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// locals: t, r, n, i
// closure: U, H, T, DILSandboxWorkerContext, G
function {
  if (!((e.kind === 0))) goto L_71;
  U(e.registryId, e.elements);
  goto L_909;
  if (!((e.kind === 1))) goto L_3e6;
  let r;
  let t;
  t = H.get(e.registryId);
  if (!((undefined === t))) goto L_12a;
  throw new Error("Unknown DIL sandbox element registry ".concat(e.registryId, "."));
  if (!(T.has(e.contextId))) goto L_1cf;
  throw new Error("DIL sandbox context ".concat(e.contextId, " already exists."));
  r = new DILSandboxWorkerContext(e.contextId, t, e.fixedTimeMs, e.errorMode);
  T.set(e.contextId, r);
  r.setStateSnapshot(e.stateSnapshot);
  let i;
  let n;
  if (!((e.widgetStateSnapshots == null))) goto L_32b;
  e.widgetStateSnapshots;
  const _it1 = Object.entries({});
  goto L_369;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  n = <value(_it2)>;
  <done(_it2)>;
  i = <value(_it2)>;
  r.setStateSnapshot(i, n);
  // [栈深重同步 3 -> 4]
  if (!(<done(_it1.next)>)) goto L_331;
  <value(_it1.next)>;
  if (!((e.sourceGeneration == null))) goto L_3df;
  e.sourceGeneration;
  r.updateSource(e.source, false, 0);
  goto L_909;
  // [栈深重同步 4 -> 1]
  if (!((_it2 === 2))) goto L_4c5;
  DILSandboxWorkerContext.forId(e.contextId).updateSource(e.source, e.animated, e.sourceGeneration);
  goto L_909;
  if (!((_it2 === 3))) goto L_53c;
  DILSandboxWorkerContext.forId(e.contextId).render(e);
  goto L_909;
  if (!((_it2 === 4))) goto L_5d7;
  DILSandboxWorkerContext.forId(e.contextId).commit(e.renderSequence);
  goto L_909;
  if (!((_it2 === 5))) goto L_6a2;
  if (!((T.get(e.contextId) == null))) goto L_630;
  T.get(e.contextId);
  goto L_654;
  undefined.dispose();
  T.delete(e.contextId);
  goto L_909;
  if (!((_it2 === 12))) goto L_722;
  if (!((T.get(e.contextId) == null))) goto L_6f9;
  T.get(e.contextId);
  goto L_71e;
  undefined.receiveHostActionResponse(e);
  goto L_909;
  if (!((_it2 === 6))) goto L_81f;
  return DILSandboxWorkerContext.forId(e.contextId).invokeFunction(e.functionId, e.args, e.interactionId, e.completionId);   // tail call
  if (!((_it2 === 9))) goto L_8dc;
  DILSandboxWorkerContext.forId(e.contextId).setStateSnapshot(e.stateSnapshot, e.widgetId);
  goto L_909;
  if (!((_it2 === 10))) goto L_909;
  G(e.signal);
  return;
}

// fn W  args=2 vars=2 closure=1 cpool=0 bc=137B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// closure: M
function {
  M({kind: 13, contextId: e.message.contextId, messageId: e.messageId, loading: false, error: t});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=51B file=dil_sandbox/src/DILSandboxWorkerCore
// closure: b, e, M
function {
  try { // catch -> L_19
  b("DILSandbox.WorkerSendAcknowledgement", e);
  <?>;
  // gosub (finally 块) 31
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 31
  throw <?>;
  M({kind: 2, messageId: e});
  // ret (finally 块) 
  return;
}

// fn j  args=1 vars=1 closure=3 cpool=1 bc=8B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e
// closure: b, M, k
function {
  k(function <atom:0>, 0);
  return;
}

// fn U  args=2 vars=5 closure=2 cpool=0 bc=1010B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t
// locals: n, i, e#1
// closure: H, r
function {
  let n;
  if (!(H.has(e))) goto L_66;
  throw new Error("DIL sandbox element registry ".concat(e, " is already registered."));
  n = {};
  let i;
  i = 0;
  if (!((i < t.length))) goto L_3c0;
  let e#1;
  e#1 = t[i];
  if (!((e#1.typeId !== i))) goto L_10f;
  throw new Error("Invalid DIL sandbox type id ".concat(e#1.typeId, " at registry index ", i, "."));
  if (!((e#1.childrenMode === r.DILElementChildrenMode.PrimitiveText))) goto L_202;
  if (!((undefined === e#1.primitiveTextProp))) goto L_202;
  throw new Error("DIL sandbox primitive text element "".concat(e#1.type, "" requires a primitive text prop."));
  if (!((undefined === e#1.semanticKeyPropName))) goto L_2d1;
  goto L_2fb;
  // [栈深重同步 4 -> 3]
  null;
  {semanticKeyPropName: e#1.semanticKeyPropName};
  if (!((undefined === e#1.childIdentitiesPropName))) goto L_32b;
  goto L_355;
  // [栈深重同步 4 -> 3]
  null;
  {childIdentitiesPropName: e#1.childIdentitiesPropName};
  if (!((undefined === e#1.renderedPropNames))) goto L_385;
  goto L_3af;
  // [栈深重同步 4 -> 3]
  null;
  {renderedPropNames: e#1.renderedPropNames};
  n[e#1.type] = {typeId: e#1.typeId, childrenMode: e#1.childrenMode, primitiveTextProp: e#1.primitiveTextProp};
  i = <i_new>;
  (i++);
  goto L_6d;
  H.set(e, {elementsMetadata: n});
  return;
}

// fn $  args=3 vars=5 closure=3 cpool=0 bc=247B file=dil_sandbox/src/DILSandboxWorkerCore
// args: e, t, r
// locals: n, i
// closure: p, M, q
function {
  let n;
  n = p.toDILSandboxError(t);
  try { // catch -> L_be
  M({kind: r, contextId: e, name: n.name, message: n.message, stack: n.stack});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_f6
  q("Failed to report a DIL sandbox error.", p.toDILSandboxError(i));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=52 closure=0 cpool=44 bc=1690B file=dil_sandbox/src/DILSandboxWorkerCore
// args: require, module, exports
// locals: e, t, r, n, i, s, o, d, a, c, h, l, u, p, I, m, S, g, x, b, v, f, y, w, D, k, L, q, R, E, M, C, A, DILSandboxWorkerContext, <class_fields_init>, DILSandboxWorkerContext#1, T, H, V, F, O, P, G, N, _, W, j, U, $
function {
  V = function V;
  F = function F;
  O = function O;
  P = function P;
  G = function G;
  N = function N;
  _ = function _;
  W = function W;
  j = function j;
  U = function U;
  $ = function $;
  let H;
  let T;
  let DILSandboxWorkerContext#1;
  let A;
  let C;
  let M;
  let E;
  let R;
  let q;
  let L;
  let k;
  let D;
  let w;
  let y;
  let f;
  let v;
  let b;
  let x;
  let g;
  let S;
  let m;
  let I;
  let p;
  let u;
  let l;
  let h;
  let c;
  let a;
  let d;
  let o;
  let s;
  let i;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.startDILSandboxWorker = undefined;
  e = require("dil_generated_components/src/DILComponentLoaders.generated");
  t = require("./DILComponentSourceLoader");
  r = require("dil_renderer/src/DILRenderer");
  n = require("dil_renderer/src/DILApiFacade");
  i = require("dil_renderer/src/PolyfilledTracer");
  s = require("dil_renderer/src/DILUserInteraction");
  o = require("./DILSandboxGlobals");
  d = require("./DILSandboxRegExp");
  a = require("./DILSandboxProtocol");
  c = require("./DILSandboxRuntime");
  h = require("./DILSandboxHostActionRequests");
  l = require("./DILSandboxDictation");
  u = require("./DILSandboxSpeech");
  p = require("./DILSandboxError");
  I = require("./DILSandboxCallbackValue");
  m = require("./DILSandboxWorkerHtmlViewMessengerState");
  S = require("./DILSandboxTrace");
  require("dil_renderer/src/DILRuntimeApiImpl", true);
  require("dil_renderer/src/DILSpeechOwner", true);
  require("dil_renderer/src/DILDictationOwner", true);
  require("dil_renderer/src/DILSpeechSynthesis", true);
  i.installPolyfilledTracer();
  g = globalThis;
  x = S.makeSandboxTraceFn(g.runtime);
  b = S.makeSandboxInstantTraceFn(g.runtime);
  v = JSON.parse.bind(JSON);
  f = Array.isArray.bind(Array);
  y = Object.create.bind(Object);
  w = Object.assign.bind(Object);
  D = g.postMessage.bind(g);
  k = setTimeout.bind(globalThis);
  L = Promise.resolve.bind(Promise);
  q = console.error.bind(console);
  R = g.Intl;
  if (!((R == null))) goto L_4f4;
  R;
  goto L_515;
  if (!(("function" != typeof undefined.NumberFormat))) goto L_548;
  require("dil_sandbox/src/DILSandboxIntl").installDILSandboxIntlGlobal(g);
  E = undefined;
  M = D;
  C = true;
  A = queueMicrotask;
  let DILSandboxWorkerContext;
  let <class_fields_init>;
  class DILSandboxWorkerContext extends undefined { ... }
  function <atom:0>.forId = function <atom:0>;
  <proto:DILSandboxWorkerContext>.updateSource = function <atom:0>;
  <proto:DILSandboxWorkerContext>.render = function <atom:0>;
  <proto:DILSandboxWorkerContext>.commit = function <atom:0>;
  <proto:DILSandboxWorkerContext>.dispose = function <atom:0>;
  <proto:DILSandboxWorkerContext>.setStateSnapshot = function <atom:0>;
  <proto:DILSandboxWorkerContext>.invokeFunction = function <atom:0>;
  <proto:DILSandboxWorkerContext>.observeFunctionResult = function <atom:0>;
  <proto:DILSandboxWorkerContext>.completeFunction = function <atom:0>;
  <proto:DILSandboxWorkerContext>.registerHtmlViewMessengerTransport = function <atom:0>;
  <proto:DILSandboxWorkerContext>.unregisterHtmlViewMessengerTransport = function <atom:0>;
  <proto:DILSandboxWorkerContext>.receiveHtmlViewMessengerCommand = function <atom:0>;
  <proto:DILSandboxWorkerContext>.receiveHtmlViewMessengerEvent = function <atom:0>;
  <proto:DILSandboxWorkerContext>.receiveHtmlViewMessengerCommandResponse = function <atom:0>;
  <proto:DILSandboxWorkerContext>.receiveDictationEvent = function <atom:0>;
  <proto:DILSandboxWorkerContext>.receiveSpeechState = function <atom:0>;
  <proto:DILSandboxWorkerContext>.receiveHostActionResponse = function <atom:0>;
  <proto:DILSandboxWorkerContext>.dispatchHostAction = function <atom:0>;
  <proto:DILSandboxWorkerContext>.getHtmlViewMessengerState = function <atom:0>;
  <proto:DILSandboxWorkerContext>.applySource = function <atom:0>;
  <proto:DILSandboxWorkerContext>.evaluateSource = function <atom:0>;
  <proto:DILSandboxWorkerContext>.renderSourceUpdate = function <atom:0>;
  <proto:DILSandboxWorkerContext>.renderActive = function <atom:0>;
  <proto:DILSandboxWorkerContext>.requestRender = function <atom:0>;
  <proto:DILSandboxWorkerContext>.scheduleFlush = function <atom:0>;
  <proto:DILSandboxWorkerContext>.flushRender = function <atom:0>;
  <proto:DILSandboxWorkerContext>.sendOperations = function <atom:0>;
  <proto:DILSandboxWorkerContext>.reportError = function <atom:0>;
  <proto:DILSandboxWorkerContext>.observeAsyncResult = function <atom:0>;
  <proto:DILSandboxWorkerContext>.stateSnapshotChanged = function <atom:0>;
  <proto:DILSandboxWorkerContext>.reportErrors = function <atom:0>;
  <proto:DILSandboxWorkerContext>.post = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxWorkerContext>;
  DILSandboxWorkerContext = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxWorkerContext#1 = function <atom:0>;
  T = new Map();
  H = new Map();
  exports.startDILSandboxWorker = V;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxWorkerCore
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
