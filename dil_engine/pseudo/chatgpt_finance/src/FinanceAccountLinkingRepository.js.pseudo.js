// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=44B file=chatgpt_finance/src/FinanceAccountLinkingRepository
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("Finance account linking was cancelled");
  if (!(<class_fields_init>)) goto L_26;
  <class_fields_init>.call(this);
  new new.target("Finance account linking was cancelled");
  return this;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=68B file=chatgpt_finance/src/FinanceAccountLinkingRepository
// args: e, i
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.api = e;
  this.options = i;
  this.activeRequests = new Set();
  this.generation = 0;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=302B file=chatgpt_finance/src/FinanceAccountLinkingRepository
// locals: e, this
function {
  this = this;
  let e;
  if (!((undefined !== this.preparedSession))) goto L_4e;
  return this.preparedSession;
  e = this.generation;
  this.preparedSession = this.request(this.api.startAccountLinking(this.options), e);
  return this.preparedSession;
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=0 bc=680B file=chatgpt_finance/src/FinanceAccountLinkingRepository
// args: t, o
// locals: r, s, this
// closure: e, n, i, FinanceAccountLinkingCancelledError
function {
  this = this;
  let r;
  r = this.generation;
  if (((undefined === o))) goto L_57;
  if (!((0 === o.trim().length))) goto L_b3;
  if (!(e.isLoggingEnabled)) goto L_af;
  console.info("Plaid completed without a public token; waiting for Ledger confirmation");
  goto L_27e;
  try { // catch -> L_14f
  (await this.request(this.api.submitPlaidPublicToken(t.linkToken, o), r));
  <?>;
  goto L_27e;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_27d
  if (!(!(s instanceof n.FinanceRequestError))) goto L_180;
  throw s;
  if (((r !== this.generation))) goto L_212;
  if (!((s.resultKind === i.OAINetworkResultKind.Cancelled))) goto L_21c;
  throw new FinanceAccountLinkingCancelledError();
  if (!(e.isLoggingEnabled)) goto L_279;
  console.warn("Plaid public-token submission failed; waiting for Ledger confirmation", {error: s});
  <?>;
  goto L_27e;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return this.confirmLinkedAccounts(t, r); // async
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=chatgpt_finance/src/FinanceAccountLinkingRepository
// locals: this
function {
  this = this;
  this.preparedSession = undefined;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=307B file=chatgpt_finance/src/FinanceAccountLinkingRepository
// locals: e, this
function {
  this = this;
  this.generation = (this.generation + 1);
  let e;
  for (const e of this.activeRequests) {
    e.cancel();
  }
  this.activeRequests.clear();
  if (!((this.pollDelay == null))) goto L_f7;
  this.pollDelay;
  goto L_11b;
  undefined.cancel();
  this.pollDelay = undefined;
  this.preparedSession = undefined;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=365B file=chatgpt_finance/src/FinanceAccountLinkingRepository
// args: e, i
// locals: n, n#1, this
// closure: o
function {
  this = this;
  let n;
  n = 0;
  if (!((n < o))) goto L_15e;
  let n#1;
  n#1 = (await this.request(this.api.accountLinkingState(e.oauthStateId), i));
  if (!(n#1.finished)) goto L_129;
  if (!((0 === n#1.linkedInstitutions.length))) goto L_104;
  throw new Error("Finance account linking finished without registered accounts");
  return n#1.linkedInstitutions; // async
  (await this.waitForNextPoll(i));
  n = (n + 1);
  (n + 1);
  goto L_7;
  throw new Error("Finance account linking timed out before Ledger finished registration");
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=255B file=chatgpt_finance/src/FinanceAccountLinkingRepository
// args: e, i
// locals: n, this
// closure: FinanceAccountLinkingCancelledError
function {
  this = this;
  this.activeRequests.add(e);
  try { // catch -> L_ae
  let n;
  n = (await e.result);
  if (!((i !== this.generation))) goto L_a4;
  throw new FinanceAccountLinkingCancelledError();
  // gosub (finally 块) 180
  return n; // async
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 180
  throw <?>;
  this.activeRequests.delete(e);
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=63B file=chatgpt_finance/src/FinanceAccountLinkingRepository
// closure: this, e, i, n, FinanceAccountLinkingCancelledError
function {
  this.pollDelay = undefined;
  if (!((e === this.generation))) goto L_35;
  goto L_3e;
  // [栈深重同步 1 -> 0]
  n(new FinanceAccountLinkingCancelledError());
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=20B file=chatgpt_finance/src/FinanceAccountLinkingRepository
// closure: o, n, FinanceAccountLinkingCancelledError
function {
  clearTimeout(o);
  n(new FinanceAccountLinkingCancelledError());
  return;
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=2 bc=35B file=chatgpt_finance/src/FinanceAccountLinkingRepository
// args: i, n
// locals: o
// closure: this, e, FinanceAccountLinkingCancelledError, t
function {
  let o;
  o = setTimeout(function <atom:0>, t);
  this.pollDelay = {cancel: function <atom:0>};
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=14B file=chatgpt_finance/src/FinanceAccountLinkingRepository
// args: e
// locals: this
// closure: FinanceAccountLinkingCancelledError, t
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=9 bc=307B file=chatgpt_finance/src/FinanceAccountLinkingRepository
// args: require, module, exports
// locals: e, i, n, t, o, FinanceAccountLinkingCancelledError, <class_fields_init>, FinanceAccountLinkingCancelledError#1, FinanceAccountLinkingRepository, <class_fields_init>#1, FinanceAccountLinkingRepository#1
function {
  let FinanceAccountLinkingRepository#1;
  let FinanceAccountLinkingCancelledError#1;
  let o;
  let t;
  let n;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceAccountLinkingCancelledError = undefined;
  exports.FinanceAccountLinkingRepository = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("oai_platform_services/src/OAINetworkClient");
  n = require("./FinanceApi");
  t = 2000;
  o = 900;
  let FinanceAccountLinkingCancelledError;
  let <class_fields_init>;
  class FinanceAccountLinkingCancelledError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:FinanceAccountLinkingCancelledError>;
  FinanceAccountLinkingCancelledError = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceAccountLinkingCancelledError#1 = function <atom:0>;
  exports.FinanceAccountLinkingCancelledError = FinanceAccountLinkingCancelledError#1;
  let FinanceAccountLinkingRepository;
  let <class_fields_init>#1;
  class FinanceAccountLinkingRepository extends undefined { ... }
  <proto:FinanceAccountLinkingRepository>.session = function <atom:0>;
  <proto:FinanceAccountLinkingRepository>.complete = function <atom:0>;
  <proto:FinanceAccountLinkingRepository>.clearSession = function <atom:0>;
  <proto:FinanceAccountLinkingRepository>.cancel = function <atom:0>;
  <proto:FinanceAccountLinkingRepository>.confirmLinkedAccounts = function <atom:0>;
  <proto:FinanceAccountLinkingRepository>.request = function <atom:0>;
  <proto:FinanceAccountLinkingRepository>.waitForNextPoll = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:FinanceAccountLinkingRepository>;
  FinanceAccountLinkingRepository = function <atom:0>;
  // close_loc <class_fields_init>#1
  FinanceAccountLinkingRepository#1 = function <atom:0>;
  exports.FinanceAccountLinkingRepository = FinanceAccountLinkingRepository#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/FinanceAccountLinkingRepository
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
