// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=148B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e, i, a
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.request = e;
  this.onChange = i;
  this.flags = a;
  this.participants = [];
  this.sharedPeople = [];
  this.data = {collaborators: [], isLoading: false};
  this.requested = false;
  this.loaded = false;
  this.closed = false;
  this.generation = 0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=206B file=chatgpt_multiplayer/src/MultiplayerFacepile
// locals: this
function {
  this = this;
  if ((this.closed)) goto L_aa;
  if ((this.requested)) goto L_aa;
  this.requested = true;
  if (!((undefined !== this.documentId))) goto L_aa;
  this.refresh();
  return this.data;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=293B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e
// locals: this
function {
  this = this;
  if ((this.closed)) goto L_124;
  if (((this.documentId === e))) goto L_124;
  this.generation = (this.generation ++);
  this.documentId = e;
  this.sharedPeople = [];
  this.viewerId = undefined;
  this.loaded = false;
  this.publish(false);
  if (!(this.requested)) goto L_124;
  this.refresh();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=164B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e
// locals: this
function {
  this = this;
  if ((this.closed)) goto L_a3;
  if (!((e == null))) goto L_32;
  e;
  this.participants = [];
  this.publish(this.data.isLoading);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=156B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e
// locals: this
function {
  this = this;
  if ((this.closed)) goto L_9b;
  this.presence = e;
  this.publish(this.data.isLoading);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=187B file=chatgpt_multiplayer/src/MultiplayerFacepile
// locals: this
function {
  this = this;
  if ((this.closed)) goto L_ba;
  this.closed = true;
  this.generation = (this.generation ++);
  this.participants = [];
  this.presence = undefined;
  this.sharedPeople = [];
  this.viewerId = undefined;
  this.publish(false);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=191B file=chatgpt_multiplayer/src/MultiplayerFacepile
// locals: this
function {
  this = this;
  if ((!this.requested)) goto L_be;
  if ((this.loaded)) goto L_be;
  if ((this.data.isLoading)) goto L_be;
  this.refresh();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e
function {
  return e.isSelf;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=148B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e
function {
  if (!(("user" === e.principal.principalType))) goto L_93;
  return (e.principal.principalId.length > 0);
}

// fn <atom:0>  args=0 vars=10 closure=3 cpool=2 bc=2761B file=chatgpt_multiplayer/src/MultiplayerFacepile
// locals: i, s, r, e, t, o, l, c, t#1, this
// closure: a, n, e
function {
  this = this;
  let r;
  let s;
  let i;
  if (!(this.closed)) goto L_33;
  return undefined; // async
  this.requested = true;
  i = this.documentId;
  if (((undefined === i))) goto L_99;
  if (!(i.startsWith("draft_"))) goto L_9d;
  return undefined; // async
  this.generation = (this.generation ++);
  s = (this.generation ++);
  this.publish(!this.loaded);
  if ((this.closed)) goto L_165;
  if (!((s !== this.generation))) goto L_169;
  return undefined; // async
  r = ("/backend-api/files/library/files/" + encodeURIComponent(i));
  try { // catch -> L_8fb
  let c;
  let l;
  let o;
  let t;
  let e;
  if (((undefined === undefined))) goto L_1a0;
  const _it1 = undefined;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  t = <value(_it1)>;
  goto L_22f;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_192;
  // [栈深重同步 1 -> 0]
  if ((this.closed)) goto L_27d;
  if (!((s !== this.generation))) goto L_282;
  return undefined; // async
  o = a.decode(e);
  l = n.decode(t);
  c = this.participants.find(function <atom:0>);
  if ((("library_file" !== o.resource.resourceType))) goto L_7c5;
  if (((o.resource.resourceId !== i))) goto L_7c5;
  if ((("library_file" !== l.resource.resourceType))) goto L_7c5;
  if (((l.resource.resourceId !== i))) goto L_7c5;
  if ((("user" !== o.owner.principal.principalType))) goto L_7c5;
  if ((!o.owner.principal.principalId)) goto L_7c5;
  if ((("user" !== o.viewer.principal.principalType))) goto L_7c5;
  if ((!o.viewer.principal.principalId)) goto L_7c5;
  if ((("user" !== l.owner.principalType))) goto L_7c5;
  if (((l.owner.principalId !== o.owner.principal.principalId))) goto L_7c5;
  if (!((undefined !== c))) goto L_7d6;
  if (!((o.viewer.principal.principalId !== c.userId))) goto L_7d6;
  throw new Error("Library facepile response does not match the document and viewer");
  // append([o.viewer, o.owner], 2, l.collaborators)
  l.collaborators;
  this.sharedPeople = [o.viewer, o.owner].filter(function <atom:0>);
  this.viewerId = o.viewer.principal.principalId;
  this.loaded = true;
  <?>;
  goto L_a4c;
  // [栈深重同步 0 -> 1]
  t#1 = <?>;
  try { // catch -> L_a4b
  if ((this.closed)) goto L_950;
  if (!((s !== this.generation))) goto L_955;
  return undefined; // async
  if (((null === t#1))) goto L_9ee;
  if ((("object" != typeof t#1))) goto L_9ee;
  if ((!("statusCode" in t#1))) goto L_9ee;
  if (!((403 !== t#1.statusCode))) goto L_9cf;
  if (((404 !== t#1.statusCode))) goto L_9ee;
  this.sharedPeople = [];
  this.viewerId = undefined;
  undefined;
  if (!(e.isLoggingEnabled)) goto L_a47;
  console.warn("Could not refresh the Library facepile", t#1);
  <?>;
  goto L_a4c;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if ((this.closed)) goto L_ac6;
  if (((s !== this.generation))) goto L_ac6;
  this.publish(false);
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=72B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e
function {
  return [e.principal.principalId, e];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e
function {
  return [e.userId, e];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e
function {
  return e.isSelf;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=293B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e
// closure: this, s
function {
  if (!((this.presence == null))) goto L_6d;
  this.presence;
  goto L_af;
  if (!((e.clientId.value !== undefined.localClientId.value))) goto L_124;
  if (!((e.state.user == null))) goto L_ff;
  e.state.user;
  goto L_120;
  return (undefined.userId === s);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=76B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e
// closure: t
function {
  if (!(e.isSelf)) goto L_28;
  return t;
  return !e.isIdle;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e
function {
  return e.userId;
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=0 bc=547B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e
// locals: n, s, r
// closure: a, i, o, this, c
function {
  let r;
  let s;
  let n;
  n = a.get(e);
  s = i.get(e);
  r = o.has(e);
  if (!((n == null))) goto L_96;
  n;
  goto L_b7;
  if ((undefined.displayName)) goto L_11c;
  if (!((s == null))) goto L_c6;
  s;
  goto L_e7;
  if ((undefined.displayName)) goto L_11c;
  if (!((s == null))) goto L_f6;
  s;
  goto L_117;
  if ((undefined.email)) goto L_11c;
  if (!((n == null))) goto L_12c;
  n;
  goto L_14d;
  if (!((undefined.profilePictureUrl == null))) goto L_184;
  undefined.profilePictureUrl;
  if (!((s == null))) goto L_15d;
  s;
  goto L_17e;
  if (!((undefined.avatarUrl == null))) goto L_184;
  undefined.avatarUrl;
  if (!((n == null))) goto L_196;
  n;
  goto L_1b7;
  if (((true === undefined.isSelf))) goto L_1e0;
  if (!(r)) goto L_21c;
  goto L_21d;
  // [栈深重同步 2 -> 1]
  return {userId: e, displayName: "", profilePictureUrl: undefined, isSelf: (e === this.viewerId), isActive: r, color: undefined};
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=544B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e, i
// locals: a
// closure: this
function {
  let a;
  a = this.data.collaborators[i];
  if (!((undefined !== a))) goto L_21f;
  if (!((e.userId === a.userId))) goto L_21f;
  if (!((e.displayName === a.displayName))) goto L_21f;
  if (!((e.profilePictureUrl === a.profilePictureUrl))) goto L_21f;
  if (!((e.isSelf === a.isSelf))) goto L_21f;
  if (!((e.isActive === a.isActive))) goto L_21f;
  return (e.color === a.color);
}

// fn <atom:0>  args=1 vars=16 closure=0 cpool=8 bc=2106B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: e
// locals: i, a, n, s, r, t, o, l, p, c, p#1, e#1, i#1, d, this
function {
  this = this;
  let d;
  let c;
  let l;
  let o;
  let t;
  let r;
  let s;
  let n;
  let a;
  let i;
  i = new Map(this.sharedPeople.map(function <atom:0>));
  a = new Map(this.participants.map(function <atom:0>));
  n = this.participants.find(function <atom:0>);
  if (!((n == null))) goto L_11c;
  n;
  goto L_13d;
  if (!((undefined.userId == null))) goto L_165;
  undefined.userId;
  s = this.viewerId;
  if (!((undefined !== s))) goto L_1e4;
  if (!((this.presence == null))) goto L_19c;
  this.presence;
  goto L_1e3;
  r = (true === undefined.clients.some(function <atom:0>));
  if ((this.flags.alwaysShowSelf)) goto L_231;
  t = r;
  o = new Set(this.participants.filter(function <atom:0>).map(function <atom:0>));
  if (!((undefined !== s))) goto L_2e7;
  if (!(r)) goto L_2e7;
  o.add(s);
  l = new Set(o);
  if (!(this.flags.showSharedWithRoster)) goto L_39c;
  let p;
  for (const p of i.keys()) {
    l.add(p);
  }
  if (!((undefined !== s))) goto L_400;
  if (!(t)) goto L_3d6;
  goto L_400;
  // [栈深重同步 1 -> 0]
  l.delete(s);
  c = new Map();
  let p#1;
  if (!((this.presence == null))) goto L_43a;
  this.presence;
  goto L_45b;
  if (!((undefined.clients == null))) goto L_463;
  undefined.clients;
  for (const p#1 of []) {
    let i#1;
    let e#1;
    if (!((this.presence == null))) goto L_4df;
    this.presence;
    goto L_521;
    e#1 = (p#1.clientId.value === undefined.localClientId.value);
    if (!(e#1)) goto L_573;
    if ((!this.flags.alwaysShowSelf)) continue;
    if (!(e#1)) goto L_57d;
    goto L_5eb;
    // [栈深重同步 4 -> 3]
    if (!((p#1.state.user == null))) goto L_5ca;
    p#1.state.user;
    goto L_5eb;
    i#1 = undefined.userId;
    if (!((undefined !== i#1))) goto L_6d7;
    if (!((undefined !== p#1.state.user))) goto L_6d7;
    c.set(i#1, p#1.state.user.color);
  }
  d = Array.from(l, function <atom:0>);
  if (!((this.data.isLoading === e))) goto L_7d2;
  if (!((d.length === this.data.collaborators.length))) goto L_7d2;
  if ((d.every(function <atom:0>))) goto L_839;
  this.data = {collaborators: d, isLoading: e};
  this.onChange(this.data);
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=9 bc=4307B file=chatgpt_multiplayer/src/MultiplayerFacepile
// args: require, module, exports
// locals: e, i, a, n, s, MultiplayerFacepile, <class_fields_init>, MultiplayerFacepile#1
function {
  let MultiplayerFacepile#1;
  let s;
  let n;
  let a;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MULTIPLAYER_FACEPILE_FLAGS = undefined;
  exports.MultiplayerFacepile = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("valdi_core/src/JsonSerializationRuntime");
  a = i.createJsonSerializer({kind: i.JsonSchemaKind.Object, name: "LibrarySharingState", fields: [{name: "resource", jsonName: "resource", schema: {kind: i.JsonSchemaKind.Object, name: "LibraryResource", fields: [{name: "resourceType", jsonName: "resource_type", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "resourceId", jsonName: "resource_id", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}]}, optional: false, resilient: false}, {name: "owner", jsonName: "owner", schema: {kind: i.JsonSchemaKind.Object, name: "LibraryPerson", fields: [{name: "principal", jsonName: "principal", schema: {kind: i.JsonSchemaKind.Object, name: "LibraryPrincipal", fields: [{name: "principalType", jsonName: "principal_type", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "principalId", jsonName: "principal_id", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}]}, optional: false, resilient: false}, {name: "displayName", jsonName: "display_name", schema: {kind: i.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "email", jsonName: "email", schema: {kind: i.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "avatarUrl", jsonName: "avatar_url", schema: {kind: i.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}]}, optional: false, resilient: false}, {name: "viewer", jsonName: "viewer", schema: {kind: i.JsonSchemaKind.Object, name: "LibraryPerson", fields: [{name: "principal", jsonName: "principal", schema: {kind: i.JsonSchemaKind.Object, name: "LibraryPrincipal", fields: [{name: "principalType", jsonName: "principal_type", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "principalId", jsonName: "principal_id", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}]}, optional: false, resilient: false}, {name: "displayName", jsonName: "display_name", schema: {kind: i.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "email", jsonName: "email", schema: {kind: i.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "avatarUrl", jsonName: "avatar_url", schema: {kind: i.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}]}, optional: false, resilient: false}]});
  n = i.createJsonSerializer({kind: i.JsonSchemaKind.Object, name: "LibraryCollaborators", fields: [{name: "resource", jsonName: "resource", schema: {kind: i.JsonSchemaKind.Object, name: "LibraryResource", fields: [{name: "resourceType", jsonName: "resource_type", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "resourceId", jsonName: "resource_id", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}]}, optional: false, resilient: false}, {name: "owner", jsonName: "owner", schema: {kind: i.JsonSchemaKind.Object, name: "LibraryPrincipal", fields: [{name: "principalType", jsonName: "principal_type", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "principalId", jsonName: "principal_id", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}]}, optional: false, resilient: false}, {name: "collaborators", jsonName: "collaborators", schema: {kind: i.JsonSchemaKind.Array, element: {kind: i.JsonSchemaKind.Object, name: "LibraryPerson", fields: [{name: "principal", jsonName: "principal", schema: {kind: i.JsonSchemaKind.Object, name: "LibraryPrincipal", fields: [{name: "principalType", jsonName: "principal_type", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "principalId", jsonName: "principal_id", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}]}, optional: false, resilient: false}, {name: "displayName", jsonName: "display_name", schema: {kind: i.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "email", jsonName: "email", schema: {kind: i.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "avatarUrl", jsonName: "avatar_url", schema: {kind: i.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}]}}, optional: false, resilient: false}]});
  s = require("valdi_core/src/JsonSerialization");
  exports.MULTIPLAYER_FACEPILE_FLAGS = {showSharedWithRoster: true, alwaysShowSelf: true};
  let MultiplayerFacepile;
  let <class_fields_init>;
  class MultiplayerFacepile extends undefined { ... }
  <proto:MultiplayerFacepile>.getData = function <atom:0>;
  <proto:MultiplayerFacepile>.setDocumentId = function <atom:0>;
  <proto:MultiplayerFacepile>.setParticipants = function <atom:0>;
  <proto:MultiplayerFacepile>.setPresence = function <atom:0>;
  <proto:MultiplayerFacepile>.close = function <atom:0>;
  <proto:MultiplayerFacepile>.retryInitialLoad = function <atom:0>;
  <proto:MultiplayerFacepile>.refresh = function <atom:0>;
  <proto:MultiplayerFacepile>.publish = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MultiplayerFacepile>;
  MultiplayerFacepile = function <atom:0>;
  // close_loc <class_fields_init>
  MultiplayerFacepile#1 = function <atom:0>;
  exports.MultiplayerFacepile = MultiplayerFacepile#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/MultiplayerFacepile
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
