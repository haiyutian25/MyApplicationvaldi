// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=widgets/src/components/pageview/DotsIndicator
// locals: this
function {
  this = this;
  return this.viewModel.pageCount;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=818B file=widgets/src/components/pageview/DotsIndicator
// closure: e, t, c, o, this
function {
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", c.dotsContainer);
  e.beginRender(o, undefined);
  e.setAttributeRef(this.viewModel.scrollViewHandler);
  e.setAttribute("width", this.viewModel.dotsWidth);
  e.setAttribute("horizontal", true);
  e.setAttribute("scrollEnabled", false);
  e.setAttribute("showsHorizontalScrollIndicator", false);
  if (!((this.pageCount > this.viewModel.maxDots))) goto L_2b1;
  goto L_2b6;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("justifyContent", "center");
  this.renderDots();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=78B file=widgets/src/components/pageview/DotsIndicator
// locals: this
// closure: e, t, c, o, d
function {
  this = this;
  d.when((this.pageCount > 0), function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=0 bc=763B file=widgets/src/components/pageview/DotsIndicator
// locals: t, o, this
// closure: e, r, i, c, l
function {
  this = this;
  let t;
  t = 0;
  if (!((t < this.pageCount))) goto L_2fa;
  let o;
  o = (t === this.viewModel.currentPageIndex);
  e.beginRender(r, undefined);
  e.setAttributeString("width", ((100 / this.viewModel.maxDots) + "%"));
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", c.carouselDot);
  if (!(o)) goto L_235;
  goto L_29b;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", l.SemanticColor.Icon.TERTIARY);
  e.endRender();
  e.endRender();
  t = <t_new>;
  (t++);
  goto L_7;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/pageview/DotsIndicator
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

// fn <atom:0>  args=3 vars=17 closure=0 cpool=5 bc=638B file=widgets/src/components/pageview/DotsIndicator
// args: require, module, exports
// locals: e, t, o, r, i, n, s, d, l, a, c, DotsIndicator, <class_fields_init>, DotsIndicator#1
function {
  let DotsIndicator#1;
  let c;
  let a;
  let l;
  let d;
  let s;
  let n;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DotsIndicator = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "LBjznsphufNoq_SF");
  o = e.makeNodePrototype("scroll", undefined, "s8y6keuBgjKY9K-5");
  r = e.makeNodePrototype("layout", ["alignItems", "center"], "zhATrKR8ZT8gnPrs");
  i = e.makeNodePrototype("view", undefined, "Ny1MfxWWszl8IOiK");
  n = require("valdi_core/src/Component");
  s = require("valdi_core/src/Style");
  d = require("valdi_core/src/utils/When");
  l = require("widgets/src/styles/semanticColorsGen");
  a = 6.5;
  c = {dotsContainer: new s.Style({padding: 8, alignItems: "center"}), carouselDot: new s.Style({height: a, width: a, borderRadius: "100%"})};
  let DotsIndicator;
  let <class_fields_init>;
  class DotsIndicator extends n.Component { ... }
  <proto:DotsIndicator>.pageCount = function <atom:0>;
  <proto:DotsIndicator>.onRender = function <atom:0>;
  <proto:DotsIndicator>.renderDots = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DotsIndicator>;
  DotsIndicator = function <atom:0>;
  // close_loc <class_fields_init>
  DotsIndicator#1 = function <atom:0>;
  exports.DotsIndicator = DotsIndicator#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/pageview/DotsIndicator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
