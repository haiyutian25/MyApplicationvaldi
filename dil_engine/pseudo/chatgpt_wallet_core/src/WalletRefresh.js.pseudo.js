// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=5B file=chatgpt_wallet_core/src/WalletRefresh
// closure: r
function {
  return r(undefined);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=75B file=chatgpt_wallet_core/src/WalletRefresh
// args: e
// closure: r, s
function {
  r(e.snapshot);
  s.unsubscribe();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=42B file=chatgpt_wallet_core/src/WalletRefresh
// args: e
// closure: o, s
function {
  o(e);
  s.unsubscribe();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=3 bc=124B file=chatgpt_wallet_core/src/WalletRefresh
// args: r, o
// closure: s, e, t
function {
  s.add(function <atom:0>);
  if ((s.closed)) goto L_7b;
  e(t).then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=5B file=chatgpt_wallet_core/src/WalletRefresh
// closure: e
function {
  return e(undefined);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=42B file=chatgpt_wallet_core/src/WalletRefresh
// args: r
// closure: e, s
function {
  e(r);
  s.unsubscribe();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=101B file=chatgpt_wallet_core/src/WalletRefresh
// args: e
// closure: i, o, n
function {
  if ((e.isBusy)) goto L_4b;
  i = (true === e.isRefreshing);
  (true === e.isRefreshing);
  if (!(o)) goto L_64;
  if (!(!i)) goto L_64;
  n(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=42B file=chatgpt_wallet_core/src/WalletRefresh
// args: e
// closure: t, s
function {
  t(e);
  s.unsubscribe();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=7B file=chatgpt_wallet_core/src/WalletRefresh
// closure: n
function {
  return n(undefined);   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=5 bc=404B file=chatgpt_wallet_core/src/WalletRefresh
// args: e, t
// locals: o, i, n, u
// closure: s, r
function {
  let n;
  let i;
  let o;
  s.add(function <atom:0>);
  if (!(s.closed)) goto L_56;
  return;
  o = false;
  i = false;
  n = function <atom:0>;
  s.add(r.observeState().subscribe({next: function <atom:0>, error: function <atom:0>, complete: function <atom:0>}));
  if (!(!s.closed)) goto L_193;
  o = true;
  true;
  try { // catch -> L_152
  r.refresh();
  <?>;
  goto L_186;
  // [栈深重同步 0 -> 1]
  u = <?>;
  try { // catch -> L_185
  t(u);
  s.unsubscribe();
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if ((i)) goto L_192;
  n(undefined);
  return;
}

// fn r  args=3 vars=4 closure=1 cpool=2 bc=179B file=chatgpt_wallet_core/src/WalletRefresh
// args: r, s, t
// locals: e
// closure: e
function {
  if (!(e.isVersionAtLeast(284))) goto L_a7;
  if (!((undefined !== r.refreshInventory))) goto L_a7;
  let e;
  e = r.refreshInventory.bind(r);
  return new Promise(function <atom:0>);
  return new Promise(function <atom:0>);
}

// fn s  args=2 vars=2 closure=1 cpool=0 bc=158B file=chatgpt_wallet_core/src/WalletRefresh
// args: r, s
// closure: e
function {
  if (!(e.isVersionAtLeast(284))) goto L_78;
  if (!((undefined !== r.refreshInventory))) goto L_78;
  goto L_9d;
  // [栈深重同步 1 -> 0]
  r.refresh();
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=118B file=chatgpt_wallet_core/src/WalletRefresh
// args: require, module, exports
// locals: e, r, s
function {
  r = function r;
  s = function s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.refreshWalletState = undefined;
  exports.requestWalletRefresh = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  exports.refreshWalletState = r;
  exports.requestWalletRefresh = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_core/src/WalletRefresh
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
