// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=961B file=oai_ui/src/components/Image
// locals: this
// closure: e, t, s
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", s.image);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttribute("borderRadius", this.viewModel.radius);
  e.setAttribute("height", this.viewModel.height);
  if (!((this.viewModel.objectFit == null))) goto L_245;
  this.viewModel.objectFit;
  e.setAttributeString("objectFit", "cover");
  e.setAttributeFunction("onAssetLoad", this.viewModel.onAssetLoad);
  e.setAttribute("src", this.viewModel.src);
  e.setAttribute("width", this.viewModel.width);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/Image
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=417B file=oai_ui/src/components/Image
// args: require, module, exports
// locals: e, t, i, r, o, Image, <class_fields_init>, Image#1, s
function {
  let s;
  let Image#1;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Image = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("image", undefined, "d7_DWF8Yb5F9YLyx");
  i = require("valdi_core/src/Component");
  r = require("valdi_core/src/Style");
  o = require("oai_core/src/OAITokens");
  let Image;
  let <class_fields_init>;
  class Image extends i.Component { ... }
  <proto:Image>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Image>;
  Image = function <atom:0>;
  // close_loc <class_fields_init>
  Image#1 = function <atom:0>;
  exports.Image = Image#1;
  s = {image: new r.Style({backgroundColor: o.OAIColor.BgTertiary, flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Image
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
