// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=136B file=valdi_ui/src/components/FilePreview
// locals: this
// closure: t, s, o
function {
  this = this;
  if (!(t.isVersionAtLeast(285))) goto L_87;
  if (!(s.supportsNativeFilePreview())) goto L_87;
  this.viewFactory = o.createFilePreviewViewFactory();
  o.createFilePreviewViewFactory();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=499B file=valdi_ui/src/components/FilePreview
// locals: this
// closure: e, r
function {
  this = this;
  if (!((undefined !== this.viewFactory))) goto L_1f2;
  e.beginRenderWithViewFactory(r, this.viewFactory, undefined);
  e.setAttributeStyle("style", this.viewModel.style);
  e.setAttribute("previewSource", this.viewModel.source);
  e.setAttributeFunction("onPreviewError", this.viewModel.onError);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_ui/src/components/FilePreview
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=3 bc=305B file=valdi_ui/src/components/FilePreview
// args: require, module, exports
// locals: e, r, i, t, o, s, FilePreview, <class_fields_init>, FilePreview#1
function {
  let FilePreview#1;
  let s;
  let o;
  let t;
  let i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FilePreview = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = e.makeNodePrototype("custom-view", undefined, "rd77e2yFkP7N0Bz1");
  i = require("valdi_core/src/Component");
  t = require("valdi_core/src/CompilerIntrinsics");
  o = require("../FilePreviewFactory");
  s = require("../Platform");
  let FilePreview;
  let <class_fields_init>;
  class FilePreview extends i.Component { ... }
  <proto:FilePreview>.onCreate = function <atom:0>;
  <proto:FilePreview>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FilePreview>;
  FilePreview = function <atom:0>;
  // close_loc <class_fields_init>
  FilePreview#1 = function <atom:0>;
  exports.FilePreview = FilePreview#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/FilePreview
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
