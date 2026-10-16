// fn <atom:0>  args=0 vars=2 closure=7 cpool=0 bc=2555B file=oai_ui/src/components/Icon
// locals: r, this
// closure: l, e, t, d, n, i, s
function {
  this = this;
  let r;
  if (!((this.viewModel.size == null))) goto L_4f;
  this.viewModel.size;
  r = 20;
  if (!((undefined !== this.viewModel.systemImageName))) goto L_365;
  if (!(l.supportsNativeIOSSystemImages())) goto L_365;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", d.systemImage);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttribute("height", r);
  e.setAttributeString("systemImageName", this.viewModel.systemImageName);
  if (!((this.viewModel.color == null))) goto L_307;
  this.viewModel.color;
  e.setAttributeString("tint", n.OAIColor.IconPrimary);
  e.setAttribute("width", r);
  e.endRender();
  return undefined;
  if (!((undefined !== this.viewModel.src))) goto L_754;
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", d.image);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttribute("flipOnRtl", this.viewModel.flipOnRtl);
  e.setAttribute("height", r);
  e.setAttribute("src", this.viewModel.src);
  if (!((this.viewModel.color == null))) goto L_662;
  this.viewModel.color;
  e.setAttributeString("tint", n.OAIColor.IconPrimary);
  e.setAttribute("width", r);
  if (!((this.viewModel.imageStyle == null))) goto L_705;
  this.viewModel.imageStyle;
  goto L_726;
  e.setAttributes(undefined.attributes);
  e.endRender();
  return undefined;
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", d.symbol);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  if (!((this.viewModel.color == null))) goto L_8f7;
  this.viewModel.color;
  e.setAttributeString("color", n.OAIColor.IconPrimary);
  e.setAttribute("height", r);
  if (!((this.viewModel.symbol == null))) goto L_99d;
  this.viewModel.symbol;
  e.setAttributeString("value", "");
  e.setAttribute("width", r);
  e.endRender();
  return undefined;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/Icon
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
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
  return this;
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=2 bc=620B file=oai_ui/src/components/Icon
// args: require, module, exports
// locals: e, t, i, s, r, o, l, n, Icon, <class_fields_init>, Icon#1, d
function {
  let d;
  let Icon#1;
  let n;
  let l;
  let o;
  let r;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Icon = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["iosClass", "ValdiNativeSystemImage"], "L0Yh5YJ133elHyFg");
  i = e.makeNodePrototype("image", undefined, "RC77QKLhNXQKNjLh");
  s = e.makeNodePrototype("label", ["font", "system-semibold 16", "textAlign", "center"], "qEqAQbkhXe7_bJ_r");
  r = require("valdi_core/src/Component");
  o = require("valdi_core/src/Style");
  l = require("valdi_ui/src/Platform");
  n = require("oai_core/src/OAITokens");
  let Icon;
  let <class_fields_init>;
  class Icon extends r.Component { ... }
  <proto:Icon>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Icon>;
  Icon = function <atom:0>;
  // close_loc <class_fields_init>
  Icon#1 = function <atom:0>;
  exports.Icon = Icon#1;
  d = {systemImage: new o.Style({flexShrink: 0, touchEnabled: false}), image: new o.Style({flexShrink: 0, objectFit: "contain"}), symbol: new o.Style({flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Icon
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
