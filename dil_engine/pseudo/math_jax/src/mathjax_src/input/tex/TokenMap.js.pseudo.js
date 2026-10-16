// fn e  args=1 vars=1 closure=0 cpool=0 bc=9B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: r
function {
  if (((undefined === r))) goto L_8;
  return r;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=111B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: r, e
// locals: this
// closure: <class_fields_init>, t
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this._name = r;
  this._parser = e;
  t.MapHandler.register(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/input/tex/TokenMap
// locals: this
function {
  this = this;
  return this._name;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=79B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: r
// locals: this
function {
  this = this;
  if (!(this.contains(r))) goto L_4d;
  return this.parser;
  return null;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=123B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: <atom:0>
// locals: r, t, s, a, this
// closure: e
function {
  this = this;
  const _it1 = <atom:0>;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  t = <value(_it1)>;
  let a;
  let s;
  s = this.parserFor(t);
  a = this.lookup(t);
  if (!(s)) goto L_79;
  if (!(a)) goto L_79;
  return e(s(r, a));
  return null;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: r
// locals: this
function {
  this = this;
  this._parser = r;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/input/tex/TokenMap
// locals: this
function {
  this = this;
  return this._parser;
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=0 bc=54B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: r, t, e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r, t);
  if (!(<class_fields_init>)) goto L_23;
  <class_fields_init>.call(this);
  new new.target(r, t);
  this._regExp = e;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: r
// locals: this
function {
  this = this;
  return this._regExp.test(r);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: r
// locals: this
function {
  this = this;
  if (!(this.contains(r))) goto L_2c;
  return r;
  return null;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=70B file=math_jax/src/mathjax_src/input/tex/TokenMap
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
  this.map = new Map();
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: r
// locals: this
function {
  this = this;
  return this.map.get(r);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: r
// locals: this
function {
  this = this;
  return this.map.has(r);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=75B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: r, t
// locals: this
function {
  this = this;
  this.map.set(r, t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: r
// locals: this
function {
  this = this;
  this.map.delete(r);
  return;
}

// fn <atom:0>  args=3 vars=11 closure=2 cpool=0 bc=263B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: t, e, s
// locals: a, t#1, e#1, p, o, this.active_func, new.target, this
// closure: <class_fields_init>, r
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(t, e);
  if (!(<class_fields_init>)) goto L_27;
  <class_fields_init>.call(this);
  new new.target(t, e);
  let a;
  const _it1 = Object.keys(s);
  goto L_fa;
  a = <value(_it1)>;
  let o;
  let p;
  let e#1;
  let t#1;
  t#1 = s[a];
  if (((undefined === undefined))) goto L_7e;
  const _it2 = undefined;
  <done(_it2)>;
  e#1 = <value(_it2)>;
  <done(_it2)>;
  p = <value(_it2)>;
  goto L_99;
  <value(_it2)>;
  if (!(("string" == typeof t#1))) goto L_94;
  goto L_72;
  // [栈深重同步 4 -> 3]
  goto L_72;
  // [栈深重同步 4 -> 3]
  o = new r.Token(a, e#1, p);
  this.add(a, o);
  if (!(<done(_it2)>)) goto L_5a;
  <value(_it2)>;
  return this;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: <atom:0>
// locals: r, t, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  const _it1 = <atom:0>;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  t = <value(_it1)>;
  return super["parse"]([r, ("\" + t)]);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/TokenMap
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

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=16B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: r
// closure: s
function {
  if (!(("string" == typeof r))) goto L_e;
  return s[r];
  return r;
}

// fn <atom:0>  args=3 vars=15 closure=2 cpool=1 bc=389B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: t, e, s
// locals: t#1, e#1, s#1, a, p, o, t#2, e#2, s#2, this.active_func, new.target, this
// closure: <class_fields_init>, r
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((s === undefined))) goto L_21;
  s;
  s = {};
  s#1 = {};
  let a;
  this = new new.target(t, null);
  if (!(<class_fields_init>)) goto L_40;
  <class_fields_init>.call(this);
  new new.target(t, null);
  a = function <atom:0>;
  let o;
  let p;
  const _it1 = Object.entries(e);
  goto L_178;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  p = <value(_it2)>;
  <done(_it2)>;
  o = <value(_it2)>;
  let s#2;
  let e#2;
  let t#2;
  t#2 = undefined;
  e#2 = undefined;
  if (!(Array.isArray(o))) goto L_103;
  t#2 = a(o[0]);
  a(o[0]);
  e#2 = o.slice(1);
  goto L_116;
  // [栈深重同步 4 -> 3]
  t#2 = a(o);
  a(o);
  e#2 = [];
  [];
  s#2 = new r.Macro(p, t#2, e#2);
  this.add(p, s#2);
  if (!(<done(_it2)>)) goto L_7e;
  <value(_it2)>;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=88B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: r
// locals: t, this
function {
  this = this;
  let t;
  t = this.lookup(r);
  if (!(t)) goto L_56;
  return t.func;
  return null;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=202B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: <atom:0>
// locals: r, t, s, a, this
// closure: e
function {
  this = this;
  const _it1 = <atom:0>;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  t = <value(_it1)>;
  let a;
  let s;
  s = this.lookup(t);
  a = this.parserFor(t);
  if (!(s)) goto L_c8;
  if (!(a)) goto L_c8;
  // append([r, s.token], 2, s.args)
  s.args;
  return e(a.apply(undefined, [r, s.token]));
  return null;
}

// fn <atom:0>  args=1 vars=8 closure=1 cpool=0 bc=290B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: <atom:0>
// locals: r, t, s, a, p, o, this
// closure: e
function {
  this = this;
  const _it1 = <atom:0>;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  t = <value(_it1)>;
  let o;
  let p;
  let a;
  let s;
  s = this.lookup(t);
  a = this.parserFor(t);
  if ((!s)) goto L_76;
  if (!(!a)) goto L_7a;
  return null;
  p = r.currentCS;
  r.currentCS = ("\" + t);
  // append([r, ("\" + s.token)], 2, s.args)
  s.args;
  o = a.apply(undefined, [r, ("\" + s.token)]);
  r.currentCS = p;
  return e(o);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/TokenMap
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

// fn <atom:0>  args=4 vars=11 closure=1 cpool=0 bc=86B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: r, t, e, s
// locals: r#1, t#1, e#1, s#1, this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let s#1;
  let e#1;
  let t#1;
  let r#1;
  r#1 = r;
  t#1 = t;
  e#1 = e;
  if (!((s === undefined))) goto L_26;
  s;
  s = {};
  s#1 = {};
  this = new new.target(r, e, s);
  if (!(<class_fields_init>)) goto L_43;
  <class_fields_init>.call(this);
  new new.target(r, e, s);
  this.parser = t;
  return this;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=229B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: <atom:0>
// locals: r, t, s, a, this
// closure: e
function {
  this = this;
  const _it1 = <atom:0>;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  t = <value(_it1)>;
  let a;
  let s;
  s = this.lookup(t);
  a = this.parserFor(t);
  if (!(s)) goto L_e3;
  if (!(a)) goto L_e3;
  return e(this.parser(r, s.token, a, s.args));
  return null;
}

// fn <atom:0>  args=3 vars=30 closure=0 cpool=25 bc=669B file=math_jax/src/mathjax_src/input/tex/TokenMap
// args: require, module, exports
// locals: r, t, e, AbstractTokenMap, <class_fields_init>, AbstractTokenMap#1, RegExpMap, <class_fields_init>#1, RegExpMap#1, AbstractParseMap, <class_fields_init>#2, AbstractParseMap#1, CharacterMap, <class_fields_init>#3, CharacterMap#1, DelimiterMap, <class_fields_init>#4, DelimiterMap#1, MacroMap, <class_fields_init>#5, MacroMap#1, CommandMap, <class_fields_init>#6, CommandMap#1, EnvironmentMap, <class_fields_init>#7, EnvironmentMap#1
function {
  e = function e;
  let EnvironmentMap#1;
  let CommandMap#1;
  let MacroMap#1;
  let DelimiterMap#1;
  let CharacterMap#1;
  let AbstractParseMap#1;
  let RegExpMap#1;
  let AbstractTokenMap#1;
  let t;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.parseResult = undefined;
  exports.AbstractTokenMap = undefined;
  exports.RegExpMap = undefined;
  exports.AbstractParseMap = undefined;
  exports.CharacterMap = undefined;
  exports.DelimiterMap = undefined;
  exports.MacroMap = undefined;
  exports.CommandMap = undefined;
  exports.EnvironmentMap = undefined;
  r = require("./Token");
  t = require("./MapHandler");
  exports.parseResult = e;
  let AbstractTokenMap;
  let <class_fields_init>;
  class AbstractTokenMap extends undefined { ... }
  <proto:AbstractTokenMap>.name = function <atom:0>;
  <proto:AbstractTokenMap>.parserFor = function <atom:0>;
  <proto:AbstractTokenMap>.parse = function <atom:0>;
  <proto:AbstractTokenMap>.parser = function <atom:0>;
  <proto:AbstractTokenMap>.parser = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AbstractTokenMap>;
  AbstractTokenMap = function <atom:0>;
  // close_loc <class_fields_init>
  AbstractTokenMap#1 = function <atom:0>;
  exports.AbstractTokenMap = AbstractTokenMap#1;
  let RegExpMap;
  let <class_fields_init>#1;
  class RegExpMap extends AbstractTokenMap#1 { ... }
  <proto:RegExpMap>.contains = function <atom:0>;
  <proto:RegExpMap>.lookup = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:RegExpMap>;
  RegExpMap = function <atom:0>;
  // close_loc <class_fields_init>#1
  RegExpMap#1 = function <atom:0>;
  exports.RegExpMap = RegExpMap#1;
  let AbstractParseMap;
  let <class_fields_init>#2;
  class AbstractParseMap extends AbstractTokenMap#1 { ... }
  <proto:AbstractParseMap>.lookup = function <atom:0>;
  <proto:AbstractParseMap>.contains = function <atom:0>;
  <proto:AbstractParseMap>.add = function <atom:0>;
  <proto:AbstractParseMap>.remove = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:AbstractParseMap>;
  AbstractParseMap = function <atom:0>;
  // close_loc <class_fields_init>#2
  AbstractParseMap#1 = function <atom:0>;
  exports.AbstractParseMap = AbstractParseMap#1;
  let CharacterMap;
  let <class_fields_init>#3;
  class CharacterMap extends AbstractParseMap#1 { ... }
  <class_fields_init>#3 = undefined;
  <proto:CharacterMap>;
  CharacterMap = function <atom:0>;
  // close_loc <class_fields_init>#3
  CharacterMap#1 = function <atom:0>;
  exports.CharacterMap = CharacterMap#1;
  let DelimiterMap;
  let <class_fields_init>#4;
  class DelimiterMap extends CharacterMap#1 { ... }
  <proto:DelimiterMap>.parse = function <atom:0>;
  <class_fields_init>#4 = undefined;
  <proto:DelimiterMap>;
  DelimiterMap = function <atom:0>;
  // close_loc <class_fields_init>#4
  DelimiterMap#1 = function <atom:0>;
  exports.DelimiterMap = DelimiterMap#1;
  let MacroMap;
  let <class_fields_init>#5;
  class MacroMap extends AbstractParseMap#1 { ... }
  <proto:MacroMap>.parserFor = function <atom:0>;
  <proto:MacroMap>.parse = function <atom:0>;
  <class_fields_init>#5 = undefined;
  <proto:MacroMap>;
  MacroMap = function <atom:0>;
  // close_loc <class_fields_init>#5
  MacroMap#1 = function <atom:0>;
  exports.MacroMap = MacroMap#1;
  let CommandMap;
  let <class_fields_init>#6;
  class CommandMap extends MacroMap#1 { ... }
  <proto:CommandMap>.parse = function <atom:0>;
  <class_fields_init>#6 = undefined;
  <proto:CommandMap>;
  CommandMap = function <atom:0>;
  // close_loc <class_fields_init>#6
  CommandMap#1 = function <atom:0>;
  exports.CommandMap = CommandMap#1;
  let EnvironmentMap;
  let <class_fields_init>#7;
  class EnvironmentMap extends MacroMap#1 { ... }
  <proto:EnvironmentMap>.parse = function <atom:0>;
  <class_fields_init>#7 = undefined;
  <proto:EnvironmentMap>;
  EnvironmentMap = function <atom:0>;
  // close_loc <class_fields_init>#7
  EnvironmentMap#1 = function <atom:0>;
  exports.EnvironmentMap = EnvironmentMap#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/TokenMap
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
