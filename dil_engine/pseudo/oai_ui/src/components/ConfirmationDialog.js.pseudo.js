// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=oai_ui/src/components/ConfirmationDialog
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=628B file=oai_ui/src/components/ConfirmationDialog
// locals: this
// closure: e, c, v, o, i
function {
  this = this;
  if (!(c.supportsNativeConfirmationDialog())) goto L_11a;
  e.beginComponent(v.NativeConfirmationDialog, o, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", this.viewModel.style);
  e.renderUnnamedSlot(this);
  if (!(this.viewModel.isPresented)) goto L_24b;
  this.renderFallback();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=347B file=oai_ui/src/components/ConfirmationDialog
// closure: e, M, l, this
function {
  e.beginComponent(M.Text, l, undefined, undefined);
  e.setViewModelProperty("tone", M.TextTone.Secondary);
  e.setViewModelProperty("value", this.viewModel.message);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=oai_ui/src/components/ConfirmationDialog
// args: e
// closure: this
function {
  this.renderAction(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=2 bc=530B file=oai_ui/src/components/ConfirmationDialog
// closure: e, M, l, this, r, a
function {
  e.beginComponent(M.Text, r, undefined, undefined);
  e.setViewModelProperty("size", a.OAITextSize.TitleSmall);
  e.setViewModelProperty("value", this.viewModel.title);
  e.endComponent();
  if (((undefined === this.viewModel.message))) goto L_1a7;
  function <atom:0>();
  this.viewModel.actions.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=277B file=oai_ui/src/components/ConfirmationDialog
// closure: e, M, l, this, r, a, u, n
function {
  e.beginComponent(u.Column, n, undefined, undefined);
  e.setViewModelProperty("gap", a.OAISpacing.One);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=1 bc=550B file=oai_ui/src/components/ConfirmationDialog
// locals: this
// closure: e, M, l, r, a, u, n, y, t
function {
  this = this;
  e.beginComponent(y.Dialog, t, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.title);
  e.setViewModelProperty("isOpen", true);
  e.setViewModelProperty("onDismiss", this.viewModel.onDismiss);
  e.setViewModelProperty("placement", y.DialogPlacement.Bottom);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=104B file=oai_ui/src/components/ConfirmationDialog
// closure: this, o
function {
  return this.viewModel.onAction(o.id);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=1 bc=624B file=oai_ui/src/components/ConfirmationDialog
// args: o
// locals: this
// closure: e, C, d, p, m
function {
  this = this;
  e.beginComponent(C.Button, d, undefined, undefined);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("label", o.title);
  e.setViewModelProperty("onPress", p.createReusableCallback(function <atom:0>));
  if (!((o.role === m.ConfirmationDialogRole.Destructive))) goto L_1ff;
  goto L_244;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("variant", C.ButtonVariant.Secondary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/ConfirmationDialog
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

// fn <atom:0>  args=3 vars=24 closure=0 cpool=4 bc=693B file=oai_ui/src/components/ConfirmationDialog
// args: require, module, exports
// locals: e, o, i, t, n, r, l, d, a, s, m, p, v, c, C, u, y, M, ConfirmationDialog, <class_fields_init>, ConfirmationDialog#1
function {
  let ConfirmationDialog#1;
  let M;
  let y;
  let u;
  let C;
  let c;
  let v;
  let p;
  let m;
  let s;
  let a;
  let d;
  let l;
  let r;
  let n;
  let t;
  let i;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ConfirmationDialog = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "hXHK-DV2PiIlF-Es");
  i = e.makeNodePrototype("layout", undefined, "Q4mEK5jVvAYO_LIm");
  t = e.makeComponentPrototype(undefined, "1iREkbYzNdDNUOPg");
  n = e.makeComponentPrototype(undefined, "d9ulKi8hY56VfWvG");
  r = e.makeComponentPrototype(undefined, "y_lHZCcpBMcYfq2C");
  l = e.makeComponentPrototype(["numberOfLines", 0], "Qya_9vwDU28i2N7_");
  d = e.makeComponentPrototype(undefined, "fML4geIf4MicNCqU");
  a = require("oai_core/src/OAITokens");
  s = require("valdi_core/src/Component");
  m = require("valdi_core/src/ConfirmationDialog");
  p = require("valdi_core/src/utils/Callback");
  v = require("valdi_ui/src/components/NativeConfirmationDialog");
  c = require("valdi_ui/src/Platform");
  C = require("./Button");
  u = require("./Column");
  y = require("./Dialog");
  M = require("./Text");
  let ConfirmationDialog;
  let <class_fields_init>;
  class ConfirmationDialog extends s.Component { ... }
  <proto:ConfirmationDialog>.onRender = function <atom:0>;
  <proto:ConfirmationDialog>.renderFallback = function <atom:0>;
  <proto:ConfirmationDialog>.renderAction = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ConfirmationDialog>;
  ConfirmationDialog = function <atom:0>;
  // close_loc <class_fields_init>
  ConfirmationDialog#1 = function <atom:0>;
  exports.ConfirmationDialog = ConfirmationDialog#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/ConfirmationDialog
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
