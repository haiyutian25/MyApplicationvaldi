// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_font/common
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn e  args=1 vars=3 closure=1 cpool=2 bc=1213B file=math_jax/src/mathjax_font/common
// args: e
// locals: s, <class_fields_init>
// closure: a
function {
  let <class_fields_init>;
  class s extends e { ... }
  <class_fields_init> = undefined;
  <proto:s>;
  // close_loc <class_fields_init>
  s = function <atom:0>;
  // append([], 0, a.FontData.defaultVariants)
  [][a.FontData.defaultVariants] = ["-size3", "normal"];
  [][(["-size3", "normal"] ++)] = ["-size4", "normal"];
  [][(["-size4", "normal"] ++)] = ["-size5", "normal"];
  [][(["-size5", "normal"] ++)] = ["-size6", "normal"];
  [][(["-size6", "normal"] ++)] = ["-size7", "normal"];
  [][(["-size7", "normal"] ++)] = ["-lf-tp", "normal"];
  [][(["-lf-tp", "normal"] ++)] = ["-rt-bt", "normal"];
  [][(["-rt-bt", "normal"] ++)] = ["-ex-md", "normal"];
  [][(["-ex-md", "normal"] ++)] = ["-bbold", "normal"];
  [][(["-bbold", "normal"] ++)] = ["-upsmall", "normal"];
  [][(["-upsmall", "normal"] ++)] = ["-uplarge", "normal"];
  (["-uplarge", "normal"] ++);
  function <atom:0>.defaultVariants = [];
  [120120, 120146][<<bad:2147483437>>] = 120792;
  s.VariantSmp = Object.assign(Object.assign({}, a.FontData.VariantSmp), {-bbold: [120120, 120146]});
  s.defaultCssFonts = Object.assign(Object.assign({}, a.FontData.defaultCssFonts), {-size3: ["serif", false, false], -size4: ["serif", false, false], -size5: ["serif", false, false], -size6: ["serif", false, false], -size7: ["serif", false, false], -lf-tp: ["serif", false, false], -rt-bt: ["serif", false, false], -ex-md: ["serif", false, false], -bbold: ["serif", false, false], -upsmall: ["serif", false, false], -uplarge: ["serif", false, false]});
  s.defaultAccentMap = {<bad:2147483527>: "ˆ", <bad:2147483559>: "˜", <bad:2147484201>: "ˋ", <bad:2147484202>: "ˊ", <bad:2147484203>: "ˆ", <bad:2147484204>: "˜", <bad:2147484205>: "ˉ", <bad:2147484207>: "˘", <bad:2147484208>: "˙", <bad:2147484209>: "�", <bad:2147484211>: "˚", <bad:2147484213>: "ˇ", <bad:2147492027>: "⃗"};
  s.defaultParams = Object.assign(Object.assign({}, a.FontData.defaultParams), {x_height: 0.442});
  s.defaultSizeVariants = ["normal", "-smallop", "-largeop", "-size3", "-size4", "-size5", "-size6", "-size7"];
  s.defaultStretchVariants = ["normal", "-ex-md", "-size3", "-lf-tp", "-rt-bt"];
  return s;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=math_jax/src/mathjax_font/common
// args: require, module, exports
// locals: a, e
function {
  e = function e;
  let a;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMathJaxNewcmFontMixin = undefined;
  a = require("../mathjax_src/output/common/FontData");
  exports.CommonMathJaxNewcmFontMixin = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_font/common
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
