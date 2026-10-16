// fn <atom:0>  args=0 vars=3 closure=6 cpool=0 bc=750B file=svg/src/SvgEntryPointComponent
// locals: n, r, this
// closure: s, e, t, d, i, o
function {
  this = this;
  let r;
  let n;
  if (!((this.viewModel.width == null))) goto L_53;
  this.viewModel.width;
  n = s;
  if (!((this.viewModel.height == null))) goto L_9f;
  this.viewModel.height;
  r = s;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", d.root);
  e.setAttributeNumber("width", n);
  e.setAttributeNumber("height", r);
  e.beginComponent(i.SvgView, o, undefined, undefined);
  e.setViewModelProperty("svg", this.viewModel.svg);
  e.setViewModelProperty("width", n);
  e.setViewModelProperty("height", r);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=svg/src/SvgEntryPointComponent
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

// fn <atom:0>  args=3 vars=14 closure=0 cpool=2 bc=420B file=svg/src/SvgEntryPointComponent
// args: require, module, exports
// locals: e, t, o, n, r, i, s, SvgEntryPointComponent, <class_fields_init>, SvgEntryPointComponent#1, d
function {
  let d;
  let SvgEntryPointComponent#1;
  let s;
  let i;
  let r;
  let n;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgEntryPointComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "OYs8YVMAYYZow8Fx");
  o = e.makeComponentPrototype(undefined, "Ps0CoVW2pMlVkzuy");
  n = require("valdi_core/src/Component");
  r = require("valdi_core/src/Style");
  i = require("svg/src/SvgView");
  s = 24;
  let SvgEntryPointComponent;
  let <class_fields_init>;
  class SvgEntryPointComponent extends n.Component { ... }
  <proto:SvgEntryPointComponent>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgEntryPointComponent>;
  SvgEntryPointComponent = function <atom:0>;
  // close_loc <class_fields_init>
  SvgEntryPointComponent#1 = function <atom:0>;
  exports.SvgEntryPointComponent = SvgEntryPointComponent#1;
  d = {root: new r.Style({alignItems: "center", flexShrink: 0, justifyContent: "center"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=svg/src/SvgEntryPointComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
