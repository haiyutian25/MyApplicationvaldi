// fn <atom:0>  args=1 vars=2 closure=1 cpool=4 bc=129B file=math_jax/src/mathjax_src/input/tex/UnitUtil
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.num = "([-+]?([.,]\d+|\d+([.,]\d*)?))";
  this.unit = "";
  this.dimenEnd = new RegExp(".");
  this.dimenRest = new RegExp(".");
  this.map = new Map(t);
  this.updateDimen();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=417B file=math_jax/src/mathjax_src/input/tex/UnitUtil
// locals: this
function {
  this = this;
  this.unit = "(".concat(Array.from(this.map.keys()).join("|"), ")");
  this.dimenEnd = RegExp((((("^\s*" + this.num) + "\s*") + this.unit) + "\s*$"));
  this.dimenRest = RegExp((((("^\s*" + this.num) + "\s*") + this.unit) + " ?"));
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=115B file=math_jax/src/mathjax_src/input/tex/UnitUtil
// args: t, e
// locals: this
function {
  this = this;
  this.map.set(t, e);
  this.updateDimen();
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=153B file=math_jax/src/mathjax_src/input/tex/UnitUtil
// args: t
// locals: this
function {
  this = this;
  if ((this.map.get(t))) goto L_98;
  return this.map.get("pt");
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=120B file=math_jax/src/mathjax_src/input/tex/UnitUtil
// args: t
// locals: this
function {
  this = this;
  if (!(!!this.map.delete(t))) goto L_77;
  this.updateDimen();
  return true;
}

// fn i  args=1 vars=4 closure=1 cpool=0 bc=262B file=math_jax/src/mathjax_src/input/tex/UnitUtil
// args: <atom:0>
// locals: t, e, i
// closure: exports
function {
  const _it1 = <atom:0>;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  if (!(("mu" !== e))) goto L_1f;
  return [t, e, i];
  return [exports.UnitUtil.em((exports.UnitUtil.UNIT_CASES.get(e) * parseFloat(t))).slice(0, -2), "em", i];
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=2 bc=344B file=math_jax/src/mathjax_src/input/tex/UnitUtil
// args: t, e
// locals: t#1, e#1, n
// closure: exports, i
function {
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_11;
  e;
  e = false;
  e#1 = false;
  let n;
  if (!(e)) goto L_a0;
  goto L_104;
  // [栈深重同步 3 -> 2]
  n = t.match(exports.UnitUtil.UNIT_CASES.dimenEnd);
  if (!(n)) goto L_151;
  return i([n[1].replace(new RegExp(","), "."), n[4], n[0].length]);
  return [null, null, 0];
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=227B file=math_jax/src/mathjax_src/input/tex/UnitUtil
// args: t
// locals: e, i, n
// closure: exports
function {
  let n;
  let i;
  let e;
  if (((undefined === undefined))) goto L_1a;
  const _it1 = undefined;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  goto L_64;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_e;
  // [栈深重同步 1 -> 0]
  if ((e)) goto L_72;
  n = parseFloat("1");
  return (exports.UnitUtil.UNIT_CASES.get(i) * n);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=3 bc=140B file=math_jax/src/mathjax_src/input/tex/UnitUtil
// args: t
function {
  if (!((Math.abs(t) < 0.0006))) goto L_35;
  return "0em";
  return (t.toFixed(3).replace(new RegExp("\\.?0+$"), "") + "em");
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=4 bc=165B file=math_jax/src/mathjax_src/input/tex/UnitUtil
// args: t
// locals: e
function {
  let e;
  if (!(("string" != typeof t))) goto L_f;
  return t;
  e = t.trim();
  if (!(e.match(new RegExp("\\\\$")))) goto L_a0;
  if (!(t.match(new RegExp(" $")))) goto L_a0;
  e = (e + " ");
  (e + " ");
  return e;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=17 bc=305B file=math_jax/src/mathjax_src/input/tex/UnitUtil
// args: require, module, exports
// locals: UnitMap, <class_fields_init>, UnitMap#1, t, e, i
function {
  i = function i;
  let e;
  let t;
  let UnitMap#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.UnitUtil = undefined;
  let UnitMap;
  let <class_fields_init>;
  class UnitMap extends undefined { ... }
  <proto:UnitMap>.updateDimen = function <atom:0>;
  <proto:UnitMap>.set = function <atom:0>;
  <proto:UnitMap>.get = function <atom:0>;
  <proto:UnitMap>.delete = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:UnitMap>;
  UnitMap = function <atom:0>;
  // close_loc <class_fields_init>
  UnitMap#1 = function <atom:0>;
  t = 7.2;
  e = 72;
  exports.UnitUtil = {UNIT_CASES: new UnitMap#1([["em", 1], ["ex", 0.43], ["pt", 0.1], ["pc", 1.2], ["px", 0.1], ["in", t], ["cm", (t / 2.54)], ["mm", (t / 25.4)], ["mu", (1 / 18)]]), matchDimen: function <atom:0>, dimen2em: function <atom:0>, em: function <atom:0>, trimSpaces: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/UnitUtil
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
