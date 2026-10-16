// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=518B file=dil_widgets/src/widgets/DILSvgClipboard
// locals: e
// closure: this
function {
  let e;
  if (!(!this.owner.renderer.isComponentAlive(this.owner))) goto L_90;
  return;
  e = this.owner.renderer.getComponentRootElements(this.owner, true)[0];
  this.image = e;
  if (!((undefined !== e))) goto L_205;
  if (!(this.imageCopyEnabled)) goto L_1a8;
  goto L_1a9;
  // [栈深重同步 4 -> 3]
  e.setAttribute("onLongPress", undefined);
  if (!(this.imageCopyEnabled)) goto L_201;
  goto L_202;
  // [栈深重同步 4 -> 3]
  e.setAttribute("accessibilityHint", undefined);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=257B file=dil_widgets/src/widgets/DILSvgClipboard
// args: e
// closure: o, i, this
function {
  if (!((undefined === e))) goto L_14;
  throw new Error("The rendered SVG image snapshot is unavailable.");
  o.Device.copyImageToClipboard(i.Base64.toByteArray(e));
  o.Device.performHapticFeedback("selection");
  this.imageCopyInProgress = false;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=100B file=dil_widgets/src/widgets/DILSvgClipboard
// args: i
// closure: this, e
function {
  this.imageCopyInProgress = false;
  if (!(e.isLoggingEnabled)) goto L_63;
  console.warn("Could not copy the rendered SVG image to the clipboard.", i);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=2 bc=219B file=dil_widgets/src/widgets/DILSvgClipboard
// locals: r
// closure: o, i, this, e
function {
  let r;
  r = this.image;
  if (((undefined === r))) goto L_da;
  if ((this.imageCopyInProgress)) goto L_da;
  this.imageCopyInProgress = true;
  r.takeSnapshot().then(function <atom:0>).catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=2 bc=75B file=dil_widgets/src/widgets/DILSvgClipboard
// args: r
// locals: this
// closure: o, i, e, <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.owner = r;
  this.imageCopyEnabled = false;
  this.imageCopyInProgress = false;
  this.applyImageInteraction = function <atom:0>;
  this.copyRenderedImage = function <atom:0>;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=194B file=dil_widgets/src/widgets/DILSvgClipboard
// args: e
// locals: this
// closure: r
function {
  this = this;
  if (!(e)) goto L_2f;
  this.imageCopyEnabled = r.isVersionAtLeast(50);
  this.owner.renderer.onRenderComplete(this.applyImageInteraction);
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=198B file=dil_widgets/src/widgets/DILSvgClipboard
// args: require, module, exports
// locals: e, i, r, o, DILSvgClipboard, <class_fields_init>, DILSvgClipboard#1
function {
  let DILSvgClipboard#1;
  let o;
  let r;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSvgClipboard = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("coreutils/src/Base64");
  r = require("valdi_core/src/CompilerIntrinsics");
  o = require("valdi_core/src/Device");
  let DILSvgClipboard;
  let <class_fields_init>;
  class DILSvgClipboard extends undefined { ... }
  <proto:DILSvgClipboard>.update = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSvgClipboard>;
  DILSvgClipboard = function <atom:0>;
  // close_loc <class_fields_init>
  DILSvgClipboard#1 = function <atom:0>;
  exports.DILSvgClipboard = DILSvgClipboard#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/DILSvgClipboard
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
