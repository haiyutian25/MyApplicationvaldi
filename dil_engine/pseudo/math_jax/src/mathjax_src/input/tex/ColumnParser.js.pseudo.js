// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=88B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
function {
  e.j = <e.j_new>;
  e.calign[(e.j++)] = "left";
  return "left";
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=88B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
function {
  e.j = <e.j_new>;
  e.calign[(e.j++)] = "center";
  return "center";
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=88B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
function {
  e.j = <e.j_new>;
  e.calign[(e.j++)] = "right";
  return "right";
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=43B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  return this.getColumn(e, "top");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=43B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  return this.getColumn(e, "middle");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=43B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  return this.getColumn(e, "bottom");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  return this.getColumn(e, "top", "");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  return this.getColumn(e, "top", "");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=43B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  return this.addRule(e, "solid");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=43B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  return this.addRule(e, "dashed");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=185B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  if ((e.cstart[e.j])) goto L_8f;
  e.cstart[e.j] = ("" + this.getBraces(e));
  return ("" + this.getBraces(e));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=189B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  if ((e.cend[(e.j - 1)])) goto L_93;
  e.cend[(e.j - 1)] = ("" + this.getBraces(e));
  return ("" + this.getBraces(e));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=76B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  return this.addAt(e, this.getBraces(e));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=76B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  return this.addBang(e, this.getBraces(e));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  return this.repeat(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  return this.macroColumn(e, ">{$}p{#1}<{$}", 1);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  return this.macroColumn(e, ">{$}m{#1}<{$}", 1);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// closure: this
function {
  return this.macroColumn(e, ">{$}b{#1}<{$}", 1);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
function {
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=19 bc=268B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.columnHandler = {l: function <atom:0>, c: function <atom:0>, r: function <atom:0>, p: function <atom:0>, m: function <atom:0>, b: function <atom:0>, w: function <atom:0>, W: function <atom:0>, |: function <atom:0>, :: function <atom:0>, >: function <atom:0>, <: function <atom:0>, @: function <atom:0>, !: function <atom:0>, *: function <atom:0>, P: function <atom:0>, M: function <atom:0>, B: function <atom:0>,  : function <atom:0>};
  this.MAXCOLUMNS = 10000;
  return;
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=0 bc=1029B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: t, n, i
// locals: s, a, t#1, n#1, this
// closure: e
function {
  this = this;
  let a;
  let s;
  s = {parser: t, template: n, i: 0, j: 0, c: "", cwidth: [], calign: [], cspace: [], clines: [], cstart: i.cstart, cend: i.cend, ralign: i.ralign, cextra: i.cextra};
  a = 0;
  if (!((s.i < s.template.length))) goto L_32e;
  let n#1;
  let t#1;
  a = <a_new>;
  if (!(((a++) > this.MAXCOLUMNS))) goto L_19c;
  throw new e.default("MaxColumns", "Too many column specifiers (perhaps looping column definitions?)");
  t#1 = s.template.codePointAt(s.i);
  s.c = String.fromCodePoint(t#1);
  n#1 = String.fromCodePoint(t#1);
  s.i = (s.i + n#1.length);
  if (!(!Object.hasOwn(this.columnHandler, n#1))) goto L_2fd;
  throw new e.default("BadPreamToken", "Illegal pream-token (%1)", n#1);
  this.columnHandler[n#1].call(this.columnHandler, s);
  goto L_e7;
  this.setColumnAlign(s, i);
  this.setColumnWidths(s, i);
  this.setColumnSpacing(s, i);
  this.setColumnLines(s, i);
  this.setPadding(s, i);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=119B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e, t
function {
  t.arraydef.columnalign = e.calign.join(" ");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=11B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
function {
  if ((e)) goto L_a;
  return "auto";
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=298B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e, t
// locals: n
function {
  let n;
  if (!(!e.cwidth.length)) goto L_2a;
  return;
  // append([], 0, e.cwidth)
  e.cwidth;
  n = [];
  if (!((n.length < e.calign.length))) goto L_ab;
  n.push("auto");
  t.arraydef.columnwidth = n.map(function <atom:0>).join(" ");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=11B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
function {
  if ((e)) goto L_a;
  return "1em";
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=335B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e, t
// locals: n
function {
  let n;
  if (!(!e.cspace.length)) goto L_2a;
  return;
  // append([], 0, e.cspace)
  e.cspace;
  n = [];
  if (!((n.length < e.calign.length))) goto L_ab;
  n.push("1em");
  t.arraydef.columnspacing = n.slice(1).map(function <atom:0>).join(" ");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=11B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
function {
  if ((e)) goto L_a;
  return "none";
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=603B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e, t
// locals: n
function {
  let n;
  if (!(!e.clines.length)) goto L_2a;
  return;
  // append([], 0, e.clines)
  e.clines;
  n = [];
  if (!(n[0])) goto L_af;
  t.frame.push(["left", n[0]]);
  if (!((n.length > e.calign.length))) goto L_151;
  goto L_1a9;
  // [栈深重同步 1 -> 0]
  if (!((n.length < e.calign.length))) goto L_1a9;
  n.push("none");
  if (!((n.length > 1))) goto L_25a;
  t.arraydef.columnlines = n.slice(1).map(function <atom:0>).join(" ");
  n.slice(1).map(function <atom:0>).join(" ");
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=358B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e, t
// locals: n, i, s
function {
  let s;
  let i;
  let n;
  if (!(!e.cextra[0])) goto L_7c;
  if (!(!e.cextra[(e.calign.length - 1)])) goto L_7c;
  return;
  n = (e.calign.length - 1);
  i = e.cspace;
  if (!(e.cextra[n])) goto L_f6;
  goto L_f7;
  // [栈深重同步 1 -> 0]
  s = null;
  if ((i[0])) goto L_150;
  if ((s)) goto L_161;
  t.arraydef["data-array-padding"] = "".concat(".5em", " ", ".5em");
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=506B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e, t, n
// locals: e#1, t#1, n#1, this
function {
  this = this;
  let n#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((n === undefined))) goto L_1b;
  n;
  n = "left";
  n#1 = "left";
  if ((n)) goto L_8c;
  e.calign[e.j] = this.getAlign(e);
  e.cwidth[e.j] = this.getDimen(e);
  e.ralign[e.j] = [t, e.cwidth[e.j], e.calign[e.j]];
  e.j = (e.j ++);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=213B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: t
// locals: n, this
// closure: i, e
function {
  this = this;
  let n;
  n = this.getBraces(t);
  if (!(!i.UnitUtil.matchDimen(n)[0])) goto L_d1;
  throw new e.default("MissingColumnDimOrUnits", "Missing dimension or its units for %1 column declaration", t.c);
  return n;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=154B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e
// locals: n, this
// closure: t
function {
  this = this;
  let n;
  n = this.getBraces(e);
  return t.lookup(n.toLowerCase(), {l: "left", c: "center", r: "right"}, "");   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=943B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: t
// locals: n, i
// closure: e
function {
  let i;
  let n;
  if (!((" " === t.template[t.i]))) goto L_81;
  t.i = (t.i ++);
  goto L_6;
  if (!((t.i >= t.template.length))) goto L_11e;
  throw new e.default("MissingArgForColumn", "Missing argument for %1 column declaration", t.c);
  if (!(("{" !== t.template[t.i]))) goto L_1bc;
  t.i = <t.i_new>;
  return t.template[(t.i++)];
  t.i = (t.i ++);
  n = (t.i ++);
  i = 1;
  if (!((t.i < t.template.length))) goto L_37c;
  t.i = <t.i_new>;
  if (!((t.template.charAt((t.i++)) === "\"))) goto L_2e2;
  t.i = (t.i ++);
  goto L_378;
  if (!((t.template.charAt((t.i++)) === "{"))) goto L_2f6;
  i = <i_new>;
  (i++);
  goto L_378;
  if (!((t.template.charAt((t.i++)) === "}"))) goto L_378;
  i = (i --);
  if (!((0 === (i --)))) goto L_378;
  return t.template.slice(n, (t.i - 1));   // tail call
  t.template.charAt((t.i++));
  goto L_1ec;
  throw new e.default("MissingCloseBrace", "Missing close brace");
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=336B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e, t, i
// locals: s, this
// closure: n
function {
  this = this;
  let s;
  s = [];
  if (!((i > 0))) goto L_63;
  i = <i_new>;
  if (!((i--))) goto L_63;
  s.push(this.getBraces(e));
  goto L_9;
  e.template = (n.ParseUtil.substituteArgs(e.parser, s, t) + e.template.slice(e.i));
  e.i = 0;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=342B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e, t
// locals: this
function {
  this = this;
  if (!(e.clines[e.j])) goto L_76;
  this.addAt(e, "\,");
  e.clines[e.j] = t;
  if (!(("0" === e.cspace[e.j]))) goto L_155;
  e.cstart[e.j] = "\hspace{.5em}";
  "\hspace{.5em}";
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=2 bc=466B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e, t
// locals: n, i, s
function {
  let s;
  let i;
  let n;
  if (((undefined === undefined))) goto L_7b;
  n = <to_object>(undefined).cstart;
  i = <to_object>(undefined).cspace;
  s = <to_object>(undefined).j;
  <to_object>(undefined);
  goto L_7f;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_e;
  // [栈深重同步 1 -> 0]
  e.cextra[s] = true;
  e.calign[s] = "center";
  if (!(e.clines[s])) goto L_18c;
  if (!((".5em" === i[s]))) goto L_124;
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] + "\hspace{.25em}");
  goto L_18c;
  // [栈深重同步 1 -> 0]
  if ((i[s])) goto L_18c;
  if ((e.cend[(s - 1)])) goto L_184;
  e.cend[(s - 1)] = ("" + "\hspace{.5em}");
  ("" + "\hspace{.5em}");
  n[s] = t;
  i[s] = "0";
  e.j = (e.j ++);
  i[(e.j ++)] = "0";
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=1 bc=362B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: e, t
// locals: n, i, s
function {
  let s;
  let i;
  let n;
  if (((undefined === undefined))) goto L_7b;
  n = <to_object>(undefined).cstart;
  i = <to_object>(undefined).cspace;
  s = <to_object>(undefined).j;
  <to_object>(undefined);
  goto L_7f;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_e;
  // [栈深重同步 1 -> 0]
  e.cextra[s] = true;
  e.calign[s] = "center";
  if (!(("0" === i[s]))) goto L_115;
  if (!(e.clines[s])) goto L_115;
  goto L_116;
  // [栈深重同步 3 -> 2]
  n[s] = ("" + t);
  if ((i[s])) goto L_132;
  i[s] = ".5em";
  ".5em";
  e.j = (e.j ++);
  i[(e.j ++)] = ".5em";
  return;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=385B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: t
// locals: n, i, s, this
// closure: e
function {
  this = this;
  let s;
  let i;
  let n;
  n = this.getBraces(t);
  i = this.getBraces(t);
  s = parseInt(n);
  if (!((String(s) !== n))) goto L_aa;
  throw new e.default("ColArgNotNum", "First argument to %1 column specifier must be a number", "*");
  t.template = (new Array(s).fill(i).join("") + t.template.substring(t.i));
  t.i = 0;
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=16 bc=274B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// args: require, module, exports
// locals: e, t, n, i, ColumnParser, <class_fields_init>, ColumnParser#1
function {
  let ColumnParser#1;
  let i;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ColumnParser = undefined;
  e = require("./TexError");
  t = require("../../util/Options");
  n = require("./ParseUtil");
  i = require("./UnitUtil");
  let ColumnParser;
  let <class_fields_init>;
  class ColumnParser extends undefined { ... }
  <proto:ColumnParser>.process = function <atom:0>;
  <proto:ColumnParser>.setColumnAlign = function <atom:0>;
  <proto:ColumnParser>.setColumnWidths = function <atom:0>;
  <proto:ColumnParser>.setColumnSpacing = function <atom:0>;
  <proto:ColumnParser>.setColumnLines = function <atom:0>;
  <proto:ColumnParser>.setPadding = function <atom:0>;
  <proto:ColumnParser>.getColumn = function <atom:0>;
  <proto:ColumnParser>.getDimen = function <atom:0>;
  <proto:ColumnParser>.getAlign = function <atom:0>;
  <proto:ColumnParser>.getBraces = function <atom:0>;
  <proto:ColumnParser>.macroColumn = function <atom:0>;
  <proto:ColumnParser>.addRule = function <atom:0>;
  <proto:ColumnParser>.addAt = function <atom:0>;
  <proto:ColumnParser>.addBang = function <atom:0>;
  <proto:ColumnParser>.repeat = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ColumnParser>;
  ColumnParser = function <atom:0>;
  // close_loc <class_fields_init>
  ColumnParser#1 = function <atom:0>;
  exports.ColumnParser = ColumnParser#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/ColumnParser
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
