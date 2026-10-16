// fn e  args=2 vars=2 closure=0 cpool=0 bc=210B file=valdi_core/src/ComponentRef
// args: e, n
function {
  return (e.renderer.getComponentVirtualNode(e).parentIndex - n.renderer.getComponentVirtualNode(n).parentIndex);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=38B file=valdi_core/src/ComponentRef
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.componentByKey = {};
  this.componentByUniqueId = {};
  return;
}

// fn <atom:0>  args=0 vars=5 closure=1 cpool=0 bc=275B file=valdi_core/src/ComponentRef
// locals: n, t, e, n#1, this
// closure: e
function {
  this = this;
  let n;
  n = this._cachedAllComponents;
  if (!(!n)) goto L_10f;
  let t;
  t = [];
  let e;
  for (const e of this.componentByUniqueId) {
    let n#1;
    n#1 = this.componentByUniqueId[e];
    if (!(n#1)) goto L_c0;
    t.push(n#1);
  }
  <catch>;
  if (!((t.length > 1))) goto L_f8;
  t.sort(e);
  n = t;
  t;
  this._cachedAllComponents = t;
  // [栈深重同步 2 -> 0]
  return n;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=121B file=valdi_core/src/ComponentRef
// locals: e, this
function {
  this = this;
  let e;
  e = this.all();
  if (!(e.length)) goto L_78;
  if (!((e.length > 1))) goto L_72;
  throw Error("Cannot get a single component from a ref which has ".concat(e.length, " elements"));
  return e[0];
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=valdi_core/src/ComponentRef
// args: e
// locals: this
function {
  this = this;
  return this.componentByKey[e];
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=154B file=valdi_core/src/ComponentRef
// args: e, n
// locals: this
function {
  this = this;
  this._cachedAllComponents = undefined;
  this.componentByKey[n.key] = e;
  this.componentByUniqueId[n.uniqueId] = e;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=153B file=valdi_core/src/ComponentRef
// args: e, n
// locals: this
function {
  this = this;
  this._cachedAllComponents = undefined;
  delete n.key;
  this.componentByKey;
  this.componentByUniqueId;
  delete n.uniqueId;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=7 bc=150B file=valdi_core/src/ComponentRef
// args: require, module, exports
// locals: e, ComponentRef, <class_fields_init>, ComponentRef#1
function {
  e = function e;
  let ComponentRef#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ComponentRef = undefined;
  let ComponentRef;
  let <class_fields_init>;
  class ComponentRef extends undefined { ... }
  <proto:ComponentRef>.all = function <atom:0>;
  <proto:ComponentRef>.single = function <atom:0>;
  <proto:ComponentRef>.getForKey = function <atom:0>;
  <proto:ComponentRef>.onComponentDidCreate = function <atom:0>;
  <proto:ComponentRef>.onComponentWillDestroy = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ComponentRef>;
  ComponentRef = function <atom:0>;
  // close_loc <class_fields_init>
  ComponentRef#1 = function <atom:0>;
  exports.ComponentRef = ComponentRef#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/ComponentRef
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
