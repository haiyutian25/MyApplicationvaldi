// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=oai_ui/src/components/Dialog
// args: e
function {
  e.Center = 0;
  e[0] = "Center";
  e.Bottom = 1;
  e[1] = "Bottom";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=149B file=oai_ui/src/components/Dialog
// closure: this
function {
  if (!((false !== this.viewModel.dismissible))) goto L_94;
  this.viewModel.onDismiss();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=63B file=oai_ui/src/components/Dialog
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
  this.handleBackdropPress = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=6 cpool=0 bc=1648B file=oai_ui/src/components/Dialog
// locals: r, s, this
// closure: e, t, l, d, i, o
function {
  this = this;
  let s;
  let r;
  if (!(!this.viewModel.isOpen)) goto L_4f;
  return;
  r = this.viewModel.accessibilityId;
  s = (false !== this.viewModel.dismissible);
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityId", r);
  if (!((this.viewModel.placement === l.Bottom))) goto L_1ce;
  goto L_1d3;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("justifyContent", "center");
  e.setAttributeStyle("style", d.overlay);
  e.beginRender(i, undefined);
  if (!(s)) goto L_289;
  goto L_28e;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityCategory", "view");
  if (!((undefined === r))) goto L_2c5;
  goto L_2f2;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityId", "".concat(r, ".backdrop"));
  if (!(s)) goto L_32b;
  goto L_32c;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityLabel", undefined);
  if (!(s)) goto L_365;
  goto L_36a;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "ignored");
  e.setAttributeFunction("onTap", this.handleBackdropPress);
  e.setAttributeStyle("style", d.backdrop);
  e.endRender();
  e.beginRender(o, undefined);
  if (!((undefined === r))) goto L_495;
  goto L_4c2;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityId", "".concat(r, ".content"));
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttributeNumber("marginBottom", this.viewModel.bottomInset);
  e.setAttributeStyle("style", d.content);
  e.renderUnnamedSlot(this);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=3 bc=1178B file=oai_ui/src/components/Dialog
// args: require, module, exports
// locals: e, t, i, o, r, s, n, l, Dialog, <class_fields_init>, Dialog#1, d
function {
  let d;
  let Dialog#1;
  let n;
  let s;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DialogPlacement = undefined;
  exports.Dialog = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "_I-tiAvcmFFhQJER");
  i = e.makeNodePrototype("view", undefined, "LLvo0PAUxlEJt_Fv");
  o = e.makeNodePrototype("view", undefined, "T2bGqnfV_BwFDqUe");
  r = require("oai_core/src/OAITokens");
  s = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  if ((l)) goto L_15c;
  l = {};
  exports.DialogPlacement = {};
  !function <atom:0>({});
  let Dialog;
  let <class_fields_init>;
  class Dialog extends s.Component { ... }
  <proto:Dialog>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Dialog>;
  Dialog = function <atom:0>;
  // close_loc <class_fields_init>
  Dialog#1 = function <atom:0>;
  exports.Dialog = Dialog#1;
  d = {overlay: new n.Style({accessibilityNavigation: "passthrough", alignItems: "center", bottom: 0, left: 0, padding: r.OAISpacing.Two, position: "absolute", right: 0, top: 0, zIndex: 100}), backdrop: new n.Style({backgroundColor: r.OAIColor.BgScrim, bottom: 0, left: 0, position: "absolute", right: 0, top: 0}), content: new n.Style({accessibilityCategory: "view", accessibilityNavigation: "group", backgroundColor: r.OAIColor.BgElevatedPrimary, borderColor: r.OAIColor.BorderDefault, borderRadius: r.OAIRadius.Xl, borderWidth: 1, flexDirection: "column", maxHeight: "90%", maxWidth: 560, padding: r.OAISpacing.One, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Dialog
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
