// fn e  args=4 vars=9 closure=4 cpool=0 bc=354B file=dil_cel/src/CELStatePath
// args: e, t, r, u
// locals: s, f, e#1, t#1, l
// closure: n, i, o, a
function {
  let l;
  let f;
  let s;
  s = e;
  f = t;
  if (!((undefined !== f.next))) goto L_11b;
  let t#1;
  let e#1;
  e#1 = n(f.key);
  t#1 = i(s, e#1);
  if (!(!o(t#1))) goto L_e7;
  if (!(!r)) goto L_7b;
  return;
  if (!((undefined === f.next.next))) goto L_d2;
  if (!((undefined !== u))) goto L_d2;
  // append([], 0, u)
  u;
  goto L_d3;
  // [栈深重同步 1 -> 0]
  t#1 = {};
  {};
  if (!(!a(s, e#1, t#1))) goto L_e7;
  return;
  s = t#1;
  t#1;
  f = f.next;
  f.next;
  goto L_d;
  l = f.key;
  return {parent: s, key: l, value: i(s, n(l))};
}

// fn t  args=4 vars=8 closure=7 cpool=0 bc=324B file=dil_cel/src/CELStatePath
// args: e, s, f, l
// locals: c, v, y, x
// closure: r, n, i, o, u, t, a
function {
  let x;
  let y;
  let v;
  let c;
  if (!((undefined === s.next))) goto L_59;
  return r(e, s.key);   // tail call
  c = n(s.key);
  v = i(e, c);
  y = undefined;
  if (!(o(v))) goto L_9c;
  y = u(v);
  u(v);
  goto L_fc;
  if (!(!f)) goto L_a1;
  return;
  if (!((undefined === s.next.next))) goto L_f6;
  if (!((undefined !== l))) goto L_f6;
  // append([], 0, l)
  l;
  goto L_f7;
  // [栈深重同步 1 -> 0]
  y = {};
  {};
  x = t(y, s.next, f, l);
  if (!((undefined !== x))) goto L_142;
  if (!(a(e, c, y))) goto L_142;
  return x;
  return undefined;
}

// fn r  args=2 vars=2 closure=2 cpool=0 bc=25B file=dil_cel/src/CELStatePath
// args: e, t
// closure: i, n
function {
  return {parent: e, key: t, value: i(e, n(t))};
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=9B file=dil_cel/src/CELStatePath
// args: e
function {
  return String(e);   // tail call
}

// fn o  args=1 vars=1 closure=0 cpool=0 bc=16B file=dil_cel/src/CELStatePath
// args: e
function {
  if ((!e)) goto L_e;
  return !("object" != typeof e);
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=60B file=dil_cel/src/CELStatePath
// args: e
function {
  if (!(Array.isArray(e))) goto L_34;
  // append([], 0, e)
  e;
  return [];
  null;
  e;
  return {};
}

// fn i  args=2 vars=2 closure=0 cpool=0 bc=58B file=dil_cel/src/CELStatePath
// args: e, t
function {
  if (!(Array.isArray(e))) goto L_36;
  return e[Number(t)];
  return e[t];
}

// fn a  args=3 vars=4 closure=1 cpool=0 bc=82B file=dil_cel/src/CELStatePath
// args: e, t, r
// locals: n
// closure: s
function {
  if (!(Array.isArray(e))) goto L_4b;
  let n;
  n = Number(t);
  if (!(!!s(n))) goto L_4a;
  e[n] = r;
  return true;
  e[t] = r;
  return true;
}

// fn s  args=1 vars=1 closure=0 cpool=0 bc=52B file=dil_cel/src/CELStatePath
// args: e
function {
  if (!((e >= 0))) goto L_33;
  return (Math.floor(e) === e);
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=9 bc=133B file=dil_cel/src/CELStatePath
// args: require, module, exports
// locals: e, t, r, n, o, u, i, a, s
function {
  e = function e;
  t = function t;
  r = function r;
  n = function n;
  o = function o;
  u = function u;
  i = function i;
  a = function a;
  s = function s;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveValueAtPath = undefined;
  exports.resolveWritableValueAtPath = undefined;
  exports.resolveValueAtPath = e;
  exports.resolveWritableValueAtPath = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_cel/src/CELStatePath
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
