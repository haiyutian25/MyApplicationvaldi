// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=155B file=dil_widgets/src/DILLegacyAndroidRootHeightMetrics
// args: i
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.tolerance = 0;
  this.active = true;
  this.didBegin = false;
  this.canReport = false;
  this.didReportNearLimit = false;
  this.didWarn = false;
  if (!(i)) goto L_87;
  goto L_8c;
  // [栈深重同步 3 -> 2]
  this.tags = {observation_version: "1", renderer: "valdi", runtime_cohort: "below_227", dil_version: "2.0", response_kind: "other"};
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=292B file=dil_widgets/src/DILLegacyAndroidRootHeightMetrics
// args: i, t
// locals: this
function {
  this = this;
  if (!(this.active)) goto L_123;
  if (((undefined === i))) goto L_93;
  if ((!Number.isFinite(i))) goto L_93;
  if ((!Number.isFinite(t))) goto L_93;
  if (!((t <= 0))) goto L_a4;
  this.maxHeight = undefined;
  goto L_123;
  // [栈深重同步 1 -> 0]
  this.maxHeight = i;
  this.tolerance = (2 / t);
  if ((this.didBegin)) goto L_123;
  this.didBegin = true;
  this.canReport = this.count("guarded_attempt");
  this.count("guarded_attempt");
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=379B file=dil_widgets/src/DILLegacyAndroidRootHeightMetrics
// args: i
// locals: t, this
function {
  this = this;
  let t;
  if ((!this.active)) goto L_75;
  if ((!this.canReport)) goto L_75;
  if (!(this.didReportNearLimit)) goto L_78;
  return;
  t = this.maxHeight;
  if (!((undefined !== t))) goto L_17a;
  if (!((i.height >= (t - this.tolerance)))) goto L_17a;
  if (!((i.height <= (t + this.tolerance)))) goto L_17a;
  this.didReportNearLimit = true;
  this.count("near_limit");
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=15B file=dil_widgets/src/DILLegacyAndroidRootHeightMetrics
// locals: this
function {
  this = this;
  this.active = false;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=278B file=dil_widgets/src/DILLegacyAndroidRootHeightMetrics
// args: r
// locals: this
// closure: t, e, i
function {
  this = this;
  try { // catch -> L_82
  t.countMetric("".concat(e, ".", r), 1, this.tags);
  return true;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_115
  if ((this.didWarn)) goto L_110;
  this.didWarn = true;
  if (!(i.isLoggingEnabled)) goto L_110;
  console.warn("Could not report DIL root height metrics.");
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=5 bc=214B file=dil_widgets/src/DILLegacyAndroidRootHeightMetrics
// args: require, module, exports
// locals: i, t, e, r, DILLegacyAndroidRootHeightMetrics, <class_fields_init>, DILLegacyAndroidRootHeightMetrics#1
function {
  let DILLegacyAndroidRootHeightMetrics#1;
  let r;
  let e;
  let t;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILLegacyAndroidRootHeightMetrics = undefined;
  i = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("oai_metrics_service/src/ValdiMetricsReporting");
  e = "dil.widget.legacy_android_root_height";
  r = 2;
  let DILLegacyAndroidRootHeightMetrics;
  let <class_fields_init>;
  class DILLegacyAndroidRootHeightMetrics extends undefined { ... }
  <proto:DILLegacyAndroidRootHeightMetrics>.observeGuard = function <atom:0>;
  <proto:DILLegacyAndroidRootHeightMetrics>.observeLayout = function <atom:0>;
  <proto:DILLegacyAndroidRootHeightMetrics>.stop = function <atom:0>;
  <proto:DILLegacyAndroidRootHeightMetrics>.count = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILLegacyAndroidRootHeightMetrics>;
  DILLegacyAndroidRootHeightMetrics = function <atom:0>;
  // close_loc <class_fields_init>
  DILLegacyAndroidRootHeightMetrics#1 = function <atom:0>;
  exports.DILLegacyAndroidRootHeightMetrics = DILLegacyAndroidRootHeightMetrics#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILLegacyAndroidRootHeightMetrics
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
