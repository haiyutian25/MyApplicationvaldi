// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=308B file=dil_core/src/DILPressFeedback
// args: t
// closure: this, i, e
function {
  if (!(this.enabled)) goto L_133;
  if (!((undefined === this.activePress))) goto L_b5;
  if (!((undefined !== t))) goto L_b5;
  this.begin(t);
  this.releaseTimer = setTimeout(this.release, i);
  setTimeout(this.release, i);
  e.Device.performHapticFeedback("selection");
  if (!((this.onTap == null))) goto L_12f;
  this.onTap;
  this;
  goto L_133;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=745B file=dil_core/src/DILPressFeedback
// args: e
// locals: t, e#1
// closure: this, s, i
function {
  let t;
  if (!((this.onTouch == null))) goto L_2e;
  this.onTouch;
  this;
  goto L_32;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e);
  if (!(!this.enabled)) goto L_59;
  return;
  if (!((0 === e.state))) goto L_a7;
  this.begin(e);
  return;
  t = this.activePress;
  if (!((undefined === t))) goto L_d2;
  return;
  if (((Math.hypot((e.absoluteX - t.x), (e.absoluteY - t.y)) > s))) goto L_1b5;
  if (!((e.pointerCount > 1))) goto L_1de;
  this.release();
  return;
  if (!((2 === e.state))) goto L_2e8;
  let e#1;
  e#1 = (i - (Date.now() - t.startedAt));
  if (!((e#1 > 0))) goto L_2c2;
  this.cancelReleaseTimer();
  this.releaseTimer = setTimeout(this.release, e#1);
  goto L_2e7;
  // [栈深重同步 1 -> 0]
  this.release();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=464B file=dil_core/src/DILPressFeedback
// closure: e
function {
  if (!((e.element.getAttribute("scaleX") === e.pressedScaleX))) goto L_e7;
  e.element.setAttribute("scaleX", e.originalScaleX);
  if (!((e.element.getAttribute("scaleY") === e.pressedScaleY))) goto L_1cf;
  e.element.setAttribute("scaleY", e.originalScaleY);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=497B file=dil_core/src/DILPressFeedback
// locals: e
// closure: this, DILPressFeedback, r
function {
  let e;
  this.cancelReleaseTimer();
  e = this.activePress;
  this.activePress = undefined;
  DILPressFeedback.activeFeedback.delete(this);
  if (!((undefined !== e))) goto L_1f0;
  if (!((e.element.renderer.getElementForId(e.element.id) === e.element))) goto L_1f0;
  this.component.renderer.animate(r, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=dil_core/src/DILPressFeedback
// closure: this
function {
  this.enabled = false;
  this.onTouch = undefined;
  this.onTap = undefined;
  this.release();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=6 cpool=4 bc=110B file=dil_core/src/DILPressFeedback
// args: t, a
// locals: this
// closure: i, e, s, DILPressFeedback, r, <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.component = t;
  this.getTarget = a;
  this.enabled = false;
  this.registeredDisposal = false;
  this.handleTap = function <atom:0>;
  this.handleTouch = function <atom:0>;
  this.release = function <atom:0>;
  this.dispose = function <atom:0>;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=674B file=dil_core/src/DILPressFeedback
// args: t, s
// locals: this
// closure: e
function {
  this = this;
  if ((this.registeredDisposal)) goto L_9e;
  this.component.registerDisposable(this.dispose);
  this.registeredDisposal = true;
  true;
  if (!(s)) goto L_13c;
  if ((e.Device.isIOS())) goto L_13c;
  this.enabled = e.Device.isAndroid();
  if (!(this.enabled)) goto L_27c;
  this.onTouch = t.onTouch;
  this.onTap = t.onTap;
  t.onTouch = this.handleTouch;
  if (!((t.onTouchDelayDuration == null))) goto L_224;
  t.onTouchDelayDuration;
  t.onTouchDelayDuration = 0.05;
  0.05;
  if (!((undefined !== this.onTap))) goto L_2a1;
  t.onTap = this.handleTap;
  goto L_2a1;
  // [栈深重同步 1 -> 0]
  this.release();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=123B file=dil_core/src/DILPressFeedback
// closure: i, c
function {
  i.setAttributes({scaleX: c.pressedScaleX, scaleY: c.pressedScaleY});
  return;
}

// fn <atom:0>  args=1 vars=9 closure=5 cpool=1 bc=804B file=dil_core/src/DILPressFeedback
// args: e
// locals: s, i, t, e#1, n, l, c, this
// closure: a, DILPressFeedback, o, t, r
function {
  this = this;
  let c;
  let l;
  let n;
  let i;
  let s;
  this.release();
  s = this.getTarget();
  if (((undefined === s))) goto L_8d;
  if (!((e.pointerCount > 1))) goto L_90;
  return;
  i = a(s);
  let t;
  for (const t of DILPressFeedback.activeFeedback) {
    let e#1;
    if (!((t.activePress == null))) goto L_f1;
    t.activePress;
    goto L_112;
    e#1 = undefined.element;
    if (!((undefined !== e#1))) continue;
    if (!(o(e#1, i))) goto L_12a;
    return undefined;
    // [栈深重同步 0 -> 3]
    if (!(o(i, e#1))) goto L_15d;
    t.release();
  }
  n = i.getAttribute("scaleX");
  l = i.getAttribute("scaleY");
  if (!((n == null))) goto L_1e5;
  n;
  if (!((l == null))) goto L_1f7;
  l;
  c = {element: i, originalScaleX: n, originalScaleY: l, pressedScaleX: (1 * t), pressedScaleY: (1 * t), startedAt: Date.now(), x: e.absoluteX, y: e.absoluteY};
  this.activePress = c;
  DILPressFeedback.activeFeedback.add(this);
  this.component.animate(r, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=96B file=dil_core/src/DILPressFeedback
// locals: this
function {
  this = this;
  if (!((undefined !== this.releaseTimer))) goto L_5f;
  clearTimeout(this.releaseTimer);
  this.releaseTimer = undefined;
  undefined;
  return;
}

// fn a  args=1 vars=6 closure=0 cpool=0 bc=633B file=dil_core/src/DILPressFeedback
// args: e
// locals: t, s, e#1, i, r
function {
  let s;
  let t;
  t = e;
  s = e;
  let r;
  let i;
  let e#1;
  e#1 = s.getAttribute("style");
  if (!((s.getAttribute("width") == null))) goto L_c3;
  s.getAttribute("width");
  if (!((e#1 == null))) goto L_81;
  e#1;
  goto L_c3;
  if (!(("100%" === undefined.attributes.width))) goto L_14f;
  if (!((s.getAttribute("height") == null))) goto L_14e;
  s.getAttribute("height");
  if (!((e#1 == null))) goto L_10c;
  e#1;
  goto L_14e;
  if ((!("100%" === undefined.attributes.height))) goto L_275;
  i = s.parent;
  if (((undefined === i))) goto L_1aa;
  if (((1 !== i.children.length))) goto L_275;
  r = i.getAttribute("style");
  if (!((i.getAttribute("slowClipping") == null))) goto L_25d;
  i.getAttribute("slowClipping");
  if (!((r == null))) goto L_21b;
  r;
  goto L_25d;
  if (!((true === undefined.attributes.slowClipping))) goto L_269;
  t = i;
  i;
  s = i;
  i;
  goto L_a;
  return t;
}

// fn o  args=2 vars=3 closure=0 cpool=0 bc=68B file=dil_core/src/DILPressFeedback
// args: e, t
// locals: s
function {
  let s;
  s = e;
  if (!((undefined !== s))) goto L_41;
  if (!((s === t))) goto L_16;
  return true;
  s = s.parent;
  s.parent;
  goto L_5;
  return false;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=9 bc=222B file=dil_core/src/DILPressFeedback
// args: require, module, exports
// locals: e, t, s, i, r, DILPressFeedback, <class_fields_init>, DILPressFeedback#1, a, o
function {
  a = function a;
  o = function o;
  let DILPressFeedback#1;
  let r;
  let i;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILPressFeedback = undefined;
  e = require("valdi_core/src/Device");
  t = 0.98;
  s = 12;
  i = 120;
  r = {beginFromCurrentState: true, stiffness: 381.47, damping: 34.4};
  let DILPressFeedback;
  let <class_fields_init>;
  class DILPressFeedback extends undefined { ... }
  <proto:DILPressFeedback>.applyAttributes = function <atom:0>;
  <proto:DILPressFeedback>.begin = function <atom:0>;
  <proto:DILPressFeedback>.cancelReleaseTimer = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILPressFeedback>;
  DILPressFeedback = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILPressFeedback
  DILPressFeedback#1 = function <atom:0>;
  exports.DILPressFeedback = DILPressFeedback#1;
  DILPressFeedback#1.activeFeedback = new Set();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILPressFeedback
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
