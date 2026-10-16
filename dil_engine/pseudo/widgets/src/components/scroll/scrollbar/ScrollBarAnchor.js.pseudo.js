// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=290B file=widgets/src/components/scroll/scrollbar/ScrollBarAnchor
// locals: o, t, this
// closure: e, r
function {
  this = this;
  let t;
  let o;
  if (((undefined === undefined))) goto L_57;
  o = <to_object>(undefined).handler;
  t = <to_object>(undefined).label;
  <to_object>(undefined);
  goto L_7c;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  e.beginRender(r, undefined);
  e.setAttributeRef(o.getOrCreateRef(t));
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/scroll/scrollbar/ScrollBarAnchor
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
  return this;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=261B file=widgets/src/components/scroll/scrollbar/ScrollBarAnchor
// args: require, module, exports
// locals: e, r, o, ScrollBarAnchor, <class_fields_init>, ScrollBarAnchor#1
function {
  let ScrollBarAnchor#1;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ScrollBarAnchor = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = e.makeNodePrototype("layout", undefined, "QTYfJzA_bOdZTyXp");
  o = require("valdi_core/src/Component");
  let ScrollBarAnchor;
  let <class_fields_init>;
  class ScrollBarAnchor extends o.Component { ... }
  <proto:ScrollBarAnchor>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ScrollBarAnchor>;
  ScrollBarAnchor = function <atom:0>;
  // close_loc <class_fields_init>
  ScrollBarAnchor#1 = function <atom:0>;
  exports.ScrollBarAnchor = ScrollBarAnchor#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/scroll/scrollbar/ScrollBarAnchor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
