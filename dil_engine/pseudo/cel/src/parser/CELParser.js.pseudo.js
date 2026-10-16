// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=38B file=cel/src/parser/CELParser
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.tokens = e;
  this.cursor = 0;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=120B file=cel/src/parser/CELParser
// args: e
// closure: CELParser, n
function {
  return new CELParser(new n.CELLexer(e).lex()).parse();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=154B file=cel/src/parser/CELParser
// locals: e, this
// closure: n
function {
  this = this;
  let e;
  e = this.parseExpression();
  this.expect(n.TokenKind.Eof);
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=cel/src/parser/CELParser
// locals: this
function {
  this = this;
  return this.parseConditional();   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=461B file=cel/src/parser/CELParser
// locals: e, i, r, this
// closure: n, t
function {
  this = this;
  let r;
  let i;
  let e;
  e = this.parseBinary(1);
  if (!(!this.match(n.TokenKind.Punctuation, "?"))) goto L_a8;
  return e;
  i = this.parseExpression();
  this.consume(n.TokenKind.Punctuation, ":", "Expected ":" in conditional expression");
  r = this.parseExpression();
  return {kind: t.ExpressionKind.Conditional, condition: e, whenTrue: i, whenFalse: r};
}

// fn <atom:0>  args=1 vars=7 closure=4 cpool=0 bc=511B file=cel/src/parser/CELParser
// args: e
// locals: s, a, o, u, p, this
// closure: n, r, i, t
function {
  this = this;
  let s;
  s = this.parseUnary();
  let p;
  let u;
  let o;
  let a;
  a = this.peek();
  o = a.value;
  if (((a.kind !== n.TokenKind.Operator))) goto L_f9;
  if ((!r(o))) goto L_1fb;
  u = i.get(o);
  if (((undefined === u))) goto L_137;
  if (((u < e))) goto L_1fb;
  this.advance();
  p = this.parseBinary((u + 1));
  s = {kind: t.ExpressionKind.Binary, operator: o, left: s, right: p};
  {kind: t.ExpressionKind.Binary, operator: o, left: s, right: p};
  goto L_2d;
  return s;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=784B file=cel/src/parser/CELParser
// locals: this
// closure: n, t
function {
  this = this;
  if (!(this.match(n.TokenKind.Operator, t.UnaryOperator.Not))) goto L_176;
  return {kind: t.ExpressionKind.Unary, operator: t.UnaryOperator.Not, argument: this.parseUnary()};
  if (!(this.match(n.TokenKind.Operator, t.BinaryOperator.Subtract))) goto L_2ea;
  return {kind: t.ExpressionKind.Unary, operator: t.UnaryOperator.Negate, argument: this.parseUnary()};
  return this.parsePostfix();
}

// fn <atom:0>  args=0 vars=5 closure=2 cpool=0 bc=946B file=cel/src/parser/CELParser
// locals: e, n, i, n#1, this
// closure: n, t
function {
  this = this;
  let e;
  e = this.parsePrimary();
  if (!(this.match(n.TokenKind.Punctuation, "."))) goto L_134;
  let n;
  n = this.consumeIdentifier("Expected field name after "."");
  e = {kind: t.ExpressionKind.Member, object: e, field: n};
  {kind: t.ExpressionKind.Member, object: e, field: n};
  goto L_2d;
  if (!(this.match(n.TokenKind.Punctuation, "["))) goto L_2ac;
  let i;
  i = this.parseExpression();
  this.consume(n.TokenKind.Punctuation, "]", "Expected "]" after index expression");
  e = {kind: t.ExpressionKind.Index, object: e, index: i};
  {kind: t.ExpressionKind.Index, object: e, index: i};
  goto L_2d;
  if (!(this.match(n.TokenKind.Punctuation, "("))) goto L_3ae;
  let n#1;
  n#1 = this.parseArguments();
  e = {kind: t.ExpressionKind.Call, callee: e, args: n#1};
  {kind: t.ExpressionKind.Call, callee: e, args: n#1};
  goto L_2d;
  return e;
}

// fn <atom:0>  args=0 vars=5 closure=3 cpool=0 bc=2048B file=cel/src/parser/CELParser
// locals: i, r, s, e, this
// closure: n, t, e
function {
  this = this;
  let s;
  let r;
  let i;
  i = this.advanceIf(n.TokenKind.Number);
  if (!(i)) goto L_f8;
  return {kind: t.ExpressionKind.Literal, value: Number(i.value)};
  r = this.advanceIf(n.TokenKind.String);
  if (!(r)) goto L_1e4;
  return {kind: t.ExpressionKind.Literal, value: String(r.value)};
  if (!(this.match(n.TokenKind.Keyword, "true"))) goto L_2a9;
  return {kind: t.ExpressionKind.Literal, value: true};
  if (!(this.match(n.TokenKind.Keyword, "false"))) goto L_36e;
  return {kind: t.ExpressionKind.Literal, value: false};
  if (!(this.match(n.TokenKind.Keyword, "null"))) goto L_432;
  return {kind: t.ExpressionKind.Literal, value: null};
  s = this.advanceIf(n.TokenKind.Identifier);
  if (!(s)) goto L_51e;
  return {kind: t.ExpressionKind.Identifier, name: String(s.value)};
  if (!(this.match(n.TokenKind.Punctuation, "("))) goto L_637;
  let e;
  e = this.parseExpression();
  this.consume(n.TokenKind.Punctuation, ")", "Expected ")" after grouped expression");
  return e;
  if (!(this.match(n.TokenKind.Punctuation, "["))) goto L_6cf;
  return this.parseList();   // tail call
  if (!(this.match(n.TokenKind.Punctuation, "{"))) goto L_767;
  return this.parseMap();   // tail call
  throw new e.CELSyntaxError("Expected expression at ".concat(this.peek().position));
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=716B file=cel/src/parser/CELParser
// locals: e, this
// closure: n, t
function {
  this = this;
  let e;
  e = [];
  if (!(this.match(n.TokenKind.Punctuation, "]"))) goto L_ce;
  return {kind: t.ExpressionKind.List, items: e};
  e.push(this.parseExpression());
  if (!(this.match(n.TokenKind.Punctuation, ","))) goto L_1fe;
  if ((!this.check(n.TokenKind.Punctuation, "]"))) goto L_ce;
  this.consume(n.TokenKind.Punctuation, "]", "Expected "]" after list literal");
  return {kind: t.ExpressionKind.List, items: e};
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=888B file=cel/src/parser/CELParser
// locals: e, t, this
// closure: n, t
function {
  this = this;
  let e;
  e = [];
  if (!(this.match(n.TokenKind.Punctuation, "}"))) goto L_ce;
  return {kind: t.ExpressionKind.Map, entries: e};
  let t;
  t = this.parseExpression();
  this.consume(n.TokenKind.Punctuation, ":", "Expected ":" after map key");
  e.push({key: t, value: this.parseExpression()});
  if (!(this.match(n.TokenKind.Punctuation, ","))) goto L_2aa;
  if ((!this.check(n.TokenKind.Punctuation, "}"))) goto L_ce;
  this.consume(n.TokenKind.Punctuation, "}", "Expected "}" after map literal");
  return {kind: t.ExpressionKind.Map, entries: e};
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=556B file=cel/src/parser/CELParser
// locals: e, this
// closure: n
function {
  this = this;
  let e;
  e = [];
  if (!(this.match(n.TokenKind.Punctuation, ")"))) goto L_7e;
  return e;
  e.push(this.parseExpression());
  if (!(this.match(n.TokenKind.Punctuation, ","))) goto L_1ae;
  if ((!this.check(n.TokenKind.Punctuation, ")"))) goto L_7e;
  this.consume(n.TokenKind.Punctuation, ")", "Expected ")" after arguments");
  return e;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=315B file=cel/src/parser/CELParser
// args: t
// locals: i, this
// closure: n, e
function {
  this = this;
  let i;
  i = this.advanceIf(n.TokenKind.Identifier);
  if (!(i)) goto L_a1;
  return String(i.value);   // tail call
  throw new e.CELSyntaxError("".concat(t, " at ", this.peek().position));
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=202B file=cel/src/parser/CELParser
// args: n, t, i
// locals: this
// closure: e
function {
  this = this;
  if (!(!this.match(n, t))) goto L_c9;
  throw new e.CELSyntaxError("".concat(i, " at ", this.peek().position));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=307B file=cel/src/parser/CELParser
// args: n
// locals: this
// closure: e
function {
  this = this;
  if (!((this.peek().kind !== n))) goto L_132;
  throw new e.CELSyntaxError("Unexpected token "".concat(this.peek().value, "" at ", this.peek().position));
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=88B file=cel/src/parser/CELParser
// args: e, n
// locals: this
function {
  this = this;
  if (!(!!this.check(e, n))) goto L_57;
  this.advance();
  return true;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=81B file=cel/src/parser/CELParser
// args: e, n
// locals: this
function {
  this = this;
  if (!(this.check(e, n))) goto L_50;
  return this.advance();   // tail call
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=131B file=cel/src/parser/CELParser
// args: e, n
// locals: t, this
function {
  this = this;
  let t;
  t = this.peek();
  if (!((t.kind === e))) goto L_82;
  if (((undefined === n))) goto L_82;
  return (t.value === n);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=92B file=cel/src/parser/CELParser
// locals: e, this
function {
  this = this;
  let e;
  e = this.peek();
  this.cursor = (this.cursor + 1);
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=cel/src/parser/CELParser
// locals: this
function {
  this = this;
  return this.tokens[this.cursor];
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=53B file=cel/src/parser/CELParser
// args: e
// closure: i
function {
  if (!(("number" == typeof e))) goto L_34;
  return i.has(e);
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=21 bc=1342B file=cel/src/parser/CELParser
// args: require, module, exports
// locals: e, n, t, i, CELParser, <class_fields_init>, CELParser#1, r
function {
  r = function r;
  let CELParser#1;
  let i;
  let t;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CELParser = undefined;
  e = require("../CELError");
  n = require("./CELLexer");
  t = require("./CELAst");
  i = new Map([[t.BinaryOperator.Or, 1], [t.BinaryOperator.And, 2], [t.BinaryOperator.Equal, 3], [t.BinaryOperator.NotEqual, 3], [t.BinaryOperator.LessThan, 4], [t.BinaryOperator.LessThanOrEqual, 4], [t.BinaryOperator.GreaterThan, 4], [t.BinaryOperator.GreaterThanOrEqual, 4], [t.BinaryOperator.In, 4], [t.BinaryOperator.Add, 5], [t.BinaryOperator.Subtract, 5], [t.BinaryOperator.Multiply, 6], [t.BinaryOperator.Divide, 6], [t.BinaryOperator.Modulo, 6]]);
  let CELParser;
  let <class_fields_init>;
  class CELParser extends undefined { ... }
  function <atom:0>.parse = function <atom:0>;
  <proto:CELParser>.parse = function <atom:0>;
  <proto:CELParser>.parseExpression = function <atom:0>;
  <proto:CELParser>.parseConditional = function <atom:0>;
  <proto:CELParser>.parseBinary = function <atom:0>;
  <proto:CELParser>.parseUnary = function <atom:0>;
  <proto:CELParser>.parsePostfix = function <atom:0>;
  <proto:CELParser>.parsePrimary = function <atom:0>;
  <proto:CELParser>.parseList = function <atom:0>;
  <proto:CELParser>.parseMap = function <atom:0>;
  <proto:CELParser>.parseArguments = function <atom:0>;
  <proto:CELParser>.consumeIdentifier = function <atom:0>;
  <proto:CELParser>.consume = function <atom:0>;
  <proto:CELParser>.expect = function <atom:0>;
  <proto:CELParser>.match = function <atom:0>;
  <proto:CELParser>.advanceIf = function <atom:0>;
  <proto:CELParser>.check = function <atom:0>;
  <proto:CELParser>.advance = function <atom:0>;
  <proto:CELParser>.peek = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CELParser>;
  CELParser = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc CELParser
  CELParser#1 = function <atom:0>;
  exports.CELParser = CELParser#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=cel/src/parser/CELParser
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
