// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=13B file=foundation/src/deepClone
// args: t, r
// closure: n, e, o
function {
  n[r] = e(t, o);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=47B file=foundation/src/deepClone
// args: t, r
// closure: n, e, o
function {
  n.set(r, e(t, o));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=46B file=foundation/src/deepClone
// args: t
// closure: n, e, o
function {
  n.add(e(t, o));
  return;
}

// fn <atom:0>  args=2 vars=8 closure=3 cpool=3 bc=976B file=foundation/src/deepClone
// args: r, o
// locals: r#1, o#1, n, n#1, n#2, e
// closure: e, n, t
function {
  let o#1;
  let r#1;
  r#1 = r;
  if (!((o === undefined))) goto L_18;
  o;
  o = new WeakMap();
  o#1 = new WeakMap();
  if (((null === r))) goto L_28;
  if (!(("object" != typeof r))) goto L_2c;
  return r;
  if (!(o.has(r))) goto L_7a;
  return o.get(r);   // tail call
  if (!(Array.isArray(r))) goto L_129;
  let n;
  n = r.slice(0);
  o.set(r, n);
  r.forEach(function <atom:0>);
  return n;
  if (!((r instanceof Date))) goto L_161;
  return new Date(r.valueOf());
  if (!((r instanceof RegExp))) goto L_175;
  return new RegExp(r);
  if (!((r instanceof Map))) goto L_1e1;
  let n#1;
  n#1 = new Map();
  o.set(r, n#1);
  r.forEach(function <atom:0>);
  return n#1;
  if (!((r instanceof Set))) goto L_24e;
  let n#2;
  n#2 = new Set();
  o.set(r, n#2);
  r.forEach(function <atom:0>);
  return n#2;
  if (!((r instanceof ArrayBuffer))) goto L_27d;
  return r.slice(0);   // tail call
  if (!((r instanceof Long))) goto L_2b0;
  return Long.fromValue(r);   // tail call
  if (!((r.constructor === Object))) goto L_2e2;
  return n(r, o);   // tail call
  if (!((r instanceof Uint8Array))) goto L_2f6;
  return new Uint8Array(r);
  if (!(t(r))) goto L_353;
  let e;
  e = r.clone();
  o.set(r, e);
  return e;
  throw new Error("Unsupported type in deepClone ".concat(typeof r, " ", r.constructor.name));
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=89B file=foundation/src/deepClone
// args: n, t
// locals: r, o, f
// closure: e
function {
  let r;
  r = {};
  t.set(n, r);
  let o;
  for (const o of n) {
    let f;
    f = n[o];
    r[o] = e(f, t);
  }
  <catch>;
  return r;
}

// fn t  args=1 vars=1 closure=0 cpool=0 bc=64B file=foundation/src/deepClone
// args: e
function {
  if (!(("$arena" in e))) goto L_3f;
  if (!(("clone" in e))) goto L_3f;
  return ("function" == typeof e.clone);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=95B file=foundation/src/deepClone
// args: require, module, exports
// locals: e, n, t
function {
  t = function t;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  e = function <atom:0>;
  n = function <atom:0>;
  exports.default = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/deepClone
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
