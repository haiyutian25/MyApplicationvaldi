// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/localization/LocalizableStringsModule
// locals: this
function {
  this = this;
  return this._stringResolver;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=66B file=valdi_core/src/localization/LocalizableStringsModule
// args: e
// locals: this
function {
  this = this;
  if (!((this._stringResolver !== e))) goto L_41;
  this._stringResolver = e;
  this.cache = {};
  {};
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=88B file=valdi_core/src/localization/LocalizableStringsModule
// args: e
// locals: this
// closure: <class_fields_init>, r
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.cache = {};
  this._stringResolver = e;
  this.exports = {};
  this.exports[r] = this;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=80B file=valdi_core/src/localization/LocalizableStringsModule
// args: e
// closure: this, t, r
function {
  e = ...0;
  return this.getOrCreateLocalizableString(t).format(r, e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=72B file=valdi_core/src/localization/LocalizableStringsModule
// closure: this, t
function {
  return this.getOrCreateLocalizableString(t).original;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=2 bc=93B file=valdi_core/src/localization/LocalizableStringsModule
// args: t, r
// locals: s, this
// closure: e
function {
  this = this;
  let s;
  s = e.toCamelCase(t);
  if (!(r)) goto L_59;
  goto L_5b;
  // [栈深重同步 3 -> 2]
  this.exports[s] = function <atom:0>;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=255B file=valdi_core/src/localization/LocalizableStringsModule
// args: e
// locals: r, s, this
// closure: t
function {
  this = this;
  let r;
  r = this.cache[e];
  if (!(!r)) goto L_fb;
  let s;
  if ((this._stringResolver.resolveUnparsedLocalizableString(e))) goto L_82;
  s = e;
  r = t.LocalizableString.parse(s);
  t.LocalizableString.parse(s);
  this.cache[e] = r;
  return r;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=34B file=valdi_core/src/localization/LocalizableStringsModule
// args: e
// locals: t
// closure: r
function {
  let t;
  t = e[r];
  if (!(!t)) goto L_1e;
  throw new Error("Not an exports object");
  return t;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=6 bc=183B file=valdi_core/src/localization/LocalizableStringsModule
// args: require, module, exports
// locals: e, t, r, LocalizableStringsModule, <class_fields_init>, LocalizableStringsModule#1
function {
  let LocalizableStringsModule#1;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LocalizableStringsModule = undefined;
  e = require("../utils/StringUtils");
  t = require("./LocalizableString");
  r = Symbol();
  let LocalizableStringsModule;
  let <class_fields_init>;
  class LocalizableStringsModule extends undefined { ... }
  <proto:LocalizableStringsModule>.stringResolver = function <atom:0>;
  <proto:LocalizableStringsModule>.stringResolver = function <atom:0>;
  <proto:LocalizableStringsModule>.add = function <atom:0>;
  <proto:LocalizableStringsModule>.getOrCreateLocalizableString = function <atom:0>;
  function <atom:0>.fromExports = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LocalizableStringsModule>;
  LocalizableStringsModule = function <atom:0>;
  // close_loc <class_fields_init>
  LocalizableStringsModule#1 = function <atom:0>;
  exports.LocalizableStringsModule = LocalizableStringsModule#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/localization/LocalizableStringsModule
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
