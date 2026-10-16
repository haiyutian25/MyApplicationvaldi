// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=27B file=dil_text/src/rendering/DILTextFontResolver
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.fontStyleCount = 0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_text/src/rendering/DILTextFontResolver
// locals: this
function {
  this = this;
  return this.fontStyleCount;
}

// fn <atom:0>  args=4 vars=6 closure=0 cpool=0 bc=324B file=dil_text/src/rendering/DILTextFontResolver
// args: t, e, o, n
// locals: r, this
function {
  this = this;
  let r;
  r = this.currentStyle;
  if (!((t == null))) goto L_5c;
  t;
  if (!((r == null))) goto L_3b;
  r;
  goto L_5c;
  if (!((e == null))) goto L_93;
  e;
  if (!((r == null))) goto L_72;
  r;
  goto L_93;
  if (!((o == null))) goto L_ca;
  o;
  if (!((r == null))) goto L_a9;
  r;
  goto L_ca;
  if (!((n == null))) goto L_101;
  n;
  if (!((r == null))) goto L_e0;
  r;
  goto L_101;
  this.currentStyle = {fontSize: undefined.fontSize, fontWeight: undefined.fontWeight, italic: undefined.italic, fontRole: undefined.fontRole, previousStyle: r};
  this.fontStyleCount = (this.fontStyleCount ++);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=165B file=dil_text/src/rendering/DILTextFontResolver
// locals: this
function {
  this = this;
  if (!((undefined !== this.currentStyle))) goto L_a4;
  this.currentStyle = this.currentStyle.previousStyle;
  this.fontStyleCount = <this.fontStyleCount_new>;
  (this.fontStyleCount--);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=255B file=dil_text/src/rendering/DILTextFontResolver
// locals: e, this
// closure: t
function {
  this = this;
  let e;
  e = this.currentStyle;
  if (!((e == null))) goto L_57;
  e;
  goto L_78;
  if (!((e == null))) goto L_83;
  e;
  goto L_a4;
  if (!((e == null))) goto L_af;
  e;
  goto L_d0;
  if (!((e == null))) goto L_db;
  e;
  goto L_fc;
  return t.resolveFont(undefined.fontSize, undefined.fontWeight, undefined.italic, undefined.fontRole);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=167B file=dil_text/src/rendering/DILTextFontResolver
// locals: e, this
// closure: t
function {
  this = this;
  let e;
  e = this.currentStyle;
  if (!((e == null))) goto L_57;
  e;
  goto L_78;
  if (!((e == null))) goto L_83;
  e;
  goto L_a4;
  return t.resolveDILRoleFontSize(undefined.fontSize, undefined.fontRole);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=6 bc=158B file=dil_text/src/rendering/DILTextFontResolver
// args: require, module, exports
// locals: t, DILTextFontResolver, <class_fields_init>, DILTextFontResolver#1
function {
  let DILTextFontResolver#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTextFontResolver = undefined;
  t = require("./DILTextFont");
  let DILTextFontResolver;
  let <class_fields_init>;
  class DILTextFontResolver extends undefined { ... }
  <proto:DILTextFontResolver>.pushedFontStyleCount = function <atom:0>;
  <proto:DILTextFontResolver>.pushFontStyle = function <atom:0>;
  <proto:DILTextFontResolver>.popFontStyle = function <atom:0>;
  <proto:DILTextFontResolver>.resolveFont = function <atom:0>;
  <proto:DILTextFontResolver>.resolveFontSize = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILTextFontResolver>;
  DILTextFontResolver = function <atom:0>;
  // close_loc <class_fields_init>
  DILTextFontResolver#1 = function <atom:0>;
  exports.DILTextFontResolver = DILTextFontResolver#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/rendering/DILTextFontResolver
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
