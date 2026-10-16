// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=51B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.options = t;
  this.components = [];
  this.textLength = 0;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=90B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.appendEntry(1, t);
  this.textLength = (this.textLength + t.length);
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=170B file=valdi_core/src/utils/AttributedTextBuilder
// args: t, n
// locals: s, this
function {
  this = this;
  if (!(n)) goto L_81;
  let s;
  s = this.pushStyle(n);
  this.appendText(t);
  this.popCount(s);
  goto L_a8;
  this.appendText(t);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=110B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.append(t.content, t.attributes);
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=91B file=valdi_core/src/utils/AttributedTextBuilder
// args: t, n
// locals: s, this
function {
  this = this;
  let s;
  s = this.pushStyle(t);
  n(this);
  this.popCount(s);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=77B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.components.push(3, t);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=77B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.components.push(5, t);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.components.push(14, t);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.components.push(15, t);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.components.push(16, t);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=77B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.components.push(4, t);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=77B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.components.push(6, t);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=263B file=valdi_core/src/utils/AttributedTextBuilder
// args: n
// locals: this
// closure: t
function {
  this = this;
  if (!(t.Device.isWeb())) goto L_97;
  goto L_104;
  // [栈深重同步 1 -> 0]
  this.components.push(6, this.makeLinkTap(n));
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=7B file=valdi_core/src/utils/AttributedTextBuilder
// closure: n, t
function {
  return n(t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=93B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: n, this
function {
  this = this;
  let n;
  if (!((this.options == null))) goto L_2f;
  this.options;
  goto L_50;
  n = undefined.onOpenLink;
  if (!((undefined === n))) goto L_5a;
  return undefined;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=77B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.components.push(7, t);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.components.push(8, t);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.components.push(9, t);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.components.push(10, t);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.components.push(11, t);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.components.push(13, t);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=122B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: this
function {
  this = this;
  this.components.push(12, t);
  this.textLength = (this.textLength ++);
  return this;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=158B file=valdi_core/src/utils/AttributedTextBuilder
// args: t, n
// locals: t#1, n#1, s, this
function {
  this = this;
  let n#1;
  let t#1;
  t#1 = t;
  if (!((n === undefined))) goto L_12;
  n;
  n = 0;
  n#1 = 0;
  let s;
  s = {childIndex: t, verticalAlignment: n};
  this.components.push(17, s);
  this.textLength = (this.textLength ++);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/utils/AttributedTextBuilder
// locals: this
function {
  this = this;
  return this.textLength;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=76B file=valdi_core/src/utils/AttributedTextBuilder
// locals: this
function {
  this = this;
  this.components.push(2);
  return this;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=75B file=valdi_core/src/utils/AttributedTextBuilder
// args: t, n
// locals: this
function {
  this = this;
  this.components.push(t, n);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=1549B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: n, this
function {
  this = this;
  let n;
  n = 0;
  if (!(t.color)) goto L_7c;
  this.pushColor(t.color);
  n = <n_new>;
  (n++);
  if (!(t.backgroundColor)) goto L_f2;
  this.pushBackgroundColor(t.backgroundColor);
  n = <n_new>;
  (n++);
  if (!((undefined !== t.backgroundPadding))) goto L_16a;
  this.pushBackgroundPadding(t.backgroundPadding);
  n = <n_new>;
  (n++);
  if (!((undefined !== t.backgroundBorderRadius))) goto L_1e2;
  this.pushBackgroundBorderRadius(t.backgroundBorderRadius);
  n = <n_new>;
  (n++);
  if (!(t.font)) goto L_258;
  this.pushFont(t.font);
  n = <n_new>;
  (n++);
  if (!(t.textDecoration)) goto L_2ce;
  this.pushTextDecoration(t.textDecoration);
  n = <n_new>;
  (n++);
  if (!(t.onTap)) goto L_344;
  this.pushOnTap(t.onTap);
  n = <n_new>;
  (n++);
  if (!(t.onLayout)) goto L_3ba;
  this.pushOnLayout(t.onLayout);
  n = <n_new>;
  (n++);
  if (!(t.outlineColor)) goto L_430;
  this.pushOutlineColor(t.outlineColor);
  n = <n_new>;
  (n++);
  if (!(t.outlineWidth)) goto L_4a6;
  this.pushOutlineWidth(t.outlineWidth);
  n = <n_new>;
  (n++);
  if (!(t.outerOutlineColor)) goto L_51c;
  this.pushOuterOutlineColor(t.outerOutlineColor);
  n = <n_new>;
  (n++);
  if (!(t.outerOutlineWidth)) goto L_592;
  this.pushOuterOutlineWidth(t.outerOutlineWidth);
  n = <n_new>;
  (n++);
  if (!(t.animationTransform)) goto L_608;
  this.pushAnimationTransform(t.animationTransform);
  n = <n_new>;
  (n++);
  return n;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=63B file=valdi_core/src/utils/AttributedTextBuilder
// args: t
// locals: n, this
function {
  this = this;
  let n;
  n = 0;
  if (!((n < t))) goto L_3e;
  this.pop();
  n = <n_new>;
  (n++);
  goto L_7;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=43B file=valdi_core/src/utils/AttributedTextBuilder
// locals: this
function {
  this = this;
  // append([], 0, this.components)
  this.components;
  return [];
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=28 bc=334B file=valdi_core/src/utils/AttributedTextBuilder
// args: require, module, exports
// locals: t, AttributedTextBuilder, <class_fields_init>, AttributedTextBuilder#1
function {
  let AttributedTextBuilder#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AttributedTextBuilder = undefined;
  t = require("../Device");
  let AttributedTextBuilder;
  let <class_fields_init>;
  class AttributedTextBuilder extends undefined { ... }
  <proto:AttributedTextBuilder>.appendText = function <atom:0>;
  <proto:AttributedTextBuilder>.append = function <atom:0>;
  <proto:AttributedTextBuilder>.appendStyled = function <atom:0>;
  <proto:AttributedTextBuilder>.withStyle = function <atom:0>;
  <proto:AttributedTextBuilder>.pushFont = function <atom:0>;
  <proto:AttributedTextBuilder>.pushColor = function <atom:0>;
  <proto:AttributedTextBuilder>.pushBackgroundColor = function <atom:0>;
  <proto:AttributedTextBuilder>.pushBackgroundPadding = function <atom:0>;
  <proto:AttributedTextBuilder>.pushBackgroundBorderRadius = function <atom:0>;
  <proto:AttributedTextBuilder>.pushTextDecoration = function <atom:0>;
  <proto:AttributedTextBuilder>.pushOnTap = function <atom:0>;
  <proto:AttributedTextBuilder>.pushLink = function <atom:0>;
  <proto:AttributedTextBuilder>.makeLinkTap = function <atom:0>;
  <proto:AttributedTextBuilder>.pushOnLayout = function <atom:0>;
  <proto:AttributedTextBuilder>.pushOutlineColor = function <atom:0>;
  <proto:AttributedTextBuilder>.pushOutlineWidth = function <atom:0>;
  <proto:AttributedTextBuilder>.pushOuterOutlineColor = function <atom:0>;
  <proto:AttributedTextBuilder>.pushOuterOutlineWidth = function <atom:0>;
  <proto:AttributedTextBuilder>.pushAnimationTransform = function <atom:0>;
  <proto:AttributedTextBuilder>.appendInlineImage = function <atom:0>;
  <proto:AttributedTextBuilder>.appendInlineView = function <atom:0>;
  <proto:AttributedTextBuilder>.getTextLength = function <atom:0>;
  <proto:AttributedTextBuilder>.pop = function <atom:0>;
  <proto:AttributedTextBuilder>.appendEntry = function <atom:0>;
  <proto:AttributedTextBuilder>.pushStyle = function <atom:0>;
  <proto:AttributedTextBuilder>.popCount = function <atom:0>;
  <proto:AttributedTextBuilder>.build = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AttributedTextBuilder>;
  AttributedTextBuilder = function <atom:0>;
  // close_loc <class_fields_init>
  AttributedTextBuilder#1 = function <atom:0>;
  exports.AttributedTextBuilder = AttributedTextBuilder#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/AttributedTextBuilder
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
