// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=50B file=dil_cel/src/WidgetBinding
// args: t, e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.path = t;
  this.value = e;
  this.__celHostObject = true;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=123B file=dil_cel/src/WidgetBinding
// locals: this
function {
  this = this;
  if (((undefined === this.value))) goto L_4e;
  if (!((null === this.value))) goto L_52;
  return "";
  return String(this.value);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=44B file=dil_cel/src/WidgetBinding
// locals: this
function {
  this = this;
  return Boolean(this.value);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=373B file=dil_cel/src/WidgetBinding
// locals: t, this
function {
  this = this;
  if (!(("number" == typeof this.value))) goto L_9d;
  if (!(Number.isFinite(this.value))) goto L_9d;
  return this.value;
  if (!(("string" == typeof this.value))) goto L_174;
  if (!((this.value.trim().length > 0))) goto L_174;
  let t;
  t = Number(this.value);
  if (!(Number.isFinite(t))) goto L_174;
  return t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=59B file=dil_cel/src/WidgetBinding
// args: t
// locals: this
function {
  this = this;
  return {op: "set", path: this.path, value: t};
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=5 bc=139B file=dil_cel/src/WidgetBinding
// args: require, module, exports
// locals: DILWidgetBinding, <class_fields_init>, DILWidgetBinding#1
function {
  let DILWidgetBinding#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILWidgetBinding = undefined;
  let DILWidgetBinding;
  let <class_fields_init>;
  class DILWidgetBinding extends undefined { ... }
  <proto:DILWidgetBinding>.asString = function <atom:0>;
  <proto:DILWidgetBinding>.asBoolean = function <atom:0>;
  <proto:DILWidgetBinding>.asNumber = function <atom:0>;
  <proto:DILWidgetBinding>.createPatchState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILWidgetBinding>;
  DILWidgetBinding = function <atom:0>;
  // close_loc <class_fields_init>
  DILWidgetBinding#1 = function <atom:0>;
  exports.DILWidgetBinding = DILWidgetBinding#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_cel/src/WidgetBinding
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
