// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=160B file=widgets/src/components/text/EmojiLabel
// locals: this
// closure: e, o
function {
  this = this;
  e.beginRender(o, undefined);
  e.setAttributes(this.viewModel);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/text/EmojiLabel
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=283B file=widgets/src/components/text/EmojiLabel
// args: require, module, exports
// locals: e, o, s, EmojiLabel, <class_fields_init>, EmojiLabel#1
function {
  let EmojiLabel#1;
  let s;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.EmojiLabel = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeNodePrototype("custom-view", ["androidClass", "com.snap.composer.views.ComposerEmojiTextView", "iosClass", "SCComposerLabel"], "UoQ3C5lHbIdWLWfU");
  s = require("valdi_core/src/Component");
  let EmojiLabel;
  let <class_fields_init>;
  class EmojiLabel extends s.Component { ... }
  <proto:EmojiLabel>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:EmojiLabel>;
  EmojiLabel = function <atom:0>;
  // close_loc <class_fields_init>
  EmojiLabel#1 = function <atom:0>;
  exports.EmojiLabel = EmojiLabel#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/text/EmojiLabel
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
