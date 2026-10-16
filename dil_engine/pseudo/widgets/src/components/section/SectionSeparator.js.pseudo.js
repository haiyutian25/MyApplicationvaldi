// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=293B file=widgets/src/components/section/SectionSeparator
// locals: o, this
// closure: r, e, t
function {
  this = this;
  let o;
  if (((undefined === undefined))) goto L_7b;
  if (!((<to_object>(undefined).spacing === undefined))) goto L_77;
  <to_object>(undefined).spacing;
  o = r.Spacing.MD;
  <to_object>(undefined);
  goto L_a1;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_a;
  // [栈深重同步 1 -> 0]
  e.beginRender(t, undefined);
  e.setAttribute("height", o);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/section/SectionSeparator
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

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=273B file=widgets/src/components/section/SectionSeparator
// args: require, module, exports
// locals: e, t, o, r, SectionSeparator, <class_fields_init>, SectionSeparator#1
function {
  let SectionSeparator#1;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SectionSeparator = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "PVTv1XIk3g8pLXA0");
  o = require("valdi_core/src/Component");
  r = require("widgets/src/styles/spacing");
  let SectionSeparator;
  let <class_fields_init>;
  class SectionSeparator extends o.Component { ... }
  <proto:SectionSeparator>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SectionSeparator>;
  SectionSeparator = function <atom:0>;
  // close_loc <class_fields_init>
  SectionSeparator#1 = function <atom:0>;
  exports.SectionSeparator = SectionSeparator#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/section/SectionSeparator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
