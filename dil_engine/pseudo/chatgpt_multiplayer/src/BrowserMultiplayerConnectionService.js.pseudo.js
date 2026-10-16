// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=88B file=chatgpt_multiplayer/src/BrowserMultiplayerConnectionService
// args: e
// locals: this
// closure: <class_fields_init>, i
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.options = e;
  this.service = new i.MultiplayerConnectionService();
  this.debugSequence = 0;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=46B file=chatgpt_multiplayer/src/BrowserMultiplayerConnectionService
// closure: this
function {
  this.debugSequence = (this.debugSequence ++);
  return (this.debugSequence ++);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_multiplayer/src/BrowserMultiplayerConnectionService
// closure: s
function {
  return s.onOpen();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserMultiplayerConnectionService
// args: e
// closure: s
function {
  return s.onMessage(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserMultiplayerConnectionService
// args: e
// closure: s
function {
  return s.onClose(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=163B file=chatgpt_multiplayer/src/BrowserMultiplayerConnectionService
// args: e
// closure: u, r, s
function {
  if (!((u == null))) goto L_b;
  u;
  goto L_7b;
  undefined.record(r.MultiplayerDebugEventKind.CONNECTION_FAILURE, {failure: e});
  s.onFailure(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=158B file=chatgpt_multiplayer/src/BrowserMultiplayerConnectionService
// args: e
// closure: u, r, l
function {
  if (!((u == null))) goto L_b;
  u;
  goto L_75;
  undefined.record(r.MultiplayerDebugEventKind.ADMISSION_START, {});
  return l.requestAdmission(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=469B file=chatgpt_multiplayer/src/BrowserMultiplayerConnectionService
// args: e
// closure: u, r, this
function {
  if (!((u == null))) goto L_b;
  u;
  goto L_51;
  undefined.retainCredential(e.connectionGrant);
  if (!((undefined !== e.affinity))) goto L_ec;
  if (!((u == null))) goto L_85;
  u;
  goto L_ec;
  undefined.retainCredential(e.affinity.routeToken);
  if (!((u == null))) goto L_f8;
  u;
  goto L_162;
  undefined.record(r.MultiplayerDebugEventKind.ADMISSION_SUCCESS, {});
  if (!((this.options.onAdmission == null))) goto L_1af;
  this.options.onAdmission;
  this.options;
  goto L_1d4;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=0 bc=45B file=chatgpt_multiplayer/src/BrowserMultiplayerConnectionService
// args: e, i, o
// closure: n, u
function {
  return n.openBrowserMultiplayerSocket(e, i, o, u);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=5 cpool=8 bc=472B file=chatgpt_multiplayer/src/BrowserMultiplayerConnectionService
// args: i, s
// locals: u, l, this
// closure: r, n, o, t, e
function {
  this = this;
  let l;
  let u;
  if (!((undefined === this.options.onDebugEvent))) goto L_53;
  goto L_ea;
  // [栈深重同步 1 -> 0]
  t = (t ++);
  u = new o.BrowserMultiplayerDiagnostics(i.documentId, (t ++), function <atom:0>, this.options.onDebugEvent);
  l = e.browserAdmissionOptions(this.options);
  null;
  l;
  return this.service.connect(i, {onOpen: function <atom:0>, onMessage: function <atom:0>, onClose: function <atom:0>, onFailure: function <atom:0>}, {requestAdmission: function <atom:0>, onAdmission: function <atom:0>, openSocket: function <atom:0>});   // tail call
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=180B file=chatgpt_multiplayer/src/BrowserMultiplayerConnectionService
// args: require, module, exports
// locals: e, i, n, o, r, t, BrowserMultiplayerConnectionService, <class_fields_init>, BrowserMultiplayerConnectionService#1
function {
  let BrowserMultiplayerConnectionService#1;
  let t;
  let r;
  let o;
  let n;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BrowserMultiplayerConnectionService = undefined;
  e = require("./BrowserMultiplayerAdmission");
  i = require("./MultiplayerConnectionService");
  n = require("./OpenBrowserMultiplayerSocket");
  o = require("./BrowserMultiplayerDiagnostics");
  r = require("./MultiplayerDebugEvent");
  t = 0;
  let BrowserMultiplayerConnectionService;
  let <class_fields_init>;
  class BrowserMultiplayerConnectionService extends undefined { ... }
  <proto:BrowserMultiplayerConnectionService>.connect = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BrowserMultiplayerConnectionService>;
  BrowserMultiplayerConnectionService = function <atom:0>;
  // close_loc <class_fields_init>
  BrowserMultiplayerConnectionService#1 = function <atom:0>;
  exports.BrowserMultiplayerConnectionService = BrowserMultiplayerConnectionService#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/BrowserMultiplayerConnectionService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
