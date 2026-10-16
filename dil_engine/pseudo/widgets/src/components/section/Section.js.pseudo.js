// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=46B file=widgets/src/components/section/Section
// closure: e, this
function {
  e.renderNamedSlot("header", this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=widgets/src/components/section/Section
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=7 closure=5 cpool=2 bc=898B file=widgets/src/components/section/Section
// locals: n, d, s, l, p, c, this
// closure: e, r, o, i, t
function {
  this = this;
  let c;
  let p;
  let l;
  let s;
  let d;
  let n;
  if (((undefined === undefined))) goto L_f5;
  n = <to_object>(undefined).title;
  d = <to_object>(undefined).actionButton;
  s = <to_object>(undefined).actionButtonRenderFn;
  l = <to_object>(undefined).fullBleed;
  p = <to_object>(undefined).subtitle;
  c = <to_object>(undefined).description;
  <to_object>(undefined);
  goto L_11c;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1d;
  // [栈深重同步 1 -> 0]
  e.beginComponent(r.SectionHeader, o, undefined, undefined);
  e.setViewModelProperty("title", n);
  e.setViewModelProperty("actionButton", d);
  e.setViewModelProperty("actionButtonRenderFn", s);
  e.setViewModelProperty("subtitle", p);
  e.setViewModelProperty("description", c);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.beginComponent(i.SectionBody, t, undefined, undefined);
  e.setViewModelProperty("fullBleed", l);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/section/Section
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=330B file=widgets/src/components/section/Section
// args: require, module, exports
// locals: e, o, t, n, i, r, Section, <class_fields_init>, Section#1
function {
  let Section#1;
  let r;
  let i;
  let n;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Section = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "qgFg__h9ub28mfpp");
  t = e.makeComponentPrototype(undefined, "7W_vs4x5ILeuJjUD");
  n = require("valdi_core/src/Component");
  i = require("./SectionBody");
  r = require("./SectionHeader");
  let Section;
  let <class_fields_init>;
  class Section extends n.Component { ... }
  <proto:Section>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Section>;
  Section = function <atom:0>;
  // close_loc <class_fields_init>
  Section#1 = function <atom:0>;
  exports.Section = Section#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/section/Section
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
