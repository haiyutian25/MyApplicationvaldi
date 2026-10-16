// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/TransitionWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: t, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(t.Transition, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(t.Transition, e);
  return this;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=162B file=dil_widgets/src/widgets/TransitionWidgetRenderer
// args: t, r
// locals: i
// closure: e
function {
  let i;
  i = t.getKey(e);
  if ((("string" == typeof i))) goto L_42;
  if (!(("number" == typeof i))) goto L_77;
  return "key:".concat(String(i));
  return "index:".concat(r);
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=117B file=dil_widgets/src/widgets/TransitionWidgetRenderer
// args: e, t
// locals: this
function {
  this = this;
  this.setViewModelProperty("childIdentities", this.children.map(function <atom:0>));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/TransitionWidgetRenderer
// args: e
// closure: TransitionWidgetRenderer
function {
  return new TransitionWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=257B file=dil_widgets/src/widgets/TransitionWidgetRenderer
// args: require, module, exports
// locals: e, t, TransitionWidgetRenderer, <class_fields_init>, TransitionWidgetRenderer#1
function {
  let TransitionWidgetRenderer#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TransitionWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  t = require("./Transition");
  let TransitionWidgetRenderer;
  let <class_fields_init>;
  class TransitionWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:TransitionWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TransitionWidgetRenderer>;
  TransitionWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  TransitionWidgetRenderer#1 = function <atom:0>;
  exports.TransitionWidgetFactory = {properties: t.Transition.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/TransitionWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
