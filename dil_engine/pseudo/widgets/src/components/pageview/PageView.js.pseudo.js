// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=434B file=widgets/src/components/pageview/PageView
// args: e
// locals: t, o, i
// closure: this
function {
  let i;
  let o;
  let t;
  t = this.state.selectedPageIndex;
  o = (this.contentScrollViewHandler.getContentWidth() / this.pages.length);
  i = (this.contentScrollViewHandler.scrollX / o);
  this.setStateAnimated({selectedPageIndex: i}, {duration: 0.2});
  this.onPageUpdate((this.state.selectedPageIndex - t));
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=199B file=widgets/src/components/pageview/PageView
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, n
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
  this.state = {selectedPageIndex: 0};
  this.contentScrollViewHandler = new n.ScrollViewHandler();
  this.dotIndicatorsScrollViewHandler = new n.ScrollViewHandler();
  this.firstVisibleDotIndex = 0;
  this.onScrollEnd = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=widgets/src/components/pageview/PageView
// locals: this
function {
  this = this;
  return this.viewModel.items;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=76B file=widgets/src/components/pageview/PageView
// locals: this
function {
  this = this;
  if (!((this.viewModel.maxDots == null))) goto L_4b;
  this.viewModel.maxDots;
  return 5;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=774B file=widgets/src/components/pageview/PageView
// args: e
// locals: t, o, i, this
// closure: r
function {
  this = this;
  let i;
  let o;
  let t;
  if (!((this.state.selectedPageIndex >= this.firstVisibleDotIndex))) goto L_103;
  if (((this.state.selectedPageIndex <= ((this.firstVisibleDotIndex + this.maxDots) - 1)))) goto L_170;
  if (!(!r.isDefined(this.dotIndicatorsScrollViewHandler.scrollViewFrame))) goto L_173;
  return;
  t = this.dotIndicatorsScrollViewHandler.scrollX;
  o = this.dotIndicatorsScrollViewHandler.scrollY;
  i = (this.dotIndicatorsScrollViewHandler.scrollViewFrame.width / this.maxDots);
  this.dotIndicatorsScrollViewHandler.scrollTo((t + (i * e)), o, true);
  this.firstVisibleDotIndex = (this.firstVisibleDotIndex + e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=156B file=widgets/src/components/pageview/PageView
// args: t
// closure: e, o, this
function {
  e.beginRender(o, undefined);
  this.viewModel.pageRenderFn(t);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=1 bc=1044B file=widgets/src/components/pageview/PageView
// locals: this
// closure: e, o, t, d, i, a
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.contentScrollViewHandler);
  e.setAttribute("pagingEnabled", true);
  e.setAttribute("horizontal", true);
  e.setAttribute("showsHorizontalScrollIndicator", false);
  e.setAttributeFunction("onScrollEnd", this.onScrollEnd);
  this.pages.map(function <atom:0>);
  e.endRender();
  e.beginComponent(d.DotsIndicator, i, undefined, undefined);
  e.setViewModelProperty("pageCount", this.pages.length);
  e.setViewModelProperty("currentPageIndex", this.state.selectedPageIndex);
  e.setViewModelProperty("maxDots", this.maxDots);
  if (!((this.viewModel.dotsWidth == null))) goto L_399;
  this.viewModel.dotsWidth;
  e.setViewModelProperty("dotsWidth", a);
  e.setViewModelProperty("scrollViewHandler", this.dotIndicatorsScrollViewHandler);
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=5 bc=464B file=widgets/src/components/pageview/PageView
// args: require, module, exports
// locals: e, t, o, i, s, r, n, d, l, a, PageView, <class_fields_init>, PageView#1
function {
  let PageView#1;
  let a;
  let l;
  let d;
  let n;
  let r;
  let s;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PageView = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("scroll", undefined, "pWtcncfNfNG_9K2J");
  o = e.makeNodePrototype("layout", ["width", "100%", "alignItems", "center"], "oNUJIktCgU-B9TbA");
  i = e.makeComponentPrototype(undefined, "_I5KCgAJM7BFDNIR");
  s = require("valdi_core/src/Component");
  r = require("foundation/src/isDefined");
  n = require("widgets/src/components/scroll/ScrollViewHandler");
  d = require("./DotsIndicator");
  l = 5;
  a = "40%";
  let PageView;
  let <class_fields_init>;
  class PageView extends s.StatefulComponent { ... }
  <proto:PageView>.pages = function <atom:0>;
  <proto:PageView>.maxDots = function <atom:0>;
  <proto:PageView>.onPageUpdate = function <atom:0>;
  <proto:PageView>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PageView>;
  PageView = function <atom:0>;
  // close_loc <class_fields_init>
  PageView#1 = function <atom:0>;
  exports.PageView = PageView#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/pageview/PageView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
