// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=83B file=valdi_core/src/AbortController
// args: e
// closure: t
function {
  if (!(t.isLoggingEnabled)) goto L_52;
  console.error(e);
  return;
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=6B file=valdi_core/src/AbortController
// args: t
// closure: r
function {
  r = t;
  t;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=188B file=valdi_core/src/AbortController
// args: t, e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, AbortDOMException
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  if (!((undefined === t))) goto L_15;
  goto L_16;
  // [栈深重同步 3 -> 2]
  this = new new.target(t);
  if (!(<class_fields_init>)) goto L_2a;
  <class_fields_init>.call(this);
  new new.target(t);
  this.SECURITY_ERR = 18;
  this.QUOTA_EXCEEDED_ERR = 22;
  if (!((undefined === e))) goto L_57;
  goto L_58;
  // [栈深重同步 2 -> 1]
  this.name = e;
  this.code = AbortDOMException.codeForName(this.name);
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=51B file=valdi_core/src/AbortController
// args: t
function {
  if (!((t === "AbortError"))) goto L_d;
  return 20;
  if (!((t === "TimeoutError"))) goto L_19;
  return 23;
  if (!((t === "SecurityError"))) goto L_25;
  return 18;
  if (!((t === "QuotaExceededError"))) goto L_31;
  return 22;
  return 0;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=351B file=valdi_core/src/AbortController
// args: t, e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.isTrusted = false;
  this.timeStamp = Date.now();
  this.target = null;
  this.currentTarget = null;
  this.eventPhase = 0;
  this.defaultPrevented = false;
  this.cancelBubble = false;
  this.returnValue = true;
  this.immediateStopped = false;
  this.dispatching = false;
  this.type = String(t);
  if (!((e == null))) goto L_c6;
  e;
  goto L_e7;
  this.bubbles = !!undefined.bubbles;
  if (!((e == null))) goto L_fc;
  e;
  goto L_11d;
  this.cancelable = !!undefined.cancelable;
  if (!((e == null))) goto L_132;
  e;
  goto L_153;
  this.composed = !!undefined.composed;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=66B file=valdi_core/src/AbortController
// locals: this
function {
  this = this;
  if (!(this.cancelable)) goto L_41;
  this.defaultPrevented = true;
  this.returnValue = false;
  false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=15B file=valdi_core/src/AbortController
// locals: this
function {
  this = this;
  this.cancelBubble = true;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=52B file=valdi_core/src/AbortController
// locals: this
function {
  this = this;
  this.immediateStopped = true;
  this.stopPropagation();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=82B file=valdi_core/src/AbortController
// locals: this
function {
  this = this;
  if (!((null === this.currentTarget))) goto L_2c;
  return [];
  return [this.currentTarget];
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=29B file=valdi_core/src/AbortController
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.listeners = [];
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=4B file=valdi_core/src/AbortController
// locals: this
function {
  this = this;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/AbortController
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=valdi_core/src/AbortController
// args: e
// closure: t
function {
  return (e.type === t);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=74B file=valdi_core/src/AbortController
// args: t
// locals: this
function {
  this = this;
  return this.listeners.some(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=119B file=valdi_core/src/AbortController
// args: r
// closure: t, e, n
function {
  if (!((r.type === t))) goto L_76;
  if (!((r.callback === e))) goto L_76;
  return (r.capture === n);
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=42B file=valdi_core/src/AbortController
// closure: this, t, e, n
function {
  return this.removeEventListener(t, e, n);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=521B file=valdi_core/src/AbortController
// args: t, e, r
// locals: n, s, o, r#1, this
function {
  this = this;
  let o;
  let s;
  let n;
  if (!((null === e))) goto L_12;
  return;
  if (!(("boolean" == typeof r))) goto L_1f;
  goto L_4b;
  // [栈深重同步 1 -> 0]
  if (!((r == null))) goto L_28;
  r;
  goto L_49;
  n = !!undefined.capture;
  if (!(("object" == typeof r))) goto L_7a;
  goto L_7b;
  // [栈深重同步 1 -> 0]
  s = undefined;
  if (!((s == null))) goto L_87;
  s;
  goto L_a8;
  if ((undefined.aborted)) goto L_f5;
  if (!(this.listeners.some(function <atom:0>))) goto L_f8;
  return;
  if (!(("object" == typeof r))) goto L_13d;
  o = {type: t, callback: e, capture: n, once: !!r.once, removed: false, cleanup: undefined};
  this.listeners.push(o);
  this.onListenersChanged();
  if (!(s)) goto L_208;
  let r#1;
  r#1 = function <atom:0>;
  o.cleanup = s.addAbortStep(r#1);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=119B file=valdi_core/src/AbortController
// args: r
// closure: t, e, n
function {
  if (!((r.type === t))) goto L_76;
  if (!((r.callback === e))) goto L_76;
  return (r.capture === n);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=395B file=valdi_core/src/AbortController
// args: t, e, r
// locals: n, s, this
function {
  this = this;
  let s;
  let n;
  if (!(("boolean" == typeof r))) goto L_15;
  goto L_41;
  // [栈深重同步 1 -> 0]
  if (!((r == null))) goto L_1e;
  r;
  goto L_3f;
  n = !!undefined.capture;
  s = this.listeners.find(function <atom:0>);
  if (!(s)) goto L_18a;
  s.removed = true;
  this.listeners.splice(this.listeners.indexOf(s), 1);
  if (!((s.cleanup == null))) goto L_161;
  s.cleanup;
  s;
  goto L_164;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.onListenersChanged();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=42B file=valdi_core/src/AbortController
// args: t
// locals: this
function {
  this = this;
  return this.dispatch(t, false);   // tail call
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=0 bc=1046B file=valdi_core/src/AbortController
// args: t, e
// locals: r, n, e#1, o, this
// closure: s
function {
  this = this;
  let n;
  let r;
  r = t;
  if (!(r.dispatching)) goto L_45;
  throw new DOMException("Event is already being dispatched", "InvalidStateError");
  Object.defineProperty(r, "isTrusted", {value: e, configurable: true});
  r.dispatching = true;
  n = this.getEventTarget();
  r.target = n;
  r.currentTarget = r.target;
  r.eventPhase = 2;
  try { // catch -> L_3a7
  let e#1;
  for (const e#1 of this.listeners.slice()) {
    if ((r.immediateStopped)) goto L_39c;
    if (!(!e#1.removed)) continue;
    if (!((e#1.type === t.type))) continue;
    if (!(e#1.once)) goto L_2b6;
    this.removeEventListener(e#1.type, e#1.callback, e#1.capture);
    try { // catch -> L_384
    if (!(("function" == typeof e#1.callback))) goto L_337;
    goto L_380;
    // [栈深重同步 4 -> 3]
    e#1.callback.handleEvent(t);
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    o = <?>;
    try { // catch -> L_393
    s(o);
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  <?>;
  // gosub (finally 块) 941
  undefined;
  goto L_3f2;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 941
  throw <?>;
  r.currentTarget = null;
  r.eventPhase = 0;
  r.dispatching = false;
  r.immediateStopped = false;
  r.cancelBubble = false;
  // ret (finally 块) 
  return !t.defaultPrevented;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=42B file=valdi_core/src/AbortController
// args: t
// locals: this
function {
  this = this;
  return this.dispatch(t, true);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=valdi_core/src/AbortController
function {
  return globalThis;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_core/src/AbortController
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn a  args=0 vars=1 closure=2 cpool=0 bc=545B file=valdi_core/src/AbortController
// locals: t
// closure: n, GlobalEventTarget
function {
  let t;
  if (!((undefined !== n))) goto L_55;
  return n.dispatchTrustedEvent.bind(n);   // tail call
  t = new GlobalEventTarget();
  n = t;
  t;
  Object.defineProperties(globalThis, {addEventListener: {value: t.addEventListener.bind(t), writable: true, enumerable: true, configurable: true}, removeEventListener: {value: t.removeEventListener.bind(t), writable: true, enumerable: true, configurable: true}, dispatchEvent: {value: t.dispatchEvent.bind(t), writable: true, enumerable: true, configurable: true}});
  return t.dispatchTrustedEvent.bind(t);   // tail call
}

// fn h  args=1 vars=2 closure=0 cpool=0 bc=76B file=valdi_core/src/AbortController
// args: t
// locals: e
function {
  let e;
  e = t;
  if ((!(t instanceof AbortSignal))) goto L_37;
  if (!((undefined === e.isAborted))) goto L_48;
  throw new TypeError("Native cancellation requires a Valdi AbortSignal on a supported runtime");
  return e;
}

// fn b  args=2 vars=2 closure=1 cpool=0 bc=79B file=valdi_core/src/AbortController
// args: t, e
// closure: l
function {
  l.get(t).call(t, e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=valdi_core/src/AbortController
// args: t
function {
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=83B file=valdi_core/src/AbortController
// args: t
function {
  if (!((t.sources == null))) goto L_50;
  t.sources;
  // append([], 0, [t.state])
  [t.state];
  return [];
}

// fn <atom:0>  args=2 vars=8 closure=5 cpool=2 bc=607B file=valdi_core/src/AbortController
// args: t, e
// locals: n, t#1, s, this.active_func, new.target, this
// closure: <class_fields_init>, i, r, c, l
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let n;
  this = new new.target();
  if (!(<class_fields_init>)) goto L_26;
  <class_fields_init>.call(this);
  new new.target();
  this.state = {sequence: 0, reason: undefined, dependents: new Set()};
  this.abortSteps = new Set();
  this.abortHandler = null;
  this.cleanups = [];
  if (!((t !== i))) goto L_96;
  throw new TypeError("Illegal constructor");
  n = this;
  if (!((undefined !== r))) goto L_1c1;
  let s;
  let t#1;
  if (!((e == null))) goto L_b6;
  e;
  t#1 = r([].map(function <atom:0>));
  s = t#1.getSignal();
  Object.setPrototypeOf(s, Object.getPrototypeOf(this));
  n = Object.assign(s, this);
  Object.assign(s, this);
  c.set(n, t#1);
  if (!((undefined === e))) goto L_1cc;
  goto L_1fc;
  // [栈深重同步 2 -> 1]
  n.sources = new Set(e.flatMap(function <atom:0>));
  l.set(n, n.abortInternal);
  if (!(<check_ctor_return#1>)) goto L_25e;
  <check_ctor_return#0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=110B file=valdi_core/src/AbortController
// locals: this
function {
  this = this;
  this.refreshState();
  return (0 !== this.state.sequence);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=108B file=valdi_core/src/AbortController
// locals: this
function {
  this = this;
  this.refreshState();
  return this.state.reason;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/AbortController
// locals: this
function {
  this = this;
  return this.abortHandler;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=80B file=valdi_core/src/AbortController
// args: t
// closure: this
function {
  if (!((this.abortHandler == null))) goto L_29;
  this.abortHandler;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.call(this, t);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=363B file=valdi_core/src/AbortController
// args: t
// locals: this
function {
  this = this;
  if (!(("function" == typeof t))) goto L_10;
  goto L_11;
  // [栈深重同步 2 -> 1]
  this.abortHandler = null;
  if (!(this.abortHandler)) goto L_c1;
  if (!(!this.abortHandlerListener)) goto L_c1;
  this.abortHandlerListener = function <atom:0>;
  goto L_16a;
  // [栈深重同步 1 -> 0]
  if (!(!this.abortHandler)) goto L_16a;
  if (!(this.abortHandlerListener)) goto L_16a;
  this.removeEventListener("abort", this.abortHandlerListener);
  this.abortHandlerListener = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=107B file=valdi_core/src/AbortController
// locals: this
function {
  this = this;
  if (!(this.aborted)) goto L_6a;
  throw this.state.reason;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=110B file=valdi_core/src/AbortController
// closure: this, t
function {
  this.abortSteps.delete(t);
  this.onListenersChanged();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=115B file=valdi_core/src/AbortController
// args: t
// locals: this
function {
  this = this;
  this.abortSteps.add(t);
  this.onListenersChanged();
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=374B file=valdi_core/src/AbortController
// locals: t, e, this
function {
  this = this;
  let t;
  if (!(!this.aborted)) goto L_9f;
  if ((this.hasEventListener("abort"))) goto L_9f;
  t = (0 !== this.abortSteps.size);
  let e;
  if (!((this.sources == null))) goto L_cd;
  this.sources;
  for (const e of []) {
    if (!(t)) goto L_122;
    goto L_16b;
    // [栈深重同步 4 -> 3]
    e.dependents.delete(this);
  }
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=143B file=valdi_core/src/AbortController
// locals: t, this
function {
  this = this;
  let t;
  if (!((this.sources == null))) goto L_2f;
  this.sources;
  for (const t of []) {
    t.dependents.delete(this);
  }
  this.sources = undefined;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=482B file=valdi_core/src/AbortController
// locals: t, e, this
function {
  this = this;
  let t;
  if (!((0 !== this.state.sequence))) goto L_4d;
  return;
  t = undefined;
  let e;
  if (!((this.sources == null))) goto L_7c;
  this.sources;
  for (const e of []) {
    if (!((0 !== e.sequence))) goto L_108;
    if (((undefined === t))) goto L_fd;
    if (!((e.sequence < t.sequence))) goto L_108;
    t = e;
    e;
  }
  if (!((undefined !== t))) goto L_1e1;
  this.state.sequence = t.sequence;
  this.state.reason = t.reason;
  this.detachSources();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=26B file=valdi_core/src/AbortController
// args: t
// locals: e
// closure: ValdiAbortSignal, i, b
function {
  let e;
  e = new ValdiAbortSignal(i, undefined);
  b(e, t);
  return e;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=60B file=valdi_core/src/AbortController
// closure: e, t, n, r, b
function {
  e.cleanups = [];
  if (!((t > n))) goto L_21;
  goto L_3b;
  // [栈深重同步 1 -> 0]
  b(e, new DOMException("The operation timed out", "TimeoutError"));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=11B file=valdi_core/src/AbortController
// closure: s
function {
  return clearTimeout(s);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=2 bc=84B file=valdi_core/src/AbortController
// args: t
// locals: n, s
// closure: e, r, b
function {
  let s;
  let n;
  n = Math.min(t, 2147483647);
  s = setTimeout(function <atom:0>, n);
  e.cleanups = [function <atom:0>];
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=1 bc=103B file=valdi_core/src/AbortController
// args: t
// locals: e, r
// closure: b, ValdiAbortSignal, i
function {
  let r;
  let e;
  if ((!Number.isSafeInteger(t))) goto L_38;
  if (!((t < 0))) goto L_49;
  throw new TypeError("Timeout must be a nonnegative safe integer");
  e = new ValdiAbortSignal(i, undefined);
  r = function <atom:0>;
  r(t);
  return e;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=235B file=valdi_core/src/AbortController
// args: t
// locals: e, r, r#1
// closure: ValdiAbortSignal, i
function {
  let e;
  e = Array.from(t);
  let r;
  for (const r of e) {
    if (!(!(r instanceof ValdiAbortSignal))) continue;
    throw new TypeError("Expected an AbortSignal");
  }
  let r#1;
  for (const r#1 of e) {
    if (!(r#1.aborted)) continue;
    return ValdiAbortSignal.abort(r#1.reason);
    // [栈深重同步 0 -> 3]
  }
  return new ValdiAbortSignal(i, e);
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=469B file=valdi_core/src/AbortController
// args: t, e, r
// locals: n, this
function {
  this = this;
  if (!((0 === this.state.sequence))) goto L_1d4;
  this.state.sequence = e;
  this.state.reason = t;
  r.push(this);
  let n;
  for (const n of this.state.dependents) {
    n.prepareAbort(t, e, r);
  }
  this.state.dependents.clear();
  this.detachSources();
  return;
}

// fn <atom:0>  args=1 vars=10 closure=3 cpool=0 bc=656B file=valdi_core/src/AbortController
// args: t
// locals: e, n, t#1, t#2, n#1, t#3, r, n#2, this
// closure: d, c, s
function {
  this = this;
  let e;
  if (!(this.aborted)) goto L_2c;
  return;
  e = [];
  if (!((undefined === t))) goto L_6d;
  goto L_6e;
  // [栈深重同步 3 -> 2]
  d = (d ++);
  this.prepareAbort(t, (d ++), e);
  let n;
  for (const n of e) {
    let t#1;
    for (const t#1 of n.cleanups.splice(0)) {
      t#1();
      // [栈深重同步 3 -> 6]
    }
    let t#2;
    for (const t#2 of n.abortSteps) {
      t#2();
      // [栈深重同步 3 -> 6]
    }
    n.abortSteps.clear();
  }
  let n#1;
  for (const n#1 of e) {
    let t#3;
    t#3 = c.get(n#1);
    if (!((undefined !== t#3))) continue;
    try { // catch -> L_204
    t#3.abort(n#1.reason);
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    r = <?>;
    try { // catch -> L_23e
    t#3.abort(undefined);
    s(r);
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  let n#2;
  for (const n#2 of e) {
    n#2.dispatchEvent(new Event("abort"));
  }
  return;
}

// fn p  args=2 vars=2 closure=0 cpool=0 bc=38B file=valdi_core/src/AbortController
// args: t, e
function {
  return t.addAbortStep(e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=37B file=valdi_core/src/AbortController
// locals: this
// closure: <class_fields_init>, ValdiAbortSignal, i
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.abortSignal = new ValdiAbortSignal(i, undefined);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/AbortController
// locals: this
function {
  this = this;
  return this.abortSignal;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=40B file=valdi_core/src/AbortController
// args: t
// locals: this
// closure: b
function {
  this = this;
  b(this.signal, t);
  return;
}

// fn v  args=1 vars=1 closure=7 cpool=0 bc=295B file=valdi_core/src/AbortController
// args: t
// closure: e, s, AbortDOMException, AbortEvent, AbortEventTarget, ValdiAbortSignal, ValdiAbortController
function {
  if (!(e.AbortController)) goto L_4c;
  if ((e.AbortSignal)) goto L_126;
  s = t;
  t;
  if (!((e.DOMException == null))) goto L_92;
  e.DOMException;
  e.DOMException = AbortDOMException;
  AbortDOMException;
  if (!((e.Event == null))) goto L_cc;
  e.Event;
  e.Event = AbortEvent;
  AbortEvent;
  if (!((e.EventTarget == null))) goto L_106;
  e.EventTarget;
  e.EventTarget = AbortEventTarget;
  AbortEventTarget;
  e.AbortSignal = ValdiAbortSignal;
  e.AbortController = ValdiAbortController;
  ValdiAbortController;
  return;
}

// fn <atom:0>  args=3 vars=37 closure=0 cpool=43 bc=827B file=valdi_core/src/AbortController
// args: require, module, exports
// locals: t, e, r, n, s, o, AbortDOMException, <class_fields_init>, AbortDOMException#1, AbortEvent, <class_fields_init>#1, AbortEvent#1, AbortEventTarget, <class_fields_init>#2, AbortEventTarget#1, GlobalEventTarget, <class_fields_init>#3, GlobalEventTarget#1, a, i, l, c, d, h, b, u, ValdiAbortSignal, <class_fields_init>#4, ValdiAbortSignal#1, p, ValdiAbortController, <class_fields_init>#5, ValdiAbortController#1, v
function {
  o = function o;
  a = function a;
  h = function h;
  b = function b;
  p = function p;
  v = function v;
  let ValdiAbortController#1;
  let ValdiAbortSignal#1;
  let u;
  let d;
  let c;
  let l;
  let i;
  let GlobalEventTarget#1;
  let AbortEventTarget#1;
  let AbortEvent#1;
  let AbortDOMException#1;
  let s;
  let n;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.setNativeAbortControllerFactory = undefined;
  exports.installGlobalEventTarget = undefined;
  exports.toNativeAbortSignal = undefined;
  exports.addAbortStep = undefined;
  exports.installAbortController = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = globalThis;
  r = undefined;
  n = undefined;
  s = function <atom:0>;
  exports.setNativeAbortControllerFactory = o;
  let AbortDOMException;
  let <class_fields_init>;
  class AbortDOMException extends Error { ... }
  function <atom:0>.codeForName = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AbortDOMException>;
  AbortDOMException = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc AbortDOMException
  AbortDOMException#1 = function <atom:0>;
  AbortDOMException#1.SECURITY_ERR = 18;
  AbortDOMException#1.QUOTA_EXCEEDED_ERR = 22;
  let AbortEvent;
  let <class_fields_init>#1;
  class AbortEvent extends undefined { ... }
  <proto:AbortEvent>.preventDefault = function <atom:0>;
  <proto:AbortEvent>.stopPropagation = function <atom:0>;
  <proto:AbortEvent>.stopImmediatePropagation = function <atom:0>;
  <proto:AbortEvent>.composedPath = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:AbortEvent>;
  AbortEvent = function <atom:0>;
  // close_loc <class_fields_init>#1
  AbortEvent#1 = function <atom:0>;
  let AbortEventTarget;
  let <class_fields_init>#2;
  class AbortEventTarget extends undefined { ... }
  <proto:AbortEventTarget>.getEventTarget = function <atom:0>;
  <proto:AbortEventTarget>.onListenersChanged = function <atom:0>;
  <proto:AbortEventTarget>.hasEventListener = function <atom:0>;
  <proto:AbortEventTarget>.addEventListener = function <atom:0>;
  <proto:AbortEventTarget>.removeEventListener = function <atom:0>;
  <proto:AbortEventTarget>.dispatchEvent = function <atom:0>;
  <proto:AbortEventTarget>.dispatch = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:AbortEventTarget>;
  AbortEventTarget = function <atom:0>;
  // close_loc <class_fields_init>#2
  AbortEventTarget#1 = function <atom:0>;
  let GlobalEventTarget;
  let <class_fields_init>#3;
  class GlobalEventTarget extends AbortEventTarget#1 { ... }
  <proto:GlobalEventTarget>.dispatchTrustedEvent = function <atom:0>;
  <proto:GlobalEventTarget>.getEventTarget = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:GlobalEventTarget>;
  GlobalEventTarget = function <atom:0>;
  // close_loc <class_fields_init>#3
  GlobalEventTarget#1 = function <atom:0>;
  exports.installGlobalEventTarget = a;
  i = {};
  l = new WeakMap();
  c = new WeakMap();
  d = 0;
  exports.toNativeAbortSignal = h;
  if (!((e.EventTarget == null))) goto L_261;
  e.EventTarget;
  u = AbortEventTarget#1;
  let ValdiAbortSignal;
  let <class_fields_init>#4;
  class ValdiAbortSignal extends u { ... }
  <proto:ValdiAbortSignal>.aborted = function <atom:0>;
  <proto:ValdiAbortSignal>.reason = function <atom:0>;
  <proto:ValdiAbortSignal>.onabort = function <atom:0>;
  <proto:ValdiAbortSignal>.onabort = function <atom:0>;
  <proto:ValdiAbortSignal>.throwIfAborted = function <atom:0>;
  <proto:ValdiAbortSignal>.addAbortStep = function <atom:0>;
  <proto:ValdiAbortSignal>.onListenersChanged = function <atom:0>;
  <proto:ValdiAbortSignal>.detachSources = function <atom:0>;
  <proto:ValdiAbortSignal>.refreshState = function <atom:0>;
  function <atom:0>.abort = function <atom:0>;
  function <atom:0>.timeout = function <atom:0>;
  function <atom:0>.any = function <atom:0>;
  <proto:ValdiAbortSignal>.prepareAbort = function <atom:0>;
  <proto:ValdiAbortSignal>.abortInternal = function <atom:0>;
  <class_fields_init>#4 = undefined;
  <proto:ValdiAbortSignal>;
  ValdiAbortSignal = function <atom:0>;
  // close_loc <class_fields_init>#4
  // close_loc ValdiAbortSignal
  ValdiAbortSignal#1 = function <atom:0>;
  exports.addAbortStep = p;
  let ValdiAbortController;
  let <class_fields_init>#5;
  class ValdiAbortController extends undefined { ... }
  <proto:ValdiAbortController>.signal = function <atom:0>;
  <proto:ValdiAbortController>.abort = function <atom:0>;
  <class_fields_init>#5 = undefined;
  <proto:ValdiAbortController>;
  ValdiAbortController = function <atom:0>;
  // close_loc <class_fields_init>#5
  ValdiAbortController#1 = function <atom:0>;
  exports.installAbortController = v;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/AbortController
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
