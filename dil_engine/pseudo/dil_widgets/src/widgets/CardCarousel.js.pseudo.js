// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_widgets/src/widgets/CardCarousel
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=978B file=dil_widgets/src/widgets/CardCarousel
// locals: this
// closure: e, r, o
function {
  this = this;
  e.beginComponent(r.BaseCarousel, o, undefined, undefined);
  e.setViewModelProperty("bleed", true);
  e.setViewModelProperty("containerGutter", this.viewModel.containerGutter);
  e.setViewModelProperty("flush", true);
  e.setViewModelProperty("gap", this.viewModel.gap);
  e.setViewModelProperty("onClick", this.viewModel.onClick);
  e.setViewModelProperty("onClickAction", this.viewModel.onClickAction);
  e.setViewModelProperty("scrollable", true);
  e.setViewModelProperty("style", this.viewModel.style);
  e.setViewModelProperty("theme", this.viewModel.theme);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/CardCarousel
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

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=341B file=dil_widgets/src/widgets/CardCarousel
// args: require, module, exports
// locals: e, o, t, r, CardCarousel, <class_fields_init>, CardCarousel#1
function {
  let CardCarousel#1;
  let r;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CardCarousel = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(["scrollableContentGutterMode", "scrollable-margin"], "KfT5HaMQOm7YHigt");
  t = require("dil_core/src/DILComponent");
  r = require("./BaseCarousel");
  let CardCarousel;
  let <class_fields_init>;
  class CardCarousel extends t.DILComponent { ... }
  <proto:CardCarousel>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CardCarousel>;
  CardCarousel = function <atom:0>;
  // close_loc <class_fields_init>
  CardCarousel#1 = function <atom:0>;
  exports.CardCarousel = CardCarousel#1;
  // append([], 0, t.DIL_COMPONENT_PROPERTIES)
  [][t.DIL_COMPONENT_PROPERTIES] = "gap";
  ("gap" ++);
  CardCarousel#1.properties = [];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/CardCarousel
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
