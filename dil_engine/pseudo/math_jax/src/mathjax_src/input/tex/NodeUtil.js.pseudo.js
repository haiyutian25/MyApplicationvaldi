// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=50B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e
function {
  return String.fromCodePoint(parseInt(e, 16));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e
function {
  return e.childNodes;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e
function {
  return e.getText();   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=56B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, t
// locals: r
function {
  let r;
  for (const r of t) {
    e.appendChild(r);
  }
  return;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, t, r
function {
  e.attributes.set(t, r);
  return;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=40B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, t, r
function {
  e.setProperty(t, r);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=590B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, t
// locals: s, i
// closure: r
function {
  let s;
  for (const s of Object.keys(t)) {
    let i;
    i = t[s];
    if (!(("texClass" === s))) goto L_81;
    e.texClass = i;
    goto L_243;
    // [栈深重同步 4 -> 3]
    if (!(("movablelimits" === s))) goto L_16d;
    e.setProperty("movablelimits", i);
    if ((e.isKind("mo"))) goto L_115;
    if (!(e.isKind("mstyle"))) goto L_243;
    goto L_243;
    // [栈深重同步 4 -> 3]
    if ((("inferred" === s))) goto L_243;
    if (!(r.attrs.has(s))) goto L_1f7;
    goto L_243;
    // [栈深重同步 4 -> 3]
    e.attributes.set(s, i);
  }
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, t
function {
  return e.getProperty(t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=71B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, t
function {
  return e.attributes.get(t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=72B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, t
function {
  e.attributes.unset(t);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=50B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, t
function {
  t = ...1;
  // append([], 0, t)
  t;
  e.removeProperty.apply(e, []);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, t
function {
  return e.childNodes[t];
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=55B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, t, r
function {
  e.childNodes[t] = r;
  if (!(r)) goto L_36;
  r.parent = e;
  e;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=115B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, t
// locals: r, s, this
function {
  this = this;
  let r;
  r = e.childNodes;
  let s;
  s = 0;
  if (!((s < r.length))) goto L_72;
  this.setChild(t, s, r[s]);
  s = <s_new>;
  (s++);
  goto L_2d;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=192B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, t
// locals: r, s
function {
  t.attributes = e.attributes;
  let s;
  let r;
  const _it1 = Object.entries(e.getAllProperties());
  goto L_b9;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  r = <value(_it2)>;
  <done(_it2)>;
  s = <value(_it2)>;
  t.setProperty(r, s);
  if (!(<done(_it1)>)) goto L_83;
  <value(_it1)>;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, t
function {
  return e.isKind(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e
function {
  return e.isEmbellished;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e
function {
  return e.texClass;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e
function {
  return e.coreMO();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=81B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: t
// closure: e
function {
  if (((t instanceof e.AbstractMmlNode))) goto L_50;
  return (t instanceof e.AbstractMmlEmptyNode);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e
function {
  return e.isInferred;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=177B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e
// locals: t, r, s, e#1, this
function {
  this = this;
  let r;
  let t;
  if (!(!e.isKind("mo"))) goto L_38;
  return null;
  t = e;
  r = t.getForms();
  let s;
  for (const s of r) {
    let e#1;
    e#1 = this.getOp(t, s);
    if (!(e#1)) continue;
    return e#1;
    // [栈深重同步 0 -> 3]
  }
  return null;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=136B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, r
// locals: e#1, r#1
// closure: t
function {
  let r#1;
  let e#1;
  e#1 = e;
  if (!((r === undefined))) goto L_14;
  r;
  r = "infix";
  r#1 = "infix";
  if ((t.MmlMo.OPTABLE[r][e.getText()])) goto L_87;
  return null;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=258B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: e, t
// locals: r, s, this
function {
  this = this;
  if (!(!e.attributes.isSet(t))) goto L_bb;
  let r;
  for (const r of ["infix", "postfix", "prefix"]) {
    let s;
    if (!((this.getOp(e, r) == null))) goto L_99;
    this.getOp(e, r);
    goto L_a5;
    if (!((undefined[3] == null))) goto L_a3;
    undefined[3];
    goto L_a5;
    s = undefined[t];
    if (!((undefined !== s))) continue;
    return s;
    // [栈深重同步 0 -> 3]
  }
  return e.attributes.get(t);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=24 bc=413B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// args: require, module, exports
// locals: e, t, r
function {
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  e = require("../../core/MmlTree/MmlNode");
  t = require("../../core/MmlTree/MmlNodes/mo");
  r = {attrs: new Set(["autoOP", "fnOP", "movesupsub", "subsupOK", "texprimestyle", "useHeight", "variantForm", "withDelims", "mathaccent", "open", "close"]), createEntity: function <atom:0>, getChildren: function <atom:0>, getText: function <atom:0>, appendChildren: function <atom:0>, setAttribute: function <atom:0>, setProperty: function <atom:0>, setProperties: function <atom:0>, getProperty: function <atom:0>, getAttribute: function <atom:0>, removeAttribute: function <atom:0>, removeProperties: function <atom:0>, getChildAt: function <atom:0>, setChild: function <atom:0>, copyChildren: function <atom:0>, copyAttributes: function <atom:0>, isType: function <atom:0>, isEmbellished: function <atom:0>, getTexClass: function <atom:0>, getCoreMO: function <atom:0>, isNode: function <atom:0>, isInferred: function <atom:0>, getForm: function <atom:0>, getOp: function <atom:0>, getMoAttribute: function <atom:0>};
  exports.default = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/NodeUtil
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
