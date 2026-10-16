// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=27B file=widgets/src/components/scroll/scrollbar/ScrollBarHandler
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.refByLabel = {};
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=108B file=widgets/src/components/scroll/scrollbar/ScrollBarHandler
// args: e
// locals: t, this
// closure: ScrollBarRef
function {
  this = this;
  let t;
  t = this.refByLabel[e];
  if ((t)) goto L_67;
  t = new ScrollBarRef(this);
  new ScrollBarRef(this);
  this.refByLabel[e] = t;
  t;
  return t;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=70B file=widgets/src/components/scroll/scrollbar/ScrollBarHandler
// args: e, t
function {
  return (e.offsetY - t.offsetY);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=widgets/src/components/scroll/scrollbar/ScrollBarHandler
// args: e
// closure: t
function {
  return (e.offsetY - t);
}

// fn <atom:0>  args=2 vars=10 closure=1 cpool=2 bc=710B file=widgets/src/components/scroll/scrollbar/ScrollBarHandler
// args: e, t
// locals: t#1, s, r, e#1, r#1, i, o, this
// closure: s
function {
  this = this;
  let o;
  let i;
  let r#1;
  if (!((undefined === this.cachedItems))) goto L_189;
  this.cachedItems = [];
  let t#1;
  for (const t#1 of this.refByLabel) {
    let s;
    s = this.refByLabel[t#1];
    if (!(s)) continue;
    let r;
    r = s.getOffsetsY(e);
    let e#1;
    for (const e#1 of r) {
      this.cachedItems.push({label: t#1, offsetY: e#1});
      // [栈深重同步 3 -> 6]
    }
  }
  <catch>;
  this.cachedItems.sort(function <atom:0>);
  // [栈深重同步 2 -> 0]
  r#1 = s.binarySearchRange(this.cachedItems, function <atom:0>);
  i = this.cachedItems[r#1.min];
  o = this.cachedItems[r#1.max];
  if (!(i)) goto L_29a;
  if (!((i == null))) goto L_278;
  i;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.label;
  if (!((o == null))) goto L_2a4;
  o;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.label;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=widgets/src/components/scroll/scrollbar/ScrollBarHandler
// locals: this
function {
  this = this;
  this.cachedItems = undefined;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=52B file=widgets/src/components/scroll/scrollbar/ScrollBarHandler
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target();
  if (!(<class_fields_init>)) goto L_21;
  <class_fields_init>.call(this);
  new new.target();
  this.handler = e;
  return this;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=397B file=widgets/src/components/scroll/scrollbar/ScrollBarHandler
// args: e
// locals: s, e#1, r, this
// closure: t
function {
  this = this;
  let s;
  s = e.scrollView;
  if (!(!s)) goto L_32;
  return [];
  if (!((undefined === this.cachedOffsetsY))) goto L_16a;
  this.cachedOffsetsY = [];
  let e#1;
  for (const e#1 of this.all()) {
    let r;
    if (!((t.RenderedElementUtils.relativePositionTo(s, e#1) == null))) goto L_ee;
    t.RenderedElementUtils.relativePositionTo(s, e#1);
    goto L_10f;
    r = undefined.y;
    if (!(r)) goto L_160;
    this.cachedOffsetsY.push(r);
  }
  return this.cachedOffsetsY;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=101B file=widgets/src/components/scroll/scrollbar/ScrollBarHandler
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["onElementCreated"].call(this, e);
  this.cachedOffsetsY = undefined;
  this.handler.invalidateLayout();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=101B file=widgets/src/components/scroll/scrollbar/ScrollBarHandler
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["onElementDestroyed"].call(this, e);
  this.cachedOffsetsY = undefined;
  this.handler.invalidateLayout();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=15B file=widgets/src/components/scroll/scrollbar/ScrollBarHandler
function {
  throw new Error("Method not implemented.");
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=9 bc=262B file=widgets/src/components/scroll/scrollbar/ScrollBarHandler
// args: require, module, exports
// locals: e, t, s, ScrollBarHandler, <class_fields_init>, ScrollBarHandler#1, ScrollBarRef, <class_fields_init>#1, ScrollBarRef#1
function {
  let ScrollBarRef#1;
  let ScrollBarHandler#1;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ScrollBarHandler = undefined;
  e = require("valdi_core/src/ElementRef");
  t = require("valdi_core/src/utils/RenderedElementUtils");
  s = require("coreutils/src/ArrayUtils");
  let ScrollBarHandler;
  let <class_fields_init>;
  class ScrollBarHandler extends undefined { ... }
  <proto:ScrollBarHandler>.getOrCreateRef = function <atom:0>;
  <proto:ScrollBarHandler>.getLabelAtPosition = function <atom:0>;
  <proto:ScrollBarHandler>.invalidateLayout = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ScrollBarHandler>;
  ScrollBarHandler = function <atom:0>;
  // close_loc <class_fields_init>
  ScrollBarHandler#1 = function <atom:0>;
  exports.ScrollBarHandler = ScrollBarHandler#1;
  let ScrollBarRef;
  let <class_fields_init>#1;
  class ScrollBarRef extends e.ElementRef { ... }
  <proto:ScrollBarRef>.getOffsetsY = function <atom:0>;
  <proto:ScrollBarRef>.onElementCreated = function <atom:0>;
  <proto:ScrollBarRef>.onElementDestroyed = function <atom:0>;
  <proto:ScrollBarRef>.setElements = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ScrollBarRef>;
  ScrollBarRef = function <atom:0>;
  // close_loc <class_fields_init>#1
  ScrollBarRef#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/scroll/scrollbar/ScrollBarHandler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
