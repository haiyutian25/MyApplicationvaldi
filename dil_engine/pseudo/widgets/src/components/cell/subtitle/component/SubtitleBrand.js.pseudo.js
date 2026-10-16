// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=458B file=widgets/src/components/cell/subtitle/component/SubtitleBrand
// locals: this
// closure: e, n, t, r, i
function {
  this = this;
  e.beginComponent(n.SubtitleText, t, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  e.setViewModelProperty("font", r.TextStyleFont.CAPTION);
  e.setViewModelProperty("color", i.SemanticColor.Text.PRIMARY);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/cell/subtitle/component/SubtitleBrand
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=292B file=widgets/src/components/cell/subtitle/component/SubtitleBrand
// args: require, module, exports
// locals: e, t, o, r, i, n, SubtitleBrand, <class_fields_init>, SubtitleBrand#1
function {
  let SubtitleBrand#1;
  let n;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubtitleBrand = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "kq1-aJPRC7dVeaLz");
  o = require("valdi_core/src/Component");
  r = require("widgets/src/styles/TextStyleFont");
  i = require("../../../../styles/semanticColors");
  n = require("./SubtitleText");
  let SubtitleBrand;
  let <class_fields_init>;
  class SubtitleBrand extends o.Component { ... }
  <proto:SubtitleBrand>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubtitleBrand>;
  SubtitleBrand = function <atom:0>;
  // close_loc <class_fields_init>
  SubtitleBrand#1 = function <atom:0>;
  exports.SubtitleBrand = SubtitleBrand#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/cell/subtitle/component/SubtitleBrand
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
