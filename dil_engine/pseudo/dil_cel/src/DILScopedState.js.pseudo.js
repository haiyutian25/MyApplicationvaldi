// fn r  args=1 vars=2 closure=1 cpool=0 bc=101B file=dil_cel/src/DILScopedState
// args: t
// locals: e
// closure: exports
function {
  let e;
  e = t.resolveValue(exports.DIL_LOCAL_STATE_SCOPE_KEY);
  if (!(("string" == typeof e))) goto L_63;
  if (!((e.length > 0))) goto L_63;
  return e;
  return undefined;
}

// fn n  args=2 vars=4 closure=2 cpool=0 bc=183B file=dil_cel/src/DILScopedState
// args: e, o
// locals: r, n
// closure: t, exports
function {
  let n;
  let r;
  if (!(!t.isCELMap(e))) goto L_30;
  return;
  r = e[exports.DIL_LOCAL_STATE_ROOT_KEY];
  if (!(!t.isCELMap(r))) goto L_81;
  return;
  n = r[o];
  if (!(t.isCELMap(n))) goto L_b5;
  return n;
  return undefined;
}

// fn s  args=2 vars=3 closure=2 cpool=0 bc=24B file=dil_cel/src/DILScopedState
// args: t, e
// locals: o
// closure: r, _
function {
  let o;
  o = r(t);
  if (!((undefined === o))) goto L_10;
  return e;
  return _(e, t, o);
}

// fn a  args=2 vars=4 closure=3 cpool=0 bc=123B file=dil_cel/src/DILScopedState
// args: e, o
// locals: n, t
// closure: r, t, i
function {
  let n;
  n = r(e);
  if (!(!t.isCELMap(o))) goto L_32;
  return o;
  if (!((undefined === n))) goto L_72;
  let t;
  if (!(!("stateScope" in o))) goto L_52;
  if (!(!("widgetId" in o))) goto L_52;
  return o;
  null;
  o;
  t = {};
  delete "stateScope";
  delete "widgetId";
  return t;
  // [栈深重同步 2 -> 0]
  return i(o, e, n);   // tail call
}

// fn i  args=3 vars=17 closure=6 cpool=0 bc=1249B file=dil_cel/src/DILScopedState
// args: e, o, r
// locals: n, s, a, _, u, L, E, l, t, d, f, A, I, t#1
// closure: t, S, c, p, i, exports
function {
  let I;
  let A;
  let f;
  let d;
  let l;
  let E;
  let L;
  let u;
  let _;
  let a;
  let s;
  let n;
  n = [];
  s = e.replaceState;
  a = t.isCELMap(s);
  if (!(a)) goto L_bd;
  n.push({op: "set", path: S(r), value: s});
  _ = e.updateState;
  u = t.isCELMap(_);
  if (!(u)) goto L_146;
  // append([], 0, c(_, r))
  c(_, r);
  n.push.apply(n, []);
  L = p(e.patchState, o, r);
  if (!((undefined !== L))) goto L_206;
  if (!(Array.isArray(L))) goto L_1dc;
  // append([], 0, L)
  L;
  goto L_206;
  // [栈深重同步 1 -> 0]
  n.push(L);
  E = e.payload;
  l = undefined;
  if (!(t.isCELMap(E))) goto L_2e4;
  if (!(t.isCELMap(E.success_state))) goto L_2e4;
  let t;
  t = c(E.success_state, r);
  if (!((t.length > 0))) goto L_2e3;
  l = t;
  t;
  d = e.fallbackAction;
  if (!(t.isCELMap(d))) goto L_33d;
  goto L_33e;
  // [栈深重同步 1 -> 0]
  f = undefined;
  A = {};
  I = o.resolveValue(exports.DIL_WIDGET_ID_SCOPE_KEY);
  if (!(("client" !== e.handler))) goto L_3ef;
  A.stateScope = r;
  if (!(("string" == typeof I))) goto L_3ef;
  if (!((I.length > 0))) goto L_3ef;
  A.widgetId = I;
  I;
  let t#1;
  for (const t#1 of e) {
    if ((("patchState" === t#1))) goto L_46c;
    if ((("stateScope" === t#1))) goto L_46c;
    if ((("widgetId" === t#1))) goto L_46c;
    if (!(("replaceState" === t#1))) goto L_430;
    if ((a)) goto L_46c;
    if (!(("updateState" === t#1))) goto L_444;
    if ((u)) goto L_46c;
    if (!(("fallbackAction" === t#1))) goto L_45a;
    if (((undefined !== f))) goto L_46c;
    A[t#1] = e[t#1];
    e[t#1];
  }
  <catch>;
  if (!((1 === n.length))) goto L_48e;
  A.patchState = n[0];
  goto L_4a8;
  // [栈深重同步 3 -> 2]
  if (!((n.length > 1))) goto L_4a8;
  A.patchState = n;
  n;
  if (!((undefined !== f))) goto L_4c2;
  A.fallbackAction = f;
  f;
  if (!((undefined !== l))) goto L_4dc;
  A.successStatePatches = l;
  l;
  return A;
}

// fn c  args=2 vars=4 closure=1 cpool=0 bc=102B file=dil_cel/src/DILScopedState
// args: t, e
// locals: o, r
// closure: l
function {
  let o;
  o = [];
  let r;
  for (const r of t) {
    o.push({op: "set", path: l(e, {key: r}), value: t[r]});
  }
  <catch>;
  return o;
}

// fn p  args=3 vars=5 closure=2 cpool=0 bc=147B file=dil_cel/src/DILScopedState
// args: t, e, o
// locals: r, n
// closure: d, _
function {
  if (!((undefined !== t))) goto L_92;
  if (!(Array.isArray(t))) goto L_85;
  let r;
  r = [];
  let n;
  for (const n of t) {
    if (!(d(n))) goto L_7a;
    r.push(_(n, e, o));
  }
  return r;
  if (!(d(t))) goto L_90;
  return _(t, e, o);
  return undefined;
  return;
}

// fn _  args=3 vars=5 closure=2 cpool=0 bc=159B file=dil_cel/src/DILScopedState
// args: t, e, o
// locals: r, n
// closure: u, l
function {
  let n;
  let r;
  r = u(t, e);
  if (!((undefined === r.path))) goto L_37;
  return r;
  n = l(o, r.path);
  if (!((n === r.path))) goto L_8d;
  return r;
  null;
  r;
  return {path: n};
}

// fn u  args=2 vars=5 closure=3 cpool=0 bc=343B file=dil_cel/src/DILScopedState
// args: o, r
// locals: n, s, a
// closure: L, t, e
function {
  let a;
  let s;
  let n;
  if (!((undefined !== o.arrayValueIfMissing))) goto L_31;
  return o;
  n = L(o.path);
  s = r.resolveValue("state");
  if (((undefined === n))) goto L_b3;
  if (!(!t.isCELMap(s))) goto L_b7;
  return o;
  if (!((e.resolveValueAtPath(s, n, false, undefined) == null))) goto L_ef;
  e.resolveValueAtPath(s, n, false, undefined);
  goto L_110;
  a = undefined.value;
  if (!(Array.isArray(a))) goto L_155;
  null;
  o;
  // append([], 0, a)
  a;
  return {arrayValueIfMissing: []};
  return o;
}

// fn L  args=1 vars=2 closure=2 cpool=0 bc=341B file=dil_cel/src/DILScopedState
// args: t
// locals: e
// closure: E, L
function {
  let e;
  if (((undefined === t))) goto L_3a;
  if ((("string" == typeof t))) goto L_3a;
  if (!((undefined === t.next))) goto L_3d;
  return;
  if (!((undefined === t.next.next))) goto L_f6;
  if (!(E(t.next.key))) goto L_f4;
  return {key: t.key};
  return undefined;
  e = L(t.next);
  if (!((undefined === e))) goto L_124;
  return undefined;
  return {key: t.key, next: e};
}

// fn E  args=1 vars=1 closure=1 cpool=0 bc=81B file=dil_cel/src/DILScopedState
// args: t
// closure: o
function {
  if (((t === o.DIL_ARRAY_APPEND_PATH_SEGMENT))) goto L_50;
  return (t === o.DIL_ARRAY_PREPEND_PATH_SEGMENT);
}

// fn S  args=1 vars=1 closure=1 cpool=0 bc=53B file=dil_cel/src/DILScopedState
// args: t
// closure: exports
function {
  return {key: exports.DIL_LOCAL_STATE_ROOT_KEY, next: {key: t}};
}

// fn l  args=2 vars=2 closure=1 cpool=0 bc=247B file=dil_cel/src/DILScopedState
// args: t, e
// closure: exports
function {
  if (!(("string" == typeof e))) goto L_73;
  if (!((e === exports.DIL_LOCAL_STATE_ROOT_KEY))) goto L_32;
  return e;
  return {key: exports.DIL_LOCAL_STATE_ROOT_KEY, next: {key: t, next: {key: e}}};
  if (!((e.key === exports.DIL_LOCAL_STATE_ROOT_KEY))) goto L_bc;
  return e;
  return {key: exports.DIL_LOCAL_STATE_ROOT_KEY, next: {key: t, next: e}};
}

// fn d  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_cel/src/DILScopedState
// args: e
// closure: t
function {
  return t.isCELMap(e);   // tail call
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=14 bc=314B file=dil_cel/src/DILScopedState
// args: require, module, exports
// locals: t, e, o, r, n, s, a, i, c, p, _, u, L, E, S, l, d
function {
  r = function r;
  n = function n;
  s = function s;
  a = function a;
  i = function i;
  c = function c;
  p = function p;
  _ = function _;
  u = function u;
  L = function L;
  E = function E;
  S = function S;
  l = function l;
  d = function d;
  let o;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_LOCAL_STATE_ROOT_KEY = undefined;
  exports.DIL_LOCAL_STATE_SCOPE_KEY = undefined;
  exports.DIL_WIDGET_ID_SCOPE_KEY = undefined;
  exports.getDILLocalStateScope = undefined;
  exports.readDILLocalScopedState = undefined;
  exports.scopeDILStateMutationForCELScope = undefined;
  exports.scopeDILActionValueForCELScope = undefined;
  t = require("cel/src/CELValue");
  e = require("dil_cel/src/CELStatePath");
  o = require("./DILStateMutation");
  exports.DIL_LOCAL_STATE_ROOT_KEY = "__dilLocalState";
  exports.DIL_LOCAL_STATE_SCOPE_KEY = "__dilLocalStateScope";
  exports.DIL_WIDGET_ID_SCOPE_KEY = "__dilWidgetId";
  exports.getDILLocalStateScope = r;
  exports.readDILLocalScopedState = n;
  exports.scopeDILStateMutationForCELScope = s;
  exports.scopeDILActionValueForCELScope = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_cel/src/DILScopedState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
