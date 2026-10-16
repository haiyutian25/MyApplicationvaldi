// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=51B file=math_jax/src/mathjax_src/core/DOMAdaptor
// args: t
// locals: t#1, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let t#1;
  if (!((t === undefined))) goto L_1a;
  t;
  t = null;
  t#1 = null;
  this.canMeasureNodes = true;
  this.document = t;
  return;
}

// fn <atom:0>  args=4 vars=11 closure=0 cpool=0 bc=191B file=math_jax/src/mathjax_src/core/DOMAdaptor
// args: t, e, s, r
// locals: t#1, e#1, s#1, r#1, o, i, this
function {
  this = this;
  let r#1;
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_19;
  e;
  e = {};
  e#1 = {};
  if (!((s === undefined))) goto L_24;
  s;
  s = [];
  s#1 = [];
  r#1 = r;
  let o;
  o = this.create(t, r);
  this.setAttributes(o, e);
  let i;
  for (const i of s) {
    this.append(o, i);
  }
  return o;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=5B file=math_jax/src/mathjax_src/core/DOMAdaptor
// args: t, e, s
function {
  t[e] = s;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=math_jax/src/mathjax_src/core/DOMAdaptor
// args: t, e
function {
  return t[e];
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/core/DOMAdaptor
// args: t, e
function {
  return e.toUpperCase();   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=3 bc=643B file=math_jax/src/mathjax_src/core/DOMAdaptor
// args: t, e
// locals: s, s#1, s#2, this
function {
  this = this;
  if (!(e.style)) goto L_12a;
  if (!(("string" != typeof e.style))) goto L_12a;
  let s;
  for (const s of Object.keys(e.style)) {
    this.setStyle(t, s.replace(new RegExp("-([a-z])"), function <atom:0>), e.style[s]);
  }
  if (!(e.properties)) goto L_1d5;
  let s#1;
  for (const s#1 of Object.keys(e.properties)) {
    t[s#1] = e.properties[s#1];
  }
  let s#2;
  for (const s#2 of Object.keys(e)) {
    if (!(("style" === s#2))) goto L_23c;
    if ((("string" != typeof e.style))) goto L_27b;
    if ((("properties" === s#2))) goto L_27b;
    this.setAttribute(t, s#2, e[s#2]);
  }
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=83B file=math_jax/src/mathjax_src/core/DOMAdaptor
// args: t, e
// locals: this
function {
  this = this;
  this.insert(t, e);
  this.remove(e);
  return e;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=43B file=math_jax/src/mathjax_src/core/DOMAdaptor
// args: t, e
// locals: this
function {
  this = this;
  return this.childNodes(t)[e];
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=8 bc=236B file=math_jax/src/mathjax_src/core/DOMAdaptor
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.getAttribute(t, "class");
  if (!(e)) goto L_e8;
  return e.replace(new RegExp("  +"), " ").replace(new RegExp("^ "), "").replace(new RegExp(" $"), "").split(new RegExp(" "));
  return [];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=89B file=math_jax/src/mathjax_src/core/DOMAdaptor
// args: t
// locals: this
function {
  this = this;
  if (!(("style" === this.kind(t)))) goto L_57;
  return this.textContent(t);
  return "";
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=9 bc=171B file=math_jax/src/mathjax_src/core/DOMAdaptor
// args: require, module, exports
// locals: AbstractDOMAdaptor, <class_fields_init>, AbstractDOMAdaptor#1
function {
  let AbstractDOMAdaptor#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AbstractDOMAdaptor = undefined;
  let AbstractDOMAdaptor;
  let <class_fields_init>;
  class AbstractDOMAdaptor extends undefined { ... }
  <proto:AbstractDOMAdaptor>.node = function <atom:0>;
  <proto:AbstractDOMAdaptor>.setProperty = function <atom:0>;
  <proto:AbstractDOMAdaptor>.getProperty = function <atom:0>;
  <proto:AbstractDOMAdaptor>.setAttributes = function <atom:0>;
  <proto:AbstractDOMAdaptor>.replace = function <atom:0>;
  <proto:AbstractDOMAdaptor>.childNode = function <atom:0>;
  <proto:AbstractDOMAdaptor>.allClasses = function <atom:0>;
  <proto:AbstractDOMAdaptor>.cssText = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AbstractDOMAdaptor>;
  AbstractDOMAdaptor = function <atom:0>;
  // close_loc <class_fields_init>
  AbstractDOMAdaptor#1 = function <atom:0>;
  exports.AbstractDOMAdaptor = AbstractDOMAdaptor#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/DOMAdaptor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
