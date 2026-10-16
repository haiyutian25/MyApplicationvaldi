// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
// closure: this
function {
  return this.createEnteredRecord(e);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=188B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// locals: this, this.active_func, new.target, arguments
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
  this.hasPendingAnimatedUpdate = false;
  this.state = {records: this.viewModel.items.map(function <atom:0>)};
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=100B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
// locals: this
function {
  this = this;
  if (!((undefined !== e))) goto L_63;
  if (!((undefined === this.activeAnimator))) goto L_56;
  goto L_63;
  // [栈深重同步 1 -> 0]
  this.hasPendingAnimatedUpdate = true;
  true;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=124B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// locals: e, this
function {
  this = this;
  let e;
  for (const e of this.state.records) {
    this.renderRecord(e);
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=282B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// locals: i
// closure: this, t, u, e
function {
  let i;
  if ((this.isDestroyed())) goto L_52;
  if (!((this.activeAnimator !== t))) goto L_55;
  return;
  this.activeAnimator = undefined;
  i = u(e);
  this.setState({records: i});
  if (!(!this.hasPendingAnimatedUpdate)) goto L_e4;
  if ((this.matchesViewModel(i))) goto L_119;
  this.hasPendingAnimatedUpdate = false;
  this.scheduleAnimatedUpdate();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=1 bc=464B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// locals: e, t, this
// closure: u, s
function {
  this = this;
  let t;
  let e;
  e = this.diffRecords();
  if (!(!e.hasChanged)) goto L_a6;
  this.setState({records: e.nextRecords});
  return;
  t = new s.KeyFrameAnimator(this.renderer);
  this.activeAnimator = t;
  this.addInsertionAnimation(t, e);
  this.addRemovalAnimation(t, e);
  this.addMoveAnimation(t, e);
  t.start().then(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
// closure: t, d
function {
  if (!(t.insertedRecords.includes(e))) goto L_4d;
  return d(e);
  return e;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=116B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// closure: t, d, this
function {
  this.setState({records: t.nextRecords.map(function <atom:0>)});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=84B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
// closure: t, c
function {
  if (!(t.insertedRecords.includes(e))) goto L_52;
  return c(e, "entered");
  return e;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=116B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// closure: t, c, this
function {
  this.setState({records: t.nextRecords.map(function <atom:0>)});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=2 bc=325B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e, t
// locals: i, this
// closure: d, c, f, a
function {
  this = this;
  let i;
  if (!((0 === t.insertedRecords.length))) goto L_2d;
  return;
  i = f(this.viewModel.layoutEnter, this.viewModel.enter, a.defaultEnterDurationMs);
  e.addAnimation(0, i, a.animationOptions(i), {prepare: function <atom:0>, animate: function <atom:0>});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
// closure: t, h
function {
  if (!(t.removedRecords.includes(e))) goto L_4d;
  return h(e);
  return e;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=85B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// closure: t, h, this, r
function {
  this.setState({records: r.map(function <atom:0>)});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
// closure: t, m
function {
  if (!(t.removedRecords.includes(e))) goto L_4d;
  return m(e);
  return e;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=85B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// closure: t, m, this, r
function {
  this.setState({records: r.map(function <atom:0>)});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
// closure: t
function {
  return !t.removedRecords.includes(e);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=149B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// closure: t, this
function {
  this.setState({records: this.state.records.filter(function <atom:0>)});
  return;
}

// fn <atom:0>  args=2 vars=5 closure=5 cpool=3 bc=413B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e, t
// locals: i, r, this
// closure: h, m, f, a, l
function {
  this = this;
  let r;
  let i;
  if (!((0 === t.removedRecords.length))) goto L_30;
  return;
  i = f(this.viewModel.layoutExit, this.viewModel.exit, a.defaultExitDurationMs);
  r = l(this.state.records, t);
  e.addAnimation(0, i, a.animationOptions(i), {prepare: function <atom:0>, animate: function <atom:0>, cleanup: function <atom:0>});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=78B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// closure: this, t
function {
  this.setState({records: t.nextRecords});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=1 bc=449B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e, t
// locals: i, this
// closure: p, a
function {
  this = this;
  let i;
  if (((t.insertedRecords.length > 0))) goto L_c2;
  if (((t.removedRecords.length > 0))) goto L_c2;
  if (!(!p(this.state.records, t.nextRecords))) goto L_c5;
  return;
  i = a.readOptionalTransitionDuration(this.viewModel.layoutMove, a.defaultEnterDurationMs("AnimateGroup"));
  if (!((i > 0))) goto L_1af;
  goto L_1b0;
  // [栈深重同步 5 -> 4]
  e.addAnimation(0, i, undefined, {animate: function <atom:0>});
  return;
}

// fn <atom:0>  args=0 vars=12 closure=2 cpool=0 bc=1086B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// locals: e, o, t, i, r, o#1, n, s, n#1, o#2, e#1, this
// closure: c, p
function {
  this = this;
  let n#1;
  let r;
  let i;
  let t;
  let e;
  e = new Map();
  let o;
  for (const o of this.state.records) {
    e.set(o.key, o);
  }
  t = [];
  i = [];
  r = new Set();
  let o#1;
  for (const o#1 of this.viewModel.items) {
    let s;
    let n;
    r.add(o#1.key);
    n = e.get(o#1.key);
    if (!((undefined === n))) goto L_1ed;
    goto L_219;
    // [栈深重同步 4 -> 3]
    s = this.createEnteredRecord(o#1, n);
    if (!((undefined === n))) goto L_24e;
    i.push(s);
    t.push(s);
  }
  n#1 = [];
  let o#2;
  for (const o#2 of this.state.records) {
    if (!(!r.has(o#2.key))) continue;
    let e#1;
    e#1 = c(o#2, "exiting");
    n#1.push(e#1);
    t.push(e#1);
  }
  if (((i.length > 0))) goto L_420;
  if (((n#1.length > 0))) goto L_420;
  if ((p(this.state.records, t))) goto L_420;
  return {hasChanged: !this.matchesViewModel(t), insertedRecords: i, nextRecords: t, removedRecords: n#1};
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=393B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e, t
// locals: this
// closure: n
function {
  this = this;
  if (!((undefined === this.viewModel.initial))) goto L_71;
  return this.createEnteredRecord(e, t);
  if (!((t == null))) goto L_7b;
  t;
  goto L_9c;
  if (!((undefined.itemRef == null))) goto L_c9;
  undefined.itemRef;
  if (!((t == null))) goto L_12f;
  t;
  goto L_150;
  if (!((undefined.wrapperRef == null))) goto L_17d;
  undefined.wrapperRef;
  return {itemRef: new n.ElementRef(), key: e.key, phase: "initial", renderItem: e.renderItem, wrapperRef: new n.ElementRef(), wrapperState: {}};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=280B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e, t
// closure: n
function {
  if (!((t == null))) goto L_a;
  t;
  goto L_2b;
  if (!((undefined.itemRef == null))) goto L_58;
  undefined.itemRef;
  if (!((t == null))) goto L_be;
  t;
  goto L_df;
  if (!((undefined.wrapperRef == null))) goto L_10c;
  undefined.wrapperRef;
  return {itemRef: new n.ElementRef(), key: e.key, phase: "entered", renderItem: e.renderItem, wrapperRef: new n.ElementRef(), wrapperState: {}};
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=256B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
// locals: t, this
function {
  this = this;
  if (!((e.length !== this.viewModel.items.length))) goto L_4e;
  return false;
  let t;
  t = 0;
  if (!((t < e.length))) goto L_fd;
  if (!((e[t].key !== this.viewModel.items[t].key))) goto L_f2;
  return false;
  t = <t_new>;
  (t++);
  goto L_53;
  return true;
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=0 bc=1719B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: r
// locals: n, o, this
// closure: a, e, t, w, i
function {
  this = this;
  let o;
  let n;
  if (!((this.viewModel.dimension == null))) goto L_55;
  this.viewModel.dimension;
  n = "height";
  if (!(("exiting" === r.phase))) goto L_c6;
  goto L_178;
  // [栈深重同步 1 -> 0]
  if (!(("initial" === r.phase))) goto L_135;
  goto L_178;
  // [栈深重同步 1 -> 0]
  o = this.viewModel.enter;
  a.applyTransitionAttributesToRef(r.itemRef, o, n, r.phase, false);
  e.beginRender(t, r.key);
  e.setAttributeRef(r.wrapperRef);
  e.setAttributeStyle("style", w.wrapper);
  e.setAttributeNumber("height", r.wrapperState.height);
  e.setAttribute("limitToViewport", r.wrapperState.limitToViewport);
  e.setAttributeNumber("width", r.wrapperState.width);
  e.beginRender(i, "item");
  e.setAttributeRef(r.itemRef);
  if (!(("absolute" === r.wrapperState.itemPosition))) goto L_539;
  goto L_55d;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", w.item);
  e.setAttributeNumber("height", r.wrapperState.itemHeight);
  e.setAttributeNumber("width", r.wrapperState.itemWidth);
  r.renderItem();
  e.endRender();
  e.endRender();
  return;
}

// fn d  args=1 vars=1 closure=0 cpool=0 bc=53B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
function {
  null;
  e;
  return {phase: "initial", wrapperState: {height: 0, itemPosition: "absolute", limitToViewport: false, width: 0}};
}

// fn h  args=1 vars=2 closure=0 cpool=0 bc=352B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
// locals: t
function {
  let t;
  if (!((e.wrapperRef.single() == null))) goto L_51;
  e.wrapperRef.single();
  goto L_72;
  t = undefined.frame;
  null;
  e;
  if (!((t == null))) goto L_90;
  t;
  goto L_b1;
  if (!((t == null))) goto L_c1;
  t;
  goto L_e2;
  if (!((t == null))) goto L_fc;
  t;
  goto L_11d;
  if (!((t == null))) goto L_134;
  t;
  goto L_155;
  return {phase: "entered", wrapperState: {height: undefined.height, itemHeight: undefined.height, itemPosition: "absolute", itemWidth: undefined.width, limitToViewport: false, width: undefined.width}};
}

// fn m  args=1 vars=2 closure=0 cpool=0 bc=266B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
// locals: t
function {
  let t;
  if (!((e.wrapperRef.single() == null))) goto L_51;
  e.wrapperRef.single();
  goto L_72;
  t = undefined.frame;
  null;
  e;
  if (!((t == null))) goto L_96;
  t;
  goto L_b7;
  if (!((t == null))) goto L_d1;
  t;
  goto L_f2;
  return {phase: "exiting", wrapperState: {height: 0, itemHeight: undefined.height, itemPosition: "absolute", itemWidth: undefined.width, limitToViewport: false, width: 0}};
}

// fn c  args=2 vars=2 closure=0 cpool=0 bc=20B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e, t
function {
  null;
  e;
  return {phase: t, wrapperState: {}};
}

// fn p  args=2 vars=5 closure=0 cpool=0 bc=229B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e, t
// locals: i, r, r#1
function {
  let i;
  i = new Map();
  let r;
  r = 0;
  if (!((r < e.length))) goto L_75;
  i.set(e[r].key, r);
  r = <r_new>;
  (r++);
  goto L_12;
  let r#1;
  r#1 = 0;
  if (!((r#1 < t.length))) goto L_e2;
  if (!((i.get(t[r#1].key) !== r#1))) goto L_d8;
  return true;
  r#1 = <r#1_new>;
  (r#1++);
  goto L_7a;
  return false;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
// closure: i
function {
  return i.get(e.key);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
function {
  return (undefined !== e);
}

// fn l  args=2 vars=4 closure=0 cpool=2 bc=216B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e, t
// locals: i, r
function {
  let i;
  i = new Map();
  let r;
  for (const r of t.nextRecords) {
    i.set(r.key, r);
  }
  return e.map(function <atom:0>).filter(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: t
// closure: e
function {
  return !e.removedRecords.includes(t);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=10B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
// closure: c
function {
  return c(e, "entered");   // tail call
}

// fn u  args=1 vars=1 closure=1 cpool=2 bc=110B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e
// closure: c
function {
  return e.nextRecords.filter(function <atom:0>).map(function <atom:0>);   // tail call
}

// fn f  args=3 vars=3 closure=1 cpool=0 bc=131B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: e, t, i
// closure: a
function {
  return Math.max(a.readOptionalTransitionDuration(e, i("AnimateGroup")), a.readOptionalTransitionDuration(t, i("AnimateGroup")));   // tail call
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=20 bc=706B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// args: require, module, exports
// locals: e, t, i, r, n, o, s, a, DILAnimatedGroupContainer, <class_fields_init>, DILAnimatedGroupContainer#1, d, h, m, c, p, l, u, f, w
function {
  d = function d;
  h = function h;
  m = function m;
  c = function c;
  p = function p;
  l = function l;
  u = function u;
  f = function f;
  let w;
  let DILAnimatedGroupContainer#1;
  let a;
  let s;
  let o;
  let n;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILAnimatedGroupContainer = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "zF3ZYSpbQhNoB6qv");
  i = e.makeNodePrototype("view", undefined, "K0d-mNgFKpCIAi7k");
  r = require("valdi_core/src/Component");
  n = require("valdi_core/src/ElementRef");
  o = require("valdi_core/src/Style");
  s = require("./KeyFrameAnimator");
  a = require("./DILTransitionAttributes");
  let DILAnimatedGroupContainer;
  let <class_fields_init>;
  class DILAnimatedGroupContainer extends r.StatefulComponent { ... }
  <proto:DILAnimatedGroupContainer>.onViewModelUpdate = function <atom:0>;
  <proto:DILAnimatedGroupContainer>.onRender = function <atom:0>;
  <proto:DILAnimatedGroupContainer>.scheduleAnimatedUpdate = function <atom:0>;
  <proto:DILAnimatedGroupContainer>.addInsertionAnimation = function <atom:0>;
  <proto:DILAnimatedGroupContainer>.addRemovalAnimation = function <atom:0>;
  <proto:DILAnimatedGroupContainer>.addMoveAnimation = function <atom:0>;
  <proto:DILAnimatedGroupContainer>.diffRecords = function <atom:0>;
  <proto:DILAnimatedGroupContainer>.createInitialRecord = function <atom:0>;
  <proto:DILAnimatedGroupContainer>.createEnteredRecord = function <atom:0>;
  <proto:DILAnimatedGroupContainer>.matchesViewModel = function <atom:0>;
  <proto:DILAnimatedGroupContainer>.renderRecord = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILAnimatedGroupContainer>;
  DILAnimatedGroupContainer = function <atom:0>;
  // close_loc <class_fields_init>
  DILAnimatedGroupContainer#1 = function <atom:0>;
  exports.DILAnimatedGroupContainer = DILAnimatedGroupContainer#1;
  w = {wrapper: new o.Style({position: "relative", minWidth: 0, minHeight: 0, flexShrink: 1}), item: new o.Style({minWidth: 0, minHeight: 0, flexShrink: 1}), absoluteItem: new o.Style({position: "absolute", top: 0, left: 0, minWidth: 0, minHeight: 0, flexShrink: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/animation/DILAnimatedGroupContainer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
