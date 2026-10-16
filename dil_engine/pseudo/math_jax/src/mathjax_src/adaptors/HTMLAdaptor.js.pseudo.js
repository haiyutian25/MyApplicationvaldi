// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=150B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e.document);
  if (!(<class_fields_init>)) goto L_43;
  <class_fields_init>.call(this);
  new new.target(e.document);
  this.canMeasureNodes = true;
  this.window = e;
  this.parser = new e.DOMParser();
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=95B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
// locals: e#1, t#1, this
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_16;
  t;
  t = "text/html";
  t#1 = "text/html";
  return this.parser.parseFromString(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=150B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
// locals: this
function {
  this = this;
  if (!(t)) goto L_4e;
  return this.document.createElementNS(t, e);
  return this.document.createElement(e);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
// locals: this
function {
  this = this;
  return this.document.createTextNode(e);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=87B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
// locals: e#1, this
function {
  this = this;
  let e#1;
  if (!((e === undefined))) goto L_2e;
  e;
  e = this.document;
  e#1 = this.document;
  if ((e.head)) goto L_56;
  return e;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=87B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
// locals: e#1, this
function {
  this = this;
  let e#1;
  if (!((e === undefined))) goto L_2e;
  e;
  e = this.document;
  e#1 = this.document;
  if ((e.body)) goto L_56;
  return e;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=87B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
// locals: e#1, this
function {
  this = this;
  let e#1;
  if (!((e === undefined))) goto L_2e;
  e;
  e = this.document;
  e#1 = this.document;
  if ((e.documentElement)) goto L_56;
  return e;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=199B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
// locals: e#1, this
function {
  this = this;
  let e#1;
  if (!((e === undefined))) goto L_2e;
  e;
  e = this.document;
  e#1 = this.document;
  if (!(e.doctype)) goto L_c5;
  return "<!DOCTYPE ".concat(e.doctype.name, ">");
  return "";
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=152B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t, r
// locals: e#1, t#1, r#1, n
function {
  let r#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((r === undefined))) goto L_15;
  r;
  r = null;
  r#1 = null;
  let n;
  if (!(r)) goto L_45;
  goto L_6b;
  // [栈深重同步 1 -> 0]
  n = e.getElementsByTagName(t);
  return Array.from(n);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=537B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
// locals: r, n, this
function {
  this = this;
  let r;
  r = [];
  let n;
  for (const n of e) {
    if (!(("string" == typeof n))) goto L_c1;
    r = r.concat(Array.from(this.document.querySelectorAll(n)));
    goto L_20b;
    // [栈深重同步 4 -> 3]
    if ((Array.isArray(n))) goto L_186;
    if (((n instanceof this.window.NodeList))) goto L_186;
    if (!((n instanceof this.window.HTMLCollection))) goto L_1e1;
    r = r.concat(Array.from(n));
    goto L_20b;
    // [栈深重同步 4 -> 3]
    r.push(n);
  }
  return r;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=90B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
// locals: e#1, t#1, this
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_33;
  t;
  t = this.document;
  t#1 = this.document;
  return t.querySelector(e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
function {
  return e.contains(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  return e.parentNode;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
function {
  return e.appendChild(t);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=78B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
// locals: this
function {
  this = this;
  return this.parent(t).insertBefore(e, t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=77B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
// locals: this
function {
  this = this;
  return this.parent(e).removeChild(e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=78B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
// locals: this
function {
  this = this;
  return this.parent(t).replaceChild(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=56B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
// locals: e#1, t#1
function {
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_11;
  t;
  t = true;
  t#1 = true;
  return e.cloneNode(t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
function {
  return e.splitText(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  return e.nextSibling;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  return e.previousSibling;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  return e.firstChild;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  return e.lastChild;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=75B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  return Array.from(e.childNodes);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
function {
  return e.childNodes[t];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=137B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
// locals: t
function {
  let t;
  t = e.nodeType;
  if (((1 === t))) goto L_3e;
  if (((3 === t))) goto L_3e;
  if (!((8 === t))) goto L_87;
  return e.nodeName.toLowerCase();
  return "";
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=40B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  if ((e.nodeValue)) goto L_27;
  return "";
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  return e.textContent;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  return e.innerHTML;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  return e.outerHTML;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=110B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
// locals: this
function {
  this = this;
  return new this.window.XMLSerializer().serializeToString(e);   // tail call
}

// fn <atom:0>  args=4 vars=8 closure=0 cpool=6 bc=268B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t, r, n
// locals: e#1, t#1, r#1, n#1
function {
  let n#1;
  let r#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  r#1 = r;
  if (!((n === undefined))) goto L_1a;
  n;
  n = null;
  n#1 = null;
  if (!(n)) goto L_a8;
  t = ((n.replace(new RegExp(".*\\/"), "") + ":") + t.replace(new RegExp("^.*:"), ""));
  return e.setAttributeNS(n, t, r);
  if (!(("style" === t))) goto L_e3;
  r = r.replace(new RegExp("\\n"), " ");
  r.replace(new RegExp("\\n"), " ");
  return e.setAttribute(t, r);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
function {
  return e.getAttribute(t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
function {
  return e.removeAttribute(t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
function {
  return e.hasAttribute(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=80B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  return {name: e.name, value: e.value};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=113B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  return Array.from(e.attributes).map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=199B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
function {
  if (!(e.classList)) goto L_6d;
  goto L_c6;
  // [栈深重同步 1 -> 0]
  e.className = ((e.className + " ") + t).trim();
  ((e.className + " ") + t).trim();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=4B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
// closure: t
function {
  return (e !== t);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=3 bc=276B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
function {
  if (!(e.classList)) goto L_6e;
  goto L_113;
  // [栈深重同步 1 -> 0]
  e.className = e.className.split(new RegExp(" ")).filter(function <atom:0>).join(" ");
  e.className.split(new RegExp(" ")).filter(function <atom:0>).join(" ");
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=2 bc=221B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
function {
  if (!(e.classList)) goto L_6c;
  return e.classList.contains(t);
  return e.className.split(new RegExp(" ")).includes(t);
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=2 bc=91B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t, r
function {
  e.style[t] = String(r).replace(new RegExp("\\n"), " ");
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
function {
  return e.style[t];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=68B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  return e.style.cssText;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=345B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: t, r
// locals: s, n
// closure: e
function {
  let s;
  for (const s of r) {
    try { // catch -> L_a0
    t.sheet.insertRule(s, t.sheet.cssRules.length);
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    n = <?>;
    try { // catch -> L_14e
    if (!(e.isLoggingEnabled)) goto L_14a;
    console.warn("MathJax: can't insert css rule '".concat(s, "': ", n.message));
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  return e.cssText;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=238B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
// locals: this
function {
  this = this;
  if (!(("style" !== this.kind(e)))) goto L_32;
  return "";
  return Array.from(e.sheet.cssRules).map(function <atom:0>).join("
");
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=198B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.window.getComputedStyle(e);
  if ((t.fontSize)) goto L_c3;
  return parseFloat(String(this.constructor.DEFAULT_FONT_SIZE));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=112B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
// locals: this
function {
  this = this;
  if ((this.window.getComputedStyle(e).fontFamily)) goto L_6f;
  return "";
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=0 bc=291B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t, r
// locals: e#1, t#1, r#1, r#2, n
function {
  let r#1;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_13;
  t;
  t = 1;
  t#1 = 1;
  if (!((r === undefined))) goto L_1d;
  r;
  r = false;
  r#1 = false;
  if (!(r)) goto L_d7;
  if (!(e.getBBox)) goto L_d7;
  let n;
  let r#2;
  if (((undefined === undefined))) goto L_a1;
  r#2 = <to_object>(undefined).width;
  n = <to_object>(undefined).height;
  <to_object>(undefined);
  goto L_c9;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_56;
  // [栈深重同步 1 -> 0]
  return [(r#2 / t), (n / t)];
  return [(e.offsetWidth / t), (e.offsetHeight / t)];
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=239B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
// locals: t, r, n, s
function {
  let s;
  let n;
  let r;
  let t;
  if (((undefined === undefined))) goto L_a4;
  t = <to_object>(undefined).left;
  r = <to_object>(undefined).right;
  n = <to_object>(undefined).top;
  s = <to_object>(undefined).bottom;
  <to_object>(undefined);
  goto L_cd;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_14;
  // [栈深重同步 1 -> 0]
  return {left: t, right: r, top: n, bottom: s};
}

// fn <atom:0>  args=2 vars=9 closure=1 cpool=0 bc=396B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e, t
// locals: n, s, o, i, a, l, u
// closure: r
function {
  let u;
  let l;
  let a;
  let i;
  let o;
  let s;
  let n;
  if (((undefined === undefined))) goto L_87;
  n = <to_object>(undefined).path;
  s = <to_object>(undefined).maps;
  o = <to_object>(undefined).worker;
  <to_object>(undefined);
  goto L_8b;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  i = "".concat(n, "/", o);
  a = "
      self.maps = '".concat(r(s), "';
      importScripts('", r(i), "');
    ");
  l = URL.createObjectURL(new Blob([a], {type: "text/javascript"}));
  u = new Worker(l);
  u.onmessage = e;
  URL.revokeObjectURL(l);
  return u; // async
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=179B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  if ((("\" === e))) goto L_12;
  if (!(("'" === e))) goto L_1f;
  e = ("\" + e);
  goto L_b0;
  // [栈深重同步 1 -> 0]
  if (((e < " "))) goto L_31;
  if (!((e > "~"))) goto L_b0;
  e = "\u{".concat(e.codePointAt(0).toString(16), "}");
  "\u{".concat(e.codePointAt(0).toString(16), "}");
  return e;
}

// fn r  args=1 vars=1 closure=0 cpool=1 bc=82B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: e
function {
  // append([], 0, e)
  e;
  return [].map(function <atom:0>).join("");   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=50 bc=603B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// args: require, module, exports
// locals: e, t, HTMLAdaptor, <class_fields_init>, HTMLAdaptor#1, r
function {
  r = function r;
  let HTMLAdaptor#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.HTMLAdaptor = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("../core/DOMAdaptor");
  let HTMLAdaptor;
  let <class_fields_init>;
  class HTMLAdaptor extends t.AbstractDOMAdaptor { ... }
  <proto:HTMLAdaptor>.parse = function <atom:0>;
  <proto:HTMLAdaptor>.create = function <atom:0>;
  <proto:HTMLAdaptor>.text = function <atom:0>;
  <proto:HTMLAdaptor>.head = function <atom:0>;
  <proto:HTMLAdaptor>.body = function <atom:0>;
  <proto:HTMLAdaptor>.root = function <atom:0>;
  <proto:HTMLAdaptor>.doctype = function <atom:0>;
  <proto:HTMLAdaptor>.tags = function <atom:0>;
  <proto:HTMLAdaptor>.getElements = function <atom:0>;
  <proto:HTMLAdaptor>.getElement = function <atom:0>;
  <proto:HTMLAdaptor>.contains = function <atom:0>;
  <proto:HTMLAdaptor>.parent = function <atom:0>;
  <proto:HTMLAdaptor>.append = function <atom:0>;
  <proto:HTMLAdaptor>.insert = function <atom:0>;
  <proto:HTMLAdaptor>.remove = function <atom:0>;
  <proto:HTMLAdaptor>.replace = function <atom:0>;
  <proto:HTMLAdaptor>.clone = function <atom:0>;
  <proto:HTMLAdaptor>.split = function <atom:0>;
  <proto:HTMLAdaptor>.next = function <atom:0>;
  <proto:HTMLAdaptor>.previous = function <atom:0>;
  <proto:HTMLAdaptor>.firstChild = function <atom:0>;
  <proto:HTMLAdaptor>.lastChild = function <atom:0>;
  <proto:HTMLAdaptor>.childNodes = function <atom:0>;
  <proto:HTMLAdaptor>.childNode = function <atom:0>;
  <proto:HTMLAdaptor>.kind = function <atom:0>;
  <proto:HTMLAdaptor>.value = function <atom:0>;
  <proto:HTMLAdaptor>.textContent = function <atom:0>;
  <proto:HTMLAdaptor>.innerHTML = function <atom:0>;
  <proto:HTMLAdaptor>.outerHTML = function <atom:0>;
  <proto:HTMLAdaptor>.serializeXML = function <atom:0>;
  <proto:HTMLAdaptor>.setAttribute = function <atom:0>;
  <proto:HTMLAdaptor>.getAttribute = function <atom:0>;
  <proto:HTMLAdaptor>.removeAttribute = function <atom:0>;
  <proto:HTMLAdaptor>.hasAttribute = function <atom:0>;
  <proto:HTMLAdaptor>.allAttributes = function <atom:0>;
  <proto:HTMLAdaptor>.addClass = function <atom:0>;
  <proto:HTMLAdaptor>.removeClass = function <atom:0>;
  <proto:HTMLAdaptor>.hasClass = function <atom:0>;
  <proto:HTMLAdaptor>.setStyle = function <atom:0>;
  <proto:HTMLAdaptor>.getStyle = function <atom:0>;
  <proto:HTMLAdaptor>.allStyles = function <atom:0>;
  <proto:HTMLAdaptor>.insertRules = function <atom:0>;
  <proto:HTMLAdaptor>.cssText = function <atom:0>;
  <proto:HTMLAdaptor>.fontSize = function <atom:0>;
  <proto:HTMLAdaptor>.fontFamily = function <atom:0>;
  <proto:HTMLAdaptor>.nodeSize = function <atom:0>;
  <proto:HTMLAdaptor>.nodeBBox = function <atom:0>;
  <proto:HTMLAdaptor>.createWorker = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:HTMLAdaptor>;
  HTMLAdaptor = function <atom:0>;
  // close_loc <class_fields_init>
  HTMLAdaptor#1 = function <atom:0>;
  exports.HTMLAdaptor = HTMLAdaptor#1;
  HTMLAdaptor#1.DEFAULT_FONT_SIZE = 16;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/adaptors/HTMLAdaptor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
