// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=134B file=chatgpt_family/src/FamilyMessagingController
// args: e
function {
  e.Unavailable = 0;
  e[0] = "Unavailable";
  e.IncorrectCode = 1;
  e[1] = "IncorrectCode";
  e.Expired = 2;
  e[2] = "Expired";
  e.RateLimited = 3;
  e[3] = "RateLimited";
  e.PhoneUnavailable = 4;
  e[4] = "PhoneUnavailable";
  e.DisconnectRequired = 5;
  e[5] = "DisconnectRequired";
  e.ActivationFailed = 6;
  e[6] = "ActivationFailed";
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=109B file=chatgpt_family/src/FamilyMessagingController
// args: e, s, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.api = e;
  this.changed = s;
  this.now = t;
  this.busy = false;
  this.needsStatusRefresh = false;
  this.disposed = false;
  this.groupCompleted = false;
  this.refreshAfterRequest = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=383B file=chatgpt_family/src/FamilyMessagingController
// locals: this
// closure: t, s
function {
  this = this;
  if (((this.error === t.Expired))) goto L_17e;
  if (!((this.snapshot == null))) goto L_78;
  this.snapshot;
  goto L_99;
  if (!((undefined.status === s.FamilyMessagingStatus.Pending))) goto L_17e;
  if (!((this.snapshot.expiresAt == null))) goto L_155;
  this.snapshot.expiresAt;
  return (Date.parse("") <= this.now());
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=190B file=chatgpt_family/src/FamilyMessagingController
// locals: this
// closure: s
function {
  this = this;
  if (!(!this.busy)) goto L_bd;
  if (!((this.snapshot == null))) goto L_56;
  this.snapshot;
  goto L_77;
  return (undefined.status === s.FamilyMessagingStatus.Pending);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=204B file=chatgpt_family/src/FamilyMessagingController
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_cb;
  if (!(this.busy)) goto L_5e;
  this.refreshAfterRequest = true;
  goto L_cb;
  // [栈深重同步 1 -> 0]
  this.perform(this.api.status(), false);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=495B file=chatgpt_family/src/FamilyMessagingController
// args: e
// locals: this
// closure: s
function {
  this = this;
  if ((this.disposed)) goto L_1ee;
  if ((this.busy)) goto L_1ee;
  if (!(!this.needsStatusRefresh)) goto L_1c9;
  if (!(this.snapshot)) goto L_1c9;
  if (((this.snapshot.status === s.FamilyMessagingStatus.Unverified))) goto L_152;
  if (!(this.canResend)) goto L_1ee;
  goto L_1ee;
  // [栈深重同步 1 -> 0]
  this.refresh();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=2 bc=932B file=chatgpt_family/src/FamilyMessagingController
// args: e
// locals: i, this
// closure: t, s
function {
  this = this;
  let i;
  if ((this.disposed)) goto L_4d;
  if (!(this.busy)) goto L_50;
  return;
  if (!(this.needsStatusRefresh)) goto L_9b;
  this.refresh();
  return;
  i = this.snapshot;
  if (!((i == null))) goto L_c9;
  i;
  goto L_ea;
  if (!(undefined.challengeId)) goto L_3a2;
  if (!(this.expired)) goto L_167;
  this.error = t.Expired;
  this.changed();
  return undefined;
  if (!((i.status === s.FamilyMessagingStatus.Verified))) goto L_26b;
  goto L_39f;
  // [栈深重同步 1 -> 0]
  if (!((i.status === s.FamilyMessagingStatus.Pending))) goto L_39f;
  if (!(new RegExp("^\\d{6}$").test(e))) goto L_39f;
  this.perform(this.api.activate(i.challengeId, e), true);
  return undefined;
  return undefined;
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=906B file=chatgpt_family/src/FamilyMessagingController
// args: t
// locals: i, r, a, this
// closure: s, e
function {
  this = this;
  let a;
  let r;
  let i;
  if ((this.disposed)) goto L_ee;
  if ((this.busy)) goto L_ee;
  if (!((this.snapshot == null))) goto L_87;
  this.snapshot;
  goto L_a8;
  if (!((undefined.status !== s.FamilyMessagingStatus.Active))) goto L_f2;
  return undefined; // async
  if (!(this.groupCompleted)) goto L_119;
  return true; // async
  this.busy = true;
  this.changed();
  if (!((undefined === t))) goto L_198;
  goto L_1df;
  // [栈深重同步 1 -> 0]
  i = this.api.joinInvite(t);
  this.task = i;
  r = (await i.result);
  if ((this.disposed)) goto L_25f;
  if (!((this.task !== i))) goto L_263;
  return undefined; // async
  if (!((r.kind === e.OAINetworkResultKind.Success))) goto L_352;
  if (((undefined === t))) goto L_352;
  if (!(("object" == typeof r.value))) goto L_352;
  a = (true === r.value.isMember);
  this.groupCompleted = a;
  this.finishRequest();
  return a; // async
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=196B file=chatgpt_family/src/FamilyMessagingController
// locals: this
function {
  this = this;
  this.disposed = true;
  if (!((this.task == null))) goto L_38;
  this.task;
  goto L_5c;
  undefined.cancel();
  this.task = undefined;
  this.snapshot = undefined;
  if (!((undefined !== this.wakeup))) goto L_c3;
  clearTimeout(this.wakeup);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=605B file=chatgpt_family/src/FamilyMessagingController
// args: i
// closure: this, s, e, t
function {
  if ((this.disposed)) goto L_25c;
  if (((this.task !== s))) goto L_25c;
  if (!((i.kind === e.OAINetworkResultKind.Success))) goto L_11e;
  this.snapshot = i.value;
  this.needsStatusRefresh = false;
  goto L_236;
  // [栈深重同步 1 -> 0]
  this.error = this.mapError(i);
  if (!(t)) goto L_236;
  if (((undefined === i.statusCode))) goto L_225;
  if (((i.statusCode >= 500))) goto L_225;
  if (((409 === i.statusCode))) goto L_225;
  if (((410 === i.statusCode))) goto L_225;
  if (!((429 === i.statusCode))) goto L_236;
  this.needsStatusRefresh = true;
  true;
  this.finishRequest();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=147B file=chatgpt_family/src/FamilyMessagingController
// args: s, t
// locals: this
// closure: e
function {
  this = this;
  this.task = s;
  this.busy = true;
  this.error = undefined;
  this.changed();
  s.result.then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=151B file=chatgpt_family/src/FamilyMessagingController
// locals: this
function {
  this = this;
  this.task = undefined;
  this.busy = false;
  this.changed();
  if (!(this.refreshAfterRequest)) goto L_96;
  this.refreshAfterRequest = false;
  this.refresh();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=114B file=chatgpt_family/src/FamilyMessagingController
// closure: this
function {
  if ((this.disposed)) goto L_71;
  this.changed();
  this.scheduleTimingRefresh();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=1 bc=457B file=chatgpt_family/src/FamilyMessagingController
// locals: e, this
// closure: s
function {
  this = this;
  let e;
  if (!((undefined !== this.wakeup))) goto L_55;
  clearTimeout(this.wakeup);
  if (!((this.snapshot == null))) goto L_80;
  this.snapshot;
  goto L_a1;
  if (!((undefined.status !== s.FamilyMessagingStatus.Pending))) goto L_ea;
  return;
  if (!((this.snapshot.expiresAt == null))) goto L_159;
  this.snapshot.expiresAt;
  e = Date.parse("");
  if (((e <= this.now()))) goto L_1c8;
  this.wakeup = setTimeout(function <atom:0>, ((e - this.now()) + 1));
  setTimeout(function <atom:0>, ((e - this.now()) + 1));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=355B file=chatgpt_family/src/FamilyMessagingController
// args: e
// closure: s, t
function {
  if (!((s.messagingErrorCode(e) === "invalid_code"))) goto L_52;
  return t.IncorrectCode;
  if (!((s.messagingErrorCode(e) === "challenge_expired"))) goto L_7e;
  return t.Expired;
  if (!((s.messagingErrorCode(e) === "rate_limited"))) goto L_aa;
  return t.RateLimited;
  if (((s.messagingErrorCode(e) === "phone_not_allowed"))) goto L_bc;
  if (!((s.messagingErrorCode(e) === "phone_already_in_use"))) goto L_df;
  return t.PhoneUnavailable;
  if (!((s.messagingErrorCode(e) === "disconnect_required"))) goto L_10b;
  return t.DisconnectRequired;
  if (((s.messagingErrorCode(e) === "enrollment_unavailable"))) goto L_11d;
  if (!((s.messagingErrorCode(e) === "enrollment_required"))) goto L_140;
  return t.ActivationFailed;
  return t.Unavailable;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=13 bc=253B file=chatgpt_family/src/FamilyMessagingController
// args: require, module, exports
// locals: e, s, t, FamilyMessagingController, <class_fields_init>, FamilyMessagingController#1
function {
  let FamilyMessagingController#1;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FamilyMessagingError = undefined;
  exports.FamilyMessagingController = undefined;
  e = require("oai_platform_services/src/OAINetworkClient");
  s = require("./FamilyMessagingApi");
  if ((t)) goto L_7b;
  t = {};
  exports.FamilyMessagingError = {};
  !function <atom:0>({});
  let FamilyMessagingController;
  let <class_fields_init>;
  class FamilyMessagingController extends undefined { ... }
  <proto:FamilyMessagingController>.expired = function <atom:0>;
  <proto:FamilyMessagingController>.canResend = function <atom:0>;
  <proto:FamilyMessagingController>.refresh = function <atom:0>;
  <proto:FamilyMessagingController>.send = function <atom:0>;
  <proto:FamilyMessagingController>.verify = function <atom:0>;
  <proto:FamilyMessagingController>.completeGroup = function <atom:0>;
  <proto:FamilyMessagingController>.dispose = function <atom:0>;
  <proto:FamilyMessagingController>.perform = function <atom:0>;
  <proto:FamilyMessagingController>.finishRequest = function <atom:0>;
  <proto:FamilyMessagingController>.scheduleTimingRefresh = function <atom:0>;
  <proto:FamilyMessagingController>.mapError = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FamilyMessagingController>;
  FamilyMessagingController = function <atom:0>;
  // close_loc <class_fields_init>
  FamilyMessagingController#1 = function <atom:0>;
  exports.FamilyMessagingController = FamilyMessagingController#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_family/src/FamilyMessagingController
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
