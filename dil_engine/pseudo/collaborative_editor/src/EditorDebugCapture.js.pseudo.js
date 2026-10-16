// fn r  args=1 vars=3 closure=1 cpool=0 bc=111B file=collaborative_editor/src/EditorDebugCapture
// args: t
// locals: s, r
// closure: e
function {
  let s;
  s = undefined;
  let r;
  for (const r of e) {
    if (!((r.getState().documentId === t))) goto L_64;
    s = r;
    r;
  }
  return s;
}

// fn i  args=0 vars=0 closure=1 cpool=0 bc=44B file=collaborative_editor/src/EditorDebugCapture
// closure: e
function {
  return Array.from(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=collaborative_editor/src/EditorDebugCapture
// closure: this
function {
  return this.state;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=collaborative_editor/src/EditorDebugCapture
// closure: this, t
function {
  return this.listeners.delete(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=75B file=collaborative_editor/src/EditorDebugCapture
// args: t
// closure: this
function {
  this.listeners.add(t);
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=2 bc=449B file=collaborative_editor/src/EditorDebugCapture
// args: t
// locals: this
// closure: <class_fields_init>, s, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  s = (s ++);
  this.sessionId = "editor-".concat(Date.now().toString(36), "-", (s ++));
  this.startedAt = Date.now();
  this.lines = [];
  this.listeners = new Set();
  this.owners = 0;
  this.getState = function <atom:0>;
  this.subscribe = function <atom:0>;
  this.state = Object.freeze({documentId: t, events: Object.freeze([]), eventCount: 0, byteCount: 0, closed: false, error: undefined});
  e.add(this);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=213B file=collaborative_editor/src/EditorDebugCapture
// args: t
// locals: this
function {
  this = this;
  if (!((this.state.documentId !== t))) goto L_d4;
  null;
  this.state;
  this.state = Object.freeze({documentId: t});
  this.notify();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=434B file=collaborative_editor/src/EditorDebugCapture
// args: t, e
// closure: n
function {
  if (!((e instanceof ArrayBuffer))) goto L_16;
  return n(new Uint8Array(e));
  if (!(ArrayBuffer.isView(e))) goto L_b4;
  return n(new Uint8Array(e.buffer, e.byteOffset, e.byteLength));
  if (!((e instanceof Error))) goto L_134;
  return {name: e.name, message: e.message, stack: e.stack};
  if (!(("bigint" == typeof e))) goto L_16a;
  return {bigint: e.toString()};
  if ((("number" != typeof e))) goto L_1a0;
  if (!(Number.isFinite(e))) goto L_1a4;
  return e;
  return {number: String(e)};
}

// fn <atom:0>  args=3 vars=8 closure=3 cpool=1 bc=878B file=collaborative_editor/src/EditorDebugCapture
// args: t, e, s
// locals: r, i, c, h, this
// closure: n, o, a
function {
  this = this;
  try { // catch -> L_339
  let h;
  let c;
  let i;
  let r;
  if (!(("function" == typeof s))) goto L_22;
  goto L_23;
  // [栈深重同步 1 -> 0]
  r = s;
  i = Date.now();
  c = JSON.stringify({id: (this.lines.length + 1), timestamp: new Date(i).toISOString(), elapsedMs: (i - this.startedAt), category: t, name: e, data: r}, function <atom:0>);
  h = o(JSON.parse(c));
  this.lines.push(c);
  null;
  this.state;
  // append([], 0, this.state.events)
  [][this.state.events] = h;
  (h ++);
  this.state = Object.freeze({events: Object.freeze([].slice(-300)), eventCount: this.lines.length, byteCount: ((this.state.byteCount + a(c)) + 1)});
  this.notify();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_36d
  this.markIncomplete("Some debug data could not be recorded.");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=213B file=collaborative_editor/src/EditorDebugCapture
// args: t
// locals: this
function {
  this = this;
  if (!((this.state.error !== t))) goto L_d4;
  null;
  this.state;
  this.state = Object.freeze({error: t});
  this.notify();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=103B file=collaborative_editor/src/EditorDebugCapture
// closure: t, this
function {
  if ((t)) goto L_66;
  t = true;
  true;
  this.owners = (this.owners --);
  if (!((0 === (this.owners --)))) goto L_66;
  this.close();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=266B file=collaborative_editor/src/EditorDebugCapture
// locals: t, this
function {
  this = this;
  let t;
  this.owners = (this.owners + 1);
  if (!(this.state.closed)) goto L_103;
  null;
  this.state;
  this.state = Object.freeze({closed: false});
  this.notify();
  t = false;
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=212B file=collaborative_editor/src/EditorDebugCapture
// locals: this
function {
  this = this;
  if ((this.state.closed)) goto L_d3;
  null;
  this.state;
  this.state = Object.freeze({closed: true});
  this.notify();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=46B file=collaborative_editor/src/EditorDebugCapture
// args: t
// closure: o
function {
  return o(JSON.parse(t));   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=287B file=collaborative_editor/src/EditorDebugCapture
// args: e
// locals: s, this
// closure: o, t
function {
  this = this;
  let s;
  s = Math.max(0, Math.min(this.lines.length, (e - 1)));
  return this.lines.slice(Math.max(0, (s - t)), s).map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=701B file=collaborative_editor/src/EditorDebugCapture
// locals: this
function {
  this = this;
  // append([JSON.stringify({format: "multiplayer-note-debug", version: 1, sessionId: this.sessionId, documentId: this.state.documentId, startedAt: new Date(this.startedAt).toISOString(), eventCount: this.state.eventCount, byteCount: this.state.byteCount, closed: this.state.closed, incomplete: (undefined !== this.state.error), error: this.state.error})], 1, this.lines)
  [JSON.stringify({format: "multiplayer-note-debug", version: 1, sessionId: this.sessionId, documentId: this.state.documentId, startedAt: new Date(this.startedAt).toISOString(), eventCount: this.state.eventCount, byteCount: this.state.byteCount, closed: this.state.closed, incomplete: (undefined !== this.state.error), error: this.state.error})][this.lines] = "";
  ("" ++);
  return [JSON.stringify({format: "multiplayer-note-debug", version: 1, sessionId: this.sessionId, documentId: this.state.documentId, startedAt: new Date(this.startedAt).toISOString(), eventCount: this.state.eventCount, byteCount: this.state.byteCount, closed: this.state.closed, incomplete: (undefined !== this.state.error), error: this.state.error})].join("
");   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=73B file=collaborative_editor/src/EditorDebugCapture
// locals: t, this
function {
  this = this;
  let t;
  for (const t of this.listeners) {
    try { // catch -> L_38
    t();
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    <?>;
    try { // catch -> L_41
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  return;
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=59B file=collaborative_editor/src/EditorDebugCapture
// args: t
function {
  return {type: "Uint8Array", data: Array.from(t)};
}

// fn o  args=1 vars=2 closure=1 cpool=0 bc=121B file=collaborative_editor/src/EditorDebugCapture
// args: t
// locals: e
// closure: o
function {
  if (!((null !== t))) goto L_77;
  if (!(("object" == typeof t))) goto L_77;
  let e;
  for (const e of Object.values(t)) {
    o(e);
  }
  Object.freeze(t);
  return t;
}

// fn a  args=1 vars=4 closure=0 cpool=0 bc=111B file=collaborative_editor/src/EditorDebugCapture
// args: t
// locals: e, s, t#1
function {
  let e;
  e = 0;
  let s;
  for (const s of t) {
    let t#1;
    t#1 = s.charCodeAt(0);
    if (!((s.length > 1))) goto L_47;
    goto L_5f;
    // [栈深重同步 5 -> 4]
    if (!((t#1 <= 127))) goto L_52;
    goto L_5f;
    // [栈深重同步 5 -> 4]
    if (!((t#1 <= 2047))) goto L_5e;
    goto L_5f;
    // [栈深重同步 5 -> 4]
    e = (e + 3);
    (e + 3);
  }
  return e;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=14 bc=263B file=collaborative_editor/src/EditorDebugCapture
// args: require, module, exports
// locals: t, e, s, r, i, EditorDebugCapture, <class_fields_init>, EditorDebugCapture#1, n, o, a
function {
  r = function r;
  i = function i;
  n = function n;
  o = function o;
  a = function a;
  let EditorDebugCapture#1;
  let s;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.findEditorDebugCapture = undefined;
  exports.getEditorDebugCaptures = undefined;
  exports.EditorDebugCapture = undefined;
  t = 300;
  e = new Set();
  s = 0;
  exports.findEditorDebugCapture = r;
  exports.getEditorDebugCaptures = i;
  let EditorDebugCapture;
  let <class_fields_init>;
  class EditorDebugCapture extends undefined { ... }
  <proto:EditorDebugCapture>.setDocumentId = function <atom:0>;
  <proto:EditorDebugCapture>.record = function <atom:0>;
  <proto:EditorDebugCapture>.markIncomplete = function <atom:0>;
  <proto:EditorDebugCapture>.retain = function <atom:0>;
  <proto:EditorDebugCapture>.close = function <atom:0>;
  <proto:EditorDebugCapture>.readEvents = function <atom:0>;
  <proto:EditorDebugCapture>.exportJSONL = function <atom:0>;
  <proto:EditorDebugCapture>.notify = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:EditorDebugCapture>;
  EditorDebugCapture = function <atom:0>;
  // close_loc <class_fields_init>
  EditorDebugCapture#1 = function <atom:0>;
  exports.EditorDebugCapture = EditorDebugCapture#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/EditorDebugCapture
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
