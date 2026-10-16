// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=80B file=widgets/src/components/refresh/DataSyncingBar
// args: e
// closure: this
function {
  this.setState({width: e.width});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=254B file=widgets/src/components/refresh/DataSyncingBar
// closure: this, n
function {
  this.scrollProgress = (this.scrollProgress + n);
  this.scrollViewHandler.scrollTo(this.scrollProgress, 0, false);
  this.disposable = this.setTimeoutDisposable(this.scroll, 10);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=174B file=widgets/src/components/refresh/DataSyncingBar
// locals: this, this.active_func, new.target, arguments
// closure: n, <class_fields_init>, a
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
  this.state = {width: 0};
  this.disposable = null;
  this.scrollProgress = 0;
  this.scrollViewHandler = new a.ScrollViewHandler();
  this.setWidth = function <atom:0>;
  this.scroll = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=85B file=widgets/src/components/refresh/DataSyncingBar
// locals: this
function {
  this = this;
  this.disposable = this.setTimeoutDisposable(this.scroll, 5);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=widgets/src/components/refresh/DataSyncingBar
// locals: this
function {
  this = this;
  if (!(this.disposable)) goto L_50;
  clearTimeout(this.disposable);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=756B file=widgets/src/components/refresh/DataSyncingBar
// locals: this
// closure: e, t, d, r, c
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.scrollViewHandler);
  e.setAttributeStyle("style", d.bar);
  e.setAttribute("showsHorizontalScrollIndicator", false);
  e.setAttribute("bounces", false);
  e.setAttribute("scrollEnabled", false);
  e.setAttributeFunction("onLayout", this.setWidth);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", d.gradient);
  e.setAttributeNumber("width", this.getMaxWidth());
  e.setAttributeString("background", c);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=widgets/src/components/refresh/DataSyncingBar
// locals: this
function {
  this = this;
  return (4 * this.state.width);
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=10 bc=1605B file=widgets/src/components/refresh/DataSyncingBar
// args: require, module, exports
// locals: e, t, r, s, i, o, l, a, n, c, DataSyncingBar, <class_fields_init>, DataSyncingBar#1, d
function {
  let d;
  let DataSyncingBar#1;
  let c;
  let n;
  let a;
  let l;
  let o;
  let i;
  let s;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DataSyncingBar = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("scroll", ["horizontal", true, "circularRatio", 2], "CS5t8DkrrXXFZqWB");
  r = e.makeNodePrototype("view", undefined, "jyYY6mjNNkqzmXvF");
  s = require("valdi_core/src/Component");
  i = require("valdi_core/src/Style");
  o = require("widgets/src/styles/gradients");
  l = require("widgets/src/styles/semanticColorsGen");
  a = require("../scroll/ScrollViewHandler");
  n = 10;
  c = o.linearGradient([[l.SemanticColor.Base.APP_YELLOW, 0], [l.SemanticColor.Base.APP_YELLOW, 0.225], [l.SemanticColor.Flat.PURE_WHITE, (1 / 4)], [l.SemanticColor.Brand.PRIMARY, 0.425], [l.SemanticColor.Base.APP_YELLOW, 0.5], [l.SemanticColor.Base.APP_YELLOW, 0.725], [l.SemanticColor.Flat.PURE_WHITE, (3 / 4)], [l.SemanticColor.Brand.PRIMARY, 0.925], [l.SemanticColor.Base.APP_YELLOW, 1]], o.GradientDirection.LeftToRight);
  let DataSyncingBar;
  let <class_fields_init>;
  class DataSyncingBar extends s.StatefulComponent { ... }
  <proto:DataSyncingBar>.onCreate = function <atom:0>;
  <proto:DataSyncingBar>.onDestroy = function <atom:0>;
  <proto:DataSyncingBar>.onRender = function <atom:0>;
  <proto:DataSyncingBar>.getMaxWidth = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DataSyncingBar>;
  DataSyncingBar = function <atom:0>;
  // close_loc <class_fields_init>
  DataSyncingBar#1 = function <atom:0>;
  exports.DataSyncingBar = DataSyncingBar#1;
  d = {bar: new i.Style({height: "100%"}), gradient: new i.Style({height: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/refresh/DataSyncingBar
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
