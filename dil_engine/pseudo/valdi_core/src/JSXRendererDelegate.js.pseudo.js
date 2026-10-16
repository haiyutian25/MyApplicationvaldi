// fn <atom:0>  args=5 vars=6 closure=2 cpool=0 bc=265B file=valdi_core/src/JSXRendererDelegate
// args: t, e, i, n, r
// locals: this
// closure: <class_fields_init>, a
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.treeId = t;
  this.destroyed = false;
  this.stringCache = e;
  this.attributeCache = i;
  this.injectedAttributeCache = n;
  this.submitRawRenderRequest = r;
  this.buffer = new a.Buffer(512);
  this.attachedValues = [];
  this.attachedValueIndexByString = {};
  this.attachedValueIndexByObjectId = {};
  this.frameStateByElementId = {};
  this.pendingFrameObserver = this.processFrameUpdates.bind(this);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: this
function {
  this = this;
  this.renderCompleteScheduler = t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=26B file=valdi_core/src/JSXRendererDelegate
// locals: this
function {
  this = this;
  this.destroyed = true;
  this.frameStateByElementId = {};
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=150B file=valdi_core/src/JSXRendererDelegate
// args: t, e
// locals: this
function {
  this = this;
  this.buffer.putUint32_2((1 | (t << 8)), this.stringCache.get(e));
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=91B file=valdi_core/src/JSXRendererDelegate
// args: t, e
// locals: this
function {
  this = this;
  this.onElementCreated(t, "Deferred");
  this.onElementAttributeChangeAny(t, "viewFactory", e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=118B file=valdi_core/src/JSXRendererDelegate
// args: t, e
// locals: this
function {
  this = this;
  this.buffer.putUint32_2((20 | (t << 8)), this.getAttachedValueIndex(e));
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=118B file=valdi_core/src/JSXRendererDelegate
// args: t, e
// locals: this
function {
  this = this;
  this.buffer.putUint32_2((21 | (t << 8)), this.getAttachedValueIndex(e));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=116B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: this
function {
  this = this;
  delete t;
  this.frameStateByElementId;
  this.buffer.putUint32((2 | (t << 8)));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: this
function {
  this = this;
  this.frameStateByElementId;
  delete t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=79B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: this
function {
  this = this;
  this.buffer.putUint32((3 | (t << 8)));
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=81B file=valdi_core/src/JSXRendererDelegate
// args: t, e, i
// locals: this
function {
  this = this;
  this.buffer.putUint32_3((4 | (t << 8)), e, i);
  return;
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=0 bc=1771B file=valdi_core/src/JSXRendererDelegate
// args: t, i
// locals: n, a, r, s, this
// closure: e
function {
  this = this;
  let s;
  let r;
  let a;
  let n;
  n = this.buffer;
  n.putUint32(14);
  if (!((t.duration == null))) goto L_a9;
  t.duration;
  n.putFloat64(0);
  a = t.curve;
  if ((a)) goto L_120;
  a = e.AnimationCurve.EaseInOut;
  e.AnimationCurve.EaseInOut;
  if (!((a === e.AnimationCurve.Linear))) goto L_199;
  n.putUint32(1);
  goto L_2f4;
  if (!((a === e.AnimationCurve.EaseIn))) goto L_20e;
  n.putUint32(2);
  goto L_2f4;
  if (!((a === e.AnimationCurve.EaseOut))) goto L_282;
  n.putUint32(3);
  goto L_2f4;
  if (!((a === e.AnimationCurve.EaseInOut))) goto L_2f4;
  n.putUint32(4);
  a;
  if (!(t.beginFromCurrentState)) goto L_343;
  goto L_36b;
  // [栈深重同步 1 -> 0]
  n.putUint32(0);
  if (!(t.crossfade)) goto L_3b7;
  goto L_3b8;
  // [栈深重同步 3 -> 2]
  n.putUint32(0);
  if (!((t.stiffness == null))) goto L_408;
  t.stiffness;
  n.putFloat64(0);
  if (!((t.damping == null))) goto L_458;
  t.damping;
  n.putFloat64(0);
  if (!((t.appearanceBehavior == null))) goto L_4a9;
  t.appearanceBehavior;
  goto L_4ca;
  r = this.animationAppearanceAttributesToArray(undefined.enterAttributes);
  if (!((t.appearanceBehavior == null))) goto L_51b;
  t.appearanceBehavior;
  goto L_53c;
  s = this.animationAppearanceAttributesToArray(undefined.exitAttributes);
  n.putUint32(this.getAttachedValueIndex(t.controlPoints));
  n.putUint32(this.getAttachedValueIndex(t.completion));
  n.putUint32(i);
  n.putUint32(this.getAttachedValueIndex(r));
  n.putUint32(this.getAttachedValueIndex(s));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=valdi_core/src/JSXRendererDelegate
// locals: this
function {
  this = this;
  this.buffer.putUint32(15);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=147B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: this
function {
  this = this;
  this.buffer.putUint32(17);
  this.buffer.putUint32(t);
  return;
}

// fn <atom:0>  args=1 vars=9 closure=1 cpool=0 bc=533B file=valdi_core/src/JSXRendererDelegate
// args: e
// locals: t, i, i#1, t#1, n, t#2, i#2, this
// closure: t
function {
  this = this;
  if (!(("string" == typeof e))) goto L_c8;
  let t;
  t = this.attachedValueIndexByString[e];
  if (!(!t)) goto L_c4;
  let i;
  i = this.attachedValues;
  t = i.length;
  i.length;
  i.push(e);
  this.attachedValueIndexByString[e] = t;
  return t;
  let i#1;
  i#1 = t.getObjectId(e);
  if (!(i#1)) goto L_1b7;
  let t#1;
  t#1 = this.attachedValueIndexByObjectId[i#1];
  if (!(!t#1)) goto L_1b3;
  let n;
  n = this.attachedValues;
  t#1 = n.length;
  n.length;
  n.push(e);
  this.attachedValueIndexByObjectId[i#1] = t#1;
  return t#1;
  let i#2;
  let t#2;
  t#2 = this.attachedValues;
  i#2 = t#2.length;
  t#2.push(e);
  return i#2;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=487B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: e
// closure: s
function {
  let e;
  if (!(!t)) goto L_8;
  return;
  e = [t.originX, t.originY, t.translationX, t.translationY, t.scaleX, t.scaleY, t.opacity];
  if (!((undefined === t.translationXAbsolute))) goto L_146;
  if (((undefined === t.translationYAbsolute))) goto L_1e2;
  if ((!s.supportsAbsoluteAnimationTranslations())) goto L_1e2;
  e.push(t.translationXAbsolute, t.translationYAbsolute);
  return e;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=0 bc=206B file=valdi_core/src/JSXRendererDelegate
// args: t, e, i
// locals: n, a, this
function {
  this = this;
  let a;
  let n;
  n = this.attributeCache.get(e);
  a = this.buffer;
  a.putUint32_2((10 | (t << 8)), n);
  a.putFloat64(i);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=338B file=valdi_core/src/JSXRendererDelegate
// args: t, e, i
// locals: n, a, t#1, this
function {
  this = this;
  let a;
  let n;
  n = this.attributeCache.get(e);
  a = this.attachedValueIndexByString[i];
  if (!(!a)) goto L_fe;
  let t#1;
  t#1 = this.attachedValues;
  a = t#1.length;
  t#1.length;
  t#1.push(i);
  this.attachedValueIndexByString[i] = a;
  this.buffer.putUint32_3((13 | (t << 8)), n, a);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=158B file=valdi_core/src/JSXRendererDelegate
// args: t, e
// locals: i, this
function {
  this = this;
  let i;
  i = this.attributeCache.get(e);
  this.buffer.putUint32_2((8 | (t << 8)), i);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=157B file=valdi_core/src/JSXRendererDelegate
// args: t, e
// locals: i, this
function {
  this = this;
  let i;
  i = this.attributeCache.get(e);
  this.buffer.putUint32_2((7 | (t << 8)), i);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=257B file=valdi_core/src/JSXRendererDelegate
// args: t, e
// locals: i, this
function {
  this = this;
  let i;
  if (!(("onLayout" === e))) goto L_37;
  this.updateOnLayoutCallback(t, undefined);
  return;
  if (!(("$onLayout" === e))) goto L_69;
  this.updateInjectedOnLayoutCallback(t, undefined);
  return;
  i = this.attributeCache.get(e);
  this.buffer.putUint32_2((5 | (t << 8)), i);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=0 bc=238B file=valdi_core/src/JSXRendererDelegate
// args: t, e, i
// locals: n, a, this
// closure: o
function {
  this = this;
  let a;
  let n;
  n = this.attributeCache.get(e);
  a = i.toNative(o.createCSSRule);
  this.buffer.putUint32_3((12 | (t << 8)), n, a);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=348B file=valdi_core/src/JSXRendererDelegate
// args: t, e, i
// locals: n, a, r, this
function {
  this = this;
  let r;
  let a;
  let n;
  if (!(("onLayout" === e))) goto L_3d;
  this.updateOnLayoutCallback(t, i);
  return;
  if (!(("$onLayout" === e))) goto L_6f;
  this.updateInjectedOnLayoutCallback(t, i);
  return;
  n = this.attributeCache.get(e);
  a = this.attachedValues;
  r = a.length;
  a.push(i);
  this.buffer.putUint32_3((13 | (t << 8)), n, r);
  return;
}

// fn <atom:0>  args=3 vars=10 closure=2 cpool=0 bc=1117B file=valdi_core/src/JSXRendererDelegate
// args: t, e, i
// locals: a, r, t#1, e#1, e#2, e#3, this
// closure: n, o
function {
  this = this;
  let r;
  let a;
  if (!(("onLayout" === e))) goto L_3c;
  this.updateOnLayoutCallback(t, i);
  return;
  if (!(("$onLayout" === e))) goto L_6f;
  this.updateInjectedOnLayoutCallback(t, i);
  return;
  a = undefined;
  if (!(("$" === e[0]))) goto L_cb;
  goto L_113;
  // [栈深重同步 1 -> 0]
  a = this.attributeCache.get(e);
  this.attributeCache.get(e);
  r = this.buffer;
  if (!((undefined === i))) goto L_173;
  r.putUint32_2((5 | (t << 8)), a);
  return;
  if (!((null === i))) goto L_1aa;
  r.putUint32_2((6 | (t << 8)), a);
  return;
  if (!(("boolean" == typeof i))) goto L_21c;
  if (!(i)) goto L_1ea;
  goto L_21a;
  // [栈深重同步 1 -> 0]
  r.putUint32_2((7 | (t << 8)), a);
  return;
  if (!(("number" == typeof i))) goto L_282;
  r.putUint32_2((10 | (t << 8)), a);
  r.putFloat64(i);
  return;
  if (!(Array.isArray(i))) goto L_34c;
  r.putUint32_3((11 | (t << 8)), a, i.length);
  let t#1;
  for (const t#1 of i) {
    let e#1;
    e#1 = this.getAttachedValueIndex(t#1);
    r.putUint32(e#1);
  }
  return;
  if (!((i instanceof n.Style))) goto L_3fb;
  let e#2;
  e#2 = i.toNative(o.createCSSRule);
  r.putUint32_3((12 | (t << 8)), a, e#2);
  return;
  let e#3;
  e#3 = this.getAttachedValueIndex(i);
  r.putUint32_3((13 | (t << 8)), a, e#3);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=363B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: this
// closure: u, o
function {
  this = this;
  if (!(u.isVersionAtLeast(294))) goto L_de;
  return o.createMainThreadCallback(t.modulePath, t.callbackIndex, t.captureCount, this.treeId);   // tail call
  return o.createMainThreadCallback(t.modulePath, t.callbackIndex, t.captureCount);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=152B file=valdi_core/src/JSXRendererDelegate
// args: t, e, i
// locals: this
function {
  this = this;
  this.buffer.putUint32_4(19, this.getAttachedValueIndex(t), e, this.getAttachedValueIndex(i));
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=120B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.getAttachedValueIndex(t);
  this.buffer.putUint32_2(16, e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=120B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.getAttachedValueIndex(t);
  this.buffer.putUint32_2(18, e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=105B file=valdi_core/src/JSXRendererDelegate
// locals: this
function {
  this = this;
  this.renderStartTime = new Date().getTime();
  this.buffer = this.getRenderBuffer();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=valdi_core/src/JSXRendererDelegate
// closure: this, r
function {
  this.releaseRenderBuffer(r);
  return;
}

// fn <atom:0>  args=0 vars=7 closure=0 cpool=1 bc=859B file=valdi_core/src/JSXRendererDelegate
// locals: t, e, i, n, a, r, this
function {
  this = this;
  let r;
  let a;
  let n;
  let i;
  let e;
  let t;
  t = this.pendingVisibilityObserver;
  e = this.pendingFrameObserver;
  if ((this.destroyed)) goto L_dd;
  if (!(this.buffer.empty())) goto L_175;
  if (!(!t)) goto L_175;
  if (!(!e)) goto L_175;
  this.buffer.rewind();
  this.releaseRenderBuffer(this.buffer);
  return;
  i = this.buffer.inner();
  n = (this.buffer.size() / 4);
  this.buffer.rewind();
  a = this.attachedValues;
  if (!(a.length)) goto L_2a3;
  this.attachedValues = [];
  this.attachedValueIndexByString = {};
  this.attachedValueIndexByObjectId = {};
  {};
  this.pendingVisibilityObserver = undefined;
  this.pendingFrameObserver = undefined;
  r = this.buffer;
  this.submitRawRenderRequest({treeId: this.treeId, descriptor: i, descriptorSize: n, values: a, visibilityObserver: t, frameObserver: e}, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=87B file=valdi_core/src/JSXRendererDelegate
// closure: h, a
function {
  if ((h.pop())) goto L_56;
  return new a.Buffer(512);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=valdi_core/src/JSXRendererDelegate
// args: t
// closure: h
function {
  h.push(t);
  return;
}

// fn <atom:0>  args=5 vars=5 closure=1 cpool=0 bc=36B file=valdi_core/src/JSXRendererDelegate
// args: e, i, n, a, r
// closure: t
function {
  try { // catch -> L_19
  t(e, i, n, r);
  <?>;
  // gosub (finally 块) 31
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 31
  throw <?>;
  a();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=15B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: this
function {
  this = this;
  this.pendingVisibilityObserver = function <atom:0>;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=valdi_core/src/JSXRendererDelegate
// args: t
// closure: e
function {
  if ((t)) goto L_7;
  e(undefined);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=79B file=valdi_core/src/JSXRendererDelegate
// args: t, e
// locals: this
// closure: o
function {
  this = this;
  o.getNativeViewForElementId(this.treeId, t, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=76B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: this
// closure: o
function {
  this = this;
  return o.getNativeNodeForElementId(this.treeId, t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=79B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: this
function {
  this = this;
  if (!((this.frameStateByElementId[t] == null))) goto L_2d;
  this.frameStateByElementId[t];
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.frame;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=78B file=valdi_core/src/JSXRendererDelegate
// args: t, e
// locals: this
// closure: o
function {
  this = this;
  o.getFrameForElementId(this.treeId, t, e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=78B file=valdi_core/src/JSXRendererDelegate
// args: t, e
// locals: this
// closure: o
function {
  this = this;
  o.takeElementSnapshot(this.treeId, t, e);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=42B file=valdi_core/src/JSXRendererDelegate
// args: t, e
// closure: o
function {
  o.onUncaughtError(t, e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=101B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.frameStateByElementId[t];
  if ((e)) goto L_60;
  e = {};
  {};
  this.frameStateByElementId[t] = e;
  e;
  return e;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=51B file=valdi_core/src/JSXRendererDelegate
// args: t, e
// locals: this
function {
  this = this;
  this.getFrameState(t).onLayout = e;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=51B file=valdi_core/src/JSXRendererDelegate
// args: t, e
// locals: this
function {
  this = this;
  this.getFrameState(t).injectedOnLayout = e;
  return;
}

// fn <atom:0>  args=0 vars=7 closure=3 cpool=0 bc=315B file=valdi_core/src/JSXRendererDelegate
// locals: i, n, a, r, s, u, o
// closure: t, this, e
function {
  let i;
  i = 0;
  if (!((i < t.length))) goto L_13a;
  let o;
  let u;
  let s;
  let r;
  let a;
  let n;
  i = <i_new>;
  n = t[(i++)];
  i = <i_new>;
  a = t[(i++)];
  i = <i_new>;
  r = t[(i++)];
  i = <i_new>;
  s = t[(i++)];
  i = <i_new>;
  u = t[(i++)];
  o = this.getFrameState(n);
  o.frame = {x: a, y: r, width: s, height: u};
  if ((o.onLayout)) goto L_f9;
  if (!(o.injectedOnLayout)) goto L_136;
  if ((e)) goto L_10b;
  e = [];
  [];
  e.push(n);
  goto L_5;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=58B file=valdi_core/src/JSXRendererDelegate
// locals: t
// closure: e, this
function {
  let t;
  for (const t of e) {
    this.flushOnLayoutCallback(t);
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=2 bc=99B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: e, this
// closure: r
function {
  this = this;
  let e;
  e = undefined;
  r.trace("processFrameUpdates", function <atom:0>);
  if (!(e)) goto L_62;
  this.renderCompleteScheduler(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=333B file=valdi_core/src/JSXRendererDelegate
// args: t
// locals: e, i, n, r, a, r#1, this
function {
  this = this;
  let a;
  let n;
  let i;
  let e;
  e = this.frameStateByElementId[t];
  if (!((e == null))) goto L_40;
  e;
  goto L_61;
  i = undefined.frame;
  if (!(!i)) goto L_69;
  return;
  n = e.onLayout;
  if (!(n)) goto L_da;
  try { // catch -> L_a3
  n(i);
  <?>;
  goto L_da;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_d9
  this.onUncaughtError("Failed to call onLayout", r);
  <?>;
  goto L_da;
  // [栈深重同步 0 -> 1]
  throw <?>;
  a = e.injectedOnLayout;
  if (!(a)) goto L_14c;
  try { // catch -> L_114
  a(i);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r#1 = <?>;
  try { // catch -> L_14b
  this.onUncaughtError("Failed to call onLayout", r#1);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=44 bc=639B file=valdi_core/src/JSXRendererDelegate
// args: require, module, exports
// locals: t, e, i, n, a, r, s, u, o, h, JSXRendererDelegate, <class_fields_init>, JSXRendererDelegate#1
function {
  let JSXRendererDelegate#1;
  let h;
  let o;
  let u;
  let s;
  let r;
  let a;
  let n;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.JSXRendererDelegate = undefined;
  t = require("valdi_core/src/utils/IdentifyableObject");
  e = require("./AnimationOptions");
  i = require("./ValdiRuntimeProvider");
  n = require("./Style");
  a = require("./utils/Buffer");
  r = require("./utils/Trace");
  s = require("./supportsAbsoluteAnimationTranslations");
  u = require("./CompilerIntrinsics");
  o = i.getValdiRuntime();
  h = [new a.Buffer(512)];
  let JSXRendererDelegate;
  let <class_fields_init>;
  class JSXRendererDelegate extends undefined { ... }
  <proto:JSXRendererDelegate>.setRenderCompleteScheduler = function <atom:0>;
  <proto:JSXRendererDelegate>.onDestroyed = function <atom:0>;
  <proto:JSXRendererDelegate>.onElementCreated = function <atom:0>;
  <proto:JSXRendererDelegate>.onCustomElementCreated = function <atom:0>;
  <proto:JSXRendererDelegate>.attachElementHandle = function <atom:0>;
  <proto:JSXRendererDelegate>.sendElementCommand = function <atom:0>;
  <proto:JSXRendererDelegate>.onElementDestroyed = function <atom:0>;
  <proto:JSXRendererDelegate>.onElementDestroyedFromParent = function <atom:0>;
  <proto:JSXRendererDelegate>.onElementBecameRoot = function <atom:0>;
  <proto:JSXRendererDelegate>.onElementMoved = function <atom:0>;
  <proto:JSXRendererDelegate>.onAnimationStart = function <atom:0>;
  <proto:JSXRendererDelegate>.onAnimationEnd = function <atom:0>;
  <proto:JSXRendererDelegate>.onAnimationCancel = function <atom:0>;
  <proto:JSXRendererDelegate>.getAttachedValueIndex = function <atom:0>;
  <proto:JSXRendererDelegate>.animationAppearanceAttributesToArray = function <atom:0>;
  <proto:JSXRendererDelegate>.onElementAttributeChangeNumber = function <atom:0>;
  <proto:JSXRendererDelegate>.onElementAttributeChangeString = function <atom:0>;
  <proto:JSXRendererDelegate>.onElementAttributeChangeTrue = function <atom:0>;
  <proto:JSXRendererDelegate>.onElementAttributeChangeFalse = function <atom:0>;
  <proto:JSXRendererDelegate>.onElementAttributeChangeUndefined = function <atom:0>;
  <proto:JSXRendererDelegate>.onElementAttributeChangeStyle = function <atom:0>;
  <proto:JSXRendererDelegate>.onElementAttributeChangeFunction = function <atom:0>;
  <proto:JSXRendererDelegate>.onElementAttributeChangeAny = function <atom:0>;
  <proto:JSXRendererDelegate>.createMainThreadCallback = function <atom:0>;
  <proto:JSXRendererDelegate>.setMainThreadCallbackClosureArg = function <atom:0>;
  <proto:JSXRendererDelegate>.onNextLayoutComplete = function <atom:0>;
  <proto:JSXRendererDelegate>.onNextDraw = function <atom:0>;
  <proto:JSXRendererDelegate>.onRenderStart = function <atom:0>;
  <proto:JSXRendererDelegate>.onRenderEnd = function <atom:0>;
  <proto:JSXRendererDelegate>.getRenderBuffer = function <atom:0>;
  <proto:JSXRendererDelegate>.releaseRenderBuffer = function <atom:0>;
  <proto:JSXRendererDelegate>.registerVisibilityObserver = function <atom:0>;
  <proto:JSXRendererDelegate>.getNativeView = function <atom:0>;
  <proto:JSXRendererDelegate>.getNativeNode = function <atom:0>;
  <proto:JSXRendererDelegate>.getCachedElementFrame = function <atom:0>;
  <proto:JSXRendererDelegate>.getElementFrame = function <atom:0>;
  <proto:JSXRendererDelegate>.takeElementSnapshot = function <atom:0>;
  <proto:JSXRendererDelegate>.onUncaughtError = function <atom:0>;
  <proto:JSXRendererDelegate>.getFrameState = function <atom:0>;
  <proto:JSXRendererDelegate>.updateOnLayoutCallback = function <atom:0>;
  <proto:JSXRendererDelegate>.updateInjectedOnLayoutCallback = function <atom:0>;
  <proto:JSXRendererDelegate>.processFrameUpdates = function <atom:0>;
  <proto:JSXRendererDelegate>.flushOnLayoutCallback = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:JSXRendererDelegate>;
  JSXRendererDelegate = function <atom:0>;
  // close_loc <class_fields_init>
  JSXRendererDelegate#1 = function <atom:0>;
  exports.JSXRendererDelegate = JSXRendererDelegate#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/JSXRendererDelegate
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
