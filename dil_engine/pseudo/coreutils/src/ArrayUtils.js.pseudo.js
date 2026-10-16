// fn t  args=2 vars=4 closure=0 cpool=0 bc=60B file=coreutils/src/ArrayUtils
// args: t, r
// locals: e, n
function {
  let e;
  e = t.length;
  if (!((e !== r.length))) goto L_11;
  return false;
  let n;
  n = 0;
  if (!((n < e))) goto L_39;
  if (!((t[n] !== r[n]))) goto L_2f;
  return false;
  n = <n_new>;
  (n++);
  goto L_16;
  return true;
}

// fn r  args=2 vars=6 closure=0 cpool=0 bc=131B file=coreutils/src/ArrayUtils
// args: t, r
// locals: e, n, o, a
function {
  let n;
  let e;
  if (!(!t)) goto L_e;
  return [];
  e = t;
  n = 0;
  let o;
  for (const o of t) {
    let a;
    a = r(o);
    if (!((a !== o))) goto L_70;
    if (!((e === t))) goto L_63;
    e = t.slice(0, t.length);
    t.slice(0, t.length);
    e[n] = a;
    a;
    n = <n_new>;
    (n++);
  }
  return e;
}

// fn n  args=4 vars=5 closure=2 cpool=0 bc=129B file=coreutils/src/ArrayUtils
// args: t, r, n, a
// locals: i
// closure: o, e
function {
  let i;
  i = o(t, r, e, n, a);
  if (!((i.min === i.max))) goto L_7f;
  return i.min;
  return -1;
}

// fn o  args=5 vars=11 closure=0 cpool=0 bc=309B file=coreutils/src/ArrayUtils
// args: t, r, e, n, o
// locals: a, i, e#1, n#1, s, c
function {
  let c;
  let s;
  let i;
  let a;
  if (!((n == null))) goto L_13;
  n;
  a = 0;
  if (!((o == null))) goto L_20;
  o;
  i = (t.length - 1);
  if (!((a <= i))) goto L_a2;
  let n#1;
  let e#1;
  e#1 = Math.floor(((a + i) / 2));
  n#1 = r(t[e#1]);
  if (!((0 === n#1))) goto L_84;
  return {min: e#1, max: e#1};
  if (!((n#1 > 0))) goto L_96;
  i = (e#1 - 1);
  goto L_9f;
  // [栈深重同步 1 -> 0]
  a = (e#1 + 1);
  (e#1 + 1);
  goto L_21;
  s = Math.min(a, i);
  c = Math.max(a, i);
  if (!(e)) goto L_123;
  e.min = s;
  e.max = c;
  return e;
  return {min: s, max: c};
}

// fn a  args=3 vars=14 closure=1 cpool=0 bc=540B file=coreutils/src/ArrayUtils
// args: t, r, e
// locals: t#1, r#1, e#1, o, a, i, s, n, o#1, n#1, o#2
// closure: n
function {
  let e#1;
  let r#1;
  let t#1;
  t#1 = t;
  r#1 = r;
  if (!((e === undefined))) goto L_15;
  e;
  e = 0;
  e#1 = 0;
  let s;
  let i;
  let a;
  let o;
  o = t.length;
  if (!((0 === o))) goto L_2e;
  return -1;
  e = Math.max(0, Math.min(e, (o - 1)));
  a = r(t[Math.max(0, Math.min(e, (o - 1)))]);
  if (!((0 === a))) goto L_97;
  return e;
  i = undefined;
  s = undefined;
  if (!((a < 0))) goto L_15a;
  let n;
  n = 1;
  if (!(((e + n) < o))) goto L_e6;
  let o#1;
  o#1 = r(t[(e + n)]);
  if (!((0 === o#1))) goto L_d3;
  return (e + n);
  if (((o#1 > 0))) goto L_e6;
  n = (n * 2);
  (n * 2);
  goto L_ad;
  i = ((e + Math.floor((n / 2))) + 1);
  ((e + Math.floor((n / 2))) + 1);
  s = Math.min(((e + n) - 1), (o - 1));
  Math.min(((e + n) - 1), (o - 1));
  goto L_204;
  let n#1;
  n#1 = 1;
  if (!(((e - n#1) >= 0))) goto L_197;
  let o#2;
  o#2 = r(t[(e - n#1)]);
  if (!((0 === o#2))) goto L_184;
  return (e - n#1);
  if (((o#2 < 0))) goto L_197;
  n#1 = (n#1 * 2);
  (n#1 * 2);
  goto L_160;
  i = Math.max(((e - n#1) + 1), 0);
  Math.max(((e - n#1) + 1), 0);
  s = ((e - Math.floor((n#1 / 2))) - 1);
  ((e - Math.floor((n#1 / 2))) - 1);
  if (!((i <= s))) goto L_21a;
  return n(t, r, i, s);
  return -1;
}

// fn i  args=2 vars=6 closure=0 cpool=0 bc=114B file=coreutils/src/ArrayUtils
// args: t, r
// locals: e, n, t#1, o
function {
  let e;
  e = {};
  let n;
  for (const n of t) {
    let o;
    let t#1;
    t#1 = r(n);
    o = e[t#1];
    if ((o)) goto L_3c;
    o = [];
    [];
    e[t#1] = o;
    o;
    o.push(n);
  }
  return e;
}

// fn s  args=2 vars=3 closure=0 cpool=0 bc=97B file=coreutils/src/ArrayUtils
// args: t, r
// locals: e
function {
  let e;
  e = t.indexOf(r);
  if (!(!(e < 0))) goto L_60;
  t.splice(e, 1);
  return true;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=7 bc=257B file=coreutils/src/ArrayUtils
// args: require, module, exports
// locals: t, r, e, n, o, a, i, s
function {
  t = function t;
  r = function r;
  n = function n;
  o = function o;
  a = function a;
  i = function i;
  s = function s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.arrayEquals = undefined;
  exports.lazyMap = undefined;
  exports.binarySearch = undefined;
  exports.binarySearchRange = undefined;
  exports.exponentialSearch = undefined;
  exports.groupBy = undefined;
  exports.remove = undefined;
  exports.arrayEquals = t;
  exports.lazyMap = r;
  e = {min: 0, max: 0};
  exports.binarySearch = n;
  exports.binarySearchRange = o;
  exports.exponentialSearch = a;
  exports.groupBy = i;
  exports.remove = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=coreutils/src/ArrayUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
