// fn r  args=1 vars=1 closure=2 cpool=0 bc=86B file=valdi_core/src/localization/LocaleResolver
// args: e
// closure: o, t
function {
  if (!((undefined === e))) goto L_8;
  goto L_51;
  // [栈深重同步 1 -> 0]
  o = t.Locale.parse(e);
  t.Locale.parse(e);
  return;
}

// fn a  args=0 vars=2 closure=3 cpool=0 bc=418B file=valdi_core/src/localization/LocaleResolver
// locals: n, e
// closure: o, e, t
function {
  let n;
  if (!((undefined !== o))) goto L_11;
  return [o];
  n = e.Device.getDeviceLocales();
  if (!(n.length)) goto L_cc;
  return n.map(t.Locale.parse);   // tail call
  if (!(("undefined" != typeof Intl))) goto L_19e;
  let e;
  e = Intl.DateTimeFormat().resolvedOptions().locale;
  return [t.Locale.parse(e)];
  return [];
}

// fn <atom:0>  args=1 vars=6 closure=7 cpool=2 bc=424B file=valdi_core/src/localization/LocaleResolver
// args: c
// locals: l, i, u, h, f
// closure: s, t, o, n, a, e, r
function {
  let f;
  let h;
  let u;
  let i;
  let l;
  s = (s ++);
  l = (s ++);
  i = c.replace(new RegExp("_"), "-").toLowerCase();
  u = t.Locale.parse(i).language;
  if ((o[i])) goto L_178;
  if (!((n[i] == null))) goto L_f9;
  n[i];
  goto L_11d;
  if ((o[undefined.toLowerCase()])) goto L_178;
  if ((o[u])) goto L_178;
  if (!((n[u] == null))) goto L_13f;
  n[u];
  goto L_163;
  if ((o[undefined.toLowerCase()])) goto L_178;
  if ((a[u])) goto L_178;
  h = "en";
  f = e[h];
  if (!((undefined !== f))) goto L_190;
  (await f());
  if (!((l === s))) goto L_1a3;
  r(h);
  return h; // async
}

// fn s  args=1 vars=7 closure=3 cpool=1 bc=353B file=valdi_core/src/localization/LocaleResolver
// args: e
// locals: o, a, n, e#1, r, s
// closure: t, n, r
function {
  let s;
  let a;
  let o;
  o = Object.create(null);
  a = Object.create(null);
  let n;
  for (const n of Object.keys(e)) {
    let r;
    let e#1;
    e#1 = n.toLowerCase();
    r = t.Locale.parse(n).language;
    o[e#1] = n;
    if (!((undefined === a[r]))) goto L_151;
    a[r] = n;
    n;
  }
  s = 0;
  return function <atom:0>;
}

// fn l  args=1 vars=1 closure=0 cpool=0 bc=41B file=valdi_core/src/localization/LocaleResolver
// args: e
function {
  return ("en" === e.language);
}

// fn i  args=3 vars=4 closure=2 cpool=0 bc=172B file=valdi_core/src/localization/LocaleResolver
// args: e, t, n
// locals: o
// closure: c, l
function {
  if (!((e.language === t.language))) goto L_a3;
  let o;
  o = (c * n);
  if (!((e.region === t.region))) goto L_9d;
  return (o + 3);
  return (o + 2);
  if (!(l(t))) goto L_aa;
  return 1;
  return 0;
}

// fn u  args=2 vars=9 closure=2 cpool=0 bc=137B file=valdi_core/src/localization/LocaleResolver
// args: e, t
// locals: n, o, r, a, t#1, s, e#1
// closure: i, l
function {
  let r;
  let o;
  let n;
  n = -1;
  o = 0;
  r = 0;
  let a;
  for (const a of t) {
    if (!((e.length > 0))) goto L_68;
    let t#1;
    t#1 = e.length;
    let s;
    for (const s of e) {
      let e#1;
      e#1 = i(s, a, t#1);
      if (!((e#1 > o))) goto L_57;
      n = r;
      r;
      o = e#1;
      e#1;
      t#1 = <t#1_new>;
      (t#1--);
      // [栈深重同步 3 -> 6]
    }
    goto L_77;
    if (!(l(a))) goto L_77;
    return r;
    // [栈深重同步 0 -> 3]
    r = <r_new>;
    (r++);
  }
  return n;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=6 bc=335B file=valdi_core/src/localization/LocaleResolver
// args: require, module, exports
// locals: e, t, n, o, r, a, s, c, l, i, u
function {
  r = function r;
  a = function a;
  s = function s;
  l = function l;
  i = function i;
  u = function u;
  let c;
  let o;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.setCurrentLocale = undefined;
  exports.getCurrentLocales = undefined;
  exports.createLocalePreloader = undefined;
  exports.resolveLocale = undefined;
  e = require("../Device");
  t = require("./Locale");
  n = {es-419: "es", id: "id-ID", in: "id-ID", zh: "zh-Hans", zh-cn: "zh-Hans", zh-sg: "zh-Hans", zh-hans: "zh-Hans", zh-hans-cn: "zh-Hans", zh-tw: "zh-Hant", zh-hant: "zh-Hant", zh-hant-tw: "zh-Hant", zh-hant-hk: "zh-HK"};
  o = undefined;
  exports.setCurrentLocale = r;
  exports.getCurrentLocales = a;
  exports.createLocalePreloader = s;
  c = 100000;
  exports.resolveLocale = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/localization/LocaleResolver
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
