// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=53B file=oai_metrics_service/src/ValdiMetricsReporting
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.pendingMetrics = [];
  this.didWarnAboutOverflow = false;
  this.didWarnAboutExporterFailure = false;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=187B file=oai_metrics_service/src/ValdiMetricsReporting
// args: e
// locals: t, this
function {
  this = this;
  if (!(this.metricsService)) goto L_29;
  return false;
  this.metricsService = e;
  let t;
  for (const t of this.pendingMetrics) {
    this.emit(t);
  }
  this.pendingMetrics.length = 0;
  return true;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=73B file=oai_metrics_service/src/ValdiMetricsReporting
// args: e, t, i
// locals: this
// closure: c
function {
  this = this;
  this.enqueueOrEmit({kind: 0, metric: {name: e, value: t, tagsJson: c(i)}});
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=73B file=oai_metrics_service/src/ValdiMetricsReporting
// args: e, t, i
// locals: this
// closure: c
function {
  this = this;
  this.enqueueOrEmit({kind: 1, metric: {name: e, value: t, tagsJson: c(i)}});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=331B file=oai_metrics_service/src/ValdiMetricsReporting
// args: t
// locals: this
// closure: i, e
function {
  this = this;
  if (!(this.metricsService)) goto L_4f;
  goto L_14a;
  // [栈深重同步 1 -> 0]
  if (!((this.pendingMetrics.length < i))) goto L_c2;
  goto L_14a;
  // [栈深重同步 1 -> 0]
  if ((this.didWarnAboutOverflow)) goto L_14a;
  this.didWarnAboutOverflow = true;
  if (!(e.isLoggingEnabled)) goto L_14a;
  console.warn("Valdi metrics startup queue is full; dropping samples after 256 entries.");
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=421B file=oai_metrics_service/src/ValdiMetricsReporting
// args: t
// locals: this
// closure: e
function {
  this = this;
  try { // catch -> L_113
  if (!((0 === t.kind))) goto L_a0;
  if (!((this.metricsService == null))) goto L_58;
  this.metricsService;
  goto L_110;
  goto L_110;
  // [栈深重同步 1 -> 0]
  if (!((this.metricsService == null))) goto L_ca;
  this.metricsService;
  goto L_110;
  undefined.histogram(t.metric);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_1a4
  if ((this.didWarnAboutExporterFailure)) goto L_1a1;
  this.didWarnAboutExporterFailure = true;
  if (!(e.isLoggingEnabled)) goto L_1a1;
  console.warn("Valdi metrics exporter rejected a sample.");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn s  args=1 vars=1 closure=2 cpool=0 bc=83B file=oai_metrics_service/src/ValdiMetricsReporting
// args: e
// closure: r, t
function {
  if (!(r.install(e))) goto L_52;
  t.installValdiMetricsService(e);
  return;
}

// fn n  args=3 vars=3 closure=1 cpool=0 bc=43B file=oai_metrics_service/src/ValdiMetricsReporting
// args: e, t, i
// closure: r
function {
  r.count(e, t, i);
  return;
}

// fn o  args=3 vars=3 closure=1 cpool=0 bc=43B file=oai_metrics_service/src/ValdiMetricsReporting
// args: e, t, i
// closure: r
function {
  r.histogram(e, t, i);
  return;
}

// fn c  args=1 vars=4 closure=0 cpool=0 bc=192B file=oai_metrics_service/src/ValdiMetricsReporting
// args: e
// locals: t, i, r
function {
  let t;
  if (!(!e)) goto L_8;
  return;
  t = {};
  let i;
  for (const i of Object.keys(e)) {
    let r;
    r = e[i];
    if (!((undefined !== r))) goto L_59;
    t[i] = r;
    r;
  }
  if (!((0 === Object.keys(t).length))) goto L_93;
  return undefined;
  return JSON.stringify(t);
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=10 bc=311B file=oai_metrics_service/src/ValdiMetricsReporting
// args: require, module, exports
// locals: e, t, i, ValdiMetricsReporter, <class_fields_init>, ValdiMetricsReporter#1, r, s, n, o, c
function {
  s = function s;
  n = function n;
  o = function o;
  c = function c;
  let r;
  let ValdiMetricsReporter#1;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ValdiMetricsReporter = undefined;
  exports.installValdiMetricsService = undefined;
  exports.countMetric = undefined;
  exports.recordHistogram = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("./NativeValdiMetrics");
  i = 256;
  let ValdiMetricsReporter;
  let <class_fields_init>;
  class ValdiMetricsReporter extends undefined { ... }
  <proto:ValdiMetricsReporter>.install = function <atom:0>;
  <proto:ValdiMetricsReporter>.count = function <atom:0>;
  <proto:ValdiMetricsReporter>.histogram = function <atom:0>;
  <proto:ValdiMetricsReporter>.enqueueOrEmit = function <atom:0>;
  <proto:ValdiMetricsReporter>.emit = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ValdiMetricsReporter>;
  ValdiMetricsReporter = function <atom:0>;
  // close_loc <class_fields_init>
  ValdiMetricsReporter#1 = function <atom:0>;
  exports.ValdiMetricsReporter = ValdiMetricsReporter#1;
  r = new ValdiMetricsReporter#1();
  exports.installValdiMetricsService = s;
  exports.countMetric = n;
  exports.recordHistogram = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_metrics_service/src/ValdiMetricsReporting
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
