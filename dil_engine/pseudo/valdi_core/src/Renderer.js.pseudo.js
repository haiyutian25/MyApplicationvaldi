// fn C  args=2 vars=3 closure=1 cpool=0 bc=101B file=valdi_core/src/Renderer
// args: e, t
// locals: n
// closure: RenderedElementBridge
function {
  let n;
  if (!(t.bridge)) goto L_4a;
  return t.bridge;
  n = new RenderedElementBridge(e, t);
  t.bridge = n;
  return n;
}

// fn f  args=2 vars=3 closure=1 cpool=0 bc=101B file=valdi_core/src/Renderer
// args: e, t
// locals: n
// closure: VirtualNodeBridge
function {
  let n;
  if (!(t.bridge)) goto L_4a;
  return t.bridge;
  n = new VirtualNodeBridge(e, t);
  t.bridge = n;
  return n;
}

// fn b  args=3 vars=4 closure=2 cpool=0 bc=211B file=valdi_core/src/Renderer
// args: e, t, n
// locals: r
// closure: b, f
function {
  if (!(t.children)) goto L_d2;
  let r;
  for (const r of t.children.children) {
    if (!(r.slot)) goto L_a0;
    goto L_cb;
    // [栈深重同步 4 -> 3]
    n.push(f(e, r));
  }
  return;
}

// fn y  args=2 vars=2 closure=0 cpool=0 bc=101B file=valdi_core/src/Renderer
// args: e, t
function {
  if ((e.delegate.getCachedElementFrame(t))) goto L_64;
  return {x: 0, y: 0, width: 0, height: 0};
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=valdi_core/src/Renderer
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.renderer = e;
  this.node = t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return this.node.key;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=279B file=valdi_core/src/Renderer
// locals: e, this
// closure: f
function {
  this = this;
  let e;
  e = this.node.parent;
  if (!(e)) goto L_9f;
  if (!(e.slot)) goto L_9f;
  e = e.parent;
  e.parent;
  goto L_49;
  if (!(e)) goto L_116;
  if (!((e !== this.renderer.nodeTree))) goto L_116;
  return f(this.renderer, e);   // tail call
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=177B file=valdi_core/src/Renderer
// locals: this
// closure: C
function {
  this = this;
  if (!(this.node.element)) goto L_b0;
  return C(this.renderer, this.node.element);   // tail call
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=173B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  if (!(this.node.component)) goto L_ac;
  return this.node.component.instance;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=87B file=valdi_core/src/Renderer
// locals: e, this
// closure: b
function {
  this = this;
  let e;
  e = [];
  b(this.renderer, this.node, e);
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return this.node.parentIndex;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=125B file=valdi_core/src/Renderer
// locals: this
// closure: l
function {
  this = this;
  if ((this.cachedUniqueId)) goto L_59;
  this.cachedUniqueId = l.computeUniqueId(this);
  l.computeUniqueId(this);
  return this.cachedUniqueId;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=valdi_core/src/Renderer
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.renderer = e;
  this.element = t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=103B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return this.element.nodePrototype.tag;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=103B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return this.element.nodePrototype.viewClass;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return this.element.id;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=103B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return this.element.virtualNode.key;
}

// fn <atom:0>  args=0 vars=5 closure=1 cpool=0 bc=315B file=valdi_core/src/Renderer
// locals: e, t, n, r, this
// closure: C
function {
  this = this;
  if (!(!this._children)) goto L_117;
  let r;
  let n;
  let t;
  let e;
  e = this.element;
  t = this.renderer;
  n = [];
  r = e.childrenHead;
  if (!(r)) goto L_109;
  n.push(C(t, r));
  r = r.next;
  r.next;
  goto L_a9;
  this._children = n;
  return this._children;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=143B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  if (!((this.element.virtualNode.parentComponent == null))) goto L_6d;
  this.element.virtualNode.parentComponent;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.instance;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=153B file=valdi_core/src/Renderer
// locals: e, this
// closure: C
function {
  this = this;
  let e;
  e = this.element.virtualNode.parentElement;
  if (!(e)) goto L_98;
  return C(this.renderer, e);   // tail call
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=76B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  if (!((this.element.parentIndex == null))) goto L_4b;
  this.element.parentIndex;
  return 0;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=107B file=valdi_core/src/Renderer
// locals: this
// closure: y
function {
  this = this;
  return y(this.renderer, this.element.id);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  this._children = undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=110B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return Object.keys(this.element.attributes);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=72B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  return this.element.attributes[e];
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=370B file=valdi_core/src/Renderer
// args: e, t
// locals: n, this
function {
  this = this;
  if (!(!this.renderer.began)) goto L_108;
  let n;
  this.renderer.doBegin();
  n = this.setAttribute(e, t);
  this.renderer.doEnd();
  return n;
  return this.renderer.setAttributeOnElement(this.element, e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=50B file=valdi_core/src/Renderer
// args: e, n
// closure: this, t
function {
  if (!(this.setAttribute(e, n))) goto L_31;
  t = true;
  true;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=321B file=valdi_core/src/Renderer
// args: e
// locals: t, t#1, this
// closure: d
function {
  this = this;
  let t#1;
  if (!(!e)) goto L_c;
  return false;
  if (!(!this.renderer.began)) goto L_111;
  let t;
  this.renderer.doBegin();
  t = this.setAttributes(e);
  this.renderer.doEnd();
  return t;
  t#1 = false;
  d.enumeratePropertyList(e, function <atom:0>);
  return t#1;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=4B file=valdi_core/src/Renderer
// args: t
// closure: e
function {
  e(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=173B file=valdi_core/src/Renderer
// args: e
// closure: this
function {
  this.renderer.delegate.getNativeView(this.element.id, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=14B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=172B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return this.renderer.delegate.getNativeNode(this.element.id);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=4B file=valdi_core/src/Renderer
// args: t
// closure: e
function {
  e(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=173B file=valdi_core/src/Renderer
// args: e
// closure: this
function {
  this.renderer.delegate.takeElementSnapshot(this.element.id, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=14B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=107B file=valdi_core/src/Renderer
// locals: this
// closure: f
function {
  this = this;
  return f(this.renderer, this.element.virtualNode);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=107B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return [this.viewClass, this.element.attributes];
}

// fn R  args=1 vars=4 closure=0 cpool=0 bc=542B file=valdi_core/src/Renderer
// args: e
// locals: t, n, n#1
function {
  let n#1;
  let t;
  t = e.element;
  if (!(t)) goto L_de;
  let n;
  n = t.nodePrototype;
  if (!(n)) goto L_d8;
  return "element ".concat(n.viewClass, " with key '", e.key, "'");
  return "root";
  n#1 = e.component;
  if (!(n#1)) goto L_1a3;
  return "component ".concat(n#1.ctr.name, " with key '", e.key, "'");   // tail call
  if (!(e.slot)) goto L_218;
  return "slot with key '".concat(e.key, "''");
  return "unknown node";
}

// fn I  args=2 vars=4 closure=0 cpool=0 bc=101B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r
function {
  let n;
  n = e.length;
  if (!((n !== t.length))) goto L_11;
  return false;
  let r;
  r = 0;
  if (!((r < n))) goto L_62;
  if (!(!Object.is(e[r], t[r]))) goto L_58;
  return false;
  r = <r_new>;
  (r++);
  goto L_16;
  return true;
}

// fn N  args=3 vars=10 closure=3 cpool=0 bc=881B file=valdi_core/src/Renderer
// args: e, t, n
// locals: i, r, e#1, o, o#1, n#1, s
// closure: N, y, r
function {
  let s;
  let o#1;
  let i;
  i = [];
  if (!(e.children)) goto L_11d;
  let r;
  r = e.children;
  let e#1;
  e#1 = 0;
  if (!((e#1 < r.insertionIndex))) goto L_11d;
  if (!((e#1 < r.children.length))) goto L_11d;
  let o;
  o = r.children[e#1];
  i.push(N(o, t, n));
  e#1 = <e#1_new>;
  (e#1++);
  goto L_5f;
  o#1 = undefined;
  if (!(e.element)) goto L_2c8;
  let n#1;
  n#1 = e.element.nodePrototype;
  null;
  e.element.attributes;
  o#1 = {id: e.element.id, tag: n#1.tag, viewClass: n#1.viewClass, attributes: {}, frame: y(t, e.element.id)};
  {id: e.element.id, tag: n#1.tag, viewClass: n#1.viewClass, attributes: {}, frame: y(t, e.element.id)};
  if (!((e.component == null))) goto L_33c;
  e.component;
  goto L_35d;
  s = new r.CapturedRenderedVirtualNode(e.key, o#1, undefined.instance, i, t);
  n(e, s);
  return s;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=13B file=valdi_core/src/Renderer
// args: e, n
// closure: t, r
function {
  if (!((e === t))) goto L_c;
  r = n;
  n;
  return;
}

// fn M  args=3 vars=5 closure=1 cpool=1 bc=134B file=valdi_core/src/Renderer
// args: e, t, n
// locals: r, i
// closure: N
function {
  let r;
  r = undefined;
  if (!(e.children)) goto L_82;
  let i;
  for (const i of e.children.children) {
    N(i, n, function <atom:0>);
  }
  return r;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=166B file=valdi_core/src/Renderer
// args: n
// closure: t, e
function {
  n = ...0;
  t.lastParameters = n;
  e.beginSlot(t);
  t.renderFunc.apply(undefined, n);
  e.endSlot(t);
  return;
}

// fn A  args=2 vars=3 closure=1 cpool=1 bc=23B file=valdi_core/src/Renderer
// args: e, t
// locals: n
// closure: p
function {
  let n;
  n = function <atom:0>;
  n[p] = t;
  return n;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return (this.beginCount > 0);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=valdi_core/src/Renderer
// args: e
// closure: this
function {
  this.onRenderComplete(e);
  return;
}

// fn <atom:0>  args=5 vars=7 closure=2 cpool=1 bc=791B file=valdi_core/src/Renderer
// args: e, t, n, r, i
// locals: e#1, this
// closure: <class_fields_init>, c
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.nodeStack = [];
  this.renderId = Symbol();
  this.nodeIdSequence = 0;
  this.hasObservers = false;
  this.elementById = {};
  this.pendingRenders = [];
  this.collectingRenderCompleteCallbacks = false;
  this.componentRerendersCount = 0;
  this.rootRendersCount = 0;
  this.beginCount = 0;
  this.observers = [];
  this.nextAnimationCancelToken = 0;
  this.eventListener = undefined;
  this.rendererTracingEnabled = false;
  this.elementAPIEnabled = false;
  this.pendingRootMove = undefined;
  this.pendingMovesByParent = new Map();
  this.pendingMoveElementIds = new Set();
  this._useTopDownMoveOrder = false;
  this.enableLog = false;
  this.logComponentsOnly = true;
  this.contextId = e;
  this.delegate = n;
  this.delegate.setRenderCompleteScheduler(function <atom:0>);
  if (!((r == null))) goto L_180;
  r;
  this._useTopDownMoveOrder = false;
  if (!(i)) goto L_1b6;
  this.rendererTracingEnabled = c.isTracingSupported();
  if (!(t)) goto L_204;
  this.allowedRootElementTypes = {};
  let e#1;
  for (const e#1 of t) {
    this.allowedRootElementTypes[e#1] = true;
  }
  this.nodeTree = {lastRenderId: this.renderId, key: "", element: undefined, children: undefined, parent: undefined, parentComponent: undefined, parentElement: undefined, parentIndex: 0};
  this.elementTree = {virtualNode: this.nodeTree, id: 0, attributes: {}, style: undefined, childrenHead: undefined, childrenDirty: true, nodePrototype: undefined, next: undefined, prev: undefined, parentIndex: undefined};
  this.nodeTree.element = this.elementTree;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=238B file=valdi_core/src/Renderer
// locals: this
// closure: t
function {
  this = this;
  if (!(!this.elementAPIEnabled)) goto L_ed;
  if (!((0 !== this.nodeIdSequence))) goto L_5f;
  throw new Error("Element API must be enabled before the first element is created");
  t.enableElementAPI(this.contextId);
  this.elementAPIEnabled = true;
  if (!(this.allowedRootElementTypes)) goto L_ec;
  this.allowedRootElementTypes = {div: true};
  {div: true};
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  this.delegate.onDestroyed();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=195B file=valdi_core/src/Renderer
// args: e
// locals: t, this
function {
  this = this;
  if (!(this.began)) goto L_2a;
  e();
  return;
  try { // catch -> L_61
  this.doBegin();
  e();
  <?>;
  // gosub (finally 块) 155
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_95
  this.onUncaughtError("Got an error while rendering batch update", t);
  throw t;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 155
  throw <?>;
  this.doEnd();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=105B file=valdi_core/src/Renderer
// closure: this, e, n, t
function {
  try { // catch -> L_3b
  this.beginAnimation(e, n);
  t();
  <?>;
  // gosub (finally 块) 65
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 65
  throw <?>;
  this.endAnimation();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=1 bc=134B file=valdi_core/src/Renderer
// args: e, t
// locals: n, this
function {
  this = this;
  let n;
  this.validateAnimationOptions(e);
  this.nextAnimationCancelToken = (this.nextAnimationCancelToken ++);
  n = (this.nextAnimationCancelToken ++);
  this.batchUpdates(function <atom:0>);
  return n;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=72B file=valdi_core/src/Renderer
// closure: this, e
function {
  this.delegate.onAnimationCancel(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=42B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  this.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=564B file=valdi_core/src/Renderer
// args: e
// locals: t, n, r, this
function {
  this = this;
  let r;
  let n;
  let t;
  if (!(this.pendingMainThreadCallback)) goto L_3e;
  throw new Error("Main-thread callbacks cannot be nested");
  t = this.getCurrentNode();
  n = undefined;
  r = t.mainThreadCallbackStateHead;
  if (!(r)) goto L_13a;
  if (((r.descriptor !== e))) goto L_104;
  if (!((r.lastRenderId === this.renderId))) goto L_13a;
  n = r;
  r;
  r = r.next;
  r.next;
  goto L_8b;
  if (!(r)) goto L_171;
  r.lastRenderId = this.renderId;
  goto L_225;
  // [栈深重同步 1 -> 0]
  r = {descriptor: e, callback: this.delegate.createMainThreadCallback(e), captures: [], lastRenderId: this.renderId, next: undefined};
  {descriptor: e, callback: this.delegate.createMainThreadCallback(e), captures: [], lastRenderId: this.renderId, next: undefined};
  if (!(n)) goto L_215;
  n.next = r;
  goto L_225;
  // [栈深重同步 1 -> 0]
  t.mainThreadCallbackStateHead = r;
  r;
  this.pendingMainThreadCallback = r;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=424B file=valdi_core/src/Renderer
// args: e, t
// locals: n, this
function {
  this = this;
  let n;
  n = this.pendingMainThreadCallback;
  if (!(!n)) goto L_3d;
  throw new Error("setMainThreadCallbackClosureArg() called without beginMainThreadCallback()");
  if (((e < 0))) goto L_8b;
  if (!((e >= n.descriptor.captureCount))) goto L_e5;
  throw new Error("Invalid main-thread callback closure argument ".concat(e.toString()));
  if (!((n.captures[e] !== t))) goto L_1a7;
  n.captures[e] = t;
  this.delegate.setMainThreadCallbackClosureArg(n.callback, e, t);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=109B file=valdi_core/src/Renderer
// locals: e, this
function {
  this = this;
  let e;
  e = this.pendingMainThreadCallback;
  if (!(!e)) goto L_3d;
  throw new Error("endMainThreadCallback() called without beginMainThreadCallback()");
  this.pendingMainThreadCallback = undefined;
  return e.callback;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=119B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  if (!((undefined === e.duration))) goto L_50;
  goto L_76;
  // [栈深重同步 1 -> 0]
  this.validateBasicAnimationOptions(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=325B file=valdi_core/src/Renderer
// args: e
function {
  if ((!e.stiffness)) goto L_4b;
  if (!((e.stiffness < 0))) goto L_a2;
  throw new Error("Spring animation damping must be greater than 0. Provided: ".concat(e.stiffness));
  if ((!e.damping)) goto L_ed;
  if (!((e.damping < 0))) goto L_144;
  throw new Error("Spring animation damping must be greater than 0. Provided: ".concat(e.damping));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=124B file=valdi_core/src/Renderer
// args: e
function {
  if (!((e.duration <= 0))) goto L_7b;
  throw new Error("Animation duration must be greater than 0. Provided: ".concat(e.duration));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=547B file=valdi_core/src/Renderer
// locals: this
// closure: v
function {
  this = this;
  if (!(this.currentNode)) goto L_32;
  throw Error("Already rendering");
  this.renderId = Symbol();
  this.beginCount = (this.beginCount ++);
  if (!((1 === this.beginCount))) goto L_222;
  this.parent = v;
  v = this;
  this;
  this.delegate.onRenderStart();
  if (!(this.eventListener)) goto L_15f;
  this.eventListener.onRenderBegin();
  if ((this.hasObservers)) goto L_222;
  this.hasObservers = true;
  this.delegate.registerVisibilityObserver(this.elementsVisibilityChanged.bind(this));
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=199B file=valdi_core/src/Renderer
// args: e
// locals: t, this
function {
  this = this;
  this.begin();
  try { // catch -> L_65
  this.rootRendersCount = (this.rootRendersCount ++);
  e();
  <?>;
  // gosub (finally 块) 159
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_99
  this.onUncaughtError("Got an error while rendering root component", t);
  throw t;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 159
  throw <?>;
  this.end();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=170B file=valdi_core/src/Renderer
// closure: this, e, t, r, n
function {
  this.beginComponent(e, t);
  if (!(r)) goto L_53;
  this.setComponentContext(r);
  if (!(n)) goto L_83;
  this.setViewModelProperties(n);
  this.endComponent();
  return;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=1 bc=42B file=valdi_core/src/Renderer
// args: e, t, n, r
// locals: this
function {
  this = this;
  this.renderRoot(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=478B file=valdi_core/src/Renderer
// locals: e, this
function {
  this = this;
  let e;
  e = {treeId: this.contextId, componentRerendersCount: this.componentRerendersCount, rootRendersCount: this.rootRendersCount, componentsCount: 0, elementsCount: 0, slotsCount: 0};
  if (!(this.nodeTree.children)) goto L_1d3;
  if (!(this.nodeTree.children.children[0])) goto L_1d3;
  this.collectLogInfo(this.nodeTree.children.children[0], e);
  return {verbose: e};
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=165B file=valdi_core/src/Renderer
// locals: e, this
function {
  this = this;
  let e;
  this.doBegin();
  e = this.nodeTree;
  e.lastRenderId = this.renderId;
  this.pushVirtualNode(e);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=839B file=valdi_core/src/Renderer
// locals: e, t, this
// closure: v
function {
  this = this;
  if (!((v !== this))) goto L_15;
  throw Error("Unbalanced Renderer begin()/end() calls");
  this.currentNode = undefined;
  if (!(this.nodeStack.length)) goto L_8e;
  this.nodeStack.pop();
  goto L_20;
  if (!((1 === this.beginCount))) goto L_172;
  if (!(this._useTopDownMoveOrder)) goto L_102;
  this.flushPendingMovesInTopDownOrder();
  if (!(this.pendingRenders.length)) goto L_172;
  this.pendingRenders.shift()();
  goto L_103;
  this.beginCount = (this.beginCount - 1);
  if (!((0 === this.beginCount))) goto L_346;
  v = this.parent;
  this.parent;
  this.parent = undefined;
  this.collectingRenderCompleteCallbacks = true;
  try { // catch -> L_2c9
  this.delegate.onRenderEnd();
  if (!(this.eventListener)) goto L_2be;
  this.eventListener.onRenderEnd();
  <?>;
  // gosub (finally 块) 719
  undefined;
  goto L_2dc;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 719
  throw <?>;
  this.collectingRenderCompleteCallbacks = false;
  // ret (finally 块) 
  if (!(this.completions)) goto L_346;
  let e;
  e = this.completions;
  this.completions = undefined;
  let t;
  for (const t of e) {
    t();
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  this.popVirtualNode();
  this.doEnd();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=75B file=valdi_core/src/Renderer
// args: e, t
// locals: this
function {
  this = this;
  this.delegate.onAnimationStart(e, t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  this.delegate.onAnimationEnd();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=24B file=valdi_core/src/Renderer
// args: e
// locals: t
// closure: E, w
function {
  let t;
  t = e[E];
  if (!(t)) goto L_17;
  return (t !== w);
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=412B file=valdi_core/src/Renderer
// args: e, t
// locals: n, this
function {
  this = this;
  if (!(e.element)) goto L_56;
  t.elementsCount = <t.elementsCount_new>;
  goto L_fc;
  // [栈深重同步 1 -> 0]
  if (!(e.component)) goto L_a9;
  t.componentsCount = <t.componentsCount_new>;
  goto L_fc;
  // [栈深重同步 1 -> 0]
  if (!(e.slot)) goto L_fc;
  t.slotsCount = <t.slotsCount_new>;
  (t.slotsCount++);
  if (!(e.children)) goto L_19b;
  let n;
  for (const n of e.children.children) {
    this.collectLogInfo(n, t);
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=268B file=valdi_core/src/Renderer
// args: e
// locals: t
// closure: E, w
function {
  let t;
  t = e[E];
  if (!(!t)) goto L_87;
  throw Error("Could not resolve Component '".concat(e.constructor.name, "' in current Renderer"));
  if (!((t === w))) goto L_108;
  throw Error("Resolved destroyed Component '".concat(e.constructor.name, "' in current Renderer"));
  return t;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=96B file=valdi_core/src/Renderer
// closure: this, t, r, n
function {
  if (!(this.isComponentAlive(t))) goto L_5f;
  r.rerenderScheduled = false;
  this.renderComponent(t, n);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=298B file=valdi_core/src/Renderer
// locals: e
// closure: r, this, t, n
function {
  r.needRendering = true;
  let e;
  for (const e of this.observers) {
    if (!(e.onComponentWillRerender)) goto L_87;
    e.onComponentWillRerender(t);
  }
  this.pushVirtualNode(r.virtualNode);
  if (!(n)) goto L_103;
  this.setViewModelProperties(n);
  this.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=2 bc=640B file=valdi_core/src/Renderer
// args: t, n
// locals: r, i, this
// closure: c, e
function {
  this = this;
  let r;
  r = this.resolveRenderedComponent(t);
  if (!(this.currentNode)) goto L_fa;
  if (!(r.needRendering)) goto L_7a;
  return;
  if ((r.rerenderScheduled)) goto L_f8;
  r.rerenderScheduled = true;
  this.pendingRenders.push(function <atom:0>);
  return;
  this.componentRerendersCount = (this.componentRerendersCount ++);
  this.doBegin();
  try { // catch -> L_1f0
  c.trace("renderComponent.".concat(r.ctr.name), function <atom:0>);
  <?>;
  // gosub (finally 块) 600
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_252
  if (!(e.isLoggingEnabled)) goto L_248;
  console.log(i);
  <?>;
  // gosub (finally 块) 600
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 600
  throw <?>;
  this.doEnd();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=valdi_core/src/Renderer
// closure: this, n
function {
  this.rerenderLazyComponentIfNeeded(n);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=1 bc=293B file=valdi_core/src/Renderer
// args: e, t
// locals: n, this
function {
  this = this;
  let n;
  this.beginElement(e, t);
  n = this.getCurrentNode().element;
  if ((!!n.wasVisibleOnce)) goto L_124;
  if ((this.hasAttribute("onVisibilityChanged"))) goto L_fb;
  this.setAttribute("onVisibilityChanged", function <atom:0>);
  this.endElement();
  return false;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=76B file=valdi_core/src/Renderer
// args: e, t
// closure: this, i
function {
  this.setAttributeOnElement(i.element, e, t);
  return;
}

// fn <atom:0>  args=2 vars=10 closure=1 cpool=1 bc=768B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, i, o, t#1, n#1, r#1, this
// closure: d
function {
  this = this;
  let o;
  let i;
  let r;
  let n;
  n = this.getCurrentNode();
  if ((t)) goto L_5d;
  r = e.id;
  i = this.resolveVirtualNode(n, r, undefined, undefined, undefined);
  o = false;
  if (!(!i.element)) goto L_25f;
  let r#1;
  let n#1;
  let t#1;
  this.nodeIdSequence = (this.nodeIdSequence ++);
  t#1 = (this.nodeIdSequence ++);
  n#1 = {id: t#1, attributes: {}, style: e.style, nodePrototype: e, childrenHead: undefined, childrenDirty: true, virtualNode: i, next: undefined, prev: undefined, parentIndex: undefined};
  i.element = n#1;
  this.delegate.onElementCreated(t#1, e.viewClass);
  o = true;
  true;
  this.elementById[t#1] = n#1;
  r#1 = e.handleFactory;
  if (!(r#1)) goto L_25e;
  this.createElementHandle(n#1, r#1);
  this.pushVirtualNode(i);
  if (!(o)) goto L_2ff;
  if (!(e.attributes)) goto L_2ff;
  d.enumeratePropertyList(e.attributes, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=76B file=valdi_core/src/Renderer
// args: e, t
// closure: this, o
function {
  this.setAttributeOnElement(o.element, e, t);
  return;
}

// fn <atom:0>  args=3 vars=10 closure=1 cpool=1 bc=770B file=valdi_core/src/Renderer
// args: e, t, n
// locals: r, i, o, s, n#1, r#1, this
// closure: d
function {
  this = this;
  let s;
  let o;
  let i;
  let r;
  r = this.getCurrentNode();
  if ((n)) goto L_5d;
  i = e.id;
  o = this.resolveVirtualNode(r, i, undefined, undefined, undefined);
  s = false;
  if (!(o.element)) goto L_133;
  if (!((o.element.attributes.viewFactory !== t))) goto L_261;
  throw new Error("The view factory cannot change for an existing custom-view element");
  let r#1;
  let n#1;
  this.nodeIdSequence = (this.nodeIdSequence ++);
  n#1 = (this.nodeIdSequence ++);
  r#1 = {id: n#1, attributes: {viewFactory: t}, style: e.style, nodePrototype: e, childrenHead: undefined, childrenDirty: true, virtualNode: o, next: undefined, prev: undefined, parentIndex: undefined};
  o.element = r#1;
  this.delegate.onCustomElementCreated(n#1, t);
  this.elementById[n#1] = r#1;
  s = true;
  true;
  this.pushVirtualNode(o);
  if (!(s)) goto L_301;
  if (!(e.attributes)) goto L_301;
  d.enumeratePropertyList(e.attributes, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=valdi_core/src/Renderer
// closure: this, r
function {
  this.rerenderLazyComponentIfNeeded(r);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=294B file=valdi_core/src/Renderer
// args: e, t, n
// locals: r, this
function {
  this = this;
  let r;
  this.beginElementWithViewFactory(e, t, n);
  r = this.getCurrentNode().element;
  if ((!!r.wasVisibleOnce)) goto L_125;
  if ((this.hasAttribute("onVisibilityChanged"))) goto L_fc;
  this.setAttribute("onVisibilityChanged", function <atom:0>);
  this.endElement();
  return false;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=289B file=valdi_core/src/Renderer
// locals: e, t, this
function {
  this = this;
  let e;
  e = this.currentNode;
  if (!(e)) goto L_fb;
  if (!((e.parentElement === this.elementTree))) goto L_fb;
  let t;
  for (const t of this.observers) {
    if (!(t.onRootElementWillEndRender)) goto L_f4;
    t.onRootElementWillEndRender();
  }
  this.popVirtualNode();
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=156B file=valdi_core/src/Renderer
// args: e, t, n
// locals: r, e#1, i, this
function {
  this = this;
  let r;
  for (const r of e) {
    let i;
    let e#1;
    e#1 = this.elementById[r];
    if ((!e#1)) continue;
    i = e#1.attributes.onVisibilityChanged;
    if (!(i)) goto L_91;
    i(t, n);
  }
  return;
}

// fn <atom:0>  args=2 vars=12 closure=1 cpool=0 bc=278B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, n#1, i, o, s, d, l, a, this
// closure: y
function {
  this = this;
  let n;
  n = e.length;
  let r;
  r = 0;
  if (!((r < n))) goto L_115;
  let a;
  let l;
  let d;
  let s;
  let o;
  let i;
  let n#1;
  r = <r_new>;
  n#1 = e[(r++)];
  r = <r_new>;
  i = e[(r++)];
  r = <r_new>;
  o = e[(r++)];
  r = <r_new>;
  s = e[(r++)];
  r = <r_new>;
  d = e[(r++)];
  l = this.elementById[n#1];
  if ((!l)) goto L_e;
  a = l.attributes.onViewportChanged;
  if (!(a)) goto L_111;
  a({x: i, y: o, width: s, height: d}, y(this, n#1), t);
  goto L_e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=126B file=valdi_core/src/Renderer
// closure: this, t, r, e, n
function {
  this.callVisiblityChanged(t, false, r);
  this.callVisiblityChanged(e, true, r);
  this.callViewportChanged(n, r);
  return;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=1 bc=42B file=valdi_core/src/Renderer
// args: e, t, n, r
// locals: this
function {
  this = this;
  this.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=290B file=valdi_core/src/Renderer
// args: t
// locals: n, this
// closure: e
function {
  this = this;
  let n;
  if (!(t.wasVisibleOnce)) goto L_2a;
  return;
  t.wasVisibleOnce = true;
  n = t.virtualNode.parentComponent;
  if (!(n)) goto L_cb;
  goto L_121;
  // [栈深重同步 1 -> 0]
  if (!(e.isLoggingEnabled)) goto L_121;
  console.warn("Unable to retrieve top component from appearing element");
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=297B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  if (!(e.children)) goto L_55;
  e.children.insertionIndex = 0;
  0;
  if (!(e.rememberState)) goto L_a9;
  e.rememberState.slotIndex = 0;
  0;
  e.lastRenderId = this.renderId;
  this.currentNode = e;
  this.nodeStack.push(e);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=602B file=valdi_core/src/Renderer
// locals: e, t, n, n#1, this
function {
  this = this;
  let n;
  let t;
  let e;
  this.nodeStack.pop();
  e = this.nodeStack[(this.nodeStack.length - 1)];
  t = this.currentNode;
  this.currentNode = e;
  this.processChildrenUpdate(t);
  n = t.element;
  if (!(n)) goto L_153;
  this.resolveElementChildren(t, n);
  return;
  if (!((e !== t.parent))) goto L_259;
  let n#1;
  n#1 = t.parentElement;
  if (!(!n#1)) goto L_1af;
  return;
  if (!(e)) goto L_20b;
  if (((e.element === n#1))) goto L_208;
  if (!((e.parentElement === n#1))) goto L_20b;
  return;
  this.resolveElementChildren(n#1.virtualNode, n#1);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=47B file=valdi_core/src/Renderer
// args: e
function {
  return "<".concat(e, ">");   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=225B file=valdi_core/src/Renderer
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = Object.keys(this.allowedRootElementTypes).map(function <atom:0>).join(", ");
  throw new Error("Root element must be one of: ".concat(t, " (resolved root element is <", e, ">)"));
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=0 bc=933B file=valdi_core/src/Renderer
// args: e, t, n
// locals: r, i, e#1, e#2, this
function {
  this = this;
  let i;
  let r;
  r = e.id;
  i = t.id;
  if (!((0 === r))) goto L_1ff;
  let e#1;
  if (!((0 !== n))) goto L_6d;
  throw Error("Can only have 1 element as the root.");
  e#1 = t.nodePrototype.tag;
  if (!(this.allowedRootElementTypes)) goto L_12d;
  if (!(!this.allowedRootElementTypes[e#1])) goto L_12d;
  this.throwDisallowedRootElementType(e#1);
  if (!(this._useTopDownMoveOrder)) goto L_1b3;
  this.pendingRootMove = {elementId: i};
  goto L_1fd;
  // [栈深重同步 1 -> 0]
  this.delegate.onElementBecameRoot(i);
  return;
  if (!(this._useTopDownMoveOrder)) goto L_355;
  let e#2;
  this.pendingMoveElementIds.add(i);
  e#2 = this.pendingMovesByParent.get(r);
  if ((e#2)) goto L_31c;
  e#2 = [];
  [];
  this.pendingMovesByParent.set(r, e#2);
  e#2.push({elementId: i, parentIndex: n});
  return;
  this.delegate.onElementMoved(i, r, n);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=70B file=valdi_core/src/Renderer
// args: e, t
function {
  return (e.parentIndex - t.parentIndex);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=valdi_core/src/Renderer
// args: e, t
function {
  return (e - t);
}

// fn <atom:0>  args=0 vars=8 closure=0 cpool=2 bc=1314B file=valdi_core/src/Renderer
// locals: n, e, n#1, t, n#2, r, t#1, this
function {
  this = this;
  let t;
  let e;
  if (!((undefined === this.pendingRootMove))) goto L_79;
  if (!((0 === this.pendingMovesByParent.size))) goto L_79;
  return;
  if (!(this.pendingRootMove)) goto L_12e;
  this.delegate.onElementBecameRoot(this.pendingRootMove.elementId);
  let n;
  for (const n of this.pendingMovesByParent.values()) {
    n.sort(function <atom:0>);
  }
  e = undefined;
  if (!(this.pendingRootMove)) goto L_21d;
  goto L_220;
  // [栈深重同步 1 -> 0]
  e = [];
  [];
  let n#1;
  for (const n#1 of this.pendingMovesByParent.keys()) {
    if ((this.pendingMoveElementIds.has(n#1))) goto L_2eb;
    e.push(n#1);
  }
  e.sort(function <atom:0>);
  t = 0;
  if (!((t < e.length))) goto L_486;
  let r;
  let n#2;
  t = <t_new>;
  n#2 = e[(t++)];
  r = this.pendingMovesByParent.get(n#2);
  if (!(r)) goto L_31e;
  let t#1;
  for (const t#1 of r) {
    this.delegate.onElementMoved(t#1.elementId, n#2, t#1.parentIndex);
    e.push(t#1.elementId);
  }
  goto L_31e;
  this.pendingRootMove = undefined;
  this.pendingMovesByParent.clear();
  this.pendingMoveElementIds.clear();
  return;
}

// fn <atom:0>  args=4 vars=7 closure=0 cpool=0 bc=329B file=valdi_core/src/Renderer
// args: e, t, n, r
// locals: i, t#1, this
function {
  this = this;
  let i;
  for (const i of t.children) {
    let t#1;
    t#1 = i.element;
    if (!(t#1)) goto L_c8;
    n(t#1);
    if ((e.childrenHead)) goto L_93;
    e.childrenHead = t#1;
    t#1;
    if (!(r)) goto L_a7;
    r.next = t#1;
    t#1;
    t#1.next = undefined;
    t#1.prev = r;
    r = t#1;
   continue;
    if (!(i.children)) goto L_13d;
    r = this.doElementIterate(e, i.children, n, r);
    this.doElementIterate(e, i.children, n, r);
  }
  return r;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=64B file=valdi_core/src/Renderer
// args: t
// closure: n, this, e
function {
  t.parentIndex = n;
  this.onElementMoved(e, t, n);
  n = <n_new>;
  (n++);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=1 bc=49B file=valdi_core/src/Renderer
// args: e, t
// locals: n, this
function {
  this = this;
  let n;
  n = 0;
  this.doElementIterate(e, t, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=4 cpool=0 bc=495B file=valdi_core/src/Renderer
// args: t
// locals: e, t#1, i, o
// closure: r, n, this, e
function {
  let o;
  let i;
  t.parentIndex = r;
  if (!(n)) goto L_115;
  if (!((undefined === this.elementById[n.id]))) goto L_115;
  let t#1;
  let e;
  e = n.next;
  t#1 = n.prev;
  if (!(t#1)) goto L_d0;
  t#1.next = e;
  e;
  if (!(e)) goto L_e8;
  e.prev = t#1;
  t#1;
  n = n.next;
  n.next;
  goto L_13;
  if (!((t === n))) goto L_146;
  n = n.next;
  goto L_170;
  // [栈深重同步 1 -> 0]
  this.onElementMoved(e, t, r);
  i = t.next;
  o = t.prev;
  if (!(i)) goto L_1ce;
  i.prev = o;
  o;
  if (!(o)) goto L_1e6;
  o.next = i;
  i;
  r = <r_new>;
  (r++);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=1 bc=98B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, this
function {
  this = this;
  let r;
  let n;
  n = e.childrenHead;
  r = 0;
  e.childrenHead = undefined;
  this.doElementIterate(e, t, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=300B file=valdi_core/src/Renderer
// args: e, t
// locals: n, this
function {
  this = this;
  let n;
  if (!(!t.childrenDirty)) goto L_2b;
  return;
  t.childrenDirty = false;
  n = e.children;
  if (!(n)) goto L_12b;
  if (!(t.childrenHead)) goto L_b3;
  goto L_dc;
  // [栈深重同步 1 -> 0]
  this.resolveElementChildrenInitial(t, n);
  if (!((t.bridge == null))) goto L_107;
  t.bridge;
  goto L_12b;
  undefined.invalidateChildren();
  return;
}

// fn <atom:0>  args=1 vars=9 closure=0 cpool=0 bc=769B file=valdi_core/src/Renderer
// args: e
// locals: t, e#1, n, r, e#2, t#1, t#2, this
function {
  this = this;
  let r;
  let n;
  let t;
  t = e.children;
  if (!(!t)) goto L_36;
  return;
  if (!((t.children === t.previousChildren))) goto L_130;
  let e#1;
  e#1 = t.insertionIndex;
  if (!((e#1 === t.children.length))) goto L_d8;
  return;
  t.children = t.children.slice(0, e#1);
  n = t.childByKey;
  r = t.previousChildren;
  if (!(r)) goto L_240;
  let e#2;
  e#2 = this.renderId;
  let t#1;
  for (const t#1 of r) {
    if (!((t#1.lastRenderId !== e#2))) goto L_236;
    delete t#1.key;
    // [栈深重同步 5 -> 4]
    n;
  }
  t.previousChildren = t.children;
  if (!(e.element)) goto L_2c2;
  e.element.childrenDirty = true;
  return;
  let t#2;
  t#2 = e.parentElement;
  if (!(t#2)) goto L_2ff;
  t#2.childrenDirty = true;
  true;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=295B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, i
function {
  let r;
  let n;
  t.insertionIndex = <t.insertionIndex_new>;
  n = (t.insertionIndex++);
  e.parentIndex = n;
  r = t.children;
  if (!((r !== t.previousChildren))) goto L_b6;
  r.push(e);
  return;
  if (!((r[n] !== e))) goto L_126;
  let i;
  i = r.slice(0, n);
  i.push(e);
  t.children = i;
  return;
}

// fn <atom:0>  args=5 vars=14 closure=0 cpool=0 bc=1064B file=valdi_core/src/Renderer
// args: e, t, n, r, i
// locals: o, s, d, l, n#1, e#1, t#1, n#2, this
function {
  this = this;
  let l;
  let d;
  let s;
  let o;
  if (!((undefined !== n))) goto L_42;
  goto L_43;
  // [栈深重同步 1 -> 0]
  o = t;
  s = undefined;
  d = e.children;
  if (!(d)) goto L_9c;
  s = d.childByKey[o];
  goto L_c4;
  // [栈深重同步 1 -> 0]
  d = {childByKey: {}, children: [], insertionIndex: 0};
  {childByKey: {}, children: [], insertionIndex: 0};
  e.children = d;
  d;
  l = this.renderId;
  if (!(s)) goto L_309;
  let n#1;
  n#1 = s.component;
  if (!(i)) goto L_24e;
  if (!(n#1)) goto L_24e;
  if (!((i !== n#1.prototype))) goto L_24e;
  let t#1;
  let e#1;
  if (!((r == null))) goto L_166;
  r;
  goto L_187;
  e#1 = undefined.name;
  t#1 = n#1.ctr.name;
  throw Error(["Duplicate Component '".concat(e#1, "' and '", t#1, "' for resolved key '", o, "'."), "This can happen when two different components are added in the same parent with the same key,", "You can fix this issue by combining into a single <Component/> tag with conditional attributes instead."].join(" "));
  if (((s.lastRenderId === l))) goto L_285;
  if (!((!!i != !!n#1))) goto L_3f7;
  let n#2;
  n#2 = ((d.insertionIndex - s.parentIndex) + 1);
  return this.resolveVirtualNode(e, t, n#2, r, i);   // tail call
  if ((e.element)) goto L_362;
  if ((e.component)) goto L_3af;
  s = {key: o, lastRenderId: l, parentElement: e.parentElement, parentComponent: e.parentComponent, children: undefined, parent: e, parentIndex: 0};
  {key: o, lastRenderId: l, parentElement: e.parentElement, parentComponent: e.parentComponent, children: undefined, parent: e, parentIndex: 0};
  d.childByKey[o] = s;
  this.insertNodeInParent(s, d);
  return s;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=245B file=valdi_core/src/Renderer
// args: e, t
// locals: r, n, this
function {
  this = this;
  let r;
  for (const r of t) {
    try { // catch -> L_4e
    if (!(("function" == typeof r))) goto L_22;
    goto L_49;
    // [栈深重同步 4 -> 3]
    r.unsubscribe();
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    n = <?>;
    try { // catch -> L_ea
    this.onUncaughtError("Failed to call registered disposable on component ".concat(e.ctr.name), n);
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  return;
}

// fn <atom:0>  args=2 vars=12 closure=4 cpool=0 bc=2326B file=valdi_core/src/Renderer
// args: e, t
// locals: n, e#1, n#1, e#2, t#1, n#2, r, i, r#1, this
// closure: u, m, E, w
function {
  this = this;
  let n#1;
  e.parent = undefined;
  if (!(e.rememberState)) goto L_43;
  e.rememberState = undefined;
  undefined;
  if (!(e.element)) goto L_3c9;
  let n;
  n = e.element;
  e.element = undefined;
  delete n.id;
  if (!(n.handle)) goto L_1c3;
  let e#1;
  e#1 = n.attributes.ref;
  if (!(e#1)) goto L_16c;
  e#1.current = null;
  null;
  n.handle.destroy();
  n.handle = undefined;
  if (!(n.bridge)) goto L_2da;
  this.detachElementFromHolder(n, n.attributes.ref);
  this.detachElementFromHolder(n, n.attributes.$ref);
  n.bridge = undefined;
  undefined;
  if (!(t)) goto L_34b;
  goto L_3b9;
  // [栈深重同步 2 -> 1]
  t = true;
  this.delegate.onElementDestroyed(n.id);
  n.attributes = u;
  // [栈深重同步 1 -> 0]
  n#1 = e.children;
  if (!(n#1)) goto L_486;
  let e#2;
  for (const e#2 of n#1.children) {
    this.destroyVirtualNode(e#2, t);
  }
  e.children = undefined;
  n#1.childByKey = u;
  n#1.children = m;
  n#1.previousChildren = undefined;
  if (!(e.component)) goto L_8ff;
  let n#2;
  let t#1;
  t#1 = e.component;
  e.component = undefined;
  n#2 = t#1.instance;
  if (!(n#2)) goto L_8f4;
  let i;
  if (!(t#1.componentRef)) goto L_688;
  if (!(e.bridge)) goto L_5d2;
  goto L_679;
  // [栈深重同步 1 -> 0]
  this.onUncaughtError("Failed to update component ref of ".concat(t#1.ctr.name, " before destroying"), new Error("Component's virtual node bridge doesn't exist"));
  t#1.componentRef = undefined;
  undefined;
  n#2[E] = w;
  try { // catch -> L_6c5
  n#2.onDestroy();
  <?>;
  goto L_767;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_766
  this.onUncaughtError("Failed to call onDestroy() on component ".concat(t#1.ctr.name), r);
  <?>;
  goto L_767;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(t#1.disposables)) goto L_7eb;
  this.callComponentDisposables(t#1, t#1.disposables);
  t#1.disposables = undefined;
  undefined;
  i = t#1.onDestroyObserver;
  if (!(i)) goto L_8cd;
  try { // catch -> L_82b
  i(n#2);
  <?>;
  goto L_8cd;
  // [栈深重同步 0 -> 1]
  r#1 = <?>;
  try { // catch -> L_8cc
  this.onUncaughtError("Failed to call onDestroyCallback on component ".concat(t#1.ctr.name), r#1);
  <?>;
  goto L_8cd;
  // [栈深重同步 0 -> 1]
  throw <?>;
  t#1.instance = undefined;
  t#1.viewModel = undefined;
  t#1.context = undefined;
  e.bridge = undefined;
  e.parentComponent = undefined;
  e.parentElement = undefined;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=63B file=valdi_core/src/Renderer
// locals: e, this
function {
  this = this;
  let e;
  e = this.currentNode;
  if (!((undefined === e))) goto L_3b;
  throw Error("Unbalanced beginElement()/endElement() or beginComponent()/endComponent() calls");
  return e;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=136B file=valdi_core/src/Renderer
// locals: e, this
function {
  this = this;
  let e;
  e = this.currentNode;
  if ((!e)) goto L_55;
  if (!(!e.element)) goto L_63;
  throw Error("Unbalanced beginElement()/endElement() calls");
  return e.element;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=136B file=valdi_core/src/Renderer
// locals: e, this
function {
  this = this;
  let e;
  e = this.currentNode;
  if ((!e)) goto L_55;
  if (!(!e.component)) goto L_63;
  throw Error("Unbalanced beginComponent()/endComponent() calls");
  return e.component;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=231B file=valdi_core/src/Renderer
// args: e
function {
  if (!(e)) goto L_e6;
  if (!((e.component == null))) goto L_30;
  e.component;
  goto L_7a;
  if (!((undefined.instance == null))) goto L_59;
  undefined.instance;
  goto L_7a;
  if (!(undefined.onError)) goto L_c0;
  return e.component.instance;
  e = e.parent;
  goto L_0;
  return;
}

// fn <atom:0>  args=3 vars=9 closure=3 cpool=0 bc=708B file=valdi_core/src/Renderer
// args: t, n, r
// locals: i, o, s, e, d, this
// closure: M, e, a
function {
  this = this;
  let s;
  let o;
  let i;
  i = undefined;
  o = undefined;
  s = this.currentNode;
  if (!(s)) goto L_99;
  i = M(this.nodeTree, s, this);
  M(this.nodeTree, s, this);
  o = this.resolveComponentCatchingError(s);
  this.resolveComponentCatchingError(s);
  goto L_1f6;
  if (!(r)) goto L_1cb;
  try { // catch -> L_122
  let e;
  e = this.resolveRenderedComponent(r).virtualNode;
  o = this.resolveComponentCatchingError(e);
  this.resolveComponentCatchingError(e);
  <?>;
  goto L_1f6;
  // [栈深重同步 0 -> 1]
  d = <?>;
  try { // catch -> L_1ca
  if (!(e.isLoggingEnabled)) goto L_1c6;
  console.log("onUncaughtError: ".concat(d.message));
  <?>;
  goto L_1f6;
  // [栈深重同步 0 -> 1]
  throw <?>;
  o = this.getRootComponent();
  this.getRootComponent();
  if (!((o == null))) goto L_201;
  o;
  goto L_222;
  if (!(undefined.onError)) goto L_27a;
  goto L_2c3;
  // [栈深重同步 1 -> 0]
  this.delegate.onUncaughtError(t, n);
  return;
}

// fn <atom:0>  args=2 vars=9 closure=2 cpool=0 bc=373B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, i, o, s, d, this
// closure: I, m
function {
  this = this;
  let d;
  let s;
  let o;
  let i;
  let r;
  let n;
  n = this.currentNode;
  if (!(!n)) goto L_4b;
  throw Error("Cannot call this outside of a onRender callback");
  r = n.rememberState;
  if ((r)) goto L_9b;
  r = {slots: [], slotIndex: 0};
  {slots: [], slotIndex: 0};
  n.rememberState = r;
  r;
  r.slotIndex = <r.slotIndex_new>;
  i = (r.slotIndex++);
  o = r.slots;
  s = o[i];
  if (!(s)) goto L_14d;
  if (!(I(s.keys, t))) goto L_14d;
  return s.value;
  d = e();
  if (!(t.length)) goto L_168;
  goto L_16b;
  // [栈深重同步 4 -> 3]
  o[i] = {value: d, keys: m};
  return d;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=93B file=valdi_core/src/Renderer
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.getCurrentComponent().injectedAttributes;
  if (!(!!t)) goto L_5c;
  return !!t[e];
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=120B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, this
function {
  this = this;
  let r;
  let n;
  n = this.getCurrentComponent();
  r = n.injectedAttributes;
  if ((r)) goto L_70;
  r = {};
  {};
  n.injectedAttributes = r;
  r;
  r[e] = t;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=78B file=valdi_core/src/Renderer
// args: e, t
// locals: this
function {
  this = this;
  return this.setAttributeOnElement(this.getCurrentElement(), e, t);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=442B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, this
function {
  this = this;
  let r;
  let n;
  n = this.getCurrentElement();
  r = n.attributes;
  if (!((r[e] !== t))) goto L_1b9;
  r[e] = t;
  if (!(t)) goto L_d8;
  goto L_1b6;
  // [栈深重同步 1 -> 0]
  if (!((false === t))) goto L_14b;
  goto L_1b6;
  // [栈深重同步 1 -> 0]
  this.delegate.onElementAttributeChangeUndefined(n.id, e);
  return true;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=334B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, this
function {
  this = this;
  let r;
  let n;
  n = this.getCurrentElement();
  r = n.attributes;
  if (!((r[e] !== t))) goto L_14d;
  r[e] = t;
  if ((t)) goto L_6f;
  if (!((0 === t))) goto L_df;
  goto L_14a;
  // [栈深重同步 1 -> 0]
  this.delegate.onElementAttributeChangeUndefined(n.id, e);
  return true;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=334B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, this
function {
  this = this;
  let r;
  let n;
  n = this.getCurrentElement();
  r = n.attributes;
  if (!((r[e] !== t))) goto L_14d;
  r[e] = t;
  if ((t)) goto L_6f;
  if (!(("" === t))) goto L_df;
  goto L_14a;
  // [栈深重同步 1 -> 0]
  this.delegate.onElementAttributeChangeUndefined(n.id, e);
  return true;
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=0 bc=473B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, i, s, this
// closure: o
function {
  this = this;
  let s;
  let i;
  let r;
  let n;
  n = this.getCurrentElement();
  r = n.attributes;
  i = r[e];
  s = o.tryReuseCallback(n, i, t);
  if (!((i !== s))) goto L_1d8;
  r[e] = s;
  if ((("onVisibilityChanged" === e))) goto L_b7;
  if (!(("onViewportChanged" === e))) goto L_f3;
  if (!(s)) goto L_1d5;
  goto L_1d5;
  // [栈深重同步 1 -> 0]
  if (!(s)) goto L_169;
  goto L_1d5;
  // [栈深重同步 1 -> 0]
  this.delegate.onElementAttributeChangeUndefined(n.id, e);
  return true;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=327B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, this
function {
  this = this;
  let r;
  let n;
  n = this.getCurrentElement();
  r = n.attributes;
  if (!((r[e] !== t))) goto L_146;
  r[e] = t;
  if (!(t)) goto L_d8;
  goto L_143;
  // [栈深重同步 1 -> 0]
  this.delegate.onElementAttributeChangeUndefined(n.id, e);
  return true;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=0 bc=279B file=valdi_core/src/Renderer
// args: e
// locals: t, n, r, e#1, e#2, this
function {
  this = this;
  let r;
  let n;
  let t;
  t = this.getCurrentElement();
  if (!((e == null))) goto L_3a;
  e;
  n = undefined;
  r = t.style;
  if (!((r !== n))) goto L_116;
  let e#1;
  for (const e#1 of r) {
    if (!((n == null))) goto L_82;
    n;
    goto L_86;
    if (!((undefined === undefined[e#1]))) goto L_b8;
    this.setAttributeOnElement(t, e#1, undefined);
  }
  <catch>;
  t.style = n;
  if (!(n)) goto L_116;
  let e#2;
  for (const e#2 of n) {
    this.setAttributeOnElement(t, e#2, n[e#2]);
    // [栈深重同步 3 -> 5]
  }
  <?>;
  // [栈深重同步 4 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=241B file=valdi_core/src/Renderer
// args: e
// locals: t, n, r, this
// closure: C
function {
  this = this;
  let r;
  let n;
  let t;
  t = this.getCurrentElement();
  n = t.attributes;
  r = n.ref;
  if (!((r !== e))) goto L_f0;
  n.ref = e;
  this.detachElementFromHolder(t, r);
  if (!(e)) goto L_ed;
  e.onElementCreated(C(this, t));
  return true;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=43B file=valdi_core/src/Renderer
// args: e, n
// closure: this, t
function {
  this.setAttributeOnElement(t, e, n);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=1 bc=84B file=valdi_core/src/Renderer
// args: e
// locals: t, this
// closure: d
function {
  this = this;
  let t;
  t = this.getCurrentElement();
  d.enumeratePropertyList(e, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=77B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  return !!this.getCurrentElement().attributes[e];
}

// fn <atom:0>  args=3 vars=5 closure=3 cpool=0 bc=406B file=valdi_core/src/Renderer
// args: e, t, r
// locals: i, this
// closure: s, o, n
function {
  this = this;
  let i;
  if ((("string" == typeof r))) goto L_4e;
  if (!(("class" !== t))) goto L_23;
  if ((("$class" !== t))) goto L_4e;
  r = s.classNames(r);
  s.classNames(r);
  i = e.attributes[t];
  if (!((r instanceof Function))) goto L_aa;
  r = o.tryReuseCallback(e, i, r);
  o.tryReuseCallback(e, i, r);
  if (!((i !== r))) goto L_195;
  if (!(Array.isArray(r))) goto L_167;
  if (!(Array.isArray(i))) goto L_167;
  if (!(n.arrayEquals(r, i))) goto L_167;
  e.attributes[t] = r;
  return false;
  this.onAttributeChange(e, t, r, i);
  return true;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=344B file=valdi_core/src/Renderer
// args: t
// locals: n
// closure: this, e
function {
  let n;
  if (!(!this.elementById[e.id])) goto L_5a;
  throw new Error("Element is no longer attached");
  n = !this.began;
  if (!(n)) goto L_aa;
  this.doBegin();
  try { // catch -> L_123
  this.delegate.sendElementCommand(e.id, t);
  <?>;
  // gosub (finally 块) 297
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 297
  throw <?>;
  if (!(n)) goto L_155;
  this.doEnd();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=146B file=valdi_core/src/Renderer
// args: t, r
// closure: e, n
function {
  if (!((e.handle === n))) goto L_91;
  n.receive(t);
  if (!(r)) goto L_91;
  if (!((e.attributes[r] == null))) goto L_85;
  e.attributes[r];
  e.attributes;
  goto L_91;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=2 bc=205B file=valdi_core/src/Renderer
// args: e, t
// locals: n, this
function {
  this = this;
  let n;
  n = t.create();
  e.handle = n;
  n.bind(function <atom:0>);
  this.delegate.attachElementHandle(e.id, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=90B file=valdi_core/src/Renderer
// args: e, t
// locals: this
// closure: C
function {
  this = this;
  if (!((t == null))) goto L_b;
  t;
  goto L_2c;
  if (!(undefined.onElementDestroyed)) goto L_59;
  t.onElementDestroyed(C(this, e));
  return;
}

// fn <atom:0>  args=4 vars=5 closure=1 cpool=0 bc=496B file=valdi_core/src/Renderer
// args: e, t, n, r
// locals: this
// closure: C
function {
  this = this;
  e.attributes[t] = n;
  if ((("ref" === t))) goto L_39;
  if (!(("$ref" === t))) goto L_13a;
  if (!(e.handle)) goto L_b5;
  if (!(("ref" === t))) goto L_b5;
  if (!(r)) goto L_7c;
  r.current = null;
  null;
  if (!(n)) goto L_1ef;
  n.current = e.handle;
  goto L_1ef;
  // [栈深重同步 1 -> 0]
  this.detachElementFromHolder(e, r);
  if (!(n)) goto L_1ef;
  if (!(n.onElementCreated)) goto L_1ef;
  goto L_1ef;
  // [栈深重同步 1 -> 0]
  if ((("onVisibilityChanged" === t))) goto L_14c;
  if (!(("onViewportChanged" == t))) goto L_185;
  if (!(n)) goto L_1ef;
  goto L_1ef;
  // [栈深重同步 1 -> 0]
  this.delegate.onElementAttributeChangeAny(e.id, t, n);
  return;
}

// fn <atom:0>  args=4 vars=9 closure=0 cpool=0 bc=578B file=valdi_core/src/Renderer
// args: e, t, n, r
// locals: i, o, s, d, this
function {
  this = this;
  let d;
  let s;
  let o;
  let i;
  if ((n)) goto L_36;
  i = t.id;
  o = this.getCurrentNode();
  s = this.resolveVirtualNode(o, i, undefined, e, t);
  d = false;
  if ((s.component)) goto L_10d;
  s.component = {instance: undefined, ctr: e, prototype: t, needRendering: true, viewModel: undefined, viewModelChanged: false, virtualNode: s, injectedAttributes: undefined, rendering: false, componentRef: r};
  d = true;
  true;
  this.pushVirtualNode(s);
  if (!(this.eventListener)) goto L_1cb;
  this.eventListener.onComponentBegin(s.key, e);
  if (!(d)) goto L_241;
  if (!(t.attributes)) goto L_241;
  this.setViewModelProperties(t.attributes);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=183B file=valdi_core/src/Renderer
// args: e, t, n
// locals: r, this
// closure: i
function {
  this = this;
  let r;
  r = e.componentPrototype;
  if ((r)) goto L_8a;
  r = i.ComponentPrototype.instanceWithNewId();
  i.ComponentPrototype.instanceWithNewId();
  e.componentPrototype = r;
  r;
  this.beginComponent(e, r, t, n);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return !!this.getCurrentComponent().context;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=50B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  this.getCurrentComponent().context = e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=50B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  this.getCurrentComponent().onCreateObserver = e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=50B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  this.getCurrentComponent().onDestroyObserver = e;
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=133B file=valdi_core/src/Renderer
// args: e, t, n
// locals: r, this
function {
  this = this;
  let r;
  for (const r of this.observers) {
    if (!(r.onRuntimeIssue)) goto L_7d;
    r.onRuntimeIssue(e, t, n);
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  this.observers.push(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=161B file=valdi_core/src/Renderer
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.observers.indexOf(e);
  if (!((t >= 0))) goto L_a0;
  this.observers.splice(t, 1);
  return;
}

// fn <atom:0>  args=1 vars=10 closure=2 cpool=0 bc=987B file=valdi_core/src/Renderer
// args: e
// locals: t, n, r, i, o, d, s, d#1, this
// closure: E, f
function {
  this = this;
  let s;
  let o;
  let i;
  let r;
  let n;
  let t;
  t = e.virtualNode.parentComponent;
  n = e.context;
  r = e.ctr;
  i = undefined;
  o = e.viewModel;
  if (!(!o)) goto L_109;
  if (!(r.disallowNullViewModel)) goto L_109;
  o = {};
  {};
  e.viewModel = o;
  o;
  if ((n)) goto L_11e;
  if (!(!t)) goto L_125;
  goto L_149;
  // [栈深重同步 5 -> 4]
  i = new r(this, o, t.context);
  new r(this, o, t.context);
  i[E] = e;
  e.instance = i;
  e.context = i.context;
  try { // catch -> L_1c5
  i.onCreate();
  <?>;
  goto L_246;
  // [栈深重同步 0 -> 1]
  d = <?>;
  try { // catch -> L_245
  this.onUncaughtError("Failed to call onCreate() on ".concat(r.name), d);
  <?>;
  goto L_246;
  // [栈深重同步 0 -> 1]
  throw <?>;
  s = e.onCreateObserver;
  if (!(s)) goto L_278;
  s(i);
  if (!(e.viewModel)) goto L_35f;
  try { // catch -> L_2d2
  i.onViewModelUpdate(undefined);
  <?>;
  goto L_353;
  // [栈深重同步 0 -> 1]
  d#1 = <?>;
  try { // catch -> L_352
  this.onUncaughtError("Failed to call onViewModelUpdate() after onCreate() on ".concat(r.name), d#1);
  <?>;
  goto L_353;
  // [栈深重同步 0 -> 1]
  throw <?>;
  e.viewModelChanged = false;
  if (!((e.componentRef == null))) goto L_389;
  e.componentRef;
  goto L_3d6;
  undefined.onComponentDidCreate(i, f(this, e.virtualNode));
  return i;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=258B file=valdi_core/src/Renderer
// args: e
// locals: t
function {
  let t;
  t = e.children;
  if (!(t)) goto L_101;
  if (!((t.previousChildren !== t.children))) goto L_d0;
  throw Error("Cannot skip rendering of children in node ".concat(e.key, " if the children were already dirty."));
  t.insertionIndex = t.children.length;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=291B file=valdi_core/src/Renderer
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = e.node;
  if (!(t)) goto L_122;
  if (!(t.parent)) goto L_116;
  this.pushVirtualNode(t);
  e.renderFunc.apply(undefined, e.lastParameters);
  goto L_122;
  // [栈深重同步 1 -> 0]
  e.node = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=1 vars=6 closure=2 cpool=0 bc=154B file=valdi_core/src/Renderer
// args: e
// locals: t, e#1, n, t#1, this
// closure: g, p
function {
  this = this;
  if (!(e[g])) goto L_5f;
  let t;
  t = e;
  let e#1;
  for (const e#1 of t) {
    let n;
    n = t[e#1];
    if (!(n)) goto L_58;
    this.doRerenderSlotIfNeeded(n[p]);
  }
  <catch>;
  return;
  let t#1;
  t#1 = e[p];
  if (!(t#1)) goto L_98;
  this.doRerenderSlotIfNeeded(t#1);
  return;
}

// fn <atom:0>  args=0 vars=9 closure=1 cpool=0 bc=1660B file=valdi_core/src/Renderer
// locals: e, t, n, r, n#1, i, i#1, t#1, this
// closure: c
function {
  this = this;
  let r;
  let n;
  let t;
  let e;
  e = this.getCurrentComponent();
  t = e.instance;
  n = e.needRendering;
  r = e.viewModel;
  if (!(t)) goto L_1f2;
  if (!(e.viewModelChanged)) goto L_227;
  let n#1;
  e.viewModelChanged = false;
  n#1 = t.viewModel;
  t.viewModel = r;
  try { // catch -> L_150
  t.onViewModelUpdate(n#1);
  <?>;
  goto L_227;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_1f1
  this.onUncaughtError("Failed to call onViewModelUpdate() on ".concat(t.constructor.name), i);
  <?>;
  goto L_227;
  // [栈深重同步 0 -> 1]
  throw <?>;
  n = true;
  true;
  t = this.createComponent(e);
  this.createComponent(e);
  if (!(n)) goto L_4a1;
  e.needRendering = false;
  e.rendering = true;
  try { // catch -> L_39e
  if (!(this.rendererTracingEnabled)) goto L_372;
  c.beginTrace("Renderer.onRender.".concat(e.ctr.name));
  try { // catch -> L_343
  t.onRender();
  <?>;
  // gosub (finally 块) 841
  undefined;
  goto L_39a;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 841
  throw <?>;
  c.endTrace();
  // ret (finally 块) 
  goto L_39a;
  t.onRender();
  <?>;
  goto L_490;
  // [栈深重同步 0 -> 1]
  i#1 = <?>;
  try { // catch -> L_48f
  this.popToVirtualNode(e.virtualNode);
  this.onUncaughtError("Failed to render component '".concat(e.ctr.name, "'"), i#1);
  <?>;
  goto L_490;
  // [栈深重同步 0 -> 1]
  throw <?>;
  e.rendering = false;
  goto L_5bc;
  let t#1;
  if (!(this.eventListener)) goto L_512;
  this.eventListener.onBypassComponentRender();
  this.skipVirtualNodeChildren(e.virtualNode);
  if (!(r)) goto L_589;
  t#1 = r.children;
  if (!(t#1)) goto L_5bb;
  this.rerenderSlots(t#1);
  this.popVirtualNode();
  if (!(this.eventListener)) goto L_651;
  this.eventListener.onComponentEnd();
  this.injectAttributesIfNeeded(e);
  return;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=0 bc=329B file=valdi_core/src/Renderer
// args: e
// locals: t, n, r, e#1, t#1, this
function {
  this = this;
  let n;
  let t;
  t = e.injectedAttributes;
  if (!(!t)) goto L_33;
  return;
  n = e.virtualNode.children;
  if (!(n)) goto L_148;
  let r;
  for (const r of t) {
    let e#1;
    e#1 = t[r];
    let t#1;
    for (const t#1 of n.children) {
      if (!(t#1.element)) goto L_139;
      this.setAttributeOnElement(t#1.element, r, e#1);
      // [栈深重同步 3 -> 6]
    }
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=117B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  if (!(this.currentNode)) goto L_74;
  if (!((this.currentNode !== e))) goto L_74;
  this.popVirtualNode();
  goto L_2;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=93B file=valdi_core/src/Renderer
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.getCurrentComponent().viewModel;
  if (!(!!t)) goto L_5c;
  return !!t[e];
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=713B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, i, this
// closure: o, c
function {
  this = this;
  let r;
  let n;
  n = this.getCurrentComponent();
  r = n.viewModel;
  if (!(r)) goto L_241;
  let i;
  i = r[e];
  if (!((t instanceof Function))) goto L_9c;
  t = o.tryReuseCallback(n, i, t);
  o.tryReuseCallback(n, i, t);
  if (!((i !== t))) goto L_23f;
  if (!(n.viewModelChanged)) goto L_da;
  r[e] = t;
  goto L_23f;
  // [栈深重同步 1 -> 0]
  null;
  r;
  {}[e] = t;
  t;
  n.viewModel = {};
  n.needRendering = true;
  n.viewModelChanged = true;
  if (!(this.eventListener)) goto L_17c;
  this.eventListener.onComponentViewModelPropertyChange(e);
  if (!(this.rendererTracingEnabled)) goto L_23f;
  c.instantTrace("Renderer.viewModelChange.".concat(n.ctr.name, ".", e));
  return;
  n.needRendering = true;
  n.viewModelChanged = true;
  n.viewModel = {};
  if (!((t instanceof Function))) goto L_2a0;
  t = o.tryReuseCallback(n, undefined, t);
  o.tryReuseCallback(n, undefined, t);
  n.viewModel[e] = t;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=192B file=valdi_core/src/Renderer
// args: e
// locals: t, n, this
function {
  this = this;
  let n;
  let t;
  t = this.getCurrentNode();
  n = this.resolveVirtualNode(t, e.nodeKey, undefined, undefined, undefined);
  e.node = n;
  n.slot = true;
  this.pushVirtualNode(n);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=236B file=valdi_core/src/Renderer
// args: e
// locals: t, this
function {
  this = this;
  this.popVirtualNode();
  if (!(e.ref)) goto L_eb;
  let t;
  t = [];
  this.collectElements(e.node, t);
  e.ref.setElements(t);
  return;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=186B file=valdi_core/src/Renderer
// args: e, t, n
function {
  throw new Error(["Cannot render slot '".concat(t, "' in component ", e.ctr.name, ": "), "found an existing slot value that isn't a slot function or a named slot.", ("Found slot value inside the 'children' property is of type: " + typeof n)].join(" "));
}

// fn <atom:0>  args=4 vars=10 closure=2 cpool=0 bc=678B file=valdi_core/src/Renderer
// args: e, t, n, r
// locals: i, o, s, d, t#1, this
// closure: g, p
function {
  this = this;
  let d;
  let s;
  let o;
  let i;
  i = this.resolveRenderedComponent(t);
  o = i.viewModel;
  if (!(!o)) goto L_63;
  return;
  s = o.children;
  if (!(!s)) goto L_bd;
  if (!(n)) goto L_bb;
  n.setElements([]);
  return;
  if (!(!s[g])) goto L_134;
  if (!(s[p])) goto L_106;
  if (!(("default" === e))) goto L_104;
  this.renderUnnamedSlot(t, n, r);
  return;
  this.throwInvalidSlot(i, e, s);
  d = s[e];
  if (!(d)) goto L_277;
  let t#1;
  t#1 = d[p];
  if (!(r)) goto L_170;
  t#1.nodeKey = r;
  t#1.isKeyExplicit = true;
  goto L_226;
  // [栈深重同步 1 -> 0]
  if (!(t#1.isKeyExplicit)) goto L_226;
  t#1.isKeyExplicit = false;
  t#1.nodeKey = "".concat(i.virtualNode.key, "$", e);
  "".concat(i.virtualNode.key, "$", e);
  if (!(n)) goto L_23a;
  t#1.ref = n;
  goto L_270;
  // [栈深重同步 1 -> 0]
  if (!(t#1.ref)) goto L_270;
  t#1.ref = undefined;
  undefined;
  d();
  return;
  if (!(n)) goto L_2a4;
  n.setElements([]);
  return;
}

// fn <atom:0>  args=3 vars=8 closure=2 cpool=0 bc=605B file=valdi_core/src/Renderer
// args: e, t, n
// locals: r, i, o, s, this
// closure: p, g
function {
  this = this;
  let s;
  let o;
  let i;
  let r;
  r = this.resolveRenderedComponent(e);
  i = r.viewModel;
  if (!(!i)) goto L_63;
  return;
  o = i.children;
  if (!(!o)) goto L_bd;
  if (!(t)) goto L_bb;
  t.setElements([]);
  return;
  s = o[p];
  if (!(!s)) goto L_136;
  if (!(o[g])) goto L_104;
  this.renderNamedSlot("default", e, t, n);
  return;
  this.throwInvalidSlot(r, "unnamed", o);
  if (!(n)) goto L_158;
  s.nodeKey = n;
  s.isKeyExplicit = true;
  goto L_20d;
  // [栈深重同步 1 -> 0]
  if (!(s.isKeyExplicit)) goto L_20d;
  s.isKeyExplicit = false;
  s.nodeKey = "".concat(r.virtualNode.key, "$unnamed");
  "".concat(r.virtualNode.key, "$unnamed");
  if (!(t)) goto L_221;
  s.ref = t;
  goto L_257;
  // [栈深重同步 1 -> 0]
  if (!(s.ref)) goto L_257;
  s.ref = undefined;
  undefined;
  o();
  return;
}

// fn <atom:0>  args=2 vars=7 closure=3 cpool=0 bc=982B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, i, o, this
// closure: g, p, A
function {
  this = this;
  let i;
  let r;
  let n;
  n = this.getCurrentComponent();
  r = n.viewModel;
  if ((r)) goto L_91;
  r = {};
  {};
  n.viewModel = r;
  n.viewModelChanged = true;
  n.needRendering = true;
  true;
  i = r.children;
  if (!(t)) goto L_33a;
  let o;
  if (!(i)) goto L_17f;
  if (!(!i[g])) goto L_17f;
  if (!(i[p])) goto L_17a;
  if (!(("default" !== e))) goto L_17a;
  {}[g] = true;
  true;
  i = {default: i};
  {default: i};
  if (!(n.viewModelChanged)) goto L_13e;
  r.children = i;
  goto L_17f;
  // [栈深重同步 1 -> 0]
  null;
  r;
  n.viewModel = {children: i};
  n.viewModelChanged = true;
  n.needRendering = true;
  goto L_17f;
  // [栈深重同步 1 -> 0]
  i = undefined;
  undefined;
  if ((i)) goto L_209;
  {}[g] = true;
  true;
  i = {};
  {};
  if (!(n.viewModelChanged)) goto L_1cf;
  r.children = i;
  goto L_209;
  // [栈深重同步 1 -> 0]
  null;
  r;
  n.viewModel = {children: i};
  n.viewModelChanged = true;
  n.needRendering = true;
  true;
  o = i[e];
  if (!(o)) goto L_227;
  o[p].renderFunc = t;
  return;
  o = A(this, {nodeKey: "".concat(n.virtualNode.key, "$", e), node: undefined, renderFunc: t, lastParameters: undefined});
  A(this, {nodeKey: "".concat(n.virtualNode.key, "$", e), node: undefined, renderFunc: t, lastParameters: undefined});
  if (!(n.viewModelChanged)) goto L_2ea;
  i[e] = o;
  goto L_338;
  // [栈深重同步 1 -> 0]
  null;
  i;
  {}[e] = o;
  o;
  i = {};
  {};
  null;
  r;
  n.viewModel = {children: i};
  n.viewModelChanged = true;
  n.needRendering = true;
  true;
  return;
  if (!(i)) goto L_3d5;
  if (!(i[e])) goto L_3d4;
  if (!(n.viewModelChanged)) goto L_390;
  null;
  i;
  {}[e] = undefined;
  undefined;
  r.children = {};
  goto L_3d4;
  // [栈深重同步 1 -> 0]
  null;
  r;
  null;
  i;
  {}[e] = undefined;
  undefined;
  n.viewModel = {children: {}};
  n.viewModelChanged = true;
  n.needRendering = true;
  true;
  return;
}

// fn <atom:0>  args=1 vars=6 closure=3 cpool=0 bc=658B file=valdi_core/src/Renderer
// args: e
// locals: t, n, r, t#1, this
// closure: p, g, A
function {
  this = this;
  let r;
  let n;
  let t;
  t = this.getCurrentComponent();
  n = t.viewModel;
  if ((n)) goto L_91;
  n = {};
  {};
  t.viewModel = n;
  t.viewModelChanged = true;
  t.needRendering = true;
  true;
  r = n.children;
  if (!(e)) goto L_21b;
  if (!(r)) goto L_117;
  let t#1;
  t#1 = r[p];
  if (!(t#1)) goto L_e0;
  t#1.renderFunc = e;
  return;
  if (!(r[g])) goto L_117;
  this.setNamedSlot("default", e);
  return;
  r = A(this, {nodeKey: "".concat(t.virtualNode.key, "$unnamed"), node: undefined, renderFunc: e, lastParameters: undefined});
  A(this, {nodeKey: "".concat(t.virtualNode.key, "$unnamed"), node: undefined, renderFunc: e, lastParameters: undefined});
  if (!(t.viewModelChanged)) goto L_1df;
  n.children = r;
  goto L_219;
  // [栈深重同步 1 -> 0]
  null;
  n;
  t.viewModel = {children: r};
  t.viewModelChanged = true;
  t.needRendering = true;
  true;
  return;
  if (!(r)) goto L_290;
  if (!(t.viewModelChanged)) goto L_258;
  n.children = undefined;
  goto L_290;
  // [栈深重同步 1 -> 0]
  null;
  n;
  t.viewModel = {children: undefined};
  t.viewModelChanged = true;
  t.needRendering = true;
  true;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=61B file=valdi_core/src/Renderer
// args: e
// locals: t, this
function {
  this = this;
  let t;
  for (const t of e) {
    this.setNamedSlot(t, e[t]);
  }
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=51B file=valdi_core/src/Renderer
// args: e, t
// closure: this
function {
  if (!(("children" !== e))) goto L_32;
  this.setViewModelProperty(e, t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=48B file=valdi_core/src/Renderer
// args: e
// locals: this
// closure: d
function {
  this = this;
  if (!(e)) goto L_2f;
  d.enumeratePropertyList(e, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=274B file=valdi_core/src/Renderer
// args: e
// locals: t, this
// closure: d
function {
  this = this;
  let t;
  t = this.getCurrentComponent();
  if (!((t.viewModel !== e))) goto L_111;
  t.needRendering = true;
  t.viewModelChanged = true;
  if (!(e)) goto L_ac;
  t.viewModel = d.propertyListToObject(e);
  goto L_111;
  // [栈深重同步 1 -> 0]
  if (!(t.ctr.disallowNullViewModel)) goto L_103;
  t.viewModel = {};
  goto L_111;
  // [栈深重同步 1 -> 0]
  t.viewModel = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=1 vars=9 closure=0 cpool=0 bc=352B file=valdi_core/src/Renderer
// args: e
// locals: t, n, r, i, e#1, t#1, r#1, this
function {
  this = this;
  let i;
  let r;
  let n;
  let t;
  t = this.getCurrentNode();
  if (!((t.children == null))) goto L_62;
  t.children;
  goto L_83;
  if (!((undefined.insertionIndex == null))) goto L_89;
  undefined.insertionIndex;
  n = 0;
  e();
  r = t.children;
  i = [];
  if (!(r)) goto L_15c;
  let t#1;
  let e#1;
  e#1 = r.insertionIndex;
  t#1 = r.children;
  let r#1;
  r#1 = n;
  if (!((r#1 < e#1))) goto L_15c;
  this.collectElements(t#1[r#1], i);
  r#1 = <r#1_new>;
  (r#1++);
  goto L_118;
  return i;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=42B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return this.getRootComponents()[0];
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=88B file=valdi_core/src/Renderer
// locals: e, this
function {
  this = this;
  let e;
  e = [];
  this.collectComponentsChildren(this.nodeTree, e);
  return e;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=244B file=valdi_core/src/Renderer
// locals: e, t, this
function {
  this = this;
  let e;
  e = [];
  if (!(this.nodeTree.children)) goto L_ee;
  let t;
  for (const t of this.nodeTree.children.children) {
    this.collectElements(t, e);
  }
  return e[0];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=112B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  if ((this.resolveRenderedComponent(e).virtualNode.key)) goto L_6f;
  return "";
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=132B file=valdi_core/src/Renderer
// args: e
// locals: t, n, this
function {
  this = this;
  let n;
  let t;
  t = [];
  n = this.resolveRenderedComponent(e);
  this.collectComponentsChildren(n.virtualNode, t);
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=161B file=valdi_core/src/Renderer
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.resolveRenderedComponent(e);
  if (!((t.virtualNode == null))) goto L_57;
  t.virtualNode;
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((<?>.parentComponent == null))) goto L_7f;
  <?>.parentComponent;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.instance;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return this.getCurrentComponent().instance;
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=0 bc=391B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, e#1, t#1, this
// closure: C
function {
  this = this;
  let r;
  let n;
  n = this.resolveRenderedComponent(e);
  r = [];
  if (!(t)) goto L_89;
  this.collectElements(n.virtualNode, r);
  goto L_183;
  let e#1;
  e#1 = n.virtualNode.children;
  if (!(e#1)) goto L_183;
  let t#1;
  for (const t#1 of e#1.children) {
    if (!(t#1.element)) goto L_17c;
    r.push(C(this, t#1.element));
  }
  return r;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=196B file=valdi_core/src/Renderer
// locals: e, this
// closure: f
function {
  this = this;
  if (!(this.nodeTree.children)) goto L_c3;
  let e;
  for (const e of this.nodeTree.children.children) {
    return f(this, e);
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=78B file=valdi_core/src/Renderer
// args: e
// locals: this
// closure: f
function {
  this = this;
  return f(this, this.resolveRenderedComponent(e).virtualNode);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=56B file=valdi_core/src/Renderer
// args: e
// locals: t, this
// closure: C
function {
  this = this;
  let t;
  t = this.elementById[e];
  if (!(t)) goto L_37;
  return C(this, t);   // tail call
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=205B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  if ((this.began)) goto L_4a;
  if (!(this.collectingRenderCompleteCallbacks)) goto L_ca;
  if ((this.completions)) goto L_80;
  this.completions = [];
  [];
  goto L_cc;
  // [栈深重同步 1 -> 0]
  e();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=260B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  if (!(this.began)) goto L_70;
  goto L_103;
  // [栈深重同步 1 -> 0]
  this.doBegin();
  this.delegate.onNextLayoutComplete(e);
  this.doEnd();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=260B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  if (!(this.began)) goto L_70;
  goto L_103;
  // [栈深重同步 1 -> 0]
  this.doBegin();
  this.delegate.onNextDraw(e);
  this.doEnd();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=127B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  if ((this.completions)) goto L_36;
  this.completions = [];
  [];
  this.completions.push(e);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=157B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, this
function {
  this = this;
  let r;
  let n;
  n = this.resolveRenderedComponent(e);
  r = n.disposables;
  if ((r)) goto L_73;
  r = [];
  [];
  n.disposables = r;
  r;
  r.push(t);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=2 cpool=0 bc=238B file=valdi_core/src/Renderer
// args: e, t, n
// locals: r, this
// closure: c, h
function {
  this = this;
  let r;
  r = this.getElementById(e);
  if (!(r)) goto L_ed;
  if (!(this.rendererTracingEnabled)) goto L_c3;
  c.instantTraceWithArgs("Renderer.attributeChanged", ["nodeId", e, "attributeName", t, "attributeValue", h.debugStringify(n, 1, true)]);
  r.attributes[t] = n;
  n;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  this.eventListener = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return this.eventListener;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=55B file=valdi_core/src/Renderer
// args: e
// locals: this
// closure: c
function {
  this = this;
  if (!(e)) goto L_2d;
  this.rendererTracingEnabled = c.isTracingSupported();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  return this.rendererTracingEnabled;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=249B file=valdi_core/src/Renderer
// args: e, t
// locals: n, e#1, this
// closure: C
function {
  this = this;
  if (!(e.element)) goto L_72;
  t.push(C(this, e.element));
  return;
  let n;
  n = e.children;
  if (!(n)) goto L_f8;
  let e#1;
  for (const e#1 of n.children) {
    this.collectElements(e#1, t);
  }
  return;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=305B file=valdi_core/src/Renderer
// args: e, t
// locals: n, r, e#1, this
function {
  this = this;
  let n;
  n = e.children;
  if (!(n)) goto L_130;
  let r;
  for (const r of n.children) {
    if (!(r.component)) goto L_fd;
    let e#1;
    e#1 = r.component.instance;
    if (!(e#1)) goto L_fa;
    t.push(e#1);
   continue;
    this.collectComponentsChildren(r, t);
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=valdi_core/src/Renderer
// args: e
// locals: this
function {
  this = this;
  return this.elementById[e];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=173B file=valdi_core/src/Renderer
// locals: this
function {
  this = this;
  if (!(this.nodeStack.length)) goto L_33;
  throw Error("Node stack is not empty");
  if (!(this.currentNode)) goto L_63;
  throw Error("We have a current node");
  this.doVerifyIntegrity(this.nodeTree, undefined, undefined);
  return;
}

// fn <atom:0>  args=3 vars=12 closure=1 cpool=0 bc=1981B file=valdi_core/src/Renderer
// args: e, t, n
// locals: n#1, t#1, r, i, o, s, r#1, e#1, this
// closure: R
function {
  this = this;
  let r;
  if (!(e.component)) goto L_a5;
  if (!(e.element)) goto L_a5;
  throw Error("Node with key ".concat(e.key, " has both component and element!"));
  if (!((e.parentComponent !== t))) goto L_122;
  throw Error("Node ".concat(e.key, " has incorrect parentComponent"));
  if (!((e.parentElement !== n))) goto L_19f;
  throw Error("Node ".concat(e.key, " has incorrect parentElement"));
  if (!(e.component)) goto L_377;
  let n#1;
  n#1 = e.component;
  if (!(n#1.needRendering)) goto L_264;
  throw Error("needRendering is true in Component ".concat(e.key));
  if (!(n#1.viewModelChanged)) goto L_2dc;
  throw Error("viewModelChanged is true in Component ".concat(e.key));
  if (!(n#1.rerenderScheduled)) goto L_354;
  throw Error("rerenderScheduled is true in Component ".concat(e.key));
  t = e.component;
  if (!(e.element)) goto L_421;
  let t#1;
  t#1 = e.element;
  n = t#1;
  if (!(t#1.childrenDirty)) goto L_421;
  throw Error("Children elements are dirty for ".concat(R(e)));
  r = e.children;
  if (!(r)) goto L_7bc;
  let o;
  let i;
  if (!(!r.previousChildren)) goto L_485;
  throw Error("Missing previousChildKeys");
  if (!((r.previousChildren !== r.children))) goto L_4dc;
  throw Error("Out of sync previous child keys with childKeys");
  i = {};
  o = 0;
  let s;
  for (const s of r.children) {
    let r#1;
    r#1 = s.key;
    if (!((s.parentIndex !== o))) goto L_5c5;
    throw Error("Child ".concat(r#1, " should have index ", o, " but has ", s.parentIndex));
    if (!((s.parent !== e))) goto L_69c;
    if (!((s.parent == null))) goto L_676;
    s.parent;
    goto L_697;
    throw Error("Child ".concat(r#1, " should have parent ", e.key, " but has ", undefined.key));
    if (!(i[r#1])) goto L_6d8;
    throw Error("Duplicate child key ".concat(r#1));
    i[r#1] = true;
    this.doVerifyIntegrity(s, t, n);
    o = <o_new>;
    (o++);
  }
  let e#1;
  for (const e#1 of r.childByKey) {
    if (!(r.childByKey[e#1])) continue;
    if (!(!i[e#1])) continue;
    throw Error("Orphan child for key ".concat(e#1, ", present in childByKey but not in childKeys list"));
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  return;
}

// fn k  args=0 vars=1 closure=1 cpool=0 bc=29B file=valdi_core/src/Renderer
// locals: e
// closure: v
function {
  let e;
  e = v;
  if (!(!e)) goto L_19;
  throw Error("Cannot call this outside of a onRender callback");
  return e;
}

// fn <atom:0>  args=3 vars=41 closure=0 cpool=164 bc=1775B file=valdi_core/src/Renderer
// args: require, module, exports
// locals: e, t, n, r, i, o, s, d, l, a, h, c, u, m, p, g, v, C, f, b, y, VirtualNodeBridge, <class_fields_init>, VirtualNodeBridge#1, RenderedElementBridge, <class_fields_init>#1, RenderedElementBridge#1, E, w, R, I, N, M, A, Renderer, <class_fields_init>#2, Renderer#1, k
function {
  C = function C;
  f = function f;
  b = function b;
  y = function y;
  R = function R;
  I = function I;
  N = function N;
  M = function M;
  A = function A;
  k = function k;
  let Renderer#1;
  let w;
  let E;
  let RenderedElementBridge#1;
  let VirtualNodeBridge#1;
  let v;
  let g;
  let p;
  let m;
  let u;
  let c;
  let h;
  let a;
  let l;
  let d;
  let s;
  let o;
  let i;
  let r;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Renderer = undefined;
  exports.getRenderer = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("./enableElementAPI");
  n = require("coreutils/src/ArrayUtils");
  r = require("./CapturedNode");
  i = require("./ComponentPrototype");
  o = require("./utils/CallbackInternal");
  s = require("./utils/ClassNames");
  d = require("./utils/PropertyList");
  l = require("./utils/RenderedVirtualNodeUtils");
  a = require("./utils/RendererError");
  h = require("./utils/StringUtils");
  c = require("./utils/Trace");
  u = Object.freeze({});
  m = Object.freeze([]);
  p = Symbol();
  g = Symbol();
  v = undefined;
  let VirtualNodeBridge;
  let <class_fields_init>;
  class VirtualNodeBridge extends undefined { ... }
  <proto:VirtualNodeBridge>.key = function <atom:0>;
  <proto:VirtualNodeBridge>.parent = function <atom:0>;
  <proto:VirtualNodeBridge>.element = function <atom:0>;
  <proto:VirtualNodeBridge>.component = function <atom:0>;
  <proto:VirtualNodeBridge>.children = function <atom:0>;
  <proto:VirtualNodeBridge>.parentIndex = function <atom:0>;
  <proto:VirtualNodeBridge>.uniqueId = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:VirtualNodeBridge>;
  VirtualNodeBridge = function <atom:0>;
  // close_loc <class_fields_init>
  VirtualNodeBridge#1 = function <atom:0>;
  let RenderedElementBridge;
  let <class_fields_init>#1;
  class RenderedElementBridge extends undefined { ... }
  <proto:RenderedElementBridge>.tag = function <atom:0>;
  <proto:RenderedElementBridge>.viewClass = function <atom:0>;
  <proto:RenderedElementBridge>.id = function <atom:0>;
  <proto:RenderedElementBridge>.key = function <atom:0>;
  <proto:RenderedElementBridge>.children = function <atom:0>;
  <proto:RenderedElementBridge>.emittingComponent = function <atom:0>;
  <proto:RenderedElementBridge>.parent = function <atom:0>;
  <proto:RenderedElementBridge>.parentIndex = function <atom:0>;
  <proto:RenderedElementBridge>.frame = function <atom:0>;
  <proto:RenderedElementBridge>.invalidateChildren = function <atom:0>;
  <proto:RenderedElementBridge>.getAttributeNames = function <atom:0>;
  <proto:RenderedElementBridge>.getAttribute = function <atom:0>;
  <proto:RenderedElementBridge>.setAttribute = function <atom:0>;
  <proto:RenderedElementBridge>.setAttributes = function <atom:0>;
  <proto:RenderedElementBridge>.getNativeView = function <atom:0>;
  <proto:RenderedElementBridge>.getNativeNode = function <atom:0>;
  <proto:RenderedElementBridge>.takeSnapshot = function <atom:0>;
  <proto:RenderedElementBridge>.getVirtualNode = function <atom:0>;
  <proto:RenderedElementBridge>.toConsoleRepresentation = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:RenderedElementBridge>;
  RenderedElementBridge = function <atom:0>;
  // close_loc <class_fields_init>#1
  RenderedElementBridge#1 = function <atom:0>;
  E = Symbol();
  w = Symbol();
  let Renderer;
  let <class_fields_init>#2;
  class Renderer extends undefined { ... }
  <proto:Renderer>.began = function <atom:0>;
  <proto:Renderer>.enableElementAPI = function <atom:0>;
  <proto:Renderer>.onDestroy = function <atom:0>;
  <proto:Renderer>.batchUpdates = function <atom:0>;
  <proto:Renderer>.animate = function <atom:0>;
  <proto:Renderer>.cancelAnimation = function <atom:0>;
  <proto:Renderer>.beginMainThreadCallback = function <atom:0>;
  <proto:Renderer>.setMainThreadCallbackClosureArg = function <atom:0>;
  <proto:Renderer>.endMainThreadCallback = function <atom:0>;
  <proto:Renderer>.validateAnimationOptions = function <atom:0>;
  <proto:Renderer>.validateSpringAnimationOptions = function <atom:0>;
  <proto:Renderer>.validateBasicAnimationOptions = function <atom:0>;
  <proto:Renderer>.doBegin = function <atom:0>;
  <proto:Renderer>.renderRoot = function <atom:0>;
  <proto:Renderer>.renderRootComponent = function <atom:0>;
  <proto:Renderer>.dumpLogMetadata = function <atom:0>;
  <proto:Renderer>.begin = function <atom:0>;
  <proto:Renderer>.doEnd = function <atom:0>;
  <proto:Renderer>.end = function <atom:0>;
  <proto:Renderer>.beginAnimation = function <atom:0>;
  <proto:Renderer>.endAnimation = function <atom:0>;
  <proto:Renderer>.isComponentAlive = function <atom:0>;
  <proto:Renderer>.collectLogInfo = function <atom:0>;
  <proto:Renderer>.resolveRenderedComponent = function <atom:0>;
  <proto:Renderer>.renderComponent = function <atom:0>;
  <proto:Renderer>.beginElementIfNeeded = function <atom:0>;
  <proto:Renderer>.beginElement = function <atom:0>;
  <proto:Renderer>.beginElementWithViewFactory = function <atom:0>;
  <proto:Renderer>.beginElementWithViewFactoryIfNeeded = function <atom:0>;
  <proto:Renderer>.endElement = function <atom:0>;
  <proto:Renderer>.callVisiblityChanged = function <atom:0>;
  <proto:Renderer>.callViewportChanged = function <atom:0>;
  <proto:Renderer>.elementsVisibilityChanged = function <atom:0>;
  <proto:Renderer>.rerenderLazyComponentIfNeeded = function <atom:0>;
  <proto:Renderer>.pushVirtualNode = function <atom:0>;
  <proto:Renderer>.popVirtualNode = function <atom:0>;
  <proto:Renderer>.throwDisallowedRootElementType = function <atom:0>;
  <proto:Renderer>.onElementMoved = function <atom:0>;
  <proto:Renderer>.flushPendingMovesInTopDownOrder = function <atom:0>;
  <proto:Renderer>.doElementIterate = function <atom:0>;
  <proto:Renderer>.resolveElementChildrenInitial = function <atom:0>;
  <proto:Renderer>.resolveElementChildrenIncremental = function <atom:0>;
  <proto:Renderer>.resolveElementChildren = function <atom:0>;
  <proto:Renderer>.processChildrenUpdate = function <atom:0>;
  <proto:Renderer>.insertNodeInParent = function <atom:0>;
  <proto:Renderer>.resolveVirtualNode = function <atom:0>;
  <proto:Renderer>.callComponentDisposables = function <atom:0>;
  <proto:Renderer>.destroyVirtualNode = function <atom:0>;
  <proto:Renderer>.getCurrentNode = function <atom:0>;
  <proto:Renderer>.getCurrentElement = function <atom:0>;
  <proto:Renderer>.getCurrentComponent = function <atom:0>;
  <proto:Renderer>.resolveComponentCatchingError = function <atom:0>;
  <proto:Renderer>.onUncaughtError = function <atom:0>;
  <proto:Renderer>.remember = function <atom:0>;
  <proto:Renderer>.hasInjectedAttribute = function <atom:0>;
  <proto:Renderer>.setInjectedAttribute = function <atom:0>;
  <proto:Renderer>.setAttribute = function <atom:0>;
  <proto:Renderer>.setAttributeBool = function <atom:0>;
  <proto:Renderer>.setAttributeNumber = function <atom:0>;
  <proto:Renderer>.setAttributeString = function <atom:0>;
  <proto:Renderer>.setAttributeFunction = function <atom:0>;
  <proto:Renderer>.setAttributeStyle = function <atom:0>;
  <proto:Renderer>.setAttributesFromStyleLiteral = function <atom:0>;
  <proto:Renderer>.setAttributeRef = function <atom:0>;
  <proto:Renderer>.setAttributes = function <atom:0>;
  <proto:Renderer>.hasAttribute = function <atom:0>;
  <proto:Renderer>.setAttributeOnElement = function <atom:0>;
  <proto:Renderer>.createElementHandle = function <atom:0>;
  <proto:Renderer>.detachElementFromHolder = function <atom:0>;
  <proto:Renderer>.onAttributeChange = function <atom:0>;
  <proto:Renderer>.beginComponent = function <atom:0>;
  <proto:Renderer>.beginComponentWithoutPrototype = function <atom:0>;
  <proto:Renderer>.hasComponentContext = function <atom:0>;
  <proto:Renderer>.setComponentContext = function <atom:0>;
  <proto:Renderer>.setComponentOnCreateObserver = function <atom:0>;
  <proto:Renderer>.setComponentOnDestroyObserver = function <atom:0>;
  <proto:Renderer>.onRuntimeIssue = function <atom:0>;
  <proto:Renderer>.addObserver = function <atom:0>;
  <proto:Renderer>.removeObserver = function <atom:0>;
  <proto:Renderer>.createComponent = function <atom:0>;
  <proto:Renderer>.skipVirtualNodeChildren = function <atom:0>;
  <proto:Renderer>.doRerenderSlotIfNeeded = function <atom:0>;
  <proto:Renderer>.rerenderSlots = function <atom:0>;
  <proto:Renderer>.endComponent = function <atom:0>;
  <proto:Renderer>.injectAttributesIfNeeded = function <atom:0>;
  <proto:Renderer>.popToVirtualNode = function <atom:0>;
  <proto:Renderer>.hasViewModelProperty = function <atom:0>;
  <proto:Renderer>.setViewModelProperty = function <atom:0>;
  <proto:Renderer>.beginSlot = function <atom:0>;
  <proto:Renderer>.endSlot = function <atom:0>;
  <proto:Renderer>.throwInvalidSlot = function <atom:0>;
  <proto:Renderer>.renderNamedSlot = function <atom:0>;
  <proto:Renderer>.renderUnnamedSlot = function <atom:0>;
  <proto:Renderer>.setNamedSlot = function <atom:0>;
  <proto:Renderer>.setUnnamedSlot = function <atom:0>;
  <proto:Renderer>.setNamedSlots = function <atom:0>;
  <proto:Renderer>.setViewModelProperties = function <atom:0>;
  <proto:Renderer>.setViewModelFull = function <atom:0>;
  <proto:Renderer>.render = function <atom:0>;
  <proto:Renderer>.getRootComponent = function <atom:0>;
  <proto:Renderer>.getRootComponents = function <atom:0>;
  <proto:Renderer>.getRootElement = function <atom:0>;
  <proto:Renderer>.getComponentKey = function <atom:0>;
  <proto:Renderer>.getComponentChildren = function <atom:0>;
  <proto:Renderer>.getComponentParent = function <atom:0>;
  <proto:Renderer>.getCurrentComponentInstance = function <atom:0>;
  <proto:Renderer>.getComponentRootElements = function <atom:0>;
  <proto:Renderer>.getRootVirtualNode = function <atom:0>;
  <proto:Renderer>.getComponentVirtualNode = function <atom:0>;
  <proto:Renderer>.getElementForId = function <atom:0>;
  <proto:Renderer>.onRenderComplete = function <atom:0>;
  <proto:Renderer>.onLayoutComplete = function <atom:0>;
  <proto:Renderer>.onNextDraw = function <atom:0>;
  <proto:Renderer>.onNextRenderComplete = function <atom:0>;
  <proto:Renderer>.registerComponentDisposable = function <atom:0>;
  <proto:Renderer>.attributeUpdatedExternally = function <atom:0>;
  <proto:Renderer>.setEventListener = function <atom:0>;
  <proto:Renderer>.getEventListener = function <atom:0>;
  <proto:Renderer>.setTracingEnabled = function <atom:0>;
  <proto:Renderer>.isTracingEnabled = function <atom:0>;
  <proto:Renderer>.collectElements = function <atom:0>;
  <proto:Renderer>.collectComponentsChildren = function <atom:0>;
  <proto:Renderer>.getElementById = function <atom:0>;
  <proto:Renderer>.verifyIntegrity = function <atom:0>;
  <proto:Renderer>.doVerifyIntegrity = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:Renderer>;
  Renderer = function <atom:0>;
  // close_loc <class_fields_init>#2
  Renderer#1 = function <atom:0>;
  exports.Renderer = Renderer#1;
  Renderer#1.debug = false;
  exports.getRenderer = k;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/Renderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
