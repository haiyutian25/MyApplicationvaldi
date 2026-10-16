// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=228B file=math_jax/src/mathjax_src/output/common/Wrappers/TextNode
// args: t, e
// locals: n, this
function {
  this = this;
  let n;
  n = this.parent.stretch.c;
  if (!(n)) goto L_76;
  return [n];
  return this.parent.remapChars(this.unicodeChars(t, e));
}

// fn <atom:0>  args=2 vars=21 closure=0 cpool=0 bc=2192B file=math_jax/src/mathjax_src/output/common/Wrappers/TextNode
// args: t, e
// locals: t#1, e#1, n, i, e#2, o, s, d, e#3, o#1, i#1, s#1, d#1, a, r, h, c, x, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_14;
  e;
  e = false;
  e#1 = false;
  let i;
  let n;
  n = this.parent.variant;
  i = this.node.getText();
  if (!(("-explicitFont" === n))) goto L_23f;
  let d;
  let s;
  let o;
  let e#2;
  e#2 = this.jax.getFontData(this.parent.styles);
  if (((undefined === undefined))) goto L_1c3;
  o = <to_object>(undefined).w;
  s = <to_object>(undefined).h;
  d = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_217;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_154;
  // [栈深重同步 1 -> 0]
  t.h = s;
  t.d = d;
  t.w = o;
  return;
  let o#1;
  let e#3;
  e#3 = this.remappedText(i, n);
  o#1 = "";
  t.empty();
  let i#1;
  i#1 = 0;
  if (!((i#1 < e#3.length))) goto L_824;
  let r;
  let a;
  let d#1;
  let s#1;
  if (((undefined === undefined))) goto L_2d8;
  const _it1 = undefined;
  <done(_it1)>;
  s#1 = <value(_it1)>;
  <done(_it1)>;
  d#1 = <value(_it1)>;
  <done(_it1)>;
  a = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_30b;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_2c0;
  // [栈深重同步 1 -> 0]
  if (!(r.unknown)) goto L_36d;
  o#1 = (o#1 + String.fromCodePoint(e#3[i#1]));
  (o#1 + String.fromCodePoint(e#3[i#1]));
  goto L_819;
  let x;
  let c;
  let h;
  o#1 = this.addUtextBBox(t, o#1, n);
  this.addUtextBBox(t, o#1, n);
  this.updateBBox(t, s#1, d#1, a);
  if ((r.ic)) goto L_403;
  t.ic = 0;
  if ((r.sk)) goto L_436;
  t.sk = 0;
  if ((r.dx)) goto L_469;
  t.dx = 0;
  if ((!r.oc)) goto L_4a5;
  if (((i#1 < (e#3.length - 1)))) goto L_819;
  h = this.parent.childNodes;
  if (((this.node !== h[(h.length - 1)].node))) goto L_819;
  c = this.parent.parent.node;
  if ((c.isKind("mrow"))) goto L_5ff;
  if (!(c.isInferred)) goto L_698;
  goto L_699;
  // [栈深重同步 1 -> 0]
  x = null;
  if (!((x == null))) goto L_6a6;
  x;
  goto L_6cf;
  if (!(undefined.isKind("mo"))) goto L_75c;
  if (!(("⁢" === x.getText()))) goto L_75c;
  x = c.childNodes[(c.childIndex(x) + 1)];
  c.childNodes[(c.childIndex(x) + 1)];
  if (!(x)) goto L_7e9;
  if (!((x.attributes.get("mathvariant") === n))) goto L_7e9;
  t.oc = r.oc;
  goto L_818;
  // [栈深重同步 1 -> 0]
  t.ic = r.oc;
  r.oc;
  i#1 = <i#1_new>;
  (i#1++);
  goto L_2a2;
  this.addUtextBBox(t, o#1, n);
  if (!((e#3.length > 1))) goto L_868;
  t.sk = 0;
  0;
  t.clean();
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=257B file=math_jax/src/mathjax_src/output/common/Wrappers/TextNode
// args: t, e, n
// locals: i, o, s, this
function {
  this = this;
  if (!(e)) goto L_ff;
  let s;
  let o;
  let i;
  if (((undefined === undefined))) goto L_83;
  i = <to_object>(undefined).h;
  o = <to_object>(undefined).d;
  s = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_cf;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_16;
  // [栈深重同步 1 -> 0]
  this.updateBBox(t, i, o, s);
  return "";
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=151B file=math_jax/src/mathjax_src/output/common/Wrappers/TextNode
// args: t, e, n, i
function {
  t.w = (t.w + i);
  if (!((e > t.h))) goto L_61;
  t.h = e;
  e;
  if (!((n > t.d))) goto L_96;
  t.d = n;
  n;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/output/common/Wrappers/TextNode
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/output/common/Wrappers/TextNode
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/output/common/Wrappers/TextNode
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/output/common/Wrappers/TextNode
function {
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/common/Wrappers/TextNode
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

// fn t  args=1 vars=3 closure=0 cpool=9 bc=87B file=math_jax/src/mathjax_src/output/common/Wrappers/TextNode
// args: t
// locals: CommonTextNodeMixin, <class_fields_init>
function {
  let CommonTextNodeMixin;
  let <class_fields_init>;
  class CommonTextNodeMixin extends t { ... }
  <proto:CommonTextNodeMixin>.remappedText = function <atom:0>;
  <proto:CommonTextNodeMixin>.computeBBox = function <atom:0>;
  <proto:CommonTextNodeMixin>.addUtextBBox = function <atom:0>;
  <proto:CommonTextNodeMixin>.updateBBox = function <atom:0>;
  <proto:CommonTextNodeMixin>.getStyles = function <atom:0>;
  <proto:CommonTextNodeMixin>.getVariant = function <atom:0>;
  <proto:CommonTextNodeMixin>.getScale = function <atom:0>;
  <proto:CommonTextNodeMixin>.getSpace = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonTextNodeMixin>;
  CommonTextNodeMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=math_jax/src/mathjax_src/output/common/Wrappers/TextNode
// args: require, module, exports
// locals: t
function {
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonTextNodeMixin = undefined;
  exports.CommonTextNodeMixin = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/TextNode
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
