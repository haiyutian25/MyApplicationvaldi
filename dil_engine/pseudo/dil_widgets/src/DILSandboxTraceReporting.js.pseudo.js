// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=14B file=dil_widgets/src/DILSandboxTraceReporting
// closure: DILSandboxTraceReporter, e, s
function {
  return new DILSandboxTraceReporter(e, s);
}

// fn h  args=2 vars=5 closure=6 cpool=1 bc=539B file=dil_widgets/src/DILSandboxTraceReporting
// args: o, a
// locals: e, s, s#1
// closure: DILSandboxTraceReporter, i, l, p, t, e
function {
  if (!((undefined !== o.sandboxTrace))) goto L_21a;
  if (!((undefined !== a))) goto L_21a;
  try { // catch -> L_1ba
  let s;
  let e;
  e = a.apiService;
  if (!(i.Device.isIOS())) goto L_ae;
  goto L_fe;
  // [栈深重同步 1 -> 0]
  if (!(i.Device.isAndroid())) goto L_fd;
  goto L_fe;
  // [栈深重同步 1 -> 0]
  s = undefined;
  if (((undefined === e))) goto L_138;
  if (((undefined === s))) goto L_138;
  if (!(!t.supportsAccountScopedServices(a))) goto L_13d;
  return undefined;
  t.accountContainerFor(a).resolve(DILSandboxTraceReporter, function <atom:0>).report(o);
  // close_loc s
  // close_loc e
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  s#1 = <?>;
  try { // catch -> L_219
  if (!(e.isLoggingEnabled)) goto L_216;
  console.warn("DIL sandbox trace reporting unavailable");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=103B file=dil_widgets/src/DILSandboxTraceReporting
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.apiService = e;
  this.destination = t;
  this.seenDiagnostics = new WeakSet();
  this.nextUploadAt = 0;
  this.attempts = 0;
  this.disposed = false;
  this.disabled = false;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=52B file=dil_widgets/src/DILSandboxTraceReporting
// closure: this, t
function {
  this.pendingUpload = undefined;
  this.upload(t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=550B file=dil_widgets/src/DILSandboxTraceReporting
// args: e
// locals: t, this
// closure: r, a
function {
  this = this;
  let t;
  t = e.sandboxTrace;
  if (((undefined === t))) goto L_c7;
  if ((this.disposed)) goto L_c7;
  if ((this.disabled)) goto L_c7;
  if (!(this.seenDiagnostics.has(e))) goto L_ca;
  return;
  this.seenDiagnostics.add(e);
  if (!((undefined === this.pendingUpload))) goto L_1db;
  if (!((undefined === this.activeRequest))) goto L_1db;
  if (!((this.attempts < r))) goto L_1db;
  if ((!(Date.now() >= this.nextUploadAt))) goto L_225;
  if (((Math.random() >= a))) goto L_225;
  this.pendingUpload = setTimeout(function <atom:0>, 0);
  setTimeout(function <atom:0>, 0);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=146B file=dil_widgets/src/DILSandboxTraceReporting
// locals: this
function {
  this = this;
  this.disposed = true;
  if (!((undefined !== this.pendingUpload))) goto L_6b;
  clearTimeout(this.pendingUpload);
  this.pendingUpload = undefined;
  undefined;
  this.cancelUpload();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=74B file=dil_widgets/src/DILSandboxTraceReporting
// args: e
// closure: this, a
function {
  return this.completeUpload(a, e.statusCode);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=dil_widgets/src/DILSandboxTraceReporting
// closure: this, a
function {
  return this.failUpload(a);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=180B file=dil_widgets/src/DILSandboxTraceReporting
// closure: this, n, e
function {
  this.nextUploadAt = (Date.now() + n);
  this.cancelUpload();
  if (!(e.isLoggingEnabled)) goto L_b3;
  console.warn("DIL sandbox trace upload timed out");
  return;
}

// fn <atom:0>  args=1 vars=6 closure=6 cpool=3 bc=867B file=dil_widgets/src/DILSandboxTraceReporting
// args: t
// locals: i, r, a, r#1, this
// closure: n, e, s, o, u, d
function {
  this = this;
  let a;
  let i;
  if (!(this.disposed)) goto L_2f;
  return;
  i = undefined;
  this.nextUploadAt = (Date.now() + s);
  try { // catch -> L_ee
  i = o.makeDILSandboxTraceEnvelope(t, this.destination, u(), Date.now());
  o.makeDILSandboxTraceEnvelope(t, this.destination, u(), Date.now());
  <?>;
  goto L_14f;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_14e
  if (!(e.isLoggingEnabled)) goto L_14a;
  console.warn("DIL sandbox trace could not be encoded");
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((undefined === i))) goto L_1ae;
  if (!(e.isLoggingEnabled)) goto L_1ac;
  console.warn("DIL sandbox trace was invalid or exceeded the upload limit");
  return;
  this.attempts = (this.attempts ++);
  a = this.attempts;
  try { // catch -> L_2a4
  this.activeRequest = this.apiService.send({method: "POST", path: "/backend-api/telemetry/sentry", bodyJson: i}, {onResponse: function <atom:0>, onFailure: function <atom:0>});
  this.uploadDeadline = setTimeout(function <atom:0>, d);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r#1 = <?>;
  try { // catch -> L_362
  this.finishUpload();
  this.nextUploadAt = (Date.now() + n);
  if (!(e.isLoggingEnabled)) goto L_35f;
  console.warn("DIL sandbox trace upload failed to start");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=299B file=dil_widgets/src/DILSandboxTraceReporting
// args: t, i
// locals: this
// closure: c, n, e
function {
  this = this;
  if (!(this.isCurrentAttempt(t))) goto L_12a;
  this.finishUpload();
  if (!((i >= 200))) goto L_63;
  if (((i < 300))) goto L_12a;
  this.disabled = c.has(i);
  this.nextUploadAt = (Date.now() + n);
  if (!(e.isLoggingEnabled)) goto L_12a;
  console.warn("DIL sandbox trace upload rejected", i);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=227B file=dil_widgets/src/DILSandboxTraceReporting
// args: t
// locals: this
// closure: n, e
function {
  this = this;
  if (!(this.isCurrentAttempt(t))) goto L_e2;
  this.finishUpload();
  this.nextUploadAt = (Date.now() + n);
  if (!(e.isLoggingEnabled)) goto L_e2;
  console.warn("DIL sandbox trace upload failed");
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=118B file=dil_widgets/src/DILSandboxTraceReporting
// args: e
// locals: this
function {
  this = this;
  if (!(!this.disposed)) goto L_75;
  if (!((undefined !== this.activeRequest))) goto L_75;
  return (this.attempts === e);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=108B file=dil_widgets/src/DILSandboxTraceReporting
// locals: this
function {
  this = this;
  if (!((undefined !== this.uploadDeadline))) goto L_5f;
  clearTimeout(this.uploadDeadline);
  this.uploadDeadline = undefined;
  undefined;
  this.activeRequest = undefined;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=229B file=dil_widgets/src/DILSandboxTraceReporting
// locals: t, i, this
// closure: e
function {
  this = this;
  let t;
  t = this.activeRequest;
  this.finishUpload();
  try { // catch -> L_85
  if (!((t == null))) goto L_5e;
  t;
  goto L_82;
  undefined.cancel();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_e4
  if (!(e.isLoggingEnabled)) goto L_e1;
  console.warn("DIL sandbox trace upload cancellation failed");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn u  args=0 vars=2 closure=0 cpool=0 bc=168B file=dil_widgets/src/DILSandboxTraceReporting
// locals: e, t
function {
  let e;
  e = "";
  let t;
  t = 0;
  if (!((t < 32))) goto L_a4;
  e = (e + Math.floor((16 * Math.random())).toString(16));
  (e + Math.floor((16 * Math.random())).toString(16));
  t = <t_new>;
  (t++);
  goto L_a;
  return e;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=12 bc=414B file=dil_widgets/src/DILSandboxTraceReporting
// args: require, module, exports
// locals: e, t, i, o, a, s, n, d, r, c, l, p, h, DILSandboxTraceReporter, <class_fields_init>, DILSandboxTraceReporter#1, u
function {
  h = function h;
  u = function u;
  let DILSandboxTraceReporter#1;
  let p;
  let l;
  let c;
  let r;
  let d;
  let n;
  let s;
  let a;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.reportDILSandboxTrace = undefined;
  exports.DILSandboxTraceReporter = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("oai_platform_services/src/AccountContainer");
  i = require("valdi_core/src/Device");
  o = require("./DILSandboxTraceEnvelope");
  a = 0.01;
  s = 60000;
  n = 300000;
  d = 10000;
  r = 10;
  c = new Set([400, 401, 403, 404, 413, 415]);
  l = {platform: "ios", dsn: "https://83becc408a83057816a416c4f0d3aeaf@o33249.ingest.us.sentry.io/4504301879492608"};
  p = {platform: "android", dsn: "https://6884768431e4ba548d58cbf3ad96e4ce@o33249.ingest.sentry.io/4506613529051136"};
  exports.reportDILSandboxTrace = h;
  let DILSandboxTraceReporter;
  let <class_fields_init>;
  class DILSandboxTraceReporter extends undefined { ... }
  <proto:DILSandboxTraceReporter>.report = function <atom:0>;
  <proto:DILSandboxTraceReporter>.dispose = function <atom:0>;
  <proto:DILSandboxTraceReporter>.upload = function <atom:0>;
  <proto:DILSandboxTraceReporter>.completeUpload = function <atom:0>;
  <proto:DILSandboxTraceReporter>.failUpload = function <atom:0>;
  <proto:DILSandboxTraceReporter>.isCurrentAttempt = function <atom:0>;
  <proto:DILSandboxTraceReporter>.finishUpload = function <atom:0>;
  <proto:DILSandboxTraceReporter>.cancelUpload = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxTraceReporter>;
  DILSandboxTraceReporter = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxTraceReporter#1 = function <atom:0>;
  exports.DILSandboxTraceReporter = DILSandboxTraceReporter#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILSandboxTraceReporting
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
