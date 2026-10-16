// fn i  args=3 vars=4 closure=0 cpool=0 bc=42B file=valdi_core/src/Long
// args: i, t, n
// locals: this
function {
  this = this;
  this.low = (0 | i);
  this.high = (0 | t);
  this.unsigned = !!n;
  return;
}

// fn t  args=1 vars=1 closure=0 cpool=0 bc=43B file=valdi_core/src/Long
// args: i
function {
  if (!(i)) goto L_29;
  return (true === i.__isLong__);
}

// fn s  args=2 vars=5 closure=3 cpool=0 bc=116B file=valdi_core/src/Long
// args: i, t
// locals: s, e, u
// closure: h, r, n
function {
  if (!(t)) goto L_3c;
  i = (i >>> 0);
  if (!((0 <= (i >>> 0)))) goto L_12;
  u = (i < 256);
  if (!((i < 256))) goto L_1d;
  e = h[i];
  if (!(h[i])) goto L_1d;
  return e;
  if (!(((0 | i) < 0))) goto L_29;
  goto L_2a;
  // [栈深重同步 3 -> 2]
  s = r(i, 0, true);
  if (!(u)) goto L_39;
  h[i] = s;
  s;
  return s;
  i = (i | 0);
  if (!((-128 <= (i | 0)))) goto L_4c;
  u = (i < 128);
  if (!((i < 128))) goto L_57;
  e = n[i];
  if (!(n[i])) goto L_57;
  return e;
  if (!((i < 0))) goto L_61;
  goto L_62;
  // [栈深重同步 3 -> 2]
  s = r(i, 0, false);
  if (!(u)) goto L_71;
  n[i] = s;
  s;
  return s;
}

// fn e  args=2 vars=2 closure=10 cpool=0 bc=127B file=valdi_core/src/Long
// args: i, t
// closure: m, v, d, p, c, b, y, e, r, a
function {
  if (!(isNaN(i))) goto L_10;
  if (!(t)) goto L_e;
  return m;
  return v;
  if (!(t)) goto L_21;
  if (!((i < 0))) goto L_1a;
  return m;
  if (!((i >= d))) goto L_3a;
  return p;
  if (!((i <= -c))) goto L_2d;
  return b;
  if (!(((i + 1) >= c))) goto L_3a;
  return y;
  if (!((i < 0))) goto L_6b;
  return e(-i, t).neg();
  return r(((i % a) | 0), ((i / a) | 0), t);
}

// fn r  args=3 vars=3 closure=1 cpool=0 bc=9B file=valdi_core/src/Long
// args: t, n, h
// closure: i
function {
  return new i(t, n, h);
}

// fn o  args=3 vars=10 closure=4 cpool=0 bc=577B file=valdi_core/src/Long
// args: i, t, n
// locals: h, s, r, g, f, l, a
// closure: v, o, e, u
function {
  if (!((0 === i.length))) goto L_12;
  throw Error("empty string");
  if ((("NaN" === i))) goto L_3a;
  if ((("Infinity" === i))) goto L_3a;
  if ((("+Infinity" === i))) goto L_3a;
  if (!(("-Infinity" === i))) goto L_3e;
  return v;
  if (!(("number" == typeof t))) goto L_4f;
  n = t;
  t = false;
  goto L_53;
  // [栈深重同步 1 -> 0]
  t = !!t;
  !!t;
  if ((n)) goto L_5b;
  n = 10;
  if (((10 < 2))) goto L_66;
  if (!((36 < n))) goto L_74;
  throw RangeError("radix");
  h = i.indexOf("-");
  if (!((i.indexOf("-") > 0))) goto L_af;
  throw Error("interior hyphen");
  if (!((0 === h))) goto L_102;
  return o(i.substring(1), t, n).neg();   // tail call
  s = e(u(n, 8));
  r = v;
  g = 0;
  if (!((g < i.length))) goto L_234;
  f = Math.min(8, (i.length - g));
  l = parseInt(i.substring(g, (g + f)), n);
  if (!((f < 8))) goto L_1dd;
  a = e(u(n, f));
  r = r.mul(a).add(e(l));
  goto L_22d;
  r = r.mul(s);
  r = r.mul(s).add(e(l));
  // add_loc(8)
  goto L_10e;
  r.unsigned = t;
  return r;
}

// fn g  args=2 vars=2 closure=3 cpool=0 bc=148B file=valdi_core/src/Long
// args: i, t
// closure: e, o, r
function {
  if (!(("number" == typeof i))) goto L_f;
  return e(i, t);
  if (!(("string" == typeof i))) goto L_1e;
  return o(i, t);
  if (!(("boolean" == typeof t))) goto L_70;
  goto L_92;
  // [栈深重同步 4 -> 3]
  return r(i.low, i.high, i.unsigned);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=110B file=valdi_core/src/Long
// locals: this
function {
  this = this;
  if (!(this.unsigned)) goto L_4b;
  return (this.low >>> 0);
  return this.low;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=188B file=valdi_core/src/Long
// locals: this
// closure: a
function {
  this = this;
  if (!(this.unsigned)) goto L_72;
  return (((this.high >>> 0) * a) + (this.low >>> 0));
  return ((this.high * a) + (this.low >>> 0));
}

// fn <atom:0>  args=1 vars=10 closure=3 cpool=2 bc=801B file=valdi_core/src/Long
// args: i
// locals: t, n, h, s, r, o, g, f, this
// closure: b, e, u
function {
  this = this;
  if ((i)) goto L_a;
  i = 10;
  if (((10 < 2))) goto L_15;
  if (!((36 < i))) goto L_23;
  throw RangeError("radix");
  if (!(this.isZero())) goto L_4e;
  return "0";
  if (!(this.isNegative())) goto L_1e1;
  if (!(this.eq(b))) goto L_18f;
  t = e(i);
  n = this.div(t);
  h = this.div(t).mul(t).sub(this);
  return (n.toString(i) + h.toInt().toString(i));
  return ("-" + this.neg().toString(i));
  s = e(u(i, 6), this.unsigned);
  r = this;
  o = "";
  g = r.div(s);
  f = (r.sub(g.mul(s)).toInt() >>> 0).toString(i);
  r = g;
  if (!(g.isZero())) goto L_305;
  return (f + o);
  if (!((f.length < 6))) goto L_315;
  f = ("0" + f);
  goto L_305;
  o = (("" + f) + o);
  goto L_212;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/Long
// locals: this
function {
  this = this;
  return this.high;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=valdi_core/src/Long
// locals: this
function {
  this = this;
  return (this.high >>> 0);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/Long
// locals: this
function {
  this = this;
  return this.low;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=valdi_core/src/Long
// locals: this
function {
  this = this;
  return (this.low >>> 0);
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=334B file=valdi_core/src/Long
// locals: i, t, this
// closure: b
function {
  this = this;
  if (!(this.isNegative())) goto L_9e;
  if (!(this.eq(b))) goto L_54;
  return 64;
  return this.neg().getNumBitsAbs();
  if (!((0 != this.high))) goto L_e8;
  goto L_10a;
  // [栈深重同步 1 -> 0]
  i = this.low;
  t = 31;
  if (!((t > 0))) goto L_11f;
  if (!(!(i & (1 << t)))) goto L_11f;
  goto L_10e;
  if (!((0 != this.high))) goto L_14a;
  return (t + 33);
  return (t + 1);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=79B file=valdi_core/src/Long
// locals: this
function {
  this = this;
  if (!((0 === this.high))) goto L_4e;
  return (0 === this.low);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=valdi_core/src/Long
// locals: this
function {
  this = this;
  if (!(!this.unsigned)) goto L_4d;
  return (this.high < 0);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=valdi_core/src/Long
// locals: this
function {
  this = this;
  if ((this.unsigned)) goto L_4c;
  return (this.high >= 0);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=41B file=valdi_core/src/Long
// locals: this
function {
  this = this;
  return !(1 & ~this.low);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=valdi_core/src/Long
// locals: this
function {
  this = this;
  return !(1 & this.low);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=319B file=valdi_core/src/Long
// args: i
// locals: this
// closure: t, g
function {
  this = this;
  if ((t(i))) goto L_d;
  i = g(i);
  g(i);
  if (((this.unsigned === i.unsigned))) goto L_a9;
  if ((((this.high >>> 31) != 1))) goto L_a9;
  if (!(((i.high >>> 31) != 1))) goto L_13e;
  if (!((this.high === i.high))) goto L_13e;
  return (this.low === i.low);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=42B file=valdi_core/src/Long
// args: i
// locals: this
function {
  this = this;
  return !this.eq(i);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=43B file=valdi_core/src/Long
// args: i
// locals: this
function {
  this = this;
  return (this.comp(i) < 0);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=43B file=valdi_core/src/Long
// args: i
// locals: this
function {
  this = this;
  return (this.comp(i) <= 0);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=43B file=valdi_core/src/Long
// args: i
// locals: this
function {
  this = this;
  return (this.comp(i) > 0);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=43B file=valdi_core/src/Long
// args: i
// locals: this
function {
  this = this;
  return (this.comp(i) >= 0);
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=499B file=valdi_core/src/Long
// args: i
// locals: n, h, this
// closure: t, g
function {
  this = this;
  if ((t(i))) goto L_d;
  i = g(i);
  g(i);
  if (!(this.eq(i))) goto L_38;
  return 0;
  n = this.isNegative();
  h = i.isNegative();
  if (!(n)) goto L_8d;
  if (!(!h)) goto L_8d;
  return -1;
  if (!(!n)) goto L_96;
  if (!(h)) goto L_96;
  return 1;
  if (!(this.unsigned)) goto L_1a3;
  if ((((i.high >>> 0) > (this.high >>> 0)))) goto L_19d;
  if (!((i.high === this.high))) goto L_1a1;
  if (!(((i.low >>> 0) > (this.low >>> 0)))) goto L_1a1;
  return -1;
  return 1;
  if (!(this.sub(i).isNegative())) goto L_1f1;
  return -1;
  return 1;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=156B file=valdi_core/src/Long
// locals: this
// closure: b, N
function {
  this = this;
  if (!(!this.unsigned)) goto L_51;
  if (!(this.eq(b))) goto L_51;
  return b;
  return this.not().add(N);
}

// fn <atom:0>  args=1 vars=13 closure=3 cpool=0 bc=492B file=valdi_core/src/Long
// args: i
// locals: n, h, s, e, u, o, f, l, a, d, c, this
// closure: t, g, r
function {
  this = this;
  if ((t(i))) goto L_e;
  i = g(i);
  g(i);
  n = (this.high >>> 16);
  h = (65535 & this.high);
  s = (this.low >>> 16);
  e = (65535 & this.low);
  u = (i.high >>> 16);
  o = (65535 & i.high);
  f = (i.low >>> 16);
  l = 0;
  a = 0;
  d = 0;
  c = 0;
  c = (c + (e + (65535 & i.low)));
  d = (d + ((c + (e + (65535 & i.low))) >>> 16));
  d = (d + (s + f));
  a = (a + ((d + (s + f)) >>> 16));
  a = (a + (h + o));
  l = (l + ((a + (h + o)) >>> 16));
  l = ((l + ((a + (h + o)) >>> 16)) + (n + u));
  d = (d & 65535);
  c = (c & 65535);
  l = (l & 65535);
  a = (a & 65535);
  return r((((d & 65535) << 16) | (c & 65535)), (((l & 65535) << 16) | (a & 65535)), this.unsigned);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=88B file=valdi_core/src/Long
// args: i
// locals: this
// closure: t, g
function {
  this = this;
  if ((t(i))) goto L_d;
  i = g(i);
  g(i);
  return this.add(i.neg());   // tail call
}

// fn <atom:0>  args=1 vars=14 closure=7 cpool=0 bc=1506B file=valdi_core/src/Long
// args: i
// locals: n, h, s, u, o, f, l, a, d, c, m, N, this
// closure: v, t, g, b, w, e, r
function {
  this = this;
  if (!(this.isZero())) goto L_2d;
  return v;
  if ((t(i))) goto L_38;
  i = g(i);
  g(i);
  if (!(i.isZero())) goto L_62;
  return v;
  if (!(this.eq(b))) goto L_b6;
  if (!(i.isOdd())) goto L_b4;
  return b;
  return v;
  if (!(i.eq(b))) goto L_10a;
  if (!(this.isOdd())) goto L_108;
  return b;
  return v;
  if (!(this.isNegative())) goto L_23c;
  if (!(i.isNegative())) goto L_1cc;
  return this.neg().mul(i.neg());
  return this.neg().mul(i).neg();
  if (!(i.isNegative())) goto L_2d2;
  return this.mul(i.neg()).neg();   // tail call
  if (!(this.lt(w))) goto L_39f;
  if (!(i.lt(w))) goto L_39f;
  return e((this.toNumber() * i.toNumber()), this.unsigned);   // tail call
  n = (this.high >>> 16);
  h = (65535 & this.high);
  s = (this.low >>> 16);
  u = (65535 & this.low);
  o = (i.high >>> 16);
  f = (65535 & i.high);
  l = (i.low >>> 16);
  a = (65535 & i.low);
  d = 0;
  c = 0;
  m = 0;
  N = 0;
  N = (N + (u * a));
  m = (m + ((N + (u * a)) >>> 16));
  m = (m + (s * a));
  c = (c + ((m + (s * a)) >>> 16));
  m = (m & 65535);
  m = (m + (u * l));
  c = (c + ((m + (u * l)) >>> 16));
  c = (c + (h * a));
  d = (d + ((c + (h * a)) >>> 16));
  c = (c & 65535);
  c = (c + (s * l));
  d = (d + ((c + (s * l)) >>> 16));
  c = (c & 65535);
  c = (c + (u * f));
  d = (d + ((c + (u * f)) >>> 16));
  d = ((d + ((c + (u * f)) >>> 16)) + ((((n * a) + (h * l)) + (s * f)) + (u * o)));
  m = (m & 65535);
  N = (N & 65535);
  d = (d & 65535);
  c = (c & 65535);
  return r((((m & 65535) << 16) | (N & 65535)), (((d & 65535) << 16) | (c & 65535)), this.unsigned);   // tail call
}

// fn <atom:0>  args=1 vars=9 closure=10 cpool=0 bc=2168B file=valdi_core/src/Long
// args: i
// locals: n, h, s, r, o, f, l, this
// closure: t, g, m, v, E, b, N, q, u, e
function {
  this = this;
  if ((t(i))) goto L_e;
  i = g(i);
  g(i);
  if (!(i.isZero())) goto L_42;
  throw Error("division by zero");
  if (!(this.isZero())) goto L_93;
  if (!(this.unsigned)) goto L_91;
  return m;
  return v;
  if (!(this.unsigned)) goto L_18a;
  if ((i.unsigned)) goto L_107;
  i = i.toUnsigned();
  i.toUnsigned();
  if (!(i.gt(this))) goto L_133;
  return m;
  if (!(i.gt(this.shru(1)))) goto L_185;
  return E;
  s = m;
  goto L_5bf;
  if (!(this.eq(b))) goto L_3a2;
  if ((i.eq(N))) goto L_20c;
  if (!(i.eq(q))) goto L_212;
  return b;
  if (!(i.eq(b))) goto L_240;
  return N;
  n = this.shr(1).div(i).shl(1);
  if (!(this.shr(1).div(i).shl(1).eq(v))) goto L_308;
  if (!(i.isNegative())) goto L_304;
  return N;
  return q;
  h = this.sub(i.mul(n));
  s = n.add(h.div(i));
  return n.add(h.div(i));
  if (!(i.eq(b))) goto L_3f5;
  if (!(this.unsigned)) goto L_3f3;
  return m;
  return v;
  if (!(this.isNegative())) goto L_527;
  if (!(i.isNegative())) goto L_4b7;
  return this.neg().div(i.neg());
  return this.neg().div(i).neg();
  if (!(i.isNegative())) goto L_5bd;
  return this.div(i.neg()).neg();   // tail call
  s = v;
  h = this;
  if (!(h.gte(i))) goto L_876;
  n = Math.max(1, Math.floor((h.toNumber() / i.toNumber())));
  r = Math.ceil((Math.log(n) / Math.LN2));
  if (!((Math.ceil((Math.log(n) / Math.LN2)) <= 48))) goto L_70f;
  goto L_718;
  // [栈深重同步 1 -> 0]
  o = u(2, (r - 48));
  f = e(n);
  l = e(n).mul(i);
  if ((l.isNegative())) goto L_799;
  if (!(l.gt(h))) goto L_7f3;
  n = (n - o);
  f = e((n - o), this.unsigned);
  l = e((n - o), this.unsigned).mul(i);
  goto L_748;
  if (!(f.isZero())) goto L_822;
  f = N;
  N;
  s = s.add(f);
  h = h.sub(l);
  goto L_5c2;
  return s;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=126B file=valdi_core/src/Long
// args: i
// locals: this
// closure: t, g
function {
  this = this;
  if ((t(i))) goto L_d;
  i = g(i);
  g(i);
  return this.sub(this.div(i).mul(i));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=110B file=valdi_core/src/Long
// locals: this
// closure: r
function {
  this = this;
  return r(~this.low, ~this.high, this.unsigned);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=190B file=valdi_core/src/Long
// args: i
// locals: this
// closure: t, g, r
function {
  this = this;
  if ((t(i))) goto L_d;
  i = g(i);
  g(i);
  return r((this.low & i.low), (this.high & i.high), this.unsigned);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=190B file=valdi_core/src/Long
// args: i
// locals: this
// closure: t, g, r
function {
  this = this;
  if ((t(i))) goto L_d;
  i = g(i);
  g(i);
  return r((this.low | i.low), (this.high | i.high), this.unsigned);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=190B file=valdi_core/src/Long
// args: i
// locals: this
// closure: t, g, r
function {
  this = this;
  if ((t(i))) goto L_d;
  i = g(i);
  g(i);
  return r((this.low ^ i.low), (this.high ^ i.high), this.unsigned);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=294B file=valdi_core/src/Long
// args: i
// locals: this
// closure: t, r
function {
  this = this;
  if (!(t(i))) goto L_2f;
  i = i.toInt();
  i.toInt();
  i = (i & 63);
  if (!((0 == (i & 63)))) goto L_3b;
  return this;
  if (!((i < 32))) goto L_d9;
  return r((this.low << i), ((this.high << i) | (this.low >>> (32 - i))), this.unsigned);
  return r(0, (this.low << (i - 32)), this.unsigned);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=335B file=valdi_core/src/Long
// args: i
// locals: this
// closure: t, r
function {
  this = this;
  if (!(t(i))) goto L_2f;
  i = i.toInt();
  i.toInt();
  i = (i & 63);
  if (!((0 == (i & 63)))) goto L_3b;
  return this;
  if (!((i < 32))) goto L_d9;
  return r(((this.low >>> i) | (this.high << (32 - i))), (this.high >> i), this.unsigned);
  if (!((this.high >= 0))) goto L_12a;
  goto L_12b;
  // [栈深重同步 3 -> 2]
  return r((this.high >> (i - 32)), -1, this.unsigned);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=336B file=valdi_core/src/Long
// args: i
// locals: this
// closure: t, r
function {
  this = this;
  if (!(t(i))) goto L_2f;
  i = i.toInt();
  i.toInt();
  i = (i & 63);
  if (!((0 == (i & 63)))) goto L_3b;
  return this;
  if (!((i < 32))) goto L_d9;
  return r(((this.low >>> i) | (this.high << (32 - i))), (this.high >>> i), this.unsigned);
  if (!((32 === i))) goto L_104;
  goto L_12b;
  // [栈深重同步 2 -> 1]
  return r((this.high >>> (i - 32)), 0, this.unsigned);
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=559B file=valdi_core/src/Long
// args: i
// locals: n, this
// closure: t, r
function {
  this = this;
  if (!(t(i))) goto L_2f;
  i = i.toInt();
  i.toInt();
  i = (i & 63);
  if (!((0 == (i & 63)))) goto L_3b;
  return this;
  if (!((32 === i))) goto L_aa;
  return r(this.high, this.low, this.unsigned);
  if (!((i < 32))) goto L_16f;
  n = (32 - i);
  return r(((this.low << i) | (this.high >>> n)), ((this.high << i) | (this.low >>> n)), this.unsigned);
  i = (i - 32);
  n = (32 - (i - 32));
  return r(((this.high << i) | (this.low >>> n)), ((this.low << i) | (this.high >>> n)), this.unsigned);
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=559B file=valdi_core/src/Long
// args: i
// locals: n, this
// closure: t, r
function {
  this = this;
  if (!(t(i))) goto L_2f;
  i = i.toInt();
  i.toInt();
  i = (i & 63);
  if (!((0 == (i & 63)))) goto L_3b;
  return this;
  if (!((32 === i))) goto L_aa;
  return r(this.high, this.low, this.unsigned);
  if (!((i < 32))) goto L_16f;
  n = (32 - i);
  return r(((this.high << n) | (this.low >>> i)), ((this.low << n) | (this.high >>> i)), this.unsigned);
  i = (i - 32);
  n = (32 - (i - 32));
  return r(((this.low << n) | (this.high >>> i)), ((this.high << n) | (this.low >>> i)), this.unsigned);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=113B file=valdi_core/src/Long
// locals: this
// closure: r
function {
  this = this;
  if (!(this.unsigned)) goto L_6f;
  return r(this.low, this.high, false);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=113B file=valdi_core/src/Long
// locals: this
// closure: r
function {
  this = this;
  if (!(this.unsigned)) goto L_28;
  return this;
  return r(this.low, this.high, true);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=81B file=valdi_core/src/Long
// args: i
// locals: this
function {
  this = this;
  if (!(i)) goto L_2b;
  return this.toBytesLE();
  return this.toBytesBE();
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=126B file=valdi_core/src/Long
// locals: i, t, this
function {
  this = this;
  i = this.high;
  t = this.low;
  return [(255 & t), ((t >>> 8) & 255), ((t >>> 16) & 255), (t >>> 24), (255 & i), ((i >>> 8) & 255), ((i >>> 16) & 255), (i >>> 24)];
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=126B file=valdi_core/src/Long
// locals: i, t, this
function {
  this = this;
  i = this.high;
  t = this.low;
  return [(i >>> 24), ((i >>> 16) & 255), ((i >>> 8) & 255), (255 & i), (t >>> 24), ((t >>> 16) & 255), ((t >>> 8) & 255), (255 & t)];
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=83B file=valdi_core/src/Long
// args: t, n, h
// closure: i
function {
  if (!(h)) goto L_2b;
  return i.fromBytesLE(t, n);
  return i.fromBytesBE(t, n);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=55B file=valdi_core/src/Long
// args: t, n
// closure: i
function {
  return new i((((t[0] | (t[1] << 8)) | (t[2] << 16)) | (t[3] << 24)), (((t[4] | (t[5] << 8)) | (t[6] << 16)) | (t[7] << 24)), n);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=55B file=valdi_core/src/Long
// args: t, n
// closure: i
function {
  return new i(((((t[4] << 24) | (t[5] << 16)) | (t[6] << 8)) | t[7]), ((((t[0] << 24) | (t[1] << 16)) | (t[2] << 8)) | t[3]), n);
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=51 bc=2171B file=valdi_core/src/Long
// args: require, module, exports
// locals: i, t, n, h, s, e, r, u, o, g, f, l, a, d, c, w, v, m, N, E, q, y, p, b, B
function {
  i = function i;
  t = function t;
  s = function s;
  e = function e;
  r = function r;
  o = function o;
  g = function g;
  if (!(module)) goto L_28;
  module.sourceMapLineOffset = 1;
  module.exports = i;
  i.prototype.__isLong__;
  Object.defineProperty(i.prototype, "__isLong__", {value: true});
  i.isLong = t;
  n = {};
  h = {};
  i.fromInt = s;
  i.fromNumber = e;
  i.fromBits = r;
  u = Math.pow;
  i.fromString = o;
  i.fromValue = g;
  f = 65536;
  l = (1 << 24);
  a = (f * f);
  d = ((f * f) * a);
  c = (((f * f) * a) / 2);
  w = s(l);
  v = s(0);
  i.ZERO = v;
  m = s(0, true);
  i.UZERO = m;
  N = s(1);
  i.ONE = N;
  E = s(1, true);
  i.UONE = E;
  q = s(-1);
  i.NEG_ONE = q;
  y = r(-1, 2147483647, false);
  i.MAX_VALUE = y;
  p = r(-1, -1, true);
  i.MAX_UNSIGNED_VALUE = p;
  b = r(0, -2147483648.0, false);
  i.MIN_VALUE = b;
  B = i.prototype;
  i.prototype.toInt = function <atom:0>;
  B.toNumber = function <atom:0>;
  B.toString = function <atom:0>;
  B.getHighBits = function <atom:0>;
  B.getHighBitsUnsigned = function <atom:0>;
  B.getLowBits = function <atom:0>;
  B.getLowBitsUnsigned = function <atom:0>;
  B.getNumBitsAbs = function <atom:0>;
  B.isZero = function <atom:0>;
  B.eqz = B.isZero;
  B.isNegative = function <atom:0>;
  B.isPositive = function <atom:0>;
  B.isOdd = function <atom:0>;
  B.isEven = function <atom:0>;
  B.equals = function <atom:0>;
  B.eq = B.equals;
  B.notEquals = function <atom:0>;
  B.neq = B.notEquals;
  B.ne = B.notEquals;
  B.lessThan = function <atom:0>;
  B.lt = B.lessThan;
  B.lessThanOrEqual = function <atom:0>;
  B.lte = B.lessThanOrEqual;
  B.le = B.lessThanOrEqual;
  B.greaterThan = function <atom:0>;
  B.gt = B.greaterThan;
  B.greaterThanOrEqual = function <atom:0>;
  B.gte = B.greaterThanOrEqual;
  B.ge = B.greaterThanOrEqual;
  B.compare = function <atom:0>;
  B.comp = B.compare;
  B.negate = function <atom:0>;
  B.neg = B.negate;
  B.add = function <atom:0>;
  B.subtract = function <atom:0>;
  B.sub = B.subtract;
  B.multiply = function <atom:0>;
  B.mul = B.multiply;
  B.divide = function <atom:0>;
  B.div = B.divide;
  B.modulo = function <atom:0>;
  B.mod = B.modulo;
  B.rem = B.modulo;
  B.not = function <atom:0>;
  B.and = function <atom:0>;
  B.or = function <atom:0>;
  B.xor = function <atom:0>;
  B.shiftLeft = function <atom:0>;
  B.shl = B.shiftLeft;
  B.shiftRight = function <atom:0>;
  B.shr = B.shiftRight;
  B.shiftRightUnsigned = function <atom:0>;
  B.shru = B.shiftRightUnsigned;
  B.shr_u = B.shiftRightUnsigned;
  B.rotateLeft = function <atom:0>;
  B.rotl = B.rotateLeft;
  B.rotateRight = function <atom:0>;
  B.rotr = B.rotateRight;
  B.toSigned = function <atom:0>;
  B.toUnsigned = function <atom:0>;
  B.toBytes = function <atom:0>;
  B.toBytesLE = function <atom:0>;
  B.toBytesBE = function <atom:0>;
  i.fromBytes = function <atom:0>;
  i.fromBytesLE = function <atom:0>;
  i.fromBytesBE = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/Long
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
