// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=41B file=chatgpt_multiplayer/src/BrowserMultiplayerAdmission
// args: r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r, undefined);
  if (!(<class_fields_init>)) goto L_23;
  <class_fields_init>.call(this);
  new new.target(r, undefined);
  return this;
}

// fn e  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_multiplayer/src/BrowserMultiplayerAdmission
// args: s
// closure: r
function {
  return r.multiplayerAdmissionFailureReason(s);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=167B file=chatgpt_multiplayer/src/BrowserMultiplayerAdmission
// args: s
// closure: r
function {
  if (!((undefined !== r.requestAdmission))) goto L_4d;
  return r.requestAdmission(s);
  return r.request((("/backend-api/multiplayer/documents/" + encodeURIComponent(s.documentId)) + "/admission?transport=kubernetes"));
}

// fn i  args=1 vars=1 closure=0 cpool=1 bc=20B file=chatgpt_multiplayer/src/BrowserMultiplayerAdmission
// args: r
function {
  null;
  r;
  return {requestAdmission: function <atom:0>};
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=70B file=chatgpt_multiplayer/src/BrowserMultiplayerAdmission
// args: s, e
// locals: this
// closure: <class_fields_init>, r, i
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.client = new r.MultiplayerAdmissionClient(s, i(e));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=114B file=chatgpt_multiplayer/src/BrowserMultiplayerAdmission
// locals: this
function {
  this = this;
  return Promise.resolve(this.client.fetch(undefined));   // tail call
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=5 bc=280B file=chatgpt_multiplayer/src/BrowserMultiplayerAdmission
// args: require, module, exports
// locals: r, s, BrowserMultiplayerAdmissionError, <class_fields_init>, BrowserMultiplayerAdmissionError#1, e, i, BrowserMultiplayerAdmissionClient, <class_fields_init>#1, BrowserMultiplayerAdmissionClient#1
function {
  e = function e;
  i = function i;
  let BrowserMultiplayerAdmissionClient#1;
  let BrowserMultiplayerAdmissionError#1;
  let s;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BrowserMultiplayerAdmissionError = undefined;
  exports.browserAdmissionFailureReason = undefined;
  exports.browserAdmissionOptions = undefined;
  exports.BrowserMultiplayerAdmissionClient = undefined;
  r = require("./MultiplayerAdmissionClient");
  s = require("./MultiplayerAdmissionError");
  let BrowserMultiplayerAdmissionError;
  let <class_fields_init>;
  class BrowserMultiplayerAdmissionError extends s.MultiplayerAdmissionError { ... }
  <class_fields_init> = undefined;
  <proto:BrowserMultiplayerAdmissionError>;
  BrowserMultiplayerAdmissionError = function <atom:0>;
  // close_loc <class_fields_init>
  BrowserMultiplayerAdmissionError#1 = function <atom:0>;
  exports.BrowserMultiplayerAdmissionError = BrowserMultiplayerAdmissionError#1;
  exports.browserAdmissionFailureReason = e;
  exports.browserAdmissionOptions = i;
  let BrowserMultiplayerAdmissionClient;
  let <class_fields_init>#1;
  class BrowserMultiplayerAdmissionClient extends undefined { ... }
  <proto:BrowserMultiplayerAdmissionClient>.fetch = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:BrowserMultiplayerAdmissionClient>;
  BrowserMultiplayerAdmissionClient = function <atom:0>;
  // close_loc <class_fields_init>#1
  BrowserMultiplayerAdmissionClient#1 = function <atom:0>;
  exports.BrowserMultiplayerAdmissionClient = BrowserMultiplayerAdmissionClient#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/BrowserMultiplayerAdmission
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
