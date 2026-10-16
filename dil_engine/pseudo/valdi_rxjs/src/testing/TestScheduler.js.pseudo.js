// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=150B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// locals: this.active_func, new.target, this
// closure: s, h, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(s.VirtualAction, h);
  if (!(<class_fields_init>)) goto L_48;
  <class_fields_init>.call(this);
  new new.target(s.VirtualAction, h);
  this.assertDeepEqual = e;
  this.hotObservables = [];
  this.coldObservables = [];
  this.flushTests = [];
  this.runMode = false;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=227B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// locals: t, this
// closure: TestScheduler
function {
  this = this;
  let t;
  if (!(this.runMode)) goto L_79;
  goto L_a3;
  // [栈深重同步 1 -> 0]
  t = e.indexOf("|");
  if (!((-1 === t))) goto L_ba;
  throw new Error("marble diagram for time should have a completion marker "|"");
  return (t * TestScheduler.frameTimeFactor);
}

// fn <atom:0>  args=3 vars=6 closure=2 cpool=0 bc=331B file=valdi_rxjs/src/testing/TestScheduler
// args: e, r, i
// locals: s, a, this
// closure: TestScheduler, t
function {
  this = this;
  let a;
  let s;
  if (!((-1 !== e.indexOf("^")))) goto L_45;
  throw new Error("cold observable cannot have subscription offset "^"");
  if (!((-1 !== e.indexOf("!")))) goto L_82;
  throw new Error("cold observable cannot have unsubscription marker "!"");
  s = TestScheduler.parseMarbles(e, r, i, undefined, this.runMode);
  a = new t.ColdObservable(s, this);
  this.coldObservables.push(a);
  return a;
}

// fn <atom:0>  args=3 vars=6 closure=2 cpool=0 bc=270B file=valdi_rxjs/src/testing/TestScheduler
// args: e, t, i
// locals: s, a, this
// closure: TestScheduler, r
function {
  this = this;
  let a;
  let s;
  if (!((-1 !== e.indexOf("!")))) goto L_45;
  throw new Error("hot observable cannot have unsubscription marker "!"");
  s = TestScheduler.parseMarbles(e, t, i, undefined, this.runMode);
  a = new r.HotObservable(s, this);
  this.hotObservables.push(a);
  return a;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=125B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// closure: r, this, t, a
function {
  r.push({frame: (this.frame - t), notification: a.nextNotification(e)});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=125B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// closure: r, this, t, a
function {
  r.push({frame: (this.frame - t), notification: a.errorNotification(e)});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=123B file=valdi_rxjs/src/testing/TestScheduler
// closure: r, this, t, a
function {
  r.push({frame: (this.frame - t), notification: a.COMPLETE_NOTIFICATION});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=3 bc=88B file=valdi_rxjs/src/testing/TestScheduler
// args: e, t
// locals: r, this
// closure: a
function {
  this = this;
  let r;
  r = [];
  e.subscribe({next: function <atom:0>, error: function <atom:0>, complete: function <atom:0>});
  return r;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=244B file=valdi_rxjs/src/testing/TestScheduler
// args: t
// locals: r
// closure: e, this, i, a
function {
  let r;
  if (!((t instanceof e.Observable))) goto L_75;
  goto L_76;
  // [栈深重同步 1 -> 0]
  r = t;
  i.push({frame: this.frame, notification: a.nextNotification(r)});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=123B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// closure: i, this, a
function {
  i.push({frame: this.frame, notification: a.errorNotification(e)});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=121B file=valdi_rxjs/src/testing/TestScheduler
// closure: i, this, a
function {
  i.push({frame: this.frame, notification: a.COMPLETE_NOTIFICATION});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=3 bc=81B file=valdi_rxjs/src/testing/TestScheduler
// closure: e, this, i, a, l, t
function {
  l = t.subscribe({next: function <atom:0>, error: function <atom:0>, complete: function <atom:0>});
  t.subscribe({next: function <atom:0>, error: function <atom:0>, complete: function <atom:0>});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_rxjs/src/testing/TestScheduler
// closure: l
function {
  return l.unsubscribe();   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=3 cpool=0 bc=74B file=valdi_rxjs/src/testing/TestScheduler
// args: e, t, r
// closure: s, TestScheduler, u
function {
  s.ready = true;
  s.expected = TestScheduler.parseMarbles(e, t, r, true, u);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=277B file=valdi_rxjs/src/testing/TestScheduler
// args: t
// locals: r
// closure: e, this, s, a
function {
  let r;
  if (!((t instanceof e.Observable))) goto L_75;
  goto L_76;
  // [栈深重同步 1 -> 0]
  r = t;
  s.expected.push({frame: this.frame, notification: a.nextNotification(r)});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=156B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// closure: s, this, a
function {
  s.expected.push({frame: this.frame, notification: a.errorNotification(e)});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=154B file=valdi_rxjs/src/testing/TestScheduler
// closure: s, this, a
function {
  s.expected.push({frame: this.frame, notification: a.COMPLETE_NOTIFICATION});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=3 bc=81B file=valdi_rxjs/src/testing/TestScheduler
// closure: e, this, s, a, l, t
function {
  l = t.subscribe({next: function <atom:0>, error: function <atom:0>, complete: function <atom:0>});
  t.subscribe({next: function <atom:0>, error: function <atom:0>, complete: function <atom:0>});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=1 bc=72B file=valdi_rxjs/src/testing/TestScheduler
// args: t
// closure: e, this, s, a, l, n
function {
  s.ready = true;
  s.expected = [];
  this.schedule(function <atom:0>, n);
  return;
}

// fn <atom:0>  args=2 vars=12 closure=3 cpool=4 bc=509B file=valdi_rxjs/src/testing/TestScheduler
// args: t, r
// locals: t#1, r#1, i, s, o, n, c, l, u, this
// closure: e, a, TestScheduler
function {
  this = this;
  let r#1;
  let t#1;
  t#1 = t;
  if (!((r === undefined))) goto L_13;
  r;
  r = null;
  r#1 = null;
  let u;
  let l;
  let c;
  let n;
  let o;
  let s;
  let i;
  i = [];
  s = {actual: i, ready: false};
  o = TestScheduler.parseMarblesAsSubscriptions(r, this.runMode);
  if (!((o.subscribedFrame === (1 / 0)))) goto L_b8;
  goto L_dc;
  // [栈深重同步 1 -> 0]
  n = o.subscribedFrame;
  c = o.unsubscribedFrame;
  l = undefined;
  this.schedule(function <atom:0>, n);
  if (!((c !== (1 / 0)))) goto L_169;
  this.schedule(function <atom:0>, c);
  this.flushTests.push(s);
  if (((undefined === undefined))) goto L_1e2;
  u = <to_object>(undefined).runMode;
  <to_object>(undefined);
  goto L_1e7;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1ba;
  // [栈深重同步 1 -> 0]
  return {toBe: function <atom:0>, toEqual: function <atom:0>};
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=43B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// closure: TestScheduler, r
function {
  return TestScheduler.parseMarblesAsSubscriptions(e, r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=valdi_rxjs/src/testing/TestScheduler
// args: e
function {
  return (e.subscribedFrame !== (1 / 0));
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=2 bc=127B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// locals: i
// closure: TestScheduler, r, t
function {
  let i;
  if (!(("string" == typeof e))) goto L_13;
  goto L_14;
  // [栈深重同步 1 -> 0]
  i = e;
  t.ready = true;
  t.expected = i.map(function <atom:0>).filter(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=155B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// locals: t, r, this
// closure: TestScheduler
function {
  this = this;
  let r;
  let t;
  t = {actual: e, ready: false};
  this.flushTests.push(t);
  if (((undefined === undefined))) goto L_8d;
  r = <to_object>(undefined).runMode;
  <to_object>(undefined);
  goto L_91;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_66;
  // [栈深重同步 1 -> 0]
  return {toBe: function <atom:0>};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=148B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// closure: this
function {
  if ((!e.ready)) goto L_93;
  this.assertDeepEqual(e.actual, e.expected);
  return false;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=1 bc=225B file=valdi_rxjs/src/testing/TestScheduler
// locals: e, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  e = this.hotObservables;
  if (!((e.length > 0))) goto L_81;
  e.shift().setup();
  goto L_2b;
  super["flush"].call(this);
  this.flushTests = this.flushTests.filter(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=45B file=valdi_rxjs/src/testing/TestScheduler
// args: t
// closure: e, this
function {
  e = (e + (t * this.frameTimeFactor));
  (e + (t * this.frameTimeFactor));
  return;
}

// fn <atom:0>  args=2 vars=18 closure=1 cpool=5 bc=939B file=valdi_rxjs/src/testing/TestScheduler
// args: e, t
// locals: e#1, t#1, r, s, a, o, n, c, i, e#2, s#1, l, e#3, t#2, r#1, this
// closure: i
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_14;
  t;
  t = false;
  t#1 = false;
  let c;
  let n;
  let o;
  let a;
  let s;
  let r;
  if (!(("string" != typeof e))) goto L_5d;
  return new i.SubscriptionLog((1 / 0));
  r = Array.from(e);
  s = r.length;
  a = -1;
  o = (1 / 0);
  n = (1 / 0);
  c = 0;
  let i;
  i = 0;
  if (!((i < s))) goto L_349;
  let l;
  let s#1;
  let e#2;
  e#2 = c;
  s#1 = function <atom:0>;
  l = r[i];
  if (!((l === " "))) goto L_e9;
  if ((t)) goto L_e5;
  s#1(1);
  goto L_332;
  if (!((l === "-"))) goto L_fb;
  s#1(1);
  goto L_332;
  if (!((l === "("))) goto L_115;
  a = c;
  c;
  s#1(1);
  goto L_332;
  if (!((l === ")"))) goto L_12d;
  a = -1;
  -1;
  s#1(1);
  goto L_332;
  if (!((l === "^"))) goto L_16b;
  if (!((o !== (1 / 0)))) goto L_14e;
  throw new Error("found a second subscription point '^' in a subscription marble diagram. There can only be one.");
  if (!((a > -1))) goto L_15a;
  goto L_15d;
  // [栈深重同步 2 -> 1]
  o = c;
  c;
  s#1(1);
  goto L_332;
  if (!((l === "!"))) goto L_1a3;
  if (!((n !== (1 / 0)))) goto L_18c;
  throw new Error("found a second unsubscription point '!' in a subscription marble diagram. There can only be one.");
  if (!((a > -1))) goto L_198;
  goto L_19b;
  // [栈深重同步 2 -> 1]
  n = c;
  c;
  goto L_332;
  if (!(t)) goto L_319;
  if (!(l.match(new RegExp("^[0-9]$")))) goto L_319;
  if (((0 === i))) goto L_1f2;
  if (!((" " === r[(i - 1)]))) goto L_319;
  let e#3;
  e#3 = r.slice(i).join("").match(new RegExp("^([0-9]+(?:\\.[0-9]+)?)(ms|s|m) "));
  if (!(e#3)) goto L_319;
  let r#1;
  let t#2;
  i = (i + (e#3[0].length - 1));
  (i + (e#3[0].length - 1));
  t#2 = parseFloat(e#3[1]);
  r#1 = undefined;
  if (!((e#3[2] === "ms"))) goto L_2bb;
  r#1 = t#2;
  t#2;
  goto L_2ea;
  if (!((e#3[2] === "s"))) goto L_2d2;
  r#1 = (1000 * t#2);
  (1000 * t#2);
  goto L_2ea;
  if (!((e#3[2] === "m"))) goto L_2ea;
  r#1 = ((1000 * t#2) * 60);
  ((1000 * t#2) * 60);
  e#3[2];
  s#1((r#1 / this.frameTimeFactor));
  goto L_332;
  throw new Error((("there can only be '^' and '!' markers in a subscription marble diagram. Found instead '" + l) + "'."));
  l;
  c = e#2;
  e#2;
  // close_loc e#2
  i = <i_new>;
  (i++);
  goto L_a3;
  if (!((n < 0))) goto L_37c;
  return new i.SubscriptionLog(o);
  return new i.SubscriptionLog(o, n);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=valdi_rxjs/src/testing/TestScheduler
// args: e
function {
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=86B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// closure: s, r, t
function {
  if (!(s)) goto L_52;
  if (!((r[e] instanceof t.ColdObservable))) goto L_52;
  return r[e].messages;
  return r[e];
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=45B file=valdi_rxjs/src/testing/TestScheduler
// args: t
// closure: e, this
function {
  e = (e + (t * this.frameTimeFactor));
  (e + (t * this.frameTimeFactor));
  return;
}

// fn <atom:0>  args=5 vars=26 closure=2 cpool=9 bc=1218B file=valdi_rxjs/src/testing/TestScheduler
// args: e, r, i, s, o
// locals: e#1, r#1, i#1, s#1, o#1, n, c, l, u, d, h, m, t, e#2, r#2, s#2, c#1, e#3, i#2, s#3, this
// closure: t, a
function {
  this = this;
  let o#1;
  let s#1;
  let i#1;
  let r#1;
  let e#1;
  e#1 = e;
  r#1 = r;
  i#1 = i;
  if (!((s === undefined))) goto L_21;
  s;
  s = false;
  s#1 = false;
  if (!((o === undefined))) goto L_2f;
  o;
  o = false;
  o#1 = false;
  let m;
  let h;
  let d;
  let u;
  let l;
  let c;
  let n;
  if (!((-1 !== e.indexOf("!")))) goto L_83;
  throw new Error("conventional marble diagrams cannot have the unsubscription marker "!"");
  n = Array.from(e);
  c = n.length;
  l = [];
  if (!(o)) goto L_115;
  goto L_13f;
  // [栈深重同步 1 -> 0]
  u = e.indexOf("^");
  if (!((-1 === u))) goto L_14b;
  goto L_173;
  // [栈深重同步 1 -> 0]
  d = (u * -this.frameTimeFactor);
  if (!(("object" != typeof r))) goto L_183;
  goto L_185;
  // [栈深重同步 1 -> 0]
  h = function <atom:0>;
  m = -1;
  let t;
  t = 0;
  if (!((t < c))) goto L_4be;
  let c#1;
  let s#2;
  let r#2;
  let e#2;
  e#2 = d;
  r#2 = function <atom:0>;
  s#2 = undefined;
  c#1 = n[t];
  if (!((c#1 === " "))) goto L_1de;
  if ((o)) goto L_1da;
  r#2(1);
  goto L_45b;
  if (((c#1 === "-"))) goto L_1f0;
  if (!((c#1 === "^"))) goto L_1f9;
  r#2(1);
  goto L_45b;
  if (!((c#1 === "("))) goto L_213;
  m = d;
  d;
  r#2(1);
  goto L_45b;
  if (!((c#1 === ")"))) goto L_22b;
  m = -1;
  -1;
  r#2(1);
  goto L_45b;
  if (!((c#1 === "|"))) goto L_266;
  s#2 = a.COMPLETE_NOTIFICATION;
  a.COMPLETE_NOTIFICATION;
  r#2(1);
  goto L_45b;
  if (!((c#1 === "#"))) goto L_2ac;
  if ((i)) goto L_29d;
  s#2 = a.errorNotification("error");
  a.errorNotification("error");
  r#2(1);
  goto L_45b;
  if (!(o)) goto L_424;
  if (!(c#1.match(new RegExp("^[0-9]$")))) goto L_424;
  if (((0 === t))) goto L_2fd;
  if (!((" " === n[(t - 1)]))) goto L_424;
  let e#3;
  e#3 = n.slice(t).join("").match(new RegExp("^([0-9]+(?:\\.[0-9]+)?)(ms|s|m) "));
  if (!(e#3)) goto L_424;
  let s#3;
  let i#2;
  t = (t + (e#3[0].length - 1));
  (t + (e#3[0].length - 1));
  i#2 = parseFloat(e#3[1]);
  s#3 = undefined;
  if (!((e#3[2] === "ms"))) goto L_3c6;
  s#3 = i#2;
  i#2;
  goto L_3f5;
  if (!((e#3[2] === "s"))) goto L_3dd;
  s#3 = (1000 * i#2);
  (1000 * i#2);
  goto L_3f5;
  if (!((e#3[2] === "m"))) goto L_3f5;
  s#3 = ((1000 * i#2) * 60);
  ((1000 * i#2) * 60);
  e#3[2];
  r#2((s#3 / this.frameTimeFactor));
  goto L_45b;
  s#2 = a.nextNotification(h(c#1));
  a.nextNotification(h(c#1));
  r#2(1);
  c#1;
  if (!(s#2)) goto L_4a7;
  if (!((m > -1))) goto L_494;
  goto L_497;
  // [栈深重同步 4 -> 3]
  l.push({frame: d, notification: s#2});
  d = e#2;
  e#2;
  // close_loc e#2
  t = <t_new>;
  (t++);
  goto L_190;
  return l;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=190B file=valdi_rxjs/src/testing/TestScheduler
// locals: t, r, e
// closure: this, e
function {
  let r;
  let t;
  t = this.now();
  r = Array.from(e.values());
  e.clear();
  let e;
  for (const e of r) {
    e(t);
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=3 bc=235B file=valdi_rxjs/src/testing/TestScheduler
// args: t
// locals: r, i
// closure: this, e, TestScheduler
function {
  let r;
  if (!(e)) goto L_17;
  throw new Error("animate() must not be called more than once within run()");
  if (!(new RegExp("[|#]").test(t))) goto L_52;
  throw new Error("animate() must not complete or error");
  e = new Map();
  new Map();
  r = TestScheduler.parseMarbles(t, undefined, undefined, undefined, true);
  let i;
  for (const i of r) {
    this.schedule(function <atom:0>, i.frame);
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=81B file=valdi_rxjs/src/testing/TestScheduler
// args: r
// locals: i
// closure: e, t
function {
  let i;
  if (!(!e)) goto L_18;
  throw new Error("animate() was not called within run()");
  t = (t ++);
  i = (t ++);
  e.set(i, r);
  return i;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=62B file=valdi_rxjs/src/testing/TestScheduler
// args: t
// closure: e
function {
  if (!(!e)) goto L_15;
  throw new Error("animate() was not called within run()");
  e.delete(t);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=3 bc=100B file=valdi_rxjs/src/testing/TestScheduler
// locals: e, t, this
// closure: TestScheduler
function {
  this = this;
  let t;
  let e;
  if (!(!this.runMode)) goto L_3c;
  throw new Error("animate() must only be used in run mode");
  e = undefined;
  t = 0;
  return {animate: function <atom:0>, delegate: {requestAnimationFrame: function <atom:0>, cancelAnimationFrame: function <atom:0>}};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=44B file=valdi_rxjs/src/testing/TestScheduler
// args: <atom:0>
// locals: t
// closure: e
function {
  t = <to_object>(<atom:0>).due;
  <to_object>(<atom:0>);
  return (t <= e);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=valdi_rxjs/src/testing/TestScheduler
// args: <atom:0>
// locals: e
function {
  e = <to_object>(<atom:0>).type;
  <to_object>(<atom:0>);
  return ("immediate" === e);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=valdi_rxjs/src/testing/TestScheduler
// args: <atom:0>
// locals: e
function {
  e = <to_object>(<atom:0>).type;
  <to_object>(<atom:0>);
  return ("interval" === e);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=valdi_rxjs/src/testing/TestScheduler
// args: <atom:0>
// locals: e
function {
  e = <to_object>(<atom:0>).type;
  <to_object>(<atom:0>);
  return ("timeout" === e);
}

// fn <atom:0>  args=0 vars=12 closure=3 cpool=4 bc=818B file=valdi_rxjs/src/testing/TestScheduler
// locals: e, i, s, e#1, r, a, t, i#1, s#1, o, e#2, r#1
// closure: this, t, r
function {
  let o;
  let a;
  let s;
  let i;
  let e;
  e = this.now();
  i = Array.from(t.values()).filter(function <atom:0>);
  s = i.filter(function <atom:0>);
  if (!((s.length > 0))) goto L_170;
  let r;
  let e#1;
  if (((undefined === undefined))) goto L_137;
  e#1 = <to_object>(undefined).handle;
  r = <to_object>(undefined).handler;
  <to_object>(undefined);
  goto L_13f;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_ec;
  // [栈深重同步 1 -> 0]
  t.delete(e#1);
  r();
  return;
  a = i.filter(function <atom:0>);
  if (!((a.length > 0))) goto L_25d;
  let s#1;
  let i#1;
  let t;
  t = a[0];
  if (((undefined === undefined))) goto L_207;
  i#1 = <to_object>(undefined).duration;
  s#1 = <to_object>(undefined).handler;
  <to_object>(undefined);
  goto L_20d;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1bb;
  // [栈深重同步 1 -> 0]
  t.due = (e + i#1);
  t.subscription = this.schedule(r, i#1);
  s#1();
  return;
  o = i.filter(function <atom:0>);
  if (!((o.length > 0))) goto L_323;
  let r#1;
  let e#2;
  if (((undefined === undefined))) goto L_2ea;
  e#2 = <to_object>(undefined).handle;
  r#1 = <to_object>(undefined).handler;
  <to_object>(undefined);
  goto L_2f2;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_29e;
  // [栈深重同步 1 -> 0]
  t.delete(e#2);
  r#1();
  return;
  throw new Error("Expected a due immediate or interval");
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=178B file=valdi_rxjs/src/testing/TestScheduler
// args: i
// locals: s
// closure: e, t, this, r
function {
  let s;
  e = (e ++);
  s = (e ++);
  t.set(s, {due: this.now(), duration: 0, handle: s, handler: i, subscription: this.schedule(r, 0), type: "immediate"});
  return s;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=165B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// locals: r
// closure: t
function {
  let r;
  r = t.get(e);
  if (!(r)) goto L_a4;
  r.subscription.unsubscribe();
  t.delete(e);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=0 bc=197B file=valdi_rxjs/src/testing/TestScheduler
// args: i, s
// locals: i#1, s#1, a
// closure: e, t, this, r
function {
  let s#1;
  let i#1;
  i#1 = i;
  if (!((s === undefined))) goto L_10;
  s;
  s = 0;
  s#1 = 0;
  let a;
  e = (e ++);
  a = (e ++);
  t.set(a, {due: (this.now() + s), duration: s, handle: a, handler: i, subscription: this.schedule(r, s), type: "interval"});
  return a;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=165B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// locals: r
// closure: t
function {
  let r;
  r = t.get(e);
  if (!(r)) goto L_a4;
  r.subscription.unsubscribe();
  t.delete(e);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=0 bc=197B file=valdi_rxjs/src/testing/TestScheduler
// args: i, s
// locals: i#1, s#1, a
// closure: e, t, this, r
function {
  let s#1;
  let i#1;
  i#1 = i;
  if (!((s === undefined))) goto L_10;
  s;
  s = 0;
  s#1 = 0;
  let a;
  e = (e ++);
  a = (e ++);
  t.set(a, {due: (this.now() + s), duration: s, handle: a, handler: i, subscription: this.schedule(r, s), type: "timeout"});
  return a;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=165B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// locals: r
// closure: t
function {
  let r;
  r = t.get(e);
  if (!(r)) goto L_a4;
  r.subscription.unsubscribe();
  t.delete(e);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=7 bc=123B file=valdi_rxjs/src/testing/TestScheduler
// locals: e, t, r, this
function {
  this = this;
  let r;
  let t;
  let e;
  e = 0;
  t = new Map();
  r = function <atom:0>;
  return {immediate: {setImmediate: function <atom:0>, clearImmediate: function <atom:0>}, interval: {setInterval: function <atom:0>, clearInterval: function <atom:0>}, timeout: {setTimeout: function <atom:0>, clearTimeout: function <atom:0>}};
}

// fn <atom:0>  args=1 vars=8 closure=7 cpool=0 bc=1528B file=valdi_rxjs/src/testing/TestScheduler
// args: e
// locals: t, r, i, s, a, t#1, this
// closure: TestScheduler, c, o, l, u, d, n
function {
  this = this;
  let a;
  let s;
  let i;
  let r;
  let t;
  t = TestScheduler.frameTimeFactor;
  r = this.maxFrames;
  TestScheduler.frameTimeFactor = 1;
  this.maxFrames = (1 / 0);
  this.runMode = true;
  i = this.createAnimator();
  s = this.createDelegates();
  c.animationFrameProvider.delegate = i.delegate;
  o.dateTimestampProvider.delegate = this;
  l.immediateProvider.delegate = s.immediate;
  u.intervalProvider.delegate = s.interval;
  d.timeoutProvider.delegate = s.timeout;
  n.performanceTimestampProvider.delegate = this;
  a = {cold: this.createColdObservable.bind(this), hot: this.createHotObservable.bind(this), flush: this.flush.bind(this), time: this.createTime.bind(this), expectObservable: this.expectObservable.bind(this), expectSubscriptions: this.expectSubscriptions.bind(this), animate: i.animate};
  try { // catch -> L_4b3
  let t#1;
  t#1 = e(a);
  this.flush();
  // gosub (finally 块) 1209
  return t#1;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1209
  throw <?>;
  TestScheduler.frameTimeFactor = t;
  this.maxFrames = r;
  this.runMode = false;
  c.animationFrameProvider.delegate = undefined;
  o.dateTimestampProvider.delegate = undefined;
  l.immediateProvider.delegate = undefined;
  u.intervalProvider.delegate = undefined;
  d.timeoutProvider.delegate = undefined;
  n.performanceTimestampProvider.delegate = undefined;
  // ret (finally 块) 
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=13 bc=410B file=valdi_rxjs/src/testing/TestScheduler
// args: require, module, exports
// locals: e, t, r, i, s, a, o, n, c, l, u, d, h, TestScheduler, <class_fields_init>, TestScheduler#1
function {
  let TestScheduler#1;
  let h;
  let d;
  let u;
  let l;
  let c;
  let n;
  let o;
  let a;
  let s;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TestScheduler = undefined;
  e = require("../Observable");
  t = require("./ColdObservable");
  r = require("./HotObservable");
  i = require("./SubscriptionLog");
  s = require("../scheduler/VirtualTimeScheduler");
  a = require("../NotificationFactories");
  o = require("../scheduler/dateTimestampProvider");
  n = require("../scheduler/performanceTimestampProvider");
  c = require("../scheduler/animationFrameProvider");
  l = require("../scheduler/immediateProvider");
  u = require("../scheduler/intervalProvider");
  d = require("../scheduler/timeoutProvider");
  h = 750;
  let TestScheduler;
  let <class_fields_init>;
  class TestScheduler extends s.VirtualTimeScheduler { ... }
  <proto:TestScheduler>.createTime = function <atom:0>;
  <proto:TestScheduler>.createColdObservable = function <atom:0>;
  <proto:TestScheduler>.createHotObservable = function <atom:0>;
  <proto:TestScheduler>.materializeInnerObservable = function <atom:0>;
  <proto:TestScheduler>.expectObservable = function <atom:0>;
  <proto:TestScheduler>.expectSubscriptions = function <atom:0>;
  <proto:TestScheduler>.flush = function <atom:0>;
  function <atom:0>.parseMarblesAsSubscriptions = function <atom:0>;
  function <atom:0>.parseMarbles = function <atom:0>;
  <proto:TestScheduler>.createAnimator = function <atom:0>;
  <proto:TestScheduler>.createDelegates = function <atom:0>;
  <proto:TestScheduler>.run = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TestScheduler>;
  TestScheduler = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc TestScheduler
  TestScheduler#1 = function <atom:0>;
  exports.TestScheduler = TestScheduler#1;
  TestScheduler#1.frameTimeFactor = 10;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/testing/TestScheduler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
