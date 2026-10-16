// fn <atom:0>  args=0 vars=3 closure=8 cpool=0 bc=1816B file=valdi_ui/src/components/ProgressIndicator
// locals: s, l, this
// closure: d, c, o, e, t, a, i, r
function {
  this = this;
  let l;
  let s;
  s = d.resolveValdiUITheme();
  l = Math.max(0, Math.min(1, this.viewModel.value));
  if (!(c.isNativeIOS())) goto L_3e5;
  if (!(o.isVersionAtLeast(42))) goto L_3e5;
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttributeString("progressTint", s.colors.accent);
  e.setAttributeString("progressTrackTint", s.colors.border);
  e.setAttributeNumber("progressValue", l);
  e.setAttributeStyle("style", a.track);
  e.setAttribute("touchEnabled", false);
  e.endRender();
  return;
  e.beginRender(i, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", "".concat(this.viewModel.accessibilityLabel, ", ", Math.round((100 * l)), "%"));
  e.setAttributeStyle("style", a.track);
  e.beginRender(r, undefined);
  e.setAttributeString("backgroundColor", s.colors.accent);
  e.setAttributeStyle("style", a.fill);
  e.setAttributeString("width", ((100 * l) + "%"));
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_ui/src/components/ProgressIndicator
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

// fn <atom:0>  args=3 vars=16 closure=0 cpool=2 bc=557B file=valdi_ui/src/components/ProgressIndicator
// args: require, module, exports
// locals: e, t, i, r, s, o, l, d, c, ProgressIndicator, <class_fields_init>, ProgressIndicator#1, a
function {
  let a;
  let ProgressIndicator#1;
  let c;
  let d;
  let l;
  let o;
  let s;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ProgressIndicator = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["iosClass", "ValdiNativeProgressView"], "RfAcy2z4KLOgOo-g");
  i = e.makeNodePrototype("view", undefined, "AAZMjBxhLRQx7S5-");
  r = e.makeNodePrototype("view", undefined, "l6Kt67Algv5Dx0Ia");
  s = require("valdi_core/src/Component");
  o = require("valdi_core/src/CompilerIntrinsics");
  l = require("valdi_core/src/Style");
  d = require("valdi_ui_theme/src/ValdiUITheme");
  c = require("../Platform");
  let ProgressIndicator;
  let <class_fields_init>;
  class ProgressIndicator extends s.Component { ... }
  <proto:ProgressIndicator>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ProgressIndicator>;
  ProgressIndicator = function <atom:0>;
  // close_loc <class_fields_init>
  ProgressIndicator#1 = function <atom:0>;
  exports.ProgressIndicator = ProgressIndicator#1;
  a = {fill: new l.Style({borderRadius: 2, height: 4}), track: new l.Style({height: 4, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/ProgressIndicator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
