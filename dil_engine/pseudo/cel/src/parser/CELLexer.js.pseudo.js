// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=134B file=cel/src/parser/CELLexer
// args: r
function {
  r.Identifier = 0;
  r[0] = "Identifier";
  r.Number = 1;
  r[1] = "Number";
  r.String = 2;
  r[2] = "String";
  r.Punctuation = 3;
  r[3] = "Punctuation";
  r.Operator = 4;
  r[4] = "Operator";
  r.Keyword = 5;
  r[5] = "Keyword";
  r.Eof = 6;
  r[6] = "Eof";
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=51B file=cel/src/parser/CELLexer
// args: r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.source = r;
  this.tokens = [];
  this.cursor = 0;
  return;
}

// fn <atom:0>  args=0 vars=5 closure=8 cpool=0 bc=1623B file=cel/src/parser/CELLexer
// locals: t, s, u, p, this
// closure: a, c, h, i, e, n, o, r
function {
  this = this;
  if (!(!this.isAtEnd())) goto L_593;
  let p;
  let u;
  let s;
  let t;
  t = this.peek(0);
  if (!(a(t))) goto L_9b;
  this.cursor = (this.cursor + 1);
  goto L_3;
  if (!(("/" === t))) goto L_ff;
  if (!(("/" === this.peek(1)))) goto L_ff;
  this.skipLineComment();
  goto L_3;
  if (!(("/" === t))) goto L_163;
  if (!(("*" === this.peek(1)))) goto L_163;
  this.skipBlockComment();
  goto L_3;
  if (!(("r" !== t))) goto L_179;
  if ((("R" !== t))) goto L_1db;
  if (!((""" !== this.peek(1)))) goto L_1db;
  if (!(!("'" !== this.peek(1)))) goto L_22f;
  this.lexRawString(this.peek(1));
  goto L_3;
  if (!(c(t))) goto L_260;
  this.lexIdentifier();
  goto L_3;
  if (!(h(t))) goto L_291;
  this.lexNumber();
  goto L_3;
  if (((""" === t))) goto L_2a7;
  if (!(("'" === t))) goto L_2d6;
  this.lexString(t);
  goto L_3;
  s = (t + this.peek(1));
  u = i.get(s);
  if (!((undefined !== u))) goto L_3b6;
  this.addToken(e.Operator, u);
  this.cursor = (this.cursor + 2);
  goto L_3;
  p = n.get(t);
  if (!((undefined === p))) goto L_514;
  if (!(!o.has(t))) goto L_495;
  throw new r.CELSyntaxError("Unexpected character "".concat(t, "" at ", this.cursor));
  this.addToken(e.Punctuation, t);
  this.cursor = (this.cursor + 1);
  goto L_3;
  this.addToken(e.Operator, p);
  this.cursor = (this.cursor + 1);
  goto L_3;
  this.tokens.push({kind: e.Eof, value: "", position: this.cursor});
  return this.tokens;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=125B file=cel/src/parser/CELLexer
// args: r, t
// locals: this
function {
  this = this;
  this.tokens.push({kind: r, value: t, position: this.cursor});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=cel/src/parser/CELLexer
// locals: this
function {
  this = this;
  return (this.cursor >= this.source.length);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=80B file=cel/src/parser/CELLexer
// args: r
// locals: this
function {
  this = this;
  if (!((this.source[(this.cursor + r)] == null))) goto L_4f;
  this.source[(this.cursor + r)];
  return "";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=137B file=cel/src/parser/CELLexer
// locals: this
function {
  this = this;
  if (!(!this.isAtEnd())) goto L_88;
  if (!(("
" !== this.peek(0)))) goto L_88;
  this.cursor = (this.cursor + 1);
  goto L_2;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=399B file=cel/src/parser/CELLexer
// locals: t, this
// closure: r
function {
  this = this;
  let t;
  t = this.cursor;
  this.cursor = (this.cursor + 2);
  if (!(!this.isAtEnd())) goto L_13a;
  if (!(("*" === this.peek(0)))) goto L_10a;
  if (!(("/" === this.peek(1)))) goto L_10a;
  this.cursor = (this.cursor + 2);
  return;
  this.cursor = (this.cursor + 1);
  goto L_55;
  throw new r.CELSyntaxError("Unterminated block comment at ".concat(t));
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=0 bc=701B file=cel/src/parser/CELLexer
// locals: r, i, this
// closure: u, s, e, t
function {
  this = this;
  let i;
  let r;
  r = this.cursor;
  this.cursor = (this.cursor + 1);
  if (!(u(this.peek(0)))) goto L_b1;
  this.cursor = (this.cursor + 1);
  goto L_58;
  i = this.source.slice(r, this.cursor);
  if (!(("in" !== i))) goto L_1fc;
  if (!(s.has(i))) goto L_1bf;
  goto L_1e1;
  // [栈深重同步 4 -> 3]
  goto L_2bc;
  // [栈深重同步 1 -> 0]
  this.tokens.push({kind: e.Operator, value: t.BinaryOperator.In, position: r});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=1116B file=cel/src/parser/CELLexer
// locals: t, t#1, this
// closure: h, r, e
function {
  this = this;
  let t;
  t = this.cursor;
  if (!(h(this.peek(0)))) goto L_81;
  this.cursor = (this.cursor + 1);
  goto L_28;
  if (!(("." === this.peek(0)))) goto L_165;
  if (!(h(this.peek(1)))) goto L_165;
  this.cursor = (this.cursor + 1);
  if (!(h(this.peek(0)))) goto L_165;
  this.cursor = (this.cursor + 1);
  goto L_10c;
  if (!(("e" === this.peek(0).toLowerCase()))) goto L_375;
  let t#1;
  t#1 = this.cursor;
  this.cursor = (this.cursor + 1);
  if (!(("+" !== this.peek(0)))) goto L_269;
  if ((("-" !== this.peek(0)))) goto L_29b;
  this.cursor = (this.cursor + 1);
  (this.cursor + 1);
  if (!(!h(this.peek(0)))) goto L_31c;
  throw new r.CELSyntaxError("Invalid exponent at ".concat(t#1));
  if (!(h(this.peek(0)))) goto L_375;
  this.cursor = (this.cursor + 1);
  goto L_31c;
  this.tokens.push({kind: e.Number, value: this.source.slice(t, this.cursor), position: t});
  return;
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=611B file=cel/src/parser/CELLexer
// args: t
// locals: s, i, r, this
// closure: e, r
function {
  this = this;
  let i;
  let s;
  s = this.cursor;
  this.cursor = (this.cursor + 1);
  i = "";
  if (!(!this.isAtEnd())) goto L_20e;
  let r;
  r = this.peek(0);
  if (!((r === t))) goto L_166;
  this.cursor = (this.cursor + 1);
  this.tokens.push({kind: e.String, value: i, position: s});
  return;
  if (!(("\" !== r))) goto L_1ad;
  i = (i + r);
  (i + r);
  this.cursor = (this.cursor + 1);
  goto L_20a;
  // [栈深重同步 1 -> 0]
  this.cursor = (this.cursor + 1);
  i = (i + this.readEscape(s));
  (i + this.readEscape(s));
  goto L_5a;
  throw new r.CELSyntaxError("Unterminated string at ".concat(s));
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=621B file=cel/src/parser/CELLexer
// args: t
// locals: s, i, this
// closure: e, r
function {
  this = this;
  let i;
  let s;
  s = this.cursor;
  this.cursor = (this.cursor + 2);
  i = this.cursor;
  if (!(!this.isAtEnd())) goto L_218;
  if (!((this.peek(0) === t))) goto L_1e8;
  this.tokens.push({kind: e.String, value: this.source.slice(i, this.cursor), position: s});
  this.cursor = (this.cursor + 1);
  return;
  this.cursor = (this.cursor + 1);
  goto L_7b;
  throw new r.CELSyntaxError("Unterminated string at ".concat(s));
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=396B file=cel/src/parser/CELLexer
// args: t
// locals: e, this
// closure: r
function {
  this = this;
  let e;
  e = this.peek(0);
  this.cursor = (this.cursor + 1);
  if (!((e === "n"))) goto L_6b;
  return "
";
  if (!((e === "r"))) goto L_7a;
  return "";
  if (!((e === "t"))) goto L_89;
  return "	";
  if (!((e === "b"))) goto L_98;
  return "";
  if (!((e === "f"))) goto L_a7;
  return "";
  if (!((e === "u"))) goto L_dc;
  return this.readHexEscape(t, 4, "\u");   // tail call
  if (!((e === "U"))) goto L_112;
  return this.readHexEscape(t, 8, "\U");   // tail call
  if (((e === "\"))) goto L_12d;
  if (((e === """))) goto L_12d;
  if (!((e === "'"))) goto L_131;
  return e;
  throw new r.CELSyntaxError("Invalid string escape "\".concat(e, "" at ", t));
}

// fn <atom:0>  args=3 vars=8 closure=2 cpool=0 bc=383B file=cel/src/parser/CELLexer
// args: t, e, s
// locals: i, o, e#1, n, this
// closure: k, r
function {
  this = this;
  let i;
  i = 0;
  let o;
  o = 0;
  if (!((o < e))) goto L_ec;
  let e#1;
  e#1 = k(this.peek(0));
  if (!((e#1 < 0))) goto L_a4;
  throw new r.CELSyntaxError("Invalid string escape "".concat(s, "" at ", t));
  i = ((16 * i) + e#1);
  ((16 * i) + e#1);
  this.cursor = (this.cursor + 1);
  o = <o_new>;
  (o++);
  goto L_d;
  try { // catch -> L_11f
  return String.fromCodePoint(i);
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_17e
  throw new r.CELSyntaxError("Invalid string escape "".concat(s, "" at ", t));
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn c  args=1 vars=2 closure=1 cpool=0 bc=58B file=cel/src/parser/CELLexer
// args: r
// locals: t
// closure: p
function {
  let t;
  t = r.charCodeAt(0);
  if (((95 === t))) goto L_39;
  return p(t);
}

// fn u  args=1 vars=2 closure=2 cpool=0 bc=67B file=cel/src/parser/CELLexer
// args: r
// locals: t
// closure: p, d
function {
  let t;
  t = r.charCodeAt(0);
  if (((95 === t))) goto L_42;
  if ((p(t))) goto L_42;
  return d(t);
}

// fn h  args=1 vars=1 closure=1 cpool=0 bc=42B file=cel/src/parser/CELLexer
// args: r
// closure: d
function {
  return d(r.charCodeAt(0));   // tail call
}

// fn a  args=1 vars=2 closure=0 cpool=0 bc=99B file=cel/src/parser/CELLexer
// args: r
// locals: t
function {
  let t;
  t = r.charCodeAt(0);
  if (((9 === t))) goto L_62;
  if (((10 === t))) goto L_62;
  if (((11 === t))) goto L_62;
  if (((12 === t))) goto L_62;
  if (((13 === t))) goto L_62;
  return (32 === t);
}

// fn p  args=1 vars=1 closure=0 cpool=0 bc=29B file=cel/src/parser/CELLexer
// args: r
function {
  if (!((r >= 65))) goto L_c;
  if (((r <= 90))) goto L_1c;
  if (!((r >= 97))) goto L_1c;
  return (r <= 122);
}

// fn d  args=1 vars=1 closure=0 cpool=0 bc=13B file=cel/src/parser/CELLexer
// args: r
function {
  if (!((r >= 48))) goto L_c;
  return (r <= 57);
}

// fn k  args=1 vars=2 closure=0 cpool=0 bc=113B file=cel/src/parser/CELLexer
// args: r
// locals: t
function {
  let t;
  t = r.charCodeAt(0);
  if (!((t >= 48))) goto L_41;
  if (!((t <= 57))) goto L_41;
  return (t - 48);
  if (!((t >= 65))) goto L_58;
  if (!((t <= 70))) goto L_58;
  return (t - 55);
  if (!((t >= 97))) goto L_6f;
  if (!((t <= 102))) goto L_6f;
  return (t - 87);
  return -1;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=21 bc=1505B file=cel/src/parser/CELLexer
// args: require, module, exports
// locals: r, t, e, s, i, n, o, CELLexer, <class_fields_init>, CELLexer#1, c, u, h, a, p, d, k
function {
  c = function c;
  u = function u;
  h = function h;
  a = function a;
  p = function p;
  d = function d;
  k = function k;
  let CELLexer#1;
  let o;
  let n;
  let i;
  let s;
  let t;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TokenKind = undefined;
  exports.CELLexer = undefined;
  r = require("../CELError");
  t = require("./CELAst");
  if ((e)) goto L_a3;
  e = {};
  exports.TokenKind = {};
  !function <atom:0>({});
  s = new Set(["true", "false", "null", "in"]);
  i = new Map([["==", t.BinaryOperator.Equal], ["!=", t.BinaryOperator.NotEqual], ["<=", t.BinaryOperator.LessThanOrEqual], [">=", t.BinaryOperator.GreaterThanOrEqual], ["&&", t.BinaryOperator.And], ["||", t.BinaryOperator.Or]]);
  n = new Map([["+", t.BinaryOperator.Add], ["-", t.BinaryOperator.Subtract], ["*", t.BinaryOperator.Multiply], ["/", t.BinaryOperator.Divide], ["%", t.BinaryOperator.Modulo], ["<", t.BinaryOperator.LessThan], [">", t.BinaryOperator.GreaterThan], ["!", t.UnaryOperator.Not]]);
  o = new Set(["(", ")", "[", "]", "{", "}", ".", ",", "?", ":"]);
  let CELLexer;
  let <class_fields_init>;
  class CELLexer extends undefined { ... }
  <proto:CELLexer>.lex = function <atom:0>;
  <proto:CELLexer>.addToken = function <atom:0>;
  <proto:CELLexer>.isAtEnd = function <atom:0>;
  <proto:CELLexer>.peek = function <atom:0>;
  <proto:CELLexer>.skipLineComment = function <atom:0>;
  <proto:CELLexer>.skipBlockComment = function <atom:0>;
  <proto:CELLexer>.lexIdentifier = function <atom:0>;
  <proto:CELLexer>.lexNumber = function <atom:0>;
  <proto:CELLexer>.lexString = function <atom:0>;
  <proto:CELLexer>.lexRawString = function <atom:0>;
  <proto:CELLexer>.readEscape = function <atom:0>;
  <proto:CELLexer>.readHexEscape = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CELLexer>;
  CELLexer = function <atom:0>;
  // close_loc <class_fields_init>
  CELLexer#1 = function <atom:0>;
  exports.CELLexer = CELLexer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=cel/src/parser/CELLexer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
