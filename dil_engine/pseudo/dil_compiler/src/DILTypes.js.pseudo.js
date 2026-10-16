// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=72B file=dil_compiler/src/DILTypes
// args: n
// locals: this
// closure: <class_fields_init>, e, t
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.props = n;
  this.name = "Unknown";
  this.children = e;
  t = <t_new>;
  this.valdiComponentKeyNamespace = (t++);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_compiler/src/DILTypes
function {
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=dil_compiler/src/DILTypes
// args: e
// locals: this
function {
  this = this;
  this.children = e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=114B file=dil_compiler/src/DILTypes
// args: e
// locals: this
function {
  this = this;
  if (!((this.props.keyProperty == null))) goto L_4c;
  this.props.keyProperty;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.getValue(e);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=156B file=dil_compiler/src/DILTypes
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.getKey(e);
  if ((("string" == typeof t))) goto L_44;
  if (!(("number" == typeof t))) goto L_9b;
  return "".concat(this.valdiComponentKeyNamespace, ":", String(t));   // tail call
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=5 bc=152B file=dil_compiler/src/DILTypes
// args: require, module, exports
// locals: e, t, ADILWidgetRendererInternal, <class_fields_init>, ADILWidgetRendererInternal#1
function {
  let ADILWidgetRendererInternal#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ADILWidgetRendererInternal = undefined;
  e = [];
  t = 0;
  let ADILWidgetRendererInternal;
  let <class_fields_init>;
  class ADILWidgetRendererInternal extends undefined { ... }
  <proto:ADILWidgetRendererInternal>.onPropsChanged = function <atom:0>;
  <proto:ADILWidgetRendererInternal>.onChildrenChanged = function <atom:0>;
  <proto:ADILWidgetRendererInternal>.getKey = function <atom:0>;
  <proto:ADILWidgetRendererInternal>.getValdiComponentKey = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ADILWidgetRendererInternal>;
  ADILWidgetRendererInternal = function <atom:0>;
  // close_loc <class_fields_init>
  ADILWidgetRendererInternal#1 = function <atom:0>;
  exports.ADILWidgetRendererInternal = ADILWidgetRendererInternal#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILTypes
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
