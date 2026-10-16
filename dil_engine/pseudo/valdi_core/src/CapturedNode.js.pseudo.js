// fn <atom:0>  args=5 vars=8 closure=2 cpool=0 bc=148B file=valdi_core/src/CapturedNode
// args: e, t, n, i, d
// locals: s, r, this
// closure: <class_fields_init>, r
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let s;
  this.key = e;
  this.component = n;
  this.children = i;
  this.renderer = d;
  this.parentIndex = 0;
  s = 0;
  let r;
  for (const r of i) {
    r.parent = this;
    r.parentIndex = s;
    s = <s_new>;
    (s++);
  }
  if (!(t)) goto L_93;
  this.element = r(t, this);
  r(t, this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=125B file=valdi_core/src/CapturedNode
// locals: this
// closure: e
function {
  this = this;
  if ((this.cachedUniqueId)) goto L_59;
  this.cachedUniqueId = e.computeUniqueId(this);
  e.computeUniqueId(this);
  return this.cachedUniqueId;
}

// fn t  args=2 vars=3 closure=1 cpool=0 bc=172B file=valdi_core/src/CapturedNode
// args: e, r
// locals: n
// closure: t
function {
  let n;
  for (const n of e) {
    if (!(n.element)) goto L_7a;
    goto L_a1;
    // [栈深重同步 4 -> 3]
    t(n.children, r);
  }
  return;
}

// fn r  args=2 vars=3 closure=2 cpool=0 bc=60B file=valdi_core/src/CapturedNode
// args: e, r
// locals: n
// closure: t, CapturedRenderedElement
function {
  let n;
  n = [];
  t(r.children, n);
  return new CapturedRenderedElement(e, r, n);
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=57B file=valdi_core/src/CapturedNode
// args: e
function {
  return new Error("Cannot use ".concat(e, " on CapturedRenderedElement"));
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=60B file=valdi_core/src/CapturedNode
// args: e, t, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.data = e;
  this.virtualNode = t;
  this.children = r;
  this.parentIndex = 0;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=72B file=valdi_core/src/CapturedNode
// args: e
// locals: this
function {
  this = this;
  return this.data.attributes[e];
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=8B file=valdi_core/src/CapturedNode
// args: e, t
// closure: n
function {
  throw n("setAttribute");
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=8B file=valdi_core/src/CapturedNode
// args: e
// closure: n
function {
  throw n("setAttributes");
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/CapturedNode
// locals: this
function {
  this = this;
  return this.virtualNode;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=110B file=valdi_core/src/CapturedNode
// locals: this
function {
  this = this;
  return Object.keys(this.data.attributes);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=10B file=valdi_core/src/CapturedNode
// args: e, t
// closure: n
function {
  t(n("getNativeView"));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=12B file=valdi_core/src/CapturedNode
// closure: n
function {
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/CapturedNode
function {
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=10B file=valdi_core/src/CapturedNode
// args: e, t
// closure: n
function {
  t(n("takeSnapshot"));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=12B file=valdi_core/src/CapturedNode
// closure: n
function {
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=valdi_core/src/CapturedNode
// locals: this
function {
  this = this;
  return this.data.frame;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=171B file=valdi_core/src/CapturedNode
// locals: e, this
function {
  this = this;
  let e;
  e = this.virtualNode;
  if (!(e)) goto L_7f;
  if (!(!e.component)) goto L_7f;
  e = e.parent;
  e.parent;
  goto L_28;
  if (!((e == null))) goto L_89;
  e;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.component;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=valdi_core/src/CapturedNode
// locals: this
function {
  this = this;
  return this.virtualNode.renderer;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=valdi_core/src/CapturedNode
// locals: this
function {
  this = this;
  return this.data.id;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=valdi_core/src/CapturedNode
// locals: this
function {
  this = this;
  return this.data.tag;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=valdi_core/src/CapturedNode
// locals: this
function {
  this = this;
  return this.data.viewClass;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=valdi_core/src/CapturedNode
// locals: this
function {
  this = this;
  return this.virtualNode.key;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=107B file=valdi_core/src/CapturedNode
// locals: this
function {
  this = this;
  return [this.viewClass, this.data.attributes];
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=22 bc=319B file=valdi_core/src/CapturedNode
// args: require, module, exports
// locals: e, CapturedRenderedVirtualNode, <class_fields_init>, CapturedRenderedVirtualNode#1, t, r, n, CapturedRenderedElement, <class_fields_init>#1, CapturedRenderedElement#1
function {
  t = function t;
  r = function r;
  n = function n;
  let CapturedRenderedElement#1;
  let CapturedRenderedVirtualNode#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CapturedRenderedVirtualNode = undefined;
  exports.CapturedRenderedElement = undefined;
  e = require("./utils/RenderedVirtualNodeUtils");
  let CapturedRenderedVirtualNode;
  let <class_fields_init>;
  class CapturedRenderedVirtualNode extends undefined { ... }
  <proto:CapturedRenderedVirtualNode>.uniqueId = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CapturedRenderedVirtualNode>;
  CapturedRenderedVirtualNode = function <atom:0>;
  // close_loc <class_fields_init>
  CapturedRenderedVirtualNode#1 = function <atom:0>;
  exports.CapturedRenderedVirtualNode = CapturedRenderedVirtualNode#1;
  let CapturedRenderedElement;
  let <class_fields_init>#1;
  class CapturedRenderedElement extends undefined { ... }
  <proto:CapturedRenderedElement>.getAttribute = function <atom:0>;
  <proto:CapturedRenderedElement>.setAttribute = function <atom:0>;
  <proto:CapturedRenderedElement>.setAttributes = function <atom:0>;
  <proto:CapturedRenderedElement>.getVirtualNode = function <atom:0>;
  <proto:CapturedRenderedElement>.getAttributeNames = function <atom:0>;
  <proto:CapturedRenderedElement>.getNativeView = function <atom:0>;
  <proto:CapturedRenderedElement>.getNativeNode = function <atom:0>;
  <proto:CapturedRenderedElement>.takeSnapshot = function <atom:0>;
  <proto:CapturedRenderedElement>.frame = function <atom:0>;
  <proto:CapturedRenderedElement>.emittingComponent = function <atom:0>;
  <proto:CapturedRenderedElement>.renderer = function <atom:0>;
  <proto:CapturedRenderedElement>.id = function <atom:0>;
  <proto:CapturedRenderedElement>.tag = function <atom:0>;
  <proto:CapturedRenderedElement>.viewClass = function <atom:0>;
  <proto:CapturedRenderedElement>.key = function <atom:0>;
  <proto:CapturedRenderedElement>.toConsoleRepresentation = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:CapturedRenderedElement>;
  CapturedRenderedElement = function <atom:0>;
  // close_loc <class_fields_init>#1
  CapturedRenderedElement#1 = function <atom:0>;
  exports.CapturedRenderedElement = CapturedRenderedElement#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/CapturedNode
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
