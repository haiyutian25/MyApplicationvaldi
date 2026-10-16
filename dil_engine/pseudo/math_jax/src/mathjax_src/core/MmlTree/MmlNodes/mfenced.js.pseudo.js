// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=171B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfenced
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, e
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
  this.texclass = e.TEXCLASS.INNER;
  this.separators = [];
  this.open = null;
  this.close = null;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfenced
function {
  return "mfenced";
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=918B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfenced
// args: e
// locals: s, t, this
function {
  this = this;
  this.getPrevClass(e);
  if (!(this.open)) goto L_97;
  e = this.open.setTeXclass(e);
  this.open.setTeXclass(e);
  if (!(this.childNodes[0])) goto L_10a;
  e = this.childNodes[0].setTeXclass(e);
  this.childNodes[0].setTeXclass(e);
  let t;
  let s;
  s = 1;
  t = this.childNodes.length;
  if (!((s < t))) goto L_240;
  if (!(this.separators[(s - 1)])) goto L_1bd;
  e = this.separators[(s - 1)].setTeXclass(e);
  this.separators[(s - 1)].setTeXclass(e);
  if (!(this.childNodes[s])) goto L_234;
  e = this.childNodes[s].setTeXclass(e);
  this.childNodes[s].setTeXclass(e);
  s = <s_new>;
  (s++);
  goto L_137;
  if (!(this.close)) goto L_2ae;
  e = this.close.setTeXclass(e);
  this.close.setTeXclass(e);
  if (!(this.open)) goto L_2f7;
  if ((this.close)) goto L_393;
  if ((this.open)) goto L_390;
  if ((this.childNodes[0])) goto L_390;
  this.updateTeXclass(this.close);
  return e;
}

// fn <atom:0>  args=4 vars=7 closure=0 cpool=0 bc=265B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfenced
// args: e, s, t, o
// locals: i, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  this.addFakeNodes();
  let i;
  for (const i of [this.open, this.close].concat(this.separators)) {
    if (!(i)) goto L_f1;
    i.setInheritedAttributes(e, s, t, o);
  }
  super["setChildInheritedAttributes"].call(this, e, s, t, o);
  return;
}

// fn <atom:0>  args=0 vars=6 closure=1 cpool=6 bc=1038B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfenced
// locals: s, t, o, e, s#1, this
// closure: e
function {
  this = this;
  let o;
  let t;
  let s;
  if (((undefined === undefined))) goto L_7e;
  s = <to_object>(undefined).open;
  t = <to_object>(undefined).close;
  o = <to_object>(undefined).separators;
  <to_object>(undefined);
  goto L_d8;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_11;
  // [栈深重同步 1 -> 0]
  s = s.replace(new RegExp("[ \\t\\n\\r]"), "");
  s.replace(new RegExp("[ \\t\\n\\r]"), "");
  t = t.replace(new RegExp("[ \\t\\n\\r]"), "");
  t.replace(new RegExp("[ \\t\\n\\r]"), "");
  o = o.replace(new RegExp("[ \\t\\n\\r]"), "");
  o.replace(new RegExp("[ \\t\\n\\r]"), "");
  if (!(s)) goto L_204;
  this.open = this.fakeNode(s, {fence: true, form: "prefix"}, e.TEXCLASS.OPEN);
  this.fakeNode(s, {fence: true, form: "prefix"}, e.TEXCLASS.OPEN);
  if (!(o)) goto L_377;
  let e;
  if (!((o.length < (this.childNodes.length - 1)))) goto L_275;
  o = (o + o.charAt((o.length - 1)));
  (o + o.charAt((o.length - 1)));
  goto L_210;
  e = 0;
  let s#1;
  for (const s#1 of this.childNodes.slice(1)) {
    if (!(s#1)) goto L_36d;
    e = <e_new>;
    this.separators.push(this.fakeNode(o.charAt((e++))));
  }
  if (!(t)) goto L_40d;
  this.close = this.fakeNode(t, {fence: true, form: "postfix"}, e.TEXCLASS.CLOSE);
  this.fakeNode(t, {fence: true, form: "postfix"}, e.TEXCLASS.CLOSE);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=0 bc=268B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfenced
// args: e, s, t
// locals: e#1, s#1, t#1, o, i, this
function {
  this = this;
  let t#1;
  let s#1;
  let e#1;
  e#1 = e;
  if (!((s === undefined))) goto L_16;
  s;
  s = {};
  s#1 = {};
  if (!((t === undefined))) goto L_1f;
  t;
  t = null;
  t#1 = null;
  let i;
  let o;
  o = this.factory.create("text").setText(e);
  i = this.factory.create("mo", s, [o]);
  i.texClass = t;
  i.parent = this;
  return i;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=6 bc=310B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfenced
// args: require, module, exports
// locals: e, MmlMfenced, <class_fields_init>, MmlMfenced#1
function {
  let MmlMfenced#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMfenced = undefined;
  e = require("../MmlNode");
  let MmlMfenced;
  let <class_fields_init>;
  class MmlMfenced extends e.AbstractMmlNode { ... }
  <proto:MmlMfenced>.kind = function <atom:0>;
  <proto:MmlMfenced>.setTeXclass = function <atom:0>;
  <proto:MmlMfenced>.setChildInheritedAttributes = function <atom:0>;
  <proto:MmlMfenced>.addFakeNodes = function <atom:0>;
  <proto:MmlMfenced>.fakeNode = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMfenced>;
  MmlMfenced = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMfenced#1 = function <atom:0>;
  exports.MmlMfenced = MmlMfenced#1;
  null;
  e.AbstractMmlNode.defaults;
  MmlMfenced#1.defaults = {open: "(", close: ")", separators: ","};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfenced
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
