// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=dil_compiler/src/DILNodePath
// args: t, e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.path = t;
  this.widgetPathId = e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=18B file=dil_compiler/src/DILNodePath
// closure: DILNodePath
function {
  return new DILNodePath("root", "root");
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=169B file=dil_compiler/src/DILNodePath
// args: t
// locals: this
// closure: DILNodePath
function {
  this = this;
  return new DILNodePath("".concat(this.path, ".children[", t, "]"), "".concat(this.widgetPathId, ".", t));
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=284B file=dil_compiler/src/DILNodePath
// args: t, e
// locals: h, r, this
// closure: DILNodePath
function {
  this = this;
  let r;
  let h;
  if (!((undefined === e))) goto L_10;
  goto L_3f;
  // [栈深重同步 1 -> 0]
  h = "[".concat(e, "]");
  if (!((undefined === e))) goto L_48;
  goto L_74;
  // [栈深重同步 1 -> 0]
  r = "".concat(t, ".", e);
  return new DILNodePath("".concat(this.path, ".", t, h), "".concat(this.widgetPathId, ".", r));
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=dil_compiler/src/DILNodePath
// locals: this
function {
  this = this;
  return "".concat(this.path, ".children");   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_compiler/src/DILNodePath
// locals: this
function {
  this = this;
  return this.path;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_compiler/src/DILNodePath
// locals: this
function {
  this = this;
  return this.widgetPathId;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=7 bc=160B file=dil_compiler/src/DILNodePath
// args: require, module, exports
// locals: DILNodePath, <class_fields_init>, DILNodePath#1
function {
  let DILNodePath#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILNodePath = undefined;
  let DILNodePath;
  let <class_fields_init>;
  class DILNodePath extends undefined { ... }
  function <atom:0>.root = function <atom:0>;
  <proto:DILNodePath>.child = function <atom:0>;
  <proto:DILNodePath>.renderedProp = function <atom:0>;
  <proto:DILNodePath>.children = function <atom:0>;
  <proto:DILNodePath>.toString = function <atom:0>;
  <proto:DILNodePath>.toWidgetPathId = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILNodePath>;
  DILNodePath = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILNodePath
  DILNodePath#1 = function <atom:0>;
  exports.DILNodePath = DILNodePath#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILNodePath
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
