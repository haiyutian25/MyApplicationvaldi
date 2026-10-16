// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=dil_compiler/src/DILRenderState
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.properties = e;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=99B file=dil_compiler/src/DILRenderState
// args: e, t
// locals: r, this
// closure: DILRenderState
function {
  this = this;
  let r;
  r = this.properties;
  if (!((undefined === r))) goto L_43;
  if (!((undefined === t))) goto L_36;
  return this;
  {}[e] = t;
  t;
  return new DILRenderState({});
  if (!((r[e] === t))) goto L_4e;
  return this;
  null;
  r;
  {}[e] = t;
  t;
  return new DILRenderState({});
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=dil_compiler/src/DILRenderState
// args: e
// locals: this
function {
  this = this;
  if (!((this.properties == null))) goto L_2b;
  this.properties;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>[e];
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=126B file=dil_compiler/src/DILRenderState
// args: require, module, exports
// locals: DILRenderState, <class_fields_init>, DILRenderState#1
function {
  let DILRenderState#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILRenderState = undefined;
  let DILRenderState;
  let <class_fields_init>;
  class DILRenderState extends undefined { ... }
  <proto:DILRenderState>.withProperty = function <atom:0>;
  <proto:DILRenderState>.getProperty = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILRenderState>;
  DILRenderState = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILRenderState
  DILRenderState#1 = function <atom:0>;
  exports.DILRenderState = DILRenderState#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
