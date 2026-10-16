// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=dil_compiler/src/DILProperty
// args: t, e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.name = t;
  this.staticValue = e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=37B file=dil_compiler/src/DILProperty
// args: t
// locals: this
function {
  this = this;
  return this.staticValue;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=49B file=dil_compiler/src/DILProperty
// args: t, e, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.name = t;
  this.expression = e;
  this.diagnosticContext = r;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=338B file=dil_compiler/src/DILProperty
// args: e
// locals: r, this
// closure: t, o
function {
  this = this;
  try { // catch -> L_2f
  return this.expression(e);
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_151
  if ((("aria-label" === this.name))) goto L_89;
  if (!(("ariaLabel" === this.name))) goto L_12b;
  if (!(t.isLoggingEnabled)) goto L_127;
  console.warn("DIL accessible-name expression failed", this.diagnosticContext.propName);
  return null;
  throw o(r, this.diagnosticContext);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=49B file=dil_compiler/src/DILProperty
// args: t, e, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.name = t;
  this.expression = e;
  this.diagnosticContext = r;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=dil_compiler/src/DILProperty
// closure: e
function {
  return e;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=1 bc=12B file=dil_compiler/src/DILProperty
// args: t, e
// closure: DILActionProperty
function {
  return new DILActionProperty(t, function <atom:0>, undefined);
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=11B file=dil_compiler/src/DILProperty
// args: t, e, r
// closure: DILActionProperty
function {
  return new DILActionProperty(t, e, r);
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=222B file=dil_compiler/src/DILProperty
// args: e
// locals: i, i#1
// closure: t, r, this, o
function {
  try { // catch -> L_89
  let i;
  if (!((undefined === e))) goto L_10;
  goto L_36;
  // [栈深重同步 1 -> 0]
  i = t.subscopeWithValues(e);
  return r.scopeDILActionValueForCELScope(i, this.expression(i));
  // [栈深重同步 0 -> 1]
  i#1 = <?>;
  try { // catch -> L_dd
  if (!((undefined === this.diagnosticContext))) goto L_b7;
  throw i#1;
  throw o(i#1, this.diagnosticContext);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=5B file=dil_compiler/src/DILProperty
// args: t
// locals: this
// closure: r, o
function {
  this = this;
  return function <atom:0>;
}

// fn o  args=2 vars=2 closure=1 cpool=0 bc=201B file=dil_compiler/src/DILProperty
// args: t, e
// closure: i
function {
  null;
  e.nodeContext;
  return i.DILDiagnosticError.wrapError(t, {phase: "CEL evaluation", propName: e.propName, expression: e.expression});   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=77B file=dil_compiler/src/DILProperty
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.schema = t;
  this.propertyList = [];
  this.dynamicPropertyList = [];
  this.staticPropertyList = [];
  this.propertyByName = {};
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_compiler/src/DILProperty
// locals: this
function {
  this = this;
  return this.propertyList;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_compiler/src/DILProperty
// locals: this
function {
  this = this;
  return this.dynamicPropertyList;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_compiler/src/DILProperty
// locals: this
function {
  this = this;
  return this.staticPropertyList;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=168B file=dil_compiler/src/DILProperty
// locals: this
function {
  this = this;
  this.nodeIdProperty = undefined;
  this.keyProperty = undefined;
  this.propertyList.length = 0;
  this.dynamicPropertyList.length = 0;
  this.staticPropertyList.length = 0;
  this.propertyByName = {};
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=406B file=dil_compiler/src/DILProperty
// args: t, e
// locals: r, i, this
function {
  this = this;
  let i;
  let r;
  r = this.propertyByName[t];
  this.propertyByName[t] = e;
  if (!((undefined === r))) goto L_c9;
  this.propertyList.push(e);
  this.addTypedProperty(e);
  return;
  i = this.propertyList.indexOf(r);
  if (!((-1 !== i))) goto L_145;
  this.propertyList[i] = e;
  e;
  this.removeTypedProperty(r);
  this.addTypedProperty(e);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=289B file=dil_compiler/src/DILProperty
// args: t
// locals: e, r, this
function {
  this = this;
  let r;
  let e;
  e = this.propertyByName[t];
  if (!((undefined === e))) goto L_35;
  return;
  delete t;
  r = this.propertyList.indexOf(e);
  if (!((-1 !== r))) goto L_f7;
  this.propertyList.splice(r, 1);
  this.propertyByName;
  this.removeTypedProperty(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=dil_compiler/src/DILProperty
// args: t
// locals: this
function {
  this = this;
  return this.propertyByName[t];
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=85B file=dil_compiler/src/DILProperty
// args: t, e
// locals: this
function {
  this = this;
  if (!((this.getProperty(t) == null))) goto L_2f;
  this.getProperty(t);
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.getValue(e);
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=62B file=dil_compiler/src/DILProperty
// args: t, e
// locals: r, this
function {
  this = this;
  let r;
  r = this.getPropertyValue(t, e);
  if (!(("string" == typeof r))) goto L_3d;
  return r;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=62B file=dil_compiler/src/DILProperty
// args: t, e
// locals: r, this
function {
  this = this;
  let r;
  r = this.getPropertyValue(t, e);
  if (!(("boolean" == typeof r))) goto L_3d;
  return r;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=62B file=dil_compiler/src/DILProperty
// args: t, e
// locals: r, this
function {
  this = this;
  let r;
  r = this.getPropertyValue(t, e);
  if (!(("number" == typeof r))) goto L_3d;
  return r;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=76B file=dil_compiler/src/DILProperty
// args: t, e
// locals: r, this
function {
  this = this;
  let r;
  r = this.getPropertyValue(t, e);
  if ((("string" == typeof r))) goto L_45;
  if (!(("number" == typeof r))) goto L_4b;
  return r;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=96B file=dil_compiler/src/DILProperty
// args: t, e
// locals: r, this
function {
  this = this;
  let r;
  r = this.getPropertyValue(t, e);
  if (!(Array.isArray(r))) goto L_5f;
  return r;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=92B file=dil_compiler/src/DILProperty
// args: t, r
// locals: i, this
// closure: e
function {
  this = this;
  let i;
  i = this.getPropertyValue(t, r);
  if (!(e.isCELMap(i))) goto L_5b;
  return i;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=152B file=dil_compiler/src/DILProperty
// args: t
// locals: this
// closure: s
function {
  this = this;
  if (!(s(t))) goto L_50;
  goto L_97;
  // [栈深重同步 1 -> 0]
  this.dynamicPropertyList.push(t);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=178B file=dil_compiler/src/DILProperty
// args: t
// locals: e, r, this
// closure: s
function {
  this = this;
  let r;
  let e;
  if (!(s(t))) goto L_31;
  goto L_53;
  // [栈深重同步 1 -> 0]
  e = this.dynamicPropertyList;
  r = e.indexOf(t);
  if (!((-1 !== r))) goto L_b1;
  e.splice(r, 1);
  return;
}

// fn s  args=1 vars=1 closure=0 cpool=0 bc=37B file=dil_compiler/src/DILProperty
// args: t
function {
  return (undefined !== t.staticValue);
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=27 bc=532B file=dil_compiler/src/DILProperty
// args: require, module, exports
// locals: t, e, r, i, DILStaticProperty, <class_fields_init>, DILStaticProperty#1, DILDynamicProperty, <class_fields_init>#1, DILDynamicProperty#1, DILActionProperty, <class_fields_init>#2, DILActionProperty#1, o, DILProperties, <class_fields_init>#3, DILProperties#1, s
function {
  o = function o;
  s = function s;
  let DILProperties#1;
  let DILActionProperty#1;
  let DILDynamicProperty#1;
  let DILStaticProperty#1;
  let i;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILStaticProperty = undefined;
  exports.DILDynamicProperty = undefined;
  exports.DILActionProperty = undefined;
  exports.DILProperties = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("cel/src/CELValue");
  r = require("dil_cel/src/DILScopedState");
  i = require("./DILError");
  let DILStaticProperty;
  let <class_fields_init>;
  class DILStaticProperty extends undefined { ... }
  <proto:DILStaticProperty>.getValue = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILStaticProperty>;
  DILStaticProperty = function <atom:0>;
  // close_loc <class_fields_init>
  DILStaticProperty#1 = function <atom:0>;
  exports.DILStaticProperty = DILStaticProperty#1;
  let DILDynamicProperty;
  let <class_fields_init>#1;
  class DILDynamicProperty extends undefined { ... }
  <proto:DILDynamicProperty>.getValue = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILDynamicProperty>;
  DILDynamicProperty = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILDynamicProperty#1 = function <atom:0>;
  exports.DILDynamicProperty = DILDynamicProperty#1;
  let DILActionProperty;
  let <class_fields_init>#2;
  class DILActionProperty extends undefined { ... }
  function <atom:0>.fromStatic = function <atom:0>;
  function <atom:0>.fromExpression = function <atom:0>;
  <proto:DILActionProperty>.getValue = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:DILActionProperty>;
  DILActionProperty = function <atom:0>;
  // close_loc <class_fields_init>#2
  // close_loc DILActionProperty
  DILActionProperty#1 = function <atom:0>;
  exports.DILActionProperty = DILActionProperty#1;
  let DILProperties;
  let <class_fields_init>#3;
  class DILProperties extends undefined { ... }
  <proto:DILProperties>.properties = function <atom:0>;
  <proto:DILProperties>.dynamicProperties = function <atom:0>;
  <proto:DILProperties>.staticProperties = function <atom:0>;
  <proto:DILProperties>.clear = function <atom:0>;
  <proto:DILProperties>.setProperty = function <atom:0>;
  <proto:DILProperties>.removeProperty = function <atom:0>;
  <proto:DILProperties>.getProperty = function <atom:0>;
  <proto:DILProperties>.getPropertyValue = function <atom:0>;
  <proto:DILProperties>.getPropertyValueAsString = function <atom:0>;
  <proto:DILProperties>.getPropertyValueAsBoolean = function <atom:0>;
  <proto:DILProperties>.getPropertyValueAsNumber = function <atom:0>;
  <proto:DILProperties>.getPropertyValueAsStringOrNumber = function <atom:0>;
  <proto:DILProperties>.getPropertyValueAsArray = function <atom:0>;
  <proto:DILProperties>.getPropertyValueAsMap = function <atom:0>;
  <proto:DILProperties>.addTypedProperty = function <atom:0>;
  <proto:DILProperties>.removeTypedProperty = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:DILProperties>;
  DILProperties = function <atom:0>;
  // close_loc <class_fields_init>#3
  DILProperties#1 = function <atom:0>;
  exports.DILProperties = DILProperties#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILProperty
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
