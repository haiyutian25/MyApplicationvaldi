// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=277B file=dil_compiler/src/DILPropertiesSchema
// args: e
// locals: r, t, e#1, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let r;
  this.staticPropertyNames = e;
  this.propertyByName = {};
  r = [];
  let t;
  for (const t of e) {
    let e#1;
    e#1 = "$".concat(t);
    r.push(e#1);
    this.propertyByName[t] = {name: t, isDynamic: false};
    this.propertyByName[e#1] = {name: t, isDynamic: true};
  }
  this.dynamicPropertyNames = r;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=dil_compiler/src/DILPropertiesSchema
// args: e
// locals: this
function {
  this = this;
  return this.propertyByName[e];
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=115B file=dil_compiler/src/DILPropertiesSchema
// args: require, module, exports
// locals: DILPropertiesSchema, <class_fields_init>, DILPropertiesSchema#1
function {
  let DILPropertiesSchema#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILPropertiesSchema = undefined;
  let DILPropertiesSchema;
  let <class_fields_init>;
  class DILPropertiesSchema extends undefined { ... }
  <proto:DILPropertiesSchema>.getProperty = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILPropertiesSchema>;
  DILPropertiesSchema = function <atom:0>;
  // close_loc <class_fields_init>
  DILPropertiesSchema#1 = function <atom:0>;
  exports.DILPropertiesSchema = DILPropertiesSchema#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILPropertiesSchema
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
