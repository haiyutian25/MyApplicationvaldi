// fn l  args=3 vars=7 closure=5 cpool=2 bc=459B file=chatgpt_wallet/src/WalletNamedText
// args: l, d, s
// locals: n, p, u, e
// closure: e, o, t, i, r
function {
  let u;
  let p;
  let n;
  n = e.resolveOAITypography(s, o).font.replace(new RegExp("^system "), "".concat(t.SYSTEM_BOLD_FONT_NAME, " "));
  p = d(i).split(i);
  u = new r.AttributedTextBuilder();
  let e;
  e = 0;
  if (!((e < p.length))) goto L_1a4;
  if (!((e > 0))) goto L_16a;
  u.append(l, {font: n});
  u.appendText(p[e]);
  e = <e_new>;
  (e++);
  goto L_126;
  return u.build();   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=1 bc=150B file=chatgpt_wallet/src/WalletNamedText
// args: require, module, exports
// locals: e, t, r, i, o, l
function {
  l = function l;
  let o;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.walletNamedText = undefined;
  e = require("oai_core/src/OAITypography");
  t = require("valdi_core/src/SystemFont");
  r = require("valdi_core/src/utils/AttributedTextBuilder");
  i = "￼";
  o = {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined};
  exports.walletNamedText = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletNamedText
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
