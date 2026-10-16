// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=83B file=widgets/src/components/grid/GridView
// closure: this, u
function {
  this.setState({contentArea: u.calcContentArea()});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=191B file=widgets/src/components/grid/GridView
// locals: this, this.active_func, new.target, arguments
// closure: u, <class_fields_init>, h
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
  this.defaultGridRowStyle = new h.Style({flexDirection: "row", justifyContent: "space-evenly"});
  this.state = {contentArea: u.calcContentArea()};
  this.updateLayoutParams = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=186B file=widgets/src/components/grid/GridView
// locals: e, this
// closure: l
function {
  this = this;
  let e;
  e = l.Device.observeDisplayInsetChange(this.updateLayoutParams);
  this.registerDisposable(e.cancel);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=81B file=widgets/src/components/grid/GridView
// args: e
// closure: this, r
function {
  if (!((this.context.onLayoutGridRow == null))) goto L_4b;
  this.context.onLayoutGridRow;
  this.context;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>, e, r);
}

// fn <atom:0>  args=2 vars=3 closure=7 cpool=0 bc=580B file=widgets/src/components/grid/GridView
// args: t, i
// locals: s
// closure: d, r, e, o, this, n, a
function {
  let s;
  s = ((d * r) + i);
  e.beginRender(o, undefined);
  if (!((this.viewModel.overrideGridItemWidth == null))) goto L_ad;
  this.viewModel.overrideGridItemWidth;
  e.setAttribute("width", n);
  if (!(this.viewModel.disableLazyLayout)) goto L_124;
  goto L_127;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("aspectRatio", a);
  e.setAttributeNumber("borderRadius", 13);
  e.setAttribute("lazyLayout", !this.viewModel.disableLazyLayout);
  this.context.renderItem(t, 13, s);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=8 cpool=2 bc=438B file=widgets/src/components/grid/GridView
// args: t, r
// closure: this, d, e, o, n, a, i, s
function {
  e.beginRender(i, undefined);
  if (!((this.viewModel.overrideGridRowStyle == null))) goto L_bf;
  this.viewModel.overrideGridRowStyle;
  e.setAttributeStyle("style", this.defaultGridRowStyle);
  e.setAttributeNumber("marginBottom", (this.viewModel.gridWidth * s));
  e.setAttributeFunction("onLayout", function <atom:0>);
  t.forEach(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=6 cpool=3 bc=1165B file=widgets/src/components/grid/GridView
// locals: d, s, n, a, this
// closure: e, o, i, u, t, r
function {
  this = this;
  let a;
  let n;
  let s;
  let d;
  if (!((this.viewModel.itemsPerRow == null))) goto L_59;
  this.viewModel.itemsPerRow;
  d = 3;
  s = 0.026;
  n = u.toPctStr(((1 - ((d + 1) * s)) / d));
  if (!((this.viewModel.overrideAspectRatio == null))) goto L_e1;
  this.viewModel.overrideAspectRatio;
  a = (112 / 162);
  e.beginRender(t, undefined);
  e.setAttributeNumber("paddingTop", (this.viewModel.gridWidth * s));
  e.setAttribute("showsVerticalScrollIndicator", false);
  e.setAttributeFunction("onViewCreate", this.context.onGridViewCreated);
  if (!((this.viewModel.onRenderHeader == null))) goto L_270;
  this.viewModel.onRenderHeader;
  this.viewModel;
  goto L_273;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  u.splitInChunks(this.viewModel.items, d).forEach(function <atom:0>);
  if (!((this.viewModel.onRenderFooter == null))) goto L_354;
  this.viewModel.onRenderFooter;
  this.viewModel;
  goto L_357;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  e.beginRender(r, undefined);
  e.setAttributeNumber("height", ((0.15 * this.state.contentArea) + this.viewModel.deviceDisplayBottomInset));
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=0 bc=260B file=widgets/src/components/grid/GridView
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, h, c
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
  this.spinnerStyle = new h.Style({backgroundColor: "lightblue", width: 38, height: 38, marginLeft: "auto", marginRight: "auto", marginTop: 50, color: c.SemanticColor.Icon.PRIMARY});
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=1089B file=widgets/src/components/grid/GridView
// locals: this
// closure: e, GridView, d, s, n
function {
  this = this;
  if (!(this.viewModel.items.length)) goto L_34a;
  e.beginComponent(GridView, d, undefined, undefined);
  if ((e.hasContext())) goto L_ef;
  e.setContext(this.context);
  e.setViewModelProperty("items", this.viewModel.items);
  e.setViewModelProperty("onRenderHeader", this.viewModel.onRenderHeader);
  e.setViewModelProperty("onRenderFooter", this.viewModel.onRenderFooter);
  e.setViewModelProperty("gridWidth", this.viewModel.gridWidth);
  e.setViewModelProperty("deviceDisplayBottomInset", this.viewModel.deviceDisplayBottomInset);
  goto L_440;
  // [栈深重同步 1 -> 0]
  e.beginRender(s, undefined);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", this.spinnerStyle);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=5 bc=800B file=widgets/src/components/grid/GridView
// args: require, module, exports
// locals: e, t, i, o, r, d, s, n, a, l, h, c, u, p, GridView, <class_fields_init>, GridView#1, GridViewWrapper, <class_fields_init>#1, GridViewWrapper#1
function {
  let GridViewWrapper#1;
  let GridView#1;
  let p;
  let u;
  let c;
  let h;
  let l;
  let a;
  let n;
  let s;
  let d;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.GridView = undefined;
  exports.GridViewWrapper = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("scroll", ["width", "100%", "height", "100%", "paddingLeft", 1, "paddingRight", 1], "IzoyKSCtVZ3ZCh1I");
  i = e.makeNodePrototype("layout", undefined, "-kJydkblk0PNgMlT");
  o = e.makeNodePrototype("view", undefined, "2N9uLGXQUEQSjsgE");
  r = e.makeNodePrototype("layout", undefined, "PyijMYYDyRKnQhlx");
  d = e.makeComponentPrototype(undefined, "geQyddVzKxJcaswn");
  s = e.makeNodePrototype("layout", ["width", "100%", "height", "100%"], "_ss27YdIP71VX9Pf");
  n = e.makeNodePrototype("spinner", undefined, "PKdaXURRTuMrjOvs");
  a = require("valdi_core/src/Component");
  l = require("valdi_core/src/Device");
  h = require("valdi_core/src/Style");
  c = require("widgets/src/styles/semanticColors");
  u = require("./utils");
  p = 3;
  let GridView;
  let <class_fields_init>;
  class GridView extends a.StatefulComponent { ... }
  <proto:GridView>.onCreate = function <atom:0>;
  <proto:GridView>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:GridView>;
  GridView = function <atom:0>;
  // close_loc <class_fields_init>
  GridView#1 = function <atom:0>;
  exports.GridView = GridView#1;
  let GridViewWrapper;
  let <class_fields_init>#1;
  class GridViewWrapper extends a.Component { ... }
  <proto:GridViewWrapper>.onRender = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:GridViewWrapper>;
  GridViewWrapper = function <atom:0>;
  // close_loc <class_fields_init>#1
  GridViewWrapper#1 = function <atom:0>;
  exports.GridViewWrapper = GridViewWrapper#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/grid/GridView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
