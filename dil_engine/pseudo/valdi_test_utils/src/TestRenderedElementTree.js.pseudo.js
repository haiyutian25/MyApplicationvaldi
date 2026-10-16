// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_test_utils/src/TestRenderedElementTree
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.renderer = e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=valdi_test_utils/src/TestRenderedElementTree
// closure: this
function {
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=144B file=valdi_test_utils/src/TestRenderedElementTree
// args: e
// locals: r, n, this
// closure: t
function {
  this = this;
  let n;
  let r;
  r = t.getValdiRuntime();
  n = r.NativeRenderedElementTree;
  r.NativeRenderedElementTree = {getCurrent: function <atom:0>};
  try { // catch -> L_7a
  // gosub (finally 块) 128
  return e();
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 128
  throw <?>;
  r.NativeRenderedElementTree = n;
  // ret (finally 块) 
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=valdi_test_utils/src/TestRenderedElementTree
// locals: this
function {
  this = this;
  return this.renderer().contextId;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=255B file=valdi_test_utils/src/TestRenderedElementTree
// locals: e, this
function {
  this = this;
  let e;
  e = this.renderer().getRootVirtualNode();
  if (!((undefined !== e))) goto L_ab;
  if (!((undefined === e.element))) goto L_ab;
  e = e.children[0];
  e.children[0];
  goto L_4f;
  if (!((e == null))) goto L_b5;
  e;
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((<?>.element == null))) goto L_dd;
  <?>.element;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.id;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=117B file=valdi_test_utils/src/TestRenderedElementTree
// args: e
// locals: this
function {
  this = this;
  if (!((this.renderer().getElementForId(e) == null))) goto L_53;
  this.renderer().getElementForId(e);
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.id;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=114B file=valdi_test_utils/src/TestRenderedElementTree
// args: e
// locals: this
function {
  this = this;
  if (!((this.element(e).parent == null))) goto L_50;
  this.element(e).parent;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.id;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=valdi_test_utils/src/TestRenderedElementTree
// args: e
function {
  return e.id;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=111B file=valdi_test_utils/src/TestRenderedElementTree
// args: e
// locals: this
function {
  this = this;
  return this.element(e).children.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=46B file=valdi_test_utils/src/TestRenderedElementTree
// args: e
// closure: this, r
function {
  return (this.getElementAttribute(e, "accessibilityId") === r);
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=0 bc=242B file=valdi_test_utils/src/TestRenderedElementTree
// args: e, n
// locals: i, l
// closure: this, r, t
function {
  let l;
  let i;
  i = this.getElementFrame(e);
  l = this.getElementFrame(n);
  if (!(t)) goto L_a7;
  goto L_f0;
  // [栈深重同步 2 -> 1]
  return (r * (i.y - l.y));
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=2 bc=516B file=valdi_test_utils/src/TestRenderedElementTree
// args: t, r, n
// locals: i, t#1, r#1, this
// closure: e
function {
  this = this;
  let i;
  i = this.getElementChildren(t).filter(function <atom:0>);
  if (!((n !== e.ElementChildrenSortOrder.TreeOrder))) goto L_200;
  let r#1;
  let t#1;
  if (((n === e.ElementChildrenSortOrder.XAscending))) goto L_136;
  t#1 = (n === e.ElementChildrenSortOrder.XDescending);
  if (((n === e.ElementChildrenSortOrder.XDescending))) goto L_1c9;
  if (!((n === e.ElementChildrenSortOrder.YDescending))) goto L_1ce;
  goto L_1cf;
  // [栈深重同步 1 -> 0]
  r#1 = 1;
  i.sort(function <atom:0>);
  // close_loc r#1
  // close_loc t#1
  return i;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=valdi_test_utils/src/TestRenderedElementTree
// args: e
// locals: this
function {
  this = this;
  return this.element(e).frame;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=193B file=valdi_test_utils/src/TestRenderedElementTree
// args: e, t
// locals: r, n, i, this
function {
  this = this;
  let i;
  let n;
  let r;
  r = this.element(e);
  n = r.getAttribute(t);
  i = r.getAttribute("style");
  if (!((undefined === n))) goto L_bd;
  if (!((i == null))) goto L_99;
  i;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.attributes[t];
  return n;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=245B file=valdi_test_utils/src/TestRenderedElementTree
// args: e
// locals: t, r, this
function {
  this = this;
  let r;
  let t;
  t = this.element(e);
  r = t.getAttribute("style");
  // append([], 0, t.getAttributeNames())
  if (!((r == null))) goto L_c3;
  r;
  goto L_e4;
  if (!((undefined.attributes == null))) goto L_ea;
  undefined.attributes;
  // append([], t.getAttributeNames(), Object.keys({}))
  Object.keys({});
  // append([], 0, new Set([]))
  new Set([]);
  return [];
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=78B file=valdi_test_utils/src/TestRenderedElementTree
// args: e, t, r
// locals: this
function {
  this = this;
  return this.element(e).setAttribute(t, r);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=148B file=valdi_test_utils/src/TestRenderedElementTree
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.renderer().getElementForId(e);
  if (!((undefined === t))) goto L_90;
  throw new Error("RenderedElementTree element ".concat(e, " is no longer available"));
  return t;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=13 bc=226B file=valdi_test_utils/src/TestRenderedElementTree
// args: require, module, exports
// locals: e, t, TestRenderedElementTree, <class_fields_init>, TestRenderedElementTree#1
function {
  let TestRenderedElementTree#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TestRenderedElementTree = undefined;
  e = require("valdi_core/src/ElementChildrenSortOrder");
  t = require("valdi_core/src/ValdiRuntimeProvider");
  let TestRenderedElementTree;
  let <class_fields_init>;
  class TestRenderedElementTree extends undefined { ... }
  <proto:TestRenderedElementTree>.withCurrent = function <atom:0>;
  <proto:TestRenderedElementTree>.getContextId = function <atom:0>;
  <proto:TestRenderedElementTree>.getRootElement = function <atom:0>;
  <proto:TestRenderedElementTree>.getElement = function <atom:0>;
  <proto:TestRenderedElementTree>.getElementParent = function <atom:0>;
  <proto:TestRenderedElementTree>.getElementChildren = function <atom:0>;
  <proto:TestRenderedElementTree>.getElementChildrenByAccessibilityId = function <atom:0>;
  <proto:TestRenderedElementTree>.getElementFrame = function <atom:0>;
  <proto:TestRenderedElementTree>.getElementAttribute = function <atom:0>;
  <proto:TestRenderedElementTree>.getElementAttributeNames = function <atom:0>;
  <proto:TestRenderedElementTree>.setElementAttribute = function <atom:0>;
  <proto:TestRenderedElementTree>.element = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TestRenderedElementTree>;
  TestRenderedElementTree = function <atom:0>;
  // close_loc <class_fields_init>
  TestRenderedElementTree#1 = function <atom:0>;
  exports.TestRenderedElementTree = TestRenderedElementTree#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_test_utils/src/TestRenderedElementTree
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
