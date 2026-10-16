// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=dil_compiler/src/intrinsics/ShowElse
// args: e, r
function {
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=78B file=dil_compiler/src/intrinsics/ShowElse
// args: e
// locals: this
// closure: r, t
function {
  this = this;
  return r.isTruthy(t(this.props, e));   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=92B file=dil_compiler/src/intrinsics/ShowElse
// args: e, r
// locals: t, this
function {
  this = this;
  let t;
  for (const t of this.children) {
    t.onRender(e, r);
  }
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_compiler/src/intrinsics/ShowElse
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

// fn t  args=2 vars=2 closure=0 cpool=0 bc=51B file=dil_compiler/src/intrinsics/ShowElse
// args: e, r
function {
  if (!((e.getPropertyValue("when", r) == null))) goto L_32;
  e.getPropertyValue("when", r);
  return true;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=dil_compiler/src/intrinsics/ShowElse
// args: e, r
// closure: ShowElseWidgetRenderer
function {
  return new ShowElseWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=6 bc=240B file=dil_compiler/src/intrinsics/ShowElse
// args: require, module, exports
// locals: e, r, ShowElseWidgetRenderer, <class_fields_init>, ShowElseWidgetRenderer#1, t
function {
  t = function t;
  let ShowElseWidgetRenderer#1;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ShowElseWidgetRenderer = undefined;
  exports.ShowElseWidgetFactory = undefined;
  e = require("../DILTypes");
  r = require("../utils/Truthy");
  let ShowElseWidgetRenderer;
  let <class_fields_init>;
  class ShowElseWidgetRenderer extends e.ADILWidgetRendererInternal { ... }
  <proto:ShowElseWidgetRenderer>.onRender = function <atom:0>;
  <proto:ShowElseWidgetRenderer>.canRender = function <atom:0>;
  <proto:ShowElseWidgetRenderer>.renderChildren = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ShowElseWidgetRenderer>;
  ShowElseWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  ShowElseWidgetRenderer#1 = function <atom:0>;
  exports.ShowElseWidgetRenderer = ShowElseWidgetRenderer#1;
  exports.ShowElseWidgetFactory = {properties: ["when"], create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/intrinsics/ShowElse
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
