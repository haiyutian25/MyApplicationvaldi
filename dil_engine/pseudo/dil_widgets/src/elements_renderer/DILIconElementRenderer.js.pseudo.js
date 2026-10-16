// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=80B file=dil_widgets/src/elements_renderer/DILIconElementRenderer
// locals: this.active_func, new.target, this
// closure: e, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("icon", e.Icon);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("icon", e.Icon);
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=235B file=dil_widgets/src/elements_renderer/DILIconElementRenderer
// args: e, n
// locals: t, this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  super["beginRender"].call(this, e, n);
  t = r.getDILInlineTextStyle();
  if (!((t == null))) goto L_6f;
  t;
  goto L_90;
  this.setViewModelProperty("inlineFontSize", undefined.fontSize);
  if (!((t == null))) goto L_c6;
  t;
  goto L_e7;
  this.setViewModelProperty("inlineTextColor", undefined.color);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=185B file=dil_widgets/src/elements_renderer/DILIconElementRenderer
// args: require, module, exports
// locals: e, n, r, DILIconElementRenderer, <class_fields_init>, DILIconElementRenderer#1
function {
  let DILIconElementRenderer#1;
  let r;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILIconElementRenderer = undefined;
  e = require("../widgets/Icon");
  n = require("./DILComponentElementRenderer");
  r = require("./DILInlineTextStyle");
  let DILIconElementRenderer;
  let <class_fields_init>;
  class DILIconElementRenderer extends n.DILComponentElementRenderer { ... }
  <proto:DILIconElementRenderer>.beginRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILIconElementRenderer>;
  DILIconElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILIconElementRenderer#1 = function <atom:0>;
  exports.DILIconElementRenderer = DILIconElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILIconElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
