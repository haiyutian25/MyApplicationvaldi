// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=45B file=chatgpt_wallet_core/src/CreateWalletController
// closure: r, o, n
function {
  return new r.AccountWalletController(o, n);
}

// fn o  args=1 vars=3 closure=3 cpool=1 bc=186B file=chatgpt_wallet_core/src/CreateWalletController
// args: o
// locals: c, n
// closure: r, e, t
function {
  let n;
  let c;
  c = e.accountContainerFor(o);
  if (!((o.accountScope == null))) goto L_57;
  o.accountScope;
  goto L_78;
  n = undefined.identifier;
  if (!(!n)) goto L_8e;
  throw new Error("Wallet requires the active account scope identifier");
  return c.resolve(t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=109B file=chatgpt_wallet_core/src/CreateWalletController
// args: require, module, exports
// locals: e, r, t, o
function {
  o = function o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createWalletController = undefined;
  e = require("oai_platform_services/src/AccountContainer");
  r = require("./AccountWalletController");
  t = {};
  exports.createWalletController = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_core/src/CreateWalletController
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
