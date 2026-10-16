// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=931B file=math_jax/src/mathjax_src/input/tex/ParseMethods
// args: t, e
// locals: a, i, r, c
// closure: r, n
function {
  let c;
  let i;
  let a;
  a = r.ParseUtil.getFontDef(t);
  i = t.stack.env;
  if (!(i.multiLetterIdentifiers)) goto L_26d;
  if (!(("" !== i.font))) goto L_26d;
  if (!((t.string.substring((t.i - 1)).match(i.multiLetterIdentifiers) == null))) goto L_1a9;
  t.string.substring((t.i - 1)).match(i.multiLetterIdentifiers);
  goto L_1ab;
  if ((undefined[0])) goto L_1b0;
  e = e;
  t.i = (t.i + (e.length - 1));
  if (!((a.mathvariant === n.NORMAL))) goto L_26d;
  if (!(i.noAutoOP)) goto L_26d;
  if (!((e.length > 1))) goto L_26d;
  a.autoOP = false;
  false;
  if (!(!a.mathvariant)) goto L_346;
  if (!(r.ParseUtil.isLatinOrGreekChar(e))) goto L_346;
  let r;
  r = t.configuration.mathStyle(e);
  if (!(r)) goto L_345;
  a.mathvariant = r;
  r;
  c = t.create("token", "mi", a, e);
  t.Push(c);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=2 bc=536B file=math_jax/src/mathjax_src/input/tex/ParseMethods
// args: t, e
// locals: a, n, i, c
// closure: r
function {
  let c;
  let i;
  let n;
  let a;
  a = t.configuration.options.numberPattern;
  n = t.string.slice((t.i - 1)).match(a);
  if (!(!n)) goto L_10c;
  return false;
  i = r.ParseUtil.getFontDef(t);
  c = t.create("token", "mn", i, n[0].replace(new RegExp("[{}]"), ""));
  t.i = (t.i + (n[0].length - 1));
  t.Push(c);
  return true;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=155B file=math_jax/src/mathjax_src/input/tex/ParseMethods
// args: e, a
// locals: r
// closure: t
function {
  let r;
  r = e.GetCS();
  e.parse(t.HandlerType.MACRO, [e, r]);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=283B file=math_jax/src/mathjax_src/input/tex/ParseMethods
// args: t, e
// locals: a, r
// closure: n
function {
  let r;
  let a;
  if ((t.configuration.mathStyle(e.char))) goto L_97;
  a = {mathvariant: n.ITALIC};
  r = t.create("token", "mi", a, e.char);
  t.Push(r);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=392B file=math_jax/src/mathjax_src/input/tex/ParseMethods
// args: t, e
// locals: a, r
// closure: n
function {
  let r;
  let a;
  if ((t.stack.env.font)) goto L_104;
  if ((t.configuration.mathStyle(e.char, true))) goto L_104;
  a = {mathvariant: n.NORMAL};
  r = t.create("token", "mi", a, e.char);
  t.Push(r);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=213B file=math_jax/src/mathjax_src/input/tex/ParseMethods
// args: t, e
// locals: a, r
// closure: n
function {
  let r;
  let a;
  if ((e.attributes)) goto L_56;
  a = {mathvariant: n.ITALIC};
  r = t.create("token", "mi", a, e.char);
  t.Push(r);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=348B file=math_jax/src/mathjax_src/input/tex/ParseMethods
// args: t, a
// locals: r, n
// closure: e
function {
  let n;
  let r;
  if ((a.attributes)) goto L_2d;
  r = {};
  r.stretchy = false;
  n = t.create("token", "mo", r, a.char);
  e.default.setProperty(n, "fixStretchy", true);
  t.configuration.addNode("fixStretchy", n);
  t.Push(n);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=431B file=math_jax/src/mathjax_src/input/tex/ParseMethods
// args: t, e
// locals: a, r
// closure: n
function {
  let r;
  let a;
  if ((e.attributes)) goto L_56;
  a = {mathvariant: n.NORMAL};
  if (!(t.stack.env.font)) goto L_130;
  a.mathvariant = t.stack.env.font;
  t.stack.env.font;
  r = t.create("token", "mi", a, e.char);
  t.Push(r);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=236B file=math_jax/src/mathjax_src/input/tex/ParseMethods
// args: t, e
// locals: a, r
function {
  let r;
  let a;
  if ((e.attributes)) goto L_2d;
  a = {};
  a = Object.assign({fence: false, stretchy: false}, a);
  Object.assign({fence: false, stretchy: false}, a);
  r = t.create("token", "mo", a, e.char);
  t.Push(r);
  return;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=213B file=math_jax/src/mathjax_src/input/tex/ParseMethods
// args: t, e, a, r
// locals: n
function {
  let n;
  n = t.itemFactory.create("begin").setProperty("name", e);
  // append([t, n], 2, r.slice(1))
  r.slice(1);
  t.Push(a.apply(undefined, [t, n]));
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=10 bc=274B file=math_jax/src/mathjax_src/input/tex/ParseMethods
// args: require, module, exports
// locals: t, e, a, r, n, i
function {
  let i;
  let n;
  let r;
  let a;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  t = require("./HandlerTypes");
  e = require("./NodeUtil");
  a = require("./TexConstants");
  r = require("./ParseUtil");
  n = a.TexConstant.Variant;
  i = {variable: function <atom:0>, digit: function <atom:0>, controlSequence: function <atom:0>, lcGreek: function <atom:0>, ucGreek: function <atom:0>, mathchar0mi: function <atom:0>, mathchar0mo: function <atom:0>, mathchar7: function <atom:0>, delimiter: function <atom:0>, environment: function <atom:0>};
  exports.default = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/ParseMethods
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
