// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=49B file=valdi_core/src/Style
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.attributes = e;
  this.native = undefined;
  this.mergedStyles = undefined;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=109B file=valdi_core/src/Style
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.native;
  if (!((undefined === t))) goto L_68;
  t = e(this.attributes);
  e(this.attributes);
  this.native = t;
  t;
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=141B file=valdi_core/src/Style
// args: e
// locals: t, this
// closure: Style
function {
  this = this;
  let t;
  if (!((e instanceof Style))) goto L_53;
  return this.extend(e.attributes);   // tail call
  null;
  this.attributes;
  null;
  e;
  t = {};
  return new Style(t);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/Style
// locals: this
function {
  this = this;
  return this.attributes;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=47B file=valdi_core/src/Style
// args: e, t
function {
  null;
  e;
  null;
  t.attributes;
  return {};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=59B file=valdi_core/src/Style
// args: e
// locals: t
// closure: Style
function {
  e = ...0;
  let t;
  t = e.reduce(function <atom:0>, {});
  return new Style(t);
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=278B file=valdi_core/src/Style
// args: e, t
// locals: r, s
// closure: Style
function {
  let s;
  let r;
  r = e.mergedStyles;
  if (!((undefined !== r))) goto L_a8;
  if (!((r.mergingStyle === t))) goto L_7d;
  return r.resolvedStyle;
  r = r.next;
  r.next;
  goto L_29;
  s = Style.merge(e, t);
  e.mergedStyles = {resolvedStyle: s, mergingStyle: t, next: e.mergedStyles};
  return s;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=6 bc=154B file=valdi_core/src/Style
// args: require, module, exports
// locals: Style, <class_fields_init>, Style#1
function {
  let Style#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Style = undefined;
  let Style;
  let <class_fields_init>;
  class Style extends undefined { ... }
  <proto:Style>.toNative = function <atom:0>;
  <proto:Style>.extend = function <atom:0>;
  <proto:Style>.toConsoleRepresentation = function <atom:0>;
  function <atom:0>.merge = function <atom:0>;
  function <atom:0>.cachingMerge = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Style>;
  Style = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc Style
  Style#1 = function <atom:0>;
  exports.Style = Style#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/Style
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
