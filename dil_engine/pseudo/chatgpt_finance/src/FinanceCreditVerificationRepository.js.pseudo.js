// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=57B file=chatgpt_finance/src/FinanceCreditVerificationRepository
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.api = e;
  this.activeRequests = new Set();
  this.generation = 0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=143B file=chatgpt_finance/src/FinanceCreditVerificationRepository
// locals: this
function {
  this = this;
  return this.request(this.api.creditVerificationEligibility(), this.generation);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=143B file=chatgpt_finance/src/FinanceCreditVerificationRepository
// locals: this
function {
  this = this;
  return this.request(this.api.startCreditVerification(), this.generation);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=203B file=chatgpt_finance/src/FinanceCreditVerificationRepository
// args: e, t
// locals: i, this
function {
  this = this;
  try { // catch -> L_98
  return this.request(this.api.completeCreditVerification(e, t), this.generation);
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_ca
  return Promise.reject(i);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=205B file=chatgpt_finance/src/FinanceCreditVerificationRepository
// locals: e, this
function {
  this = this;
  this.generation = (this.generation + 1);
  let e;
  for (const e of this.activeRequests) {
    e.cancel();
  }
  this.activeRequests.clear();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=375B file=chatgpt_finance/src/FinanceCreditVerificationRepository
// args: t, i
// locals: r, r#1, this
// closure: e
function {
  this = this;
  this.activeRequests.add(t);
  try { // catch -> L_cf
  let r;
  r = (await t.result);
  if (!((i !== this.generation))) goto L_c5;
  throw new e.FinanceAccountLinkingCancelledError();
  // gosub (finally 块) 300
  return r; // async
  // [栈深重同步 0 -> 1]
  r#1 = <?>;
  try { // catch -> L_126
  if (!((i !== this.generation))) goto L_124;
  throw new e.FinanceAccountLinkingCancelledError();
  throw r#1;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 300
  throw <?>;
  this.activeRequests.delete(t);
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=6 bc=158B file=chatgpt_finance/src/FinanceCreditVerificationRepository
// args: require, module, exports
// locals: e, FinanceCreditVerificationRepository, <class_fields_init>, FinanceCreditVerificationRepository#1
function {
  let FinanceCreditVerificationRepository#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceCreditVerificationRepository = undefined;
  e = require("./FinanceAccountLinkingRepository");
  let FinanceCreditVerificationRepository;
  let <class_fields_init>;
  class FinanceCreditVerificationRepository extends undefined { ... }
  <proto:FinanceCreditVerificationRepository>.eligibility = function <atom:0>;
  <proto:FinanceCreditVerificationRepository>.start = function <atom:0>;
  <proto:FinanceCreditVerificationRepository>.complete = function <atom:0>;
  <proto:FinanceCreditVerificationRepository>.cancel = function <atom:0>;
  <proto:FinanceCreditVerificationRepository>.request = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceCreditVerificationRepository>;
  FinanceCreditVerificationRepository = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceCreditVerificationRepository#1 = function <atom:0>;
  exports.FinanceCreditVerificationRepository = FinanceCreditVerificationRepository#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/FinanceCreditVerificationRepository
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
