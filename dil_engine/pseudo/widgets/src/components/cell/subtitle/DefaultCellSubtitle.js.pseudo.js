// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=9B file=widgets/src/components/cell/subtitle/DefaultCellSubtitle
// args: e
function {
  return ("string" == typeof e);
}

// fn n  args=1 vars=1 closure=0 cpool=1 bc=93B file=widgets/src/components/cell/subtitle/DefaultCellSubtitle
// args: e
function {
  if (!(Array.isArray(e))) goto L_5a;
  return Boolean(e.every(function <atom:0>));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=311B file=widgets/src/components/cell/subtitle/DefaultCellSubtitle
// closure: e, l, o, t, d, s, p
function {
  e.beginComponent(l.SubtitleText, o, undefined, undefined);
  e.setViewModelProperty("value", t);
  e.setViewModelProperty("numberOfLines", d);
  e.setViewModelProperty("color", s);
  e.setViewModelProperty("font", p);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=1 bc=3B file=widgets/src/components/cell/subtitle/DefaultCellSubtitle
// args: t
// closure: e, l, o, d, s, p
function {
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=7 closure=6 cpool=1 bc=652B file=widgets/src/components/cell/subtitle/DefaultCellSubtitle
// locals: i, d, s, u, p, m, this
// closure: e, l, o, n, r, t
function {
  this = this;
  let m;
  let p;
  let u;
  let s;
  let d;
  let i;
  if (((undefined === undefined))) goto L_d1;
  i = <to_object>(undefined).subtitle;
  d = <to_object>(undefined).numSubtitleLines;
  s = <to_object>(undefined).color;
  u = <to_object>(undefined).packing;
  p = <to_object>(undefined).font;
  <to_object>(undefined);
  goto L_f8;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1d;
  // [栈深重同步 1 -> 0]
  m = undefined;
  if (!(n(i))) goto L_107;
  goto L_117;
  // [栈深重同步 1 -> 0]
  if (!(i)) goto L_114;
  goto L_117;
  // [栈深重同步 1 -> 0]
  m = [];
  [];
  e.beginComponent(r.DelimitedCellSubtitle, t, undefined, undefined);
  e.setViewModelProperty("packing", u);
  e.setViewModelProperty("renderFunction", m.map(function <atom:0>));
  e.setViewModelProperty("children", this.viewModel.children);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/cell/subtitle/DefaultCellSubtitle
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

// fn <atom:0>  args=3 vars=13 closure=0 cpool=3 bc=334B file=widgets/src/components/cell/subtitle/DefaultCellSubtitle
// args: require, module, exports
// locals: e, t, o, i, r, l, n, DefaultCellSubtitle, <class_fields_init>, DefaultCellSubtitle#1
function {
  n = function n;
  let DefaultCellSubtitle#1;
  let l;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DefaultCellSubtitle = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "m_Qz2OHmFra-4Co8");
  o = e.makeComponentPrototype(undefined, "F_EM5mz5X61CfAoj");
  i = require("valdi_core/src/Component");
  r = require("./DelimitedCellSubtitle");
  l = require("./component/SubtitleText");
  let DefaultCellSubtitle;
  let <class_fields_init>;
  class DefaultCellSubtitle extends i.Component { ... }
  <proto:DefaultCellSubtitle>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DefaultCellSubtitle>;
  DefaultCellSubtitle = function <atom:0>;
  // close_loc <class_fields_init>
  DefaultCellSubtitle#1 = function <atom:0>;
  exports.DefaultCellSubtitle = DefaultCellSubtitle#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/cell/subtitle/DefaultCellSubtitle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
