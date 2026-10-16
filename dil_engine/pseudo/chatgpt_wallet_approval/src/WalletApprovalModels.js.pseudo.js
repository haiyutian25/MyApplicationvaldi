// fn r  args=1 vars=1 closure=2 cpool=0 bc=124B file=chatgpt_wallet_approval/src/WalletApprovalModels
// args: t
// closure: e, i
function {
  if (!(!!e.isVersionAtLeast(212))) goto L_7b;
  if (!((t == null))) goto L_37;
  t;
  goto L_58;
  return (undefined.presentation === i.Inline);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=chatgpt_wallet_approval/src/WalletApprovalModels
// args: e
function {
  e.Ready = 0;
  e[0] = "Ready";
  e.Verifying = 1;
  e[1] = "Verifying";
  e.Submitting = 2;
  e[2] = "Submitting";
  e.Unavailable = 3;
  e[3] = "Unavailable";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_wallet_approval/src/WalletApprovalModels
// args: e
function {
  e.None = 0;
  e[0] = "None";
  e.Face = 1;
  e[1] = "Face";
  e.Fingerprint = 2;
  e[2] = "Fingerprint";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_wallet_approval/src/WalletApprovalModels
// args: e
function {
  e.Sheet = 0;
  e[0] = "Sheet";
  e.Inline = 1;
  e[1] = "Inline";
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=4 bc=195B file=chatgpt_wallet_approval/src/WalletApprovalModels
// args: require, module, exports
// locals: e, t, n, i, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletApprovalPhase = undefined;
  exports.WalletApprovalAuthentication = undefined;
  exports.WalletApprovalPresentation = undefined;
  exports.usesInlineWalletApproval = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  if ((t)) goto L_87;
  t = {};
  exports.WalletApprovalPhase = {};
  !function <atom:0>({});
  if ((n)) goto L_9e;
  n = {};
  exports.WalletApprovalAuthentication = {};
  function <atom:0>({});
  if ((i)) goto L_b4;
  i = {};
  exports.WalletApprovalPresentation = {};
  function <atom:0>({});
  exports.usesInlineWalletApproval = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_approval/src/WalletApprovalModels
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
