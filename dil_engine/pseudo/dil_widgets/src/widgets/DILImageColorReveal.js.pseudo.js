// fn d  args=3 vars=3 closure=2 cpool=0 bc=168B file=dil_widgets/src/widgets/DILImageColorReveal
// args: e, t, i
// closure: n, l
function {
  return new n.Style({position: "absolute", zIndex: 1, touchEnabled: false, filter: l.ImageFilters.colorMatrix((1 - e), 0, 0, 0, e, 0, (1 - t), 0, 0, t, 0, 0, (1 - i), 0, i, 0, 0, 0, 1, 0)});
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=310B file=dil_widgets/src/widgets/DILImageColorReveal
// args: t
// closure: this, e
function {
  if (!(!this.hasStarted)) goto L_135;
  if (!(!this.isDestroyed())) goto L_135;
  this.hasStarted = true;
  if (!(!t)) goto L_10d;
  if (!(e.isLoggingEnabled)) goto L_c2;
  console.warn("Unable to load the streaming image color overlay.");
  this.viewModel.onComplete();
  return;
  this.reveal();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=142B file=dil_widgets/src/widgets/DILImageColorReveal
// locals: this, this.active_func, new.target, arguments
// closure: e, <class_fields_init>, a
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.imageRef = new a.ElementRef();
  this.hasStarted = false;
  this.opacity = 0;
  this.onAssetLoad = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=dil_widgets/src/widgets/DILImageColorReveal
// locals: this
function {
  this = this;
  if (!((this.animation == null))) goto L_2c;
  this.animation;
  goto L_50;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=0 bc=1673B file=dil_widgets/src/widgets/DILImageColorReveal
// locals: e, this
// closure: t, i, o, u, c
function {
  this = this;
  let e;
  e = this.viewModel.placement;
  t.beginRender(i, undefined);
  t.setAttributeRef(this.imageRef);
  if (!((this.viewModel.streamingAnimation === o.DILStreamingAnimation.Neutral))) goto L_178;
  goto L_17b;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", c);
  if (!(e)) goto L_1fd;
  goto L_1fe;
  // [栈深重同步 4 -> 3]
  t.setAttribute("left", 0);
  if (!(e)) goto L_280;
  goto L_281;
  // [栈深重同步 4 -> 3]
  t.setAttribute("top", 0);
  if (!(e)) goto L_303;
  goto L_308;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("width", "100%");
  if (!(e)) goto L_38a;
  goto L_38f;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("height", "100%");
  t.setAttribute("src", this.viewModel.source);
  t.setAttribute("allowedUrlRegexes", this.viewModel.allowedUrlRegexes);
  t.setAttributeString("objectFit", this.viewModel.objectFit);
  t.setAttributeString("objectPosition", this.viewModel.objectPosition);
  t.setAttributeString("bitmapDarkenColor", this.viewModel.bitmapDarkenColor);
  t.setAttributeNumber("opacity", this.opacity);
  t.setAttributeFunction("onAssetLoad", this.onAssetLoad);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=111B file=dil_widgets/src/widgets/DILImageColorReveal
// closure: this, e
function {
  return this.imageRef.setAttribute("opacity", e.opacity);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=1 bc=435B file=dil_widgets/src/widgets/DILImageColorReveal
// locals: e, this
// closure: h, r
function {
  this = this;
  let e;
  // close_loc e
  for (const e of h) {
    this.opacity = e.opacity;
    this.animation = this.createAnimation({duration: e.duration, curve: r.AnimationCurve.EaseInOut}, function <atom:0>);
    if (((await this.animation.start()))) goto L_153;
    if (!(this.isDestroyed())) goto L_15b;
    return undefined; // async
    // [栈深重同步 0 -> 3]
    // close_loc e
  }
  // close_loc e
  this.viewModel.onComplete();
  return undefined; // async
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=10 bc=498B file=dil_widgets/src/widgets/DILImageColorReveal
// args: require, module, exports
// locals: e, t, i, o, r, s, a, n, l, d, c, u, h, DILImageColorReveal, <class_fields_init>, DILImageColorReveal#1
function {
  d = function d;
  let DILImageColorReveal#1;
  let h;
  let u;
  let c;
  let l;
  let n;
  let a;
  let s;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILImageColorReveal = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeNodePrototype("image", undefined, "jqWwgiisWFJCW949");
  o = require("dil_renderer/src/DILRenderer");
  r = require("valdi_core/src/AnimationOptions");
  s = require("valdi_core/src/Component");
  a = require("valdi_core/src/ElementRef");
  n = require("valdi_core/src/Style");
  l = require("valdi_core/src/utils/ImageFilter");
  c = d((58 / 255), (131 / 255), (247 / 255));
  u = d((143 / 255), (143 / 255), (143 / 255));
  h = [{opacity: 0.3, duration: 0.13}, {opacity: 0.18, duration: 0.1625}, {opacity: 0, duration: 0.3575}];
  let DILImageColorReveal;
  let <class_fields_init>;
  class DILImageColorReveal extends s.Component { ... }
  <proto:DILImageColorReveal>.onDestroy = function <atom:0>;
  <proto:DILImageColorReveal>.onRender = function <atom:0>;
  <proto:DILImageColorReveal>.reveal = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILImageColorReveal>;
  DILImageColorReveal = function <atom:0>;
  // close_loc <class_fields_init>
  DILImageColorReveal#1 = function <atom:0>;
  exports.DILImageColorReveal = DILImageColorReveal#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/DILImageColorReveal
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
