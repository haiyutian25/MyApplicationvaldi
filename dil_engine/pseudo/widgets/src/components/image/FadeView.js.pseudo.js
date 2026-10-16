// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=widgets/src/components/image/FadeView
// args: t
function {
  t.Loading = 0;
  t[0] = "Loading";
  t.Transitioning = 1;
  t[1] = "Transitioning";
  t.Finished = 2;
  t[2] = "Finished";
  t.Failed = 3;
  t[3] = "Failed";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=60B file=widgets/src/components/image/FadeView
// args: t
// closure: this
function {
  if (!(t)) goto L_3b;
  this.lastVisible = Date.now();
  Date.now();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=124B file=widgets/src/components/image/FadeView
// closure: i, a, this, h
function {
  if (!((i.src === a))) goto L_7b;
  this.setState({status: h.Finished});
  return;
}

// fn <atom:0>  args=1 vars=10 closure=3 cpool=1 bc=1070B file=widgets/src/components/image/FadeView
// args: e
// locals: i, r, s, o, n, a, d, u, t
// closure: this, h, t
function {
  let u;
  let d;
  let a;
  let n;
  let o;
  let s;
  let r;
  let i;
  if (!(this.isDestroyed())) goto L_42;
  return;
  i = this.viewModel;
  if (!(!i)) goto L_6e;
  return;
  if (!((this.state.status !== h.Loading))) goto L_d9;
  return;
  r = Date.now();
  s = (r - this.lastVisible);
  o = (r - this.lastUpdate);
  n = Math.min(s, o);
  if (!((i.onLoad == null))) goto L_1b3;
  i.onLoad;
  i;
  goto L_1bd;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e, n, s);
  a = i.src;
  if (!(!e)) goto L_2ea;
  if (!(a)) goto L_2ea;
  if (!(t.isLoggingEnabled)) goto L_270;
  console.warn("Error loading view with source ".concat(a));
  if (!(i.srcOnFail)) goto L_2e8;
  this.setState({status: h.Failed});
  return;
  if (!((i.transitionThresholdMs == null))) goto L_315;
  i.transitionThresholdMs;
  d = 50;
  if (!((i.transitionDurationMs == null))) goto L_343;
  i.transitionDurationMs;
  u = 500;
  if (!((n >= d))) goto L_3dd;
  let t;
  t = (u / 1000);
  this.setStateAnimatedPromise({status: h.Transitioning}, {duration: t}).then(function <atom:0>);
  return;
  this.setState({status: h.Finished});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=155B file=widgets/src/components/image/FadeView
// locals: this, this.active_func, new.target, arguments
// closure: h, t, <class_fields_init>
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
  this.state = {status: h.Loading};
  this.lastVisible = 0;
  this.lastUpdate = 0;
  this.onVisibilityChanged = function <atom:0>;
  this.onLoad = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=245B file=widgets/src/components/image/FadeView
// args: t
// locals: this
// closure: h
function {
  this = this;
  if (!(t)) goto L_6d;
  if (((t.src === this.viewModel.src))) goto L_f4;
  this.lastUpdate = Date.now();
  this.setState({status: h.Loading});
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=1380B file=widgets/src/components/image/FadeView
// locals: t, this
// closure: e, i
function {
  this = this;
  let t;
  t = this.viewModel;
  if (!(t)) goto L_563;
  e.beginRender(i, undefined);
  e.setAttributeRef(t.containerRef);
  e.setAttribute("width", t.width);
  e.setAttribute("minWidth", t.minWidth);
  e.setAttribute("maxWidth", t.maxWidth);
  e.setAttribute("height", t.height);
  e.setAttribute("minHeight", t.minHeight);
  e.setAttribute("maxHeight", t.maxHeight);
  e.setAttributeNumber("aspectRatio", t.aspectRatio);
  e.setAttributeFunction("onTap", t.onTap);
  e.setAttributeFunction("onLongPress", t.onLongPress);
  e.setAttributeFunction("onTouchStart", t.onTouchStart);
  e.setAttributeFunction("onTouchEnd", t.onTouchEnd);
  e.setAttributeFunction("onVisibilityChanged", this.onVisibilityChanged);
  e.setAttributeString("accessibilityId", t.accessibilityId);
  e.setAttributeString("accessibilityLabel", t.accessibilityLabel);
  this.onRenderContent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=46B file=widgets/src/components/image/FadeView
// closure: e, this
function {
  e.renderNamedSlot("placeholder", this);
  return;
}

// fn <atom:0>  args=0 vars=20 closure=10 cpool=1 bc=2604B file=widgets/src/components/image/FadeView
// locals: t, i, d, l, g, y, v, A, p, m, S, R, w, F, L, C, V, x, P, this
// closure: e, u, h, r, c, b, s, o, n, a
function {
  this = this;
  let P;
  let x;
  let V;
  let C;
  let L;
  let F;
  let w;
  let R;
  let S;
  let m;
  let p;
  let A;
  let v;
  let y;
  let g;
  let l;
  let d;
  let i;
  let t;
  t = this.viewModel;
  if (!(u.Device.isIOS())) goto L_d0;
  goto L_d1;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!((t.spinnerSize == null))) goto L_100;
  t.spinnerSize;
  d = "50%";
  l = t.spinnerColor;
  g = this.state.status;
  y = (g === h.Failed);
  v = (g === h.Finished);
  A = (g === h.Loading);
  if ((y)) goto L_1ee;
  p = v;
  if (!((t.opacity == null))) goto L_21a;
  t.opacity;
  m = 1;
  if (!(A)) goto L_224;
  goto L_225;
  // [栈深重同步 1 -> 0]
  S = 1;
  R = (S * m);
  w = ((1 - S) * m);
  F = t.backgroundColor;
  L = t.borderRadius;
  C = t.borderWidth;
  V = t.borderColor;
  if (!(y)) goto L_2fe;
  goto L_322;
  // [栈深重同步 1 -> 0]
  x = t.src;
  if (!(x)) goto L_34e;
  goto L_34f;
  // [栈深重同步 1 -> 0]
  P = undefined;
  if ((p)) goto L_57e;
  if (!(!t.placeholderEnabled)) goto L_388;
  if ((!F)) goto L_57e;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", c.overlay);
  e.setAttributeNumber("opacity", w);
  if ((C)) goto L_46f;
  if (!(F)) goto L_476;
  goto L_477;
  // [栈深重同步 4 -> 3]
  e.setAttribute("borderRadius", undefined);
  e.setAttribute("borderWidth", C);
  e.setAttributeString("borderColor", V);
  e.setAttributeString("backgroundColor", F);
  b.when(t.placeholderEnabled, function <atom:0>);
  e.endRender();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", c.overlay);
  this.onRenderBody(R, x, P);
  e.endRender();
  if (!(!p)) goto L_7fd;
  if (!(i)) goto L_7fd;
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", c.overlay);
  e.setAttributeString("blurStyle", i);
  e.setAttributeNumber("opacity", w);
  e.setAttribute("borderRadius", L);
  e.setAttribute("borderWidth", C);
  e.setAttributeString("borderColor", V);
  e.endRender();
  if (!(!p)) goto L_a2b;
  if (!(l)) goto L_a2b;
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", c.overlay);
  e.beginRender(a, undefined);
  e.setAttribute("width", d);
  e.setAttribute("height", d);
  e.setAttribute("maxWidth", d);
  e.setAttribute("maxHeight", d);
  e.setAttributeString("color", l);
  e.setAttributeNumber("opacity", w);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=5 bc=793B file=widgets/src/components/image/FadeView
// args: require, module, exports
// locals: t, e, i, r, s, o, n, a, d, u, l, b, c, h, FadeView, <class_fields_init>, FadeView#1
function {
  let FadeView#1;
  let c;
  let b;
  let l;
  let u;
  let d;
  let a;
  let n;
  let o;
  let s;
  let r;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FadeViewStatus = undefined;
  exports.FadeView = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeNodePrototype("view", ["lazyLayout", true], "6os1ncXr1KDihwbX");
  r = e.makeNodePrototype("view", undefined, "cX8BHZc3oL21L02T");
  s = e.makeNodePrototype("layout", undefined, "c5nbZ50HIMqect1P");
  o = e.makeNodePrototype("blur", undefined, "C4R-58z_BBEdx7zh");
  n = e.makeNodePrototype("layout", ["alignItems", "center", "justifyContent", "center"], "0LqpEvfGB1ViLMCm");
  a = e.makeNodePrototype("spinner", ["aspectRatio", 1], "MDZ9xP1Pf_atUJaA");
  d = require("valdi_core/src/Component");
  u = require("valdi_core/src/Device");
  l = require("valdi_core/src/Style");
  b = require("valdi_core/src/utils/When");
  c = {overlay: new l.Style({position: "absolute", height: "100%", width: "100%"})};
  if ((h)) goto L_2b3;
  h = {};
  exports.FadeViewStatus = {};
  !function <atom:0>({});
  let FadeView;
  let <class_fields_init>;
  class FadeView extends d.StatefulComponent { ... }
  <proto:FadeView>.onViewModelUpdate = function <atom:0>;
  <proto:FadeView>.onRender = function <atom:0>;
  <proto:FadeView>.onRenderContent = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FadeView>;
  FadeView = function <atom:0>;
  // close_loc <class_fields_init>
  FadeView#1 = function <atom:0>;
  exports.FadeView = FadeView#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/image/FadeView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
