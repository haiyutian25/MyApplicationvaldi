// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=124B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: t
// locals: this
// closure: e
function {
  this = this;
  if (!((this.props.getPropertyValue("when", t) == null))) goto L_79;
  this.props.getPropertyValue("when", t);
  return e.isTruthy(false);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=136B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  r = 0;
  if (!((r < this.children.length))) goto L_87;
  this.children[r].onRender(e, t);
  r = <r_new>;
  (r++);
  goto L_7;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t
function {
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/AnimateWidgetRenderer
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

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=131B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, i, d
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.componentRenderer = new i.DILValdiComponentRenderer(d.DILAnimatedContainer, e, false);
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=41B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: r
// closure: this, e, t
function {
  this.renderAnimateItem(r, e, t);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=1 bc=442B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t
// locals: r, i, this
// closure: f
function {
  this = this;
  let i;
  let r;
  r = this.resolveActiveChild(e, t);
  if (!((undefined === r))) goto L_38;
  return;
  i = f(r, e, this.children.indexOf(r));
  this.componentRenderer.begin(e, t, undefined, this.name);
  this.setAnimationProperties(e, t, "Animate", i);
  this.componentRenderer.setViewModelProperty("renderAnimateItem", function <atom:0>);
  this.componentRenderer.end(t);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=241B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, r
// locals: i, n, o, this
// closure: g, t
function {
  this = this;
  let i;
  i = undefined;
  let n;
  n = 0;
  if (!((n < this.children.length))) goto L_ed;
  let o;
  o = g(this.children[n]);
  if (!((undefined === o))) goto L_7a;
  throw new Error("Invalid Animate node: children must be Animate.Item nodes.");
  if (!(o.canRender(e))) goto L_e1;
  if (!((undefined === i))) goto L_b6;
  i = o;
  goto L_e1;
  // [栈深重同步 1 -> 0]
  t.reportDILWarning(r, "Animate has multiple active Animate.Item children. Rendering the first active item.");
  n = <n_new>;
  (n++);
  goto L_c;
  return i;
}

// fn <atom:0>  args=4 vars=5 closure=1 cpool=0 bc=79B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t, r, i
// locals: this
// closure: u
function {
  this = this;
  u(this.componentRenderer, this.props, e, t, r, i);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=41B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// closure: n, t, r
function {
  return n.renderChildren(t, r);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=3 cpool=1 bc=149B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t, r
// locals: i, n, this
// closure: g, f, w
function {
  this = this;
  let i;
  i = 0;
  if (!((i < this.children.length))) goto L_94;
  let n;
  n = g(this.children[i]);
  if (!((undefined === n))) goto L_72;
  throw new Error("Invalid Animate node: children must be Animate.Item nodes.");
  if (!((f(n, t, i) === e))) goto L_86;
  w(r, function <atom:0>);
  return;
  // close_loc n
  i = <i_new>;
  (i++);
  goto L_7;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=131B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, i, a
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.componentRenderer = new i.DILValdiComponentRenderer(a.DILAnimatedGroupContainer, e, false);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=42B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// closure: this, d, t
function {
  this.renderTemplateChildren(d, t);
  return;
}

// fn <atom:0>  args=2 vars=10 closure=3 cpool=1 bc=658B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t
// locals: r, i, n, o, a, d, s, this
// closure: I, A, h
function {
  this = this;
  let o;
  let n;
  let i;
  let r;
  r = I(this.props, e, "of", "AnimateGroup");
  if (!((undefined === r))) goto L_4a;
  return;
  if (!((A(this.props, e, "item") == null))) goto L_7f;
  A(this.props, e, "item");
  i = "item";
  if (!((A(this.props, e, "index") == null))) goto L_b5;
  A(this.props, e, "index");
  n = "index";
  o = [];
  let a;
  a = 0;
  if (!((a < r.length))) goto L_18b;
  let s;
  let d;
  {}[i] = r[a];
  r[a];
  {}[n] = a;
  a;
  d = e.subscopeWithValues({});
  s = this.resolveItemKey(d, i, a);
  o.push({key: s, renderItem: function <atom:0>});
  // close_loc d
  a = <a_new>;
  (a++);
  goto L_c0;
  this.componentRenderer.begin(e, t, undefined, this.name);
  h(this.componentRenderer, this.props, e, t, o);
  this.componentRenderer.end(t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=134B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// locals: r
// closure: this, e, t
function {
  let r;
  r = 0;
  if (!((r < this.children.length))) goto L_85;
  this.children[r].onRender(e, t);
  r = <r_new>;
  (r++);
  goto L_5;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=8B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t
// locals: this
// closure: w
function {
  this = this;
  w(t, function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=190B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t, r
// locals: i, this
function {
  this = this;
  let i;
  if (!((this.children[0] == null))) goto L_31;
  this.children[0];
  goto L_56;
  i = undefined.getKey(e);
  if (!((undefined === i))) goto L_8a;
  return "".concat(t, "-", r);   // tail call
  if ((("string" == typeof i))) goto L_a2;
  if (!(("number" == typeof i))) goto L_af;
  return String(i);   // tail call
  throw new Error("Invalid AnimateGroup child "$key": expected a string or number.");
}

// fn u  args=6 vars=9 closure=3 cpool=0 bc=758B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t, r, i, n, o
// locals: a, d, l
// closure: y, s, c
function {
  let l;
  let d;
  let a;
  a = y(t.getPropertyValue("initial", r));
  d = s.parseTransitionDefinition(t.getPropertyValue("enter", r));
  l = s.parseTransitionDefinition(t.getPropertyValue("exit", r));
  e.setViewModelProperty("currentAnimateItemKey", o);
  e.setViewModelProperty("dimension", c(t, r, i, n));
  e.setViewModelProperty("animateUpdates", t.getPropertyValueAsBoolean("animateUpdates", r));
  e.setViewModelProperty("enter", d);
  e.setViewModelProperty("exit", l);
  e.setViewModelProperty("hideOverflow", t.getPropertyValueAsBoolean("hideOverflow", r));
  e.setViewModelProperty("initial", a);
  e.setViewModelProperty("kind", n);
  e.setViewModelProperty("preventInitialTransition", t.getPropertyValueAsBoolean("preventInitialTransition", r));
  return;
}

// fn h  args=5 vars=11 closure=3 cpool=0 bc=1020B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t, r, i, n
// locals: o, a, d, l, p, m
// closure: y, s, c
function {
  let m;
  let p;
  let l;
  let d;
  let a;
  let o;
  o = y(t.getPropertyValue("initial", r));
  a = s.parseTransitionDefinition(t.getPropertyValue("enter", r));
  d = s.parseTransitionDefinition(t.getPropertyValue("exit", r));
  l = s.parseTransitionDefinition(t.getPropertyValue("layoutEnter", r));
  p = s.parseTransitionDefinition(t.getPropertyValue("layoutExit", r));
  m = s.parseTransitionDefinition(t.getPropertyValue("layoutMove", r));
  e.setViewModelProperty("dimension", c(t, r, i, "AnimateGroup"));
  e.setViewModelProperty("enter", a);
  e.setViewModelProperty("exit", d);
  e.setViewModelProperty("hideOverflow", t.getPropertyValueAsBoolean("hideOverflow", r));
  e.setViewModelProperty("initial", o);
  e.setViewModelProperty("items", n);
  e.setViewModelProperty("layoutEnter", l);
  e.setViewModelProperty("layoutExit", p);
  e.setViewModelProperty("layoutMove", m);
  e.setViewModelProperty("preventInitialTransition", t.getPropertyValueAsBoolean("preventInitialTransition", r));
  return;
}

// fn c  args=4 vars=5 closure=1 cpool=0 bc=182B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, r, i, n
// locals: o
// closure: t
function {
  let o;
  o = e.getPropertyValue("dimension", r);
  if (((undefined === o))) goto L_4e;
  if ((("height" === o))) goto L_4e;
  if (!(("width" === o))) goto L_5e;
  if (!((o == null))) goto L_b5;
  o;
  return "height";
  t.reportDILWarning(i, "".concat(n, " prop "dimension" only supports "width" or "height" in Valdi DIL. Falling back to "height"."));
  return "height";
}

// fn y  args=1 vars=1 closure=1 cpool=0 bc=47B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e
// closure: s
function {
  if (!((false !== e))) goto L_2e;
  return s.parseTransitionDefinition(e);   // tail call
  return;
}

// fn g  args=1 vars=1 closure=2 cpool=0 bc=47B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e
// closure: n, AnimateItemWidgetRenderer
function {
  if (!((n.unwrapDILWidgetRenderer(e) instanceof AnimateItemWidgetRenderer))) goto L_2e;
  return e;
  return;
}

// fn f  args=3 vars=4 closure=0 cpool=0 bc=143B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t, r
// locals: i
function {
  let i;
  i = e.getKey(t);
  if (!((undefined === i))) goto L_5b;
  return "Animate.Item-".concat(r);   // tail call
  if ((("string" == typeof i))) goto L_73;
  if (!(("number" == typeof i))) goto L_80;
  return String(i);   // tail call
  throw new Error("Invalid Animate.Item "key": expected a string or number.");
}

// fn I  args=4 vars=5 closure=0 cpool=0 bc=165B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t, r, i
// locals: n
function {
  let n;
  n = e.getPropertyValue(r, t);
  if (!((undefined !== n))) goto L_a4;
  if (!(!Array.isArray(n))) goto L_a0;
  throw new Error("Invalid ".concat(i, " node: "", r, "" must be an array."));
  return n;
  return;
}

// fn A  args=3 vars=5 closure=0 cpool=0 bc=161B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t, r
// locals: i, n
function {
  let n;
  let i;
  i = e.getProperty(r);
  n = e.getPropertyValueAsString(r, t);
  if (!((undefined !== i))) goto L_a0;
  if (!((undefined === n))) goto L_9c;
  throw new Error("Invalid AnimateGroup node: "".concat(r, "" must be a string."));
  return n;
  return;
}

// fn w  args=2 vars=3 closure=1 cpool=0 bc=198B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t
// locals: i
// closure: r
function {
  let i;
  i = r.DILRenderChildCounter.fromRenderState(e);
  if (!((i == null))) goto L_58;
  i;
  goto L_7c;
  undefined.pushFrame();
  try { // catch -> L_8e
  t();
  <?>;
  // gosub (finally 块) 148
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 148
  throw <?>;
  if (!((i == null))) goto L_9f;
  i;
  goto L_c3;
  undefined.popFrame();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t
// closure: AnimateWidgetRenderer
function {
  return new AnimateWidgetRenderer(e);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t
// closure: AnimateItemWidgetRenderer
function {
  return new AnimateItemWidgetRenderer(e);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: e, t
// closure: AnimateGroupWidgetRenderer
function {
  return new AnimateGroupWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=33 closure=0 cpool=25 bc=739B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// args: require, module, exports
// locals: e, t, r, i, n, o, a, d, s, l, p, m, AnimateItemWidgetRenderer, <class_fields_init>, AnimateItemWidgetRenderer#1, AnimateWidgetRenderer, <class_fields_init>#1, AnimateWidgetRenderer#1, AnimateGroupWidgetRenderer, <class_fields_init>#2, AnimateGroupWidgetRenderer#1, u, h, c, y, g, f, I, A, w
function {
  u = function u;
  h = function h;
  c = function c;
  y = function y;
  g = function g;
  f = function f;
  I = function I;
  A = function A;
  w = function w;
  let AnimateGroupWidgetRenderer#1;
  let AnimateWidgetRenderer#1;
  let AnimateItemWidgetRenderer#1;
  let m;
  let p;
  let l;
  let s;
  let d;
  let a;
  let o;
  let n;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AnimateItemWidgetRenderer = undefined;
  exports.AnimateWidgetFactory = undefined;
  exports.AnimateItemWidgetFactory = undefined;
  exports.AnimateGroupWidgetFactory = undefined;
  e = require("dil_compiler/src/utils/Truthy");
  t = require("dil_compiler/src/DILWarningRenderState");
  r = require("dil_compiler/src/DILRenderChildState");
  i = require("dil_compiler/src/DILValdiComponentRenderer");
  n = require("dil_compiler/src/DILWidgetRendererUnwrap");
  o = require("dil_compiler/src/DILTypes");
  a = require("../animation/DILAnimatedGroupContainer");
  d = require("../animation/DILAnimatedContainer");
  s = require("../animation/DILTransitionDefinition");
  l = ["dimension", "enter", "exit", "hideOverflow", "initial", "preventInitialTransition"];
  // append([], 0, l)
  [][l] = "index";
  [][("index" ++)] = "item";
  [][("item" ++)] = "layoutEnter";
  [][("layoutEnter" ++)] = "layoutExit";
  [][("layoutExit" ++)] = "layoutMove";
  [][("layoutMove" ++)] = "of";
  ("of" ++);
  p = [];
  m = ["when"];
  let AnimateItemWidgetRenderer;
  let <class_fields_init>;
  class AnimateItemWidgetRenderer extends o.ADILWidgetRendererInternal { ... }
  <proto:AnimateItemWidgetRenderer>.canRender = function <atom:0>;
  <proto:AnimateItemWidgetRenderer>.renderChildren = function <atom:0>;
  <proto:AnimateItemWidgetRenderer>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AnimateItemWidgetRenderer>;
  AnimateItemWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  AnimateItemWidgetRenderer#1 = function <atom:0>;
  exports.AnimateItemWidgetRenderer = AnimateItemWidgetRenderer#1;
  let AnimateWidgetRenderer;
  let <class_fields_init>#1;
  class AnimateWidgetRenderer extends o.ADILWidgetRendererInternal { ... }
  <proto:AnimateWidgetRenderer>.onRender = function <atom:0>;
  <proto:AnimateWidgetRenderer>.resolveActiveChild = function <atom:0>;
  <proto:AnimateWidgetRenderer>.setAnimationProperties = function <atom:0>;
  <proto:AnimateWidgetRenderer>.renderAnimateItem = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:AnimateWidgetRenderer>;
  AnimateWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  AnimateWidgetRenderer#1 = function <atom:0>;
  let AnimateGroupWidgetRenderer;
  let <class_fields_init>#2;
  class AnimateGroupWidgetRenderer extends o.ADILWidgetRendererInternal { ... }
  <proto:AnimateGroupWidgetRenderer>.onRender = function <atom:0>;
  <proto:AnimateGroupWidgetRenderer>.renderTemplateChildren = function <atom:0>;
  <proto:AnimateGroupWidgetRenderer>.resolveItemKey = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:AnimateGroupWidgetRenderer>;
  AnimateGroupWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#2
  AnimateGroupWidgetRenderer#1 = function <atom:0>;
  // append([], 0, l)
  [][l] = "animateUpdates";
  ("animateUpdates" ++);
  exports.AnimateWidgetFactory = {properties: [], create: function <atom:0>};
  exports.AnimateItemWidgetFactory = {properties: m, create: function <atom:0>};
  exports.AnimateGroupWidgetFactory = {properties: p, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/AnimateWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
