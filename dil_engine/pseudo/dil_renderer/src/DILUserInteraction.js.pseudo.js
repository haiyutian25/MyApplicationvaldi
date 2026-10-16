// fn n  args=2 vars=2 closure=0 cpool=0 bc=19B file=dil_renderer/src/DILUserInteraction
// args: t, e
function {
  if (!(("client" === e))) goto L_12;
  return ("log_event" === t);
}

// fn o  args=1 vars=2 closure=1 cpool=0 bc=42B file=dil_renderer/src/DILUserInteraction
// args: e
// locals: r
// closure: t
function {
  let r;
  r = t;
  t = undefined;
  undefined;
  try { // catch -> L_1b
  // gosub (finally 块) 33
  return e();
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 33
  throw <?>;
  t = r;
  r;
  // ret (finally 块) 
}

// fn <atom:0>  args=1 vars=6 closure=4 cpool=0 bc=358B file=dil_renderer/src/DILUserInteraction
// args: n
// locals: o, i, s, c, t
// closure: e, this, t, r
function {
  let c;
  let s;
  let i;
  let o;
  e = <e_new>;
  o = (e++);
  this.interactionIds.set(o, undefined);
  i = t;
  s = {forwardedToSandbox: false, interactionId: o, tracker: this, source: undefined};
  r.set(o, s);
  t = s;
  s;
  c = false;
  try { // catch -> L_d6
  let t;
  t = n();
  c = true;
  true;
  // gosub (finally 块) 220
  return t;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 220
  throw <?>;
  t = i;
  i;
  if ((s.forwardedToSandbox)) goto L_164;
  if (!(c)) goto L_13c;
  goto L_164;
  // [栈深重同步 1 -> 0]
  this.discard(o);
  // ret (finally 块) 
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=47B file=dil_renderer/src/DILUserInteraction
// locals: this
// closure: e, t, r, <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.interactionIds = new Map();
  this.run = function <atom:0>;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=253B file=dil_renderer/src/DILUserInteraction
// args: e
// locals: r, this
// closure: t
function {
  this = this;
  let r;
  r = t;
  if (((undefined === r))) goto L_aa;
  if (((r.tracker !== this))) goto L_aa;
  if (!(!!this.interactionIds.has(r.interactionId))) goto L_fc;
  this.complete(r.interactionId, e);
  return true;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=292B file=dil_renderer/src/DILUserInteraction
// args: e, r
// locals: n, this
// closure: t
function {
  this = this;
  let n;
  n = t;
  if (!((n == null))) goto L_14;
  n;
  goto L_35;
  if (!((undefined.tracker === this))) goto L_123;
  if (!(this.interactionIds.has(n.interactionId))) goto L_123;
  this.interactionIds.set(n.interactionId, {scope: e, completion: r});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=161B file=dil_renderer/src/DILUserInteraction
// locals: this
// closure: t
function {
  this = this;
  if (!((t == null))) goto L_d;
  t;
  goto L_2e;
  if (!((undefined.tracker === this))) goto L_a0;
  return (undefined !== this.interactionIds.get(t.interactionId));
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=202B file=dil_renderer/src/DILUserInteraction
// locals: this
// closure: t
function {
  this = this;
  if (!((t == null))) goto L_d;
  t;
  goto L_2e;
  if (!((undefined.tracker === this))) goto L_c8;
  if (!((this.interactionIds.get(t.interactionId) == null))) goto L_a6;
  this.interactionIds.get(t.interactionId);
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.scope;
  return undefined;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=171B file=dil_renderer/src/DILUserInteraction
// args: t, e
// locals: r, this
function {
  this = this;
  let r;
  if (!((this.interactionIds.get(t) == null))) goto L_54;
  this.interactionIds.get(t);
  goto L_75;
  r = undefined.completion;
  this.discard(t);
  if (!((r == null))) goto L_a8;
  r;
  goto L_aa;
  undefined(e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=199B file=dil_renderer/src/DILUserInteraction
// locals: t, this
// closure: r
function {
  this = this;
  let t;
  for (const t of this.interactionIds.keys()) {
    r.delete(t);
  }
  this.interactionIds.clear();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=202B file=dil_renderer/src/DILUserInteraction
// args: t
// locals: this
// closure: r
function {
  this = this;
  this.interactionIds.delete(t);
  if (!((r.get(t) == null))) goto L_7a;
  r.get(t);
  goto L_9b;
  if (!((undefined.tracker === this))) goto L_c9;
  r.delete(t);
  return;
}

// fn i  args=0 vars=1 closure=2 cpool=0 bc=154B file=dil_renderer/src/DILUserInteraction
// locals: e
// closure: t, r
function {
  let e;
  e = t;
  if (!((undefined !== e))) goto L_99;
  e.forwardedToSandbox = true;
  null;
  e;
  r.set(e.interactionId, {});
  return e.interactionId;
  return;
}

// fn s  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_renderer/src/DILUserInteraction
// args: t
// closure: r
function {
  return r.has(t);   // tail call
}

// fn c  args=2 vars=4 closure=2 cpool=0 bc=99B file=dil_renderer/src/DILUserInteraction
// args: e, n
// locals: o, i
// closure: r, t
function {
  let i;
  let o;
  o = r.get(e);
  if (!((undefined === o))) goto L_3a;
  return n();   // tail call
  i = t;
  t = o;
  o;
  try { // catch -> L_54
  // gosub (finally 块) 90
  return n();
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 90
  throw <?>;
  t = i;
  i;
  // ret (finally 块) 
}

// fn a  args=1 vars=1 closure=1 cpool=0 bc=119B file=dil_renderer/src/DILUserInteraction
// args: t
// closure: r
function {
  if (!((r.get(t) == null))) goto L_30;
  r.get(t);
  goto L_76;
  undefined.tracker.discard(t);
  return;
}

// fn I  args=2 vars=4 closure=1 cpool=0 bc=107B file=dil_renderer/src/DILUserInteraction
// args: e, r
// locals: n, o
// closure: t
function {
  let o;
  let n;
  n = t;
  if (!((undefined === n))) goto L_15;
  return r();   // tail call
  o = n.source;
  n.source = e;
  try { // catch -> L_55
  // gosub (finally 块) 91
  return r();
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 91
  throw <?>;
  n.source = o;
  // ret (finally 块) 
}

// fn d  args=0 vars=0 closure=1 cpool=0 bc=44B file=dil_renderer/src/DILUserInteraction
// closure: t
function {
  if (!((t == null))) goto L_a;
  t;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.source;
}

// fn u  args=1 vars=1 closure=1 cpool=0 bc=120B file=dil_renderer/src/DILUserInteraction
// args: t
// closure: r
function {
  if (!((r.get(t) == null))) goto L_30;
  r.get(t);
  goto L_77;
  undefined.tracker.complete(t, undefined);
  return;
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=17 bc=430B file=dil_renderer/src/DILUserInteraction
// args: require, module, exports
// locals: t, e, r, n, o, DILUserInteractionTracker, <class_fields_init>, DILUserInteractionTracker#1, i, s, c, a, I, d, u
function {
  n = function n;
  o = function o;
  i = function i;
  s = function s;
  c = function c;
  a = function a;
  I = function I;
  d = function d;
  u = function u;
  let DILUserInteractionTracker#1;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isNonConsumingAction = undefined;
  exports.runWithoutDILUserInteraction = undefined;
  exports.DILUserInteractionTracker = undefined;
  exports.captureDILUserInteractionId = undefined;
  exports.hasDILUserInteractionId = undefined;
  exports.runWithDILUserInteractionId = undefined;
  exports.discardDILUserInteractionId = undefined;
  exports.runWithDILUserInteractionSource = undefined;
  exports.getDILUserInteractionSource = undefined;
  exports.completeDILUserInteractionId = undefined;
  t = undefined;
  e = 1;
  r = new Map();
  exports.isNonConsumingAction = n;
  exports.runWithoutDILUserInteraction = o;
  let DILUserInteractionTracker;
  let <class_fields_init>;
  class DILUserInteractionTracker extends undefined { ... }
  <proto:DILUserInteractionTracker>.consumeCurrent = function <atom:0>;
  <proto:DILUserInteractionTracker>.observeCurrent = function <atom:0>;
  <proto:DILUserInteractionTracker>.hasCurrentObservation = function <atom:0>;
  <proto:DILUserInteractionTracker>.currentScope = function <atom:0>;
  <proto:DILUserInteractionTracker>.complete = function <atom:0>;
  <proto:DILUserInteractionTracker>.dispose = function <atom:0>;
  <proto:DILUserInteractionTracker>.discard = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILUserInteractionTracker>;
  DILUserInteractionTracker = function <atom:0>;
  // close_loc <class_fields_init>
  DILUserInteractionTracker#1 = function <atom:0>;
  exports.DILUserInteractionTracker = DILUserInteractionTracker#1;
  exports.captureDILUserInteractionId = i;
  exports.hasDILUserInteractionId = s;
  exports.runWithDILUserInteractionId = c;
  exports.discardDILUserInteractionId = a;
  exports.runWithDILUserInteractionSource = I;
  exports.getDILUserInteractionSource = d;
  exports.completeDILUserInteractionId = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILUserInteraction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
