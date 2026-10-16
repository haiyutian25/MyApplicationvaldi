// fn I  args=2 vars=11 closure=5 cpool=0 bc=1034B file=math_jax/src/mathjax_src/input/tex/base/BaseConfiguration
// args: e, t
// locals: o, n, a, p, m, l, c, I, y
// closure: r, s, d, u, i
function {
  let y;
  let I;
  let c;
  let l;
  let m;
  let p;
  let a;
  let n;
  let o;
  o = e.stack.env.font;
  n = e.stack.env.italicFont;
  if (!(o)) goto L_f5;
  goto L_f6;
  // [栈深重同步 1 -> 0]
  a = {};
  p = r.MapHandler.getMap("remap").lookup(t);
  m = s.getRange(t);
  l = m[3];
  if (!(p)) goto L_1f1;
  goto L_1f2;
  // [栈深重同步 6 -> 5]
  c = e.create("token", l, a, t);
  if (!(d.ParseUtil.isLatinOrGreekChar(t))) goto L_294;
  if ((e.configuration.mathStyle(t, true))) goto L_295;
  goto L_295;
  // [栈深重同步 1 -> 0]
  I = "";
  if ((m[4])) goto L_2d5;
  if (!(o)) goto L_2d2;
  if (!((I === u.NORMAL))) goto L_2d2;
  goto L_2d5;
  // [栈深重同步 1 -> 0]
  y = I;
  if (!(y)) goto L_32e;
  c.attributes.set("mathvariant", y);
  if (!(("mo" === l))) goto L_3e0;
  i.default.setProperty(c, "fixStretchy", true);
  e.configuration.addNode("fixStretchy", c);
  e.Push(c);
  return;
}

// fn y  args=2 vars=2 closure=1 cpool=0 bc=58B file=math_jax/src/mathjax_src/input/tex/base/BaseConfiguration
// args: e, t
// closure: o
function {
  throw new o.default("UndefinedControlSequence", "Undefined control sequence %1", ("\" + t));
}

// fn g  args=2 vars=2 closure=1 cpool=0 bc=52B file=math_jax/src/mathjax_src/input/tex/base/BaseConfiguration
// args: e, t
// closure: o
function {
  throw new o.default("UnknownEnv", "Unknown environment '%1'", t);
}

// fn k  args=1 vars=5 closure=0 cpool=0 bc=889B file=math_jax/src/mathjax_src/input/tex/base/BaseConfiguration
// args: <atom:0>
// locals: e, t, r, r#1
function {
  e = <to_object>(<atom:0>).data;
  <to_object>(<atom:0>);
  let t;
  for (const t of e.getList("nonscript")) {
    if (!((t.attributes.get("scriptlevel") > 0))) goto L_299;
    let r;
    r = t.parent;
    r.childNodes.splice(r.childIndex(t), 1);
    e.removeFromList(t.kind, [t]);
    if (!(t.isKind("mrow"))) continue;
    let r#1;
    r#1 = t.childNodes[0];
    e.removeFromList("mstyle", [r#1]);
    e.removeFromList("mspace", r#1.childNodes[0].childNodes);
   continue;
    if (!(t.isKind("mrow"))) goto L_36e;
    t.parent.replaceChild(t.childNodes[0], t);
    e.removeFromList("mrow", [t]);
  }
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseConfiguration
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

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=654B file=math_jax/src/mathjax_src/input/tex/base/BaseConfiguration
// args: t, r
// locals: o
// closure: n, m, e
function {
  let o;
  o = r.parseOptions.options;
  if (!(o.digits)) goto L_a0;
  o.numberPattern = o.digits;
  o.digits;
  new n.RegExpMap("digit", m.default.digit, o.initialDigit);
  new n.RegExpMap("letter", m.default.variable, o.initialLetter);
  t.handlers.get(e.HandlerType.CHARACTER).add(["letter", "digit"], null, 4);
  return;
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=16 bc=5732B file=math_jax/src/mathjax_src/input/tex/base/BaseConfiguration
// args: require, module, exports
// locals: e, t, r, o, i, n, a, p, s, m, d, l, c, u, I, y, g, k, BaseTags, <class_fields_init>, BaseTags#1
function {
  I = function I;
  y = function y;
  g = function g;
  k = function k;
  let BaseTags#1;
  let u;
  let c;
  let l;
  let d;
  let m;
  let s;
  let p;
  let a;
  let n;
  let i;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Other = undefined;
  exports.BaseTags = undefined;
  exports.BaseConfiguration = undefined;
  e = require("../HandlerTypes");
  t = require("../Configuration");
  r = require("../MapHandler");
  o = require("../TexError");
  i = require("../NodeUtil");
  n = require("../TokenMap");
  a = require("./BaseItems");
  p = require("../Tags");
  require("./BaseMappings");
  s = require("../../../core/MmlTree/OperatorDictionary");
  m = require("../ParseMethods");
  d = require("../ParseUtil");
  l = require("../TexConstants");
  c = require("../../../util/context");
  u = l.TexConstant.Variant;
  new n.CharacterMap("remap", null, {-: "−", *: "∗", `: "‘"});
  exports.Other = I;
  let BaseTags;
  let <class_fields_init>;
  class BaseTags extends p.AbstractTags { ... }
  <class_fields_init> = undefined;
  <proto:BaseTags>;
  BaseTags = function <atom:0>;
  // close_loc <class_fields_init>
  BaseTags#1 = function <atom:0>;
  exports.BaseTags = BaseTags#1;
  {}[<set_name_computed#0>] = <set_name_computed#1>;
  <set_name_computed#1>;
  {}[e.HandlerType.CHARACTER] = ["command", "special"];
  ["command", "special"];
  {}[e.HandlerType.DELIMITER] = ["delimiter"];
  ["delimiter"];
  {}[e.HandlerType.MACRO] = ["delimiter", "macros", "lcGreek", "ucGreek", "mathchar0mi", "mathchar0mo", "mathchar7"];
  ["delimiter", "macros", "lcGreek", "ucGreek", "mathchar0mi", "mathchar0mo", "mathchar7"];
  {}[e.HandlerType.ENVIRONMENT] = ["environment"];
  ["environment"];
  {}[e.ConfigurationType.HANDLER] = {};
  {};
  {}[e.HandlerType.CHARACTER] = I;
  I;
  {}[e.HandlerType.MACRO] = y;
  y;
  {}[e.HandlerType.ENVIRONMENT] = g;
  g;
  {}[e.ConfigurationType.FALLBACK] = {};
  {};
  {}[a.StartItem.prototype.kind] = a.StartItem;
  a.StartItem;
  {}[a.StopItem.prototype.kind] = a.StopItem;
  a.StopItem;
  {}[a.OpenItem.prototype.kind] = a.OpenItem;
  a.OpenItem;
  {}[a.CloseItem.prototype.kind] = a.CloseItem;
  a.CloseItem;
  {}[a.NullItem.prototype.kind] = a.NullItem;
  a.NullItem;
  {}[a.PrimeItem.prototype.kind] = a.PrimeItem;
  a.PrimeItem;
  {}[a.SubsupItem.prototype.kind] = a.SubsupItem;
  a.SubsupItem;
  {}[a.OverItem.prototype.kind] = a.OverItem;
  a.OverItem;
  {}[a.LeftItem.prototype.kind] = a.LeftItem;
  a.LeftItem;
  {}[a.Middle.prototype.kind] = a.Middle;
  a.Middle;
  {}[a.RightItem.prototype.kind] = a.RightItem;
  a.RightItem;
  {}[a.BreakItem.prototype.kind] = a.BreakItem;
  a.BreakItem;
  {}[a.BeginItem.prototype.kind] = a.BeginItem;
  a.BeginItem;
  {}[a.EndItem.prototype.kind] = a.EndItem;
  a.EndItem;
  {}[a.StyleItem.prototype.kind] = a.StyleItem;
  a.StyleItem;
  {}[a.PositionItem.prototype.kind] = a.PositionItem;
  a.PositionItem;
  {}[a.CellItem.prototype.kind] = a.CellItem;
  a.CellItem;
  {}[a.MmlItem.prototype.kind] = a.MmlItem;
  a.MmlItem;
  {}[a.FnItem.prototype.kind] = a.FnItem;
  a.FnItem;
  {}[a.NotItem.prototype.kind] = a.NotItem;
  a.NotItem;
  {}[a.NonscriptItem.prototype.kind] = a.NonscriptItem;
  a.NonscriptItem;
  {}[a.DotsItem.prototype.kind] = a.DotsItem;
  a.DotsItem;
  {}[a.ArrayItem.prototype.kind] = a.ArrayItem;
  a.ArrayItem;
  {}[a.EqnArrayItem.prototype.kind] = a.EqnArrayItem;
  a.EqnArrayItem;
  {}[a.EquationItem.prototype.kind] = a.EquationItem;
  a.EquationItem;
  {}[a.MstyleItem.prototype.kind] = a.MstyleItem;
  a.MstyleItem;
  {}[e.ConfigurationType.ITEMS] = {};
  {};
  if (!(c.context.document)) goto L_15ae;
  if (!((0 !== c.context.document.getElementsByTagName("base").length))) goto L_15ae;
  goto L_15af;
  // [栈深重同步 8 -> 7]
  {}[e.ConfigurationType.OPTIONS] = {maxMacros: 1000, digits: "", numberPattern: new RegExp("^(?:[0-9]+(?:\\{,\\}[0-9]{3})*(?:\\.[0-9]*)?|\\.[0-9]+)"), initialDigit: new RegExp("[0-9.,]"), identifierPattern: new RegExp("^[a-zA-Z]+"), initialLetter: new RegExp("[a-zA-Z]"), baseURL: ""};
  {maxMacros: 1000, digits: "", numberPattern: new RegExp("^(?:[0-9]+(?:\\{,\\}[0-9]{3})*(?:\\.[0-9]*)?|\\.[0-9]+)"), initialDigit: new RegExp("[0-9.,]"), identifierPattern: new RegExp("^[a-zA-Z]+"), initialLetter: new RegExp("[a-zA-Z]"), baseURL: ""};
  {}[e.ConfigurationType.TAGS] = {base: BaseTags#1};
  {base: BaseTags#1};
  {}[e.ConfigurationType.POSTPROCESSORS] = [[k, -4]];
  [[k, -4]];
  exports.BaseConfiguration = t.Configuration.create("base", {});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/base/BaseConfiguration
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
