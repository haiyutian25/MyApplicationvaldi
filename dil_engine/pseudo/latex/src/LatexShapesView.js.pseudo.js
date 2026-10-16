// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=1372B file=latex/src/LatexShapesView
// locals: i, s, this
// closure: e, t, r
function {
  this = this;
  let i;
  i = 0;
  if (!((i < this.viewModel.shapes.length))) goto L_55b;
  let s;
  s = this.viewModel.shapes[i];
  e.beginRender(t, "".concat(this.viewModel.renderKey, ":", i));
  e.setAttributeStyle("style", r);
  e.setAttributeString("accessibilityCategory", this.viewModel.accessibilityCategory);
  e.setAttributeString("fillColor", s.color);
  e.setAttributeNumber("height", this.viewModel.height);
  e.setAttributeFunction("onTap", this.viewModel.onTap);
  e.setAttribute("path", s.path);
  e.setAttributeNumber("scaleX", this.viewModel.scale);
  e.setAttributeNumber("scaleY", this.viewModel.scale);
  if (!((undefined === this.viewModel.scale))) goto L_4af;
  goto L_4b4;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("transformOrigin", "top left");
  e.setAttributeNumber("width", this.viewModel.width);
  e.endRender();
  i = <i_new>;
  (i++);
  goto L_7;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=latex/src/LatexShapesView
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

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=347B file=latex/src/LatexShapesView
// args: require, module, exports
// locals: e, t, i, s, LatexShapesView, <class_fields_init>, LatexShapesView#1, r
function {
  let r;
  let LatexShapesView#1;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LatexShapesView = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("shape", undefined, "TlX8TfUu7n_c5Xad");
  i = require("valdi_core/src/Component");
  s = require("valdi_core/src/Style");
  let LatexShapesView;
  let <class_fields_init>;
  class LatexShapesView extends i.Component { ... }
  <proto:LatexShapesView>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LatexShapesView>;
  LatexShapesView = function <atom:0>;
  // close_loc <class_fields_init>
  LatexShapesView#1 = function <atom:0>;
  exports.LatexShapesView = LatexShapesView#1;
  r = new s.Style({flexShrink: 0, left: 0, position: "absolute", top: 0});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=latex/src/LatexShapesView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
