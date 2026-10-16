// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=137B file=widgets/src/components/inputs/TextInputWrapper
// args: e
// closure: this
function {
  this.isFocused = true;
  this.checkForScrollEvent();
  if (!((this.viewModel.onEditBegin == null))) goto L_84;
  this.viewModel.onEditBegin;
  this.viewModel;
  goto L_88;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=137B file=widgets/src/components/inputs/TextInputWrapper
// args: e
// closure: this
function {
  this.isFocused = false;
  this.checkForScrollEvent();
  if (!((this.viewModel.onEditEnd == null))) goto L_84;
  this.viewModel.onEditEnd;
  this.viewModel;
  goto L_88;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=245B file=widgets/src/components/inputs/TextInputWrapper
// args: e
// closure: this
function {
  if (!(this.isTyping)) goto L_a1;
  if (!(this.isFocused)) goto L_a1;
  if (!(this.isListening)) goto L_a1;
  this.doScrollToTextInput(false);
  if (!((this.viewModel.onLayout == null))) goto L_f0;
  this.viewModel.onLayout;
  this.viewModel;
  goto L_f4;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=3 bc=212B file=widgets/src/components/inputs/TextInputWrapper
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, l
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
  this.textInputHandler = new l.TextInputHandler();
  this.keyboardHeight = 0;
  this.scrollInProgress = false;
  this.isTyping = false;
  this.isFocused = false;
  this.isListening = false;
  this.onEditBegin = function <atom:0>;
  this.onEditEnd = function <atom:0>;
  this.onLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=widgets/src/components/inputs/TextInputWrapper
// args: e
// locals: this
function {
  this = this;
  this.textInputHandler.setFocused(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=62B file=widgets/src/components/inputs/TextInputWrapper
// args: e
// closure: this
function {
  this.keyboardHeight = e;
  this.isTyping = (0 !== e);
  this.checkForScrollEvent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=87B file=widgets/src/components/inputs/TextInputWrapper
// locals: this
// closure: i
function {
  this = this;
  this.keyboardCancelable = i.Application.observeKeyboardHeight(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=160B file=widgets/src/components/inputs/TextInputWrapper
// locals: this
function {
  this = this;
  if (!((this.keyboardCancelable == null))) goto L_2c;
  this.keyboardCancelable;
  goto L_50;
  undefined.cancel();
  if (!((this.scrollSubscription == null))) goto L_7b;
  this.scrollSubscription;
  goto L_9f;
  undefined.unsubscribe();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=314B file=widgets/src/components/inputs/TextInputWrapper
// locals: e, i, s, this
function {
  this = this;
  let s;
  let i;
  let e;
  e = this.isTyping;
  i = this.isFocused;
  s = this.isListening;
  if (!(e)) goto L_d7;
  if (!(i)) goto L_d7;
  if (!(!s)) goto L_d7;
  this.doScrollToTextInput(true);
  this.startListeningForScrolling();
  if ((e)) goto L_139;
  if ((i)) goto L_139;
  if ((!s)) goto L_139;
  this.doScrollBackToClamp();
  this.stopListeningForScrolling();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=272B file=widgets/src/components/inputs/TextInputWrapper
// locals: e, this
// closure: t
function {
  this = this;
  let e;
  if (!(this.scrollInProgress)) goto L_2a;
  return;
  e = this.viewModel.scrollWithKeyboard;
  if (!(!e)) goto L_75;
  return;
  if ((t.Device.isIOS())) goto L_e7;
  if (!((0 === e.mode))) goto L_10e;
  return e.scrollViewHandler;
  return undefined;
}

// fn <atom:0>  args=0 vars=6 closure=2 cpool=0 bc=678B file=widgets/src/components/inputs/TextInputWrapper
// locals: e, i, s, t, l, this
// closure: r, o
function {
  this = this;
  let l;
  let t;
  let s;
  let i;
  let e;
  e = this.resolveScrollViewHandler();
  if (!(!e)) goto L_40;
  return;
  i = e.single();
  if (!(!i)) goto L_6f;
  return;
  s = this.textInputHandler.single();
  if (!(!s)) goto L_be;
  return;
  t = r.RenderedElementUtils.relativePositionTo(i, s);
  if (!(!t)) goto L_114;
  return;
  if (!((this.viewModel.scrollWithKeyboard == null))) goto L_160;
  this.viewModel.scrollWithKeyboard;
  goto L_181;
  if (!((undefined.bottomSpacing == null))) goto L_1cb;
  undefined.bottomSpacing;
  l = o.Spacing.SM;
  return ((((t.y + s.frame.height) + l) - i.frame.height) + this.keyboardHeight);
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=367B file=widgets/src/components/inputs/TextInputWrapper
// args: e
// locals: i, s, t, r, this
function {
  this = this;
  let r;
  let t;
  let s;
  let i;
  i = this.resolveScrollViewHandler();
  if (!(!i)) goto L_3d;
  return;
  s = this.computeIdealScrollY();
  if (!((undefined === s))) goto L_6c;
  return;
  t = i.scrollX;
  r = i.scrollY;
  if (!((r !== s))) goto L_16e;
  if (((r < s))) goto L_13c;
  if (!((this.viewModel.scrollWithKeyboard == null))) goto L_11b;
  this.viewModel.scrollWithKeyboard;
  goto L_13c;
  if (!(undefined.allowScrollingUpward)) goto L_16e;
  i.scrollTo(t, s, e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=164B file=widgets/src/components/inputs/TextInputWrapper
// locals: e, this
function {
  this = this;
  let e;
  e = this.resolveScrollViewHandler();
  if (!(e)) goto L_a3;
  e.scrollToClamped(e.scrollX, e.scrollY, true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=13B file=widgets/src/components/inputs/TextInputWrapper
// closure: this
function {
  this.scrollInProgress = true;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=13B file=widgets/src/components/inputs/TextInputWrapper
// closure: this
function {
  this.scrollInProgress = false;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=2 bc=176B file=widgets/src/components/inputs/TextInputWrapper
// locals: e, this
function {
  this = this;
  let e;
  this.stopListeningForScrolling();
  e = this.resolveScrollViewHandler();
  if (!(e)) goto L_af;
  this.isListening = true;
  this.scrollSubscription = e.subscribeListener({onDragStart: function <atom:0>, onScrollEnd: function <atom:0>});
  e.subscribeListener({onDragStart: function <atom:0>, onScrollEnd: function <atom:0>});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=117B file=widgets/src/components/inputs/TextInputWrapper
// locals: this
function {
  this = this;
  this.isListening = false;
  if (!((this.scrollSubscription == null))) goto L_38;
  this.scrollSubscription;
  goto L_5c;
  undefined.unsubscribe();
  this.scrollSubscription = undefined;
  this.scrollInProgress = false;
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=11 bc=338B file=widgets/src/components/inputs/TextInputWrapper
// args: require, module, exports
// locals: e, i, s, t, r, o, l, TextInputWrapper, <class_fields_init>, TextInputWrapper#1
function {
  let TextInputWrapper#1;
  let l;
  let o;
  let r;
  let t;
  let s;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextInputWrapper = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = require("valdi_core/src/Application");
  s = require("valdi_core/src/Component");
  t = require("valdi_core/src/Device");
  r = require("valdi_core/src/utils/RenderedElementUtils");
  o = require("widgets/src/styles/spacing");
  l = require("./TextInputHandler");
  let TextInputWrapper;
  let <class_fields_init>;
  class TextInputWrapper extends s.Component { ... }
  <proto:TextInputWrapper>.setFocused = function <atom:0>;
  <proto:TextInputWrapper>.onCreate = function <atom:0>;
  <proto:TextInputWrapper>.onDestroy = function <atom:0>;
  <proto:TextInputWrapper>.checkForScrollEvent = function <atom:0>;
  <proto:TextInputWrapper>.resolveScrollViewHandler = function <atom:0>;
  <proto:TextInputWrapper>.computeIdealScrollY = function <atom:0>;
  <proto:TextInputWrapper>.doScrollToTextInput = function <atom:0>;
  <proto:TextInputWrapper>.doScrollBackToClamp = function <atom:0>;
  <proto:TextInputWrapper>.startListeningForScrolling = function <atom:0>;
  <proto:TextInputWrapper>.stopListeningForScrolling = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TextInputWrapper>;
  TextInputWrapper = function <atom:0>;
  // close_loc <class_fields_init>
  TextInputWrapper#1 = function <atom:0>;
  exports.TextInputWrapper = TextInputWrapper#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/inputs/TextInputWrapper
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
