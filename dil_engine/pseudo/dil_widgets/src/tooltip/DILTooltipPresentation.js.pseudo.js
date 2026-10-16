// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=320B file=dil_widgets/src/tooltip/DILTooltipPresentation
// args: e
// closure: this, d
function {
  this.clearOpenTimer();
  if (!(e)) goto L_11a;
  if (!(this.isEnabled())) goto L_11a;
  if (!(this.presented)) goto L_a2;
  goto L_13f;
  // [栈深重同步 1 -> 0]
  this.openTimer = this.dilTimer.setTimeout(this.handleOpenDelayElapsed, d);
  goto L_13f;
  // [栈深重同步 1 -> 0]
  this.dismissOverlay();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=102B file=dil_widgets/src/tooltip/DILTooltipPresentation
// closure: this
function {
  this.openTimer = undefined;
  if (!(this.isEnabled())) goto L_65;
  this.presented = true;
  this.present();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=431B file=dil_widgets/src/tooltip/DILTooltipPresentation
// locals: s
// closure: this, e, t, l, i
function {
  let s;
  s = this.resolveContent();
  if (!((undefined !== s))) goto L_1ae;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", l.body);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", l.label);
  e.setAttributeString("value", s);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=4 closure=6 cpool=3 bc=97B file=dil_widgets/src/tooltip/DILTooltipPresentation
// args: s, r, n
// locals: this
// closure: d, e, t, l, i, <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.anchorRef = s;
  this.getContext = r;
  this.getContent = n;
  this.presented = false;
  this.handleHoverChange = function <atom:0>;
  this.handleOpenDelayElapsed = function <atom:0>;
  this.renderBody = function <atom:0>;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=50B file=dil_widgets/src/tooltip/DILTooltipPresentation
// locals: this
// closure: s
function {
  this = this;
  this.dilTimer = s.resolveDILTimer();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=156B file=dil_widgets/src/tooltip/DILTooltipPresentation
// locals: this
function {
  this = this;
  if (!(this.isEnabled())) goto L_76;
  if (!(this.presented)) goto L_9b;
  goto L_9b;
  // [栈深重同步 1 -> 0]
  this.dismiss();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=dil_widgets/src/tooltip/DILTooltipPresentation
// locals: this
function {
  this = this;
  this.dismiss();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=dil_widgets/src/tooltip/DILTooltipPresentation
// locals: this
function {
  this = this;
  if (!(this.isEnabled())) goto L_4c;
  return this.handleHoverChange;
  return undefined;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=118B file=dil_widgets/src/tooltip/DILTooltipPresentation
// locals: this
// closure: n
function {
  this = this;
  if (!(n.Device.isWeb())) goto L_75;
  return (undefined !== this.resolveContent());
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=69B file=dil_widgets/src/tooltip/DILTooltipPresentation
// locals: e, this
function {
  this = this;
  let e;
  e = this.getContent();
  if (!(("string" == typeof e))) goto L_43;
  if (!((e.length > 0))) goto L_43;
  return e;
  return undefined;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=213B file=dil_widgets/src/tooltip/DILTooltipPresentation
// locals: e, this
function {
  this = this;
  let e;
  if (!((this.getContext() == null))) goto L_32;
  this.getContext();
  goto L_53;
  e = undefined.anchoredOverlayPresenter;
  if (!((undefined !== e))) goto L_d4;
  if (!((undefined !== this.resolveContent()))) goto L_d4;
  e.presentOverlay(this.makeOverlayRequest());
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=157B file=dil_widgets/src/tooltip/DILTooltipPresentation
// locals: this
// closure: a
function {
  this = this;
  return {align: "center", anchorRef: this.anchorRef, avoidCollisions: true, dismissible: false, interactive: false, maxWidth: a, minWidth: "auto", renderBody: this.renderBody, side: "top", sideOffset: 5, width: "auto"};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=dil_widgets/src/tooltip/DILTooltipPresentation
// locals: this
function {
  this = this;
  this.clearOpenTimer();
  this.dismissOverlay();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=212B file=dil_widgets/src/tooltip/DILTooltipPresentation
// locals: this
function {
  this = this;
  if (!(this.presented)) goto L_d3;
  this.presented = false;
  if (!((this.getContext() == null))) goto L_64;
  this.getContext();
  goto L_d3;
  if (!((undefined.anchoredOverlayPresenter == null))) goto L_8d;
  undefined.anchoredOverlayPresenter;
  goto L_d3;
  undefined.dismissOverlay(this.anchorRef);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=61B file=dil_widgets/src/tooltip/DILTooltipPresentation
// locals: this
function {
  this = this;
  if (!((this.openTimer == null))) goto L_2d;
  this.openTimer;
  this;
  goto L_30;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.openTimer = undefined;
  return;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=12 bc=607B file=dil_widgets/src/tooltip/DILTooltipPresentation
// args: require, module, exports
// locals: e, t, i, s, r, n, o, d, a, DILTooltipPresentation, <class_fields_init>, DILTooltipPresentation#1, l
function {
  let l;
  let DILTooltipPresentation#1;
  let a;
  let d;
  let o;
  let n;
  let r;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTooltipPresentation = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "iH0XAIGlbsjYEMz8");
  i = e.makeNodePrototype("label", undefined, "5Ajt-4AnOiDfq3dE");
  s = require("dil_core/src/DILTimer");
  r = require("dil_core/src/typography/DILDynamicFont");
  n = require("valdi_core/src/Device");
  o = require("valdi_core/src/Style");
  d = 150;
  a = 300;
  let DILTooltipPresentation;
  let <class_fields_init>;
  class DILTooltipPresentation extends undefined { ... }
  <proto:DILTooltipPresentation>.onCreate = function <atom:0>;
  <proto:DILTooltipPresentation>.onViewModelUpdate = function <atom:0>;
  <proto:DILTooltipPresentation>.onDestroy = function <atom:0>;
  <proto:DILTooltipPresentation>.onHover = function <atom:0>;
  <proto:DILTooltipPresentation>.isEnabled = function <atom:0>;
  <proto:DILTooltipPresentation>.resolveContent = function <atom:0>;
  <proto:DILTooltipPresentation>.present = function <atom:0>;
  <proto:DILTooltipPresentation>.makeOverlayRequest = function <atom:0>;
  <proto:DILTooltipPresentation>.dismiss = function <atom:0>;
  <proto:DILTooltipPresentation>.dismissOverlay = function <atom:0>;
  <proto:DILTooltipPresentation>.clearOpenTimer = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILTooltipPresentation>;
  DILTooltipPresentation = function <atom:0>;
  // close_loc <class_fields_init>
  DILTooltipPresentation#1 = function <atom:0>;
  exports.DILTooltipPresentation = DILTooltipPresentation#1;
  l = {body: new o.Style({backgroundColor: "gray-700", borderRadius: 6, paddingTop: 2, paddingRight: 8, paddingBottom: 2, paddingLeft: 8}), label: new o.Style({color: "gray-0", font: r.dynamicSystemFontForSize(14)})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/tooltip/DILTooltipPresentation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
