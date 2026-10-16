// fn <atom:0>  args=0 vars=3 closure=6 cpool=0 bc=733B file=chatgpt_wallet/src/WalletIntroSubtitle
// locals: i, l, this
// closure: n, e, o, t, s, a
function {
  this = this;
  let l;
  let i;
  i = this.viewModel.orbitName;
  if (!((undefined === i))) goto L_9d;
  goto L_e8;
  // [栈深重同步 1 -> 0]
  l = n.default.walletIntroSubtitleWithName(i);
  e.beginComponent(o.Text, t, undefined, undefined);
  e.setViewModelProperty("typography", s);
  e.setViewModelProperty("tone", o.TextTone.Secondary);
  e.setViewModelProperty("accessibilityLabel", l);
  if (!((undefined === i))) goto L_241;
  goto L_2b1;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("value", a.walletNamedText(i, n.default.walletIntroSubtitleWithName, s));
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_wallet/src/WalletIntroSubtitle
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

// fn <atom:0>  args=3 vars=15 closure=0 cpool=3 bc=621B file=chatgpt_wallet/src/WalletIntroSubtitle
// args: require, module, exports
// locals: e, t, o, i, l, r, n, a, s, WalletIntroSubtitle, <class_fields_init>, WalletIntroSubtitle#1
function {
  let WalletIntroSubtitle#1;
  let s;
  let a;
  let n;
  let r;
  let l;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletIntroSubtitle = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(["numberOfLines", 0, "align", "center", "accessibilityCategory", "text"], "8KD6Ha_qcka_nLev");
  o = require("oai_ui/src/components/Text");
  i = require("valdi_core/src/Component");
  l = require("valdi_core/src/SystemFont");
  r = require("valdi_ui/src/Platform");
  n = require("./Strings");
  a = require("./WalletNamedText");
  if (!(r.isNativeIOS())) goto L_166;
  goto L_169;
  // [栈深重同步 2 -> 1]
  s = {font: l.systemFont(17), lineHeight: 24, letterSpacing: -0.44, lineHeightScalesWithFont: true, native: {font: l.semanticFont(l.SYSTEM_FONT_NAME, l.SemanticFontTextStyle.Body), lineHeightMultiple: (24 / 17)}};
  let WalletIntroSubtitle;
  let <class_fields_init>;
  class WalletIntroSubtitle extends i.Component { ... }
  <proto:WalletIntroSubtitle>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletIntroSubtitle>;
  WalletIntroSubtitle = function <atom:0>;
  // close_loc <class_fields_init>
  WalletIntroSubtitle#1 = function <atom:0>;
  exports.WalletIntroSubtitle = WalletIntroSubtitle#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletIntroSubtitle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
