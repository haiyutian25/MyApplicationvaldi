// fn o  args=1 vars=6 closure=0 cpool=0 bc=323B file=valdi_core/src/localization/InlineUnparsedLocalizableStringResolver
// args: e
// locals: l, o, a, i, t
function {
  let l;
  l = 0;
  let t;
  let i;
  let a;
  let o;
  o = e.indexOf("{");
  if (((o < 0))) goto L_141;
  a = e.indexOf("}");
  if (!((a < 0))) goto L_ac;
  throw new Error("Mismatching string parameter at ".concat(e));
  i = e.substr(0, o);
  t = e.substr((a + 1));
  e = "".concat(i, "$", l, t);
  l = <l_new>;
  (l++);
  goto L_5;
  return e;
}

// fn <atom:0>  args=5 vars=6 closure=1 cpool=0 bc=95B file=valdi_core/src/localization/InlineUnparsedLocalizableStringResolver
// args: e, l, o, a, i
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.availableLocales = e;
  this.filePaths = l;
  this.getJsonFileContentFn = o;
  this.getCurrentLocalesFn = a;
  this.fallbackLocale = i;
  if (!((e.length !== l.length))) goto L_5e;
  throw new Error("Mismatched availableLocales and filePaths");
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=114B file=valdi_core/src/localization/InlineUnparsedLocalizableStringResolver
// args: e, l
// locals: this
// closure: InlineUnparsedLocalizableStringResolver
function {
  this = this;
  return new InlineUnparsedLocalizableStringResolver(this.availableLocales, this.filePaths, this.getJsonFileContentFn, e, l);
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=268B file=valdi_core/src/localization/InlineUnparsedLocalizableStringResolver
// args: e
// locals: l, this
// closure: o
function {
  this = this;
  let l;
  if (!((this.resolveLocalizationJsonFile()[e] == null))) goto L_34;
  this.resolveLocalizationJsonFile()[e];
  goto L_55;
  l = undefined.defaultMessage;
  if ((l)) goto L_fe;
  if (((undefined === this.fallbackLocale))) goto L_fe;
  if (!((this.resolveFallbackLocalizationJsonFile(this.fallbackLocale)[e] == null))) goto L_d9;
  this.resolveFallbackLocalizationJsonFile(this.fallbackLocale)[e];
  goto L_fa;
  l = undefined.defaultMessage;
  undefined.defaultMessage;
  if (!(l)) goto L_10b;
  return o(l);   // tail call
  return;
}

// fn <atom:0>  args=0 vars=5 closure=2 cpool=0 bc=659B file=valdi_core/src/localization/InlineUnparsedLocalizableStringResolver
// locals: o, a, i, t, this
// closure: e, l
function {
  this = this;
  if (!(!this.localizationJsonFile)) goto L_26f;
  let t;
  let i;
  let a;
  let o;
  o = this.getCurrentLocalesFn();
  a = e.resolveLocale(o, this.availableLocales.map(l.Locale.parse));
  if (!((a < 0))) goto L_1d3;
  throw new Error("Could not resolve locale with current locale [".concat(o.join(", "), "] and available locales [", this.availableLocales.join(", "), "]"));
  i = this.filePaths[a];
  t = this.getJsonFileContentFn(i);
  if (!(!t)) goto L_261;
  throw new Error("Could not resolve localization JSON file at ".concat(i));
  this.localizationJsonFile = t;
  return this.localizationJsonFile;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=370B file=valdi_core/src/localization/InlineUnparsedLocalizableStringResolver
// args: e
// locals: l, o, a, this
function {
  this = this;
  if (!(!this.fallbackLocalizationJsonFile)) goto L_14f;
  let a;
  let o;
  let l;
  l = this.availableLocales.indexOf(e);
  if (!((l < 0))) goto L_b6;
  throw new Error("Could not resolve fallback locale ".concat(e));
  o = this.filePaths[l];
  a = this.getJsonFileContentFn(o);
  if (!(!a)) goto L_142;
  throw new Error("Could not resolve localization JSON file at ".concat(o));
  this.fallbackLocalizationJsonFile = a;
  return this.fallbackLocalizationJsonFile;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=6 bc=169B file=valdi_core/src/localization/InlineUnparsedLocalizableStringResolver
// args: require, module, exports
// locals: e, l, o, InlineUnparsedLocalizableStringResolver, <class_fields_init>, InlineUnparsedLocalizableStringResolver#1
function {
  o = function o;
  let InlineUnparsedLocalizableStringResolver#1;
  let l;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.InlineUnparsedLocalizableStringResolver = undefined;
  e = require("./LocaleResolver");
  l = require("./Locale");
  let InlineUnparsedLocalizableStringResolver;
  let <class_fields_init>;
  class InlineUnparsedLocalizableStringResolver extends undefined { ... }
  <proto:InlineUnparsedLocalizableStringResolver>.withCurrentLocales = function <atom:0>;
  <proto:InlineUnparsedLocalizableStringResolver>.resolveUnparsedLocalizableString = function <atom:0>;
  <proto:InlineUnparsedLocalizableStringResolver>.resolveLocalizationJsonFile = function <atom:0>;
  <proto:InlineUnparsedLocalizableStringResolver>.resolveFallbackLocalizationJsonFile = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:InlineUnparsedLocalizableStringResolver>;
  InlineUnparsedLocalizableStringResolver = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc InlineUnparsedLocalizableStringResolver
  InlineUnparsedLocalizableStringResolver#1 = function <atom:0>;
  exports.InlineUnparsedLocalizableStringResolver = InlineUnparsedLocalizableStringResolver#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/localization/InlineUnparsedLocalizableStringResolver
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
