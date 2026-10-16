// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=252B file=dil_core/src/DILWorkingStatus
// closure: this
function {
  if ((this.state.appeared)) goto L_fb;
  if (!(this.viewModel.enabled)) goto L_cc;
  goto L_fb;
  // [栈深重同步 1 -> 0]
  this.setState({appeared: true});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=83B file=dil_core/src/DILWorkingStatus
// locals: this, this.active_func, new.target, arguments
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
  this.state = {appeared: false};
  this.handleViewCreated = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=0 bc=1137B file=dil_core/src/DILWorkingStatus
// locals: this
// closure: e, t, l, n, i, d, a
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", l);
  e.setAttribute("animationsEnabled", this.viewModel.enabled);
  if ((this.state.appeared)) goto L_182;
  if (!(!this.viewModel.enabled)) goto L_187;
  goto L_188;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0);
  e.setAttributeFunction("onViewCreate", this.handleViewCreated);
  e.beginComponent(n.ShimmerText, i, undefined, undefined);
  e.setViewModelProperty("color", this.viewModel.color);
  e.setViewModelProperty("enabled", this.viewModel.enabled);
  e.setViewModelProperty("highlightColor", this.viewModel.highlightColor);
  e.setViewModelProperty("style", d);
  e.setViewModelProperty("value", a.default.streamingWorkingLabel());
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=2 bc=719B file=dil_core/src/DILWorkingStatus
// args: require, module, exports
// locals: e, t, i, o, r, n, s, a, DILWorkingStatus, <class_fields_init>, DILWorkingStatus#1, l, d
function {
  let d;
  let l;
  let DILWorkingStatus#1;
  let a;
  let s;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILWorkingStatus = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "cq2pzPuyk5cPltez");
  i = e.makeComponentPrototype(["accessibilityId", "dil.working"], "1y_Ng6mp0BA4AanL");
  o = require("valdi_core/src/Component");
  r = require("valdi_core/src/Style");
  n = require("oai_ui/src/components/ShimmerText");
  s = require("./typography/DILDynamicFont");
  a = require("./Strings");
  let DILWorkingStatus;
  let <class_fields_init>;
  class DILWorkingStatus extends o.StatefulComponent { ... }
  <proto:DILWorkingStatus>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILWorkingStatus>;
  DILWorkingStatus = function <atom:0>;
  // close_loc <class_fields_init>
  DILWorkingStatus#1 = function <atom:0>;
  exports.DILWorkingStatus = DILWorkingStatus#1;
  l = new r.Style({alignItems: "center", flexDirection: "row", minHeight: 24, width: "100%"});
  d = new r.Style({accessibilityStateLiveRegion: true, flexShrink: 1, font: s.dynamicSystemFontForTextStyle(17, s.DILDynamicTextStyle.Body, s.DILSystemFontWeight.Normal, false), lineHeight: 22, lineHeightScalesWithFont: true, numberOfLines: 0});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILWorkingStatus
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
