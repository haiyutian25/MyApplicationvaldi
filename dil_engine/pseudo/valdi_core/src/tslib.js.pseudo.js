// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=16B file=valdi_core/src/tslib
// args: t, n
// closure: e, r
function {
  if (!(r)) goto L_c;
  goto L_d;
  // [栈深重同步 3 -> 2]
  e[t] = n;
  return n;
}

// fn r  args=2 vars=2 closure=1 cpool=1 bc=128B file=valdi_core/src/tslib
// args: e, r
// closure: t
function {
  if (!((e !== t))) goto L_7c;
  if (!(("function" == typeof Object.create))) goto L_6f;
  goto L_7c;
  // [栈深重同步 1 -> 0]
  e.__esModule = true;
  true;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=9B file=valdi_core/src/tslib
// args: n
// closure: e, r, t
function {
  e(r(t, r(n)));
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=2 bc=241B file=valdi_core/src/tslib
// args: e
// locals: t, r, this
// closure: module
function {
  this = this;
  r = function r;
  if (!(("object" == typeof global))) goto L_1a;
  goto L_3d;
  // [栈深重同步 1 -> 0]
  if (!(("object" == typeof self))) goto L_2f;
  goto L_3d;
  // [栈深重同步 1 -> 0]
  if (!(("object" == typeof this))) goto L_3c;
  goto L_3d;
  // [栈深重同步 1 -> 0]
  t = {};
  if (!(("function" == typeof define))) goto L_8b;
  if (!(define.amd)) goto L_8b;
  goto L_f0;
  // [栈深重同步 1 -> 0]
  if (!(("object" == typeof module))) goto L_eb;
  if (!(("object" == typeof module.exports))) goto L_eb;
  goto L_f0;
  // [栈深重同步 1 -> 0]
  e(r(t));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=12B file=valdi_core/src/tslib
// args: e, t
function {
  e.__proto__ = t;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=132B file=valdi_core/src/tslib
// args: e, t
// locals: r
function {
  for (const r of t) {
    if (!(Object.prototype.hasOwnProperty.call(t, r))) goto L_7e;
    e[r] = t[r];
    t[r];
  }
  return;
}

// fn r  args=0 vars=1 closure=1 cpool=0 bc=14B file=valdi_core/src/tslib
// locals: this
// closure: e
function {
  this = this;
  this.constructor = e;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=161B file=valdi_core/src/tslib
// args: e, t
// locals: r
// closure: R
function {
  r = function r;
  if (!(("function" != typeof t))) goto L_2f;
  if (!((null !== t))) goto L_2f;
  throw new TypeError((("Class extends value " + String(t)) + " is not a constructor or null"));
  R(e, t);
  if (!((null === t))) goto L_66;
  goto L_97;
  // [栈深重同步 2 -> 1]
  r.prototype = t.prototype;
  e.prototype = new r();
  return;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=161B file=valdi_core/src/tslib
// args: e
// locals: t, r, n, o, arguments
function {
  arguments = <special_object 1>;
  r = 1;
  n = arguments.length;
  if (!((r < n))) goto L_9f;
  t = arguments[r];
  for (const o of arguments[r]) {
    if (!(Object.prototype.hasOwnProperty.call(t, o))) goto L_94;
    e[o] = t[o];
    t[o];
  }
  <catch>;
  goto L_a;
  // [栈深重同步 2 -> 0]
  return e;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=478B file=valdi_core/src/tslib
// args: e, t
// locals: r, n, o
function {
  r = {};
  for (const n of e) {
    if (!(Object.prototype.hasOwnProperty.call(e, n))) goto L_ad;
    if (!((t.indexOf(n) < 0))) goto L_ad;
    r[n] = e[n];
    e[n];
  }
  <catch>;
  if (!((null != e))) goto L_1dc;
  if (!(("function" == typeof Object.getOwnPropertySymbols))) goto L_1dc;
  o = 0;
  n = Object.getOwnPropertySymbols(e);
  if (!((o < n.length))) goto L_1dc;
  if (!((t.indexOf(n[o]) < 0))) goto L_1d6;
  if (!(Object.prototype.propertyIsEnumerable.call(e, n[o]))) goto L_1d6;
  r[n[o]] = e[n[o]];
  e[n[o]];
  goto L_11d;
  return r;
}

// fn <atom:0>  args=4 vars=9 closure=0 cpool=0 bc=291B file=valdi_core/src/tslib
// args: e, t, r, n
// locals: o, i, a, c, arguments
function {
  arguments = <special_object 1>;
  i = arguments.length;
  if (!((arguments.length < 3))) goto L_f;
  goto L_43;
  // [栈深重同步 1 -> 0]
  if (!((null === n))) goto L_42;
  n = Object.getOwnPropertyDescriptor(t, r);
  goto L_43;
  // [栈深重同步 1 -> 0]
  a = n;
  if (!(("object" == typeof Reflect))) goto L_b1;
  if (!(("function" == typeof Reflect.decorate))) goto L_b1;
  a = Reflect.decorate(e, t, r, n);
  goto L_e8;
  c = (e.length - 1);
  if (!((c >= 0))) goto L_e8;
  o = e[c];
  if (!(e[c])) goto L_e3;
  if (!((i < 3))) goto L_cd;
  goto L_dd;
  // [栈深重同步 1 -> 0]
  if (!((i > 3))) goto L_d9;
  goto L_dd;
  // [栈深重同步 1 -> 0]
  if ((o(t, r))) goto L_e2;
  a = a;
  a;
  goto L_b6;
  if (!((i > 3))) goto L_120;
  if (!(a)) goto L_120;
  Object.defineProperty(t, r, a);
  return a;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=6B file=valdi_core/src/tslib
// args: r, n
// closure: t, e
function {
  t(r, n, e);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=1 bc=3B file=valdi_core/src/tslib
// args: e, t
function {
  return function <atom:0>;
}

// fn a  args=1 vars=1 closure=0 cpool=0 bc=32B file=valdi_core/src/tslib
// args: e
function {
  if (!((undefined !== e))) goto L_1e;
  if (!(("function" != typeof e))) goto L_1e;
  throw new TypeError("Function expected");
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=64B file=valdi_core/src/tslib
// args: e
// closure: p, i, a
function {
  if (!(p)) goto L_12;
  throw new TypeError("Cannot add initializers after decoration has completed");
  if ((e)) goto L_3b;
  i.push(a(null));
  return;
}

// fn <atom:0>  args=6 vars=17 closure=0 cpool=2 bc=962B file=valdi_core/src/tslib
// args: e, t, r, n, o, i
// locals: a, c, u, f, l, s, p, y, d, b, h
function {
  a = function a;
  u = n.kind;
  if (!(("getter" === u))) goto L_36;
  goto L_4b;
  // [栈深重同步 1 -> 0]
  if (!(("setter" === u))) goto L_46;
  goto L_4b;
  // [栈深重同步 1 -> 0]
  f = "value";
  if (!(!t)) goto L_9e;
  if (!(e)) goto L_9e;
  if (!(n.static)) goto L_7a;
  goto L_9f;
  // [栈深重同步 1 -> 0]
  goto L_9f;
  // [栈深重同步 1 -> 0]
  l = null;
  if ((t)) goto L_fa;
  if (!(l)) goto L_f9;
  goto L_fa;
  // [栈深重同步 1 -> 0]
  s = {};
  p = false;
  y = (r.length - 1);
  if (!((y >= 0))) goto L_367;
  d = {};
  for (const b of n) {
    if (!(("access" === b))) goto L_12a;
    goto L_12e;
    // [栈深重同步 6 -> 5]
    d[b] = n[b];
  }
  <catch>;
  for (const b of n.access) {
    d.access[b] = n.access[b];
    // [栈深重同步 3 -> 5]
  }
  <?>;
  d.addInitializer = function <atom:0>;
  if (!(("accessor" === u))) goto L_219;
  goto L_21d;
  // [栈深重同步 6 -> 5]
  h = r[y](s[f], d);
  if (!(("accessor" === u))) goto L_31e;
  if (((undefined === h))) goto L_362;
  if (((null === h))) goto L_248;
  if (!(("object" != typeof h))) goto L_259;
  throw new TypeError("Object expected");
  c = a(h.get);
  if (!(a(h.get))) goto L_290;
  s.get = c;
  c;
  c = a(h.set);
  if (!(a(h.set))) goto L_2c8;
  s.set = c;
  c;
  c = a(h.init);
  if (!(a(h.init))) goto L_31b;
  o.unshift(c);
  goto L_362;
  c = a(h);
  if (!(a(h))) goto L_361;
  if (!(("field" === u))) goto L_35a;
  goto L_361;
  // [栈深重同步 5 -> 4]
  s[f] = c;
  c;
  goto L_106;
  // [栈深重同步 4 -> 0]
  if (!(l)) goto L_3bc;
  Object.defineProperty(l, n.name, s);
  p = true;
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=0 bc=114B file=valdi_core/src/tslib
// args: e, t, r
// locals: n, o, arguments
function {
  arguments = <special_object 1>;
  n = (arguments.length > 2);
  o = 0;
  if (!((o < t.length))) goto L_6b;
  if (!(n)) goto L_3e;
  goto L_66;
  // [栈深重同步 1 -> 0]
  r = t[o].call(e);
  goto L_a;
  if (!(n)) goto L_70;
  return r;
  return undefined;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=51B file=valdi_core/src/tslib
// args: e
function {
  if (!(("symbol" == typeof e))) goto L_c;
  return e;
  return "".concat(e);
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=243B file=valdi_core/src/tslib
// args: e, t, r
function {
  if (!(("symbol" == typeof t))) goto L_84;
  if (!(t.description)) goto L_82;
  goto L_83;
  // [栈深重同步 1 -> 0]
  t = "";
  "";
  if (!(r)) goto L_ea;
  goto L_eb;
  // [栈深重同步 6 -> 5]
  return Object.defineProperty(e, "name", {configurable: true, value: t});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=105B file=valdi_core/src/tslib
// args: e, t
function {
  if (!(("object" == typeof Reflect))) goto L_68;
  if (!(("function" == typeof Reflect.metadata))) goto L_68;
  return Reflect.metadata(e, t);   // tail call
  return;
}

// fn a  args=1 vars=2 closure=3 cpool=0 bc=61B file=valdi_core/src/tslib
// args: e
// locals: t
// closure: u, n, i
function {
  try { // catch -> L_30
  u(n.next(e));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_3c
  i(t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn c  args=1 vars=2 closure=3 cpool=0 bc=61B file=valdi_core/src/tslib
// args: e
// locals: t
// closure: u, n, i
function {
  try { // catch -> L_30
  u(n.throw(e));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_3c
  i(t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=4B file=valdi_core/src/tslib
// args: e
// closure: t
function {
  e(t);
  return;
}

// fn u  args=1 vars=2 closure=4 cpool=1 bc=162B file=valdi_core/src/tslib
// args: e
// locals: t
// closure: o, r, a, c
function {
  if (!(e.done)) goto L_4a;
  goto L_a1;
  // [栈深重同步 1 -> 0]
  t = e.value;
  if (!((e.value instanceof r))) goto L_74;
  goto L_7b;
  // [栈深重同步 1 -> 0]
  new r(function <atom:0>).then(a, c);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=3 bc=94B file=valdi_core/src/tslib
// args: o, i
// locals: a, c, u
// closure: n, r, e, t
function {
  a = function a;
  c = function c;
  u = function u;
  if ((t)) goto L_34;
  n = n.apply(e, []);
  function u(n.apply(e, []).next());
  return;
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=1 bc=18B file=valdi_core/src/tslib
// args: e, t, r, n
function {
  if ((r)) goto L_b;
  r = Promise;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=15B file=valdi_core/src/tslib
// closure: o
function {
  if (!((1 & o[0]))) goto L_b;
  throw o[1];
  return o[1];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=4B file=valdi_core/src/tslib
// locals: this
function {
  this = this;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=7 cpool=0 bc=1387B file=valdi_core/src/tslib
// args: c
// locals: u
// closure: r, i, a, n, o, t, e
function {
  if (!(r)) goto L_12;
  throw new TypeError("Generator is already executing.");
  if (!(i)) goto L_22;
  i = 0;
  if (!(c[0])) goto L_22;
  a = 0;
  0;
  if (!(a)) goto L_547;
  try { // catch -> L_51f
  r = 1;
  if (!(n)) goto L_165;
  if (!((2 & c[0]))) goto L_62;
  goto L_104;
  // [栈深重同步 1 -> 0]
  if (!(c[0])) goto L_e2;
  if ((n.throw)) goto L_104;
  o = n.return;
  if (!(n.return)) goto L_de;
  o.call(n);
  goto L_104;
  // [栈深重同步 1 -> 0]
  o = n.next;
  if (!(n.next)) goto L_165;
  o = o.call(n, c[1]);
  if (!(!o.call(n, c[1]).done)) goto L_165;
  // gosub (finally 块) 1342
  return o;
  n = 0;
  if (!(o)) goto L_19b;
  c = [(2 & c[0]), o.value];
  [(2 & c[0]), o.value];
  if (((c[0] === 0))) goto L_1a9;
  if (!((c[0] === 1))) goto L_1b0;
  o = c;
  goto L_4e7;
  if (!((c[0] === 4))) goto L_1f8;
  a.label = (a.label ++);
  // gosub (finally 块) 1342
  return {value: c[1], done: false};
  // [栈深重同步 0 -> 1]
  if (!((<?> === 5))) goto L_23e;
  a.label = (a.label ++);
  n = c[1];
  c = [0];
  <?>;
  <?>;
  // gosub (finally 块) 1342
  undefined;
  goto L_12;
  // [栈深重同步 0 -> 1]
  if (!((<?> === 7))) goto L_2e0;
  c = a.ops.pop();
  a.trys.pop();
  <?>;
  <?>;
  // gosub (finally 块) 1342
  undefined;
  goto L_12;
  // [栈深重同步 0 -> 1]
  o = a.trys;
  if (!((a.trys.length > 0))) goto L_316;
  o = o[(o.length - 1)];
  if ((o[(o.length - 1)])) goto L_32b;
  if (!((6 !== c[0]))) goto L_32b;
  if (!(!(2 !== c[0]))) goto L_33c;
  a = 0;
  <?>;
  <?>;
  // gosub (finally 块) 1342
  undefined;
  goto L_12;
  // [栈深重同步 0 -> 1]
  if (!((3 === c[0]))) goto L_371;
  if ((!o)) goto L_35f;
  if (!((c[1] > o[0]))) goto L_371;
  if (!((c[1] < o[3]))) goto L_371;
  a.label = c[1];
  goto L_4e7;
  if (!((6 === c[0]))) goto L_3b8;
  if (!((a.label < o[1]))) goto L_3b8;
  a.label = o[1];
  o = c;
  goto L_4e7;
  if (!(o)) goto L_444;
  if (!((a.label < o[2]))) goto L_444;
  a.label = o[2];
  a.ops.push(c);
  goto L_4e7;
  if (!(o[2])) goto L_493;
  a.ops.pop();
  a.trys.pop();
  <?>;
  <?>;
  // gosub (finally 块) 1342
  undefined;
  goto L_12;
  // [栈深重同步 0 -> 1]
  <?>;
  c = t.call(e, a);
  <?>;
  // gosub (finally 块) 1342
  undefined;
  goto L_12;
  // [栈深重同步 0 -> 1]
  u = <?>;
  try { // catch -> L_538
  c = [6, u];
  n = 0;
  <?>;
  // gosub (finally 块) 1342
  undefined;
  goto L_12;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1342
  throw <?>;
  o = 0;
  r = 0;
  // ret (finally 块) 
  goto L_12;
  if (!((5 & c[0]))) goto L_552;
  throw c[1];
  if (!(c[0])) goto L_55d;
  goto L_55e;
  // [栈深重同步 2 -> 1]
  return {value: undefined, done: true};
}

// fn <atom:0>  args=1 vars=1 closure=8 cpool=1 bc=12B file=valdi_core/src/tslib
// args: u
// closure: r, i, a, n, o, t, e, c
function {
  return function <atom:0>([c, u]);   // tail call
}

// fn c  args=1 vars=1 closure=7 cpool=1 bc=3B file=valdi_core/src/tslib
// args: c
// closure: r, i, a, n, o, t, e
function {
  return function <atom:0>;
}

// fn <atom:0>  args=2 vars=8 closure=0 cpool=3 bc=133B file=valdi_core/src/tslib
// args: e, t
// locals: r, n, o, i, a, c
function {
  c = function c;
  a = {label: 0, sent: function <atom:0>, trys: [], ops: []};
  i = {next: c(0), throw: c(1), return: c(2)};
  if (!(("function" == typeof Symbol))) goto L_82;
  i[Symbol.iterator] = function <atom:0>;
  function <atom:0>;
  return i;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=144B file=valdi_core/src/tslib
// args: e, t
// locals: r
// closure: T
function {
  for (const r of e) {
    if ((("default" === r))) goto L_87;
    if ((Object.prototype.hasOwnProperty.call(t, r))) goto L_87;
    T(t, e, r);
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=4B file=valdi_core/src/tslib
// closure: t, r
function {
  return t[r];
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=1 bc=248B file=valdi_core/src/tslib
// args: e, t, r, n
// locals: o
function {
  if (!((undefined === n))) goto L_9;
  n = r;
  r;
  o = Object.getOwnPropertyDescriptor(t, r);
  if (!(Object.getOwnPropertyDescriptor(t, r))) goto L_b1;
  if (!(("get" in o))) goto L_68;
  goto L_b0;
  // [栈深重同步 1 -> 0]
  if ((o.writable)) goto L_b0;
  if ((!o.configurable)) goto L_ca;
  o = {enumerable: true, get: function <atom:0>};
  {enumerable: true, get: function <atom:0>};
  Object.defineProperty(e, n, o);
  return;
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=18B file=valdi_core/src/tslib
// args: e, t, r, n
function {
  if (!((undefined === n))) goto L_9;
  n = r;
  r;
  e[n] = t[r];
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=valdi_core/src/tslib
// closure: e, n
function {
  if (!(e)) goto L_f;
  if (!((n >= e.length))) goto L_f;
  e = undefined;
  undefined;
  if (!(e)) goto L_1b;
  n = <n_new>;
  return {value: e[(n++)], done: !e};
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=1 bc=159B file=valdi_core/src/tslib
// args: e
// locals: t, r, n
function {
  if (!(("function" == typeof Symbol))) goto L_36;
  t = Symbol.iterator;
  if (!(Symbol.iterator)) goto L_3e;
  r = e[t];
  n = 0;
  if (!(r)) goto L_6a;
  return r.call(e);   // tail call
  if (!(e)) goto L_86;
  if (!(("number" == typeof e.length))) goto L_86;
  return {next: function <atom:0>};
  if (!(t)) goto L_96;
  goto L_9b;
  // [栈深重同步 3 -> 2]
  throw new TypeError("Symbol.iterator is not defined.");
}

// fn <atom:0>  args=2 vars=8 closure=0 cpool=0 bc=508B file=valdi_core/src/tslib
// args: e, t
// locals: r, n, o, i, a, c
function {
  if (!(("function" == typeof Symbol))) goto L_38;
  r = e[Symbol.iterator];
  if (!(!e[Symbol.iterator])) goto L_3e;
  return e;
  i = r.call(e);
  a = [];
  try { // catch -> L_121
  if (((undefined === t))) goto L_7b;
  t = <t_new>;
  if (!(((t--) > 0))) goto L_116;
  n = i.next();
  if (!(!i.next().done)) goto L_116;
  a.push(n.value);
  goto L_6f;
  <?>;
  // gosub (finally 块) 322
  undefined;
  goto L_1f9;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_13c
  o = {error: c};
  <?>;
  // gosub (finally 块) 322
  undefined;
  goto L_1f9;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 322
  throw <?>;
  try { // catch -> L_1cb
  if (!(n)) goto L_1c0;
  if (!(!n.done)) goto L_1c0;
  r = i.return;
  if (!(i.return)) goto L_1c0;
  r.call(i);
  <?>;
  // gosub (finally 块) 465
  undefined;
  goto L_1f8;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 465
  throw <?>;
  if (!(o)) goto L_1f7;
  throw o.error;
  // ret (finally 块) 
  // ret (finally 块) 
  return a;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=64B file=valdi_core/src/tslib
// locals: e, t, arguments
// closure: d
function {
  arguments = <special_object 1>;
  e = [];
  t = 0;
  if (!((t < arguments.length))) goto L_3e;
  e = e.concat(d(arguments[t]));
  goto L_9;
  return e;
}

// fn <atom:0>  args=0 vars=9 closure=0 cpool=0 bc=90B file=valdi_core/src/tslib
// locals: e, t, r, n, o, i, a, c, arguments
function {
  arguments = <special_object 1>;
  e = 0;
  t = 0;
  r = arguments.length;
  if (!((t < r))) goto L_1d;
  e = (e + arguments[t].length);
  goto L_c;
  n = Array(e);
  o = 0;
  t = 0;
  if (!((t < r))) goto L_58;
  i = arguments[t];
  a = 0;
  c = i.length;
  if (!((a < c))) goto L_54;
  n[o] = i[a];
  goto L_3d;
  goto L_2a;
  return n;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=327B file=valdi_core/src/tslib
// args: e, t, r
// locals: n, o, i, arguments
function {
  arguments = <special_object 1>;
  if ((r)) goto L_c;
  if (!((2 === arguments.length))) goto L_b1;
  o = 0;
  i = t.length;
  if (!((o < i))) goto L_b1;
  if (!(!n)) goto L_27;
  if (((o in t))) goto L_ab;
  if ((n)) goto L_a2;
  n = Array.prototype.slice.call(t, 0, o);
  Array.prototype.slice.call(t, 0, o);
  n[o] = t[o];
  t[o];
  goto L_16;
  if ((n)) goto L_144;
  return e.concat(Array.prototype.slice.call(t));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_core/src/tslib
// args: e
// locals: this
// closure: w
function {
  this = this;
  if (!((this instanceof w))) goto L_14;
  this.v = e;
  return this;
  return new w(e);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=4B file=valdi_core/src/tslib
// locals: this
function {
  this = this;
  return this;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=55B file=valdi_core/src/tslib
// args: r, n
// closure: i, e, t, c
function {
  if (((i.push([e, t, r, n]) > 1))) goto L_36;
  c(e, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=12B file=valdi_core/src/tslib
// args: t
// closure: i, e, c
function {
  return new Promise(function <atom:0>);
}

// fn a  args=1 vars=1 closure=4 cpool=1 bc=15B file=valdi_core/src/tslib
// args: e
// closure: i, c, o, n
function {
  if (!(o[e])) goto L_e;
  n[e] = function <atom:0>;
  function <atom:0>;
  return;
}

// fn c  args=2 vars=4 closure=6 cpool=0 bc=238B file=valdi_core/src/tslib
// args: e, t
// locals: n, r
// closure: o, w, u, f, l, i
function {
  try { // catch -> L_d8
  r = o[e].call(o, t);
  if (!((o[e].call(o, t).value instanceof w))) goto L_c9;
  goto L_d5;
  // [栈深重同步 1 -> 0]
  l(i[0][2], r);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_ed
  l(i[0][3], n);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn u  args=1 vars=1 closure=1 cpool=0 bc=9B file=valdi_core/src/tslib
// args: e
// closure: c
function {
  c("next", e);
  return;
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=9B file=valdi_core/src/tslib
// args: e
// closure: c
function {
  c("throw", e);
  return;
}

// fn l  args=2 vars=2 closure=2 cpool=0 bc=61B file=valdi_core/src/tslib
// args: e, t
// closure: i, c
function {
  e(t);
  i.shift();
  if (!(i.length)) goto L_3c;
  c(i[0][0], i[0][1]);
  return;
}

// fn <atom:0>  args=3 vars=11 closure=1 cpool=6 bc=197B file=valdi_core/src/tslib
// args: e, t, r
// locals: n, o, i, a, c, u, f, l
// closure: w
function {
  a = function a;
  c = function c;
  u = function u;
  f = function f;
  l = function l;
  if (!(!Symbol.asyncIterator)) goto L_4b;
  throw new TypeError("Symbol.asyncIterator is not defined.");
  if ((t)) goto L_76;
  o = r.apply(e, []);
  i = [];
  n = {};
  a("next");
  a("throw");
  a("return");
  n[Symbol.asyncIterator] = function <atom:0>;
  return n;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=valdi_core/src/tslib
// args: e
function {
  throw e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=4B file=valdi_core/src/tslib
// locals: this
function {
  this = this;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=41B file=valdi_core/src/tslib
// args: t
// closure: r, w, e, n, o
function {
  r = !r;
  if (!(!r)) goto L_1c;
  return {value: w(e[n].call(e, t)), done: false};
  if (!(o)) goto L_27;
  return o(t);
  return t;
}

// fn n  args=2 vars=2 closure=4 cpool=1 bc=15B file=valdi_core/src/tslib
// args: n, o
// closure: r, w, e, t
function {
  if (!(e[n])) goto L_c;
  goto L_d;
  // [栈深重同步 3 -> 2]
  t[n] = o;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=3 bc=76B file=valdi_core/src/tslib
// args: e
// locals: t, r, n
// closure: w
function {
  n = function n;
  t = {};
  n("next");
  n("throw", function <atom:0>);
  n("return");
  t[Symbol.iterator] = function <atom:0>;
  return t;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=4B file=valdi_core/src/tslib
// locals: this
function {
  this = this;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=16B file=valdi_core/src/tslib
// args: t
// closure: e, r
function {
  e({value: t, done: r});
  return;
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=1 bc=82B file=valdi_core/src/tslib
// args: e, t, r, n
function {
  Promise.resolve(n).then(function <atom:0>, t);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=1 bc=83B file=valdi_core/src/tslib
// args: n, o
// closure: t, e, r
function {
  t = e[r].call(e, t);
  function <atom:0>(n, o, e[r].call(e, t).done, t.value);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=12B file=valdi_core/src/tslib
// args: t
// closure: e, r
function {
  return new Promise(function <atom:0>);
}

// fn n  args=1 vars=1 closure=2 cpool=1 bc=14B file=valdi_core/src/tslib
// args: r
// closure: e, t
function {
  if (!(e[r])) goto L_c;
  t[r] = function <atom:0>;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=2 bc=271B file=valdi_core/src/tslib
// args: e
// locals: t, r, n
// closure: y
function {
  n = function n;
  if (!(!Symbol.asyncIterator)) goto L_3b;
  throw new TypeError("Symbol.asyncIterator is not defined.");
  r = e[Symbol.asyncIterator];
  if (!(e[Symbol.asyncIterator])) goto L_8d;
  return r.call(e);
  if (!(("function" == typeof y))) goto L_9c;
  goto L_c7;
  // [栈深重同步 1 -> 0]
  e = e[Symbol.iterator].call(e);
  t = {};
  n("next");
  n("throw");
  n("return");
  t[Symbol.asyncIterator] = function <atom:0>;
  return t;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=111B file=valdi_core/src/tslib
// args: e, t
function {
  if (!(Object.defineProperty)) goto L_60;
  goto L_6c;
  // [栈深重同步 1 -> 0]
  e.raw = t;
  t;
  return e;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=62B file=valdi_core/src/tslib
// args: e, t
function {
  Object.defineProperty(e, "default", {enumerable: true, value: t});
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=12B file=valdi_core/src/tslib
// args: e, t
function {
  e.default = t;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=202B file=valdi_core/src/tslib
// args: e
// locals: t, r
// closure: T, A
function {
  if (!(e)) goto L_29;
  if (!(e.__esModule)) goto L_29;
  return e;
  t = {};
  if (!((null != e))) goto L_c3;
  for (const r of e) {
    if (!(("default" !== r))) goto L_ba;
    if (!(Object.prototype.hasOwnProperty.call(e, r))) goto L_ba;
    T(t, e, r);
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  A(t, e);
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=49B file=valdi_core/src/tslib
// args: e
function {
  if (!(e)) goto L_29;
  if (!(e.__esModule)) goto L_29;
  return e;
  return {default: e};
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=241B file=valdi_core/src/tslib
// args: e, t, r, n
function {
  if (!(("a" === r))) goto L_1c;
  if (!(!n)) goto L_1c;
  throw new TypeError("Private accessor was defined without a getter");
  if (!(("function" == typeof t))) goto L_31;
  if (((e !== t))) goto L_58;
  goto L_58;
  // [栈深重同步 1 -> 0]
  if (!(!t.has(e))) goto L_69;
  throw new TypeError("Cannot read private member from an object whose class did not declare it");
  if (!(("m" === r))) goto L_74;
  return n;
  if (!(("a" === r))) goto L_a4;
  return n.call(e);
  if (!(n)) goto L_ca;
  return n.value;
  return t.get(e);
}

// fn <atom:0>  args=5 vars=5 closure=0 cpool=0 bc=248B file=valdi_core/src/tslib
// args: e, t, r, n, o
function {
  if (!(("m" === n))) goto L_18;
  throw new TypeError("Private method is not writable");
  if (!(("a" === n))) goto L_36;
  if (!(!o)) goto L_36;
  throw new TypeError("Private accessor was defined without a setter");
  if (!(("function" == typeof t))) goto L_4d;
  if (((e !== t))) goto L_74;
  goto L_74;
  // [栈深重同步 1 -> 0]
  if (!(!t.has(e))) goto L_85;
  throw new TypeError("Cannot write private member to an object whose class did not declare it");
  if (!(("a" === n))) goto L_b9;
  goto L_f5;
  // [栈深重同步 1 -> 0]
  if (!(o)) goto L_ce;
  o.value = r;
  goto L_f5;
  // [栈深重同步 1 -> 0]
  t.set(e, r);
  return r;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=95B file=valdi_core/src/tslib
// args: e, t
function {
  if (((null === t))) goto L_19;
  if (!(("object" != typeof t))) goto L_2a;
  if (!(("function" != typeof t))) goto L_2a;
  throw new TypeError("Cannot use 'in' operator on non-object");
  if (!(("function" == typeof e))) goto L_38;
  return (t === e);
  return e.has(t);
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=448B file=valdi_core/src/tslib
// args: e, t, r
// locals: n
function {
  if (!((null != t))) goto L_16a;
  if (!(("object" != typeof t))) goto L_2b;
  if (!(("function" != typeof t))) goto L_2b;
  throw new TypeError("Object expected.");
  if (!(r)) goto L_8f;
  if (!(!Symbol.asyncDispose)) goto L_66;
  throw new TypeError("Symbol.asyncDispose is not defined.");
  n = t[Symbol.asyncDispose];
  if (!((undefined === n))) goto L_f5;
  if (!(!Symbol.dispose)) goto L_cc;
  throw new TypeError("Symbol.dispose is not defined.");
  n = t[Symbol.dispose];
  if (!(("function" != typeof n))) goto L_10e;
  throw new TypeError("Object not disposable.");
  e.stack.push({value: t, dispose: n, async: r});
  goto L_1be;
  if (!(r)) goto L_1bd;
  e.stack.push({async: true});
  return t;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=49B file=valdi_core/src/tslib
// args: e, t, r
// locals: n
function {
  n = new Error(r);
  new Error(r).name = "SuppressedError";
  n.error = e;
  n.suppressed = t;
  return n;
}

// fn t  args=1 vars=1 closure=2 cpool=0 bc=107B file=valdi_core/src/tslib
// args: t
// closure: e, C
function {
  if (!(e.hasError)) goto L_54;
  goto L_55;
  // [栈深重同步 2 -> 1]
  e.error = t;
  e.hasError = true;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=valdi_core/src/tslib
// args: e
// closure: t, r
function {
  t(e);
  return r();   // tail call
}

// fn r  args=0 vars=4 closure=2 cpool=1 bc=472B file=valdi_core/src/tslib
// locals: n, o, i, r
// closure: t, e
function {
  r = <special_object 2>;
  if (!(e.stack.length)) goto L_190;
  n = e.stack.pop();
  try { // catch -> L_181
  if (!(n.dispose)) goto L_105;
  o = n.dispose.call(n.value);
  if (!(n.async)) goto L_17d;
  return Promise.resolve(o).then(r, function <atom:0>);
  <?>;
  goto L_3;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_18f
  t(i);
  <?>;
  goto L_3;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(e.hasError)) goto L_1d7;
  throw e.error;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=2 bc=8B file=valdi_core/src/tslib
// args: e
// locals: t
// closure: C
function {
  t = function t;
  return function r();   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=31 cpool=37 bc=848B file=valdi_core/src/tslib
// args: D
// locals: R, A, C
// closure: T, d, w, y, e, t, r, n, o, i, a, c, u, f, l, s, p, b, h, v, _, m, g, j, O, P, S, E, x, I, k
function {
  if ((Object.setPrototypeOf)) goto L_41;
  // set_proto({}, [])
  if (!(({} instanceof Array))) goto L_3b;
  if ((function <atom:0>)) goto L_41;
  R = function <atom:0>;
  e = function <atom:0>;
  if ((Object.assign)) goto L_78;
  t = function <atom:0>;
  r = function <atom:0>;
  n = function <atom:0>;
  o = function <atom:0>;
  i = function <atom:0>;
  a = function <atom:0>;
  c = function <atom:0>;
  u = function <atom:0>;
  f = function <atom:0>;
  l = function <atom:0>;
  s = function <atom:0>;
  p = function <atom:0>;
  if (!(Object.create)) goto L_115;
  goto L_117;
  // [栈深重同步 1 -> 0]
  T = function <atom:0>;
  y = function <atom:0>;
  d = function <atom:0>;
  b = function <atom:0>;
  h = function <atom:0>;
  v = function <atom:0>;
  w = function <atom:0>;
  _ = function <atom:0>;
  m = function <atom:0>;
  g = function <atom:0>;
  j = function <atom:0>;
  if (!(Object.create)) goto L_1a2;
  goto L_1a4;
  // [栈深重同步 1 -> 0]
  A = function <atom:0>;
  O = function <atom:0>;
  P = function <atom:0>;
  S = function <atom:0>;
  E = function <atom:0>;
  x = function <atom:0>;
  I = function <atom:0>;
  if (!(("function" == typeof SuppressedError))) goto L_1f6;
  goto L_1f8;
  // [栈深重同步 1 -> 0]
  C = function <atom:0>;
  k = function <atom:0>;
  D("__extends", e);
  D("__assign", t);
  D("__rest", r);
  D("__decorate", n);
  D("__param", o);
  D("__esDecorate", i);
  D("__runInitializers", a);
  D("__propKey", c);
  D("__setFunctionName", u);
  D("__metadata", f);
  D("__awaiter", l);
  D("__generator", s);
  D("__exportStar", p);
  D("__createBinding", T);
  D("__values", y);
  D("__read", d);
  D("__spread", b);
  D("__spreadArrays", h);
  D("__spreadArray", v);
  D("__await", w);
  D("__asyncGenerator", _);
  D("__asyncDelegator", m);
  D("__asyncValues", g);
  D("__makeTemplateObject", j);
  D("__importStar", O);
  D("__importDefault", P);
  D("__classPrivateFieldGet", S);
  D("__classPrivateFieldSet", E);
  D("__classPrivateFieldIn", x);
  D("__addDisposableResource", I);
  D("__disposeResources", k);
  return;
}

// fn <atom:0>  args=3 vars=34 closure=0 cpool=2 bc=21B file=valdi_core/src/tslib
// args: require, module, exports
// locals: e, t, r, n, o, i, a, c, u, f, l, s, p, y, d, b, h, v, w, _, m, g, j, O, P, S, E, x, T, I, k
function {
  if (!(module)) goto L_e;
  module.sourceMapLineOffset = 1;
  !function <atom:0>(function <atom:0>);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/tslib
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
