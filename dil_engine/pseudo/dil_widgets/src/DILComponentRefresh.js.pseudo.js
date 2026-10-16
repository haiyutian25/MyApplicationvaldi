// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=173B file=dil_widgets/src/DILComponentRefresh
// args: t, s, o
// locals: this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.polls = new Map();
  this.enabled = false;
  this.network = new e.OAINetworkClient(t);
  this.path = "/backend-api/conversation/".concat(encodeURIComponent(s), "/message/", encodeURIComponent(o), "/genui/refresh_widget");
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=125B file=dil_widgets/src/DILComponentRefresh
// args: e
// locals: this
function {
  this = this;
  if (!((this.enabled !== e))) goto L_7c;
  this.enabled = e;
  this.update(this.appData);
  return;
}

// fn <atom:0>  args=1 vars=14 closure=2 cpool=0 bc=1619B file=dil_widgets/src/DILComponentRefresh
// args: e
// locals: t, s, o, i, d, a, e#1, t#1, s#1, u, n, r, this
// closure: r, n
function {
  this = this;
  let i;
  let o;
  let s;
  let t;
  this.appData = e;
  if (!((e == null))) goto L_24;
  e;
  goto L_45;
  t = undefined.opGenui;
  if (!(r(t))) goto L_73;
  goto L_74;
  // [栈深重同步 1 -> 0]
  s = undefined;
  if (!(r(t))) goto L_a2;
  goto L_a3;
  // [栈深重同步 1 -> 0]
  o = undefined;
  i = new Set();
  if (!(this.enabled)) goto L_4ee;
  if (!(r(s))) goto L_4ee;
  if (!(r(o))) goto L_4ee;
  let a;
  let d;
  const _it1 = Object.entries(s);
  goto L_4e5;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  d = <value(_it2)>;
  <done(_it2)>;
  a = <value(_it2)>;
  let u;
  let s#1;
  let t#1;
  let e#1;
  e#1 = o[d];
  if ((!r(a))) goto L_1dc;
  if (((true !== a.enabled))) goto L_1dc;
  if ((!r(e#1))) goto L_1dc;
  if ((("resolved" !== e#1.status))) goto L_1dc;
  if ((("string" != typeof e#1.componentName))) goto L_4e5;
  if (!((n(a.next_refresh_at) == null))) goto L_20d;
  n(a.next_refresh_at);
  t#1 = 0;
  s#1 = n(a.expires_at);
  if (!((undefined !== s#1))) goto L_270;
  if (((Date.now() >= s#1))) goto L_4e5;
  i.add(d);
  u = this.polls.get(d);
  if (!((undefined === u))) goto L_3a0;
  u = {nextRefreshAt: t#1, expiresAt: s#1, timer: undefined, request: undefined, stopped: false, failureCount: 0};
  {nextRefreshAt: t#1, expiresAt: s#1, timer: undefined, request: undefined, stopped: false, failureCount: 0};
  this.polls.set(d, u);
  goto L_4e4;
  // [栈深重同步 4 -> 3]
  if (!((u.nextRefreshAt === t#1))) goto L_3f4;
  if (((u.expiresAt === s#1))) goto L_4e4;
  u.nextRefreshAt = t#1;
  u.expiresAt = s#1;
  u.stopped = false;
  if (!((undefined !== u.timer))) goto L_48a;
  clearTimeout(u.timer);
  u.timer = undefined;
  undefined;
  if (!((undefined === u.request))) goto L_4e4;
  this.schedule(d, u, t#1);
  if (!(<done(_it2)>)) goto L_120;
  <value(_it2)>;
  let r;
  let n;
  const _it3 = this.polls;
  goto L_649;
  const _it4 = <value(_it3)>;
  <done(_it4)>;
  n = <value(_it4)>;
  <done(_it4)>;
  r = <value(_it4)>;
  if ((i.has(n))) goto L_648;
  this.polls.delete(n);
  if (!((undefined !== r.timer))) goto L_5f7;
  clearTimeout(r.timer);
  if (!((r.request == null))) goto L_624;
  r.request;
  goto L_648;
  <value(_it4)>.cancel();
  if (!(<done(_it4)>)) goto L_51b;
  <value(_it4)>;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=53B file=dil_widgets/src/DILComponentRefresh
// locals: this
function {
  this = this;
  this.enabled = false;
  this.update(undefined);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=138B file=dil_widgets/src/DILComponentRefresh
// closure: t, s, this, e
function {
  t.timer = undefined;
  if (!((Date.now() < s))) goto L_62;
  goto L_89;
  // [栈深重同步 1 -> 0]
  this.refresh(e, t);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=1 bc=287B file=dil_widgets/src/DILComponentRefresh
// args: e, t, s
// locals: i, this
// closure: o
function {
  this = this;
  let i;
  i = Date.now();
  if ((t.stopped)) goto L_9f;
  if (!((undefined !== t.expiresAt))) goto L_b0;
  if (!((s >= t.expiresAt))) goto L_b0;
  t.stopped = true;
  goto L_11e;
  // [栈深重同步 1 -> 0]
  t.timer = setTimeout(function <atom:0>, Math.min(o, Math.max(0, (s - i))));
  setTimeout(function <atom:0>, Math.min(o, Math.max(0, (s - i))));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=59B file=dil_widgets/src/DILComponentRefresh
// args: e
// closure: r, n
function {
  if (!(!r(e))) goto L_15;
  throw new Error("Invalid widget refresh response");
  return n(e.next_poll_after_ms);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=8 cpool=0 bc=1203B file=dil_widgets/src/DILComponentRefresh
// args: n
// locals: r
// closure: this, o, d, a, e, t, i, s
function {
  if (!((this.polls.get(o) === d))) goto L_4b2;
  if (!((d.request === a))) goto L_4b2;
  d.request = undefined;
  if (!((n.kind === e.OAINetworkResultKind.Success))) goto L_1f8;
  d.failureCount = 0;
  if (((undefined === n.value))) goto L_148;
  if (!((0 === n.value))) goto L_157;
  d.stopped = true;
  return;
  this.schedule(o, d, (Date.now() + Math.max(t, n.value)));
  return;
  let r;
  d.failureCount = (d.failureCount ++);
  r = i(n);
  if (((n.kind === e.OAINetworkResultKind.Unavailable))) goto L_444;
  if (((n.kind === e.OAINetworkResultKind.Cancelled))) goto L_444;
  if (((n.kind === e.OAINetworkResultKind.InvalidRequest))) goto L_444;
  if (((n.kind === e.OAINetworkResultKind.HostRejected))) goto L_444;
  if (!((404 === n.statusCode))) goto L_414;
  if ((!r)) goto L_444;
  if (!(r)) goto L_442;
  goto L_443;
  // [栈深重同步 2 -> 1]
  if (!((d.failureCount >= 2))) goto L_453;
  d.stopped = true;
  return;
  if (!(r)) goto L_4aa;
  goto L_4ad;
  // [栈深重同步 6 -> 5]
  this.schedule(o, d, (Date.now() + s));
  return;
}

// fn <atom:0>  args=2 vars=4 closure=6 cpool=2 bc=244B file=dil_widgets/src/DILComponentRefresh
// args: o, d
// locals: a, this
// closure: r, n, e, t, i, s
function {
  this = this;
  let a;
  a = this.network.requestJson({request: {method: "POST", path: this.path, jsonBody: {resolution_id: o}}, decode: function <atom:0>});
  d.request = a;
  a.result.then(function <atom:0>);
  return;
}

// fn i  args=1 vars=2 closure=1 cpool=0 bc=231B file=dil_widgets/src/DILComponentRefresh
// args: e
// locals: t
// closure: r
function {
  if (((404 !== e.statusCode))) goto L_4e;
  if (!((undefined === e.bodyText))) goto L_53;
  return false;
  try { // catch -> L_dc
  let t;
  t = JSON.parse(e.bodyText);
  if (!(r(t))) goto L_da;
  return ("Message not found" === t.detail);
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_e6
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/DILComponentRefresh
// args: e
function {
  if (!(("number" == typeof e))) goto L_3d;
  if (!(Number.isFinite(e))) goto L_3d;
  if (!((e >= 0))) goto L_3d;
  return e;
  return undefined;
}

// fn r  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/DILComponentRefresh
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=9 bc=196B file=dil_widgets/src/DILComponentRefresh
// args: require, module, exports
// locals: e, t, s, o, DILComponentRefresh, <class_fields_init>, DILComponentRefresh#1, i, n, r
function {
  i = function i;
  n = function n;
  r = function r;
  let DILComponentRefresh#1;
  let o;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILComponentRefresh = undefined;
  e = require("oai_platform_services/src/OAINetworkClient");
  t = 1000;
  s = 5000;
  o = 2147483647;
  let DILComponentRefresh;
  let <class_fields_init>;
  class DILComponentRefresh extends undefined { ... }
  <proto:DILComponentRefresh>.setEnabled = function <atom:0>;
  <proto:DILComponentRefresh>.update = function <atom:0>;
  <proto:DILComponentRefresh>.dispose = function <atom:0>;
  <proto:DILComponentRefresh>.schedule = function <atom:0>;
  <proto:DILComponentRefresh>.refresh = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILComponentRefresh>;
  DILComponentRefresh = function <atom:0>;
  // close_loc <class_fields_init>
  DILComponentRefresh#1 = function <atom:0>;
  exports.DILComponentRefresh = DILComponentRefresh#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILComponentRefresh
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
