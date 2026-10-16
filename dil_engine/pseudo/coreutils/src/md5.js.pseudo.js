// fn n  args=2 vars=6 closure=5 cpool=0 bc=2085B file=coreutils/src/md5
// args: t, n
// locals: r, f, i, s
// closure: e, o, u, c, h
function {
  let s;
  let i;
  let f;
  let r;
  r = t[0];
  f = t[1];
  i = t[2];
  s = t[3];
  r = e(r, f, i, s, n[0], 7, -680876936);
  e(r, f, i, s, n[0], 7, -680876936);
  s = e(s, r, f, i, n[1], 12, -389564586);
  e(s, r, f, i, n[1], 12, -389564586);
  i = e(i, s, r, f, n[2], 17, 606105819);
  e(i, s, r, f, n[2], 17, 606105819);
  f = e(f, i, s, r, n[3], 22, -1044525330);
  e(f, i, s, r, n[3], 22, -1044525330);
  r = e(r, f, i, s, n[4], 7, -176418897);
  e(r, f, i, s, n[4], 7, -176418897);
  s = e(s, r, f, i, n[5], 12, 1200080426);
  e(s, r, f, i, n[5], 12, 1200080426);
  i = e(i, s, r, f, n[6], 17, -1473231341);
  e(i, s, r, f, n[6], 17, -1473231341);
  f = e(f, i, s, r, n[7], 22, -45705983);
  e(f, i, s, r, n[7], 22, -45705983);
  r = e(r, f, i, s, n[8], 7, 1770035416);
  e(r, f, i, s, n[8], 7, 1770035416);
  s = e(s, r, f, i, n[9], 12, -1958414417);
  e(s, r, f, i, n[9], 12, -1958414417);
  i = e(i, s, r, f, n[10], 17, -42063);
  e(i, s, r, f, n[10], 17, -42063);
  f = e(f, i, s, r, n[11], 22, -1990404162);
  e(f, i, s, r, n[11], 22, -1990404162);
  r = e(r, f, i, s, n[12], 7, 1804603682);
  e(r, f, i, s, n[12], 7, 1804603682);
  s = e(s, r, f, i, n[13], 12, -40341101);
  e(s, r, f, i, n[13], 12, -40341101);
  i = e(i, s, r, f, n[14], 17, -1502002290);
  e(i, s, r, f, n[14], 17, -1502002290);
  f = e(f, i, s, r, n[15], 22, 1236535329);
  e(f, i, s, r, n[15], 22, 1236535329);
  r = o(r, f, i, s, n[1], 5, -165796510);
  o(r, f, i, s, n[1], 5, -165796510);
  s = o(s, r, f, i, n[6], 9, -1069501632);
  o(s, r, f, i, n[6], 9, -1069501632);
  i = o(i, s, r, f, n[11], 14, 643717713);
  o(i, s, r, f, n[11], 14, 643717713);
  f = o(f, i, s, r, n[0], 20, -373897302);
  o(f, i, s, r, n[0], 20, -373897302);
  r = o(r, f, i, s, n[5], 5, -701558691);
  o(r, f, i, s, n[5], 5, -701558691);
  s = o(s, r, f, i, n[10], 9, 38016083);
  o(s, r, f, i, n[10], 9, 38016083);
  i = o(i, s, r, f, n[15], 14, -660478335);
  o(i, s, r, f, n[15], 14, -660478335);
  f = o(f, i, s, r, n[4], 20, -405537848);
  o(f, i, s, r, n[4], 20, -405537848);
  r = o(r, f, i, s, n[9], 5, 568446438);
  o(r, f, i, s, n[9], 5, 568446438);
  s = o(s, r, f, i, n[14], 9, -1019803690);
  o(s, r, f, i, n[14], 9, -1019803690);
  i = o(i, s, r, f, n[3], 14, -187363961);
  o(i, s, r, f, n[3], 14, -187363961);
  f = o(f, i, s, r, n[8], 20, 1163531501);
  o(f, i, s, r, n[8], 20, 1163531501);
  r = o(r, f, i, s, n[13], 5, -1444681467);
  o(r, f, i, s, n[13], 5, -1444681467);
  s = o(s, r, f, i, n[2], 9, -51403784);
  o(s, r, f, i, n[2], 9, -51403784);
  i = o(i, s, r, f, n[7], 14, 1735328473);
  o(i, s, r, f, n[7], 14, 1735328473);
  f = o(f, i, s, r, n[12], 20, -1926607734);
  o(f, i, s, r, n[12], 20, -1926607734);
  r = u(r, f, i, s, n[5], 4, -378558);
  u(r, f, i, s, n[5], 4, -378558);
  s = u(s, r, f, i, n[8], 11, -2022574463);
  u(s, r, f, i, n[8], 11, -2022574463);
  i = u(i, s, r, f, n[11], 16, 1839030562);
  u(i, s, r, f, n[11], 16, 1839030562);
  f = u(f, i, s, r, n[14], 23, -35309556);
  u(f, i, s, r, n[14], 23, -35309556);
  r = u(r, f, i, s, n[1], 4, -1530992060);
  u(r, f, i, s, n[1], 4, -1530992060);
  s = u(s, r, f, i, n[4], 11, 1272893353);
  u(s, r, f, i, n[4], 11, 1272893353);
  i = u(i, s, r, f, n[7], 16, -155497632);
  u(i, s, r, f, n[7], 16, -155497632);
  f = u(f, i, s, r, n[10], 23, -1094730640);
  u(f, i, s, r, n[10], 23, -1094730640);
  r = u(r, f, i, s, n[13], 4, 681279174);
  u(r, f, i, s, n[13], 4, 681279174);
  s = u(s, r, f, i, n[0], 11, -358537222);
  u(s, r, f, i, n[0], 11, -358537222);
  i = u(i, s, r, f, n[3], 16, -722521979);
  u(i, s, r, f, n[3], 16, -722521979);
  f = u(f, i, s, r, n[6], 23, 76029189);
  u(f, i, s, r, n[6], 23, 76029189);
  r = u(r, f, i, s, n[9], 4, -640364487);
  u(r, f, i, s, n[9], 4, -640364487);
  s = u(s, r, f, i, n[12], 11, -421815835);
  u(s, r, f, i, n[12], 11, -421815835);
  i = u(i, s, r, f, n[15], 16, 530742520);
  u(i, s, r, f, n[15], 16, 530742520);
  f = u(f, i, s, r, n[2], 23, -995338651);
  u(f, i, s, r, n[2], 23, -995338651);
  r = c(r, f, i, s, n[0], 6, -198630844);
  c(r, f, i, s, n[0], 6, -198630844);
  s = c(s, r, f, i, n[7], 10, 1126891415);
  c(s, r, f, i, n[7], 10, 1126891415);
  i = c(i, s, r, f, n[14], 15, -1416354905);
  c(i, s, r, f, n[14], 15, -1416354905);
  f = c(f, i, s, r, n[5], 21, -57434055);
  c(f, i, s, r, n[5], 21, -57434055);
  r = c(r, f, i, s, n[12], 6, 1700485571);
  c(r, f, i, s, n[12], 6, 1700485571);
  s = c(s, r, f, i, n[3], 10, -1894986606);
  c(s, r, f, i, n[3], 10, -1894986606);
  i = c(i, s, r, f, n[10], 15, -1051523);
  c(i, s, r, f, n[10], 15, -1051523);
  f = c(f, i, s, r, n[1], 21, -2054922799);
  c(f, i, s, r, n[1], 21, -2054922799);
  r = c(r, f, i, s, n[8], 6, 1873313359);
  c(r, f, i, s, n[8], 6, 1873313359);
  s = c(s, r, f, i, n[15], 10, -30611744);
  c(s, r, f, i, n[15], 10, -30611744);
  i = c(i, s, r, f, n[6], 15, -1560198380);
  c(i, s, r, f, n[6], 15, -1560198380);
  f = c(f, i, s, r, n[13], 21, 1309151649);
  c(f, i, s, r, n[13], 21, 1309151649);
  r = c(r, f, i, s, n[4], 6, -145523070);
  c(r, f, i, s, n[4], 6, -145523070);
  s = c(s, r, f, i, n[11], 10, -1120210379);
  c(s, r, f, i, n[11], 10, -1120210379);
  i = c(i, s, r, f, n[2], 15, 718787259);
  c(i, s, r, f, n[2], 15, 718787259);
  f = c(f, i, s, r, n[9], 21, -343485551);
  c(f, i, s, r, n[9], 21, -343485551);
  t[0] = h(r, t[0]);
  t[1] = h(f, t[1]);
  t[2] = h(i, t[2]);
  t[3] = h(s, t[3]);
  return;
}

// fn r  args=6 vars=6 closure=1 cpool=0 bc=32B file=coreutils/src/md5
// args: t, n, r, e, o, u
// closure: h
function {
  n = h(h(n, t), h(e, u));
  return h(((n << o) | (n >>> (32 - o))), r);   // tail call
}

// fn e  args=7 vars=7 closure=1 cpool=0 bc=23B file=coreutils/src/md5
// args: t, n, e, o, u, c, f
// closure: r
function {
  return r(((n & e) | (~n & o)), t, n, u, c, f);   // tail call
}

// fn o  args=7 vars=7 closure=1 cpool=0 bc=23B file=coreutils/src/md5
// args: t, n, e, o, u, c, f
// closure: r
function {
  return r(((n & o) | (e & ~o)), t, n, u, c, f);   // tail call
}

// fn u  args=7 vars=7 closure=1 cpool=0 bc=20B file=coreutils/src/md5
// args: t, n, e, o, u, c, f
// closure: r
function {
  return r(((n ^ e) ^ o), t, n, u, c, f);   // tail call
}

// fn c  args=7 vars=7 closure=1 cpool=0 bc=21B file=coreutils/src/md5
// args: t, n, e, o, u, c, f
// closure: r
function {
  return r((e ^ (n | ~o)), t, n, u, c, f);   // tail call
}

// fn f  args=1 vars=5 closure=2 cpool=0 bc=371B file=coreutils/src/md5
// args: t
// locals: r, e, o, u
// closure: n, i
function {
  let u;
  let o;
  let e;
  let r;
  r = t.length;
  e = [1732584193, -271733879, -1732584194, 271733878];
  o = 0;
  o = 64;
  64;
  if (!((o <= t.length))) goto L_7b;
  n(e, i(t.substring((o - 64), o)));
  o = (o + 64);
  (o + 64);
  goto L_30;
  t = t.substring((o - 64));
  u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  o = 0;
  0;
  if (!((o < t.length))) goto L_110;
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] | (t.charCodeAt(o) << ((o % 4) << 3)));
  o = <o_new>;
  (o++);
  goto L_c1;
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] | (128 << ((o % 4) << 3)));
  if (!((o > 55))) goto L_159;
  n(e, u);
  o = 0;
  0;
  if (!((o < 16))) goto L_159;
  u[o] = 0;
  o = <o_new>;
  (o++);
  goto L_13f;
  u[14] = (8 * r);
  n(e, u);
  return e;
}

// fn i  args=1 vars=3 closure=0 cpool=0 bc=228B file=coreutils/src/md5
// args: t
// locals: n, r
function {
  let n;
  n = [];
  let r;
  r = 0;
  if (!((r < 64))) goto L_e0;
  n[(r >> 2)] = (((t.charCodeAt(r) + (t.charCodeAt((r + 1)) << 8)) + (t.charCodeAt((r + 2)) << 16)) + (t.charCodeAt((r + 3)) << 24));
  r = (r + 4);
  (r + 4);
  goto L_c;
  return n;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=7B file=coreutils/src/md5
// args: t
// closure: d, f
function {
  return d(f(t));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=13B file=coreutils/src/md5
// args: t
// closure: d, f
function {
  t.hash = function <atom:0>;
  return;
}

// fn l  args=1 vars=3 closure=1 cpool=0 bc=73B file=coreutils/src/md5
// args: t
// locals: n, r
// closure: s
function {
  let r;
  let n;
  n = "";
  r = 0;
  if (!((r < 4))) goto L_45;
  n = (n + (s[((t >> ((8 * r) + 4)) & 15)] + s[((t >> (8 * r)) & 15)]));
  (n + (s[((t >> ((8 * r) + 4)) & 15)] + s[((t >> (8 * r)) & 15)]));
  r = <r_new>;
  (r++);
  goto L_a;
  return n;
}

// fn d  args=1 vars=2 closure=1 cpool=0 bc=74B file=coreutils/src/md5
// args: t
// locals: n
// closure: l
function {
  let n;
  n = 0;
  if (!((n < t.length))) goto L_24;
  t[n] = l(t[n]);
  n = <n_new>;
  (n++);
  goto L_5;
  return t.join("");   // tail call
}

// fn h  args=2 vars=2 closure=0 cpool=1 bc=7B file=coreutils/src/md5
// args: t, n
function {
  return ((t + n) & 4294967295.0);
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=12 bc=178B file=coreutils/src/md5
// args: require, module, exports
// locals: t, n, r, e, o, u, c, f, i, s, l, d, h
function {
  n = function n;
  r = function r;
  e = function e;
  o = function o;
  u = function u;
  c = function c;
  f = function f;
  i = function i;
  l = function l;
  d = function d;
  h = function h;
  let s;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.md5 = undefined;
  if ((t)) goto L_83;
  t = {};
  exports.md5 = {};
  function <atom:0>({});
  s = "0123456789abcdef".split("");
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=coreutils/src/md5
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
