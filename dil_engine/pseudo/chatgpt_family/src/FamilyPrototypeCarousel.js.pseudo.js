// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=1021B file=chatgpt_family/src/FamilyPrototypeCarousel
// args: t
// locals: o
// closure: e, this, i
function {
  let o;
  if (!((t.length > 128))) goto L_c;
  return;
  o = undefined;
  try { // catch -> L_45
  o = JSON.parse(t);
  JSON.parse(t);
  <?>;
  goto L_a6;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_a5
  if (!(e.isLoggingEnabled)) goto L_a1;
  console.warn("Invalid Family carousel bridge message");
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((null !== o))) goto L_3fc;
  if (!(("object" == typeof o))) goto L_3fc;
  if (!(("ready" === o.type))) goto L_116;
  return {javaScript: this.hostScript};
  if (!(this.viewModel.active)) goto L_3fc;
  if (!((o.type === "page"))) goto L_300;
  if (!(("number" == typeof o.page))) goto L_2fc;
  if (!(Number.isInteger(o.page))) goto L_2fc;
  if (!((o.page >= 0))) goto L_2fc;
  if (!((o.page < i.familyPrototypePageCount))) goto L_2fc;
  this.viewModel.onPage(o.page);
  goto L_3fb;
  if (!((o.type === "previous"))) goto L_355;
  this.viewModel.onPrevious();
  goto L_3fb;
  if (!((o.type === "close"))) goto L_3a9;
  this.viewModel.onClose();
  goto L_3fb;
  if (!((o.type === "start-setup"))) goto L_3fb;
  this.viewModel.onGetStarted();
  o.type;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=63B file=chatgpt_family/src/FamilyPrototypeCarousel
// locals: this, this.active_func, new.target, arguments
// closure: e, i, <class_fields_init>
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
  this.handleMessage = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=64B file=chatgpt_family/src/FamilyPrototypeCarousel
// closure: n, l
function {
  if (!((n == null))) goto L_3b;
  n;
  n = l.getModuleFileEntryAsString("chatgpt_family", "res/carousel/carousel.html.bin");
  l.getModuleFileEntryAsString("chatgpt_family", "res/carousel/carousel.html.bin");
  return n;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=417B file=chatgpt_family/src/FamilyPrototypeCarousel
// locals: e, t, this
// closure: a
function {
  this = this;
  let t;
  let e;
  e = this.viewModel;
  t = {active: e.active, page: e.page, reducedMotion: e.reducedMotion, width: e.width, height: e.height, bottomInset: a.Device.getDisplayBottomInset()};
  return "window.familyCarouselUpdate?.(".concat(JSON.stringify(t), ");");   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=360B file=chatgpt_family/src/FamilyPrototypeCarousel
// locals: this
// closure: t, r, o
function {
  this = this;
  t.beginComponent(r.WebView, o, undefined, undefined);
  t.setViewModelProperty("html", this.document);
  t.setViewModelProperty("postLoadJavaScript", this.hostScript);
  t.setViewModelProperty("onMessage", this.handleMessage);
  t.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=4 bc=396B file=chatgpt_family/src/FamilyPrototypeCarousel
// args: require, module, exports
// locals: e, t, o, i, r, s, a, l, n, FamilyPrototypeCarousel, <class_fields_init>, FamilyPrototypeCarousel#1
function {
  let FamilyPrototypeCarousel#1;
  let n;
  let l;
  let a;
  let s;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FamilyPrototypeCarousel = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeComponentPrototype(["width", "100%", "height", "100%"], "TNAj7DPvjMeyzzid");
  i = require("./FamilyPrototypeMotion");
  r = require("dil_widgets/src/webview/WebView");
  s = require("valdi_core/src/Component");
  a = require("valdi_core/src/Device");
  l = require("valdi_core/src/Valdi");
  n = undefined;
  let FamilyPrototypeCarousel;
  let <class_fields_init>;
  class FamilyPrototypeCarousel extends s.Component { ... }
  <proto:FamilyPrototypeCarousel>.document = function <atom:0>;
  <proto:FamilyPrototypeCarousel>.hostScript = function <atom:0>;
  <proto:FamilyPrototypeCarousel>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FamilyPrototypeCarousel>;
  FamilyPrototypeCarousel = function <atom:0>;
  // close_loc <class_fields_init>
  FamilyPrototypeCarousel#1 = function <atom:0>;
  exports.FamilyPrototypeCarousel = FamilyPrototypeCarousel#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_family/src/FamilyPrototypeCarousel
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
