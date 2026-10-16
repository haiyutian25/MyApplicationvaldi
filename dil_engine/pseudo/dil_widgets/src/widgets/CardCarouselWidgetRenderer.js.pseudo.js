// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/CardCarouselWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: t, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(t.CardCarousel, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(t.CardCarousel, e);
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=117B file=dil_widgets/src/widgets/CardCarouselWidgetRenderer
// args: e, t
// locals: o, this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  let o;
  super["setViewModelProperties"].call(this, e, t);
  o = r.getDILContainerGutterContext(t);
  if (!((undefined !== o))) goto L_74;
  this.setViewModelProperty("containerGutter", o);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/CardCarouselWidgetRenderer
// args: e
// closure: CardCarouselWidgetRenderer
function {
  return new CardCarouselWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=269B file=dil_widgets/src/widgets/CardCarouselWidgetRenderer
// args: require, module, exports
// locals: e, r, t, CardCarouselWidgetRenderer, <class_fields_init>, CardCarouselWidgetRenderer#1
function {
  let CardCarouselWidgetRenderer#1;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CardCarouselWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  r = require("dil_compiler/src/DILContainerGutterRenderState");
  t = require("./CardCarousel");
  let CardCarouselWidgetRenderer;
  let <class_fields_init>;
  class CardCarouselWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:CardCarouselWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CardCarouselWidgetRenderer>;
  CardCarouselWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  CardCarouselWidgetRenderer#1 = function <atom:0>;
  exports.CardCarouselWidgetFactory = {properties: t.CardCarousel.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/CardCarouselWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
