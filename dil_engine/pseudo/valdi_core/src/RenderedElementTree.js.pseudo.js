// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=91B file=valdi_core/src/RenderedElementTree
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.nativeTree = e;
  this.elements = Object.create(null);
  this.rootLoaded = false;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=223B file=valdi_core/src/RenderedElementTree
// locals: e, this
function {
  this = this;
  if (!(!this.rootLoaded)) goto L_bc;
  let e;
  e = this.nativeTree.getRootElement();
  if (!((undefined === e))) goto L_7f;
  goto L_a7;
  // [栈深重同步 2 -> 1]
  this.root = this.getElement(e);
  this.rootLoaded = true;
  return this.root;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=248B file=valdi_core/src/RenderedElementTree
// args: e
// locals: t, this
// closure: RenderedTreeElement
function {
  this = this;
  if (!(!(e in this.elements))) goto L_d3;
  let t;
  t = this.nativeTree.getElement(e);
  if (!((undefined === t))) goto L_a5;
  goto L_d2;
  // [栈深重同步 3 -> 2]
  this.elements[e] = new RenderedTreeElement(t, this, this.nativeTree);
  return this.elements[e];
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=221B file=valdi_core/src/RenderedElementTree
// locals: r
// closure: t, e, RenderedElementTree
function {
  let r;
  r = t.getValdiRuntime();
  if ((!e.isVersionAtLeast(130))) goto L_7c;
  if (!((undefined === r.NativeRenderedElementTree))) goto L_8d;
  throw new Error("RenderedElementTree is not supported by this runtime");
  return new RenderedElementTree(r.NativeRenderedElementTree.getCurrent());
}

// fn i  args=1 vars=1 closure=0 cpool=0 bc=52B file=valdi_core/src/RenderedElementTree
// args: e
function {
  throw new Error("RenderedElementTree does not support ".concat(e));
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=113B file=valdi_core/src/RenderedElementTree
// args: e, t, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.id = e;
  this.tree = t;
  this.nativeTree = r;
  this.parentLoaded = false;
  this.attributes = Object.create(null);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=375B file=valdi_core/src/RenderedElementTree
// locals: e, t, r, i, this
function {
  this = this;
  if (!((undefined === this.cachedChildren))) goto L_153;
  let t;
  let e;
  e = [];
  t = this.nativeTree.getElementChildren(this.id);
  let r;
  r = 0;
  if (!((r < t.length))) goto L_145;
  let i;
  i = this.tree.getElement(t[r]);
  if (!((undefined !== i))) goto L_139;
  e.push(i);
  r = <r_new>;
  (r++);
  goto L_a7;
  this.cachedChildren = e;
  return this.cachedChildren;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=71B file=valdi_core/src/RenderedElementTree
// args: e
// closure: this
function {
  return this.tree.getElement(e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=204B file=valdi_core/src/RenderedElementTree
// args: t, r
// locals: this
// closure: e
function {
  this = this;
  if (!(!e.isVersionAtLeast(294))) goto L_3c;
  throw new Error("RenderedElementTree child queries are not supported by this runtime");
  return this.nativeTree.getElementChildrenByAccessibilityId(this.id, t, r).map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=290B file=valdi_core/src/RenderedElementTree
// locals: e, this
function {
  this = this;
  if (!(!this.parentLoaded)) goto L_ff;
  let e;
  e = this.nativeTree.getElementParent(this.id);
  if (!((undefined === e))) goto L_a1;
  goto L_ea;
  // [栈深重同步 2 -> 1]
  this.cachedParent = this.tree.getElement(e);
  this.parentLoaded = true;
  return this.cachedParent;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=193B file=valdi_core/src/RenderedElementTree
// locals: this
function {
  this = this;
  if (!((undefined === this.cachedFrame))) goto L_9d;
  this.cachedFrame = this.nativeTree.getElementFrame(this.id);
  this.nativeTree.getElementFrame(this.id);
  return this.cachedFrame;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=226B file=valdi_core/src/RenderedElementTree
// args: e
// locals: this
function {
  this = this;
  if (((e in this.attributes))) goto L_bc;
  this.attributes[e] = this.nativeTree.getElementAttribute(this.id, e);
  this.nativeTree.getElementAttribute(this.id, e);
  return this.attributes[e];
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=258B file=valdi_core/src/RenderedElementTree
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  r = this.nativeTree.setElementAttribute(this.id, e, t);
  this.attributes[e] = this.nativeTree.getElementAttribute(this.id, e);
  return r;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=50B file=valdi_core/src/RenderedElementTree
// args: e, r
// closure: this, t
function {
  if (!(this.setAttribute(e, r))) goto L_31;
  t = true;
  true;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=1 bc=53B file=valdi_core/src/RenderedElementTree
// args: e
// locals: t, this
// closure: r
function {
  this = this;
  let t;
  t = false;
  r.enumeratePropertyList(e, function <atom:0>);
  return t;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=228B file=valdi_core/src/RenderedElementTree
// locals: this
function {
  this = this;
  if (!((undefined === this.cachedAttributeNames))) goto L_9d;
  this.cachedAttributeNames = this.nativeTree.getElementAttributeNames(this.id);
  this.nativeTree.getElementAttributeNames(this.id);
  return this.cachedAttributeNames.slice();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=9B file=valdi_core/src/RenderedElementTree
// closure: i
function {
  return i("key");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=9B file=valdi_core/src/RenderedElementTree
// closure: i
function {
  return i("tag");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=9B file=valdi_core/src/RenderedElementTree
// closure: i
function {
  return i("viewClass");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=9B file=valdi_core/src/RenderedElementTree
// closure: i
function {
  return i("parentIndex");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=9B file=valdi_core/src/RenderedElementTree
// closure: i
function {
  return i("renderer");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=9B file=valdi_core/src/RenderedElementTree
// closure: i
function {
  return i("emittingComponent");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=9B file=valdi_core/src/RenderedElementTree
// closure: i
function {
  return i("getVirtualNode");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=9B file=valdi_core/src/RenderedElementTree
// closure: i
function {
  return i("getNativeView");   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=179B file=valdi_core/src/RenderedElementTree
// locals: this
// closure: t
function {
  this = this;
  return t.getValdiRuntime().getNativeNodeForElementId(this.nativeTree.getContextId(), this.id);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=9B file=valdi_core/src/RenderedElementTree
// closure: i
function {
  return i("takeSnapshot");   // tail call
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=24 bc=348B file=valdi_core/src/RenderedElementTree
// args: require, module, exports
// locals: e, t, r, RenderedElementTree, <class_fields_init>, RenderedElementTree#1, i, RenderedTreeElement, <class_fields_init>#1, RenderedTreeElement#1
function {
  i = function i;
  let RenderedTreeElement#1;
  let RenderedElementTree#1;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RenderedElementTree = undefined;
  e = require("./CompilerIntrinsics");
  t = require("./ValdiRuntimeProvider");
  r = require("./utils/PropertyList");
  let RenderedElementTree;
  let <class_fields_init>;
  class RenderedElementTree extends undefined { ... }
  <proto:RenderedElementTree>.getRoot = function <atom:0>;
  <proto:RenderedElementTree>.getElement = function <atom:0>;
  function <atom:0>.getCurrentTree = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:RenderedElementTree>;
  RenderedElementTree = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc RenderedElementTree
  RenderedElementTree#1 = function <atom:0>;
  exports.RenderedElementTree = RenderedElementTree#1;
  let RenderedTreeElement;
  let <class_fields_init>#1;
  class RenderedTreeElement extends undefined { ... }
  <proto:RenderedTreeElement>.children = function <atom:0>;
  <proto:RenderedTreeElement>.getChildrenByAccessibilityId = function <atom:0>;
  <proto:RenderedTreeElement>.parent = function <atom:0>;
  <proto:RenderedTreeElement>.frame = function <atom:0>;
  <proto:RenderedTreeElement>.getAttribute = function <atom:0>;
  <proto:RenderedTreeElement>.setAttribute = function <atom:0>;
  <proto:RenderedTreeElement>.setAttributes = function <atom:0>;
  <proto:RenderedTreeElement>.getAttributeNames = function <atom:0>;
  <proto:RenderedTreeElement>.key = function <atom:0>;
  <proto:RenderedTreeElement>.tag = function <atom:0>;
  <proto:RenderedTreeElement>.viewClass = function <atom:0>;
  <proto:RenderedTreeElement>.parentIndex = function <atom:0>;
  <proto:RenderedTreeElement>.renderer = function <atom:0>;
  <proto:RenderedTreeElement>.emittingComponent = function <atom:0>;
  <proto:RenderedTreeElement>.getVirtualNode = function <atom:0>;
  <proto:RenderedTreeElement>.getNativeView = function <atom:0>;
  <proto:RenderedTreeElement>.getNativeNode = function <atom:0>;
  <proto:RenderedTreeElement>.takeSnapshot = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:RenderedTreeElement>;
  RenderedTreeElement = function <atom:0>;
  // close_loc <class_fields_init>#1
  RenderedTreeElement#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/RenderedElementTree
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
