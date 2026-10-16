// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=115B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t
function {
  return new Array(4).fill((t.thickness + t.padding));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=80B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t
function {
  return new Array(4).fill(t.thickness);   // tail call
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=350B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t
// locals: e, r, i, o, this
function {
  this = this;
  let o;
  let i;
  let r;
  let e;
  if (((undefined === undefined))) goto L_28;
  const _it1 = undefined;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  goto L_2c;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_14;
  // [栈深重同步 1 -> 0]
  return this.svg("line", {x1: this.fixed(e), y1: this.fixed(r), x2: this.fixed(i), y2: this.fixed(o), stroke-width: this.fixed(this.thickness)});   // tail call
}

// fn <atom:0>  args=4 vars=11 closure=0 cpool=0 bc=432B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t, e, r, i
// locals: t#1, e#1, r#1, i#1, o, s, this
function {
  this = this;
  let i#1;
  let r#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  r#1 = r;
  if (!((i === undefined))) goto L_1d;
  i;
  i = 0;
  i#1 = 0;
  let s;
  let o;
  o = this.thickness;
  s = {x: this.fixed((o / 2)), y: this.fixed(((o / 2) - r)), width: this.fixed((t - o)), height: this.fixed(((e + r) - o)), fill: "none", stroke-width: this.fixed(o)};
  if (!(i)) goto L_181;
  s.rx = this.fixed(i);
  this.fixed(i);
  return this.svg("rect", s);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=330B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t, e, r
// locals: i, this
function {
  this = this;
  let i;
  i = this.thickness;
  return this.svg("ellipse", {rx: this.fixed(((t - i) / 2)), ry: this.fixed((((e + r) - i) / 2)), cx: this.fixed((t / 2)), cy: this.fixed(((e - r) / 2)), fill: "none", stroke-width: this.fixed(i)});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=51B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t
// closure: this
function {
  if (!(("string" == typeof t))) goto L_c;
  return t;
  return this.fixed(t);
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=242B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t, e
// locals: this
function {
  this = this;
  e = ...1;
  return this.svg("path", {d: e.map(function <atom:0>).join(" "), style: {stroke-width: this.fixed(this.thickness)}, stroke-linecap: "round", stroke-linejoin: t, fill: "none"});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=51B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t
// closure: this
function {
  if (!(("string" == typeof t))) goto L_c;
  return t;
  return this.fixed(t);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=134B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t
// locals: this
function {
  this = this;
  t = ...0;
  return this.svg("path", {d: t.map(function <atom:0>).join(" ")});   // tail call
}

// fn <atom:0>  args=5 vars=24 closure=0 cpool=0 bc=1616B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t, e, r, i, o
// locals: t#1, e#1, r#1, i#1, o#1, s, n, d, h, a, l, p, c, x, g, f, w, t#2, this
function {
  this = this;
  let o#1;
  let i#1;
  let r#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  r#1 = r;
  if (!((i === undefined))) goto L_20;
  i;
  i = "";
  i#1 = "";
  if (!((o === undefined))) goto L_2d;
  o;
  o = 0;
  o#1 = 0;
  let w;
  let f;
  let g;
  let x;
  let c;
  let p;
  let l;
  let a;
  let h;
  let d;
  let n;
  let s;
  if (((undefined === undefined))) goto L_c7;
  s = <to_object>(undefined).w;
  n = <to_object>(undefined).h;
  d = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_f1;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_58;
  // [栈深重同步 1 -> 0]
  h = ((t - s) / 2);
  a = ((n - d) / 2);
  l = this.thickness;
  p = (l / 2);
  if (((undefined === undefined))) goto L_14a;
  const _it1 = undefined;
  <done(_it1)>;
  c = <value(_it1)>;
  <done(_it1)>;
  x = <value(_it1)>;
  <done(_it1)>;
  g = <value(_it1)>;
  goto L_229;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_136;
  // [栈深重同步 1 -> 0]
  if (!(r)) goto L_305;
  goto L_39f;
  // [栈深重同步 1 -> 0]
  f = this.fill("M", (s + h), a, "l", -(c + g), x, "l", g, (p - x), "L", -h, (a + p), "l", 0, -l, "L", ((s + h) - c), (a - p), "l", -g, (p - x), "Z");
  w = [];
  if (!(o)) goto L_491;
  if (!(("X" === i))) goto L_437;
  goto L_48e;
  // [栈深重同步 3 -> 2]
  w.push("translate(0 ".concat(this.fixed(o), ")"));
  if (!(e)) goto L_5c8;
  let t#2;
  t#2 = this.jax.fixed(((180 * -e) / Math.PI));
  w.push("rotate(".concat(t#2, " ", this.fixed((s / 2)), " ", this.fixed(a), ")"));
  if (!(w.length)) goto L_64b;
  this.adaptor.setAttribute(f, "transform", w.join(" "));
  return f;
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=762B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t
// locals: e, r, i, o, s, t#1, this
function {
  this = this;
  let o;
  let i;
  let r;
  let e;
  e = this.standardSvgNodes(t);
  r = this.getBBoxExtenders()[3];
  i = {};
  if (!((r > 0))) goto L_ad;
  i.transform = (("translate(" + this.fixed(r)) + ", 0)");
  (("translate(" + this.fixed(r)) + ", 0)");
  o = this.adaptor.append(e[0], this.svg("g", i));
  if (!(this.renderChild)) goto L_17c;
  goto L_217;
  // [栈深重同步 1 -> 0]
  this.childNodes[0].toSVG([o]);
  this.childNodes[0].place(0, 0);
  let s;
  for (const s of Object.keys(this.notations)) {
    let t#1;
    t#1 = this.notations[s];
    if ((t#1.renderChild)) goto L_2ef;
    t#1.renderer(this, e[0]);
  }
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
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

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t
function {
  return [0, t.padding, 0, t.padding];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t
function {
  return [t.padding, 0, t.padding, 0];
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=317B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t, e
// locals: r, i, o
function {
  let o;
  let i;
  let r;
  if (((undefined === undefined))) goto L_7b;
  r = <to_object>(undefined).w;
  i = <to_object>(undefined).h;
  o = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_a4;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_e;
  // [栈深重同步 1 -> 0]
  t.adaptor.append(t.dom[0], t.box(r, i, o));
  return;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=393B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t, e
// locals: r, i, o, s
function {
  let s;
  let o;
  let i;
  let r;
  if (((undefined === undefined))) goto L_7e;
  r = <to_object>(undefined).w;
  i = <to_object>(undefined).h;
  o = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_a7;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_11;
  // [栈深重同步 1 -> 0]
  s = (t.thickness + t.padding);
  t.adaptor.append(t.dom[0], t.box(r, i, o, s));
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=317B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t, e
// locals: r, i, o
function {
  let o;
  let i;
  let r;
  if (((undefined === undefined))) goto L_7b;
  r = <to_object>(undefined).w;
  i = <to_object>(undefined).h;
  o = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_a4;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_e;
  // [栈深重同步 1 -> 0]
  t.adaptor.append(t.dom[0], t.ellipse(r, i, o));
  return;
}

// fn <atom:0>  args=2 vars=9 closure=0 cpool=1 bc=567B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t, e
// locals: r, i, o, s, n, d, h
function {
  let h;
  let d;
  let n;
  let s;
  let o;
  let i;
  let r;
  if (((undefined === undefined))) goto L_87;
  r = <to_object>(undefined).w;
  i = <to_object>(undefined).h;
  o = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_b0;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  s = t.getArgMod((1.75 * t.padding), (i + o))[0];
  n = (t.thickness / 2);
  d = (i + o);
  h = Math.cos(s);
  t.adaptor.append(t.dom[0], t.path("mitre", "M", r, (n - o), "L", (n + (h * n)), (n - o), "L", ((h * d) + n), ((d - o) - n)));
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=106B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t
// locals: e, r
function {
  let r;
  let e;
  e = (t.padding / 2);
  r = t.thickness;
  return [(2 * e), e, (e + r), ((3 * e) + r)];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t
function {
  return [0, 0, t.thickness, 0];
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=475B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t, e
// locals: r, i, o, s, n
function {
  let n;
  let s;
  let o;
  let i;
  let r;
  if (((undefined === undefined))) goto L_81;
  r = <to_object>(undefined).w;
  i = <to_object>(undefined).h;
  o = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_aa;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_14;
  // [栈深重同步 1 -> 0]
  s = (t.thickness / 2);
  n = t.padding;
  t.adaptor.append(t.dom[0], t.path("round", "M", s, (s - o), "a", (n - (s / 2)), (((i + o) / 2) - (4 * s)), 0, "0,1", 0, ((i + o) - (2 * s)), "L", (r - s), (i - s)));
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=104B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t
// locals: e, r
function {
  let r;
  let e;
  e = t.padding;
  r = t.thickness;
  return [(e + r), e, e, ((2 * e) + (r / 2))];
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=162B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t, e
// locals: r
function {
  let r;
  t.msqrt.toSVG([e]);
  r = t.sqrtTRBL()[3];
  t.place(-r, 0, e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=84B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t
function {
  t.msqrt = t.createMsqrt(t.childNodes[0]);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: t
function {
  return t.sqrtTRBL();   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=21 bc=1632B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// locals: n, d, SvgMenclose, <class_fields_init>
// closure: e, t, r, i, o, s
function {
  let d;
  d = e.CommonMencloseMixin(t.SvgWrapper);
  let SvgMenclose;
  let <class_fields_init>;
  class SvgMenclose extends d { ... }
  <proto:SvgMenclose>.line = function <atom:0>;
  <proto:SvgMenclose>.box = function <atom:0>;
  <proto:SvgMenclose>.ellipse = function <atom:0>;
  <proto:SvgMenclose>.path = function <atom:0>;
  <proto:SvgMenclose>.fill = function <atom:0>;
  <proto:SvgMenclose>.arrow = function <atom:0>;
  <proto:SvgMenclose>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMenclose>;
  SvgMenclose = function <atom:0>;
  // close_loc <class_fields_init>
  n = function <atom:0>;
  function <atom:0>.kind = r.MmlMenclose.prototype.kind;
  n.notations = new Map([i.Border("top"), i.Border("right"), i.Border("bottom"), i.Border("left"), i.Border2("actuarial", "top", "right"), i.Border2("madruwb", "bottom", "right"), i.DiagonalStrike("up"), i.DiagonalStrike("down"), ["horizontalstrike", {renderer: i.RenderLine("horizontal", "Y"), bbox: function <atom:0>}], ["verticalstrike", {renderer: i.RenderLine("vertical", "X"), bbox: function <atom:0>}], ["box", {renderer: function <atom:0>, bbox: o, border: s, remove: "left right top bottom"}], ["roundedbox", {renderer: function <atom:0>, bbox: o}], ["circle", {renderer: function <atom:0>, bbox: o}], ["phasorangle", {renderer: function <atom:0>, bbox: function <atom:0>, border: function <atom:0>, remove: "bottom"}], i.Arrow("up"), i.Arrow("down"), i.Arrow("left"), i.Arrow("right"), i.Arrow("updown"), i.Arrow("leftright"), i.DiagonalArrow("updiagonal"), i.DiagonalArrow("northeast"), i.DiagonalArrow("southeast"), i.DiagonalArrow("northwest"), i.DiagonalArrow("southwest"), i.DiagonalArrow("northeastsouthwest"), i.DiagonalArrow("northwestsoutheast"), ["longdiv", {renderer: function <atom:0>, bbox: function <atom:0>}], ["radical", {renderer: function <atom:0>, init: function <atom:0>, bbox: function <atom:0>, renderChild: true}]]);
  return n;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=149B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// args: require, module, exports
// locals: t, e, r, i, o, s
function {
  let s;
  let o;
  let i;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMenclose = undefined;
  t = require("../Wrapper");
  e = require("../../common/Wrappers/menclose");
  r = require("../../../core/MmlTree/MmlNodes/menclose");
  i = require("../Notation");
  o = function <atom:0>;
  s = function <atom:0>;
  exports.SvgMenclose = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/menclose
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
