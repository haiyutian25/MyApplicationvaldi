// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=80B file=dil_widgets/src/elements_renderer/DILLottieElementRenderer
// locals: this.active_func, new.target, this
// closure: t, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("lottie", t.Lottie);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("lottie", t.Lottie);
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=151B file=dil_widgets/src/elements_renderer/DILLottieElementRenderer
// args: t, r
// locals: n, this, <home_object>
// closure: e
function {
  <home_object> = <special_object 4>;
  this = this;
  let n;
  super["beginRender"].call(this, t, r);
  n = r.renderState;
  if (!((undefined === n))) goto L_6b;
  goto L_93;
  // [栈深重同步 4 -> 3]
  this.setViewModelProperty("theme", e.getDILRenderTheme(n));
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=185B file=dil_widgets/src/elements_renderer/DILLottieElementRenderer
// args: require, module, exports
// locals: e, t, r, DILLottieElementRenderer, <class_fields_init>, DILLottieElementRenderer#1
function {
  let DILLottieElementRenderer#1;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILLottieElementRenderer = undefined;
  e = require("dil_compiler/src/DILThemeRenderState");
  t = require("../widgets/Lottie");
  r = require("./DILComponentElementRenderer");
  let DILLottieElementRenderer;
  let <class_fields_init>;
  class DILLottieElementRenderer extends r.DILComponentElementRenderer { ... }
  <proto:DILLottieElementRenderer>.beginRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILLottieElementRenderer>;
  DILLottieElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILLottieElementRenderer#1 = function <atom:0>;
  exports.DILLottieElementRenderer = DILLottieElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILLottieElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
