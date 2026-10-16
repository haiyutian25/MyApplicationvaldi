// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=62B file=dil_widgets/src/widgets/RunInterval
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.tickCount = 0;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=88B file=dil_widgets/src/widgets/RunInterval
// locals: this
// closure: t
function {
  this = this;
  this.dilTimer = t.resolveDILTimer();
  this.syncTimer(undefined);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=48B file=dil_widgets/src/widgets/RunInterval
// args: i
// locals: this
function {
  this = this;
  if (!((undefined !== i))) goto L_2f;
  this.syncTimer(i);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=dil_widgets/src/widgets/RunInterval
// locals: this
function {
  this = this;
  this.clearTimers();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/RunInterval
function {
  return;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=609B file=dil_widgets/src/widgets/RunInterval
// args: i
// locals: t, e, r, this
// closure: s
function {
  this = this;
  let r;
  let e;
  let t;
  if (!(!this.isActive(this.viewModel))) goto L_a2;
  this.clearTimers();
  this.resetDeltaBaseline();
  return;
  t = s(this.viewModel.interval);
  if (!((undefined !== i))) goto L_115;
  e = this.isActive(i);
  if (!((undefined !== this.intervalMs))) goto L_164;
  r = (this.intervalMs !== t);
  if (((undefined !== this.timer))) goto L_1b1;
  if (!((undefined !== this.leadingTimer))) goto L_1e0;
  if (!(!r)) goto L_1ba;
  return;
  this.clearTimers();
  this.intervalMs = t;
  if (!((true === this.viewModel.leadingTick))) goto L_25d;
  this.startTimers(!e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=202B file=dil_widgets/src/widgets/RunInterval
// closure: this
function {
  this.leadingTimer = undefined;
  this.dispatchTick();
  if (!(this.isActive(this.viewModel))) goto L_c9;
  if (!((undefined === this.timer))) goto L_c9;
  this.startRepeatingTimer();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=129B file=dil_widgets/src/widgets/RunInterval
// args: i
// locals: this
function {
  this = this;
  if (!(i)) goto L_5b;
  this.leadingTimer = this.dilTimer.setTimeout(function <atom:0>, 0);
  goto L_80;
  // [栈深重同步 1 -> 0]
  this.startRepeatingTimer();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_widgets/src/widgets/RunInterval
// closure: this
function {
  return this.dispatchTick();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=1 bc=200B file=dil_widgets/src/widgets/RunInterval
// locals: i, this
// closure: s
function {
  this = this;
  let i;
  if (!((this.intervalMs == null))) goto L_71;
  this.intervalMs;
  i = s(this.viewModel.interval);
  this.timer = this.dilTimer.setInterval(function <atom:0>, i);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=184B file=dil_widgets/src/widgets/RunInterval
// locals: this
function {
  this = this;
  if (!((undefined !== this.leadingTimer))) goto L_5c;
  this.leadingTimer();
  this.leadingTimer = undefined;
  undefined;
  if (!((undefined !== this.timer))) goto L_b7;
  this.timer();
  this.timer = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=dil_widgets/src/widgets/RunInterval
// locals: this
function {
  this = this;
  this.lastTickTime = undefined;
  return;
}

// fn <atom:0>  args=0 vars=6 closure=1 cpool=0 bc=928B file=dil_widgets/src/widgets/RunInterval
// locals: i, t, e, r, n, this
// closure: s
function {
  this = this;
  let n;
  let r;
  let e;
  let t;
  let i;
  if (!(!this.isActive(this.viewModel))) goto L_86;
  this.clearTimers();
  return;
  i = this.dilTimer.now();
  if (!((undefined === this.firstTickTime))) goto L_106;
  this.firstTickTime = i;
  i;
  if (!((this.intervalMs == null))) goto L_175;
  this.intervalMs;
  t = s(this.viewModel.interval);
  if (!((undefined === this.lastTickTime))) goto L_1cb;
  goto L_1f2;
  // [栈深重同步 2 -> 1]
  e = {count: (this.tickCount + 1), deltaMs: (i - this.lastTickTime), elapsedMs: (i - this.firstTickTime), intervalMs: t, now: i};
  this.tickCount = e.count;
  this.lastTickTime = i;
  r = {tick: e};
  if (!((this.viewModel.onTickAction == null))) goto L_2c8;
  this.viewModel.onTickAction;
  this.viewModel;
  goto L_2ce;
  // [栈深重同步 1 -> 2]
  n = <?>.call(undefined, r);
  if (!((undefined !== n))) goto L_32b;
  if (!((this.context == null))) goto L_304;
  this.context;
  goto L_32b;
  undefined.dispatchActionPayload(n);
  if ((this.isActive(this.viewModel))) goto L_39f;
  this.clearTimers();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=239B file=dil_widgets/src/widgets/RunInterval
// args: i
// locals: this
function {
  this = this;
  if (!((false !== i.running))) goto L_ee;
  if (!((undefined !== i.onTickAction))) goto L_ee;
  if (((undefined === i.maxTicks))) goto L_ee;
  if (((null === i.maxTicks))) goto L_ee;
  return (this.tickCount < i.maxTicks);
}

// fn s  args=1 vars=1 closure=0 cpool=0 bc=141B file=dil_widgets/src/widgets/RunInterval
// args: i
function {
  if (!((undefined !== i))) goto L_89;
  if (!(Number.isFinite(i))) goto L_89;
  return Math.max(1, Math.round(i));
  return 1000;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=13 bc=342B file=dil_widgets/src/widgets/RunInterval
// args: require, module, exports
// locals: i, t, e, RunInterval, <class_fields_init>, RunInterval#1, s
function {
  s = function s;
  let RunInterval#1;
  let e;
  let t;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RunInterval = undefined;
  i = require("valdi_core/src/JSX").jsx;
  t = require("dil_core/src/DILTimer");
  e = require("valdi_core/src/Component");
  let RunInterval;
  let <class_fields_init>;
  class RunInterval extends e.Component { ... }
  <proto:RunInterval>.onCreate = function <atom:0>;
  <proto:RunInterval>.onViewModelUpdate = function <atom:0>;
  <proto:RunInterval>.onDestroy = function <atom:0>;
  <proto:RunInterval>.onRender = function <atom:0>;
  <proto:RunInterval>.syncTimer = function <atom:0>;
  <proto:RunInterval>.startTimers = function <atom:0>;
  <proto:RunInterval>.startRepeatingTimer = function <atom:0>;
  <proto:RunInterval>.clearTimers = function <atom:0>;
  <proto:RunInterval>.resetDeltaBaseline = function <atom:0>;
  <proto:RunInterval>.dispatchTick = function <atom:0>;
  <proto:RunInterval>.isActive = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:RunInterval>;
  RunInterval = function <atom:0>;
  // close_loc <class_fields_init>
  RunInterval#1 = function <atom:0>;
  exports.RunInterval = RunInterval#1;
  RunInterval#1.properties = ["interval", "leadingTick", "maxTicks", "onTickAction", "running"];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/RunInterval
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
