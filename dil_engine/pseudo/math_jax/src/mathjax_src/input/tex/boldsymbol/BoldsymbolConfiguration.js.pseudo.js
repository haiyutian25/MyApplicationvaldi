// fn i  args=4 vars=5 closure=2 cpool=0 bc=433B file=math_jax/src/mathjax_src/input/tex/boldsymbol/BoldsymbolConfiguration
// args: t, o, n, a
// locals: s
// closure: r, e
function {
  let s;
  s = r.NodeFactory.createToken(t, o, n, a);
  if (!(("mtext" !== o))) goto L_1ac;
  if (!(t.configuration.parser.stack.env.boldsymbol)) goto L_1ac;
  e.default.setProperty(s, "fixBold", true);
  t.configuration.addNode("fixBold", s);
  return s;
}

// fn l  args=1 vars=3 closure=2 cpool=0 bc=438B file=math_jax/src/mathjax_src/input/tex/boldsymbol/BoldsymbolConfiguration
// args: t
// locals: o, t#1
// closure: e, s
function {
  let o;
  for (const o of t.data.getList("fixBold")) {
    if (!(e.default.getProperty(o, "fixBold"))) continue;
    let t#1;
    t#1 = e.default.getAttribute(o, "mathvariant");
    if ((s[t#1])) goto L_157;
    e.default.setAttribute(o, "mathvariant", t#1);
    e.default.removeProperties(o, "fixBold");
  }
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=344B file=math_jax/src/mathjax_src/input/tex/boldsymbol/BoldsymbolConfiguration
// args: t, o
// locals: e, n
function {
  let n;
  let e;
  e = t.stack.env.boldsymbol;
  t.stack.env.boldsymbol = true;
  n = t.ParseArg(o);
  t.stack.env.boldsymbol = e;
  t.Push(n);
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=3 bc=1924B file=math_jax/src/mathjax_src/input/tex/boldsymbol/BoldsymbolConfiguration
// args: require, module, exports
// locals: t, o, e, n, a, r, s, i, l
function {
  i = function i;
  l = function l;
  let s;
  let r;
  let a;
  let n;
  let e;
  let o;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BoldsymbolMethods = undefined;
  exports.createBoldToken = undefined;
  exports.rewriteBoldTokens = undefined;
  exports.BoldsymbolConfiguration = undefined;
  t = require("../HandlerTypes");
  o = require("../Configuration");
  e = require("../NodeUtil");
  n = require("../TexConstants");
  a = require("../TokenMap");
  r = require("../NodeFactory");
  s = {};
  s[n.TexConstant.Variant.NORMAL] = n.TexConstant.Variant.BOLD;
  s[n.TexConstant.Variant.ITALIC] = n.TexConstant.Variant.BOLDITALIC;
  s[n.TexConstant.Variant.FRAKTUR] = n.TexConstant.Variant.BOLDFRAKTUR;
  s[n.TexConstant.Variant.SCRIPT] = n.TexConstant.Variant.BOLDSCRIPT;
  s[n.TexConstant.Variant.SANSSERIF] = n.TexConstant.Variant.BOLDSANSSERIF;
  s["-tex-calligraphic"] = "-tex-bold-calligraphic";
  s["-tex-oldstyle"] = "-tex-bold-oldstyle";
  s["-tex-mathit"] = n.TexConstant.Variant.BOLDITALIC;
  exports.BoldsymbolMethods = {Boldsymbol: function <atom:0>};
  new a.CommandMap("boldsymbol", {boldsymbol: exports.BoldsymbolMethods.Boldsymbol});
  exports.createBoldToken = i;
  exports.rewriteBoldTokens = l;
  {}[t.HandlerType.MACRO] = ["boldsymbol"];
  ["boldsymbol"];
  {}[t.ConfigurationType.HANDLER] = {};
  {};
  {}[t.ConfigurationType.NODES] = {token: i};
  {token: i};
  {}[t.ConfigurationType.POSTPROCESSORS] = [l];
  [l];
  exports.BoldsymbolConfiguration = o.Configuration.create("boldsymbol", {});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/boldsymbol/BoldsymbolConfiguration
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
