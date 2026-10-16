// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=55B file=dil_sandbox/src/DILSandbox
function {
  return Promise.reject(new Error("DIL sandbox context is permanently failed."));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_sandbox/src/DILSandbox
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_sandbox/src/DILSandbox
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_sandbox/src/DILSandbox
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_sandbox/src/DILSandbox
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_sandbox/src/DILSandbox
function {
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=101B file=dil_sandbox/src/DILSandbox
// args: e, t
// closure: this, exports
function {
  this.enqueueMessage({kind: 0, contextId: 0, registryId: e, elements: t}, exports.DIL_SANDBOX_DEFAULT_MESSAGE_TIMEOUT_MS, undefined, false, undefined);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_sandbox/src/DILSandbox
// closure: this
function {
  return this.observeApplicationBackground();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=2 bc=375B file=dil_sandbox/src/DILSandbox
// locals: this
// closure: exports, <class_fields_init>, m, d
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.contexts = new Map();
  this.elementRegistries = new m.DILElementRegistryRegistrationStore(function <atom:0>);
  this.initialized = false;
  this.interactionIdsWithRenderOperations = new Set();
  this.nextContextId = 1;
  this.nextMessageId = 1;
  this.nextTraceCollectionId = 1;
  this.pendingFlushes = new Set();
  this.pendingTraceCollections = new Map();
  this.controlMessages = [];
  this.readyContexts = [];
  this.timedOutWorkers = new Map();
  this.workerGeneration = 0;
  this.isBackgrounded = false;
  if (!(("function" == typeof MessageChannel))) goto L_116;
  goto L_117;
  // [栈深重同步 2 -> 1]
  this.messageChannelConstructor = undefined;
  this.applicationObserver = d.withGlobalNativeRefs(function <atom:0>);
  this.startWorker();
  return;
}

// fn <atom:0>  args=8 vars=12 closure=1 cpool=0 bc=494B file=dil_sandbox/src/DILSandbox
// args: e, t, s, o, i, r, n, a
// locals: d, c, l, this
// closure: h
function {
  this = this;
  let l;
  let c;
  let d;
  this.nextContextId = <this.nextContextId_new>;
  d = (this.nextContextId++);
  c = this.elementRegistries.getOrRegister(o);
  l = new h.DILSandboxContext(d, e, t, s, c, i, r, n, this);
  this.contexts.set(d, {context: l, owner: a, messages: [], preparationTimeout: undefined, lastInputCommand: undefined});
  this.post({kind: 1, contextId: d, source: e.source, requiredComponents: e.requiredComponents, registryId: c.id, fixedTimeMs: t, errorMode: s, stateSnapshot: undefined});
  return l;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=361B file=dil_sandbox/src/DILSandbox
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.contexts.get(e);
  if (!((undefined !== t))) goto L_168;
  this.contexts.delete(e);
  this.cancelContextMessages(t);
  this.enqueueMessage({kind: 5, contextId: e}, t.owner.messageTimeoutMs, t.owner, false, undefined);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=445B file=dil_sandbox/src/DILSandbox
// args: e
// locals: t, this
// closure: exports
function {
  this = this;
  let t;
  if (!((0 === e.contextId))) goto L_2f;
  goto L_c0;
  // [栈深重同步 1 -> 0]
  if (!((this.contexts.get(e.contextId) == null))) goto L_9f;
  this.contexts.get(e.contextId);
  goto L_c0;
  t = undefined.owner;
  if (((0 === e.contextId))) goto L_ee;
  if (!((undefined !== t))) goto L_1bc;
  if (!((t == null))) goto L_121;
  t;
  goto L_142;
  if (!((undefined.messageTimeoutMs == null))) goto L_169;
  undefined.messageTimeoutMs;
  if (!((this.enqueueMessage(e, exports.DIL_SANDBOX_DEFAULT_MESSAGE_TIMEOUT_MS, t, false, undefined).completion == null))) goto L_19a;
  this.enqueueMessage(e, exports.DIL_SANDBOX_DEFAULT_MESSAGE_TIMEOUT_MS, t, false, undefined).completion;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.result;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=162B file=dil_sandbox/src/DILSandbox
// args: e
// locals: this
function {
  this = this;
  if (!((this.contexts.get(e) == null))) goto L_51;
  this.contexts.get(e);
  goto L_72;
  if (!((undefined.lastInputCommand == null))) goto L_a1;
  undefined.lastInputCommand;
  return Promise.resolve(undefined);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=93B file=dil_sandbox/src/DILSandbox
// args: e
// locals: this
function {
  this = this;
  this.post({kind: 10, contextId: e.contextId, signal: e});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=173B file=dil_sandbox/src/DILSandbox
// closure: this, o, e
function {
  if (!(this.pendingFlushes.delete(o))) goto L_ac;
  o.reject(new Error("Timed out waiting ".concat(e, "ms for the DIL sandbox message queue to drain.")));
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=143B file=dil_sandbox/src/DILSandbox
// args: t, s
// locals: o
// closure: this, e
function {
  let o;
  o = {reject: s, resolve: t, timeoutId: setTimeout(function <atom:0>, e)};
  this.pendingFlushes.add(o);
  this.resolvePendingFlushesIfIdle();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=95B file=dil_sandbox/src/DILSandbox
// args: e
// locals: this
function {
  this = this;
  if (!(this.isIdle())) goto L_53;
  return Promise.resolve();
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=201B file=dil_sandbox/src/DILSandbox
// args: e
// locals: t
// closure: this, o
function {
  let t;
  t = this.pendingTraceCollections.get(o);
  if (!((undefined !== t))) goto L_c8;
  this.pendingTraceCollections.delete(o);
  t.reject(e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=202B file=dil_sandbox/src/DILSandbox
// args: t, s
// locals: o
// closure: this, e
function {
  let o;
  this.nextTraceCollectionId = <this.nextTraceCollectionId_new>;
  o = (this.nextTraceCollectionId++);
  this.pendingTraceCollections.set(o, {reject: s, resolve: t});
  this.enqueueMessage({kind: 11, contextId: 0, traceCollectionId: o}, e, undefined, true, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=14B file=dil_sandbox/src/DILSandbox
// args: e
// locals: this
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=5 vars=12 closure=0 cpool=0 bc=1422B file=dil_sandbox/src/DILSandbox
// args: e, t, s, o, i
// locals: r, n, t#1, s#1, a, t#2, this
function {
  this = this;
  let a;
  let n;
  let r;
  r = this.contexts.get(e.contextId);
  if (!((r == null))) goto L_81;
  r;
  goto L_ca;
  n = undefined.messages[(r.messages.length - 1)];
  if (!((undefined !== n))) goto L_2e2;
  if (!((r == null))) goto L_e3;
  r;
  goto L_106;
  if (!((n !== undefined.messages[0]))) goto L_2e2;
  if (!((3 === n.message.kind))) goto L_2e2;
  if (!((3 === e.kind))) goto L_2e2;
  let s#1;
  let t#1;
  t#1 = JSON.stringify(e.appData);
  s#1 = JSON.stringify(e.constants);
  null;
  n.message;
  null;
  e;
  if (!(("requiredComponents" in e))) goto L_2b1;
  if (!((e.requiredComponents == null))) goto L_286;
  e.requiredComponents;
  goto L_2aa;
  goto L_2b2;
  // [栈深重同步 3 -> 2]
  null;
  {};
  n.message = {};
  n.serializedAppData = t#1;
  n.serializedConstants = s#1;
  return n;
  a = this.makeQueuedMessage(e, t, s, i);
  if (((0 === e.contextId))) goto L_35c;
  if (!((5 === e.kind))) goto L_3fe;
  if (!(o)) goto L_3b0;
  goto L_3fa;
  // [栈深重同步 1 -> 0]
  this.controlMessages.push(a);
  goto L_563;
  let t#2;
  t#2 = this.contexts.get(e.contextId);
  if (!((undefined === t#2))) goto L_4a1;
  this.completeContextUpdate(a);
  return a;
  t#2.messages.push(a);
  if (!((1 === t#2.messages.length))) goto L_562;
  this.readyContexts.push(t#2);
  this.dispatchNextMessage();
  return a;
}

// fn <atom:0>  args=4 vars=10 closure=1 cpool=0 bc=958B file=dil_sandbox/src/DILSandbox
// args: e, s, o, i
// locals: r, n, a, d, c, this
// closure: t
function {
  this = this;
  let c;
  let d;
  let a;
  let n;
  let r;
  if (!((3 === e.kind))) goto L_85;
  goto L_86;
  // [栈深重同步 1 -> 0]
  r = undefined;
  if (!((3 === e.kind))) goto L_fa;
  goto L_fb;
  // [栈深重同步 1 -> 0]
  n = undefined;
  a = this.contexts.get(e.contextId);
  d = undefined;
  if (((undefined === a))) goto L_2c2;
  if (!((3 !== e.kind))) goto L_211;
  if (!((2 !== e.kind))) goto L_211;
  if (!((9 !== e.kind))) goto L_211;
  if (((6 !== e.kind))) goto L_2c2;
  d = new t.DILSandboxCommand(s, this.isBackgrounded);
  new t.DILSandboxCommand(s, this.isBackgrounded);
  if (!((6 !== e.kind))) goto L_2c2;
  a.lastInputCommand = d.result;
  d.result;
  c = this.enqueueContextUpdate(o);
  this.nextMessageId = <this.nextMessageId_new>;
  if (!(("requiredComponents" in e))) goto L_38d;
  null;
  e;
  if (!((e.requiredComponents == null))) goto L_362;
  e.requiredComponents;
  goto L_386;
  goto L_38e;
  // [栈深重同步 2 -> 1]
  return {messageId: (this.nextMessageId++), completion: d, message: e, onError: i, owner: o, serializedAppData: r, serializedConstants: n, timeoutMs: s, contextUpdateId: c};
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=122B file=dil_sandbox/src/DILSandbox
// closure: this, o, s
function {
  return this.finishComponentPreparation(o, "Timed out waiting ".concat(s.timeoutMs, "ms to load DIL components."));   // tail call
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=1 bc=970B file=dil_sandbox/src/DILSandbox
// args: e
// locals: t, s, o, t#1, this
function {
  this = this;
  if (!(e.loading)) goto L_268;
  let o;
  let s;
  let t;
  t = this.activeHostMessage;
  if (!((t == null))) goto L_62;
  t;
  goto L_a4;
  if (!((undefined.queued.messageId !== e.messageId))) goto L_ca;
  return;
  t.timeout.dispose();
  this.activeHostMessage = undefined;
  s = t.queued;
  o = this.contexts.get(e.contextId);
  if (!((undefined !== o))) goto L_210;
  o.preparationTimeout = this.scheduleWatchdogTimeout(function <atom:0>, s.timeoutMs);
  goto L_239;
  // [栈深重同步 1 -> 0]
  this.completeContextUpdate(s);
  this.dispatchNextMessage();
  // close_loc o
  // close_loc s
  return;
  let t#1;
  t#1 = this.contexts.get(e.contextId);
  if (!((t#1 == null))) goto L_2e0;
  t#1;
  goto L_32c;
  if (!((undefined.messages[0] == null))) goto L_30b;
  undefined.messages[0];
  goto L_32c;
  if (!((undefined.messageId === e.messageId))) goto L_3c8;
  if (!((undefined !== t#1.preparationTimeout))) goto L_3c8;
  this.finishComponentPreparation(t#1, e.error);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=608B file=dil_sandbox/src/DILSandbox
// args: t, s
// locals: i, o, this
// closure: e
function {
  this = this;
  this.cancelPreparation(t);
  if (!((undefined !== s))) goto L_1cc;
  let i;
  i = new Error(s);
  this.destroyContext(t.messages[0].message.contextId);
  try { // catch -> L_11d
  t.context.failPermanently(i);
  <?>;
  goto L_17f;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_17e
  if (!(e.isLoggingEnabled)) goto L_17a;
  console.error("Failed to clear a DIL context after component loading failed.", o);
  <?>;
  goto L_17f;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.reportOwnerError(t.owner, i);
  goto L_214;
  this.readyContexts.push(t);
  this.dispatchNextMessage();
  this.resolvePendingFlushesIfIdle();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=569B file=dil_sandbox/src/DILSandbox
// args: e
// locals: t, s, this
function {
  this = this;
  let t;
  t = this.readyContexts.indexOf(e);
  if (!((-1 !== t))) goto L_a0;
  this.readyContexts.splice(t, 1);
  this.cancelPreparation(e);
  let s;
  for (const s of e.messages.splice(0)) {
    if (!((s.completion == null))) goto L_143;
    s.completion;
    goto L_168;
    undefined.complete(undefined);
    if (!((this.activeHostMessage == null))) goto L_196;
    this.activeHostMessage;
    goto L_1b7;
    if (!((s !== undefined.queued))) goto L_22e;
    this.discardMessageInteraction(s.message);
    this.completeContextUpdate(s);
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=91B file=dil_sandbox/src/DILSandbox
// args: e
function {
  if (!((e.preparationTimeout == null))) goto L_2a;
  e.preparationTimeout;
  goto L_4e;
  undefined.dispose();
  e.preparationTimeout = undefined;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=181B file=dil_sandbox/src/DILSandbox
// args: e
// locals: t
// closure: C
function {
  if (!((undefined !== e))) goto L_b4;
  if (!(C.enqueueContextUpdate)) goto L_b4;
  let t;
  if (!((undefined === C.markContextUpdateCompleted))) goto L_5d;
  return;
  t = C.enqueueContextUpdate(e.valdiContextId);
  if (!((0 === t))) goto L_b0;
  return undefined;
  return t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=220B file=dil_sandbox/src/DILSandbox
// args: e
// locals: t
// closure: C
function {
  let t;
  t = e.contextUpdateId;
  if (!((undefined !== t))) goto L_db;
  e.contextUpdateId = undefined;
  if (!((undefined !== e.owner))) goto L_db;
  if (!((C.markContextUpdateCompleted == null))) goto L_92;
  C.markContextUpdateCompleted;
  C;
  goto L_db;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_sandbox/src/DILSandbox
// closure: this, s
function {
  this.handleMessageTimeout(s);
  return;
}

// fn <atom:0>  args=0 vars=7 closure=3 cpool=1 bc=988B file=dil_sandbox/src/DILSandbox
// locals: e, t, s, o, i, r, this
// closure: M, v, u
function {
  this = this;
  let i;
  let o;
  let s;
  let t;
  let e;
  if ((!this.initialized)) goto L_5f;
  if (!((undefined !== this.activeHostMessage))) goto L_62;
  return;
  e = this.controlMessages.shift();
  t = undefined;
  s = undefined;
  if (!((undefined !== e))) goto L_c0;
  s = e;
  e;
  goto L_166;
  t = this.readyContexts.shift();
  this.readyContexts.shift();
  if (!((undefined === t))) goto L_13b;
  this.resolvePendingFlushesIfIdle();
  return;
  s = t.messages[0];
  t.messages[0];
  o = this.scheduleWatchdogTimeout(function <atom:0>, s.timeoutMs);
  this.activeHostMessage = {queued: s, context: t, timeout: o, hostActionDispatched: false};
  i = {messageId: s.messageId, message: s.message};
  try { // catch -> L_360
  M(v.dilSandboxHostSendRequestTraceTag(i.message.kind), i.messageId);
  this.transport.post(i, s.serializedAppData, s.serializedConstants);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_3db
  this.restartWorker(u.toDILSandboxError(r), s.owner);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=dil_sandbox/src/DILSandbox
// closure: o, t
function {
  return o.receive(t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=dil_sandbox/src/DILSandbox
// closure: o, t
function {
  return o.receive(t);   // tail call
}

// fn <atom:0>  args=2 vars=9 closure=6 cpool=2 bc=3856B file=dil_sandbox/src/DILSandbox
// args: t, s
// locals: e, s#1, o, s#2, e#1, e#2, this
// closure: M, i, g, e, p, I
function {
  this = this;
  let o;
  if (!((10 === t.kind))) goto L_57;
  this.receivePolyfilledTraces(t, s);
  return;
  if (!((s !== this.workerGeneration))) goto L_7f;
  return;
  if (!((13 === t.kind))) goto L_cf;
  this.receiveComponentPreparation(t);
  return;
  if (!((2 === t.kind))) goto L_183;
  try { // catch -> L_132
  M("DILSandbox.HostReceiveAcknowledgement", t.messageId);
  <?>;
  // gosub (finally 块) 312
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 312
  throw <?>;
  this.receiveAcknowledgement(t.messageId);
  // ret (finally 块) 
  return;
  if (!((1 === t.kind))) goto L_3cd;
  let s#1;
  let e;
  e = new Error(t.message);
  if (!((undefined !== t.stack))) goto L_235;
  e.stack = t.stack;
  t.stack;
  if (!((this.activeHostMessage == null))) goto L_261;
  this.activeHostMessage;
  goto L_282;
  s#1 = undefined.queued;
  if (!((s#1 == null))) goto L_28e;
  s#1;
  goto L_2d0;
  if (!((undefined.message.contextId === t.contextId))) goto L_3cc;
  this.discardMessageInteraction(s#1.message);
  if (!((s#1.onError == null))) goto L_372;
  s#1.onError;
  s#1;
  goto L_378;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e);
  if (!((s#1.completion == null))) goto L_3a5;
  s#1.completion;
  goto L_3cc;
  undefined.complete(e);
  if (!((this.contexts.get(t.contextId) == null))) goto L_43e;
  this.contexts.get(t.contextId);
  goto L_45f;
  o = undefined.context;
  if (!((4 === t.kind))) goto L_871;
  let s#2;
  if ((i.isNonConsumingAction(t.action.type, t.action.handler))) goto L_5ab;
  if (!((undefined === t.interactionId))) goto L_68f;
  if (!(g.isDILSandboxBoundServerAction(t.action))) goto L_68f;
  if (!((this.activeHostMessage == null))) goto L_5db;
  this.activeHostMessage;
  goto L_63e;
  if (!((undefined.queued.message.contextId === t.contextId))) goto L_721;
  goto L_721;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== t.interactionId))) goto L_721;
  s#2 = this.acceptInteraction(t.contextId, t.interactionId);
  if (((undefined === o))) goto L_72f;
  if (!(!s#2)) goto L_7c2;
  if (!(e.isLoggingEnabled)) goto L_78a;
  console.warn("Ignoring a DIL sandbox host action without its active context or required interaction.");
  if (!((o == null))) goto L_796;
  o;
  goto L_7c0;
  undefined.rejectHostAction(t, "DIL sandbox host actions require an active context and fresh user interaction.");
  return;
  try { // catch -> L_7f9
  o.receive(t);
  <?>;
  // gosub (finally 块) 2047
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 2047
  throw <?>;
  if (!((undefined !== t.interactionId))) goto L_86e;
  i.discardDILUserInteractionId(t.interactionId);
  // ret (finally 块) 
  return;
  if (!((12 === t.kind))) goto L_a9d;
  if (!((t.command.kind === p.DILDictationCommandKind.Start))) goto L_a9d;
  let e#1;
  if (!((undefined === o))) goto L_934;
  return;
  e#1 = t.command.interactionId;
  if (!(!this.acceptInteraction(t.contextId, e#1))) goto L_a33;
  o.rejectDictationStart(t.command.id);
  return;
  try { // catch -> L_a6c
  i.runWithDILUserInteractionId(e#1, function <atom:0>);
  <?>;
  // gosub (finally 块) 2674
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 2674
  throw <?>;
  i.discardDILUserInteractionId(e#1);
  // ret (finally 块) 
  return;
  if (!((11 === t.kind))) goto L_def;
  if (((t.command.kind === I.DILSpeechCommandKind.Play))) goto L_be0;
  if (!((t.command.kind === I.DILSpeechCommandKind.Stop))) goto L_def;
  let e#2;
  e#2 = t.command.interactionId;
  if (!((undefined === o))) goto L_c35;
  return;
  if (((undefined === e#2))) goto L_c8a;
  if (!(!this.acceptInteraction(t.contextId, e#2))) goto L_d85;
  if (!((t.command.kind === I.DILSpeechCommandKind.Stop))) goto L_d83;
  null;
  t;
  null;
  t.command;
  o.receive({command: {interactionId: undefined, logging: undefined}});
  return;
  try { // catch -> L_dbe
  i.runWithDILUserInteractionId(e#2, function <atom:0>);
  <?>;
  // gosub (finally 块) 3524
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 3524
  throw <?>;
  i.discardDILUserInteractionId(e#2);
  // ret (finally 块) 
  return;
  if (!((undefined !== o))) goto L_eb7;
  if (!((0 === t.kind))) goto L_eb7;
  if (!((undefined !== t.interactionId))) goto L_eb7;
  this.interactionIdsWithRenderOperations.add(t.interactionId);
  if (!((o == null))) goto L_ec3;
  o;
  goto L_ee8;
  undefined.receive(t);
  this.resolvePendingFlushesIfIdle();
  return;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=909B file=dil_sandbox/src/DILSandbox
// args: e, t
// locals: s, t#1, o, this
function {
  this = this;
  let o;
  let s;
  s = this.timedOutWorkers.get(e.traceCollectionId);
  if (!((undefined !== s))) goto L_23e;
  if (!((s.generation === t))) goto L_23e;
  let t#1;
  t#1 = this.pendingTraceCollections.get(e.traceCollectionId);
  this.finishTimedOutWorker(e.traceCollectionId, e.traces, true);
  if (!((undefined !== t#1))) goto L_23c;
  this.pendingTraceCollections.delete(e.traceCollectionId);
  t#1.resolve(e.traces);
  return;
  if (!((t !== this.workerGeneration))) goto L_265;
  return;
  o = this.pendingTraceCollections.get(e.traceCollectionId);
  if (!((undefined !== o))) goto L_38c;
  this.pendingTraceCollections.delete(e.traceCollectionId);
  o.resolve(e.traces);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=371B file=dil_sandbox/src/DILSandbox
// args: e, t
// locals: s, o, this
// closure: i
function {
  this = this;
  let o;
  let s;
  s = this.activeHostMessage;
  if (!((s == null))) goto L_36;
  s;
  goto L_78;
  o = undefined.queued.message;
  if (((undefined === s))) goto L_15d;
  if ((s.hostActionDispatched)) goto L_15d;
  if (!((o == null))) goto L_bc;
  o;
  goto L_dd;
  if (((6 !== undefined.kind))) goto L_15d;
  if (((o.contextId !== e))) goto L_15d;
  if (((o.interactionId !== t))) goto L_15d;
  if (!(!!i.hasDILUserInteractionId(t))) goto L_172;
  s.hostActionDispatched = true;
  return true;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=1298B file=dil_sandbox/src/DILSandbox
// args: e
// locals: t, s, this
function {
  this = this;
  let s;
  let t;
  t = this.activeInitialization;
  if (!((t == null))) goto L_36;
  t;
  goto L_57;
  if (!((undefined.messageId === e))) goto L_10b;
  t.timeout.dispose();
  this.activeInitialization = undefined;
  this.initialized = true;
  this.dispatchNextMessage();
  this.resolvePendingFlushesIfIdle();
  return;
  s = this.activeHostMessage;
  if (!((s == null))) goto L_139;
  s;
  goto L_17b;
  if (!((undefined.queued.messageId === e))) goto L_511;
  s.timeout.dispose();
  if (!((s.queued.completion == null))) goto L_218;
  s.queued.completion;
  goto L_23d;
  undefined.complete(undefined);
  this.activeHostMessage = undefined;
  if (!((s.context == null))) goto L_275;
  s.context;
  goto L_298;
  if (!((undefined.messages[0] === s.queued))) goto L_3e4;
  s.context.messages.shift();
  if (!((s.context.messages.length > 0))) goto L_3e4;
  this.readyContexts.push(s.context);
  try { // catch -> L_45e
  this.finishInteractionMessage(s.queued.message);
  <?>;
  // gosub (finally 块) 1124
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1124
  throw <?>;
  try { // catch -> L_4bf
  this.dispatchNextMessage();
  this.resolvePendingFlushesIfIdle();
  <?>;
  // gosub (finally 块) 1221
  undefined;
  goto L_510;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1221
  throw <?>;
  this.completeContextUpdate(s.queued);
  // ret (finally 块) 
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=416B file=dil_sandbox/src/DILSandbox
// locals: e, this
function {
  this = this;
  if ((!this.initialized)) goto L_76;
  if (((undefined !== this.activeHostMessage))) goto L_76;
  if (!((0 !== this.controlMessages.length))) goto L_7b;
  return false;
  let e;
  for (const e of this.contexts.values()) {
    if (((0 !== e.messages.length))) goto L_18b;
    if ((e.context.hasPendingRenderOperations())) goto L_18b;
    if (!(e.context.hasPendingHtmlViewMessengerWork())) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=327B file=dil_sandbox/src/DILSandbox
// locals: e, this
function {
  this = this;
  if (!((0 !== this.pendingFlushes.size))) goto L_146;
  if (!(this.isIdle())) goto L_146;
  let e;
  for (const e of this.pendingFlushes) {
    clearTimeout(e.timeoutId);
    this.pendingFlushes.delete(e);
    e.resolve();
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=215B file=dil_sandbox/src/DILSandbox
// args: e
// locals: this
// closure: exports
function {
  this = this;
  if (!((this.activeInitialization == null))) goto L_2c;
  this.activeInitialization;
  goto L_4d;
  if (!((undefined.messageId === e))) goto L_d6;
  this.restartWorkerAfterTimeout(new Error("Timed out waiting ".concat(exports.DIL_SANDBOX_DEFAULT_MESSAGE_TIMEOUT_MS, "ms for the DIL sandbox worker to initialize.")), undefined, undefined);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=292B file=dil_sandbox/src/DILSandbox
// args: e
// locals: t, this
// closure: w
function {
  this = this;
  let t;
  if (!((this.activeHostMessage == null))) goto L_2f;
  this.activeHostMessage;
  goto L_50;
  if (!((undefined.queued !== e))) goto L_55;
  return;
  t = new Error("Timed out waiting ".concat(e.timeoutMs, "ms for the DIL sandbox worker to process ", w(e.message), "."));
  this.restartWorkerAfterTimeout(t, e.owner, e);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=254B file=dil_sandbox/src/DILSandbox
// args: e, t
// locals: s, o, this
function {
  this = this;
  let o;
  let s;
  s = this.detachCurrentWorker(e, undefined);
  this.terminateDetachedWorker(s);
  o = this.prepareWorkerRestart(s.cancelledMessages, t, e);
  this.startWorker();
  if (!((undefined !== o))) goto L_fd;
  this.reportOwnerError(o, e);
  return;
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=0 bc=390B file=dil_sandbox/src/DILSandbox
// args: e, t, s
// locals: i, r, n, a, this
// closure: o
function {
  this = this;
  let a;
  let n;
  let r;
  let i;
  i = o.collectPolyfilledTraces();
  if (!((s == null))) goto L_40;
  s;
  goto L_82;
  if (!((11 === undefined.message.kind))) goto L_88;
  goto L_89;
  // [栈深重同步 1 -> 0]
  r = undefined;
  if (!((r == null))) goto L_b9;
  r;
  goto L_da;
  n = this.detachCurrentWorker(e, undefined.messageId);
  a = this.prepareWorkerRestart(n.cancelledMessages, t, e);
  this.startWorker();
  this.collectTimedOutWorkerTraces(n, e, i, a, r);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=138B file=dil_sandbox/src/DILSandbox
// args: e, t
// closure: r, this, exports
function {
  r.push(this.makeQueuedMessage({kind: 0, contextId: 0, registryId: e, elements: t}, exports.DIL_SANDBOX_DEFAULT_MESSAGE_TIMEOUT_MS, undefined, undefined));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=144B file=dil_sandbox/src/DILSandbox
// args: t
// closure: this, e
function {
  return this.makeQueuedMessage(t, e.owner.messageTimeoutMs, e.owner, undefined);   // tail call
}

// fn <atom:0>  args=3 vars=12 closure=2 cpool=2 bc=1150B file=dil_sandbox/src/DILSandbox
// args: t, s, o
// locals: i, a, n, r, e, t#1, s#1, e#1, this
// closure: exports, e
function {
  this = this;
  let r;
  let i;
  if (!((undefined !== s))) goto L_3b;
  if (!(this.failOwner(s, o))) goto L_3b;
  goto L_3c;
  // [栈深重同步 1 -> 0]
  i = undefined;
  let a;
  for (const a of this.contexts.values()) {
    a.lastInputCommand = undefined;
    try { // catch -> L_ea
    a.context.prepareForWorkerRestart();
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    n = <?>;
    try { // catch -> L_14b
    if (!(e.isLoggingEnabled)) goto L_147;
    console.error("Failed to clear a DIL sandbox context during worker recovery.", n);
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  r = [];
  this.elementRegistries.forEachRegistration(function <atom:0>);
  // append([], 0, r)
  r;
  this.controlMessages.unshift.apply(this.controlMessages, []);
  let e;
  // close_loc e
  for (const e of this.contexts.values()) {
    let s#1;
    let t#1;
    t#1 = e.lastInputCommand;
    s#1 = e.context.replayMessages().map(function <atom:0>);
    // append([], 0, s#1)
    s#1;
    e.messages.unshift.apply(e.messages, []);
    if (!((t#1 == null))) goto L_366;
    t#1;
    e.lastInputCommand = e.lastInputCommand;
    // close_loc e
  }
  // close_loc e
  this.readyContexts.length = 0;
  // append([], 0, this.contexts.values())
  this.contexts.values();
  this.readyContexts.push.apply(this.readyContexts, []);
  let e#1;
  for (const e#1 of t) {
    this.completeContextUpdate(e#1);
  }
  return i;
}

// fn <atom:0>  args=2 vars=8 closure=1 cpool=0 bc=567B file=dil_sandbox/src/DILSandbox
// args: t, s
// locals: o, i, n, a, r, this
// closure: e
function {
  this = this;
  let o;
  o = false;
  try { // catch -> L_3b
  o = t.markPermanentlyFailed();
  t.markPermanentlyFailed();
  <?>;
  goto L_9d;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_9c
  if (!(e.isLoggingEnabled)) goto L_98;
  console.error("Failed to mark a DIL sandbox owner as failed.", i);
  <?>;
  goto L_9d;
  // [栈深重同步 0 -> 1]
  throw <?>;
  let a;
  let n;
  const _it1 = this.contexts;
  goto L_22a;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  n = <value(_it2)>;
  <done(_it2)>;
  a = <value(_it2)>;
  if (!((a.owner === t))) goto L_22a;
  this.contexts.delete(n);
  this.cancelContextMessages(a);
  try { // catch -> L_1c6
  a.context.failPermanently(s);
  <catch>;
  goto L_22a;
  r = <value(_it2)>;
  try { // catch -> L_229
  if (!(e.isLoggingEnabled)) goto L_225;
  console.error("Failed to clear a timed-out DIL sandbox context.", r);
  <catch>;
  goto L_22a;
  // [栈深重同步 2 -> 4]
  throw <?>;
  // [栈深重同步 3 -> 2]
  if (!(<done(<?>)>)) goto L_ca;
  <value(<?>)>;
  return o;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=143B file=dil_sandbox/src/DILSandbox
// args: t, s
// locals: o
// closure: e
function {
  try { // catch -> L_2e
  t.reportError(s);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_8e
  if (!(e.isLoggingEnabled)) goto L_8b;
  console.error("Failed to report a DIL sandbox error.", o);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=7 closure=1 cpool=0 bc=1058B file=dil_sandbox/src/DILSandbox
// locals: t, o, t#1, s, e, e#1, this
// closure: e
function {
  this = this;
  let s;
  let t;
  this.applicationObserver.cancel();
  t = new Error("DIL sandbox worker retired before queued work completed.");
  let o;
  for (const o of this.contexts.values()) {
    try { // catch -> L_103
    o.context.failPermanently(t);
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    t#1 = <?>;
    try { // catch -> L_164
    if (!(e.isLoggingEnabled)) goto L_160;
    console.error("Failed to retire a DIL sandbox context.", t#1);
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  s = this.detachCurrentWorker(t, undefined);
  this.contexts.clear();
  let e;
  for (const e of s.cancelledMessages) {
    this.completeContextUpdate(e);
  }
  this.terminateDetachedWorker(s);
  let e#1;
  for (const e#1 of this.timedOutWorkers.values()) {
    clearTimeout(e#1.timeoutId);
    e#1.transport.dispose();
    e#1.worker.terminate();
    if (!((e#1.timedOutTraceCollection == null))) goto L_3a0;
    e#1.timedOutTraceCollection;
    goto L_3d0;
    if (!((undefined.onError == null))) goto L_3ca;
    undefined.onError;
    undefined;
    goto L_3d0;
    // [栈深重同步 4 -> 5]
    <?>.call(undefined, t);
  }
  this.timedOutWorkers.clear();
  return;
}

// fn <atom:0>  args=2 vars=14 closure=0 cpool=0 bc=1597B file=dil_sandbox/src/DILSandbox
// args: e, t
// locals: s, o, i, r, n, a, d, e#1, d#1, d#2, d#3, this
function {
  this = this;
  let a;
  let n;
  let r;
  let i;
  let o;
  let s;
  s = [];
  o = this.workerGeneration;
  i = this.transport;
  r = this.worker;
  this.initialized = false;
  n = this.activeInitialization;
  if (!((undefined !== n))) goto L_116;
  n.timeout.dispose();
  this.activeInitialization = undefined;
  undefined;
  a = this.activeHostMessage;
  if (!((undefined !== a))) goto L_1ea;
  s.push(a.queued);
  a.timeout.dispose();
  this.activeHostMessage = undefined;
  undefined;
  // append([], 0, this.controlMessages.splice(0))
  this.controlMessages.splice(0);
  s.push.apply(s, []);
  this.readyContexts.length = 0;
  let d;
  for (const d of this.contexts.values()) {
    this.cancelPreparation(d);
    let e#1;
    for (const e#1 of d.messages.splice(0)) {
      if (!((a == null))) goto L_368;
      a;
      goto L_389;
      if (!((e#1 !== undefined.queued))) goto L_3b8;
      s.push(e#1);
      // [栈深重同步 3 -> 6]
    }
  }
  let d#1;
  for (const d#1 of s) {
    this.discardMessageInteraction(d#1.message);
    if (!((d#1.completion == null))) goto L_44b;
    d#1.completion;
    goto L_470;
    undefined.complete(e);
  }
  let d#2;
  for (const d#2 of s) {
    if (!((d#2.messageId !== t))) goto L_4e0;
    if (!((d#2.onError == null))) goto L_4dc;
    d#2.onError;
    d#2;
    goto L_4e0;
    // [栈深重同步 4 -> 5]
    <?>.call(undefined, e);
  }
  this.interactionIdsWithRenderOperations.clear();
  let d#3;
  for (const d#3 of this.pendingFlushes) {
    clearTimeout(d#3.timeoutId);
    this.pendingFlushes.delete(d#3);
    d#3.reject(e);
  }
  this.transport = undefined;
  this.worker = undefined;
  return {cancelledMessages: s, generation: o, transport: i, worker: r};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=158B file=dil_sandbox/src/DILSandbox
// args: e
function {
  if (!((e.transport == null))) goto L_2a;
  e.transport;
  goto L_4e;
  undefined.dispose();
  if (!((e.worker == null))) goto L_79;
  e.worker;
  goto L_9d;
  undefined.terminate();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=46B file=dil_sandbox/src/DILSandbox
// closure: this, d
function {
  this.finishTimedOutWorker(d, [], false);
  return;
}

// fn <atom:0>  args=5 vars=13 closure=5 cpool=1 bc=1140B file=dil_sandbox/src/DILSandbox
// args: t, s, o, i, r
// locals: n, a, d, c, l, h, m, this
// closure: u, f, M, v, e
function {
  this = this;
  let h;
  let l;
  let c;
  let d;
  let a;
  let n;
  n = t.transport;
  a = t.worker;
  if (((undefined === n))) goto L_69;
  if (!((undefined === a))) goto L_165;
  if (!((n == null))) goto L_79;
  n;
  goto L_9d;
  undefined.dispose();
  if (!((a == null))) goto L_a9;
  a;
  goto L_cd;
  undefined.terminate();
  if (!((r == null))) goto L_d9;
  r;
  goto L_107;
  if (!((undefined.onError == null))) goto L_103;
  undefined.onError;
  undefined;
  goto L_107;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, s);
  if (!((undefined !== i))) goto L_163;
  this.reportOwnerError(i, new u.DILSandboxTimeoutError(s, o, []));
  return;
  if (!((r == null))) goto L_172;
  r;
  goto L_1b4;
  if (!((11 === undefined.message.kind))) goto L_1fe;
  goto L_22c;
  // [栈深重同步 1 -> 0]
  this.nextTraceCollectionId = <this.nextTraceCollectionId_new>;
  d = (this.nextTraceCollectionId++);
  c = setTimeout(function <atom:0>, f);
  this.timedOutWorkers.set(d, {error: s, generation: t.generation, mainThreadTraces: o, owner: i, timedOutTraceCollection: r, timeoutId: c, transport: n, worker: a});
  if (!((undefined !== r))) goto L_2e6;
  return;
  this.nextMessageId = <this.nextMessageId_new>;
  l = (this.nextMessageId++);
  h = {messageId: l, message: {kind: 11, contextId: 0, traceCollectionId: d}};
  try { // catch -> L_3e2
  M(v.dilSandboxHostSendRequestTraceTag(h.message.kind), l);
  n.post(h, undefined, undefined);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  m = <?>;
  try { // catch -> L_473
  if (!(e.isLoggingEnabled)) goto L_441;
  console.warn("Failed to request traces from a timed-out DIL sandbox worker.", m);
  this.finishTimedOutWorker(d, [], false);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=713B file=dil_sandbox/src/DILSandbox
// args: e, t, s
// locals: o, this
// closure: u
function {
  this = this;
  let o;
  o = this.timedOutWorkers.get(e);
  if (!((undefined !== o))) goto L_2c8;
  this.timedOutWorkers.delete(e);
  clearTimeout(o.timeoutId);
  o.transport.dispose();
  o.worker.terminate();
  if ((s)) goto L_1e0;
  if (!((o.timedOutTraceCollection == null))) goto L_18f;
  o.timedOutTraceCollection;
  goto L_1e0;
  if (!((undefined.onError == null))) goto L_1b9;
  undefined.onError;
  undefined;
  goto L_1e0;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, o.error);
  if (!((undefined !== o.owner))) goto L_2c8;
  this.reportOwnerError(o.owner, new u.DILSandboxTimeoutError(o.error, o.mainThreadTraces, t));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=268B file=dil_sandbox/src/DILSandbox
// args: e
// locals: this
// closure: i
function {
  this = this;
  if (!((6 === e.kind))) goto L_10b;
  if (!((undefined !== e.interactionId))) goto L_10b;
  if ((this.interactionIdsWithRenderOperations.delete(e.interactionId))) goto L_10b;
  i.completeDILUserInteractionId(e.interactionId);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=152B file=dil_sandbox/src/DILSandbox
// args: e
// closure: i
function {
  if (!((6 === e.kind))) goto L_97;
  if (!((undefined !== e.interactionId))) goto L_97;
  i.discardDILUserInteractionId(e.interactionId);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=dil_sandbox/src/DILSandbox
// args: e
// closure: this
function {
  this.updateWatchdogsForBackground((3 === e));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=dil_sandbox/src/DILSandbox
// closure: this
function {
  this.updateWatchdogsForBackground(true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=dil_sandbox/src/DILSandbox
// closure: this
function {
  this.updateWatchdogsForBackground(false);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=80B file=dil_sandbox/src/DILSandbox
// closure: e, t
function {
  e.cancel();
  t.cancel();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=4 bc=375B file=dil_sandbox/src/DILSandbox
// locals: e, t, this
// closure: n, r
function {
  this = this;
  let t;
  let e;
  if (!(n.isVersionAtLeast(195))) goto L_d3;
  this.isBackgrounded = (3 === r.Application.getState());
  return r.Application.observeState(function <atom:0>);   // tail call
  e = r.Application.observeEnteredBackground(function <atom:0>);
  t = r.Application.observeEnteredForeground(function <atom:0>);
  return {cancel: function <atom:0>};
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=581B file=dil_sandbox/src/DILSandbox
// args: e
// locals: t, s, this
function {
  this = this;
  if (!((this.isBackgrounded !== e))) goto L_244;
  this.isBackgrounded = e;
  if (!((this.activeInitialization == null))) goto L_60;
  this.activeInitialization;
  goto L_a6;
  undefined.timeout.setBackgrounded(e);
  if (!((this.activeHostMessage == null))) goto L_d1;
  this.activeHostMessage;
  goto L_117;
  undefined.timeout.setBackgrounded(e);
  let t;
  for (const t of this.contexts.values()) {
    if (!((t.preparationTimeout == null))) goto L_192;
    t.preparationTimeout;
    goto L_1b7;
    undefined.setBackgrounded(e);
    let s;
    for (const s of t.messages) {
      if (!((s.completion == null))) goto L_20f;
      s.completion;
      goto L_234;
      undefined.setBackgrounded(e);
      // [栈深重同步 3 -> 6]
    }
  }
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=79B file=dil_sandbox/src/DILSandbox
// args: e, t
// locals: this
// closure: s
function {
  this = this;
  return new s.DILSandboxTimeout(e, t, this.isBackgrounded);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_sandbox/src/DILSandbox
// closure: this, s
function {
  this.handleInitializationTimeout(s);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=42B file=dil_sandbox/src/DILSandbox
// args: t, s
// closure: e
function {
  e.postMessage(t, s);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_sandbox/src/DILSandbox
// args: e
// closure: t
function {
  return t(e.data);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=15B file=dil_sandbox/src/DILSandbox
// args: t
// closure: e
function {
  e.onmessage = function <atom:0>;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=42B file=dil_sandbox/src/DILSandbox
// args: e
// closure: this, t
function {
  this.receiveWorkerMessage(e, t);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=7 cpool=4 bc=472B file=dil_sandbox/src/DILSandbox
// locals: e, t, s, o, i
// closure: this, l, k, exports, M, v, x
function {
  let i;
  let o;
  let s;
  let t;
  let e;
  e = new l.default(k);
  this.workerGeneration = (this.workerGeneration ++);
  t = (this.workerGeneration ++);
  this.nextMessageId = <this.nextMessageId_new>;
  s = (this.nextMessageId++);
  o = this.scheduleWatchdogTimeout(function <atom:0>, exports.DIL_SANDBOX_DEFAULT_MESSAGE_TIMEOUT_MS);
  if (!((undefined === this.messageChannelConstructor))) goto L_10b;
  goto L_10c;
  // [栈深重同步 1 -> 0]
  i = 7;
  M(v.dilSandboxHostSendRequestTraceTag(i), s);
  this.worker = e;
  this.activeInitialization = {messageId: s, timeout: o};
  this.transport = x.createDILSandboxWorkerTransport({post: function <atom:0>, setReceiver: function <atom:0>}, this.messageChannelConstructor, s, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=1 bc=42B file=dil_sandbox/src/DILSandbox
// locals: this
// closure: l, k, exports, M, v, x, d
function {
  this = this;
  d.withGlobalNativeRefs(function <atom:0>);
  return;
}

// fn S  args=0 vars=0 closure=2 cpool=0 bc=24B file=dil_sandbox/src/DILSandbox
// closure: D, SharedDILSandboxWorker
function {
  if (!((D == null))) goto L_f;
  D;
  D = new SharedDILSandboxWorker();
  new SharedDILSandboxWorker();
  return D;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=61B file=dil_sandbox/src/DILSandbox
// locals: e
// closure: D
function {
  let e;
  e = D;
  D = undefined;
  undefined;
  if (!((e == null))) goto L_18;
  e;
  goto L_3c;
  undefined.dispose();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=dil_sandbox/src/DILSandbox
// closure: this
function {
  if (!(!this.permanentlyFailed)) goto L_35;
  this.permanentlyFailed = true;
  return true;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=72B file=dil_sandbox/src/DILSandbox
// args: e
// closure: this
function {
  this.errorReporter.reportError(e);
  return;
}

// fn <atom:0>  args=5 vars=7 closure=2 cpool=2 bc=166B file=dil_sandbox/src/DILSandbox
// args: e, t, s, o, i
// locals: r, this
// closure: <class_fields_init>, C
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let r;
  this.elementsMap = e;
  this.elementRenderObserver = t;
  this.errorReporter = s;
  this.listener = o;
  this.permanentlyFailed = false;
  r = C.getCurrentContext();
  this.owner = {markPermanentlyFailed: function <atom:0>, reportError: function <atom:0>, messageTimeoutMs: i, valdiContextId: r};
  return;
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=254B file=dil_sandbox/src/DILSandbox
// args: e, t, s
// locals: this
// closure: T, S
function {
  this = this;
  if (!(this.permanentlyFailed)) goto L_2a;
  return T;
  return S().createContext(e, t, s, this.elementsMap, this.elementRenderObserver, this.errorReporter, this.listener, this.owner);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_sandbox/src/DILSandbox
// locals: this
function {
  this = this;
  return this.permanentlyFailed;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=95B file=dil_sandbox/src/DILSandbox
// args: e
// closure: D
function {
  if (!((D == null))) goto L_b;
  D;
  goto L_30;
  if (!((undefined.flush(e) == null))) goto L_5e;
  undefined.flush(e);
  return Promise.resolve();
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=131B file=dil_sandbox/src/DILSandbox
// closure: D, exports
function {
  if (!((D == null))) goto L_b;
  D;
  goto L_51;
  if (!((undefined.collectPolyfilledTraces(exports.DIL_SANDBOX_DEFAULT_MESSAGE_TIMEOUT_MS) == null))) goto L_82;
  undefined.collectPolyfilledTraces(exports.DIL_SANDBOX_DEFAULT_MESSAGE_TIMEOUT_MS);
  return Promise.resolve([]);
}

// fn w  args=1 vars=1 closure=1 cpool=0 bc=225B file=dil_sandbox/src/DILSandbox
// args: e
// closure: L
function {
  if (!((e.kind === 0))) goto L_2d;
  return "RegisterElementRegistry";
  if (!((e.kind === 1))) goto L_38;
  return "CreateContext";
  if (!((e.kind === 2))) goto L_43;
  return "UpdateSource";
  if (!((e.kind === 3))) goto L_4e;
  return "Render";
  if (!((e.kind === 4))) goto L_59;
  return "Commit";
  if (!((e.kind === 5))) goto L_64;
  return "DestroyContext";
  if (!((e.kind === 6))) goto L_6f;
  return "InvokeFunction";
  if (!((e.kind === 9))) goto L_7b;
  return "UpdateStateSnapshot";
  if (!((e.kind === 10))) goto L_c8;
  return L(e.signal.kind);   // tail call
  if (!((e.kind === 11))) goto L_d4;
  return "CollectPolyfilledTraces";
  if (!((e.kind === 12))) goto L_e0;
  return "HostActionResponse";
  e.kind;
  return;
}

// fn L  args=1 vars=1 closure=0 cpool=0 bc=79B file=dil_sandbox/src/DILSandbox
// args: e
function {
  if (!((e === 0))) goto L_c;
  return "RegisterHtmlViewMessengerTransport";
  if (!((e === 1))) goto L_17;
  return "UnregisterHtmlViewMessengerTransport";
  if (!((e === 2))) goto L_22;
  return "HtmlViewMessengerCommand";
  if (!((e === 3))) goto L_2d;
  return "HtmlViewMessengerEvent";
  if (!((e === 4))) goto L_38;
  return "HtmlViewMessengerCommandResponse";
  if (!((e === 5))) goto L_43;
  return "SpeechState";
  if (!((e === 6))) goto L_4e;
  return "DictationEvent";
  e;
  return;
}

// fn <atom:0>  args=3 vars=37 closure=0 cpool=56 bc=1133B file=dil_sandbox/src/DILSandbox
// args: require, module, exports
// locals: e, t, s, o, i, r, n, a, d, c, l, h, u, m, g, p, I, v, x, f, k, C, M, T, SharedDILSandboxWorker, <class_fields_init>, SharedDILSandboxWorker#1, D, S, DILSandbox, <class_fields_init>#1, DILSandbox#1, w, L
function {
  S = function S;
  w = function w;
  L = function L;
  let DILSandbox#1;
  let D;
  let SharedDILSandboxWorker#1;
  let T;
  let M;
  let C;
  let k;
  let f;
  let x;
  let v;
  let I;
  let p;
  let g;
  let m;
  let u;
  let h;
  let l;
  let c;
  let d;
  let a;
  let n;
  let r;
  let i;
  let o;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_SANDBOX_DEFAULT_MESSAGE_TIMEOUT_MS = undefined;
  exports.DILSandbox = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("./DILSandboxCommand");
  s = require("./DILSandboxTimeout");
  o = require("dil_renderer/src/PolyfilledTracer");
  i = require("dil_renderer/src/DILUserInteraction");
  r = require("valdi_core/src/Application");
  n = require("valdi_core/src/CompilerIntrinsics");
  a = require("valdi_core/src/ModuleLoaderGlobal");
  d = require("valdi_core/src/NativeReferences");
  c = require("valdi_core/src/ValdiRuntimeProvider");
  l = require("worker/src/Worker");
  h = require("./DILSandboxContext");
  u = require("./DILSandboxError");
  m = require("./DILElementRegistryRegistration");
  g = require("./DILSandboxProtocol");
  p = require("./DILSandboxDictation");
  I = require("./DILSandboxSpeech");
  v = require("./DILSandboxTrace");
  x = require("./DILSandboxWorkerTransport");
  exports.DIL_SANDBOX_DEFAULT_MESSAGE_TIMEOUT_MS = 10000;
  f = 5000;
  k = "dil_sandbox/src/DILSandboxWorker";
  C = c.getValdiRuntime();
  M = v.makeSandboxInstantTraceFn(C);
  T = Object.freeze({flush: function <atom:0>, dispose: function <atom:0>, render: function <atom:0>, setStateSnapshot: function <atom:0>, updateAppData: function <atom:0>, updateSource: function <atom:0>});
  let SharedDILSandboxWorker;
  let <class_fields_init>;
  class SharedDILSandboxWorker extends undefined { ... }
  <proto:SharedDILSandboxWorker>.createContext = function <atom:0>;
  <proto:SharedDILSandboxWorker>.destroyContext = function <atom:0>;
  <proto:SharedDILSandboxWorker>.post = function <atom:0>;
  <proto:SharedDILSandboxWorker>.inputCompletion = function <atom:0>;
  <proto:SharedDILSandboxWorker>.postSignal = function <atom:0>;
  <proto:SharedDILSandboxWorker>.flush = function <atom:0>;
  <proto:SharedDILSandboxWorker>.collectPolyfilledTraces = function <atom:0>;
  <proto:SharedDILSandboxWorker>.enqueueMessage = function <atom:0>;
  <proto:SharedDILSandboxWorker>.makeQueuedMessage = function <atom:0>;
  <proto:SharedDILSandboxWorker>.receiveComponentPreparation = function <atom:0>;
  <proto:SharedDILSandboxWorker>.finishComponentPreparation = function <atom:0>;
  <proto:SharedDILSandboxWorker>.cancelContextMessages = function <atom:0>;
  <proto:SharedDILSandboxWorker>.cancelPreparation = function <atom:0>;
  <proto:SharedDILSandboxWorker>.enqueueContextUpdate = function <atom:0>;
  <proto:SharedDILSandboxWorker>.completeContextUpdate = function <atom:0>;
  <proto:SharedDILSandboxWorker>.dispatchNextMessage = function <atom:0>;
  <proto:SharedDILSandboxWorker>.receiveWorkerMessage = function <atom:0>;
  <proto:SharedDILSandboxWorker>.receivePolyfilledTraces = function <atom:0>;
  <proto:SharedDILSandboxWorker>.acceptInteraction = function <atom:0>;
  <proto:SharedDILSandboxWorker>.receiveAcknowledgement = function <atom:0>;
  <proto:SharedDILSandboxWorker>.isIdle = function <atom:0>;
  <proto:SharedDILSandboxWorker>.resolvePendingFlushesIfIdle = function <atom:0>;
  <proto:SharedDILSandboxWorker>.handleInitializationTimeout = function <atom:0>;
  <proto:SharedDILSandboxWorker>.handleMessageTimeout = function <atom:0>;
  <proto:SharedDILSandboxWorker>.restartWorker = function <atom:0>;
  <proto:SharedDILSandboxWorker>.restartWorkerAfterTimeout = function <atom:0>;
  <proto:SharedDILSandboxWorker>.prepareWorkerRestart = function <atom:0>;
  <proto:SharedDILSandboxWorker>.failOwner = function <atom:0>;
  <proto:SharedDILSandboxWorker>.reportOwnerError = function <atom:0>;
  <proto:SharedDILSandboxWorker>.dispose = function <atom:0>;
  <proto:SharedDILSandboxWorker>.detachCurrentWorker = function <atom:0>;
  <proto:SharedDILSandboxWorker>.terminateDetachedWorker = function <atom:0>;
  <proto:SharedDILSandboxWorker>.collectTimedOutWorkerTraces = function <atom:0>;
  <proto:SharedDILSandboxWorker>.finishTimedOutWorker = function <atom:0>;
  <proto:SharedDILSandboxWorker>.finishInteractionMessage = function <atom:0>;
  <proto:SharedDILSandboxWorker>.discardMessageInteraction = function <atom:0>;
  <proto:SharedDILSandboxWorker>.observeApplicationBackground = function <atom:0>;
  <proto:SharedDILSandboxWorker>.updateWatchdogsForBackground = function <atom:0>;
  <proto:SharedDILSandboxWorker>.scheduleWatchdogTimeout = function <atom:0>;
  <proto:SharedDILSandboxWorker>.startWorker = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SharedDILSandboxWorker>;
  SharedDILSandboxWorker = function <atom:0>;
  // close_loc <class_fields_init>
  SharedDILSandboxWorker#1 = function <atom:0>;
  D = undefined;
  a.getModuleLoader(module).onHotReload(module, module.path, function <atom:0>);
  let DILSandbox;
  let <class_fields_init>#1;
  class DILSandbox extends undefined { ... }
  <proto:DILSandbox>.createContext = function <atom:0>;
  <proto:DILSandbox>.isPermanentlyFailed = function <atom:0>;
  function <atom:0>.flush = function <atom:0>;
  function <atom:0>.collectTraces = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILSandbox>;
  DILSandbox = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILSandbox#1 = function <atom:0>;
  exports.DILSandbox = DILSandbox#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandbox
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
