// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=42B file=dil_core/src/DILAnchoredOverlay
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.overlays = [];
  this.renderers = [];
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_core/src/DILAnchoredOverlay
// args: r
// closure: e
function {
  return e.observePopupTrigger(r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_core/src/DILAnchoredOverlay
// args: r
// closure: e
function {
  return e.bindPopup(r);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=42B file=dil_core/src/DILAnchoredOverlay
// args: e
// locals: this
function {
  this = this;
  this.presentOverlayAtDepth(e, 0);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=12B file=dil_core/src/DILAnchoredOverlay
// args: e
// locals: this
// closure: DILScopedAnchoredOverlayPresenter
function {
  this = this;
  return new DILScopedAnchoredOverlayPresenter(this, e);
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=97B file=dil_core/src/DILAnchoredOverlay
// args: e, r
// locals: s, this
function {
  this = this;
  let s;
  s = this.findOverlayIndex(r);
  if (((s < 0))) goto L_60;
  this.presentOverlayAtDepth(e, (s + 1));
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=165B file=dil_core/src/DILAnchoredOverlay
// args: e
// locals: r, this
function {
  this = this;
  let r;
  r = this.findOverlayIndex(e);
  if (((r < 0))) goto L_a4;
  this.overlays.splice(r);
  this.refreshRenderers();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=dil_core/src/DILAnchoredOverlay
// locals: this
function {
  this = this;
  return this.overlays[(this.overlays.length - 1)];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=dil_core/src/DILAnchoredOverlay
// args: e
// locals: this
function {
  this = this;
  return this.overlays[e];
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=126B file=dil_core/src/DILAnchoredOverlay
// locals: e, this
function {
  this = this;
  let e;
  e = this.getActiveOverlay();
  if (!((undefined !== e))) goto L_7d;
  this.dismissOverlay(e.anchorRef);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=dil_core/src/DILAnchoredOverlay
// args: e
// locals: this
function {
  this = this;
  this.renderers.push(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=161B file=dil_core/src/DILAnchoredOverlay
// args: e
// locals: r, this
function {
  this = this;
  let r;
  r = this.renderers.indexOf(e);
  if (!((r >= 0))) goto L_a0;
  this.renderers.splice(r, 1);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=134B file=dil_core/src/DILAnchoredOverlay
// locals: e, this
function {
  this = this;
  let e;
  e = 0;
  if (!((e < this.renderers.length))) goto L_85;
  this.renderers[e].refreshAnchoredOverlay();
  e = <e_new>;
  (e++);
  goto L_7;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=347B file=dil_core/src/DILAnchoredOverlay
// args: e, r
// locals: s, this
function {
  this = this;
  let s;
  s = this.overlays[r];
  if (!((s == null))) goto L_35;
  s;
  goto L_56;
  if (!((undefined.anchorRef === e.anchorRef))) goto L_a5;
  this.overlays[r] = e;
  goto L_134;
  // [栈深重同步 1 -> 0]
  this.overlays.splice(r);
  this.overlays.push(e);
  this.refreshRenderers();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=140B file=dil_core/src/DILAnchoredOverlay
// args: e
// locals: r, this
function {
  this = this;
  let r;
  r = 0;
  if (!((r < this.overlays.length))) goto L_8a;
  if (!((this.overlays[r].anchorRef === e))) goto L_7f;
  return r;
  r = <r_new>;
  (r++);
  goto L_7;
  return -1;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=dil_core/src/DILAnchoredOverlay
// args: e, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.controller = e;
  this.parentAnchorRef = r;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=dil_core/src/DILAnchoredOverlay
// args: e
// locals: this
function {
  this = this;
  return this.controller.observeTrigger(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=dil_core/src/DILAnchoredOverlay
// args: e
// locals: this
function {
  this = this;
  return this.controller.bindOverlay(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=108B file=dil_core/src/DILAnchoredOverlay
// args: e
// locals: this
function {
  this = this;
  this.controller.presentNestedOverlay(e, this.parentAnchorRef);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=dil_core/src/DILAnchoredOverlay
// args: e
// locals: this
function {
  this = this;
  this.controller.dismissOverlay(e);
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=20 bc=291B file=dil_core/src/DILAnchoredOverlay
// args: require, module, exports
// locals: e, DILAnchoredOverlayController, <class_fields_init>, DILAnchoredOverlayController#1, DILScopedAnchoredOverlayPresenter, <class_fields_init>#1, DILScopedAnchoredOverlayPresenter#1
function {
  let DILScopedAnchoredOverlayPresenter#1;
  let DILAnchoredOverlayController#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILAnchoredOverlayController = undefined;
  e = require("valdi_ui/src/PopupBindings");
  let DILAnchoredOverlayController;
  let <class_fields_init>;
  class DILAnchoredOverlayController extends undefined { ... }
  <proto:DILAnchoredOverlayController>.observeTrigger = function <atom:0>;
  <proto:DILAnchoredOverlayController>.bindOverlay = function <atom:0>;
  <proto:DILAnchoredOverlayController>.presentOverlay = function <atom:0>;
  <proto:DILAnchoredOverlayController>.scopedPresenter = function <atom:0>;
  <proto:DILAnchoredOverlayController>.presentNestedOverlay = function <atom:0>;
  <proto:DILAnchoredOverlayController>.dismissOverlay = function <atom:0>;
  <proto:DILAnchoredOverlayController>.getActiveOverlay = function <atom:0>;
  <proto:DILAnchoredOverlayController>.getOverlayAtDepth = function <atom:0>;
  <proto:DILAnchoredOverlayController>.dismissActiveOverlay = function <atom:0>;
  <proto:DILAnchoredOverlayController>.attachRenderer = function <atom:0>;
  <proto:DILAnchoredOverlayController>.detachRenderer = function <atom:0>;
  <proto:DILAnchoredOverlayController>.refreshRenderers = function <atom:0>;
  <proto:DILAnchoredOverlayController>.presentOverlayAtDepth = function <atom:0>;
  <proto:DILAnchoredOverlayController>.findOverlayIndex = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILAnchoredOverlayController>;
  DILAnchoredOverlayController = function <atom:0>;
  // close_loc <class_fields_init>
  DILAnchoredOverlayController#1 = function <atom:0>;
  exports.DILAnchoredOverlayController = DILAnchoredOverlayController#1;
  let DILScopedAnchoredOverlayPresenter;
  let <class_fields_init>#1;
  class DILScopedAnchoredOverlayPresenter extends undefined { ... }
  <proto:DILScopedAnchoredOverlayPresenter>.observeTrigger = function <atom:0>;
  <proto:DILScopedAnchoredOverlayPresenter>.bindOverlay = function <atom:0>;
  <proto:DILScopedAnchoredOverlayPresenter>.presentOverlay = function <atom:0>;
  <proto:DILScopedAnchoredOverlayPresenter>.dismissOverlay = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILScopedAnchoredOverlayPresenter>;
  DILScopedAnchoredOverlayPresenter = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILScopedAnchoredOverlayPresenter#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILAnchoredOverlay
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
