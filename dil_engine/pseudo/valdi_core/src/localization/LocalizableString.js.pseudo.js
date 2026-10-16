// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=valdi_core/src/localization/LocalizableString
// args: e
function {
  e.STRING = 0;
  e[0] = "STRING";
  e.NUMBER = 1;
  e[1] = "NUMBER";
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=valdi_core/src/localization/LocalizableString
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.original = e;
  this.parts = t;
  return;
}

// fn <atom:0>  args=2 vars=7 closure=3 cpool=0 bc=739B file=valdi_core/src/localization/LocalizableString
// args: s, i
// locals: o, n, a, l, this
// closure: r, e, t
function {
  this = this;
  let o;
  o = [];
  let n;
  for (const n of this.parts) {
    if (!(("number" == typeof n))) goto L_287;
    let l;
    let a;
    if (((n < 0))) goto L_63;
    if (((n >= s.length))) goto L_63;
    if (!((n >= i.length))) goto L_c3;
    throw new Error("Out of bounds argument ".concat(n, " in localizable string ", this.original));
    a = s[n];
    l = i[n];
    if (!((undefined === l))) goto L_106;
    o.push("<undefined>");
   continue;
    if (!((null === l))) goto L_13d;
    o.push("<null>");
   continue;
    if (!((a === r.NUMBER))) goto L_20f;
    if (!((t.getCurrentLocales()[0] == null))) goto L_1e4;
    t.getCurrentLocales()[0];
    goto L_208;
    o.push(e.formatNumber(l, -1, undefined.toString()));
    goto L_284;
    if (!((a === r.STRING))) goto L_284;
    o.push(l.toString());
    a;
   continue;
    o.push(n);
  }
  return o.join("");   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=2 bc=245B file=valdi_core/src/localization/LocalizableString
// args: e
// locals: t, r, s, e#1
// closure: LocalizableString
function {
  let r;
  let t;
  t = e.split(new RegExp("\\$(\\d+)"));
  r = [];
  let s;
  for (const s of t) {
    let e#1;
    e#1 = parseInt(s, 10);
    if ((isNaN(e#1))) goto L_87;
    if (!((s !== e#1.toString()))) goto L_b5;
    goto L_df;
    // [栈深重同步 4 -> 3]
    r.push(e#1);
  }
  return new LocalizableString(e, r);
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=4 bc=186B file=valdi_core/src/localization/LocalizableString
// args: require, module, exports
// locals: e, t, r, LocalizableString, <class_fields_init>, LocalizableString#1
function {
  let LocalizableString#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LocalizableStringParameterType = undefined;
  exports.LocalizableString = undefined;
  e = require("valdi_core/src/utils/NumberUtils");
  t = require("./LocaleResolver");
  if ((r)) goto L_7b;
  r = {};
  exports.LocalizableStringParameterType = {};
  !function <atom:0>({});
  let LocalizableString;
  let <class_fields_init>;
  class LocalizableString extends undefined { ... }
  <proto:LocalizableString>.format = function <atom:0>;
  function <atom:0>.parse = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LocalizableString>;
  LocalizableString = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc LocalizableString
  LocalizableString#1 = function <atom:0>;
  exports.LocalizableString = LocalizableString#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/localization/LocalizableString
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
