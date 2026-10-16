// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=38B file=markdown/src/TextParser
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.text = t;
  this.position = 0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=markdown/src/TextParser
// locals: this
function {
  this = this;
  return (this.position >= this.text.length);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=markdown/src/TextParser
// locals: this
function {
  this = this;
  return this.position;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=markdown/src/TextParser
// args: t
// locals: this
function {
  this = this;
  this.position = t;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=130B file=markdown/src/TextParser
// args: t
// locals: i, s, this
function {
  this = this;
  let s;
  let i;
  i = this.mark();
  s = this.tryConsume(t);
  this.restore(i);
  return s;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=232B file=markdown/src/TextParser
// args: t
// locals: i, this
function {
  this = this;
  let i;
  i = 0;
  if (!((i < t.length))) goto L_b7;
  if (!((this.text.charCodeAt((this.position + i)) !== t.charCodeAt(i)))) goto L_ac;
  return false;
  i = <i_new>;
  (i++);
  goto L_7;
  this.position = (this.position + t.length);
  return true;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=106B file=markdown/src/TextParser
// locals: this
function {
  this = this;
  return this.text.charCodeAt(this.position);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=92B file=markdown/src/TextParser
// args: t
// locals: this
function {
  this = this;
  if (!((this.peekCharCode() === t))) goto L_5b;
  this.position = (this.position ++);
  return true;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=170B file=markdown/src/TextParser
// args: t
// locals: i, t#1, this
function {
  this = this;
  let i;
  i = 0;
  if (!(!this.isAtEnd())) goto L_a6;
  if (!((i < t))) goto L_a6;
  let t#1;
  t#1 = this.peekCharCode();
  if (!((32 !== t#1))) goto L_6f;
  if (((9 !== t#1))) goto L_a6;
  this.position = (this.position ++);
  i = <i_new>;
  (i++);
  goto L_7;
  return i;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=274B file=markdown/src/TextParser
// args: t
// locals: i, this
function {
  this = this;
  let i;
  i = this.position;
  if (!(!this.isAtEnd())) goto L_a7;
  if (!(t(this.peekCharCode()))) goto L_a7;
  this.position = (this.position ++);
  goto L_28;
  return this.text.slice(i, this.position);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=159B file=markdown/src/TextParser
// locals: t, this
function {
  this = this;
  let t;
  t = this.text.slice(this.position);
  this.position = this.text.length;
  return t;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=150B file=markdown/src/TextParser
// locals: t, this
function {
  this = this;
  let t;
  t = this.findLineEnd();
  return this.text.slice(this.position, t);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=markdown/src/TextParser
// locals: this
function {
  this = this;
  return (this.position >= this.findLineEnd());
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=208B file=markdown/src/TextParser
// locals: t, i, this
function {
  this = this;
  let i;
  let t;
  t = this.findLineEnd();
  i = this.text.slice(this.position, t);
  this.position = this.nextLinePosition(t);
  return i;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=294B file=markdown/src/TextParser
// locals: t, i, this
function {
  this = this;
  let i;
  let t;
  t = this.findLineEnd();
  i = this.text.slice(this.position, t);
  this.position = this.nextLinePosition(t);
  if (!((this.position > t))) goto L_122;
  return "".concat(i, "
");
  return i;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=174B file=markdown/src/TextParser
// locals: t, i, this
function {
  this = this;
  let i;
  let t;
  t = this.findLineEnd();
  i = this.position;
  this.position = this.nextLinePosition(t);
  return this.sliceTrimmed(i, t);   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=171B file=markdown/src/TextParser
// locals: t, i, this
function {
  this = this;
  let i;
  let t;
  t = this.findLineEnd();
  i = this.text.slice(this.position, t);
  this.position = t;
  return i;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=137B file=markdown/src/TextParser
// locals: t, i, this
function {
  this = this;
  let i;
  let t;
  t = this.findLineEnd();
  i = this.position;
  this.position = t;
  return this.sliceTrimmed(i, t);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=87B file=markdown/src/TextParser
// locals: this
function {
  this = this;
  this.position = this.nextLinePosition(this.findLineEnd());
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=13B file=markdown/src/TextParser
// args: t
function {
  if (((32 === t))) goto L_c;
  return (9 === t);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=207B file=markdown/src/TextParser
// locals: t, this
function {
  this = this;
  let t;
  t = this.mark();
  this.consumeWhile(function <atom:0>);
  if (!(this.isAtLineEnd())) goto L_a3;
  this.finishLine();
  return true;
  this.restore(t);
  return false;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=29B file=markdown/src/TextParser
// args: t
function {
  if (((32 === t))) goto L_1c;
  if (((9 === t))) goto L_1c;
  if (((10 === t))) goto L_1c;
  return (13 === t);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=288B file=markdown/src/TextParser
// locals: t, this
function {
  this = this;
  let t;
  t = this.text.indexOf("
", this.position);
  if (!((t < 0))) goto L_9e;
  return this.text.length;
  if (!((t > this.position))) goto L_11c;
  if (!((13 === this.text.charCodeAt((t - 1))))) goto L_11c;
  return (t - 1);
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=273B file=markdown/src/TextParser
// args: t
// locals: i, this
function {
  this = this;
  let i;
  i = t;
  if (!((i < this.text.length))) goto L_89;
  if (!((13 === this.text.charCodeAt(i)))) goto L_89;
  i = <i_new>;
  (i++);
  if (!((i < this.text.length))) goto L_10c;
  if (!((10 === this.text.charCodeAt(i)))) goto L_10c;
  i = <i_new>;
  (i++);
  return i;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=361B file=markdown/src/TextParser
// args: t, i
// locals: s, e, this
// closure: TextParser
function {
  this = this;
  let e;
  let s;
  s = t;
  e = i;
  if (!((s < e))) goto L_92;
  if (!(TextParser.isWhitespace(this.text.charCodeAt(s)))) goto L_92;
  s = <s_new>;
  (s++);
  goto L_c;
  if (!((e > s))) goto L_11d;
  if (!(TextParser.isWhitespace(this.text.charCodeAt((e - 1))))) goto L_11d;
  e = <e_new>;
  (e--);
  goto L_92;
  return this.text.slice(s, e);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=24 bc=296B file=markdown/src/TextParser
// args: require, module, exports
// locals: TextParser, <class_fields_init>, TextParser#1
function {
  let TextParser#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextParser = undefined;
  let TextParser;
  let <class_fields_init>;
  class TextParser extends undefined { ... }
  <proto:TextParser>.isAtEnd = function <atom:0>;
  <proto:TextParser>.mark = function <atom:0>;
  <proto:TextParser>.restore = function <atom:0>;
  <proto:TextParser>.peek = function <atom:0>;
  <proto:TextParser>.tryConsume = function <atom:0>;
  <proto:TextParser>.peekCharCode = function <atom:0>;
  <proto:TextParser>.tryConsumeCharCode = function <atom:0>;
  <proto:TextParser>.consumeLeadingSpaces = function <atom:0>;
  <proto:TextParser>.consumeWhile = function <atom:0>;
  <proto:TextParser>.consumeRest = function <atom:0>;
  <proto:TextParser>.peekLine = function <atom:0>;
  <proto:TextParser>.isAtLineEnd = function <atom:0>;
  <proto:TextParser>.consumeLine = function <atom:0>;
  <proto:TextParser>.consumeLineWithNormalizedBreak = function <atom:0>;
  <proto:TextParser>.consumeLineTrimmed = function <atom:0>;
  <proto:TextParser>.consumeRestOfLine = function <atom:0>;
  <proto:TextParser>.consumeRestOfLineTrimmed = function <atom:0>;
  <proto:TextParser>.finishLine = function <atom:0>;
  <proto:TextParser>.tryConsumeBlankLine = function <atom:0>;
  function <atom:0>.isWhitespace = function <atom:0>;
  <proto:TextParser>.findLineEnd = function <atom:0>;
  <proto:TextParser>.nextLinePosition = function <atom:0>;
  <proto:TextParser>.sliceTrimmed = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TextParser>;
  TextParser = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc TextParser
  TextParser#1 = function <atom:0>;
  exports.TextParser = TextParser#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=markdown/src/TextParser
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
