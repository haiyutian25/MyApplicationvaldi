// fn t  args=1 vars=1 closure=0 cpool=0 bc=123B file=coreutils/src/unicode/TextCoding
// args: e
function {
  if ((("utf-8" === e))) goto L_12;
  if (!(("utf8" == e))) goto L_16;
  return 1;
  if ((("utf-16" === e))) goto L_28;
  if (!(("utf16" == e))) goto L_2c;
  return 2;
  if ((("utf-32" === e))) goto L_3e;
  if (!(("utf32" == e))) goto L_42;
  return 3;
  throw new Error("Unsupported text encoding '".concat(e, "'"));
}

// fn r  args=1 vars=1 closure=0 cpool=0 bc=35B file=coreutils/src/unicode/TextCoding
// args: e
function {
  if (!((e === 1))) goto L_c;
  return "utf-8";
  if (!((e === 2))) goto L_17;
  return "utf-16";
  if (!((e === 3))) goto L_22;
  return "utf-32";
  e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=40B file=coreutils/src/unicode/TextCoding
// locals: this
// closure: r
function {
  this = this;
  return r(this._encoding);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=coreutils/src/unicode/TextCoding
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=coreutils/src/unicode/TextCoding
function {
  return false;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=35B file=coreutils/src/unicode/TextCoding
// args: e
// locals: this
// closure: <class_fields_init>, t
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  if (!(e)) goto L_18;
  goto L_19;
  // [栈深重同步 2 -> 1]
  this._encoding = 1;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=76B file=coreutils/src/unicode/TextCoding
// args: t
// locals: this
// closure: e
function {
  this = this;
  return e.decodeIntoString(t, this._encoding);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=40B file=coreutils/src/unicode/TextCoding
// locals: this
// closure: r
function {
  this = this;
  return r(this._encoding);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=35B file=coreutils/src/unicode/TextCoding
// args: e
// locals: this
// closure: <class_fields_init>, t
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  if (!(e)) goto L_18;
  goto L_19;
  // [栈深重同步 2 -> 1]
  this._encoding = 1;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=92B file=coreutils/src/unicode/TextCoding
// args: t
// locals: this
// closure: e
function {
  this = this;
  if (!((undefined === t))) goto L_34;
  goto L_35;
  // [栈深重同步 4 -> 3]
  return new Uint8Array(e.encodeString(t, this._encoding));
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=102B file=coreutils/src/unicode/TextCoding
// args: t, r
// locals: this
// closure: e
function {
  this = this;
  if (!(!(r instanceof Uint8Array))) goto L_1b;
  throw new TypeError("TextEncoder.encodeInto requires a Uint8Array");
  return e.encodeInto(t, r, this._encoding);   // tail call
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=11 bc=235B file=coreutils/src/unicode/TextCoding
// args: require, module, exports
// locals: e, t, r, TextDecoder, <class_fields_init>, TextDecoder#1, TextEncoder, <class_fields_init>#1, TextEncoder#1
function {
  t = function t;
  r = function r;
  let TextEncoder#1;
  let TextDecoder#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextDecoder = undefined;
  exports.TextEncoder = undefined;
  e = require("./UnicodeNative");
  let TextDecoder;
  let <class_fields_init>;
  class TextDecoder extends undefined { ... }
  <proto:TextDecoder>.encoding = function <atom:0>;
  <proto:TextDecoder>.fatal = function <atom:0>;
  <proto:TextDecoder>.ignoreBOM = function <atom:0>;
  <proto:TextDecoder>.decode = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TextDecoder>;
  TextDecoder = function <atom:0>;
  // close_loc <class_fields_init>
  TextDecoder#1 = function <atom:0>;
  exports.TextDecoder = TextDecoder#1;
  let TextEncoder;
  let <class_fields_init>#1;
  class TextEncoder extends undefined { ... }
  <proto:TextEncoder>.encoding = function <atom:0>;
  <proto:TextEncoder>.encode = function <atom:0>;
  <proto:TextEncoder>.encodeInto = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:TextEncoder>;
  TextEncoder = function <atom:0>;
  // close_loc <class_fields_init>#1
  TextEncoder#1 = function <atom:0>;
  exports.TextEncoder = TextEncoder#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=coreutils/src/unicode/TextCoding
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
