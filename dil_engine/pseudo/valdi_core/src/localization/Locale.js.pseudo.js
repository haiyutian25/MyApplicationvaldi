// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=118B file=valdi_core/src/localization/Locale
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.language = e.toLowerCase();
  if (!((t == null))) goto L_48;
  t;
  goto L_6c;
  this.region = undefined.toUpperCase();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=184B file=valdi_core/src/localization/Locale
// locals: this
function {
  this = this;
  if (!(this.region)) goto L_95;
  return "".concat(this.language, "-", this.region);
  return this.language;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=64B file=valdi_core/src/localization/Locale
// args: e
// locals: t
// closure: Locale
function {
  let t;
  t = e.split("-");
  return new Locale(t[0], t[1]);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=128B file=valdi_core/src/localization/Locale
// args: require, module, exports
// locals: Locale, <class_fields_init>, Locale#1
function {
  let Locale#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Locale = undefined;
  let Locale;
  let <class_fields_init>;
  class Locale extends undefined { ... }
  <proto:Locale>.toString = function <atom:0>;
  function <atom:0>.parse = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Locale>;
  Locale = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc Locale
  Locale#1 = function <atom:0>;
  exports.Locale = Locale#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/localization/Locale
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
