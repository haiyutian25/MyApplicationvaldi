// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=49B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return !!(1073741824 & this.getFlagsAt(t));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=47B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return !!(992 & this.getFlagsAt(t));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=49B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return !!(57344 & this.getFlagsAt(t));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=49B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return !!(8323072 & this.getFlagsAt(t));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=49B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return !!(939524096 & this.getFlagsAt(t));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return !!(16 & this.getFlagsAt(t));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=49B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return !!(16777216 & this.getFlagsAt(t));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=45B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return !!(2 & this.getFlagsAt(t));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=45B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return !!(1 & this.getFlagsAt(t));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=44B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return (10 == this.getCodepointAt(t));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=83B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  if ((this.isSeparatorAt(t))) goto L_52;
  return this.isNewlineAt(t);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=47B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return !!(-2147483648.0 & this.getFlagsAt(t));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=49B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return !!(1073734624 & this.getFlagsAt(t));
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=93B file=coreutils/src/unicode/UnicodeString
// locals: t, e, i, this
function {
  this = this;
  let e;
  let t;
  t = this.length;
  e = 0;
  let i;
  i = 0;
  if (!((i < t))) goto L_59;
  if ((this.isFromGraphemeClusterAt(i))) goto L_4e;
  e = <e_new>;
  (e++);
  i = <i_new>;
  (i++);
  goto L_12;
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=coreutils/src/unicode/UnicodeString
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=81B file=coreutils/src/unicode/UnicodeString
// args: t, e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target();
  if (!(<class_fields_init>)) goto L_21;
  <class_fields_init>.call(this);
  new new.target();
  this.str = t;
  this.length = (e.length / 2);
  this.buffer = e;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return this.buffer[t];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=42B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return this.buffer[(this.length + t)];
}

// fn <atom:0>  args=0 vars=5 closure=1 cpool=0 bc=228B file=coreutils/src/unicode/UnicodeString
// locals: t, e, i, s, this
// closure: MutableUnicodeString
function {
  this = this;
  let e;
  let t;
  t = [];
  e = [];
  let s;
  let i;
  i = 0;
  s = this.length;
  if (!((i < s))) goto L_d6;
  t.push(this.getCodepointAt(i));
  e.push(this.getFlagsAt(i));
  i = <i_new>;
  (i++);
  goto L_1d;
  return new MutableUnicodeString(t, e);
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=0 bc=105B file=coreutils/src/unicode/UnicodeString
// args: e, i
// locals: e#1, i#1, s, r, n
// closure: t, UnicodeString
function {
  let i#1;
  let e#1;
  e#1 = e;
  if (!((i === undefined))) goto L_10;
  i;
  i = 0;
  i#1 = 0;
  let n;
  let r;
  let s;
  s = !!(1 & i);
  r = !!(2 & i);
  n = t.strToCodepoints(e, s, r);
  return new UnicodeString(e, new Uint32Array(n));
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=0 bc=173B file=coreutils/src/unicode/UnicodeString
// args: e, i
// locals: e#1, i#1, s, r, n
// closure: t, UnicodeString
function {
  let i#1;
  let e#1;
  e#1 = e;
  if (!((i === undefined))) goto L_10;
  i;
  i = 0;
  i#1 = 0;
  let n;
  let r;
  let s;
  s = !!(1 & i);
  r = !!(2 & i);
  n = t.codepointsToStr(e, s, r);
  return new UnicodeString(n.str, new Uint32Array(n.buffer));
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=60B file=coreutils/src/unicode/UnicodeString
// closure: e, UnicodeString
function {
  if ((e)) goto L_37;
  e = UnicodeString.fromString(" ");
  UnicodeString.fromString(" ");
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=38B file=coreutils/src/unicode/UnicodeString
// locals: this
function {
  this = this;
  return this.codepoints.length;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=65B file=coreutils/src/unicode/UnicodeString
// args: t, e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target();
  if (!(<class_fields_init>)) goto L_21;
  <class_fields_init>.call(this);
  new new.target();
  this.codepoints = t;
  this.flags = e;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return this.codepoints[t];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return this.flags[t];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=coreutils/src/unicode/UnicodeString
// locals: this
function {
  this = this;
  return this.trimRight().trimLeft();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=201B file=coreutils/src/unicode/UnicodeString
// locals: this
function {
  this = this;
  if (!((this.length > 0))) goto L_c7;
  if (!(this.isWhitespaceAt(0))) goto L_c7;
  this.codepoints.shift();
  this.flags.shift();
  goto L_2;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=212B file=coreutils/src/unicode/UnicodeString
// locals: t, this
function {
  this = this;
  let t;
  t = (this.length - 1);
  if (((t < 0))) goto L_3c;
  if ((!this.isWhitespaceAt(t))) goto L_d2;
  this.codepoints.pop();
  this.flags.pop();
  goto L_2;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=41B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return this.removeCount(t, 1);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=106B file=coreutils/src/unicode/UnicodeString
// args: t, e
// locals: this
function {
  this = this;
  if (!((e < t))) goto L_41;
  throw new Error("Invalid range ".concat(t, " to ", e));
  return this.removeCount(t, (e - t));   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=150B file=coreutils/src/unicode/UnicodeString
// args: t, e
// locals: this
function {
  this = this;
  this.codepoints.splice(t, e);
  this.flags.splice(t, e);
  return this;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=152B file=coreutils/src/unicode/UnicodeString
// args: t, e, i
// locals: this
function {
  this = this;
  this.codepoints.splice(t, 0, e);
  this.flags.splice(t, 0, i);
  return this;
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=7B file=coreutils/src/unicode/UnicodeString
// args: e, i, s
// closure: t
function {
  return !t(e, i, s);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=42B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: this
function {
  this = this;
  return this.replaceGraphemeClusters(function <atom:0>, undefined);   // tail call
}

// fn <atom:0>  args=2 vars=10 closure=0 cpool=0 bc=604B file=coreutils/src/unicode/UnicodeString
// args: t, e
// locals: i, s, r, t#1, i#1, t#2, i#2, this
function {
  this = this;
  let s;
  let i;
  i = -1;
  s = 0;
  if (!((s < this.length))) goto L_163;
  if (!(!this.isFromGraphemeClusterAt(s))) goto L_158;
  if (!((i >= 0))) goto L_150;
  let r;
  r = s;
  if (!(t(this, i, r))) goto L_150;
  let t#1;
  t#1 = (r - i);
  this.removeCount(i, t#1);
  s = (s - t#1);
  (s - t#1);
  if (!(e)) goto L_150;
  let i#1;
  i#1 = 0;
  if (!((i#1 < e.length))) goto L_150;
  this.insertAt(s, e.getCodepointAt(i#1), e.getFlagsAt(i#1));
  s = <s_new>;
  (s++);
  i#1 = <i#1_new>;
  (i#1++);
  goto L_b8;
  i = s;
  s;
  s = <s_new>;
  (s++);
  goto L_d;
  if (!((i >= 0))) goto L_259;
  if (!(t(this, i, s))) goto L_259;
  let t#2;
  t#2 = (s - i);
  this.removeCount(i, t#2);
  if (!(e)) goto L_259;
  let i#2;
  i#2 = 0;
  if (!((i#2 < e.length))) goto L_259;
  this.insertAt(s, e.getCodepointAt(i#2), e.getFlagsAt(i#2));
  s = <s_new>;
  (s++);
  i#2 = <i#2_new>;
  (i#2++);
  goto L_1c1;
  return this;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=381B file=coreutils/src/unicode/UnicodeString
// args: t
// locals: e, i, s, r, this
// closure: MutableUnicodeString
function {
  this = this;
  let s;
  let i;
  let e;
  e = [];
  i = [];
  s = [];
  let r;
  r = 0;
  if (!((r < this.length))) goto L_144;
  if (!(t(this, r))) goto L_79;
  e.push(new MutableUnicodeString(i, s));
  i = [];
  [];
  s = [];
  goto L_138;
  // [栈深重同步 1 -> 0]
  if ((i)) goto L_87;
  i = [];
  [];
  if ((s)) goto L_96;
  s = [];
  [];
  i.push(this.getCodepointAt(r));
  s.push(this.getFlagsAt(r));
  r = <r_new>;
  (r++);
  goto L_1d;
  e.push(new MutableUnicodeString(i, s));
  return e;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=38B file=coreutils/src/unicode/UnicodeString
// args: t, e
function {
  return t.isWhitespaceAt(e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=41B file=coreutils/src/unicode/UnicodeString
// locals: this
function {
  this = this;
  return this.splitBy(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=90B file=coreutils/src/unicode/UnicodeString
// locals: this
// closure: MutableUnicodeString
function {
  this = this;
  // append([], 0, this.codepoints)
  this.codepoints;
  // append([], 0, this.flags)
  this.flags;
  return new MutableUnicodeString([], []);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=75B file=coreutils/src/unicode/UnicodeString
// locals: this
// closure: UnicodeString
function {
  this = this;
  return UnicodeString.fromCodepoints(this.codepoints);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=111B file=coreutils/src/unicode/UnicodeString
// locals: this
// closure: t
function {
  this = this;
  return t.codepointsToStr(this.codepoints, false, true).str;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=40 bc=518B file=coreutils/src/unicode/UnicodeString
// args: require, module, exports
// locals: t, UnicodeStringBase, <class_fields_init>, UnicodeStringBase#1, e, UnicodeString, <class_fields_init>#1, UnicodeString#1, MutableUnicodeString, <class_fields_init>#2, MutableUnicodeString#1
function {
  let MutableUnicodeString#1;
  let UnicodeString#1;
  let e;
  let UnicodeStringBase#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.UnicodeString = undefined;
  exports.MutableUnicodeString = undefined;
  t = require("./UnicodeNative");
  let UnicodeStringBase;
  let <class_fields_init>;
  class UnicodeStringBase extends undefined { ... }
  <proto:UnicodeStringBase>.isEmojiAt = function <atom:0>;
  <proto:UnicodeStringBase>.isLetterAt = function <atom:0>;
  <proto:UnicodeStringBase>.isNumber = function <atom:0>;
  <proto:UnicodeStringBase>.isPunctuationAt = function <atom:0>;
  <proto:UnicodeStringBase>.isSeparatorAt = function <atom:0>;
  <proto:UnicodeStringBase>.isSurrogateAt = function <atom:0>;
  <proto:UnicodeStringBase>.isModifierSymbolAt = function <atom:0>;
  <proto:UnicodeStringBase>.isFormatAt = function <atom:0>;
  <proto:UnicodeStringBase>.isControlAt = function <atom:0>;
  <proto:UnicodeStringBase>.isNewlineAt = function <atom:0>;
  <proto:UnicodeStringBase>.isWhitespaceAt = function <atom:0>;
  <proto:UnicodeStringBase>.isFromGraphemeClusterAt = function <atom:0>;
  <proto:UnicodeStringBase>.isVisibleAt = function <atom:0>;
  <proto:UnicodeStringBase>.countGraphemeClusters = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:UnicodeStringBase>;
  UnicodeStringBase = function <atom:0>;
  // close_loc <class_fields_init>
  UnicodeStringBase#1 = function <atom:0>;
  e = undefined;
  let UnicodeString;
  let <class_fields_init>#1;
  class UnicodeString extends UnicodeStringBase#1 { ... }
  <proto:UnicodeString>.getCodepointAt = function <atom:0>;
  <proto:UnicodeString>.getFlagsAt = function <atom:0>;
  <proto:UnicodeString>.toMutable = function <atom:0>;
  function <atom:0>.fromString = function <atom:0>;
  function <atom:0>.fromCodepoints = function <atom:0>;
  function <atom:0>.space = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:UnicodeString>;
  UnicodeString = function <atom:0>;
  // close_loc <class_fields_init>#1
  // close_loc UnicodeString
  UnicodeString#1 = function <atom:0>;
  exports.UnicodeString = UnicodeString#1;
  let MutableUnicodeString;
  let <class_fields_init>#2;
  class MutableUnicodeString extends UnicodeStringBase#1 { ... }
  <proto:MutableUnicodeString>.length = function <atom:0>;
  <proto:MutableUnicodeString>.getCodepointAt = function <atom:0>;
  <proto:MutableUnicodeString>.getFlagsAt = function <atom:0>;
  <proto:MutableUnicodeString>.trim = function <atom:0>;
  <proto:MutableUnicodeString>.trimLeft = function <atom:0>;
  <proto:MutableUnicodeString>.trimRight = function <atom:0>;
  <proto:MutableUnicodeString>.removeAt = function <atom:0>;
  <proto:MutableUnicodeString>.removeRange = function <atom:0>;
  <proto:MutableUnicodeString>.removeCount = function <atom:0>;
  <proto:MutableUnicodeString>.insertAt = function <atom:0>;
  <proto:MutableUnicodeString>.filterGraphemeClusters = function <atom:0>;
  <proto:MutableUnicodeString>.replaceGraphemeClusters = function <atom:0>;
  <proto:MutableUnicodeString>.splitBy = function <atom:0>;
  <proto:MutableUnicodeString>.splitByWhitespace = function <atom:0>;
  <proto:MutableUnicodeString>.copy = function <atom:0>;
  <proto:MutableUnicodeString>.toUnicodeString = function <atom:0>;
  <proto:MutableUnicodeString>.toString = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:MutableUnicodeString>;
  MutableUnicodeString = function <atom:0>;
  // close_loc <class_fields_init>#2
  // close_loc MutableUnicodeString
  MutableUnicodeString#1 = function <atom:0>;
  exports.MutableUnicodeString = MutableUnicodeString#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=coreutils/src/unicode/UnicodeString
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
