// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=math_jax/src/mathjax_src/output/svg/FontData
// closure: o
function {
  return o.DIRECTION;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=19B file=math_jax/src/mathjax_src/output/svg/FontData
// args: t, e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  return super["charOptions"](t, e);   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=115B file=math_jax/src/mathjax_src/output/svg/FontData
// args: t, o
// locals: t#1, o#1, this, <home_object>
// closure: e
function {
  <home_object> = <special_object 4>;
  this = this;
  let o#1;
  let t#1;
  t#1 = t;
  if (!((o === undefined))) goto L_15;
  o;
  o = "";
  o#1 = "";
  super["addExtension"].call(this, t, o);
  e.mergeOptions(this, "variantCacheIds", t.cacheIds);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/FontData
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

// fn a  args=3 vars=7 closure=1 cpool=0 bc=252B file=math_jax/src/mathjax_src/output/svg/FontData
// args: t, e, o
// locals: a, o#1, a#1, e#1
// closure: SvgFontData
function {
  let a;
  for (const a of Object.keys(e)) {
    let o#1;
    o#1 = parseInt(a);
    SvgFontData.charOptions(t, o#1).p = e[o#1];
  }
  let a#1;
  for (const a#1 of Object.keys(o)) {
    let e#1;
    e#1 = parseInt(a#1);
    SvgFontData.charOptions(t, e#1).c = o[e#1];
  }
  return t;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=5 bc=462B file=math_jax/src/mathjax_src/output/svg/FontData
// args: require, module, exports
// locals: t, e, o, SvgFontData, <class_fields_init>, SvgFontData#1, a
function {
  a = function a;
  let SvgFontData#1;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIRECTION = undefined;
  exports.SvgFontData = undefined;
  exports.AddPaths = undefined;
  t = require("tslib");
  e = require("../common/FontData");
  t.__exportStar(require("../common/FontData"), exports);
  o = require("../common/Direction");
  Object.defineProperty(exports, "DIRECTION", {enumerable: true, get: function <atom:0>});
  let SvgFontData;
  let <class_fields_init>;
  class SvgFontData extends e.FontData { ... }
  function <atom:0>.charOptions = function <atom:0>;
  function <atom:0>.addExtension = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgFontData>;
  SvgFontData = function <atom:0>;
  // close_loc <class_fields_init>
  SvgFontData#1 = function <atom:0>;
  exports.SvgFontData = SvgFontData#1;
  null;
  e.FontData.OPTIONS;
  SvgFontData#1.OPTIONS = {dynamicPrefix: "./svg/dynamic"};
  SvgFontData#1.JAX = "SVG";
  exports.AddPaths = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/FontData
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
