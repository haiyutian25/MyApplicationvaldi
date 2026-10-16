// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_sandbox/src/DILSandboxContext
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=dil_sandbox/src/DILSandboxContext
// args: e
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=72B file=dil_sandbox/src/DILSandboxContext
// closure: this, i
function {
  return this.renderChildren(this.rootChildren, i);   // tail call
}

// fn <atom:0>  args=4 vars=10 closure=3 cpool=1 bc=1431B file=dil_sandbox/src/DILSandboxContext
// args: e, t, r, i
// locals: n, s, o, h, h#1, a
// closure: this, d, I
function {
  let a;
  let o;
  let s;
  let n;
  if (!(!this.isActive())) goto L_35;
  return;
  n = undefined;
  s = false;
  o = false;
  this.observedRenderHadError = false;
  this.lastRenderError = undefined;
  this.observedRenderInProgress = true;
  try { // catch -> L_271
  if (!((this.listener.onRenderStateChanged == null))) goto L_b1;
  this.listener.onRenderStateChanged;
  this.listener;
  goto L_b5;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, undefined);
  n = this.applyPendingBatches();
  this.applyPendingBatches();
  if (!((this.elementRenderObserver == null))) goto L_10a;
  this.elementRenderObserver;
  goto L_172;
  undefined.beginRender(this.appliedSourceGeneration, this.sourceGeneration);
  s = (undefined !== this.elementRenderObserver);
  (undefined !== this.elementRenderObserver);
  if (!((undefined === n))) goto L_1ed;
  goto L_217;
  // [栈深重同步 1 -> 0]
  d.runWithDILUserInteractionId(n, function <atom:0>);
  if (!(this.appliedWorkerRenderSuccessful)) goto L_261;
  o = !this.observedRenderHadError;
  !this.observedRenderHadError;
  <?>;
  // gosub (finally 块) 687
  undefined;
  goto L_47e;
  // [栈深重同步 0 -> 1]
  h = <?>;
  try { // catch -> L_2a9
  this.reportError(h);
  <?>;
  // gosub (finally 块) 687
  undefined;
  goto L_47e;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 687
  throw <?>;
  if (!(s)) goto L_34b;
  try { // catch -> L_311
  if (!((this.elementRenderObserver == null))) goto L_2e6;
  this.elementRenderObserver;
  goto L_30d;
  undefined.endRender(o);
  <?>;
  goto L_34b;
  // [栈深重同步 0 -> 1]
  h#1 = <?>;
  try { // catch -> L_34a
  o = false;
  false;
  this.reportError(h#1);
  <?>;
  goto L_34b;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((undefined !== n))) goto L_3ab;
  if (!(o)) goto L_383;
  goto L_3ab;
  // [栈深重同步 1 -> 0]
  d.discardDILUserInteractionId(n);
  this.observedRenderInProgress = false;
  if (!(o)) goto L_47c;
  if (!((this.appliedSourceGeneration === this.sourceGeneration))) goto L_47c;
  if (!((this.listener.onRenderStateChanged == null))) goto L_457;
  this.listener.onRenderStateChanged;
  this.listener;
  goto L_47c;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, this.renderCompletion);
  // ret (finally 块) 
  if (!((i.constants == null))) goto L_4a8;
  i.constants;
  a = I;
  if ((this.renderInputsEqual(e, a, t, r))) goto L_596;
  this.lastRenderInput = {appData: e, constants: a, theme: t, activeBreakpoints: r};
  this.worker.post({kind: 3, contextId: this.contextId, appData: e, constants: a, theme: t, activeBreakpoints: r, animated: false});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=171B file=dil_sandbox/src/DILSandboxContext
// args: e
// closure: this
function {
  this.hasPresentHost = e;
  if (!((this.dictation == null))) goto L_35;
  this.dictation;
  goto L_5a;
  undefined.setHostPresence(e);
  if (!((this.speech == null))) goto L_85;
  this.speech;
  goto L_aa;
  undefined.setHostPresence(e);
  return;
}

// fn <atom:0>  args=9 vars=10 closure=3 cpool=2 bc=457B file=dil_sandbox/src/DILSandboxContext
// args: e, t, r, i, n, s, o, a, h
// locals: this
// closure: d, I, <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.contextId = e;
  this.source = t;
  this.fixedTimeMs = r;
  this.errorMode = i;
  this.elementRegistry = n;
  this.elementRenderObserver = s;
  this.errorReporter = o;
  this.listener = a;
  this.worker = h;
  this.callbackGeneration = 0;
  this.disposed = false;
  this.failed = false;
  this.functionProxies = new Map();
  this.hasPresentHost = true;
  this.nodes = new Map();
  this.pendingBatches = [];
  this.rootChildren = [];
  this.observedRenderHadError = false;
  this.observedRenderInProgress = false;
  this.appliedSourceGeneration = -1;
  this.appliedWorkerRenderSuccessful = false;
  this.sourceGeneration = 0;
  this.renderCompletion = {sourceGeneration: 0};
  this.widgetStateSnapshots = {};
  this.render = function <atom:0>;
  if (!((this.listener.hostPresence == null))) goto L_199;
  this.listener.hostPresence;
  goto L_1bf;
  this.hostPresenceSubscription = undefined.subscribe(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=661B file=dil_sandbox/src/DILSandboxContext
// args: e, t
// locals: this
function {
  this = this;
  if (!(this.isActive())) goto L_294;
  this.source = e;
  this.sourceGeneration = (this.sourceGeneration + 1);
  this.renderCompletion = {sourceGeneration: this.sourceGeneration};
  if (!((this.listener.onRenderStateChanged == null))) goto L_e4;
  this.listener.onRenderStateChanged;
  this.listener;
  goto L_e8;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, undefined);
  if (!((this.elementRenderObserver == null))) goto L_113;
  this.elementRenderObserver;
  goto L_162;
  if (!((undefined.sourceGenerationChanged == null))) goto L_13d;
  undefined.sourceGenerationChanged;
  undefined;
  goto L_162;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, this.sourceGeneration);
  this.worker.post({kind: 2, contextId: this.contextId, source: this.source.source, requiredComponents: this.source.requiredComponents, animated: t, sourceGeneration: this.sourceGeneration});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=582B file=dil_sandbox/src/DILSandboxContext
// args: e, t
// locals: r, this
function {
  this = this;
  if (!((undefined !== t))) goto L_168;
  let r;
  if ((!this.isActive())) goto L_5d;
  if (!((e === this.widgetStateSnapshots[t]))) goto L_60;
  return;
  null;
  this.widgetStateSnapshots;
  r = {};
  if (!((undefined === e))) goto L_95;
  goto L_d7;
  // [栈深重同步 2 -> 0]
  // [栈深重同步 1 -> 2]
  <?>;
  this.widgetStateSnapshots = r;
  this.worker.post({kind: 9, contextId: this.contextId, stateSnapshot: e, widgetId: t});
  Object.defineProperty(r, t, {value: e, enumerable: true, configurable: true});
  return;
  if (!(this.isActive())) goto L_245;
  if (!((e !== this.stateSnapshot))) goto L_245;
  this.stateSnapshot = e;
  this.worker.post({kind: 9, contextId: this.contextId, stateSnapshot: e});
  return;
}

// fn <atom:0>  args=4 vars=6 closure=0 cpool=0 bc=992B file=dil_sandbox/src/DILSandboxContext
// args: e, t, r, i
// locals: n, this
function {
  this = this;
  let n;
  if (!(!this.isActive())) goto L_2e;
  return;
  n = this.lastRenderInput;
  if (!((undefined !== n))) goto L_3b1;
  if (!((undefined !== i))) goto L_199;
  this.source = i;
  this.sourceGeneration = (this.sourceGeneration + 1);
  this.renderCompletion = {sourceGeneration: this.sourceGeneration};
  if (!((this.listener.onRenderStateChanged == null))) goto L_11b;
  this.listener.onRenderStateChanged;
  this.listener;
  goto L_11f;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, undefined);
  if (!((this.elementRenderObserver == null))) goto L_14a;
  this.elementRenderObserver;
  goto L_199;
  if (!((undefined.sourceGenerationChanged == null))) goto L_174;
  undefined.sourceGenerationChanged;
  undefined;
  goto L_199;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, this.sourceGeneration);
  this.lastRenderInput = {appData: e, constants: t, theme: n.theme, activeBreakpoints: n.activeBreakpoints};
  if (!((undefined === i))) goto L_2e1;
  goto L_372;
  // [栈深重同步 4 -> 3]
  null;
  {source: this.source.source, requiredComponents: this.source.requiredComponents};
  if (!((undefined === i))) goto L_37f;
  goto L_3a7;
  // [栈深重同步 4 -> 3]
  null;
  {sourceGeneration: this.sourceGeneration};
  goto L_3df;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== i))) goto L_3df;
  this.updateSource(i, r);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=279B file=dil_sandbox/src/DILSandboxContext
// locals: e, this
function {
  this = this;
  let e;
  if (!(((await this.worker.inputCompletion(this.contextId)) == null))) goto L_95;
  (await this.worker.inputCompletion(this.contextId));
  e = this.lastRenderError;
  if (!(!this.disposed)) goto L_115;
  if (((undefined !== e))) goto L_e8;
  if (!((undefined !== this.failure))) goto L_115;
  if (!((e == null))) goto L_114;
  e;
  throw this.failure;
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=198B file=dil_sandbox/src/DILSandboxContext
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_c5;
  this.disposed = true;
  this.clearRetainedState();
  this.worker.destroyContext(this.contextId);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=74B file=dil_sandbox/src/DILSandboxContext
// closure: e, t
function {
  return e(t.action, t.componentScope);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=dil_sandbox/src/DILSandboxContext
// closure: e, t
function {
  return e(t.action);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=55B file=dil_sandbox/src/DILSandboxContext
// args: e
// closure: this, t, i
function {
  if (!((e == null))) goto L_31;
  e;
  return this.completeHostAction(t, {success: true}, i);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=42B file=dil_sandbox/src/DILSandboxContext
// args: e
// closure: this, t, i
function {
  return this.failHostAction(t, e, i);   // tail call
}

// fn <atom:0>  args=1 vars=8 closure=3 cpool=4 bc=3411B file=dil_sandbox/src/DILSandboxContext
// args: t
// locals: r, e, e#1, i, r#1, r#2, this
// closure: e, d, c
function {
  this = this;
  if (!(this.isActive())) goto L_d52;
  if (!((14 !== t.kind))) goto L_d01;
  if (!((9 === t.kind))) goto L_1fc;
  let r;
  r = new Error(t.message);
  r.name = t.name;
  r.stack = t.stack;
  if (!((undefined !== this.listener.onActionError))) goto L_1a1;
  goto L_1fa;
  // [栈深重同步 1 -> 0]
  if (!(e.isLoggingEnabled)) goto L_1fa;
  console.error("Failed to handle DIL sandbox action", r);
  return;
  if (!((1 === t.kind))) goto L_2ce;
  let e;
  e = new Error(t.message);
  e.stack = t.stack;
  this.errorReporter.reportError(e);
  return;
  if (!((5 !== t.kind))) goto L_cb4;
  if (!((6 !== t.kind))) goto L_c67;
  if (!((7 !== t.kind))) goto L_c1a;
  if (!((4 === t.kind))) goto L_742;
  let i;
  let e#1;
  e#1 = this.listener.onHostAction;
  if (!((t.sourceGeneration !== this.sourceGeneration))) goto L_406;
  return;
  if (!((undefined === e#1))) goto L_494;
  this.rejectHostAction(t, "DIL sandbox host actions are unavailable for this context.");
  this.errorReporter.reportError(new Error("DIL sandbox host actions are unavailable for this context."));
  return;
  i = this.callbackGeneration;
  try { // catch -> L_70b
  let r#1;
  r#1 = undefined;
  if ((d.isNonConsumingAction(t.action.type, t.action.handler))) goto L_5df;
  if (!((undefined === t.interactionId))) goto L_610;
  if (!(c.isDILSandboxBoundServerAction(t.action))) goto L_610;
  r#1 = d.runWithoutDILUserInteraction(function <atom:0>);
  d.runWithoutDILUserInteraction(function <atom:0>);
  goto L_6b4;
  if (!((undefined === t.interactionId))) goto L_666;
  this.rejectHostAction(t, "DIL sandbox host actions require a fresh user interaction.");
  return undefined;
  r#1 = d.runWithDILUserInteractionId(t.interactionId, function <atom:0>);
  d.runWithDILUserInteractionId(t.interactionId, function <atom:0>);
  Promise.resolve(r#1).then(function <atom:0>, function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r#2 = <?>;
  try { // catch -> L_741
  this.failHostAction(t, r#2, i);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((12 !== t.kind))) goto L_bac;
  if (!((11 !== t.kind))) goto L_b3e;
  if (!((3 === t.kind))) goto L_a8a;
  if (!((undefined !== t.widgetId))) goto L_982;
  if (!((t.stateSnapshot !== this.widgetStateSnapshots[t.widgetId]))) goto L_97f;
  null;
  this.widgetStateSnapshots;
  {}[t.widgetId] = t.stateSnapshot;
  t.stateSnapshot;
  this.widgetStateSnapshots = {};
  this.listener.onStateChanged(t.stateSnapshot, t.origin, t.widgetId);
  return undefined;
  if (!((t.stateSnapshot !== this.stateSnapshot))) goto L_a87;
  this.stateSnapshot = t.stateSnapshot;
  this.listener.onStateChanged(t.stateSnapshot, t.origin);
  return undefined;
  this.pendingBatches.push(t);
  this.listener.onNeedsRerender(t.animated);
  return;
  this.getSpeech().receive(t.command);
  return;
  this.getDictation().receive(t.command);
  return;
  this.getHtmlViewMessengerState().receiveWorkerCommandResponse(t);
  return;
  this.getHtmlViewMessengerState().receiveWorkerEvent(t);
  return;
  this.getHtmlViewMessengerState().receiveWorkerCommand(t);
  return;
  if (!((this.callbackResults == null))) goto L_d2c;
  this.callbackResults;
  goto L_d51;
  undefined.receive(t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=dil_sandbox/src/DILSandboxContext
// locals: this
function {
  this = this;
  return (0 !== this.pendingBatches.length);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=84B file=dil_sandbox/src/DILSandboxContext
// locals: this
function {
  this = this;
  if (!((this.htmlViewMessengerState == null))) goto L_2e;
  this.htmlViewMessengerState;
  goto L_52;
  return (true === undefined.hasPendingWork());
}

// fn <atom:0>  args=2 vars=8 closure=2 cpool=0 bc=519B file=dil_sandbox/src/DILSandboxContext
// args: e, t
// locals: r, n, s, o, d, this
// closure: i, u
function {
  this = this;
  let d;
  let o;
  let s;
  let n;
  let r;
  if (!(this.nodes.has(e))) goto L_95;
  throw new Error("DIL sandbox node ".concat(e, " already exists."));
  r = this.resolveType(t);
  n = Object.create(null);
  s = [];
  o = i.createDilElement(r, n, s);
  d = {id: e, kind: 0, rendererKey: e.toString(), typeId: t, props: n, children: [], parentId: undefined, opaqueChildren: undefined, resolvedChildren: s, resolvedElement: o};
  o[u] = d;
  i.setDilElementInteractionScope(o, undefined);
  this.nodes.set(e, d);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=271B file=dil_sandbox/src/DILSandboxContext
// args: e, t
// locals: this
function {
  this = this;
  if (!(this.nodes.has(e))) goto L_84;
  throw new Error("DIL sandbox node ".concat(e, " already exists."));
  this.nodes.set(e, {id: e, kind: 1, rendererKey: e.toString(), parentId: undefined, value: t});
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=112B file=dil_sandbox/src/DILSandboxContext
// args: e, t
// locals: this
// closure: i
function {
  this = this;
  i.setDilElementInteractionScope(this.requireElementNode(e).resolvedElement, t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=157B file=dil_sandbox/src/DILSandboxContext
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.requireNode(e);
  this.removeNodeFromParent(t);
  this.nodes.delete(e);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=514B file=dil_sandbox/src/DILSandboxContext
// args: e, t, r
// locals: i, n, s, this
function {
  this = this;
  let s;
  let n;
  let i;
  i = this.requireNode(e);
  this.removeNodeFromParent(i);
  if (!((0 === t))) goto L_63;
  goto L_89;
  // [栈深重同步 1 -> 0]
  n = this.requireElementNode(t);
  if (!((undefined === n))) goto L_b5;
  goto L_d9;
  // [栈深重同步 1 -> 0]
  s = n.children;
  if (!((r > s.length))) goto L_121;
  throw new Error("Invalid parent index ".concat(r, " for DIL sandbox node ", e, "."));
  s.splice(r, 0, e);
  if (!((undefined !== n))) goto L_1f3;
  n.resolvedChildren.splice(r, 0, this.resolveNodeValue(i));
  this.assertChildrenAligned(n);
  i.parentId = t;
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=77B file=dil_sandbox/src/DILSandboxContext
// args: e, t, r
// locals: this
function {
  this = this;
  this.requireElementNode(e).props[t] = r;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=51B file=dil_sandbox/src/DILSandboxContext
// args: e, t
// locals: this
function {
  this = this;
  this.requireElementNode(e).opaqueChildren = t;
  return;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=393B file=dil_sandbox/src/DILSandboxContext
// args: e, t
// locals: r, i, n, s, this
function {
  this = this;
  let s;
  let n;
  let i;
  let r;
  r = this.requireTextNode(e);
  r.value = t;
  i = r.parentId;
  if (((undefined === i))) goto L_77;
  if (!((0 === i))) goto L_7a;
  return;
  n = this.requireElementNode(i);
  s = n.children.indexOf(e);
  if (!((s < 0))) goto L_136;
  throw new Error("DIL sandbox text node ".concat(e, " is missing from parent ", i, "."));
  n.resolvedChildren[s] = t;
  this.assertChildrenAligned(n);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=267B file=dil_sandbox/src/DILSandboxContext
// args: t
// closure: this, n, e, d
function {
  t = ...0;
  if (!(this.isActive())) goto L_108;
  if (!((n === this.callbackGeneration))) goto L_108;
  (await this.worker.post({kind: 6, contextId: this.contextId, functionId: e, args: t, interactionId: d.captureDILUserInteractionId()}));
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=71B file=dil_sandbox/src/DILSandboxContext
// args: e
// closure: this
function {
  return this.worker.post(e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=5 cpool=1 bc=379B file=dil_sandbox/src/DILSandboxContext
// args: t, i
// closure: this, n, r, e, d
function {
  if (!(this.isActive())) goto L_143;
  if (!((n === this.callbackGeneration))) goto L_143;
  if (!((this.callbackResults == null))) goto L_d3;
  this.callbackResults;
  this.callbackResults = new r.DILSandboxCallbackResults(this.contextId, function <atom:0>);
  new r.DILSandboxCallbackResults(this.contextId, function <atom:0>);
  return this.callbackResults.invoke(e, t, d.captureDILUserInteractionId(), i);
  return Promise.reject(new Error("DIL sandbox callback is no longer active."));
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=2 bc=337B file=dil_sandbox/src/DILSandboxContext
// args: e
// locals: i, n, this
// closure: d, r, t, p
function {
  this = this;
  let i;
  if (!((this.functionProxies.get(e) == null))) goto L_54;
  this.functionProxies.get(e);
  goto L_78;
  i = undefined.deref();
  if (!((undefined === i))) goto L_14d;
  let n;
  n = this.callbackGeneration;
  i = t.attachDILCallbackResult(function <atom:0>, function <atom:0>);
  t.attachDILCallbackResult(function <atom:0>, function <atom:0>);
  this.functionProxies.set(e, new p.WeakRef(i));
  // close_loc n
  return i;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=76B file=dil_sandbox/src/DILSandboxContext
// args: e
// locals: this
function {
  this = this;
  return this.getHtmlViewMessengerState().resolveHost(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=180B file=dil_sandbox/src/DILSandboxContext
// args: e
// locals: this
function {
  this = this;
  if (!(this.isActive())) goto L_b3;
  this.failed = true;
  this.failure = e;
  this.clearRetainedState();
  this.listener.onNeedsRerender(false);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=154B file=dil_sandbox/src/DILSandboxContext
// locals: this
function {
  this = this;
  if (!(this.isActive())) goto L_99;
  this.clearRetainedState();
  this.listener.onNeedsRerender(false);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=786B file=dil_sandbox/src/DILSandboxContext
// locals: e, t, this
function {
  this = this;
  let t;
  let e;
  if (!((0 === this.sourceGeneration))) goto L_ef;
  goto L_117;
  // [栈深重同步 2 -> 1]
  null;
  {sourceGeneration: this.sourceGeneration};
  e = {kind: 1, contextId: this.contextId, source: this.source.source, requiredComponents: this.source.requiredComponents, registryId: this.elementRegistry.id, fixedTimeMs: this.fixedTimeMs, errorMode: this.errorMode, stateSnapshot: this.stateSnapshot, widgetStateSnapshots: this.widgetStateSnapshots};
  t = this.lastRenderInput;
  if (!((undefined === t))) goto L_232;
  return [e];
  return [e, {kind: 3, contextId: this.contextId, appData: t.appData, constants: t.constants, theme: t.theme, activeBreakpoints: t.activeBreakpoints, animated: false}];
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=143B file=dil_sandbox/src/DILSandboxContext
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.elementRegistry.types[e];
  if (!((undefined === t))) goto L_8b;
  throw new Error("Unknown DIL sandbox element type id ".concat(e, "."));
  return t;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=855B file=dil_sandbox/src/DILSandboxContext
// locals: e, t, this
// closure: d, a
function {
  this = this;
  let e;
  if (!((0 === this.pendingBatches.length))) goto L_2d;
  return;
  e = undefined;
  let t;
  for (const t of this.pendingBatches.splice(0)) {
    if (!((undefined !== t.interactionId))) goto L_182;
    if (!((undefined !== e))) goto L_159;
    if (!((e !== t.interactionId))) goto L_159;
    if (!(this.appliedWorkerRenderSuccessful)) goto L_131;
    goto L_159;
    // [栈深重同步 4 -> 3]
    d.discardDILUserInteractionId(e);
    e = t.interactionId;
    t.interactionId;
    a.applyDILRenderOperations({descriptor: t.descriptor, descriptorSize: t.descriptorSize, attachedValues: t.attachedValues, interactionScopes: t.interactionScopes}, this, this);
    this.appliedSourceGeneration = t.sourceGeneration;
    this.appliedWorkerRenderSuccessful = t.successful;
    this.worker.post({kind: 4, contextId: this.contextId, renderSequence: t.renderSequence});
  }
  return e;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=129B file=dil_sandbox/src/DILSandboxContext
// args: e, t
// closure: this
function {
  this.worker.postSignal({kind: 5, contextId: this.contextId, id: e, state: t});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=304B file=dil_sandbox/src/DILSandboxContext
// locals: this
// closure: l
function {
  this = this;
  if (!((undefined === this.speech))) goto L_10c;
  this.speech = new l.DILSandboxHostSpeech(this.listener.speechSynthesis, function <atom:0>);
  this.speech.setHostPresence(this.hasPresentHost);
  return this.speech;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=82B file=dil_sandbox/src/DILSandboxContext
// args: e
// locals: this
function {
  this = this;
  if (!((this.dictation == null))) goto L_2c;
  this.dictation;
  goto L_51;
  undefined.rejectStart(e);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=129B file=dil_sandbox/src/DILSandboxContext
// args: e, t
// closure: this
function {
  this.worker.postSignal({kind: 6, contextId: this.contextId, id: e, event: t});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=304B file=dil_sandbox/src/DILSandboxContext
// locals: this
// closure: s
function {
  this = this;
  if (!((undefined === this.dictation))) goto L_10c;
  this.dictation = new s.DILSandboxHostDictation(this.listener.dictation, function <atom:0>);
  this.dictation.setHostPresence(this.hasPresentHost);
  return this.dictation;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=89B file=dil_sandbox/src/DILSandboxContext
// args: e, t
// locals: this
function {
  this = this;
  this.completeHostAction(e, {success: false, statusMessage: t}, this.callbackGeneration);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=366B file=dil_sandbox/src/DILSandboxContext
// args: e, t, r
// locals: this
function {
  this = this;
  if ((!this.isActive())) goto L_99;
  if (((this.callbackGeneration !== r))) goto L_99;
  if (!(!(this.sourceGeneration !== e.sourceGeneration))) goto L_16d;
  this.worker.post({kind: 12, contextId: this.contextId, requestId: e.requestId, sourceGeneration: e.sourceGeneration, result: t});
  return true;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=487B file=dil_sandbox/src/DILSandboxContext
// args: t, r, i
// locals: n, this
// closure: e
function {
  this = this;
  let n;
  if (!((r instanceof Error))) goto L_11;
  goto L_21;
  // [栈深重同步 1 -> 0]
  n = new Error(String(r));
  if (!(("server" === t.action.handler))) goto L_e6;
  if (!(("genui.run_plugin_tool" === t.action.type))) goto L_e6;
  goto L_eb;
  // [栈深重同步 5 -> 4]
  if (!(this.completeHostAction(t, {success: false, statusMessage: "Could not complete widget action."}, i))) goto L_1e6;
  if (!((undefined !== this.listener.onActionError))) goto L_18d;
  goto L_1e6;
  // [栈深重同步 1 -> 0]
  if (!(e.isLoggingEnabled)) goto L_1e6;
  console.error("Failed to handle DIL sandbox action", n);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=1140B file=dil_sandbox/src/DILSandboxContext
// locals: e, t, this
// closure: d
function {
  this = this;
  let e;
  e = new Error("DIL sandbox callback context was reset.");
  if (!(this.isActive())) goto L_8e;
  if (!((this.callbackResults == null))) goto L_65;
  this.callbackResults;
  goto L_df;
  goto L_df;
  // [栈深重同步 1 -> 0]
  if (!((this.callbackResults == null))) goto L_b8;
  this.callbackResults;
  goto L_df;
  undefined.dispose(e);
  if (!((this.hostPresenceSubscription == null))) goto L_10a;
  this.hostPresenceSubscription;
  goto L_12e;
  undefined.unsubscribe();
  this.hostPresenceSubscription = undefined;
  if (!((this.listener.onRenderStateChanged == null))) goto L_186;
  this.listener.onRenderStateChanged;
  this.listener;
  goto L_18a;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, undefined);
  if (!((this.dictation == null))) goto L_1b5;
  this.dictation;
  goto L_1d9;
  undefined.dispose();
  this.dictation = undefined;
  if (!((this.speech == null))) goto L_20f;
  this.speech;
  goto L_233;
  undefined.dispose();
  this.speech = undefined;
  this.callbackGeneration = (this.callbackGeneration ++);
  let t;
  for (const t of this.pendingBatches) {
    if (!((undefined !== t.interactionId))) goto L_307;
    d.discardDILUserInteractionId(t.interactionId);
  }
  this.pendingBatches.length = 0;
  this.appliedSourceGeneration = -1;
  this.appliedWorkerRenderSuccessful = false;
  this.nodes.clear();
  this.functionProxies.clear();
  if (!((this.htmlViewMessengerState == null))) goto L_409;
  this.htmlViewMessengerState;
  goto L_43b;
  undefined.reset(new Error("DIL sandbox html-view messenger context was reset"));
  this.htmlViewMessengerState = undefined;
  this.rootChildren.length = 0;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=207B file=dil_sandbox/src/DILSandboxContext
// locals: e, this
// closure: h
function {
  this = this;
  let e;
  if (!((this.htmlViewMessengerState == null))) goto L_bd;
  this.htmlViewMessengerState;
  e = new h.DILSandboxHostHtmlViewMessengerState(this.contextId, this.worker, this.errorReporter);
  this.htmlViewMessengerState = e;
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=dil_sandbox/src/DILSandboxContext
// locals: this
function {
  this = this;
  if (!(!this.disposed)) goto L_4c;
  return !this.failed;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=59B file=dil_sandbox/src/DILSandboxContext
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  for (const r of e) {
    this.renderNode(r, t);
  }
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=169B file=dil_sandbox/src/DILSandboxContext
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  r = this.requireNode(e);
  if (!((1 === r.kind))) goto L_7f;
  goto L_a8;
  // [栈深重同步 1 -> 0]
  this.renderElementNode(r, t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=82B file=dil_sandbox/src/DILSandboxContext
// closure: d, this, e, i
function {
  d = true;
  true;
  this.renderChildren(e.children, i);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=68B file=dil_sandbox/src/DILSandboxContext
// args: t, r
// closure: d, this, e, i
function {
  d = true;
  true;
  if (!((r == null))) goto L_34;
  r;
  goto L_38;
  if (!((undefined(i) == null))) goto L_40;
  undefined(i);
  this.renderSelectedChildren(e, t, i);
  return;
}

// fn <atom:0>  args=2 vars=14 closure=3 cpool=2 bc=2230B file=dil_sandbox/src/DILSandboxContext
// args: e, t
// locals: r, s, o, d, t#1, i, a, h, a#1, a#2, a#3, this
// closure: i, n, v
function {
  this = this;
  let d;
  let o;
  let s;
  let r;
  null;
  t;
  if (!((i.getDilElementInteractionScope(e.resolvedElement) == null))) goto L_65;
  i.getDilElementInteractionScope(e.resolvedElement);
  goto L_86;
  t = {interactionScope: undefined.scope};
  r = this.elementRegistry.renderers[e.typeId];
  if (!((undefined === r))) goto L_155;
  throw new Error("Unknown DIL sandbox element type id ".concat(e.typeId, "."));
  s = false;
  o = false;
  d = false;
  try { // catch -> L_778
  let h;
  let a;
  let i;
  if (!((this.elementRenderObserver == null))) goto L_198;
  this.elementRenderObserver;
  goto L_26b;
  undefined.beginElement(this.resolveType(e.typeId), e.rendererKey, n.DILElementRenderNodeKind.Element);
  o = (undefined !== this.elementRenderObserver);
  (undefined !== this.elementRenderObserver);
  null;
  t;
  r.beginRender(e.rendererKey, {interactionSource: e.resolvedElement});
  s = true;
  true;
  let t#1;
  for (const t#1 of e.props) {
    if (!((t#1 !== r.primitiveTextProp))) goto L_3e4;
    if (!((this.elementRenderObserver == null))) goto L_397;
    this.elementRenderObserver;
    goto L_3e4;
    undefined.setProp(t#1, e.props[t#1]);
    r.setProp(t#1, e.props[t#1]);
  }
  <catch>;
  if (!((r.resolveChildRenderOptions == null))) goto L_46b;
  r.resolveChildRenderOptions;
  r;
  goto L_46f;
  // [栈深重同步 3 -> 4]
  if (!((<?>.call(undefined, t) == null))) goto L_475;
  <?>.call(undefined, t);
  i = t;
  if (!((r.childrenMode === n.DILElementChildrenMode.ResolvedValues))) goto L_56d;
  goto L_5fe;
  // [栈深重同步 6 -> 5]
  if (!((r.childrenMode === n.DILElementChildrenMode.OpaqueTree))) goto L_5fd;
  goto L_5fe;
  // [栈深重同步 6 -> 5]
  r.setChildren({count: e.children.length, render: function <atom:0>, renderSelected: function <atom:0>}, undefined);
  a = r.primitiveTextProp;
  if (!((r.childrenMode === n.DILElementChildrenMode.OpaqueTree))) goto L_6c0;
  if (!((e.opaqueChildren == null))) goto L_714;
  e.opaqueChildren;
  goto L_714;
  // [栈深重同步 3 -> 2]
  if (!((undefined === a))) goto L_6eb;
  goto L_714;
  // [栈深重同步 3 -> 2]
  h = [e.props[a]];
  if (!((this.elementRenderObserver == null))) goto L_741;
  this.elementRenderObserver;
  goto L_76b;
  undefined.setChildren(h, d);
  // close_loc i
  _it1.next;
  // gosub (finally 块) 1975
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  a#1 = <?>;
  try { // catch -> L_7b1
  this.reportError(a#1);
  <?>;
  // gosub (finally 块) 1975
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1975
  throw <?>;
  if (!(s)) goto L_820;
  try { // catch -> L_7ec
  r.endRender();
  <?>;
  goto L_820;
  // [栈深重同步 0 -> 1]
  a#2 = <?>;
  try { // catch -> L_81f
  this.reportError(a#2);
  <?>;
  goto L_820;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(o)) goto L_8b4;
  try { // catch -> L_880
  if (!((this.elementRenderObserver == null))) goto L_858;
  this.elementRenderObserver;
  goto L_87c;
  undefined.endElement();
  <?>;
  goto L_8b4;
  // [栈深重同步 0 -> 1]
  a#3 = <?>;
  try { // catch -> L_8b3
  this.reportError(a#3);
  <?>;
  goto L_8b4;
  // [栈深重同步 0 -> 1]
  throw <?>;
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=2 vars=10 closure=4 cpool=0 bc=1276B file=dil_sandbox/src/DILSandboxContext
// args: e, t
// locals: r, i, s, d, a, a#1, a#2, this
// closure: n, o, m, v
function {
  this = this;
  let d;
  let s;
  let i;
  let r;
  r = this.elementRegistry.textTypeId;
  i = this.elementRegistry.renderers[r];
  if (!((undefined === i))) goto L_df;
  throw new Error("Unknown DIL sandbox text element type id ".concat(r, "."));
  s = false;
  d = false;
  try { // catch -> L_3be
  if (!((this.elementRenderObserver == null))) goto L_116;
  this.elementRenderObserver;
  goto L_1ca;
  undefined.beginElement(this.resolveType(r), e.rendererKey, n.DILElementRenderNodeKind.Text);
  d = (undefined !== this.elementRenderObserver);
  (undefined !== this.elementRenderObserver);
  i.beginRender(e.rendererKey, o.renderOptionsWithDILTextNode(t));
  s = true;
  true;
  if (!((this.elementRenderObserver == null))) goto L_297;
  this.elementRenderObserver;
  goto L_2e2;
  undefined.setProp("value", e.value);
  i.setProp("value", e.value);
  i.setChildren(m, v);
  if (!((this.elementRenderObserver == null))) goto L_38b;
  this.elementRenderObserver;
  goto L_3b4;
  undefined.setChildren(v, false);
  <?>;
  // gosub (finally 块) 1021
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_3f7
  this.reportError(a);
  <?>;
  // gosub (finally 块) 1021
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1021
  throw <?>;
  if (!(s)) goto L_466;
  try { // catch -> L_432
  i.endRender();
  <?>;
  goto L_466;
  // [栈深重同步 0 -> 1]
  a#1 = <?>;
  try { // catch -> L_465
  this.reportError(a#1);
  <?>;
  goto L_466;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(d)) goto L_4fa;
  try { // catch -> L_4c6
  if (!((this.elementRenderObserver == null))) goto L_49e;
  this.elementRenderObserver;
  goto L_4c2;
  undefined.endElement();
  <?>;
  goto L_4fa;
  // [栈深重同步 0 -> 1]
  a#2 = <?>;
  try { // catch -> L_4f9
  this.reportError(a#2);
  <?>;
  goto L_4fa;
  // [栈深重同步 0 -> 1]
  throw <?>;
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=3 vars=11 closure=2 cpool=0 bc=852B file=dil_sandbox/src/DILSandboxContext
// args: e, t, r
// locals: n, s, t#1, i, o, t#2, o#1, this
// closure: i, u
function {
  this = this;
  let n;
  if (!((this.nodes.get(e.id) !== e))) goto L_74;
  return;
  n = 0;
  let s;
  for (const s of t) {
    let o#1;
    let t#2;
    if (!(i.isDILRuntimeElement(s))) goto L_22c;
    let o;
    let i;
    let t#1;
    t#1 = s[u];
    if (!((undefined === t#1))) goto L_cd;
    goto L_138;
    // [栈深重同步 4 -> 3]
    i = this.nodes.get(t#1.id);
    if (((undefined === t#1))) goto L_149;
    if (!((i !== t#1))) goto L_17c;
    this.reportInvalidSelectedChild(e, t#1, i);
   continue;
    o = e.children.indexOf(t#1.id, n);
    if (!((o >= 0))) goto L_1fd;
    n = (o + 1);
    (o + 1);
    this.renderElementNode(t#1, r);
   continue;
    t#2 = e.resolvedChildren.indexOf(s, n);
    if (!((t#2 < 0))) goto L_290;
    throw new Error("Unknown DIL sandbox resolved primitive child.");
    o#1 = this.requireNode(e.children[t#2]);
    if (!((1 !== o#1.kind))) goto L_315;
    throw new Error("Unknown DIL sandbox resolved primitive child.");
    n = (t#2 + 1);
    (t#2 + 1);
    this.renderTextNode(o#1, r);
  }
  return;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=540B file=dil_sandbox/src/DILSandboxContext
// args: e, t, r
// locals: i, this
// closure: n
function {
  this = this;
  let i;
  if (!((this.errorMode === n.DILRenderErrorMode.ReportAndAbortRender))) goto L_7e;
  throw new Error("Unknown DIL sandbox resolved element child.");
  i = undefined;
  if (!((undefined === t))) goto L_cd;
  goto L_15e;
  // [栈深重同步 1 -> 0]
  if (!((undefined === r))) goto L_119;
  goto L_15e;
  // [栈深重同步 1 -> 0]
  i = n.DILSkippedChildReason.NodeIdentityMismatch;
  n.DILSkippedChildReason.NodeIdentityMismatch;
  this.errorReporter.reportError(new n.DILSkippedChildError(i, this.resolveType(e.typeId)));
  return;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=596B file=dil_sandbox/src/DILSandboxContext
// args: e
// locals: t, r, i, t#1, this
function {
  this = this;
  let i;
  let r;
  let t;
  t = e.parentId;
  if (!((undefined === t))) goto L_37;
  return;
  if (!((0 === t))) goto L_41;
  goto L_8b;
  // [栈深重同步 1 -> 0]
  r = this.nodes.get(t);
  if (!((0 === t))) goto L_b8;
  goto L_10f;
  // [栈深重同步 1 -> 0]
  if (!((r == null))) goto L_c4;
  r;
  goto L_e5;
  if (!((0 === undefined.kind))) goto L_10e;
  goto L_10f;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!((undefined !== i))) goto L_248;
  let t#1;
  t#1 = i.indexOf(e.id);
  if (!((t#1 >= 0))) goto L_247;
  i.splice(t#1, 1);
  if (!((r == null))) goto L_1ab;
  r;
  goto L_1cc;
  if (!((0 === undefined.kind))) goto L_247;
  r.resolvedChildren.splice(t#1, 1);
  this.assertChildrenAligned(r);
  e.parentId = undefined;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=145B file=dil_sandbox/src/DILSandboxContext
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.nodes.get(e);
  if (!((undefined === t))) goto L_8d;
  throw new Error("Unknown DIL sandbox node ".concat(e, "."));
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=145B file=dil_sandbox/src/DILSandboxContext
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.requireNode(e);
  if (!((0 !== t.kind))) goto L_8d;
  throw new Error("DIL sandbox text node ".concat(e, " cannot be used as an element node."));
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=145B file=dil_sandbox/src/DILSandboxContext
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.requireNode(e);
  if (!((1 !== t.kind))) goto L_8d;
  throw new Error("DIL sandbox element node ".concat(e, " cannot be used as a text node."));
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=108B file=dil_sandbox/src/DILSandboxContext
// args: e
function {
  if (!((1 === e.kind))) goto L_49;
  return e.value;
  return e.resolvedElement;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=164B file=dil_sandbox/src/DILSandboxContext
// args: e
function {
  if (!((e.children.length !== e.resolvedChildren.length))) goto L_a3;
  throw new Error("DIL sandbox element node ".concat(e.id, " has misaligned resolved children."));
  return;
}

// fn <atom:0>  args=4 vars=7 closure=0 cpool=0 bc=298B file=dil_sandbox/src/DILSandboxContext
// args: e, t, r, i
// locals: n, s, this
function {
  this = this;
  let n;
  n = this.lastRenderInput;
  if (((undefined === n))) goto L_ab;
  if (((n.appData !== e))) goto L_ab;
  if (((n.constants !== t))) goto L_ab;
  if (!((n.theme !== r))) goto L_b0;
  return false;
  if (!((n.activeBreakpoints.length !== i.length))) goto L_dd;
  return false;
  let s;
  s = 0;
  if (!((s < i.length))) goto L_127;
  if (!((n.activeBreakpoints[s] !== i[s]))) goto L_11d;
  return false;
  s = <s_new>;
  (s++);
  goto L_e2;
  return true;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=191B file=dil_sandbox/src/DILSandboxContext
// args: e
// locals: this
function {
  this = this;
  if (!(this.observedRenderInProgress)) goto L_5b;
  this.observedRenderHadError = true;
  if (!((e instanceof Error))) goto L_41;
  goto L_51;
  // [栈深重同步 2 -> 1]
  this.lastRenderError = new Error(String(e));
  new Error(String(e));
  if (!((e instanceof Error))) goto L_ab;
  goto L_bb;
  // [栈深重同步 3 -> 2]
  this.errorReporter.reportError(new Error(String(e)));
  return;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=49 bc=732B file=dil_sandbox/src/DILSandboxContext
// args: require, module, exports
// locals: e, t, r, i, n, s, o, d, a, h, c, l, p, u, v, I, m, DILSandboxContext, <class_fields_init>, DILSandboxContext#1
function {
  let DILSandboxContext#1;
  let m;
  let I;
  let v;
  let u;
  let p;
  let l;
  let c;
  let h;
  let a;
  let d;
  let o;
  let s;
  let n;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSandboxContext = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("./DILSandboxCallback");
  r = require("./DILSandboxCallbackResults");
  i = require("dil_renderer/src/DILElement");
  n = require("dil_renderer/src/DILRenderer");
  s = require("./DILSandboxHostDictation");
  o = require("dil_renderer/src/DILTextNodeRenderState");
  d = require("dil_renderer/src/DILUserInteraction");
  a = require("./DILRenderOperations");
  h = require("./DILSandboxHostHtmlViewMessengerState");
  c = require("./DILSandboxProtocol");
  l = require("./DILSandboxHostSpeech");
  p = require("./WeakRef");
  u = Symbol("DILHostElementNode");
  v = [];
  I = {};
  m = {count: 0, render: function <atom:0>, renderSelected: function <atom:0>};
  let DILSandboxContext;
  let <class_fields_init>;
  class DILSandboxContext extends undefined { ... }
  <proto:DILSandboxContext>.updateSource = function <atom:0>;
  <proto:DILSandboxContext>.setStateSnapshot = function <atom:0>;
  <proto:DILSandboxContext>.updateAppData = function <atom:0>;
  <proto:DILSandboxContext>.flush = function <atom:0>;
  <proto:DILSandboxContext>.dispose = function <atom:0>;
  <proto:DILSandboxContext>.receive = function <atom:0>;
  <proto:DILSandboxContext>.hasPendingRenderOperations = function <atom:0>;
  <proto:DILSandboxContext>.hasPendingHtmlViewMessengerWork = function <atom:0>;
  <proto:DILSandboxContext>.onElementNodeCreated = function <atom:0>;
  <proto:DILSandboxContext>.onTextNodeCreated = function <atom:0>;
  <proto:DILSandboxContext>.onNodeInteractionScopeChanged = function <atom:0>;
  <proto:DILSandboxContext>.onNodeDestroyed = function <atom:0>;
  <proto:DILSandboxContext>.onNodeMoved = function <atom:0>;
  <proto:DILSandboxContext>.onNodePropChanged = function <atom:0>;
  <proto:DILSandboxContext>.onNodeOpaqueChildrenChanged = function <atom:0>;
  <proto:DILSandboxContext>.onTextNodeChanged = function <atom:0>;
  <proto:DILSandboxContext>.resolveFunction = function <atom:0>;
  <proto:DILSandboxContext>.resolveHtmlViewMessenger = function <atom:0>;
  <proto:DILSandboxContext>.failPermanently = function <atom:0>;
  <proto:DILSandboxContext>.prepareForWorkerRestart = function <atom:0>;
  <proto:DILSandboxContext>.replayMessages = function <atom:0>;
  <proto:DILSandboxContext>.resolveType = function <atom:0>;
  <proto:DILSandboxContext>.applyPendingBatches = function <atom:0>;
  <proto:DILSandboxContext>.getSpeech = function <atom:0>;
  <proto:DILSandboxContext>.rejectDictationStart = function <atom:0>;
  <proto:DILSandboxContext>.getDictation = function <atom:0>;
  <proto:DILSandboxContext>.rejectHostAction = function <atom:0>;
  <proto:DILSandboxContext>.completeHostAction = function <atom:0>;
  <proto:DILSandboxContext>.failHostAction = function <atom:0>;
  <proto:DILSandboxContext>.clearRetainedState = function <atom:0>;
  <proto:DILSandboxContext>.getHtmlViewMessengerState = function <atom:0>;
  <proto:DILSandboxContext>.isActive = function <atom:0>;
  <proto:DILSandboxContext>.renderChildren = function <atom:0>;
  <proto:DILSandboxContext>.renderNode = function <atom:0>;
  <proto:DILSandboxContext>.renderElementNode = function <atom:0>;
  <proto:DILSandboxContext>.renderTextNode = function <atom:0>;
  <proto:DILSandboxContext>.renderSelectedChildren = function <atom:0>;
  <proto:DILSandboxContext>.reportInvalidSelectedChild = function <atom:0>;
  <proto:DILSandboxContext>.removeNodeFromParent = function <atom:0>;
  <proto:DILSandboxContext>.requireNode = function <atom:0>;
  <proto:DILSandboxContext>.requireElementNode = function <atom:0>;
  <proto:DILSandboxContext>.requireTextNode = function <atom:0>;
  <proto:DILSandboxContext>.resolveNodeValue = function <atom:0>;
  <proto:DILSandboxContext>.assertChildrenAligned = function <atom:0>;
  <proto:DILSandboxContext>.renderInputsEqual = function <atom:0>;
  <proto:DILSandboxContext>.reportError = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxContext>;
  DILSandboxContext = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxContext#1 = function <atom:0>;
  exports.DILSandboxContext = DILSandboxContext#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxContext
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
