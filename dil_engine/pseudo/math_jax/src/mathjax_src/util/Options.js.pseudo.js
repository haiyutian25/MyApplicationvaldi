// fn r  args=1 vars=1 closure=2 cpool=0 bc=100B file=math_jax/src/mathjax_src/util/Options
// args: t
// closure: e, Expandable
function {
  if (!(("object" == typeof t))) goto L_63;
  if (!((null !== t))) goto L_63;
  if (((t.constructor === e))) goto L_63;
  return (t.constructor === Expandable);
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=175B file=math_jax/src/mathjax_src/util/Options
// args: e, r
// closure: exports, t
function {
  if (!(("fatal" === exports.OPTIONS.invalidOption))) goto L_56;
  throw new Error(e);
  if (!(t.isLoggingEnabled)) goto L_ae;
  console.warn(("MathJax: " + e));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=math_jax/src/mathjax_src/util/Options
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=119B file=math_jax/src/mathjax_src/util/Options
// args: t
// closure: Expandable
function {
  return Object.assign(Object.create(Expandable.prototype), t);   // tail call
}

// fn s  args=1 vars=1 closure=0 cpool=0 bc=51B file=math_jax/src/mathjax_src/util/Options
// args: t
function {
  if (!(Array.isArray(t))) goto L_2e;
  return t;
  return [t];
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=128B file=math_jax/src/mathjax_src/util/Options
// args: t
function {
  if (!(t)) goto L_7c;
  return Object.keys(t).concat(Object.getOwnPropertySymbols(t));
  return [];
}

// fn p  args=1 vars=5 closure=6 cpool=0 bc=358B file=math_jax/src/mathjax_src/util/Options
// args: t
// locals: e, o, s, n
// closure: n, a, r, p, Expandable, o
function {
  let e;
  e = {};
  let o;
  for (const o of n(t)) {
    let n;
    let s;
    s = Object.getOwnPropertyDescriptor(t, o);
    n = s.value;
    if (!(Array.isArray(n))) goto L_b0;
    s.value = a([], n, false);
    goto L_cb;
    // [栈深重同步 4 -> 3]
    if (!(r(n))) goto L_cb;
    s.value = p(n);
    p(n);
    if (!(s.enumerable)) goto L_100;
    e[o] = s;
    s;
  }
  if (!((t.constructor === Expandable))) goto L_15f;
  goto L_160;
  // [栈深重同步 3 -> 2]
  return Object.defineProperties({}, e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=78B file=math_jax/src/mathjax_src/util/Options
// args: t
// closure: i, exports
function {
  return (i[exports.REMOVE].indexOf(t) < 0);
}

// fn a  args=3 vars=10 closure=6 cpool=1 bc=1230B file=math_jax/src/mathjax_src/util/Options
// args: t, e, o
// locals: t#1, e#1, o#1, s, i, c, e#2
// closure: exports, n, Expandable, r, a, p
function {
  let o#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((o === undefined))) goto L_16;
  o;
  o = true;
  o#1 = true;
  let s;
  for (const s of n(e)) {
    let c;
    let i;
    if (!(o)) goto L_120;
    if (!((undefined === t[s]))) goto L_120;
    if (!((t.constructor !== Expandable))) goto L_120;
    if (!(("symbol" == typeof s))) goto L_9e;
    s = s.toString();
    s.toString();
    exports.OPTIONS.optionError("Invalid option "".concat(s, "" (no default value)."), s);
    // close_loc i
   continue;
    i = e[s];
    c = t[s];
    if ((!r(i))) goto L_157;
    if (((null === c))) goto L_157;
    if (!(("object" != typeof c))) goto L_1c5;
    if (!(("function" != typeof c))) goto L_1c5;
    if (!(Array.isArray(i))) goto L_1a0;
    t[s] = [];
    goto L_1c1;
    // [栈深重同步 4 -> 3]
    if (!(r(i))) goto L_1b7;
    t[s] = p(i);
    goto L_1c1;
    // [栈深重同步 4 -> 3]
    t[s] = i;
    i;
    goto L_4c0;
    let e#2;
    e#2 = n(i);
    if (!(Array.isArray(c))) goto L_4b4;
    if (!((1 === e#2.length))) goto L_297;
    if (((e#2[0] === exports.APPEND))) goto L_261;
    if (!((e#2[0] === exports.REMOVE))) goto L_297;
    if ((Array.isArray(i[e#2[0]]))) goto L_3ed;
    if (!((2 === e#2.length))) goto L_4b4;
    if (!((e#2.sort().join(",") === ((exports.APPEND + ",") + exports.REMOVE)))) goto L_4b4;
    if (!(Array.isArray(i[exports.APPEND]))) goto L_4b4;
    if (!(Array.isArray(i[exports.REMOVE]))) goto L_4b4;
    if (!(i[exports.REMOVE])) goto L_450;
    t[s] = c.filter(function <atom:0>);
    c = c.filter(function <atom:0>);
    c.filter(function <atom:0>);
    if (!(i[exports.APPEND])) goto L_4bf;
    // append([], 0, c)
    // append([], c, i[exports.APPEND])
    i[exports.APPEND];
    t[s] = [];
    goto L_4bf;
    // [栈深重同步 4 -> 3]
    a(c, i, o);
    // close_loc i
  }
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=math_jax/src/mathjax_src/util/Options
// args: e
// closure: a, t
function {
  return a(t, e, false);   // tail call
}

// fn i  args=2 vars=2 closure=1 cpool=1 bc=45B file=math_jax/src/mathjax_src/util/Options
// args: t, e
// closure: a
function {
  e = ...1;
  ...1.forEach(function <atom:0>);
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=math_jax/src/mathjax_src/util/Options
// args: e
// closure: a, t
function {
  return a(t, e, true);   // tail call
}

// fn c  args=2 vars=2 closure=1 cpool=1 bc=45B file=math_jax/src/mathjax_src/util/Options
// args: t, e
// closure: a
function {
  e = ...1;
  ...1.forEach(function <atom:0>);
  return t;
}

// fn x  args=2 vars=4 closure=0 cpool=0 bc=91B file=math_jax/src/mathjax_src/util/Options
// args: t, e
// locals: r, o
function {
  e = ...1;
  let r;
  r = {};
  let o;
  for (const o of e) {
    if (!(Object.hasOwn(t, o))) goto L_50;
    r[o] = t[o];
    t[o];
  }
  return r;
}

// fn u  args=2 vars=2 closure=1 cpool=0 bc=56B file=math_jax/src/mathjax_src/util/Options
// args: t, e
// closure: x
function {
  // append([t], 1, Object.keys(e))
  Object.keys(e);
  return x.apply(undefined, [t]);
}

// fn l  args=2 vars=7 closure=0 cpool=0 bc=221B file=math_jax/src/mathjax_src/util/Options
// args: t, e
// locals: r, o, e#1, s, r#1
function {
  e = ...1;
  let r;
  r = [];
  let o;
  for (const o of e) {
    let s;
    let e#1;
    e#1 = {};
    s = {};
    let r#1;
    if ((t)) goto L_4d;
    for (const r#1 of Object.keys({})) {
      if (!((undefined === o[r#1]))) goto L_65;
      goto L_68;
      // [栈深重同步 4 -> 3]
      e#1[r#1] = t[r#1];
      // [栈深重同步 3 -> 6]
    }
    r.push(e#1);
    t = s;
  }
  r.unshift(t);
  return r;
}

// fn O  args=3 vars=6 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/util/Options
// args: t, e, r
// locals: t#1, e#1, r#1
function {
  let r#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((r === undefined))) goto L_15;
  r;
  r = null;
  r#1 = null;
  if (!(Object.hasOwn(e, t))) goto L_47;
  return e[t];
  return r;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=14 bc=612B file=math_jax/src/mathjax_src/util/Options
// args: require, module, exports
// locals: t, e, r, Expandable, <class_fields_init>, Expandable#1, o, s, n, p, a, i, c, x, u, l, O
function {
  r = function r;
  o = function o;
  s = function s;
  n = function n;
  p = function p;
  a = function a;
  i = function i;
  c = function c;
  x = function x;
  u = function u;
  l = function l;
  O = function O;
  let Expandable#1;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isObject = undefined;
  exports.APPEND = undefined;
  exports.REMOVE = undefined;
  exports.OPTIONS = undefined;
  exports.Expandable = undefined;
  exports.expandable = undefined;
  exports.makeArray = undefined;
  exports.keys = undefined;
  exports.copy = undefined;
  exports.insert = undefined;
  exports.defaultOptions = undefined;
  exports.userOptions = undefined;
  exports.selectOptions = undefined;
  exports.selectOptionsFromKeys = undefined;
  exports.separateOptions = undefined;
  exports.lookup = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = {}.constructor;
  exports.isObject = r;
  exports.APPEND = "[+]";
  exports.REMOVE = "[-]";
  exports.OPTIONS = {invalidOption: "warn", optionError: function <atom:0>};
  let Expandable;
  let <class_fields_init>;
  class Expandable extends undefined { ... }
  <class_fields_init> = undefined;
  <proto:Expandable>;
  Expandable = function <atom:0>;
  // close_loc <class_fields_init>
  Expandable#1 = function <atom:0>;
  exports.Expandable = Expandable#1;
  exports.expandable = o;
  exports.makeArray = s;
  exports.keys = n;
  exports.copy = p;
  exports.insert = a;
  exports.defaultOptions = i;
  exports.userOptions = c;
  exports.selectOptions = x;
  exports.selectOptionsFromKeys = u;
  exports.separateOptions = l;
  exports.lookup = O;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/Options
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
