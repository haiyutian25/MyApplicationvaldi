// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=39B file=dil_cel/src/CELState
// args: e
// locals: e#1, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let e#1;
  if (!((e === undefined))) goto L_1a;
  e;
  e = {};
  e#1 = {};
  this.value = e;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=63B file=dil_cel/src/CELState
// args: e, t
// locals: a, this
// closure: r
function {
  this = this;
  let a;
  a = r(e);
  if (((0 === a.length))) goto L_3c;
  this.value[a] = t;
  t;
  return t;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=154B file=dil_cel/src/CELState
// args: e
// locals: t, a, this
// closure: r
function {
  this = this;
  let a;
  let t;
  t = r(e);
  if (!((0 === t.length))) goto L_16;
  return null;
  if (!((this.value[t] == null))) goto L_42;
  this.value[t];
  a = null;
  if (!((undefined !== this.value[t]))) goto L_95;
  // [栈深重同步 2 -> 1]
  this.value;
  return a;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=0 bc=306B file=dil_cel/src/CELState
// args: e, t, r
// locals: a, e#1, this
function {
  this = this;
  let a;
  a = false;
  if (!((undefined !== e))) goto L_ca;
  let e#1;
  for (const e#1 of Object.keys(this.value)) {
    this.removeValue(e#1);
    a = true;
    true;
  }
  if ((this.applyUpdateState(e))) goto L_c5;
  a = a;
  a;
  if ((this.applyUpdateState(t))) goto L_f7;
  a = a;
  a;
  if ((this.applyPatchState(r))) goto L_129;
  a = a;
  a;
  return a;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=204B file=dil_cel/src/CELState
// args: e
// locals: t, r, a, e#1, this
function {
  this = this;
  let t;
  if (!((undefined === e))) goto L_e;
  return false;
  t = false;
  let a;
  let r;
  const _it1 = Object.entries(e);
  goto L_c2;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  r = <value(_it2)>;
  <done(_it2)>;
  a = <value(_it2)>;
  let e#1;
  if (((0 === r.length))) goto L_c2;
  e#1 = this.value[r];
  this.setValue(r, a);
  if (((e#1 !== a))) goto L_bd;
  t = t;
  t;
  if (!(<done(_it1)>)) goto L_45;
  <value(_it1)>;
  return t;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=143B file=dil_cel/src/CELState
// args: e
// locals: t, r, a, this
function {
  this = this;
  let r;
  let t;
  if (!((undefined === e))) goto L_10;
  return false;
  t = false;
  if (!(Array.isArray(e))) goto L_42;
  goto L_46;
  // [栈深重同步 1 -> 0]
  r = [e];
  let a;
  for (const a of r) {
    if ((this.applyStateMutation(a))) goto L_80;
    t = t;
    t;
  }
  return t;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=445B file=dil_cel/src/CELState
// args: e
// locals: t, e#1, r, this
function {
  this = this;
  let t;
  t = e.path;
  if (!((undefined === t))) goto L_32;
  return false;
  if (!(("string" != typeof t))) goto L_67;
  return this.applyPathMutation(t, e);   // tail call
  if (!((0 === t.length))) goto L_72;
  return false;
  if (!(("remove" === e.op))) goto L_f5;
  let e#1;
  e#1 = (undefined !== this.value[t]);
  this.removeValue(t);
  return e#1;
  if (!((undefined !== e.value))) goto L_1ba;
  let r;
  r = this.value[t];
  this.setValue(t, e.value);
  return (r !== e.value);
  return false;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=230B file=dil_cel/src/CELState
// args: e, t
// locals: this
// closure: n, a
function {
  this = this;
  if (!(("remove" === t.op))) goto L_52;
  return n(this.value, e);
  if (!((undefined !== t.value))) goto L_e5;
  return a(this.value, e, t.value, t.arrayValueIfMissing);
}

// fn r  args=1 vars=1 closure=0 cpool=0 bc=9B file=dil_cel/src/CELState
// args: e
function {
  return String(e);   // tail call
}

// fn a  args=4 vars=7 closure=4 cpool=0 bc=995B file=dil_cel/src/CELState
// args: r, a, n, o
// locals: s, l, e
// closure: e, i, t, u
function {
  let l;
  let s;
  s = e.resolveValueAtPath(r, a, false, undefined);
  if (!((undefined !== s))) goto L_179;
  if (!(Array.isArray(s.parent))) goto L_b8;
  if (!(!i(s.key))) goto L_b8;
  return false;
  if (!((s.key !== t.DIL_ARRAY_APPEND_PATH_SEGMENT))) goto L_179;
  if (!((s.key !== t.DIL_ARRAY_PREPEND_PATH_SEGMENT))) goto L_179;
  if (!((s.value === n))) goto L_179;
  return false;
  l = e.resolveWritableValueAtPath(r, a, true, o);
  if (!((undefined === l))) goto L_1b0;
  return false;
  if (!(Array.isArray(l.parent))) goto L_396;
  let e;
  if (!((l.key === t.DIL_ARRAY_APPEND_PATH_SEGMENT))) goto L_29d;
  l.parent.push(n);
  return true;
  if (!((l.key === t.DIL_ARRAY_PREPEND_PATH_SEGMENT))) goto L_335;
  l.parent.unshift(n);
  return true;
  e = Number(l.key);
  if (!(!u(e))) goto L_36b;
  return false;
  l.parent[e] = n;
  goto L_3e0;
  l.parent[l.key] = n;
  return true;
}

// fn n  args=2 vars=6 closure=3 cpool=0 bc=1185B file=dil_cel/src/CELState
// args: r, a
// locals: n, e, i, e#1
// closure: e, t, u
function {
  let i;
  let n;
  n = e.resolveValueAtPath(r, a, false, undefined);
  if (!((undefined === n))) goto L_3d;
  return false;
  if (!(Array.isArray(n.parent))) goto L_1bc;
  if (((n.key === t.DIL_ARRAY_APPEND_PATH_SEGMENT))) goto L_125;
  if (!((n.key === t.DIL_ARRAY_PREPEND_PATH_SEGMENT))) goto L_156;
  if (!((0 === n.parent.length))) goto L_1e7;
  return false;
  let e;
  e = Number(n.key);
  if ((!u(e))) goto L_1b7;
  if (!((e >= n.parent.length))) goto L_1e7;
  return false;
  if (!((undefined === n.value))) goto L_1e7;
  return false;
  i = e.resolveWritableValueAtPath(r, a, false, undefined);
  if (!((undefined === i))) goto L_21e;
  return false;
  if (!(Array.isArray(i.parent))) goto L_454;
  let e#1;
  if (!((i.key === t.DIL_ARRAY_APPEND_PATH_SEGMENT))) goto L_30a;
  i.parent.pop();
  return true;
  if (!((i.key === t.DIL_ARRAY_PREPEND_PATH_SEGMENT))) goto L_3a1;
  i.parent.shift();
  return true;
  e#1 = Number(i.key);
  if ((!u(e#1))) goto L_3ff;
  if (!(!(e#1 >= i.parent.length))) goto L_453;
  i.parent.splice(e#1, 1);
  return true;
  delete i.key;
  return true;
}

// fn i  args=1 vars=1 closure=2 cpool=0 bc=94B file=dil_cel/src/CELState
// args: e
// closure: t, u
function {
  if (((e === t.DIL_ARRAY_APPEND_PATH_SEGMENT))) goto L_5d;
  if (((e === t.DIL_ARRAY_PREPEND_PATH_SEGMENT))) goto L_5d;
  return u(Number(e));
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=52B file=dil_cel/src/CELState
// args: e
function {
  if (!((e >= 0))) goto L_33;
  return (Math.floor(e) === e);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=13 bc=206B file=dil_cel/src/CELState
// args: require, module, exports
// locals: e, t, CELState, <class_fields_init>, CELState#1, r, a, n, i, u
function {
  r = function r;
  a = function a;
  n = function n;
  i = function i;
  u = function u;
  let CELState#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CELState = undefined;
  e = require("dil_cel/src/CELStatePath");
  t = require("dil_cel/src/DILStateMutation");
  let CELState;
  let <class_fields_init>;
  class CELState extends undefined { ... }
  <proto:CELState>.setValue = function <atom:0>;
  <proto:CELState>.removeValue = function <atom:0>;
  <proto:CELState>.applyUpdates = function <atom:0>;
  <proto:CELState>.applyUpdateState = function <atom:0>;
  <proto:CELState>.applyPatchState = function <atom:0>;
  <proto:CELState>.applyStateMutation = function <atom:0>;
  <proto:CELState>.applyPathMutation = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CELState>;
  CELState = function <atom:0>;
  // close_loc <class_fields_init>
  CELState#1 = function <atom:0>;
  exports.CELState = CELState#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_cel/src/CELState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
