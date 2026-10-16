// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
function {
  e.CONNECTION = 0;
  e[0] = "CONNECTION";
  e.PROTOCOL = 1;
  e[1] = "PROTOCOL";
  e.DOCUMENT_UNAVAILABLE = 2;
  e[2] = "DOCUMENT_UNAVAILABLE";
  e.EDITOR = 3;
  e[3] = "EDITOR";
  e.PERSISTENCE = 4;
  e[4] = "PERSISTENCE";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=196B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
function {
  e.UNKNOWN = "unknown";
  e.NETWORK = "network";
  e.SYNCHRONIZATION_TIMEOUT = "synchronization_timeout";
  e.GRANT_EXPIRED = "grant_expired";
  e.ACCESS_DENIED = "access_denied";
  e.INVALID_RESPONSE = "invalid_response";
  e.HOST_REJECTED = "host_rejected";
  e.DOCUMENT_UNAVAILABLE = "document_unavailable";
  e.UPDATE_REJECTED = "update_rejected";
  e.SERVER_PERSISTENCE = "server_persistence";
  e.CHECKPOINT = "checkpoint";
  e.LOCAL_PERSISTENCE = "local_persistence";
  e.EDITOR = "editor";
  return;
}

// fn C  args=1 vars=1 closure=1 cpool=0 bc=88B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// closure: s
function {
  return {yjs: {encoding: s.YjsUpdateEncoding.V1, bytes: e}};
}

// fn v  args=2 vars=3 closure=3 cpool=0 bc=305B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: t, i
// locals: n
// closure: o, e, c
function {
  try { // catch -> L_50
  return o.Base64.toByteArray(t);
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_130
  if (!(e.isLoggingEnabled)) goto L_d7;
  console.warn("Invalid multiplayer ".concat(i, " encoding"), n);
  throw new c.MultiplayerProtocolError("Invalid multiplayer ".concat(i, " encoding"));
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn g  args=1 vars=1 closure=0 cpool=0 bc=50B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
function {
  if (!((e instanceof Error))) goto L_2c;
  return e.message;
  return "Multiplayer session failed";
}

// fn A  args=2 vars=2 closure=4 cpool=0 bc=1381B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e, t
// closure: r, i, u, a
function {
  if (!(r.isVersionAtLeast(87))) goto L_2b4;
  if (!((undefined !== t))) goto L_2b4;
  if (!((t.reason === i.OAIMultiplayerConnectionFailureReason.RETRYABLE))) goto L_cf;
  return {retryable: true, reason: u.NETWORK};
  if (!((t.reason === i.OAIMultiplayerConnectionFailureReason.GRANT_EXPIRED))) goto L_148;
  return {retryable: true, reason: u.GRANT_EXPIRED};
  if (!((t.reason === i.OAIMultiplayerConnectionFailureReason.ADMISSION_DENIED))) goto L_1c1;
  return {retryable: false, reason: u.ACCESS_DENIED};
  if (!((t.reason === i.OAIMultiplayerConnectionFailureReason.INVALID_RESPONSE))) goto L_23a;
  return {retryable: false, reason: u.INVALID_RESPONSE};
  if (!((t.reason === i.OAIMultiplayerConnectionFailureReason.HOST_REJECTED))) goto L_2b3;
  return {retryable: false, reason: u.HOST_REJECTED};
  t.reason;
  if (!((e === a.CONNECTION))) goto L_40c;
  if (!((t == null))) goto L_2e7;
  t;
  goto L_308;
  if (!((undefined.kind === 1))) goto L_33d;
  return {retryable: true, reason: u.NETWORK};
  if (!((undefined.kind === 0))) goto L_372;
  return {retryable: true, reason: u.UNKNOWN};
  if (!((undefined.kind === 2))) goto L_3a7;
  return {retryable: true, reason: u.GRANT_EXPIRED};
  if (!((undefined.kind === 3))) goto L_3dc;
  return {retryable: false, reason: u.HOST_REJECTED};
  return {retryable: false, reason: u.UNKNOWN};
  // [栈深重同步 2 -> 1]
  if (!((e === a.PROTOCOL))) goto L_462;
  return {retryable: false, reason: u.INVALID_RESPONSE};
  if (!((e === a.DOCUMENT_UNAVAILABLE))) goto L_4b8;
  return {retryable: false, reason: u.DOCUMENT_UNAVAILABLE};
  if (!((e === a.PERSISTENCE))) goto L_50e;
  return {retryable: false, reason: u.LOCAL_PERSISTENCE};
  if (!((e === a.EDITOR))) goto L_564;
  return {retryable: false, reason: u.EDITOR};
  e;
  return;
}

// fn N  args=1 vars=2 closure=2 cpool=0 bc=476B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: t
// closure: c, u
function {
  let t;
  if (((e.type !== c.MultiplayerMessageType.DOCUMENT_ERROR))) goto L_93;
  if (!((undefined === e.reason))) goto L_c5;
  return {retryable: false, reason: u.DOCUMENT_UNAVAILABLE};
  t = undefined;
  if (!((e.reason === "persistence_failed"))) goto L_11c;
  t = u.SERVER_PERSISTENCE;
  u.SERVER_PERSISTENCE;
  goto L_1a7;
  if (!((e.reason === "invalid_update"))) goto L_14e;
  t = u.UPDATE_REJECTED;
  u.UPDATE_REJECTED;
  goto L_1a7;
  if (!((e.reason === "checkpoint_failed"))) goto L_180;
  t = u.CHECKPOINT;
  u.CHECKPOINT;
  goto L_1a7;
  t = u.UNKNOWN;
  u.UNKNOWN;
  e.reason;
  return {retryable: (true === e.retryable), reason: t};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=172B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
function {
  e.IDLE = 0;
  e[0] = "IDLE";
  e.CONNECTING = 1;
  e[1] = "CONNECTING";
  e.SYNCHRONIZING = 2;
  e[2] = "SYNCHRONIZING";
  e.READY = 3;
  e[3] = "READY";
  e.SYNCHRONIZED = 3;
  e[3] = "SYNCHRONIZED";
  e.FAILED = 4;
  e[4] = "FAILED";
  e.CLOSED = 5;
  e[5] = "CLOSED";
  e.FAILED_RETRYABLE = 6;
  e[6] = "FAILED_RETRYABLE";
  e.FAILED_NON_RETRYABLE = 7;
  e[7] = "FAILED_NON_RETRYABLE";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=11B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// closure: i
function {
  return clearTimeout(i);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=15B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e, t
// locals: i
function {
  let i;
  i = setTimeout(e, t);
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=1333B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: this
// closure: <class_fields_init>, S, r
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.currentState = S.IDLE;
  this.currentParticipants = [];
  this.pendingWork = Promise.resolve();
  this.initializingDocument = false;
  this.initialMessages = [];
  this.acceptedWork = new Set();
  this.documentSyncSequence = 0;
  this.outboundUpdates = [];
  this.pendingRemoteUpdates = 0;
  this.pendingAcknowledgments = 0;
  this.acknowledgmentExpired = false;
  this.lastPublishedCanEdit = false;
  this.generation = 0;
  this.closed = false;
  this.checkpointRequestSequence = 0;
  this.pendingCheckpoints = new Map();
  if (!((e.serverDocumentId == null))) goto L_16c;
  e.serverDocumentId;
  this.documentId = e.documentId;
  this.allowInitialization = (false !== e.allowInitialization);
  this.engine = e.engine;
  this.updateCodec = e.codec;
  if (!(r.isVersionAtLeast(77))) goto L_312;
  this.documentPersistence = e.engine.persistence;
  if (!((undefined !== this.documentPersistence))) goto L_312;
  if (!((this.documentPersistence.documentId !== e.documentId))) goto L_312;
  throw new Error("The saved editor belongs to a different document");
  this.connectionService = e.connectionService;
  if (!((e.clock == null))) goto L_373;
  e.clock;
  this.clock = {schedule: function <atom:0>};
  this.onStateChange = e.onStateChange;
  this.onParticipantsChange = e.onParticipantsChange;
  this.onAuthoritativeSnapshot = e.onAuthoritativeSnapshot;
  this.onInitializeDocument = e.onInitializeDocument;
  this.onInitialDocumentReady = e.onInitialDocumentReady;
  this.resolveCodec = e.resolveCodec;
  this.onRemotePresenceActivity = e.onRemotePresenceActivity;
  this.onRemoteDocumentEdit = e.onRemoteDocumentEdit;
  this.onConnectionClose = e.onConnectionClose;
  this.onConnectionFailure = e.onConnectionFailure;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
function {
  this = this;
  return this.currentState;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
function {
  this = this;
  return this.currentAccess;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
function {
  this = this;
  return this.currentError;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
function {
  this = this;
  return this.currentParticipants;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=193B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// closure: this, t, E, a, u
function {
  if (!(this.isCurrent(t))) goto L_c0;
  this.fail("The first document snapshot timed out", {code: E, reason: "initial document snapshot timed out"}, a.CONNECTION, undefined, {retryable: true, reason: u.SYNCHRONIZATION_TIMEOUT});
  return;
}

// fn <atom:0>  args=0 vars=5 closure=8 cpool=1 bc=1098B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: t, i, e, n, this
// closure: E, a, u, r, S, l, e, g
function {
  this = this;
  let i;
  let t;
  if ((this.closed)) goto L_55;
  if (!((undefined !== this.connection))) goto L_58;
  return;
  if (!(!r.isVersionAtLeast(110))) goto L_d3;
  this.fail("This app version does not support acknowledged synchronization.", undefined, a.EDITOR, undefined);
  return;
  this.generation = (this.generation ++);
  t = (this.generation ++);
  this.clearConnectionWork();
  this.adoptedSyncSequence = undefined;
  this.currentFailure = undefined;
  this.setState(S.CONNECTING, undefined, undefined);
  if (!(!this.isCurrent(t))) goto L_1bb;
  return;
  i = this.createConnectionListener(t);
  if (!((undefined !== this.onInitializeDocument))) goto L_292;
  if (!((undefined === this.documentPersistence))) goto L_292;
  this.cancelInitialTimeout = this.clock.schedule(function <atom:0>, l);
  this.clock.schedule(function <atom:0>, l);
  try { // catch -> L_389
  let e;
  e = this.connectionService.connect({documentId: this.documentId}, i);
  if (!(!this.isCurrent(t))) goto L_379;
  e.close({code: E, reason: "multiplayer session released"});
  return undefined;
  this.connection = e;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_449
  if (!(e.isLoggingEnabled)) goto L_3e6;
  console.warn("Multiplayer connection could not be created", n);
  this.fail(g(n), undefined, a.CONNECTION, {kind: 3, message: "The host rejected multiplayer admission"});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// closure: this
function {
  return this.updateSynchronizationState();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=7 cpool=0 bc=713B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: e, t
// closure: e, s, n, this, t, y, a
function {
  if (!((e.kind !== s.EditorEventKind.FAILED))) goto L_214;
  if (!((undefined !== n))) goto L_f9;
  let e;
  e = this.documentSyncSequence;
  (await this.sendQueuedUpdates(t, e));
  (await this.refreshLocalPresence(t, e));
  return undefined; // async
  if (!(this.hasAdoptedSnapshot())) goto L_2c7;
  if (!((e.kind === s.EditorEventKind.PRESENCE_CHANGE))) goto L_2c7;
  let t;
  if (!((e.presence == null))) goto L_1bd;
  e.presence;
  goto L_1de;
  t = undefined.update;
  if (!((undefined !== t))) goto L_210;
  this.sendLocalPresence(t);
  goto L_2c7;
  if (!((e.error == null))) goto L_260;
  e.error;
  goto L_281;
  if (!((undefined.message == null))) goto L_28b;
  undefined.message;
  this.fail("Collaborative editor failed", {code: y, reason: "collaborative editor failed"}, a.EDITOR, undefined);
  return undefined; // async
}

// fn <atom:0>  args=1 vars=5 closure=6 cpool=2 bc=2300B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: t, i, n, this
// closure: s, y, a, r, c, S
function {
  this = this;
  let n;
  let i;
  let t;
  if (!(r.isVersionAtLeast(77))) goto L_2a8;
  if (!(!this.closed)) goto L_2a8;
  if (!((undefined !== this.documentPersistence))) goto L_2a8;
  if (!((e.kind === s.EditorEventKind.PERSISTENCE))) goto L_2a8;
  if (!((undefined !== e.persistence))) goto L_2a8;
  this.currentPersistence = e.persistence;
  this.publishState();
  if (!((undefined !== e.persistence.error))) goto L_2a6;
  if (!((undefined !== this.connection))) goto L_2a6;
  this.fail(e.persistence.error.message, {code: y, reason: "document recovery failed"}, a.PERSISTENCE, undefined);
  return;
  if ((this.closed)) goto L_2f2;
  if (!((undefined === this.connection))) goto L_2f5;
  return;
  if (!(!r.isVersionAtLeast(110))) goto L_320;
  return;
  t = this.generation;
  if (!((e.change == null))) goto L_36d;
  e.change;
  goto L_38e;
  if (!((undefined.synchronization == null))) goto L_405;
  undefined.synchronization;
  if (!((e.synchronization == null))) goto L_405;
  e.synchronization;
  if (!((e.snapshot == null))) goto L_3e4;
  e.snapshot;
  goto L_405;
  i = undefined.synchronization;
  if (!((undefined !== i))) goto L_45f;
  this.acceptSynchronizationState(i);
  this.enqueue(function <atom:0>);
  if (!((e.kind === s.EditorEventKind.CHANGE))) goto L_645;
  if (!((e.change == null))) goto L_4f7;
  e.change;
  goto L_518;
  if (!((undefined.origin !== s.EditorChangeOrigin.REMOTE))) goto L_645;
  if (!((e.change == null))) goto L_58e;
  e.change;
  goto L_5af;
  if (!((undefined !== undefined.update))) goto L_645;
  goto L_646;
  // [栈深重同步 1 -> 0]
  n = undefined;
  if (!((undefined !== n))) goto L_8a8;
  if (!((undefined === i))) goto L_6ba;
  this.fail("The editor did not report its synchronization state.", {code: y, reason: "missing editor state"}, a.EDITOR, undefined);
  return;
  this.outboundUpdates.push({bytes: n, sequence: i.sequence});
  if (!((this.currentAccess === c.MultiplayerDocumentAccess.VIEW))) goto L_7c4;
  this.failPendingView();
  return;
  if (!((this.currentState === S.SYNCHRONIZED))) goto L_8a7;
  if (!(this.hasUnacknowledgedUpdates())) goto L_8a7;
  this.setState(S.SYNCHRONIZING, this.currentAccess, undefined);
  if (!(this.isCurrent(t))) goto L_8fb;
  this.enqueue(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=199B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// closure: t, this, c
function {
  if (!((t === this.documentSyncSequence))) goto L_c6;
  if (!(this.hasAdoptedSnapshot())) goto L_c6;
  this.send({type: c.MultiplayerMessageType.ACTIVITY});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=1 bc=340B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: e, t, this
// closure: c, d
function {
  this = this;
  let t;
  let e;
  if ((this.closed)) goto L_7c;
  if (((undefined === this.connection))) goto L_7c;
  if (!(!this.hasAdoptedSnapshot())) goto L_7f;
  return;
  e = Date.now();
  if (!((undefined !== this.lastActivitySentAt))) goto L_fc;
  if (!(((e - this.lastActivitySentAt) < d))) goto L_fc;
  return;
  this.lastActivitySentAt = e;
  t = this.documentSyncSequence;
  this.enqueue(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=132B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// closure: this, e
function {
  if (!((this.pendingCheckpoints.get(e) == null))) goto L_51;
  this.pendingCheckpoints.get(e);
  goto L_83;
  undefined.reject(new Error("The multiplayer checkpoint timed out."));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=278B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// closure: this, e, n, s, c, i
function {
  if (!(this.pendingCheckpoints.has(e))) goto L_115;
  if (!(this.hasAdoptedSnapshot())) goto L_103;
  n.wanted = s;
  goto L_115;
  // [栈深重同步 1 -> 0]
  i(new Error("The multiplayer document is no longer ready to checkpoint."));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=1 bc=120B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: t
// locals: s
// closure: this, e, n, c, i
function {
  let s;
  s = new Uint8Array(t.yjs.bytes);
  this.enqueue(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=1 bc=246B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: t, i
// locals: n
// closure: this, e, c
function {
  let n;
  n = {wanted: undefined, resolve: t, reject: i};
  this.pendingCheckpoints.set(e, n);
  this.engine.encodeFullState().then(function <atom:0>).catch(i);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=2 bc=248B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: e, t, this
// closure: c, h
function {
  this = this;
  let t;
  let e;
  if (!(!this.hasAdoptedSnapshot())) goto L_3f;
  throw new Error("The multiplayer document must be connected before checkpointing.");
  this.checkpointRequestSequence = (this.checkpointRequestSequence ++);
  e = String((this.checkpointRequestSequence ++));
  t = setTimeout(function <atom:0>, h);
  try { // catch -> L_9b
  (await new Promise(function <atom:0>));
  <?>;
  // gosub (finally 块) 161
  undefined;
  goto L_f6;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 161
  throw <?>;
  clearTimeout(t);
  this.pendingCheckpoints.delete(e);
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=206B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: t, this
function {
  this = this;
  let t;
  for (const t of this.pendingCheckpoints.values()) {
    t.reject(new Error(e));
  }
  this.pendingCheckpoints.clear();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=187B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
function {
  this = this;
  if (!((this.updateCodec == null))) goto L_62;
  this.updateCodec;
  if (!((this.resolveCodec == null))) goto L_55;
  this.resolveCodec;
  this;
  goto L_58;
  // [栈深重同步 2 -> 3]
  this.updateCodec = <?>.call(undefined);
  <?>.call(undefined);
  if (!((null == this.updateCodec))) goto L_98;
  throw new Error("The editor is not ready to validate a checkpoint");
  return this.updateCodec;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=631B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: e, this
// closure: S, E
function {
  this = this;
  let e;
  if (!(this.closed)) goto L_2a;
  return;
  this.closed = true;
  this.generation = (this.generation ++);
  this.rejectCheckpoints("The multiplayer session closed before the checkpoint completed.");
  this.clearConnectionWork();
  if (!((this.cancelInitialTimeout == null))) goto L_de;
  this.cancelInitialTimeout;
  this;
  goto L_e1;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.cancelInitialTimeout = undefined;
  this.adoptedSyncSequence = undefined;
  this.pendingWork = Promise.resolve();
  this.initializingDocument = false;
  this.initialMessages.length = 0;
  this.disconnectPersistence();
  e = this.connection;
  this.connection = undefined;
  this.lastActivitySentAt = undefined;
  this.clearParticipants();
  this.setState(S.CLOSED, undefined, undefined);
  if (!((undefined !== e))) goto L_276;
  this.closeConnection(e, {code: E, reason: "multiplayer session released"});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=232B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
function {
  this = this;
  (await this.pendingWork);
  if (!((0 !== this.acceptedWork.size))) goto L_e6;
  (await Promise.all(Array.from(this.acceptedWork)));
  goto L_26;
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=1163B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: t
// closure: r, this, e, c, o
function {
  let t;
  if (!(r.isVersionAtLeast(77))) goto L_20a;
  if (!((undefined !== this.documentPersistence))) goto L_20a;
  (await this.awaitPersistence(this.documentPersistence.flush(false), e, undefined));
  if (!(!this.isCurrent(e))) goto L_f4;
  return undefined; // async
  (await this.awaitPersistence(this.documentPersistence.refresh(), e, undefined));
  if (!(!this.isCurrent(e))) goto L_18e;
  return undefined; // async
  this.currentPersistence = (await this.documentPersistence.state());
  if (!(!this.isCurrent(e))) goto L_20a;
  return undefined; // async
  if (!((undefined !== this.onInitializeDocument))) goto L_26b;
  if (!((undefined === this.documentPersistence))) goto L_26b;
  goto L_2b2;
  // [栈深重同步 1 -> 0]
  t = (await this.engine.syncState());
  if (!(r.isVersionAtLeast(77))) goto L_379;
  if (!((undefined !== this.documentPersistence))) goto L_379;
  (await this.awaitPersistence(this.documentPersistence.flush(false), e, undefined));
  if (!(this.isCurrent(e))) goto L_488;
  this.send({type: c.MultiplayerMessageType.DOCUMENT_OPEN, state_vector: o.Base64.fromByteArray(t.bytes)});
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=1 bc=301B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: t
// closure: r, this, e, c, o, S
function {
  if (!(this.isCurrent(e))) goto L_12c;
  try { // catch -> L_7f
  this.setState(S.SYNCHRONIZING, undefined, undefined);
  <?>;
  goto L_da;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_d9
  if (!(this.isCurrent(e))) goto L_d5;
  this.rejectEvent(t);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(this.isCurrent(e))) goto L_12b;
  this.enqueue(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=761B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: t
// locals: i, i#1
// closure: this, e, c
function {
  if (!(this.isCurrent(e))) goto L_2f8;
  try { // catch -> L_2c8
  let i;
  i = c.parseMultiplayerServerMessage(t);
  if (!((undefined === i))) goto L_64;
  return undefined;
  if (((i.type === c.MultiplayerMessageType.DOCUMENT_ERROR))) goto L_13c;
  if (!((i.type === c.MultiplayerMessageType.DOCUMENT_UNAVAILABLE))) goto L_16a;
  this.failServerDocument(i);
  return undefined;
  if ((this.initializingDocument)) goto L_24f;
  if (!((undefined !== this.onInitializeDocument))) goto L_29c;
  if (!((undefined === this.documentPersistence))) goto L_29c;
  if (!((i.type !== c.MultiplayerMessageType.DOCUMENT_SYNC))) goto L_29c;
  goto L_2c5;
  // [栈深重同步 1 -> 0]
  this.receiveMessage(i, e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i#1 = <?>;
  try { // catch -> L_2f7
  this.rejectEvent(i#1);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=416B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: t
// closure: this, e, a
function {
  if (!(this.isCurrent(e))) goto L_19f;
  if (!((this.onConnectionClose == null))) goto L_58;
  this.onConnectionClose;
  this;
  goto L_5c;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, t);
  if ((t.reason)) goto L_f5;
  if (!((4401 === t.code))) goto L_144;
  goto L_170;
  // [栈深重同步 7 -> 6]
  if (!((4400 === t.code))) goto L_16f;
  goto L_170;
  // [栈深重同步 7 -> 6]
  this.fail("Multiplayer connection closed (".concat(t.code, ")"), undefined, a.CONNECTION, {kind: 1, message: t.reason});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=210B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: t
// closure: this, e, a
function {
  if (!(this.isCurrent(e))) goto L_d1;
  if (!((this.onConnectionFailure == null))) goto L_58;
  this.onConnectionFailure;
  this;
  goto L_5c;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, t);
  if ((t.message)) goto L_aa;
  this.fail("Multiplayer connection failed", undefined, a.CONNECTION, t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=4 bc=52B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: this
// closure: r, c, o, S, a
function {
  this = this;
  return {onOpen: function <atom:0>, onMessage: function <atom:0>, onClose: function <atom:0>, onFailure: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=42B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// closure: this, e, t, i
function {
  return this.synchronize(e, t, i);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=39B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// closure: this, e, t
function {
  return this.handleServerMessage(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=2 bc=888B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e, t
// locals: i, this
// closure: c, r, S
function {
  this = this;
  if (!((e.type !== c.MultiplayerMessageType.DOCUMENT_UPDATE_ACK))) goto L_34f;
  if (!((e.type === c.MultiplayerMessageType.DOCUMENT_SYNC))) goto L_293;
  let i;
  if (!(r.isVersionAtLeast(77))) goto L_157;
  if (!((undefined !== this.documentPersistence))) goto L_157;
  this.receivePersistentSync(e, t);
  return;
  if (!((undefined !== this.onInitializeDocument))) goto L_1a6;
  this.initializeDocument(e, t);
  return;
  i = this.beginSynchronization(t);
  if (!((undefined === i))) goto L_1d5;
  return;
  this.setState(S.SYNCHRONIZING, e.access, undefined);
  if (!(!this.isCurrent(t))) goto L_26a;
  return;
  this.enqueue(function <atom:0>);
  return;
  if (!((e.type !== c.MultiplayerMessageType.DOCUMENT_UPDATE))) goto L_326;
  goto L_34d;
  // [栈深重同步 1 -> 0]
  this.receiveDocumentUpdate(e, t);
  return;
  this.receiveUpdateAcknowledgment(e, t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=0 bc=558B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: n
// closure: this, i, e, t, g, y, a
function {
  try { // catch -> L_16d
  if (!((this.onInitializeDocument == null))) goto L_30;
  this.onInitializeDocument;
  this;
  goto L_58;
  // [栈深重同步 1 -> 2]
  (await <?>.call(undefined, i, e.access));
  if (!(!this.isCurrent(t))) goto L_86;
  return undefined; // async
  this.documentPersistence = this.engine.persistence;
  if (!((this.updateCodec == null))) goto L_133;
  this.updateCodec;
  if (!((this.resolveCodec == null))) goto L_126;
  this.resolveCodec;
  this;
  goto L_129;
  // [栈深重同步 2 -> 3]
  this.updateCodec = <?>.call(undefined);
  <?>.call(undefined);
  if (!((undefined === this.documentPersistence))) goto L_169;
  throw new Error("The downloaded editor has no persistent document");
  <?>;
  goto L_204;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_203
  if (!(this.isCurrent(t))) goto L_1ff;
  this.fail(g(n), {code: y, reason: "document recovery failed"}, a.PERSISTENCE, undefined);
  return undefined; // async
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.receivePersistentSync(e, t);
  return undefined; // async
}

// fn <atom:0>  args=2 vars=4 closure=7 cpool=1 bc=449B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e, t
// locals: i, this
// closure: g, y, a, E, C, v, S
function {
  this = this;
  let i;
  if (!((this.cancelInitialTimeout == null))) goto L_30;
  this.cancelInitialTimeout;
  this;
  goto L_33;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.cancelInitialTimeout = undefined;
  if (!(!e.initialized)) goto L_c6;
  this.fail("The saved document has not been initialized by its owner", {code: E, reason: "multiplayer document unavailable"}, a.DOCUMENT_UNAVAILABLE, undefined);
  return;
  i = C(v(e.update, "document snapshot"));
  this.initializingDocument = true;
  this.setState(S.SYNCHRONIZING, e.access, undefined);
  if (!(this.isCurrent(t))) goto L_1c0;
  this.enqueue(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=209B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// closure: this, e
function {
  (await Promise.all(Array.from(this.acceptedWork)));
  if (!(this.isCurrent(e))) goto L_ce;
  if (!((this.onInitialDocumentReady == null))) goto L_cb;
  this.onInitialDocumentReady;
  this;
  goto L_ce;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  return undefined; // async
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=1 bc=358B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: t, i, this
function {
  this = this;
  if (!(this.isCurrent(e))) goto L_108;
  if (!((0 !== this.initialMessages.length))) goto L_108;
  let t;
  t = this.initialMessages.splice(0);
  let i;
  for (const i of t) {
    if ((!this.isCurrent(e))) goto L_104;
    this.receiveMessage(i, e);
  }
  goto L_2;
  this.initializingDocument = false;
  if (!(this.isCurrent(e))) goto L_165;
  this.enqueue(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=0 bc=741B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: n
// closure: o, this, i, t, s, c, e
function {
  let n;
  if (!((o == null))) goto L_54;
  o;
  n = (await this.engine.applyRemoteUpdate(i));
  if (!(this.isCurrent(t))) goto L_2e3;
  if (!((n.status === s.EditorResultStatus.REJECTED))) goto L_170;
  if (!((n.error == null))) goto L_141;
  n.error;
  goto L_162;
  if (!((undefined.message == null))) goto L_16c;
  undefined.message;
  throw new c.MultiplayerProtocolError("Remote document update was rejected");
  this.pendingRemoteUpdates = (this.pendingRemoteUpdates --);
  this.updateSynchronizationState();
  if (!(this.isCurrent(t))) goto L_2e2;
  if (!((n.status === s.EditorResultStatus.APPLIED))) goto L_2e2;
  if (!((undefined !== e.client_id))) goto L_2e2;
  if (!((this.onRemoteDocumentEdit == null))) goto L_2b5;
  this.onRemoteDocumentEdit;
  this;
  goto L_2e2;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, String(e.client_id));
  return undefined; // async
}

// fn <atom:0>  args=2 vars=6 closure=6 cpool=1 bc=626B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e, t
// locals: i, n, o, this
// closure: s, c, C, v, S, r
function {
  this = this;
  let o;
  let n;
  let i;
  if (!(!this.acceptsRemoteEditorUpdates())) goto L_61;
  throw new c.MultiplayerProtocolError("Document update arrived before the document session opened");
  i = C(v(e.update, "document update"));
  this.pendingRemoteUpdates = (this.pendingRemoteUpdates ++);
  n = (this.currentState === S.SYNCHRONIZED);
  this.currentState = S.SYNCHRONIZING;
  if (!(r.isVersionAtLeast(77))) goto L_1f1;
  if (!((undefined !== this.documentPersistence))) goto L_1f1;
  goto L_1f2;
  // [栈深重同步 1 -> 0]
  o = undefined;
  if (!(this.isCurrent(t))) goto L_271;
  if (!(n)) goto L_249;
  this.publishState();
  this.enqueue(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=45B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// closure: this, e, o, t, s
function {
  return this.finishPersistentSync(e, o, t, s);   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=7 cpool=1 bc=1126B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e, t
// locals: i, s, o, this
// closure: S, n, E, a, C, v, c
function {
  this = this;
  let o;
  let s;
  let i;
  i = this.documentPersistence;
  if (!((undefined === i))) goto L_36;
  return;
  s = this.beginSynchronization(t);
  if (!((undefined === s))) goto L_65;
  return;
  this.currentState = S.SYNCHRONIZING;
  this.currentAccess = e.access;
  this.currentError = undefined;
  if (!(!e.initialized)) goto L_1e4;
  this.trackAccepted(i.setConnectionState(n.DocumentConnectionState.Unavailable));
  this.fail("The saved document has not been initialized by its owner", {code: E, reason: "multiplayer document unavailable"}, a.DOCUMENT_UNAVAILABLE, undefined);
  return;
  if (!((e.access === c.MultiplayerDocumentAccess.EDIT))) goto L_346;
  goto L_38b;
  // [栈深重同步 6 -> 5]
  o = this.trackAccepted(i.synchronize({update: C(v(e.update, "document snapshot")), peer: {bytes: v(e.state_vector, "state vector")}, access: n.DocumentAccess.View}));
  if (!(this.isCurrent(t))) goto L_465;
  if (!((s === this.documentSyncSequence))) goto L_465;
  this.publishState();
  if (!(this.isCurrent(t))) goto L_465;
  this.enqueue(function <atom:0>);
  return;
}

// fn <atom:0>  args=4 vars=7 closure=3 cpool=0 bc=1145B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e, t, i, n
// locals: o, r, this
// closure: s, c, v
function {
  this = this;
  let r;
  let o;
  o = (await this.awaitPersistence(t, i, n));
  if (((undefined === o))) goto L_8a;
  if ((!this.isCurrent(i))) goto L_8a;
  if (!((n !== this.documentSyncSequence))) goto L_8e;
  return undefined; // async
  if (!((o.result.status === s.EditorResultStatus.REJECTED))) goto L_1bf;
  if (!((o.result.error == null))) goto L_190;
  o.result.error;
  goto L_1b1;
  if (!((undefined.message == null))) goto L_1bb;
  undefined.message;
  throw new c.MultiplayerProtocolError("Saved document synchronization failed");
  if (!((undefined !== this.documentPersistence))) goto L_257;
  (await this.awaitPersistence(this.documentPersistence.flush(false), i, n));
  if ((!this.isCurrent(i))) goto L_2a7;
  if (!((n !== this.documentSyncSequence))) goto L_2ab;
  return undefined; // async
  r = (await this.engine.prepareSynchronization({bytes: v(e.state_vector, "state vector")}, (e.access === c.MultiplayerDocumentAccess.EDIT)));
  (await this.finishSynchronization(e.access, r, i, n));
  if (!(this.initializingDocument)) goto L_476;
  if (!(this.isCurrent(i))) goto L_476;
  if (!((n === this.documentSyncSequence))) goto L_476;
  this.finishInitialDocument(i);
  return undefined; // async
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=108B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if (!(!this.isCurrent(e))) goto L_2f;
  return;
  this.documentSyncSequence = (this.documentSyncSequence ++);
  t = (this.documentSyncSequence ++);
  this.adoptedSyncSequence = undefined;
  return t;
}

// fn <atom:0>  args=4 vars=5 closure=2 cpool=0 bc=1136B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e, t, i, n
// locals: this
// closure: c, S
function {
  this = this;
  if (!(this.isCurrent(i))) goto L_46d;
  if (!((n === this.documentSyncSequence))) goto L_46d;
  this.acceptSynchronizationState(t.synchronization);
  if (!((e === c.MultiplayerDocumentAccess.VIEW))) goto L_13a;
  if (!(this.hasUnacknowledgedUpdates())) goto L_13a;
  goto L_46d;
  // [栈深重同步 1 -> 0]
  if (!((e === c.MultiplayerDocumentAccess.EDIT))) goto L_289;
  this.outboundUpdates.unshift({bytes: new Uint8Array(t.update.yjs.bytes), sequence: t.synchronization.sequence});
  this.adoptedSyncSequence = n;
  if (!((this.synchronization == null))) goto L_2e3;
  this.synchronization;
  goto L_304;
  if (!((true === undefined.localEditsDurable))) goto L_351;
  if (!((0 === this.pendingRemoteUpdates))) goto L_351;
  goto L_373;
  // [栈深重同步 3 -> 2]
  this.setState(S.SYNCHRONIZING, e, undefined);
  if (!(this.isCurrent(i))) goto L_46d;
  if (!((n === this.documentSyncSequence))) goto L_46d;
  if (!((e === c.MultiplayerDocumentAccess.EDIT))) goto L_444;
  (await this.sendQueuedUpdates(i, n));
  (await this.refreshLocalPresence(i, n));
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=260B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: t
// closure: this, i, e, c
function {
  if (!(this.isCurrent(i))) goto L_103;
  this.pendingAcknowledgments = (this.pendingAcknowledgments --);
  if (!(e.isLoggingEnabled)) goto L_b0;
  console.warn("The editor rejected a server acknowledgment", t);
  this.rejectEvent(new c.MultiplayerProtocolError("The server returned an invalid document acknowledgment snapshot."));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// closure: this
function {
  return this.updateSynchronizationState();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=206B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// closure: this, i
function {
  if (!(this.isCurrent(i))) goto L_cd;
  this.pendingAcknowledgments = (this.pendingAcknowledgments --);
  this.acceptSynchronizationState(e);
  this.enforceAcknowledgmentTimeout();
  this.enqueue(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=3 cpool=2 bc=318B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: t, i
// locals: n, s, o, this
// closure: e, c, v
function {
  this = this;
  let s;
  let n;
  if (!(!this.isCurrent(i))) goto L_32;
  return;
  n = v(t.snapshot, "document acknowledgment snapshot");
  this.pendingAcknowledgments = (this.pendingAcknowledgments ++);
  s = function <atom:0>;
  try { // catch -> L_12f
  this.trackAccepted(this.engine.applyAcknowledgment(n)).then(function <atom:0>, s);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_13d
  s(o);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=330B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: this
function {
  this = this;
  if (!((this.synchronization == null))) goto L_4e;
  this.synchronization;
  goto L_6f;
  if (!((undefined.sequence == null))) goto L_75;
  undefined.sequence;
  if (((e.sequence < -1))) goto L_149;
  this.synchronization = {sequence: e.sequence, localEditsDurable: e.localEditsDurable, localEditsSynced: e.localEditsSynced, pendingSequence: e.pendingSequence};
  this.updateAcknowledgmentTimeout();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=136B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// closure: this, t, e
function {
  if (!(this.isCurrent(t))) goto L_87;
  if (!((this.acknowledgmentTarget === e))) goto L_87;
  this.acknowledgmentExpired = true;
  this.enforceAcknowledgmentTimeout();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=1 bc=353B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: e, t, this
// closure: p
function {
  this = this;
  let t;
  let e;
  if (!((this.synchronization == null))) goto L_32;
  this.synchronization;
  goto L_53;
  e = undefined.pendingSequence;
  if (!((e === this.acknowledgmentTarget))) goto L_7d;
  return;
  this.clearAcknowledgmentTimeout();
  if (((undefined === e))) goto L_d8;
  if (!((this.lastSentSequence == null))) goto L_d7;
  this.lastSentSequence;
  if (!((e > -1))) goto L_db;
  return;
  t = this.generation;
  this.acknowledgmentTarget = e;
  this.cancelAcknowledgmentTimeout = this.clock.schedule(function <atom:0>, p);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=230B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
// closure: E, a, u
function {
  this = this;
  if (!(this.acknowledgmentExpired)) goto L_e5;
  if (!((0 === this.pendingAcknowledgments))) goto L_e5;
  this.fail("The server did not acknowledge a document update in time.", {code: E, reason: "document synchronization timed out"}, a.CONNECTION, undefined, {retryable: true, reason: u.SYNCHRONIZATION_TIMEOUT});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=84B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
function {
  this = this;
  if (!((this.cancelAcknowledgmentTimeout == null))) goto L_2d;
  this.cancelAcknowledgmentTimeout;
  this;
  goto L_30;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.cancelAcknowledgmentTimeout = undefined;
  this.acknowledgmentTarget = undefined;
  this.acknowledgmentExpired = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=143B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
// closure: r
function {
  this = this;
  this.clearAcknowledgmentTimeout();
  this.outboundUpdates = [];
  if (!(r.isVersionAtLeast(110))) goto L_6c;
  this.synchronization = undefined;
  undefined;
  this.lastSentSequence = undefined;
  this.pendingRemoteUpdates = 0;
  this.pendingAcknowledgments = 0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
function {
  this = this;
  if (!((this.synchronization == null))) goto L_2e;
  this.synchronization;
  goto L_4f;
  return (false === undefined.localEditsDurable);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=153B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
function {
  this = this;
  if (!((undefined !== this.adoptedSyncSequence))) goto L_98;
  if (!((this.adoptedSyncSequence === this.documentSyncSequence))) goto L_98;
  return this.acceptsRemoteEditorUpdates();
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=307B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
// closure: S
function {
  this = this;
  if (!(this.hasAdoptedSnapshot())) goto L_132;
  if (!((this.synchronization == null))) goto L_7c;
  this.synchronization;
  goto L_9d;
  if (!((true === undefined.localEditsDurable))) goto L_ea;
  if (!((0 === this.pendingRemoteUpdates))) goto L_ea;
  goto L_10c;
  // [栈深重同步 3 -> 2]
  this.setState(S.SYNCHRONIZING, this.currentAccess, undefined);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=0 bc=1185B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e, t
// locals: i, n, this
// closure: c, r, o
function {
  this = this;
  let i;
  if ((!this.isCurrent(e))) goto L_f0;
  if (((t !== this.documentSyncSequence))) goto L_f0;
  if ((!this.hasAdoptedSnapshot())) goto L_f0;
  if (!((this.currentAccess !== c.MultiplayerDocumentAccess.EDIT))) goto L_f4;
  return undefined; // async
  i = this.outboundUpdates.slice();
  if (!((0 !== i.length))) goto L_49f;
  if (!(r.isVersionAtLeast(77))) goto L_20c;
  if (!((undefined !== this.documentPersistence))) goto L_20c;
  (await this.awaitPersistence(this.documentPersistence.flush(false), e, t));
  if (!(this.isCurrent(e))) goto L_49f;
  if (!((t === this.documentSyncSequence))) goto L_49f;
  this.outboundUpdates.splice(0, i.length);
  let n;
  for (const n of i) {
    if ((!this.isCurrent(e))) goto L_307;
    if (!((t !== this.documentSyncSequence))) goto L_30f;
    return undefined; // async
    // [栈深重同步 0 -> 3]
    if (!((this.lastSentSequence == null))) goto L_35e;
    this.lastSentSequence;
    this.lastSentSequence = Math.max(-1, n.sequence);
    this.updateAcknowledgmentTimeout();
    this.send({type: c.MultiplayerMessageType.DOCUMENT_UPDATE, update: o.Base64.fromByteArray(n.bytes)});
  }
  return undefined; // async
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=527B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e, t
// locals: i, this
// closure: s, c
function {
  this = this;
  let i;
  if ((!this.isCurrent(e))) goto L_7e;
  if (((t !== this.documentSyncSequence))) goto L_7e;
  if (!(!this.hasAdoptedSnapshot())) goto L_82;
  return undefined; // async
  i = (await this.engine.refreshLocalPresence());
  if (!(this.isCurrent(e))) goto L_20d;
  if (!((t === this.documentSyncSequence))) goto L_20d;
  if (!((i.status === s.EditorResultStatus.REJECTED))) goto L_20d;
  if (!((i.error == null))) goto L_1de;
  i.error;
  goto L_1ff;
  if (!((undefined.message == null))) goto L_209;
  undefined.message;
  throw new c.MultiplayerProtocolError("Local awareness could not be refreshed");
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=414B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
// closure: r, n, E, a, u
function {
  this = this;
  if (!(r.isVersionAtLeast(77))) goto L_10b;
  if (!((undefined !== this.documentPersistence))) goto L_10b;
  this.trackAccepted(this.documentPersistence.setConnectionState(n.DocumentConnectionState.Unavailable));
  this.fail("The document became view-only before local updates were acknowledged.", {code: E, reason: "document edit access removed"}, a.DOCUMENT_UNAVAILABLE, undefined, {retryable: false, reason: u.ACCESS_DENIED});
  return;
}

// fn <atom:0>  args=3 vars=9 closure=4 cpool=0 bc=702B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: i, n, s
// locals: o, r, i#1, u, c, this
// closure: t, e, y, a
function {
  this = this;
  let o;
  o = this.documentPersistence;
  try { // catch -> L_33
  return (await i); // async
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_2bd
  let u;
  let i#1;
  if ((!this.isCurrent(n))) goto L_95;
  if (!((undefined !== s))) goto L_9a;
  if (!((s !== this.documentSyncSequence))) goto L_9a;
  return undefined; // async
  i#1 = t.getDocumentPersistenceError(r);
  if (!((undefined === i#1))) goto L_ca;
  throw r;
  u = undefined;
  try { // catch -> L_109
  if (!((o == null))) goto L_dc;
  o;
  goto L_100;
  u = (await undefined.state());
  (await undefined.state());
  <?>;
  goto L_16d;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_16c
  if (!(e.isLoggingEnabled)) goto L_168;
  console.warn("Multiplayer persistence state could not be read", c);
  <?>;
  goto L_16d;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if ((!this.isCurrent(n))) goto L_1c3;
  if (!((undefined !== s))) goto L_1c8;
  if (!((s !== this.documentSyncSequence))) goto L_1c8;
  return undefined; // async
  if (!((undefined !== u))) goto L_1e0;
  this.currentPersistence = u;
  u;
  if (!(e.isLoggingEnabled)) goto L_238;
  console.warn("Multiplayer document persistence operation failed", r);
  this.fail(i#1.message, {code: y, reason: "document recovery failed"}, a.PERSISTENCE, undefined);
  return undefined; // async
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=74B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// closure: this, i
function {
  this.acceptedWork.delete(i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=162B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: t
// closure: this, i, e
function {
  this.acceptedWork.delete(i);
  if (!(e.isLoggingEnabled)) goto L_a1;
  console.warn("Accepted multiplayer document work failed", t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=2 bc=123B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: t
// locals: i, this
// closure: e
function {
  this = this;
  let i;
  i = t.then(function <atom:0>, function <atom:0>);
  this.acceptedWork.add(i);
  return t;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=268B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
// closure: r, n
function {
  this = this;
  if (!(r.isVersionAtLeast(77))) goto L_10b;
  if (!((undefined !== this.documentPersistence))) goto L_10b;
  this.trackAccepted(this.documentPersistence.setConnectionState(n.DocumentConnectionState.Offline));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=151B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: i
// closure: this, t, e
function {
  if (!(this.isCurrent(t))) goto L_95;
  try { // catch -> L_36
  (await e());
  <?>;
  goto L_95;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_94
  if (!(!this.isCurrent(t))) goto L_6a;
  return undefined; // async
  this.rejectEvent(i);
  <?>;
  goto L_95;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=123B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.generation;
  this.pendingWork = this.pendingWork.then(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=6 cpool=0 bc=294B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: t
// locals: i, this
// closure: e, c, g, m, y, a
function {
  this = this;
  let i;
  if (!(e.isLoggingEnabled)) goto L_5c;
  console.warn("Multiplayer document session rejected an event", t);
  i = (t instanceof c.MultiplayerProtocolError);
  if (!(i)) goto L_b4;
  goto L_b7;
  // [栈深重同步 5 -> 4]
  if (!(i)) goto L_c8;
  goto L_cd;
  // [栈深重同步 5 -> 4]
  if (!(i)) goto L_fd;
  goto L_121;
  // [栈深重同步 5 -> 4]
  this.fail(g(t), {code: y, reason: "multiplayer session failed"}, a.EDITOR, undefined);
  return;
}

// fn <atom:0>  args=2 vars=8 closure=4 cpool=0 bc=2218B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: t, i
// locals: i#1, s, n, t#1, e, this
// closure: c, v, e, s
function {
  this = this;
  if (((t.type === c.MultiplayerMessageType.DOCUMENT_CHECKPOINT_ACK))) goto L_ba;
  if (!((t.type === c.MultiplayerMessageType.DOCUMENT_CHECKPOINT_ERROR))) goto L_41a;
  let s;
  let i#1;
  i#1 = this.pendingCheckpoints.get(t.request_id);
  if (!((i#1 == null))) goto L_136;
  i#1;
  goto L_157;
  if (!((null == undefined.wanted))) goto L_15c;
  return undefined; // async
  if (!((t.type === c.MultiplayerMessageType.DOCUMENT_CHECKPOINT_ERROR))) goto L_24c;
  i#1.reject(new Error("The multiplayer checkpoint failed (".concat(t.code, ").")));
  return undefined; // async
  s = undefined;
  try { // catch -> L_2f3
  s = this.codec().snapshotContainsUpdate(v(t.snapshot, "checkpoint snapshot"), i#1.wanted);
  this.codec().snapshotContainsUpdate(v(t.snapshot, "checkpoint snapshot"), i#1.wanted);
  t.type;
  goto L_3b2;
  // [栈深重同步 0 -> 2]
  n = <?>;
  try { // catch -> L_3b1
  let t#1;
  if (!(e.isLoggingEnabled)) goto L_353;
  console.warn("Invalid multiplayer checkpoint snapshot", n);
  t#1 = new c.MultiplayerProtocolError("Invalid multiplayer checkpoint snapshot");
  i#1.reject(t#1);
  throw t#1;
  // [栈深重同步 1 -> 2]
  throw <?>;
  // [栈深重同步 1 -> 0]
  if (!(s)) goto L_3e2;
  i#1.resolve();
  goto L_419;
  // [栈深重同步 1 -> 0]
  i#1.reject(new Error("The multiplayer checkpoint does not include the requested document state."));
  return undefined; // async
  // [栈深重同步 0 -> 1]
  if (!((<?> === c.MultiplayerMessageType.AWARENESS))) goto L_5d2;
  if (!(!this.acceptsRemoteEditorUpdates())) goto L_4bd;
  throw new c.MultiplayerProtocolError("Awareness update arrived before the document session opened");
  (await this.applyRemotePresence({yjs: {clientId: {value: String(t.client_id)}, bytes: v(t.update, "awareness update")}}));
  if (!(this.isCurrent(i))) goto L_5cf;
  if (!((this.onRemotePresenceActivity == null))) goto L_5a4;
  this.onRemotePresenceActivity;
  this;
  goto L_5cf;
  // [栈深重同步 2 -> 3]
  <?>.call(undefined, String(t.client_id));
  return undefined; // async
  if (!((<?> === c.MultiplayerMessageType.AWARENESS_REMOVE))) goto L_7b5;
  let e;
  if (!(!this.acceptsRemoteEditorUpdates())) goto L_64c;
  return undefined; // async
  e = (await this.engine.removeRemotePresence({value: String(t.client_id)}));
  if (!((e.status === s.EditorResultStatus.REJECTED))) goto L_7b3;
  if (!((e.error == null))) goto L_784;
  e.error;
  goto L_7a5;
  if (!((undefined.message == null))) goto L_7af;
  undefined.message;
  throw new c.MultiplayerProtocolError("Remote awareness removal was rejected");
  return undefined; // async
  if (!((<?> === c.MultiplayerMessageType.PRESENCE))) goto L_8a7;
  this.currentParticipants = t.participants.slice();
  if (!((this.onParticipantsChange == null))) goto L_87e;
  this.onParticipantsChange;
  this;
  goto L_8a4;
  // [栈深重同步 2 -> 3]
  <?>.call(undefined, this.currentParticipants);
  return undefined; // async
  <?>;
  return undefined; // async
}

// fn <atom:0>  args=3 vars=9 closure=6 cpool=0 bc=2143B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e, t, i
// locals: n, n#1, s, r, u, this
// closure: c, E, a, o, v, C
function {
  this = this;
  let u;
  let r;
  let s;
  let n#1;
  if (!(!e.initialized)) goto L_302;
  let n;
  if (!((i !== this.documentSyncSequence))) goto L_63;
  return undefined; // async
  if ((!this.allowInitialization)) goto L_f3;
  if (!((e.access !== c.MultiplayerDocumentAccess.EDIT))) goto L_159;
  this.fail("A view-only document has not been initialized", {code: E, reason: "multiplayer document unavailable"}, a.DOCUMENT_UNAVAILABLE, undefined);
  return undefined; // async
  n = (await this.engine.encodeFullState());
  if (!(this.isCurrent(t))) goto L_2ff;
  if (!((i === this.documentSyncSequence))) goto L_2ff;
  this.send({type: c.MultiplayerMessageType.DOCUMENT_INITIALIZE, update: o.Base64.fromByteArray(n.yjs.bytes)});
  return undefined; // async
  n#1 = v(e.update, "document snapshot");
  s = {bytes: v(e.state_vector, "state vector")};
  r = (await this.engine.prepareSynchronization(s, false));
  if ((!this.isCurrent(t))) goto L_3ff;
  if (!((i !== this.documentSyncSequence))) goto L_403;
  return undefined; // async
  this.acceptSynchronizationState(r.synchronization);
  if (!((e.access === c.MultiplayerDocumentAccess.VIEW))) goto L_509;
  if (!(this.hasUnacknowledgedUpdates())) goto L_509;
  this.failPendingView();
  return undefined; // async
  if (!((i === this.documentSyncSequence))) goto L_685;
  if (!((e.access === c.MultiplayerDocumentAccess.VIEW))) goto L_685;
  if (!(r.hasChanges)) goto L_685;
  if (!((undefined === this.onAuthoritativeSnapshot))) goto L_654;
  this.fail("A view-only document contains local changes; reopen the editor from the authoritative snapshot", {code: E, reason: "authoritative document replacement required"}, a.EDITOR, undefined);
  return undefined; // async
  (await this.onAuthoritativeSnapshot(C(n#1)));
  goto L_6b0;
  (await this.applyDocumentUpdate(n#1));
  if ((!this.isCurrent(t))) goto L_701;
  if (!((i !== this.documentSyncSequence))) goto L_705;
  return undefined; // async
  u = (await this.engine.prepareSynchronization(s, (e.access === c.MultiplayerDocumentAccess.EDIT)));
  if (!(this.isCurrent(t))) goto L_85c;
  if (!((i === this.documentSyncSequence))) goto L_85c;
  (await this.finishSynchronization(e.access, u, t, i));
  return undefined; // async
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=321B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: t, this
// closure: C, s, c
function {
  this = this;
  let t;
  t = (await this.engine.applyRemoteUpdate(C(e)));
  if (!((t.status === s.EditorResultStatus.REJECTED))) goto L_13f;
  if (!((t.error == null))) goto L_110;
  t.error;
  goto L_131;
  if (!((undefined.message == null))) goto L_13b;
  undefined.message;
  throw new c.MultiplayerProtocolError("Remote document update was rejected");
  return undefined; // async
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=319B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: t, this
// closure: s, c
function {
  this = this;
  let t;
  t = (await this.engine.applyRemotePresence(e));
  if (!((t.status === s.EditorResultStatus.REJECTED))) goto L_13d;
  if (!((t.error == null))) goto L_10e;
  t.error;
  goto L_12f;
  if (!((undefined.message == null))) goto L_139;
  undefined.message;
  throw new c.MultiplayerProtocolError("Remote awareness update was rejected");
  return undefined; // async
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=479B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: t, this
// closure: c, o
function {
  this = this;
  let t;
  t = Number(e.yjs.clientId.value);
  if ((!Number.isSafeInteger(t))) goto L_a6;
  if (!((t < 0))) goto L_d6;
  throw new c.MultiplayerProtocolError("Local awareness client identity is invalid");
  this.send({type: c.MultiplayerMessageType.AWARENESS, client_id: t, update: o.Base64.fromByteArray(e.yjs.bytes)});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=165B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: t, this
// closure: c
function {
  this = this;
  let t;
  t = this.connection;
  if (((undefined === t))) goto L_a4;
  if ((this.closed)) goto L_a4;
  t.send(c.encodeMultiplayerClientMessage(e));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: this
function {
  this = this;
  if (!(!this.closed)) goto L_4d;
  return (e === this.generation);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=145B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
// closure: S
function {
  this = this;
  if (((this.currentState === S.SYNCHRONIZING))) goto L_90;
  return (this.currentState === S.SYNCHRONIZED);
}

// fn <atom:0>  args=1 vars=3 closure=5 cpool=0 bc=450B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e
// locals: t, this
// closure: N, r, n, E, a
function {
  this = this;
  let t;
  t = N(e);
  if (!(r.isVersionAtLeast(77))) goto L_13e;
  if (!((undefined !== this.documentPersistence))) goto L_13e;
  if (!(!t.retryable)) goto L_13e;
  this.trackAccepted(this.documentPersistence.setConnectionState(n.DocumentConnectionState.Unavailable));
  this.fail(e.message, {code: E, reason: "multiplayer document unavailable"}, a.DOCUMENT_UNAVAILABLE, undefined, t);
  return;
}

// fn <atom:0>  args=5 vars=8 closure=2 cpool=0 bc=775B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e, t, i, n, s
// locals: o, r, this
// closure: A, S
function {
  this = this;
  let r;
  let o;
  if ((this.closed)) goto L_52;
  if (!((undefined !== this.currentFailure))) goto L_55;
  return;
  this.generation = (this.generation ++);
  this.rejectCheckpoints("The multiplayer connection ended before the checkpoint completed.");
  this.clearConnectionWork();
  if (!((this.cancelInitialTimeout == null))) goto L_fd;
  this.cancelInitialTimeout;
  this;
  goto L_100;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.cancelInitialTimeout = undefined;
  this.adoptedSyncSequence = undefined;
  this.initializingDocument = false;
  this.initialMessages.length = 0;
  if (!((s == null))) goto L_15b;
  s;
  o = A(i, n);
  null;
  o;
  this.currentFailure = {kind: i, message: e, connection: n};
  this.pendingWork = Promise.resolve();
  r = this.connection;
  this.connection = undefined;
  this.disconnectPersistence();
  this.lastActivitySentAt = undefined;
  this.clearParticipants();
  if (!(o.retryable)) goto L_2a5;
  goto L_2c7;
  // [栈深重同步 3 -> 2]
  this.setState(S.FAILED_NON_RETRYABLE, undefined, e);
  if (!((undefined !== r))) goto L_306;
  if (!((undefined !== t))) goto L_306;
  this.closeConnection(r, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=143B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: t, i
// locals: n
// closure: e
function {
  try { // catch -> L_2e
  t.close(i);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_8e
  if (!(e.isLoggingEnabled)) goto L_8b;
  console.warn("Multiplayer connection could not be closed", n);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=137B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: this
function {
  this = this;
  if (!((0 !== this.currentParticipants.length))) goto L_88;
  this.currentParticipants = [];
  if (!((this.onParticipantsChange == null))) goto L_63;
  this.onParticipantsChange;
  this;
  goto L_88;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=3 vars=6 closure=2 cpool=0 bc=433B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: e, t, i
// locals: n, s, this
// closure: S, c
function {
  this = this;
  let s;
  let n;
  if (!(this.closed)) goto L_53;
  if (!((e !== S.CLOSED))) goto L_53;
  return;
  if (((this.currentState !== e))) goto L_c7;
  if (((this.currentAccess !== t))) goto L_c7;
  n = (this.currentError !== i);
  this.currentState = e;
  this.currentAccess = t;
  this.currentError = i;
  if (!(this.hasAdoptedSnapshot())) goto L_159;
  s = (t === c.MultiplayerDocumentAccess.EDIT);
  if ((n)) goto L_187;
  if (!((this.lastPublishedCanEdit !== s))) goto L_1b0;
  this.publishState();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=510B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: e, this
// closure: c
function {
  this = this;
  let e;
  if (!(this.hasAdoptedSnapshot())) goto L_96;
  e = (this.currentAccess === c.MultiplayerDocumentAccess.EDIT);
  this.lastPublishedCanEdit = e;
  if (!((this.onStateChange == null))) goto L_d0;
  this.onStateChange;
  this;
  goto L_1fd;
  // [栈深重同步 1 -> 2]
  if (!((undefined === this.documentPersistence))) goto L_177;
  goto L_19f;
  // [栈深重同步 4 -> 3]
  null;
  {persistence: this.currentPersistence};
  if (!((undefined === this.currentFailure))) goto L_1cd;
  goto L_1f5;
  // [栈深重同步 4 -> 3]
  null;
  {failure: this.currentFailure};
  return;
}

// fn <atom:0>  args=3 vars=29 closure=0 cpool=61 bc=837B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// args: require, module, exports
// locals: e, t, i, n, s, o, r, c, a, u, d, h, l, p, E, y, m, S, C, v, g, A, N, MultiplayerDocumentSession, <class_fields_init>, MultiplayerDocumentSession#1
function {
  C = function C;
  v = function v;
  g = function g;
  A = function A;
  N = function N;
  let MultiplayerDocumentSession#1;
  let m;
  let y;
  let E;
  let p;
  let l;
  let h;
  let d;
  let c;
  let r;
  let o;
  let s;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MultiplayerDocumentFailureKind = undefined;
  exports.MultiplayerDocumentFailureReason = undefined;
  exports.MultiplayerDocumentSessionState = undefined;
  exports.MultiplayerDocumentSession = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("collaborative_editor/src/DocumentPersistenceFailure");
  i = require("./OAIMultiplayerConnectionService");
  n = require("collaborative_editor/src/DocumentPersistenceTypes");
  s = require("collaborative_editor/src/EditorTypes");
  o = require("coreutils/src/Base64");
  r = require("valdi_core/src/CompilerIntrinsics");
  c = require("./MultiplayerProtocol");
  if ((a)) goto L_126;
  a = {};
  exports.MultiplayerDocumentFailureKind = {};
  !function <atom:0>({});
  if ((u)) goto L_13f;
  u = {};
  exports.MultiplayerDocumentFailureReason = {};
  function <atom:0>({});
  d = 30000;
  h = 30000;
  l = 30000;
  p = 15000;
  E = 1000;
  y = 1011;
  m = 4400;
  if ((S)) goto L_17a;
  S = {};
  exports.MultiplayerDocumentSessionState = {};
  !function <atom:0>({});
  let MultiplayerDocumentSession;
  let <class_fields_init>;
  class MultiplayerDocumentSession extends undefined { ... }
  <proto:MultiplayerDocumentSession>.state = function <atom:0>;
  <proto:MultiplayerDocumentSession>.access = function <atom:0>;
  <proto:MultiplayerDocumentSession>.error = function <atom:0>;
  <proto:MultiplayerDocumentSession>.participants = function <atom:0>;
  <proto:MultiplayerDocumentSession>.connect = function <atom:0>;
  <proto:MultiplayerDocumentSession>.handleEditorEvent = function <atom:0>;
  <proto:MultiplayerDocumentSession>.reportActivity = function <atom:0>;
  <proto:MultiplayerDocumentSession>.requestCheckpointAsync = function <atom:0>;
  <proto:MultiplayerDocumentSession>.rejectCheckpoints = function <atom:0>;
  <proto:MultiplayerDocumentSession>.codec = function <atom:0>;
  <proto:MultiplayerDocumentSession>.close = function <atom:0>;
  <proto:MultiplayerDocumentSession>.drain = function <atom:0>;
  <proto:MultiplayerDocumentSession>.createConnectionListener = function <atom:0>;
  <proto:MultiplayerDocumentSession>.receiveMessage = function <atom:0>;
  <proto:MultiplayerDocumentSession>.initializeDocument = function <atom:0>;
  <proto:MultiplayerDocumentSession>.finishInitialDocument = function <atom:0>;
  <proto:MultiplayerDocumentSession>.receiveDocumentUpdate = function <atom:0>;
  <proto:MultiplayerDocumentSession>.receivePersistentSync = function <atom:0>;
  <proto:MultiplayerDocumentSession>.finishPersistentSync = function <atom:0>;
  <proto:MultiplayerDocumentSession>.beginSynchronization = function <atom:0>;
  <proto:MultiplayerDocumentSession>.finishSynchronization = function <atom:0>;
  <proto:MultiplayerDocumentSession>.receiveUpdateAcknowledgment = function <atom:0>;
  <proto:MultiplayerDocumentSession>.acceptSynchronizationState = function <atom:0>;
  <proto:MultiplayerDocumentSession>.updateAcknowledgmentTimeout = function <atom:0>;
  <proto:MultiplayerDocumentSession>.enforceAcknowledgmentTimeout = function <atom:0>;
  <proto:MultiplayerDocumentSession>.clearAcknowledgmentTimeout = function <atom:0>;
  <proto:MultiplayerDocumentSession>.clearConnectionWork = function <atom:0>;
  <proto:MultiplayerDocumentSession>.hasUnacknowledgedUpdates = function <atom:0>;
  <proto:MultiplayerDocumentSession>.hasAdoptedSnapshot = function <atom:0>;
  <proto:MultiplayerDocumentSession>.updateSynchronizationState = function <atom:0>;
  <proto:MultiplayerDocumentSession>.sendQueuedUpdates = function <atom:0>;
  <proto:MultiplayerDocumentSession>.refreshLocalPresence = function <atom:0>;
  <proto:MultiplayerDocumentSession>.failPendingView = function <atom:0>;
  <proto:MultiplayerDocumentSession>.awaitPersistence = function <atom:0>;
  <proto:MultiplayerDocumentSession>.trackAccepted = function <atom:0>;
  <proto:MultiplayerDocumentSession>.disconnectPersistence = function <atom:0>;
  <proto:MultiplayerDocumentSession>.enqueue = function <atom:0>;
  <proto:MultiplayerDocumentSession>.rejectEvent = function <atom:0>;
  <proto:MultiplayerDocumentSession>.handleServerMessage = function <atom:0>;
  <proto:MultiplayerDocumentSession>.synchronize = function <atom:0>;
  <proto:MultiplayerDocumentSession>.applyDocumentUpdate = function <atom:0>;
  <proto:MultiplayerDocumentSession>.applyRemotePresence = function <atom:0>;
  <proto:MultiplayerDocumentSession>.sendLocalPresence = function <atom:0>;
  <proto:MultiplayerDocumentSession>.send = function <atom:0>;
  <proto:MultiplayerDocumentSession>.isCurrent = function <atom:0>;
  <proto:MultiplayerDocumentSession>.acceptsRemoteEditorUpdates = function <atom:0>;
  <proto:MultiplayerDocumentSession>.failServerDocument = function <atom:0>;
  <proto:MultiplayerDocumentSession>.fail = function <atom:0>;
  <proto:MultiplayerDocumentSession>.closeConnection = function <atom:0>;
  <proto:MultiplayerDocumentSession>.clearParticipants = function <atom:0>;
  <proto:MultiplayerDocumentSession>.setState = function <atom:0>;
  <proto:MultiplayerDocumentSession>.publishState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MultiplayerDocumentSession>;
  MultiplayerDocumentSession = function <atom:0>;
  // close_loc <class_fields_init>
  MultiplayerDocumentSession#1 = function <atom:0>;
  exports.MultiplayerDocumentSession = MultiplayerDocumentSession#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/MultiplayerDocumentSession
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
