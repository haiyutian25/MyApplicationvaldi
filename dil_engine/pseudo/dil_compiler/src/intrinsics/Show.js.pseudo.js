// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=79B file=dil_compiler/src/intrinsics/Show
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
  this.primaryChildren = [];
  this.elseChildren = [];
  return this;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=291B file=dil_compiler/src/intrinsics/Show
// args: e
// locals: r, e#1, this, <home_object>
// closure: s
function {
  <home_object> = <special_object 4>;
  this = this;
  super["onChildrenChanged"].call(this, e);
  this.primaryChildren.length = 0;
  this.elseChildren.length = 0;
  let r;
  for (const r of e) {
    let e#1;
    e#1 = s(r);
    if (!((undefined !== e#1))) goto L_cf;
    goto L_118;
    // [栈深重同步 4 -> 3]
    this.primaryChildren.push(r);
  }
  return;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=0 bc=348B file=dil_compiler/src/intrinsics/Show
// args: e, r
// locals: i, i#1, this
// closure: o, i, t
function {
  this = this;
  if (!(o(this.props, e))) goto L_15b;
  if (!(i.isTruthy(t(this.props, e)))) goto L_d2;
  let i;
  for (const i of this.primaryChildren) {
    i.onRender(e, r);
  }
  return;
  let i#1;
  for (const i#1 of this.elseChildren) {
    if (!(i#1.canRender(e))) continue;
    i#1.renderChildren(e, r);
    return undefined;
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=310B file=dil_compiler/src/intrinsics/Show
// args: e
// locals: r, this
// closure: o, i, t
function {
  this = this;
  if (!(o(this.props, e))) goto L_135;
  if (!(i.isTruthy(t(this.props, e)))) goto L_a7;
  return {celScope: e, children: this.primaryChildren};
  let r;
  for (const r of this.elseChildren) {
    if (!(r.canRender(e))) continue;
    return {celScope: e, children: r.children};
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn t  args=2 vars=2 closure=0 cpool=0 bc=51B file=dil_compiler/src/intrinsics/Show
// args: e, r
function {
  if (!((e.getPropertyValue("when", r) == null))) goto L_32;
  e.getPropertyValue("when", r);
  return true;
}

// fn o  args=2 vars=4 closure=1 cpool=0 bc=265B file=dil_compiler/src/intrinsics/Show
// args: e, r
// locals: n, e#1
// closure: i
function {
  let n;
  n = e.getPropertyValue("visible", r);
  if (!((undefined === n))) goto L_39;
  return true;
  if (!(("boolean" == typeof n))) goto L_49;
  return n;
  if (!(("string" == typeof n))) goto L_58;
  return true;
  if (!((null !== n))) goto L_fa;
  if (!(("object" == typeof n))) goto L_fa;
  if (!(!Array.isArray(n))) goto L_fa;
  let e#1;
  e#1 = n.default;
  if (((undefined === e#1))) goto L_f9;
  return i.isTruthy(e#1);
  throw new Error("Invalid Show node: "visible" must be a boolean, breakpoint token, or breakpoint map.");
}

// fn s  args=1 vars=1 closure=2 cpool=0 bc=80B file=dil_compiler/src/intrinsics/Show
// args: e
// closure: r, n
function {
  if (!((r.unwrapDILWidgetRenderer(e) instanceof n.ShowElseWidgetRenderer))) goto L_4f;
  return e;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=dil_compiler/src/intrinsics/Show
// args: e, r
// closure: ShowWidgetRenderer
function {
  return new ShowWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=8 bc=277B file=dil_compiler/src/intrinsics/Show
// args: require, module, exports
// locals: e, r, i, n, ShowWidgetRenderer, <class_fields_init>, ShowWidgetRenderer#1, t, o, s
function {
  t = function t;
  o = function o;
  s = function s;
  let ShowWidgetRenderer#1;
  let n;
  let i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ShowWidgetRenderer = undefined;
  exports.ShowWidgetFactory = undefined;
  e = require("../DILTypes");
  r = require("../DILWidgetRendererUnwrap");
  i = require("../utils/Truthy");
  n = require("./ShowElse");
  let ShowWidgetRenderer;
  let <class_fields_init>;
  class ShowWidgetRenderer extends e.ADILWidgetRendererInternal { ... }
  <proto:ShowWidgetRenderer>.onChildrenChanged = function <atom:0>;
  <proto:ShowWidgetRenderer>.onRender = function <atom:0>;
  <proto:ShowWidgetRenderer>.getDILTransparentWidgetChildren = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ShowWidgetRenderer>;
  ShowWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  ShowWidgetRenderer#1 = function <atom:0>;
  exports.ShowWidgetRenderer = ShowWidgetRenderer#1;
  exports.ShowWidgetFactory = {properties: ["when", "visible"], create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/intrinsics/Show
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
