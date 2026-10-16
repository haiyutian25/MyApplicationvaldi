// fn <atom:0>  args=2 vars=5 closure=6 cpool=0 bc=952B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// args: e, r
// locals: e#1, r#1, this
// closure: <class_fields_init>, o, s, t, i, ParseOptions
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let r#1;
  let e#1;
  e#1 = e;
  if (!((r === undefined))) goto L_21;
  r;
  r = [];
  r#1 = [];
  this.options = {};
  this.columnParser = new o.ColumnParser();
  this.packageData = new Map();
  this.parsers = [];
  this.root = null;
  this.nodeLists = {};
  this.error = false;
  this.handlers = e.handlers;
  this.nodeFactory = new s.NodeFactory();
  this.nodeFactory.configuration = this;
  this.nodeFactory.setCreators(e.nodes);
  this.itemFactory = new t.default(e.items);
  this.itemFactory.configuration = this;
  // append([this.options], 1, r)
  r;
  i.defaultOptions.apply(undefined, [this.options]);
  i.defaultOptions(this.options, e.options);
  if ((ParseOptions.getVariant.get(this.options.mathStyle))) goto L_3ae;
  this.mathStyle = ParseOptions.getVariant.get("TeX");
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// args: t
// locals: this
function {
  this = this;
  this.parsers.unshift(t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// locals: this
function {
  this = this;
  this.parsers.shift();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// locals: this
function {
  this = this;
  return this.parsers[0];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=120B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// locals: this
function {
  this = this;
  this.parsers = [];
  this.root = null;
  this.nodeLists = {};
  this.error = false;
  this.tags.resetTag();
  return;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=2 bc=483B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// args: t, s
// locals: r, r#1, i, this
// closure: e
function {
  this = this;
  let r;
  r = this.nodeLists[t];
  if ((r)) goto L_5e;
  this.nodeLists[t] = [];
  r = [];
  [];
  r.push(s);
  if (!((s.kind !== t))) goto L_1e2;
  let i;
  let r#1;
  if ((e.default.getProperty(s, "in-lists"))) goto L_10a;
  r#1 = "";
  if (!(r#1)) goto L_13e;
  goto L_141;
  // [栈深重同步 1 -> 0]
  i = [].concat(t).join(",");
  e.default.setProperty(s, "in-lists", i);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=203B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// args: t
// locals: s, e, r, this
function {
  this = this;
  let e;
  let s;
  if ((this.nodeLists[t])) goto L_33;
  s = [];
  e = [];
  let r;
  for (const r of s) {
    if (!(this.inTree(r))) goto L_98;
    e.push(r);
  }
  this.nodeLists[t] = e;
  return e;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=163B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// args: t, s
// locals: e, r, t#1, this
function {
  this = this;
  let e;
  if ((this.nodeLists[t])) goto L_30;
  e = [];
  let r;
  for (const r of s) {
    let t#1;
    t#1 = e.indexOf(r);
    if (!((t#1 >= 0))) goto L_9b;
    e.splice(t#1, 1);
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=84B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// args: t
// locals: this
function {
  this = this;
  if (!(t)) goto L_50;
  if (!((t !== this.root))) goto L_50;
  t = t.parent;
  goto L_2;
  return !!t;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=2 bc=86B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// args: t, s
// closure: n
function {
  if (!(s)) goto L_54;
  if (!(t.match(new RegExp("^[\\u0391-\\u03A9\\u03F4]")))) goto L_54;
  return n.NORMAL;
  return "";
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// args: t
// closure: n
function {
  return n.ITALIC;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=2 bc=159B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// args: t
// closure: n
function {
  if (!(t.normalize("NFD").match(new RegExp("^[a-z]")))) goto L_7a;
  return n.ITALIC;
  return n.NORMAL;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// args: t
// closure: n
function {
  return n.NORMAL;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=13 bc=372B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// args: require, module, exports
// locals: t, s, e, r, i, o, n, ParseOptions, <class_fields_init>, ParseOptions#1
function {
  let ParseOptions#1;
  let n;
  let o;
  let i;
  let r;
  let e;
  let s;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  t = require("./StackItemFactory");
  s = require("./NodeFactory");
  e = require("./NodeUtil");
  r = require("./TexConstants");
  i = require("../../util/Options");
  o = require("./ColumnParser");
  n = r.TexConstant.Variant;
  let ParseOptions;
  let <class_fields_init>;
  class ParseOptions extends undefined { ... }
  <proto:ParseOptions>.pushParser = function <atom:0>;
  <proto:ParseOptions>.popParser = function <atom:0>;
  <proto:ParseOptions>.parser = function <atom:0>;
  <proto:ParseOptions>.clear = function <atom:0>;
  <proto:ParseOptions>.addNode = function <atom:0>;
  <proto:ParseOptions>.getList = function <atom:0>;
  <proto:ParseOptions>.removeFromList = function <atom:0>;
  <proto:ParseOptions>.inTree = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ParseOptions>;
  ParseOptions = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc ParseOptions
  ParseOptions#1 = function <atom:0>;
  ParseOptions#1.getVariant = new Map([["TeX", function <atom:0>], ["ISO", function <atom:0>], ["French", function <atom:0>], ["upright", function <atom:0>]]);
  exports.default = ParseOptions#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/ParseOptions
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
