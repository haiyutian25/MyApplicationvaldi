// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=41B file=chatgpt_multiplayer/src/MultiplayerSessionController
function {
  return Date.now();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=11B file=chatgpt_multiplayer/src/MultiplayerSessionController
// closure: i
function {
  return clearTimeout(i);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=15B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e, t
// locals: i
function {
  let i;
  i = setTimeout(e, t);
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=47B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: t
// closure: e
function {
  if (!((e.onFacepileChange == null))) goto L_2a;
  e.onFacepileChange;
  e;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>, t);
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=1 bc=887B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e, i
// locals: this
// closure: <class_fields_init>, t, c, h, a
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.options = e;
  this.clock = i;
  if (!(t.isVersionAtLeast(110))) goto L_96;
  goto L_db;
  // [栈深重同步 2 -> 1]
  this.synchronizedState = c.MultiplayerConnectionState.READY;
  this.generation = 0;
  this.phase = c.MultiplayerConnectionState.IDLE;
  this.sessionCanEdit = false;
  this.documentCanEdit = false;
  this.localEditsSynced = false;
  this.synchronizationSequence = -1;
  this.schemaCompatible = true;
  this.requested = false;
  this.suspended = false;
  this.inactive = false;
  this.terminal = false;
  this.pendingActivity = false;
  this.retryBackoffMs = h;
  this.cancelIdle = [];
  this.draining = new Set();
  this.persistence = e.persistence;
  this.localUserId = e.localUserId;
  if (!(t.isVersionAtLeast(185))) goto L_376;
  if (!((undefined !== e.requestFacepile))) goto L_376;
  this.facepile = new a.MultiplayerFacepile(e.requestFacepile, function <atom:0>, a.MULTIPLAYER_FACEPILE_FLAGS);
  this.facepile.setDocumentId(e.documentId);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=125B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: this
function {
  this = this;
  if (!((undefined === this.facepile))) goto L_37;
  throw new Error("Facepile requests are not configured for this session");
  return this.facepile.getData();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=167B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: this
function {
  this = this;
  if (!((undefined === this.facepile))) goto L_60;
  return Promise.reject(new Error("Facepile requests are not configured for this session"));
  return this.facepile.refresh();
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=82B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e
// locals: this
function {
  this = this;
  if (!((this.facepile == null))) goto L_2c;
  this.facepile;
  goto L_51;
  undefined.setPresence(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=613B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: this
// closure: c
function {
  this = this;
  if (!((this.phase !== c.MultiplayerConnectionState.CLOSED))) goto L_1ea;
  if (!(!this.terminal)) goto L_1ea;
  if (!(this.schemaCompatible)) goto L_1ea;
  if (!((undefined === this.persistence))) goto L_1a7;
  goto L_1ea;
  // [栈深重同步 2 -> 1]
  return {state: this.phase, access: this.access, synchronized: (this.phase === this.synchronizedState), canEdit: this.persistence.canEdit, failure: this.failure, persistence: this.persistence, localEditsSynced: this.localEditsSynced};
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=250B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: this
// closure: c, h
function {
  this = this;
  if (!((this.phase !== c.MultiplayerConnectionState.CLOSED))) goto L_f9;
  this.requested = true;
  this.suspended = false;
  this.inactive = false;
  this.terminal = false;
  this.retryBackoffMs = h;
  this.clearRetry();
  this.startConnection();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=380B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: this
// closure: c
function {
  this = this;
  if (!((this.phase !== c.MultiplayerConnectionState.CLOSED))) goto L_17b;
  this.suspended = true;
  this.pendingActivity = false;
  this.clearRetry();
  this.retireSession();
  this.phase = c.MultiplayerConnectionState.SUSPENDED;
  this.access = undefined;
  this.setRoster(undefined);
  this.publish();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=733B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: this
// closure: c
function {
  this = this;
  if ((!this.requested)) goto L_2dc;
  if ((this.suspended)) goto L_2dc;
  if ((this.terminal)) goto L_2dc;
  if (((this.phase === c.MultiplayerConnectionState.CLOSED))) goto L_2dc;
  if (!((this.persistence == null))) goto L_118;
  this.persistence;
  goto L_139;
  if (((undefined !== undefined.error))) goto L_2dc;
  if (!(this.inactive)) goto L_1a5;
  this.pendingActivity = true;
  this.inactive = false;
  goto L_2dc;
  // [栈深重同步 1 -> 0]
  if (((this.phase === this.synchronizedState))) goto L_27d;
  if (!((this.phase === c.MultiplayerConnectionState.SYNCHRONIZING))) goto L_2cf;
  if (!(this.sessionCanEdit)) goto L_2cf;
  if (!((this.session == null))) goto L_2a9;
  this.session;
  goto L_2dc;
  goto L_2dc;
  // [栈深重同步 1 -> 0]
  this.pendingActivity = true;
  true;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=740B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: e, this
// closure: c, y
function {
  this = this;
  let e;
  if (!((this.failure == null))) goto L_2f;
  this.failure;
  goto L_50;
  e = (undefined.kind === c.MultiplayerFailureKind.PERSISTENCE);
  if (!((this.options.engine.persistence == null))) goto L_103;
  this.options.engine.persistence;
  goto L_129;
  (await undefined.flush(true));
  if ((!e)) goto L_2e1;
  if ((!this.requested)) goto L_2e1;
  if ((this.suspended)) goto L_2e1;
  if ((this.inactive)) goto L_2e1;
  if ((this.terminal)) goto L_2e1;
  if (((this.phase === c.MultiplayerConnectionState.CLOSED))) goto L_2e1;
  if (!((undefined !== this.session))) goto L_2b8;
  if ((!y(this.session.state))) goto L_2e1;
  this.startConnection();
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=125B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: this
function {
  this = this;
  if (!(!this.session)) goto L_36;
  throw new Error("The multiplayer document must be connected before checkpointing.");
  return this.session.requestCheckpointAsync(); // async
}

// fn <atom:0>  args=1 vars=3 closure=6 cpool=0 bc=2430B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e
// locals: t, this
// closure: t, n, c, S, C, o
function {
  this = this;
  if (!(t.isVersionAtLeast(110))) goto L_1a9;
  let t;
  if (!((e.change == null))) goto L_5b;
  e.change;
  goto L_7c;
  if (!((undefined.synchronization == null))) goto L_f3;
  undefined.synchronization;
  if (!((e.synchronization == null))) goto L_f3;
  e.synchronization;
  if (!((e.snapshot == null))) goto L_d2;
  e.snapshot;
  goto L_f3;
  t = undefined.synchronization;
  if (!((undefined !== t))) goto L_1a8;
  if (!((t.sequence >= this.synchronizationSequence))) goto L_1a8;
  this.synchronizationSequence = t.sequence;
  this.localEditsSynced = t.localEditsSynced;
  t.localEditsSynced;
  if (!((e.kind === n.EditorEventKind.PERSISTENCE))) goto L_2dd;
  if (!((undefined !== e.persistence))) goto L_2dd;
  this.persistence = e.persistence;
  if (!((undefined !== e.persistence.error))) goto L_2dd;
  this.clearRetry();
  if (!((e.kind === n.EditorEventKind.CHANGE))) goto L_40c;
  if (!((undefined !== e.change))) goto L_40c;
  this.schemaCompatible = (e.change.status === n.EditorSnapshotStatus.EDITABLE);
  (e.change.status === n.EditorSnapshotStatus.EDITABLE);
  if (!((this.phase !== c.MultiplayerConnectionState.CLOSED))) goto L_97d;
  if (!((e.kind === n.EditorEventKind.PERSISTENCE))) goto L_6fa;
  if (!((e.persistence == null))) goto L_512;
  e.persistence;
  goto L_533;
  if (!((undefined !== undefined.error))) goto L_6fa;
  this.retireSession();
  this.phase = S(false);
  if ((this.terminal)) goto L_6ab;
  null;
  C(false, o.MultiplayerDocumentFailureReason.LOCAL_PERSISTENCE);
  this.failure = {kind: c.MultiplayerFailureKind.PERSISTENCE, message: e.persistence.error.message, connectionReason: undefined};
  {kind: c.MultiplayerFailureKind.PERSISTENCE, message: e.persistence.error.message, connectionReason: undefined};
  this.setRoster(undefined);
  this.publish();
  return;
  if (!((this.session == null))) goto L_724;
  this.session;
  goto L_749;
  undefined.handleEditorEvent(e);
  if (!((e.kind === n.EditorEventKind.FAILED))) goto L_956;
  this.terminal = true;
  this.documentCanEdit = false;
  this.clearRetry();
  this.retireSession();
  this.phase = S(false);
  null;
  C(false, o.MultiplayerDocumentFailureReason.EDITOR);
  if (!((e.error == null))) goto L_8f1;
  e.error;
  goto L_912;
  if (!((undefined.message == null))) goto L_91c;
  undefined.message;
  this.failure = {kind: c.MultiplayerFailureKind.EDITOR, message: "The editor schema is not supported", connectionReason: undefined};
  this.setRoster(undefined);
  this.publish();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=104B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e
// locals: this
function {
  this = this;
  if (!((e !== this.localUserId))) goto L_36;
  this.localParticipant = undefined;
  undefined;
  this.localUserId = e;
  this.publishParticipants();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=414B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e
// locals: this
// closure: c
function {
  this = this;
  if (!((this.phase !== c.MultiplayerConnectionState.CLOSED))) goto L_19d;
  this.localUserId = e.userId;
  if (!((e.displayName == null))) goto L_ee;
  e.displayName;
  if (!((e.profilePictureUrl == null))) goto L_11b;
  e.profilePictureUrl;
  this.localParticipant = {user_id: e.userId, display_name: "", profile_picture_url: null, last_activity_at: (this.clock.now() / 1000)};
  this.publishParticipants();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_multiplayer/src/MultiplayerSessionController
function {
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=645B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: this
// closure: c, t
function {
  this = this;
  if (((undefined !== this.closing))) goto L_261;
  this.phase = c.MultiplayerConnectionState.CLOSED;
  this.requested = false;
  this.pendingActivity = false;
  this.clearRetry();
  this.retireSession();
  this.access = undefined;
  this.localParticipant = undefined;
  if (!(t.isVersionAtLeast(185))) goto L_170;
  if (!((this.facepile == null))) goto L_14c;
  this.facepile;
  goto L_170;
  undefined.close();
  this.setRoster(undefined);
  this.closing = Promise.all(Array.from(this.draining)).then(function <atom:0>);
  this.publish();
  return this.closing;
}

// fn <atom:0>  args=0 vars=1 closure=10 cpool=0 bc=1269B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: i
// closure: s, this, a, n, e, C, o, c, l, t
function {
  let i;
  if (!((s !== this.generation))) goto L_2d;
  return undefined; // async
  i = undefined;
  try { // catch -> L_a5
  a = n();
  n();
  if (!((s !== this.generation))) goto L_97;
  if (!((a.cancel == null))) goto L_94;
  a.cancel;
  a;
  goto L_97;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  i = (await a);
  (await a);
  <?>;
  goto L_20f;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_20e
  if (!(e.isLoggingEnabled)) goto L_101;
  console.warn("The saved document could not be prepared");
  if (!((s === this.generation))) goto L_20a;
  this.preparation = undefined;
  null;
  C(false, o.MultiplayerDocumentFailureReason.LOCAL_PERSISTENCE);
  this.failPreparation({kind: c.MultiplayerFailureKind.PERSISTENCE, message: "The saved document could not be prepared for synchronization.", connectionReason: undefined});
  return undefined; // async
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((s === this.generation))) goto L_4f2;
  this.preparation = undefined;
  if (!((undefined !== i.failure))) goto L_2bb;
  goto L_4f2;
  // [栈深重同步 1 -> 0]
  if (!((undefined === i.documentId))) goto L_3fd;
  null;
  C(false, o.MultiplayerDocumentFailureReason.HOST_REJECTED);
  goto L_4f2;
  // [栈深重同步 1 -> 0]
  this.serverDocumentId = i.documentId;
  if (!(t.isVersionAtLeast(185))) goto L_4c9;
  if (!((this.facepile == null))) goto L_481;
  this.facepile;
  goto L_4c9;
  undefined.setDocumentId(i.documentId);
  this.openConnection(s);
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=55B file=chatgpt_multiplayer/src/MultiplayerSessionController
// closure: a
function {
  if (!((a == null))) goto L_a;
  a;
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((<?>.cancel == null))) goto L_33;
  <?>.cancel;
  <?>;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=73B file=chatgpt_multiplayer/src/MultiplayerSessionController
// closure: this, r
function {
  return this.draining.delete(r);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=87B file=chatgpt_multiplayer/src/MultiplayerSessionController
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_56;
  console.warn("Multiplayer document preparation failed");
  return;
}

// fn <atom:0>  args=0 vars=5 closure=8 cpool=4 bc=1165B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: s, n, a, r, this
// closure: e, C, o, c, l, t, y, i
function {
  this = this;
  let n;
  let s;
  if ((!this.requested)) goto L_16d;
  if ((this.suspended)) goto L_16d;
  if ((this.inactive)) goto L_16d;
  if ((this.terminal)) goto L_16d;
  if (((this.phase === c.MultiplayerConnectionState.CLOSED))) goto L_16d;
  if (!((this.persistence == null))) goto L_14b;
  this.persistence;
  goto L_16c;
  if (!((undefined !== undefined.error))) goto L_170;
  return;
  if (((undefined !== this.preparation))) goto L_209;
  if (!((undefined !== this.session))) goto L_20c;
  if (!(!y(this.session.state))) goto L_20c;
  return;
  this.retireSession();
  this.generation = (this.generation ++);
  s = (this.generation ++);
  n = this.options.prepareDocument;
  if (!((undefined !== n))) goto L_463;
  if (!((undefined === this.serverDocumentId))) goto L_463;
  let r;
  let a;
  a = undefined;
  this.phase = c.MultiplayerConnectionState.CONNECTING;
  this.failure = undefined;
  r = Promise.resolve().then(function <atom:0>);
  this.preparation = i.promiseToCancelablePromise(r, function <atom:0>);
  this.draining.add(r);
  r.then(function <atom:0>, function <atom:0>);
  this.publish();
  return;
  this.openConnection(s);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=379B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: n
// closure: e, this, i, t, s, o
function {
  if (!((e === this.generation))) goto L_17a;
  this.handleState(n, i);
  if (!(t.isVersionAtLeast(185))) goto L_17a;
  if (((e !== this.generation))) goto L_17a;
  if ((s)) goto L_17a;
  if (((n.state !== o.MultiplayerDocumentSessionState.SYNCHRONIZED))) goto L_17a;
  s = true;
  true;
  if (!((this.facepile == null))) goto L_156;
  this.facepile;
  goto L_17a;
  undefined.retryInitialLoad();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: t
// closure: e, this
function {
  if (!((e === this.generation))) goto L_4e;
  this.setRoster(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=121B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: t
// closure: e, this
function {
  if (!((e === this.generation))) goto L_78;
  if (!((this.options.onRemotePresenceActivity == null))) goto L_74;
  this.options.onRemotePresenceActivity;
  this.options;
  goto L_78;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=121B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: t
// closure: e, this
function {
  if (!((e === this.generation))) goto L_78;
  if (!((this.options.onRemoteDocumentEdit == null))) goto L_74;
  this.options.onRemoteDocumentEdit;
  this.options;
  goto L_78;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=43B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e
// closure: i
function {
  i = (4408 === e.code);
  (4408 === e.code);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=5 bc=1242B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e
// locals: i, s, this
// closure: t, o
function {
  this = this;
  let s;
  let i;
  i = false;
  s = false;
  if (!((undefined === this.options.onAuthoritativeSnapshot))) goto L_265;
  goto L_2ae;
  // [栈深重同步 5 -> 4]
  null;
  {onAuthoritativeSnapshot: this.options.onAuthoritativeSnapshot};
  if (!((undefined === this.options.onInitializeDocument))) goto L_2fd;
  goto L_346;
  // [栈深重同步 5 -> 4]
  null;
  {onInitializeDocument: this.options.onInitializeDocument};
  if (!((undefined === this.options.onInitialDocumentReady))) goto L_395;
  goto L_3de;
  // [栈深重同步 5 -> 4]
  null;
  {onInitialDocumentReady: this.options.onInitialDocumentReady};
  if (!((undefined === this.options.resolveCodec))) goto L_42d;
  goto L_476;
  // [栈深重同步 5 -> 4]
  null;
  {resolveCodec: this.options.resolveCodec};
  this.session = new o.MultiplayerDocumentSession({documentId: this.options.documentId, serverDocumentId: this.serverDocumentId, engine: this.options.engine, codec: this.options.codec, connectionService: this.options.connectionService, allowInitialization: this.options.allowInitialization, clock: this.clock, onStateChange: function <atom:0>, onParticipantsChange: function <atom:0>, onRemotePresenceActivity: function <atom:0>, onRemoteDocumentEdit: function <atom:0>, onConnectionClose: function <atom:0>});
  this.session.connect();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=351B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e
// locals: i, this
// closure: t, S, l
function {
  this = this;
  let i;
  if (!(t.isVersionAtLeast(110))) goto L_55;
  i = (true === e.retryable);
  this.failure = e;
  this.phase = S(i);
  if (!(i)) goto L_107;
  goto L_138;
  // [栈深重同步 1 -> 0]
  this.requested = false;
  this.clearRetry();
  this.publish();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=88B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: t
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Document access could not be frozen after connection rejection", t);
  return;
}

// fn <atom:0>  args=2 vars=9 closure=9 cpool=1 bc=4181B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: t, i
// locals: n, a, u, t#1, a#1, o, this
// closure: e, c, r, s, C, o, l, h, S
function {
  this = this;
  let u;
  let a;
  let n;
  if (!((this.phase === c.MultiplayerConnectionState.CLOSED))) goto L_78;
  return;
  this.sessionCanEdit = t.canEdit;
  if (!((t.access === r.MultiplayerDocumentAccess.VIEW))) goto L_11f;
  this.documentCanEdit = false;
  goto L_153;
  // [栈深重同步 1 -> 0]
  if (!(t.canEdit)) goto L_153;
  this.documentCanEdit = true;
  true;
  if (!((undefined === t.access))) goto L_180;
  goto L_276;
  // [栈深重同步 2 -> 1]
  if (!((t.access === r.MultiplayerDocumentAccess.EDIT))) goto L_231;
  goto L_276;
  // [栈深重同步 2 -> 1]
  this.access = s.DocumentAccess.View;
  n = t.failure;
  if (!((n == null))) goto L_2ad;
  n;
  goto L_2ce;
  a = undefined.kind;
  if (!((n == null))) goto L_2da;
  n;
  goto L_2fb;
  u = undefined.connection;
  if (!((undefined === n))) goto L_309;
  goto L_779;
  // [栈深重同步 2 -> 1]
  null;
  C(n.retryable, n.reason);
  if (!((a === o.MultiplayerDocumentFailureKind.CONNECTION))) goto L_3ee;
  goto L_5eb;
  // [栈深重同步 3 -> 2]
  if (!((a === o.MultiplayerDocumentFailureKind.PERSISTENCE))) goto L_481;
  goto L_5eb;
  // [栈深重同步 3 -> 2]
  if (!((a === o.MultiplayerDocumentFailureKind.PROTOCOL))) goto L_514;
  goto L_5eb;
  // [栈深重同步 3 -> 2]
  if (!((a === o.MultiplayerDocumentFailureKind.DOCUMENT_UNAVAILABLE))) goto L_5a6;
  goto L_5eb;
  // [栈深重同步 3 -> 2]
  if (!((undefined === u))) goto L_624;
  goto L_774;
  // [栈深重同步 3 -> 2]
  if (!((u.reason == null))) goto L_774;
  u.reason;
  if (!((2 === u.kind))) goto L_6c0;
  goto L_774;
  // [栈深重同步 3 -> 2]
  if (!((3 === u.kind))) goto L_72f;
  goto L_774;
  // [栈深重同步 3 -> 2]
  this.failure = {kind: c.MultiplayerFailureKind.EDITOR, message: n.message, connectionReason: l.OAIMultiplayerConnectionFailureReason.UNKNOWN};
  if (!((undefined !== t.persistence))) goto L_7d8;
  this.persistence = t.persistence;
  t.persistence;
  if (!((t.state === o.MultiplayerDocumentSessionState.SYNCHRONIZED))) goto L_931;
  this.phase = this.synchronizedState;
  this.retryBackoffMs = h;
  this.clearRetry();
  if (!(this.pendingActivity)) goto L_92d;
  this.pendingActivity = false;
  if (!((this.session == null))) goto L_909;
  this.session;
  goto L_92d;
  undefined.reportActivity();
  goto L_102d;
  if (!((t.state === o.MultiplayerDocumentSessionState.CONNECTING))) goto L_9cd;
  this.phase = c.MultiplayerConnectionState.CONNECTING;
  goto L_102d;
  if (!((t.state === o.MultiplayerDocumentSessionState.SYNCHRONIZING))) goto L_a69;
  this.phase = c.MultiplayerConnectionState.SYNCHRONIZING;
  goto L_102d;
  if (((t.state === o.MultiplayerDocumentSessionState.FAILED))) goto L_b4a;
  if (((t.state === o.MultiplayerDocumentSessionState.FAILED_RETRYABLE))) goto L_b4a;
  if (!((t.state === o.MultiplayerDocumentSessionState.FAILED_NON_RETRYABLE))) goto L_ef8;
  let o;
  let a#1;
  let t#1;
  if (!((n == null))) goto L_b5e;
  n;
  goto L_b7f;
  if (!((undefined.retryable == null))) goto L_b86;
  undefined.retryable;
  t#1 = false;
  this.phase = S(t#1);
  this.setRoster(undefined);
  if (!(i)) goto L_c24;
  this.inactive = true;
  this.phase = c.MultiplayerConnectionState.INACTIVE;
  goto L_102d;
  a#1 = this.failure;
  if (!((a#1 == null))) goto L_c54;
  a#1;
  goto L_c75;
  o = undefined.connectionReason;
  if (!(!t#1)) goto L_cf3;
  if (!((a#1 == null))) goto L_c8c;
  a#1;
  goto L_cad;
  this.terminal = (undefined.kind !== c.MultiplayerFailureKind.PERSISTENCE);
  if (!(this.terminal)) goto L_e7e;
  this.documentCanEdit = false;
  this.clearRetry();
  this.retireSession();
  if (!((this.options.engine.persistence == null))) goto L_ded;
  this.options.engine.persistence;
  goto L_ef4;
  goto L_ef4;
  // [栈深重同步 2 -> 1]
  if (!(t#1)) goto L_ef4;
  this.scheduleReconnect((o === l.OAIMultiplayerConnectionFailureReason.GRANT_EXPIRED));
  goto L_102d;
  if (!((t.state === o.MultiplayerDocumentSessionState.CLOSED))) goto L_f94;
  this.phase = c.MultiplayerConnectionState.SUSPENDED;
  goto L_102d;
  if (!((t.state === o.MultiplayerDocumentSessionState.IDLE))) goto L_102d;
  this.phase = c.MultiplayerConnectionState.IDLE;
  t.state;
  this.publish();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=49B file=chatgpt_multiplayer/src/MultiplayerSessionController
// closure: this
function {
  this.cancelRetry = undefined;
  this.startConnection();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=2 bc=772B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e
// locals: i, s, this
// closure: p, h, u, t, c
function {
  this = this;
  let s;
  let i;
  if (((undefined !== this.cancelRetry))) goto L_11f;
  if ((!this.requested)) goto L_11f;
  if ((this.suspended)) goto L_11f;
  if ((this.inactive)) goto L_11f;
  if ((this.terminal)) goto L_11f;
  if (!((this.persistence == null))) goto L_fd;
  this.persistence;
  goto L_11e;
  if (!((undefined !== undefined.error))) goto L_122;
  return;
  i = (1 + (p * ((2 * Math.random()) - 1)));
  if (!(e)) goto L_184;
  if (!((this.retryBackoffMs === h))) goto L_184;
  goto L_1d6;
  // [栈深重同步 1 -> 0]
  s = Math.min(u, (this.retryBackoffMs * i));
  this.retryBackoffMs = Math.min(u, (1.5 * this.retryBackoffMs));
  if ((t.isVersionAtLeast(110))) goto L_2ad;
  this.phase = c.MultiplayerConnectionState.RETRYING;
  c.MultiplayerConnectionState.RETRYING;
  this.cancelRetry = this.clock.schedule(function <atom:0>, s);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=61B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: this
function {
  this = this;
  if (!((this.cancelRetry == null))) goto L_2d;
  this.cancelRetry;
  this;
  goto L_30;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.cancelRetry = undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=73B file=chatgpt_multiplayer/src/MultiplayerSessionController
// closure: this, s
function {
  return this.draining.delete(s);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=88B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: t
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Multiplayer accepted work failed during shutdown", t);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=2 bc=422B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: t, i, s, this
// closure: e
function {
  this = this;
  let s;
  let i;
  let t;
  this.generation = (this.generation ++);
  t = this.preparation;
  this.preparation = undefined;
  if (!((t == null))) goto L_70;
  t;
  goto L_9d;
  if (!((undefined.cancel == null))) goto L_9a;
  undefined.cancel;
  undefined;
  goto L_9d;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  i = this.session;
  this.session = undefined;
  this.sessionCanEdit = false;
  if (!((undefined === i))) goto L_e0;
  return;
  i.close();
  s = i.drain();
  this.draining.add(s);
  s.then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=51B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e
// locals: this
function {
  this = this;
  this.roster = e;
  this.publishParticipants();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e
// closure: this
function {
  return (e.user_id === this.localUserId);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e
// closure: this
function {
  return (e.user_id !== this.localUserId);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=120B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: t
// closure: this, e, E
function {
  if (((t.user_id === this.localUserId))) goto L_77;
  return ((e - (1000 * t.last_activity_at)) < E);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_multiplayer/src/MultiplayerSessionController
// closure: this
function {
  return this.publishParticipants();   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=4 cpool=1 bc=543B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: t
// locals: i, s, n, a
// closure: this, e, d, E
function {
  let a;
  let n;
  let s;
  let i;
  i = (t.user_id === this.localUserId);
  s = (e - (1000 * t.last_activity_at));
  n = (s >= d);
  if (!(n)) goto L_8f;
  goto L_92;
  // [栈深重同步 1 -> 0]
  a = (d - s);
  if (!((a > 0))) goto L_162;
  this.cancelIdle.push(this.clock.schedule(function <atom:0>, Math.min(a, 2147483647)));
  if (!((t.profile_picture_url == null))) goto L_1da;
  t.profile_picture_url;
  if (!(!i)) goto L_211;
  return {userId: t.user_id, displayName: t.display_name, profilePictureUrl: undefined, lastActivityAt: t.last_activity_at, isIdle: n, isSelf: i};
}

// fn <atom:0>  args=0 vars=5 closure=3 cpool=4 bc=772B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: t, e, i, s, this
// closure: E, d, t
function {
  this = this;
  let s;
  let i;
  let e;
  let t;
  for (const t of this.cancelIdle) {
    t();
  }
  this.cancelIdle = [];
  e = this.clock.now();
  if (!((this.roster == null))) goto L_c4;
  this.roster;
  goto L_ea;
  if (!((undefined.find(function <atom:0>) == null))) goto L_112;
  undefined.find(function <atom:0>);
  this.localParticipant = this.localParticipant;
  if (!((undefined === this.localParticipant))) goto L_167;
  goto L_1e1;
  // [栈深重同步 1 -> 0]
  if (!((this.roster == null))) goto L_1b9;
  this.roster;
  // append([this.localParticipant], 1, [].filter(function <atom:0>))
  [].filter(function <atom:0>);
  i = [this.localParticipant];
  if (!((i == null))) goto L_1ed;
  i;
  goto L_239;
  s = undefined.filter(function <atom:0>).map(function <atom:0>);
  this.options.onParticipantsChange(s);
  if (!(t.isVersionAtLeast(185))) goto L_303;
  if (!((this.facepile == null))) goto L_2dc;
  this.facepile;
  goto L_303;
  undefined.setParticipants(s);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=107B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: this
function {
  this = this;
  this.options.onStateChange(this.state);
  return;
}

// fn y  args=1 vars=1 closure=1 cpool=0 bc=225B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e
// closure: o
function {
  if (((e === o.MultiplayerDocumentSessionState.FAILED))) goto L_e0;
  if (((e === o.MultiplayerDocumentSessionState.FAILED_RETRYABLE))) goto L_e0;
  return (e === o.MultiplayerDocumentSessionState.FAILED_NON_RETRYABLE);
}

// fn S  args=1 vars=1 closure=2 cpool=0 bc=257B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e
// closure: t, c
function {
  if (!(t.isVersionAtLeast(110))) goto L_bb;
  if (!(e)) goto L_75;
  return c.MultiplayerConnectionState.FAILED_RETRYABLE;
  return c.MultiplayerConnectionState.FAILED_NON_RETRYABLE;
  return c.MultiplayerConnectionState.FAILED;
}

// fn C  args=2 vars=2 closure=2 cpool=0 bc=59B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e, i
// closure: t, R
function {
  if (!(t.isVersionAtLeast(110))) goto L_39;
  return {retryable: e, reason: R(i)};
  return {};
}

// fn R  args=1 vars=1 closure=2 cpool=0 bc=1861B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: e
// closure: o, c
function {
  if (!((e === o.MultiplayerDocumentFailureReason.UNKNOWN))) goto L_90;
  return c.MultiplayerFailureReason.UNKNOWN;
  if (!((e === o.MultiplayerDocumentFailureReason.NETWORK))) goto L_11f;
  return c.MultiplayerFailureReason.NETWORK;
  if (!((e === o.MultiplayerDocumentFailureReason.SYNCHRONIZATION_TIMEOUT))) goto L_1ae;
  return c.MultiplayerFailureReason.SYNCHRONIZATION_TIMEOUT;
  if (!((e === o.MultiplayerDocumentFailureReason.GRANT_EXPIRED))) goto L_23d;
  return c.MultiplayerFailureReason.GRANT_EXPIRED;
  if (!((e === o.MultiplayerDocumentFailureReason.ACCESS_DENIED))) goto L_2cc;
  return c.MultiplayerFailureReason.ACCESS_DENIED;
  if (!((e === o.MultiplayerDocumentFailureReason.INVALID_RESPONSE))) goto L_35b;
  return c.MultiplayerFailureReason.INVALID_RESPONSE;
  if (!((e === o.MultiplayerDocumentFailureReason.HOST_REJECTED))) goto L_3ea;
  return c.MultiplayerFailureReason.HOST_REJECTED;
  if (!((e === o.MultiplayerDocumentFailureReason.DOCUMENT_UNAVAILABLE))) goto L_479;
  return c.MultiplayerFailureReason.DOCUMENT_UNAVAILABLE;
  if (!((e === o.MultiplayerDocumentFailureReason.UPDATE_REJECTED))) goto L_508;
  return c.MultiplayerFailureReason.UPDATE_REJECTED;
  if (!((e === o.MultiplayerDocumentFailureReason.SERVER_PERSISTENCE))) goto L_597;
  return c.MultiplayerFailureReason.SERVER_PERSISTENCE;
  if (!((e === o.MultiplayerDocumentFailureReason.CHECKPOINT))) goto L_626;
  return c.MultiplayerFailureReason.CHECKPOINT;
  if (!((e === o.MultiplayerDocumentFailureReason.LOCAL_PERSISTENCE))) goto L_6b5;
  return c.MultiplayerFailureReason.LOCAL_PERSISTENCE;
  if (!((e === o.MultiplayerDocumentFailureReason.EDITOR))) goto L_744;
  return c.MultiplayerFailureReason.EDITOR;
  e;
  return;
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=31 bc=553B file=chatgpt_multiplayer/src/MultiplayerSessionController
// args: require, module, exports
// locals: e, t, i, s, n, a, o, r, l, c, h, u, p, d, E, MultiplayerSessionController, <class_fields_init>, MultiplayerSessionController#1, y, S, C, R
function {
  y = function y;
  S = function S;
  C = function C;
  R = function R;
  let MultiplayerSessionController#1;
  let E;
  let d;
  let p;
  let u;
  let h;
  let c;
  let l;
  let r;
  let o;
  let a;
  let n;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.multiplayerClock = undefined;
  exports.MultiplayerSessionController = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/CompilerIntrinsics");
  i = require("valdi_core/src/CancelablePromise");
  s = require("collaborative_editor/src/DocumentPersistenceTypes");
  n = require("collaborative_editor/src/EditorTypes");
  a = require("./MultiplayerFacepile");
  o = require("./MultiplayerDocumentSession");
  r = require("./MultiplayerProtocol");
  l = require("./OAIMultiplayerConnectionService");
  c = require("./MultiplayerSessionTypes");
  h = 1000;
  u = 60000;
  p = 0.2;
  d = 600000;
  E = 1200000;
  exports.multiplayerClock = {now: function <atom:0>, schedule: function <atom:0>};
  let MultiplayerSessionController;
  let <class_fields_init>;
  class MultiplayerSessionController extends undefined { ... }
  <proto:MultiplayerSessionController>.getFacepileData = function <atom:0>;
  <proto:MultiplayerSessionController>.refreshFacepileData = function <atom:0>;
  <proto:MultiplayerSessionController>.setFacepilePresence = function <atom:0>;
  <proto:MultiplayerSessionController>.state = function <atom:0>;
  <proto:MultiplayerSessionController>.connect = function <atom:0>;
  <proto:MultiplayerSessionController>.suspendConnection = function <atom:0>;
  <proto:MultiplayerSessionController>.reportActivity = function <atom:0>;
  <proto:MultiplayerSessionController>.flushLocalWrites = function <atom:0>;
  <proto:MultiplayerSessionController>.requestCheckpointAsync = function <atom:0>;
  <proto:MultiplayerSessionController>.handleEditorEvent = function <atom:0>;
  <proto:MultiplayerSessionController>.setLocalUserId = function <atom:0>;
  <proto:MultiplayerSessionController>.setLocalParticipant = function <atom:0>;
  <proto:MultiplayerSessionController>.close = function <atom:0>;
  <proto:MultiplayerSessionController>.startConnection = function <atom:0>;
  <proto:MultiplayerSessionController>.openConnection = function <atom:0>;
  <proto:MultiplayerSessionController>.failPreparation = function <atom:0>;
  <proto:MultiplayerSessionController>.handleState = function <atom:0>;
  <proto:MultiplayerSessionController>.scheduleReconnect = function <atom:0>;
  <proto:MultiplayerSessionController>.clearRetry = function <atom:0>;
  <proto:MultiplayerSessionController>.retireSession = function <atom:0>;
  <proto:MultiplayerSessionController>.setRoster = function <atom:0>;
  <proto:MultiplayerSessionController>.publishParticipants = function <atom:0>;
  <proto:MultiplayerSessionController>.publish = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MultiplayerSessionController>;
  MultiplayerSessionController = function <atom:0>;
  // close_loc <class_fields_init>
  MultiplayerSessionController#1 = function <atom:0>;
  exports.MultiplayerSessionController = MultiplayerSessionController#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/MultiplayerSessionController
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
