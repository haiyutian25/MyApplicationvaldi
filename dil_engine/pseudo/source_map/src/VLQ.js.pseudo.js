// fn o  args=1 vars=8 closure=1 cpool=1 bc=289B file=source_map/src/VLQ
// args: t
// locals: o, r, n, c, s, l, e
// closure: e
function {
  let n;
  let r;
  let o;
  o = [];
  r = 0;
  n = 0;
  let c;
  c = 0;
  if (!((c < t.length))) goto L_11d;
  let l;
  let s;
  s = e[t[c]];
  if (!((undefined === s))) goto L_54;
  throw new Error((("Invalid character (" + t[c]) + ")"));
  l = (32 & s);
  s = (s & 31);
  (s & 31);
  n = (n + (s << r));
  (n + (s << r));
  if (!(l)) goto L_89;
  r = (r + 5);
  (r + 5);
  goto L_110;
  let e;
  e = (1 & n);
  n = (n >>> 1);
  (n >>> 1);
  if (!(e)) goto L_db;
  if (!((0 === n))) goto L_d2;
  goto L_d6;
  // [栈深重同步 3 -> 2]
  goto L_105;
  // [栈深重同步 1 -> 0]
  o.push(n);
  r = 0;
  n = 0;
  0;
  c = (c + 1);
  (c + 1);
  goto L_16;
  return o;
}

// fn r  args=1 vars=3 closure=1 cpool=0 bc=76B file=source_map/src/VLQ
// args: e
// locals: t, o
// closure: n
function {
  let t;
  t = undefined;
  if (!(("number" == typeof e))) goto L_19;
  t = n(e);
  n(e);
  goto L_48;
  t = "";
  "";
  let o;
  o = 0;
  if (!((o < e.length))) goto L_48;
  t = (t + n(e[o]));
  (t + n(e[o]));
  o = (o + 1);
  (o + 1);
  goto L_24;
  return t;
}

// fn n  args=1 vars=3 closure=1 cpool=0 bc=78B file=source_map/src/VLQ
// args: e
// locals: o, r
// closure: t
function {
  let o;
  o = "";
  if (!((e < 0))) goto L_13;
  e = ((-e << 1) | 1);
  goto L_17;
  // [栈深重同步 1 -> 0]
  e = (e << 1);
  (e << 1);
  let r;
  r = (31 & e);
  e = (e >>> 5);
  if (!(((e >>> 5) > 0))) goto L_34;
  r = (r | 32);
  (r | 32);
  o = (o + t[r]);
  (o + t[r]);
  if (((e > 0))) goto L_18;
  return o;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=13B file=source_map/src/VLQ
// args: o, r
// closure: e, t
function {
  e[o] = r;
  t[r] = o;
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=4 bc=202B file=source_map/src/VLQ
// args: require, module, exports
// locals: e, t, o, r, n
function {
  o = function o;
  r = function r;
  n = function n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.decode = undefined;
  exports.encode = undefined;
  e = {};
  t = {};
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("").forEach(function <atom:0>);
  exports.decode = o;
  exports.encode = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=source_map/src/VLQ
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
