// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=115B file=dil_widgets/src/widgets/OverflowRow
// args: e
function {
  e.Reset = 0;
  e[0] = "Reset";
  e.WaitForAllChildren = 1;
  e[1] = "WaitForAllChildren";
  e.MeasureWithoutAction = 2;
  e[2] = "MeasureWithoutAction";
  e.SearchWithAction = 3;
  e[3] = "SearchWithAction";
  e.FinalizeWithAction = 4;
  e[4] = "FinalizeWithAction";
  e.Stable = 5;
  e[5] = "Stable";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=95B file=dil_widgets/src/widgets/OverflowRow
// locals: e
// closure: this
function {
  let e;
  e = this.getContentElement();
  if (!((undefined !== e))) goto L_5e;
  this.measureOverflow(e);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=169B file=dil_widgets/src/widgets/OverflowRow
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, i
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
  this.measurementPhase = i.Reset;
  this.originalDisplayByElementId = new Map();
  this.fittingItemCount = -1;
  this.overflowingItemCount = 0;
  this.measuredItemCount = 0;
  this.measureAfterRender = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=640B file=dil_widgets/src/widgets/OverflowRow
// args: e
// locals: this
function {
  this = this;
  if (!((undefined !== e))) goto L_149;
  if (!((e.rows === this.viewModel.rows))) goto L_149;
  if (!((e.hasOverflowAction === this.viewModel.hasOverflowAction))) goto L_149;
  if (((e.hasOverflowEndAction === this.viewModel.hasOverflowEndAction))) goto L_27f;
  if (!((e == null))) goto L_15b;
  e;
  goto L_17c;
  if (!((true === undefined.hasOverflowAction))) goto L_1f0;
  if (!((true !== this.viewModel.hasOverflowAction))) goto L_1f0;
  this.restoreCurrentChildren();
  this.invalidateMeasurement();
  this.renderer.onRenderComplete(this.measureAfterRender);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/OverflowRow
// locals: this
function {
  this = this;
  return (true === this.viewModel.hasOverflowAction);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=41B file=dil_widgets/src/widgets/OverflowRow
// args: e
// locals: this
function {
  this = this;
  this.measureOverflow(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=58B file=dil_widgets/src/widgets/OverflowRow
// locals: this
// closure: i
function {
  this = this;
  this.measurementPhase = i.Reset;
  this.stableLayoutSignature = undefined;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=175B file=dil_widgets/src/widgets/OverflowRow
// locals: e, t, this
// closure: n
function {
  this = this;
  let t;
  let e;
  e = this.getContentElement();
  if (!((undefined === e))) goto L_36;
  return;
  t = n(e.children);
  this.rememberOriginalDisplays(t);
  this.restoreElements(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_widgets/src/widgets/OverflowRow
// args: e
// closure: this
function {
  return !this.isElementHidden(e);
}

// fn <atom:0>  args=1 vars=7 closure=7 cpool=1 bc=2290B file=dil_widgets/src/widgets/OverflowRow
// args: e
// locals: t, l, e#1, u, s, this
// closure: n, s, i, h, o, r, a
function {
  this = this;
  let u;
  let l;
  let t;
  t = n(e.children);
  this.rememberOriginalDisplays(t);
  l = s(t, this.viewModel);
  if (!((undefined === l))) goto L_e1;
  this.restoreElements(t);
  this.finishMeasurement(e, t);
  return;
  if (!((this.measurementPhase === i.Stable))) goto L_1ca;
  if (!((h(e, t, this.viewModel.rows) === this.stableLayoutSignature))) goto L_19d;
  return;
  this.measurementPhase = i.Reset;
  if (!((this.measurementPhase === i.Reset))) goto L_2ec;
  let e#1;
  e#1 = this.restoreElements(t);
  if (!(e#1)) goto L_26d;
  goto L_28f;
  // [栈深重同步 2 -> 1]
  this.measurementPhase = i.MeasureWithoutAction;
  if (!(e#1)) goto L_29e;
  return;
  this.setElementHidden(l.action, true);
  return;
  if (!((this.measurementPhase === i.WaitForAllChildren))) goto L_3af;
  this.setElementHidden(l.action, true);
  this.measurementPhase = i.MeasureWithoutAction;
  return;
  u = o(this.viewModel.rows);
  if (!((this.measurementPhase === i.MeasureWithoutAction))) goto L_4f5;
  // append([], 0, l.items)
  // append([], l.items, l.endActions)
  l.endActions;
  if (!((r([]) <= u))) goto L_4c9;
  this.finishMeasurement(e, t);
  return undefined;
  this.beginItemCountSearch(l);
  return undefined;
  if (!((this.measurementPhase === i.SearchWithAction))) goto L_87d;
  // append([], 0, l.items)
  [][l.items] = l.action;
  // append([], (l.action ++), l.endActions)
  l.endActions;
  if (!((r([].filter(function <atom:0>)) <= u))) goto L_616;
  this.fittingItemCount = this.measuredItemCount;
  goto L_645;
  // [栈深重同步 1 -> 0]
  this.overflowingItemCount = this.measuredItemCount;
  this.measuredItemCount;
  if (!(((this.overflowingItemCount - this.fittingItemCount) <= 1))) goto L_7b9;
  let s;
  s = Math.max(0, this.fittingItemCount);
  if (!((this.measuredItemCount !== s))) goto L_78c;
  this.setVisibleItemCount(l.items, s);
  this.measurementPhase = i.FinalizeWithAction;
  return undefined;
  this.finishMeasurement(e, t);
  return undefined;
  this.measuredItemCount = a(this.fittingItemCount, this.overflowingItemCount);
  this.setVisibleItemCount(l.items, this.measuredItemCount);
  return;
  if (!((this.measurementPhase === i.FinalizeWithAction))) goto L_8f1;
  this.finishMeasurement(e, t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=180B file=dil_widgets/src/widgets/OverflowRow
// closure: this, e
function {
  this.setElementHidden(e.action, false);
  this.setVisibleItemCountUnbatched(e.items, this.measuredItemCount);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=256B file=dil_widgets/src/widgets/OverflowRow
// args: e
// locals: this
// closure: a, i
function {
  this = this;
  this.fittingItemCount = -1;
  this.overflowingItemCount = e.items.length;
  this.measuredItemCount = a(this.fittingItemCount, this.overflowingItemCount);
  this.renderer.batchUpdates(function <atom:0>);
  this.measurementPhase = i.SearchWithAction;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=128B file=dil_widgets/src/widgets/OverflowRow
// args: e, t
// locals: this
// closure: i, h
function {
  this = this;
  this.measurementPhase = i.Stable;
  this.stableLayoutSignature = h(e, t, this.viewModel.rows);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=577B file=dil_widgets/src/widgets/OverflowRow
// args: e
// locals: t, i, i#1, this
function {
  this = this;
  let t;
  t = new Set();
  let i;
  for (const i of e) {
    t.add(i.id);
    if ((this.originalDisplayByElementId.has(i.id))) goto L_16b;
    this.originalDisplayByElementId.set(i.id, i.getAttribute("display"));
  }
  let i#1;
  for (const i#1 of this.originalDisplayByElementId.keys()) {
    if ((t.has(i#1))) goto L_239;
    this.originalDisplayByElementId.delete(i#1);
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=181B file=dil_widgets/src/widgets/OverflowRow
// locals: i
// closure: e, t, this
function {
  let i;
  for (const i of e) {
    if ((i.setAttribute("display", this.originalDisplayByElementId.get(i.id)))) goto L_a6;
    t = t;
    t;
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=85B file=dil_widgets/src/widgets/OverflowRow
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = false;
  this.renderer.batchUpdates(function <atom:0>);
  return t;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=165B file=dil_widgets/src/widgets/OverflowRow
// args: e, t
// locals: i, this
function {
  this = this;
  let i;
  if (!(t)) goto L_f;
  goto L_77;
  // [栈深重同步 1 -> 0]
  i = this.originalDisplayByElementId.get(e.id);
  return e.setAttribute("display", i);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=39B file=dil_widgets/src/widgets/OverflowRow
// closure: this, e, t
function {
  return this.setVisibleItemCountUnbatched(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=75B file=dil_widgets/src/widgets/OverflowRow
// args: e, t
// locals: this
function {
  this = this;
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=74B file=dil_widgets/src/widgets/OverflowRow
// args: e, t
// locals: i, this
function {
  this = this;
  let i;
  i = 0;
  if (!((i < e.length))) goto L_49;
  this.setElementHidden(e[i], (i >= t));
  i = <i_new>;
  (i++);
  goto L_7;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=49B file=dil_widgets/src/widgets/OverflowRow
// args: e
function {
  return ("none" === e.getAttribute("display"));
}

// fn s  args=2 vars=5 closure=0 cpool=0 bc=223B file=dil_widgets/src/widgets/OverflowRow
// args: e, t
// locals: i, s, n
function {
  let n;
  let s;
  let i;
  if ((!t.hasOverflowAction)) goto L_34;
  if (!((0 === e.length))) goto L_37;
  return;
  if (!(t.hasOverflowEndAction)) goto L_5e;
  goto L_5f;
  // [栈深重同步 1 -> 0]
  i = 0;
  s = ((e.length - i) - 1);
  n = e[s];
  if (!((undefined !== n))) goto L_dd;
  return {action: n, endActions: e.slice((s + 1)), items: e.slice(0, s)};
  return undefined;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=dil_widgets/src/widgets/OverflowRow
// args: e
function {
  return !e.key.includes("dil-border-");
}

// fn n  args=1 vars=1 closure=0 cpool=1 bc=39B file=dil_widgets/src/widgets/OverflowRow
// args: e
function {
  return e.filter(function <atom:0>);   // tail call
}

// fn o  args=1 vars=1 closure=0 cpool=0 bc=90B file=dil_widgets/src/widgets/OverflowRow
// args: e
function {
  if (!((e == null))) goto L_54;
  e;
  return Math.max(1, Math.floor(1));   // tail call
}

// fn r  args=1 vars=3 closure=0 cpool=0 bc=275B file=dil_widgets/src/widgets/OverflowRow
// args: e
// locals: t, i
function {
  let t;
  t = new Set();
  let i;
  for (const i of e) {
    if (!(("none" !== i.getAttribute("display")))) goto L_e4;
    t.add(Math.round(i.frame.y));
  }
  return t.size;
}

// fn a  args=2 vars=2 closure=0 cpool=0 bc=88B file=dil_widgets/src/widgets/OverflowRow
// args: e, t
function {
  return Math.max(0, Math.floor(((e + t) / 2)));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=326B file=dil_widgets/src/widgets/OverflowRow
// args: e
// locals: t
function {
  let t;
  t = e.frame;
  if (!((e.getAttribute("display") == null))) goto L_9f;
  e.getAttribute("display");
  return "".concat(e.id, ":", "", ":", t.x, ",", t.y, ",", t.width, ",", t.height);   // tail call
}

// fn h  args=3 vars=4 closure=1 cpool=1 bc=276B file=dil_widgets/src/widgets/OverflowRow
// args: e, t, i
// locals: s
// closure: o
function {
  let s;
  s = t.map(function <atom:0>).join("|");
  return "".concat(o(i), ":", e.frame.width, ",", e.frame.height, ":", s);   // tail call
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=22 bc=492B file=dil_widgets/src/widgets/OverflowRow
// args: require, module, exports
// locals: e, t, i, OverflowRow, <class_fields_init>, OverflowRow#1, s, n, o, r, a, h
function {
  s = function s;
  n = function n;
  o = function o;
  r = function r;
  a = function a;
  h = function h;
  let OverflowRow#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OVERFLOW_ROW_ACTION_PROPERTY = undefined;
  exports.OVERFLOW_ROW_END_ACTION_PROPERTY = undefined;
  exports.OverflowRow = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = require("./Row");
  exports.OVERFLOW_ROW_ACTION_PROPERTY = "data-overflow-row-action";
  exports.OVERFLOW_ROW_END_ACTION_PROPERTY = "data-overflow-row-end-action";
  if ((i)) goto L_d2;
  i = {};
  function <atom:0>({});
  let OverflowRow;
  let <class_fields_init>;
  class OverflowRow extends t.DILRow { ... }
  <proto:OverflowRow>.onViewModelUpdate = function <atom:0>;
  <proto:OverflowRow>.shouldObserveContentLayout = function <atom:0>;
  <proto:OverflowRow>.onContentLayoutComplete = function <atom:0>;
  <proto:OverflowRow>.invalidateMeasurement = function <atom:0>;
  <proto:OverflowRow>.restoreCurrentChildren = function <atom:0>;
  <proto:OverflowRow>.measureOverflow = function <atom:0>;
  <proto:OverflowRow>.beginItemCountSearch = function <atom:0>;
  <proto:OverflowRow>.finishMeasurement = function <atom:0>;
  <proto:OverflowRow>.rememberOriginalDisplays = function <atom:0>;
  <proto:OverflowRow>.restoreElements = function <atom:0>;
  <proto:OverflowRow>.setElementHidden = function <atom:0>;
  <proto:OverflowRow>.setVisibleItemCount = function <atom:0>;
  <proto:OverflowRow>.setVisibleItemCountUnbatched = function <atom:0>;
  <proto:OverflowRow>.isElementHidden = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OverflowRow>;
  OverflowRow = function <atom:0>;
  // close_loc <class_fields_init>
  OverflowRow#1 = function <atom:0>;
  exports.OverflowRow = OverflowRow#1;
  // append([], 0, t.Row.properties)
  [][t.Row.properties] = "rows";
  ("rows" ++);
  OverflowRow#1.properties = [];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/OverflowRow
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
