// fn i  args=1 vars=1 closure=0 cpool=2 bc=52B file=chatgpt_wallet/src/WalletCardNumber
// args: e
function {
  if (!(new RegExp("^\\d{4}$").test(e))) goto L_2e;
  return e;
  return "••••";
}

// fn u  args=1 vars=1 closure=2 cpool=0 bc=43B file=chatgpt_wallet/src/WalletCardNumber
// args: e
// closure: s, i
function {
  return "".concat(s, i(e));   // tail call
}

// fn a  args=1 vars=1 closure=7 cpool=0 bc=428B file=chatgpt_wallet/src/WalletCardNumber
// args: a
// closure: o, e, u, r, s, i, t
function {
  if ((!o.isNativeIOS())) goto L_72;
  if (!(e.Device.isDesktop())) goto L_78;
  return u(a);
  return new r.AttributedTextBuilder().appendText(s).append(i(a), {font: t.semanticFont(t.unslashedMonospaceFontName(false), t.SemanticFontTextStyle.Footnote)}).build();
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=3 bc=192B file=chatgpt_wallet/src/WalletCardNumber
// args: require, module, exports
// locals: e, t, r, o, s, i, u, a
function {
  i = function i;
  u = function u;
  a = function a;
  let s;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.safeLastFour = undefined;
  exports.maskedCardNumber = undefined;
  exports.cardNumberText = undefined;
  e = require("valdi_core/src/Device");
  t = require("valdi_core/src/SystemFont");
  r = require("valdi_core/src/utils/AttributedTextBuilder");
  o = require("valdi_ui/src/Platform");
  s = "•••• ";
  exports.safeLastFour = i;
  exports.maskedCardNumber = u;
  exports.cardNumberText = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletCardNumber
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
