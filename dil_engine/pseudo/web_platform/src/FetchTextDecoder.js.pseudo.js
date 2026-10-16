// fn t  args=1 vars=1 closure=1 cpool=0 bc=45B file=web_platform/src/FetchTextDecoder
// args: t
// closure: e
function {
  return e.createUTF8Decoder(false)(t, true);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=65B file=web_platform/src/FetchTextDecoder
// locals: this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.decodeNative = e.createUTF8Decoder(true);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=41B file=web_platform/src/FetchTextDecoder
// args: e, t
// locals: this
function {
  this = this;
  return this.decodeNative(e, t);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=152B file=web_platform/src/FetchTextDecoder
// args: require, module, exports
// locals: e, t, FetchTextDecoder, <class_fields_init>, FetchTextDecoder#1
function {
  t = function t;
  let FetchTextDecoder#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.decodeUTF8 = undefined;
  exports.FetchTextDecoder = undefined;
  e = require("coreutils/src/unicode/UnicodeNative");
  exports.decodeUTF8 = t;
  let FetchTextDecoder;
  let <class_fields_init>;
  class FetchTextDecoder extends undefined { ... }
  <proto:FetchTextDecoder>.decode = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FetchTextDecoder>;
  FetchTextDecoder = function <atom:0>;
  // close_loc <class_fields_init>
  FetchTextDecoder#1 = function <atom:0>;
  exports.FetchTextDecoder = FetchTextDecoder#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=web_platform/src/FetchTextDecoder
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
