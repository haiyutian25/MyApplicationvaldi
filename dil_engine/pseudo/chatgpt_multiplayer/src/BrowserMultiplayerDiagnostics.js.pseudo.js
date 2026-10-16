// fn i  args=1 vars=10 closure=4 cpool=4 bc=1004B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e
// locals: t, i, s, a, l, d, u, p, h
// closure: o, n, c, r
function {
  let s;
  let i;
  let t;
  t = "";
  i = 0;
  s = 0;
  if (!((s < e.length))) goto L_3bf;
  let h;
  let p;
  let u;
  let d;
  let l;
  let a;
  if (!((""" !== e[s]))) goto L_43;
  s = <s_new>;
  (s++);
  goto L_f;
  a = o(e, s);
  if ((!a.closed)) goto L_3bf;
  l = undefined;
  d = a.end;
  if (!((d < e.length))) goto L_df;
  if (!(new RegExp("\\s").test(e[d]))) goto L_df;
  d = <d_new>;
  (d++);
  goto L_9d;
  if (!((":" !== e[d]))) goto L_118;
  s = a.end;
  a.end;
  goto L_f;
  try { // catch -> L_19a
  l = JSON.parse(e.slice(s, a.end));
  JSON.parse(e.slice(s, a.end));
  <?>;
  goto L_1ce;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_1cd
  s = a.end;
  a.end;
  <?>;
  goto L_f;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if ((("string" != typeof l))) goto L_207;
  if (!(!n.test(l))) goto L_235;
  s = a.end;
  a.end;
  goto L_f;
  d = <d_new>;
  (d++);
  if (!((d < e.length))) goto L_27f;
  if (!(new RegExp("\\s").test(e[d]))) goto L_27f;
  d = <d_new>;
  (d++);
  goto L_23d;
  if (!((""" === e[d]))) goto L_294;
  goto L_295;
  // [栈深重同步 1 -> 0]
  u = undefined;
  if (!((u == null))) goto L_2a2;
  u;
  goto L_2c3;
  if (!((undefined.end == null))) goto L_2ce;
  undefined.end;
  p = c(e, d);
  if (!((p === d))) goto L_2e4;
  s = d;
  d;
  goto L_f;
  if (((undefined === u))) goto L_311;
  if (!(u.closed)) goto L_346;
  goto L_372;
  // [栈深重同步 1 -> 0]
  h = """.concat(r);
  t = (t + (e.slice(i, d) + h));
  (t + (e.slice(i, d) + h));
  i = p;
  p;
  s = p;
  p;
  goto L_f;
  return (t + e.slice(i));
}

// fn o  args=2 vars=3 closure=0 cpool=0 bc=98B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e, t
// locals: r
function {
  let r;
  r = (t + 1);
  if (!((r < e.length))) goto L_52;
  if (!(("\" === e[r]))) goto L_28;
  r = (r + 2);
  (r + 2);
  goto L_7;
  if (!((""" === e[r]))) goto L_48;
  return {end: (r + 1), closed: true};
  r = <r_new>;
  (r++);
  goto L_7;
  return {end: e.length, closed: false};
}

// fn c  args=2 vars=5 closure=1 cpool=2 bc=274B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e, t
// locals: r, n, t#1
// closure: o
function {
  let n;
  let r;
  r = t;
  n = 0;
  if (!((r < e.length))) goto L_cb;
  let t#1;
  t#1 = e[r];
  if (!((""" !== t#1))) goto L_9c;
  if ((("{" === t#1))) goto L_3f;
  if (!(("[" === t#1))) goto L_4b;
  n = <n_new>;
  (n++);
  goto L_91;
  if ((("}" === t#1))) goto L_61;
  if (!(("]" === t#1))) goto L_7f;
  if (((0 === n))) goto L_cb;
  n = <n_new>;
  (n--);
  if (!((0 === n))) goto L_91;
  return (r + 1);
  if (!(("," === t#1))) goto L_91;
  if (((0 === n))) goto L_cb;
  r = <r_new>;
  (r++);
  goto L_a;
  r = o(e, r).end;
  o(e, r).end;
  goto L_a;
  if (!((r > t))) goto L_10e;
  if (!(new RegExp("\\s").test(e[(r - 1)]))) goto L_10e;
  r = <r_new>;
  (r--);
  goto L_cb;
  return r;
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=2 bc=175B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e, t, i
// locals: o
// closure: n, r
function {
  let o;
  o = i;
  try { // catch -> L_47
  o = decodeURIComponent(i.replace(new RegExp("\\+"), " "));
  decodeURIComponent(i.replace(new RegExp("\\+"), " "));
  <?>;
  goto L_51;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_50
  <?>;
  goto L_51;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(n.test(o))) goto L_ad;
  return "".concat(t, i, "=", r);
  return e;
}

// fn s  args=1 vars=1 closure=2 cpool=3 bc=44B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e
// closure: n, r
function {
  return e.replace(new RegExp("([?&])([^=&#]+)=([^&#]*)"), function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e
function {
  return e.charCodeAt(0);   // tail call
}

// fn a  args=1 vars=4 closure=1 cpool=1 bc=230B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e
// locals: t, r, n
// closure: i
function {
  let r;
  let t;
  t = e.slice();
  r = "";
  let n;
  n = 0;
  if (!((n < t.length))) goto L_b6;
  // append([], 0, t.subarray(n, (n + 8192)))
  t.subarray(n, (n + 8192));
  r = (r + String.fromCharCode.apply(String, []));
  (r + String.fromCharCode.apply(String, []));
  n = (n + 8192);
  (n + 8192);
  goto L_33;
  return Uint8Array.from(i(r), function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=113B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e
// locals: n
// closure: i, t, r
function {
  let n;
  n = i(e);
  if (!(("string" == typeof t))) goto L_6d;
  if (!((t.length > 0))) goto L_6d;
  return n.split(t).join(r);
  return n;
}

// fn l  args=1 vars=2 closure=3 cpool=1 bc=119B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e
// locals: t
// closure: i, r, d
function {
  let t;
  if (((null === e))) goto L_40;
  if ((("object" != typeof e))) goto L_40;
  if (!(Array.isArray(e))) goto L_45;
  goto L_67;
  // [栈深重同步 1 -> 0]
  t = e.connection_grant;
  return d(e, function <atom:0>, {redacted: false});   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=0 bc=104B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e, o
// locals: c
// closure: n, i, r, t
function {
  let c;
  if (!(n.test(e))) goto L_3d;
  i.redacted = true;
  return r;
  if (!(("string" != typeof o))) goto L_49;
  return o;
  c = t(o);
  if (!((c !== o))) goto L_63;
  i.redacted = true;
  true;
  return c;
}

// fn d  args=3 vars=3 closure=2 cpool=1 bc=91B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e, t, i
// closure: n, r
function {
  if (!((undefined !== e))) goto L_5a;
  return JSON.parse(JSON.stringify(e, function <atom:0>));   // tail call
  return;
}

// fn <atom:0>  args=4 vars=5 closure=1 cpool=0 bc=91B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e, t, r, n
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.documentId = e;
  this.connectionId = t;
  this.nextSequence = r;
  this.onEvent = n;
  this.credentials = new Set();
  this.reportedFailure = false;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=136B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e
// locals: this
function {
  this = this;
  try { // catch -> L_59
  if (!((0 !== e.length))) goto L_56;
  this.credentials.add(e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_87
  this.reportFailure();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=510B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e, t
// locals: r, n, i, this
function {
  this = this;
  let r;
  r = undefined;
  try { // catch -> L_16f
  let i;
  let n;
  n = {redacted: false};
  i = this.copyPayload(t.payload, n);
  null;
  t;
  if (!((undefined === i))) goto L_123;
  goto L_12c;
  // [栈深重同步 2 -> 1]
  null;
  {payload: i};
  if (!(n.redacted)) goto L_161;
  goto L_162;
  // [栈深重同步 2 -> 1]
  null;
  {};
  r = {documentId: this.documentId, connectionId: this.connectionId, sequence: this.nextSequence(), timestamp: Date.now(), kind: e};
  {documentId: this.documentId, connectionId: this.connectionId, sequence: this.nextSequence(), timestamp: Date.now(), kind: e};
  <?>;
  goto L_19f;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_19e
  this.incomplete();
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  try { // catch -> L_1cf
  this.onEvent(r);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_1fd
  this.reportFailure();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e
function {
  return e.charCodeAt(0);   // tail call
}

// fn <atom:0>  args=2 vars=9 closure=1 cpool=1 bc=765B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e, r
// locals: n, t, t#1, i, e#1, o, this
// closure: t
function {
  this = this;
  try { // catch -> L_2cd
  let n;
  if (!((e === t.MultiplayerDebugDirection.INCOMING))) goto L_9b;
  goto L_e0;
  // [栈深重同步 1 -> 0]
  n = t.MultiplayerDebugEventKind.SOCKET_SEND;
  if (!(("string" == typeof r))) goto L_15c;
  let t;
  t = this.redact(r);
  this.record(n, {direction: e, rawFrame: t, redacted: (t !== r)});
  goto L_2cb;
  if (!((r instanceof ArrayBuffer))) goto L_2cb;
  let o;
  let i;
  let t#1;
  t#1 = new Uint8Array(r);
  i = "";
  let e#1;
  e#1 = 0;
  if (!((e#1 < t#1.length))) goto L_207;
  // append([], 0, t#1.subarray(e#1, (e#1 + 8192)))
  t#1.subarray(e#1, (e#1 + 8192));
  i = (i + String.fromCharCode.apply(String, []));
  (i + String.fromCharCode.apply(String, []));
  e#1 = (e#1 + 8192);
  (e#1 + 8192);
  goto L_184;
  o = this.redact(i);
  this.record(n, {direction: e, binaryFrame: Uint8Array.from(o, function <atom:0>), originalByteLength: t#1.byteLength, redacted: (o !== i)});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_2fc
  this.incomplete();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=234B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e, t
// locals: r, this
function {
  this = this;
  try { // catch -> L_bb
  let r;
  r = this.redact(t.reason);
  null;
  t;
  this.record(e, {close: {reason: r}, redacted: (r !== t.reason)});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_e9
  this.incomplete();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=4 vars=7 closure=1 cpool=0 bc=309B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e, t, r, n
// locals: i, o, this
// closure: s
function {
  this = this;
  try { // catch -> L_106
  let o;
  let i;
  i = s(t.url);
  if (!((undefined === r))) goto L_3a;
  goto L_3d;
  // [栈深重同步 1 -> 0]
  o = s(r);
  if (((i !== t.url))) goto L_fb;
  this.record(e, {payload: {url: i, requestedUrl: o, protocols: n, protocol: t.protocol, readyState: t.readyState}, redacted: (o !== r)});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_134
  this.incomplete();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=354B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// locals: this
// closure: t
function {
  this = this;
  try { // catch -> L_132
  this.onEvent({documentId: this.documentId, connectionId: this.connectionId, sequence: this.nextSequence(), timestamp: Date.now(), kind: t.MultiplayerDebugEventKind.CAPTURE_INCOMPLETE, incomplete: true, captureError: "A multiplayer diagnostic payload could not be captured."});
  <?>;
  goto L_13c;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_13b
  <?>;
  goto L_13c;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.reportFailure();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=6B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e, t
function {
  return (t.length - e.length);
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=1 bc=225B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e
// locals: t, n, this
// closure: i, r
function {
  this = this;
  let t;
  t = i(e);
  let n;
  for (const n of Array.from(this.credentials).sort(function <atom:0>)) {
    t = t.split(n).join(r);
    t.split(n).join(r);
  }
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e
// closure: this
function {
  return this.redact(e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=10B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: e, t
// locals: this
// closure: d
function {
  this = this;
  return d(e, function <atom:0>, t);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=155B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// locals: this
// closure: e
function {
  this = this;
  if (!(!this.reportedFailure)) goto L_9a;
  this.reportedFailure = true;
  try { // catch -> L_91
  if (!(e.isLoggingEnabled)) goto L_8e;
  console.warn("The multiplayer diagnostics observer failed.");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_99
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=19 bc=378B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// args: require, module, exports
// locals: e, t, r, n, i, o, c, s, a, l, d, BrowserMultiplayerDiagnostics, <class_fields_init>, BrowserMultiplayerDiagnostics#1
function {
  i = function i;
  o = function o;
  c = function c;
  s = function s;
  a = function a;
  l = function l;
  d = function d;
  let BrowserMultiplayerDiagnostics#1;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.redactMultiplayerDebugText = undefined;
  exports.redactMultiplayerDebugUrl = undefined;
  exports.redactMultiplayerDebugBytes = undefined;
  exports.redactMultiplayerDebugPayload = undefined;
  exports.BrowserMultiplayerDiagnostics = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("./MultiplayerDebugEvent");
  r = "[REDACTED]";
  n = new RegExp("^(?:connection[_-]?grant|[a-z0-9_-]*token|authorization|api[_-]?key|cookie|set[_-]?cookie|password|(?:client[_-]?)?secret|credentials?|.*(?:sentinel|biscuit|auth[_-]?context).*)$");
  exports.redactMultiplayerDebugText = i;
  exports.redactMultiplayerDebugUrl = s;
  exports.redactMultiplayerDebugBytes = a;
  exports.redactMultiplayerDebugPayload = l;
  let BrowserMultiplayerDiagnostics;
  let <class_fields_init>;
  class BrowserMultiplayerDiagnostics extends undefined { ... }
  <proto:BrowserMultiplayerDiagnostics>.retainCredential = function <atom:0>;
  <proto:BrowserMultiplayerDiagnostics>.record = function <atom:0>;
  <proto:BrowserMultiplayerDiagnostics>.frame = function <atom:0>;
  <proto:BrowserMultiplayerDiagnostics>.close = function <atom:0>;
  <proto:BrowserMultiplayerDiagnostics>.socket = function <atom:0>;
  <proto:BrowserMultiplayerDiagnostics>.incomplete = function <atom:0>;
  <proto:BrowserMultiplayerDiagnostics>.redact = function <atom:0>;
  <proto:BrowserMultiplayerDiagnostics>.copyPayload = function <atom:0>;
  <proto:BrowserMultiplayerDiagnostics>.reportFailure = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BrowserMultiplayerDiagnostics>;
  BrowserMultiplayerDiagnostics = function <atom:0>;
  // close_loc <class_fields_init>
  BrowserMultiplayerDiagnostics#1 = function <atom:0>;
  exports.BrowserMultiplayerDiagnostics = BrowserMultiplayerDiagnostics#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/BrowserMultiplayerDiagnostics
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
