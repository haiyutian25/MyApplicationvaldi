// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=45B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, n, u
// closure: t
function {
  if (!((n in e))) goto L_26;
  return t(e, n, {enumerable: true, configurable: true, writable: true, value: u});
  e[n] = u;
  return u;
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=0 bc=136B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
// closure: a, c, o, l
function {
  if ((t)) goto L_7;
  t = {};
  for (const n of {}) {
    if (!(a.call(t, n))) goto L_3d;
    c(e, n, t[n]);
  }
  <catch>;
  if (!(o)) goto L_86;
  for (const n of o(t)) {
    if (!(l.call(t, n))) goto L_7f;
    c(e, n, t[n]);
    // [栈深重同步 3 -> 5]
  }
  return e;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=8B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: n, r
function {
  return n(e, r(t));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=91B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: t, e, i
function {
  if ((t)) goto L_37;
  t = {exports: {}};
  e[i(e)[0]]({exports: {}}.exports, t);
  return t.exports;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=1 bc=3B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: i
function {
  return function <atom:0>;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=31B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, n
// locals: u
// closure: t
function {
  for (const u of n) {
    t(e, u, {get: n[u], enumerable: true});
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: n, s
function {
  return n[s];
}

// fn <atom:0>  args=4 vars=5 closure=4 cpool=1 bc=186B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, n, r, o
// locals: s
// closure: i, a, t, u
function {
  if (!(n)) goto L_d;
  if ((("object" == typeof n))) goto L_19;
  if (!(("function" == typeof n))) goto L_b8;
  let s;
  // close_loc s
  for (const s of i(n)) {
    if ((a.call(e, s))) goto L_a8;
    if (((s === r))) goto L_a8;
    o = u(n, s);
    if ((!u(n, s))) goto L_a2;
    t(e, s, {get: function <atom:0>, enumerable: o.enumerable});
    // close_loc s
  }
  // close_loc s
  return e;
}

// fn <atom:0>  args=3 vars=3 closure=4 cpool=0 bc=87B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n, u, r
// closure: e, s, p, t
function {
  if (!((null != n))) goto L_c;
  goto L_d;
  // [栈深重同步 1 -> 0]
  r = {};
  if (!(!u)) goto L_3d;
  if (!(n)) goto L_3d;
  if (!(n.__esModule)) goto L_3d;
  goto L_53;
  // [栈深重同步 2 -> 1]
  return p(t(r, "default", {value: n, enumerable: true}), n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=21B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: p, t
function {
  return p(t({}, "__esModule", {value: true}), e);   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=22B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: c
function {
  if (!(("symbol" != typeof t))) goto L_11;
  goto L_12;
  // [栈深重同步 3 -> 2]
  return c(e, t, n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=135B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: u
function {
  if (!(("function" == typeof Array.isArray))) goto L_5a;
  return Array.isArray(e);
  return ("[object Array]" === u.call(e));
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=425B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, r, i
// closure: u, n
function {
  if ((!e)) goto L_32;
  if (!(("[object Object]" !== u.call(e)))) goto L_37;
  return false;
  r = n.call(e, "constructor");
  if (!(e.constructor)) goto L_140;
  if (!(e.constructor.prototype)) goto L_140;
  i = n.call(e.constructor.prototype, "isPrototypeOf");
  if (!(e.constructor)) goto L_170;
  if (!(!r)) goto L_170;
  if (!(!i)) goto L_170;
  return false;
  for (const t of e) {
  }
  <catch>;
  if (((undefined === t))) goto L_1a8;
  return n.call(e, t);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=221B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: r
function {
  if (!(r)) goto L_94;
  if (!(("__proto__" === t.name))) goto L_94;
  goto L_dc;
  // [栈深重同步 1 -> 0]
  e[t.name] = t.newValue;
  t.newValue;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=97B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: n, i
function {
  if (!(("__proto__" === t))) goto L_5d;
  if (!(!n.call(e, t))) goto L_34;
  return;
  if (!(i)) goto L_5d;
  return i(e, t).value;
  return e[t];
}

// fn e  args=0 vars=12 closure=4 cpool=0 bc=272B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: t, n, u, r, i, c, D, f, h, d, arguments, e
// closure: l, s, o, a
function {
  arguments = <special_object 0>;
  e = <special_object 2>;
  D = arguments[0];
  f = 1;
  h = arguments.length;
  d = false;
  if (!(("boolean" == typeof D))) goto L_39;
  d = D;
  if ((arguments[1])) goto L_34;
  D = {};
  f = 2;
  2;
  if (((null == D))) goto L_58;
  if (!(("object" != typeof D))) goto L_58;
  if (!(("function" != typeof D))) goto L_5f;
  D = {};
  {};
  if (!((f < h))) goto L_10d;
  t = arguments[f];
  if (!((null != arguments[f]))) goto L_108;
  for (const n of t) {
    u = l(D, n);
    r = l(t, n);
    if (!((D !== l(t, n)))) goto L_ff;
    if (!(d)) goto L_e7;
    if (!(r)) goto L_e7;
    if ((s(r))) goto L_a2;
    i = o(r);
    if (!(o(r))) goto L_e7;
    if (!(i)) goto L_be;
    i = false;
    if (!(u)) goto L_b7;
    if (!(o(u))) goto L_b7;
    goto L_ba;
    // [栈深重同步 4 -> 3]
    c = [];
    goto L_cc;
    // [栈深重同步 4 -> 3]
    if (!(u)) goto L_c9;
    if (!(s(u))) goto L_c9;
    goto L_ca;
    // [栈深重同步 4 -> 3]
    c = {};
    {};
    goto L_ff;
    // [栈深重同步 4 -> 3]
    if (!((undefined !== r))) goto L_ff;
    a(D, {name: n, newValue: r});
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  goto L_60;
  return D;
}

// fn <atom:0>  args=2 vars=10 closure=0 cpool=5 bc=271B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s, a, l
function {
  n = Object.prototype.hasOwnProperty;
  u = Object.prototype.toString;
  r = Object.defineProperty;
  i = Object.getOwnPropertyDescriptor;
  o = function <atom:0>;
  s = function <atom:0>;
  a = function <atom:0>;
  l = function <atom:0>;
  t.exports = function e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: Ul
function {
  return Ul;
}

// fn x  args=2 vars=3 closure=2 cpool=0 bc=181B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
// closure: A, k
function {
  let n;
  if ((t)) goto L_9;
  n = A;
  if ((("boolean" != typeof n.includeImageAlt))) goto L_5f;
  if ((("boolean" != typeof n.includeHtml))) goto L_b2;
  return k(e, n.includeImageAlt, n.includeHtml);   // tail call
}

// fn k  args=3 vars=3 closure=2 cpool=0 bc=285B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: y, v
function {
  if (!(y(e))) goto L_e9;
  if (!(("value" in e))) goto L_65;
  if ((("html" !== e.type))) goto L_3e;
  if (!(n)) goto L_63;
  return e.value;
  return "";
  if (!(t)) goto L_b8;
  if (!(("alt" in e))) goto L_b8;
  if (!(e.alt)) goto L_b8;
  return e.alt;
  if (!(("children" in e))) goto L_e9;
  return v(e.children, t, n);   // tail call
  if (!(Array.isArray(e))) goto L_11b;
  return v(e, t, n);
  return "";
}

// fn v  args=3 vars=5 closure=1 cpool=0 bc=84B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r
// closure: k
function {
  let r;
  let u;
  u = [];
  r = -1;
  r = (r ++);
  if (!(((r ++) < e.length))) goto L_2c;
  u[r] = k(e[r], t, n);
  goto L_c;
  return u.join("");   // tail call
}

// fn y  args=1 vars=1 closure=0 cpool=0 bc=21B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!(e)) goto L_12;
  return Boolean(("object" == typeof e));   // tail call
}

// fn w  args=1 vars=1 closure=2 cpool=0 bc=49B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: B, b
function {
  if (!(!!B.call(b, e))) goto L_30;
  return b[e];
}

// fn S  args=4 vars=7 closure=0 cpool=0 bc=432B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o
function {
  let o;
  let i;
  let r;
  r = e.length;
  i = undefined;
  o = 0;
  if (!((t < 0))) goto L_27;
  if (!((-t > r))) goto L_20;
  goto L_34;
  // [栈深重同步 1 -> 0]
  goto L_34;
  // [栈深重同步 1 -> 0]
  if (!((t > r))) goto L_33;
  goto L_34;
  // [栈深重同步 1 -> 0]
  t = t;
  if (!((n > 0))) goto L_3d;
  goto L_3e;
  // [栈深重同步 1 -> 0]
  n = 0;
  if (!((u.length < 10000))) goto L_d4;
  i = Array.from(u);
  Array.from(u);
  i.unshift(t, n);
  // append([], 0, i)
  i;
  e.splice.apply(e, []);
  return;
  if (!(n)) goto L_100;
  e.splice(t, n);
  if (!((o < u.length))) goto L_1af;
  i = u.slice(o, (o + 10000));
  u.slice(o, (o + 10000));
  i.unshift(t, 0);
  // append([], 0, i)
  i;
  e.splice.apply(e, []);
  o = (o + 10000);
  (o + 10000);
  t = (t + 10000);
  goto L_101;
  return;
}

// fn T  args=2 vars=2 closure=1 cpool=0 bc=20B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: S
function {
  if (!((e.length > 0))) goto L_12;
  S(e, e.length, 0, t);
  return e;
  return t;
}

// fn q  args=1 vars=3 closure=1 cpool=0 bc=40B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n
// closure: M
function {
  let n;
  let t;
  t = {};
  n = -1;
  n = (n ++);
  if (!(((n ++) < e.length))) goto L_24;
  M(t, e[n]);
  goto L_a;
  return t;
}

// fn M  args=2 vars=7 closure=2 cpool=0 bc=277B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, e#1
// closure: I, O
function {
  let n;
  n = undefined;
  for (const n of t) {
    let i;
    let r;
    let u;
    if (!(I.call(e, n))) goto L_48;
    goto L_49;
    // [栈深重同步 4 -> 3]
    if ((undefined)) goto L_55;
    e[n] = {};
    u = {};
    r = t[n];
    i = undefined;
    if (!(r)) continue;
    for (const i of r) {
      let e#1;
      if ((I.call(u, i))) goto L_ae;
      u[i] = [];
      [];
      e#1 = r[i];
      if (!(Array.isArray(e#1))) goto L_f3;
      goto L_103;
      // [栈深重同步 6 -> 5]
      if (!(e#1)) goto L_100;
      goto L_103;
      // [栈深重同步 6 -> 5]
      O(u[i], []);
      // [栈深重同步 3 -> 6]
    }
    <?>;
    // [栈深重同步 5 -> 3]
  }
  return;
}

// fn O  args=2 vars=4 closure=1 cpool=0 bc=132B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u
// closure: S
function {
  let u;
  let n;
  n = -1;
  u = [];
  n = (n ++);
  if (!(((n ++) < t.length))) goto L_79;
  if (!(("after" === t[n].add))) goto L_4a;
  goto L_4d;
  // [栈深重同步 1 -> 0]
  u.push(t[n]);
  goto L_c;
  S(e, 0, 0, u);
  return;
}

// fn z  args=2 vars=3 closure=0 cpool=0 bc=262B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
function {
  let n;
  n = Number.parseInt(e, t);
  if (((n < 9))) goto L_d1;
  if (((11 === n))) goto L_d1;
  if (!((n > 13))) goto L_59;
  if (((n < 32))) goto L_d1;
  if (!((n > 126))) goto L_6e;
  if (((n < 160))) goto L_d1;
  if (!((n > 55295))) goto L_88;
  if (((n < 57344))) goto L_d1;
  if (!((n > 64975))) goto L_a2;
  if (((n < 65008))) goto L_d1;
  if ((!(65535 & ~n))) goto L_d1;
  if (((65534 == (65535 & n)))) goto L_d1;
  if (!((n > 1114111))) goto L_d9;
  return "�";
  return String.fromCodePoint(n);
}

// fn L  args=1 vars=1 closure=0 cpool=4 bc=161B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.replace(new RegExp("[\\t\\n\\r ]+"), " ").replace(new RegExp("^ | $"), "").toLowerCase().toUpperCase();   // tail call
}

// fn P  args=1 vars=1 closure=0 cpool=0 bc=20B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!((null !== e))) goto L_13;
  if (((e < 32))) goto L_13;
  return (127 === e);
}

// fn H  args=1 vars=1 closure=0 cpool=0 bc=12B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!((null !== e))) goto L_b;
  return (e < -2);
}

// fn $  args=1 vars=1 closure=0 cpool=0 bc=19B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!((null !== e))) goto L_12;
  if (((e < 0))) goto L_12;
  return (32 === e);
}

// fn J  args=1 vars=1 closure=0 cpool=0 bc=20B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (((-2 === e))) goto L_13;
  if (((-1 === e))) goto L_13;
  return (32 === e);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=94B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e
function {
  if (!((null !== t))) goto L_5d;
  if (!((t > -1))) goto L_5d;
  return e.test(String.fromCharCode(t));
}

// fn Q  args=1 vars=1 closure=0 cpool=1 bc=3B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=56B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: J, e, n, o, t
function {
  if (!(J(u))) goto L_31;
  e.enter(n);
  return o(u);   // tail call
  return t(u);   // tail call
}

// fn o  args=1 vars=1 closure=7 cpool=0 bc=108B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: J, i, r, e, o, n, t
function {
  if (!(J(u))) goto L_3d;
  i = <i_new>;
  if (!(((i++) < r))) goto L_3d;
  e.consume(u);
  return o;
  e.exit(n);
  return t(u);
}

// fn Z  args=4 vars=7 closure=1 cpool=2 bc=61B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o
// closure: J
function {
  o = function o;
  let i;
  let r;
  if (!(u)) goto L_11;
  goto L_37;
  // [栈深重同步 1 -> 0]
  r = Number.POSITIVE_INFINITY;
  i = 0;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=183B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, Z, t
function {
  if (!((null === n))) goto L_2d;
  e.consume(n);
  return;
  e.enter("lineEnding");
  e.consume(n);
  e.exit("lineEnding");
  return Z(e, t, "linePrefix");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=48B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, u
function {
  e.enter("paragraph");
  return u(t);   // tail call
}

// fn u  args=1 vars=2 closure=3 cpool=0 bc=102B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: u
// closure: e, n, r
function {
  let u;
  u = e.enter("chunkText", {contentType: "text", previous: n});
  if (!(n)) goto L_58;
  n.next = u;
  u;
  n = u;
  u;
  return r(t);   // tail call
}

// fn r  args=1 vars=1 closure=4 cpool=0 bc=265B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, H, u, r
function {
  if (!((null === t))) goto L_87;
  e.exit("chunkText");
  e.exit("paragraph");
  e.consume(t);
  return undefined;
  if (!(H(t))) goto L_e0;
  e.consume(t);
  e.exit("chunkText");
  return u;
  e.consume(t);
  return r;
}

// fn K  args=1 vars=6 closure=2 cpool=4 bc=164B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r, this
// closure: Z, H
function {
  this = this;
  u = function u;
  r = function r;
  let n;
  let t;
  t = e.attempt(this.parser.constructs.contentInitial, function <atom:0>, function <atom:0>);
  n = undefined;
  return t;
}

// fn s  args=1 vars=2 closure=6 cpool=0 bc=130B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// locals: r
// closure: o, n, t, e, a, l
function {
  if (!((o < n.length))) goto L_7b;
  let r;
  r = n[o];
  t.containerState = r[1];
  return e.attempt(r[0].continuation, a, l)(u);   // tail call
  return l(u);   // tail call
}

// fn a  args=1 vars=5 closure=9 cpool=0 bc=734B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: n, r, i, s
// closure: o, t, u, E, g, D, S, l, s
function {
  o = <o_new>;
  (o++);
  if (!(t.containerState._closeFlow)) goto L_2d7;
  let s;
  let i;
  let r;
  let n;
  t.containerState._closeFlow = undefined;
  if (!(u)) goto L_95;
  E();
  n = t.events.length;
  r = undefined;
  i = n;
  i = <i_new>;
  if (!((i--))) goto L_1a8;
  if (!(("exit" === t.events[i][0]))) goto L_c2;
  if (!(("chunkFlow" === t.events[i][1].type))) goto L_c2;
  r = t.events[i][1].end;
  t.events[i][1].end;
  goto L_1a8;
  g(o);
  s = n;
  if (!((s < t.events.length))) goto L_224;
  t.events[s][1].end = D({}, r);
  s = <s_new>;
  (s++);
  goto L_1b4;
  S(t.events, (i + 1), 0, t.events.slice(n));
  t.events.length = s;
  return l(e);   // tail call
  return s(e);   // tail call
}

// fn l  args=1 vars=1 closure=10 cpool=0 bc=300B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: r
// closure: o, n, u, h, p, t, e, ee, c, f
function {
  if (!((o === n.length))) goto L_eb;
  if (!(!u)) goto L_18;
  return h(r);   // tail call
  if (!(u.currentConstruct)) goto L_8c;
  if (!(u.currentConstruct.concrete)) goto L_8c;
  return p(r);   // tail call
  if (!(u.currentConstruct)) goto L_e1;
  t.interrupt = Boolean(!u._gfmTableDynamicInterruptHack);
  t.containerState = {};
  return e.check(ee, c, f)(r);   // tail call
}

// fn c  args=1 vars=1 closure=5 cpool=0 bc=23B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: u, E, g, o, h
function {
  if (!(u)) goto L_9;
  E();
  g(o);
  return h(e);   // tail call
}

// fn f  args=1 vars=1 closure=5 cpool=0 bc=235B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: t, o, n, i, p
function {
  t.parser.lazy[t.now().line] = (o !== n.length);
  i = t.now().offset;
  t.now().offset;
  return p(e);   // tail call
}

// fn h  args=1 vars=1 closure=5 cpool=0 bc=59B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: t, e, ee, d, p
function {
  t.containerState = {};
  return e.attempt(ee, d, p)(n);   // tail call
}

// fn d  args=1 vars=1 closure=4 cpool=0 bc=128B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: o, n, t, h
function {
  o = <o_new>;
  (o++);
  n.push([t.currentConstruct, t.containerState]);
  return h(e);   // tail call
}

// fn p  args=1 vars=1 closure=7 cpool=0 bc=259B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: u, E, g, e, t, r, F
function {
  if (!((null === n))) goto L_3c;
  if (!(u)) goto L_e;
  E();
  g(0);
  e.consume(n);
  return undefined;
  if ((u)) goto L_b2;
  u = t.parser.flow(t.now());
  t.parser.flow(t.now());
  e.enter("chunkFlow", {_tokenizer: u, contentType: "flow", previous: r});
  return F(n);
}

// fn F  args=1 vars=1 closure=8 cpool=0 bc=252B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: m, e, g, H, o, t, s, F
function {
  if (!((null === n))) goto L_61;
  m(e.exit("chunkFlow"), true);
  g(0);
  e.consume(n);
  return undefined;
  if (!(H(n))) goto L_d1;
  e.consume(n);
  m(e.exit("chunkFlow"));
  o = 0;
  0;
  t.interrupt = undefined;
  return s;
  e.consume(n);
  return F;
}

// fn m  args=2 vars=8 closure=8 cpool=0 bc=1361B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, n
// locals: s, e#1, n#1, r, s#1, a
// closure: t, r, u, i, g, o, D, S
function {
  let s;
  s = t.sliceStream(e);
  if (!(n)) goto L_59;
  s.push(null);
  e.previous = r;
  if (!(r)) goto L_7c;
  r.next = e;
  e;
  r = e;
  e;
  u.defineSkip(e.start);
  u.write(s);
  if (!(t.parser.lazy[e.start.line])) goto L_550;
  let a;
  let s#1;
  let r;
  let n#1;
  let e#1;
  e#1 = u.events.length;
  e#1 = <e#1_new>;
  if (!((e#1--))) goto L_2ff;
  if (!((u.events[e#1][1].start.offset < i))) goto L_1bb;
  if ((!u.events[e#1][1].end)) goto L_2f9;
  if (!((u.events[e#1][1].end.offset > i))) goto L_1bb;
  return;
  n#1 = t.events.length;
  r = undefined;
  s#1 = undefined;
  a = n#1;
  a = <a_new>;
  if (!((a--))) goto L_424;
  if (!(("exit" === t.events[a][0]))) goto L_32f;
  if (!(("chunkFlow" === t.events[a][1].type))) goto L_32f;
  if (!(r)) goto L_41a;
  s#1 = t.events[a][1].end;
  t.events[a][1].end;
  goto L_424;
  r = true;
  true;
  goto L_32f;
  g(o);
  e#1 = n#1;
  n#1;
  if (!((e#1 < t.events.length))) goto L_4a4;
  t.events[e#1][1].end = D({}, s#1);
  e#1 = <e#1_new>;
  (e#1++);
  goto L_434;
  S(t.events, (a + 1), 0, t.events.slice(n#1));
  t.events.length = e#1;
  return;
}

// fn g  args=1 vars=3 closure=3 cpool=0 bc=142B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// locals: r, u#1
// closure: n, t, e
function {
  let r;
  r = n.length;
  r = <r_new>;
  if (!(((r--) > u))) goto L_80;
  let u#1;
  u#1 = n[r];
  t.containerState = u#1[1];
  u#1[0].exit.call(t, e);
  goto L_8;
  n.length = u;
  return;
}

// fn E  args=0 vars=0 closure=3 cpool=0 bc=103B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: u, r, t
function {
  u.write([null]);
  r = undefined;
  undefined;
  u = undefined;
  undefined;
  t.containerState._closeFlow = undefined;
  return;
}

// fn te  args=1 vars=20 closure=4 cpool=12 bc=89B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r, i, o, s, a, l, c, f, h, d, p, F, m, g, E, this
// closure: D, S, ee, H
function {
  this = this;
  s = function s;
  a = function a;
  l = function l;
  c = function c;
  f = function f;
  h = function h;
  d = function d;
  p = function p;
  F = function F;
  m = function m;
  g = function g;
  E = function E;
  let o;
  let i;
  let r;
  let u;
  let n;
  let t;
  t = this;
  n = [];
  u = undefined;
  r = undefined;
  i = undefined;
  o = 0;
  return s;
}

// fn ne  args=3 vars=4 closure=1 cpool=0 bc=331B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: this
// closure: Z
function {
  this = this;
  if (!(this.parser.constructs.disable.null.includes("codeIndented"))) goto L_147;
  goto L_148;
  // [栈深重同步 5 -> 4]
  return Z(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", 4);   // tail call
}

// fn ue  args=1 vars=1 closure=3 cpool=0 bc=30B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: $, W, G
function {
  if (((null === e))) goto L_11;
  if (($(e))) goto L_11;
  if (!(W(e))) goto L_15;
  return 1;
  if (!(G(e))) goto L_1c;
  return 2;
  return undefined;
}

// fn re  args=3 vars=6 closure=0 cpool=0 bc=179B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i
function {
  let r;
  let u;
  u = [];
  r = -1;
  r = (r ++);
  if (!(((r ++) < e.length))) goto L_b1;
  let i;
  i = e[r].resolveAll;
  if (!(i)) goto L_ad;
  if (!(!u.includes(i))) goto L_ad;
  t = i(t, n);
  u.push(i);
  goto L_c;
  return t;
}

// fn oe  args=2 vars=13 closure=5 cpool=0 bc=2832B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s, a, l, c, f, h
// closure: D, ae, T, re, S
function {
  let c;
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  let u;
  let n;
  n = undefined;
  u = undefined;
  r = undefined;
  i = undefined;
  o = undefined;
  s = undefined;
  a = undefined;
  l = undefined;
  c = -1;
  c = (c ++);
  if (!(((c ++) < e.length))) goto L_ab0;
  if (!(("enter" === e[c][0]))) goto L_32;
  if (!(("attentionSequence" === e[c][1].type))) goto L_32;
  if (!(e[c][1]._close)) goto L_32;
  n = c;
  c;
  n = <n_new>;
  if (!((n--))) goto L_32;
  if (!(("exit" === e[n][0]))) goto L_b3;
  if (!(("attentionSequence" === e[n][1].type))) goto L_b3;
  if (!(e[n][1]._open)) goto L_b3;
  if (!((t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[c][1]).charCodeAt(0)))) goto L_b3;
  let h;
  let f;
  if ((e[n][1]._close)) goto L_22a;
  if (!(e[c][1]._open)) goto L_3f8;
  if (!(((e[c][1].end.offset - e[c][1].start.offset) % 3))) goto L_3f8;
  if ((!((((e[n][1].end.offset - e[n][1].start.offset) + e[c][1].end.offset) - e[c][1].start.offset) % 3))) goto L_b3;
  if (!(((e[n][1].end.offset - e[n][1].start.offset) > 1))) goto L_52c;
  if (!(((e[c][1].end.offset - e[c][1].start.offset) > 1))) goto L_52c;
  goto L_52d;
  // [栈深重同步 1 -> 0]
  s = 1;
  1;
  f = D({}, e[n][1].end);
  h = D({}, e[c][1].start);
  ae(f, -s);
  ae(h, s);
  if (!((s > 1))) goto L_5ae;
  goto L_5b3;
  // [栈深重同步 2 -> 1]
  i = {type: "emphasisSequence", start: f, end: D({}, e[n][1].end)};
  {type: "emphasisSequence", start: f, end: D({}, e[n][1].end)};
  if (!((s > 1))) goto L_604;
  goto L_609;
  // [栈深重同步 2 -> 1]
  o = {type: "emphasisSequence", start: D({}, e[c][1].start), end: h};
  {type: "emphasisSequence", start: D({}, e[c][1].start), end: h};
  if (!((s > 1))) goto L_65a;
  goto L_65f;
  // [栈深重同步 2 -> 1]
  r = {type: "emphasisText", start: D({}, e[n][1].end), end: D({}, e[c][1].start)};
  {type: "emphasisText", start: D({}, e[n][1].end), end: D({}, e[c][1].start)};
  if (!((s > 1))) goto L_6d8;
  goto L_6dd;
  // [栈深重同步 2 -> 1]
  u = {type: "emphasis", start: D({}, i.start), end: D({}, o.end)};
  {type: "emphasis", start: D({}, i.start), end: D({}, o.end)};
  e[n][1].end = D({}, i.start);
  e[c][1].start = D({}, o.end);
  a = [];
  [];
  if (!((e[n][1].end.offset - e[n][1].start.offset))) goto L_878;
  a = T(a, [["enter", e[n][1], t], ["exit", e[n][1], t]]);
  T(a, [["enter", e[n][1], t], ["exit", e[n][1], t]]);
  a = T(a, [["enter", u, t], ["enter", i, t], ["exit", i, t], ["enter", r, t]]);
  T(a, [["enter", u, t], ["enter", i, t], ["exit", i, t], ["enter", r, t]]);
  a = T(a, re(t.parser.constructs.insideSpan.null, e.slice((n + 1), c), t));
  T(a, re(t.parser.constructs.insideSpan.null, e.slice((n + 1), c), t));
  a = T(a, [["exit", r, t], ["enter", o, t], ["exit", o, t], ["exit", u, t]]);
  T(a, [["exit", r, t], ["enter", o, t], ["exit", o, t], ["exit", u, t]]);
  if (!((e[c][1].end.offset - e[c][1].start.offset))) goto L_a7b;
  l = 2;
  2;
  a = T(a, [["enter", e[c][1], t], ["exit", e[c][1], t]]);
  goto L_a80;
  // [栈深重同步 1 -> 0]
  l = 0;
  0;
  S(e, (n - 1), ((c - n) + 3), a);
  c = (((n + a.length) - l) - 2);
  (((n + a.length) - l) - 2);
  goto L_32;
  c = -1;
  -1;
  c = (c ++);
  if (!(((c ++) < e.length))) goto L_b0e;
  if (!(("attentionSequence" === e[c][1].type))) goto L_b0b;
  e[c][1].type = "data";
  "data";
  goto L_ab6;
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=54B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: i, e, o
function {
  i = t;
  t;
  e.enter("attentionSequence");
  return o(t);   // tail call
}

// fn o  args=1 vars=5 closure=8 cpool=0 bc=344B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: s
// locals: a, l, c, D
// closure: i, e, o, ue, r, n, u, t
function {
  let D;
  let c;
  let l;
  let a;
  if (!((s === i))) goto L_3c;
  e.consume(s);
  return o;
  a = e.exit("attentionSequence");
  l = ue(s);
  if ((!l)) goto L_ab;
  if (!((2 === l))) goto L_7f;
  if ((r)) goto L_ab;
  c = n.includes(s);
  if ((!r)) goto L_ee;
  if (!((2 === r))) goto L_c0;
  if ((l)) goto L_ee;
  D = n.includes(u);
  if (!((42 === i))) goto L_104;
  goto L_116;
  // [栈深重同步 3 -> 2]
  if (!(c)) goto L_116;
  if ((r)) goto L_116;
  a._open = Boolean(!D);
  if (!((42 === i))) goto L_135;
  goto L_147;
  // [栈深重同步 3 -> 2]
  if (!(D)) goto L_147;
  if ((l)) goto L_147;
  a._close = Boolean(!c);
  return t(s);   // tail call
}

// fn se  args=2 vars=8 closure=1 cpool=2 bc=201B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, this
// closure: ue
function {
  this = this;
  o = function o;
  let i;
  let r;
  let u;
  let n;
  n = this.parser.constructs.attentionMarkers.null;
  u = this.previous;
  r = ue(u);
  i = undefined;
  return function <atom:0>;
}

// fn ae  args=2 vars=2 closure=0 cpool=0 bc=136B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  e.column = (e.column + t);
  e.offset = (e.offset + t);
  e._bufferIndex = (e._bufferIndex + t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=213B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, r
function {
  e.enter("autolink");
  e.enter("autolinkMarker");
  e.consume(t);
  e.exit("autolinkMarker");
  e.enter("autolinkProtocol");
  return r;
}

// fn r  args=1 vars=1 closure=5 cpool=0 bc=62B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: R, e, i, n, a
function {
  if (!(R(t))) goto L_2e;
  e.consume(t);
  return i;
  if (!((64 === t))) goto L_38;
  return n(t);
  return a(t);
}

// fn i  args=1 vars=1 closure=4 cpool=0 bc=43B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: _, u, o, a
function {
  if (((43 === e))) goto L_1b;
  if (((45 === e))) goto L_1b;
  if (((46 === e))) goto L_1b;
  if (!(_(e))) goto L_27;
  u = 1;
  1;
  return o(e);
  return a(e);
}

// fn o  args=1 vars=1 closure=6 cpool=0 bc=149B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, u, s, _, o, a
function {
  if (!((58 === t))) goto L_35;
  e.consume(t);
  u = 0;
  0;
  return s;
  if (((43 === t))) goto L_50;
  if (((45 === t))) goto L_50;
  if (((46 === t))) goto L_50;
  if (!(_(t))) goto L_89;
  u = <u_new>;
  if (!(((u++) < 32))) goto L_89;
  e.consume(t);
  return o;
  u = 0;
  0;
  return a(t);
}

// fn s  args=1 vars=1 closure=5 cpool=0 bc=297B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: e, t, P, n, s
function {
  if (!((62 === u))) goto L_de;
  e.exit("autolinkProtocol");
  e.enter("autolinkMarker");
  e.consume(u);
  e.exit("autolinkMarker");
  e.exit("autolink");
  return t;
  if (((null === u))) goto L_f8;
  if (((32 === u))) goto L_f8;
  if (((60 === u))) goto L_f8;
  if (!(P(u))) goto L_fe;
  return n(u);
  e.consume(u);
  return s;
}

// fn a  args=1 vars=1 closure=5 cpool=0 bc=99B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, l, N, a, n
function {
  if (!((64 === t))) goto L_2f;
  e.consume(t);
  return l;
  if (!(N(t))) goto L_5d;
  e.consume(t);
  return a;
  return n(t);
}

// fn l  args=1 vars=1 closure=3 cpool=0 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: _, c, n
function {
  if (!(_(e))) goto L_9;
  return c(e);
  return n(e);
}

// fn c  args=1 vars=1 closure=5 cpool=0 bc=294B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, u, l, t, D
function {
  if (!((46 === n))) goto L_35;
  e.consume(n);
  u = 0;
  0;
  return l;
  if (!((62 === n))) goto L_120;
  e.exit("autolinkProtocol").type = "autolinkEmail";
  e.enter("autolinkMarker");
  e.consume(n);
  e.exit("autolinkMarker");
  e.exit("autolink");
  return t;
  return D(n);
}

// fn D  args=1 vars=2 closure=6 cpool=0 bc=91B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: n
// closure: _, u, D, c, e, n
function {
  if (((45 === t))) goto L_b;
  if (!(_(t))) goto L_54;
  u = <u_new>;
  if (!(((u++) < 63))) goto L_54;
  let n;
  if (!((45 === t))) goto L_25;
  goto L_26;
  // [栈深重同步 1 -> 0]
  n = c;
  e.consume(t);
  return n;
  return n(t);   // tail call
}

// fn ce  args=3 vars=12 closure=4 cpool=9 bc=37B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, c, D
// closure: R, _, P, N
function {
  r = function r;
  i = function i;
  o = function o;
  s = function s;
  a = function a;
  l = function l;
  c = function c;
  D = function D;
  let u;
  u = 0;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=21B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: J, Z, e, u
function {
  if (!(J(t))) goto L_11;
  return Z(e, u, "linePrefix")(t);
  return u(t);
}

// fn u  args=1 vars=1 closure=3 cpool=0 bc=20B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: H, t, n
function {
  if (((null === e))) goto L_a;
  if (!(H(e))) goto L_10;
  return t(e);
  return n(e);
}

// fn fe  args=3 vars=4 closure=3 cpool=2 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u
// closure: J, Z, H
function {
  u = function u;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=331B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: n
// closure: u, e, r, n
function {
  if (!((62 === t))) goto L_146;
  let n;
  n = u.containerState;
  if ((n.open)) goto L_9b;
  e.enter("blockQuote", {_container: true});
  n.open = true;
  true;
  e.enter("blockQuotePrefix");
  e.enter("blockQuoteMarker");
  e.consume(t);
  e.exit("blockQuoteMarker");
  return r;
  return n(t);   // tail call
}

// fn r  args=1 vars=1 closure=3 cpool=0 bc=225B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: J, e, t
function {
  if (!(J(n))) goto L_b2;
  e.enter("blockQuotePrefixWhitespace");
  e.consume(n);
  e.exit("blockQuotePrefixWhitespace");
  e.exit("blockQuotePrefix");
  return t;
  e.exit("blockQuotePrefix");
  return t(n);
}

// fn de  args=3 vars=6 closure=1 cpool=2 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, this
// closure: J
function {
  this = this;
  r = function r;
  let u;
  u = this;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=210B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: J, Z, e, r, u
function {
  if (!(J(t))) goto L_cd;
  if (!(u.parser.constructs.disable.null.includes("codeIndented"))) goto L_c5;
  goto L_c6;
  // [栈深重同步 5 -> 4]
  return Z(e, r, "linePrefix", 4)(t);   // tail call
  return r(t);   // tail call
}

// fn r  args=1 vars=1 closure=4 cpool=0 bc=44B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: e, he, t, n
function {
  return e.attempt(he, t, n)(u);   // tail call
}

// fn pe  args=3 vars=6 closure=3 cpool=2 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, this
// closure: J, Z, he
function {
  this = this;
  r = function r;
  let u;
  u = this;
  return function <atom:0>;
}

// fn Fe  args=1 vars=1 closure=0 cpool=0 bc=43B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  e.exit("blockQuote");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=170B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, u
function {
  e.enter("characterEscape");
  e.enter("escapeMarker");
  e.consume(t);
  e.exit("escapeMarker");
  return u;
}

// fn u  args=1 vars=1 closure=4 cpool=0 bc=182B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: U, e, t, n
function {
  if (!(U(u))) goto L_b2;
  e.enter("characterEscapeValue");
  e.consume(u);
  e.exit("characterEscapeValue");
  e.exit("characterEscape");
  return t;
  return n(u);
}

// fn ge  args=3 vars=4 closure=1 cpool=2 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u
// closure: U
function {
  u = function u;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=170B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, s
function {
  e.enter("characterReference");
  e.enter("characterReferenceMarker");
  e.consume(t);
  e.exit("characterReferenceMarker");
  return s;
}

// fn s  args=1 vars=1 closure=6 cpool=0 bc=200B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, a, r, i, _, l
function {
  if (!((35 === t))) goto L_88;
  e.enter("characterReferenceMarkerNumeric");
  e.consume(t);
  e.exit("characterReferenceMarkerNumeric");
  return a;
  e.enter("characterReferenceValue");
  r = 31;
  31;
  i = _;
  _;
  return l(t);
}

// fn a  args=1 vars=1 closure=6 cpool=0 bc=264B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, r, i, V, l, j
function {
  if (((88 === t))) goto L_c;
  if (!((120 === t))) goto L_c9;
  e.enter("characterReferenceMarkerHexadecimal");
  e.consume(t);
  e.exit("characterReferenceMarkerHexadecimal");
  e.enter("characterReferenceValue");
  r = 6;
  6;
  i = V;
  V;
  return l;
  e.enter("characterReferenceValue");
  r = 7;
  7;
  i = j;
  j;
  return l(t);
}

// fn l  args=1 vars=2 closure=10 cpool=0 bc=370B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: s
// locals: r
// closure: o, e, i, _, w, u, t, n, r, l
function {
  if (!((59 === s))) goto L_12d;
  if (!(o)) goto L_12d;
  let r;
  r = e.exit("characterReferenceValue");
  if (((i !== _))) goto L_76;
  if (!(w(u.sliceSerialize(r)))) goto L_127;
  e.enter("characterReferenceMarker");
  e.consume(s);
  e.exit("characterReferenceMarker");
  e.exit("characterReference");
  return t;
  return n(s);
  if (!(i(s))) goto L_16c;
  o = <o_new>;
  if (!(((o++) < r))) goto L_16c;
  e.consume(s);
  return l;
  return n(s);
}

// fn Ce  args=3 vars=11 closure=4 cpool=4 bc=39B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, this
// closure: _, V, j, w
function {
  this = this;
  s = function s;
  a = function a;
  l = function l;
  let o;
  let i;
  let r;
  let u;
  u = this;
  r = undefined;
  i = undefined;
  o = 0;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=127B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, o
function {
  e.enter("lineEnding");
  e.consume(t);
  e.exit("lineEnding");
  return o;
}

// fn o  args=1 vars=1 closure=5 cpool=0 bc=251B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, J, Z, a, u
function {
  e.enter("codeFencedFence");
  if (!(J(t))) goto L_f7;
  if (!(u.parser.constructs.disable.null.includes("codeIndented"))) goto L_f0;
  goto L_f1;
  // [栈深重同步 5 -> 4]
  return Z(e, a, "linePrefix", 4)(t);
  return a(t);
}

// fn a  args=1 vars=1 closure=4 cpool=0 bc=58B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: i, e, l, n
function {
  if (!((t === i))) goto L_36;
  e.enter("codeFencedFenceSequence");
  return l(t);
  return n(t);
}

// fn l  args=1 vars=1 closure=9 cpool=0 bc=143B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: i, r, e, l, s, J, Z, c, n
function {
  if (!((t === i))) goto L_38;
  r = <r_new>;
  (r++);
  e.consume(t);
  return l;
  if (!((r >= s))) goto L_89;
  e.exit("codeFencedFenceSequence");
  if (!(J(t))) goto L_83;
  return Z(e, c, "whitespace")(t);
  return c(t);
  return n(t);
}

// fn c  args=1 vars=1 closure=4 cpool=0 bc=63B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: H, e, t, n
function {
  if (((null === u))) goto L_a;
  if (!(H(u))) goto L_3b;
  e.exit("codeFencedFence");
  return t(u);
  return n(u);
}

// fn <atom:0>  args=3 vars=8 closure=6 cpool=5 bc=21B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: r, o, a, l, c
// closure: J, Z, u, i, s, H
function {
  o = function o;
  a = function a;
  l = function l;
  c = function c;
  let r;
  r = 0;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=330B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: n
// closure: u, o, i, e, a
function {
  let n;
  n = u.events[(u.events.length - 1)];
  if (!(n)) goto L_b6;
  if (!(("linePrefix" === n[1].type))) goto L_b6;
  goto L_b7;
  // [栈深重同步 1 -> 0]
  o = 0;
  0;
  i = t;
  t;
  e.enter("codeFenced");
  e.enter("codeFencedFence");
  e.enter("codeFencedFenceSequence");
  return a(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=1 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: u, o, i, e, a
function {
  return function <atom:0>(t);   // tail call
}

// fn a  args=1 vars=1 closure=8 cpool=0 bc=141B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: i, s, e, a, n, J, Z, l
function {
  if (!((t === i))) goto L_38;
  s = <s_new>;
  (s++);
  e.consume(t);
  return a;
  if (!((s < 3))) goto L_45;
  return n(t);
  e.exit("codeFencedFenceSequence");
  if (!(J(t))) goto L_87;
  return Z(e, l, "whitespace")(t);
  return l(t);
}

// fn l  args=1 vars=1 closure=8 cpool=0 bc=252B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: H, e, u, t, Ae, h, g, c
function {
  if (((null === n))) goto L_a;
  if (!(H(n))) goto L_95;
  e.exit("codeFencedFence");
  if (!(u.interrupt)) goto L_64;
  return t(n);
  return e.check(Ae, h, g)(n);
  e.enter("codeFencedFenceInfo");
  e.enter("chunkString", {contentType: "string"});
  return c(n);
}

// fn c  args=1 vars=1 closure=9 cpool=0 bc=271B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: H, e, l, J, Z, D, i, n, c
function {
  if (((null === t))) goto L_a;
  if (!(H(t))) goto L_66;
  e.exit("chunkString");
  e.exit("codeFencedFenceInfo");
  return l(t);
  if (!(J(t))) goto L_d1;
  e.exit("chunkString");
  e.exit("codeFencedFenceInfo");
  return Z(e, D, "whitespace")(t);
  if (!((96 === t))) goto L_e4;
  if (!((t === i))) goto L_e4;
  return n(t);
  e.consume(t);
  return c;
}

// fn D  args=1 vars=1 closure=4 cpool=0 bc=117B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: H, l, e, f
function {
  if (((null === t))) goto L_a;
  if (!(H(t))) goto L_10;
  return l(t);
  e.enter("codeFencedFenceMeta");
  e.enter("chunkString", {contentType: "string"});
  return f(t);
}

// fn f  args=1 vars=1 closure=6 cpool=0 bc=164B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: H, e, l, i, n, f
function {
  if (((null === t))) goto L_a;
  if (!(H(t))) goto L_66;
  e.exit("chunkString");
  e.exit("codeFencedFenceMeta");
  return l(t);
  if (!((96 === t))) goto L_79;
  if (!((t === i))) goto L_79;
  return n(t);
  e.consume(t);
  return f;
}

// fn h  args=1 vars=1 closure=4 cpool=0 bc=46B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, r, g, d
function {
  return e.attempt(r, g, d)(t);   // tail call
}

// fn d  args=1 vars=1 closure=2 cpool=0 bc=127B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, p
function {
  e.enter("lineEnding");
  e.consume(t);
  e.exit("lineEnding");
  return p;
}

// fn p  args=1 vars=1 closure=5 cpool=0 bc=39B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: o, J, Z, e, F
function {
  if (!((o > 0))) goto L_21;
  if (!(J(t))) goto L_21;
  return Z(e, F, "linePrefix", (o + 1))(t);
  return F(t);
}

// fn F  args=1 vars=1 closure=6 cpool=0 bc=106B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: H, e, Ae, h, g, m
function {
  if (((null === t))) goto L_a;
  if (!(H(t))) goto L_39;
  return e.check(Ae, h, g)(t);
  e.enter("codeFlowValue");
  return m(t);
}

// fn m  args=1 vars=1 closure=4 cpool=0 bc=100B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: H, e, F, m
function {
  if (((null === t))) goto L_a;
  if (!(H(t))) goto L_3b;
  e.exit("codeFlowValue");
  return F(t);
  e.consume(t);
  return m;
}

// fn g  args=1 vars=1 closure=2 cpool=0 bc=48B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, t
function {
  e.exit("codeFenced");
  return t(n);   // tail call
}

// fn ke  args=3 vars=20 closure=4 cpool=13 bc=96B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, c, D, f, h, d, p, F, m, g, this
// closure: J, Z, H, Ae
function {
  this = this;
  a = function a;
  l = function l;
  c = function c;
  D = function D;
  f = function f;
  h = function h;
  d = function d;
  p = function p;
  F = function F;
  m = function m;
  g = function g;
  let s;
  let o;
  let i;
  let r;
  let u;
  u = this;
  r = {partial: true, tokenize: function <atom:0>};
  i = undefined;
  o = 0;
  s = 0;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=137B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: n, e, r
function {
  if (!((null === t))) goto L_a;
  return n(t);   // tail call
  e.enter("lineEnding");
  e.consume(t);
  e.exit("lineEnding");
  return r;
}

// fn r  args=1 vars=1 closure=3 cpool=0 bc=152B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: u, n, t
function {
  if (!(u.parser.lazy[u.now().line])) goto L_94;
  return n(e);
  return t(e);
}

// fn ve  args=3 vars=6 closure=0 cpool=2 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, this
function {
  this = this;
  r = function r;
  let u;
  u = this;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=59B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, Z, r
function {
  e.enter("codeIndented");
  return Z(e, r, "linePrefix", 5)(t);   // tail call
}

// fn r  args=1 vars=2 closure=3 cpool=0 bc=192B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
// closure: u, i, n
function {
  let t;
  t = u.events[(u.events.length - 1)];
  if (!(t)) goto L_bc;
  if (!(("linePrefix" === t[1].type))) goto L_bc;
  if (!((t[2].sliceSerialize(t[1], true).length >= 4))) goto L_bc;
  return i(e);
  return n(e);
}

// fn i  args=1 vars=1 closure=6 cpool=0 bc=108B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: s, H, e, be, i, o
function {
  if (!((null === t))) goto L_9;
  return s(t);
  if (!(H(t))) goto L_3b;
  return e.attempt(be, i, s)(t);
  e.enter("codeFlowValue");
  return o(t);
}

// fn o  args=1 vars=1 closure=4 cpool=0 bc=100B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: H, e, i, o
function {
  if (((null === t))) goto L_a;
  if (!(H(t))) goto L_3b;
  e.exit("codeFlowValue");
  return i(t);
  e.consume(t);
  return o;
}

// fn s  args=1 vars=1 closure=2 cpool=0 bc=48B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, t
function {
  e.exit("codeIndented");
  return t(n);   // tail call
}

// fn Be  args=3 vars=9 closure=3 cpool=5 bc=25B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, this
// closure: Z, H, be
function {
  this = this;
  r = function r;
  i = function i;
  o = function o;
  s = function s;
  let u;
  u = this;
  return function <atom:0>;
}

// fn r  args=1 vars=1 closure=7 cpool=0 bc=304B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: u, n, H, e, r, Z, i
function {
  if (!(u.parser.lazy[u.now().line])) goto L_94;
  return n(t);
  if (!(H(t))) goto L_11d;
  e.enter("lineEnding");
  e.consume(t);
  e.exit("lineEnding");
  return r;
  return Z(e, i, "linePrefix", 5)(t);
}

// fn i  args=1 vars=2 closure=5 cpool=0 bc=203B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: i
// closure: u, t, H, r, n
function {
  let i;
  i = u.events[(u.events.length - 1)];
  if (!(i)) goto L_bc;
  if (!(("linePrefix" === i[1].type))) goto L_bc;
  if (!((i[2].sliceSerialize(i[1], true).length >= 4))) goto L_bc;
  return t(e);
  if (!(H(e))) goto L_c5;
  return r(e);
  return n(e);
}

// fn we  args=3 vars=7 closure=2 cpool=2 bc=15B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, this
// closure: H, Z
function {
  this = this;
  r = function r;
  i = function i;
  let u;
  u = this;
  return r;
}

// fn Te  args=1 vars=5 closure=0 cpool=0 bc=728B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r
function {
  let r;
  let u;
  let n;
  let t;
  t = undefined;
  n = undefined;
  u = (e.length - 4);
  r = 3;
  if (!(("lineEnding" !== e[r][1].type))) goto L_77;
  if ((("space" !== e[r][1].type))) goto L_db;
  if (!(("lineEnding" !== e[u][1].type))) goto L_db;
  if (!(!("space" !== e[u][1].type))) goto L_167;
  t = r;
  r;
  t = (t ++);
  if (!(((t ++) < u))) goto L_167;
  if (!(("codeTextData" === e[t][1].type))) goto L_e9;
  e[r][1].type = "codeTextPadding";
  e[u][1].type = "codeTextPadding";
  r = (r + 2);
  (r + 2);
  u = (u - 2);
  (u - 2);
  goto L_167;
  t = (r - 1);
  (r - 1);
  u = <u_new>;
  (u++);
  t = (t ++);
  if (!(((t ++) <= u))) goto L_2d6;
  if (!((undefined === n))) goto L_1de;
  if (!((t !== u))) goto L_2d2;
  if (!(("lineEnding" !== e[t][1].type))) goto L_2d2;
  n = t;
  goto L_2d2;
  // [栈深重同步 1 -> 0]
  if (!((t !== u))) goto L_217;
  if ((("lineEnding" !== e[t][1].type))) goto L_2d2;
  e[n][1].type = "codeTextData";
  if (!((t !== (n + 2)))) goto L_2cc;
  e[n][1].end = e[(t - 1)][1].end;
  e.splice((n + 2), ((t - n) - 2));
  u = (u - ((t - n) - 2));
  (u - ((t - n) - 2));
  t = (n + 2);
  (n + 2);
  n = undefined;
  undefined;
  goto L_179;
  return e;
}

// fn Ie  args=1 vars=2 closure=0 cpool=0 bc=124B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (((96 !== e))) goto L_7b;
  return ("characterEscape" === this.events[(this.events.length - 1)][1].type);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=91B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, o
function {
  e.enter("codeText");
  e.enter("codeTextSequence");
  return o(t);   // tail call
}

// fn o  args=1 vars=1 closure=4 cpool=0 bc=102B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, i, o, s
function {
  if (!((96 === t))) goto L_37;
  e.consume(t);
  i = <i_new>;
  (i++);
  return o;
  e.exit("codeTextSequence");
  return s(t);
}

// fn s  args=1 vars=1 closure=8 cpool=0 bc=396B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: n, e, s, r, u, l, H, a
function {
  if (!((null === t))) goto L_9;
  return n(t);
  if (!((32 === t))) goto L_91;
  e.enter("space");
  e.consume(t);
  e.exit("space");
  return s;
  if (!((96 === t))) goto L_d2;
  r = e.enter("codeTextSequence");
  e.enter("codeTextSequence");
  u = 0;
  0;
  return l(t);
  if (!(H(t))) goto L_15b;
  e.enter("lineEnding");
  e.consume(t);
  e.exit("lineEnding");
  return s;
  e.enter("codeTextData");
  return a(t);
}

// fn a  args=1 vars=1 closure=4 cpool=0 bc=116B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: H, e, s, a
function {
  if (((null === t))) goto L_1a;
  if (((32 === t))) goto L_1a;
  if (((96 === t))) goto L_1a;
  if (!(H(t))) goto L_4b;
  e.exit("codeTextData");
  return s(t);
  e.consume(t);
  return a;
}

// fn l  args=1 vars=1 closure=7 cpool=0 bc=179B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, u, l, i, t, r, a
function {
  if (!((96 === n))) goto L_37;
  e.consume(n);
  u = <u_new>;
  (u++);
  return l;
  if (!((u === i))) goto L_9c;
  e.exit("codeTextSequence");
  e.exit("codeText");
  return t(n);
  r.type = "codeTextData";
  return a(n);
}

// fn qe  args=3 vars=10 closure=1 cpool=5 bc=33B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l
// closure: H
function {
  o = function o;
  s = function s;
  a = function a;
  l = function l;
  let i;
  let r;
  let u;
  u = undefined;
  r = undefined;
  i = 0;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=54B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  if (!(e)) goto L_1c;
  // append([], 0, e)
  e;
  goto L_1f;
  // [栈深重同步 2 -> 1]
  this.left = [];
  this.right = [];
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=372B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (((e < 0))) goto L_52;
  if (!((e >= (this.left.length + this.right.length)))) goto L_b9;
  throw new RangeError((((("Cannot access index `" + e) + "` in a splice buffer of size `") + (this.left.length + this.right.length)) + "`"));
  if (!((e < this.left.length))) goto L_105;
  return this.left[e];
  return this.right[(((this.right.length - e) + this.left.length) - 1)];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=74B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return (this.left.length + this.right.length);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=111B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  this.setCursor(0);
  return this.right.pop();   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=752B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, this
function {
  this = this;
  let n;
  if (!((t == null))) goto L_31;
  t;
  n = Number.POSITIVE_INFINITY;
  if (!((n < this.left.length))) goto L_a6;
  return this.left.slice(e, n);
  if (!((e > this.left.length))) goto L_1cf;
  return this.right.slice(((this.right.length - n) + this.left.length), ((this.right.length - e) + this.left.length)).reverse();
  return this.left.slice(e).concat(this.right.slice(((this.right.length - n) + this.left.length)).reverse());
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=0 bc=325B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, this
// closure: Oe
function {
  this = this;
  let r;
  let u;
  if ((t)) goto L_e;
  u = 0;
  this.setCursor(Math.trunc(e));
  r = this.right.splice((this.right.length - u), Number.POSITIVE_INFINITY);
  if (!(n)) goto L_11d;
  Oe(this.left, n);
  return r.reverse();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=148B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  this.setCursor(Number.POSITIVE_INFINITY);
  return this.left.pop();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=150B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.setCursor(Number.POSITIVE_INFINITY);
  this.left.push(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=116B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: Oe
function {
  this = this;
  this.setCursor(Number.POSITIVE_INFINITY);
  Oe(this.left, e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=113B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.setCursor(0);
  this.right.push(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=115B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: Oe
function {
  this = this;
  this.setCursor(0);
  Oe(this.right, e.reverse());
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=672B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, t#1, this
// closure: Oe
function {
  this = this;
  if (((e === this.left.length))) goto L_ac;
  if (!((e > this.left.length))) goto L_7c;
  if (((0 === this.right.length))) goto L_ac;
  if (!((e < 0))) goto L_ac;
  if (!(!(0 === this.left.length))) goto L_29f;
  if (!((e < this.left.length))) goto L_19a;
  let t;
  t = this.left.splice(e, Number.POSITIVE_INFINITY);
  Oe(this.right, t.reverse());
  return;
  let t#1;
  t#1 = this.right.splice(((this.left.length + this.right.length) - e), Number.POSITIVE_INFINITY);
  Oe(this.left, t#1.reverse());
  return;
}

// fn Oe  args=2 vars=3 closure=0 cpool=0 bc=175B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
function {
  let n;
  n = 0;
  if (!((t.length < 10000))) goto L_3c;
  // append([], 0, t)
  t;
  e.push.apply(e, []);
  return;
  if (!((n < t.length))) goto L_ae;
  // append([], 0, t.slice(n, (n + 10000)))
  t.slice(n, (n + 10000));
  e.push.apply(e, []);
  n = (n + 10000);
  (n + 10000);
  goto L_3c;
  return;
}

// fn ze  args=1 vars=11 closure=4 cpool=0 bc=1564B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r, i, o, s, a, l, c
// closure: Me, Le, D, S
function {
  let c;
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  let u;
  let n;
  let t;
  t = {};
  n = undefined;
  u = undefined;
  r = undefined;
  i = undefined;
  o = undefined;
  s = undefined;
  a = undefined;
  l = -1;
  c = new Me(e);
  l = (l ++);
  if (!(((l ++) < c.length))) goto L_5c2;
  if (!((l in t))) goto L_66;
  l = t[l];
  t[l];
  goto L_4f;
  n = c.get(l);
  c.get(l);
  if (!(l)) goto L_29d;
  if (!(("chunkFlow" === n[1].type))) goto L_29d;
  if (!(("listItemPrefix" === c.get((l - 1))[1].type))) goto L_29d;
  s = n[1]._tokenizer.events;
  n[1]._tokenizer.events;
  r = 0;
  0;
  if (!((r < s.length))) goto L_1c3;
  if (!(("lineEndingBlank" === s[r][1].type))) goto L_1c3;
  r = (r + 2);
  (r + 2);
  if (!((r < s.length))) goto L_29d;
  if (!(("content" === s[r][1].type))) goto L_29d;
  r = (r ++);
  if (!(((r ++) < s.length))) goto L_29d;
  if (!(("content" !== s[r][1].type))) goto L_29d;
  if (!(("chunkText" === s[r][1].type))) goto L_299;
  s[r][1]._isInFirstContentOfListItem = true;
  r = <r_new>;
  (r++);
  goto L_206;
  if (!(("enter" === n[0]))) goto L_31f;
  if (!(n[1].contentType)) goto L_31b;
  Object.assign(t, Le(c, l));
  l = t[l];
  t[l];
  a = true;
  true;
  goto L_3d;
  if (!(n[1]._container)) goto L_3d;
  r = l;
  l;
  u = undefined;
  undefined;
  r = <r_new>;
  if (!((r--))) goto L_4c3;
  i = c.get(r);
  c.get(r);
  if ((("lineEnding" === i[1].type))) goto L_3ef;
  if (!(("lineEndingBlank" === i[1].type))) goto L_461;
  if (!(("enter" === i[0]))) goto L_45d;
  if (!(u)) goto L_442;
  c.get(u)[1].type = "lineEndingBlank";
  "lineEndingBlank";
  i[1].type = "lineEnding";
  u = r;
  r;
  goto L_358;
  if (!(("linePrefix" !== i[1].type))) goto L_358;
  if ((("listItemIndent" !== i[1].type))) goto L_4c3;
  goto L_358;
  if (!(u)) goto L_5be;
  n[1].end = D({}, c.get(u)[1].start);
  o = c.slice(u, l);
  c.slice(u, l);
  o.unshift(n);
  c.splice(u, ((l - u) + 1), o);
  goto L_3d;
  S(e, 0, Number.POSITIVE_INFINITY, c.slice(0));
  return !a;
}

// fn Le  args=2 vars=19 closure=0 cpool=0 bc=1886B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s, a, l, c, D, f, h, d, p, F, t#1, n#1
function {
  let F;
  let p;
  let d;
  let h;
  let f;
  let D;
  let c;
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  let u;
  let n;
  n = e.get(t)[1];
  u = e.get(t)[2];
  r = (t - 1);
  i = [];
  o = n._tokenizer;
  if ((o)) goto L_163;
  o = u.parser[n.contentType].call(u.parser, n.start);
  u.parser[n.contentType].call(u.parser, n.start);
  if (!(n._contentTypeTextTrailing)) goto L_163;
  o._contentTypeTextTrailing = true;
  true;
  s = o.events;
  a = [];
  l = {};
  c = undefined;
  D = undefined;
  f = -1;
  h = n;
  d = 0;
  p = 0;
  F = [p];
  if (!(h)) goto L_3e4;
  r = (r ++);
  if (!((e.get((r ++))[1] !== h))) goto L_1ed;
  goto L_1b6;
  i.push(r);
  if ((h._tokenizer)) goto L_3af;
  c = u.sliceStream(h);
  u.sliceStream(h);
  if ((h.next)) goto L_2c2;
  c.push(null);
  if (!(D)) goto L_315;
  o.defineSkip(h.start);
  if (!(h._isInFirstContentOfListItem)) goto L_34d;
  o._gfmTasklistFirstContentOfListItem = true;
  true;
  o.write(c);
  if (!(h._isInFirstContentOfListItem)) goto L_3af;
  o._gfmTasklistFirstContentOfListItem = undefined;
  undefined;
  D = h;
  h;
  h = h.next;
  h.next;
  goto L_1ae;
  h = n;
  n;
  f = (f ++);
  if (!(((f ++) < s.length))) goto L_5a0;
  if (!(("exit" === s[f][0]))) goto L_59c;
  if (!(("enter" === s[(f - 1)][0]))) goto L_59c;
  if (!((s[f][1].type === s[(f - 1)][1].type))) goto L_59c;
  if (!((s[f][1].start.line !== s[f][1].end.line))) goto L_59c;
  p = (f + 1);
  (f + 1);
  F.push(p);
  h._tokenizer = undefined;
  h.previous = undefined;
  h = h.next;
  h.next;
  goto L_3ec;
  o.events = [];
  if (!(h)) goto L_5d1;
  h._tokenizer = undefined;
  h.previous = undefined;
  goto L_5f8;
  // [栈深重同步 1 -> 0]
  F.pop();
  f = F.length;
  F.length;
  f = <f_new>;
  if (!((f--))) goto L_6de;
  let n#1;
  let t#1;
  t#1 = s.slice(F[f], F[(f + 1)]);
  n#1 = i.pop();
  a.push([n#1, ((n#1 + t#1.length) - 1)]);
  e.splice(n#1, 2, t#1);
  goto L_602;
  a.reverse();
  f = -1;
  -1;
  f = (f ++);
  if (!(((f ++) < a.length))) goto L_75a;
  l[(d + a[f][0])] = (d + a[f][1]);
  d = (d + ((a[f][1] - a[f][0]) - 1));
  (d + ((a[f][1] - a[f][0]) - 1));
  goto L_70c;
  return l;
}

// fn Ne  args=1 vars=1 closure=1 cpool=0 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: ze
function {
  ze(e);
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=106B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, n, u
function {
  e.enter("content");
  n = e.enter("chunkContent", {contentType: "content"});
  e.enter("chunkContent", {contentType: "content"});
  return u(t);   // tail call
}

// fn u  args=1 vars=1 closure=6 cpool=0 bc=102B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: r, H, e, _e, i, u
function {
  if (!((null === t))) goto L_9;
  return r(t);
  if (!(H(t))) goto L_3b;
  return e.check(_e, i, r)(t);
  e.consume(t);
  return u;
}

// fn r  args=1 vars=1 closure=2 cpool=0 bc=91B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, t
function {
  e.exit("chunkContent");
  e.exit("content");
  return t(n);   // tail call
}

// fn i  args=1 vars=1 closure=3 cpool=0 bc=198B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, n, u
function {
  e.consume(t);
  e.exit("chunkContent");
  n.next = e.enter("chunkContent", {contentType: "content", previous: n});
  n = n.next;
  n.next;
  return u;
}

// fn Pe  args=2 vars=6 closure=2 cpool=4 bc=17B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i
// closure: H, _e
function {
  u = function u;
  r = function r;
  i = function i;
  let n;
  n = undefined;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=179B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, Z, r
function {
  e.exit("chunkContent");
  e.enter("lineEnding");
  e.consume(t);
  e.exit("lineEnding");
  return Z(e, r, "linePrefix");   // tail call
}

// fn r  args=1 vars=2 closure=5 cpool=0 bc=530B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: r
// locals: i
// closure: H, n, u, t, e
function {
  let i;
  if (((null === r))) goto L_d;
  if (!(H(r))) goto L_14;
  return n(r);   // tail call
  i = u.events[(u.events.length - 1)];
  if (!(!u.parser.constructs.disable.null.includes("codeIndented"))) goto L_180;
  if (!(i)) goto L_180;
  if (!(("linePrefix" === i[1].type))) goto L_180;
  if (!((i[2].sliceSerialize(i[1], true).length >= 4))) goto L_180;
  return t(r);
  return e.interrupt(u.parser.constructs.flow, n, t)(r);
}

// fn je  args=3 vars=6 closure=2 cpool=2 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, this
// closure: Z, H
function {
  this = this;
  r = function r;
  let u;
  u = this;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=10 cpool=0 bc=427B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, u, r, i, D, P, n, o, s, d
function {
  if (!((60 === t))) goto L_d0;
  e.enter(u);
  e.enter(r);
  e.enter(i);
  e.consume(t);
  e.exit(i);
  return D;
  if (((null === t))) goto L_ec;
  if (((32 === t))) goto L_ec;
  if (((41 === t))) goto L_ec;
  if (!(P(t))) goto L_f5;
  return n(t);   // tail call
  e.enter(u);
  e.enter(o);
  e.enter(s);
  e.enter("chunkString", {contentType: "string"});
  return d(t);   // tail call
}

// fn D  args=1 vars=1 closure=7 cpool=0 bc=309B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, i, r, u, t, s, f
function {
  if (!((62 === n))) goto L_d0;
  e.enter(i);
  e.consume(n);
  e.exit(i);
  e.exit(r);
  e.exit(u);
  return t;
  e.enter(s);
  e.enter("chunkString", {contentType: "string"});
  return f(n);
}

// fn f  args=1 vars=1 closure=7 cpool=0 bc=171B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, s, D, H, n, h, f
function {
  if (!((62 === t))) goto L_5c;
  e.exit("chunkString");
  e.exit(s);
  return D(t);
  if (((null === t))) goto L_6e;
  if (((60 === t))) goto L_6e;
  if (!(H(t))) goto L_76;
  return n(t);
  e.consume(t);
  if (!((92 === t))) goto L_a7;
  return h;
  return f;
}

// fn h  args=1 vars=1 closure=2 cpool=0 bc=67B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, f
function {
  if (((60 === t))) goto L_14;
  if (((62 === t))) goto L_14;
  if (!((92 === t))) goto L_3f;
  e.consume(t);
  return f;
  return f(t);
}

// fn d  args=1 vars=1 closure=12 cpool=0 bc=417B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: r
// closure: c, $, l, e, d, P, n, p, s, o, u, t
function {
  if ((c)) goto L_1c;
  if (!((null !== r))) goto L_f5;
  if (!((41 !== r))) goto L_f5;
  if (!(!$(r))) goto L_f5;
  if (!((c < l))) goto L_63;
  if (!((40 === r))) goto L_63;
  e.consume(r);
  c = <c_new>;
  (c++);
  return d;
  if (!((41 === r))) goto L_9c;
  e.consume(r);
  c = <c_new>;
  (c--);
  return d;
  if (((null === r))) goto L_b8;
  if (((32 === r))) goto L_b8;
  if (((40 === r))) goto L_b8;
  if (!(P(r))) goto L_c0;
  return n(r);
  e.consume(r);
  if (!((92 === r))) goto L_f1;
  return p;
  return d;
  e.exit("chunkString");
  e.exit(s);
  e.exit(o);
  e.exit(u);
  return t(r);
}

// fn p  args=1 vars=1 closure=2 cpool=0 bc=67B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, d
function {
  if (((40 === t))) goto L_14;
  if (((41 === t))) goto L_14;
  if (!((92 === t))) goto L_3f;
  e.consume(t);
  return d;
  return d(t);
}

// fn Ve  args=9 vars=16 closure=3 cpool=6 bc=75B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r, i, o, s, a
// locals: l, c, D, f, h, d, p
// closure: P, H, $
function {
  D = function D;
  f = function f;
  h = function h;
  d = function d;
  p = function p;
  let c;
  let l;
  if ((a)) goto L_45;
  l = Number.POSITIVE_INFINITY;
  c = 0;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=199B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, u, r, i, l
function {
  e.enter(u);
  e.enter(r);
  e.consume(t);
  e.exit(r);
  e.enter(i);
  return l;
}

// fn l  args=1 vars=1 closure=12 cpool=0 bc=568B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: D
// closure: a, s, o, n, e, i, r, u, t, H, l, c
function {
  if (((a > 999))) goto L_81;
  if (((null === D))) goto L_81;
  if (((91 === D))) goto L_81;
  if (!((93 === D))) goto L_26;
  if ((!s)) goto L_81;
  if (!((94 === D))) goto L_87;
  if (!(!a)) goto L_87;
  if (!(("_hiddenFootnoteSupport" in o.parser.constructs))) goto L_87;
  return n(D);
  if (!((93 === D))) goto L_169;
  e.exit(i);
  e.enter(r);
  e.consume(D);
  e.exit(r);
  e.exit(u);
  return t;
  if (!(H(D))) goto L_1fa;
  e.enter("lineEnding");
  e.consume(D);
  e.exit("lineEnding");
  return l;
  e.enter("chunkString", {contentType: "string"});
  return c(D);
}

// fn c  args=1 vars=1 closure=8 cpool=0 bc=161B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: H, a, e, l, s, J, D, c
function {
  if (((null === t))) goto L_29;
  if (((91 === t))) goto L_29;
  if (((93 === t))) goto L_29;
  if ((H(t))) goto L_29;
  a = <a_new>;
  if (!(((a++) > 999))) goto L_5a;
  e.exit("chunkString");
  return l(t);
  e.consume(t);
  if ((s)) goto L_92;
  s = !J(t);
  !J(t);
  if (!((92 === t))) goto L_9d;
  return D;
  return c;
}

// fn D  args=1 vars=1 closure=3 cpool=0 bc=75B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, a, c
function {
  if (((91 === t))) goto L_14;
  if (((92 === t))) goto L_14;
  if (!((93 === t))) goto L_47;
  e.consume(t);
  a = <a_new>;
  (a++);
  return c;
  return c(t);
}

// fn Ue  args=6 vars=13 closure=2 cpool=4 bc=33B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r, i
// locals: o, s, a, l, c, D, this
// closure: H, J
function {
  this = this;
  l = function l;
  c = function c;
  D = function D;
  let a;
  let s;
  let o;
  o = this;
  s = undefined;
  a = 0;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=208B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, u, r, o, s, n
function {
  if (((34 === t))) goto L_14;
  if (((39 === t))) goto L_14;
  if (!((40 === t))) goto L_c9;
  e.enter(u);
  e.enter(r);
  e.consume(t);
  e.exit(r);
  if (!((40 === t))) goto L_bf;
  goto L_c0;
  // [栈深重同步 1 -> 0]
  o = t;
  t;
  return s;
  return n(t);   // tail call
}

// fn s  args=1 vars=1 closure=7 cpool=0 bc=217B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: o, e, r, u, t, i, a
function {
  if (!((n === o))) goto L_aa;
  e.enter(r);
  e.consume(n);
  e.exit(r);
  e.exit(u);
  return t;
  e.enter(i);
  return a(n);
}

// fn a  args=1 vars=1 closure=9 cpool=0 bc=272B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: o, e, i, s, n, H, Z, a, l
function {
  if (!((t === o))) goto L_34;
  e.exit(i);
  return s(o);
  if (!((null === t))) goto L_3f;
  return n(t);
  if (!(H(t))) goto L_d4;
  e.enter("lineEnding");
  e.consume(t);
  e.exit("lineEnding");
  return Z(e, a, "linePrefix");
  e.enter("chunkString", {contentType: "string"});
  return l(t);
}

// fn l  args=1 vars=1 closure=6 cpool=0 bc=121B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: o, H, e, a, c, l
function {
  if (((t === o))) goto L_13;
  if (((null === t))) goto L_13;
  if (!(H(t))) goto L_44;
  e.exit("chunkString");
  return a(t);
  e.consume(t);
  if (!((92 === t))) goto L_75;
  return c;
  return l;
}

// fn c  args=1 vars=1 closure=3 cpool=0 bc=60B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: o, e, l
function {
  if (((t === o))) goto L_d;
  if (!((92 === t))) goto L_38;
  e.consume(t);
  return l;
  return l(t);
}

// fn He  args=6 vars=11 closure=2 cpool=5 bc=21B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r, i
// locals: o, s, a, l, c
// closure: H, Z
function {
  s = function s;
  a = function a;
  l = function l;
  c = function c;
  let o;
  o = undefined;
  return function <atom:0>;
}

// fn u  args=1 vars=2 closure=6 cpool=0 bc=184B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: r
// locals: u
// closure: H, e, n, J, Z, t
function {
  u = <special_object 2>;
  if (!(H(r))) goto L_91;
  e.enter("lineEnding");
  e.consume(r);
  e.exit("lineEnding");
  n = true;
  true;
  return u;
  if (!(J(r))) goto L_b1;
  if (!(n)) goto L_a7;
  goto L_ac;
  // [栈深重同步 4 -> 3]
  return Z(e, u, "lineSuffix")(r);   // tail call
  return t(r);   // tail call
}

// fn $e  args=2 vars=3 closure=3 cpool=1 bc=8B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
// closure: H, J, Z
function {
  let n;
  n = undefined;
  return function u;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=64B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: Ue, u, e, i, n
function {
  return Ue.call(u, e, i, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=1 bc=49B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: Ue, u, e, i, n
function {
  e.enter("definition");
  return function <atom:0>(t);   // tail call
}

// fn i  args=1 vars=1 closure=6 cpool=0 bc=306B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: r, L, u, e, o, n
function {
  r = L(u.sliceSerialize(u.events[(u.events.length - 1)][1]).slice(1, -1));
  L(u.sliceSerialize(u.events[(u.events.length - 1)][1]).slice(1, -1));
  if (!((58 === t))) goto L_12c;
  e.enter("definitionMarker");
  e.consume(t);
  e.exit("definitionMarker");
  return o;
  return n(t);
}

// fn o  args=1 vars=1 closure=4 cpool=0 bc=16B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: $, $e, e, s
function {
  if (!($(t))) goto L_c;
  return $e(e, s)(t);
  return s(t);
}

// fn s  args=1 vars=1 closure=4 cpool=0 bc=36B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: Ve, e, a, n
function {
  return Ve(e, a, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);   // tail call
}

// fn a  args=1 vars=1 closure=3 cpool=0 bc=44B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, Ge, l
function {
  return e.attempt(Ge, l, l)(t);   // tail call
}

// fn l  args=1 vars=1 closure=4 cpool=0 bc=21B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: J, Z, e, c
function {
  if (!(J(t))) goto L_11;
  return Z(e, c, "whitespace")(t);
  return c(t);
}

// fn c  args=1 vars=1 closure=6 cpool=0 bc=179B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: i
// closure: H, e, u, r, t, n
function {
  if (((null === i))) goto L_a;
  if (!(H(i))) goto L_ad;
  e.exit("definition");
  u.parser.defined.push(r);
  return t(i);
  return n(i);
}

// fn We  args=3 vars=12 closure=9 cpool=7 bc=39B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, c, this
// closure: Ue, L, $, $e, Ve, Ge, J, Z, H
function {
  this = this;
  i = function i;
  o = function o;
  s = function s;
  a = function a;
  l = function l;
  c = function c;
  let r;
  let u;
  u = this;
  r = undefined;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=18B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: $, $e, e, u, n
function {
  if (!($(t))) goto L_c;
  return $e(e, u)(t);
  return n(t);
}

// fn u  args=1 vars=1 closure=4 cpool=0 bc=26B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: He, e, r, n
function {
  return He(e, r, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);   // tail call
}

// fn r  args=1 vars=1 closure=4 cpool=0 bc=21B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: J, Z, e, i
function {
  if (!(J(t))) goto L_11;
  return Z(e, i, "whitespace")(t);
  return i(t);
}

// fn i  args=1 vars=1 closure=3 cpool=0 bc=20B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: H, t, n
function {
  if (((null === e))) goto L_a;
  if (!(H(e))) goto L_10;
  return t(e);
  return n(e);
}

// fn Qe  args=3 vars=6 closure=6 cpool=4 bc=12B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i
// closure: $, $e, He, J, Z, H
function {
  u = function u;
  r = function r;
  i = function i;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=84B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, u
function {
  e.enter("hardBreakEscape");
  e.consume(t);
  return u;
}

// fn u  args=1 vars=1 closure=4 cpool=0 bc=56B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: H, e, t, n
function {
  if (!(H(u))) goto L_34;
  e.exit("hardBreakEscape");
  return t(u);
  return n(u);
}

// fn Ye  args=3 vars=4 closure=1 cpool=2 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u
// closure: H
function {
  u = function u;
  return function <atom:0>;
}

// fn Xe  args=2 vars=6 closure=1 cpool=0 bc=615B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i
// closure: S
function {
  let i;
  let r;
  let u;
  let n;
  n = undefined;
  u = undefined;
  r = (e.length - 2);
  i = 3;
  if (!(("whitespace" === e[i][1].type))) goto L_52;
  i = (i + 2);
  (i + 2);
  if (!(((r - 2) > i))) goto L_9b;
  if (!(("whitespace" === e[r][1].type))) goto L_9b;
  r = (r - 2);
  (r - 2);
  if (!(("atxHeadingSequence" === e[r][1].type))) goto L_133;
  if (((i === (r - 1)))) goto L_118;
  if (!(((r - 4) > i))) goto L_118;
  if (!(("whitespace" === e[(r - 2)][1].type))) goto L_133;
  if (!(((i + 1) === r))) goto L_12d;
  goto L_12e;
  // [栈深重同步 2 -> 1]
  r = (r - 4);
  (r - 4);
  if (!((r > i))) goto L_264;
  n = {type: "atxHeadingText", start: e[i][1].start, end: e[r][1].end};
  {type: "atxHeadingText", start: e[i][1].start, end: e[r][1].end};
  u = {type: "chunkText", start: e[i][1].start, end: e[r][1].end, contentType: "text"};
  {type: "chunkText", start: e[i][1].start, end: e[r][1].end, contentType: "text"};
  S(e, i, ((r - i) + 1), [["enter", n, t], ["enter", u, t], ["exit", u, t], ["exit", n, t]]);
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=48B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, r
function {
  e.enter("atxHeadingSequence");
  return r(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=49B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, r
function {
  e.enter("atxHeading");
  return function <atom:0>(t);   // tail call
}

// fn r  args=1 vars=1 closure=6 cpool=0 bc=125B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: u, e, r, $, i, n
function {
  if (!((35 === t))) goto L_3a;
  u = <u_new>;
  if (!(((u++) < 6))) goto L_3a;
  e.consume(t);
  return r;
  if (((null === t))) goto L_44;
  if (!($(t))) goto L_77;
  e.exit("atxHeadingSequence");
  return i(t);
  return n(t);
}

// fn i  args=1 vars=1 closure=8 cpool=0 bc=184B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, o, H, t, J, Z, i, s
function {
  if (!((35 === n))) goto L_35;
  e.enter("atxHeadingSequence");
  return o(n);
  if (((null === n))) goto L_3f;
  if (!(H(n))) goto L_70;
  e.exit("atxHeading");
  return t(n);
  if (!(J(n))) goto L_87;
  return Z(e, i, "whitespace")(n);
  e.enter("atxHeadingText");
  return s(n);
}

// fn o  args=1 vars=1 closure=3 cpool=0 bc=94B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, o, i
function {
  if (!((35 === t))) goto L_2f;
  e.consume(t);
  return o;
  e.exit("atxHeadingSequence");
  return i(t);
}

// fn s  args=1 vars=1 closure=4 cpool=0 bc=108B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: $, e, i, s
function {
  if (((null === t))) goto L_12;
  if (((35 === t))) goto L_12;
  if (!($(t))) goto L_43;
  e.exit("atxHeadingText");
  return i(t);
  e.consume(t);
  return s;
}

// fn et  args=3 vars=8 closure=4 cpool=5 bc=21B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s
// closure: $, H, J, Z
function {
  r = function r;
  i = function i;
  o = function o;
  s = function s;
  let u;
  u = 0;
  return function <atom:0>;
}

// fn ot  args=1 vars=2 closure=0 cpool=0 bc=313B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  let t;
  t = e.length;
  t = <t_new>;
  if (!((t--))) goto L_52;
  if ((("enter" !== e[t][0]))) goto L_4e;
  if (!(("htmlFlow" !== e[t][1].type))) goto L_52;
  goto L_6;
  if (!((t > 1))) goto L_136;
  if (!(("linePrefix" === e[(t - 2)][1].type))) goto L_136;
  e[t][1].start = e[(t - 2)][1].start;
  e[(t + 1)][1].start = e[(t - 2)][1].start;
  e.splice((t - 2), 2);
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=127B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, l
function {
  e.enter("htmlFlow");
  e.enter("htmlFlowData");
  e.consume(t);
  return l;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, l
function {
  return function <atom:0>(t);   // tail call
}

// fn l  args=1 vars=1 closure=12 cpool=0 bc=301B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: s
// closure: e, c, i, h, r, u, t, O, R, o, d, n
function {
  if (!((33 === s))) goto L_2f;
  e.consume(s);
  return c;
  if (!((47 === s))) goto L_65;
  e.consume(s);
  i = true;
  true;
  return h;
  if (!((63 === s))) goto L_c6;
  e.consume(s);
  r = 3;
  3;
  if (!(u.interrupt)) goto L_c2;
  return t;
  return O;
  if (!(R(s))) goto L_127;
  e.consume(s);
  o = String.fromCharCode(s);
  String.fromCharCode(s);
  return d;
  return n(s);
}

// fn c  args=1 vars=1 closure=10 cpool=0 bc=218B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: i
// closure: e, r, D, s, f, R, u, t, O, n
function {
  if (!((45 === i))) goto L_35;
  e.consume(i);
  r = 2;
  2;
  return D;
  if (!((91 === i))) goto L_72;
  e.consume(i);
  r = 5;
  5;
  s = 0;
  0;
  return f;
  if (!(R(i))) goto L_d4;
  e.consume(i);
  r = 4;
  4;
  if (!(u.interrupt)) goto L_d0;
  return t;
  return O;
  return n(i);
}

// fn D  args=1 vars=1 closure=5 cpool=0 bc=93B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: r
// closure: e, u, t, O, n
function {
  if (!((45 === r))) goto L_57;
  e.consume(r);
  if (!(u.interrupt)) goto L_55;
  return t;
  return O;
  return n(r);
}

// fn f  args=1 vars=2 closure=7 cpool=0 bc=159B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: r
// locals: i
// closure: s, e, u, t, b, f, n
function {
  let i;
  i = "CDATA[";
  s = <s_new>;
  if (!((r === i.charCodeAt((s++))))) goto L_99;
  e.consume(r);
  if (!((6 === s))) goto L_95;
  if (!(u.interrupt)) goto L_91;
  return t;
  return b;
  return f;
  return n(r);
}

// fn h  args=1 vars=1 closure=5 cpool=0 bc=99B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: R, e, o, d, n
function {
  if (!(R(t))) goto L_5d;
  e.consume(t);
  o = String.fromCharCode(t);
  String.fromCharCode(t);
  return d;
  return n(t);
}

// fn d  args=1 vars=3 closure=16 cpool=0 bc=716B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: s
// locals: a, l
// closure: $, o, i, nt, tt, r, e, p, u, t, b, n, F, m, _, d
function {
  if (((null === s))) goto L_1a;
  if (((47 === s))) goto L_1a;
  if (((62 === s))) goto L_1a;
  if (!($(s))) goto L_257;
  let l;
  let a;
  a = (47 === s);
  l = o.toLowerCase();
  if ((a)) goto L_89;
  if ((i)) goto L_89;
  if (!(!nt.includes(l))) goto L_21f;
  if (!(tt.includes(o.toLowerCase()))) goto L_148;
  r = 6;
  6;
  if (!(a)) goto L_116;
  e.consume(s);
  return p;
  if (!(u.interrupt)) goto L_142;
  return t(s);
  return b(s);
  r = 7;
  7;
  if (!(u.interrupt)) goto L_20e;
  if (!(!u.parser.lazy[u.now().line])) goto L_20e;
  return n(s);
  if (!(i)) goto L_219;
  return F(s);
  return m(s);
  r = 1;
  1;
  if (!(u.interrupt)) goto L_251;
  return t(s);
  return b(s);
  if (((45 === s))) goto L_264;
  if (!(_(s))) goto L_2c6;
  e.consume(s);
  o = (o + String.fromCharCode(s));
  (o + String.fromCharCode(s));
  return d;
  return n(s);
}

// fn p  args=1 vars=1 closure=5 cpool=0 bc=93B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: r
// closure: e, u, t, b, n
function {
  if (!((62 === r))) goto L_57;
  e.consume(r);
  if (!(u.interrupt)) goto L_55;
  return t;
  return b;
  return n(r);
}

// fn F  args=1 vars=1 closure=4 cpool=0 bc=50B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: J, e, F, v
function {
  if (!(J(t))) goto L_2e;
  e.consume(t);
  return F;
  return v(t);
}

// fn m  args=1 vars=1 closure=6 cpool=0 bc=163B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, v, R, g, J, m
function {
  if (!((47 === t))) goto L_2f;
  e.consume(t);
  return v;
  if (((58 === t))) goto L_42;
  if (((95 === t))) goto L_42;
  if (!(R(t))) goto L_6d;
  e.consume(t);
  return g;
  if (!(J(t))) goto L_9f;
  e.consume(t);
  return m;
  return v(t);
}

// fn g  args=1 vars=1 closure=4 cpool=0 bc=82B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: _, e, g, E
function {
  if (((45 === t))) goto L_23;
  if (((46 === t))) goto L_23;
  if (((58 === t))) goto L_23;
  if (((95 === t))) goto L_23;
  if (!(_(t))) goto L_4e;
  e.consume(t);
  return g;
  return E(t);
}

// fn E  args=1 vars=1 closure=5 cpool=0 bc=99B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, C, J, E, m
function {
  if (!((61 === t))) goto L_2f;
  e.consume(t);
  return C;
  if (!(J(t))) goto L_5d;
  e.consume(t);
  return E;
  return m(t);
}

// fn C  args=1 vars=1 closure=7 cpool=0 bc=158B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: n, e, a, A, J, C, x
function {
  if (((null === t))) goto L_23;
  if (((60 === t))) goto L_23;
  if (((61 === t))) goto L_23;
  if (((62 === t))) goto L_23;
  if (!((96 === t))) goto L_29;
  return n(t);
  if (((34 === t))) goto L_35;
  if (!((39 === t))) goto L_66;
  e.consume(t);
  a = t;
  t;
  return A;
  if (!(J(t))) goto L_98;
  e.consume(t);
  return C;
  return x(t);
}

// fn A  args=1 vars=1 closure=6 cpool=0 bc=115B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: a, e, k, H, n, A
function {
  if (!((t === a))) goto L_36;
  e.consume(t);
  a = null;
  null;
  return k;
  if (((null === t))) goto L_40;
  if (!(H(t))) goto L_48;
  return n(t);
  e.consume(t);
  return A;
}

// fn x  args=1 vars=1 closure=4 cpool=0 bc=113B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: $, E, e, x
function {
  if (((null === t))) goto L_42;
  if (((34 === t))) goto L_42;
  if (((39 === t))) goto L_42;
  if (((47 === t))) goto L_42;
  if (((60 === t))) goto L_42;
  if (((61 === t))) goto L_42;
  if (((62 === t))) goto L_42;
  if (((96 === t))) goto L_42;
  if (!($(t))) goto L_48;
  return E(t);
  e.consume(t);
  return x;
}

// fn k  args=1 vars=1 closure=3 cpool=0 bc=29B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: J, m, n
function {
  if (((47 === e))) goto L_13;
  if (((62 === e))) goto L_13;
  if (!(J(e))) goto L_19;
  return m(e);
  return n(e);
}

// fn v  args=1 vars=1 closure=3 cpool=0 bc=51B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, y, n
function {
  if (!((62 === t))) goto L_2f;
  e.consume(t);
  return y;
  return n(t);
}

// fn y  args=1 vars=1 closure=6 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: H, b, J, e, y, n
function {
  if (((null === t))) goto L_a;
  if (!(H(t))) goto L_10;
  return b(t);
  if (!(J(t))) goto L_40;
  e.consume(t);
  return y;
  return n(t);
}

// fn b  args=1 vars=1 closure=12 cpool=0 bc=498B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: r, e, T, I, z, O, M, H, B, b, rt, L
function {
  if (!((45 === t))) goto L_36;
  if (!((2 === r))) goto L_36;
  e.consume(t);
  return T;
  if (!((60 === t))) goto L_6c;
  if (!((1 === r))) goto L_6c;
  e.consume(t);
  return I;
  if (!((62 === t))) goto L_a4;
  if (!((4 === r))) goto L_a4;
  e.consume(t);
  return z;
  if (!((63 === t))) goto L_dc;
  if (!((3 === r))) goto L_dc;
  e.consume(t);
  return O;
  if (!((93 === t))) goto L_114;
  if (!((5 === r))) goto L_114;
  e.consume(t);
  return M;
  if ((!H(t))) goto L_12a;
  if (!((6 !== r))) goto L_196;
  if (!((7 !== r))) goto L_196;
  if (((null === t))) goto L_138;
  if (!(H(t))) goto L_16b;
  e.exit("htmlFlowData");
  return B(t);
  e.consume(t);
  return b;
  e.exit("htmlFlowData");
  return e.check(rt, L, B)(t);
}

// fn B  args=1 vars=1 closure=4 cpool=0 bc=44B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, it, w, L
function {
  return e.check(it, w, L)(t);   // tail call
}

// fn w  args=1 vars=1 closure=2 cpool=0 bc=127B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, S
function {
  e.enter("lineEnding");
  e.consume(t);
  e.exit("lineEnding");
  return S;
}

// fn S  args=1 vars=1 closure=4 cpool=0 bc=63B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: H, B, e, b
function {
  if (((null === t))) goto L_a;
  if (!(H(t))) goto L_10;
  return B(t);
  e.enter("htmlFlowData");
  return b(t);
}

// fn T  args=1 vars=1 closure=3 cpool=0 bc=51B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, O, b
function {
  if (!((45 === t))) goto L_2f;
  e.consume(t);
  return O;
  return b(t);
}

// fn I  args=1 vars=1 closure=4 cpool=0 bc=57B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, o, q, b
function {
  if (!((47 === t))) goto L_35;
  e.consume(t);
  o = "";
  "";
  return q;
  return b(t);
}

// fn q  args=1 vars=2 closure=7 cpool=0 bc=257B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: n
// closure: o, nt, e, z, b, R, q
function {
  if (!((62 === t))) goto L_8d;
  let n;
  n = o.toLowerCase();
  if (!(nt.includes(n))) goto L_87;
  e.consume(t);
  return z;
  return b(t);
  if (!(R(t))) goto L_fb;
  if (!((o.length < 8))) goto L_fb;
  e.consume(t);
  o = (o + String.fromCharCode(t));
  (o + String.fromCharCode(t));
  return q;
  return b(t);
}

// fn M  args=1 vars=1 closure=3 cpool=0 bc=51B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, O, b
function {
  if (!((93 === t))) goto L_2f;
  e.consume(t);
  return O;
  return b(t);
}

// fn O  args=1 vars=1 closure=5 cpool=0 bc=107B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, z, r, O, b
function {
  if (!((62 === t))) goto L_2f;
  e.consume(t);
  return z;
  if (!((45 === t))) goto L_65;
  if (!((2 === r))) goto L_65;
  e.consume(t);
  return O;
  return b(t);
}

// fn z  args=1 vars=1 closure=4 cpool=0 bc=100B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: H, e, L, z
function {
  if (((null === t))) goto L_a;
  if (!(H(t))) goto L_3b;
  e.exit("htmlFlowData");
  return L(t);
  e.consume(t);
  return z;
}

// fn L  args=1 vars=1 closure=2 cpool=0 bc=48B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, t
function {
  e.exit("htmlFlow");
  return t(n);   // tail call
}

// fn st  args=3 vars=38 closure=9 cpool=29 bc=151B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, c, D, f, h, d, p, F, m, g, E, C, A, x, k, v, y, b, B, w, S, T, I, q, M, O, z, L, this
// closure: R, $, nt, tt, _, J, H, rt, it
function {
  this = this;
  l = function l;
  c = function c;
  D = function D;
  f = function f;
  h = function h;
  d = function d;
  p = function p;
  F = function F;
  m = function m;
  g = function g;
  E = function E;
  C = function C;
  A = function A;
  x = function x;
  k = function k;
  v = function v;
  y = function y;
  b = function b;
  B = function B;
  w = function w;
  S = function S;
  T = function T;
  I = function I;
  q = function q;
  M = function M;
  O = function O;
  z = function z;
  L = function L;
  let a;
  let s;
  let o;
  let i;
  let r;
  let u;
  u = this;
  r = undefined;
  i = undefined;
  o = undefined;
  s = undefined;
  a = undefined;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=140B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: H, e, r, n
function {
  if (!(H(t))) goto L_87;
  e.enter("lineEnding");
  e.consume(t);
  e.exit("lineEnding");
  return r;
  return n(t);   // tail call
}

// fn r  args=1 vars=1 closure=3 cpool=0 bc=152B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: u, n, t
function {
  if (!(u.parser.lazy[u.now().line])) goto L_94;
  return n(e);
  return t(e);
}

// fn at  args=3 vars=6 closure=1 cpool=2 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, this
// closure: H
function {
  this = this;
  r = function r;
  let u;
  u = this;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=165B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: e, De, t, n
function {
  e.enter("lineEnding");
  e.consume(u);
  e.exit("lineEnding");
  return e.attempt(De, t, n);   // tail call
}

// fn lt  args=3 vars=3 closure=1 cpool=1 bc=3B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: De
function {
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=127B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, s
function {
  e.enter("htmlText");
  e.enter("htmlTextData");
  e.consume(t);
  return s;
}

// fn s  args=1 vars=1 closure=7 cpool=0 bc=197B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, a, C, g, R, k, n
function {
  if (!((33 === t))) goto L_2f;
  e.consume(t);
  return a;
  if (!((47 === t))) goto L_5e;
  e.consume(t);
  return C;
  if (!((63 === t))) goto L_8d;
  e.consume(t);
  return g;
  if (!(R(t))) goto L_bf;
  e.consume(t);
  return k;
  return n(t);
}

// fn a  args=1 vars=1 closure=7 cpool=0 bc=156B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, l, i, h, R, m, n
function {
  if (!((45 === t))) goto L_2f;
  e.consume(t);
  return l;
  if (!((91 === t))) goto L_64;
  e.consume(t);
  i = 0;
  0;
  return h;
  if (!(R(t))) goto L_96;
  e.consume(t);
  return m;
  return n(t);
}

// fn l  args=1 vars=1 closure=3 cpool=0 bc=51B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, f, n
function {
  if (!((45 === t))) goto L_2f;
  e.consume(t);
  return f;
  return n(t);
}

// fn c  args=1 vars=1 closure=7 cpool=0 bc=118B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: n, e, D, H, o, c, q
function {
  if (!((null === t))) goto L_9;
  return n(t);
  if (!((45 === t))) goto L_38;
  e.consume(t);
  return D;
  if (!(H(t))) goto L_4b;
  o = c;
  c;
  return q(t);
  e.consume(t);
  return c;
}

// fn D  args=1 vars=1 closure=3 cpool=0 bc=51B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, f, c
function {
  if (!((45 === t))) goto L_2f;
  e.consume(t);
  return f;
  return c(t);
}

// fn f  args=1 vars=1 closure=3 cpool=0 bc=24B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: I, D, c
function {
  if (!((62 === e))) goto L_a;
  return I(e);
  if (!((45 === e))) goto L_14;
  return D(e);
  return c(e);
}

// fn h  args=1 vars=2 closure=5 cpool=0 bc=115B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: u
// closure: i, e, d, h, n
function {
  let u;
  u = "CDATA[";
  i = <i_new>;
  if (!((t === u.charCodeAt((i++))))) goto L_6d;
  e.consume(t);
  if (!((6 === i))) goto L_6b;
  return d;
  return h;
  return n(t);
}

// fn d  args=1 vars=1 closure=7 cpool=0 bc=118B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: n, e, p, H, o, d, q
function {
  if (!((null === t))) goto L_9;
  return n(t);
  if (!((93 === t))) goto L_38;
  e.consume(t);
  return p;
  if (!(H(t))) goto L_4b;
  o = d;
  d;
  return q(t);
  e.consume(t);
  return d;
}

// fn p  args=1 vars=1 closure=3 cpool=0 bc=51B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, F, d
function {
  if (!((93 === t))) goto L_2f;
  e.consume(t);
  return F;
  return d(t);
}

// fn F  args=1 vars=1 closure=4 cpool=0 bc=61B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: I, e, F, d
function {
  if (!((62 === t))) goto L_a;
  return I(t);
  if (!((93 === t))) goto L_39;
  e.consume(t);
  return F;
  return d(t);
}

// fn m  args=1 vars=1 closure=6 cpool=0 bc=77B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: I, H, o, m, q, e
function {
  if (((null === t))) goto L_b;
  if (!((62 === t))) goto L_11;
  return I(t);
  if (!(H(t))) goto L_22;
  o = m;
  m;
  return q(t);
  e.consume(t);
  return m;
}

// fn g  args=1 vars=1 closure=7 cpool=0 bc=118B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: n, e, E, H, o, g, q
function {
  if (!((null === t))) goto L_9;
  return n(t);
  if (!((63 === t))) goto L_38;
  e.consume(t);
  return E;
  if (!(H(t))) goto L_4b;
  o = g;
  g;
  return q(t);
  e.consume(t);
  return g;
}

// fn E  args=1 vars=1 closure=2 cpool=0 bc=14B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: I, g
function {
  if (!((62 === e))) goto L_a;
  return I(e);
  return g(e);
}

// fn C  args=1 vars=1 closure=4 cpool=0 bc=50B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: R, e, A, n
function {
  if (!(R(t))) goto L_2e;
  e.consume(t);
  return A;
  return n(t);
}

// fn A  args=1 vars=1 closure=4 cpool=0 bc=58B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: _, e, A, x
function {
  if (((45 === t))) goto L_b;
  if (!(_(t))) goto L_36;
  e.consume(t);
  return A;
  return x(t);
}

// fn x  args=1 vars=1 closure=7 cpool=0 bc=71B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: H, o, x, q, J, e, I
function {
  if (!(H(t))) goto L_f;
  o = x;
  x;
  return q(t);
  if (!(J(t))) goto L_41;
  e.consume(t);
  return x;
  return I(t);
}

// fn k  args=1 vars=1 closure=6 cpool=0 bc=87B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: _, e, k, $, v, n
function {
  if (((45 === t))) goto L_b;
  if (!(_(t))) goto L_36;
  e.consume(t);
  return k;
  if (((47 === t))) goto L_49;
  if (((62 === t))) goto L_49;
  if (!($(t))) goto L_51;
  return v(t);
  return n(t);
}

// fn v  args=1 vars=1 closure=9 cpool=0 bc=184B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, I, R, y, H, o, v, q, J
function {
  if (!((47 === t))) goto L_2f;
  e.consume(t);
  return I;
  if (((58 === t))) goto L_42;
  if (((95 === t))) goto L_42;
  if (!(R(t))) goto L_6d;
  e.consume(t);
  return y;
  if (!(H(t))) goto L_82;
  o = v;
  v;
  return q(t);
  if (!(J(t))) goto L_b4;
  e.consume(t);
  return v;
  return I(t);
}

// fn y  args=1 vars=1 closure=4 cpool=0 bc=82B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: _, e, y, b
function {
  if (((45 === t))) goto L_23;
  if (((46 === t))) goto L_23;
  if (((58 === t))) goto L_23;
  if (((95 === t))) goto L_23;
  if (!(_(t))) goto L_4e;
  e.consume(t);
  return y;
  return b(t);
}

// fn b  args=1 vars=1 closure=8 cpool=0 bc=122B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, B, H, o, b, q, J, v
function {
  if (!((61 === t))) goto L_2f;
  e.consume(t);
  return B;
  if (!(H(t))) goto L_42;
  o = b;
  b;
  return q(t);
  if (!(J(t))) goto L_74;
  e.consume(t);
  return b;
  return v(t);
}

// fn B  args=1 vars=1 closure=10 cpool=0 bc=216B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: n, e, r, w, H, o, B, q, J, S
function {
  if (((null === t))) goto L_23;
  if (((60 === t))) goto L_23;
  if (((61 === t))) goto L_23;
  if (((62 === t))) goto L_23;
  if (!((96 === t))) goto L_29;
  return n(t);
  if (((34 === t))) goto L_35;
  if (!((39 === t))) goto L_66;
  e.consume(t);
  r = t;
  t;
  return w;
  if (!(H(t))) goto L_7b;
  o = B;
  B;
  return q(t);
  if (!(J(t))) goto L_ad;
  e.consume(t);
  return B;
  e.consume(t);
  return S;
}

// fn w  args=1 vars=1 closure=8 cpool=0 bc=127B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: r, e, T, n, H, o, w, q
function {
  if (!((t === r))) goto L_36;
  e.consume(t);
  r = undefined;
  undefined;
  return T;
  if (!((null === t))) goto L_3f;
  return n(t);
  if (!(H(t))) goto L_54;
  o = w;
  w;
  return q(t);
  e.consume(t);
  return w;
}

// fn S  args=1 vars=1 closure=5 cpool=0 bc=117B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: n, $, v, e, S
function {
  if (((null === t))) goto L_2b;
  if (((34 === t))) goto L_2b;
  if (((39 === t))) goto L_2b;
  if (((60 === t))) goto L_2b;
  if (((61 === t))) goto L_2b;
  if (!((96 === t))) goto L_31;
  return n(t);
  if (((47 === t))) goto L_44;
  if (((62 === t))) goto L_44;
  if (!($(t))) goto L_4a;
  return v(t);
  e.consume(t);
  return S;
}

// fn T  args=1 vars=1 closure=3 cpool=0 bc=29B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: $, v, n
function {
  if (((47 === e))) goto L_13;
  if (((62 === e))) goto L_13;
  if (!($(e))) goto L_19;
  return v(e);
  return n(e);
}

// fn I  args=1 vars=1 closure=3 cpool=0 bc=140B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: e, t, n
function {
  if (!((62 === u))) goto L_88;
  e.consume(u);
  e.exit("htmlTextData");
  e.exit("htmlText");
  return t;
  return n(u);
}

// fn q  args=1 vars=1 closure=2 cpool=0 bc=170B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, M
function {
  e.exit("htmlTextData");
  e.enter("lineEnding");
  e.consume(t);
  e.exit("lineEnding");
  return M;
}

// fn M  args=1 vars=1 closure=5 cpool=0 bc=208B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: J, Z, e, O, u
function {
  if (!(J(t))) goto L_cc;
  if (!(u.parser.constructs.disable.null.includes("codeIndented"))) goto L_c5;
  goto L_c6;
  // [栈深重同步 5 -> 4]
  return Z(e, O, "linePrefix", 4)(t);
  return O(t);
}

// fn O  args=1 vars=1 closure=2 cpool=0 bc=50B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, o
function {
  e.enter("htmlTextData");
  return o(t);   // tail call
}

// fn Dt  args=3 vars=36 closure=6 cpool=29 bc=139B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, c, D, f, h, d, p, F, m, g, E, C, A, x, k, v, y, b, B, w, S, T, I, q, M, O, this
// closure: R, H, _, J, $, Z
function {
  this = this;
  s = function s;
  a = function a;
  l = function l;
  c = function c;
  D = function D;
  f = function f;
  h = function h;
  d = function d;
  p = function p;
  F = function F;
  m = function m;
  g = function g;
  E = function E;
  C = function C;
  A = function A;
  x = function x;
  k = function k;
  v = function v;
  y = function y;
  b = function b;
  B = function B;
  w = function w;
  S = function S;
  T = function T;
  I = function I;
  q = function q;
  M = function M;
  O = function O;
  let o;
  let i;
  let r;
  let u;
  u = this;
  r = undefined;
  i = undefined;
  o = undefined;
  return function <atom:0>;
}

// fn Ft  args=1 vars=5 closure=1 cpool=0 bc=332B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, e#1
// closure: S
function {
  let n;
  let t;
  t = -1;
  n = [];
  t = (t ++);
  if (!(((t ++) < e.length))) goto L_133;
  let u;
  u = e[t][1];
  n.push(e[t]);
  if ((("labelImage" === u.type))) goto L_da;
  if ((("labelLink" === u.type))) goto L_da;
  if (!(("labelEnd" === u.type))) goto L_c;
  let e#1;
  if (!(("labelImage" === u.type))) goto L_111;
  goto L_112;
  // [栈深重同步 1 -> 0]
  e#1 = 2;
  u.type = "data";
  t = (t + e#1);
  (t + e#1);
  goto L_c;
  if (!((e.length !== n.length))) goto L_149;
  S(e, 0, e.length, n);
  return e;
}

// fn mt  args=2 vars=11 closure=4 cpool=0 bc=1418B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s, a, l, c
// closure: D, T, re, S
function {
  let c;
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  let u;
  let n;
  n = undefined;
  u = undefined;
  r = undefined;
  i = undefined;
  o = e.length;
  s = 0;
  o = <o_new>;
  if (!((o--))) goto L_238;
  n = e[o][1];
  e[o][1];
  if (!(u)) goto L_11f;
  if ((("link" === n.type))) goto L_c8;
  if (!(("labelLink" === n.type))) goto L_cd;
  if ((n._inactive)) goto L_238;
  if (!(("enter" === e[o][0]))) goto L_11b;
  if (!(("labelLink" === n.type))) goto L_11b;
  n._inactive = true;
  true;
  goto L_2a;
  if (!(r)) goto L_1ff;
  if (!(("enter" === e[o][0]))) goto L_2a;
  if ((("labelImage" === n.type))) goto L_191;
  if (!(("labelLink" === n.type))) goto L_2a;
  if (!(!n._balanced)) goto L_2a;
  u = o;
  o;
  if (!(("labelLink" !== n.type))) goto L_2a;
  s = 2;
  2;
  goto L_238;
  if (!(("labelEnd" === n.type))) goto L_234;
  r = o;
  o;
  goto L_2a;
  if (!(("labelLink" === e[u][1].type))) goto L_270;
  goto L_275;
  // [栈深重同步 2 -> 1]
  a = {type: "image", start: D({}, e[u][1].start), end: D({}, e[(e.length - 1)][1].end)};
  l = {type: "label", start: D({}, e[u][1].start), end: D({}, e[r][1].end)};
  c = {type: "labelText", start: D({}, e[((u + s) + 2)][1].end), end: D({}, e[(r - 2)][1].start)};
  i = [["enter", a, t], ["enter", l, t]];
  [["enter", a, t], ["enter", l, t]];
  i = T(i, e.slice((u + 1), ((u + s) + 3)));
  T(i, e.slice((u + 1), ((u + s) + 3)));
  i = T(i, [["enter", c, t]]);
  T(i, [["enter", c, t]]);
  i = T(i, re(t.parser.constructs.insideSpan.null, e.slice(((u + s) + 4), (r - 3)), t));
  T(i, re(t.parser.constructs.insideSpan.null, e.slice(((u + s) + 4), (r - 3)), t));
  i = T(i, [["exit", c, t], e[(r - 2)], e[(r - 1)], ["exit", l, t]]);
  T(i, [["exit", c, t], e[(r - 2)], e[(r - 1)], ["exit", l, t]]);
  i = T(i, e.slice((r + 1)));
  T(i, e.slice((r + 1)));
  i = T(i, [["exit", a, t]]);
  T(i, [["exit", a, t]]);
  S(e, u, e.length, i);
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=8 cpool=0 bc=518B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: r, n, c, i, u, L, e, s
function {
  if (!(!r)) goto L_b;
  return n(t);   // tail call
  if (!(r._inactive)) goto L_36;
  return c(t);   // tail call
  i = u.parser.defined.includes(L(u.sliceSerialize({start: r.end, end: u.now()})));
  u.parser.defined.includes(L(u.sliceSerialize({start: r.end, end: u.now()})));
  e.enter("labelEnd");
  e.enter("labelMarker");
  e.consume(t);
  e.exit("labelMarker");
  e.exit("labelEnd");
  return s;
}

// fn s  args=1 vars=1 closure=7 cpool=0 bc=137B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, ht, l, i, c, dt, a
function {
  if (!((40 === t))) goto L_3b;
  if (!(i)) goto L_32;
  goto L_35;
  // [栈深重同步 5 -> 4]
  return e.attempt(ht, l, c)(t);
  if (!((91 === t))) goto L_7a;
  if (!(i)) goto L_71;
  goto L_74;
  // [栈深重同步 5 -> 4]
  return e.attempt(dt, l, c)(t);
  if (!(i)) goto L_83;
  return l(t);
  return c(t);
}

// fn a  args=1 vars=1 closure=4 cpool=0 bc=44B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, pt, l, c
function {
  return e.attempt(pt, l, c)(t);   // tail call
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=5B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: t
function {
  return t(e);   // tail call
}

// fn c  args=1 vars=1 closure=2 cpool=0 bc=19B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: r, n
function {
  r._balanced = true;
  return n(e);   // tail call
}

// fn gt  args=3 vars=12 closure=4 cpool=5 bc=392B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, c, this
// closure: L, ht, dt, pt
function {
  this = this;
  s = function s;
  a = function a;
  l = function l;
  c = function c;
  let o;
  let i;
  let r;
  let u;
  u = this;
  r = undefined;
  i = undefined;
  o = u.events.length;
  o = <o_new>;
  if (!((o--))) goto L_185;
  if ((("labelImage" === u.events[o][1].type))) goto L_fe;
  if (!(("labelLink" === u.events[o][1].type))) goto L_4c;
  if (!(!u.events[o][1]._balanced)) goto L_4c;
  r = u.events[o][1];
  u.events[o][1];
  goto L_185;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=170B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, u
function {
  e.enter("resource");
  e.enter("resourceMarker");
  e.consume(t);
  e.exit("resourceMarker");
  return u;
}

// fn u  args=1 vars=1 closure=4 cpool=0 bc=16B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: $, $e, e, r
function {
  if (!($(t))) goto L_c;
  return $e(e, r)(t);
  return r(t);
}

// fn r  args=1 vars=1 closure=5 cpool=0 bc=49B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: l, Ve, e, i, o
function {
  if (!((41 === t))) goto L_a;
  return l(t);
  return Ve(e, i, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
}

// fn i  args=1 vars=1 closure=5 cpool=0 bc=18B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: $, $e, e, s, l
function {
  if (!($(t))) goto L_c;
  return $e(e, s)(t);
  return l(t);
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=5B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: n
function {
  return n(e);   // tail call
}

// fn s  args=1 vars=1 closure=5 cpool=0 bc=53B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: He, e, a, n, l
function {
  if (((34 === t))) goto L_14;
  if (((39 === t))) goto L_14;
  if (!((40 === t))) goto L_2f;
  return He(e, a, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t);
  return l(t);
}

// fn a  args=1 vars=1 closure=4 cpool=0 bc=16B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: $, $e, e, l
function {
  if (!($(t))) goto L_c;
  return $e(e, l)(t);
  return l(t);
}

// fn l  args=1 vars=1 closure=3 cpool=0 bc=183B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: e, t, n
function {
  if (!((41 === u))) goto L_b3;
  e.enter("resourceMarker");
  e.consume(u);
  e.exit("resourceMarker");
  e.exit("resource");
  return t;
  return n(u);
}

// fn Et  args=3 vars=10 closure=4 cpool=8 bc=27B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l
// closure: $, $e, Ve, He
function {
  u = function u;
  r = function r;
  i = function i;
  o = function o;
  s = function s;
  a = function a;
  l = function l;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=64B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: Ue, u, e, r, i
function {
  return Ue.call(u, e, r, i, "reference", "referenceMarker", "referenceString")(t);   // tail call
}

// fn r  args=1 vars=1 closure=4 cpool=0 bc=272B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: u, L, t, n
function {
  if (!(u.parser.defined.includes(L(u.sliceSerialize(u.events[(u.events.length - 1)][1]).slice(1, -1))))) goto L_10c;
  return t(e);
  return n(e);
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=5B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: n
function {
  return n(e);   // tail call
}

// fn Ct  args=3 vars=7 closure=2 cpool=3 bc=16B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, this
// closure: Ue, L
function {
  this = this;
  r = function r;
  i = function i;
  let u;
  u = this;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=170B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, u
function {
  e.enter("reference");
  e.enter("referenceMarker");
  e.consume(t);
  e.exit("referenceMarker");
  return u;
}

// fn u  args=1 vars=1 closure=3 cpool=0 bc=183B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: e, t, n
function {
  if (!((93 === u))) goto L_b3;
  e.enter("referenceMarker");
  e.consume(u);
  e.exit("referenceMarker");
  e.exit("reference");
  return t;
  return n(u);
}

// fn At  args=3 vars=4 closure=0 cpool=2 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u
function {
  u = function u;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=170B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, r
function {
  e.enter("labelImage");
  e.enter("labelImageMarker");
  e.consume(t);
  e.exit("labelImageMarker");
  return r;
}

// fn r  args=1 vars=1 closure=3 cpool=0 bc=183B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, i, n
function {
  if (!((91 === t))) goto L_b3;
  e.enter("labelMarker");
  e.consume(t);
  e.exit("labelMarker");
  e.exit("labelImage");
  return i;
  return n(t);
}

// fn i  args=1 vars=1 closure=3 cpool=0 bc=91B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: u, n, t
function {
  if (!((94 === e))) goto L_57;
  if (!(("_hiddenFootnoteSupport" in u.parser.constructs))) goto L_57;
  return n(e);
  return t(e);
}

// fn kt  args=3 vars=7 closure=0 cpool=3 bc=16B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, this
function {
  this = this;
  r = function r;
  i = function i;
  let u;
  u = this;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=213B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, r
function {
  e.enter("labelLink");
  e.enter("labelMarker");
  e.consume(t);
  e.exit("labelMarker");
  e.exit("labelLink");
  return r;
}

// fn r  args=1 vars=1 closure=3 cpool=0 bc=91B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: u, n, t
function {
  if (!((94 === e))) goto L_57;
  if (!(("_hiddenFootnoteSupport" in u.parser.constructs))) goto L_57;
  return n(e);
  return t(e);
}

// fn yt  args=3 vars=6 closure=0 cpool=2 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, this
function {
  this = this;
  r = function r;
  let u;
  u = this;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=136B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, Z, t
function {
  e.enter("lineEnding");
  e.consume(n);
  e.exit("lineEnding");
  return Z(e, t, "linePrefix");   // tail call
}

// fn Bt  args=2 vars=2 closure=1 cpool=1 bc=3B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: Z
function {
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=11B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: u, i
function {
  u = e;
  e;
  return i(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=49B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: u, i, e
function {
  e.enter("thematicBreak");
  return function <atom:0>(t);   // tail call
}

// fn i  args=1 vars=1 closure=7 cpool=0 bc=130B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: i
// closure: u, e, o, r, H, t, n
function {
  if (!((i === u))) goto L_36;
  e.enter("thematicBreakSequence");
  return o(i);
  if (!((r >= 3))) goto L_7c;
  if (((null === i))) goto L_49;
  if (!(H(i))) goto L_7c;
  e.exit("thematicBreak");
  return t(i);
  return n(i);
}

// fn o  args=1 vars=1 closure=7 cpool=0 bc=128B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: u, e, r, o, J, Z, i
function {
  if (!((t === u))) goto L_38;
  e.consume(t);
  r = <r_new>;
  (r++);
  return o;
  e.exit("thematicBreakSequence");
  if (!(J(t))) goto L_7a;
  return Z(e, i, "whitespace")(t);
  return i(t);
}

// fn St  args=3 vars=7 closure=3 cpool=3 bc=19B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o
// closure: H, J, Z
function {
  i = function i;
  o = function o;
  let r;
  let u;
  u = undefined;
  r = 0;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=2 closure=7 cpool=0 bc=718B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: r
// closure: u, j, e, wt, n, a, s
function {
  let r;
  if ((u.containerState.type)) goto L_6e;
  if (((42 === t))) goto L_60;
  if (((43 === t))) goto L_60;
  if (!((45 === t))) goto L_69;
  goto L_6e;
  // [栈深重同步 1 -> 0]
  r = "listOrdered";
  if (!(("listUnordered" === r))) goto L_110;
  if ((!u.containerState.marker)) goto L_113;
  goto L_113;
  // [栈深重同步 1 -> 0]
  if (!(j(t))) goto L_2c7;
  if ((u.containerState.type)) goto L_1c1;
  u.containerState.type = r;
  e.enter(r, {_container: true});
  if (!(("listUnordered" === r))) goto L_23b;
  e.enter("listItemPrefix");
  if (((42 === t))) goto L_204;
  if (!((45 === t))) goto L_235;
  return e.check(wt, n, a)(t);
  return a(t);
  if ((!u.interrupt)) goto L_268;
  if (!((49 === t))) goto L_2c7;
  e.enter("listItemPrefix");
  e.enter("listItemValue");
  return s(t);   // tail call
  return n(t);   // tail call
}

// fn s  args=1 vars=1 closure=7 cpool=0 bc=323B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: j, o, e, s, u, a, n
function {
  if (!(j(t))) goto L_3b;
  o = (o ++);
  if (!(((o ++) < 10))) goto L_3b;
  e.consume(t);
  return s;
  if ((!u.interrupt)) goto L_69;
  if (!((o < 2))) goto L_13d;
  if (!(u.containerState.marker)) goto L_fe;
  goto L_10a;
  // [栈深重同步 1 -> 0]
  if (((41 === t))) goto L_10a;
  if (!((46 === t))) goto L_13d;
  e.exit("listItemValue");
  return a(t);
  return n(t);
}

// fn a  args=1 vars=1 closure=8 cpool=0 bc=372B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, u, De, n, l, It, D, c
function {
  e.enter("listItemMarker");
  e.consume(t);
  e.exit("listItemMarker");
  if ((u.containerState.marker)) goto L_eb;
  u.containerState.marker = t;
  if (!(u.interrupt)) goto L_140;
  goto L_143;
  // [栈深重同步 4 -> 3]
  return e.check(De, l, e.attempt(It, D, c));   // tail call
}

// fn l  args=1 vars=1 closure=3 cpool=0 bc=60B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: u, i, D
function {
  u.containerState.initialBlankLine = true;
  i = <i_new>;
  (i++);
  return D(e);   // tail call
}

// fn c  args=1 vars=1 closure=4 cpool=0 bc=139B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: J, e, D, n
function {
  if (!(J(t))) goto L_87;
  e.enter("listItemPrefixWhitespace");
  e.consume(t);
  e.exit("listItemPrefixWhitespace");
  return D;
  return n(t);
}

// fn D  args=1 vars=1 closure=4 cpool=0 bc=138B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: u, i, e, t
function {
  u.containerState.size = (i + u.sliceSerialize(e.exit("listItemPrefix"), true).length);
  return t(n);   // tail call
}

// fn Mt  args=3 vars=13 closure=5 cpool=6 bc=224B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, c, D, this
// closure: j, wt, De, It, J
function {
  this = this;
  s = function s;
  a = function a;
  l = function l;
  c = function c;
  D = function D;
  let o;
  let i;
  let r;
  let u;
  u = this;
  r = u.events[(u.events.length - 1)];
  if (!(r)) goto L_d9;
  if (!(("linePrefix" === r[1].type))) goto L_d9;
  goto L_da;
  // [栈深重同步 1 -> 0]
  i = 0;
  o = 0;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=273B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: u, Z, e, t
function {
  if ((u.containerState.furtherBlankLines)) goto L_b2;
  u.containerState.furtherBlankLines = u.containerState.initialBlankLine;
  return Z(e, t, "listItemIndent", (u.containerState.size + 1))(n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=316B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: u, J, r, e, qt, t
function {
  if ((u.containerState.furtherBlankLines)) goto L_4d;
  if (!(!J(n))) goto L_b0;
  u.containerState.furtherBlankLines = undefined;
  u.containerState.initialBlankLine = undefined;
  return r(n);   // tail call
  u.containerState.furtherBlankLines = undefined;
  u.containerState.initialBlankLine = undefined;
  return e.attempt(qt, t, r)(n);   // tail call
}

// fn r  args=1 vars=1 closure=6 cpool=0 bc=300B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: r
// closure: u, Z, e, Tt, t, n
function {
  u.containerState._closeFlow = true;
  u.interrupt = undefined;
  if (!(u.parser.constructs.disable.null.includes("codeIndented"))) goto L_124;
  goto L_125;
  // [栈深重同步 5 -> 4]
  return Z(e, e.attempt(Tt, t, n), "linePrefix", 4)(r);   // tail call
}

// fn Ot  args=3 vars=6 closure=5 cpool=3 bc=100B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, this
// closure: Z, J, qt, Tt, De
function {
  this = this;
  r = function r;
  let u;
  u = this;
  u.containerState._closeFlow = undefined;
  return e.check(De, function <atom:0>, function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=263B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: r
// closure: u, t, n
function {
  let r;
  r = u.events[(u.events.length - 1)];
  if (!(r)) goto L_103;
  if (!(("listItemIndent" === r[1].type))) goto L_103;
  if (!((r[2].sliceSerialize(r[1], true).length === u.containerState.size))) goto L_103;
  return t(e);
  return n(e);
}

// fn zt  args=3 vars=5 closure=1 cpool=1 bc=90B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, this
// closure: Z
function {
  this = this;
  let u;
  u = this;
  return Z(e, function <atom:0>, "listItemIndent", (u.containerState.size + 1));   // tail call
}

// fn Lt  args=1 vars=2 closure=0 cpool=0 bc=107B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  e.exit(this.containerState.type);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=145B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: r
// closure: u, J, t, n
function {
  let r;
  r = u.events[(u.events.length - 1)];
  if (!(!J(e))) goto L_8d;
  if (!(r)) goto L_8d;
  if (!(("listItemPrefixWhitespace" === r[1].type))) goto L_8d;
  return t(e);
  return n(e);
}

// fn Rt  args=3 vars=5 closure=2 cpool=1 bc=201B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, this
// closure: J, Z
function {
  this = this;
  let u;
  u = this;
  if (!(u.parser.constructs.disable.null.includes("codeIndented"))) goto L_c5;
  goto L_c6;
  // [栈深重同步 5 -> 4]
  return Z(e, function <atom:0>, "listItemPrefixWhitespace", 5);   // tail call
}

// fn Nt  args=2 vars=7 closure=1 cpool=0 bc=711B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o
// closure: D
function {
  let o;
  let i;
  let r;
  let u;
  let n;
  n = undefined;
  u = undefined;
  r = undefined;
  i = e.length;
  i = <i_new>;
  if (!((i--))) goto L_14b;
  if (!(("enter" === e[i][0]))) goto L_ab;
  if (!(("content" === e[i][1].type))) goto L_6e;
  n = i;
  i;
  goto L_14b;
  if (!(("paragraph" === e[i][1].type))) goto L_a7;
  u = i;
  i;
  goto L_18;
  if (!(("content" === e[i][1].type))) goto L_106;
  e.splice(i, 1);
  if ((r)) goto L_147;
  if ((("definition" !== e[i][1].type))) goto L_147;
  r = i;
  i;
  goto L_18;
  o = {type: "setextHeading", start: D({}, e[n][1].start), end: D({}, e[(e.length - 1)][1].end)};
  e[u][1].type = "setextHeadingText";
  if (!(r)) goto L_286;
  e.splice(u, 0, ["enter", o, t]);
  e.splice((r + 1), 0, ["exit", e[n][1], t]);
  e[n][1].end = D({}, e[r][1].end);
  goto L_292;
  // [栈深重同步 1 -> 0]
  e[n][1] = o;
  o;
  e.push(["exit", o, t]);
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=48B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, i
function {
  e.enter("setextHeadingLineSequence");
  return i(t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=5 cpool=1 bc=653B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: o, s
// closure: e, i, u, r, n
function {
  let s;
  let o;
  o = undefined;
  s = u.events.length;
  s = <s_new>;
  if (!((s--))) goto L_191;
  if (!(("lineEnding" !== u.events[s][1].type))) goto L_2e;
  if (!(("linePrefix" !== u.events[s][1].type))) goto L_2e;
  if (!(("content" !== u.events[s][1].type))) goto L_2e;
  o = ("paragraph" === u.events[s][1].type);
  ("paragraph" === u.events[s][1].type);
  goto L_191;
  if (!(!u.parser.lazy[u.now().line])) goto L_286;
  if ((u.interrupt)) goto L_24d;
  if (!(o)) goto L_286;
  e.enter("setextHeadingLine");
  r = t;
  t;
  return function <atom:0>(t);   // tail call
  return n(t);   // tail call
}

// fn i  args=1 vars=1 closure=6 cpool=0 bc=118B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: r, e, i, J, Z, o
function {
  if (!((t === r))) goto L_30;
  e.consume(t);
  return i;
  e.exit("setextHeadingLineSequence");
  if (!(J(t))) goto L_70;
  return Z(e, o, "lineSuffix")(t);
  return o(t);
}

// fn o  args=1 vars=1 closure=4 cpool=0 bc=63B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: H, e, t, n
function {
  if (((null === u))) goto L_a;
  if (!(H(u))) goto L_3b;
  e.exit("setextHeadingLine");
  return t(u);
  return n(u);
}

// fn Pt  args=3 vars=8 closure=3 cpool=3 bc=23B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, this
// closure: J, Z, H
function {
  this = this;
  i = function i;
  o = function o;
  let r;
  let u;
  u = this;
  r = undefined;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=187B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: e, t, n
function {
  if (!((null === u))) goto L_2d;
  e.consume(u);
  return;
  e.enter("lineEndingBlank");
  e.consume(u);
  e.exit("lineEndingBlank");
  t.currentConstruct = undefined;
  return n;
}

// fn u  args=1 vars=1 closure=3 cpool=0 bc=189B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: e, t, n
function {
  if (!((null !== u))) goto L_96;
  e.enter("lineEnding");
  e.consume(u);
  e.exit("lineEnding");
  t.currentConstruct = undefined;
  return n;
  e.consume(u);
  return;
}

// fn Vt  args=1 vars=5 closure=3 cpool=2 bc=381B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, this
// closure: De, Z, Re
function {
  this = this;
  u = function u;
  let n;
  let t;
  t = this;
  n = e.attempt(De, function <atom:0>, e.attempt(this.parser.constructs.flowInitial, u, Z(e, e.attempt(this.parser.constructs.flow, u, e.attempt(Re, u)), "linePrefix")));
  return n;
}

// fn i  args=1 vars=1 closure=3 cpool=0 bc=15B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: a, r, o
function {
  if (!(a(e))) goto L_b;
  return r(e);
  return o(e);
}

// fn o  args=1 vars=1 closure=2 cpool=0 bc=128B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: t, s
function {
  if (!((null !== e))) goto L_59;
  t.enter("data");
  t.consume(e);
  return s;
  t.consume(e);
  return;
}

// fn s  args=1 vars=1 closure=4 cpool=0 bc=95B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: a, t, r, s
function {
  if (!(a(e))) goto L_36;
  t.exit("data");
  return r(e);
  t.consume(e);
  return s;
}

// fn a  args=1 vars=4 closure=2 cpool=0 bc=222B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, r, e#1
// closure: u, n
function {
  let r;
  let t;
  if (!((null === e))) goto L_e;
  return true;
  t = u[e];
  r = -1;
  if (!(t)) goto L_db;
  r = (r ++);
  if (!(((r ++) < t.length))) goto L_db;
  let e#1;
  e#1 = t[r];
  if ((!e#1.previous)) goto L_d3;
  if (!(e#1.previous.call(n, n.previous))) goto L_1e;
  return true;
  return false;
}

// fn <atom:0>  args=1 vars=9 closure=1 cpool=4 bc=147B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: n, u, r, i, o, s, a, this
// closure: e
function {
  this = this;
  i = function i;
  o = function o;
  s = function s;
  a = function a;
  let r;
  let u;
  let n;
  n = this;
  u = this.parser.constructs[e];
  r = t.attempt(u, i, o);
  return i;
}

// fn Jt  args=1 vars=1 closure=2 cpool=1 bc=34B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Gt, Wt
function {
  if (!(("text" === e))) goto L_e;
  goto L_f;
  // [栈深重同步 3 -> 2]
  return {resolveAll: Gt(undefined), tokenize: function <atom:0>};
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=330B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t, n
// locals: u, r
// closure: e
function {
  let r;
  let u;
  u = undefined;
  r = -1;
  r = (r ++);
  if (!(((r ++) <= t.length))) goto L_140;
  if (!((undefined === u))) goto L_74;
  if (!(t[r])) goto L_13c;
  if (!(("data" === t[r][1].type))) goto L_13c;
  u = r;
  r;
  r = <r_new>;
  goto L_13c;
  // [栈深重同步 1 -> 0]
  if (!(t[r])) goto L_ab;
  if ((("data" === t[r][1].type))) goto L_13c;
  if (!((r !== (u + 2)))) goto L_136;
  t[u][1].end = t[(r - 1)][1].end;
  t.splice((u + 2), ((r - u) - 2));
  r = (u + 2);
  (u + 2);
  u = undefined;
  undefined;
  goto L_a;
  if (!(e)) goto L_148;
  return e(t, n);
  return t;
}

// fn Gt  args=1 vars=1 closure=0 cpool=1 bc=3B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return function <atom:0>;
}

// fn Wt  args=2 vars=11 closure=1 cpool=0 bc=1268B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s, a, e#1, r#1
// closure: D
function {
  let n;
  n = 0;
  n = (n ++);
  if (!(((n ++) <= e.length))) goto L_4f2;
  if (((n === e.length))) goto L_4d;
  if (!(("lineEnding" === e[n][1].type))) goto L_5;
  if (!(("data" === e[(n - 1)][1].type))) goto L_5;
  let a;
  let s;
  let o;
  let i;
  let r;
  let u;
  u = e[(n - 1)][1];
  r = t.sliceStream(u);
  i = undefined;
  o = r.length;
  s = -1;
  a = 0;
  o = <o_new>;
  if (!((o--))) goto L_17f;
  let e#1;
  e#1 = r[o];
  if (!(("string" == typeof e#1))) goto L_151;
  s = e#1.length;
  e#1.length;
  if (!((32 === e#1.charCodeAt((s - 1))))) goto L_144;
  a = <a_new>;
  (a++);
  s = <s_new>;
  (s--);
  goto L_101;
  if ((s)) goto L_17f;
  s = -1;
  -1;
  goto L_d4;
  if (!((-2 === e#1))) goto L_16b;
  i = true;
  true;
  a = <a_new>;
  (a++);
  goto L_d4;
  if (!((-1 !== e#1))) goto L_d4;
  o = <o_new>;
  (o++);
  goto L_17f;
  if (!(t._contentTypeTextTrailing)) goto L_1b4;
  if (!((n === e.length))) goto L_1b4;
  a = 0;
  0;
  if (!(a)) goto L_4e7;
  let r#1;
  if (((n === e.length))) goto L_1d7;
  if ((i)) goto L_1d7;
  if (!((a < 2))) goto L_1e0;
  goto L_1e5;
  // [栈深重同步 2 -> 1]
  if (!(o)) goto L_1f5;
  goto L_23e;
  // [栈深重同步 3 -> 2]
  r#1 = {type: "hardBreakTrailing", start: {_bufferIndex: (u.start._bufferIndex + s), _index: (u.start._index + o), line: u.end.line, column: (u.end.column - a), offset: (u.end.offset - a)}, end: D({}, u.end)};
  u.end = D({}, r#1.start);
  if (!((u.start.offset === u.end.offset))) goto L_49b;
  goto L_4e6;
  // [栈深重同步 1 -> 0]
  e.splice(n, 0, ["enter", r#1, t], ["exit", r#1, t]);
  n = (n + 2);
  (n + 2);
  n = <n_new>;
  (n++);
  goto L_5;
  return e;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: un
function {
  return un;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: Yt
function {
  return Yt;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: rn
function {
  return rn;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: Zt
function {
  return Zt;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: Xt
function {
  return Xt;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: Kt
function {
  return Kt;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: nn
function {
  return nn;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: en
function {
  return en;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: tn
function {
  return tn;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=38B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: E
function {
  E(e, t.from);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=524B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: H, u, C, o, c, a
function {
  if (!(H(e))) goto L_7c;
  u.line = (u.line ++);
  u.column = 1;
  if (!((-3 === e))) goto L_6d;
  goto L_6e;
  // [栈深重同步 3 -> 2]
  u.offset = (u.offset + 1);
  goto L_e0;
  // [栈深重同步 1 -> 0]
  if (!((-1 !== e))) goto L_e0;
  u.column = (u.column ++);
  u.offset = <u.offset_new>;
  (u.offset++);
  if (!((u._bufferIndex < 0))) goto L_13b;
  u._index = <u._index_new>;
  goto L_1f7;
  // [栈深重同步 1 -> 0]
  u._bufferIndex = (u._bufferIndex ++);
  if (!((u._bufferIndex === o[u._index].length))) goto L_1f7;
  u._bufferIndex = -1;
  u._index = <u._index_new>;
  (u._index++);
  c.previous = e;
  a = true;
  true;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=171B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
// closure: d, c, s
function {
  let n;
  if ((t)) goto L_9;
  n = {};
  n.type = e;
  n.start = d();
  c.events.push(["enter", n, c]);
  s.push(n);
  return n;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=148B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
// closure: s, d, c
function {
  let t;
  t = s.pop();
  t.end = d();
  c.events.push(["exit", t, c]);
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=76B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: r, C
function {
  r[e.line] = e.column;
  C();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=8B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: an, h
function {
  return an(h(e), t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=8 cpool=0 bc=134B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: o, T, p, E, t, c, re, i
function {
  o = T(o, e);
  T(o, e);
  p();
  if (!((null !== o[(o.length - 1)]))) goto L_20;
  return [];
  E(t, 0);
  c.events = re(i, c.events, c);
  return c.events;
}

// fn h  args=1 vars=1 closure=2 cpool=0 bc=8B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: sn, o
function {
  return sn(o, e);   // tail call
}

// fn d  args=0 vars=5 closure=1 cpool=0 bc=252B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, n, r, i
// closure: u
function {
  let i;
  let r;
  let n;
  let t;
  let e;
  if (((undefined === undefined))) goto L_cb;
  e = <to_object>(undefined)._bufferIndex;
  t = <to_object>(undefined)._index;
  n = <to_object>(undefined).line;
  r = <to_object>(undefined).column;
  i = <to_object>(undefined).offset;
  <to_object>(undefined);
  goto L_d2;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_17;
  // [栈深重同步 1 -> 0]
  return {_bufferIndex: e, _index: t, line: n, column: r, offset: i};
}

// fn p  args=0 vars=2 closure=3 cpool=0 bc=390B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t
// closure: u, o, F
function {
  let e;
  e = undefined;
  if (!((u._index < o.length))) goto L_185;
  let t;
  t = o[u._index];
  if (!(("string" == typeof t))) goto L_17c;
  e = u._index;
  u._index;
  if (!((u._bufferIndex < 0))) goto L_cf;
  u._bufferIndex = 0;
  0;
  if (!((u._index === e))) goto L_5;
  if (!((u._bufferIndex < t.length))) goto L_5;
  F(t.charCodeAt(u._bufferIndex));
  goto L_d0;
  F(t);
  goto L_5;
  return;
}

// fn F  args=1 vars=1 closure=3 cpool=0 bc=22B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: a, D, f
function {
  a = undefined;
  undefined;
  D = e;
  e;
  f = f(e);
  f(e);
  return;
}

// fn m  args=2 vars=2 closure=0 cpool=0 bc=38B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  t.restore();
  return;
}

// fn t  args=1 vars=3 closure=2 cpool=0 bc=206B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: n, u
// closure: e, p
function {
  let u;
  let n;
  if (!((null !== t))) goto L_10;
  n = e[t];
  if (!((null !== t))) goto L_3a;
  u = e.null;
  if (!(Array.isArray(n))) goto L_73;
  goto L_83;
  // [栈深重同步 4 -> 3]
  if (!(n)) goto L_80;
  goto L_83;
  // [栈深重同步 4 -> 3]
  // append([], 0, [])
  if (!(Array.isArray(u))) goto L_b7;
  goto L_c7;
  // [栈深重同步 4 -> 3]
  if (!(u)) goto L_c4;
  goto L_c7;
  // [栈深重同步 4 -> 3]
  // append([], [], [])
  [];
  return p([])(t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=4B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
// closure: p
function {
  t = function t;
  return function t;
}

// fn p  args=1 vars=1 closure=4 cpool=0 bc=28B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: o, D, i, F
function {
  o = e;
  e;
  D = 0;
  0;
  if (!((0 === e.length))) goto L_14;
  return i;
  return F(e[D]);
}

// fn o  args=0 vars=0 closure=9 cpool=0 bc=99B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: u, e, c, t, n, r, s, i, C
function {
  u = e;
  e;
  c.previous = t;
  c.currentConstruct = n;
  c.events.length = r;
  s = i;
  i;
  C();
  return;
}

// fn <atom:0>  args=0 vars=6 closure=5 cpool=1 bc=199B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, n, r, i, o
// closure: u, c, s, C, d
function {
  o = function o;
  let i;
  let r;
  let n;
  let t;
  let e;
  e = d();
  t = c.previous;
  n = c.currentConstruct;
  r = c.events.length;
  i = Array.from(s);
  return {from: r, restore: o};
}

// fn <atom:0>  args=1 vars=1 closure=12 cpool=1 bc=513B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: u, c, s, C, d, h, f, e, g, t, l, m
function {
  h = function <atom:0>();
  function <atom:0>();
  f = e;
  e;
  if ((e.partial)) goto L_48;
  c.currentConstruct = e;
  e;
  if (!(e.name)) goto L_14a;
  if (!(c.parser.constructs.disable.null.includes(e.name))) goto L_14a;
  return g(n);   // tail call
  if (!(t)) goto L_1ee;
  goto L_1f1;
  // [栈深重同步 3 -> 2]
  return e.tokenize.call(c, l, m, g)(n);   // tail call
}

// fn F  args=1 vars=1 closure=11 cpool=1 bc=3B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: u, c, s, C, d, h, f, g, t, l, m
function {
  return function <atom:0>;
}

// fn m  args=1 vars=1 closure=5 cpool=0 bc=20B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: a, e, f, h, r
function {
  a = true;
  true;
  e(f, h);
  return r;
}

// fn g  args=1 vars=1 closure=6 cpool=0 bc=78B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: a, h, D, o, F, i
function {
  a = true;
  true;
  h.restore();
  D = (D ++);
  if (!(((D ++) < o.length))) goto L_4a;
  return F(o[D]);
  return i;
}

// fn <atom:0>  args=3 vars=11 closure=9 cpool=5 bc=107B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n, r, i
// locals: o, D, f, h, p, F, m, g
// closure: u, c, s, C, d, t, l, a, e
function {
  p = function p;
  F = function F;
  m = function m;
  g = function g;
  let h;
  let f;
  let D;
  let o;
  o = undefined;
  D = undefined;
  f = undefined;
  h = undefined;
  if (!(Array.isArray(n))) goto L_55;
  return p(n);
  if (!(("tokenize" in n))) goto L_66;
  return p([n]);
  return function <atom:0>(n);
}

// fn g  args=2 vars=2 closure=7 cpool=1 bc=3B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: u, c, s, C, d, l, a
function {
  return function <atom:0>;
}

// fn E  args=2 vars=2 closure=3 cpool=0 bc=487B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: i, S, c
function {
  if (!(e.resolveAll)) goto L_7b;
  if (!(!i.includes(e))) goto L_7b;
  i.push(e);
  if (!(e.resolve)) goto L_166;
  S(c.events, t, (c.events.length - t), e.resolve(c.events.slice(t), c));
  if (!(e.resolveTo)) goto L_1e6;
  c.events = e.resolveTo(c.events, c);
  e.resolveTo(c.events, c);
  return;
}

// fn C  args=0 vars=0 closure=2 cpool=0 bc=234B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: u, r
function {
  if (!((u.line in r))) goto L_e9;
  if (!((u.column < 2))) goto L_e9;
  u.column = r[u.line];
  u.offset = (u.offset + (r[u.line] - 1));
  (u.offset + (r[u.line] - 1));
  return;
}

// fn on  args=3 vars=21 closure=6 cpool=15 bc=568B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, c, D, f, h, d, p, F, m, g, E, C
// closure: H, an, T, re, sn, S
function {
  h = function h;
  d = function d;
  p = function p;
  F = function F;
  m = function m;
  g = function g;
  E = function E;
  C = function C;
  let f;
  let D;
  let c;
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  let u;
  if (!(n)) goto L_72;
  if ((n.line)) goto L_77;
  if (!(n)) goto L_a3;
  if ((n.column)) goto L_a8;
  if (!(n)) goto L_d4;
  if ((n.offset)) goto L_d9;
  u = {_bufferIndex: -1, _index: 0, line: 1, column: 1, offset: 0};
  r = {};
  i = [];
  o = [];
  s = [];
  a = true;
  l = {attempt: g(function <atom:0>), check: g(m), consume: function <atom:0>, enter: function <atom:0>, exit: function <atom:0>, interrupt: g(m, {interrupt: true})};
  c = {code: null, containerState: {}, defineSkip: function <atom:0>, events: [], now: d, parser: e, previous: null, sliceSerialize: function <atom:0>, sliceStream: h, write: function <atom:0>};
  D = undefined;
  f = t.tokenize.call(c, l);
  if (!(t.resolveAll)) goto L_233;
  i.push(t);
  return c;
}

// fn sn  args=2 vars=8 closure=0 cpool=0 bc=623B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, e#1
function {
  let o;
  let i;
  let r;
  let u;
  let n;
  n = t.start._index;
  u = t.start._bufferIndex;
  r = t.end._index;
  i = t.end._bufferIndex;
  o = undefined;
  if (!((n === r))) goto L_165;
  o = [e[n].slice(u, i)];
  [e[n].slice(u, i)];
  goto L_26b;
  o = e.slice(n, r);
  e.slice(n, r);
  if (!((u > -1))) goto L_20d;
  let e#1;
  e#1 = o[0];
  if (!(("string" == typeof e#1))) goto L_1e5;
  o[0] = e#1.slice(u);
  goto L_20c;
  // [栈深重同步 1 -> 0]
  o.shift();
  if (!((i > 0))) goto L_26a;
  o.push(e[r].slice(0, i));
  return o;
}

// fn an  args=2 vars=7 closure=0 cpool=0 bc=335B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o
function {
  let r;
  let u;
  let n;
  n = -1;
  u = [];
  r = undefined;
  n = (n ++);
  if (!(((n ++) < e.length))) goto L_127;
  let o;
  let i;
  i = e[n];
  o = undefined;
  if (!(("string" == typeof i))) goto L_47;
  o = i;
  i;
  goto L_ee;
  if (!((i === -5))) goto L_5d;
  o = "";
  "";
  goto L_ed;
  if (!((i === -4))) goto L_70;
  o = "
";
  "
";
  goto L_ed;
  if (!((i === -3))) goto L_82;
  o = "
";
  "
";
  goto L_ed;
  if (!((i === -2))) goto L_9e;
  if (!(t)) goto L_92;
  goto L_97;
  // [栈深重同步 2 -> 1]
  o = "	";
  "	";
  goto L_ed;
  if (!((i === -1))) goto L_bc;
  if (!(!t)) goto L_b0;
  if (!(r)) goto L_b0;
  i;
  goto L_11;
  // [栈深重同步 0 -> 1]
  o = " ";
  " ";
  goto L_ed;
  o = String.fromCharCode(i);
  String.fromCharCode(i);
  <?>;
  r = (-2 === i);
  (-2 === i);
  u.push(o);
  goto L_11;
  return u.join("");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=9B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: on, t, e
function {
  return on(t, e, n);   // tail call
}

// fn n  args=1 vars=1 closure=2 cpool=1 bc=3B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: on, t
function {
  return function <atom:0>;
}

// fn ln  args=1 vars=3 closure=8 cpool=1 bc=134B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n
// closure: on, q, Qt, Y, X, jt, Ht, $t
function {
  n = function n;
  let t;
  if ((e)) goto L_13;
  if (({}.extensions)) goto L_3b;
  // append([Qt], 1, [])
  [];
  t = {constructs: q([Qt]), content: n(Y), defined: [], document: n(X), flow: n(jt), lazy: {}, string: n(Ht), text: n($t)};
  return t;
}

// fn cn  args=1 vars=1 closure=1 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: ze
function {
  if (!(!ze(e))) goto L_8;
  goto L_0;
  return e;
}

// fn <atom:0>  args=3 vars=9 closure=5 cpool=0 bc=1174B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: r, i, o
// locals: s, a, l, c, D, f
// closure: n, u, Dn, e, t
function {
  let f;
  let D;
  let c;
  let l;
  let a;
  let s;
  s = [];
  a = undefined;
  l = undefined;
  c = undefined;
  D = undefined;
  f = undefined;
  if (!(("string" == typeof r))) goto L_56;
  goto L_8a;
  // [栈深重同步 2 -> 1]
  if ((i)) goto L_62;
  r = (n + new TextDecoder(undefined).decode(r));
  c = 0;
  0;
  n = "";
  "";
  if (!(u)) goto L_dc;
  if (!((65279 === r.charCodeAt(0)))) goto L_d6;
  c = <c_new>;
  (c++);
  u = undefined;
  undefined;
  if (!((c < r.length))) goto L_3fe;
  Dn.lastIndex = c;
  a = Dn.exec(r);
  Dn.exec(r);
  if (!(a)) goto L_173;
  if (!((undefined !== a.index))) goto L_173;
  goto L_175;
  // [栈深重同步 1 -> 0]
  D = r.length;
  r.length;
  f = r.charCodeAt(D);
  r.charCodeAt(D);
  if (!(!a)) goto L_1dd;
  n = r.slice(c);
  r.slice(c);
  goto L_3fe;
  if (!((10 === f))) goto L_226;
  if (!((c === D))) goto L_226;
  if (!(e)) goto L_226;
  s.push(-3);
  e = undefined;
  undefined;
  goto L_3f1;
  if (!(e)) goto L_25c;
  s.push(-5);
  e = undefined;
  undefined;
  if (!((c < D))) goto L_2ca;
  s.push(r.slice(c, D));
  t = (t + (D - c));
  (t + (D - c));
  if (!((f === 0))) goto L_30b;
  s.push(65533);
  t = <t_new>;
  (t++);
  goto L_3f0;
  if (!((f === 9))) goto L_3ab;
  l = (4 * Math.ceil((t / 4)));
  (4 * Math.ceil((t / 4)));
  s.push(-2);
  t = <t_new>;
  if (!(((t++) < l))) goto L_3f0;
  s.push(-1);
  goto L_373;
  if (!((f === 10))) goto L_3e3;
  s.push(-4);
  t = 1;
  1;
  goto L_3f0;
  e = true;
  true;
  t = 1;
  1;
  f;
  c = (D + 1);
  (D + 1);
  goto L_dd;
  if (!(o)) goto L_491;
  if (!(e)) goto L_436;
  s.push(-5);
  if (!(n)) goto L_468;
  s.push(n);
  s.push(null);
  return s;
}

// fn fn  args=0 vars=4 closure=1 cpool=1 bc=24B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, n, u
// closure: Dn
function {
  let u;
  let n;
  let t;
  let e;
  e = undefined;
  t = 1;
  n = "";
  u = true;
  return function <atom:0>;
}

// fn dn  args=1 vars=1 closure=2 cpool=0 bc=39B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: hn, pn
function {
  return e.replace(hn, pn);   // tail call
}

// fn pn  args=3 vars=5 closure=2 cpool=0 bc=180B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: e#1, t#1
// closure: z, w
function {
  if (!(t)) goto L_5;
  return t;
  if (!((35 === n.charCodeAt(0)))) goto L_ab;
  let t#1;
  let e#1;
  e#1 = n.charCodeAt(1);
  if (((120 === e#1))) goto L_6d;
  t#1 = (88 === e#1);
  if (!(t#1)) goto L_99;
  goto L_9a;
  // [栈深重同步 4 -> 3]
  if (!(t#1)) goto L_a6;
  goto L_a8;
  // [栈深重同步 3 -> 2]
  return z(n.slice(1), 10);   // tail call
  if ((w(n))) goto L_b3;
  return e;
}

// fn Fn  args=1 vars=1 closure=2 cpool=0 bc=122B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: gn, mn
function {
  if (!(e)) goto L_78;
  if (!(("object" == typeof e))) goto L_78;
  if ((("position" in e))) goto L_1f;
  if (!(("type" in e))) goto L_46;
  return gn(e.position);
  if ((("start" in e))) goto L_58;
  if (!(("end" in e))) goto L_5e;
  return gn(e);
  if ((("line" in e))) goto L_70;
  if (!(("column" in e))) goto L_76;
  return mn(e);
  return "";
  return "";
}

// fn mn  args=1 vars=1 closure=1 cpool=0 bc=90B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: En
function {
  if (!(e)) goto L_28;
  if (!(e)) goto L_57;
  return ((En(e.line) + ":") + En(e.column));
}

// fn gn  args=1 vars=1 closure=1 cpool=0 bc=90B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: mn
function {
  if (!(e)) goto L_28;
  if (!(e)) goto L_57;
  return ((mn(e.start) + "-") + mn(e.end));
}

// fn En  args=1 vars=1 closure=0 cpool=0 bc=17B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!(e)) goto L_f;
  if (!(("number" == typeof e))) goto L_f;
  return e;
  return 1;
}

// fn An  args=3 vars=3 closure=4 cpool=0 bc=107B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: xn, cn, ln, fn
function {
  if (!(("string" != typeof t))) goto L_10;
  n = t;
  t = undefined;
  undefined;
  return xn(n)(cn(ln(n).document().write(fn()(e, t, true))));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=20B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return {type: "blockquote", children: []};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=18B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return {type: "inlineCode", value: ""};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=36B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return {type: "definition", identifier: "", label: null, title: null, url: ""};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=20B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return {type: "emphasis", children: []};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=30B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return {type: "image", title: null, url: "", alt: null};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=65B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return {type: "listItem", spread: e._spread, checked: null, children: []};
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=281B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (!(this.data.expectingFirstListItemValue)) goto L_118;
  this.stack[(this.stack.length - 2)].start = Number.parseInt(this.sliceSerialize(e), 10);
  this.data.expectingFirstListItemValue = undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=48B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  this.data.expectingFirstListItemValue = true;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=20B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return {type: "paragraph", children: []};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=51B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  this.data.referenceType = "collapsed";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=20B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return {type: "strong", children: []};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=12B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return {type: "thematicBreak"};
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=176B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
function {
  this = this;
  let t;
  t = this.stack[(this.stack.length - 1)];
  if (!(!t.depth)) goto L_af;
  let n;
  n = this.sliceSerialize(e).length;
  t.depth = n;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=168B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: D
function {
  this = this;
  D.call(this, e);
  this.stack[(this.stack.length - 1)].url = ("mailto:" + this.sliceSerialize(e));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=162B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: D
function {
  this = this;
  D.call(this, e);
  this.stack[(this.stack.length - 1)].url = this.sliceSerialize(e);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=327B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, this
// closure: z, w
function {
  this = this;
  let u;
  let n;
  let t;
  t = this.sliceSerialize(e);
  n = this.data.characterReferenceType;
  u = undefined;
  if (!(n)) goto L_c6;
  if (!(("characterReferenceMarkerNumeric" === n))) goto L_90;
  goto L_92;
  // [栈深重同步 3 -> 2]
  u = z(t, 16);
  z(t, 16);
  this.data.characterReferenceType = undefined;
  goto L_d0;
  u = w(t);
  w(t);
  this.stack[(this.stack.length - 1)].value = (this.stack[(this.stack.length - 1)].value + u);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=151B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: kn
function {
  this = this;
  this.stack.pop().position.end = kn(e.end);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=2 bc=214B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  let e;
  e = this.resume();
  this.stack[(this.stack.length - 1)].value = e.replace(new RegExp("^(\\r?\\n|\\r)|(\\r?\\n|\\r)$"), "");
  this.data.flowCodeInside = undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=156B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  if (!(this.data.flowCodeInside)) goto L_48;
  return;
  this.buffer();
  this.data.flowCodeInside = true;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=128B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  let e;
  e = this.resume();
  this.stack[(this.stack.length - 1)].lang = e;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=128B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  let e;
  e = this.resume();
  this.stack[(this.stack.length - 1)].meta = e;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=2 bc=170B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  let e;
  e = this.resume();
  this.stack[(this.stack.length - 1)].value = e.replace(new RegExp("(\\r?\\n|\\r)$"), "");
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=128B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  let e;
  e = this.resume();
  this.stack[(this.stack.length - 1)].value = e;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=128B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  let e;
  e = this.resume();
  this.stack[(this.stack.length - 1)].url = e;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=223B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
// closure: L
function {
  this = this;
  let n;
  let t;
  t = this.resume();
  n = this.stack[(this.stack.length - 1)];
  n.label = t;
  n.identifier = L(this.sliceSerialize(e)).toLowerCase();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=128B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  let e;
  e = this.resume();
  this.stack[(this.stack.length - 1)].title = e;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=128B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  let e;
  e = this.resume();
  this.stack[(this.stack.length - 1)].value = e;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=128B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  let e;
  e = this.resume();
  this.stack[(this.stack.length - 1)].value = e;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=383B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, this
function {
  this = this;
  let e;
  e = this.stack[(this.stack.length - 1)];
  if (!(this.data.inReference)) goto L_13e;
  let t;
  if ((this.data.referenceType)) goto L_e5;
  t = "shortcut";
  e.type = (e.type + "Reference");
  e.referenceType = t;
  delete "url";
  delete "title";
  goto L_152;
  // [栈深重同步 2 -> 0]
  delete "identifier";
  delete "label";
  this.data.referenceType = undefined;
  e;
  e;
  return;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=363B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, n, t#1, this
function {
  this = this;
  let n;
  let t;
  let e;
  e = this.stack[(this.stack.length - 1)];
  t = this.resume();
  n = this.stack[(this.stack.length - 1)];
  this.data.inReference = true;
  if (!(("link" === n.type))) goto L_15b;
  let t#1;
  t#1 = e.children;
  n.children = t#1;
  return;
  n.alt = t;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=191B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
// closure: dn, L
function {
  this = this;
  let n;
  let t;
  t = this.sliceSerialize(e);
  n = this.stack[(this.stack.length - 2)];
  n.label = dn(t);
  n.identifier = L(t).toLowerCase();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=616B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: n, this
// closure: kn, t, c, D
function {
  this = this;
  let n;
  n = this.stack[(this.stack.length - 1)];
  if (!(this.data.atHardBreak)) goto L_15d;
  n.children[(n.children.length - 1)].position.end = kn(e.end);
  this.data.atHardBreak = undefined;
  return;
  if (!(!this.data.setextHeadingSlurpLineEnding)) goto L_267;
  if (!(t.canContainEols.includes(n.type))) goto L_267;
  c.call(this, e);
  D.call(this, e);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=383B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, this
function {
  this = this;
  let e;
  e = this.stack[(this.stack.length - 1)];
  if (!(this.data.inReference)) goto L_13e;
  let t;
  if ((this.data.referenceType)) goto L_e5;
  t = "shortcut";
  e.type = (e.type + "Reference");
  e.referenceType = t;
  delete "url";
  delete "title";
  goto L_152;
  // [栈深重同步 2 -> 0]
  delete "identifier";
  delete "label";
  this.data.referenceType = undefined;
  e;
  e;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=271B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
// closure: L
function {
  this = this;
  let n;
  let t;
  t = this.resume();
  n = this.stack[(this.stack.length - 1)];
  n.label = t;
  n.identifier = L(this.sliceSerialize(e)).toLowerCase();
  this.data.referenceType = "full";
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=128B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  let e;
  e = this.resume();
  this.stack[(this.stack.length - 1)].url = e;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=128B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  let e;
  e = this.resume();
  this.stack[(this.stack.length - 1)].title = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=47B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  this.data.inReference = undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=47B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  this.data.setextHeadingSlurpLineEnding = undefined;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=168B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (!((61 === this.sliceSerialize(e).codePointAt(0)))) goto L_9d;
  goto L_9e;
  // [栈深重同步 2 -> 1]
  this.stack[(this.stack.length - 1)].depth = 2;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=48B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  this.data.setextHeadingSlurpLineEnding = true;
  return;
}

// fn <atom:0>  args=1 vars=7 closure=10 cpool=0 bc=1104B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: r, s, c, D, n, e#1
// closure: t, o, a, i, l, n, u, Cn, bn, kn
function {
  let D;
  let c;
  let s;
  let r;
  r = {type: "root", children: []};
  s = {stack: [r], tokenStack: [], config: t, enter: o, exit: a, buffer: i, resume: l, data: n};
  c = [];
  D = -1;
  D = (D ++);
  if (!(((D ++) < e.length))) goto L_14b;
  if ((("listOrdered" === e[D][1].type))) goto L_d5;
  if (!(("listUnordered" === e[D][1].type))) goto L_65;
  if (!(("enter" === e[D][0]))) goto L_114;
  c.push(D);
  goto L_65;
  D = u(e, c.pop(), D);
  u(e, c.pop(), D);
  goto L_65;
  D = -1;
  -1;
  D = (D ++);
  if (!(((D ++) < e.length))) goto L_27f;
  let n;
  n = t[e[D][0]];
  if (!(Cn.call(n, e[D][1].type))) goto L_27b;
  n[e[D][1].type].call(Object.assign({sliceSerialize: e[D][2].sliceSerialize}, s), e[D][1]);
  goto L_151;
  if (!((s.tokenStack.length > 0))) goto L_336;
  let e#1;
  e#1 = s.tokenStack[(s.tokenStack.length - 1)];
  if ((e#1[1])) goto L_308;
  bn.call(s, undefined, e#1[0]);
  if (!((e.length > 0))) goto L_36b;
  goto L_37e;
  // [栈深重同步 4 -> 3]
  if (!((e.length > 0))) goto L_3b8;
  goto L_3cb;
  // [栈深重同步 4 -> 3]
  r.position = {start: kn({line: 1, column: 1, offset: 0}), end: kn({line: 1, column: 1, offset: 0})};
  D = -1;
  -1;
  D = (D ++);
  if (!(((D ++) < t.transforms.length))) goto L_44c;
  if ((t.transforms[D].call(t.transforms, r))) goto L_445;
  r = r;
  r;
  goto L_3e0;
  return r;
}

// fn u  args=3 vars=14 closure=0 cpool=0 bc=1479B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, t#1, o#1, t#2, r#1
function {
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  let u;
  u = undefined;
  r = undefined;
  i = undefined;
  o = undefined;
  s = (t - 1);
  a = -1;
  l = false;
  s = (s ++);
  if (!(((s ++) <= n))) goto L_5b4;
  let t#1;
  t#1 = e[s];
  if (((t#1[1].type === "listUnordered"))) goto L_83;
  if (((t#1[1].type === "listOrdered"))) goto L_83;
  if (!((t#1[1].type === "blockQuote"))) goto L_a9;
  if (!(("enter" === t#1[0]))) goto L_99;
  a = <a_new>;
  goto L_a0;
  // [栈深重同步 2 -> 1]
  a = <a_new>;
  (a--);
  o = undefined;
  undefined;
  goto L_123;
  if (!((t#1[1].type === "lineEndingBlank"))) goto L_ee;
  if (!(("enter" === t#1[0]))) goto L_eb;
  if ((!u)) goto L_e5;
  if ((o)) goto L_e5;
  if ((a)) goto L_e5;
  if ((i)) goto L_e5;
  i = s;
  s;
  o = undefined;
  undefined;
  goto L_123;
  if (((t#1[1].type === "linePrefix"))) goto L_123;
  if (((t#1[1].type === "listItemValue"))) goto L_123;
  if (((t#1[1].type === "listItemMarker"))) goto L_123;
  if (((t#1[1].type === "listItemPrefix"))) goto L_123;
  if (!((t#1[1].type === "listItemPrefixWhitespace"))) goto L_11d;
  goto L_123;
  o = undefined;
  undefined;
  t#1[1].type;
  if (!(!a)) goto L_167;
  if (!(("enter" === t#1[0]))) goto L_167;
  if ((("listItemPrefix" === t#1[1].type))) goto L_1e1;
  if (!((-1 === a))) goto L_29;
  if (!(("exit" === t#1[0]))) goto L_29;
  if ((("listUnordered" === t#1[1].type))) goto L_1e1;
  if (!(("listOrdered" === t#1[1].type))) goto L_29;
  if (!(u)) goto L_4b4;
  let o#1;
  o#1 = s;
  r = undefined;
  undefined;
  o#1 = <o#1_new>;
  if (!((o#1--))) goto L_3b3;
  let t#2;
  t#2 = e[o#1];
  if ((("lineEnding" === t#2[1].type))) goto L_26e;
  if (!(("lineEndingBlank" === t#2[1].type))) goto L_2be;
  if ((("exit" === t#2[0]))) goto L_1fc;
  if (!(r)) goto L_29f;
  e[r][1].type = "lineEndingBlank";
  l = true;
  true;
  t#2[1].type = "lineEnding";
  r = o#1;
  o#1;
  goto L_1fc;
  if (!(("linePrefix" !== t#2[1].type))) goto L_1fc;
  if (!(("blockQuotePrefix" !== t#2[1].type))) goto L_1fc;
  if (!(("blockQuotePrefixWhitespace" !== t#2[1].type))) goto L_1fc;
  if (!(("blockQuoteMarker" !== t#2[1].type))) goto L_1fc;
  if ((("listItemIndent" !== t#2[1].type))) goto L_3b3;
  goto L_1fc;
  if (!(i)) goto L_3dc;
  if ((!r)) goto L_3c9;
  if (!((i < r))) goto L_3dc;
  u._spread = true;
  true;
  if (!(r)) goto L_436;
  goto L_45c;
  // [栈深重同步 5 -> 4]
  u.end = Object.assign({}, t#1[1].end);
  if ((r)) goto L_494;
  e.splice(s, 0, ["exit", u, t#1[2]]);
  s = <s_new>;
  (s++);
  n = (n ++);
  if (!(("listItemPrefix" === t#1[1].type))) goto L_29;
  let r#1;
  r#1 = {type: "listItem", _spread: false, start: Object.assign({}, t#1[1].start), end: undefined};
  u = r#1;
  r#1;
  e.splice(s, 0, ["enter", r#1, t#1[2]]);
  s = <s_new>;
  (s++);
  n = (n ++);
  i = undefined;
  undefined;
  o = true;
  true;
  goto L_29;
  e[t][1]._spread = l;
  return n;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=90B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// locals: this
// closure: o, e, t
function {
  this = this;
  o.call(this, e(n), n);
  if (!(t)) goto L_59;
  t.call(this, n);
  return;
}

// fn r  args=2 vars=2 closure=1 cpool=1 bc=3B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: o
function {
  return function <atom:0>;
}

// fn i  args=0 vars=1 closure=0 cpool=0 bc=92B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  this.stack.push({type: "fragment", children: []});
  return;
}

// fn o  args=3 vars=4 closure=1 cpool=0 bc=357B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: this
// closure: kn
function {
  this = this;
  this.stack[(this.stack.length - 1)].children.push(e);
  this.stack.push(e);
  if ((n)) goto L_123;
  this.tokenStack.push([t, undefined]);
  e.position = {start: kn(t.start), end: undefined};
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=87B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: this
// closure: e, a
function {
  this = this;
  if (!(e)) goto L_2e;
  e.call(this, t);
  a.call(this, t);
  return;
}

// fn s  args=1 vars=1 closure=1 cpool=1 bc=3B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: a
function {
  return function <atom:0>;
}

// fn a  args=2 vars=5 closure=3 cpool=0 bc=564B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, this
// closure: Fn, bn, kn
function {
  this = this;
  let u;
  let n;
  n = this.stack.pop();
  u = this.tokenStack.pop();
  if (!(!u)) goto L_12f;
  throw new Error((((("Cannot close `" + e.type) + "` (") + Fn({start: e.start, end: e.end})) + "): it’s not open"));
  if (!((u[0].type !== e.type))) goto L_1e2;
  if (!(t)) goto L_1ac;
  t.call(this, e, u[0]);
  goto L_1e2;
  if ((u[1])) goto L_1b6;
  bn.call(this, e, u[0]);
  n.position.end = kn(e.end);
  return;
}

// fn l  args=0 vars=1 closure=1 cpool=0 bc=76B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
// closure: x
function {
  this = this;
  return x(this.stack.pop());   // tail call
}

// fn c  args=1 vars=4 closure=1 cpool=0 bc=377B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
// closure: kn
function {
  this = this;
  let n;
  let t;
  t = this.stack[(this.stack.length - 1)].children;
  n = t[(t.length - 1)];
  if (!(n)) goto L_ae;
  if ((("text" === n.type))) goto L_12e;
  n = {type: "text", value: ""};
  {type: "text", value: ""};
  n.position = {start: kn(e.start), end: undefined};
  t.push(n);
  this.stack.push(n);
  return;
}

// fn D  args=1 vars=3 closure=1 cpool=0 bc=242B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
// closure: kn
function {
  this = this;
  let t;
  t = this.stack.pop();
  t.value = (t.value + this.sliceSerialize(e));
  t.position.end = kn(e.end);
  return;
}

// fn f  args=0 vars=1 closure=0 cpool=0 bc=48B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  this.data.atHardBreak = true;
  return;
}

// fn h  args=1 vars=2 closure=0 cpool=0 bc=80B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.data.characterReferenceType = e.type;
  return;
}

// fn d  args=0 vars=0 closure=0 cpool=0 bc=30B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return {type: "code", lang: null, meta: null, value: ""};
}

// fn p  args=0 vars=0 closure=0 cpool=0 bc=26B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return {type: "heading", depth: 0, children: []};
}

// fn F  args=0 vars=0 closure=0 cpool=0 bc=12B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return {type: "break"};
}

// fn m  args=0 vars=0 closure=0 cpool=0 bc=18B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return {type: "html", value: ""};
}

// fn g  args=0 vars=0 closure=0 cpool=0 bc=32B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return {type: "link", title: null, url: "", children: []};
}

// fn E  args=1 vars=1 closure=0 cpool=0 bc=110B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return {type: "list", ordered: ("listOrdered" === e.type), start: null, spread: e._spread, children: []};
}

// fn xn  args=1 vars=20 closure=10 cpool=58 bc=1019B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r, i, o, s, a, l, c, D, f, h, d, p, F, m, g, E
// closure: z, w, kn, L, dn, Cn, bn, Fn, x, vn
function {
  u = function u;
  r = function r;
  i = function i;
  o = function o;
  s = function s;
  a = function a;
  l = function l;
  c = function c;
  D = function D;
  f = function f;
  h = function h;
  d = function d;
  p = function p;
  F = function F;
  m = function m;
  g = function g;
  E = function E;
  let n;
  let t;
  t = {transforms: [], canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"], enter: {autolink: r(g), autolinkProtocol: c, autolinkEmail: c, atxHeading: r(p), blockQuote: r(function <atom:0>), characterEscape: c, characterReference: c, codeFenced: r(d), codeFencedFenceInfo: i, codeFencedFenceMeta: i, codeIndented: r(d, i), codeText: r(function <atom:0>, i), codeTextData: c, data: c, codeFlowValue: c, definition: r(function <atom:0>), definitionDestinationString: i, definitionLabelString: i, definitionTitleString: i, emphasis: r(function <atom:0>), hardBreakEscape: r(F), hardBreakTrailing: r(F), htmlFlow: r(m, i), htmlFlowData: c, htmlText: r(m, i), htmlTextData: c, image: r(function <atom:0>), label: i, link: r(g), listItem: r(function <atom:0>), listItemValue: function <atom:0>, listOrdered: r(E, function <atom:0>), listUnordered: r(E), paragraph: r(function <atom:0>), reference: function <atom:0>, referenceString: i, resourceDestinationString: i, resourceTitleString: i, setextHeading: r(p), strong: r(function <atom:0>), thematicBreak: r(function <atom:0>)}, exit: {atxHeading: s(), atxHeadingSequence: function <atom:0>, autolink: s(), autolinkEmail: function <atom:0>, autolinkProtocol: function <atom:0>, blockQuote: s(), characterEscapeValue: D, characterReferenceMarkerHexadecimal: h, characterReferenceMarkerNumeric: h, characterReferenceValue: function <atom:0>, characterReference: function <atom:0>, codeFenced: s(function <atom:0>), codeFencedFence: function <atom:0>, codeFencedFenceInfo: function <atom:0>, codeFencedFenceMeta: function <atom:0>, codeFlowValue: D, codeIndented: s(function <atom:0>), codeText: s(function <atom:0>), codeTextData: D, data: D, definition: s(), definitionDestinationString: function <atom:0>, definitionLabelString: function <atom:0>, definitionTitleString: function <atom:0>, emphasis: s(), hardBreakEscape: s(f), hardBreakTrailing: s(f), htmlFlow: s(function <atom:0>), htmlFlowData: D, htmlText: s(function <atom:0>), htmlTextData: D, image: s(function <atom:0>), label: function <atom:0>, labelText: function <atom:0>, lineEnding: function <atom:0>, link: s(function <atom:0>), listItem: s(), listOrdered: s(), listUnordered: s(), paragraph: s(), referenceString: function <atom:0>, resourceDestinationString: function <atom:0>, resourceTitleString: function <atom:0>, resource: function <atom:0>, setextHeading: s(function <atom:0>), setextHeadingLineSequence: function <atom:0>, setextHeadingText: function <atom:0>, strong: s(), thematicBreak: s()}};
  if ((e)) goto L_3cc;
  if (({}.mdastExtensions)) goto L_3f4;
  vn(t, []);
  n = {};
  return function <atom:0>;
}

// fn kn  args=1 vars=1 closure=0 cpool=0 bc=119B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return {line: e.line, column: e.column, offset: e.offset};
}

// fn vn  args=2 vars=4 closure=2 cpool=0 bc=91B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u
// closure: vn, yn
function {
  let n;
  n = -1;
  n = (n ++);
  if (!(((n ++) < t.length))) goto L_5a;
  let u;
  u = t[n];
  if (!(Array.isArray(u))) goto L_51;
  goto L_57;
  // [栈深重同步 1 -> 0]
  yn(e, u);
  goto L_5;
  return;
}

// fn yn  args=2 vars=6 closure=1 cpool=0 bc=314B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, u#1, u#2
// closure: Cn
function {
  let n;
  n = undefined;
  for (const n of t) {
    if (!(Cn.call(t, n))) continue;
    if (!((n === "canContainEols"))) goto L_8e;
    let u;
    u = t[n];
    if (!(u)) goto L_8a;
    // append([], 0, u)
    u;
    e[n].push.apply(e[n], []);
    goto L_131;
    if (!((n === "transforms"))) goto L_dd;
    let u#1;
    u#1 = t[n];
    if (!(u#1)) goto L_da;
    // append([], 0, u#1)
    u#1;
    e[n].push.apply(e[n], []);
    goto L_131;
    if (((n === "enter"))) goto L_ef;
    if (!((n === "exit"))) goto L_131;
    let u#2;
    u#2 = t[n];
    if (!(u#2)) goto L_130;
    Object.assign(e[n], u#2);
    n;
  }
  return;
}

// fn bn  args=2 vars=2 closure=1 cpool=0 bc=423B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: Fn
function {
  if (!(e)) goto L_117;
  throw new Error((((((((("Cannot close `" + e.type) + "` (") + Fn({start: e.start, end: e.end})) + "): a different token (`") + t.type) + "`, ") + Fn({start: t.start, end: t.end})) + ") is open"));
  throw new Error((((("Cannot close document, a token (`" + t.type) + "`, ") + Fn({start: t.start, end: t.end})) + ") is still open"));
}

// fn Bn  args=1 vars=2 closure=0 cpool=0 bc=14B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.content = e;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=92B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
function {
  this = this;
  t = 0;
  if (!((t < this.content.length))) goto L_5a;
  if (!((this.content[t] === e))) goto L_55;
  return t;
  // add_loc(2)
  goto L_4;
  return -1;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=87B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
function {
  this = this;
  t = this.find(e);
  if (!((-1 == t))) goto L_30;
  return undefined;
  return this.content[(t + 1)];
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=0 bc=237B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, this
// closure: Bn
function {
  this = this;
  if (!(n)) goto L_32;
  if (!((n != e))) goto L_32;
  goto L_33;
  // [栈深重同步 1 -> 0]
  u = this;
  r = this.find(e);
  i = u.content.slice();
  if (!((-1 == r))) goto L_d4;
  if ((n)) goto L_ce;
  goto L_e5;
  // [栈深重同步 1 -> 0]
  i[(r + 1)] = t;
  if (!(n)) goto L_e5;
  i[r] = n;
  n;
  return new Bn(i);
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=165B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
// closure: Bn
function {
  this = this;
  t = this.find(e);
  if (!((-1 == t))) goto L_30;
  return this;
  n = this.content.slice();
  this.content.slice().splice(t, 2);
  return new Bn(n);
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=120B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: this
// closure: Bn
function {
  this = this;
  return new Bn([e, t].concat(this.remove(e).content));
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=156B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, this
// closure: Bn
function {
  this = this;
  n = this.remove(e).content.slice();
  this.remove(e).content.slice().push(e, t);
  return new Bn(n);
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=0 bc=208B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, this
// closure: Bn
function {
  this = this;
  u = this.remove(t);
  r = this.remove(t).content.slice();
  i = u.find(e);
  if (!((-1 == i))) goto L_c1;
  goto L_c2;
  // [栈深重同步 3 -> 2]
  r.splice(i, 0, t, n);
  return new Bn(r);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=126B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
function {
  this = this;
  t = 0;
  if (!((t < this.content.length))) goto L_7d;
  e(this.content[t], this.content[(t + 1)]);
  // add_loc(2)
  goto L_4;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=228B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: Bn
function {
  this = this;
  e = Bn.from(e);
  if (!(Bn.from(e).size)) goto L_e2;
  return new Bn(e.content.concat(this.subtract(e).content));
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=228B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: Bn
function {
  this = this;
  e = Bn.from(e);
  if (!(Bn.from(e).size)) goto L_e2;
  return new Bn(this.subtract(e).content.concat(e.content));
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=165B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
// closure: Bn
function {
  this = this;
  t = this;
  e = Bn.from(e);
  n = 0;
  if (!((n < e.content.length))) goto L_a3;
  t = t.remove(e.content[n]);
  // add_loc(2)
  goto L_2d;
  return t;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=5B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t, n
// closure: e
function {
  e[t] = n;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=46B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  e = {};
  this.forEach(function <atom:0>);
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return (this.content.length >> 1);
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=73B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n
// closure: Bn
function {
  if (!((e instanceof Bn))) goto L_7;
  return e;
  t = [];
  if (!(e)) goto L_42;
  for (const n of e) {
    t.push(n, e[n]);
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  return new Bn(t);
}

// fn Sn  args=3 vars=10 closure=3 cpool=0 bc=1014B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, e#1, t#1, u#1, e#2
// closure: qn, In, Sn
function {
  let u;
  u = 0;
  goto L_f;
  u = <u_new>;
  (u++);
  let i;
  let r;
  if (((u == e.childCount))) goto L_65;
  if (!((u == t.childCount))) goto L_b2;
  if (!((e.childCount == t.childCount))) goto L_b0;
  return null;
  return n;
  r = e.child(u);
  i = t.child(u);
  if (!((r != i))) goto L_3cc;
  if (!(!r.sameMarkup(i))) goto L_13f;
  return n;
  if (!(r.isText)) goto L_2b5;
  if (!((r.text != i.text))) goto L_2b5;
  let u#1;
  let t#1;
  let e#1;
  e#1 = r.text;
  t#1 = i.text;
  u#1 = 0;
  if (!((e#1[u#1] == t#1[u#1]))) goto L_22b;
  n = (n ++);
  u#1 = <u#1_new>;
  (u#1++);
  goto L_20d;
  if (!(u#1)) goto L_2b2;
  if (!((u#1 < e#1.length))) goto L_2b2;
  if (!((u#1 < t#1.length))) goto L_2b2;
  if (!(qn(e#1.charCodeAt((u#1 - 1))))) goto L_2b2;
  if (!(In(e#1.charCodeAt(u#1)))) goto L_2b2;
  n = <n_new>;
  (n--);
  return n;
  if ((r.content.size)) goto L_343;
  if (!(i.content.size)) goto L_3a2;
  let e#2;
  e#2 = Sn(r.content, i.content, (n + 1));
  if (!((null != e#2))) goto L_3a2;
  return e#2;
  n = (n + r.nodeSize);
  goto L_7;
  n = (n + r.nodeSize);
  goto L_7;
}

// fn Tn  args=4 vars=14 closure=3 cpool=0 bc=1023B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s, a, e#1, t#1, r#1, i#1, e#2
// closure: qn, In, Tn
function {
  let i;
  let r;
  r = e.childCount;
  i = t.childCount;
  let a;
  let s;
  let o;
  if (((0 == r))) goto L_63;
  if (!((0 == i))) goto L_7e;
  if (!((r == i))) goto L_70;
  return null;
  return {a: n, b: u};
  r = (r --);
  o = e.child((r --));
  i = (i --);
  s = t.child((i --));
  a = o.nodeSize;
  if (!((o != s))) goto L_3f0;
  if (!(!o.sameMarkup(s))) goto L_147;
  return {a: n, b: u};
  if (!(o.isText)) goto L_2f1;
  if (!((o.text != s.text))) goto L_2f1;
  let i#1;
  let r#1;
  let t#1;
  let e#1;
  e#1 = o.text;
  t#1 = s.text;
  r#1 = e#1.length;
  i#1 = t#1.length;
  if (!((r#1 > 0))) goto L_25d;
  if (!((i#1 > 0))) goto L_25d;
  if (!((e#1[(r#1 - 1)] == t#1[(i#1 - 1)]))) goto L_25d;
  r#1 = <r#1_new>;
  (r#1--);
  i#1 = <i#1_new>;
  (i#1--);
  n = (n --);
  u = (u --);
  goto L_222;
  if (!(r#1)) goto L_2e2;
  if (!(i#1)) goto L_2e2;
  if (!((r#1 < e#1.length))) goto L_2e2;
  if (!(qn(e#1.charCodeAt((r#1 - 1))))) goto L_2e2;
  if (!(In(e#1.charCodeAt(r#1)))) goto L_2e2;
  n = (n ++);
  u = <u_new>;
  (u++);
  return {a: n, b: u};
  if ((o.content.size)) goto L_37f;
  if (!(s.content.size)) goto L_3e1;
  let e#2;
  e#2 = Tn(o.content, s.content, (n - 1), (u - 1));
  if (!(e#2)) goto L_3e1;
  return e#2;
  n = (n - a);
  u = (u - a);
  goto L_4c;
  n = (n - a);
  u = (u - a);
  goto L_4c;
}

// fn In  args=1 vars=1 closure=0 cpool=0 bc=19B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!((e >= 56320))) goto L_12;
  return (e < 57344);
}

// fn qn  args=1 vars=1 closure=0 cpool=0 bc=19B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!((e >= 55296))) goto L_12;
  return (e < 56320);
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=153B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.content = e;
  if ((t)) goto L_21;
  this.size = 0;
  if (!((null == t))) goto L_98;
  let n;
  n = 0;
  if (!((n < e.length))) goto L_98;
  this.size = (this.size + e[n].nodeSize);
  n = <n_new>;
  (n++);
  goto L_34;
  return;
}

// fn <atom:0>  args=5 vars=16 closure=0 cpool=0 bc=502B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r
// locals: e#1, t#1, n#1, u#1, r#1, i, o, s, a, r#2, this
function {
  this = this;
  let r#1;
  let u#1;
  let n#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  n#1 = n;
  if (!((u === undefined))) goto L_20;
  u;
  u = 0;
  u#1 = 0;
  r#1 = r;
  let o;
  let i;
  i = 0;
  o = 0;
  if (!((o < t))) goto L_1f5;
  let a;
  let s;
  s = this.content[i];
  a = (o + s.nodeSize);
  if (!((a > e))) goto L_1e2;
  if ((r)) goto L_b2;
  if (!((false !== n(s, (u + o), null, i)))) goto L_1e2;
  if (!(s.content.size)) goto L_1e2;
  let r#2;
  r#2 = (o + 1);
  s.nodesBetween(Math.max(0, (e - r#2)), Math.min(s.content.size, (t - r#2)), n, (u + r#2));
  o = a;
  a;
  i = <i_new>;
  (i++);
  goto L_32;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=76B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.nodesBetween(0, this.size, e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=6 cpool=0 bc=596B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: o, s
// locals: a
// closure: e, t, u, n, i, r
function {
  let a;
  if (!(o.isText)) goto L_a0;
  goto L_1b2;
  // [栈深重同步 1 -> 0]
  if (!(o.isLeaf)) goto L_1b1;
  if (!(u)) goto L_de;
  if (!(("function" == typeof u))) goto L_da;
  goto L_1b2;
  // [栈深重同步 1 -> 0]
  goto L_1b2;
  // [栈深重同步 1 -> 0]
  if (!(o.type.spec.leafText)) goto L_1ae;
  goto L_1b2;
  // [栈深重同步 1 -> 0]
  goto L_1b2;
  // [栈深重同步 1 -> 0]
  a = "";
  if (!(o.isBlock)) goto L_247;
  if (!(o.isLeaf)) goto L_202;
  if ((a)) goto L_228;
  if (!(o.isTextblock)) goto L_247;
  if (!(n)) goto L_247;
  if (!(i)) goto L_23e;
  i = false;
  goto L_247;
  // [栈深重同步 1 -> 0]
  r = (r + n);
  (r + n);
  r = (r + a);
  (r + a);
  return;
}

// fn <atom:0>  args=4 vars=7 closure=0 cpool=1 bc=60B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, this
function {
  this = this;
  let i;
  let r;
  r = "";
  i = true;
  this.nodesBetween(e, t, function <atom:0>, 0);
  return r;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=671B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r, this
// closure: _Fragment
function {
  this = this;
  let r;
  let u;
  let n;
  let t;
  if (!(!e.size)) goto L_37;
  return this;
  if (!(!this.size)) goto L_5f;
  return e;
  t = this.lastChild;
  n = e.firstChild;
  u = this.content.slice();
  r = 0;
  if (!(t.isText)) goto L_1cc;
  if (!(t.sameMarkup(n))) goto L_1cc;
  u[(u.length - 1)] = t.withText((t.text + n.text));
  r = 1;
  1;
  if (!((r < e.content.length))) goto L_24e;
  u.push(e.content[r]);
  r = <r_new>;
  (r++);
  goto L_1cd;
  return new _Fragment(u, (this.size + e.size));
}

// fn <atom:0>  args=2 vars=11 closure=1 cpool=0 bc=809B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: e#1, t#1, n, u, r, i, o, s, this
// closure: _Fragment
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_35;
  t;
  t = this.size;
  t#1 = this.size;
  let u;
  let n;
  if (!((0 == e))) goto L_6b;
  if (!((t == this.size))) goto L_6b;
  return this;
  n = [];
  u = 0;
  if (!((t > e))) goto L_31b;
  let i;
  let r;
  r = 0;
  i = 0;
  if (!((i < t))) goto L_31b;
  let s;
  let o;
  o = this.content[r];
  s = (i + o.nodeSize);
  if (!((s > e))) goto L_307;
  if (((i < e))) goto L_102;
  if (!((s > t))) goto L_2af;
  if (!(o.isText)) goto L_1de;
  goto L_2ab;
  // [栈深重同步 1 -> 0]
  o = o.cut(Math.max(0, ((e - i) - 1)), Math.min(o.content.size, ((t - i) - 1)));
  o.cut(Math.max(0, ((e - i) - 1)), Math.min(o.content.size, ((t - i) - 1)));
  n.push(o);
  u = (u + o.nodeSize);
  (u + o.nodeSize);
  i = s;
  s;
  r = <r_new>;
  (r++);
  goto L_85;
  return new _Fragment(n, u);
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=170B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: this
// closure: _Fragment
function {
  this = this;
  if (!((e == t))) goto L_2c;
  return _Fragment.empty;
  if (!((0 == e))) goto L_5a;
  if (!((t == this.content.length))) goto L_5a;
  return this;
  return new _Fragment(this.content.slice(e, t));
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=255B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, this
// closure: _Fragment
function {
  this = this;
  let r;
  let u;
  let n;
  n = this.content[e];
  if (!((n == t))) goto L_39;
  return this;
  u = this.content.slice();
  r = ((this.size + t.nodeSize) - n.nodeSize);
  u[e] = t;
  return new _Fragment(u, r);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=153B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: _Fragment
function {
  this = this;
  return new _Fragment([e].concat(this.content), (this.size + e.nodeSize));
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=150B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: _Fragment
function {
  this = this;
  return new _Fragment(this.content.concat(e), (this.size + e.nodeSize));
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=259B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
function {
  this = this;
  if (!((this.content.length != e.content.length))) goto L_4e;
  return false;
  let t;
  t = 0;
  if (!((t < this.content.length))) goto L_100;
  if (!(!this.content[t].eq(e.content[t]))) goto L_f5;
  return false;
  t = <t_new>;
  (t++);
  goto L_53;
  return true;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  if (!(this.content.length)) goto L_4c;
  return this.content[0];
  return null;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=114B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  if (!(this.content.length)) goto L_70;
  return this.content[(this.content.length - 1)];
  return null;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=38B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.content.length;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=77B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.content[e];
  if (!(!t)) goto L_49;
  throw new RangeError(((("Index " + e) + " out of range for ") + this));
  return t;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=44B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if ((this.content[e])) goto L_2b;
  return null;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=164B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, this
function {
  this = this;
  let n;
  let t;
  t = 0;
  n = 0;
  if (!((t < this.content.length))) goto L_a3;
  let u;
  u = this.content[t];
  e(u, n, t);
  n = (n + u.nodeSize);
  (n + u.nodeSize);
  t = <t_new>;
  (t++);
  goto L_c;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=26B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: e#1, t#1, this
// closure: Sn
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_12;
  t;
  t = 0;
  t#1 = 0;
  return Sn(this, e, t);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=0 bc=107B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: e#1, t#1, n#1, this
// closure: Tn
function {
  this = this;
  let n#1;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_36;
  t;
  t = this.size;
  t#1 = this.size;
  if (!((n === undefined))) goto L_62;
  n;
  n = e#1.size;
  n#1 = e#1.size;
  return Tn(this, e, t, n);   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=345B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, this
// closure: zn
function {
  this = this;
  if (!((0 == e))) goto L_d;
  return zn(0, e);   // tail call
  if (!((e == this.size))) goto L_5b;
  return zn(this.content.length, e);   // tail call
  if (((e > this.size))) goto L_86;
  if (!((e < 0))) goto L_c7;
  throw new RangeError("Position ".concat(e, " outside of fragment (", this, ")"));
  let n;
  let t;
  t = 0;
  n = 0;
  goto L_db;
  t = <t_new>;
  (t++);
  let u;
  u = (n + this.child(t).nodeSize);
  if (!((u >= e))) goto L_14e;
  if (!((u == e))) goto L_145;
  return zn((t + 1), u);
  return zn(t, n);
  n = u;
  u;
  goto L_d3;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=52B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return (("<" + this.toStringInner()) + ">");
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.content.join(", ");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.toJSON();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=114B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  if (!(this.content.length)) goto L_70;
  return this.content.map(function <atom:0>);
  return null;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=211B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: _Fragment
function {
  if (!(!t)) goto L_29;
  return _Fragment.empty;
  if (!(!Array.isArray(t))) goto L_65;
  throw new RangeError("Invalid input for Fragment.fromJSON");
  return _Fragment.fromArray(t.map(e.nodeFromJSON));   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=488B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r
// closure: _Fragment
function {
  let n;
  let t;
  if (!(!e.length)) goto L_30;
  return _Fragment.empty;
  t = undefined;
  n = 0;
  let u;
  u = 0;
  if (!((u < e.length))) goto L_1d5;
  let r;
  r = e[u];
  n = (n + r.nodeSize);
  (n + r.nodeSize);
  if (!(u)) goto L_198;
  if (!(r.isText)) goto L_198;
  if (!(e[(u - 1)].sameMarkup(r))) goto L_198;
  if ((t)) goto L_112;
  t = e.slice(0, u);
  e.slice(0, u);
  t[(t.length - 1)] = r.withText((t[(t.length - 1)].text + r.text));
  goto L_1c9;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_1c9;
  t.push(r);
  u = <u_new>;
  (u++);
  goto L_39;
  if ((t)) goto L_1e1;
  return new _Fragment(e, n);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=284B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: _Fragment
function {
  this = this;
  if (!(!e)) goto L_2b;
  return _Fragment.empty;
  if (!((e instanceof _Fragment))) goto L_34;
  return e;
  if (!(Array.isArray(e))) goto L_86;
  return this.fromArray(e);   // tail call
  if (!(e.attrs)) goto L_d8;
  return new _Fragment([e], e.nodeSize);
  if (!(e.nodesBetween)) goto L_116;
  goto L_117;
  // [栈深重同步 4 -> 3]
  throw new RangeError(((("Can not convert " + e) + " to a Fragment") + ""));
}

// fn zn  args=2 vars=2 closure=1 cpool=0 bc=24B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: On
function {
  On.index = e;
  On.offset = t;
  return On;
}

// fn Ln  args=2 vars=6 closure=1 cpool=0 bc=266B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, n#1, n#2, n#3
// closure: Ln
function {
  let n;
  if (!((e === t))) goto L_b;
  return true;
  if ((!e)) goto L_2b;
  if ((("object" != typeof e))) goto L_2b;
  if ((!t)) goto L_2b;
  if (!(("object" != typeof t))) goto L_30;
  return false;
  n = Array.isArray(e);
  if (!((Array.isArray(t) != n))) goto L_8e;
  return false;
  if (!(n)) goto L_c6;
  if (!((e.length != t.length))) goto L_9d;
  return false;
  let n#1;
  n#1 = 0;
  if (!((n#1 < e.length))) goto L_107;
  if (!(!Ln(e[n#1], t[n#1]))) goto L_bc;
  return false;
  n#1 = <n#1_new>;
  (n#1++);
  goto L_a2;
  let n#2;
  for (const n#2 of e) {
    if ((!(n#2 in t))) goto L_e5;
    if (!(!Ln(e[n#2], t[n#2]))) continue;
    return false;
  }
  <catch>;
  let n#3;
  for (const n#3 of t) {
    if (!(!(n#3 in e))) continue;
    return false;
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  return true;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.type = e;
  this.attrs = t;
  return;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=778B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r, this
function {
  this = this;
  let n;
  let t;
  t = undefined;
  n = false;
  let u;
  u = 0;
  if (!((u < e.length))) goto L_2a4;
  let r;
  r = e[u];
  if (!(this.eq(r))) goto L_54;
  return e;
  if (!(this.type.excludes(r.type))) goto L_f9;
  if ((t)) goto L_f5;
  t = e.slice(0, u);
  e.slice(0, u);
  goto L_299;
  if (!(r.type.excludes(this.type))) goto L_168;
  return e;
  if (!(!n)) goto L_266;
  if (!((r.type.rank > this.type.rank))) goto L_266;
  if ((t)) goto L_235;
  t = e.slice(0, u);
  e.slice(0, u);
  t.push(this);
  n = true;
  true;
  if (!(t)) goto L_298;
  t.push(r);
  u = <u_new>;
  (u++);
  goto L_13;
  if ((t)) goto L_2d4;
  t = e.slice();
  e.slice();
  if ((n)) goto L_305;
  t.push(this);
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=194B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = 0;
  if (!((t < e.length))) goto L_c0;
  if (!(this.eq(e[t]))) goto L_b5;
  return e.slice(0, t).concat(e.slice((t + 1)));   // tail call
  t = <t_new>;
  (t++);
  goto L_7;
  return e;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=75B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = 0;
  if (!((t < e.length))) goto L_48;
  if (!(this.eq(e[t]))) goto L_3e;
  return true;
  t = <t_new>;
  (t++);
  goto L_7;
  return false;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=156B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: Ln
function {
  this = this;
  if (((this == e))) goto L_9b;
  if (!((this.type == e.type))) goto L_9b;
  return Ln(this.attrs, e.attrs);
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=177B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, this
function {
  this = this;
  let e;
  e = {type: this.type.name};
  let t;
  for (const t of this.attrs) {
    e.attrs = this.attrs;
    goto L_ac;
  }
  <catch>;
  return e;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=345B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u
function {
  let u;
  let n;
  if (!(!t)) goto L_19;
  throw new RangeError("Invalid input for Mark.fromJSON");
  n = e.marks[t.type];
  if (!(!n)) goto L_bf;
  throw new RangeError("There is no mark type ".concat(t.type, " in this schema"));
  u = n.create(t.attrs);
  n.checkAttrs(u.attrs);
  return u;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=96B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
function {
  if (!((e == t))) goto L_8;
  return true;
  if (!((e.length != t.length))) goto L_12;
  return false;
  let n;
  n = 0;
  if (!((n < e.length))) goto L_5d;
  if (!(!e[n].eq(t[n]))) goto L_53;
  return false;
  n = <n_new>;
  (n++);
  goto L_17;
  return true;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=136B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  return (e.type.rank - t.type.rank);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=192B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
// closure: _Mark
function {
  let t;
  if ((!e)) goto L_39;
  if (!(Array.isArray(e))) goto L_60;
  if (!((0 == e.length))) goto L_60;
  return _Mark.none;
  if (!((e instanceof _Mark))) goto L_6c;
  return [e];
  t = e.slice();
  t.sort(function <atom:0>);
  return t;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=markdown_diff/runtime_bundle/MarkdownDiff
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

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=49B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.content = e;
  this.openStart = t;
  this.openEnd = n;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=140B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return ((this.content.size - this.openStart) - this.openEnd);
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=239B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, this
// closure: jn, _Slice
function {
  this = this;
  let n;
  n = jn(this.content, (e + this.openStart), t, (this.openStart + 1), (this.openEnd + 1));
  if (!(n)) goto L_ee;
  return new _Slice(n, this.openStart, this.openEnd);
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=186B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: this
// closure: _Slice, Pn
function {
  this = this;
  return new _Slice(Pn(this.content, (e + this.openStart), (t + this.openStart)), this.openStart, this.openEnd);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=256B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (!(this.content.eq(e.content))) goto L_ff;
  if (!((this.openStart == e.openStart))) goto L_ff;
  return (this.openEnd == e.openEnd);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=125B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return (((((this.content + "(") + this.openStart) + ",") + this.openEnd) + ")");
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=334B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  let e;
  if (!(!this.content.size)) goto L_4d;
  return null;
  e = {content: this.content.toJSON()};
  if (!((this.openStart > 0))) goto L_f1;
  e.openStart = this.openStart;
  this.openStart;
  if (!((this.openEnd > 0))) goto L_149;
  e.openEnd = this.openEnd;
  this.openEnd;
  return e;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=254B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u
// closure: _Slice, Mn
function {
  let u;
  let n;
  if (!(!t)) goto L_2f;
  return _Slice.empty;
  if ((t.openStart)) goto L_56;
  n = 0;
  if ((t.openEnd)) goto L_7e;
  u = 0;
  if ((("number" != typeof n))) goto L_97;
  if (!(("number" != typeof u))) goto L_a8;
  throw new RangeError("Invalid input for Slice.fromJSON");
  return new _Slice(Mn.fromJSON(e, t.content), n, u);
}

// fn <atom:0>  args=2 vars=8 closure=1 cpool=0 bc=545B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: e#1, t#1, n, u, r, r#1
// closure: _Slice
function {
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_11;
  t;
  t = true;
  t#1 = true;
  let u;
  let n;
  n = 0;
  u = 0;
  let r;
  r = e.firstChild;
  if (!(r)) goto L_117;
  if (!(!r.isLeaf)) goto L_117;
  if ((t)) goto L_e1;
  if (!(!r.type.spec.isolating)) goto L_117;
  n = <n_new>;
  (n++);
  r = r.firstChild;
  r.firstChild;
  goto L_43;
  let r#1;
  r#1 = e.lastChild;
  if (!(r#1)) goto L_212;
  if (!(!r#1.isLeaf)) goto L_212;
  if ((t)) goto L_1dc;
  if (!(!r#1.type.spec.isolating)) goto L_212;
  u = <u_new>;
  (u++);
  r#1 = r#1.lastChild;
  r#1.lastChild;
  goto L_13e;
  return new _Slice(e, n, u);
}

// fn Pn  args=3 vars=8 closure=1 cpool=0 bc=713B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s
// closure: Pn
function {
  let s;
  let o;
  let i;
  let r;
  let u;
  if (((undefined === undefined))) goto L_5e;
  u = <to_object>(undefined).index;
  r = <to_object>(undefined).offset;
  <to_object>(undefined);
  goto L_87;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_14;
  // [栈深重同步 1 -> 0]
  i = e.maybeChild(u);
  if (((undefined === undefined))) goto L_100;
  o = <to_object>(undefined).index;
  s = <to_object>(undefined).offset;
  <to_object>(undefined);
  goto L_129;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_b5;
  // [栈深重同步 1 -> 0]
  if (((r == t))) goto L_156;
  if (!(i.isText)) goto L_22e;
  if (!((s != n))) goto L_1bd;
  if (!(!e.child(o).isText)) goto L_1bd;
  throw new RangeError("Removing non-flat range");
  return e.cut(0, t).append(e.cut(n));   // tail call
  if (!((u != o))) goto L_246;
  throw new RangeError("Removing non-flat range");
  return e.replaceChild(u, i.copy(Pn(i.content, ((t - r) - 1), ((n - r) - 1))));   // tail call
}

// fn jn  args=6 vars=10 closure=1 cpool=0 bc=647B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r, i
// locals: o, s, a, l
// closure: jn
function {
  let l;
  let a;
  let s;
  let o;
  if (((undefined === undefined))) goto L_5b;
  o = <to_object>(undefined).index;
  s = <to_object>(undefined).offset;
  <to_object>(undefined);
  goto L_84;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_11;
  // [栈深重同步 1 -> 0]
  a = e.maybeChild(o);
  if (((s == t))) goto L_da;
  if (!(a.isText)) goto L_1ba;
  if (!(i)) goto L_123;
  if (!((u <= 0))) goto L_123;
  if (!((r <= 0))) goto L_123;
  if (!(!i.canReplace(o, o, n))) goto L_123;
  return null;
  return e.cut(0, t).append(n).append(e.cut(t));
  if (!((0 == o))) goto L_1f3;
  goto L_1f4;
  // [栈深重同步 5 -> 4]
  if (!((o == (e.childCount - 1)))) goto L_225;
  goto L_226;
  // [栈深重同步 6 -> 5]
  l = jn(a.content, ((t - s) - 1), n, 0, 0, a);
  if (!(l)) goto L_286;
  return e.replaceChild(o, a.copy(l));
}

// fn Vn  args=3 vars=3 closure=2 cpool=0 bc=242B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: _n, Un
function {
  if (!((n.openStart > e.depth))) goto L_52;
  throw new _n("Inserted content deeper than insertion position");
  if (!(((e.depth - n.openStart) != (t.depth - n.openEnd)))) goto L_ea;
  throw new _n("Inconsistent open depths");
  return Un(e, t, n, 0);   // tail call
}

// fn Un  args=4 vars=11 closure=5 cpool=0 bc=1031B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, r#1, o#1, u#1, r#2
// closure: Un, Yn, Wn, Qn, Zn
function {
  let i;
  let r;
  r = e.index(u);
  i = e.node(u);
  if (!((r == t.index(u)))) goto L_152;
  if (!((u < (e.depth - n.openStart)))) goto L_152;
  let o;
  o = Un(e, t, n, (u + 1));
  return i.copy(i.content.replaceChild(r, o));   // tail call
  if (!(n.content.size)) goto L_3f9;
  if ((n.openStart)) goto L_232;
  if ((n.openEnd)) goto L_232;
  if (((e.depth != u))) goto L_232;
  if (!((t.depth != u))) goto L_2a5;
  let o#1;
  let r#1;
  if (((undefined === undefined))) goto L_28a;
  r#1 = <to_object>(undefined).start;
  o#1 = <to_object>(undefined).end;
  <to_object>(undefined);
  goto L_291;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_23f;
  // [栈深重同步 1 -> 0]
  return Wn(i, Qn(e, r#1, o#1, t, u));   // tail call
  let r#2;
  let u#1;
  u#1 = e.parent;
  r#2 = u#1.content;
  return Wn(u#1, r#2.cut(0, e.parentOffset).append(n.content).append(r#2.cut(t.parentOffset)));   // tail call
  return Wn(i, Zn(e, t, u));   // tail call
}

// fn Hn  args=2 vars=2 closure=1 cpool=0 bc=264B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: _n
function {
  if (!(!t.type.compatibleContent(e.type))) goto L_107;
  throw new _n(((("Cannot join " + t.type.name) + " onto ") + e.type.name));
  return;
}

// fn $n  args=3 vars=4 closure=1 cpool=0 bc=90B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u
// closure: Hn
function {
  let u;
  u = e.node(n);
  Hn(u, t.node(n));
  return u;
}

// fn Jn  args=2 vars=3 closure=0 cpool=0 bc=259B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
function {
  let n;
  n = (t.length - 1);
  if (!((n >= 0))) goto L_dc;
  if (!(e.isText)) goto L_dc;
  if (!(e.sameMarkup(t[n]))) goto L_dc;
  t[n] = e.withText((t[n].text + e.text));
  goto L_102;
  // [栈深重同步 1 -> 0]
  t.push(e);
  return;
}

// fn Gn  args=4 vars=8 closure=1 cpool=0 bc=510B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s
// closure: Jn
function {
  let o;
  let i;
  let r;
  if ((t)) goto L_f;
  r = e.node(n);
  i = 0;
  if (!(t)) goto L_62;
  goto L_86;
  // [栈深重同步 1 -> 0]
  o = r.childCount;
  if (!(e)) goto L_13c;
  i = e.index(n);
  e.index(n);
  if (!((e.depth > n))) goto L_e9;
  i = <i_new>;
  goto L_13c;
  // [栈深重同步 1 -> 0]
  if (!(e.textOffset)) goto L_13c;
  Jn(e.nodeAfter, u);
  i = <i_new>;
  (i++);
  let s;
  s = i;
  if (!((s < o))) goto L_185;
  Jn(r.child(s), u);
  s = <s_new>;
  (s++);
  goto L_144;
  if (!(t)) goto L_1fd;
  if (!((t.depth == n))) goto L_1fd;
  if (!(t.textOffset)) goto L_1fd;
  Jn(t.nodeBefore, u);
  return;
}

// fn Wn  args=2 vars=2 closure=1 cpool=0 bc=191B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: _n
function {
  if (!(!e.type.validContent(t))) goto L_99;
  throw new _n(("Invalid content for node " + e.type.name));
  return e.copy(t);   // tail call
}

// fn Qn  args=5 vars=8 closure=8 cpool=0 bc=363B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r
// locals: i, o, s
// closure: $n, Gn, Hn, Jn, Wn, Qn, Zn, Mn
function {
  let s;
  let o;
  let i;
  if (!((e.depth > r))) goto L_3c;
  i = $n(e, t, (r + 1));
  if (!((u.depth > r))) goto L_70;
  o = $n(n, u, (r + 1));
  s = [];
  Gn(null, e, r, s);
  if (!(i)) goto L_108;
  if (!(o)) goto L_108;
  if (!((t.index(r) == n.index(r)))) goto L_108;
  Hn(i, o);
  goto L_152;
  // [栈深重同步 1 -> 0]
  if (!(i)) goto L_126;
  Jn(Wn(i, Zn(e, t, (r + 1))), s);
  Gn(t, n, r, s);
  if (!(o)) goto L_152;
  Jn(Wn(o, Zn(n, u, (r + 1))), s);
  Gn(u, null, r, s);
  return new Mn(s);
}

// fn Zn  args=3 vars=4 closure=6 cpool=0 bc=102B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u
// closure: Gn, Jn, Wn, $n, Zn, Mn
function {
  let u;
  u = [];
  Gn(null, e, n, u);
  if (!((e.depth > n))) goto L_50;
  Jn(Wn($n(e, t, (n + 1)), Zn(e, t, (n + 1))), u);
  Gn(t, null, n, u);
  return new Mn(u);
}

// fn Yn  args=2 vars=5 closure=1 cpool=0 bc=574B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r
// closure: Mn
function {
  let u;
  let n;
  n = (t.depth - e.openStart);
  u = t.node(n).copy(e.content);
  let r;
  r = (n - 1);
  if (!((r >= 0))) goto L_152;
  u = t.node(r).copy(Mn.from(u));
  t.node(r).copy(Mn.from(u));
  r = <r_new>;
  (r--);
  goto L_c4;
  return {start: u.resolveNoCache((e.openStart + n)), end: u.resolveNoCache(((u.content.size - e.openEnd) - n))};
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=65B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.pos = e;
  this.path = t;
  this.parentOffset = n;
  this.depth = ((t.length / 3) - 1);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=86B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (!((null == e))) goto L_2a;
  return this.depth;
  if (!((e < 0))) goto L_54;
  return (this.depth + e);
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.node(this.depth);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.node(0);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  return this.path[(3 * this.resolveDepth(e))];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=80B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  return this.path[((3 * this.resolveDepth(e)) + 1)];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=161B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  e = this.resolveDepth(e);
  if (((e != this.depth))) goto L_99;
  if (!(this.textOffset)) goto L_9e;
  goto L_9f;
  // [栈深重同步 2 -> 1]
  return (this.index(e) + 0);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=90B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  e = this.resolveDepth(e);
  if (!((0 == this.resolveDepth(e)))) goto L_2f;
  return 0;
  return (this.path[((3 * e) - 1)] + 1);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=185B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  e = this.resolveDepth(e);
  return (this.start(e) + this.node(e).content.size);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=175B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  e = this.resolveDepth(e);
  if (!(!this.resolveDepth(e))) goto L_3b;
  throw new RangeError("There is no position before the top-level node");
  if (!((e == (this.depth + 1)))) goto L_86;
  return this.pos;
  return this.path[((3 * e) - 1)];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=247B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  e = this.resolveDepth(e);
  if (!(!this.resolveDepth(e))) goto L_3b;
  throw new RangeError("There is no position after the top-level node");
  if (!((e == (this.depth + 1)))) goto L_86;
  return this.pos;
  return (this.path[((3 * e) - 1)] + this.path[(3 * e)].nodeSize);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=110B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return (this.pos - this.path[(this.path.length - 1)]);
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=414B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, n, u, this
function {
  this = this;
  let u;
  let n;
  let t;
  let e;
  e = this.parent;
  t = this.index(this.depth);
  if (!((t == e.childCount))) goto L_a9;
  return null;
  n = (this.pos - this.path[(this.path.length - 1)]);
  u = e.child(t);
  if (!(n)) goto L_19a;
  return e.child(t).cut(n);
  return u;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=392B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, this
function {
  this = this;
  let t;
  let e;
  e = this.index(this.depth);
  t = (this.pos - this.path[(this.path.length - 1)]);
  if (!(t)) goto L_133;
  return this.parent.child(e).cut(0, t);
  if (!((0 == e))) goto L_13c;
  return null;
  return this.parent.child((e - 1));
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=247B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, this
function {
  this = this;
  let u;
  let n;
  t = this.resolveDepth(t);
  n = this.path[(3 * t)];
  if (!((0 == t))) goto L_5e;
  goto L_88;
  // [栈深重同步 1 -> 0]
  u = (this.path[((3 * t) - 1)] + 1);
  let r;
  r = 0;
  if (!((r < e))) goto L_f3;
  u = (u + n.child(r).nodeSize);
  (u + n.child(r).nodeSize);
  r = <r_new>;
  (r++);
  goto L_8e;
  return u;
}

// fn <atom:0>  args=0 vars=8 closure=1 cpool=0 bc=751B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, n, u, e#1, r, i, this
// closure: Rn
function {
  this = this;
  let r;
  let u;
  let n;
  let t;
  let e;
  e = this.parent;
  t = this.index();
  if (!((0 == e.content.size))) goto L_c9;
  return Rn.none;
  if (!(this.textOffset)) goto L_13a;
  return e.child(t).marks;
  n = e.maybeChild((t - 1));
  u = e.maybeChild(t);
  if (!(!n)) goto L_1b0;
  let e#1;
  e#1 = n;
  n = u;
  u;
  u = e#1;
  e#1;
  r = n.marks;
  i = 0;
  if (!((i < r.length))) goto L_2eb;
  if (((false !== r[i].type.spec.inclusive))) goto L_2e5;
  if (!(u)) goto L_2ad;
  if ((r[i].isInSet(u.marks))) goto L_2e5;
  i = <i_new>;
  r = r[(i--)].removeFromSet(r);
  r[(i--)].removeFromSet(r);
  goto L_1d9;
  return r;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=591B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r, this
function {
  this = this;
  let u;
  let n;
  let t;
  t = this.parent.maybeChild(this.index());
  if ((!t)) goto L_a7;
  if (!(!t.isInline)) goto L_ab;
  return null;
  n = t.marks;
  u = e.parent.maybeChild(e.index());
  r = 0;
  if (!((r < n.length))) goto L_24b;
  if (((false !== n[r].type.spec.inclusive))) goto L_245;
  if (!(u)) goto L_20f;
  if ((n[r].isInSet(u.marks))) goto L_245;
  r = <r_new>;
  n = n[(r--)].removeFromSet(n);
  n[(r--)].removeFromSet(n);
  goto L_13e;
  return n;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=151B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.depth;
  if (!((t > 0))) goto L_95;
  if (!((this.start(t) <= e))) goto L_8b;
  if (!((this.end(t) >= e))) goto L_8b;
  return t;
  t = <t_new>;
  (t--);
  goto L_28;
  return 0;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=474B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: e#1, t#1, n, this
// closure: nu
function {
  this = this;
  let t#1;
  let e#1;
  if (!((e === undefined))) goto L_10;
  e;
  e = this;
  e#1 = this;
  t#1 = t;
  if (!((e.pos < this.pos))) goto L_80;
  return e.blockRange(this);   // tail call
  let n;
  if ((this.parent.inlineContent)) goto L_131;
  if (!((this.pos == e.pos))) goto L_136;
  goto L_137;
  // [栈深重同步 2 -> 1]
  n = (this.depth - 0);
  if (!((n >= 0))) goto L_1d8;
  if (!((e.pos <= this.end(n)))) goto L_1cd;
  if ((!t)) goto L_1c0;
  if (!(t(this.node(n)))) goto L_1cd;
  return new nu(this, e, n);
  n = <n_new>;
  (n--);
  goto L_139;
  return null;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=142B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  return ((this.pos - this.parentOffset) == (e.pos - e.parentOffset));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=77B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (!((e.pos > this.pos))) goto L_4b;
  return e;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=77B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (!((e.pos < this.pos))) goto L_4b;
  return e;
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=289B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, this
function {
  this = this;
  let e;
  e = "";
  let t;
  t = 1;
  if (!((t <= this.depth))) goto L_f4;
  if (!(e)) goto L_46;
  goto L_47;
  // [栈深重同步 2 -> 1]
  e = (e + ((("" + this.node(t).type.name) + "_") + this.index((t - 1))));
  (e + ((("" + this.node(t).type.name) + "_") + this.index((t - 1))));
  t = <t_new>;
  (t++);
  goto L_c;
  return ((e + ":") + this.parentOffset);
}

// fn <atom:0>  args=2 vars=9 closure=1 cpool=0 bc=488B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, e#1, t#1, o
// closure: _ResolvedPos
function {
  let r;
  let u;
  let n;
  if (!((t >= 0))) goto L_55;
  if (!(!(t <= e.content.size))) goto L_6f;
  throw new RangeError((("Position " + t) + " out of range"));
  n = [];
  u = 0;
  r = t;
  let i;
  i = e;
  let o;
  let t#1;
  let e#1;
  if (((undefined === undefined))) goto L_d6;
  e#1 = <to_object>(undefined).index;
  t#1 = <to_object>(undefined).offset;
  <to_object>(undefined);
  goto L_125;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_8a;
  // [栈深重同步 1 -> 0]
  o = (r - t#1);
  n.push(i, e#1, (u + t#1));
  if ((!o)) goto L_1d9;
  i = i.child(e#1);
  i.child(e#1);
  if ((i.isText)) goto L_1d9;
  r = (o - 1);
  (o - 1);
  u = (u + (t#1 + 1));
  (u + (t#1 + 1));
  goto L_7c;
  return new _ResolvedPos(t, n, r);
}

// fn <atom:0>  args=2 vars=6 closure=4 cpool=0 bc=424B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, r, e#1, u
// closure: tu, Xn, _ResolvedPos, eu
function {
  let u;
  let n;
  n = tu.get(e);
  if (!(n)) goto L_cb;
  let r;
  r = 0;
  if (!((r < n.elts.length))) goto L_fb;
  let e#1;
  e#1 = n.elts[r];
  if (!((e#1.pos == t))) goto L_c0;
  return e#1;
  r = <r_new>;
  (r++);
  goto L_3a;
  n = new Xn();
  tu.set(e, new Xn());
  n.elts[n.i] = _ResolvedPos.resolve(e, t);
  u = _ResolvedPos.resolve(e, t);
  n.i = ((n.i + 1) % eu);
  return u;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=40B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.elts = [];
  this.i = 0;
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=49B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.$from = e;
  this.$to = t;
  this.depth = n;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=108B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.$from.before((this.depth + 1));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=108B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.$to.after((this.depth + 1));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=106B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.$from.node(this.depth);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=106B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.$from.index(this.depth);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=106B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.$to.indexAfter(this.depth);   // tail call
}

// fn <atom:0>  args=4 vars=9 closure=3 cpool=0 bc=164B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: e#1, t#1, n#1, u#1, this
// closure: <class_fields_init>, Rn, Mn
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let u#1;
  let n#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  n#1 = n;
  if (!((u === undefined))) goto L_4c;
  u;
  u = Rn.none;
  u#1 = Rn.none;
  this.type = e;
  this.attrs = t;
  this.marks = u;
  if ((n)) goto L_9a;
  this.content = Mn.empty;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.content.content;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=110B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  if (!(this.isLeaf)) goto L_28;
  return 1;
  return (2 + this.content.size);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.content.childCount;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  return this.content.child(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  return this.content.maybeChild(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.content.forEach(e);
  return;
}

// fn <atom:0>  args=4 vars=9 closure=0 cpool=0 bc=108B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: e#1, t#1, n#1, u#1, this
function {
  this = this;
  let u#1;
  let n#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  n#1 = n;
  if (!((u === undefined))) goto L_1d;
  u;
  u = 0;
  u#1 = 0;
  this.content.nodesBetween(e, t, n, u, this);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=109B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.nodesBetween(0, this.content.size, e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=355B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  if (!(this.isLeaf)) goto L_f8;
  if (!(this.type.spec.leafText)) goto L_f8;
  return this.type.spec.leafText(this);
  return this.textBetween(0, this.content.size, "");
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=76B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: this
function {
  this = this;
  return this.content.textBetween(e, t, n, u);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.content.firstChild;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.content.lastChild;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=159B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (((this == e))) goto L_9e;
  if (!(this.sameMarkup(e))) goto L_9e;
  return this.content.eq(e.content);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=141B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  return this.hasMarkup(e.type, e.attrs, e.marks);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=3 cpool=0 bc=240B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: this
// closure: Ln, uu, Rn
function {
  this = this;
  if (!((this.type == e))) goto L_ef;
  if ((t)) goto L_7c;
  if ((e.defaultAttrs)) goto L_7c;
  if (!(Ln(this.attrs, uu))) goto L_ef;
  if ((n)) goto L_ec;
  return Rn.sameSet(this.marks, Rn.none);
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=165B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: e#1, this
// closure: _Node
function {
  this = this;
  let e#1;
  if (!((e === undefined))) goto L_d;
  e;
  e = null;
  e#1 = null;
  if (!((e == this.content))) goto L_36;
  return this;
  return new _Node(this.type, this.attrs, e, this.marks);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=153B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: _Node
function {
  this = this;
  if (!((e == this.marks))) goto L_2a;
  return this;
  return new _Node(this.type, this.attrs, this.content, e);
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=273B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: e#1, t#1, this
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_54;
  t;
  t = this.content.size;
  t#1 = this.content.size;
  if (!((0 == e))) goto L_a3;
  if (!((t == this.content.size))) goto L_a3;
  return this;
  return this.copy(this.content.cut(e, t));
}

// fn <atom:0>  args=3 vars=12 closure=1 cpool=0 bc=610B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: e#1, t#1, n#1, u, r, i, o, s, this
// closure: Nn
function {
  this = this;
  let n#1;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_59;
  t;
  t = this.content.size;
  t#1 = this.content.size;
  if (!((n === undefined))) goto L_63;
  n;
  n = false;
  n#1 = false;
  let s;
  let o;
  let i;
  let r;
  let u;
  if (!((e == t))) goto L_9b;
  return Nn.empty;
  u = this.resolve(e);
  r = this.resolve(t);
  if (!(n)) goto L_f2;
  goto L_11a;
  // [栈深重同步 1 -> 0]
  i = u.sharedDepth(t);
  o = u.start(i);
  s = u.node(i).content.cut((u.pos - o), (r.pos - o));
  return new Nn(s, (u.depth - i), (r.depth - i));
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=83B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: this
// closure: Vn
function {
  this = this;
  return Vn(this.resolve(e), this.resolve(t), n);   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=286B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, this
function {
  this = this;
  let t;
  t = this;
  let u;
  let n;
  if (((undefined === undefined))) goto L_5c;
  n = <to_object>(undefined).index;
  u = <to_object>(undefined).offset;
  <to_object>(undefined);
  goto L_a9;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_12;
  // [栈深重同步 1 -> 0]
  t = t.maybeChild(n);
  t.maybeChild(n);
  if (!(!t)) goto L_e0;
  return null;
  if (((u == e))) goto L_10d;
  if (!(t.isText)) goto L_113;
  return t;
  e = (e - (u + 1));
  goto L_7;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=258B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
function {
  this = this;
  let n;
  let t;
  if (((undefined === undefined))) goto L_57;
  t = <to_object>(undefined).index;
  n = <to_object>(undefined).offset;
  <to_object>(undefined);
  goto L_a2;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  return {node: this.content.maybeChild(t), index: t, offset: n};
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=434B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, this
function {
  this = this;
  let u;
  let n;
  let t;
  if (!((0 == e))) goto L_24;
  return {node: null, index: 0, offset: 0};
  if (((undefined === undefined))) goto L_73;
  t = <to_object>(undefined).index;
  n = <to_object>(undefined).offset;
  <to_object>(undefined);
  goto L_be;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_29;
  // [栈深重同步 1 -> 0]
  if (!((n < e))) goto L_125;
  return {node: this.content.child(t), index: t, offset: n};
  u = this.content.child((t - 1));
  return {node: u, index: (t - 1), offset: (n - u.nodeSize)};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=41B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: Kn
function {
  this = this;
  return Kn.resolveCached(this, e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=41B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: Kn
function {
  this = this;
  return Kn.resolve(this, e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=87B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: n, u
function {
  if (!(n.isInSet(e.marks))) goto L_51;
  u = true;
  true;
  return !u;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=61B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, this
function {
  this = this;
  let u;
  u = false;
  if (!((t > e))) goto L_38;
  this.nodesBetween(e, t, function <atom:0>);
  return u;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.type.isBlock;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.type.isTextblock;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.type.inlineContent;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.type.isInline;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.type.isText;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.type.isLeaf;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.type.isAtom;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=482B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
// closure: ou
function {
  this = this;
  let e;
  if (!(this.type.spec.toDebugString)) goto L_d3;
  return this.type.spec.toDebugString(this);   // tail call
  e = this.type.name;
  if (!(this.content.size)) goto L_1b8;
  e = (e + (("(" + this.content.toStringInner()) + ")"));
  (e + (("(" + this.content.toStringInner()) + ")"));
  return ou(this.marks, e);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=170B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.type.contentMatch.matchFragment(this.content, 0, e);
  if (!(!t)) goto L_a6;
  throw new Error("Called contentMatchAt on a node with invalid content");
  return t;
}

// fn <atom:0>  args=5 vars=14 closure=1 cpool=0 bc=526B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r
// locals: e#1, t#1, n#1, u#1, r#1, i, o, s, this
// closure: Mn
function {
  this = this;
  let r#1;
  let u#1;
  let n#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((n === undefined))) goto L_3f;
  n;
  n = Mn.empty;
  n#1 = Mn.empty;
  if (!((u === undefined))) goto L_48;
  u;
  u = 0;
  u#1 = 0;
  if (!((r === undefined))) goto L_78;
  r;
  r = n#1.childCount;
  r#1 = n#1.childCount;
  let o;
  let i;
  i = this.contentMatchAt(e).matchFragment(n, u, r);
  if (!(i)) goto L_124;
  o = i.matchFragment(this.content, t);
  if ((!o)) goto L_153;
  if (!(!o.validEnd)) goto L_158;
  return false;
  let s;
  s = u;
  if (!((s < r))) goto L_20b;
  if (!(!this.type.allowsMarks(n.child(s).marks))) goto L_200;
  return false;
  s = <s_new>;
  (s++);
  goto L_15e;
  return true;
}

// fn <atom:0>  args=4 vars=7 closure=0 cpool=0 bc=292B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, this
function {
  this = this;
  let i;
  let r;
  if (!(u)) goto L_58;
  if (!(!this.type.allowsMarks(u))) goto L_58;
  return false;
  r = this.contentMatchAt(e).matchType(n);
  if (!(r)) goto L_f5;
  i = r.matchFragment(this.content, t);
  if (!(!!i)) goto L_123;
  return i.validEnd;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=319B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (!(e.content.size)) goto L_d6;
  return this.canReplace(this.childCount, this.childCount, e.content);
  return this.type.compatibleContent(e.type);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=68B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.type.name;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.check();   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=2 bc=856B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, n, this
// closure: Rn
function {
  this = this;
  let e;
  this.type.checkContent(this.content);
  this.type.checkAttrs(this.attrs);
  e = Rn.none;
  let t;
  t = 0;
  if (!((t < this.marks.length))) goto L_1fc;
  let n;
  n = this.marks[t];
  n.type.checkAttrs(n.attrs);
  e = n.addToSet(e);
  n.addToSet(e);
  t = <t_new>;
  (t++);
  goto L_ff;
  if (!(!Rn.sameSet(e, this.marks))) goto L_30f;
  throw new RangeError("Invalid collection of marks for node ".concat(this.type.name, ": ", this.marks.map(function <atom:0>)));
  this.content.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.toJSON();   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=1 bc=457B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, this
function {
  this = this;
  let e;
  e = {type: this.type.name};
  let t;
  for (const t of this.attrs) {
    e.attrs = this.attrs;
    goto L_ac;
  }
  <catch>;
  if (!(this.content.size)) goto L_147;
  e.content = this.content.toJSON();
  this.content.toJSON();
  if (!(this.marks.length)) goto L_1c4;
  e.marks = this.marks.map(function <atom:0>);
  this.marks.map(function <atom:0>);
  return e;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=782B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r
// closure: Mn
function {
  let r;
  let u;
  let n;
  if (!(!t)) goto L_1c;
  throw new RangeError("Invalid input for Node.fromJSON");
  n = undefined;
  if (!(t.marks)) goto L_10f;
  if (!(!Array.isArray(t.marks))) goto L_a2;
  throw new RangeError("Invalid mark data for Node.fromJSON");
  n = t.marks.map(e.markFromJSON);
  t.marks.map(e.markFromJSON);
  if (!(("text" == t.type))) goto L_1c0;
  if (!(("string" != typeof t.text))) goto L_176;
  throw new RangeError("Invalid text node in JSON");
  return e.text(t.text, n);   // tail call
  u = Mn.fromJSON(e, t.content);
  r = e.nodeType(t.type).create(t.attrs, u, n);
  r.type.checkAttrs(r.attrs);
  return r;
}

// fn <atom:0>  args=4 vars=7 closure=1 cpool=0 bc=75B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e, t, null, u);
  if (!(<class_fields_init>)) goto L_25;
  <class_fields_init>.call(this);
  new new.target(e, t, null, u);
  if (!(!n)) goto L_3a;
  throw new RangeError("Empty text nodes are not allowed");
  this.text = n;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=321B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
// closure: ou
function {
  this = this;
  if (!(this.type.spec.toDebugString)) goto L_d1;
  return this.type.spec.toDebugString(this);
  return ou(this.marks, JSON.stringify(this.text));
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.text;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=74B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: this
function {
  this = this;
  return this.text.slice(e, t);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=38B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.text.length;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=153B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: _TextNode
function {
  this = this;
  if (!((e == this.marks))) goto L_2a;
  return this;
  return new _TextNode(this.type, this.attrs, this.text, e);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=153B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: _TextNode
function {
  this = this;
  if (!((e == this.text))) goto L_2a;
  return this;
  return new _TextNode(this.type, this.attrs, e, this.marks);
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=216B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: e#1, t#1, this
function {
  this = this;
  let t#1;
  let e#1;
  if (!((e === undefined))) goto L_10;
  e;
  e = 0;
  e#1 = 0;
  if (!((t === undefined))) goto L_3b;
  t;
  t = this.text.length;
  t#1 = this.text.length;
  if (!((0 == e))) goto L_6a;
  if (!((t == this.text.length))) goto L_6a;
  return this;
  return this.withText(this.text.slice(e, t));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=114B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (!(this.sameMarkup(e))) goto L_71;
  return (this.text == e.text);
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=71B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  e = super["toJSON"].call(this);
  e.text = this.text;
  return e;
}

// fn ou  args=2 vars=3 closure=0 cpool=0 bc=113B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
function {
  let n;
  n = (e.length - 1);
  if (!((n >= 0))) goto L_6f;
  t = (((e[n].type.name + "(") + t) + ")");
  n = <n_new>;
  (n--);
  goto L_8;
  return t;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=53B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.validEnd = e;
  this.next = [];
  this.wrapCache = [];
  return;
}

// fn <atom:0>  args=2 vars=5 closure=6 cpool=0 bc=210B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r
// closure: au, _ContentMatch, lu, Eu, Fu, Cu
function {
  let r;
  let u;
  let n;
  n = new au(e, t);
  if (!((null == n.next))) goto L_5e;
  return _ContentMatch.empty;
  u = lu(n);
  if (!(n.next)) goto L_b8;
  n.err("Unexpected trailing text");
  r = Eu(Fu(u));
  Cu(r, n);
  return r;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=211B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = 0;
  if (!((t < this.next.length))) goto L_d1;
  if (!((this.next[t].type == e))) goto L_c6;
  return this.next[t].next;
  t = <t_new>;
  (t++);
  goto L_7;
  return null;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=0 bc=229B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: e#1, t#1, n#1, u, r, this
function {
  this = this;
  let n#1;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_16;
  t;
  t = 0;
  t#1 = 0;
  if (!((n === undefined))) goto L_42;
  n;
  n = e#1.childCount;
  n#1 = e#1.childCount;
  let u;
  u = this;
  let r;
  r = t;
  if (!(u)) goto L_e1;
  if (!((r < n))) goto L_e1;
  u = u.matchType(e.child(r).type);
  u.matchType(e.child(r).type);
  r = <r_new>;
  (r++);
  goto L_4f;
  return u;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=146B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  if (!((0 != this.next.length))) goto L_91;
  return this.next[0].type.isInline;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=237B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, this
function {
  this = this;
  let e;
  e = 0;
  if (!((e < this.next.length))) goto L_eb;
  let t;
  if (((undefined === undefined))) goto L_62;
  t = <to_object>(undefined).type;
  <to_object>(undefined);
  goto L_8b;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_3b;
  // [栈深重同步 1 -> 0]
  if (!(!t.isText)) goto L_e0;
  if (!(!t.hasRequiredAttrs())) goto L_e0;
  return t;
  e = <e_new>;
  (e++);
  goto L_7;
  return null;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=273B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
function {
  this = this;
  let t;
  t = 0;
  if (!((t < this.next.length))) goto L_10e;
  let n;
  n = 0;
  if (!((n < e.next.length))) goto L_103;
  if (!((this.next[t].type == e.next[n].type))) goto L_f8;
  return true;
  n = <n_new>;
  (n++);
  goto L_38;
  t = <t_new>;
  (t++);
  goto L_7;
  return false;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.createAndFill();   // tail call
}

// fn r  args=2 vars=8 closure=5 cpool=1 bc=596B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: i, o
// locals: s, e, t, n, e#1, r
// closure: e, n, t, Mn, u
function {
  r = <special_object 2>;
  let s;
  s = i.matchFragment(e, n);
  if (!(s)) goto L_ac;
  if ((!t)) goto L_5e;
  if (!(s.validEnd)) goto L_ac;
  return Mn.from(o.map(function <atom:0>));   // tail call
  let e;
  e = 0;
  if (!((e < i.next.length))) goto L_252;
  let n;
  let t;
  if (((undefined === undefined))) goto L_132;
  t = <to_object>(undefined).type;
  n = <to_object>(undefined).next;
  <to_object>(undefined);
  goto L_15b;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_e8;
  // [栈深重同步 1 -> 0]
  if (!(!t.isText)) goto L_247;
  if (!(!t.hasRequiredAttrs())) goto L_247;
  if (!((-1 == u.indexOf(n)))) goto L_247;
  let e#1;
  u.push(n);
  e#1 = r(n, o.concat(t));
  if (!(e#1)) goto L_247;
  return e#1;
  e = <e_new>;
  (e++);
  goto L_b1;
  return null;
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=1 bc=52B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: e#1, t#1, n#1, u, this
// closure: Mn
function {
  this = this;
  let n#1;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_17;
  t;
  t = false;
  t#1 = false;
  if (!((n === undefined))) goto L_20;
  n;
  n = 0;
  n#1 = 0;
  let u;
  u = [this];
  return function r(this, []);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=265B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: n, t, this
function {
  this = this;
  let t;
  let n;
  n = 0;
  if (!((n < this.wrapCache.length))) goto L_93;
  if (!((this.wrapCache[n] == e))) goto L_86;
  return this.wrapCache[(n + 1)];
  n = (n + 2);
  (n + 2);
  goto L_a;
  t = this.computeWrapping(e);
  this.wrapCache.push(e, t);
  return t;
}

// fn <atom:0>  args=1 vars=11 closure=0 cpool=0 bc=984B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r, e#1, t#1, e#2, i, o, this
function {
  this = this;
  let n;
  let t;
  t = Object.create(null);
  n = [{match: this, type: null, via: null}];
  if (!(n.length)) goto L_3d6;
  let r;
  let u;
  u = n.shift();
  r = u.match;
  if (!(r.matchType(e))) goto L_1aa;
  let e#1;
  e#1 = [];
  let t#1;
  t#1 = u;
  if (!(t#1.type)) goto L_183;
  e#1.push(t#1.type);
  t#1 = t#1.via;
  t#1.via;
  goto L_e5;
  return e#1.reverse();   // tail call
  let e#2;
  e#2 = 0;
  if (!((e#2 < r.next.length))) goto L_4c;
  let o;
  let i;
  if (((undefined === undefined))) goto L_235;
  i = <to_object>(undefined).type;
  o = <to_object>(undefined).next;
  <to_object>(undefined);
  goto L_260;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1e9;
  // [栈深重同步 1 -> 0]
  if ((i.isLeaf)) goto L_3ca;
  if ((i.hasRequiredAttrs())) goto L_3ca;
  if (((i.name in t))) goto L_3ca;
  if (!(u.type)) goto L_335;
  if ((!o.validEnd)) goto L_3ca;
  n.push({match: i.contentMatch, type: i, via: u});
  t[i.name] = true;
  true;
  e#2 = <e#2_new>;
  (e#2++);
  goto L_1b0;
  return null;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=38B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.next.length;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=135B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (!((e >= this.next.length))) goto L_62;
  throw new RangeError("There's no ".concat(e, "th edge in this content match"));
  return this.next[e];
}

// fn t  args=1 vars=3 closure=1 cpool=0 bc=295B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// locals: u, t
// closure: e
function {
  t = <special_object 2>;
  e.push(n);
  let u;
  u = 0;
  if (!((u < n.next.length))) goto L_126;
  if (!((-1 == e.indexOf(n.next[u].next)))) goto L_11a;
  t(n.next[u].next);
  u = <u_new>;
  (u++);
  goto L_31;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=368B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t, n
// locals: u, r
// closure: e
function {
  let u;
  if (!(t.validEnd)) goto L_2f;
  goto L_34;
  // [栈深重同步 2 -> 1]
  u = ((n + " ") + " ");
  let r;
  r = 0;
  if (!((r < t.next.length))) goto L_16c;
  if (!(r)) goto L_7c;
  goto L_7d;
  // [栈深重同步 2 -> 1]
  u = (u + ((("" + t.next[r].type.name) + "->") + e.indexOf(t.next[r].next)));
  (u + ((("" + t.next[r].type.name) + "->") + e.indexOf(t.next[r].next)));
  r = <r_new>;
  (r++);
  goto L_41;
  return u;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=2 bc=96B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  let e;
  e = [];
  function t(this);
  return e.map(function <atom:0>).join("
");   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=2 bc=373B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.string = e;
  this.nodeTypes = t;
  this.inline = null;
  this.pos = 0;
  this.tokens = e.split(new RegExp("\\s*(?=\\b|\\W|$)"));
  if (!(("" == this.tokens[(this.tokens.length - 1)]))) goto L_103;
  this.tokens.pop();
  if (!(("" == this.tokens[0]))) goto L_174;
  this.tokens.shift();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.tokens[this.pos];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=94B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (!((this.next == e))) goto L_5d;
  this.pos = <this.pos_new>;
  if (((this.pos++))) goto L_5d;
  return true;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=60B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  throw new SyntaxError((((e + " (in content expression '") + this.string) + "')"));
}

// fn lu  args=1 vars=2 closure=1 cpool=0 bc=128B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
// closure: cu
function {
  let t;
  t = [];
  t.push(cu(e));
  if ((e.eat("|"))) goto L_7;
  if (!((1 == t.length))) goto L_6c;
  return t[0];
  return {type: "choice", exprs: t};
}

// fn cu  args=1 vars=2 closure=1 cpool=0 bc=211B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
// closure: Du
function {
  let t;
  t = [];
  t.push(Du(e));
  if (!(e.next)) goto L_ac;
  if (!((")" != e.next))) goto L_ac;
  if ((("|" != e.next))) goto L_7;
  if (!((1 == t.length))) goto L_bf;
  return t[0];
  return {type: "seq", exprs: t};
}

// fn Du  args=1 vars=2 closure=2 cpool=0 bc=282B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
// closure: pu, hu
function {
  let t;
  t = pu(e);
  if (!(e.eat("+"))) goto L_4d;
  t = {type: "plus", expr: t};
  {type: "plus", expr: t};
  goto L_7;
  if (!(e.eat("*"))) goto L_94;
  t = {type: "star", expr: t};
  {type: "star", expr: t};
  goto L_7;
  if (!(e.eat("?"))) goto L_db;
  t = {type: "opt", expr: t};
  {type: "opt", expr: t};
  goto L_7;
  if ((!e.eat("{"))) goto L_116;
  t = hu(e, t);
  hu(e, t);
  goto L_7;
  return t;
}

// fn fu  args=1 vars=2 closure=0 cpool=2 bc=255B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  let t;
  if (!(new RegExp("\\D").test(e.next))) goto L_a5;
  e.err((("Expected number, got '" + e.next) + "'"));
  t = Number(e.next);
  e.pos = (e.pos ++);
  return t;
}

// fn hu  args=2 vars=4 closure=1 cpool=0 bc=236B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u
// closure: fu
function {
  let u;
  let n;
  n = fu(e);
  u = n;
  if (!(e.eat(","))) goto L_70;
  if (!(("}" != e.next))) goto L_6b;
  goto L_6c;
  // [栈深重同步 1 -> 0]
  u = -1;
  -1;
  if ((e.eat("}"))) goto L_c9;
  e.err("Unclosed braced range");
  return {type: "range", min: n, max: u, expr: t};
}

// fn du  args=2 vars=7 closure=0 cpool=0 bc=245B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, e#1
function {
  let r;
  let u;
  let n;
  n = e.nodeTypes;
  u = n[t];
  if (!(u)) goto L_3e;
  return [u];
  r = [];
  let i;
  for (const i of n) {
    let e#1;
    e#1 = n[i];
    if (!(e#1.isInGroup(t))) goto L_ae;
    r.push(e#1);
  }
  <catch>;
  if (!((0 == r.length))) goto L_f0;
  e.err((("No node type or group '" + t) + "' found"));
  return r;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=219B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e
function {
  if (!((null == e.inline))) goto L_55;
  e.inline = t.isInline;
  goto L_c8;
  // [栈深重同步 1 -> 0]
  if (!((e.inline != t.isInline))) goto L_c8;
  e.err("Mixing inline and block content");
  return {type: "name", value: t};
}

// fn pu  args=1 vars=3 closure=2 cpool=3 bc=466B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, t#1
// closure: lu, du
function {
  if (!(e.eat("("))) goto L_90;
  let t;
  t = lu(e);
  if ((e.eat(")"))) goto L_8b;
  e.err("Missing closing paren");
  return t;
  if (!(!new RegExp("\\W").test(e.next))) goto L_17e;
  let t#1;
  t#1 = du(e, e.next).map(function <atom:0>);
  e.pos = (e.pos ++);
  if (!((1 == t#1.length))) goto L_16a;
  return t#1[0];
  return {type: "choice", exprs: t#1};
  e.err((("Unexpected token '" + e.next) + "'"));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=41B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t, n
// closure: e, i
function {
  return t.concat(e(n, i));   // tail call
}

// fn e  args=2 vars=12 closure=3 cpool=1 bc=1186B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t, i
// locals: o, o#1, o#2, u, u#1, i#1, i#2, u#2, o#3, e
// closure: n, u, r
function {
  e = <special_object 2>;
  if (!(("choice" == t.type))) goto L_79;
  return t.exprs.reduce(function <atom:0>, []);   // tail call
  if (!(("seq" != t.type))) goto L_429;
  if (!(("star" == t.type))) goto L_114;
  let o;
  o = n();
  u(i, o);
  r(e(t.expr, o), o);
  return [u(o)];
  if (!(("plus" == t.type))) goto L_1a7;
  let o#1;
  o#1 = n();
  r(e(t.expr, i), o#1);
  r(e(t.expr, o#1), o#1);
  return [u(o#1)];
  if (!(("opt" == t.type))) goto L_221;
  return [u(i)].concat(e(t.expr, i));   // tail call
  if (!(("range" == t.type))) goto L_3c6;
  let o#2;
  o#2 = i;
  let u;
  u = 0;
  if (!((u < t.min))) goto L_2c7;
  let u#1;
  u#1 = n();
  r(e(t.expr, o#2), u#1);
  o#2 = u#1;
  u#1;
  u = <u_new>;
  (u++);
  goto L_258;
  if (!((-1 == t.max))) goto L_31e;
  r(e(t.expr, o#2), o#2);
  goto L_3bd;
  let i#1;
  i#1 = t.min;
  if (!((i#1 < t.max))) goto L_3bd;
  let i#2;
  i#2 = n();
  u(o#2, i#2);
  r(e(t.expr, o#2), i#2);
  o#2 = i#2;
  i#2;
  i#1 = <i#1_new>;
  (i#1++);
  goto L_345;
  return [u(o#2)];
  if (!(("name" == t.type))) goto L_41a;
  return [u(i, undefined, t.value)];
  throw new Error("Unknown expr type");
  let u#2;
  u#2 = 0;
  goto L_439;
  u#2 = <u#2_new>;
  (u#2++);
  let o#3;
  o#3 = e(t.exprs[u#2], i);
  if (!((u#2 == (t.exprs.length - 1)))) goto L_497;
  return o#3;
  i = n();
  r(o#3, n());
  goto L_431;
}

// fn n  args=0 vars=0 closure=1 cpool=0 bc=45B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: t
function {
  return (t.push([]) - 1);
}

// fn u  args=3 vars=4 closure=1 cpool=0 bc=66B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, n, u
// locals: r
// closure: t
function {
  let r;
  r = {term: u, to: n};
  t[e].push(r);
  return r;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: t
function {
  e.to = t;
  return t;
}

// fn r  args=2 vars=2 closure=0 cpool=1 bc=40B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  e.forEach(function <atom:0>);
  return;
}

// fn Fu  args=1 vars=5 closure=0 cpool=4 bc=33B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r
function {
  n = function n;
  u = function u;
  r = function r;
  let t;
  t = [[]];
  r(function e(e, 0), n());
  return t;
}

// fn mu  args=2 vars=2 closure=0 cpool=0 bc=4B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  return (t - e);
}

// fn t  args=1 vars=6 closure=2 cpool=0 bc=331B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// locals: r, e, u#1, i, t
// closure: e, n
function {
  t = <special_object 2>;
  let r;
  r = e[u];
  if (!((1 == r.length))) goto L_67;
  if (!(!r[0].term)) goto L_67;
  return t(r[0].to);   // tail call
  n.push(u);
  let e;
  e = 0;
  if (!((e < r.length))) goto L_14a;
  let i;
  let u#1;
  if (((undefined === undefined))) goto L_f7;
  u#1 = <to_object>(undefined).term;
  i = <to_object>(undefined).to;
  <to_object>(undefined);
  goto L_101;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_ad;
  // [栈深重同步 1 -> 0]
  if ((u#1)) goto L_13e;
  if (((-1 != n.indexOf(i)))) goto L_13e;
  t(i);
  e = <e_new>;
  (e++);
  goto L_95;
  return;
}

// fn gu  args=2 vars=3 closure=1 cpool=1 bc=52B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
// closure: mu
function {
  let n;
  n = [];
  function t(t);
  return n.sort(mu);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=145B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: u, r, t
function {
  if ((u)) goto L_39;
  u = [];
  r.push([t, []]);
  if (!((-1 == u.indexOf(e)))) goto L_90;
  u.push(e);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=1 bc=180B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: <atom:0>
// locals: t, n, u, e
// closure: r, gu, e
function {
  t = <to_object>(<atom:0>).term;
  n = <to_object>(<atom:0>).to;
  <to_object>(<atom:0>);
  let u;
  if (!(!t)) goto L_51;
  return;
  u = undefined;
  let e;
  e = 0;
  if (!((e < r.length))) goto L_89;
  if (!((r[e][0] == t))) goto L_7e;
  u = r[e][1];
  r[e][1];
  e = <e_new>;
  (e++);
  goto L_58;
  gu(e, n).forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=42B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: r, gu, e
function {
  e[t].forEach(function <atom:0>);
  return;
}

// fn n  args=1 vars=6 closure=5 cpool=1 bc=387B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// locals: r, i, e, u#1, n
// closure: gu, e, t, su, mu
function {
  n = <special_object 2>;
  let i;
  let r;
  r = [];
  u.forEach(function <atom:0>);
  t[u.join(",")] = new su((u.indexOf((e.length - 1)) > -1));
  i = new su((u.indexOf((e.length - 1)) > -1));
  let e;
  e = 0;
  if (!((e < r.length))) goto L_17f;
  let u#1;
  u#1 = r[e][1].sort(mu);
  if ((t[u#1.join(",")])) goto L_16b;
  i.next.push({type: r[e][0], next: n(u#1)});
  e = <e_new>;
  (e++);
  goto L_9c;
  return i;
}

// fn Eu  args=1 vars=2 closure=3 cpool=1 bc=55B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
// closure: gu, su, mu
function {
  let t;
  t = Object.create(null);
  return function n(gu(e, 0));   // tail call
}

// fn Cu  args=2 vars=10 closure=0 cpool=0 bc=657B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, e#1, r, i, t#1, n#1, o
function {
  let u;
  let n;
  n = 0;
  u = [e];
  if (!((n < u.length))) goto L_290;
  let i;
  let r;
  let e#1;
  e#1 = u[n];
  r = !e#1.validEnd;
  i = [];
  let t#1;
  t#1 = 0;
  if (!((t#1 < e#1.next.length))) goto L_220;
  let o;
  let n#1;
  if (((undefined === undefined))) goto L_e1;
  n#1 = <to_object>(undefined).type;
  o = <to_object>(undefined).next;
  <to_object>(undefined);
  goto L_10c;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_95;
  // [栈深重同步 1 -> 0]
  i.push(n#1.name);
  if ((!r)) goto L_1b9;
  if ((n#1.isText)) goto L_1b9;
  if ((n#1.hasRequiredAttrs())) goto L_1b9;
  r = false;
  false;
  if (!((-1 == u.indexOf(o)))) goto L_214;
  u.push(o);
  t#1 = <t#1_new>;
  (t#1++);
  goto L_5c;
  if (!(r)) goto L_284;
  t.err((("Only non-generatable nodes (" + i.join(", ")) + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)"));
  n = <n_new>;
  (n++);
  goto L_d;
  return;
}

// fn Au  args=1 vars=4 closure=0 cpool=0 bc=157B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u
function {
  let t;
  t = Object.create(null);
  let n;
  for (const n of e) {
    let u;
    u = e[n];
    if (!(!u.hasDefault)) goto L_68;
    return null;
    t[n] = u.default;
  }
  <catch>;
  return t;
}

// fn xu  args=2 vars=6 closure=0 cpool=0 bc=207B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, t#1
function {
  let n;
  n = Object.create(null);
  let u;
  for (const u of e) {
    let r;
    if (!(t)) goto L_44;
    r = t[u];
    if (!((undefined === r))) goto L_b8;
    let t#1;
    t#1 = e[u];
    if (!(!t#1.hasDefault)) goto L_8f;
    throw new RangeError(("No value supplied for attribute " + u));
    r = t#1.default;
    t#1.default;
    n[u] = r;
  }
  <catch>;
  return n;
}

// fn ku  args=4 vars=6 closure=0 cpool=0 bc=189B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, r#1
function {
  let r;
  for (const r of t) {
    if (!(!(r in e))) continue;
    throw new RangeError("Unsupported attribute ".concat(r, " for ", n, " of type ", u));
  }
  <catch>;
  let r#1;
  for (const r#1 of e) {
    if (!(e[r#1].validate)) goto L_b7;
    e[r#1].validate(t[r#1]);
    // [栈深重同步 3 -> 5]
  }
  return;
}

// fn vu  args=2 vars=4 closure=1 cpool=0 bc=88B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u
// closure: Bu
function {
  let n;
  n = Object.create(null);
  if (!(t)) goto L_54;
  let u;
  for (const u of t) {
    n[u] = new Bu(e, u, t[u]);
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  return n;
}

// fn <atom:0>  args=3 vars=4 closure=3 cpool=0 bc=374B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: this
// closure: <class_fields_init>, vu, Au
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.name = e;
  this.schema = t;
  this.spec = n;
  this.markSet = null;
  if (!(n.group)) goto L_ad;
  goto L_b0;
  // [栈深重同步 2 -> 1]
  this.groups = [];
  this.attrs = vu(e, n.attrs);
  this.defaultAttrs = Au(this.attrs);
  this.contentMatch = null;
  this.inlineContent = null;
  if ((n.inline)) goto L_15a;
  this.isBlock = !("text" == e);
  this.isText = ("text" == e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=38B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return !this.isBlock;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  if (!(this.isBlock)) goto L_4a;
  return this.inlineContent;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=72B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
// closure: su
function {
  this = this;
  return (this.contentMatch == su.empty);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=110B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  if ((this.isLeaf)) goto L_6d;
  return !!this.spec.atom;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=76B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  return (this.groups.indexOf(e) > -1);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=154B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  if ((this.spec.whitespace)) goto L_99;
  if (!(this.spec.code)) goto L_94;
  return "pre";
  return "normal";
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=127B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
function {
  this = this;
  let e;
  for (const e of this.attrs) {
    if (!(this.attrs[e].isRequired)) continue;
    return true;
  }
  <catch>;
  return false;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=114B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (((this == e))) goto L_71;
  return this.contentMatch.compatible(e.contentMatch);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=115B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: xu
function {
  this = this;
  if (!(!e)) goto L_4d;
  if (!(this.defaultAttrs)) goto L_4d;
  return this.defaultAttrs;
  return xu(this.attrs, e);
}

// fn <atom:0>  args=3 vars=7 closure=3 cpool=0 bc=196B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: e#1, t#1, n#1, this
// closure: ru, Mn, Rn
function {
  this = this;
  let n#1;
  let t#1;
  let e#1;
  if (!((e === undefined))) goto L_13;
  e;
  e = null;
  e#1 = null;
  t#1 = t;
  n#1 = n;
  if (!(this.isText)) goto L_4b;
  throw new Error("NodeType.create can't construct text nodes");
  return new ru(this, this.computeAttrs(e), Mn.from(t), Rn.setFrom(n));
}

// fn <atom:0>  args=3 vars=7 closure=3 cpool=0 bc=186B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: e#1, t#1, n#1, this
// closure: Mn, ru, Rn
function {
  this = this;
  let n#1;
  let t#1;
  let e#1;
  if (!((e === undefined))) goto L_13;
  e;
  e = null;
  e#1 = null;
  t#1 = t;
  n#1 = n;
  t = Mn.from(t);
  this.checkContent(t);
  return new ru(this, this.computeAttrs(e), t, Rn.setFrom(n));
}

// fn <atom:0>  args=3 vars=10 closure=3 cpool=0 bc=522B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: e#1, t#1, n#1, e#2, u, r, this
// closure: Mn, ru, Rn
function {
  this = this;
  let n#1;
  let t#1;
  let e#1;
  if (!((e === undefined))) goto L_14;
  e;
  e = null;
  e#1 = null;
  t#1 = t;
  n#1 = n;
  let r;
  let u;
  e = this.computeAttrs(e);
  t = Mn.from(t);
  if (!(Mn.from(t).size)) goto L_10e;
  let e#2;
  e#2 = this.contentMatch.fillBefore(t);
  if (!(!e#2)) goto L_e5;
  return null;
  t = e#2.append(t);
  u = this.contentMatch.matchFragment(t);
  if (!(u)) goto L_1aa;
  r = u.fillBefore(Mn.empty, true);
  if (!(r)) goto L_208;
  return new ru(this, e, t.append(r), Rn.setFrom(n));
  return null;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=305B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
function {
  this = this;
  let t;
  t = this.contentMatch.matchFragment(e);
  if ((!t)) goto L_7a;
  if (!(!t.validEnd)) goto L_7f;
  return false;
  let n;
  n = 0;
  if (!((n < e.childCount))) goto L_12e;
  if (!(!this.allowsMarks(e.child(n).marks))) goto L_123;
  return false;
  n = <n_new>;
  (n++);
  goto L_84;
  return true;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=213B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (!(!this.validContent(e))) goto L_d4;
  throw new RangeError("Invalid content for node ".concat(this.name, ": ", e.toString().slice(0, 50)));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=81B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: ku
function {
  this = this;
  ku(this.attrs, e, "node", this.name);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=116B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (((null == this.markSet))) goto L_73;
  return (this.markSet.indexOf(e) > -1);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=150B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
function {
  this = this;
  if (!((null == this.markSet))) goto L_2b;
  return true;
  let t;
  t = 0;
  if (!((t < e.length))) goto L_93;
  if (!(!this.allowsMarkType(e[t].type))) goto L_89;
  return false;
  t = <t_new>;
  (t++);
  goto L_30;
  return true;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=309B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
// closure: Rn
function {
  this = this;
  let t;
  if (!((null == this.markSet))) goto L_2d;
  return e;
  t = undefined;
  let n;
  n = 0;
  if (!((n < e.length))) goto L_101;
  if (!(this.allowsMarkType(e[n].type))) goto L_c1;
  if (!(t)) goto L_f5;
  goto L_f5;
  // [栈深重同步 1 -> 0]
  if ((t)) goto L_f5;
  t = e.slice(0, n);
  e.slice(0, n);
  n = <n_new>;
  (n++);
  goto L_34;
  if (!(t)) goto L_133;
  if (!(t.length)) goto L_110;
  return t;
  return Rn.none;
  return e;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=18B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, u
// closure: n, _NodeType, t
function {
  n[e] = new _NodeType(e, t, u);
  return new _NodeType(e, t, u);
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=1 bc=355B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r
// closure: _NodeType
function {
  let u;
  let n;
  n = Object.create(null);
  e.forEach(function <atom:0>);
  if ((t.spec.topNode)) goto L_a5;
  u = "doc";
  if (!(!n[u])) goto L_c9;
  throw new RangeError((("Schema is missing its top node type ('" + u) + "')"));
  if (!(!n.text)) goto L_ff;
  throw new RangeError("Every schema needs a 'text' type");
  let r;
  for (const r of n.text.attrs) {
    throw new RangeError("The text node type should not have attributes");
  }
  <catch>;
  return n;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=139B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// locals: r
// closure: u, t, e
function {
  let r;
  if (!((null === n))) goto L_f;
  goto L_11;
  // [栈深重同步 1 -> 0]
  r = typeof n;
  if (!((u.indexOf(r) < 0))) goto L_8a;
  throw new RangeError("Expected value of type ".concat(u, " for attribute ", t, " on type ", e, ", got ", r));
  return;
}

// fn bu  args=3 vars=4 closure=0 cpool=1 bc=49B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u
function {
  let u;
  u = n.split("|");
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=310B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: this
// closure: <class_fields_init>, bu
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default");
  this.default = n.default;
  if (!(("string" == typeof n.validate))) goto L_10a;
  goto L_12c;
  // [栈深重同步 2 -> 1]
  this.validate = n.validate;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=38B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return !this.hasDefault;
}

// fn <atom:0>  args=4 vars=6 closure=4 cpool=0 bc=185B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, this
// closure: <class_fields_init>, vu, Au, Rn
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let r;
  this.name = e;
  this.rank = t;
  this.schema = n;
  this.spec = u;
  this.attrs = vu(e, u.attrs);
  this.excluded = null;
  r = Au(this.attrs);
  if (!(r)) goto L_ae;
  goto L_af;
  // [栈深重同步 2 -> 1]
  this.instance = null;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=133B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: e#1, this
// closure: Rn, xu
function {
  this = this;
  let e#1;
  if (!((e === undefined))) goto L_d;
  e;
  e = null;
  e#1 = null;
  if (!(!e)) goto L_59;
  if (!(this.instance)) goto L_59;
  return this.instance;
  return new Rn(this, xu(this.attrs, e));
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=25B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, r
// closure: n, _MarkType, u, t
function {
  u = <u_new>;
  n[e] = new _MarkType(e, (u++), t, r);
  return new _MarkType(e, (u++), t, r);
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=1 bc=95B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u
// closure: _MarkType
function {
  let u;
  let n;
  n = Object.create(null);
  u = 0;
  e.forEach(function <atom:0>);
  return n;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=182B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
function {
  this = this;
  t = 0;
  if (!((t < e.length))) goto L_b4;
  if (!((e[t].type == this))) goto L_ae;
  e = e.slice(0, t).concat(e.slice((t + 1)));
  t = <t_new>;
  (t--);
  goto L_4;
  return e;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=74B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = 0;
  if (!((t < e.length))) goto L_49;
  if (!((e[t].type == this))) goto L_3f;
  return e[t];
  t = <t_new>;
  (t++);
  goto L_7;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=81B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: ku
function {
  this = this;
  ku(this.attrs, e, "mark", this.name);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=76B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  return (this.excluded.indexOf(e) > -1);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: ru, this
function {
  return ru.fromJSON(this, e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Rn, this
function {
  return Rn.fromJSON(this, e);   // tail call
}

// fn <atom:0>  args=1 vars=12 closure=8 cpool=2 bc=1945B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, u, n, u#1, e#1, t#1, r, u#2, e#2, t#2, this
// closure: ru, Rn, <class_fields_init>, wn, yu, wu, su, Tu
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let n;
  let t;
  this.linebreakReplacement = null;
  this.cached = Object.create(null);
  this.spec = {};
  t = {};
  let u;
  for (const u of e) {
    t[u] = e[u];
  }
  <catch>;
  t.nodes = wn.from(e.nodes);
  if ((e.marks)) goto L_11f;
  t.marks = wn.from({});
  this.nodes = yu.compile(this.spec.nodes, this);
  this.marks = wu.compile(this.spec.marks, this);
  n = Object.create(null);
  let u#1;
  for (const u#1 of this.nodes) {
    let r;
    let t#1;
    let e#1;
    if (!((u#1 in this.marks))) goto L_2b6;
    throw new RangeError((u#1 + " can not be both a node and a mark"));
    e#1 = this.nodes[u#1];
    if ((e#1.spec.content)) goto L_329;
    t#1 = "";
    r = e#1.spec.marks;
    if ((n[t#1])) goto L_3d6;
    n[t#1] = su.parse(t#1, this.nodes);
    e#1.contentMatch = su.parse(t#1, this.nodes);
    e#1.inlineContent = e#1.contentMatch.inlineContent;
    if (!(e#1.spec.linebreakReplacement)) goto L_51b;
    if (!(this.linebreakReplacement)) goto L_4ae;
    throw new RangeError("Multiple linebreak nodes defined");
    if ((!e#1.isInline)) goto L_4fc;
    if (!(!e#1.isLeaf)) goto L_50d;
    throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
    this.linebreakReplacement = e#1;
    if (!(("_" == r))) goto L_52c;
    goto L_598;
    // [栈深重同步 5 -> 4]
    if (!(r)) goto L_565;
    goto L_598;
    // [栈深重同步 5 -> 4]
    if (!(("" != r))) goto L_595;
    if (!(e#1.inlineContent)) goto L_595;
    goto L_598;
    // [栈深重同步 5 -> 4]
    e#1.markSet = [];
    // [栈深重同步 3 -> 5]
  }
  <?>;
  let u#2;
  for (const u#2 of this.marks) {
    let t#2;
    let e#2;
    e#2 = this.marks[u#2];
    t#2 = e#2.spec.excludes;
    if (!((null == t#2))) goto L_65d;
    goto L_69b;
    // [栈深重同步 5 -> 4]
    if (!(("" == t#2))) goto L_669;
    goto L_69b;
    // [栈深重同步 5 -> 4]
    e#2.excluded = Tu(this, t#2.split(" "));
    // [栈深重同步 3 -> 7]
  }
  <?>;
  this.nodeFromJSON = function <atom:0>;
  this.markFromJSON = function <atom:0>;
  if ((this.spec.topNode)) goto L_738;
  this.topNodeType = this.nodes["doc"];
  this.cached.wrappings = Object.create(null);
  return;
}

// fn <atom:0>  args=4 vars=9 closure=1 cpool=0 bc=240B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: e#1, t#1, n#1, u#1, this
// closure: yu
function {
  this = this;
  let u#1;
  let n#1;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_19;
  t;
  t = null;
  t#1 = null;
  n#1 = n;
  u#1 = u;
  if (!(("string" == typeof e))) goto L_52;
  e = this.nodeType(e);
  goto L_c8;
  if (!(!(e instanceof yu))) goto L_69;
  throw new RangeError(("Invalid node type: " + e));
  if (!((e.schema != this))) goto L_c8;
  throw new RangeError((("Node type from different schema used (" + e.name) + ")"));
  return e.createChecked(t, n, u);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=157B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, this
// closure: iu, Rn
function {
  this = this;
  let n;
  n = this.nodes.text;
  return new iu(n, n.defaultAttrs, e, Rn.setFrom(t));
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=90B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: this
function {
  this = this;
  if (!(("string" == typeof e))) goto L_33;
  e = this.marks[e];
  this.marks[e];
  return e.create(t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=69B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.nodes[e];
  if (!(!t)) goto L_41;
  throw new RangeError(("Unknown node type: " + e));
  return t;
}

// fn Tu  args=2 vars=9 closure=0 cpool=0 bc=569B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, t#1, u#1
function {
  let n;
  n = [];
  let u;
  u = 0;
  if (!((u < t.length))) goto L_235;
  let o;
  let i;
  let r;
  r = t[u];
  i = e.marks[r];
  o = i;
  if (!(i)) goto L_85;
  n.push(i);
  goto L_209;
  let t#1;
  for (const t#1 of e.marks) {
    let u#1;
    u#1 = e.marks[t#1];
    if ((("_" == r))) goto L_1ce;
    if (!(u#1.spec.group)) goto L_1ce;
    if (!((u#1.spec.group.split(" ").indexOf(r) > -1))) goto L_200;
    o = u#1;
    n.push(u#1);
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  if (!(!o)) goto L_22a;
  throw new SyntaxError((("Unknown mark type: '" + t[u]) + "'"));
  u = <u_new>;
  (u++);
  goto L_c;
  return n;
}

// fn Iu  args=2 vars=5 closure=0 cpool=0 bc=157B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r
function {
  let r;
  let u;
  let n;
  n = String(e);
  if (!(("string" != typeof t))) goto L_2a;
  throw new TypeError("Expected character");
  u = 0;
  r = n.indexOf(t);
  if (!((-1 !== r))) goto L_99;
  u = <u_new>;
  (u++);
  r = n.indexOf(t, (r + t.length));
  n.indexOf(t, (r + t.length));
  goto L_55;
  return u;
}

// fn qu  args=0 vars=0 closure=0 cpool=0 bc=1B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return;
}

// fn Mu  args=1 vars=1 closure=0 cpool=4 bc=118B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!(("string" != typeof e))) goto L_19;
  throw new TypeError("Expected a string");
  return e.replace(new RegExp("[|\\\\{}()[\\]^$+*?.]"), "\$&").replace(new RegExp("-"), "\x2d");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=116B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Nu, _u, zu, Lu, Ru
function {
  if (!((null == e))) goto L_7;
  return Nu;
  if (!(("function" == typeof e))) goto L_16;
  return _u(e);   // tail call
  if (!(("object" == typeof e))) goto L_54;
  if (!(Array.isArray(e))) goto L_50;
  return zu(e);
  return Lu(e);
  if (!(("string" == typeof e))) goto L_65;
  return Ru(e);   // tail call
  throw new Error("Expected function, string, or object as test");
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=79B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: n, this
// closure: t
function {
  this = this;
  e = ...0;
  let n;
  n = -1;
  n = (n ++);
  if (!(((n ++) < t.length))) goto L_4c;
  if (!(t[n].apply(this, e))) goto L_b;
  return true;
  return false;
}

// fn zu  args=1 vars=3 closure=2 cpool=1 bc=48B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n
// closure: Ou, _u
function {
  let n;
  let t;
  t = [];
  n = -1;
  n = (n ++);
  if (!(((n ++) < e.length))) goto L_2a;
  t[n] = Ou(e[n]);
  goto L_c;
  return _u(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=45B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// locals: u, r
// closure: e, t
function {
  let r;
  let u;
  u = n;
  r = undefined;
  for (const r of e) {
    if (!((u[r] !== t[r]))) continue;
    return false;
  }
  <catch>;
  return true;
}

// fn Lu  args=1 vars=2 closure=1 cpool=1 bc=11B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
// closure: _u
function {
  let t;
  t = e;
  return _u(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e
function {
  if (!(t)) goto L_29;
  return (t.type === e);
}

// fn Ru  args=1 vars=1 closure=1 cpool=1 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: _u
function {
  return _u(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=76B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t, n, u
// locals: this
// closure: Pu, e
function {
  this = this;
  if (!(Pu(t))) goto L_49;
  if (!(("number" == typeof n))) goto L_3f;
  goto L_40;
  // [栈深重同步 6 -> 5]
  if ((u)) goto L_46;
  return Boolean(e.call(this, t, undefined, undefined));   // tail call
}

// fn _u  args=1 vars=1 closure=1 cpool=1 bc=3B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Pu
function {
  return function <atom:0>;
}

// fn Nu  args=0 vars=0 closure=0 cpool=0 bc=3B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return true;
}

// fn Pu  args=1 vars=1 closure=0 cpool=0 bc=27B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!((null !== e))) goto L_1a;
  if (!(("object" == typeof e))) goto L_1a;
  return ("type" in e);
}

// fn ju  args=1 vars=1 closure=0 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e;
}

// fn c  args=0 vars=6 closure=13 cpool=0 bc=468B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: l, c, D, f, t, n
// closure: Vu, t, i, r, s, a, Gu, n, Hu, $u, u, o, e
function {
  let f;
  let D;
  let c;
  let l;
  l = undefined;
  c = undefined;
  D = undefined;
  f = Vu;
  if ((!t)) goto L_31;
  if ((a[(a.length - 1)])) goto L_30;
  if (!(i(r, s, undefined))) goto L_53;
  f = Gu(n(r, a));
  Gu(n(r, a));
  if (!((f[0] === Hu))) goto L_53;
  return f;
  if (!(("children" in r))) goto L_1d0;
  if (!(r.children)) goto L_1d0;
  let t;
  t = r;
  if (!(t.children)) goto L_1d0;
  if (!((f[0] !== $u))) goto L_1d0;
  if (!(u)) goto L_ef;
  goto L_f0;
  // [栈深重同步 1 -> 0]
  c = (-1 + o);
  (-1 + o);
  D = a.concat(t);
  a.concat(t);
  if (!((c > -1))) goto L_1d0;
  if (!((c < t.children.length))) goto L_1d0;
  let n;
  n = t.children[c];
  l = e(n, c, D)();
  e(n, c, D)();
  if (!((l[0] === Hu))) goto L_1ac;
  return l;
  if (!(("number" == typeof l[1]))) goto L_1c1;
  goto L_1c8;
  // [栈深重同步 1 -> 0]
  c = (c + o);
  (c + o);
  goto L_128;
  return f;
}

// fn e  args=3 vars=7 closure=10 cpool=1 bc=376B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: r, s, a
// locals: l, e, c, e#1
// closure: Vu, t, i, Gu, n, Hu, $u, u, o, ju
function {
  e#1 = <special_object 2>;
  c = function c;
  let l;
  if (!(r)) goto L_19;
  if (!(("object" == typeof r))) goto L_19;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  l = {};
  if (!(("string" == typeof l.type))) goto L_176;
  let e;
  if (!(("string" == typeof l.tagName))) goto L_a1;
  goto L_f5;
  // [栈深重同步 1 -> 0]
  if (!(("string" == typeof l.name))) goto L_f4;
  goto L_f5;
  // [栈深重同步 1 -> 0]
  e = undefined;
  if (!(e)) goto L_163;
  goto L_164;
  // [栈深重同步 9 -> 8]
  Object.defineProperty(c, "name", {value: (("node (" + ju((r.type + ""))) + ")")});
  return c;
}

// fn Ju  args=4 vars=7 closure=6 cpool=1 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o
// closure: Vu, Gu, Hu, $u, ju, Ou
function {
  let o;
  let i;
  let r;
  r = undefined;
  if (!(("function" == typeof t))) goto L_25;
  if (!(("function" != typeof n))) goto L_25;
  u = n;
  n = t;
  goto L_2a;
  // [栈深重同步 1 -> 0]
  r = t;
  t;
  i = Ou(r);
  if (!(u)) goto L_39;
  goto L_3a;
  // [栈深重同步 1 -> 0]
  o = 1;
  !function e(e, undefined, [])();
  return;
}

// fn Gu  args=1 vars=1 closure=2 cpool=0 bc=74B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Uu, Vu
function {
  if (!(Array.isArray(e))) goto L_2e;
  return e;
  if (!(("number" == typeof e))) goto L_3e;
  return [Uu, e];
  if (!((null == e))) goto L_45;
  return Vu;
  return [e];
}

// fn <atom:0>  args=2 vars=13 closure=2 cpool=0 bc=1206B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, o, s, a, l, c, D, n#1, r, i
// closure: r, i
function {
  let D;
  let c;
  let l;
  let a;
  let s;
  let o;
  let u;
  let n;
  n = t[(t.length - 1)];
  u = r[i][0];
  o = r[i][1];
  s = 0;
  a = n.children.indexOf(e);
  l = false;
  c = [];
  u.lastIndex = 0;
  D = u.exec(e.value);
  if (!(D)) goto L_395;
  let i;
  let r;
  let n#1;
  n#1 = D.index;
  // append([], 0, t)
  [][t] = e;
  (e ++);
  r = {index: D.index, input: D.input, stack: []};
  // append([], 0, D)
  [][D] = r;
  (r ++);
  i = o.apply(undefined, []);
  if (!(("string" == typeof i))) goto L_1c4;
  if (!((i.length > 0))) goto L_1bf;
  goto L_1c0;
  // [栈深重同步 1 -> 0]
  i = undefined;
  undefined;
  if (!((false === i))) goto L_1e2;
  u.lastIndex = (n#1 + 1);
  goto L_31c;
  // [栈深重同步 1 -> 0]
  if (!((s !== n#1))) goto L_273;
  c.push({type: "text", value: e.value.slice(s, n#1)});
  if (!(Array.isArray(i))) goto L_2d5;
  // append([], 0, i)
  i;
  goto L_306;
  // [栈深重同步 1 -> 0]
  if (!(i)) goto L_306;
  c.push(i);
  s = (n#1 + D[0].length);
  (n#1 + D[0].length);
  l = true;
  true;
  if ((!u.global)) goto L_395;
  D = u.exec(e.value);
  u.exec(e.value);
  goto L_e1;
  if (!(l)) goto L_4a4;
  if (!((s < e.value.length))) goto L_44b;
  c.push({type: "text", value: e.value.slice(s)});
  // append([a, 1], 2, c)
  c;
  goto L_4ac;
  // [栈深重同步 1 -> 0]
  c = [e];
  [e];
  return (a + c.length);
}

// fn o  args=2 vars=6 closure=3 cpool=1 bc=170B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, o, e#1, r
// closure: r, i, u
function {
  let o;
  let n;
  n = undefined;
  o = -1;
  o = (o ++);
  if (!(((o ++) < t.length))) goto L_9d;
  let r;
  let e#1;
  e#1 = t[o];
  if (!(n)) goto L_51;
  goto L_52;
  // [栈深重同步 1 -> 0]
  r = undefined;
  if (!(r)) goto L_8a;
  goto L_8b;
  // [栈深重同步 3 -> 2]
  if (!(u(e#1, undefined, n))) goto L_92;
  return;
  n = e#1;
  e#1;
  goto L_a;
  if (!(n)) goto L_a9;
  return function <atom:0>(e, t);   // tail call
  return;
}

// fn Wu  args=3 vars=7 closure=3 cpool=1 bc=95B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o
// closure: Ou, Qu, Ju
function {
  o = function o;
  let i;
  let r;
  let u;
  if ((n)) goto L_13;
  if (({}.ignore)) goto L_3b;
  u = Ou([]);
  r = Qu(t);
  i = -1;
  i = (i ++);
  if (!(((i ++) < r.length))) goto L_5e;
  Ju(e, "text", o);
  goto L_43;
  return;
}

// fn Qu  args=1 vars=5 closure=2 cpool=0 bc=226B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, e#1
// closure: Zu, Yu
function {
  let u;
  let n;
  let t;
  t = [];
  if (!(!Array.isArray(e))) goto L_49;
  throw new TypeError("Expected find and replace tuple or list of tuples");
  if ((!e[0])) goto L_7d;
  if (!(Array.isArray(e[0]))) goto L_82;
  goto L_86;
  // [栈深重同步 1 -> 0]
  n = [e];
  u = -1;
  u = (u ++);
  if (!(((u ++) < n.length))) goto L_de;
  let e#1;
  e#1 = n[u];
  t.push([Zu(e#1[0]), Yu(e#1[1])]);
  goto L_89;
  return t;
}

// fn Zu  args=1 vars=1 closure=1 cpool=0 bc=30B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Mu
function {
  if (!(("string" == typeof e))) goto L_1c;
  return new RegExp(Mu(e), "g");
  return e;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: e
function {
  return e;
}

// fn Yu  args=1 vars=1 closure=0 cpool=1 bc=15B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!(("function" == typeof e))) goto L_c;
  return e;
  return function <atom:0>;
}

// fn er  args=0 vars=0 closure=7 cpool=0 bc=77B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: ar, nr, ur, sr, or, rr, ir
function {
  return {transforms: [ar], enter: {literalAutolink: nr, literalAutolinkEmail: ur, literalAutolinkHttp: ur, literalAutolinkWww: ur}, exit: {literalAutolink: sr, literalAutolinkEmail: or, literalAutolinkHttp: rr, literalAutolinkWww: ir}};
}

// fn tr  args=0 vars=0 closure=2 cpool=0 bc=139B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: Ku, Xu
function {
  return {unsafe: [{character: "@", before: "[+\-.\w]", after: "[\-.\w]", inConstruct: Ku, notInConstruct: Xu}, {character: ".", before: "[Ww]", after: "[\-.\w]", inConstruct: Ku, notInConstruct: Xu}, {character: ":", before: "[ps]", after: "\/", inConstruct: Ku, notInConstruct: Xu}]};
}

// fn nr  args=1 vars=2 closure=0 cpool=0 bc=72B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.enter({type: "link", title: null, url: "", children: []}, e);
  return;
}

// fn ur  args=1 vars=2 closure=0 cpool=0 bc=141B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.config.enter.autolinkProtocol.call(this, e);
  return;
}

// fn rr  args=1 vars=2 closure=0 cpool=0 bc=141B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.config.exit.autolinkProtocol.call(this, e);
  return;
}

// fn ir  args=1 vars=3 closure=1 cpool=0 bc=319B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
// closure: qu
function {
  this = this;
  let t;
  this.config.exit.data.call(this, e);
  t = this.stack[(this.stack.length - 1)];
  qu(("link" === t.type));
  t.url = ("http://" + this.sliceSerialize(e));
  return;
}

// fn or  args=1 vars=2 closure=0 cpool=0 bc=141B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.config.exit.autolinkEmail.call(this, e);
  return;
}

// fn sr  args=1 vars=2 closure=0 cpool=0 bc=41B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.exit(e);
  return;
}

// fn ar  args=1 vars=1 closure=3 cpool=2 bc=58B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Wu, lr, dr
function {
  Wu(e, [[new RegExp("(https?:\\/\\/|www(?=\\.))([-.\\w]+)([^ \\t\\r\\n]*)"), lr], [new RegExp("(^|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]|(?:[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B60\u1B7D-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F])|(?:[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD803[\uDD8E\uDD8F]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDC00-\uDCEF\uDD00-\uDEB3\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF]))([\+\x2D\.0-9A-Z_a-z]+)@([\x2D0-9A-Z_a-z]+(?:\.[\x2D0-9A-Z_a-z]+)+)", "g"), dr]], {ignore: ["link", "linkReference"]});
  return;
}

// fn lr  args=5 vars=8 closure=3 cpool=2 bc=214B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r
// locals: i, o, s
// closure: hr, Dr, fr
function {
  let s;
  let o;
  let i;
  i = "";
  if (!(!hr(r))) goto L_16;
  return false;
  if (!(new RegExp("^w").test(t))) goto L_53;
  n = (t + n);
  t = "";
  i = "http://";
  "http://";
  if (!(!Dr(n))) goto L_5d;
  return false;
  o = fr((n + u));
  if (!(!o[0])) goto L_6e;
  return false;
  s = {type: "link", title: null, url: ((i + t) + o[0]), children: [{type: "text", value: (t + o[0])}]};
  if (!(o[1])) goto L_d2;
  return [s, {type: "text", value: o[1]}];
  return s;
}

// fn cr  args=4 vars=4 closure=1 cpool=2 bc=128B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// closure: hr
function {
  if ((!hr(u, true))) goto L_34;
  if (!(!new RegExp("[-\\d_]$").test(n))) goto L_7f;
  return {type: "link", title: null, url: ((("mailto:" + t) + "@") + n), children: [{type: "text", value: ((t + "@") + n)}]};
}

// fn Dr  args=1 vars=2 closure=0 cpool=8 bc=307B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  let t;
  t = e.split(".");
  if (((t.length < 2))) goto L_131;
  if (!(t[(t.length - 1)])) goto L_b4;
  if ((new RegExp("_").test(t[(t.length - 1)]))) goto L_b4;
  if ((!new RegExp("[a-zA-Z\\d]").test(t[(t.length - 1)]))) goto L_131;
  if (!(t[(t.length - 2)])) goto L_131;
  if ((new RegExp("_").test(t[(t.length - 2)]))) goto L_131;
  return !!new RegExp("[a-zA-Z\\d]").test(t[(t.length - 2)]);
}

// fn fr  args=1 vars=6 closure=1 cpool=2 bc=402B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r, i
// closure: Iu
function {
  let i;
  let r;
  let u;
  let n;
  let t;
  t = new RegExp("[!\"&'),.:;<>?\\]}]+$").exec(e);
  if (!(!t)) goto L_46;
  return [e, undefined];
  e = e.slice(0, t.index);
  n = t[0];
  u = n.indexOf(")");
  r = Iu(e, "(");
  i = Iu(e, ")");
  if (!((-1 !== u))) goto L_18a;
  if (!((r > i))) goto L_18a;
  e = (e + n.slice(0, (u + 1)));
  n = n.slice((u + 1));
  n.slice((u + 1));
  u = n.indexOf(")");
  n.indexOf(")");
  i = <i_new>;
  (i++);
  goto L_d7;
  return [e, n];
}

// fn hr  args=2 vars=3 closure=2 cpool=0 bc=181B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
// closure: W, G
function {
  let n;
  n = e.input.charCodeAt((e.index - 1));
  if (((0 === e.index))) goto L_a4;
  if ((W(n))) goto L_a4;
  if (!(G(n))) goto L_b4;
  if ((!t)) goto L_b4;
  return (47 !== n);
}

// fn dr  args=5 vars=6 closure=1 cpool=0 bc=183B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r
// locals: i
// closure: cr
function {
  let i;
  i = cr(e.slice(t.length), n, u, Object.assign({}, r, {index: (r.index + t.length)}));
  if (((false === i))) goto L_99;
  if (!((0 === t.length))) goto L_9f;
  return i;
  return [{type: "text", value: t}, i];
}

// fn pr  args=0 vars=1 closure=0 cpool=0 bc=40B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  this.buffer();
  return;
}

// fn Fr  args=1 vars=2 closure=0 cpool=0 bc=64B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.enter({type: "footnoteReference", identifier: "", label: ""}, e);
  return;
}

// fn mr  args=0 vars=1 closure=0 cpool=0 bc=40B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  this.buffer();
  return;
}

// fn gr  args=1 vars=2 closure=0 cpool=0 bc=72B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.enter({type: "footnoteDefinition", identifier: "", label: "", children: []}, e);
  return;
}

// fn Er  args=1 vars=4 closure=2 cpool=0 bc=268B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
// closure: qu, L
function {
  this = this;
  let n;
  let t;
  t = this.resume();
  n = this.stack[(this.stack.length - 1)];
  qu(("footnoteReference" === n.type));
  n.identifier = L(this.sliceSerialize(e)).toLowerCase();
  n.label = t;
  return;
}

// fn Cr  args=1 vars=2 closure=0 cpool=0 bc=41B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.exit(e);
  return;
}

// fn Ar  args=1 vars=4 closure=2 cpool=0 bc=268B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
// closure: qu, L
function {
  this = this;
  let n;
  let t;
  t = this.resume();
  n = this.stack[(this.stack.length - 1)];
  qu(("footnoteDefinition" === n.type));
  n.identifier = L(this.sliceSerialize(e)).toLowerCase();
  n.label = t;
  return;
}

// fn xr  args=1 vars=2 closure=0 cpool=0 bc=41B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.exit(e);
  return;
}

// fn kr  args=0 vars=0 closure=0 cpool=0 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return "[";
}

// fn vr  args=4 vars=8 closure=0 cpool=0 bc=391B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s
function {
  let s;
  let o;
  let i;
  let r;
  r = n.createTracker(u);
  i = r.move("[^");
  o = n.enter("footnoteReference");
  s = n.enter("reference");
  i = (i + r.move(n.safe(n.associationId(e), {after: "]", before: i})));
  (i + r.move(n.safe(n.associationId(e), {after: "]", before: i})));
  s();
  o();
  i = (i + r.move("]"));
  (i + r.move("]"));
  return i;
}

// fn yr  args=0 vars=0 closure=8 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: pr, Fr, mr, gr, Er, Cr, Ar, xr
function {
  return {enter: {gfmFootnoteCallString: pr, gfmFootnoteCall: Fr, gfmFootnoteDefinitionLabelString: mr, gfmFootnoteDefinition: gr}, exit: {gfmFootnoteCallString: Er, gfmFootnoteCall: Cr, gfmFootnoteDefinitionLabelString: Ar, gfmFootnoteDefinition: xr}};
}

// fn <atom:0>  args=4 vars=8 closure=3 cpool=0 bc=706B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, n, u, r
// locals: i, o, s, a
// closure: t, wr, Br
function {
  let a;
  let s;
  let o;
  let i;
  i = u.createTracker(r);
  o = i.move("[^");
  s = u.enter("footnoteDefinition");
  a = u.enter("label");
  o = (o + i.move(u.safe(u.associationId(e), {before: o, after: "]"})));
  (o + i.move(u.safe(u.associationId(e), {before: o, after: "]"})));
  a();
  o = (o + i.move("]:"));
  (o + i.move("]:"));
  if (!(e.children)) goto L_2b8;
  if (!((e.children.length > 0))) goto L_2b8;
  i.shift(4);
  if (!(t)) goto L_22f;
  goto L_234;
  // [栈深重同步 4 -> 3]
  if (!(t)) goto L_2ab;
  goto L_2ac;
  // [栈深重同步 8 -> 7]
  o = (o + i.move((" " + u.indentLines(u.containerFlow(e, i.current()), Br))));
  (o + i.move((" " + u.indentLines(u.containerFlow(e, i.current()), Br))));
  s();
  return o;
}

// fn br  args=1 vars=2 closure=3 cpool=1 bc=124B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
// closure: wr, Br, vr
function {
  let t;
  t = false;
  if (!(e)) goto L_37;
  if (!(e.firstLineBlank)) goto L_37;
  t = true;
  true;
  return {handlers: {footnoteDefinition: function <atom:0>, footnoteReference: vr}, unsafe: [{character: "[", inConstruct: ["label", "phrasing", "reference"]}]};
}

// fn Br  args=3 vars=3 closure=1 cpool=0 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: wr
function {
  if (!((0 === t))) goto L_7;
  return e;
  return wr(e, t, n);
}

// fn wr  args=3 vars=3 closure=0 cpool=0 bc=14B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
function {
  if (!(n)) goto L_6;
  goto L_b;
  // [栈深重同步 1 -> 0]
  return ("    " + e);
}

// fn Tr  args=0 vars=0 closure=2 cpool=0 bc=39B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: qr, Mr
function {
  return {canContainEols: ["delete"], enter: {strikethrough: qr}, exit: {strikethrough: Mr}};
}

// fn Ir  args=0 vars=0 closure=2 cpool=0 bc=49B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: Sr, Or
function {
  return {unsafe: [{character: "~", inConstruct: "phrasing", notInConstruct: Sr}], handlers: {delete: Or}};
}

// fn qr  args=1 vars=2 closure=0 cpool=0 bc=60B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.enter({type: "delete", children: []}, e);
  return;
}

// fn Mr  args=1 vars=2 closure=0 cpool=0 bc=41B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.exit(e);
  return;
}

// fn Or  args=4 vars=7 closure=2 cpool=0 bc=308B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o
// closure: f, D
function {
  let o;
  let i;
  let r;
  r = n.createTracker(u);
  i = n.enter("strikethrough");
  o = r.move("~~");
  o = (o + n.containerPhrasing(e, f(D({}, r.current()), {before: o, after: "~"})));
  (o + n.containerPhrasing(e, f(D({}, r.current()), {before: o, after: "~"})));
  o = (o + r.move("~~"));
  (o + r.move("~~"));
  i();
  return o;
}

// fn zr  args=0 vars=0 closure=0 cpool=0 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return "~";
}

// fn Lr  args=1 vars=1 closure=0 cpool=0 bc=3B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.length;
}

// fn Rr  args=2 vars=34 closure=3 cpool=4 bc=2497B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s, a, l, c, t#1, u#1, i#1, o#1, e#1, D, e#2, f, h, e#3, t#2, u#2, r#1, o#2, d, e#4, t#3, u#3, r#2, o#3, s#1, e#5, n#1
// closure: Lr, _r, Nr
function {
  let d;
  let h;
  let f;
  let D;
  let c;
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  let u;
  let n;
  if ((t)) goto L_2d;
  n = {};
  if ((n.align)) goto L_59;
  u = [].concat();
  if ((n.stringLength)) goto L_a7;
  r = Lr;
  i = [];
  o = [];
  s = [];
  a = [];
  l = 0;
  c = -1;
  c = (c ++);
  if (!(((c ++) < e.length))) goto L_1d4;
  let i#1;
  let u#1;
  let t#1;
  t#1 = [];
  u#1 = [];
  i#1 = -1;
  if (!((e[c].length > l))) goto L_ff;
  l = e[c].length;
  e[c].length;
  i#1 = (i#1 ++);
  if (!(((i#1 ++) < e[c].length))) goto L_1bb;
  let o#1;
  o#1 = _r(e[c][i#1]);
  if (!((false !== n.alignDelimiters))) goto L_18d;
  let e#1;
  e#1 = r(o#1);
  u#1[i#1] = e#1;
  if (((undefined === a[i#1]))) goto L_17c;
  if (!((e#1 > a[i#1]))) goto L_18c;
  a[i#1] = e#1;
  e#1;
  t#1.push(o#1);
  goto L_100;
  o[c] = t#1;
  s[c] = u#1;
  goto L_c1;
  D = -1;
  if (!(("object" == typeof u))) goto L_20f;
  if (!(("length" in u))) goto L_20f;
  D = (D ++);
  if (!(((D ++) < l))) goto L_234;
  i[D] = Nr(u[D]);
  goto L_1ee;
  let e#2;
  e#2 = Nr(u);
  D = (D ++);
  if (!(((D ++) < l))) goto L_234;
  i[D] = e#2;
  goto L_219;
  D = -1;
  -1;
  f = [];
  h = [];
  D = (D ++);
  if (!(((D ++) < l))) goto L_3ca;
  let o#2;
  let r#1;
  let u#2;
  let t#2;
  let e#3;
  e#3 = i[D];
  t#2 = "";
  u#2 = "";
  if (!((99 === e#3))) goto L_290;
  t#2 = ":";
  ":";
  u#2 = ":";
  goto L_2b6;
  // [栈深重同步 1 -> 0]
  if (!((108 === e#3))) goto L_2a3;
  t#2 = ":";
  goto L_2b6;
  // [栈深重同步 1 -> 0]
  if (!((114 === e#3))) goto L_2b6;
  u#2 = ":";
  ":";
  if (!((false === n.alignDelimiters))) goto L_2e3;
  goto L_31e;
  // [栈深重同步 1 -> 0]
  r#1 = Math.max(1, ((a[D] - t#2.length) - u#2.length));
  o#2 = ((t#2 + "-".repeat(r#1)) + u#2);
  if (!((false !== n.alignDelimiters))) goto L_3bb;
  r#1 = ((t#2.length + r#1) + u#2.length);
  ((t#2.length + r#1) + u#2.length);
  if (!((r#1 > a[D]))) goto L_3ae;
  a[D] = r#1;
  r#1;
  h[D] = r#1;
  r#1;
  f[D] = o#2;
  goto L_244;
  o.splice(1, 0, f);
  s.splice(1, 0, h);
  c = -1;
  -1;
  d = [];
  c = (c ++);
  if (!(((c ++) < o.length))) goto L_995;
  let u#3;
  let t#3;
  let e#4;
  e#4 = o[c];
  t#3 = s[c];
  D = -1;
  -1;
  u#3 = [];
  D = (D ++);
  if (!(((D ++) < l))) goto L_8c5;
  let s#1;
  let o#3;
  let r#2;
  if ((e#4[D])) goto L_48d;
  r#2 = "";
  o#3 = "";
  s#1 = "";
  if (!((false !== n.alignDelimiters))) goto L_60d;
  let n#1;
  let e#5;
  if ((t#3[D])) goto L_4da;
  e#5 = (a[D] - 0);
  n#1 = i[D];
  if (!((114 === n#1))) goto L_521;
  o#3 = " ".repeat(e#5);
  goto L_60c;
  // [栈深重同步 1 -> 0]
  if (!((99 === n#1))) goto L_5dc;
  if (!((e#5 % 2))) goto L_5a0;
  o#3 = " ".repeat(((e#5 / 2) + 0.5));
  " ".repeat(((e#5 / 2) + 0.5));
  s#1 = " ".repeat(((e#5 / 2) - 0.5));
  goto L_60c;
  // [栈深重同步 1 -> 0]
  o#3 = " ".repeat((e#5 / 2));
  " ".repeat((e#5 / 2));
  s#1 = o#3;
  goto L_60c;
  // [栈深重同步 1 -> 0]
  s#1 = " ".repeat(e#5);
  " ".repeat(e#5);
  if (((false === n.delimiterStart))) goto L_66b;
  if ((D)) goto L_66b;
  u#3.push("|");
  if (((false === n.padding))) goto L_72d;
  if (!((false === n.alignDelimiters))) goto L_6ca;
  if ((("" === r#2))) goto L_72d;
  if (!((false === n.delimiterStart))) goto L_6fd;
  if ((!D)) goto L_72d;
  u#3.push(" ");
  if (!((false !== n.alignDelimiters))) goto L_783;
  u#3.push(o#3);
  u#3.push(r#2);
  if (!((false !== n.alignDelimiters))) goto L_804;
  u#3.push(s#1);
  if (!((false !== n.padding))) goto L_85c;
  u#3.push(" ");
  if (!((false === n.delimiterEnd))) goto L_891;
  if (((D === (l - 1)))) goto L_8c1;
  u#3.push("|");
  goto L_467;
  if (!((false === n.delimiterEnd))) goto L_966;
  goto L_98e;
  // [栈深重同步 3 -> 2]
  d.push(u#3.join(""));
  goto L_42f;
  return d.join("
");   // tail call
}

// fn _r  args=1 vars=1 closure=0 cpool=0 bc=15B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!((null == e))) goto L_7;
  return "";
  return String(e);
}

// fn Nr  args=1 vars=2 closure=0 cpool=0 bc=120B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  let t;
  if (!(("string" == typeof e))) goto L_35;
  goto L_36;
  // [栈深重同步 1 -> 0]
  t = 0;
  if (((67 === t))) goto L_47;
  if (!((99 === t))) goto L_4c;
  return 99;
  if (((76 === t))) goto L_5c;
  if (!((108 === t))) goto L_61;
  return 108;
  if (((82 === t))) goto L_71;
  if (!((114 === t))) goto L_76;
  return 114;
  return 0;
}

// fn Pr  args=4 vars=7 closure=1 cpool=0 bc=302B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o
// closure: jr
function {
  let o;
  let i;
  let r;
  r = n.enter("blockquote");
  i = n.createTracker(u);
  i.move("> ");
  i.shift(2);
  o = n.indentLines(n.containerFlow(e, i.current()), jr);
  r();
  return o;
}

// fn jr  args=3 vars=3 closure=0 cpool=0 bc=20B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
function {
  if (!(n)) goto L_b;
  goto L_10;
  // [栈深重同步 2 -> 1]
  return ((">" + " ") + e);
}

// fn Vr  args=2 vars=2 closure=1 cpool=0 bc=84B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: Ur
function {
  if (!(Ur(e, t.inConstruct, true))) goto L_53;
  return !Ur(e, t.notInConstruct, false);
}

// fn Ur  args=3 vars=4 closure=0 cpool=0 bc=100B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u
function {
  let u;
  if (!(("string" == typeof t))) goto L_14;
  t = [t];
  [t];
  if ((!t)) goto L_1f;
  if (!((0 === t.length))) goto L_23;
  return n;
  u = -1;
  u = (u ++);
  if (!(((u ++) < t.length))) goto L_61;
  if (!(e.includes(t[u]))) goto L_25;
  return true;
  return false;
}

// fn Hr  args=4 vars=5 closure=1 cpool=2 bc=303B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r
// closure: Vr
function {
  let r;
  r = -1;
  r = (r ++);
  if (!(((r ++) < n.unsafe.length))) goto L_129;
  if (!(("
" === n.unsafe[r].character))) goto L_5;
  if (!(Vr(n.stack, n.unsafe[r]))) goto L_5;
  if (!(new RegExp("[ \\t]").test(u.before))) goto L_123;
  return "";
  return " ";
  return "\
";
}

// fn $r  args=2 vars=7 closure=0 cpool=0 bc=210B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o
function {
  let o;
  let i;
  let r;
  let u;
  let n;
  n = String(e);
  u = n.indexOf(t);
  r = u;
  i = 0;
  o = 0;
  if (!(("string" != typeof t))) goto L_62;
  throw new TypeError("Expected substring");
  if (!((-1 !== u))) goto L_ce;
  if (!((u === r))) goto L_8b;
  i = (i ++);
  if (!(((i ++) > o))) goto L_90;
  o = i;
  goto L_90;
  // [栈深重同步 1 -> 0]
  i = 1;
  1;
  r = (u + t.length);
  (u + t.length);
  u = n.indexOf(t, r);
  n.indexOf(t, r);
  goto L_62;
  return o;
}

// fn Jr  args=2 vars=2 closure=0 cpool=4 bc=323B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  if (!((false === t.options.fences))) goto L_140;
  if (!(e.value)) goto L_140;
  if (!(!e.lang)) goto L_140;
  if (!(new RegExp("[^ \\r\\n]").test(e.value))) goto L_140;
  return Boolean(!new RegExp("^[\\t ]*(?:[\\r\\n]|$)|(?:^|[\\r\\n])[\\t ]*$").test(e.value));   // tail call
}

// fn Gr  args=1 vars=2 closure=0 cpool=0 bc=131B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  let t;
  if ((e.options.fence)) goto L_4f;
  t = "`";
  if (!(("`" !== t))) goto L_7f;
  if (!(("~" !== t))) goto L_7f;
  throw new Error((("Cannot serialize code with `" + t) + "` for `options.fence`, expected `` ` `` or `~`"));
  return t;
}

// fn Wr  args=4 vars=15 closure=5 cpool=0 bc=1334B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, e#1, t#1, s, a, l, c, t#2, t#3
// closure: Gr, Jr, Qr, $r, D
function {
  let c;
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  r = Gr(n);
  if ((e.value)) goto L_40;
  i = "";
  if (!(("`" === r))) goto L_53;
  goto L_58;
  // [栈深重同步 1 -> 0]
  o = "Tilde";
  if (!(Jr(e, n))) goto L_c4;
  let t#1;
  let e#1;
  e#1 = n.enter("codeIndented");
  t#1 = n.indentLines(i, Qr);
  e#1();
  return t#1;
  s = n.createTracker(u);
  a = r.repeat(Math.max(($r(i, r) + 1), 3));
  l = n.enter("codeFenced");
  c = s.move(a);
  if (!(e.lang)) goto L_2e5;
  let t#2;
  t#2 = n.enter("codeFencedLang".concat(o));
  c = (c + s.move(n.safe(e.lang, D({before: c, after: " ", encode: ["`"]}, s.current()))));
  (c + s.move(n.safe(e.lang, D({before: c, after: " ", encode: ["`"]}, s.current()))));
  t#2();
  if (!(e.lang)) goto L_485;
  if (!(e.meta)) goto L_485;
  let t#3;
  t#3 = n.enter("codeFencedMeta".concat(o));
  c = (c + s.move(" "));
  (c + s.move(" "));
  c = (c + s.move(n.safe(e.meta, D({before: c, after: "
", encode: ["`"]}, s.current()))));
  (c + s.move(n.safe(e.meta, D({before: c, after: "
", encode: ["`"]}, s.current()))));
  t#3();
  c = (c + s.move("
"));
  (c + s.move("
"));
  if (!(i)) goto L_4f9;
  c = (c + s.move((i + "
")));
  (c + s.move((i + "
")));
  c = (c + s.move(a));
  (c + s.move(a));
  l();
  return c;
}

// fn Qr  args=3 vars=3 closure=0 cpool=0 bc=14B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
function {
  if (!(n)) goto L_6;
  goto L_b;
  // [栈深重同步 1 -> 0]
  return ("    " + e);
}

// fn Zr  args=1 vars=2 closure=0 cpool=0 bc=131B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  let t;
  if ((e.options.quote)) goto L_4f;
  t = """;
  if (!((""" !== t))) goto L_7f;
  if (!(("'" !== t))) goto L_7f;
  throw new Error((("Cannot serialize title with `" + t) + "` for `options.quote`, expected `"`, or `'`"));
  return t;
}

// fn Yr  args=4 vars=10 closure=2 cpool=2 bc=1612B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s, a, l
// closure: Zr, D
function {
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  r = Zr(n);
  if (!((""" === r))) goto L_28;
  goto L_2d;
  // [栈深重同步 1 -> 0]
  i = "Apostrophe";
  o = n.enter("definition");
  s = n.enter("label");
  a = n.createTracker(u);
  l = a.move("[");
  l = (l + a.move(n.safe(n.associationId(e), D({before: l, after: "]"}, a.current()))));
  (l + a.move(n.safe(n.associationId(e), D({before: l, after: "]"}, a.current()))));
  l = (l + a.move("]: "));
  (l + a.move("]: "));
  s();
  if ((!e.url)) goto L_23d;
  if (!(new RegExp("[\\0- \\u007F]").test(e.url))) goto L_390;
  s = n.enter("destinationLiteral");
  n.enter("destinationLiteral");
  l = (l + a.move("<"));
  (l + a.move("<"));
  l = (l + a.move(n.safe(e.url, D({before: l, after: ">"}, a.current()))));
  (l + a.move(n.safe(e.url, D({before: l, after: ">"}, a.current()))));
  l = (l + a.move(">"));
  goto L_49c;
  // [栈深重同步 1 -> 0]
  s = n.enter("destinationRaw");
  n.enter("destinationRaw");
  if (!(e.title)) goto L_45f;
  goto L_464;
  // [栈深重同步 9 -> 8]
  l = (l + a.move(n.safe(e.url, D({before: l, after: "
"}, a.current()))));
  (l + a.move(n.safe(e.url, D({before: l, after: "
"}, a.current()))));
  s();
  if (!(e.title)) goto L_642;
  s = n.enter("title".concat(i));
  n.enter("title".concat(i));
  l = (l + a.move((" " + r)));
  (l + a.move((" " + r)));
  l = (l + a.move(n.safe(e.title, D({before: l, after: r}, a.current()))));
  (l + a.move(n.safe(e.title, D({before: l, after: r}, a.current()))));
  l = (l + a.move(r));
  (l + a.move(r));
  s();
  o();
  return l;
}

// fn Kr  args=1 vars=2 closure=0 cpool=0 bc=131B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  let t;
  if ((e.options.emphasis)) goto L_4f;
  t = "*";
  if (!(("*" !== t))) goto L_7f;
  if (!(("_" !== t))) goto L_7f;
  throw new Error((("Cannot serialize emphasis with `" + t) + "` for `options.emphasis`, expected `*`, or `_`"));
  return t;
}

// fn Xr  args=1 vars=1 closure=0 cpool=0 bc=88B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return (("&#x" + e.toString(16).toUpperCase()) + ";");
}

// fn ei  args=3 vars=5 closure=1 cpool=0 bc=239B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r
// closure: ue
function {
  let r;
  let u;
  u = ue(e);
  r = ue(t);
  if (!((undefined === u))) goto L_6c;
  if (!((undefined === r))) goto L_45;
  if (!(("_" === n))) goto L_35;
  return {inside: true, outside: true};
  return {inside: false, outside: false};
  if (!((1 === r))) goto L_5c;
  return {inside: true, outside: true};
  return {inside: false, outside: true};
  if (!((1 === u))) goto L_b1;
  if (!((undefined === r))) goto L_8a;
  return {inside: false, outside: false};
  if (!((1 === r))) goto L_a1;
  return {inside: true, outside: true};
  return {inside: false, outside: false};
  if (!((undefined === r))) goto L_c8;
  return {inside: false, outside: false};
  if (!((1 === r))) goto L_df;
  return {inside: true, outside: false};
  return {inside: false, outside: false};
}

// fn ti  args=4 vars=14 closure=4 cpool=0 bc=920B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s, a, l, c, f, h, d
// closure: Kr, D, ei, Xr
function {
  let d;
  let h;
  let f;
  let c;
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  r = Kr(n);
  i = n.enter("emphasis");
  o = n.createTracker(u);
  s = o.move(r);
  a = o.move(n.containerPhrasing(e, D({after: r, before: s}, o.current())));
  l = a.charCodeAt(0);
  c = ei(u.before.charCodeAt((u.before.length - 1)), l, r);
  if (!(c.inside)) goto L_221;
  a = (Xr(l) + a.slice(1));
  (Xr(l) + a.slice(1));
  f = a.charCodeAt((a.length - 1));
  h = ei(u.after.charCodeAt(0), f, r);
  if (!(h.inside)) goto L_2fd;
  a = (a.slice(0, -1) + Xr(f));
  (a.slice(0, -1) + Xr(f));
  d = o.move(r);
  i();
  n.attentionEncodeSurroundingInfo = {after: h.outside, before: c.outside};
  return ((s + a) + d);
}

// fn ni  args=3 vars=3 closure=0 cpool=0 bc=77B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
function {
  if ((n.options.emphasis)) goto L_4c;
  return "*";
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=108B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u
// closure: o
function {
  let u;
  let n;
  n = t[(t.length - 1)];
  if (!(n)) goto L_5d;
  goto L_5e;
  // [栈深重同步 1 -> 0]
  u = undefined;
  return o(e, u, n);   // tail call
}

// fn ui  args=4 vars=7 closure=1 cpool=1 bc=86B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o
// closure: Ju
function {
  let o;
  let i;
  let r;
  r = undefined;
  i = undefined;
  o = undefined;
  if (!(("function" == typeof t))) goto L_36;
  if (!(("function" != typeof n))) goto L_36;
  i = undefined;
  undefined;
  o = t;
  t;
  r = n;
  goto L_47;
  // [栈深重同步 1 -> 0]
  i = t;
  t;
  o = n;
  n;
  r = u;
  u;
  Ju(e, i, function <atom:0>, r);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=2 bc=142B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: n, Hu
function {
  if (!(("value" in e))) goto L_56;
  if ((new RegExp("\\r?\\n|\\r").test(e.value))) goto L_82;
  if (!(("break" === e.type))) goto L_8d;
  n = true;
  true;
  return Hu;
  return;
}

// fn ri  args=2 vars=3 closure=3 cpool=1 bc=180B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
// closure: Hu, ui, x
function {
  let n;
  n = false;
  ui(e, function <atom:0>);
  if ((!e.depth)) goto L_5c;
  if (!((e.depth < 3))) goto L_b1;
  if (!(x(e))) goto L_b1;
  if ((t.options.setext)) goto L_b1;
  return Boolean(n);   // tail call
}

// fn ii  args=4 vars=13 closure=4 cpool=2 bc=1154B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, t#1, u#1, o, o#1, s, a, l
// closure: ri, f, D, Xr
function {
  let l;
  let a;
  let s;
  let o#1;
  let i;
  let r;
  if ((e.depth)) goto L_86;
  r = Math.max(Math.min(6, 1), 1);
  i = n.createTracker(u);
  if (!(ri(e, n))) goto L_25a;
  let o;
  let u#1;
  let t#1;
  t#1 = n.enter("headingSetext");
  u#1 = n.enter("phrasing");
  o = n.containerPhrasing(e, f(D({}, i.current()), {before: "
", after: "
"}));
  u#1();
  t#1();
  if (!((1 === r))) goto L_1a7;
  goto L_1ac;
  // [栈深重同步 2 -> 1]
  return ((o + "
") + "-".repeat((o.length - (Math.max(o.lastIndexOf(""), o.lastIndexOf("
")) + 1))));
  o#1 = "#".repeat(r);
  s = n.enter("headingAtx");
  a = n.enter("phrasing");
  i.move((o#1 + " "));
  l = n.containerPhrasing(e, D({before: "# ", after: "
"}, i.current()));
  if (!(new RegExp("^[\\t ]").test(l))) goto L_3fe;
  l = (Xr(l.charCodeAt(0)) + l.slice(1));
  (Xr(l.charCodeAt(0)) + l.slice(1));
  if (!(l)) goto L_413;
  goto L_416;
  // [栈深重同步 1 -> 0]
  l = o#1;
  o#1;
  if (!(n.options.closeAtx)) goto L_473;
  l = (l + (" " + o#1));
  (l + (" " + o#1));
  a();
  s();
  return l;
}

// fn oi  args=1 vars=1 closure=0 cpool=0 bc=40B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if ((e.value)) goto L_27;
  return "";
}

// fn si  args=0 vars=0 closure=0 cpool=0 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return "<";
}

// fn ai  args=4 vars=10 closure=2 cpool=2 bc=1699B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s, a, l
// closure: Zr, D
function {
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  r = Zr(n);
  if (!((""" === r))) goto L_28;
  goto L_2d;
  // [栈深重同步 1 -> 0]
  i = "Apostrophe";
  o = n.enter("image");
  s = n.enter("label");
  a = n.createTracker(u);
  l = a.move("![");
  l = (l + a.move(n.safe(e.alt, D({before: l, after: "]"}, a.current()))));
  (l + a.move(n.safe(e.alt, D({before: l, after: "]"}, a.current()))));
  l = (l + a.move("]("));
  (l + a.move("]("));
  s();
  if (!(!e.url)) goto L_210;
  if ((e.title)) goto L_25f;
  if (!(new RegExp("[\\0- \\u007F]").test(e.url))) goto L_3b2;
  s = n.enter("destinationLiteral");
  n.enter("destinationLiteral");
  l = (l + a.move("<"));
  (l + a.move("<"));
  l = (l + a.move(n.safe(e.url, D({before: l, after: ">"}, a.current()))));
  (l + a.move(n.safe(e.url, D({before: l, after: ">"}, a.current()))));
  l = (l + a.move(">"));
  goto L_4be;
  // [栈深重同步 1 -> 0]
  s = n.enter("destinationRaw");
  n.enter("destinationRaw");
  if (!(e.title)) goto L_481;
  goto L_486;
  // [栈深重同步 9 -> 8]
  l = (l + a.move(n.safe(e.url, D({before: l, after: ")"}, a.current()))));
  (l + a.move(n.safe(e.url, D({before: l, after: ")"}, a.current()))));
  s();
  if (!(e.title)) goto L_664;
  s = n.enter("title".concat(i));
  n.enter("title".concat(i));
  l = (l + a.move((" " + r)));
  (l + a.move((" " + r)));
  l = (l + a.move(n.safe(e.title, D({before: l, after: r}, a.current()))));
  (l + a.move(n.safe(e.title, D({before: l, after: r}, a.current()))));
  l = (l + a.move(r));
  (l + a.move(r));
  s();
  l = (l + a.move(")"));
  (l + a.move(")"));
  o();
  return l;
}

// fn li  args=0 vars=0 closure=0 cpool=0 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return "!";
}

// fn ci  args=4 vars=12 closure=1 cpool=0 bc=882B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s, a, l, c, f
// closure: D
function {
  let f;
  let c;
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  r = e.referenceType;
  i = n.enter("imageReference");
  o = n.enter("label");
  s = n.createTracker(u);
  a = s.move("![");
  l = n.safe(e.alt, D({before: a, after: "]"}, s.current()));
  a = (a + s.move((l + "][")));
  (a + s.move((l + "][")));
  o();
  c = n.stack;
  n.stack = [];
  o = n.enter("reference");
  n.enter("reference");
  f = n.safe(n.associationId(e), D({before: a, after: "]"}, s.current()));
  o();
  n.stack = c;
  i();
  if (!(("full" !== r))) goto L_335;
  if (!(l)) goto L_335;
  if (!((l === f))) goto L_335;
  if (!(("shortcut" === r))) goto L_2ff;
  a = a.slice(0, -1);
  goto L_36d;
  // [栈深重同步 1 -> 0]
  a = (a + s.move("]"));
  goto L_36d;
  // [栈深重同步 1 -> 0]
  a = (a + s.move((f + "]")));
  (a + s.move((f + "]")));
  return a;
}

// fn Di  args=0 vars=0 closure=0 cpool=0 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return "!";
}

// fn fi  args=3 vars=10 closure=0 cpool=8 bc=883B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, e#1, t#1, r#1, e#2
function {
  let i;
  let r;
  let u;
  if ((e.value)) goto L_30;
  u = "";
  r = "`";
  i = -1;
  if (!(new RegExp((("(^|[^`])" + r) + "([^`]|$)")).test(u))) goto L_8a;
  r = (r + "`");
  (r + "`");
  goto L_39;
  if (!(new RegExp("[^ \\r\\n]").test(u))) goto L_160;
  if (!(new RegExp("^[ \\r\\n]").test(u))) goto L_119;
  if ((new RegExp("[ \\r\\n]$").test(u))) goto L_149;
  if (!(new RegExp("^`|`$").test(u))) goto L_160;
  u = ((" " + u) + " ");
  ((" " + u) + " ");
  i = (i ++);
  if (!(((i ++) < n.unsafe.length))) goto L_367;
  let r#1;
  let t#1;
  let e#1;
  e#1 = n.unsafe[i];
  t#1 = n.compilePattern(e#1);
  r#1 = undefined;
  if (!(e#1.atBreak)) goto L_161;
  r#1 = t#1.exec(u);
  if (!(t#1.exec(u))) goto L_161;
  let e#2;
  e#2 = r#1.index;
  if (!((10 === u.charCodeAt(e#2)))) goto L_2df;
  if (!((13 === u.charCodeAt((e#2 - 1))))) goto L_2df;
  e#2 = <e#2_new>;
  (e#2--);
  u = ((u.slice(0, e#2) + " ") + u.slice((r#1.index + 1)));
  ((u.slice(0, e#2) + " ") + u.slice((r#1.index + 1)));
  goto L_218;
  return ((r + u) + r);
}

// fn hi  args=0 vars=0 closure=0 cpool=0 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return "`";
}

// fn di  args=2 vars=3 closure=1 cpool=4 bc=588B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
// closure: x
function {
  let n;
  n = x(e);
  if (!(!t.options.resourceLink)) goto L_249;
  if (!(e.url)) goto L_249;
  if (!(!e.title)) goto L_249;
  if (!(e.children)) goto L_249;
  if (!((1 === e.children.length))) goto L_249;
  if (!(("text" === e.children[0].type))) goto L_249;
  if (((n === e.url))) goto L_1a7;
  if (!((("mailto:" + n) === e.url))) goto L_249;
  if (!(new RegExp("^[a-z][a-z+.-]+:").test(e.url))) goto L_249;
  return Boolean(!new RegExp("[\\0- <>\\u007F]").test(e.url));   // tail call
}

// fn pi  args=4 vars=12 closure=3 cpool=2 bc=2056B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s, a, t#1, u#1, l
// closure: Zr, di, D
function {
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  r = Zr(n);
  if (!((""" === r))) goto L_28;
  goto L_2d;
  // [栈深重同步 1 -> 0]
  i = "Apostrophe";
  o = n.createTracker(u);
  s = undefined;
  a = undefined;
  if (!(di(e, n))) goto L_1d4;
  let u#1;
  let t#1;
  t#1 = n.stack;
  n.stack = [];
  s = n.enter("autolink");
  n.enter("autolink");
  u#1 = o.move("<");
  u#1 = (u#1 + o.move(n.containerPhrasing(e, D({before: u#1, after: ">"}, o.current()))));
  (u#1 + o.move(n.containerPhrasing(e, D({before: u#1, after: ">"}, o.current()))));
  u#1 = (u#1 + o.move(">"));
  (u#1 + o.move(">"));
  s();
  n.stack = t#1;
  return u#1;
  s = n.enter("link");
  n.enter("link");
  a = n.enter("label");
  n.enter("label");
  l = o.move("[");
  l = (l + o.move(n.containerPhrasing(e, D({before: l, after: "]("}, o.current()))));
  (l + o.move(n.containerPhrasing(e, D({before: l, after: "]("}, o.current()))));
  l = (l + o.move("]("));
  (l + o.move("]("));
  a();
  if (!(!e.url)) goto L_375;
  if ((e.title)) goto L_3c4;
  if (!(new RegExp("[\\0- \\u007F]").test(e.url))) goto L_517;
  a = n.enter("destinationLiteral");
  n.enter("destinationLiteral");
  l = (l + o.move("<"));
  (l + o.move("<"));
  l = (l + o.move(n.safe(e.url, D({before: l, after: ">"}, o.current()))));
  (l + o.move(n.safe(e.url, D({before: l, after: ">"}, o.current()))));
  l = (l + o.move(">"));
  goto L_623;
  // [栈深重同步 1 -> 0]
  a = n.enter("destinationRaw");
  n.enter("destinationRaw");
  if (!(e.title)) goto L_5e6;
  goto L_5eb;
  // [栈深重同步 9 -> 8]
  l = (l + o.move(n.safe(e.url, D({before: l, after: ")"}, o.current()))));
  (l + o.move(n.safe(e.url, D({before: l, after: ")"}, o.current()))));
  a();
  if (!(e.title)) goto L_7c9;
  a = n.enter("title".concat(i));
  n.enter("title".concat(i));
  l = (l + o.move((" " + r)));
  (l + o.move((" " + r)));
  l = (l + o.move(n.safe(e.title, D({before: l, after: r}, o.current()))));
  (l + o.move(n.safe(e.title, D({before: l, after: r}, o.current()))));
  l = (l + o.move(r));
  (l + o.move(r));
  a();
  l = (l + o.move(")"));
  (l + o.move(")"));
  s();
  return l;
}

// fn Fi  args=3 vars=3 closure=1 cpool=0 bc=18B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: di
function {
  if (!(di(e, n))) goto L_c;
  return "<";
  return "[";
}

// fn mi  args=4 vars=12 closure=1 cpool=0 bc=849B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s, a, l, c, f
// closure: D
function {
  let f;
  let c;
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  r = e.referenceType;
  i = n.enter("linkReference");
  o = n.enter("label");
  s = n.createTracker(u);
  a = s.move("[");
  l = n.containerPhrasing(e, D({before: a, after: "]"}, s.current()));
  a = (a + s.move((l + "][")));
  (a + s.move((l + "][")));
  o();
  c = n.stack;
  n.stack = [];
  o = n.enter("reference");
  n.enter("reference");
  f = n.safe(n.associationId(e), D({before: a, after: "]"}, s.current()));
  o();
  n.stack = c;
  i();
  if (!(("full" !== r))) goto L_314;
  if (!(l)) goto L_314;
  if (!((l === f))) goto L_314;
  if (!(("shortcut" === r))) goto L_2de;
  a = a.slice(0, -1);
  goto L_34c;
  // [栈深重同步 1 -> 0]
  a = (a + s.move("]"));
  goto L_34c;
  // [栈深重同步 1 -> 0]
  a = (a + s.move((f + "]")));
  (a + s.move((f + "]")));
  return a;
}

// fn gi  args=0 vars=0 closure=0 cpool=0 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return "[";
}

// fn Ei  args=1 vars=2 closure=0 cpool=0 bc=142B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  let t;
  if ((e.options.bullet)) goto L_4f;
  t = "*";
  if (!(("*" !== t))) goto L_8a;
  if (!(("+" !== t))) goto L_8a;
  if (!(("-" !== t))) goto L_8a;
  throw new Error((("Cannot serialize items with `" + t) + "` for `options.bullet`, expected `*`, `+`, or `-`"));
  return t;
}

// fn Ci  args=1 vars=3 closure=1 cpool=0 bc=213B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n
// closure: Ei
function {
  let n;
  let t;
  t = Ei(e);
  n = e.options.bulletOther;
  if (!(!n)) goto L_6b;
  if (!(("*" === t))) goto L_65;
  return "-";
  return "*";
  if (!(("*" !== n))) goto L_a5;
  if (!(("+" !== n))) goto L_a5;
  if (!(("-" !== n))) goto L_a5;
  throw new Error((("Cannot serialize items with `" + n) + "` for `options.bulletOther`, expected `*`, `+`, or `-`"));
  if (!((n === t))) goto L_d1;
  throw new Error((((("Expected `bullet` (`" + t) + "`) and `bulletOther` (`") + n) + "`) to be different"));
  return n;
}

// fn Ai  args=1 vars=2 closure=0 cpool=0 bc=131B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  let t;
  if ((e.options.bulletOrdered)) goto L_4f;
  t = ".";
  if (!(("." !== t))) goto L_7f;
  if (!((")" !== t))) goto L_7f;
  throw new Error((("Cannot serialize items with `" + t) + "` for `options.bulletOrdered`, expected `.` or `)`"));
  return t;
}

// fn xi  args=1 vars=2 closure=0 cpool=0 bc=142B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  let t;
  if ((e.options.rule)) goto L_4f;
  t = "*";
  if (!(("*" !== t))) goto L_8a;
  if (!(("-" !== t))) goto L_8a;
  if (!(("_" !== t))) goto L_8a;
  throw new Error((("Cannot serialize rules with `" + t) + "` for `options.rule`, expected `*`, `-`, or `_`"));
  return t;
}

// fn ki  args=4 vars=13 closure=4 cpool=0 bc=1570B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s, a, t#1, t#2, n#1, l
// closure: Ai, Ei, Ci, xi
function {
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  r = n.enter("list");
  i = n.bulletCurrent;
  if (!(e.ordered)) goto L_89;
  goto L_8c;
  // [栈深重同步 1 -> 0]
  o = Ei(n);
  if (!(e.ordered)) goto L_ca;
  if (!(("." === o))) goto L_c3;
  goto L_cd;
  // [栈深重同步 1 -> 0]
  goto L_cd;
  // [栈深重同步 1 -> 0]
  s = Ci(n);
  if ((!t)) goto L_f7;
  if (!(!!n.bulletLastUsed)) goto L_122;
  a = (o === n.bulletLastUsed);
  if (!(!e.ordered)) goto L_5ba;
  let t#1;
  if (!(e.children)) goto L_199;
  goto L_19a;
  // [栈深重同步 1 -> 0]
  t#1 = undefined;
  if (!(("*" !== o))) goto L_1b2;
  if ((("-" !== o))) goto L_460;
  if ((!t#1)) goto L_460;
  if (!(t#1.children)) goto L_212;
  if ((t#1.children[0])) goto L_460;
  if ((("list" !== n.stack[(n.stack.length - 1)]))) goto L_460;
  if ((("listItem" !== n.stack[(n.stack.length - 2)]))) goto L_460;
  if ((("list" !== n.stack[(n.stack.length - 3)]))) goto L_460;
  if ((("listItem" !== n.stack[(n.stack.length - 4)]))) goto L_460;
  if (((0 !== n.indexStack[(n.indexStack.length - 1)]))) goto L_460;
  if (((0 !== n.indexStack[(n.indexStack.length - 2)]))) goto L_460;
  if (((0 !== n.indexStack[(n.indexStack.length - 3)]))) goto L_460;
  a = true;
  true;
  if (!((xi(n) === o))) goto L_5ba;
  if (!(t#1)) goto L_5ba;
  let t#2;
  t#2 = -1;
  t#2 = (t#2 ++);
  if (!(((t#2 ++) < e.children.length))) goto L_5ba;
  let n#1;
  n#1 = e.children[t#2];
  if (!(n#1)) goto L_47b;
  if (!(("listItem" === n#1.type))) goto L_47b;
  if (!(n#1.children)) goto L_47b;
  if (!(n#1.children[0])) goto L_47b;
  if (!(("thematicBreak" === n#1.children[0].type))) goto L_47b;
  a = true;
  true;
  goto L_5ba;
  if (!(a)) goto L_5c8;
  o = s;
  s;
  n.bulletCurrent = o;
  l = n.containerFlow(e, u);
  n.bulletLastUsed = o;
  n.bulletCurrent = i;
  r();
  return l;
}

// fn vi  args=1 vars=2 closure=0 cpool=0 bc=142B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  let t;
  if ((e.options.listItemIndent)) goto L_4f;
  t = "one";
  if (!(("tab" !== t))) goto L_8a;
  if (!(("one" !== t))) goto L_8a;
  if (!(("mixed" !== t))) goto L_8a;
  throw new Error((("Cannot serialize items with `" + t) + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"));
  return t;
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=0 bc=120B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: o, i
function {
  if (!(t)) goto L_38;
  if (!(n)) goto L_9;
  goto L_35;
  // [栈深重同步 1 -> 0]
  return (" ".repeat(o) + e);
  if (!(n)) goto L_40;
  goto L_75;
  // [栈深重同步 1 -> 0]
  return ((i + " ".repeat((o - i.length))) + e);
}

// fn yi  args=4 vars=10 closure=2 cpool=1 bc=994B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s, a, l
// closure: vi, Ei
function {
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  r = vi(n);
  if ((n.bulletCurrent)) goto L_3f;
  i = Ei(n);
  if (!(t)) goto L_1b1;
  if (!(("list" === t.type))) goto L_1b1;
  if (!(t.ordered)) goto L_1b1;
  if (!(("number" == typeof t.start))) goto L_115;
  if (!((t.start > -1))) goto L_115;
  goto L_116;
  // [栈深重同步 1 -> 0]
  if (!((false === n.options.incrementListMarker))) goto L_161;
  goto L_1a8;
  // [栈深重同步 2 -> 1]
  i = ((1 + t.children.indexOf(e)) + i);
  ((1 + t.children.indexOf(e)) + i);
  o = (i.length + 1);
  if ((("tab" === r))) goto L_24f;
  if (!(("mixed" === r))) goto L_24f;
  if (!(t)) goto L_229;
  if (!(("list" === t.type))) goto L_229;
  if ((t.spread)) goto L_24f;
  if (!(e.spread)) goto L_287;
  o = (4 * Math.ceil((o / 4)));
  (4 * Math.ceil((o / 4)));
  s = n.createTracker(u);
  s.move((i + " ".repeat((o - i.length))));
  s.shift(o);
  a = n.enter("listItem");
  l = n.indentLines(n.containerFlow(e, s.current()), function <atom:0>);
  a();
  return l;
}

// fn bi  args=4 vars=7 closure=0 cpool=0 bc=149B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o
function {
  let o;
  let i;
  let r;
  r = n.enter("paragraph");
  i = n.enter("phrasing");
  o = n.containerPhrasing(e, u);
  i();
  r();
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Bi
function {
  return Bi(e);   // tail call
}

// fn wi  args=4 vars=4 closure=1 cpool=1 bc=183B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// closure: Bi
function {
  if (!(e.children.some(function <atom:0>))) goto L_6e;
  goto L_90;
  // [栈深重同步 1 -> 0]
  return n.containerFlow.call(n, e, u);   // tail call
}

// fn Si  args=1 vars=2 closure=0 cpool=0 bc=131B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  let t;
  if ((e.options.strong)) goto L_4f;
  t = "*";
  if (!(("*" !== t))) goto L_7f;
  if (!(("_" !== t))) goto L_7f;
  throw new Error((("Cannot serialize strong with `" + t) + "` for `options.strong`, expected `*`, or `_`"));
  return t;
}

// fn Ti  args=4 vars=14 closure=4 cpool=0 bc=928B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s, a, l, c, f, h, d
// closure: Si, D, ei, Xr
function {
  let d;
  let h;
  let f;
  let c;
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  r = Si(n);
  i = n.enter("strong");
  o = n.createTracker(u);
  s = o.move((r + r));
  a = o.move(n.containerPhrasing(e, D({after: r, before: s}, o.current())));
  l = a.charCodeAt(0);
  c = ei(u.before.charCodeAt((u.before.length - 1)), l, r);
  if (!(c.inside)) goto L_225;
  a = (Xr(l) + a.slice(1));
  (Xr(l) + a.slice(1));
  f = a.charCodeAt((a.length - 1));
  h = ei(u.after.charCodeAt(0), f, r);
  if (!(h.inside)) goto L_301;
  a = (a.slice(0, -1) + Xr(f));
  (a.slice(0, -1) + Xr(f));
  d = o.move((r + r));
  i();
  n.attentionEncodeSurroundingInfo = {after: h.outside, before: c.outside};
  return ((s + a) + d);
}

// fn Ii  args=3 vars=3 closure=0 cpool=0 bc=77B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
function {
  if ((n.options.strong)) goto L_4c;
  return "*";
}

// fn qi  args=4 vars=4 closure=0 cpool=0 bc=72B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
function {
  return n.safe(e.value, u);   // tail call
}

// fn Mi  args=1 vars=2 closure=0 cpool=0 bc=112B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  let t;
  if ((e.options.ruleRepetition)) goto L_4b;
  t = 3;
  if (!((t < 3))) goto L_6c;
  throw new Error((("Cannot serialize rules with repetition `" + t) + "` for `options.ruleRepetition`, expected `3` or more"));
  return t;
}

// fn Oi  args=3 vars=4 closure=2 cpool=0 bc=239B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u
// closure: xi, Mi
function {
  let u;
  if (!(n.options.ruleSpaces)) goto L_52;
  goto L_53;
  // [栈深重同步 2 -> 1]
  u = (xi(n) + "").repeat(Mi(n));
  if (!(n.options.ruleSpaces)) goto L_eb;
  return u.slice(0, -1);
  return u;
}

// fn Li  args=0 vars=0 closure=6 cpool=0 bc=76B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: Ri, ji, Ni, Vi, _i, Pi
function {
  return {enter: {table: Ri, tableData: ji, tableHeader: ji, tableRow: Ni}, exit: {codeText: Vi, table: _i, tableData: Pi, tableHeader: Pi, tableRow: Pi}};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!(("none" === e))) goto L_b;
  return null;
  return e;
}

// fn Ri  args=1 vars=3 closure=1 cpool=1 bc=201B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
// closure: qu
function {
  this = this;
  let t;
  t = e._align;
  qu(t, "expected `_align` on table");
  this.enter({type: "table", align: t.map(function <atom:0>), children: []}, e);
  this.data.inTable = true;
  return;
}

// fn _i  args=1 vars=2 closure=0 cpool=0 bc=86B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.exit(e);
  this.data.inTable = undefined;
  return;
}

// fn Ni  args=1 vars=2 closure=0 cpool=0 bc=60B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.enter({type: "tableRow", children: []}, e);
  return;
}

// fn Pi  args=1 vars=2 closure=0 cpool=0 bc=41B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.exit(e);
  return;
}

// fn ji  args=1 vars=2 closure=0 cpool=0 bc=60B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.enter({type: "tableCell", children: []}, e);
  return;
}

// fn Vi  args=1 vars=4 closure=2 cpool=2 bc=339B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
// closure: Ui, qu
function {
  this = this;
  let n;
  let t;
  t = this.resume();
  if (!(this.data.inTable)) goto L_a6;
  t = t.replace(new RegExp("\\\\([\\\\|])"), Ui);
  t.replace(new RegExp("\\\\([\\\\|])"), Ui);
  n = this.stack[(this.stack.length - 1)];
  qu(("inlineCode" === n.type));
  n.value = t;
  this.exit(e);
  return;
}

// fn Ui  args=2 vars=2 closure=0 cpool=0 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  if (!(("|" === t))) goto L_b;
  return t;
  return e;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=2 bc=181B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u
// closure: zi
function {
  let u;
  u = zi.inlineCode(e, t, n);
  if (!(n.stack.includes("tableCell"))) goto L_b0;
  u = u.replace(new RegExp("\\|"), "\$&");
  u.replace(new RegExp("\\|"), "\$&");
  return u;
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=0 bc=141B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o
// closure: a
function {
  let o;
  let i;
  let r;
  let u;
  u = e.children;
  r = -1;
  i = [];
  o = t.enter("table");
  r = (r ++);
  if (!(((r ++) < u.length))) goto L_84;
  i[r] = a(u[r], t, n);
  goto L_60;
  o();
  return i;
}

// fn <atom:0>  args=4 vars=4 closure=2 cpool=1 bc=44B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// closure: a, s
function {
  return s(function <atom:0>(e, n, u), e.align);   // tail call
}

// fn <atom:0>  args=4 vars=5 closure=2 cpool=0 bc=98B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r
// closure: s, a
function {
  let r;
  r = s([a(e, n, u)]);
  return r.slice(0, r.indexOf("
"));   // tail call
}

// fn o  args=4 vars=7 closure=3 cpool=0 bc=171B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, o, s
// closure: f, D, i
function {
  let s;
  let o;
  let r;
  r = n.enter("tableCell");
  o = n.enter("phrasing");
  s = n.containerPhrasing(e, f(D({}, u), {before: i, after: i}));
  o();
  r();
  return s;
}

// fn s  args=2 vars=2 closure=4 cpool=0 bc=36B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: Rr, u, n, r
function {
  return Rr(e, {align: t, alignDelimiters: u, padding: n, stringLength: r});   // tail call
}

// fn a  args=3 vars=7 closure=1 cpool=0 bc=144B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, s
// closure: o
function {
  let s;
  let i;
  let r;
  let u;
  u = e.children;
  r = -1;
  i = [];
  s = t.enter("tableRow");
  r = (r ++);
  if (!(((r ++) < u.length))) goto L_87;
  i[r] = o(u[r], 0, t, n);
  goto L_60;
  s();
  return i;
}

// fn Hi  args=1 vars=9 closure=4 cpool=6 bc=370B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r, i, o, s, a
// closure: zi, f, D, Rr
function {
  o = function o;
  s = function s;
  a = function a;
  let i;
  let r;
  let u;
  let n;
  let t;
  if ((e)) goto L_21;
  t = {};
  n = t.tableCellPadding;
  u = t.tablePipeAlign;
  r = t.stringLength;
  if (!(n)) goto L_9d;
  goto L_a2;
  // [栈深重同步 1 -> 0]
  i = "|";
  return {unsafe: [{character: "", inConstruct: "tableCell"}, {character: "
", inConstruct: "tableCell"}, {atBreak: true, character: "|", after: "[	 :-]"}, {character: "|", inConstruct: "tableCell"}, {atBreak: true, character: ":", after: "-"}, {atBreak: true, character: "-", after: "[:|-]"}], handlers: {inlineCode: function <atom:0>, table: function <atom:0>, tableCell: o, tableRow: function <atom:0>}};
}

// fn $i  args=0 vars=0 closure=2 cpool=0 bc=26B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: Gi, Wi
function {
  return {exit: {taskListCheckValueChecked: Gi, taskListCheckValueUnchecked: Gi, paragraph: Wi}};
}

// fn Ji  args=0 vars=0 closure=1 cpool=0 bc=50B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: Qi
function {
  return {unsafe: [{atBreak: true, character: "-", after: "[:|-]"}], handlers: {listItem: Qi}};
}

// fn Gi  args=1 vars=3 closure=1 cpool=0 bc=176B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
// closure: qu
function {
  this = this;
  let t;
  t = this.stack[(this.stack.length - 2)];
  qu(("listItem" === t.type));
  t.checked = ("taskListCheckValueChecked" === e.type);
  return;
}

// fn Wi  args=1 vars=9 closure=1 cpool=0 bc=1376B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, e#1, n, u, r, i, e#2, this
// closure: qu
function {
  this = this;
  let t;
  t = this.stack[(this.stack.length - 2)];
  if (!(t)) goto L_538;
  if (!(("listItem" === t.type))) goto L_538;
  if (!(("boolean" == typeof t.checked))) goto L_538;
  let n;
  let e#1;
  e#1 = this.stack[(this.stack.length - 1)];
  qu(("paragraph" === e#1.type));
  n = e#1.children[0];
  if (!(n)) goto L_538;
  if (!(("text" === n.type))) goto L_538;
  let i;
  let r;
  let u;
  u = t.children;
  r = undefined;
  i = -1;
  i = (i ++);
  if (!(((i ++) < u.length))) goto L_219;
  let e#2;
  e#2 = u[i];
  if (!(("paragraph" === e#2.type))) goto L_1c8;
  r = e#2;
  e#2;
  goto L_219;
  if (!((r === e#1))) goto L_537;
  n.value = n.value.slice(1);
  if (!((0 === n.value.length))) goto L_2f0;
  goto L_537;
  // [栈深重同步 1 -> 0]
  if (!(e#1.position)) goto L_537;
  if (!(n.position)) goto L_537;
  if (!(("number" == typeof n.position.start.offset))) goto L_537;
  n.position.start.column = (n.position.start.column ++);
  n.position.start.offset = (n.position.start.offset ++);
  e#1.position.start = Object.assign({}, n.position.start);
  Object.assign({}, n.position.start);
  this.exit(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: o
function {
  return (e + o);
}

// fn Qi  args=4 vars=9 closure=2 cpool=3 bc=446B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s, a
// closure: zi, D
function {
  let a;
  let s;
  let o;
  let i;
  let r;
  r = e.children[0];
  if (!(("boolean" == typeof e.checked))) goto L_92;
  if (!(r)) goto L_92;
  i = ("paragraph" === r.type);
  if (!(e.checked)) goto L_c3;
  goto L_c8;
  // [栈深重同步 2 -> 1]
  o = (("[" + " ") + "] ");
  s = n.createTracker(u);
  if (!(i)) goto L_128;
  s.move(o);
  a = zi.listItem(e, t, n, D(D({}, u), s.current()));
  if (!(i)) goto L_1b9;
  a = a.replace(new RegExp("^(?:[*+-]|\\d+\\.)([\\r\\n]| {1,3})"), function <atom:0>);
  a.replace(new RegExp("^(?:[*+-]|\\d+\\.)([\\r\\n]| {1,3})"), function <atom:0>);
  return a;
}

// fn Zi  args=0 vars=0 closure=5 cpool=0 bc=16B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: er, yr, Tr, Li, $i
function {
  return [er(), yr(), Tr(), Li(), $i()];
}

// fn Yi  args=1 vars=1 closure=5 cpool=0 bc=24B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: tr, br, Ir, Hi, Ji
function {
  return {extensions: [tr(), br(e), Ir(), Hi(e), Ji()]};
}

// fn so  args=0 vars=0 closure=1 cpool=0 bc=8B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: oo
function {
  return {text: oo};
}

// fn <atom:0>  args=1 vars=1 closure=7 cpool=0 bc=233B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: Ao, Co, u, xo, n, e, o
function {
  if ((!Ao(t))) goto L_7f;
  if ((!Co.call(u, u.previous))) goto L_7f;
  if (!(xo(u.events))) goto L_88;
  return n(t);   // tail call
  e.enter("literalAutolink");
  e.enter("literalAutolinkEmail");
  return o(t);   // tail call
}

// fn o  args=1 vars=1 closure=5 cpool=0 bc=99B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: Ao, e, o, s, n
function {
  if (!(Ao(t))) goto L_2e;
  e.consume(t);
  return o;
  if (!((64 === t))) goto L_5d;
  e.consume(t);
  return s;
  return n(t);
}

// fn s  args=1 vars=1 closure=7 cpool=0 bc=126B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, no, l, a, _, i, s
function {
  if (!((46 === t))) goto L_31;
  return e.check(no, l, a)(t);
  if (((45 === t))) goto L_46;
  if (((95 === t))) goto L_46;
  if (!(_(t))) goto L_7a;
  i = true;
  true;
  e.consume(t);
  return s;
  return l(t);
}

// fn a  args=1 vars=1 closure=3 cpool=0 bc=48B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, r, s
function {
  e.consume(t);
  r = true;
  true;
  return s;
}

// fn l  args=1 vars=1 closure=7 cpool=0 bc=158B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: o
// closure: i, r, R, u, e, t, n
function {
  if (!(i)) goto L_98;
  if (!(r)) goto L_98;
  if (!(R(u.previous))) goto L_98;
  e.exit("literalAutolinkEmail");
  e.exit("literalAutolink");
  return t(o);
  return n(o);
}

// fn lo  args=3 vars=11 closure=6 cpool=5 bc=37B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, this
// closure: Ao, Co, xo, no, _, R
function {
  this = this;
  o = function o;
  s = function s;
  a = function a;
  l = function l;
  let i;
  let r;
  let u;
  u = this;
  r = undefined;
  i = undefined;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=9 cpool=0 bc=367B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: go, u, xo, n, e, Ki, Xi, eo, r
function {
  if (!((87 !== t))) goto L_c;
  if (((119 !== t))) goto L_87;
  if ((!go.call(u, u.previous))) goto L_87;
  if (!(xo(u.events))) goto L_8e;
  return n(t);   // tail call
  e.enter("literalAutolink");
  e.enter("literalAutolinkWww");
  return e.check(Ki, e.attempt(Xi, e.attempt(eo, r), n), n)(t);   // tail call
}

// fn r  args=1 vars=1 closure=2 cpool=0 bc=91B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, t
function {
  e.exit("literalAutolinkWww");
  e.exit("literalAutolink");
  return t(n);   // tail call
}

// fn co  args=3 vars=6 closure=5 cpool=2 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, this
// closure: go, xo, Ki, Xi, eo
function {
  this = this;
  r = function r;
  let u;
  u = this;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=7 cpool=0 bc=329B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: Eo, u, xo, e, r, o, n
function {
  if (((72 === t))) goto L_c;
  if (!((104 === t))) goto L_142;
  if (!(Eo.call(u, u.previous))) goto L_142;
  if (!(!xo(u.events))) goto L_142;
  e.enter("literalAutolink");
  e.enter("literalAutolinkHttp");
  r = (r + String.fromCodePoint(t));
  (r + String.fromCodePoint(t));
  e.consume(t);
  return o;
  return n(t);   // tail call
}

// fn o  args=1 vars=2 closure=6 cpool=0 bc=228B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: n
// closure: R, r, e, o, s, n
function {
  if (!(R(t))) goto L_69;
  if (!((r.length < 5))) goto L_69;
  r = (r + String.fromCodePoint(t));
  (r + String.fromCodePoint(t));
  e.consume(t);
  return o;
  if (!((58 === t))) goto L_dd;
  let n;
  n = r.toLowerCase();
  if ((("http" === n))) goto L_b0;
  if (!(("https" === n))) goto L_dd;
  e.consume(t);
  return s;
  return n(t);   // tail call
}

// fn s  args=1 vars=1 closure=5 cpool=0 bc=67B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, i, a, s, n
function {
  if (!((47 === t))) goto L_3d;
  e.consume(t);
  if (!(i)) goto L_34;
  return a;
  i = true;
  true;
  return s;
  return n(t);
}

// fn a  args=1 vars=1 closure=9 cpool=0 bc=132B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: P, $, W, G, n, e, Xi, eo, l
function {
  if (((null === t))) goto L_1f;
  if ((P(t))) goto L_1f;
  if (($(t))) goto L_1f;
  if ((W(t))) goto L_1f;
  if (!(G(t))) goto L_27;
  return n(t);
  return e.attempt(Xi, e.attempt(eo, l), n)(t);
}

// fn l  args=1 vars=1 closure=2 cpool=0 bc=91B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, t
function {
  e.exit("literalAutolinkHttp");
  e.exit("literalAutolink");
  return t(n);   // tail call
}

// fn Do  args=3 vars=11 closure=9 cpool=5 bc=38B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, this
// closure: Eo, xo, R, P, $, W, G, Xi, eo
function {
  this = this;
  o = function o;
  s = function s;
  a = function a;
  l = function l;
  let i;
  let r;
  let u;
  u = this;
  r = "";
  i = false;
  return function <atom:0>;
}

// fn t  args=1 vars=2 closure=4 cpool=0 bc=132B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: i
// locals: t
// closure: u, e, r, n
function {
  t = <special_object 2>;
  if (((87 === i))) goto L_f;
  if (!((119 === i))) goto L_49;
  if (!((u < 3))) goto L_49;
  u = <u_new>;
  (u++);
  e.consume(i);
  return t;
  if (!((46 === i))) goto L_7f;
  if (!((3 === u))) goto L_7f;
  e.consume(i);
  return r;
  return n(i);   // tail call
}

// fn r  args=1 vars=1 closure=2 cpool=0 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: n, t
function {
  if (!((null === e))) goto L_9;
  return n(e);
  return t(e);
}

// fn fo  args=3 vars=5 closure=0 cpool=2 bc=11B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r
function {
  r = function r;
  let u;
  u = 0;
  return function t;
}

// fn o  args=1 vars=1 closure=9 cpool=0 bc=149B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, to, a, s, $, W, G, i, o
function {
  if (((46 === t))) goto L_c;
  if (!((95 === t))) goto L_39;
  return e.check(to, a, s)(t);
  if (((null === t))) goto L_5d;
  if (($(t))) goto L_5d;
  if ((W(t))) goto L_5d;
  if (!((45 !== t))) goto L_63;
  if (!(G(t))) goto L_63;
  return a(t);
  i = true;
  true;
  e.consume(t);
  return o;
}

// fn s  args=1 vars=1 closure=4 cpool=0 bc=69B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: u, r, e, o
function {
  if (!((95 === t))) goto L_e;
  u = true;
  goto L_1b;
  // [栈深重同步 1 -> 0]
  r = u;
  u;
  u = undefined;
  undefined;
  e.consume(t);
  return o;
}

// fn a  args=1 vars=1 closure=5 cpool=0 bc=30B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: r, u, i, n, t
function {
  if ((r)) goto L_12;
  if ((u)) goto L_12;
  if (!(!i)) goto L_18;
  return n(e);
  return t(e);
}

// fn ho  args=3 vars=9 closure=4 cpool=3 bc=28B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a
// closure: to, $, W, G
function {
  o = function o;
  s = function s;
  a = function a;
  let i;
  let r;
  let u;
  u = undefined;
  r = undefined;
  i = undefined;
  return o;
}

// fn r  args=1 vars=1 closure=9 cpool=0 bc=316B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: o
// closure: n, e, r, u, i, to, t, $, W
function {
  if (!((40 === o))) goto L_37;
  n = <n_new>;
  (n++);
  e.consume(o);
  return r;
  if (!((41 === o))) goto L_4c;
  if (!((u < n))) goto L_4c;
  return i(o);
  if (((33 === o))) goto L_c3;
  if (((34 === o))) goto L_c3;
  if (((38 === o))) goto L_c3;
  if (((39 === o))) goto L_c3;
  if (((41 === o))) goto L_c3;
  if (((42 === o))) goto L_c3;
  if (((44 === o))) goto L_c3;
  if (((46 === o))) goto L_c3;
  if (((58 === o))) goto L_c3;
  if (((59 === o))) goto L_c3;
  if (((60 === o))) goto L_c3;
  if (((63 === o))) goto L_c3;
  if (((93 === o))) goto L_c3;
  if (((95 === o))) goto L_c3;
  if (!((126 === o))) goto L_f6;
  return e.check(to, t, i)(o);
  if (((null === o))) goto L_10b;
  if (($(o))) goto L_10b;
  if (!(W(o))) goto L_113;
  return t(o);
  e.consume(o);
  return r;
}

// fn i  args=1 vars=1 closure=3 cpool=0 bc=57B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: u, e, r
function {
  if (!((41 === t))) goto L_f;
  u = <u_new>;
  (u++);
  e.consume(t);
  return r;
}

// fn po  args=2 vars=6 closure=3 cpool=2 bc=18B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i
// closure: to, $, W
function {
  r = function r;
  i = function i;
  let u;
  let n;
  n = 0;
  u = 0;
  return r;
}

// fn u  args=1 vars=1 closure=8 cpool=0 bc=272B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: o
// closure: e, u, i, r, $, W, t, n
function {
  if (((33 === o))) goto L_5c;
  if (((34 === o))) goto L_5c;
  if (((39 === o))) goto L_5c;
  if (((41 === o))) goto L_5c;
  if (((42 === o))) goto L_5c;
  if (((44 === o))) goto L_5c;
  if (((46 === o))) goto L_5c;
  if (((58 === o))) goto L_5c;
  if (((59 === o))) goto L_5c;
  if (((63 === o))) goto L_5c;
  if (((95 === o))) goto L_5c;
  if (!((126 === o))) goto L_87;
  e.consume(o);
  return u;
  if (!((38 === o))) goto L_b6;
  e.consume(o);
  return i;
  if (!((93 === o))) goto L_e5;
  e.consume(o);
  return r;
  if (((60 === o))) goto L_102;
  if (((null === o))) goto L_102;
  if (($(o))) goto L_102;
  if (!(W(o))) goto L_10a;
  return t(o);
  return n(o);
}

// fn r  args=1 vars=1 closure=4 cpool=0 bc=43B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: $, W, t, u
function {
  if (((null === e))) goto L_21;
  if (((40 === e))) goto L_21;
  if (((91 === e))) goto L_21;
  if (($(e))) goto L_21;
  if (!(W(e))) goto L_27;
  return t(e);
  return u(e);
}

// fn i  args=1 vars=1 closure=3 cpool=0 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: R, o, n
function {
  if (!(R(e))) goto L_9;
  return o(e);
  return n(e);
}

// fn o  args=1 vars=1 closure=5 cpool=0 bc=99B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, u, R, o, n
function {
  if (!((59 === t))) goto L_2f;
  e.consume(t);
  return u;
  if (!(R(t))) goto L_5d;
  e.consume(t);
  return o;
  return n(t);
}

// fn Fo  args=3 vars=7 closure=3 cpool=4 bc=14B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o
// closure: $, W, R
function {
  u = function u;
  r = function r;
  i = function i;
  o = function o;
  return u;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, u
function {
  e.consume(t);
  return u;
}

// fn u  args=1 vars=1 closure=3 cpool=0 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: _, n, t
function {
  if (!(_(e))) goto L_9;
  return n(e);
  return t(e);
}

// fn mo  args=3 vars=4 closure=1 cpool=2 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u
// closure: _
function {
  u = function u;
  return function <atom:0>;
}

// fn go  args=1 vars=1 closure=1 cpool=0 bc=59B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: $
function {
  if (((null === e))) goto L_3a;
  if (((40 === e))) goto L_3a;
  if (((42 === e))) goto L_3a;
  if (((95 === e))) goto L_3a;
  if (((91 === e))) goto L_3a;
  if (((93 === e))) goto L_3a;
  if (((126 === e))) goto L_3a;
  return $(e);
}

// fn Eo  args=1 vars=1 closure=1 cpool=0 bc=5B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: R
function {
  return !R(e);
}

// fn Co  args=1 vars=1 closure=1 cpool=0 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Ao
function {
  if (((47 === e))) goto L_b;
  return !Ao(e);
}

// fn Ao  args=1 vars=1 closure=1 cpool=0 bc=36B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: _
function {
  if (((43 === e))) goto L_23;
  if (((45 === e))) goto L_23;
  if (((46 === e))) goto L_23;
  if (((95 === e))) goto L_23;
  return _(e);
}

// fn xo  args=1 vars=4 closure=0 cpool=0 bc=264B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u
function {
  let n;
  let t;
  t = e.length;
  n = false;
  t = <t_new>;
  if (!((t--))) goto L_df;
  let u;
  u = e[t][1];
  if ((("labelLink" === u.type))) goto L_7b;
  if (!(("labelImage" === u.type))) goto L_ad;
  if (!(!u._balanced)) goto L_ad;
  n = true;
  true;
  goto L_df;
  if (!(u._gfmAutolinkLiteralWalkedInto)) goto L_c;
  n = false;
  false;
  goto L_df;
  if (!((e.length > 0))) goto L_103;
  if (!(!n)) goto L_103;
  e[(e.length - 1)][1]._gfmAutolinkLiteralWalkedInto = true;
  true;
  return n;
}

// fn vo  args=0 vars=0 closure=6 cpool=0 bc=118B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: wo, So, To, Bo, yo, bo
function {
  return {document: {<bad:2147483524>: {name: "gfmFootnoteDefinition", tokenize: wo, continuation: {tokenize: So}, exit: To}}, text: {<bad:2147483524>: {name: "gfmFootnoteCall", tokenize: Bo}, <bad:2147483526>: {name: "gfmPotentialFootnoteCall", add: "after", tokenize: yo, resolveTo: bo}}};
}

// fn <atom:0>  args=1 vars=2 closure=7 cpool=0 bc=455B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: r
// locals: s
// closure: o, n, L, u, i, e, t
function {
  let s;
  if ((!o)) goto L_30;
  if (!(!o._balanced)) goto L_37;
  return n(r);   // tail call
  s = L(u.sliceSerialize({start: o.end, end: u.now()}));
  if (((94 !== s.codePointAt(0)))) goto L_136;
  if (!(!i.includes(s.slice(1)))) goto L_13d;
  return n(r);   // tail call
  e.enter("gfmFootnoteCallLabelMarker");
  e.consume(r);
  e.exit("gfmFootnoteCallLabelMarker");
  return t(r);   // tail call
}

// fn yo  args=3 vars=9 closure=1 cpool=1 bc=535B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, e#1, this
// closure: L
function {
  this = this;
  let o;
  let i;
  let r;
  let u;
  u = this;
  r = u.events.length;
  if ((u.parser.gfmFootnotes)) goto L_b2;
  u.parser.gfmFootnotes = [];
  i = [];
  o = undefined;
  r = <r_new>;
  if (!((r--))) goto L_214;
  let e#1;
  e#1 = u.events[r][1];
  if (!(("labelImage" === e#1.type))) goto L_127;
  o = e#1;
  e#1;
  goto L_214;
  if ((("gfmFootnoteCall" === e#1.type))) goto L_20f;
  if ((("labelLink" === e#1.type))) goto L_20f;
  if ((("label" === e#1.type))) goto L_20f;
  if ((("image" === e#1.type))) goto L_20f;
  if ((("link" === e#1.type))) goto L_214;
  goto L_b5;
  return function <atom:0>;
}

// fn bo  args=2 vars=9 closure=0 cpool=0 bc=1349B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s, a
function {
  let a;
  let s;
  let o;
  let i;
  let r;
  let u;
  let n;
  n = undefined;
  u = e.length;
  u = <u_new>;
  if (!((u--))) goto L_70;
  if (!(("labelImage" === e[u][1].type))) goto L_1a;
  if (!(("enter" === e[u][0]))) goto L_1a;
  n = e[u][1];
  e[u][1];
  goto L_70;
  e[(u + 1)][1].type = "data";
  e[(u + 3)][1].type = "gfmFootnoteCallLabelMarker";
  r = {type: "gfmFootnoteCall", start: Object.assign({}, e[(u + 3)][1].start), end: Object.assign({}, e[(e.length - 1)][1].end)};
  i = {type: "gfmFootnoteCallMarker", start: Object.assign({}, e[(u + 3)][1].end), end: Object.assign({}, e[(u + 3)][1].end)};
  i.end.column = (i.end.column ++);
  i.end.offset = (i.end.offset ++);
  i.end._bufferIndex = (i.end._bufferIndex ++);
  o = {type: "gfmFootnoteCallString", start: Object.assign({}, i.end), end: Object.assign({}, e[(e.length - 1)][1].start)};
  s = {type: "chunkString", contentType: "string", start: Object.assign({}, o.start), end: Object.assign({}, o.end)};
  a = [e[(u + 1)], e[(u + 2)], ["enter", r, t], e[(u + 3)], e[(u + 4)], ["enter", i, t], ["exit", i, t], ["enter", o, t], ["enter", s, t], ["exit", s, t], ["exit", o, t], e[(e.length - 2)], e[(e.length - 1)], ["exit", r, t]];
  // append([u, ((e.length - u) + 1)], 2, a)
  a;
  e.splice.apply(e, [u, ((e.length - u) + 1)]);
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=170B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, s
function {
  e.enter("gfmFootnoteCall");
  e.enter("gfmFootnoteCallLabelMarker");
  e.consume(t);
  e.exit("gfmFootnoteCallLabelMarker");
  return s;
}

// fn s  args=1 vars=1 closure=3 cpool=0 bc=236B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: n, e, a
function {
  if (!((94 !== t))) goto L_a;
  return n(t);
  e.enter("gfmFootnoteCallMarker");
  e.consume(t);
  e.exit("gfmFootnoteCallMarker");
  e.enter("gfmFootnoteCallString");
  e.enter("chunkString").contentType = "string";
  return a;
}

// fn a  args=1 vars=2 closure=11 cpool=0 bc=505B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: s
// locals: i
// closure: o, i, $, n, e, r, L, u, t, l, a
function {
  if (((o > 999))) goto L_2d;
  if (!((93 === s))) goto L_17;
  if ((!i)) goto L_2d;
  if (((null === s))) goto L_2d;
  if (((91 === s))) goto L_2d;
  if (!($(s))) goto L_34;
  return n(s);   // tail call
  if (!((93 === s))) goto L_1ac;
  let i;
  e.exit("chunkString");
  i = e.exit("gfmFootnoteCallString");
  if (!(r.includes(L(u.sliceSerialize(i))))) goto L_1a8;
  e.enter("gfmFootnoteCallLabelMarker");
  e.consume(s);
  e.exit("gfmFootnoteCallLabelMarker");
  e.exit("gfmFootnoteCall");
  return t;
  return n(s);
  if (($(s))) goto L_1b9;
  i = true;
  true;
  o = <o_new>;
  (o++);
  e.consume(s);
  if (!((92 === s))) goto L_1f5;
  return l;
  return a;
}

// fn l  args=1 vars=1 closure=3 cpool=0 bc=75B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, o, a
function {
  if (((91 === t))) goto L_14;
  if (((92 === t))) goto L_14;
  if (!((93 === t))) goto L_47;
  e.consume(t);
  o = <o_new>;
  (o++);
  return a;
  return a(t);
}

// fn Bo  args=3 vars=11 closure=2 cpool=4 bc=160B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, this
// closure: $, L
function {
  this = this;
  s = function s;
  a = function a;
  l = function l;
  let o;
  let i;
  let r;
  let u;
  u = this;
  if ((u.parser.gfmFootnotes)) goto L_98;
  u.parser.gfmFootnotes = [];
  r = [];
  i = undefined;
  o = 0;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=223B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, a
function {
  e.enter("gfmFootnoteDefinition")._container = true;
  e.enter("gfmFootnoteDefinitionLabel");
  e.enter("gfmFootnoteDefinitionLabelMarker");
  e.consume(t);
  e.exit("gfmFootnoteDefinitionLabelMarker");
  return a;
}

// fn a  args=1 vars=1 closure=3 cpool=0 bc=239B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, l, n
function {
  if (!((94 === t))) goto L_eb;
  e.enter("gfmFootnoteDefinitionMarker");
  e.consume(t);
  e.exit("gfmFootnoteDefinitionMarker");
  e.enter("gfmFootnoteDefinitionLabelString");
  e.enter("chunkString").contentType = "string";
  return l;
  return n(t);
}

// fn l  args=1 vars=2 closure=11 cpool=0 bc=462B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: n
// closure: s, o, $, n, e, i, L, u, D, c, l
function {
  if (((s > 999))) goto L_2d;
  if (!((93 === t))) goto L_17;
  if ((!o)) goto L_2d;
  if (((null === t))) goto L_2d;
  if (((91 === t))) goto L_2d;
  if (!($(t))) goto L_34;
  return n(t);   // tail call
  if (!((93 === t))) goto L_181;
  let n;
  e.exit("chunkString");
  n = e.exit("gfmFootnoteDefinitionLabelString");
  i = L(u.sliceSerialize(n));
  L(u.sliceSerialize(n));
  e.enter("gfmFootnoteDefinitionLabelMarker");
  e.consume(t);
  e.exit("gfmFootnoteDefinitionLabelMarker");
  e.exit("gfmFootnoteDefinitionLabel");
  return D;
  if (($(t))) goto L_18e;
  o = true;
  true;
  s = <s_new>;
  (s++);
  e.consume(t);
  if (!((92 === t))) goto L_1ca;
  return c;
  return l;
}

// fn c  args=1 vars=1 closure=3 cpool=0 bc=75B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, s, l
function {
  if (((91 === t))) goto L_14;
  if (((92 === t))) goto L_14;
  if (!((93 === t))) goto L_47;
  e.consume(t);
  s = <s_new>;
  (s++);
  return l;
  return l(t);
}

// fn D  args=1 vars=1 closure=6 cpool=0 bc=241B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, r, i, Z, f, n
function {
  if (!((58 === t))) goto L_eb;
  e.enter("definitionMarker");
  e.consume(t);
  e.exit("definitionMarker");
  if ((r.includes(i))) goto L_de;
  r.push(i);
  return Z(e, f, "gfmFootnoteDefinitionWhitespace");
  return n(t);
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=5B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: t
function {
  return t(e);   // tail call
}

// fn wo  args=3 vars=14 closure=3 cpool=6 bc=174B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, c, D, f, this
// closure: $, L, Z
function {
  this = this;
  a = function a;
  l = function l;
  c = function c;
  D = function D;
  f = function f;
  let s;
  let o;
  let i;
  let r;
  let u;
  u = this;
  if ((u.parser.gfmFootnotes)) goto L_a3;
  u.parser.gfmFootnotes = [];
  r = [];
  i = undefined;
  o = undefined;
  s = 0;
  return function <atom:0>;
}

// fn So  args=3 vars=3 closure=2 cpool=0 bc=79B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: De, ko
function {
  return e.check(De, t, e.attempt(ko, t, n));   // tail call
}

// fn To  args=1 vars=1 closure=0 cpool=0 bc=43B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  e.exit("gfmFootnoteDefinition");
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=192B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: r
// closure: u, t, n
function {
  let r;
  r = u.events[(u.events.length - 1)];
  if (!(r)) goto L_bc;
  if (!(("gfmFootnoteDefinitionIndent" === r[1].type))) goto L_bc;
  if (!((4 === r[2].sliceSerialize(r[1], true).length))) goto L_bc;
  return t(e);
  return n(e);
}

// fn Io  args=3 vars=5 closure=1 cpool=1 bc=20B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, this
// closure: Z
function {
  this = this;
  let u;
  u = this;
  return Z(e, function <atom:0>, "gfmFootnoteDefinitionIndent", 5);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=116B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: r, i, u, e, s
function {
  if (!((126 === r))) goto L_42;
  if (!(("characterEscape" !== i[(i.length - 1)][1].type))) goto L_42;
  return u(t);   // tail call
  e.enter("strikethroughSequenceTemporary");
  return s(t);   // tail call
}

// fn s  args=1 vars=4 closure=8 cpool=0 bc=235B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: i
// locals: a, l, c
// closure: ue, r, o, u, e, s, t, n
function {
  let c;
  let l;
  let a;
  a = ue(r);
  if (!((126 === i))) goto L_55;
  if (!((o > 1))) goto L_20;
  return u(i);
  e.consume(i);
  o = <o_new>;
  (o++);
  return s;
  if (!((o < 2))) goto L_67;
  if (!(!t)) goto L_67;
  return u(i);   // tail call
  l = e.exit("strikethroughSequenceTemporary");
  c = ue(i);
  if ((!c)) goto L_b5;
  if (!((2 === c))) goto L_b5;
  l._open = Boolean(a);
  if ((!a)) goto L_db;
  if (!((2 === a))) goto L_db;
  l._close = Boolean(c);
  return n(i);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=2 cpool=2 bc=92B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, n, u
// locals: r, i, o, s, this
// closure: ue, t
function {
  this = this;
  s = function s;
  let o;
  let i;
  let r;
  r = this.previous;
  i = this.events;
  o = 0;
  return function <atom:0>;
}

// fn <atom:0>  args=2 vars=8 closure=2 cpool=0 bc=1452B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s
// closure: S, re
function {
  let n;
  n = -1;
  n = (n ++);
  if (!(((n ++) < e.length))) goto L_54c;
  if (!(("enter" === e[n][0]))) goto L_5;
  if (!(("strikethroughSequenceTemporary" === e[n][1].type))) goto L_5;
  if (!(e[n][1]._close)) goto L_5;
  let u;
  u = n;
  u = <u_new>;
  if (!((u--))) goto L_5;
  if (!(("exit" === e[u][0]))) goto L_85;
  if (!(("strikethroughSequenceTemporary" === e[u][1].type))) goto L_85;
  if (!(e[u][1]._open)) goto L_85;
  if (!(((e[n][1].end.offset - e[n][1].start.offset) === (e[u][1].end.offset - e[u][1].start.offset)))) goto L_85;
  let s;
  let o;
  let i;
  let r;
  e[n][1].type = "strikethroughSequence";
  e[u][1].type = "strikethroughSequence";
  r = {type: "strikethrough", start: Object.assign({}, e[u][1].start), end: Object.assign({}, e[n][1].end)};
  i = {type: "strikethroughText", start: Object.assign({}, e[u][1].end), end: Object.assign({}, e[n][1].start)};
  o = [["enter", r, t], ["enter", e[u][1], t], ["exit", e[u][1], t], ["enter", i, t]];
  s = t.parser.constructs.insideSpan.null;
  if (!(s)) goto L_4da;
  S(o, o.length, 0, re(s, e.slice((u + 1), n), t));
  S(o, o.length, 0, [["exit", i, t], ["enter", e[n][1], t], ["exit", e[n][1], t], ["exit", r, t]]);
  S(e, (u - 1), ((n - u) + 3), o);
  n = ((u + o.length) - 2);
  ((u + o.length) - 2);
  goto L_5;
  n = -1;
  -1;
  n = (n ++);
  if (!(((n ++) < e.length))) goto L_5aa;
  if (!(("strikethroughSequenceTemporary" === e[n][1].type))) goto L_5a7;
  e[n][1].type = "data";
  "data";
  goto L_552;
  return e;
}

// fn qo  args=1 vars=3 closure=3 cpool=2 bc=147B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n
// closure: ue, S, re
function {
  let n;
  let t;
  if ((e)) goto L_c;
  t = {}.singleTilde;
  n = {name: "strikethrough", tokenize: function <atom:0>, resolveAll: function <atom:0>};
  if (!((null == t))) goto L_61;
  t = true;
  true;
  return {text: {<bad:2147483559>: n}, insideSpan: {null: [n]}, attentionMarkers: {null: [126]}};
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=29B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.map = [];
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=11B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: this
// closure: Oo
function {
  this = this;
  Oo(this, e, t, n);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=8B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  return (e[0] - t[0]);
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=1 bc=725B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, t#1, this
function {
  this = this;
  let u;
  let n;
  let t;
  this.map.sort(function <atom:0>);
  if (!((0 === this.map.length))) goto L_7f;
  return;
  t = this.map.length;
  n = [];
  if (!((t > 0))) goto L_1bb;
  t = (t - 1);
  (t - 1);
  n.push(e.slice((this.map[t][0] + this.map[t][1])), this.map[t][2]);
  e.length = this.map[t][0];
  goto L_a8;
  n.push(e.slice());
  e.length = 0;
  u = n.pop();
  if (!(u)) goto L_2a7;
  let t#1;
  for (const t#1 of u) {
    e.push(t#1);
  }
  u = n.pop();
  n.pop();
  goto L_23b;
  this.map.length = 0;
  return;
}

// fn Oo  args=4 vars=5 closure=0 cpool=0 bc=334B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r
function {
  let r;
  r = 0;
  if (((0 !== n))) goto L_10;
  if (!((0 !== u.length))) goto L_14d;
  if (!((r < e.map.length))) goto L_100;
  if (!((e.map[r][0] === t))) goto L_f3;
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] + n);
  // append([], 0, u)
  u;
  e.map[r][2].push.apply(e.map[r][2], []);
  return;
  r = (r + 1);
  (r + 1);
  goto L_15;
  e.map.push([t, n, u]);
  return;
}

// fn zo  args=2 vars=6 closure=0 cpool=0 bc=477B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, e#1
function {
  let u;
  let n;
  n = false;
  u = [];
  if (!((t < e.length))) goto L_1d9;
  let r;
  r = e[t];
  if (!(n)) goto L_18c;
  if (!(("enter" === r[0]))) goto L_cc;
  if (!(("tableContent" === r[1].type))) goto L_c8;
  if (!(("tableDelimiterMarker" === e[(t + 1)][1].type))) goto L_c0;
  goto L_c5;
  // [栈深重同步 3 -> 2]
  u.push("none");
  goto L_1d2;
  if (!(("tableContent" === r[1].type))) goto L_15c;
  if (!(("tableDelimiterMarker" === e[(t - 1)][1].type))) goto L_1d2;
  let e#1;
  e#1 = (u.length - 1);
  if (!(("left" === u[e#1]))) goto L_154;
  goto L_159;
  // [栈深重同步 3 -> 2]
  u[e#1] = "right";
  goto L_1d2;
  if ((("tableDelimiterRow" === r[1].type))) goto L_1d9;
  goto L_1d2;
  if (!(("enter" === r[0]))) goto L_1d1;
  if (!(("tableDelimiterRow" === r[1].type))) goto L_1d1;
  n = true;
  true;
  t = (t + 1);
  goto L_d;
  return u;
}

// fn Lo  args=0 vars=0 closure=2 cpool=0 bc=36B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: Ro, _o
function {
  return {flow: {null: {name: "table", tokenize: Ro, resolveAll: _o}}};
}

// fn <atom:0>  args=1 vars=5 closure=4 cpool=0 bc=448B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, e#1, r, i
// closure: u, C, s, n
function {
  let i;
  let r;
  let t;
  t = (u.events.length - 1);
  if (!((t > -1))) goto L_a7;
  let e#1;
  e#1 = u.events[t][1].type;
  if (!(("lineEnding" !== e#1))) goto L_9d;
  if ((("linePrefix" !== e#1))) goto L_a7;
  t = <t_new>;
  (t--);
  goto L_31;
  if (!((t > -1))) goto L_fb;
  goto L_fc;
  // [栈深重同步 1 -> 0]
  r = null;
  if ((("tableHead" === r))) goto L_113;
  if (!(("tableRow" === r))) goto L_118;
  goto L_119;
  // [栈深重同步 1 -> 0]
  i = s;
  if (!((i === C))) goto L_1b9;
  if (!(u.parser.lazy[u.now().line])) goto L_1b9;
  return n(e);   // tail call
  return i(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=33B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: a, r, o
function {
  if (!((124 === e))) goto L_b;
  return a(e);   // tail call
  r = true;
  true;
  o = (o + 1);
  (o + 1);
  return a(e);   // tail call
}

// fn s  args=1 vars=1 closure=4 cpool=1 bc=92B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: a, r, o, e
function {
  e.enter("tableHead");
  e.enter("tableRow");
  return function <atom:0>(t);   // tail call
}

// fn a  args=1 vars=1 closure=12 cpool=0 bc=492B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: n, H, o, u, e, D, J, Z, a, r, i, l
function {
  if (!((null === t))) goto L_9;
  return n(t);
  if (!(H(t))) goto L_e7;
  if (!((o > 1))) goto L_e3;
  o = 0;
  0;
  u.interrupt = true;
  e.exit("tableRow");
  e.enter("lineEnding");
  e.consume(t);
  e.exit("lineEnding");
  return D;
  return n(t);
  if (!(J(t))) goto L_100;
  return Z(e, a, "whitespace")(t);
  o = (o + 1);
  (o + 1);
  if (!(r)) goto L_121;
  r = false;
  false;
  i = (i + 1);
  (i + 1);
  if (!((124 === t))) goto L_1b9;
  e.enter("tableCellDivider");
  e.consume(t);
  e.exit("tableCellDivider");
  r = true;
  true;
  return a;
  e.enter("data");
  return l(t);
}

// fn l  args=1 vars=1 closure=5 cpool=0 bc=118B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: $, e, a, c, l
function {
  if (((null === t))) goto L_12;
  if (((124 === t))) goto L_12;
  if (!($(t))) goto L_43;
  e.exit("data");
  return a(t);
  e.consume(t);
  if (!((92 === t))) goto L_72;
  return c;
  return l;
}

// fn c  args=1 vars=1 closure=2 cpool=0 bc=59B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, l
function {
  if (((92 === t))) goto L_c;
  if (!((124 === t))) goto L_37;
  e.consume(t);
  return l;
  return l(t);
}

// fn D  args=1 vars=1 closure=7 cpool=0 bc=428B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: u, n, e, r, J, Z, f
function {
  u.interrupt = false;
  if (!(u.parser.lazy[u.now().line])) goto L_a2;
  return n(t);
  e.enter("tableDelimiterRow");
  r = false;
  false;
  if (!(J(t))) goto L_1a6;
  if (!(u.parser.constructs.disable.null.includes("codeIndented"))) goto L_19f;
  goto L_1a0;
  // [栈深重同步 5 -> 4]
  return Z(e, f, "linePrefix", 4)(t);
  return f(t);
}

// fn f  args=1 vars=1 closure=5 cpool=0 bc=167B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: d, r, e, h, E
function {
  if (((45 === t))) goto L_c;
  if (!((58 === t))) goto L_12;
  return d(t);
  if (!((124 === t))) goto L_a1;
  r = true;
  true;
  e.enter("tableCellDivider");
  e.consume(t);
  e.exit("tableCellDivider");
  return h;
  return E(t);
}

// fn h  args=1 vars=1 closure=4 cpool=0 bc=21B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: J, Z, e, d
function {
  if (!(J(t))) goto L_11;
  return Z(e, d, "whitespace")(t);
  return d(t);
}

// fn d  args=1 vars=1 closure=7 cpool=0 bc=199B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: o, r, e, p, H, g, E
function {
  if (!((58 === t))) goto L_99;
  o = (o + 1);
  (o + 1);
  r = true;
  true;
  e.enter("tableDelimiterMarker");
  e.consume(t);
  e.exit("tableDelimiterMarker");
  return p;
  if (!((45 === t))) goto L_ad;
  o = (o + 1);
  (o + 1);
  return p(t);
  if (((null === t))) goto L_b9;
  if (!(H(t))) goto L_c1;
  return g(t);
  return E(t);
}

// fn p  args=1 vars=1 closure=3 cpool=0 bc=57B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, F, E
function {
  if (!((45 === t))) goto L_35;
  e.enter("tableDelimiterFiller");
  return F(t);
  return E(t);
}

// fn F  args=1 vars=1 closure=4 cpool=0 bc=280B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, F, r, m
function {
  if (!((45 === t))) goto L_2f;
  e.consume(t);
  return F;
  if (!((58 === t))) goto L_e9;
  r = true;
  true;
  e.exit("tableDelimiterFiller");
  e.enter("tableDelimiterMarker");
  e.consume(t);
  e.exit("tableDelimiterMarker");
  return m;
  e.exit("tableDelimiterFiller");
  return m(t);
}

// fn m  args=1 vars=1 closure=4 cpool=0 bc=21B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: J, Z, e, g
function {
  if (!(J(t))) goto L_11;
  return Z(e, g, "whitespace")(t);
  return g(t);
}

// fn g  args=1 vars=1 closure=8 cpool=0 bc=138B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: f, H, r, i, o, e, t, E
function {
  if (!((124 === n))) goto L_a;
  return f(n);
  if (((null === n))) goto L_14;
  if (!(H(n))) goto L_84;
  if (!(r)) goto L_84;
  if (!((i === o))) goto L_84;
  e.exit("tableDelimiterRow");
  e.exit("tableHead");
  return t(n);
  return E(n);
}

// fn E  args=1 vars=1 closure=1 cpool=0 bc=5B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: n
function {
  return n(e);   // tail call
}

// fn C  args=1 vars=1 closure=2 cpool=0 bc=48B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, A
function {
  e.enter("tableRow");
  return A(t);   // tail call
}

// fn A  args=1 vars=1 closure=7 cpool=0 bc=265B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, A, H, t, J, Z, x
function {
  if (!((124 === n))) goto L_88;
  e.enter("tableCellDivider");
  e.consume(n);
  e.exit("tableCellDivider");
  return A;
  if (((null === n))) goto L_92;
  if (!(H(n))) goto L_c3;
  e.exit("tableRow");
  return t(n);
  if (!(J(n))) goto L_d8;
  return Z(e, A, "whitespace")(n);
  e.enter("data");
  return x(n);
}

// fn x  args=1 vars=1 closure=5 cpool=0 bc=118B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: $, e, A, k, x
function {
  if (((null === t))) goto L_12;
  if (((124 === t))) goto L_12;
  if (!($(t))) goto L_43;
  e.exit("data");
  return A(t);
  e.consume(t);
  if (!((92 === t))) goto L_72;
  return k;
  return x;
}

// fn k  args=1 vars=1 closure=2 cpool=0 bc=59B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, x
function {
  if (((92 === t))) goto L_c;
  if (!((124 === t))) goto L_37;
  e.consume(t);
  return x;
  return x(t);
}

// fn Ro  args=3 vars=25 closure=4 cpool=18 bc=95B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, c, D, f, h, d, p, F, m, g, E, C, A, x, k, this
// closure: H, J, Z, $
function {
  this = this;
  s = function s;
  a = function a;
  l = function l;
  c = function c;
  D = function D;
  f = function f;
  h = function h;
  d = function d;
  p = function p;
  F = function F;
  m = function m;
  g = function g;
  E = function E;
  C = function C;
  A = function A;
  x = function x;
  k = function k;
  let o;
  let i;
  let r;
  let u;
  u = this;
  r = undefined;
  i = 0;
  o = 0;
  return function <atom:0>;
}

// fn _o  args=2 vars=16 closure=4 cpool=0 bc=2036B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s, a, l, c, D, f, h, d, e#1
// closure: Mo, Po, No, zo
function {
  let f;
  let D;
  let c;
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  let u;
  let n;
  n = undefined;
  u = undefined;
  r = undefined;
  i = -1;
  o = true;
  s = 0;
  a = [0, 0, 0, 0];
  l = [0, 0, 0, 0];
  c = false;
  D = 0;
  f = new Mo();
  i = (i ++);
  if (!(((i ++) < e.length))) goto L_6b2;
  let d;
  let h;
  h = e[i];
  d = h[1];
  if (!(("enter" === h[0]))) goto L_516;
  if (!(("tableHead" === d.type))) goto L_1d4;
  c = false;
  false;
  if (!((0 !== D))) goto L_e0;
  Po(f, t, D, n, u);
  u = undefined;
  undefined;
  D = 0;
  0;
  n = {type: "table", start: Object.assign({}, d.start), end: Object.assign({}, d.end)};
  {type: "table", start: Object.assign({}, d.start), end: Object.assign({}, d.end)};
  goto L_6ae;
  // [栈深重同步 1 -> 0]
  if ((("tableRow" === d.type))) goto L_22c;
  if (!(("tableDelimiterRow" === d.type))) goto L_39b;
  o = true;
  true;
  r = undefined;
  undefined;
  a = [0, 0, 0, 0];
  [0, 0, 0, 0];
  l = [0, (i + 1), 0, 0];
  [0, (i + 1), 0, 0];
  if (!(c)) goto L_35b;
  c = false;
  false;
  u = {type: "tableBody", start: Object.assign({}, d.start), end: Object.assign({}, d.end)};
  {type: "tableBody", start: Object.assign({}, d.start), end: Object.assign({}, d.end)};
  f.add(i, 0, [["enter", u, t]]);
  if (!(("tableDelimiterRow" === d.type))) goto L_38b;
  goto L_394;
  // [栈深重同步 1 -> 0]
  if (!(u)) goto L_393;
  goto L_394;
  // [栈深重同步 1 -> 0]
  s = 1;
  goto L_6ae;
  // [栈深重同步 1 -> 0]
  if ((!s)) goto L_42e;
  if (!(("data" !== d.type))) goto L_4bb;
  if (!(("tableDelimiterMarker" !== d.type))) goto L_4bb;
  if (!(("tableDelimiterFiller" !== d.type))) goto L_4bb;
  if (!(("tableCellDivider" === d.type))) goto L_6ae;
  if (!(o)) goto L_472;
  o = false;
  goto L_6ae;
  // [栈深重同步 1 -> 0]
  if (!((0 !== a[1]))) goto L_49e;
  l[0] = l[1];
  r = No(f, t, a, s, undefined, r);
  No(f, t, a, s, undefined, r);
  a = l;
  l;
  l = [a[1], i, 0, 0];
  goto L_6ae;
  // [栈深重同步 1 -> 0]
  o = false;
  false;
  if (!((0 === l[2]))) goto L_6ae;
  if (!((0 !== a[1]))) goto L_508;
  l[0] = l[1];
  r = No(f, t, a, s, undefined, r);
  No(f, t, a, s, undefined, r);
  a = [0, 0, 0, 0];
  [0, 0, 0, 0];
  l[2] = i;
  goto L_6ae;
  // [栈深重同步 1 -> 0]
  if (!(("tableHead" === d.type))) goto L_553;
  c = true;
  true;
  D = i;
  goto L_6ae;
  // [栈深重同步 1 -> 0]
  if ((("tableRow" === d.type))) goto L_5ab;
  if (!(("tableDelimiterRow" === d.type))) goto L_60f;
  D = i;
  i;
  if (!((0 !== a[1]))) goto L_5e3;
  l[0] = l[1];
  r = No(f, t, a, s, i, r);
  goto L_606;
  // [栈深重同步 1 -> 0]
  if (!((0 !== l[1]))) goto L_606;
  r = No(f, t, l, s, i, r);
  No(f, t, l, s, i, r);
  s = 0;
  goto L_6ae;
  // [栈深重同步 1 -> 0]
  if ((!s)) goto L_6ae;
  if (!(("data" !== d.type))) goto L_6a0;
  if (!(("tableDelimiterMarker" !== d.type))) goto L_6a0;
  if ((("tableDelimiterFiller" !== d.type))) goto L_6ae;
  l[3] = i;
  i;
  goto L_50;
  if (!((0 !== D))) goto L_6cc;
  Po(f, t, D, n, u);
  f.consume(t.events);
  i = -1;
  -1;
  i = (i ++);
  if (!(((i ++) < t.events.length))) goto L_7f2;
  let e#1;
  e#1 = t.events[i];
  if (!(("enter" === e#1[0]))) goto L_7ee;
  if (!(("table" === e#1[1].type))) goto L_7ee;
  e#1[1]._align = zo(t.events, i);
  zo(t.events, i);
  goto L_71d;
  return e;
}

// fn No  args=6 vars=15 closure=1 cpool=0 bc=1214B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r, i
// locals: o, s, r#1, i#1, o#1, u#1, r#2, t#1, u#2
// closure: jo
function {
  let s;
  let o;
  if (!((1 === u))) goto L_12;
  goto L_23;
  // [栈深重同步 1 -> 0]
  if (!((2 === u))) goto L_1e;
  goto L_23;
  // [栈深重同步 1 -> 0]
  o = "tableData";
  if (!((0 !== n[0]))) goto L_c5;
  i.end = Object.assign({}, jo(t.events, n[0]));
  e.add(n[0], 0, [["exit", i, t]]);
  s = jo(t.events, n[1]);
  i = {type: o, start: Object.assign({}, s), end: Object.assign({}, s)};
  e.add(n[1], 0, [["enter", i, t]]);
  if (!((0 !== n[2]))) goto L_413;
  let o#1;
  let i#1;
  let r#1;
  r#1 = jo(t.events, n[2]);
  i#1 = jo(t.events, n[3]);
  o#1 = {type: "tableContent", start: Object.assign({}, r#1), end: Object.assign({}, i#1)};
  e.add(n[2], 0, [["enter", o#1, t]]);
  if (!((2 !== u))) goto L_3d8;
  let r#2;
  let u#1;
  u#1 = t.events[n[2]];
  r#2 = t.events[n[3]];
  u#1[1].end = Object.assign({}, r#2[1].end);
  u#1[1].type = "chunkText";
  u#1[1].contentType = "text";
  if (!((n[3] > (n[2] + 1)))) goto L_3d8;
  let u#2;
  let t#1;
  t#1 = (n[2] + 1);
  u#2 = ((n[3] - n[2]) - 1);
  e.add(t#1, u#2, []);
  e.add((n[3] + 1), 0, [["exit", o#1, t]]);
  if (!((undefined !== r))) goto L_4b9;
  i.end = Object.assign({}, jo(t.events, r));
  e.add(r, 0, [["exit", i, t]]);
  i = undefined;
  undefined;
  return i;
}

// fn Po  args=5 vars=7 closure=1 cpool=0 bc=314B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r
// locals: i, o
// closure: jo
function {
  let o;
  let i;
  i = [];
  o = jo(t.events, n);
  if (!(r)) goto L_a3;
  r.end = Object.assign({}, o);
  i.push(["exit", r, t]);
  u.end = Object.assign({}, o);
  i.push(["exit", u, t]);
  e.add((n + 1), 0, i);
  return;
}

// fn jo  args=2 vars=4 closure=0 cpool=0 bc=46B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u
function {
  let u;
  let n;
  n = e[t];
  if (!(("enter" === n[0]))) goto L_1e;
  goto L_23;
  // [栈深重同步 1 -> 0]
  u = "end";
  return n[1][u];
}

// fn Uo  args=0 vars=0 closure=1 cpool=0 bc=14B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: Vo
function {
  return {text: {<bad:2147483524>: Vo}};
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=256B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: u, n, e, r
function {
  if (((null !== u.previous))) goto L_4f;
  if (!(!u._gfmTasklistFirstContentOfListItem)) goto L_56;
  return n(t);   // tail call
  e.enter("taskListCheck");
  e.enter("taskListCheckMarker");
  e.consume(t);
  e.exit("taskListCheckMarker");
  return r;
}

// fn r  args=1 vars=1 closure=4 cpool=0 bc=283B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: $, e, i, n
function {
  if (!($(t))) goto L_87;
  e.enter("taskListCheckValueUnchecked");
  e.consume(t);
  e.exit("taskListCheckValueUnchecked");
  return i;
  if (((88 === t))) goto L_93;
  if (!((120 === t))) goto L_117;
  e.enter("taskListCheckValueChecked");
  e.consume(t);
  e.exit("taskListCheckValueChecked");
  return i;
  return n(t);
}

// fn i  args=1 vars=1 closure=3 cpool=0 bc=183B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: e, o, n
function {
  if (!((93 === t))) goto L_b3;
  e.enter("taskListCheckMarker");
  e.consume(t);
  e.exit("taskListCheckMarker");
  e.exit("taskListCheck");
  return o;
  return n(t);
}

// fn o  args=1 vars=1 closure=6 cpool=0 bc=73B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: H, t, J, e, $o, n
function {
  if (!(H(u))) goto L_9;
  return t(u);
  if (!(J(u))) goto L_43;
  return e.check({tokenize: $o}, t, n)(u);
  return n(u);
}

// fn Ho  args=3 vars=8 closure=4 cpool=4 bc=21B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, this
// closure: $, H, J, $o
function {
  this = this;
  r = function r;
  i = function i;
  o = function o;
  let u;
  u = this;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: n, t
function {
  if (!((null === e))) goto L_9;
  return n(e);
  return t(e);
}

// fn $o  args=3 vars=3 closure=1 cpool=1 bc=12B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: Z
function {
  return Z(e, function <atom:0>, "whitespace");   // tail call
}

// fn Jo  args=1 vars=1 closure=6 cpool=0 bc=22B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: q, so, vo, qo, Lo, Uo
function {
  return q([so(), vo(), qo(e), Lo(), Uo()]);   // tail call
}

// fn Wo  args=1 vars=7 closure=4 cpool=0 bc=368B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r, i, this
// closure: Go, Jo, Zi, Yi
function {
  this = this;
  let i;
  let r;
  let u;
  let n;
  let t;
  if ((e)) goto L_18;
  t = Go;
  n = this.data();
  if ((n.micromarkExtensions)) goto L_78;
  n.micromarkExtensions = [];
  u = [];
  if ((n.fromMarkdownExtensions)) goto L_b1;
  n.fromMarkdownExtensions = [];
  r = [];
  if ((n.toMarkdownExtensions)) goto L_ea;
  n.toMarkdownExtensions = [];
  i = [];
  u.push(Jo(t));
  r.push(Zi());
  i.push(Yi(t));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=172B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: An, f, D, t, e
function {
  if ((t.data("micromarkExtensions"))) goto L_6b;
  if ((t.data("fromMarkdownExtensions"))) goto L_a3;
  return An(n, f(D(D({}, t.data("settings")), e), {extensions: [], mdastExtensions: []}));   // tail call
}

// fn Qo  args=1 vars=3 closure=3 cpool=1 bc=22B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, this
// closure: An, f, D
function {
  this = this;
  let t;
  t = this;
  t.parser = function <atom:0>;
  return;
}

// fn Zo  args=1 vars=1 closure=0 cpool=0 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!(e)) goto L_5;
  throw e;
  return;
}

// fn Ko  args=1 vars=2 closure=0 cpool=0 bc=257B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  let t;
  if ((("object" != typeof e))) goto L_12;
  if (!((null === e))) goto L_17;
  return false;
  t = Object.getPrototypeOf(e);
  if (!((null !== t))) goto L_a7;
  if (!((t !== Object.prototype))) goto L_a7;
  if (((null !== Object.getPrototypeOf(t)))) goto L_ff;
  if (((Symbol.toStringTag in e))) goto L_ff;
  return !(Symbol.iterator in e);
}

// fn r  args=2 vars=5 closure=5 cpool=0 bc=135B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: i, o
// locals: s, a, r
// closure: e, n, u, t, es
function {
  r = <special_object 2>;
  o = ...1;
  let a;
  let s;
  n = (n ++);
  s = e[(n ++)];
  a = -1;
  if (!(i)) goto L_26;
  u(i);
  return;
  a = (a ++);
  if (!(((a ++) < t.length))) goto L_58;
  if (!((null !== o[a]))) goto L_45;
  if (((undefined !== o[a]))) goto L_55;
  o[a] = t[a];
  t[a];
  goto L_26;
  t = o;
  if (!(s)) goto L_75;
  // append([], 0, o)
  o;
  goto L_85;
  // [栈深重同步 1 -> 0]
  // append([null], 1, o)
  o;
  u.apply(undefined, [null]);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=98B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: n, u
// closure: e, es
function {
  t = ...0;
  let u;
  let n;
  n = -1;
  u = t.pop();
  if (!(("function" != typeof u))) goto L_51;
  throw new TypeError(("Expected function as last argument, not " + u));
  // append([null], 1, t)
  t;
  !function r.apply(undefined, [null]);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=72B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, t
function {
  if (!(("function" != typeof n))) goto L_1b;
  throw new TypeError(("Expected `middelware` to be a function, not " + n));
  e.push(n);
  return t;
}

// fn Xo  args=0 vars=2 closure=1 cpool=2 bc=40B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t
// closure: es
function {
  let t;
  let e;
  e = [];
  t = {run: function <atom:0>, use: function <atom:0>};
  return t;
}

// fn <atom:0>  args=1 vars=5 closure=4 cpool=0 bc=307B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// locals: i, o, s, this
// closure: e, u, n, r
function {
  this = this;
  t = ...0;
  let o;
  let i;
  i = (e.length > t.length);
  o = undefined;
  if (!(i)) goto L_41;
  t.push(u);
  try { // catch -> L_76
  o = e.apply(this, t);
  e.apply(this, t);
  <?>;
  goto L_8e;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_8d
  if (!(i)) goto L_88;
  if (!(n)) goto L_88;
  throw s;
  return u(s);
  // [栈深重同步 0 -> 1]
  throw <?>;
  if ((i)) goto L_132;
  if (!(o)) goto L_11b;
  if (!(o.then)) goto L_11b;
  if (!(("function" == typeof o.then))) goto L_11b;
  goto L_132;
  // [栈深重同步 1 -> 0]
  if (!((o instanceof Error))) goto L_12d;
  goto L_132;
  // [栈深重同步 1 -> 0]
  r(o);
  return;
}

// fn u  args=2 vars=2 closure=2 cpool=0 bc=33B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, u
// closure: n, t
function {
  u = ...1;
  if ((n)) goto L_20;
  n = true;
  true;
  // append([e], 1, u)
  u;
  t.apply(undefined, [e]);
  return;
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=5B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: u
function {
  u(null, e);
  return;
}

// fn es  args=2 vars=5 closure=0 cpool=3 bc=14B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r
function {
  u = function u;
  r = function r;
  let n;
  n = undefined;
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=12 closure=3 cpool=0 bc=1842B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, e#1, e#2, o, this.active_func, new.target, this
// closure: <class_fields_init>, D, Fn
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let o;
  let i;
  let r;
  let u;
  this = new new.target();
  if (!(<class_fields_init>)) goto L_31;
  <class_fields_init>.call(this);
  new new.target();
  if (!(("string" == typeof t))) goto L_43;
  n = t;
  t = undefined;
  undefined;
  u = "";
  r = {};
  i = false;
  if (!(t)) goto L_c5;
  if (!(("line" in t))) goto L_62;
  if ((("column" in t))) goto L_76;
  if (!(("start" in t))) goto L_81;
  if (!(("end" in t))) goto L_81;
  goto L_c1;
  // [栈深重同步 1 -> 0]
  if (!(("type" in t))) goto L_bd;
  goto L_c1;
  // [栈深重同步 1 -> 0]
  r = D({}, t);
  D({}, t);
  if (!(("string" == typeof e))) goto L_d7;
  u = e;
  goto L_141;
  // [栈深重同步 1 -> 0]
  if (!(!r.cause)) goto L_141;
  if (!(e)) goto L_141;
  i = true;
  true;
  u = e.message;
  e.message;
  r.cause = e;
  e;
  if (!(!r.ruleId)) goto L_255;
  if (!(!r.source)) goto L_255;
  if (!(("string" == typeof n))) goto L_255;
  let e#1;
  e#1 = n.indexOf(":");
  if (!((-1 === e#1))) goto L_1e8;
  r.ruleId = n;
  goto L_254;
  // [栈深重同步 1 -> 0]
  r.source = n.slice(0, e#1);
  r.ruleId = n.slice((e#1 + 1));
  n.slice((e#1 + 1));
  if (!(!r.place)) goto L_35b;
  if (!(r.ancestors)) goto L_35b;
  if (!(r.ancestors)) goto L_35b;
  let e#2;
  e#2 = r.ancestors[(r.ancestors.length - 1)];
  if (!(e#2)) goto L_35a;
  r.place = e#2.position;
  e#2.position;
  if (!(r.place)) goto L_3f4;
  if (!(("start" in r.place))) goto L_3f4;
  goto L_418;
  // [栈深重同步 1 -> 0]
  o = r.place;
  if ((r.ancestors)) goto L_446;
  this.ancestors = undefined;
  if ((r.cause)) goto L_47b;
  this.cause = undefined;
  if (!(o)) goto L_4b2;
  goto L_4b3;
  // [栈深重同步 2 -> 1]
  this.column = undefined;
  this.fatal = undefined;
  this.file = "";
  this.message = u;
  if (!(o)) goto L_513;
  goto L_514;
  // [栈深重同步 2 -> 1]
  this.line = undefined;
  if ((Fn(r.place))) goto L_54f;
  this.name = "1:1";
  if ((r.place)) goto L_584;
  this.place = undefined;
  this.reason = this.message;
  if ((r.ruleId)) goto L_5e9;
  this.ruleId = undefined;
  if ((r.source)) goto L_61e;
  this.source = undefined;
  if (!(i)) goto L_6f0;
  if (!(r.cause)) goto L_6f0;
  if (!(("string" == typeof r.cause.stack))) goto L_6f0;
  goto L_6f1;
  // [栈深重同步 2 -> 1]
  this.stack = "";
  this.actual = undefined;
  this.expected = undefined;
  this.note = undefined;
  this.url = undefined;
  return this;
}

// fn us  args=2 vars=8 closure=1 cpool=0 bc=563B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s
// closure: ls
function {
  let s;
  let o;
  let i;
  let r;
  let u;
  let n;
  if (!((undefined !== t))) goto L_30;
  if (!(("string" != typeof t))) goto L_30;
  throw new TypeError(""ext" argument must be a string");
  ls(e);
  n = undefined;
  u = 0;
  r = -1;
  i = e.length;
  if (((undefined === t))) goto L_51;
  if (((0 === t.length))) goto L_51;
  if (!((t.length > e.length))) goto L_ee;
  i = <i_new>;
  if (!((i--))) goto L_b9;
  if (!((47 === e.codePointAt(i)))) goto L_9d;
  if (!(n)) goto L_56;
  u = (i + 1);
  (i + 1);
  goto L_b9;
  if (!((r < 0))) goto L_b6;
  n = true;
  true;
  r = (i + 1);
  (i + 1);
  goto L_56;
  if (!((r < 0))) goto L_c2;
  return "";
  return e.slice(u, r);
  if (!((t === e))) goto L_f5;
  return "";
  o = -1;
  s = (t.length - 1);
  i = <i_new>;
  if (!((i--))) goto L_1e6;
  if (!((47 === e.codePointAt(i)))) goto L_149;
  if (!(n)) goto L_fe;
  u = (i + 1);
  (i + 1);
  goto L_1e6;
  if (!((o < 0))) goto L_162;
  n = true;
  true;
  o = (i + 1);
  (i + 1);
  if (!((s > -1))) goto L_1e2;
  s = <s_new>;
  if (!((e.codePointAt(i) === t.codePointAt((s--))))) goto L_1d5;
  if (!((s < 0))) goto L_1e2;
  r = i;
  goto L_1e2;
  // [栈深重同步 1 -> 0]
  s = -1;
  -1;
  r = o;
  o;
  goto L_fe;
  if (!((u === r))) goto L_1f8;
  r = o;
  goto L_207;
  // [栈深重同步 1 -> 0]
  if (!((r < 0))) goto L_207;
  r = e.length;
  e.length;
  return e.slice(u, r);   // tail call
}

// fn rs  args=1 vars=4 closure=1 cpool=0 bc=278B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u
// closure: ls
function {
  let u;
  let n;
  let t;
  ls(e);
  if (!((0 === e.length))) goto L_19;
  return ".";
  t = undefined;
  n = -1;
  u = e.length;
  u = (u --);
  if (!((u --))) goto L_76;
  if (!((47 === e.codePointAt(u)))) goto L_66;
  if (!(t)) goto L_20;
  n = u;
  u;
  goto L_76;
  if ((t)) goto L_73;
  t = true;
  true;
  goto L_20;
  if (!((n < 0))) goto L_b4;
  if (!((47 === e.codePointAt(0)))) goto L_ae;
  return "/";
  return ".";
  if (!((1 === n))) goto L_ec;
  if (!((47 === e.codePointAt(0)))) goto L_ec;
  return "//";
  return e.slice(0, n);
}

// fn is  args=1 vars=8 closure=1 cpool=0 bc=308B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r, i, o, s
// closure: ls
function {
  let o;
  let i;
  let r;
  let u;
  let n;
  let t;
  ls(e);
  t = undefined;
  n = e.length;
  u = -1;
  r = 0;
  i = -1;
  o = 0;
  n = <n_new>;
  if (!((n--))) goto L_ce;
  let s;
  s = e.codePointAt(n);
  if (!((47 !== s))) goto L_ba;
  if (!((u < 0))) goto L_7f;
  t = true;
  true;
  u = (n + 1);
  (n + 1);
  if (!((46 === s))) goto L_a8;
  if (!((i < 0))) goto L_98;
  i = n;
  goto L_b6;
  // [栈深重同步 1 -> 0]
  if (!((1 !== o))) goto L_b6;
  o = 1;
  goto L_b6;
  // [栈深重同步 1 -> 0]
  if (!((i > -1))) goto L_b6;
  o = -1;
  -1;
  goto L_25;
  if (!(t)) goto L_25;
  r = (n + 1);
  (n + 1);
  goto L_ce;
  if (((i < 0))) goto L_104;
  if (((u < 0))) goto L_104;
  if (((0 === o))) goto L_104;
  if (!((1 === o))) goto L_108;
  if (!((i === (u - 1)))) goto L_108;
  if (!((i === (r + 1)))) goto L_108;
  return "";
  return e.slice(i, u);
}

// fn os  args=1 vars=3 closure=2 cpool=0 bc=99B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n
// closure: ls, ss
function {
  e = ...0;
  let n;
  let t;
  t = undefined;
  n = -1;
  n = (n ++);
  if (!(((n ++) < e.length))) goto L_50;
  ls(e[n]);
  if (!(e[n])) goto L_4d;
  if (!((undefined === t))) goto L_3a;
  goto L_49;
  // [栈深重同步 1 -> 0]
  t = ((t + "/") + e[n]);
  ((t + "/") + e[n]);
  goto L_e;
  if (!((undefined === t))) goto L_5d;
  return ".";
  return ss(t);
}

// fn ss  args=1 vars=3 closure=2 cpool=0 bc=178B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n
// closure: ls, as
function {
  let n;
  let t;
  ls(e);
  t = (47 === e.codePointAt(0));
  n = as(e, !t);
  if (((0 !== n.length))) goto L_56;
  if ((t)) goto L_56;
  n = ".";
  ".";
  if (!((n.length > 0))) goto L_9e;
  if (!((47 === e.codePointAt((e.length - 1))))) goto L_9e;
  n = (n + "/");
  (n + "/");
  if (!(t)) goto L_ae;
  return ("/" + n);
  return n;
}

// fn as  args=2 vars=9 closure=0 cpool=0 bc=792B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s, a
function {
  let a;
  let s;
  let o;
  let i;
  let r;
  let u;
  let n;
  n = undefined;
  u = undefined;
  r = "";
  i = 0;
  o = -1;
  s = 0;
  a = -1;
  a = (a ++);
  if (!(((a ++) <= e.length))) goto L_314;
  if (!((a < e.length))) goto L_6d;
  n = e.codePointAt(a);
  e.codePointAt(a);
  goto L_7f;
  if (((47 === n))) goto L_314;
  n = 47;
  47;
  if (!((47 === n))) goto L_2f3;
  if (((o === (a - 1)))) goto L_9c;
  if (((1 === s))) goto L_2e2;
  if (!((o !== (a - 1)))) goto L_25d;
  if (!((2 === s))) goto L_25d;
  if (((r.length < 2))) goto L_130;
  if (((2 !== i))) goto L_130;
  if (((46 !== r.codePointAt((r.length - 1))))) goto L_130;
  if (!((46 !== r.codePointAt((r.length - 2))))) goto L_232;
  if (!((r.length > 2))) goto L_20d;
  u = r.lastIndexOf("/");
  r.lastIndexOf("/");
  if (!((u !== (r.length - 1)))) goto L_232;
  if (!((u < 0))) goto L_194;
  r = "";
  "";
  i = 0;
  goto L_1fb;
  // [栈深重同步 1 -> 0]
  r = r.slice(0, u);
  r.slice(0, u);
  i = ((r.length - 1) - r.lastIndexOf("/"));
  ((r.length - 1) - r.lastIndexOf("/"));
  o = a;
  a;
  s = 0;
  0;
  goto L_26;
  if (!((r.length > 0))) goto L_232;
  r = "";
  "";
  i = 0;
  0;
  o = a;
  a;
  s = 0;
  0;
  goto L_26;
  if (!(t)) goto L_259;
  if (!((r.length > 0))) goto L_24a;
  goto L_24f;
  // [栈深重同步 1 -> 0]
  r = "..";
  "..";
  i = 2;
  2;
  goto L_2e2;
  if (!((r.length > 0))) goto L_2a2;
  r = (r + ("/" + e.slice((o + 1), a)));
  goto L_2d3;
  // [栈深重同步 1 -> 0]
  r = e.slice((o + 1), a);
  e.slice((o + 1), a);
  i = ((a - o) - 1);
  ((a - o) - 1);
  o = a;
  a;
  s = 0;
  0;
  goto L_26;
  if (!((46 === n))) goto L_30b;
  if (!((s > -1))) goto L_30b;
  s = <s_new>;
  goto L_310;
  // [栈深重同步 1 -> 0]
  s = -1;
  -1;
  goto L_26;
  return r;
}

// fn ls  args=1 vars=1 closure=0 cpool=0 bc=69B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!(("string" != typeof e))) goto L_44;
  throw new TypeError(("Path must be a string. Received " + JSON.stringify(e)));
  return;
}

// fn Ds  args=0 vars=0 closure=0 cpool=0 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return "/";
}

// fn fs  args=1 vars=1 closure=0 cpool=0 bc=167B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!((null !== e))) goto L_a4;
  if (!(("object" == typeof e))) goto L_a4;
  if (!(("href" in e))) goto L_a4;
  if (!(e.href)) goto L_a4;
  if (!(("protocol" in e))) goto L_a4;
  if (!(e.protocol)) goto L_a4;
  return Boolean((undefined === e.auth));   // tail call
}

// fn hs  args=1 vars=3 closure=2 cpool=0 bc=162B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, e#1
// closure: fs, ds
function {
  if (!(("string" == typeof e))) goto L_17;
  e = new URL(e);
  goto L_4c;
  if (!(!fs(e))) goto L_4c;
  let t;
  t = new TypeError((("The "path" argument must be of type string or an instance of URL. Received `" + e) + "`"));
  t.code = "ERR_INVALID_ARG_TYPE";
  throw t;
  if (!(("file:" !== e.protocol))) goto L_9d;
  let e#1;
  e#1 = new TypeError("The URL must be of scheme file");
  e#1.code = "ERR_INVALID_URL_SCHEME";
  throw e#1;
  return ds(e);   // tail call
}

// fn ds  args=1 vars=6 closure=0 cpool=0 bc=354B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: e#1, t, n, e#2, e#3
function {
  let n;
  let t;
  if (!(("" !== e.hostname))) goto L_53;
  let e#1;
  e#1 = new TypeError("File URL host must be "localhost" or empty on darwin");
  e#1.code = "ERR_INVALID_FILE_URL_HOST";
  throw e#1;
  t = e.pathname;
  n = -1;
  n = (n ++);
  if (!(((n ++) < t.length))) goto L_157;
  if (!((37 === t.codePointAt(n)))) goto L_78;
  if (!((50 === t.codePointAt((n + 1))))) goto L_78;
  let e#2;
  e#2 = t.codePointAt((n + 2));
  if (((70 === e#2))) goto L_12a;
  if (!((102 === e#2))) goto L_78;
  let e#3;
  e#3 = new TypeError("File URL path must not include encoded / characters");
  e#3.code = "ERR_INVALID_FILE_URL_PATH";
  throw e#3;
  return decodeURIComponent(t);   // tail call
}

// fn <atom:0>  args=1 vars=6 closure=5 cpool=0 bc=513B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, e#1, this
// closure: <class_fields_init>, fs, Cs, cs, ps
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let u;
  let n;
  let t;
  t = undefined;
  if (!(e)) goto L_4a;
  if (!(fs(e))) goto L_2d;
  goto L_4b;
  // [栈深重同步 1 -> 0]
  if ((("string" == typeof e))) goto L_3c;
  if (!(Cs(e))) goto L_47;
  goto L_4b;
  // [栈深重同步 1 -> 0]
  goto L_4b;
  // [栈深重同步 1 -> 0]
  t = {};
  {};
  if (!(("cwd" in t))) goto L_60;
  goto L_85;
  // [栈深重同步 2 -> 1]
  this.cwd = cs.cwd();
  this.data = {};
  this.history = [];
  this.messages = [];
  this.value;
  this.map;
  this.result;
  this.stored;
  n = undefined;
  u = -1;
  u = (u ++);
  if (!(((u ++) < ps.length))) goto L_1b5;
  let e#1;
  e#1 = ps[u];
  if (!((e#1 in t))) goto L_1b2;
  if (!((undefined !== t[e#1]))) goto L_1b2;
  if (!((null !== t[e#1]))) goto L_1b2;
  if (!(("history" === e#1))) goto L_1a9;
  // append([], 0, t[e#1])
  t[e#1];
  goto L_1b0;
  // [栈深重同步 3 -> 2]
  this[e#1] = t[e#1];
  t[e#1];
  goto L_14a;
  for (const n of t) {
    if ((ps.includes(n))) goto L_1fb;
    this[n] = t[n];
    t[n];
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=119B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
// closure: ns
function {
  this = this;
  if (!(("string" == typeof this.path))) goto L_75;
  return ns.basename(this.path);
  return undefined;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=108B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: gs, ms, ns
function {
  this = this;
  gs(e, "basename");
  ms(e, "basename");
  if ((this.dirname)) goto L_5e;
  this.path = ns.join("", e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=119B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
// closure: ns
function {
  this = this;
  if (!(("string" == typeof this.path))) goto L_75;
  return ns.dirname(this.path);
  return undefined;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=132B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: Es, ns
function {
  this = this;
  Es(this.basename, "dirname");
  if ((e)) goto L_55;
  this.path = ns.join("", this.basename);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=119B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
// closure: ns
function {
  this = this;
  if (!(("string" == typeof this.path))) goto L_75;
  return ns.extname(this.path);
  return undefined;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=297B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: ms, Es, ns
function {
  this = this;
  ms(e, "extname");
  Es(this.dirname, "extname");
  if (!(e)) goto L_ae;
  if (!((46 !== e.codePointAt(0)))) goto L_72;
  throw new Error("`extname` must start with `.`");
  if (!(e.includes(".", 1))) goto L_ae;
  throw new Error("`extname` cannot contain multiple dots");
  if ((e)) goto L_11b;
  this.path = ns.join(this.dirname, (this.stem + ""));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
function {
  this = this;
  return this.history[(this.history.length - 1)];
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=135B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: fs, hs, gs
function {
  this = this;
  if (!(fs(e))) goto L_d;
  e = hs(e);
  hs(e);
  gs(e, "path");
  if (!((this.path !== e))) goto L_86;
  this.history.push(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=153B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
// closure: ns
function {
  this = this;
  if (!(("string" == typeof this.path))) goto L_97;
  return ns.basename(this.path, this.extname);
  return undefined;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=148B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: gs, ms, ns
function {
  this = this;
  gs(e, "stem");
  ms(e, "stem");
  if ((this.dirname)) goto L_5e;
  if ((this.extname)) goto L_86;
  this.path = ns.join("", (e + ""));
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=64B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, this
function {
  this = this;
  let u;
  u = this.message(e, t, n);
  u.fatal = true;
  throw u;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=63B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, this
function {
  this = this;
  let u;
  u = this.message(e, t, n);
  u.fatal = undefined;
  return u;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=284B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, this
// closure: ts
function {
  this = this;
  let u;
  u = new ts(e, t, n);
  if (!(this.path)) goto L_bf;
  u.name = ((this.path + ":") + u.name);
  u.file = this.path;
  this.path;
  u.fatal = false;
  this.messages.push(u);
  return u;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=205B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  if (!((undefined === this.value))) goto L_2a;
  return "";
  if (!(("string" == typeof this.value))) goto L_78;
  return this.value;
  if ((e)) goto L_84;
  return new TextDecoder(undefined).decode(this.value);   // tail call
}

// fn ms  args=2 vars=2 closure=1 cpool=0 bc=144B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: ns
function {
  if (!(e)) goto L_8f;
  if (!(e.includes(ns.sep))) goto L_8f;
  throw new Error((((("`" + t) + "` cannot be a path: did not expect `") + ns.sep) + "`"));
  return;
}

// fn gs  args=2 vars=2 closure=0 cpool=0 bc=28B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  if (!(!e)) goto L_1b;
  throw new Error((("`" + t) + "` cannot be empty"));
  return;
}

// fn Es  args=2 vars=2 closure=0 cpool=0 bc=28B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  if (!(!e)) goto L_1b;
  throw new Error((("Setting `" + t) + "` requires `path` to be set too"));
  return;
}

// fn Cs  args=1 vars=1 closure=0 cpool=0 bc=43B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!(e)) goto L_28;
  if (!(("object" == typeof e))) goto L_28;
  if (!(("byteLength" in e))) goto L_28;
  return Boolean(("byteOffset" in e));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=46B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: arguments
// closure: n, u
function {
  arguments = <special_object 1>;
  return n.apply(u, arguments);   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=1 bc=145B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, this
function {
  this = this;
  let u;
  let n;
  let t;
  t = this.constructor.prototype;
  n = t[e];
  u = function <atom:0>;
  Object.setPrototypeOf(u, t);
  return u;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=164B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, Xo
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("copy");
  if (!(<class_fields_init>)) goto L_26;
  <class_fields_init>.call(this);
  new new.target("copy");
  this.Compiler = undefined;
  this.Parser = undefined;
  this.attachers = [];
  this.compiler = undefined;
  this.freezeIndex = -1;
  this.frozen = undefined;
  this.namespace = {};
  this.parser = undefined;
  this.transformers = Xo();
  return this;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=275B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, n, this
// closure: _Processor, Yo
function {
  this = this;
  let t;
  let e;
  e = new _Processor();
  t = -1;
  t = (t ++);
  if (!(((t ++) < this.attachers.length))) goto L_9f;
  let n;
  n = this.attachers[t];
  // append([], 0, n)
  n;
  e.use.apply(e, []);
  goto L_12;
  e.data(Yo.default(true, {}, this.namespace));
  return e;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=316B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: arguments, this
// closure: Bs, xs
function {
  this = this;
  arguments = <special_object 0>;
  if (!(("string" == typeof e))) goto L_df;
  if (!((2 === arguments.length))) goto L_69;
  Bs("data", this.frozen);
  this.namespace[e] = t;
  return this;
  if (!(xs.call(this.namespace, e))) goto L_d9;
  if ((this.namespace[e])) goto L_13b;
  return undefined;
  if (!(e)) goto L_119;
  Bs("data", this.frozen);
  this.namespace = e;
  return this;
  return this.namespace;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=492B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, t, n, u, this
function {
  this = this;
  let e;
  if (!(this.frozen)) goto L_2e;
  return this;
  e = this;
  this.freezeIndex = (this.freezeIndex ++);
  if (!(((this.freezeIndex ++) < this.attachers.length))) goto L_1ab;
  let u;
  let n;
  let t;
  if (((undefined === undefined))) goto L_ae;
  const _it1 = undefined;
  <done(_it1)>;
  t = <value(_it1)>;
  if ((<done(<catch>)>)) goto L_a8;
  [][0] = <value(<catch>)>;
  goto L_a0;
  // [栈深重同步 4 -> 6]
  <?>;
  <?>;
  n = <value(_it1)>;
  goto L_f8;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_97;
  // [栈深重同步 1 -> 0]
  if (((false === n[0]))) goto L_31;
  if (!((true === n[0]))) goto L_119;
  n[0] = undefined;
  undefined;
  // append([e], 1, n)
  n;
  u = t.call.apply(t, [e]);
  if (!(("function" == typeof u))) goto L_1a7;
  this.transformers.use(u);
  goto L_31;
  this.frozen = true;
  this.freezeIndex = Number.POSITIVE_INFINITY;
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=152B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
// closure: Ts, ys
function {
  this = this;
  let n;
  let t;
  this.freeze();
  t = Ts(e);
  if ((this.parser)) goto L_7a;
  n = this.Parser;
  ys("parse", n);
  return n(String(t), t);   // tail call
}

// fn s  args=2 vars=2 closure=4 cpool=0 bc=36B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, n
// closure: r, u, qu, t
function {
  if ((e)) goto L_7;
  if (!(!n)) goto L_e;
  goto L_23;
  // [栈深重同步 1 -> 0]
  if (!(u)) goto L_16;
  goto L_23;
  // [栈深重同步 1 -> 0]
  qu(t, "`done` is defined if `resolve` is not");
  t(undefined, n);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=3 cpool=0 bc=115B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, u
// locals: r, i
// closure: s, n, qs
function {
  let i;
  let r;
  if ((e)) goto L_13;
  if ((!t)) goto L_13;
  if (!(!u)) goto L_1a;
  return s(e);   // tail call
  r = t;
  i = n.stringify(r, u);
  if (!(qs(i))) goto L_5f;
  u.value = i;
  goto L_6d;
  // [栈深重同步 1 -> 0]
  u.result = i;
  i;
  s(e, u);
  return;
}

// fn u  args=2 vars=5 closure=6 cpool=2 bc=108B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u, r
// locals: i, o, s
// closure: qu, t, n, qs, Ts, e
function {
  s = function s;
  let o;
  let i;
  i = Ts(e);
  o = n.parse(i);
  n.run(o, i, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=5 cpool=1 bc=229B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, this
// closure: qu, qs, Ts, ys, bs
function {
  this = this;
  u = function u;
  let n;
  n = this;
  this.freeze();
  if ((this.parser)) goto L_7e;
  ys("process", this.Parser);
  if ((this.compiler)) goto L_d0;
  bs("process", this.Compiler);
  if (!(t)) goto L_da;
  return u(undefined, t);
  return new Promise(u);
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=17B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, u
// closure: n, Zo, t
function {
  n = true;
  true;
  Zo(e);
  t = u;
  u;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=1 bc=285B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
// closure: Zo, ys, bs, Ss, qu
function {
  this = this;
  let n;
  let t;
  t = undefined;
  n = false;
  this.freeze();
  if ((this.parser)) goto L_81;
  ys("processSync", this.Parser);
  if ((this.compiler)) goto L_d1;
  bs("processSync", this.Compiler);
  this.process(e, function <atom:0>);
  Ss("processSync", "process", n);
  qu(t, "we either bailed on an error or have a tree");
  return t;
}

// fn <atom:0>  args=3 vars=4 closure=5 cpool=0 bc=49B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t, u, o
// locals: s
// closure: e, i, r, qu, n
function {
  let s;
  if ((u)) goto L_9;
  s = e;
  if (!(t)) goto L_12;
  goto L_30;
  // [栈深重同步 1 -> 0]
  if (!(r)) goto L_1c;
  goto L_30;
  // [栈深重同步 1 -> 0]
  qu(n, "`done` is defined if `resolve` is not");
  n(undefined, s, o);
  return;
}

// fn r  args=2 vars=3 closure=6 cpool=1 bc=71B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: r, i
// locals: o
// closure: e, qu, n, t, Ts, u
function {
  let o;
  qu(("function" != typeof t), "`file` can’t be a `done` anymore, we checked");
  o = Ts(t);
  u.run(e, o, function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=3 cpool=1 bc=126B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, this
// closure: qu, Ts, ws
function {
  this = this;
  r = function r;
  let u;
  ws(e);
  this.freeze();
  u = this.transformers;
  if ((n)) goto L_6a;
  if ((("function" != typeof t))) goto L_6a;
  n = t;
  t = undefined;
  undefined;
  if (!(n)) goto L_73;
  return r(undefined, n);
  return new Promise(r);
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=17B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: Zo, n, u
function {
  Zo(e);
  n = t;
  t;
  u = true;
  true;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=1 bc=86B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, this
// closure: Zo, Ss, qu
function {
  this = this;
  let u;
  let n;
  n = undefined;
  u = false;
  this.run(e, t, function <atom:0>);
  Ss("runSync", "run", u);
  qu(n, "we either bailed on an error or have a tree");
  return n;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=0 bc=148B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, this
// closure: Ts, bs, ws
function {
  this = this;
  let u;
  let n;
  this.freeze();
  n = Ts(t);
  if ((this.compiler)) goto L_7a;
  u = this.Compiler;
  bs("stringify", u);
  ws(e);
  return u(e, n);   // tail call
}

// fn r  args=1 vars=3 closure=2 cpool=0 bc=148B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n
// closure: s, i
function {
  if (!(("function" == typeof e))) goto L_12;
  s(e, []);
  return;
  if (!(("object" != typeof e))) goto L_33;
  throw new TypeError((("Expected usable value, not `" + e) + "`"));
  if (!(Array.isArray(e))) goto L_8f;
  let n;
  let t;
  if (((undefined === undefined))) goto L_81;
  const _it1 = undefined;
  <done(_it1)>;
  t = <value(_it1)>;
  if ((<done(<catch>)>)) goto L_7b;
  [][0] = <value(<catch>)>;
  goto L_73;
  // [栈深重同步 4 -> 6]
  <?>;
  <?>;
  n = <value(_it1)>;
  goto L_85;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_6a;
  // [栈深重同步 1 -> 0]
  s(t, n);
  return;
  i(e);
  return;
}

// fn i  args=1 vars=1 closure=3 cpool=0 bc=231B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: o, u, Yo
function {
  if (!(!("plugins" in e))) goto L_23;
  if (!(!("settings" in e))) goto L_23;
  throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
  o(e.plugins);
  if (!(e.settings)) goto L_e6;
  u.settings = Yo.default(true, u.settings, e.settings);
  Yo.default(true, u.settings, e.settings);
  return;
}

// fn o  args=1 vars=2 closure=1 cpool=0 bc=102B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
// closure: r
function {
  let t;
  t = -1;
  if (((null == e))) goto L_65;
  if (!(!Array.isArray(e))) goto L_4e;
  throw new TypeError((("Expected a list of plugins, not `" + e) + "`"));
  t = (t ++);
  if (!(((t ++) < e.length))) goto L_65;
  r(e[t]);
  goto L_4e;
  return;
}

// fn s  args=2 vars=7 closure=3 cpool=0 bc=253B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: u, r, u#1, i, o
// closure: n, Ko, Yo
function {
  let r;
  let u;
  u = -1;
  r = -1;
  u = (u ++);
  if (!(((u ++) < n.length))) goto L_30;
  if (!((n[u][0] === e))) goto L_a;
  r = u;
  u;
  goto L_30;
  if (!((-1 === r))) goto L_68;
  // append([e], 1, t)
  t;
  n.push([e]);
  return;
  if (!((t.length > 0))) goto L_fc;
  let o;
  let i;
  let u#1;
  if (((undefined === undefined))) goto L_96;
  const _it1 = undefined;
  <done(_it1)>;
  u#1 = <value(_it1)>;
  if ((<done(<catch>)>)) goto L_90;
  [][0] = <value(<catch>)>;
  goto L_88;
  // [栈深重同步 4 -> 6]
  <?>;
  <?>;
  i = <value(_it1)>;
  goto L_9a;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_7f;
  // [栈深重同步 1 -> 0]
  o = n[r][1];
  if (!(Ko(o))) goto L_e6;
  if (!(Ko(u#1))) goto L_e6;
  u#1 = Yo.default(true, o, u#1);
  Yo.default(true, o, u#1);
  // append([e, u#1], 2, i)
  i;
  n[r] = [e, u#1];
  return;
}

// fn <atom:0>  args=2 vars=9 closure=3 cpool=4 bc=255B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s, this
// closure: Yo, Ko, Bs
function {
  this = this;
  t = ...1;
  r = function r;
  i = function i;
  o = function o;
  s = function s;
  let u;
  let n;
  n = this.attachers;
  u = this.namespace;
  Bs("use", this.frozen);
  if (((null == e))) goto L_fc;
  if (!(("function" == typeof e))) goto L_a5;
  s(e, t);
  goto L_fc;
  if (!(("object" != typeof e))) goto L_c6;
  throw new TypeError((("Expected usable value, not `" + e) + "`"));
  if (!(Array.isArray(e))) goto L_f8;
  goto L_fb;
  // [栈深重同步 1 -> 0]
  i(e);
  return this;
}

// fn ys  args=2 vars=2 closure=0 cpool=0 bc=34B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  if (!(("function" != typeof t))) goto L_21;
  throw new TypeError((("Cannot `" + e) + "` without `parser`"));
  return;
}

// fn bs  args=2 vars=2 closure=0 cpool=0 bc=34B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  if (!(("function" != typeof t))) goto L_21;
  throw new TypeError((("Cannot `" + e) + "` without `compiler`"));
  return;
}

// fn Bs  args=2 vars=2 closure=0 cpool=0 bc=27B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  if (!(t)) goto L_1a;
  throw new Error((("Cannot call `" + e) + "` on a frozen processor.
Create a new processor first, by calling it: use `processor()` instead of `processor`."));
  return;
}

// fn ws  args=1 vars=1 closure=1 cpool=0 bc=75B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Ko
function {
  if ((!Ko(e))) goto L_31;
  if (!(("string" != typeof e.type))) goto L_4a;
  throw new TypeError((("Expected node, got `" + e) + "`"));
  return;
}

// fn Ss  args=3 vars=3 closure=0 cpool=0 bc=36B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
function {
  if (!(!n)) goto L_23;
  throw new Error((((("`" + e) + "` finished async. Use `") + t) + "` instead"));
  return;
}

// fn Ts  args=1 vars=1 closure=2 cpool=0 bc=14B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Is, Fs
function {
  if (!(Is(e))) goto L_7;
  return e;
  return new Fs(e);
}

// fn Is  args=1 vars=1 closure=0 cpool=0 bc=43B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!(e)) goto L_28;
  if (!(("object" == typeof e))) goto L_28;
  if (!(("message" in e))) goto L_28;
  return Boolean(("messages" in e));   // tail call
}

// fn qs  args=1 vars=1 closure=1 cpool=0 bc=16B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Ms
function {
  if ((("string" == typeof e))) goto L_f;
  return Ms(e);
}

// fn Ms  args=1 vars=1 closure=0 cpool=0 bc=43B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!(e)) goto L_28;
  if (!(("object" == typeof e))) goto L_28;
  if (!(("byteLength" in e))) goto L_28;
  return Boolean(("byteOffset" in e));   // tail call
}

// fn Rs  args=1 vars=1 closure=0 cpool=0 bc=63B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!((null !== e))) goto L_3e;
  if (!(("object" == typeof e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if ((("number" != typeof e))) goto L_45;
  if ((!Number.isInteger(e))) goto L_45;
  if (((e < 0))) goto L_45;
  return (e > 6);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return [e.id, e];
}

// fn _s  args=2 vars=7 closure=8 cpool=2 bc=2592B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, e#1, t#1, r
// closure: zs, Rs, Os, Hs, Vs, Us, js, Ns
function {
  let n;
  if (!(!Array.isArray(e))) goto L_36;
  return "The document contains an invalid Live Notes list";
  if (!((e.length > zs))) goto L_42;
  return "A note can contain at most 32 Live Notes";
  n = new Set();
  let u;
  for (const u of e) {
    let r;
    let e#1;
    if ((!Rs(u))) goto L_23b;
    if ((("string" != typeof u.id))) goto L_23b;
    if ((!Os.test(u.id))) goto L_23b;
    if ((n.has(u.id))) goto L_23b;
    if ((("string" != typeof u.prompt))) goto L_23b;
    if (((0 === u.prompt.trim().length))) goto L_23b;
    if (((Array.from(u.prompt).length > 10000))) goto L_23b;
    if (!(!Rs(u.schedule))) goto L_247;
    return "The document contains an invalid Live Note";
    // [栈深重同步 0 -> 3]
    n.add(u.id);
    e#1 = u.schedule;
    if (!(t)) goto L_303;
    if (!(("string" == typeof e#1.time))) goto L_303;
    let t#1;
    t#1 = Hs(e#1);
    if (!((undefined !== t#1))) continue;
    return t#1;
    // [栈深重同步 0 -> 3]
    if ((!Rs(e#1.time))) goto L_466;
    if ((!Vs(e#1.time.localTime))) goto L_466;
    if ((!Us(e#1.time.timeZone))) goto L_466;
    if (!((undefined !== e#1.time.localDate))) goto L_472;
    if (!(!js(e#1.time.localDate))) goto L_472;
    return "The document contains an invalid Live Note time or time zone";
    // [栈深重同步 0 -> 3]
    if (!((undefined === e#1.repeat))) goto L_4f3;
    if (!(!js(e#1.time.localDate))) continue;
    return "Nonrepeating Live Notes require a local date";
    // [栈深重同步 0 -> 3]
    r = e#1.repeat;
    if ((!Rs(r))) goto L_54e;
    if (!(("boolean" != typeof r.isDaily))) goto L_55a;
    return "The document contains an invalid Live Note repeat";
    // [栈深重同步 0 -> 3]
    if (!((undefined !== r.weekly))) goto L_6d6;
    if ((!Array.isArray(r.weekly))) goto L_6ca;
    if (((0 === r.weekly.length))) goto L_6ca;
    if (((new Set(r.weekly).size !== r.weekly.length))) goto L_6ca;
    if (!(r.weekly.some(function <atom:0>))) goto L_6d6;
    return "Weekly Live Notes require unique days from Monday 0 through Sunday 6";
    // [栈深重同步 0 -> 3]
    if (!((undefined !== r.monthly))) goto L_7e2;
    if ((("number" != typeof r.monthly))) goto L_7d6;
    if ((!Number.isInteger(r.monthly))) goto L_7d6;
    if (((r.monthly < 1))) goto L_7d6;
    if (!((r.monthly > 31))) goto L_7e2;
    return "Monthly Live Notes require a day from 1 through 31";
    // [栈深重同步 0 -> 3]
    if (!((((Number(r.isDaily) + Number((undefined !== r.weekly))) + Number((undefined !== r.monthly))) !== 1))) goto L_874;
    return "Live Notes require exactly one repeat cadence";
    // [栈深重同步 0 -> 3]
    if (((undefined === r.endAt))) goto L_9b4;
    if (!(Rs(r.endAt))) goto L_9b4;
    if (!(Vs(r.endAt.localTime))) goto L_9b4;
    if (!(js(r.endAt.localDate))) goto L_9b4;
    if (!(!Us(r.endAt.timeZone))) continue;
    return "The document contains an invalid Live Note end time";
    // [栈深重同步 0 -> 3]
  }
  return Ns(Object.fromEntries(e.map(function <atom:0>)));   // tail call
}

// fn Ns  args=1 vars=8 closure=3 cpool=0 bc=636B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, e#1, t#1, u, e#2, r
// closure: Ps, Ls, Rs
function {
  let n;
  let t;
  t = 0;
  n = [e];
  if (!((0 !== n.length))) goto L_27b;
  let e#1;
  e#1 = n.pop();
  if (!((null == e#1))) goto L_57;
  t = (t + 4);
  (t + 4);
  goto L_26b;
  if (!(("string" == typeof e#1))) goto L_74;
  t = (t + Ps(e#1));
  (t + Ps(e#1));
  goto L_26b;
  if (!(("number" == typeof e#1))) goto L_bc;
  if (!(Number.isFinite(e#1))) goto L_bc;
  t = (t + 32);
  (t + 32);
  goto L_26b;
  if (!(("boolean" == typeof e#1))) goto L_dd;
  if (!(e#1)) goto L_d3;
  goto L_d4;
  // [栈深重同步 2 -> 1]
  t = (t + 5);
  (t + 5);
  goto L_26b;
  if (!(Array.isArray(e#1))) goto L_191;
  t = (t + (2 + Math.max(0, (e#1.length - 1))));
  (t + (2 + Math.max(0, (e#1.length - 1))));
  if (!((t <= Ls))) goto L_26b;
  let t#1;
  for (const t#1 of e#1) {
    n.push(t#1);
  }
  goto L_26b;
  if (!(!Rs(e#1))) goto L_19f;
  return "Live Note metadata must contain JSON values";
  let u;
  u = Object.entries(e#1);
  t = (t + (2 + Math.max(0, (u.length - 1))));
  (t + (2 + Math.max(0, (u.length - 1))));
  let r;
  let e#2;
  const _it2 = u;
  goto L_265;
  const _it3 = <value(_it2)>;
  <done(_it3)>;
  e#2 = <value(_it3)>;
  <done(_it3)>;
  r = <value(_it3)>;
  t = (t + (Ps(e#2) + 1));
  (t + (Ps(e#2) + 1));
  if (((t > Ls))) goto L_26a;
  n.push(r);
  if (!(<done(_it2)>)) goto L_217;
  <value(_it2)>;
  if (!((t > Ls))) goto L_d;
  return "Live Note metadata exceeds the 256 KiB limit";
  return;
}

// fn Ps  args=1 vars=4 closure=1 cpool=0 bc=189B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u
// closure: Ls
function {
  let t;
  t = 2;
  let n;
  n = 0;
  if (!((n < e.length))) goto L_b9;
  let u;
  u = e.charCodeAt(n);
  if (((34 === u))) goto L_86;
  if (((92 === u))) goto L_86;
  if (((8 === u))) goto L_86;
  if (((9 === u))) goto L_86;
  if (((10 === u))) goto L_86;
  if (((12 === u))) goto L_86;
  if (!((13 === u))) goto L_8b;
  goto L_a1;
  // [栈深重同步 2 -> 1]
  if (((u < 32))) goto L_9b;
  if (!((u >= 127))) goto L_a0;
  goto L_a1;
  // [栈深重同步 2 -> 1]
  t = (t + 1);
  (t + 1);
  if (((t > Ls))) goto L_b9;
  n = <n_new>;
  (n++);
  goto L_a;
  return t;
}

// fn js  args=1 vars=5 closure=0 cpool=2 bc=314B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r
function {
  let r;
  let u;
  let n;
  if ((("string" != typeof e))) goto L_40;
  if (!(!new RegExp("^\\d{4}-\\d{2}-\\d{2}$").test(e))) goto L_45;
  return false;
  if (((undefined === undefined))) goto L_6c;
  const _it1 = undefined;
  <done(_it1)>;
  if (!((<value(_it1)> === undefined))) goto L_54;
  <value(_it1)>;
  n = 0;
  <done(_it1)>;
  if (!((<value(_it1)> === undefined))) goto L_5e;
  <value(_it1)>;
  u = 0;
  <done(_it1)>;
  if (!((<value(_it1)> === undefined))) goto L_68;
  <value(_it1)>;
  r = 0;
  goto L_c2;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_4a;
  // [栈深重同步 1 -> 0]
  if (!((n >= 1))) goto L_139;
  if (!((u >= 1))) goto L_139;
  if (!((u <= 12))) goto L_139;
  if (!((r >= 1))) goto L_139;
  if (!(((n % 4) == 0))) goto L_111;
  if ((((n % 100) != 0))) goto L_10b;
  if (!(((n % 400) == 0))) goto L_111;
  goto L_113;
  // [栈深重同步 4 -> 3]
  t = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][(u - 1)];
  if (!((null != [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][(u - 1)]))) goto L_137;
  goto L_138;
  // [栈深重同步 2 -> 1]
  return (r <= 0);
}

// fn Vs  args=1 vars=1 closure=0 cpool=2 bc=55B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!(("string" == typeof e))) goto L_36;
  return new RegExp("^(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d)?$").test(e);
}

// fn Us  args=1 vars=1 closure=0 cpool=2 bc=64B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!(("string" == typeof e))) goto L_3f;
  if (!((e.length <= 100))) goto L_3f;
  return new RegExp("^[A-Za-z0-9_+-]+(?:\\/[A-Za-z0-9_+-]+)*$").test(e);
}

// fn Hs  args=1 vars=1 closure=2 cpool=2 bc=986B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Us, js
function {
  if ((("string" != typeof e.time))) goto L_a2;
  if ((!new RegExp("^(?:[01]\\d|2[0-3]):[0-5]\\d$").test(e.time))) goto L_a2;
  if (!(!Us(e.timeZone))) goto L_aa;
  return "The document contains an invalid Live Note time or time zone";
  if (!(("daily" === e.frequency))) goto L_12b;
  if (((undefined !== e.weekday))) goto L_120;
  if (!((undefined !== e.dayOfMonth))) goto L_384;
  return "Daily Live Notes cannot specify a weekday or month day";
  if (!(("weekly" === e.frequency))) goto L_257;
  if ((("number" != typeof e.weekday))) goto L_24c;
  if ((!Number.isInteger(e.weekday))) goto L_24c;
  if (((e.weekday < 0))) goto L_24c;
  if (((e.weekday > 6))) goto L_24c;
  if (!((undefined !== e.dayOfMonth))) goto L_384;
  return "Weekly Live Notes require a weekday from Sunday 0 through Saturday 6";
  if (!(("monthly" !== e.frequency))) goto L_287;
  return "The document contains an invalid Live Note frequency";
  if ((("number" != typeof e.dayOfMonth))) goto L_37c;
  if ((!Number.isInteger(e.dayOfMonth))) goto L_37c;
  if (((e.dayOfMonth < 1))) goto L_37c;
  if (((e.dayOfMonth > 31))) goto L_37c;
  if (!((undefined !== e.weekday))) goto L_384;
  return "Monthly Live Notes require a day from 1 through 31";
  if (((undefined === e.endDate))) goto L_3d0;
  if (!(js(e.endDate))) goto L_3d4;
  return undefined;
  return "The document contains an invalid Live Note end date";
}

// fn Ys  args=1 vars=3 closure=0 cpool=0 bc=123B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, t#1
function {
  try { // catch -> L_71
  let t;
  t = new URL(e, "https://collaborative-editor.invalid").protocol;
  if ((("http:" === t))) goto L_69;
  if ((("https:" === t))) goto L_69;
  if ((("mailto:" === t))) goto L_69;
  if (!(("tel:" === t))) goto L_6e;
  goto L_6f;
  // [栈深重同步 1 -> 0]
  return null;
  // [栈深重同步 0 -> 1]
  t#1 = <?>;
  try { // catch -> L_7a
  return null;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["p", 0];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return {tag: "h".concat(e), attrs: {level: e}};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=113B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return ["h".concat(e.attrs.level), 0];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["blockquote", 0];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=18B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["pre", ["code", 0]];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=9B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["hr"];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=9B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["br"];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["ul", 0];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["ul", 0];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=64B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  t = e.getAttribute("start");
  if (!((null != e.getAttribute("start")))) goto L_38;
  goto L_39;
  // [栈深重同步 3 -> 2]
  return {startingNumber: Number(1)};
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=167B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n
function {
  t = e.attrs.startingNumber;
  if (!((null != e.attrs.startingNumber))) goto L_52;
  goto L_95;
  // [栈深重同步 4 -> 3]
  n = e.attrs.order;
  if (!((null != e.attrs.order))) goto L_9c;
  goto L_9d;
  // [栈深重同步 3 -> 2]
  return ["ol", {start: 1}, 0];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["li", 0];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["li", 0];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=97B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
function {
  t = e.attrs.checked;
  if (!((null != e.attrs.checked))) goto L_56;
  return ["li", {data-checked: String(t)}, 0];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=18B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["table", ["tbody", 0]];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["tr", 0];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=227B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return ["td", {colspan: e.attrs.colspan, rowspan: e.attrs.rowspan, align: e.attrs.align}, 0];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["strong", 0];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["strong", 0];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["em", 0];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["em", 0];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["code", 0];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return ["s", 0];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return {href: e.getAttribute("href"), title: e.getAttribute("title")};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=157B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Ys
function {
  return ["a", {href: Ys(e.attrs.href), title: e.attrs.title}, 0];
}

// fn Ks  args=0 vars=1 closure=5 cpool=25 bc=1361B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e
// closure: Ys, $s, Js, Su, Gs
function {
  let e;
  e = {doc: {content: "block+", attrs: {theme: $s, liveNotes: $s}}, paragraph: {content: "inline*", group: "block", parseDOM: [{tag: "p"}], toDOM: function <atom:0>}, text: {group: "inline"}, heading: {attrs: {level: {default: 1}}, content: "text*", group: "block", defining: true, parseDOM: [1, 2, 3, 4, 5, 6].map(function <atom:0>), toDOM: function <atom:0>}, blockquote: {content: "block+", group: "block", defining: true, parseDOM: [{tag: "blockquote"}], toDOM: function <atom:0>}, code_block: {attrs: {lang: $s, language: $s}, content: "text*", marks: "", group: "block", code: true, defining: true, parseDOM: [{tag: "pre", preserveWhitespace: "full"}], toDOM: function <atom:0>}, horizontal_rule: {group: "block", parseDOM: [{tag: "hr"}], toDOM: function <atom:0>}, hard_break: {inline: true, group: "inline", selectable: false, parseDOM: [{tag: "br"}], toDOM: function <atom:0>}, list: {attrs: {spread: $s}, content: Js, group: "block", parseDOM: [{tag: "ul"}], toDOM: function <atom:0>}, bullet_list: {attrs: {spread: $s}, content: Js, group: "block", toDOM: function <atom:0>}, ordered_list: {attrs: {order: $s, spread: $s, startingNumber: $s}, content: Js, group: "block", parseDOM: [{tag: "ol", getAttrs: function <atom:0>}], toDOM: function <atom:0>}, list_item: {content: "paragraph block*", defining: true, toDOM: function <atom:0>}, regular_list_item: {content: "paragraph block*", defining: true, parseDOM: [{tag: "li"}], toDOM: function <atom:0>}, task_list_item: {attrs: {checked: $s}, content: "paragraph block*", defining: true, toDOM: function <atom:0>}, table: {content: "table_row+", group: "block", isolating: true, parseDOM: [{tag: "table"}], toDOM: function <atom:0>}, table_row: {content: "table_cell+", parseDOM: [{tag: "tr"}], toDOM: function <atom:0>}, table_cell: {attrs: {align: $s, colspan: $s, columnIndex: $s, rowIndex: $s, rowspan: $s}, content: "inline*", isolating: true, parseDOM: [{tag: "td"}, {tag: "th"}], toDOM: function <atom:0>}};
  return new Su({nodes: e, marks: {strong: {parseDOM: [{tag: "strong"}, {tag: "b"}], toDOM: function <atom:0>}, bold: {toDOM: function <atom:0>}, em: {parseDOM: [{tag: "em"}, {tag: "i"}], toDOM: function <atom:0>}, italic: {toDOM: function <atom:0>}, code: {code: true, parseDOM: [{tag: "code"}], toDOM: function <atom:0>}, strikethrough: {parseDOM: [{tag: "s"}, {tag: "del"}], toDOM: function <atom:0>}, link: {attrs: Gs, inclusive: false, parseDOM: [{tag: "a[href]", getAttrs: function <atom:0>}], toDOM: function <atom:0>}}});
}

// fn Xs  args=1 vars=1 closure=0 cpool=0 bc=205B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!((null !== e))) goto L_cc;
  if (!(("object" == typeof e))) goto L_cc;
  if (!(!Array.isArray(e))) goto L_cc;
  if (((Object.getPrototypeOf(e) === Object.prototype))) goto L_cc;
  return (null === Object.getPrototypeOf(e));
}

// fn ea  args=3 vars=3 closure=0 cpool=0 bc=76B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
function {
  if (((null == e))) goto L_4b;
  if (!(("number" == typeof e))) goto L_4b;
  if (!(Number.isSafeInteger(e))) goto L_4b;
  if (!((e >= t))) goto L_4b;
  return (e <= n);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: n
function {
  return !n.includes(e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=9B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return ("string" != typeof e);
}

// fn ta  args=2 vars=11 closure=4 cpool=2 bc=2600B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, e#1, e#2, t#1, n#1, t#2, n#2, u, u#1
// closure: Ws, _s, Xs, ea
function {
  let n;
  n = Ws[e];
  if (((undefined === n))) goto L_60;
  if (!(Object.keys(t).some(function <atom:0>))) goto L_68;
  return "The document contains an unsupported node attribute";
  if (!((null != t.liveNotes))) goto L_c3;
  let e#1;
  e#1 = _s(t.liveNotes, false);
  if (!((undefined !== e#1))) goto L_c3;
  return e#1;
  if (!((null != t.theme))) goto L_69f;
  let e#2;
  e#2 = t.theme;
  if ((!Xs(e#2))) goto L_1a4;
  if ((("string" != typeof e#2.id))) goto L_1a4;
  if ((("string" != typeof e#2.name))) goto L_1a4;
  if (!(!Xs(e#2.fonts))) goto L_1ac;
  return "The document contains an invalid note theme";
  let t#1;
  for (const t#1 of ["heading1", "heading2", "heading3", "heading4", "heading5", "heading6", "body"]) {
    let n#1;
    n#1 = e#2.fonts[t#1];
    if ((!Xs(n#1))) goto L_375;
    if ((("string" != typeof n#1.family))) goto L_375;
    if ((("number" != typeof n#1.weight))) goto L_375;
    if ((!Number.isFinite(n#1.weight))) goto L_375;
    if (!((null != n#1.ttfUrl))) goto L_381;
    if ((("string" != typeof n#1.ttfUrl))) goto L_375;
    if (!(!n#1.ttfUrl.startsWith("https://persistent.oaistatic.com/"))) goto L_381;
    return "The document contains an invalid note theme font";
    // [栈深重同步 0 -> 3]
    if (!((undefined !== n#1.fontSizeMultiplier))) continue;
    if ((("number" != typeof n#1.fontSizeMultiplier))) goto L_453;
    if ((!Number.isFinite(n#1.fontSizeMultiplier))) goto L_453;
    if (!((n#1.fontSizeMultiplier <= 0))) continue;
    return "The document contains an invalid note theme font size multiplier";
    // [栈深重同步 0 -> 3]
  }
  let t#2;
  for (const t#2 of ["lightColorScheme", "darkColorScheme"]) {
    let n#2;
    n#2 = e#2[t#2];
    if ((!Xs(n#2))) goto L_68a;
    if ((("string" != typeof n#2.text))) goto L_68a;
    if ((("string" != typeof n#2.background))) goto L_68a;
    if ((("string" != typeof n#2.diff))) goto L_68a;
    if ((("string" != typeof n#2.link))) goto L_68a;
    if ((("string" != typeof n#2.monospaceText))) goto L_68a;
    if ((("string" != typeof n#2.monospaceBackground))) goto L_68a;
    if ((!Array.isArray(n#2.collaborators))) goto L_68a;
    if (((0 === n#2.collaborators.length))) goto L_68a;
    if (!(n#2.collaborators.some(function <atom:0>))) continue;
    return "The document contains invalid note theme colors";
    // [栈深重同步 0 -> 3]
  }
  if (!((null != t.spread))) goto L_6f6;
  if (!(("boolean" != typeof t.spread))) goto L_6f6;
  return "The document contains an unsupported list attribute";
  if (!((null != t.lang))) goto L_74d;
  if (!(("string" != typeof t.lang))) goto L_74d;
  return "The document contains an unsupported code language";
  if (!((null != t.language))) goto L_7a4;
  if (!(("string" != typeof t.language))) goto L_7a4;
  return "The document contains an unsupported code language";
  if (!(!ea(t.level, 1, 6))) goto L_7d3;
  return "The document contains an invalid heading level";
  if ((!ea(t.order, 1, Number.MAX_SAFE_INTEGER))) goto L_86f;
  if (!(!ea(t.startingNumber, 1, Number.MAX_SAFE_INTEGER))) goto L_877;
  return "The document contains an invalid ordered-list start";
  if (!((null != t.checked))) goto L_8ce;
  if (!(("boolean" != typeof t.checked))) goto L_8ce;
  return "The document contains an unsupported checked state";
  if (!((null != t.align))) goto L_97b;
  if (!(("left" !== t.align))) goto L_97b;
  if (!(("center" !== t.align))) goto L_97b;
  if (!(("right" !== t.align))) goto L_97b;
  return "The document contains an invalid table alignment";
  let u;
  for (const u of ["colspan", "rowspan"]) {
    if (!(!ea(t[u], 1, Number.MAX_SAFE_INTEGER))) continue;
    return "The document contains an unsupported table span";
    // [栈深重同步 0 -> 3]
  }
  let u#1;
  for (const u#1 of ["columnIndex", "rowIndex"]) {
    if (!(!ea(t[u#1], 0, Number.MAX_SAFE_INTEGER))) continue;
    return "The document contains an unsupported table index";
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Zs
function {
  return !Zs.has(e);
}

// fn na  args=2 vars=3 closure=3 cpool=1 bc=408B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
// closure: Zs, Qs, Xs
function {
  if (!(!Qs.has(e))) goto L_2f;
  return "The document contains an unsupported text mark";
  if (!(!Xs(t))) goto L_3b;
  return "The document contains unsupported mark attributes";
  if (!(("link" !== e))) goto L_7b;
  if (!((0 === Object.keys(t).length))) goto L_75;
  return undefined;
  return "The document contains unsupported mark attributes";
  if ((("string" != typeof t.href))) goto L_f8;
  if (!(Object.keys(t).some(function <atom:0>))) goto L_100;
  return "The document contains an unsupported link";
  if (!((null != t.title))) goto L_157;
  if (!(("string" != typeof t.title))) goto L_157;
  return "The document contains an unsupported link title";
  let n;
  for (const n of ["disabled", "isAutolink", "isGeneratedAutolink"]) {
    if (!((null != t[n]))) continue;
    if (!(("boolean" != typeof t[n]))) continue;
    return "The document contains an unsupported link attribute";
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn ua  args=1 vars=4 closure=0 cpool=0 bc=209B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, n#1
function {
  let t;
  t = 0;
  if (!((t < e.length))) goto L_ce;
  let n;
  n = e.charCodeAt(t);
  if (!((n >= 55296))) goto L_a8;
  if (!((n <= 56319))) goto L_a8;
  let n#1;
  n#1 = e.charCodeAt((t + 1));
  if (!((n#1 >= 56320))) goto L_96;
  if (!(!(n#1 <= 57343))) goto L_9c;
  return false;
  t = (t + 1);
  (t + 1);
  goto L_c1;
  if (!((n >= 56320))) goto L_c1;
  if (!((n <= 57343))) goto L_c1;
  return false;
  t = (t + 1);
  (t + 1);
  goto L_5;
  return true;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=52B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: t, u
function {
  if (!((e.childCount !== t))) goto L_33;
  u = "The document contains a nonrectangular table";
  "The document contains a nonrectangular table";
  return;
}

// fn <atom:0>  args=1 vars=5 closure=4 cpool=1 bc=825B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, r, t#1, t#2
// closure: u, ua, na, n
function {
  if (!((undefined !== u))) goto L_a;
  return false;
  if (!(e.isText)) goto L_1c4;
  if ((("text" !== e.type.name))) goto L_101;
  t = e.text;
  if (!((null != e.text))) goto L_ac;
  goto L_ad;
  // [栈深重同步 2 -> 1]
  if ((!ua(""))) goto L_101;
  if (!((0 !== Object.keys(e.attrs).length))) goto L_110;
  u = "The document contains unsupported text";
  "The document contains unsupported text";
  return false;
  let t#1;
  for (const t#1 of e.marks) {
    u = na(t#1.type.name, t#1.attrs);
    na(t#1.type.name, t#1.attrs);
    if (!((undefined !== u))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  goto L_26d;
  u = n(e.type.name, e.attrs);
  n(e.type.name, e.attrs);
  if (!((0 !== e.marks.length))) goto L_262;
  u = "The document contains marks on a nontext node";
  "The document contains marks on a nontext node";
  if (!((undefined !== u))) goto L_26d;
  return false;
  if (!(("table" === e.type.name))) goto L_333;
  let t#2;
  r = e.firstChild;
  if (!((null == e.firstChild))) goto L_2e5;
  goto L_307;
  // [栈深重同步 1 -> 0]
  t#2 = r.childCount;
  e.forEach(function <atom:0>);
  // close_loc t#2
  return (undefined === u);
}

// fn ra  args=3 vars=5 closure=3 cpool=1 bc=357B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r
// closure: ua, na, ta
function {
  let u;
  if ((("doc" !== e.type.name))) goto L_a4;
  if (((undefined !== ta("doc", e.attrs)))) goto L_a4;
  if (!((0 !== e.marks.length))) goto L_ac;
  return "The document root is not a plain doc node";
  u = undefined;
  e.descendants(function <atom:0>);
  if (!((undefined !== u))) goto L_e1;
  return u;
  try { // catch -> L_157
  t.nodeFromJSON(e.toJSON()).check();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_164
  return "The document contains an invalid node structure";
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn ia  args=2 vars=4 closure=0 cpool=0 bc=136B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u
function {
  let u;
  let n;
  n = e.charCodeAt((t - 1));
  u = e.charCodeAt(t);
  if (!((n >= 55296))) goto L_86;
  if (!((n <= 56319))) goto L_86;
  if (!((u >= 56320))) goto L_86;
  return !(u <= 57343);
}

// fn oa  args=1 vars=1 closure=0 cpool=2 bc=47B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.replace(new RegExp("\\r\\n?|\\n"), "
");   // tail call
}

// fn sa  args=1 vars=3 closure=2 cpool=0 bc=160B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, e#1
// closure: z, w
function {
  let t;
  t = e.slice(1, -1);
  if (!(("#" === t[0]))) goto L_95;
  let e#1;
  if ((("x" === t[1]))) goto L_55;
  e#1 = ("X" === t[1]);
  if (!(e#1)) goto L_83;
  goto L_84;
  // [栈深重同步 4 -> 3]
  if (!(e#1)) goto L_90;
  goto L_92;
  // [栈深重同步 3 -> 2]
  return z(t.slice(1), 10);   // tail call
  if ((w(t))) goto L_9f;
  return e;
}

// fn aa  args=5 vars=8 closure=0 cpool=2 bc=746B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r
// locals: i, o, s
function {
  let s;
  let o;
  let i;
  if ((!r)) goto L_46;
  if ((!u.includes("\|"))) goto L_46;
  if (!(((n - t) !== u.length))) goto L_88;
  e.push({from: t, to: n, value: u, kind: 1});
  return;
  i = new RegExp("\\\\([\\\\|])");
  o = undefined;
  s = 0;
  o = i.exec(u);
  if (!((null !== i.exec(u)))) goto L_276;
  if (!(("|" === o[1]))) goto L_272;
  if (!((o.index > s))) goto L_1b8;
  e.push({from: (t + s), to: (t + o.index), value: u.slice(s, o.index), kind: 1});
  e.push({from: (t + o.index), to: ((t + o.index) + 2), value: "|", kind: 1});
  s = (o.index + 2);
  (o.index + 2);
  goto L_92;
  if (!((s < u.length))) goto L_2e9;
  e.push({from: (t + s), to: n, value: u.slice(s), kind: 1});
  return;
}

// fn <atom:0>  args=2 vars=16 closure=8 cpool=0 bc=1933B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, e#1, t#1, n#1, o, s, a, l, c, e#2, this
// closure: <class_fields_init>, g, cn, ln, fn, sa, oa, aa
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let r;
  let u;
  let n;
  this.source = e;
  g(this, "tokens", []);
  g(this, "fenced", []);
  n = cn(ln(t).document().write(fn()(e, undefined, true)));
  u = [];
  r = -1;
  let i;
  const _it1 = n;
  goto L_783;
  i = <value(_it1)>;
  let c;
  let l;
  let a;
  let s;
  let o;
  let n#1;
  let t#1;
  let e#1;
  if (((undefined === undefined))) goto L_d8;
  const _it2 = undefined;
  <done(_it2)>;
  e#1 = <value(_it2)>;
  <done(_it2)>;
  t#1 = <value(_it2)>;
  <done(_it2)>;
  n#1 = <value(_it2)>;
  goto L_de;
  <value(_it2)>;
  goto L_c5;
  // [栈深重同步 4 -> 3]
  if (!(("exit" === e#1))) goto L_114;
  u.pop();
  goto L_783;
  o = u;
  s = t#1.type;
  a = t#1.start.offset;
  l = t#1.end.offset;
  c = n#1.sliceSerialize(t#1);
  if (!(("codeFenced" === s))) goto L_25e;
  this.fenced.push({from: a, to: l});
  if (!((a >= r))) goto L_737;
  if (!(("characterEscape" === s))) goto L_310;
  this.tokens.push({from: a, to: l, value: c.slice(1), kind: 0});
  r = l;
  l;
  goto L_737;
  if (!(("characterReference" === s))) goto L_391;
  this.tokens.push({from: a, to: l, value: sa(c), kind: 0});
  r = l;
  l;
  goto L_737;
  if ((("data" === s))) goto L_3db;
  if ((("autolinkProtocol" === s))) goto L_3db;
  if ((("autolinkEmail" === s))) goto L_3db;
  if ((("literalAutolinkHttp" === s))) goto L_3db;
  if ((("literalAutolinkWww" === s))) goto L_3db;
  if (!(("literalAutolinkEmail" === s))) goto L_44b;
  this.tokens.push({from: a, to: l, value: oa(c), kind: 0});
  goto L_737;
  if ((("htmlFlowData" === s))) goto L_461;
  if (!(("htmlTextData" === s))) goto L_4cd;
  this.tokens.push({from: a, to: l, value: c, kind: 3});
  goto L_737;
  if (!(("codeTextData" === s))) goto L_53e;
  aa(this.tokens, a, l, oa(c), o.includes("table"));
  goto L_737;
  if (!(("codeFlowValue" === s))) goto L_5b7;
  this.tokens.push({from: a, to: l, value: oa(c), kind: 2});
  goto L_737;
  if ((("lineEnding" === s))) goto L_5cd;
  if (!(("lineEndingBlank" === s))) goto L_737;
  let e#2;
  if ((o.includes("htmlFlow"))) goto L_631;
  if (!(o.includes("htmlText"))) goto L_637;
  goto L_6ca;
  // [栈深重同步 4 -> 3]
  if (!(o.includes("codeText"))) goto L_668;
  goto L_6ca;
  // [栈深重同步 4 -> 3]
  if ((o.includes("codeFenced"))) goto L_6c4;
  if (!(o.includes("codeIndented"))) goto L_6c9;
  goto L_6ca;
  // [栈深重同步 4 -> 3]
  e#2 = 0;
  this.tokens.push({from: a, to: l, value: "
", kind: e#2});
  u.push(t#1.type);
  if (!(<done(_it2)>)) goto L_a7;
  <value(_it2)>;
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=0 bc=887B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, this
function {
  this = this;
  let u;
  u = [];
  let r;
  for (const r of this.tokens) {
    let o;
    let i;
    if (((r.kind !== n))) goto L_b5;
    if (((r.to <= e))) goto L_b5;
    if (((r.from >= t))) continue;
    i = Math.max(e, r.from);
    o = Math.min(t, r.to);
    if (!((i === r.from))) goto L_1d9;
    if (!((o === r.to))) goto L_1d9;
    goto L_369;
    // [栈深重同步 4 -> 3]
    if (!((this.source.slice(r.from, r.to) === r.value))) goto L_369;
    u.push({from: i, to: o, value: r.value.slice((i - r.from), (o - r.from))});
  }
  return u;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.value;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=1 bc=97B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  if (!((e.map(function <atom:0>).join("") !== t))) goto L_5f;
  throw new Error("The Markdown tokenizer could not map the parsed text");
  return e;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=80B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: this
function {
  this = this;
  return this.checked(this.clipped(e, t, 0), n);   // tail call
}

// fn <atom:0>  args=3 vars=12 closure=1 cpool=0 bc=1098B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, a, e#1, o, o#1, s, this
// closure: ia
function {
  this = this;
  let s;
  let o#1;
  let i;
  let r;
  let u;
  u = [];
  r = [];
  i = 0;
  let a;
  for (const a of e) {
    let o;
    let e#1;
    e#1 = (i + a.value.length);
    o = (this.source.slice(a.from, a.to) === a.value);
    if (!((t === i))) goto L_160;
    u.push(a.from);
    if (!((t === e#1))) goto L_1b5;
    u.push(a.to);
    if (!((n === i))) goto L_20a;
    r.push(a.from);
    if (!((n === e#1))) goto L_25f;
    r.push(a.to);
    if (!(o)) goto L_2ca;
    if (!((t > i))) goto L_2ca;
    if (!((t < e#1))) goto L_2ca;
    u.push(((a.from + t) - i));
    if (!(o)) goto L_335;
    if (!((n > i))) goto L_335;
    if (!((n < e#1))) goto L_335;
    r.push(((a.from + n) - i));
    i = e#1;
    e#1;
  }
  if (!((0 === u.length))) goto L_352;
  goto L_385;
  // [栈深重同步 1 -> 0]
  // append([], 0, u)
  u;
  o#1 = Math.max.apply(Math, []);
  if (!((0 === r.length))) goto L_392;
  goto L_3c5;
  // [栈深重同步 1 -> 0]
  // append([], 0, r)
  r;
  s = Math.min.apply(Math, []);
  if (((undefined === o#1))) goto L_3e0;
  if (((undefined === s))) goto L_3e0;
  if (!(!(o#1 > s))) goto L_449;
  if (!(ia(this.source, o#1))) goto L_449;
  if (!(ia(this.source, s))) goto L_449;
  return {from: o#1, to: s};
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=80B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: this
function {
  this = this;
  return this.checked(this.clipped(e, t, 3), n);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=80B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: this
function {
  this = this;
  return this.checked(this.clipped(e, t, 1), n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=77B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: e, t
function {
  if (!((n.from === e))) goto L_4c;
  return (n.to === t);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=362B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, this
function {
  this = this;
  let i;
  i = this.clipped(e, t, 2);
  if (!(this.fenced.some(function <atom:0>))) goto L_da;
  u = i[0];
  if (!((null == i[0]))) goto L_8c;
  goto L_ae;
  // [栈深重同步 2 -> 1]
  if (!(("
" === u.value))) goto L_da;
  i.shift();
  r = i[(i.length - 1)];
  if (!((null == i[(i.length - 1)]))) goto L_f2;
  goto L_114;
  // [栈深重同步 2 -> 1]
  if (!(("
" === r.value))) goto L_140;
  i.pop();
  return this.checked(i, n);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=3 cpool=0 bc=350B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, this
// closure: <class_fields_init>, g, la
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.original = e;
  this.source = t;
  g(this, "tokens");
  g(this, "parents", []);
  g(this, "sourceRanges", new Map());
  g(this, "textSpans", []);
  g(this, "documentSpans", []);
  g(this, "originalOffsets", []);
  g(this, "textLength", 0);
  this.tokens = new la(t, n);
  let u;
  u = 0;
  if (!((u < e.length))) goto L_115;
  this.originalOffsets.push(u);
  if (!(("" === e[u]))) goto L_109;
  if (!(("
" === e[(u + 1)]))) goto L_109;
  u = <u_new>;
  (u++);
  u = <u_new>;
  (u++);
  goto L_90;
  this.originalOffsets.push(e.length);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=40B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
// closure: ha
function {
  this = this;
  ha(e, this.parents);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=107B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: this
// closure: ma
function {
  this = this;
  ma(this.parents, this.tokens, this.sourceRanges);
  return;
}

// fn <atom:0>  args=2 vars=13 closure=1 cpool=4 bc=1972B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, n#1, u#1, r#1, e#1, u#2, this
// closure: Da
function {
  this = this;
  let i;
  let r;
  let u;
  n = Da(e);
  if (!((null != Da(e)))) goto L_17;
  goto L_5f;
  // [栈深重同步 1 -> 0]
  u = this.sourceRanges.get(e);
  if (!((undefined === u))) goto L_76;
  throw new Error("The Markdown parser omitted a text source position");
  if (!(("inlineCode" === e.type))) goto L_157;
  goto L_3ca;
  // [栈深重同步 1 -> 0]
  if (!(("code" === e.type))) goto L_238;
  goto L_3ca;
  // [栈深重同步 1 -> 0]
  if (!(("html" === e.type))) goto L_319;
  goto L_3ca;
  // [栈深重同步 1 -> 0]
  r = this.tokens.text(u.from, u.to, e.value);
  i = 0;
  let o;
  for (const o of r) {
    let r#1;
    let u#1;
    let n#1;
    n#1 = (this.source.slice(o.from, o.to) === o.value);
    if ((("text" === e.type))) goto L_4ec;
    if (!(("html" === e.type))) goto L_4f5;
    goto L_4fa;
    // [栈深重同步 4 -> 3]
    u#1 = new RegExp("[\\s\\S]+");
    r#1 = undefined;
    r#1 = u#1.exec(o.value);
    if (!((null !== u#1.exec(o.value)))) goto L_77c;
    let u#2;
    let e#1;
    e#1 = Math.max(r#1.index, (t - i));
    u#2 = (r#1.index + r#1[0].length);
    if (((e#1 >= u#2))) goto L_778;
    if (!(n#1)) goto L_65e;
    goto L_682;
    // [栈深重同步 7 -> 6]
    if (!(n#1)) goto L_6b6;
    goto L_6da;
    // [栈深重同步 7 -> 6]
    this.textSpans.push({from: o.from, to: o.to, textFrom: this.textLength, textTo: ((this.textLength + u#2) - e#1), linear: n#1});
    this.textLength = (this.textLength + (u#2 - e#1));
    (this.textLength + (u#2 - e#1));
    goto L_4ff;
    i = (i + o.value.length);
    (i + o.value.length);
  }
  return;
}

// fn <atom:0>  args=2 vars=6 closure=3 cpool=0 bc=897B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, u
// locals: r, e#1, i, o
// closure: t, n, this
function {
  let r;
  if (!(!e.isText)) goto L_29;
  return;
  r = (t + e.nodeSize);
  if (!((n < this.textSpans.length))) goto L_379;
  let o;
  let i;
  let e#1;
  e#1 = this.textSpans[n];
  if (((e#1.textFrom >= r))) goto L_379;
  i = Math.max(e#1.textFrom, t);
  o = Math.min(e#1.textTo, r);
  if (!(e#1.linear)) goto L_234;
  goto L_258;
  // [栈深重同步 4 -> 3]
  if (!(e#1.linear)) goto L_2d2;
  goto L_2f6;
  // [栈深重同步 4 -> 3]
  this.documentSpans.push({from: e#1.from, to: e#1.to, documentFrom: ((u + i) - t), documentTo: ((u + o) - t), linear: e#1.linear});
  if (((e#1.textTo > r))) goto L_379;
  n = <n_new>;
  (n++);
  goto L_50;
  t = r;
  r;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=1 bc=108B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, this
function {
  this = this;
  let n;
  let t;
  t = 0;
  n = 0;
  e.descendants(function <atom:0>);
  if (!((t !== this.textLength))) goto L_6b;
  throw new Error("The Markdown text source map does not match the document");
  return;
}

// fn <atom:0>  args=2 vars=9 closure=1 cpool=0 bc=791B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s, this
// closure: ia
function {
  this = this;
  let n;
  n = [];
  let u;
  for (const u of this.documentSpans) {
    let s;
    let o;
    let i;
    let r;
    r = Math.max(e, u.documentFrom);
    i = Math.min(t, u.documentTo);
    if (((r >= i))) continue;
    if (!(u.linear)) goto L_183;
    goto L_1a7;
    // [栈深重同步 5 -> 4]
    o = this.originalOffsets[u.from];
    if (!(u.linear)) goto L_242;
    goto L_266;
    // [栈深重同步 5 -> 4]
    s = this.originalOffsets[u.to];
    if ((ia(this.original, o))) goto L_29c;
    o = <o_new>;
    (o--);
    if ((ia(this.original, s))) goto L_2d0;
    s = <s_new>;
    (s++);
    n.push({from: o, to: s});
  }
  return n;
}

// fn Da  args=1 vars=5 closure=0 cpool=0 bc=262B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r
function {
  let r;
  let u;
  t = e.position;
  if (!((null == e.position))) goto L_30;
  goto L_73;
  // [栈深重同步 1 -> 0]
  u = t.start.offset;
  n = e.position;
  if (!((null == e.position))) goto L_9e;
  goto L_e1;
  // [栈深重同步 1 -> 0]
  r = n.end.offset;
  if (((undefined === u))) goto L_f0;
  if (!((undefined === r))) goto L_f4;
  return undefined;
  return {from: u, to: r};
}

// fn fa  args=1 vars=2 closure=1 cpool=0 bc=33B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
// closure: Da
function {
  let t;
  t = Da(e);
  if (!((undefined === t))) goto L_1d;
  throw new Error("The Markdown parser omitted a source position");
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return ("text" === e.type);
}

// fn ha  args=2 vars=3 closure=1 cpool=1 bc=233B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
// closure: ha
function {
  if (!(("children" in e))) goto L_e8;
  if (!(e.children.some(function <atom:0>))) goto L_b1;
  // append([], 0, e.children)
  e.children;
  t.push({parent: e, children: []});
  let n;
  for (const n of e.children) {
    ha(n, t);
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return ("text" !== e.type);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.value;
}

// fn da  args=1 vars=1 closure=0 cpool=2 bc=307B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!(("text" === e.type))) goto L_4d;
  return e.value;
  if ((("link" !== e.type))) goto L_c1;
  if (!(e.children.some(function <atom:0>))) goto L_c5;
  return undefined;
  return e.children.map(function <atom:0>).join("");
}

// fn pa  args=6 vars=7 closure=1 cpool=0 bc=107B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r, i
// locals: o
// closure: Da
function {
  let o;
  if (!((undefined !== Da(e)))) goto L_b;
  return;
  o = r.textRange(u, t, n);
  if (!((undefined !== o))) goto L_6a;
  i.set(e, o);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, n
// closure: t
function {
  return (e === t[n]);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.value;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return (undefined === e);
}

// fn Fa  args=4 vars=15 closure=3 cpool=3 bc=670B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s, a, e#1, r#1, l, t#1, r#2, e#2
// closure: da, fa, pa
function {
  let s;
  let o;
  let i;
  let r;
  if (!((e.length === t.length))) goto L_3d;
  if (!(e.every(function <atom:0>))) goto L_3d;
  return;
  r = e.map(function <atom:0>).join("");
  i = t.map(da);
  if ((i.some(function <atom:0>))) goto L_10a;
  if (!((i.join("") !== r))) goto L_10d;
  return;
  o = n.text(fa(e[0]).from, fa(e[(e.length - 1)]).to, r);
  s = 0;
  let a;
  a = 0;
  if (!((a < t.length))) goto L_29d;
  let l;
  let r#1;
  let e#1;
  e#1 = t[a];
  r#1 = i[a];
  if (!((undefined === r#1))) goto L_1b9;
  return;
  l = (s + r#1.length);
  pa(e#1, s, l, o, n, u);
  if (!(("link" === e#1.type))) goto L_288;
  let t#1;
  t#1 = s;
  let r#2;
  for (const r#2 of e#1.children) {
    let e#2;
    e#2 = (t#1 + r#2.value.length);
    pa(r#2, t#1, e#2, o, n, u);
    t#1 = e#2;
    e#2;
  }
  s = l;
  l;
  a = (a + 1);
  (a + 1);
  goto L_18d;
  return;
}

// fn ma  args=3 vars=10 closure=1 cpool=0 bc=469B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, e#1, r, i, o, s, a
// closure: Fa
function {
  let u;
  for (const u of e) {
    let i;
    let r;
    let e#1;
    e#1 = u.parent.children;
    r = 0;
    i = [];
    let o;
    o = 0;
    if (!((o <= u.children.length))) continue;
    let a;
    let s;
    s = u.children[o];
    if (!((null == s))) goto L_d1;
    goto L_f5;
    // [栈深重同步 5 -> 4]
    if (!(("text" === s.type))) goto L_126;
    i.push(s);
    goto L_1be;
    if (!((undefined === s))) goto L_133;
    goto L_160;
    // [栈深重同步 4 -> 3]
    a = e#1.indexOf(s, r);
    if (((a < r))) continue;
    if (!((i.length > 0))) goto L_1ab;
    Fa(i, e#1.slice(r, a), t, n);
    i = [];
    [];
    r = (a + 1);
    (a + 1);
    o = (o + 1);
    (o + 1);
    goto L_64;
  }
  return;
}

// fn ga  args=1 vars=1 closure=0 cpool=0 bc=8B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return ("children" in e);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=64B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u
// closure: e, t, n
function {
  if (((null === u))) goto L_b;
  if (!((10 === u))) goto L_3c;
  e.exit("hardBreakEscape");
  return t(u);
  return n(u);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=96B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: t
// closure: n, e, u
function {
  if (!((92 !== t))) goto L_a;
  return n(t);
  e.enter("hardBreakEscape");
  e.consume(t);
  return u;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=2 bc=14B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u
function {
  let u;
  u = function <atom:0>;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=52B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.enter({type: "lineEndingBlank"}, e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=41B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this
function {
  this = this;
  this.exit(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=9B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: Ca, Aa
function {
  Ca(e, 0);
  Aa(e);
  return;
}

// fn Ea  args=0 vars=2 closure=2 cpool=4 bc=370B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, this
// closure: Ca, Aa
function {
  this = this;
  let e;
  e = this.data();
  if (((null != e.micromarkExtensions))) goto L_65;
  e.micromarkExtensions = [];
  [];
  e.micromarkExtensions.push({text: {<bad:2147483525>: {name: "writingBlockTerminalBreak", tokenize: function <atom:0>}}});
  if (((null != e.fromMarkdownExtensions))) goto L_108;
  e.fromMarkdownExtensions = [];
  [];
  e.fromMarkdownExtensions.push({enter: {lineEndingBlank: function <atom:0>}, exit: {lineEndingBlank: function <atom:0>}});
  return function <atom:0>;
}

// fn Ca  args=2 vars=9 closure=2 cpool=0 bc=477B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, r#1, i, o, s
// closure: ga, Ca
function {
  let u;
  if (!(!ga(e))) goto L_a;
  return;
  u = e.children;
  let r;
  for (const r of u) {
    Ca(r, (t + 1));
  }
  let r#1;
  r#1 = 0;
  if (!((r#1 < u.length))) goto L_1dc;
  let s;
  let o;
  let i;
  if (!(("lineEndingBlank" !== u[r#1].type))) goto L_9d;
  r#1 = (r#1 + 1);
  (r#1 + 1);
  goto L_4b;
  i = (r#1 + 1);
  n = u[i];
  if (!((null == u[i]))) goto L_b8;
  goto L_da;
  // [栈深重同步 2 -> 1]
  if (!(("lineEndingBlank" === n.type))) goto L_e9;
  i = (i + 1);
  (i + 1);
  goto L_a4;
  o = (i - r#1);
  if (!((t > 0))) goto L_124;
  if (!(("list" !== e.type))) goto L_124;
  goto L_199;
  // [栈深重同步 1 -> 0]
  if (((0 === r#1))) goto L_135;
  if (!((i === u.length))) goto L_169;
  goto L_199;
  // [栈深重同步 1 -> 0]
  s = Math.floor(((o - 1) / 2));
  u.splice(r#1, (o - s));
  r#1 = (r#1 + s);
  (r#1 + s);
  goto L_4b;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return ("lineEndingBlank" === e.type);
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=75B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: i, r, f, D, n
function {
  if (!((0 !== i.length))) goto L_4a;
  r.push(f(D({}, n), {children: i}));
  i = [];
  [];
  return;
}

// fn Aa  args=1 vars=9 closure=4 cpool=2 bc=677B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, t#1, n, u, r, i, o, e#1
// closure: f, D, ga, Aa
function {
  if (!(ga(e))) goto L_2a4;
  let t;
  for (const t of e.children) {
    Aa(t);
  }
  let t#1;
  t#1 = 0;
  if (!((t#1 < e.children.length))) goto L_2a4;
  let o;
  let i;
  let r;
  let u;
  let n;
  n = e.children[t#1];
  if (!(("list" !== n.type))) goto L_dc;
  // close_loc i
  // close_loc r
  // close_loc n
  goto L_297;
  u = n.children;
  if (!(!u.some(function <atom:0>))) goto L_139;
  // close_loc i
  // close_loc r
  // close_loc n
  goto L_297;
  r = [];
  i = [];
  o = function <atom:0>;
  let e#1;
  for (const e#1 of u) {
    if (!(("lineEndingBlank" === e#1.type))) goto L_1b6;
    o();
    r.push(e#1);
   continue;
    if (!(("listItem" !== e#1.type))) goto L_1f1;
    throw new Error("The Markdown parser returned an invalid list item");
    i.push(e#1);
  }
  o();
  // append([t#1, 1], 2, r)
  r;
  e.children.splice.apply(e.children, [t#1, 1]);
  t#1 = (t#1 + (r.length - 1));
  (t#1 + (r.length - 1));
  // close_loc i
  // close_loc r
  // close_loc n
  t#1 = (t#1 + 1);
  (t#1 + 1);
  goto L_42;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=57B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.name = "MarkdownParseError";
  return this;
}

// fn Ta  args=1 vars=1 closure=1 cpool=0 bc=7B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: xa
function {
  throw new xa(e);
}

// fn Ia  args=1 vars=1 closure=2 cpool=0 bc=6B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: qa, ka
function {
  return qa(e, ka);   // tail call
}

// fn qa  args=2 vars=2 closure=2 cpool=0 bc=9B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: za, Oa
function {
  return za(Oa(e), undefined, t);   // tail call
}

// fn Ma  args=1 vars=3 closure=5 cpool=0 bc=122B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n
// closure: Oa, ca, Sa, za, ka
function {
  let n;
  let t;
  t = Oa(e);
  n = new ca(e, t, {extensions: Sa.data().micromarkExtensions});
  return {document: za(t, n, ka), sourceMap: n};
}

// fn Oa  args=1 vars=1 closure=2 cpool=2 bc=74B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: ua, Ta
function {
  if (!(("string" == typeof e))) goto L_f;
  if ((ua(e))) goto L_1a;
  Ta("Markdown must contain well-formed Unicode text");
  return e.replace(new RegExp("\\r\\n?"), "
");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: t
function {
  t.capture(e);
  return;
}

// fn za  args=3 vars=10 closure=9 cpool=1 bc=655B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l
// closure: Sa, An, La, f, D, ja, Ra, ra, Ta
function {
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  if (!((undefined === t))) goto L_40;
  goto L_f6;
  // [栈深重同步 1 -> 0]
  u = Sa.data().fromMarkdownExtensions;
  if (!((null != Sa.data().fromMarkdownExtensions))) goto L_eb;
  goto L_ee;
  // [栈深重同步 6 -> 5]
  // append([{transforms: [function <atom:0>]}], 1, [])
  [];
  r = An(e, {extensions: Sa.data().micromarkExtensions, mdastExtensions: [{transforms: [function <atom:0>]}]});
  Sa.runSync(r);
  if (((null == t))) goto L_14c;
  t.restore();
  i = new Map();
  La(r, i);
  o = f(D({}, n), {definitions: i, sourceMap: t});
  s = ja(r.children, o);
  if (!((0 === s.length))) goto L_1e8;
  s.push(Ra(o, "paragraph", {}, []));
  a = Ra(o, "doc", {}, s);
  l = ra(a, n.schema, n.nodeAttributesReason);
  if (!((undefined !== l))) goto L_25a;
  Ta(l);
  if (((null == t))) goto L_28a;
  t.finish(a);
  return a;
}

// fn La  args=2 vars=3 closure=1 cpool=0 bc=331B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
// closure: La
function {
  if ((("definition" !== e.type))) goto L_10a;
  if ((t.has(e.identifier.toUpperCase()))) goto L_10a;
  t.set(e.identifier.toUpperCase(), e);
  if (!(("children" in e))) goto L_14a;
  let n;
  for (const n of e.children) {
    La(n, t);
  }
  return;
}

// fn Ra  args=4 vars=5 closure=2 cpool=0 bc=185B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r
// closure: Mn, Ta
function {
  try { // catch -> L_9d
  // append([], 0, u)
  u;
  return e.schema.nodes[t].createChecked(n, Mn.fromArray([]));
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_b8
  if (!((r instanceof RangeError))) goto L_b5;
  Ta("The Markdown content does not fit the Writing Blocks schema");
  throw r;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn _a  args=3 vars=6 closure=0 cpool=2 bc=408B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i
function {
  let r;
  let u;
  u = [];
  r = t.split(new RegExp("\\r\\n?|\\n"));
  let i;
  i = 0;
  if (!((i < r.length))) goto L_194;
  if (!((i > 0))) goto L_102;
  u.push(e.schema.nodes.hard_break.create());
  if (!((r[i].length > 0))) goto L_186;
  u.push(e.schema.text(r[i], n));
  i = (i + 1);
  (i + 1);
  goto L_3a;
  return u;
}

// fn Na  args=3 vars=5 closure=4 cpool=0 bc=332B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r
// closure: ya, ba, Ba, _a
function {
  let r;
  r = e.value;
  if (((r === ya))) goto L_34;
  if (!((r === ba))) goto L_3a;
  return [];
  if (!(Ba.test(r))) goto L_f3;
  return [n.schema.nodes.hard_break.create()];
  u = n.sourceMap;
  if (((null == n.sourceMap))) goto L_143;
  u.addText(e, 0);
  return _a(n, r, t);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.isText;
}

// fn Pa  args=3 vars=14 closure=4 cpool=1 bc=2518B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, e#1, e#2, u#1, e#3
// closure: _a, Na, Ta, Pa
function {
  let a;
  a = [];
  let l;
  for (const l of e) {
    if (!((l.type === "text"))) goto L_ef;
    u = n.sourceMap;
    if (((null == n.sourceMap))) goto L_94;
    u.addText(l, 0);
    // append([], 0, _a(n, l.value, t))
    _a(n, l.value, t);
    a.push.apply(a, []);
    goto L_9c8;
    if (!((l.type === "break"))) goto L_1ae;
    a.push(n.schema.nodes.hard_break.create());
    goto L_9c8;
    if (!((l.type === "html"))) goto L_1f0;
    // append([], 0, Na(l, t, n))
    Na(l, t, n);
    a.push.apply(a, []);
    goto L_9c8;
    if (!((l.type === "inlineCode"))) goto L_3c4;
    r = n.sourceMap;
    if (((null == n.sourceMap))) goto L_24e;
    r.addText(l, 0);
    if (!((0 === l.value.length))) goto L_281;
    Ta("Empty inline code cannot be represented");
    a.push(n.schema.text(l.value, n.schema.marks.code.create().addToSet(t)));
    goto L_9c8;
    if (((l.type === "strong"))) goto L_3e2;
    if (((l.type === "emphasis"))) goto L_3e2;
    if (!((l.type === "delete"))) goto L_53b;
    let e#1;
    if (!(("strong" === l.type))) goto L_418;
    goto L_450;
    // [栈深重同步 5 -> 4]
    if (!(("emphasis" === l.type))) goto L_44b;
    goto L_450;
    // [栈深重同步 5 -> 4]
    e#1 = "strikethrough";
    // append([], 0, Pa(l.children, n.schema.marks[e#1].create().addToSet(t), n))
    Pa(l.children, n.schema.marks[e#1].create().addToSet(t), n);
    a.push.apply(a, []);
    goto L_9c8;
    if (((l.type === "link"))) goto L_550;
    if (!((l.type === "linkReference"))) goto L_7c5;
    let u#1;
    let e#2;
    if (!(("link" === l.type))) goto L_588;
    goto L_616;
    // [栈深重同步 5 -> 4]
    e#2 = n.definitions.get(l.identifier.toUpperCase());
    if (!((undefined === e#2))) goto L_628;
    Ta("The Markdown link definition is missing");
    i = e#2.title;
    if (!((null != e#2.title))) goto L_729;
    goto L_72a;
    // [栈深重同步 10 -> 9]
    u#1 = Pa(l.children, n.schema.marks.link.create({href: e#2.url, title: null}).addToSet(t), n);
    if ((u#1.some(function <atom:0>))) goto L_78f;
    Ta("An empty link cannot preserve its destination in the document");
    // append([], 0, u#1)
    u#1;
    a.push.apply(a, []);
    goto L_9c8;
    if (((l.type === "image"))) goto L_7da;
    if (!((l.type === "imageReference"))) goto L_9af;
    let e#3;
    if (!((undefined === n.image))) goto L_80c;
    Ta("Writing Blocks AST does not support Markdown images");
    if (!(("image" === l.type))) goto L_83f;
    goto L_8cd;
    // [栈深重同步 5 -> 4]
    e#3 = n.definitions.get(l.identifier.toUpperCase());
    if (!((undefined === e#3))) goto L_8df;
    Ta("The Markdown image definition is missing");
    o = l.alt;
    if (!((null != l.alt))) goto L_976;
    goto L_977;
    // [栈深重同步 10 -> 9]
    s = e#3.title;
    if (!((null != e#3.title))) goto L_9a5;
    goto L_9a6;
    // [栈深重同步 11 -> 10]
    a.push(n.image(e#3.url, "", null));
    goto L_9c8;
    if (!((l.type === "footnoteReference"))) goto L_9c0;
    Ta("Writing Blocks AST does not support footnotes");
    Ta("The Markdown contains unsupported inline content");
    l.type;
  }
  return a;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=338B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: n, u, r
// closure: ja, t, Ra
function {
  let r;
  let u;
  u = ja(e.children, t);
  n = u[0];
  if (!((null == u[0]))) goto L_3e;
  goto L_81;
  // [栈深重同步 2 -> 1]
  if (!(("paragraph" !== n.type.name))) goto L_bb;
  u.unshift(Ra(t, "paragraph", {}, []));
  if (!((null !== e.checked))) goto L_108;
  r = (undefined !== e.checked);
  if (!(r)) goto L_117;
  goto L_11c;
  // [栈深重同步 3 -> 2]
  if (!(r)) goto L_14b;
  goto L_14c;
  // [栈深重同步 4 -> 3]
  return Ra(t, "regular_list_item", {}, u);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=38B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return (true === e.spread);
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=0 bc=112B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, u
// locals: r, i
// closure: Ra, t, Pa, n
function {
  r = n.children[u];
  if (!((null == n.children[u]))) goto L_3c;
  goto L_5e;
  // [栈深重同步 7 -> 6]
  i = r.children;
  if (!((null != r.children))) goto L_65;
  goto L_68;
  // [栈深重同步 6 -> 5]
  return Ra(t, "table_cell", {align: e}, Pa([], [], t));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=1 bc=106B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n
// closure: Ra, t, Pa, e, Ta
function {
  if (!((n.children.length > e.length))) goto L_35;
  Ta("A Markdown table must be rectangular");
  return Ra(t, "table_row", {}, e.map(function <atom:0>));   // tail call
}

// fn ja  args=2 vars=17 closure=9 cpool=3 bc=2517B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s, a, e#1, e#2, u#1, n#1, e#3, e#4, n#2, e#5
// closure: ja, Ra, Pa, Ta, ya, ba, va, wa, _a
function {
  let s;
  s = [];
  let a;
  for (const a of e) {
    if (((a.type === "definition"))) goto L_9c7;
    if (!((a.type === "lineEndingBlank"))) goto L_84;
    s.push(Ra(t, "paragraph", {}, []));
    goto L_9c7;
    if (!((a.type === "html"))) goto L_3af;
    let e#1;
    e#1 = a.value.trim();
    if (((e#1 === ya))) goto L_ef;
    if (((e#1 === ba))) goto L_9c7;
    if (!((e#1 === va))) goto L_136;
    s.push(Ra(t, "paragraph", {}, []));
    goto L_9c7;
    let u#1;
    let e#2;
    e#2 = [];
    u#1 = a.value;
    let n#1;
    n#1 = u#1.match(wa);
    if (((null === n#1))) goto L_285;
    e#2.push(t.schema.nodes.hard_break.create());
    u#1 = u#1.slice(n#1[0].length);
    u#1.slice(n#1[0].length);
    goto L_167;
    if (((0 === e#2.length))) goto L_2b9;
    if (!((u#1.trim().length > 0))) goto L_375;
    n = t.sourceMap;
    if (((null == t.sourceMap))) goto L_33b;
    n.addText(a, (a.value.length - u#1.length));
    // append([], 0, _a(t, u#1, []))
    _a(t, u#1, []);
    e#2.push.apply(e#2, []);
    s.push(Ra(t, "paragraph", {}, e#2));
    goto L_9c7;
    if (!((a.type === "paragraph"))) goto L_418;
    s.push(Ra(t, "paragraph", {}, Pa(a.children, [], t)));
    goto L_9c7;
    if (!((a.type === "heading"))) goto L_4ad;
    s.push(Ra(t, "heading", {level: a.depth}, Pa(a.children, [], t)));
    goto L_9c7;
    if (!((a.type === "blockquote"))) goto L_55e;
    let e#3;
    e#3 = ja(a.children, t);
    if (!((0 === e#3.length))) goto L_524;
    e#3.push(Ra(t, "paragraph", {}, []));
    s.push(Ra(t, "blockquote", {}, e#3));
    goto L_9c7;
    if (!((a.type === "list"))) goto L_704;
    let n#2;
    let e#4;
    e#4 = a.children.map(function <atom:0>);
    if (((true === a.spread))) goto L_631;
    n#2 = a.children.some(function <atom:0>);
    if (!(a.ordered)) goto L_686;
    goto L_68b;
    // [栈深重同步 9 -> 8]
    if (!(a.ordered)) goto L_6ee;
    u = a.start;
    if (!((null != a.start))) goto L_6de;
    goto L_6df;
    // [栈深重同步 11 -> 10]
    goto L_6f7;
    // [栈深重同步 10 -> 9]
    s.push(Ra(t, "list", {spread: n#2}, e#4));
    goto L_9c7;
    if (!((a.type === "code"))) goto L_896;
    r = t.sourceMap;
    if (((null == t.sourceMap))) goto L_762;
    r.addText(a, 0);
    if (!(a.meta)) goto L_792;
    Ta("Code fence metadata is not supported by Writing Blocks AST");
    i = a.lang;
    if (!((null != a.lang))) goto L_7eb;
    goto L_7ec;
    // [栈深重同步 11 -> 10]
    if (!((0 === a.value.length))) goto L_81f;
    goto L_88c;
    // [栈深重同步 11 -> 10]
    s.push(Ra(t, "code_block", {lang: null}, [t.schema.text(a.value)]));
    goto L_9c7;
    if (!((a.type === "thematicBreak"))) goto L_8d8;
    s.push(Ra(t, "horizontal_rule", {}, []));
    goto L_9c7;
    if (!((a.type === "table"))) goto L_9ae;
    let e#5;
    o = a.align;
    if (!((null != a.align))) goto L_915;
    goto L_918;
    // [栈深重同步 5 -> 4]
    e#5 = [];
    if (!((0 === e#5.length))) goto L_92b;
    Ta("A Markdown table must have columns");
    s.push(Ra(t, "table", {}, a.children.map(function <atom:0>)));
    // close_loc e#5
    goto L_9c7;
    if (!((a.type === "footnoteDefinition"))) goto L_9bf;
    Ta("Writing Blocks AST does not support footnotes");
    Ta("The Markdown contains an unsupported block");
    a.type;
  }
  return s;
}

// fn Va  args=0 vars=0 closure=0 cpool=0 bc=1B file=markdown_diff/runtime_bundle/MarkdownDiff
function {
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=16B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
// closure: u, c
function {
  n = u[(c + t)];
  if (!((u[(c + t)].length > e.length))) goto L_e;
  return n;
  return e;
}

// fn Ua  args=5 vars=13 closure=0 cpool=1 bc=833B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r
// locals: i, o, s, a, l, c, D, f
function {
  o = [];
  if (!(t)) goto L_5d;
  o.push(t);
  i = t.previousComponent;
  delete "previousComponent";
  t = i;
  goto L_4;
  // [栈深重同步 1 -> 0]
  o.reverse();
  s = 0;
  a = o.length;
  l = 0;
  c = 0;
  if (!((s < a))) goto L_33f;
  D = o[s];
  if (!(o[s].removed)) goto L_169;
  D.value = e.join(u.slice(c, (c + D.count)));
  c = (c + D.count);
  goto L_33a;
  if (!(!D.added)) goto L_245;
  if (!(r)) goto L_245;
  f = n.slice(l, (l + D.count));
  f = n.slice(l, (l + D.count)).map(function <atom:0>);
  D.value = e.join(f);
  goto L_2c2;
  D.value = e.join(n.slice(l, (l + D.count)));
  l = (l + D.count);
  if ((D.added)) goto L_339;
  c = (c + D.count);
  (c + D.count);
  goto L_8e;
  return o;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=4B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: r, e
function {
  r(e);
  return;
}

// fn o  args=1 vars=1 closure=3 cpool=1 bc=58B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: r, i, u
function {
  e = i.postProcess(e, u);
  if (!(r)) goto L_38;
  setTimeout(function <atom:0>, 0);
  return true;
  return e;
}

// fn m  args=0 vars=7 closure=13 cpool=0 bc=799B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: n, r, c, D, f, m, g
// closure: p, l, F, h, s, a, i, u, d, t, e, o, Ua
function {
  n = Math.max(p, -l);
  if (!((n <= Math.min(F, l)))) goto L_31b;
  r = undefined;
  c = h[(n - 1)];
  D = h[(n + 1)];
  if (!(c)) goto L_7a;
  h[(n - 1)] = undefined;
  undefined;
  f = false;
  if (!(D)) goto L_bd;
  m = (D.oldPos - n);
  if (!(D)) goto L_bb;
  if (!((0 <= m))) goto L_bb;
  f = (m < s);
  if (!(c)) goto L_ea;
  g = ((c.oldPos + 1) < a);
  if ((f)) goto L_f4;
  if (!(g)) goto L_310;
  if ((!g)) goto L_149;
  if (!(f)) goto L_17d;
  if (!((c.oldPos < D.oldPos))) goto L_17d;
  goto L_1ad;
  // [栈深重同步 1 -> 0]
  r = i.addToPath(c, false, true, 1, u);
  d = i.extractCommon(r, t, e, n, u);
  if (!(((r.oldPos + 1) >= a))) goto L_273;
  if (!(((d + 1) >= s))) goto L_273;
  return o(Ua(i, r.lastComponent, t, e, i.useLongestToken));   // tail call
  h[n] = r;
  if (!(((r.oldPos + 1) >= a))) goto L_2d1;
  F = Math.min(F, (n - 1));
  Math.min(F, (n - 1));
  if (!(((d + 1) >= s))) goto L_30d;
  p = Math.max(p, (n + 1));
  Math.max(p, (n + 1));
  goto L_315;
  h[n] = undefined;
  // add_loc(2)
  goto L_2d;
  l = (l ++);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=69B file=markdown_diff/runtime_bundle/MarkdownDiff
// closure: l, c, f, r, m, e
function {
  if (((l > c))) goto L_32;
  if (!((Date.now() > f))) goto L_38;
  return r();   // tail call
  if ((m())) goto L_44;
  e();
  return;
}

// fn e  args=0 vars=1 closure=5 cpool=1 bc=13B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e
// closure: l, c, f, r, m
function {
  e = <special_object 2>;
  setTimeout(function <atom:0>, 0);
  return;
}

// fn <atom:0>  args=2 vars=21 closure=1 cpool=3 bc=852B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s, a, l, c, D, f, h, d, p, F, m, g, arguments, this
// closure: Ua
function {
  this = this;
  arguments = <special_object 1>;
  o = function o;
  m = function m;
  if (!((arguments.length > 2))) goto L_24;
  if (!((undefined !== arguments[2]))) goto L_24;
  goto L_25;
  // [栈深重同步 1 -> 0]
  u = {};
  r = {}.callback;
  if (!(("function" == typeof u))) goto L_58;
  r = u;
  u = {};
  {};
  i = this;
  e = this.castInput(e, u);
  t = this.castInput(t, u);
  e = this.removeEmpty(this.tokenize(e, u));
  t = this.removeEmpty(this.tokenize(t, u));
  s = this.removeEmpty(this.tokenize(t, u)).length;
  a = e.length;
  l = 1;
  c = (s + a);
  if (!((null != u.maxEditLength))) goto L_1d4;
  c = Math.min(c, u.maxEditLength);
  Math.min(c, u.maxEditLength);
  n = u.timeout;
  if (!((null !== u.timeout))) goto L_204;
  if (!((undefined !== n))) goto L_204;
  goto L_207;
  // [栈深重同步 1 -> 0]
  D = (1 / 0);
  f = (Date.now() + D);
  h = [{oldPos: -1, lastComponent: undefined}];
  d = this.extractCommon(h[0], t, e, 0, u);
  if (!(((h[0].oldPos + 1) >= a))) goto L_301;
  if (!(((d + 1) >= s))) goto L_301;
  return o(Ua(i, h[0].lastComponent, t, e, i.useLongestToken));   // tail call
  p = (-1 / 0);
  F = (1 / 0);
  if (!(r)) goto L_314;
  !function e();
  return;
  if (!((l <= c))) goto L_353;
  if (!((Date.now() <= f))) goto L_353;
  g = m();
  if (!(m())) goto L_314;
  return g;
  return;
}

// fn <atom:0>  args=5 vars=6 closure=0 cpool=0 bc=378B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r
// locals: i
function {
  i = e.lastComponent;
  if (!(e.lastComponent)) goto L_131;
  if (!(!r.oneChangePerToken)) goto L_131;
  if (!((i.added === t))) goto L_131;
  if (!((i.removed === n))) goto L_131;
  return {oldPos: (e.oldPos + u), lastComponent: {count: (i.count + 1), added: t, removed: n, previousComponent: i.previousComponent}};
  return {oldPos: (e.oldPos + u), lastComponent: {count: 1, added: t, removed: n, previousComponent: i}};
}

// fn <atom:0>  args=5 vars=11 closure=0 cpool=0 bc=377B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r
// locals: i, o, s, a, l, this
function {
  this = this;
  i = t.length;
  o = n.length;
  s = e.oldPos;
  a = (e.oldPos - u);
  l = 0;
  if (!(((a + 1) < i))) goto L_f4;
  if (!(((s + 1) < o))) goto L_f4;
  if (!(this.equals(n[(s + 1)], t[(a + 1)], r))) goto L_f4;
  if (!(r.oneChangePerToken)) goto L_f0;
  e.lastComponent = {count: 1, previousComponent: e.lastComponent, added: false, removed: false};
  {count: 1, previousComponent: e.lastComponent, added: false, removed: false};
  goto L_32;
  if (!(l)) goto L_16b;
  if (!(!r.oneChangePerToken)) goto L_16b;
  e.lastComponent = {count: l, previousComponent: e.lastComponent, added: false, removed: false};
  {count: l, previousComponent: e.lastComponent, added: false, removed: false};
  e.oldPos = s;
  return a;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=197B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
function {
  if (!(n.comparator)) goto L_4c;
  return n.comparator(e, t);
  if (((e === t))) goto L_c4;
  if (!(n.ignoreCase)) goto L_c4;
  return (e.toLowerCase() === t.toLowerCase());
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=66B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n
function {
  t = [];
  n = 0;
  if (!((n < e.length))) goto L_40;
  if (!(e[n])) goto L_3b;
  t.push(e[n]);
  goto L_6;
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=42B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return Array.from(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=38B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.join("");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e;
}

// fn $a  args=2 vars=3 closure=0 cpool=0 bc=105B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
function {
  n = 0;
  if (!((n < e.length))) goto L_42;
  if (!((n < t.length))) goto L_42;
  if (!((e[n] != t[n]))) goto L_3e;
  return e.slice(0, n);   // tail call
  goto L_2;
  return e.slice(0, n);   // tail call
}

// fn Ja  args=2 vars=3 closure=0 cpool=0 bc=144B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
function {
  if ((!e)) goto L_19;
  if ((!t)) goto L_19;
  if (!((e[(e.length - 1)] != t[(t.length - 1)]))) goto L_1d;
  return "";
  n = 0;
  if (!((n < e.length))) goto L_69;
  if (!((n < t.length))) goto L_69;
  if (!((e[(e.length - (n + 1))] != t[(t.length - (n + 1))]))) goto L_65;
  return e.slice(-n);   // tail call
  goto L_1f;
  return e.slice(-n);   // tail call
}

// fn Ga  args=3 vars=3 closure=0 cpool=0 bc=267B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
function {
  if (!((e.slice(0, t.length) != t))) goto L_e1;
  throw Error("string ".concat(JSON.stringify(e), " doesn't start with prefix ").concat(JSON.stringify(t), "; this is a bug"));
  return (n + e.slice(t.length));
}

// fn Wa  args=3 vars=3 closure=0 cpool=0 bc=277B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
function {
  if (!(!t)) goto L_8;
  return (e + n);
  if (!((e.slice(-t.length) != t))) goto L_e9;
  throw Error("string ".concat(JSON.stringify(e), " doesn't end with suffix ").concat(JSON.stringify(t), "; this is a bug"));
  return (e.slice(0, -t.length) + n);
}

// fn Qa  args=2 vars=2 closure=1 cpool=0 bc=7B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: Ga
function {
  return Ga(e, t, "");   // tail call
}

// fn Za  args=2 vars=2 closure=1 cpool=0 bc=7B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: Wa
function {
  return Wa(e, t, "");   // tail call
}

// fn Ya  args=2 vars=2 closure=1 cpool=0 bc=42B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: Ka
function {
  return t.slice(0, Ka(e, t));   // tail call
}

// fn Ka  args=2 vars=8 closure=0 cpool=0 bc=182B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i, o, s
function {
  n = 0;
  if (!((e.length > t.length))) goto L_11;
  n = (e.length - t.length);
  (e.length - t.length);
  u = t.length;
  if (!((e.length < t.length))) goto L_21;
  u = e.length;
  e.length;
  r = Array(u);
  i = 0;
  r[0] = 0;
  o = 1;
  if (!((o < u))) goto L_7f;
  if (!((t[o] == t[i]))) goto L_4e;
  r[o] = r[i];
  goto L_55;
  // [栈深重同步 1 -> 0]
  r[o] = i;
  i;
  if (!((i > 0))) goto L_6b;
  if (!((t[o] != t[i]))) goto L_6b;
  i = r[i];
  goto L_56;
  if (!((t[o] == t[i]))) goto L_7a;
  i = <i_new>;
  (i++);
  goto L_33;
  i = 0;
  s = n;
  if (!((s < e.length))) goto L_b4;
  if (!((i > 0))) goto L_a0;
  if (!((e[s] != t[i]))) goto L_a0;
  i = r[i];
  goto L_8b;
  if (!((e[s] == t[i]))) goto L_af;
  i = <i_new>;
  (i++);
  goto L_84;
  return i;
}

// fn nl  args=3 vars=3 closure=2 cpool=0 bc=131B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: tl, il
function {
  if (!((null == n))) goto L_9;
  goto L_2b;
  // [栈深重同步 2 -> 1]
  if (((null == n.ignoreWhitespace))) goto L_52;
  if (!(n.ignoreWhitespace)) goto L_7d;
  return tl.diff(e, t, n);
  return il(e, t, n);
}

// fn ul  args=4 vars=18 closure=7 cpool=26 bc=1788B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s, a, l, c, D, f, h, d, p, F, m
// closure: $a, Wa, Qa, Ja, Ga, Za, Ya
function {
  if (!(t)) goto L_285;
  if (!(n)) goto L_285;
  r = t.value.match(new RegExp("^\\s*"))[0];
  i = t.value.match(new RegExp("\\s*$"))[0];
  o = n.value.match(new RegExp("^\\s*"))[0];
  s = n.value.match(new RegExp("\\s*$"))[0];
  if (!(e)) goto L_1e1;
  a = $a(r, o);
  e.value = Wa(e.value, o, a);
  t.value = Qa(t.value, a);
  n.value = Qa(n.value, a);
  if (!(u)) goto L_6fb;
  l = Ja(i, s);
  u.value = Ga(u.value, s, l);
  t.value = Za(t.value, l);
  n.value = Za(n.value, l);
  return;
  if (!(n)) goto L_346;
  if (!(e)) goto L_2e7;
  n.value = n.value.replace(new RegExp("^\\s*"), "");
  n.value.replace(new RegExp("^\\s*"), "");
  if (!(u)) goto L_344;
  u.value = u.value.replace(new RegExp("^\\s*"), "");
  u.value.replace(new RegExp("^\\s*"), "");
  return;
  if (!(e)) goto L_548;
  if (!(u)) goto L_548;
  c = u.value.match(new RegExp("^\\s*"))[0];
  D = t.value.match(new RegExp("^\\s*"))[0];
  f = t.value.match(new RegExp("\\s*$"))[0];
  h = $a(c, D);
  t.value = Qa(t.value, h);
  d = Ja(Qa(c, h), f);
  t.value = Za(t.value, d);
  u.value = Ga(u.value, c, d);
  e.value = Wa(e.value, c, c.slice(0, (c.length - d.length)));
  return;
  if (!(u)) goto L_625;
  p = u.value.match(new RegExp("^\\s*"))[0];
  F = Ya(t.value.match(new RegExp("\\s*$"))[0], p);
  t.value = Za(t.value, F);
  return;
  if (!(e)) goto L_6fb;
  m = Ya(e.value.match(new RegExp("\\s*$"))[0], t.value.match(new RegExp("^\\s*"))[0]);
  t.value = Qa(t.value, m);
  return;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=191B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
function {
  if (!(n.ignoreCase)) goto L_72;
  e = e.toLowerCase();
  t = t.toLowerCase();
  t.toLowerCase();
  return (e.trim() === t.trim());
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.segment;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=4 bc=388B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: r, u
function {
  if (!(new RegExp("\\s").test(e))) goto L_a9;
  if (!((null == r))) goto L_5a;
  goto L_180;
  // [栈深重同步 1 -> 0]
  goto L_180;
  // [栈深重同步 1 -> 0]
  if (!(new RegExp("\\s").test(r))) goto L_15a;
  if (!((u[(u.length - 1)] == r))) goto L_130;
  goto L_180;
  // [栈深重同步 1 -> 0]
  goto L_180;
  // [栈深重同步 1 -> 0]
  u.push(e);
  r = e;
  return;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=2 bc=402B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r, arguments
// closure: el
function {
  arguments = <special_object 1>;
  if (!((arguments.length > 1))) goto L_19;
  if (!((undefined !== arguments[1]))) goto L_19;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  n = {};
  if (!({}.intlSegmenter)) goto L_134;
  if (!(("word" != n.intlSegmenter.resolvedOptions().granularity))) goto L_bf;
  throw new Error("The segmenter passed must have a granularity of "word"");
  t = Array.from(n.intlSegmenter.segment(e), function <atom:0>);
  goto L_162;
  if ((e.match(el))) goto L_161;
  t = [];
  u = [];
  r = null;
  t.forEach(function <atom:0>);
  return u;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=2 bc=51B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  if (!((0 == t))) goto L_7;
  return e;
  return e.replace(new RegExp("^\\s+"), "");
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=76B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.map(function <atom:0>).join("");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=106B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: u, r, ul, n
function {
  if (!(e.added)) goto L_28;
  u = e;
  goto L_69;
  // [栈深重同步 1 -> 0]
  if (!(e.removed)) goto L_50;
  r = e;
  goto L_69;
  // [栈深重同步 1 -> 0]
  if ((u)) goto L_56;
  if (!(r)) goto L_62;
  ul(n, r, u, e);
  n = e;
  u = null;
  r = null;
  null;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=1 bc=111B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r
// closure: ul
function {
  if ((!e)) goto L_28;
  if (!(t.oneChangePerToken)) goto L_2c;
  return e;
  n = null;
  u = null;
  r = null;
  e.forEach(function <atom:0>);
  if ((u)) goto L_60;
  if (!(r)) goto L_6c;
  ul(n, r, u, null);
  return e;
}

// fn il  args=3 vars=3 closure=1 cpool=0 bc=40B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: rl
function {
  return rl.diff(e, t, n);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=150B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
// closure: Xa
function {
  t = new RegExp("(\r?\n)|[".concat(Xa, "]+|[^\S\n\r]+|[^").concat(Xa, "]"), "ug");
  if ((e.match(t))) goto L_95;
  return [];
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=4 bc=294B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r, i
function {
  if (!(t.stripTrailingCr)) goto L_56;
  e = e.replace(new RegExp("\\r\\n"), "
");
  e.replace(new RegExp("\\r\\n"), "
");
  n = [];
  u = e.split(new RegExp("(\\n|\\r\\n)"));
  if ((e.split(new RegExp("(\\n|\\r\\n)"))[(u.length - 1)])) goto L_b4;
  u.pop();
  r = 0;
  if (!((r < u.length))) goto L_124;
  i = u[r];
  if (!((r % 2))) goto L_f9;
  if (!(!t.newlineIsToken)) goto L_f9;
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] + i);
  goto L_11f;
  // [栈深重同步 1 -> 0]
  n.push(i);
  goto L_b7;
  return n;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=656B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: this
// closure: Va
function {
  this = this;
  if (!(n.ignoreWhitespace)) goto L_124;
  if (!(n.newlineIsToken)) goto L_79;
  if ((e.includes("
"))) goto L_a3;
  e = e.trim();
  e.trim();
  if (!(n.newlineIsToken)) goto L_f4;
  if ((t.includes("
"))) goto L_224;
  t = t.trim();
  goto L_224;
  // [栈深重同步 1 -> 0]
  if (!(n.ignoreNewlineAtEof)) goto L_224;
  if (!(!n.newlineIsToken)) goto L_224;
  if (!(e.endsWith("
"))) goto L_1cd;
  e = e.slice(0, -1);
  e.slice(0, -1);
  if (!(t.endsWith("
"))) goto L_224;
  t = t.slice(0, -1);
  t.slice(0, -1);
  return Va.prototype.equals.call(this, e, t, n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=2 bc=42B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.split(new RegExp("(\\S.+?[.!?])(?=\\s+|$)"));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return typeof e;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=110B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  if (!(e)) goto L_6b;
  if (!(("function" == typeof Symbol))) goto L_6b;
  if (!((e.constructor === Symbol))) goto L_6b;
  if (!((e !== Symbol.prototype))) goto L_6b;
  return "symbol";
  return typeof e;
}

// fn ll  args=1 vars=1 closure=1 cpool=2 bc=72B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: ll
function {
  if (!(("function" == typeof Symbol))) goto L_41;
  if (!(("symbol" == typeof Symbol.iterator))) goto L_41;
  goto L_43;
  // [栈深重同步 1 -> 0]
  ll = function <atom:0>;
  return function <atom:0>(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=2 bc=42B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.split(new RegExp("([{}:;,]|\\s+)"));   // tail call
}

// fn Dl  args=5 vars=9 closure=2 cpool=0 bc=877B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r
// locals: i, o, s, a
// closure: Dl, ll
function {
  if ((t)) goto L_8;
  t = [];
  if ((n)) goto L_11;
  n = [];
  if (!(u)) goto L_1e;
  e = u(r, e);
  u(r, e);
  i = 0;
  if (!((i < t.length))) goto L_37;
  if (!((t[i] === e))) goto L_32;
  return n[i];
  // add_loc(1)
  goto L_21;
  if (!(("[object Array]" === Object.prototype.toString.call(e)))) goto L_174;
  t.push(e);
  o = new Array(e.length);
  n.push(o);
  i = 0;
  if (!((i < e.length))) goto L_126;
  o[i] = Dl(e[i], t, n, u, r);
  // add_loc(1)
  goto L_10a;
  t.pop();
  n.pop();
  return o;
  if (!(e)) goto L_1c5;
  if (!(e.toJSON)) goto L_1c5;
  e = e.toJSON();
  e.toJSON();
  if (!(("object" === ll(e)))) goto L_369;
  if (!((null !== e))) goto L_369;
  t.push(e);
  o = {};
  n.push(o);
  a = [];
  for (const s of e) {
    if (!(Object.prototype.hasOwnProperty.call(e, s))) goto L_2cd;
    a.push(s);
  }
  <catch>;
  a.sort();
  i = 0;
  if (!((i < a.length))) goto L_31b;
  s = a[i];
  o[a[i]] = Dl(e[s], t, n, u, s);
  // add_loc(1)
  goto L_2fe;
  t.pop();
  n.pop();
  goto L_36b;
  // [栈深重同步 2 -> 0]
  o = e;
  // [栈深重同步 0 -> 2]
  return o;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: n
function {
  if (!((undefined === t))) goto L_7;
  return n;
  return t;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=1 bc=149B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, r
// closure: Dl
function {
  n = t.undefinedReplacement;
  u = t.stringifyReplacer;
  if (!((undefined === u))) goto L_4f;
  goto L_50;
  // [栈深重同步 1 -> 0]
  r = u;
  if (!(("string" == typeof e))) goto L_5d;
  return e;
  return JSON.stringify(Dl(e, null, null, r), r, "  ");
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=4 bc=199B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: Va, cl
function {
  return Va.prototype.equals.call(cl, e.replace(new RegExp(",([\\r\\n])"), "$1"), t.replace(new RegExp(",([\\r\\n])"), "$1"), n);   // tail call
}

// fn hl  args=3 vars=3 closure=1 cpool=0 bc=40B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: fl
function {
  return fl.diff(e, t, n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e.slice();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
function {
  return e;
}

// fn El  args=2 vars=4 closure=0 cpool=0 bc=247B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u
function {
  let u;
  let n;
  n = t.signatures.get(e);
  if (!((null != n))) goto L_59;
  return n;
  u = JSON.stringify(e.toJSON());
  t.signatures.set(e, u);
  return u;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=54B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, u
// closure: n, t
function {
  return n.push({node: e, from: (t + u)});   // tail call
}

// fn Cl  args=2 vars=3 closure=0 cpool=1 bc=51B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
function {
  let n;
  n = [];
  e.forEach(function <atom:0>);
  return n;
}

// fn Al  args=2 vars=2 closure=0 cpool=0 bc=112B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  if (!((t > e.remaining))) goto L_40;
  e.remaining = 0;
  e.isComplete = false;
  return false;
  e.remaining = (e.remaining - t);
  return true;
}

// fn xl  args=3 vars=3 closure=0 cpool=0 bc=58B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
function {
  if (!((t < n))) goto L_39;
  e.push({from: t, to: n});
  return;
}

// fn kl  args=2 vars=3 closure=0 cpool=0 bc=254B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
function {
  let n;
  n = e.deletions[(e.deletions.length - 1)];
  if (!((null == n))) goto L_56;
  goto L_7a;
  // [栈深重同步 1 -> 0]
  if (!((n.position === t))) goto L_a6;
  if (((null == n.nextMatchEnd))) goto L_fd;
  e.deletions.push({position: t, nextMatchEnd: null});
  return;
}

// fn vl  args=2 vars=4 closure=0 cpool=0 bc=202B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u
function {
  let n;
  n = (e.deletions.length - 1);
  if (!((n >= 0))) goto L_c9;
  let u;
  u = e.deletions[n];
  if (((null != u.nextMatchEnd))) goto L_c9;
  if (!((u.position < t))) goto L_bd;
  u.nextMatchEnd = t;
  t;
  n = <n_new>;
  (n--);
  goto L_29;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=2 bc=177B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t
// closure: n
function {
  if (!(!n)) goto L_b0;
  if (!(e.isText)) goto L_85;
  t = e.text;
  if (!((null != e.text))) goto L_7f;
  goto L_80;
  // [栈深重同步 3 -> 2]
  goto L_a7;
  // [栈深重同步 1 -> 0]
  n = e.isAtom;
  e.isAtom;
  return !n;
}

// fn yl  args=1 vars=3 closure=0 cpool=3 bc=209B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n
function {
  let n;
  if (!(e.isText)) goto L_7b;
  t = e.text;
  if (!((null != e.text))) goto L_77;
  goto L_78;
  // [栈深重同步 3 -> 2]
  return new RegExp("\\S").test("");   // tail call
  if (!(e.isAtom)) goto L_a2;
  return true;
  n = false;
  e.descendants(function <atom:0>);
  return n;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=0 bc=266B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, r
// locals: i, o, e#1
// closure: n, u, t
function {
  if (!(e.isText)) goto L_ad;
  let o;
  i = e.text;
  if (!((null != e.text))) goto L_54;
  goto L_55;
  // [栈深重同步 1 -> 0]
  o = "";
  n = (n + o);
  (n + o);
  let e#1;
  e#1 = 1;
  if (!((e#1 <= o.length))) goto L_109;
  u.push(((t + r) + e#1));
  e#1 = <e#1_new>;
  (e#1++);
  goto L_67;
  n = (n + "￼");
  (n + "￼");
  u.push(((t + r) + e.nodeSize));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=76B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n, u
// closure: e, t
function {
  return e.content.cut((n - t), (u - t));   // tail call
}

// fn bl  args=2 vars=4 closure=0 cpool=2 bc=83B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u
function {
  let u;
  let n;
  n = "";
  u = [t];
  e.forEach(function <atom:0>);
  return {text: n, positions: u, fragment: function <atom:0>};
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=211B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u
// closure: r, u
function {
  if (!((0 === r.length))) goto L_32;
  goto L_78;
  // [栈深重同步 1 -> 0]
  if (!((r[(r.length - 1)] !== t))) goto L_78;
  u = (u + "
");
  (u + "
");
  r.push(t);
  u = (u + e);
  (u + e);
  let u;
  u = 1;
  if (!((u <= e.length))) goto L_d2;
  if (!((u === e.length))) goto L_bf;
  goto L_c4;
  // [栈深重同步 3 -> 2]
  r.push((t + u));
  u = <u_new>;
  (u++);
  goto L_88;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=10B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: o, n
function {
  return o(e, (n + 1));   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=1 bc=461B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: <atom:0>, n
// locals: e, t, u
// closure: o, ml, i, Cl
function {
  e = <to_object>(<atom:0>).node;
  t = <to_object>(<atom:0>).from;
  <to_object>(<atom:0>);
  if (!((n >= ml))) goto L_51;
  return false;
  if (!(e.isText)) goto L_cd;
  u = e.text;
  if (!((null != e.text))) goto L_a2;
  goto L_a3;
  // [栈深重同步 2 -> 1]
  i("", t, (t + e.nodeSize));
  goto L_1ca;
  if ((e.isInline)) goto L_115;
  if (!(e.isLeaf)) goto L_149;
  i("￼", t, (t + e.nodeSize));
  goto L_1ca;
  if (!((0 !== e.childCount))) goto L_19b;
  return Cl(e, (t + 1)).every(function <atom:0>);   // tail call
  i("
", t, (t + e.nodeSize));
  return true;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// closure: o, n
function {
  return o(e, n);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=75B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, n
// closure: t
function {
  return t.slice(e, n, true).content;
}

// fn Bl  args=3 vars=7 closure=2 cpool=4 bc=107B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o
// closure: ml, Cl
function {
  let o;
  let i;
  let r;
  let u;
  u = "";
  r = [];
  i = function <atom:0>;
  o = function <atom:0>;
  if (!(e.every(function <atom:0>))) goto L_69;
  return {text: u, positions: r, fragment: function <atom:0>};
  return null;
}

// fn wl  args=1 vars=7 closure=2 cpool=0 bc=275B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, r, u#1, r#1
// closure: nl, gl
function {
  let u;
  let n;
  let t;
  t = [];
  n = 0;
  u = nl(e, e, gl);
  if (!((null == u))) goto L_1e;
  return null;
  let r;
  for (const r of u) {
    let u#1;
    u#1 = r.value.trim();
    if (!((u#1.length > 0))) continue;
    let r#1;
    r#1 = e.indexOf(u#1, n);
    if (!((r#1 < n))) goto L_c0;
    return null;
    // [栈深重同步 0 -> 3]
    n = (r#1 + u#1.length);
    (r#1 + u#1.length);
    t.push({from: r#1, to: n});
  }
  return t;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=36B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, u
// closure: r, Sl, t, n
function {
  if (!((null == r))) goto L_23;
  r = Sl({node: e, from: ((t + 1) + u)}, (n + 1));
  Sl({node: e, from: ((t + 1) + u)}, (n + 1));
  return;
}

// fn Sl  args=2 vars=8 closure=6 cpool=1 bc=473B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: <atom:0>, n
// locals: e, t, u, n#1, r, r#1
// closure: Sl, ml, pl, bl, wl, yl
function {
  e = <to_object>(<atom:0>).node;
  t = <to_object>(<atom:0>).from;
  <to_object>(<atom:0>);
  let r#1;
  if (!((n >= ml))) goto L_53;
  return null;
  if (!(e.isTextblock)) goto L_158;
  let r;
  let n#1;
  if (!((e.content.size > pl))) goto L_c9;
  return null;
  n#1 = bl(e, (t + 1));
  u = wl(n#1.text);
  if (!((null == wl(n#1.text)))) goto L_100;
  goto L_103;
  // [栈深重同步 1 -> 0]
  r = u[0];
  if (!((null == r))) goto L_10e;
  return null;
  return n#1.positions[r.to];
  if (!(e.isAtom)) goto L_1aa;
  if (!(yl(e))) goto L_1a8;
  return (t + e.nodeSize);
  return null;
  r#1 = null;
  e.forEach(function <atom:0>);
  return r#1;
}

// fn Tl  args=3 vars=3 closure=3 cpool=0 bc=369B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// closure: pl, Il, bl
function {
  if (!(((e.node.content.size + t.node.content.size) > pl))) goto L_dd;
  n.isComplete = false;
  goto L_170;
  // [栈深重同步 1 -> 0]
  Il(bl(e.node, (e.from + 1)), bl(t.node, (t.from + 1)), n);
  return;
}

// fn <atom:0>  args=4 vars=8 closure=5 cpool=4 bc=579B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: u, r, i, o
// locals: s, a, l, c
// closure: e, t, xl, n, kl
function {
  let c;
  let l;
  let a;
  let s;
  s = e.positions[u];
  a = e.positions[r];
  l = t.positions[i];
  c = t.positions[o];
  if ((e.fragment(s, a).eq(t.fragment(l, c)))) goto L_242;
  xl(n.selected, l, c);
  if (!(new RegExp("\\S").test(e.text.slice(u, r)))) goto L_242;
  if (!(!new RegExp("\\S").test(t.text.slice(i, o)))) goto L_242;
  kl(n, l);
  return;
}

// fn <atom:0>  args=4 vars=7 closure=3 cpool=4 bc=514B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: n, u, r, i
// locals: o, a, l
// closure: e, t, s
function {
  let l;
  let a;
  let o;
  o = 0;
  a = 0;
  l = Math.min((u - n), (i - r));
  if (!((o < l))) goto L_fa;
  if (!((e.text[(n + o)] === t.text[(r + o)]))) goto L_fa;
  if (!(new RegExp("\\s").test(e.text[(n + o)]))) goto L_fa;
  o = <o_new>;
  (o++);
  goto L_3d;
  if (!((a < (l - o)))) goto L_1c1;
  if (!((e.text[((u - a) - 1)] === t.text[((i - a) - 1)]))) goto L_1c1;
  if (!(new RegExp("\\s").test(e.text[((u - a) - 1)]))) goto L_1c1;
  a = <a_new>;
  (a++);
  goto L_fa;
  s(n, (n + o), r, (r + o));
  s((n + o), (u - a), (r + o), (i - a));
  s((u - a), u, (i - a), i);
  return;
}

// fn Il  args=3 vars=18 closure=7 cpool=2 bc=1044B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, a, l, c, D, f, h, e#1, u#1, e#2, u#2
// closure: xl, kl, wl, Al, nl, gl, vl
function {
  let f;
  let D;
  let c;
  let l;
  let a;
  let s;
  let o;
  let i;
  let r;
  r = wl(e.text);
  i = wl(t.text);
  if (((null == r))) goto L_73;
  if (!((null == i))) goto L_82;
  n.isComplete = false;
  return;
  if (!(!Al(n, (r.length + i.length)))) goto L_92;
  return;
  o = nl(e.text, t.text, gl);
  if (!((null == o))) goto L_f2;
  n.isComplete = false;
  return;
  s = function <atom:0>;
  a = function <atom:0>;
  l = 0;
  c = 0;
  D = 0;
  f = 0;
  if (!((r.length > 0))) goto L_3c1;
  if (!((i.length > 0))) goto L_3c1;
  let h;
  for (const h of o) {
    let e#1;
    u = h.count;
    if (!((null != h.count))) goto L_161;
    goto L_162;
    // [栈深重同步 4 -> 3]
    e#1 = 0;
    if (!(h.removed)) goto L_199;
    l = (l + e#1);
    (l + e#1);
   continue;
    if (!(h.added)) goto L_1ce;
    c = (c + e#1);
    (c + e#1);
   continue;
    let u#1;
    u#1 = 0;
    if (!((u#1 < e#1))) continue;
    let u#2;
    let e#2;
    l = <l_new>;
    e#2 = r[(l++)];
    c = <c_new>;
    u#2 = i[(c++)];
    if (((null == e#2))) goto L_20e;
    if (!((null == u#2))) goto L_222;
    n.isComplete = false;
    return undefined;
    // [栈深重同步 0 -> 3]
    a(D, e#2.from, f, u#2.from);
    s(e#2.from, e#2.to, u#2.from, u#2.to);
    vl(n, t.positions[u#2.to]);
    D = e#2.to;
    e#2.to;
    f = u#2.to;
    u#2.to;
    u#1 = <u#1_new>;
    (u#1++);
    goto L_1d4;
  }
  a(D, e.text.length, f, t.text.length);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=75B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, <atom:0>
// locals: t
function {
  t = <to_object>(<atom:0>).node;
  <to_object>(<atom:0>);
  return (e + t.nodeSize);
}

// fn ql  args=4 vars=6 closure=3 cpool=1 bc=188B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i
// closure: pl, Bl, Il
function {
  let i;
  let r;
  // append([], 0, e)
  // append([], e, t)
  t;
  if (!(([].reduce(function <atom:0>, 0) > pl))) goto L_47;
  n.isComplete = false;
  return;
  r = Bl(e, n.previousDoc, u);
  i = Bl(t, n.selectedDoc, u);
  if (!((null != r))) goto L_ae;
  if (!((null != i))) goto L_ae;
  goto L_bb;
  // [栈深重同步 1 -> 0]
  n.isComplete = false;
  false;
  return;
}

// fn Ml  args=4 vars=4 closure=4 cpool=0 bc=622B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// closure: xl, Tl, Ol, Cl
function {
  if ((e.node.isLeaf)) goto L_b0;
  if (!(!e.node.sameMarkup(t.node))) goto L_164;
  goto L_26d;
  // [栈深重同步 1 -> 0]
  if (!(e.node.isTextblock)) goto L_1b1;
  goto L_26d;
  // [栈深重同步 1 -> 0]
  Ol(Cl(e.node, (e.from + 1)), Cl(t.node, (t.from + 1)), n, (u + 1), (t.from + 1));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=76B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// closure: El, n
function {
  return (El(e.node, n) === El(t.node, n));
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=43B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: <atom:0>
// locals: e
// closure: yl
function {
  e = <to_object>(<atom:0>).node;
  <to_object>(<atom:0>);
  return yl(e);   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=12 cpool=1 bc=410B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: e, r, e#1
// closure: yl, o, s, Ml, n, u, ql, kl, t, a, c, xl
function {
  if (!((1 === o.length))) goto L_28;
  if (!((1 === s.length))) goto L_28;
  Ml(o[0], s[0], n, u);
  goto L_18a;
  if (!((o.length > 0))) goto L_4e;
  if (!((s.length > 0))) goto L_4e;
  ql(o, s, n, u);
  goto L_18a;
  if (!(o.some(function <atom:0>))) goto L_be;
  e = t[a];
  if (!((null == t[a]))) goto L_91;
  goto L_b3;
  // [栈深重同步 4 -> 3]
  r = e.from;
  if (!((null != e.from))) goto L_ba;
  goto L_bd;
  // [栈深重同步 3 -> 2]
  kl(n, c);
  let e#1;
  for (const e#1 of s) {
    xl(n.selected, e#1.from, (e#1.from + e#1.node.nodeSize));
  }
  o = [];
  [];
  s = [];
  [];
  return;
}

// fn Ol  args=5 vars=16 closure=12 cpool=2 bc=855B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u, r
// locals: i, o, s, a, l, c, D, f, e#1, r#1, r#2
// closure: El, yl, Ml, ql, kl, xl, ml, Al, hl, Fl, Sl, vl
function {
  let D;
  let c;
  let l;
  let a;
  let s;
  let o;
  let i;
  if (!((u >= ml))) goto L_29;
  n.isComplete = false;
  return;
  if (!(!Al(n, (e.length + t.length)))) goto L_37;
  return;
  i = hl(e, t, {comparator: function <atom:0>, maxEditLength: Fl, timeout: 100});
  if (!((null == i))) goto L_6e;
  n.isComplete = false;
  return;
  o = [];
  s = [];
  a = 0;
  l = t[(t.length - 1)];
  if (!((null == l))) goto L_8c;
  goto L_f6;
  // [栈深重同步 1 -> 0]
  c = (l.from + l.node.nodeSize);
  D = function <atom:0>;
  let f;
  for (const f of i) {
    if (!(f.removed)) goto L_189;
    // append([], 0, f.value)
    f.value;
    o.push.apply(o, []);
   continue;
    if (!(f.added)) goto L_236;
    // append([], 0, f.value)
    f.value;
    s.push.apply(s, []);
    a = (a + f.value.length);
    (a + f.value.length);
   continue;
    D();
    let e#1;
    e#1 = 0;
    if (!((e#1 < f.value.length))) goto L_31b;
    let r#1;
    r#1 = n.deletions[(n.deletions.length - 1)];
    if (!((null != r#1))) goto L_310;
    if (!((null == r#1.nextMatchEnd))) goto L_310;
    let r#2;
    r#2 = Sl(t[(a + e#1)], u);
    if (!((null != r#2))) goto L_30f;
    vl(n, r#2);
    e#1 = <e#1_new>;
    (e#1++);
    goto L_241;
    a = (a + f.value.length);
    (a + f.value.length);
  }
  D();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  return (e.from - t.from);
}

// fn zl  args=1 vars=4 closure=1 cpool=1 bc=343B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, e#1
// closure: D
function {
  let t;
  t = [];
  let n;
  for (const n of e.sort(function <atom:0>)) {
    let e#1;
    e#1 = t[(t.length - 1)];
    if (!((null != e#1))) goto L_11c;
    if (!((n.from <= e#1.to))) goto L_11c;
    e#1.to = Math.max(e#1.to, n.to);
    goto L_149;
    // [栈深重同步 4 -> 3]
    t.push(D({}, n));
  }
  return t;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=70B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  return (e.position - t.position);
}

// fn Ll  args=1 vars=4 closure=1 cpool=1 bc=427B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, e#1
// closure: D
function {
  let t;
  t = [];
  let n;
  for (const n of e.sort(function <atom:0>)) {
    let e#1;
    e#1 = t[(t.length - 1)];
    if (!((null == e#1))) goto L_4e;
    goto L_72;
    // [栈深重同步 4 -> 3]
    if (!((e#1.position === n.position))) goto L_170;
    if (((null == e#1.nextMatchEnd))) goto L_139;
    if (!((null != n.nextMatchEnd))) goto L_139;
    if (!((n.nextMatchEnd < e#1.nextMatchEnd))) goto L_19d;
    e#1.nextMatchEnd = n.nextMatchEnd;
    goto L_19d;
    // [栈深重同步 4 -> 3]
    t.push(D({}, n));
  }
  return t;
}

// fn Rl  args=2 vars=3 closure=5 cpool=0 bc=209B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n
// closure: dl, Ol, Cl, zl, Ll
function {
  let n;
  n = {selected: [], deletions: [], isComplete: true, previousDoc: e, selectedDoc: t, remaining: dl, signatures: new WeakMap()};
  Ol(Cl(e, 0), Cl(t, 0), n, 0, 0);
  return {selected: zl(n.selected), deletions: Ll(n.deletions), isComplete: n.isComplete};
}

// fn Pl  args=1 vars=8 closure=1 cpool=2 bc=731B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e
// locals: t, n, u, u#1, r, e#1, i
// closure: Nl
function {
  let r;
  let u#1;
  let n;
  let t;
  t = e;
  n = 0;
  if (!(!t.isTextblock)) goto L_117;
  if (!((null !== t.lastChild))) goto L_117;
  let u;
  u = t.lastChild;
  if (!((t === e))) goto L_104;
  goto L_105;
  // [栈深重同步 3 -> 2]
  n = (n + ((t.content.size - u.nodeSize) + 1));
  (n + ((t.content.size - u.nodeSize) + 1));
  t = u;
  u;
  goto L_10;
  if (!(!t.isTextblock)) goto L_182;
  return e.content.size;
  u#1 = t.textBetween(0, t.content.size, "", "
");
  r = u#1.length;
  if (!((null === Nl))) goto L_246;
  let e#1;
  e#1 = u#1.search(new RegExp("\\S+$"));
  if (!((e#1 >= 0))) goto L_242;
  r = e#1;
  e#1;
  goto L_2d1;
  let i;
  for (const i of Nl.segment(u#1)) {
    if (!(i.isWordLike)) goto L_2c2;
    goto L_2c6;
    // [栈深重同步 4 -> 3]
    r = u#1.length;
    u#1.length;
  }
  return ((n + 1) + r);
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=0 bc=698B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
// locals: n, u, e#1, t#1, i
// closure: Nl, r
function {
  let u;
  let n;
  if (!(!e.isTextblock)) goto L_4f;
  return !e.isAtom;
  n = e.textBetween(0, e.content.size, "", "
");
  u = (t + 1);
  if (!((null === Nl))) goto L_1a9;
  let t#1;
  let e#1;
  e#1 = new RegExp("(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:['0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0897-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u17F0-\u17F9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2019\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u20D0-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA827\uA82C\uA830-\uA835\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE6\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDD40-\uDD65\uDD69-\uDD6D\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEC2-\uDEC4\uDEFC-\uDF27\uDF30-\uDF54\uDF70-\uDF85\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC52-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFCA\uDFCC-\uDFD3\uDFE1\uDFE2]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF5A\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDCF0-\uDCF9\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDDD0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF])*", "g");
  t#1 = undefined;
  t#1 = e#1.exec(n);
  if (!((null !== e#1.exec(n)))) goto L_2b7;
  r.push({from: (u + t#1.index), to: ((u + t#1.index) + t#1[0].length)});
  goto L_e7;
  let i;
  for (const i of Nl.segment(n)) {
    if (!(i.isWordLike)) goto L_2ad;
    r.push({from: (u + i.index), to: ((u + i.index) + i.segment.length)});
  }
  return false;
}

// fn jl  args=4 vars=11 closure=1 cpool=1 bc=573B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n, u
// locals: r, i, o, s, e#1, t#1, n#1
// closure: Nl
function {
  let o;
  let i;
  let r;
  if (!((0 === t.length))) goto L_13;
  return [];
  r = [];
  e.descendants(function <atom:0>);
  i = [];
  o = 0;
  let s;
  for (const s of t) {
    let t#1;
    let e#1;
    if (!((o < r.length))) goto L_b7;
    if (!((r[o].to <= s.position))) goto L_b7;
    o = <o_new>;
    (o++);
    goto L_54;
    e#1 = r[o];
    if (!((undefined !== e#1))) goto L_117;
    if (!((e#1.from < s.position))) goto L_117;
    goto L_120;
    // [栈深重同步 4 -> 3]
    t#1 = r[(o - 1)];
    if ((!n)) goto L_1d2;
    if (((null === s.nextMatchEnd))) goto L_1d1;
    if (((undefined === e#1))) goto L_1d1;
    if (!(!(Math.max(s.nextMatchEnd, e#1.to) > u))) continue;
    let n#1;
    if (!((t#1 === e#1))) goto L_1e8;
    goto L_1f1;
    // [栈深重同步 4 -> 3]
    for (const n#1 of [t#1, e#1]) {
      if (!((undefined !== n#1))) goto L_229;
      i.push(n#1);
      // [栈深重同步 3 -> 6]
    }
  }
  return i;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=145B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: <atom:0>
// locals: e, t
// closure: i
function {
  e = <to_object>(<atom:0>).from;
  t = <to_object>(<atom:0>).to;
  <to_object>(<atom:0>);
  if (!((e < i))) goto L_8d;
  return [{from: e, to: Math.min(t, i)}];
  return [];
}

// fn Vl  args=1 vars=7 closure=3 cpool=1 bc=441B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: <atom:0>
// locals: e, t, n, u, r, i
// closure: Rl, Pl, jl
function {
  e = <to_object>(<atom:0>).previousDoc;
  t = <to_object>(<atom:0>).receivedDoc;
  n = <to_object>(<atom:0>).isStreaming;
  u = <to_object>(<atom:0>).endsAtWordBoundary;
  <to_object>(<atom:0>);
  let i;
  let r;
  r = Rl(e, t);
  if (!(!r.isComplete)) goto L_c6;
  return [];
  if (!(n)) goto L_d2;
  if (!(!u)) goto L_d2;
  goto L_115;
  // [栈深重同步 1 -> 0]
  i = t.content.size;
  if (!((r.selected.length > 0))) goto L_166;
  goto L_193;
  // [栈深重同步 1 -> 0]
  return jl(t, r.deletions, n, i).flatMap(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=147B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: <atom:0>
// locals: e, t
// closure: r
function {
  e = <to_object>(<atom:0>).from;
  t = <to_object>(<atom:0>).to;
  <to_object>(<atom:0>);
  return r.sourceMap.textSourceRanges(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=143B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t
function {
  if (((e.from - t.from))) goto L_8e;
  return (e.to - t.to);
}

// fn Ul  args=3 vars=9 closure=4 cpool=4 bc=617B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: e, t, n
// locals: u, r, i, o, s, e#1
// closure: _l, Ia, Ma, Vl
function {
  let o;
  let i;
  let r;
  let u;
  if ((("string" != typeof e))) goto L_2c;
  if ((("string" != typeof t))) goto L_2c;
  if (!(("boolean" != typeof n))) goto L_3d;
  throw new TypeError("Expected previous Markdown, new Markdown, and a streaming boolean");
  if (!(((e.length + t.length) > _l))) goto L_4a;
  return [];
  u = Ia(e);
  r = Ma(t);
  i = Vl({previousDoc: u, receivedDoc: r.document, isStreaming: n, endsAtWordBoundary: new RegExp("\\s$").test(t)}).flatMap(function <atom:0>);
  i.sort(function <atom:0>);
  o = [];
  let s;
  for (const s of i) {
    let e#1;
    e#1 = o[(o.length - 1)];
    if (!((undefined !== e#1))) goto L_231;
    if (!((s.from <= e#1.to))) goto L_231;
    o[(o.length - 1)] = {from: e#1.from, to: Math.max(e#1.to, s.to)};
    goto L_25b;
    // [栈深重同步 4 -> 3]
    o.push(s);
  }
  return o;
}

// fn <atom:0>  args=3 vars=618 closure=0 cpool=722 bc=33155B file=markdown_diff/runtime_bundle/MarkdownDiff
// args: require, module, exports
// locals: e, t, n, u, r, i, o, s, a, l, c, D, f, h, d, p, F, m, g, E, C, A, x, k, v, y, b, B, w, S, T, I, q, M, O, z, L, R, _, N, P, j, V, U, H, $, J, G, W, Q, Z, Y, K, X, ee, te, ne, ue, re, ie, oe, se, ae, le, ce, De, fe, he, de, pe, Fe, me, ge, Ee, Ce, Ae, xe, ke, ve, ye, be, Be, we, Se, Te, Ie, qe, Me, <class_fields_init>, Oe, ze, Le, Re, _e, Ne, Pe, je, Ve, Ue, He, $e, Je, Ge, We, Qe, Ze, Ye, Ke, Xe, et, tt, nt, ut, rt, it, ot, st, at, lt, ct, Dt, ft, ht, dt, pt, Ft, mt, gt, Et, Ct, At, xt, kt, vt, yt, bt, Bt, wt, St, Tt, It, qt, Mt, Ot, zt, Lt, Rt, _t, Nt, Pt, jt, Vt, Ut, Ht, $t, Jt, Gt, Wt, Qt, Zt, Yt, Kt, Xt, en, tn, nn, un, rn, on, sn, an, ln, cn, Dn, fn, hn, dn, pn, Fn, mn, gn, En, Cn, An, xn, kn, vn, yn, bn, Bn, wn, Sn, Tn, In, qn, Mn, _Fragment, <class_fields_init>#1, On, zn, Ln, Rn, _Mark, <class_fields_init>#2, _n, <class_fields_init>#3, Nn, _Slice, <class_fields_init>#4, Pn, jn, Vn, Un, Hn, $n, Jn, Gn, Wn, Qn, Zn, Yn, Kn, _ResolvedPos, <class_fields_init>#5, Xn, <class_fields_init>#6, eu, tu, nu, <class_fields_init>#7, uu, ru, _Node, <class_fields_init>#8, iu, _TextNode, <class_fields_init>#9, ou, su, _ContentMatch, <class_fields_init>#10, au, <class_fields_init>#11, lu, cu, Du, fu, hu, du, pu, Fu, mu, gu, Eu, Cu, Au, xu, ku, vu, yu, _NodeType, <class_fields_init>#12, bu, Bu, <class_fields_init>#13, wu, _MarkType, <class_fields_init>#14, Su, <class_fields_init>#15, Tu, Iu, qu, Mu, Ou, zu, Lu, Ru, _u, Nu, Pu, ju, Vu, Uu, Hu, $u, Ju, Gu, Wu, Qu, Zu, Yu, Ku, Xu, er, tr, nr, ur, rr, ir, or, sr, ar, lr, cr, Dr, fr, hr, dr, pr, Fr, mr, gr, Er, Cr, Ar, xr, kr, vr, yr, br, Br, wr, Sr, Tr, Ir, qr, Mr, Or, zr, Lr, Rr, _r, Nr, Pr, jr, Vr, Ur, Hr, $r, Jr, Gr, Wr, Qr, Zr, Yr, Kr, Xr, ei, ti, ni, ui, ri, ii, oi, si, ai, li, ci, Di, fi, hi, di, pi, Fi, mi, gi, Ei, Ci, Ai, xi, ki, vi, yi, bi, Bi, wi, Si, Ti, Ii, qi, Mi, Oi, zi, Li, Ri, _i, Ni, Pi, ji, Vi, Ui, Hi, $i, Ji, Gi, Wi, Qi, Zi, Yi, Ki, Xi, eo, to, no, uo, ro, io, oo, so, ao, lo, co, Do, fo, ho, po, Fo, mo, go, Eo, Co, Ao, xo, ko, vo, yo, bo, Bo, wo, So, To, Io, qo, Mo, <class_fields_init>#16, Oo, zo, Lo, Ro, _o, No, Po, jo, Vo, Uo, Ho, $o, Jo, Go, Wo, Qo, Zo, Yo, Ko, Xo, es, ts, <class_fields_init>#17, ns, us, rs, is, os, ss, as, ls, cs, Ds, fs, hs, ds, ps, Fs, <class_fields_init>#18, ms, gs, Es, Cs, As, xs, ks, _Processor, <class_fields_init>#19, vs, ys, bs, Bs, ws, Ss, Ts, Is, qs, Ms, Os, zs, Ls, Rs, _s, Ns, Ps, js, Vs, Us, Hs, $s, Js, Gs, Ws, Qs, Zs, Ys, Ks, Xs, ea, ta, na, ua, ra, ia, oa, sa, aa, la, <class_fields_init>#20, ca, <class_fields_init>#21, Da, fa, ha, da, pa, Fa, ma, ga, Ea, Ca, Aa, xa, <class_fields_init>#22, ka, va, ya, ba, Ba, wa, Sa, Ta, Ia, qa, Ma, Oa, za, La, Ra, _a, Na, Pa, ja, Va, Ua, Ha, $a, Ja, Ga, Wa, Qa, Za, Ya, Ka, Xa, el, tl, nl, ul, rl, il, ol, sl, al, ll, cl, Dl, fl, hl, dl, pl, Fl, ml, gl, El, Cl, Al, xl, kl, vl, yl, bl, Bl, wl, Sl, Tl, Il, ql, Ml, Ol, zl, Ll, Rl, _l, Nl, Pl, jl, Vl, Ul
function {
  x = function x;
  k = function k;
  v = function v;
  y = function y;
  w = function w;
  S = function S;
  T = function T;
  q = function q;
  M = function M;
  O = function O;
  z = function z;
  L = function L;
  P = function P;
  H = function H;
  $ = function $;
  J = function J;
  Q = function Q;
  Z = function Z;
  K = function K;
  te = function te;
  ne = function ne;
  ue = function ue;
  re = function re;
  oe = function oe;
  se = function se;
  ae = function ae;
  ce = function ce;
  fe = function fe;
  de = function de;
  pe = function pe;
  Fe = function Fe;
  ge = function ge;
  Ce = function Ce;
  ke = function ke;
  ve = function ve;
  Be = function Be;
  we = function we;
  Te = function Te;
  Ie = function Ie;
  qe = function qe;
  Oe = function Oe;
  ze = function ze;
  Le = function Le;
  Ne = function Ne;
  Pe = function Pe;
  je = function je;
  Ve = function Ve;
  Ue = function Ue;
  He = function He;
  $e = function $e;
  We = function We;
  Qe = function Qe;
  Ye = function Ye;
  Xe = function Xe;
  et = function et;
  ot = function ot;
  st = function st;
  at = function at;
  lt = function lt;
  Dt = function Dt;
  Ft = function Ft;
  mt = function mt;
  gt = function gt;
  Et = function Et;
  Ct = function Ct;
  At = function At;
  kt = function kt;
  yt = function yt;
  Bt = function Bt;
  St = function St;
  Mt = function Mt;
  Ot = function Ot;
  zt = function zt;
  Lt = function Lt;
  Rt = function Rt;
  Nt = function Nt;
  Pt = function Pt;
  Vt = function Vt;
  Jt = function Jt;
  Gt = function Gt;
  Wt = function Wt;
  on = function on;
  sn = function sn;
  an = function an;
  ln = function ln;
  cn = function cn;
  fn = function fn;
  dn = function dn;
  pn = function pn;
  Fn = function Fn;
  mn = function mn;
  gn = function gn;
  En = function En;
  An = function An;
  xn = function xn;
  kn = function kn;
  vn = function vn;
  yn = function yn;
  bn = function bn;
  Bn = function Bn;
  Sn = function Sn;
  Tn = function Tn;
  In = function In;
  qn = function qn;
  zn = function zn;
  Ln = function Ln;
  Pn = function Pn;
  jn = function jn;
  Vn = function Vn;
  Un = function Un;
  Hn = function Hn;
  $n = function $n;
  Jn = function Jn;
  Gn = function Gn;
  Wn = function Wn;
  Qn = function Qn;
  Zn = function Zn;
  Yn = function Yn;
  ou = function ou;
  lu = function lu;
  cu = function cu;
  Du = function Du;
  fu = function fu;
  hu = function hu;
  du = function du;
  pu = function pu;
  Fu = function Fu;
  mu = function mu;
  gu = function gu;
  Eu = function Eu;
  Cu = function Cu;
  Au = function Au;
  xu = function xu;
  ku = function ku;
  vu = function vu;
  bu = function bu;
  Tu = function Tu;
  Iu = function Iu;
  qu = function qu;
  Mu = function Mu;
  zu = function zu;
  Lu = function Lu;
  Ru = function Ru;
  _u = function _u;
  Nu = function Nu;
  Pu = function Pu;
  ju = function ju;
  Ju = function Ju;
  Gu = function Gu;
  Wu = function Wu;
  Qu = function Qu;
  Zu = function Zu;
  Yu = function Yu;
  er = function er;
  tr = function tr;
  nr = function nr;
  ur = function ur;
  rr = function rr;
  ir = function ir;
  or = function or;
  sr = function sr;
  ar = function ar;
  lr = function lr;
  cr = function cr;
  Dr = function Dr;
  fr = function fr;
  hr = function hr;
  dr = function dr;
  pr = function pr;
  Fr = function Fr;
  mr = function mr;
  gr = function gr;
  Er = function Er;
  Cr = function Cr;
  Ar = function Ar;
  xr = function xr;
  kr = function kr;
  vr = function vr;
  yr = function yr;
  br = function br;
  Br = function Br;
  wr = function wr;
  Tr = function Tr;
  Ir = function Ir;
  qr = function qr;
  Mr = function Mr;
  Or = function Or;
  zr = function zr;
  Lr = function Lr;
  Rr = function Rr;
  _r = function _r;
  Nr = function Nr;
  Pr = function Pr;
  jr = function jr;
  Vr = function Vr;
  Ur = function Ur;
  Hr = function Hr;
  $r = function $r;
  Jr = function Jr;
  Gr = function Gr;
  Wr = function Wr;
  Qr = function Qr;
  Zr = function Zr;
  Yr = function Yr;
  Kr = function Kr;
  Xr = function Xr;
  ei = function ei;
  ti = function ti;
  ni = function ni;
  ui = function ui;
  ri = function ri;
  ii = function ii;
  oi = function oi;
  si = function si;
  ai = function ai;
  li = function li;
  ci = function ci;
  Di = function Di;
  fi = function fi;
  hi = function hi;
  di = function di;
  pi = function pi;
  Fi = function Fi;
  mi = function mi;
  gi = function gi;
  Ei = function Ei;
  Ci = function Ci;
  Ai = function Ai;
  xi = function xi;
  ki = function ki;
  vi = function vi;
  yi = function yi;
  bi = function bi;
  wi = function wi;
  Si = function Si;
  Ti = function Ti;
  Ii = function Ii;
  qi = function qi;
  Mi = function Mi;
  Oi = function Oi;
  Li = function Li;
  Ri = function Ri;
  _i = function _i;
  Ni = function Ni;
  Pi = function Pi;
  ji = function ji;
  Vi = function Vi;
  Ui = function Ui;
  Hi = function Hi;
  $i = function $i;
  Ji = function Ji;
  Gi = function Gi;
  Wi = function Wi;
  Qi = function Qi;
  Zi = function Zi;
  Yi = function Yi;
  so = function so;
  lo = function lo;
  co = function co;
  Do = function Do;
  fo = function fo;
  ho = function ho;
  po = function po;
  Fo = function Fo;
  mo = function mo;
  go = function go;
  Eo = function Eo;
  Co = function Co;
  Ao = function Ao;
  xo = function xo;
  vo = function vo;
  yo = function yo;
  bo = function bo;
  Bo = function Bo;
  wo = function wo;
  So = function So;
  To = function To;
  Io = function Io;
  qo = function qo;
  Oo = function Oo;
  zo = function zo;
  Lo = function Lo;
  Ro = function Ro;
  _o = function _o;
  No = function No;
  Po = function Po;
  jo = function jo;
  Uo = function Uo;
  Ho = function Ho;
  $o = function $o;
  Jo = function Jo;
  Wo = function Wo;
  Qo = function Qo;
  Zo = function Zo;
  Ko = function Ko;
  Xo = function Xo;
  es = function es;
  us = function us;
  rs = function rs;
  is = function is;
  os = function os;
  ss = function ss;
  as = function as;
  ls = function ls;
  Ds = function Ds;
  fs = function fs;
  hs = function hs;
  ds = function ds;
  ms = function ms;
  gs = function gs;
  Es = function Es;
  Cs = function Cs;
  ys = function ys;
  bs = function bs;
  Bs = function Bs;
  ws = function ws;
  Ss = function Ss;
  Ts = function Ts;
  Is = function Is;
  qs = function qs;
  Ms = function Ms;
  Rs = function Rs;
  _s = function _s;
  Ns = function Ns;
  Ps = function Ps;
  js = function js;
  Vs = function Vs;
  Us = function Us;
  Hs = function Hs;
  Ys = function Ys;
  Ks = function Ks;
  Xs = function Xs;
  ea = function ea;
  ta = function ta;
  na = function na;
  ua = function ua;
  ra = function ra;
  ia = function ia;
  oa = function oa;
  sa = function sa;
  aa = function aa;
  Da = function Da;
  fa = function fa;
  ha = function ha;
  da = function da;
  pa = function pa;
  Fa = function Fa;
  ma = function ma;
  ga = function ga;
  Ea = function Ea;
  Ca = function Ca;
  Aa = function Aa;
  Ta = function Ta;
  Ia = function Ia;
  qa = function qa;
  Ma = function Ma;
  Oa = function Oa;
  za = function za;
  La = function La;
  Ra = function Ra;
  _a = function _a;
  Na = function Na;
  Pa = function Pa;
  ja = function ja;
  Va = function Va;
  Ua = function Ua;
  $a = function $a;
  Ja = function Ja;
  Ga = function Ga;
  Wa = function Wa;
  Qa = function Qa;
  Za = function Za;
  Ya = function Ya;
  Ka = function Ka;
  nl = function nl;
  ul = function ul;
  il = function il;
  ll = function ll;
  Dl = function Dl;
  hl = function hl;
  El = function El;
  Cl = function Cl;
  Al = function Al;
  xl = function xl;
  kl = function kl;
  vl = function vl;
  yl = function yl;
  bl = function bl;
  Bl = function Bl;
  wl = function wl;
  Sl = function Sl;
  Tl = function Tl;
  Il = function Il;
  ql = function ql;
  Ml = function Ml;
  Ol = function Ol;
  zl = function zl;
  Ll = function Ll;
  Rl = function Rl;
  Pl = function Pl;
  jl = function jl;
  Vl = function Vl;
  Ul = function Ul;
  if (!(module)) goto L_ac0;
  module.sourceMapLineOffset = 1;
  e = Object.create;
  t = Object.defineProperty;
  n = Object.defineProperties;
  u = Object.getOwnPropertyDescriptor;
  r = Object.getOwnPropertyDescriptors;
  i = Object.getOwnPropertyNames;
  o = Object.getOwnPropertySymbols;
  s = Object.getPrototypeOf;
  a = Object.prototype.hasOwnProperty;
  l = Object.prototype.propertyIsEnumerable;
  c = function <atom:0>;
  D = function <atom:0>;
  f = function <atom:0>;
  h = function <atom:0>;
  d = function <atom:0>;
  p = function <atom:0>;
  F = function <atom:0>;
  m = function <atom:0>;
  g = function <atom:0>;
  E = h({modules/markdown/runtime/node_modules/.aspect_rules_js/extend@3.0.2/node_modules/extend/index.js: function <atom:0>});
  C = {};
  d(C, {getDiffHighlights: function <atom:0>});
  module.exports = m(C);
  A = {};
  b = {AElig: "�", AMP: "&", Aacute: "�", Abreve: "Ă", Acirc: "�", Acy: "А", Afr: "𝔄", Agrave: "�", Alpha: "Α", Amacr: "Ā", And: "⩓", Aogon: "Ą", Aopf: "𝔸", ApplyFunction: "⁡", Aring: "�", Ascr: "𝒜", Assign: "≔", Atilde: "�", Auml: "�", Backslash: "∖", Barv: "⫧", Barwed: "⌆", Bcy: "Б", Because: "∵", Bernoullis: "ℬ", Beta: "Β", Bfr: "𝔅", Bopf: "𝔹", Breve: "˘", Bscr: "ℬ", Bumpeq: "≎", CHcy: "Ч", COPY: "�", Cacute: "Ć", Cap: "⋒", CapitalDifferentialD: "ⅅ", Cayleys: "ℭ", Ccaron: "Č", Ccedil: "�", Ccirc: "Ĉ", Cconint: "∰", Cdot: "Ċ", Cedilla: "�", CenterDot: "�", Cfr: "ℭ", Chi: "Χ", CircleDot: "⊙", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", Colon: "∷", Colone: "⩴", Congruent: "≡", Conint: "∯", ContourIntegral: "∮", Copf: "ℂ", Coproduct: "∐", CounterClockwiseContourIntegral: "∳", Cross: "⨯", Cscr: "𝒞", Cup: "⋓", CupCap: "≍", DD: "ⅅ", DDotrahd: "⤑", DJcy: "Ђ", DScy: "Ѕ", DZcy: "Џ", Dagger: "‡", Darr: "↡", Dashv: "⫤", Dcaron: "Ď", Dcy: "Д", Del: "∇", Delta: "Δ", Dfr: "𝔇", DiacriticalAcute: "�", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", Diamond: "⋄", DifferentialD: "ⅆ", Dopf: "𝔻", Dot: "�", DotDot: "⃜", DotEqual: "≐", DoubleContourIntegral: "∯", DoubleDot: "�", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", Downarrow: "⇓", Dscr: "𝒟", Dstrok: "Đ", ENG: "Ŋ", ETH: "�", Eacute: "�", Ecaron: "Ě", Ecirc: "�", Ecy: "Э", Edot: "Ė", Efr: "𝔈", Egrave: "�", Element: "∈", Emacr: "Ē", EmptySmallSquare: "◻", EmptyVerySmallSquare: "▫", Eogon: "Ę", Eopf: "𝔼", Epsilon: "Ε", Equal: "⩵", EqualTilde: "≂", Equilibrium: "⇌", Escr: "ℰ", Esim: "⩳", Eta: "Η", Euml: "�", Exists: "∃", ExponentialE: "ⅇ", Fcy: "Ф", Ffr: "𝔉", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", Fopf: "𝔽", ForAll: "∀", Fouriertrf: "ℱ", Fscr: "ℱ", GJcy: "Ѓ", GT: ">", Gamma: "Γ", Gammad: "Ϝ", Gbreve: "Ğ", Gcedil: "Ģ", Gcirc: "Ĝ", Gcy: "Г", Gdot: "Ġ", Gfr: "𝔊", Gg: "⋙", Gopf: "𝔾", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", Gt: "≫", HARDcy: "Ъ", Hacek: "ˇ", Hat: "^", Hcirc: "Ĥ", Hfr: "ℌ", HilbertSpace: "ℋ", Hopf: "ℍ", HorizontalLine: "─", Hscr: "ℋ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", IEcy: "Е", IJlig: "Ĳ", IOcy: "Ё", Iacute: "�", Icirc: "�", Icy: "И", Idot: "İ", Ifr: "ℑ", Igrave: "�", Im: "ℑ", Imacr: "Ī", ImaginaryI: "ⅈ", Implies: "⇒", Int: "∬", Integral: "∫", Intersection: "⋂", InvisibleComma: "⁣", InvisibleTimes: "⁢", Iogon: "Į", Iopf: "𝕀", Iota: "Ι", Iscr: "ℐ", Itilde: "Ĩ", Iukcy: "І", Iuml: "�", Jcirc: "Ĵ", Jcy: "Й", Jfr: "𝔍", Jopf: "𝕁", Jscr: "𝒥", Jsercy: "Ј", Jukcy: "Є", KHcy: "Х", KJcy: "Ќ", Kappa: "Κ", Kcedil: "Ķ", Kcy: "К", Kfr: "𝔎", Kopf: "𝕂", Kscr: "𝒦", LJcy: "Љ", LT: "<", Lacute: "Ĺ", Lambda: "Λ", Lang: "⟪", Laplacetrf: "ℒ", Larr: "↞", Lcaron: "Ľ", Lcedil: "Ļ", Lcy: "Л", LeftAngleBracket: "⟨", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", LeftRightArrow: "↔", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", Leftarrow: "⇐", Leftrightarrow: "⇔", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", LessLess: "⪡", LessSlantEqual: "⩽", LessTilde: "≲", Lfr: "𝔏", Ll: "⋘", Lleftarrow: "⇚", Lmidot: "Ŀ", LongLeftArrow: "⟵", LongLeftRightArrow: "⟷", LongRightArrow: "⟶", Longleftarrow: "⟸", Longleftrightarrow: "⟺", Longrightarrow: "⟹", Lopf: "𝕃", LowerLeftArrow: "↙", LowerRightArrow: "↘", Lscr: "ℒ", Lsh: "↰", Lstrok: "Ł", Lt: "≪", Map: "⤅", Mcy: "М", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", MinusPlus: "∓", Mopf: "𝕄", Mscr: "ℳ", Mu: "Μ", NJcy: "Њ", Nacute: "Ń", Ncaron: "Ň", Ncedil: "Ņ", Ncy: "Н", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: "
", Nfr: "𝔑", NoBreak: "⁠", NonBreakingSpace: "�", Nopf: "ℕ", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", Nscr: "𝒩", Ntilde: "�", Nu: "Ν", OElig: "Œ", Oacute: "�", Ocirc: "�", Ocy: "О", Odblac: "Ő", Ofr: "𝔒", Ograve: "�", Omacr: "Ō", Omega: "Ω", Omicron: "Ο", Oopf: "𝕆", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", Or: "⩔", Oscr: "𝒪", Oslash: "�", Otilde: "�", Otimes: "⨷", Ouml: "�", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", PartialD: "∂", Pcy: "П", Pfr: "𝔓", Phi: "Φ", Pi: "Π", PlusMinus: "�", Poincareplane: "ℌ", Popf: "ℙ", Pr: "⪻", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", Prime: "″", Product: "∏", Proportion: "∷", Proportional: "∝", Pscr: "𝒫", Psi: "Ψ", QUOT: """, Qfr: "𝔔", Qopf: "ℚ", Qscr: "𝒬", RBarr: "⤐", REG: "�", Racute: "Ŕ", Rang: "⟫", Rarr: "↠", Rarrtl: "⤖", Rcaron: "Ř", Rcedil: "Ŗ", Rcy: "Р", Re: "ℜ", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", Rfr: "ℜ", Rho: "Ρ", RightAngleBracket: "⟩", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", Rightarrow: "⇒", Ropf: "ℝ", RoundImplies: "⥰", Rrightarrow: "⇛", Rscr: "ℛ", Rsh: "↱", RuleDelayed: "⧴", SHCHcy: "Щ", SHcy: "Ш", SOFTcy: "Ь", Sacute: "Ś", Sc: "⪼", Scaron: "Š", Scedil: "Ş", Scirc: "Ŝ", Scy: "С", Sfr: "𝔖", ShortDownArrow: "↓", ShortLeftArrow: "←", ShortRightArrow: "→", ShortUpArrow: "↑", Sigma: "Σ", SmallCircle: "∘", Sopf: "𝕊", Sqrt: "√", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", Sscr: "𝒮", Star: "⋆", Sub: "⋐", Subset: "⋐", SubsetEqual: "⊆", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", SuchThat: "∋", Sum: "∑", Sup: "⋑", Superset: "⊃", SupersetEqual: "⊇", Supset: "⋑", THORN: "�", TRADE: "™", TSHcy: "Ћ", TScy: "Ц", Tab: "	", Tau: "Τ", Tcaron: "Ť", Tcedil: "Ţ", Tcy: "Т", Tfr: "𝔗", Therefore: "∴", Theta: "Θ", ThickSpace: "  ", ThinSpace: " ", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", Topf: "𝕋", TripleDot: "⃛", Tscr: "𝒯", Tstrok: "Ŧ", Uacute: "�", Uarr: "↟", Uarrocir: "⥉", Ubrcy: "Ў", Ubreve: "Ŭ", Ucirc: "�", Ucy: "У", Udblac: "Ű", Ufr: "𝔘", Ugrave: "�", Umacr: "Ū", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", Uopf: "𝕌", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", UpEquilibrium: "⥮", UpTee: "⊥", UpTeeArrow: "↥", Uparrow: "⇑", Updownarrow: "⇕", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", Upsilon: "Υ", Uring: "Ů", Uscr: "𝒰", Utilde: "Ũ", Uuml: "�", VDash: "⊫", Vbar: "⫫", Vcy: "В", Vdash: "⊩", Vdashl: "⫦", Vee: "⋁", Verbar: "‖", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", Vopf: "𝕍", Vscr: "𝒱", Vvdash: "⊪", Wcirc: "Ŵ", Wedge: "⋀", Wfr: "𝔚", Wopf: "𝕎", Wscr: "𝒲", Xfr: "𝔛", Xi: "Ξ", Xopf: "𝕏", Xscr: "𝒳", YAcy: "Я", YIcy: "Ї", YUcy: "Ю", Yacute: "�", Ycirc: "Ŷ", Ycy: "Ы", Yfr: "𝔜", Yopf: "𝕐", Yscr: "𝒴", Yuml: "Ÿ", ZHcy: "Ж", Zacute: "Ź", Zcaron: "Ž", Zcy: "З", Zdot: "Ż", ZeroWidthSpace: "​", Zeta: "Ζ", Zfr: "ℨ", Zopf: "ℤ", Zscr: "𝒵", aacute: "�", abreve: "ă", ac: "∾", acE: "∾̳", acd: "∿", acirc: "�", acute: "�", acy: "а", aelig: "�", af: "⁡", afr: "𝔞", agrave: "�", alefsym: "ℵ", aleph: "ℵ", alpha: "α", amacr: "ā", amalg: "⨿", amp: "&", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "�", angzarr: "⍼", aogon: "ą", aopf: "𝕒", ap: "≈", apE: "⩰", apacir: "⩯", ape: "≊", apid: "≋", apos: "'", approx: "≈", approxeq: "≊", aring: "�", ascr: "𝒶", ast: "*", asymp: "≈", asympeq: "≍", atilde: "�", auml: "�", awconint: "∳", awint: "⨑", bNot: "⫭", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", barvee: "⊽", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", beta: "β", beth: "ℶ", between: "≬", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxDL: "╗", boxDR: "╔", boxDl: "╖", boxDr: "╓", boxH: "═", boxHD: "╦", boxHU: "╩", boxHd: "╤", boxHu: "╧", boxUL: "╝", boxUR: "╚", boxUl: "╜", boxUr: "╙", boxV: "║", boxVH: "╬", boxVL: "╣", boxVR: "╠", boxVh: "╫", boxVl: "╢", boxVr: "╟", boxbox: "⧉", boxdL: "╕", boxdR: "╒", boxdl: "┐", boxdr: "┌", boxh: "─", boxhD: "╥", boxhU: "╨", boxhd: "┬", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxuL: "╛", boxuR: "╘", boxul: "┘", boxur: "└", boxv: "│", boxvH: "╪", boxvL: "╡", boxvR: "╞", boxvh: "┼", boxvl: "┤", boxvr: "├", bprime: "‵", breve: "˘", brvbar: "�", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", bumpeq: "≏", cacute: "ć", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", caps: "∩︀", caret: "⁁", caron: "ˇ", ccaps: "⩍", ccaron: "č", ccedil: "�", ccirc: "ĉ", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", cedil: "�", cemptyv: "⦲", cent: "�", centerdot: "�", cfr: "𝔠", chcy: "ч", check: "✓", checkmark: "✓", chi: "χ", cir: "○", cirE: "⧃", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledR: "�", circledS: "Ⓢ", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", clubs: "♣", clubsuit: "♣", colon: ":", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", conint: "∮", copf: "𝕔", coprod: "∐", copy: "�", copysr: "℗", crarr: "↵", cross: "✗", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", cupbrcap: "⩈", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "�", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dArr: "⇓", dHar: "⥥", dagger: "†", daleth: "ℸ", darr: "↓", dash: "‐", dashv: "⊣", dbkarow: "⤏", dblac: "˝", dcaron: "ď", dcy: "д", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", ddotseq: "⩷", deg: "�", delta: "δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", dharl: "⇃", dharr: "⇂", diam: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "�", digamma: "ϝ", disin: "⋲", div: "�", divide: "�", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", dot: "˙", doteq: "≐", doteqdot: "≑", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", downarrow: "↓", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", dscy: "ѕ", dsol: "⧶", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", dzigrarr: "⟿", eDDot: "⩷", eDot: "≑", eacute: "�", easter: "⩮", ecaron: "ě", ecir: "≖", ecirc: "�", ecolon: "≕", ecy: "э", edot: "ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", eg: "⪚", egrave: "�", egs: "⪖", egsdot: "⪘", el: "⪙", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", empty: "∅", emptyset: "∅", emptyv: "∅", emsp13: " ", emsp14: " ", emsp: " ", eng: "ŋ", ensp: " ", eogon: "ę", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", equals: "=", equest: "≟", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erDot: "≓", erarr: "⥱", escr: "ℯ", esdot: "≐", esim: "≂", eta: "η", eth: "�", euml: "�", euro: "€", excl: "!", exist: "∃", expectation: "ℰ", exponentiale: "ⅇ", fallingdotseq: "≒", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", filig: "ﬁ", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", forall: "∀", fork: "⋔", forkv: "⫙", fpartint: "⨍", frac12: "�", frac13: "⅓", frac14: "�", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "�", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", gE: "≧", gEl: "⪌", gacute: "ǵ", gamma: "γ", gammad: "ϝ", gap: "⪆", gbreve: "ğ", gcirc: "ĝ", gcy: "г", gdot: "ġ", ge: "≥", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", gg: "≫", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", gl: "≷", glE: "⪒", gla: "⪥", glj: "⪤", gnE: "≩", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", grave: "`", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", hArr: "⇔", hairsp: " ", half: "�", hamilt: "ℋ", hardcy: "ъ", harr: "↔", harrcir: "⥈", harrw: "↭", hbar: "ℏ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", horbar: "―", hscr: "𝒽", hslash: "ℏ", hstrok: "ħ", hybull: "⁃", hyphen: "‐", iacute: "�", ic: "⁣", icirc: "�", icy: "и", iecy: "е", iexcl: "�", iff: "⇔", ifr: "𝔦", igrave: "�", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", imacr: "ī", image: "ℑ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", intcal: "⊺", integers: "ℤ", intercal: "⊺", intlarhk: "⨗", intprod: "⨼", iocy: "ё", iogon: "į", iopf: "𝕚", iota: "ι", iprod: "⨼", iquest: "�", iscr: "𝒾", isin: "∈", isinE: "⋹", isindot: "⋵", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", iukcy: "і", iuml: "�", jcirc: "ĵ", jcy: "й", jfr: "𝔧", jmath: "ȷ", jopf: "𝕛", jscr: "𝒿", jsercy: "ј", jukcy: "є", kappa: "κ", kappav: "ϰ", kcedil: "ķ", kcy: "к", kfr: "𝔨", kgreen: "ĸ", khcy: "х", kjcy: "ќ", kopf: "𝕜", kscr: "𝓀", lAarr: "⇚", lArr: "⇐", lAtail: "⤛", lBarr: "⤎", lE: "≦", lEg: "⪋", lHar: "⥢", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", laquo: "�", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", late: "⪭", lates: "⪭︀", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", lcedil: "ļ", lceil: "⌈", lcub: "{", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", leftarrow: "←", leftarrowtail: "↢", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", leftthreetimes: "⋋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", lessgtr: "≶", lesssim: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", lg: "≶", lgE: "⪑", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", ll: "≪", llarr: "⇇", llcorner: "⌞", llhard: "⥫", lltri: "◺", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnE: "≨", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", longleftrightarrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltrPar: "⦖", ltri: "◃", ltrie: "⊴", ltrif: "◂", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", mDDot: "∺", macr: "�", male: "♂", malt: "✠", maltese: "✠", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", mdash: "—", measuredangle: "∡", mfr: "𝔪", mho: "℧", micro: "�", mid: "∣", midast: "*", midcir: "⫰", middot: "�", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", mp: "∓", mscr: "𝓂", mstpos: "∾", mu: "μ", multimap: "⊸", mumap: "⊸", nGg: "⋙̸", nGt: "≫⃒", nGtv: "≫̸", nLeftarrow: "⇍", nLeftrightarrow: "⇎", nLl: "⋘̸", nLt: "≪⃒", nLtv: "≪̸", nRightarrow: "⇏", nVDash: "⊯", nVdash: "⊮", nabla: "∇", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: "�", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", ndash: "–", ne: "≠", neArr: "⇗", nearhk: "⤤", nearr: "↗", nearrow: "↗", nedot: "≐̸", nequiv: "≢", nesear: "⤨", nesim: "≂̸", nexist: "∄", nexists: "∄", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", ngsim: "≵", ngt: "≯", ngtr: "≯", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", nlArr: "⇍", nlE: "≦̸", nlarr: "↚", nldr: "‥", nle: "≰", nleftarrow: "↚", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nlsim: "≴", nlt: "≮", nltri: "⋪", nltrie: "⋬", nmid: "∤", nopf: "𝕟", not: "�", notin: "∉", notinE: "⋹̸", notindot: "⋵̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntilde: "�", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", num: "#", numero: "№", numsp: " ", nvDash: "⊭", nvHarr: "⤄", nvap: "≍⃒", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwArr: "⇖", nwarhk: "⤣", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", oS: "Ⓢ", oacute: "�", oast: "⊛", ocir: "⊚", ocirc: "�", ocy: "о", odash: "⊝", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", ofcir: "⦿", ofr: "𝔬", ogon: "˛", ograve: "�", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", omega: "ω", omicron: "ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", opar: "⦷", operp: "⦹", oplus: "⊕", or: "∨", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "�", ordm: "�", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oscr: "ℴ", oslash: "�", osol: "⊘", otilde: "�", otimes: "⊗", otimesas: "⨶", ouml: "�", ovbar: "⌽", par: "∥", para: "�", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", plusmn: "�", plussim: "⨦", plustwo: "⨧", pm: "�", pointint: "⨕", popf: "𝕡", pound: "�", pr: "≺", prE: "⪳", prap: "⪷", prcue: "≼", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", primes: "ℙ", prnE: "⪵", prnap: "⪹", prnsim: "⋨", prod: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", psi: "ψ", puncsp: " ", qfr: "𝔮", qint: "⨌", qopf: "𝕢", qprime: "⁗", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: """, rAarr: "⇛", rArr: "⇒", rAtail: "⤜", rBarr: "⤏", rHar: "⥤", race: "∽̱", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "�", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", rarrw: "↝", ratail: "⤚", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", rcedil: "ŗ", rceil: "⌉", rcub: "}", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", reg: "�", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", rhov: "ϱ", rightarrow: "→", rightarrowtail: "↣", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", rightthreetimes: "⋌", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", rsaquo: "›", rscr: "𝓇", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", ruluhar: "⥨", rx: "℞", sacute: "ś", sbquo: "‚", sc: "≻", scE: "⪴", scap: "⪸", scaron: "š", sccue: "≽", sce: "⪰", scedil: "ş", scirc: "ŝ", scnE: "⪶", scnap: "⪺", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", seArr: "⇘", searhk: "⤥", searr: "↘", searrow: "↘", sect: "�", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", sfrown: "⌢", sharp: "♯", shchcy: "щ", shcy: "ш", shortmid: "∣", shortparallel: "∥", shy: "�", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "�", sub: "⊂", subE: "⫅", subdot: "⪽", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", sum: "∑", sung: "♪", sup1: "�", sup2: "�", sup3: "�", sup: "⊃", supE: "⫆", supdot: "⪾", supdsub: "⫘", supe: "⊇", supedot: "⫄", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swArr: "⇙", swarhk: "⤦", swarr: "↙", swarrow: "↙", swnwar: "⤪", szlig: "�", target: "⌖", tau: "τ", tbrk: "⎴", tcaron: "ť", tcedil: "ţ", tcy: "т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", there4: "∴", therefore: "∴", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", thinsp: " ", thkap: "≈", thksim: "∼", thorn: "�", tilde: "˜", times: "�", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", tscy: "ц", tshcy: "ћ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uArr: "⇑", uHar: "⥣", uacute: "�", uarr: "↑", ubrcy: "ў", ubreve: "ŭ", ucirc: "�", ucy: "у", udarr: "⇅", udblac: "ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", ugrave: "�", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", uml: "�", uogon: "ų", uopf: "𝕦", uparrow: "↑", updownarrow: "↕", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", upsi: "υ", upsih: "ϒ", upsilon: "υ", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", urtri: "◹", uscr: "𝓊", utdot: "⋰", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uuml: "�", uwangle: "⦧", vArr: "⇕", vBar: "⫨", vBarv: "⫩", vDash: "⊨", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vcy: "в", vdash: "⊢", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", vert: "|", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", vprop: "∝", vrtri: "⊳", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", vzigzag: "⦚", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", wedgeq: "≙", weierp: "℘", wfr: "𝔴", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacute: "�", yacy: "я", ycirc: "ŷ", ycy: "ы", yen: "�", yfr: "𝔶", yicy: "ї", yopf: "𝕪", yscr: "𝓎", yucy: "ю", yuml: "�", zacute: "ź", zcaron: "ž", zcy: "з", zdot: "ż", zeetrf: "ℨ", zeta: "ζ", zfr: "𝔷", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", zscr: "𝓏", zwj: "‍", zwnj: "‌"};
  B = {}.hasOwnProperty;
  I = {}.hasOwnProperty;
  R = Q(new RegExp("[A-Za-z]"));
  _ = Q(new RegExp("[\\dA-Za-z]"));
  N = Q(new RegExp("[#-'*+\\--9=?A-Z^-~]"));
  j = Q(new RegExp("\\d"));
  V = Q(new RegExp("[\\dA-Fa-f]"));
  U = Q(new RegExp("[!-/:-@[-`{-~]"));
  G = Q(new RegExp("(?:[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B60\u1B7D-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F])|(?:[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD803[\uDD8E\uDD8F]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDC00-\uDCEF\uDD00-\uDEB3\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF])", ""));
  W = Q(new RegExp("\\s"));
  Y = {tokenize: K};
  X = {tokenize: te};
  ee = {tokenize: ne};
  ie = {name: "attention", resolveAll: oe, tokenize: se};
  le = {name: "autolink", tokenize: ce};
  De = {partial: true, tokenize: fe};
  he = {continuation: {tokenize: pe}, exit: Fe, name: "blockQuote", tokenize: de};
  me = {name: "characterEscape", tokenize: ge};
  Ee = {name: "characterReference", tokenize: Ce};
  Ae = {partial: true, tokenize: ve};
  xe = {concrete: true, name: "codeFenced", tokenize: ke};
  ye = {name: "codeIndented", tokenize: Be};
  be = {partial: true, tokenize: we};
  Se = {name: "codeText", previous: Ie, resolve: Te, tokenize: qe};
  let <class_fields_init>;
  class Me extends undefined { ... }
  <proto:Me>.get = function <atom:0>;
  <proto:Me>.length = function <atom:0>;
  <proto:Me>.shift = function <atom:0>;
  <proto:Me>.slice = function <atom:0>;
  <proto:Me>.splice = function <atom:0>;
  <proto:Me>.pop = function <atom:0>;
  <proto:Me>.push = function <atom:0>;
  <proto:Me>.pushMany = function <atom:0>;
  <proto:Me>.unshift = function <atom:0>;
  <proto:Me>.unshiftMany = function <atom:0>;
  <proto:Me>.setCursor = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Me>;
  // close_loc <class_fields_init>
  Me = function <atom:0>;
  Re = {resolve: Ne, tokenize: Pe};
  _e = {partial: true, tokenize: je};
  Je = {name: "definition", tokenize: We};
  Ge = {partial: true, tokenize: Qe};
  Ze = {name: "hardBreakEscape", tokenize: Ye};
  Ke = {name: "headingAtx", resolve: Xe, tokenize: et};
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483465>>] = "header";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483466>>] = "hr";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483467>>] = "html";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483468>>] = "iframe";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483469>>] = "legend";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483470>>] = "li";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483471>>] = "link";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483472>>] = "main";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483473>>] = "menu";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483474>>] = "menuitem";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483475>>] = "nav";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483476>>] = "noframes";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483477>>] = "ol";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483478>>] = "optgroup";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483479>>] = "option";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483480>>] = "p";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483481>>] = "param";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483482>>] = "search";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483483>>] = "section";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483484>>] = "summary";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483485>>] = "table";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483486>>] = "tbody";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483487>>] = "td";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483488>>] = "tfoot";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483489>>] = "th";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483490>>] = "thead";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483491>>] = "title";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483492>>] = "tr";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483493>>] = "track";
  ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"][<<bad:2147483494>>] = "ul";
  tt = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head"];
  nt = ["pre", "script", "style", "textarea"];
  ut = {concrete: true, name: "htmlFlow", resolveTo: ot, tokenize: st};
  rt = {partial: true, tokenize: lt};
  it = {partial: true, tokenize: at};
  ct = {name: "htmlText", tokenize: Dt};
  ft = {name: "labelEnd", resolveAll: Ft, resolveTo: mt, tokenize: gt};
  ht = {tokenize: Et};
  dt = {tokenize: Ct};
  pt = {tokenize: At};
  xt = {name: "labelStartImage", resolveAll: ft.resolveAll, tokenize: kt};
  vt = {name: "labelStartLink", resolveAll: ft.resolveAll, tokenize: yt};
  bt = {name: "lineEnding", tokenize: Bt};
  wt = {name: "thematicBreak", tokenize: St};
  Tt = {continuation: {tokenize: Ot}, exit: Lt, name: "list", tokenize: Mt};
  It = {partial: true, tokenize: Rt};
  qt = {partial: true, tokenize: zt};
  _t = {name: "setextUnderline", resolveTo: Nt, tokenize: Pt};
  jt = {tokenize: Vt};
  Ut = {resolveAll: Gt()};
  Ht = Jt("string");
  $t = Jt("text");
  Qt = {};
  d(Qt, {attentionMarkers: function <atom:0>, contentInitial: function <atom:0>, disable: function <atom:0>, document: function <atom:0>, flow: function <atom:0>, flowInitial: function <atom:0>, insideSpan: function <atom:0>, string: function <atom:0>, text: function <atom:0>});
  Zt = {<bad:2147483475>: Tt, <bad:2147483476>: Tt, <bad:2147483478>: Tt, <bad:2147483481>: Tt, <bad:2147483482>: Tt, <bad:2147483483>: Tt, <bad:2147483484>: Tt, <bad:2147483485>: Tt, <bad:2147483486>: Tt, <bad:2147483487>: Tt, <bad:2147483488>: Tt, <bad:2147483489>: Tt, <bad:2147483490>: Tt, <bad:2147483495>: he};
  Yt = {<bad:2147483524>: Je};
  {}[-2] = ye;
  ye;
  {}[-1] = ye;
  ye;
  Kt = {<bad:2147483465>: ye};
  Xt = {<bad:2147483468>: Ke, <bad:2147483475>: wt, <bad:2147483478>: [_t, wt], <bad:2147483493>: ut, <bad:2147483494>: _t, <bad:2147483528>: wt, <bad:2147483529>: xe, <bad:2147483559>: xe};
  en = {<bad:2147483471>: Ee, <bad:2147483525>: me};
  {}[-5] = bt;
  bt;
  {}[-4] = bt;
  bt;
  {}[-3] = bt;
  bt;
  tn = {<bad:2147483466>: xt, <bad:2147483471>: Ee, <bad:2147483475>: ie, <bad:2147483493>: [le, ct], <bad:2147483524>: vt, <bad:2147483525>: [Ze, me], <bad:2147483526>: ft, <bad:2147483528>: ie, <bad:2147483529>: Se};
  nn = {null: [ie, Ut]};
  un = {null: [42, 95]};
  rn = {null: []};
  Dn = new RegExp("[\\0\\t\\n\\r]");
  hn = new RegExp("\\\\([!-/:-@[-`{-~])|&(#(?:\\d{1,7}|x[\\da-f]{1,6})|[\\da-z]{1,31});");
  Cn = {}.hasOwnProperty;
  Bn.prototype = {constructor: Bn, find: function <atom:0>, get: function <atom:0>, update: function <atom:0>, remove: function <atom:0>, addToStart: function <atom:0>, addToEnd: function <atom:0>, addBefore: function <atom:0>, forEach: function <atom:0>, prepend: function <atom:0>, append: function <atom:0>, subtract: function <atom:0>, toObject: function <atom:0>, size: function <atom:0>};
  Bn.from = function <atom:0>;
  wn = Bn;
  let _Fragment;
  let <class_fields_init>#1;
  class _Fragment extends undefined { ... }
  <proto:_Fragment>.nodesBetween = function <atom:0>;
  <proto:_Fragment>.descendants = function <atom:0>;
  <proto:_Fragment>.textBetween = function <atom:0>;
  <proto:_Fragment>.append = function <atom:0>;
  <proto:_Fragment>.cut = function <atom:0>;
  <proto:_Fragment>.cutByIndex = function <atom:0>;
  <proto:_Fragment>.replaceChild = function <atom:0>;
  <proto:_Fragment>.addToStart = function <atom:0>;
  <proto:_Fragment>.addToEnd = function <atom:0>;
  <proto:_Fragment>.eq = function <atom:0>;
  <proto:_Fragment>.firstChild = function <atom:0>;
  <proto:_Fragment>.lastChild = function <atom:0>;
  <proto:_Fragment>.childCount = function <atom:0>;
  <proto:_Fragment>.child = function <atom:0>;
  <proto:_Fragment>.maybeChild = function <atom:0>;
  <proto:_Fragment>.forEach = function <atom:0>;
  <proto:_Fragment>.findDiffStart = function <atom:0>;
  <proto:_Fragment>.findDiffEnd = function <atom:0>;
  <proto:_Fragment>.findIndex = function <atom:0>;
  <proto:_Fragment>.toString = function <atom:0>;
  <proto:_Fragment>.toStringInner = function <atom:0>;
  <proto:_Fragment>.toJSON = function <atom:0>;
  function <atom:0>.fromJSON = function <atom:0>;
  function <atom:0>.fromArray = function <atom:0>;
  function <atom:0>.from = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:_Fragment>;
  _Fragment = function <atom:0>;
  // close_loc <class_fields_init>#1
  // close_loc _Fragment
  Mn = function <atom:0>;
  function <atom:0>.empty = new Mn([], 0);
  On = {index: 0, offset: 0};
  let _Mark;
  let <class_fields_init>#2;
  class _Mark extends undefined { ... }
  <proto:_Mark>.addToSet = function <atom:0>;
  <proto:_Mark>.removeFromSet = function <atom:0>;
  <proto:_Mark>.isInSet = function <atom:0>;
  <proto:_Mark>.eq = function <atom:0>;
  <proto:_Mark>.toJSON = function <atom:0>;
  function <atom:0>.fromJSON = function <atom:0>;
  function <atom:0>.sameSet = function <atom:0>;
  function <atom:0>.setFrom = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:_Mark>;
  _Mark = function <atom:0>;
  // close_loc <class_fields_init>#2
  // close_loc _Mark
  Rn = function <atom:0>;
  function <atom:0>.none = [];
  let <class_fields_init>#3;
  class _n extends Error { ... }
  <class_fields_init>#3 = undefined;
  <proto:_n>;
  // close_loc <class_fields_init>#3
  _n = function <atom:0>;
  let _Slice;
  let <class_fields_init>#4;
  class _Slice extends undefined { ... }
  <proto:_Slice>.size = function <atom:0>;
  <proto:_Slice>.insertAt = function <atom:0>;
  <proto:_Slice>.removeBetween = function <atom:0>;
  <proto:_Slice>.eq = function <atom:0>;
  <proto:_Slice>.toString = function <atom:0>;
  <proto:_Slice>.toJSON = function <atom:0>;
  function <atom:0>.fromJSON = function <atom:0>;
  function <atom:0>.maxOpen = function <atom:0>;
  <class_fields_init>#4 = undefined;
  <proto:_Slice>;
  _Slice = function <atom:0>;
  // close_loc <class_fields_init>#4
  // close_loc _Slice
  Nn = function <atom:0>;
  function <atom:0>.empty = new Nn(Mn.empty, 0, 0);
  let _ResolvedPos;
  let <class_fields_init>#5;
  class _ResolvedPos extends undefined { ... }
  <proto:_ResolvedPos>.resolveDepth = function <atom:0>;
  <proto:_ResolvedPos>.parent = function <atom:0>;
  <proto:_ResolvedPos>.doc = function <atom:0>;
  <proto:_ResolvedPos>.node = function <atom:0>;
  <proto:_ResolvedPos>.index = function <atom:0>;
  <proto:_ResolvedPos>.indexAfter = function <atom:0>;
  <proto:_ResolvedPos>.start = function <atom:0>;
  <proto:_ResolvedPos>.end = function <atom:0>;
  <proto:_ResolvedPos>.before = function <atom:0>;
  <proto:_ResolvedPos>.after = function <atom:0>;
  <proto:_ResolvedPos>.textOffset = function <atom:0>;
  <proto:_ResolvedPos>.nodeAfter = function <atom:0>;
  <proto:_ResolvedPos>.nodeBefore = function <atom:0>;
  <proto:_ResolvedPos>.posAtIndex = function <atom:0>;
  <proto:_ResolvedPos>.marks = function <atom:0>;
  <proto:_ResolvedPos>.marksAcross = function <atom:0>;
  <proto:_ResolvedPos>.sharedDepth = function <atom:0>;
  <proto:_ResolvedPos>.blockRange = function <atom:0>;
  <proto:_ResolvedPos>.sameParent = function <atom:0>;
  <proto:_ResolvedPos>.max = function <atom:0>;
  <proto:_ResolvedPos>.min = function <atom:0>;
  <proto:_ResolvedPos>.toString = function <atom:0>;
  function <atom:0>.resolve = function <atom:0>;
  function <atom:0>.resolveCached = function <atom:0>;
  <class_fields_init>#5 = undefined;
  <proto:_ResolvedPos>;
  _ResolvedPos = function <atom:0>;
  // close_loc <class_fields_init>#5
  // close_loc _ResolvedPos
  Kn = function <atom:0>;
  let <class_fields_init>#6;
  class Xn extends undefined { ... }
  <class_fields_init>#6 = undefined;
  <proto:Xn>;
  // close_loc <class_fields_init>#6
  Xn = function <atom:0>;
  eu = 12;
  tu = new WeakMap();
  let <class_fields_init>#7;
  class nu extends undefined { ... }
  <proto:nu>.start = function <atom:0>;
  <proto:nu>.end = function <atom:0>;
  <proto:nu>.parent = function <atom:0>;
  <proto:nu>.startIndex = function <atom:0>;
  <proto:nu>.endIndex = function <atom:0>;
  <class_fields_init>#7 = undefined;
  <proto:nu>;
  // close_loc <class_fields_init>#7
  nu = function <atom:0>;
  uu = Object.create(null);
  let _Node;
  let <class_fields_init>#8;
  class _Node extends undefined { ... }
  <proto:_Node>.children = function <atom:0>;
  <proto:_Node>.nodeSize = function <atom:0>;
  <proto:_Node>.childCount = function <atom:0>;
  <proto:_Node>.child = function <atom:0>;
  <proto:_Node>.maybeChild = function <atom:0>;
  <proto:_Node>.forEach = function <atom:0>;
  <proto:_Node>.nodesBetween = function <atom:0>;
  <proto:_Node>.descendants = function <atom:0>;
  <proto:_Node>.textContent = function <atom:0>;
  <proto:_Node>.textBetween = function <atom:0>;
  <proto:_Node>.firstChild = function <atom:0>;
  <proto:_Node>.lastChild = function <atom:0>;
  <proto:_Node>.eq = function <atom:0>;
  <proto:_Node>.sameMarkup = function <atom:0>;
  <proto:_Node>.hasMarkup = function <atom:0>;
  <proto:_Node>.copy = function <atom:0>;
  <proto:_Node>.mark = function <atom:0>;
  <proto:_Node>.cut = function <atom:0>;
  <proto:_Node>.slice = function <atom:0>;
  <proto:_Node>.replace = function <atom:0>;
  <proto:_Node>.nodeAt = function <atom:0>;
  <proto:_Node>.childAfter = function <atom:0>;
  <proto:_Node>.childBefore = function <atom:0>;
  <proto:_Node>.resolve = function <atom:0>;
  <proto:_Node>.resolveNoCache = function <atom:0>;
  <proto:_Node>.rangeHasMark = function <atom:0>;
  <proto:_Node>.isBlock = function <atom:0>;
  <proto:_Node>.isTextblock = function <atom:0>;
  <proto:_Node>.inlineContent = function <atom:0>;
  <proto:_Node>.isInline = function <atom:0>;
  <proto:_Node>.isText = function <atom:0>;
  <proto:_Node>.isLeaf = function <atom:0>;
  <proto:_Node>.isAtom = function <atom:0>;
  <proto:_Node>.toString = function <atom:0>;
  <proto:_Node>.contentMatchAt = function <atom:0>;
  <proto:_Node>.canReplace = function <atom:0>;
  <proto:_Node>.canReplaceWith = function <atom:0>;
  <proto:_Node>.canAppend = function <atom:0>;
  <proto:_Node>.check = function <atom:0>;
  <proto:_Node>.toJSON = function <atom:0>;
  function <atom:0>.fromJSON = function <atom:0>;
  <class_fields_init>#8 = undefined;
  <proto:_Node>;
  _Node = function <atom:0>;
  // close_loc <class_fields_init>#8
  // close_loc _Node
  ru = function <atom:0>;
  function <atom:0>.prototype.text = undefined;
  let _TextNode;
  let <class_fields_init>#9;
  class _TextNode extends ru { ... }
  <proto:_TextNode>.toString = function <atom:0>;
  <proto:_TextNode>.textContent = function <atom:0>;
  <proto:_TextNode>.textBetween = function <atom:0>;
  <proto:_TextNode>.nodeSize = function <atom:0>;
  <proto:_TextNode>.mark = function <atom:0>;
  <proto:_TextNode>.withText = function <atom:0>;
  <proto:_TextNode>.cut = function <atom:0>;
  <proto:_TextNode>.eq = function <atom:0>;
  <proto:_TextNode>.toJSON = function <atom:0>;
  <class_fields_init>#9 = undefined;
  <proto:_TextNode>;
  _TextNode = function <atom:0>;
  // close_loc <class_fields_init>#9
  // close_loc _TextNode
  iu = function <atom:0>;
  let _ContentMatch;
  let <class_fields_init>#10;
  class _ContentMatch extends undefined { ... }
  function <atom:0>.parse = function <atom:0>;
  <proto:_ContentMatch>.matchType = function <atom:0>;
  <proto:_ContentMatch>.matchFragment = function <atom:0>;
  <proto:_ContentMatch>.inlineContent = function <atom:0>;
  <proto:_ContentMatch>.defaultType = function <atom:0>;
  <proto:_ContentMatch>.compatible = function <atom:0>;
  <proto:_ContentMatch>.fillBefore = function <atom:0>;
  <proto:_ContentMatch>.findWrapping = function <atom:0>;
  <proto:_ContentMatch>.computeWrapping = function <atom:0>;
  <proto:_ContentMatch>.edgeCount = function <atom:0>;
  <proto:_ContentMatch>.edge = function <atom:0>;
  <proto:_ContentMatch>.toString = function <atom:0>;
  <class_fields_init>#10 = undefined;
  <proto:_ContentMatch>;
  _ContentMatch = function <atom:0>;
  // close_loc <class_fields_init>#10
  // close_loc _ContentMatch
  su = function <atom:0>;
  function <atom:0>.empty = new su(true);
  let <class_fields_init>#11;
  class au extends undefined { ... }
  <proto:au>.next = function <atom:0>;
  <proto:au>.eat = function <atom:0>;
  <proto:au>.err = function <atom:0>;
  <class_fields_init>#11 = undefined;
  <proto:au>;
  // close_loc <class_fields_init>#11
  au = function <atom:0>;
  let _NodeType;
  let <class_fields_init>#12;
  class _NodeType extends undefined { ... }
  <proto:_NodeType>.isInline = function <atom:0>;
  <proto:_NodeType>.isTextblock = function <atom:0>;
  <proto:_NodeType>.isLeaf = function <atom:0>;
  <proto:_NodeType>.isAtom = function <atom:0>;
  <proto:_NodeType>.isInGroup = function <atom:0>;
  <proto:_NodeType>.whitespace = function <atom:0>;
  <proto:_NodeType>.hasRequiredAttrs = function <atom:0>;
  <proto:_NodeType>.compatibleContent = function <atom:0>;
  <proto:_NodeType>.computeAttrs = function <atom:0>;
  <proto:_NodeType>.create = function <atom:0>;
  <proto:_NodeType>.createChecked = function <atom:0>;
  <proto:_NodeType>.createAndFill = function <atom:0>;
  <proto:_NodeType>.validContent = function <atom:0>;
  <proto:_NodeType>.checkContent = function <atom:0>;
  <proto:_NodeType>.checkAttrs = function <atom:0>;
  <proto:_NodeType>.allowsMarkType = function <atom:0>;
  <proto:_NodeType>.allowsMarks = function <atom:0>;
  <proto:_NodeType>.allowedMarks = function <atom:0>;
  function <atom:0>.compile = function <atom:0>;
  <class_fields_init>#12 = undefined;
  <proto:_NodeType>;
  _NodeType = function <atom:0>;
  // close_loc <class_fields_init>#12
  // close_loc _NodeType
  yu = function <atom:0>;
  let <class_fields_init>#13;
  class Bu extends undefined { ... }
  <proto:Bu>.isRequired = function <atom:0>;
  <class_fields_init>#13 = undefined;
  <proto:Bu>;
  // close_loc <class_fields_init>#13
  Bu = function <atom:0>;
  let _MarkType;
  let <class_fields_init>#14;
  class _MarkType extends undefined { ... }
  <proto:_MarkType>.create = function <atom:0>;
  function <atom:0>.compile = function <atom:0>;
  <proto:_MarkType>.removeFromSet = function <atom:0>;
  <proto:_MarkType>.isInSet = function <atom:0>;
  <proto:_MarkType>.checkAttrs = function <atom:0>;
  <proto:_MarkType>.excludes = function <atom:0>;
  <class_fields_init>#14 = undefined;
  <proto:_MarkType>;
  _MarkType = function <atom:0>;
  // close_loc <class_fields_init>#14
  // close_loc _MarkType
  wu = function <atom:0>;
  let <class_fields_init>#15;
  class Su extends undefined { ... }
  <proto:Su>.node = function <atom:0>;
  <proto:Su>.text = function <atom:0>;
  <proto:Su>.mark = function <atom:0>;
  <proto:Su>.nodeType = function <atom:0>;
  <class_fields_init>#15 = undefined;
  <proto:Su>;
  // close_loc <class_fields_init>#15
  Su = function <atom:0>;
  Ou = function <atom:0>;
  Vu = [];
  Uu = true;
  Hu = false;
  $u = "skip";
  Ku = "phrasing";
  Xu = ["autolink", "link", "image", "label"];
  vr.peek = kr;
  Sr = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"];
  Or.peek = zr;
  ti.peek = ni;
  oi.peek = si;
  ai.peek = li;
  ci.peek = Di;
  fi.peek = hi;
  pi.peek = Fi;
  mi.peek = gi;
  Bi = Ou(["break", "delete", "emphasis", "footnote", "footnoteReference", "image", "imageReference", "inlineCode", "inlineMath", "link", "linkReference", "mdxJsxTextElement", "mdxTextExpression", "strong", "text", "textDirective"]);
  Ti.peek = Ii;
  zi = {blockquote: Pr, break: Hr, code: Wr, definition: Yr, emphasis: ti, hardBreak: Hr, heading: ii, html: oi, image: ai, imageReference: ci, inlineCode: fi, link: pi, linkReference: mi, list: ki, listItem: yi, paragraph: bi, root: wi, strong: Ti, text: qi, thematicBreak: Oi};
  Ki = {tokenize: fo, partial: true};
  Xi = {tokenize: ho, partial: true};
  eo = {tokenize: po, partial: true};
  to = {tokenize: Fo, partial: true};
  no = {tokenize: mo, partial: true};
  uo = {name: "wwwAutolink", tokenize: co, previous: go};
  ro = {name: "protocolAutolink", tokenize: Do, previous: Eo};
  io = {name: "emailAutolink", tokenize: lo, previous: Co};
  oo = {};
  ao = 48;
  if (!((ao < 123))) goto L_7515;
  oo[ao] = io;
  ao = (ao ++);
  if (!((58 === (ao ++)))) goto L_7503;
  ao = 65;
  goto L_7512;
  // [栈深重同步 1 -> 0]
  if (!((91 === ao))) goto L_7512;
  ao = 97;
  97;
  goto L_74de;
  oo[43] = io;
  oo[45] = io;
  oo[46] = io;
  oo[95] = io;
  oo[72] = [io, ro];
  oo[104] = [io, ro];
  oo[87] = [io, uo];
  oo[119] = [io, uo];
  ko = {tokenize: Io, partial: true};
  let <class_fields_init>#16;
  class Mo extends undefined { ... }
  <proto:Mo>.add = function <atom:0>;
  <proto:Mo>.consume = function <atom:0>;
  <class_fields_init>#16 = undefined;
  <proto:Mo>;
  // close_loc <class_fields_init>#16
  Mo = function <atom:0>;
  Vo = {name: "tasklistCheck", tokenize: Ho};
  Go = {};
  Yo = F(E());
  let <class_fields_init>#17;
  class ts extends Error { ... }
  <class_fields_init>#17 = undefined;
  <proto:ts>;
  // close_loc <class_fields_init>#17
  ts = function <atom:0>;
  function <atom:0>.prototype.file = "";
  ts.prototype.name = "";
  ts.prototype.reason = "";
  ts.prototype.message = "";
  ts.prototype.stack = "";
  ts.prototype.column = undefined;
  ts.prototype.line = undefined;
  ts.prototype.ancestors = undefined;
  ts.prototype.cause = undefined;
  ts.prototype.fatal = undefined;
  ts.prototype.place = undefined;
  ts.prototype.ruleId = undefined;
  ts.prototype.source = undefined;
  ns = {basename: us, dirname: rs, extname: is, join: os, sep: "/"};
  cs = {cwd: Ds};
  ps = ["history", "path", "basename", "stem", "extname", "dirname"];
  let <class_fields_init>#18;
  class Fs extends undefined { ... }
  <proto:Fs>.basename = function <atom:0>;
  <proto:Fs>.basename = function <atom:0>;
  <proto:Fs>.dirname = function <atom:0>;
  <proto:Fs>.dirname = function <atom:0>;
  <proto:Fs>.extname = function <atom:0>;
  <proto:Fs>.extname = function <atom:0>;
  <proto:Fs>.path = function <atom:0>;
  <proto:Fs>.path = function <atom:0>;
  <proto:Fs>.stem = function <atom:0>;
  <proto:Fs>.stem = function <atom:0>;
  <proto:Fs>.fail = function <atom:0>;
  <proto:Fs>.info = function <atom:0>;
  <proto:Fs>.message = function <atom:0>;
  <proto:Fs>.toString = function <atom:0>;
  <class_fields_init>#18 = undefined;
  <proto:Fs>;
  // close_loc <class_fields_init>#18
  Fs = function <atom:0>;
  As = function <atom:0>;
  xs = {}.hasOwnProperty;
  let _Processor;
  let <class_fields_init>#19;
  class _Processor extends As { ... }
  <proto:_Processor>.copy = function <atom:0>;
  <proto:_Processor>.data = function <atom:0>;
  <proto:_Processor>.freeze = function <atom:0>;
  <proto:_Processor>.parse = function <atom:0>;
  <proto:_Processor>.process = function <atom:0>;
  <proto:_Processor>.processSync = function <atom:0>;
  <proto:_Processor>.run = function <atom:0>;
  <proto:_Processor>.runSync = function <atom:0>;
  <proto:_Processor>.stringify = function <atom:0>;
  <proto:_Processor>.use = function <atom:0>;
  <class_fields_init>#19 = undefined;
  <proto:_Processor>;
  _Processor = function <atom:0>;
  // close_loc <class_fields_init>#19
  // close_loc _Processor
  ks = function <atom:0>;
  vs = new function <atom:0>().freeze();
  Os = new RegExp("^[A-Za-z0-9_-]{1,128}$");
  zs = 32;
  Ls = 262144;
  $s = {default: null};
  Js = "(regular_list_item|task_list_item|list_item)+";
  Gs = {href: {}, title: $s, disabled: $s, isAutolink: $s, isGeneratedAutolink: $s};
  Ws = {blockquote: [], bullet_list: ["spread"], code_block: ["lang", "language"], doc: ["theme", "liveNotes"], hard_break: [], heading: ["level"], horizontal_rule: [], list: ["spread"], list_item: [], ordered_list: ["order", "spread", "startingNumber"], paragraph: [], regular_list_item: [], table: [], table_cell: ["align", "colspan", "columnIndex", "rowIndex", "rowspan"], table_row: [], task_list_item: ["checked"]};
  Qs = new Set(["bold", "code", "em", "italic", "link", "strikethrough", "strong"]);
  Zs = new Set(Object.keys(Gs));
  let <class_fields_init>#20;
  class la extends undefined { ... }
  <proto:la>.clipped = function <atom:0>;
  <proto:la>.checked = function <atom:0>;
  <proto:la>.text = function <atom:0>;
  <proto:la>.textRange = function <atom:0>;
  <proto:la>.html = function <atom:0>;
  <proto:la>.inlineCode = function <atom:0>;
  <proto:la>.codeBlock = function <atom:0>;
  <class_fields_init>#20 = undefined;
  <proto:la>;
  // close_loc <class_fields_init>#20
  la = function <atom:0>;
  let <class_fields_init>#21;
  class ca extends undefined { ... }
  <proto:ca>.capture = function <atom:0>;
  <proto:ca>.restore = function <atom:0>;
  <proto:ca>.addText = function <atom:0>;
  <proto:ca>.finish = function <atom:0>;
  <proto:ca>.textSourceRanges = function <atom:0>;
  <class_fields_init>#21 = undefined;
  <proto:ca>;
  // close_loc <class_fields_init>#21
  ca = function <atom:0>;
  let <class_fields_init>#22;
  class xa extends Error { ... }
  <class_fields_init>#22 = undefined;
  <proto:xa>;
  // close_loc <class_fields_init>#22
  xa = function <atom:0>;
  ka = {schema: Ks(), nodeAttributesReason: ta, image: undefined};
  va = "<!-- empty paragraph -->";
  ya = "<!-- -->";
  ba = "<!-- list boundary -->";
  Ba = new RegExp("^(?:<br>|<br\\/>|<br \\/>)$");
  wa = new RegExp("^[ \\t]*<br(?:\\/| \\/)?>(?:[ \\t]*\\n)?");
  Sa = vs.copy().use(Qo).use(Wo, {singleTilde: false}).use(Ea).freeze();
  Va.prototype = {diff: function <atom:0>, addToPath: function <atom:0>, extractCommon: function <atom:0>, equals: function <atom:0>, removeEmpty: function <atom:0>, castInput: function <atom:0>, tokenize: function <atom:0>, join: function <atom:0>, postProcess: function <atom:0>};
  Ha = new Va();
  Xa = "a-zA-Z0-9_\u{C0}-\u{FF}\u{D8}-\u{F6}\u{F8}-\u{2C6}\u{2C8}-\u{2D7}\u{2DE}-\u{2FF}\u{1E00}-\u{1EFF}";
  el = new RegExp("[".concat(Xa, "]+|\s+|[^").concat(Xa, "]"), "ug");
  tl = new Va();
  new Va().equals = function <atom:0>;
  tl.tokenize = function <atom:0>;
  tl.join = function <atom:0>;
  tl.postProcess = function <atom:0>;
  rl = new Va();
  new Va().tokenize = function <atom:0>;
  ol = new Va();
  new Va().tokenize = function <atom:0>;
  ol.equals = function <atom:0>;
  sl = new Va();
  new Va().tokenize = function <atom:0>;
  al = new Va();
  new Va().tokenize = function <atom:0>;
  cl = new Va();
  new Va().useLongestToken = true;
  cl.tokenize = ol.tokenize;
  cl.castInput = function <atom:0>;
  cl.equals = function <atom:0>;
  fl = new Va();
  new Va().tokenize = function <atom:0>;
  fl.removeEmpty = function <atom:0>;
  fl.join = function <atom:0>;
  dl = 200000;
  pl = 200000;
  Fl = 2000;
  ml = 12;
  if (!(("undefined" != typeof Intl))) goto L_80e7;
  if (!(("function" == typeof Intl.Segmenter))) goto L_80e7;
  goto L_80e8;
  // [栈深重同步 2 -> 1]
  gl = {ignoreCase: false, oneChangePerToken: true, intlSegmenter: undefined, maxEditLength: Fl, timeout: 100};
  _l = 20000;
  if (!(("undefined" != typeof Intl))) goto L_817e;
  if (!(("function" == typeof Intl.Segmenter))) goto L_817e;
  goto L_817f;
  // [栈深重同步 1 -> 0]
  Nl = null;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=markdown_diff/runtime_bundle/MarkdownDiff
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
