// fn <atom:0>  args=3 vars=12 closure=1 cpool=2 bc=785B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: t, e, r
// locals: t#1, e#1, r#1, n, s, a, t#2, e#2, this
// closure: exports
function {
  this = this;
  let r#1;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_1a;
  e;
  e = "text/html";
  e#1 = "text/html";
  if (!((r === undefined))) goto L_23;
  r;
  r = null;
  r#1 = null;
  let a;
  let s;
  let n;
  n = r.createDocument();
  s = r.body(n);
  a = t.replace(new RegExp("<\\?.*?\\?>"), "").split(exports.PATTERNS.tag);
  if (!(a.length)) goto L_2e2;
  let e#2;
  let t#2;
  t#2 = a.shift();
  e#2 = a.shift();
  if (!(t#2)) goto L_1a6;
  this.addText(r, s, t#2);
  if (!(e#2)) goto L_2de;
  if (!((">" === e#2.charAt((e#2.length - 1))))) goto L_2de;
  if (!(("!" === e#2.charAt(1)))) goto L_24b;
  goto L_2de;
  // [栈深重同步 1 -> 0]
  if (!(("/" === e#2.charAt(1)))) goto L_2aa;
  goto L_2da;
  // [栈深重同步 1 -> 0]
  s = this.openTag(r, s, e#2, a);
  this.openTag(r, s, e#2, a);
  goto L_111;
  this.checkDocument(r, n);
  return n;
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=117B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: e, r, n
// closure: t
function {
  n = t.translate(n);
  return e.append(r, e.text(n));   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=79B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: t, e, n
// closure: r
function {
  return t.append(e, new r.LiteComment(n));   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=245B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: t, e, r
// locals: n
function {
  let n;
  n = r.slice(2, (r.length - 1)).toLowerCase();
  if (!(t.parent(e))) goto L_cf;
  if (!((t.kind(e) !== n))) goto L_cf;
  e = t.parent(e);
  goto L_52;
  return t.parent(e);   // tail call
}

// fn <atom:0>  args=4 vars=10 closure=1 cpool=8 bc=732B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: t, e, r, n
// locals: s, a, o, i, c, this
// closure: exports
function {
  this = this;
  let c;
  let i;
  let o;
  let a;
  let s;
  s = this.constructor.PCDATA;
  a = this.constructor.SELF_CLOSING;
  o = r.match(new RegExp("<(.*?)[\\s\\n>/]"))[1].toLowerCase();
  i = t.node(o);
  c = r.replace(new RegExp("^<.*?[\\s\\n>]"), "").split(exports.PATTERNS.attrsplit);
  if ((c.pop().match(new RegExp(">$")))) goto L_204;
  if (!((c.length < 5))) goto L_2d9;
  this.addAttributes(t, i, c);
  t.append(e, i);
  if ((a[o])) goto L_2d9;
  if ((r.match(new RegExp("\\/>$")))) goto L_2d9;
  if (!(s[o])) goto L_2d5;
  goto L_2d9;
  // [栈深重同步 1 -> 0]
  e = i;
  i;
  return e;
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=0 bc=205B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: e, r, n
// locals: s, a, o, i, c
// closure: t
function {
  if (!(n.length)) goto L_cc;
  let c;
  let i;
  let o;
  let a;
  let s;
  if (((undefined === undefined))) goto L_33;
  const _it1 = undefined;
  <done(_it1)>;
  <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  a = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  goto L_5d;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_1b;
  // [栈深重同步 1 -> 0]
  if ((a)) goto L_97;
  if ((o)) goto L_97;
  if ((i)) goto L_97;
  c = t.translate("");
  e.setAttribute(r, s, c);
  goto L_0;
  return;
}

// fn <atom:0>  args=4 vars=7 closure=0 cpool=0 bc=329B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: t, e, r, n
// locals: s, a, o
function {
  let o;
  let a;
  let s;
  s = [];
  a = (("</" + r) + ">");
  o = "";
  if (!(n.length)) goto L_d5;
  if (!((o !== a))) goto L_d5;
  s.push(o);
  s.push(n.shift());
  o = n.shift();
  n.shift();
  goto L_1d;
  t.append(e, t.text(s.join("")));
  return;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=2 bc=1144B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: t, e
// locals: n, s, r, this
// closure: r
function {
  this = this;
  let n;
  n = this.getOnlyChild(t, t.body(e));
  if (!(n)) goto L_477;
  let s;
  for (const s of t.childNodes(t.body(e))) {
    if (((s === n))) goto L_171;
    if (!((s instanceof r.LiteComment))) goto L_168;
    if (!(s.value.match(new RegExp("^<!DOCTYPE")))) goto L_168;
    e.type = s.value;
    s.value;
  }
  if (!((t.kind(n) === "html"))) goto L_3ba;
  let r;
  for (const r of n.children) {
    if (!((t.kind(r) === "head"))) goto L_211;
    e.head = r;
    goto L_227;
    if (!((t.kind(r) === "body"))) goto L_227;
    e.body = r;
    t.kind(r);
    // [栈深重同步 3 -> 4]
  }
  e.root = n;
  t.remove(n);
  if (!((t.parent(e.body) !== n))) goto L_2fd;
  t.append(n, e.body);
  if (!((t.parent(e.head) !== n))) goto L_3b6;
  t.insert(e.head, e.body);
  goto L_476;
  if (!((_it2 === "head"))) goto L_419;
  e.head = t.replace(n, e.head);
  goto L_476;
  if (!((_it2 === "body"))) goto L_476;
  e.body = t.replace(n, e.body);
  _it2;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=121B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: t, r
// locals: n, s
// closure: e
function {
  let n;
  n = null;
  let s;
  for (const s of t.childNodes(r)) {
    if (!((s instanceof e.LiteElement))) continue;
    if (!(n)) goto L_67;
    return null;
    // [栈深重同步 0 -> 3]
    n = s;
    s;
  }
  return n;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=120B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: t
// closure: this, r
function {
  return (((t.name + "="") + this.protectAttribute(t.value, r)) + """);
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=1 bc=472B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: t, e, r
// locals: t#1, e#1, r#1, n, s, a, o, this
function {
  this = this;
  let r#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((r === undefined))) goto L_19;
  r;
  r = false;
  r#1 = false;
  let o;
  let a;
  let s;
  let n;
  n = this.constructor.SELF_CLOSING;
  s = t.kind(e);
  a = this.allAttributes(t, e, r).map(function <atom:0>).join(" ");
  o = this.serializeInner(t, e, r);
  if (!(a)) goto L_174;
  goto L_175;
  // [栈深重同步 2 -> 1]
  if (!(r)) goto L_17f;
  if ((!o)) goto L_18a;
  if (!(n[s])) goto L_19d;
  if (!(r)) goto L_196;
  goto L_1d6;
  // [栈深重同步 2 -> 1]
  goto L_1d6;
  // [栈深重同步 2 -> 1]
  return (("<".concat(s) + "") + ">".concat(o, "</", s, ">"));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: e
// closure: t
function {
  return t.value(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=216B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: e
// locals: n
// closure: t, this, r
function {
  let n;
  n = t.kind(e);
  if (!(("#text" === n))) goto L_81;
  return this.protectHTML(t.value(e));
  if (!(("#comment" === n))) goto L_af;
  return e.value;
  return this.serialize(t, e, r);
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=406B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: t, e, r
// locals: t#1, e#1, r#1, n, this
function {
  this = this;
  let r#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((r === undefined))) goto L_19;
  r;
  r = false;
  r#1 = false;
  let n;
  n = this.constructor.PCDATA;
  if (!(Object.hasOwn(n, e.kind))) goto L_124;
  return t.childNodes(e).map(function <atom:0>).join("");
  return t.childNodes(e).map(function <atom:0>).join("");
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=0 bc=359B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: t, e, r
// locals: n, s, a, o, this
function {
  this = this;
  let a;
  let s;
  let n;
  n = t.allAttributes(e);
  if (!(!r)) goto L_3b;
  return n;
  s = t.kind(e);
  a = this.constructor.XMLNS;
  if (!(!Object.hasOwn(a, s))) goto L_dd;
  return n;
  let o;
  for (const <v> of n) {
    o = <to_object>(<value(_it1)>).name;
    <to_object>(<value(_it1)>);
    if (!(("xmlns" === o))) continue;
    return n;
    // [栈深重同步 0 -> 3]
  }
  n.push({name: "xmlns", value: a[s]});
  return n;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=8 bc=217B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: t, e
function {
  if (!(("string" != typeof t))) goto L_14;
  t = String(t);
  String(t);
  t = t.replace(new RegExp("&"), "&amp;").replace(new RegExp("\""), "&quot;");
  if (!(e)) goto L_d6;
  t = t.replace(new RegExp("<"), "&lt;").replace(new RegExp(">"), "&gt;");
  t.replace(new RegExp("<"), "&lt;").replace(new RegExp(">"), "&gt;");
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=6 bc=139B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: t
function {
  return t.replace(new RegExp("&"), "&amp;").replace(new RegExp("<"), "&lt;").replace(new RegExp(">"), "&gt;");   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=15 bc=943B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// args: require, module, exports
// locals: t, e, r, n, s, a, o, i, c, l, h, p, LiteParser, <class_fields_init>, LiteParser#1
function {
  let LiteParser#1;
  let p;
  let h;
  let l;
  let c;
  let i;
  let o;
  let a;
  let s;
  let n;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PATTERNS = undefined;
  exports.LiteParser = undefined;
  t = require("../../util/Entities");
  e = require("./Element");
  r = require("./Text");
  n = "[ \n]+";
  s = "[ \n]*";
  a = "[A-Za-z][^ - "'>/=-�]*";
  o = "[^ - "'>/=-�]+";
  i = "(?:'[^']*'|"[^"]*"|".concat(n, ")");
  c = "(?:'([^']*)'|"([^"]*)"|(".concat(n, "))");
  l = "".concat(o, "(?:", s, "=", s, i, ")?");
  h = "(".concat(o, ")(?:", s, "=", s, c, ")?");
  p = "(<(?:".concat(a, "(?:", n, l, ")*", s, "/?|/", a, "|!--[^]*?--|![^]*?)(?:>|$))");
  exports.PATTERNS = {tag: new RegExp(p, "u"), attr: new RegExp(l, "u"), attrsplit: new RegExp(h, "u")};
  let LiteParser;
  let <class_fields_init>;
  class LiteParser extends undefined { ... }
  <proto:LiteParser>.parseFromString = function <atom:0>;
  <proto:LiteParser>.addText = function <atom:0>;
  <proto:LiteParser>.addComment = function <atom:0>;
  <proto:LiteParser>.closeTag = function <atom:0>;
  <proto:LiteParser>.openTag = function <atom:0>;
  <proto:LiteParser>.addAttributes = function <atom:0>;
  <proto:LiteParser>.handlePCDATA = function <atom:0>;
  <proto:LiteParser>.checkDocument = function <atom:0>;
  <proto:LiteParser>.getOnlyChild = function <atom:0>;
  <proto:LiteParser>.serialize = function <atom:0>;
  <proto:LiteParser>.serializeInner = function <atom:0>;
  <proto:LiteParser>.allAttributes = function <atom:0>;
  <proto:LiteParser>.protectAttribute = function <atom:0>;
  <proto:LiteParser>.protectHTML = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LiteParser>;
  LiteParser = function <atom:0>;
  // close_loc <class_fields_init>
  LiteParser#1 = function <atom:0>;
  exports.LiteParser = LiteParser#1;
  LiteParser#1.SELF_CLOSING = {area: true, base: true, br: true, col: true, command: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, menuitem: true, meta: true, param: true, source: true, track: true, wbr: true};
  LiteParser#1.PCDATA = {option: true, textarea: true, fieldset: true, title: true, style: true, script: true};
  LiteParser#1.XMLNS = {svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML", html: "http://www.w3.org/1999/xhtml"};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/adaptors/lite/Parser
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
