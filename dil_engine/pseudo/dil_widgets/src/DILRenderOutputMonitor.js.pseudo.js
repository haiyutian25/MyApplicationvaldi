// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=87B file=dil_widgets/src/DILRenderOutputMonitor
// args: t
// closure: this
function {
  this.completion = t;
  this.invalidate();
  this.scheduleCheck();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=528B file=dil_widgets/src/DILRenderOutputMonitor
// locals: i
// closure: this, s, t, e
function {
  let i;
  if ((!this.canInspect())) goto L_53;
  if (!((s !== this.revision))) goto L_56;
  return;
  i = this.inspectOutput();
  if (!((i == null))) goto L_87;
  i;
  goto L_a8;
  if (((undefined.status === t.DILRenderOutputStatus.Content))) goto L_1e3;
  if (!((i == null))) goto L_100;
  i;
  goto L_121;
  if (!((undefined.status === e.status))) goto L_1e3;
  if (!((i.width === e.width))) goto L_1e3;
  if (!((i.height === e.height))) goto L_20f;
  this.report(i);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=203B file=dil_widgets/src/DILRenderOutputMonitor
// closure: this, s, t, e
function {
  this.confirmationTimer = 0;
  if (!(this.canInspect())) goto L_ca;
  if (!((s === this.revision))) goto L_ca;
  this.options.renderer.onLayoutComplete(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=1 bc=312B file=dil_widgets/src/DILRenderOutputMonitor
// locals: e, s
// closure: this, t, i
function {
  let s;
  let e;
  this.layoutScheduled = false;
  if (!(!this.canInspect())) goto L_3b;
  return;
  e = this.inspectOutput();
  if (!((undefined === e))) goto L_69;
  return;
  if (!((e.status === t.DILRenderOutputStatus.Content))) goto L_ff;
  this.report(e);
  return;
  s = this.revision;
  this.confirmationTimer = setTimeout(function <atom:0>, i);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=2 bc=141B file=dil_widgets/src/DILRenderOutputMonitor
// args: e
// locals: this
// closure: t, i, <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.options = e;
  this.revision = 0;
  this.isActive = true;
  this.layoutScheduled = false;
  this.confirmationTimer = 0;
  this.renderStateChanged = function <atom:0>;
  this.afterLayout = function <atom:0>;
  this.isStreaming = e.isStreaming;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=129B file=dil_widgets/src/DILRenderOutputMonitor
// args: t
// locals: this
function {
  this = this;
  if (!((this.isStreaming !== t))) goto L_80;
  this.isStreaming = t;
  this.invalidate();
  this.scheduleCheck();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=315B file=dil_widgets/src/DILRenderOutputMonitor
// args: t
// locals: this
function {
  this = this;
  if (!((this.frame == null))) goto L_2c;
  this.frame;
  goto L_4d;
  if (!((undefined.width === t.width))) goto L_da;
  if (((this.frame.height === t.height))) goto L_13a;
  null;
  t;
  this.frame = {};
  this.invalidate();
  this.scheduleCheck();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=dil_widgets/src/DILRenderOutputMonitor
// locals: this
function {
  this = this;
  this.invalidate();
  this.scheduleCheck();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=52B file=dil_widgets/src/DILRenderOutputMonitor
// locals: this
function {
  this = this;
  this.isActive = false;
  this.invalidate();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=139B file=dil_widgets/src/DILRenderOutputMonitor
// locals: this
function {
  this = this;
  this.revision = (this.revision + 1);
  if (!(this.confirmationTimer)) goto L_8a;
  clearTimeout(this.confirmationTimer);
  this.confirmationTimer = 0;
  0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=272B file=dil_widgets/src/DILRenderOutputMonitor
// locals: this
function {
  this = this;
  if (!(this.isActive)) goto L_10f;
  if (!(!this.isStreaming)) goto L_10f;
  if (!((undefined !== this.completion))) goto L_10f;
  if (!((this.completion !== this.checkedCompletion))) goto L_10f;
  return this.options.isForegrounded();
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=279B file=dil_widgets/src/DILRenderOutputMonitor
// locals: this
function {
  this = this;
  if ((!this.canInspect())) goto L_116;
  if ((this.layoutScheduled)) goto L_116;
  if ((this.confirmationTimer)) goto L_116;
  this.layoutScheduled = true;
  this.options.renderer.onLayoutComplete(this.afterLayout);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=159B file=dil_widgets/src/DILRenderOutputMonitor
// locals: i, this
// closure: t
function {
  this = this;
  let i;
  i = this.options.root.single();
  if (!((undefined === i))) goto L_76;
  return undefined;
  return t.inspectDILRenderOutput(i);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=215B file=dil_widgets/src/DILRenderOutputMonitor
// args: t
// locals: i, this
function {
  this = this;
  let i;
  i = this.completion;
  if (!((undefined !== i))) goto L_d6;
  if (!((i !== this.checkedCompletion))) goto L_d6;
  this.checkedCompletion = i;
  this.options.report(t, i.sourceGeneration);
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=10 bc=198B file=dil_widgets/src/DILRenderOutputMonitor
// args: require, module, exports
// locals: t, i, DILRenderOutputMonitor, <class_fields_init>, DILRenderOutputMonitor#1
function {
  let DILRenderOutputMonitor#1;
  let i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILRenderOutputMonitor = undefined;
  t = require("./DILRenderOutputInspection");
  i = 500;
  let DILRenderOutputMonitor;
  let <class_fields_init>;
  class DILRenderOutputMonitor extends undefined { ... }
  <proto:DILRenderOutputMonitor>.updateStreamingState = function <atom:0>;
  <proto:DILRenderOutputMonitor>.layoutChanged = function <atom:0>;
  <proto:DILRenderOutputMonitor>.foregroundChanged = function <atom:0>;
  <proto:DILRenderOutputMonitor>.stop = function <atom:0>;
  <proto:DILRenderOutputMonitor>.invalidate = function <atom:0>;
  <proto:DILRenderOutputMonitor>.canInspect = function <atom:0>;
  <proto:DILRenderOutputMonitor>.scheduleCheck = function <atom:0>;
  <proto:DILRenderOutputMonitor>.inspectOutput = function <atom:0>;
  <proto:DILRenderOutputMonitor>.report = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILRenderOutputMonitor>;
  DILRenderOutputMonitor = function <atom:0>;
  // close_loc <class_fields_init>
  DILRenderOutputMonitor#1 = function <atom:0>;
  exports.DILRenderOutputMonitor = DILRenderOutputMonitor#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILRenderOutputMonitor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
