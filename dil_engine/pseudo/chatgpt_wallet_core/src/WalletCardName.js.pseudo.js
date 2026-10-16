// fn t  args=1 vars=3 closure=2 cpool=0 bc=662B file=chatgpt_wallet_core/src/WalletCardName
// args: e
// locals: r, t
// closure: s, a
function {
  let t;
  let r;
  if (!((e.nickname == null))) goto L_30;
  e.nickname;
  goto L_54;
  if ((undefined.trim())) goto L_a6;
  if (!((e.displayName == null))) goto L_82;
  e.displayName;
  goto L_a6;
  r = undefined.trim();
  if (!(r)) goto L_b0;
  return r;
  t = s(e.brand);
  if (!((undefined === t))) goto L_124;
  return a.default.walletCardFallback();   // tail call
  if (!((e.cardType == null))) goto L_14e;
  e.cardType;
  goto L_196;
  if (!((undefined.trim().toLowerCase() === "credit"))) goto L_1ea;
  return a.default.walletCardCredit(t);   // tail call
  if (!((undefined.trim().toLowerCase() === "debit"))) goto L_23e;
  return a.default.walletCardDebit(t);   // tail call
  if (!((undefined.trim().toLowerCase() === "prepaid"))) goto L_292;
  return a.default.walletCardPrepaid(t);   // tail call
  return t;
}

// fn s  args=1 vars=1 closure=0 cpool=0 bc=163B file=chatgpt_wallet_core/src/WalletCardName
// args: e
function {
  if (!((e == null))) goto L_9;
  e;
  goto L_51;
  if (!((undefined.trim().toLowerCase() === "visa"))) goto L_60;
  return "Visa";
  if (!((undefined.trim().toLowerCase() === "mastercard"))) goto L_6f;
  return "Mastercard";
  if (((undefined.trim().toLowerCase() === "amex"))) goto L_9c;
  if (((undefined.trim().toLowerCase() === "american express"))) goto L_9c;
  if (((undefined.trim().toLowerCase() === "american_express"))) goto L_9c;
  if (((undefined.trim().toLowerCase() === "american-express"))) goto L_9c;
  if (!((undefined.trim().toLowerCase() === "americanexpress"))) goto L_a2;
  return "American Express";
  undefined.trim().toLowerCase();
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=234B file=chatgpt_wallet_core/src/WalletCardName
// args: require, module, exports
// locals: e, r, a, t, s
function {
  t = function t;
  s = function s;
  let a;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.walletCardName = undefined;
  e = require("valdi_core/src/LocalizableStrings");
  r = require("valdi_core/src/localization/LocaleResolver");
  a = require("./Strings");
  e.overrideLocales(a.default, r.getCurrentLocales, "en");
  exports.walletCardName = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_core/src/WalletCardName
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
