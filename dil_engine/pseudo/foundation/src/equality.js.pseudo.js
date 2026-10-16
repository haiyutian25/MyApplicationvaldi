// fn e  args=2 vars=9 closure=1 cpool=0 bc=1785B file=foundation/src/equality
// args: r, t
// locals: n, e, n#1, e#1, n#2, e#2, o
// closure: e
function {
  if (!((r === t))) goto L_8;
  return true;
  if (!(r)) goto L_6ee;
  if (!(t)) goto L_6ee;
  if (!(("object" == typeof r))) goto L_6ee;
  if (!(("object" == typeof t))) goto L_6ee;
  let n#2;
  if (!((r.constructor !== t.constructor))) goto L_7b;
  return false;
  if (!(Array.isArray(r))) goto L_109;
  if (!(Array.isArray(t))) goto L_109;
  if (!((r.length !== t.length))) goto L_dd;
  return false;
  let n;
  n = 0;
  if (!((n < r.length))) goto L_106;
  if (!(!e(r[n], t[n]))) goto L_fc;
  return false;
  n = <n_new>;
  (n++);
  goto L_e2;
  return true;
  if (!((r instanceof Map))) goto L_293;
  if (!((t instanceof Map))) goto L_293;
  if (!((r.size !== t.size))) goto L_16b;
  return false;
  let e;
  for (const e of Array.from(r.entries())) {
    if (!(!t.has(e[0]))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  let n#1;
  for (const n#1 of Array.from(r.entries())) {
    if (!(!e(n#1[1], t.get(n#1[0])))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
  if (!((r instanceof Set))) goto L_387;
  if (!((t instanceof Set))) goto L_387;
  if (!((r.size !== t.size))) goto L_2f5;
  return false;
  let e#1;
  for (const e#1 of Array.from(r.entries())) {
    if (!(!t.has(e#1[0]))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
  if (!((r instanceof RegExp))) goto L_42e;
  if (!((t instanceof RegExp))) goto L_42e;
  if (!((r.source === t.source))) goto L_42d;
  return (r.flags === t.flags);
  if (!((r instanceof Long))) goto L_469;
  if (!((t instanceof Long))) goto L_469;
  return (0 === r.compare(t));
  if (!((r.valueOf !== Object.prototype.valueOf))) goto L_521;
  return (r.valueOf() === t.valueOf());
  if (!((r.toString !== Object.prototype.toString))) goto L_5d9;
  return (r.toString() === t.toString());
  n#2 = Object.keys(r);
  if (!((n#2.length !== Object.keys(t).length))) goto L_63a;
  return false;
  let e#2;
  for (const e#2 of n#2) {
    if (!(!Object.prototype.hasOwnProperty.call(t, e#2))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  let o;
  for (const o of n#2) {
    if (!(!e(r[o], t[o]))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
  if (!((r != r))) goto L_6f8;
  return (t != t);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=foundation/src/equality
// args: t
// closure: e, r
function {
  return (e[t] === r[t]);
}

// fn r  args=2 vars=4 closure=0 cpool=1 bc=189B file=foundation/src/equality
// args: e, r
// locals: t, n
function {
  if (!(e)) goto L_b9;
  if (!(r)) goto L_b9;
  if (!(("object" == typeof e))) goto L_b9;
  if (!(("object" == typeof r))) goto L_b9;
  let n;
  let t;
  t = Object.keys(e);
  n = Object.keys(r);
  if (!((t.length === n.length))) goto L_b8;
  return t.every(function <atom:0>);
  return (e === r);
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=107B file=foundation/src/equality
// args: require, module, exports
// locals: e, r
function {
  e = function e;
  r = function r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.deepEqual = undefined;
  exports.shallowEqual = undefined;
  exports.deepEqual = e;
  exports.shallowEqual = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/equality
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
