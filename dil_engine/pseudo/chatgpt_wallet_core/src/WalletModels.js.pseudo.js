// fn <atom:0>  args=1 vars=2 closure=4 cpool=2 bc=704B file=chatgpt_wallet_core/src/WalletModels
// args: r
// locals: d
// closure: a, l, e, t
function {
  let d;
  if ((!r.walletEntryId.trim())) goto L_ea;
  if ((a.has(r.walletEntryId))) goto L_ea;
  if (!(!new RegExp("^\\d{4}$").test(r.last4))) goto L_fb;
  throw new Error("Invalid masked Wallet card");
  a.add(r.walletEntryId);
  if (!(r.isDefault)) goto L_1a6;
  if (!((undefined !== l))) goto L_17f;
  throw new Error("Ambiguous preferred Wallet card");
  l = r.walletEntryId;
  r.walletEntryId;
  if (!((e == null))) goto L_1af;
  e;
  goto L_1d2;
  d = undefined[r.walletEntryId];
  if (!((r.brand == null))) goto L_24e;
  r.brand;
  if (!(("string" == typeof d))) goto L_2b9;
  if (!(d.startsWith("https://"))) goto L_2b9;
  goto L_2ba;
  // [栈深重同步 2 -> 1]
  return {id: r.walletEntryId, name: t.walletCardName(r), brand: "", lastFour: r.last4, artworkUrl: undefined};
}

// fn r  args=2 vars=4 closure=1 cpool=1 bc=72B file=chatgpt_wallet_core/src/WalletModels
// args: r, e
// locals: a, l
// closure: t
function {
  let l;
  let a;
  a = new Set();
  l = undefined;
  return {cards: r.map(function <atom:0>), preferredCardId: l};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=chatgpt_wallet_core/src/WalletModels
// args: t
function {
  t.Loading = 0;
  t[0] = "Loading";
  t.Ready = 1;
  t[1] = "Ready";
  t.Error = 2;
  t[2] = "Error";
  t.NotConnected = 3;
  t[3] = "NotConnected";
  t.Unavailable = 4;
  t[4] = "Unavailable";
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=125B file=chatgpt_wallet_core/src/WalletModels
// args: require, module, exports
// locals: t, r, e
function {
  r = function r;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.walletCardsFromWire = undefined;
  exports.WalletStatus = undefined;
  t = require("./WalletCardName");
  exports.walletCardsFromWire = r;
  if ((e)) goto L_7b;
  e = {};
  exports.WalletStatus = {};
  function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_core/src/WalletModels
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
