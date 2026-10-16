// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=dil_widgets/src/DILImageLoadMetrics
// args: e
function {
  e.Missing = "missing";
  e.Pending = "pending";
  e.Ready = "ready";
  e.Blocked = "blocked";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=121B file=dil_widgets/src/DILImageLoadMetrics
// args: e
function {
  e.Loaded = "loaded";
  e.LoadError = "load_error";
  e.Blocked = "blocked";
  e.MissingSource = "missing_source";
  e.ApprovalPending = "approval_pending";
  e.Timeout = "timeout";
  e.NotVisible = "not_visible";
  e.Canceled = "canceled";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=101B file=dil_widgets/src/DILImageLoadMetrics
// args: e
// closure: this
function {
  this.pause();
  if (!(e)) goto L_31;
  goto L_36;
  // [栈深重同步 2 -> 1]
  this.visibility = "offscreen";
  this.resume();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=430B file=dil_widgets/src/DILImageLoadMetrics
// closure: this, t
function {
  if ((this.finished)) goto L_1ad;
  if ((!this.foregrounded)) goto L_1ad;
  if (((undefined !== this.resumedAt))) goto L_1ad;
  if ((("offscreen" === this.visibility))) goto L_1ad;
  if (!((this.source === t.Ready))) goto L_11e;
  if ((("visible" !== this.visibility))) goto L_1ad;
  this.resumedAt = Date.now();
  this.timer = setTimeout(this.expire, this.remainingMs);
  setTimeout(this.expire, this.remainingMs);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=404B file=dil_widgets/src/DILImageLoadMetrics
// locals: e
// closure: this
function {
  if (!((undefined !== this.timer))) goto L_50;
  clearTimeout(this.timer);
  this.timer = undefined;
  if (!((undefined !== this.resumedAt))) goto L_193;
  let e;
  e = Math.max(0, (Date.now() - this.resumedAt));
  this.observedMs = (this.observedMs + e);
  this.remainingMs = Math.max(0, (this.remainingMs - e));
  this.resumedAt = undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=480B file=dil_widgets/src/DILImageLoadMetrics
// locals: e
// closure: this, t, o
function {
  let e;
  if (!((this.sourceState === t.Missing))) goto L_6f;
  goto L_1b6;
  // [栈深重同步 1 -> 0]
  if (!((this.sourceState === t.Blocked))) goto L_db;
  goto L_1b6;
  // [栈深重同步 1 -> 0]
  if (!((this.sourceState === t.Pending))) goto L_146;
  goto L_1b6;
  // [栈深重同步 1 -> 0]
  if (!(("visible" === this.visibility))) goto L_194;
  goto L_1b6;
  // [栈深重同步 1 -> 0]
  e = o.NotVisible;
  this.finish(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=50B file=dil_widgets/src/DILImageLoadMetrics
// closure: this
function {
  this.foregrounded = false;
  this.pause();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=50B file=dil_widgets/src/DILImageLoadMetrics
// closure: this
function {
  this.foregrounded = true;
  this.resume();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=6 bc=493B file=dil_widgets/src/DILImageLoadMetrics
// args: i
// locals: this
// closure: t, o, <class_fields_init>, r, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.componentType = i;
  this.source = t.Missing;
  this.hasReadySource = false;
  this.foregrounded = false;
  this.observedMs = 0;
  this.fallbackUsed = false;
  this.visibility = "unknown";
  this.finished = false;
  this.remainingMs = r;
  this.setVisible = function <atom:0>;
  this.resume = function <atom:0>;
  this.pause = function <atom:0>;
  this.expire = function <atom:0>;
  this.foregrounded = e.Application.isForegrounded();
  this.background = e.Application.observeEnteredBackground(function <atom:0>);
  this.foreground = e.Application.observeEnteredForeground(function <atom:0>);
  this.resume();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/DILImageLoadMetrics
// locals: this
function {
  this = this;
  return this.source;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=237B file=dil_widgets/src/DILImageLoadMetrics
// args: e
// locals: this
// closure: t, r
function {
  this = this;
  if (!((e !== this.source))) goto L_ec;
  this.pause();
  if (((e !== t.Ready))) goto L_bb;
  if ((this.hasReadySource)) goto L_bb;
  this.hasReadySource = true;
  this.remainingMs = r;
  r;
  this.source = e;
  this.resume();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=891B file=dil_widgets/src/DILImageLoadMetrics
// args: e
// locals: t, this
// closure: i, s, n
function {
  this = this;
  let t;
  if (!(this.finished)) goto L_2a;
  return;
  this.finished = true;
  this.pause();
  this.background.cancel();
  this.foreground.cancel();
  if (!(i.Device.isWeb())) goto L_16e;
  goto L_215;
  // [栈深重同步 2 -> 1]
  if (!(i.Device.isIOS())) goto L_1bf;
  goto L_215;
  // [栈深重同步 2 -> 1]
  if (!(i.Device.isAndroid())) goto L_210;
  goto L_215;
  // [栈深重同步 2 -> 1]
  t = {component_type: this.componentType, renderer: "valdi", platform: "other", outcome: e, source_state: this.sourceState, fallback_used: String(this.fallbackUsed), visibility: this.visibility};
  try { // catch -> L_372
  s.countMetric("".concat(n, ".load_result"), 1, t);
  s.recordHistogram("".concat(n, ".load_duration_ms"), this.observedMs, t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_37a
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=152B file=dil_widgets/src/DILImageLoadMetrics
// locals: this
// closure: o
function {
  this = this;
  if (!(("offscreen" === this.visibility))) goto L_72;
  goto L_94;
  // [栈深重同步 3 -> 2]
  this.finish(o.Canceled);
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=7 bc=262B file=dil_widgets/src/DILImageLoadMetrics
// args: require, module, exports
// locals: e, i, s, t, o, r, n, DILImageLoadMetrics, <class_fields_init>, DILImageLoadMetrics#1
function {
  let DILImageLoadMetrics#1;
  let n;
  let r;
  let s;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILImageSourceState = undefined;
  exports.DILImageLoadOutcome = undefined;
  exports.DILImageLoadMetrics = undefined;
  e = require("valdi_core/src/Application");
  i = require("valdi_core/src/Device");
  s = require("oai_metrics_service/src/ValdiMetricsReporting");
  if ((t)) goto L_97;
  t = {};
  exports.DILImageSourceState = {};
  !function <atom:0>({});
  if ((o)) goto L_b0;
  o = {};
  exports.DILImageLoadOutcome = {};
  function <atom:0>({});
  r = 30000;
  n = "chatgpt.model_written_dil.v2.image";
  let DILImageLoadMetrics;
  let <class_fields_init>;
  class DILImageLoadMetrics extends undefined { ... }
  <proto:DILImageLoadMetrics>.sourceState = function <atom:0>;
  <proto:DILImageLoadMetrics>.sourceState = function <atom:0>;
  <proto:DILImageLoadMetrics>.finish = function <atom:0>;
  <proto:DILImageLoadMetrics>.cancel = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILImageLoadMetrics>;
  DILImageLoadMetrics = function <atom:0>;
  // close_loc <class_fields_init>
  DILImageLoadMetrics#1 = function <atom:0>;
  exports.DILImageLoadMetrics = DILImageLoadMetrics#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILImageLoadMetrics
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
