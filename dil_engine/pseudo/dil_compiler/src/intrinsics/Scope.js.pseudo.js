// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=187B file=dil_compiler/src/intrinsics/Scope
// args: e, r
// locals: o, s, t, this
// closure: t
function {
  this = this;
  let s;
  let o;
  o = t(this.props, e);
  if (!((undefined === o))) goto L_36;
  return;
  s = e.subscopeWithValues(o);
  let t;
  for (const t of this.children) {
    t.onRender(s, r);
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=137B file=dil_compiler/src/intrinsics/Scope
// args: e
// locals: r, this
// closure: t
function {
  this = this;
  let r;
  r = t(this.props, e);
  if (!((undefined !== r))) goto L_88;
  return {celScope: e.subscopeWithValues(r), children: this.children};
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_compiler/src/intrinsics/Scope
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

// fn t  args=2 vars=3 closure=1 cpool=0 bc=117B file=dil_compiler/src/intrinsics/Scope
// args: r, t
// locals: o
// closure: e
function {
  let o;
  o = r.getPropertyValue("values", t);
  if (!((undefined !== o))) goto L_74;
  if (!(!e.isCELMap(o))) goto L_70;
  throw new Error("Invalid Scope node: expected "values" or "$values" prop as an object.");
  return o;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=dil_compiler/src/intrinsics/Scope
// args: e, r
// closure: ScopeWidgetRenderer
function {
  return new ScopeWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=5 bc=232B file=dil_compiler/src/intrinsics/Scope
// args: require, module, exports
// locals: e, r, ScopeWidgetRenderer, <class_fields_init>, ScopeWidgetRenderer#1, t
function {
  t = function t;
  let ScopeWidgetRenderer#1;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ScopeWidgetRenderer = undefined;
  exports.ScopeWidgetFactory = undefined;
  e = require("cel/src/CELValue");
  r = require("../DILTypes");
  let ScopeWidgetRenderer;
  let <class_fields_init>;
  class ScopeWidgetRenderer extends r.ADILWidgetRendererInternal { ... }
  <proto:ScopeWidgetRenderer>.onRender = function <atom:0>;
  <proto:ScopeWidgetRenderer>.getDILTransparentWidgetChildren = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ScopeWidgetRenderer>;
  ScopeWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  ScopeWidgetRenderer#1 = function <atom:0>;
  exports.ScopeWidgetRenderer = ScopeWidgetRenderer#1;
  exports.ScopeWidgetFactory = {properties: ["values"], create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/intrinsics/Scope
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
