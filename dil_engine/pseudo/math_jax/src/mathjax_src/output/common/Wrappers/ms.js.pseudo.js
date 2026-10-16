// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=98B file=math_jax/src/mathjax_src/output/common/Wrappers/ms
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.wrap(this.mmlText(t));
  e.parent = this;
  return e;
}

// fn <atom:0>  args=3 vars=11 closure=1 cpool=0 bc=766B file=math_jax/src/mathjax_src/output/common/Wrappers/ms
// args: t, e, s
// locals: t#1, e#1, s#1, o, i, this.active_func, new.target, this
// closure: <class_fields_init>
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
  s = null;
  s#1 = null;
  let i;
  let o;
  this = new new.target(t, e, s);
  if (!(<class_fields_init>)) goto L_44;
  <class_fields_init>.call(this);
  new new.target(t, e, s);
  o = this.node.attributes;
  i = o.getList("lquote", "rquote");
  if (!(("monospace" !== this.variant))) goto L_1d1;
  if ((o.isSet("lquote"))) goto L_160;
  if (((""" !== i.lquote))) goto L_160;
  i.lquote = "“";
  "“";
  if ((o.isSet("rquote"))) goto L_1d1;
  if (((""" !== i.rquote))) goto L_1d1;
  i.rquote = "”";
  "”";
  this.childNodes.unshift(this.createText(i.lquote));
  this.childNodes.push(this.createText(i.rquote));
  return this;
}

// fn t  args=1 vars=3 closure=0 cpool=2 bc=31B file=math_jax/src/mathjax_src/output/common/Wrappers/ms
// args: t
// locals: CommonMsMixin, <class_fields_init>
function {
  let CommonMsMixin;
  let <class_fields_init>;
  class CommonMsMixin extends t { ... }
  <proto:CommonMsMixin>.createText = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMsMixin>;
  CommonMsMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=math_jax/src/mathjax_src/output/common/Wrappers/ms
// args: require, module, exports
// locals: t
function {
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMsMixin = undefined;
  exports.CommonMsMixin = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/ms
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
