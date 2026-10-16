// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=94B file=dil_widgets/src/elements_renderer/DILYouTubeElementRenderer
// locals: this.active_func, new.target, this
// closure: t, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("youtube", t.YouTubeEmbed);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("youtube", t.YouTubeEmbed);
  this.modelWrittenRoot = false;
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=150B file=dil_widgets/src/elements_renderer/DILYouTubeElementRenderer
// args: e, t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  this.modelWrittenRoot = (true === t.isModelWrittenDIL);
  if (!(this.modelWrittenRoot)) goto L_7d;
  goto L_7e;
  // [栈深重同步 2 -> 1]
  this.renderState = undefined;
  super["beginRender"].call(this, e, t);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=195B file=dil_widgets/src/elements_renderer/DILYouTubeElementRenderer
// args: t, r
// locals: this, <home_object>
// closure: e
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(("videoId" === t))) goto L_b0;
  if (!(this.modelWrittenRoot)) goto L_b0;
  if (!((e.getDILTrustedNetworkPolicy(this.renderState) == null))) goto L_8a;
  e.getDILTrustedNetworkPolicy(this.renderState);
  goto L_af;
  if (((true !== undefined.isTrustedYouTubeVideoID(r)))) goto L_c2;
  super["setProp"].call(this, t, r);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=193B file=dil_widgets/src/elements_renderer/DILYouTubeElementRenderer
// args: require, module, exports
// locals: e, t, r, DILYouTubeElementRenderer, <class_fields_init>, DILYouTubeElementRenderer#1
function {
  let DILYouTubeElementRenderer#1;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILYouTubeElementRenderer = undefined;
  e = require("../DILTrustedNetworkRenderState");
  t = require("../widgets/YouTubeEmbed");
  r = require("./DILComponentElementRenderer");
  let DILYouTubeElementRenderer;
  let <class_fields_init>;
  class DILYouTubeElementRenderer extends r.DILComponentElementRenderer { ... }
  <proto:DILYouTubeElementRenderer>.beginRender = function <atom:0>;
  <proto:DILYouTubeElementRenderer>.setProp = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILYouTubeElementRenderer>;
  DILYouTubeElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILYouTubeElementRenderer#1 = function <atom:0>;
  exports.DILYouTubeElementRenderer = DILYouTubeElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILYouTubeElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
