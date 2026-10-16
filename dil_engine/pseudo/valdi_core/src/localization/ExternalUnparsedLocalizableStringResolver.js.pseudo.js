// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_core/src/localization/ExternalUnparsedLocalizableStringResolver
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.module = e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=76B file=valdi_core/src/localization/ExternalUnparsedLocalizableStringResolver
// args: r
// locals: this
// closure: e
function {
  this = this;
  return e.getLocalizedString(this.module, r);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=126B file=valdi_core/src/localization/ExternalUnparsedLocalizableStringResolver
// args: require, module, exports
// locals: e, ExternalUnparsedLocalizableStringResolver, <class_fields_init>, ExternalUnparsedLocalizableStringResolver#1
function {
  let ExternalUnparsedLocalizableStringResolver#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExternalUnparsedLocalizableStringResolver = undefined;
  e = require("../Strings");
  let ExternalUnparsedLocalizableStringResolver;
  let <class_fields_init>;
  class ExternalUnparsedLocalizableStringResolver extends undefined { ... }
  <proto:ExternalUnparsedLocalizableStringResolver>.resolveUnparsedLocalizableString = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExternalUnparsedLocalizableStringResolver>;
  ExternalUnparsedLocalizableStringResolver = function <atom:0>;
  // close_loc <class_fields_init>
  ExternalUnparsedLocalizableStringResolver#1 = function <atom:0>;
  exports.ExternalUnparsedLocalizableStringResolver = ExternalUnparsedLocalizableStringResolver#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/localization/ExternalUnparsedLocalizableStringResolver
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
