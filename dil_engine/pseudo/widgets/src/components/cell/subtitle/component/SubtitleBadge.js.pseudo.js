// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=458B file=widgets/src/components/cell/subtitle/component/SubtitleBadge
// locals: this
// closure: e, s, t, r, i
function {
  this = this;
  e.beginComponent(s.SubtitleText, t, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  e.setViewModelProperty("font", r.TextStyleFont.CAPTION_EMPHASIS);
  e.setViewModelProperty("color", i.SemanticColor.Button.PRIMARY);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/cell/subtitle/component/SubtitleBadge
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=292B file=widgets/src/components/cell/subtitle/component/SubtitleBadge
// args: require, module, exports
// locals: e, t, o, r, i, s, SubtitleBadge, <class_fields_init>, SubtitleBadge#1
function {
  let SubtitleBadge#1;
  let s;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubtitleBadge = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "zD4zb9r7iKD78OB4");
  o = require("valdi_core/src/Component");
  r = require("widgets/src/styles/TextStyleFont");
  i = require("widgets/src/styles/semanticColors");
  s = require("./SubtitleText");
  let SubtitleBadge;
  let <class_fields_init>;
  class SubtitleBadge extends o.Component { ... }
  <proto:SubtitleBadge>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubtitleBadge>;
  SubtitleBadge = function <atom:0>;
  // close_loc <class_fields_init>
  SubtitleBadge#1 = function <atom:0>;
  exports.SubtitleBadge = SubtitleBadge#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/cell/subtitle/component/SubtitleBadge
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
