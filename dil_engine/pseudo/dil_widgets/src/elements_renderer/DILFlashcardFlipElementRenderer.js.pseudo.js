// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=176B file=dil_widgets/src/elements_renderer/DILFlashcardFlipElementRenderer
// locals: this.active_func, new.target, this
// closure: t, <class_fields_init>, n
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("flashcard-flip", t.FlashcardStack);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("flashcard-flip", t.FlashcardStack);
  this.childrenMode = n.DILElementChildrenMode.ResolvedValues;
  this.renderOptions = [];
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=92B file=dil_widgets/src/elements_renderer/DILFlashcardFlipElementRenderer
// args: e, r
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, r);
  this.renderOptions.push(r);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=51B file=dil_widgets/src/elements_renderer/DILFlashcardFlipElementRenderer
// closure: r, n, d, s
function {
  if (!(d)) goto L_29;
  goto L_2a;
  // [栈深重同步 4 -> 3]
  r.renderSelected([n[0]], s);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=1 bc=76B file=dil_widgets/src/elements_renderer/DILFlashcardFlipElementRenderer
// args: d
// closure: r, n, s, e, t
function {
  e.runWithDILV2ChildRenderFrame(t.renderState, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=57B file=dil_widgets/src/elements_renderer/DILFlashcardFlipElementRenderer
// closure: r, i, s
function {
  if (!((undefined === i))) goto L_2e;
  goto L_34;
  // [栈深重同步 3 -> 2]
  r.renderSelected([i], s);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=1 bc=85B file=dil_widgets/src/elements_renderer/DILFlashcardFlipElementRenderer
// args: d
// locals: i
// closure: r, s, n, e, t
function {
  let i;
  i = n[(d + 1)];
  e.runWithDILV2ChildRenderFrame(t.renderState, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=2 bc=243B file=dil_widgets/src/elements_renderer/DILFlashcardFlipElementRenderer
// args: r, n
// locals: t, this
// closure: s, e
function {
  this = this;
  let t;
  if (((undefined === n))) goto L_10;
  if (!((n.length < 2))) goto L_21;
  throw new Error("DIL flashcard-flip requires question and answer children.");
  t = this.renderOptions[(this.renderOptions.length - 1)];
  this.setViewModelProperty("cardCount", (n.length - 1));
  this.setViewModelProperty("renderFace", function <atom:0>);
  this.setViewModelProperty("renderPreview", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=111B file=dil_widgets/src/elements_renderer/DILFlashcardFlipElementRenderer
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  try { // catch -> L_20
  super["endRender"].call(this);
  <?>;
  // gosub (finally 块) 38
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 38
  throw <?>;
  this.renderOptions.pop();
  // ret (finally 块) 
  return;
}

// fn s  args=1 vars=1 closure=2 cpool=0 bc=128B file=dil_widgets/src/elements_renderer/DILFlashcardFlipElementRenderer
// args: e
// closure: r, i
function {
  null;
  e;
  if (!((undefined === e.renderState))) goto L_30;
  goto L_7a;
  // [栈深重同步 2 -> 1]
  return {renderState: r.renderStateWithDILPressableOptions(e.renderState, i)};
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=5 bc=249B file=dil_widgets/src/elements_renderer/DILFlashcardFlipElementRenderer
// args: require, module, exports
// locals: e, r, n, t, d, i, DILFlashcardFlipElementRenderer, <class_fields_init>, DILFlashcardFlipElementRenderer#1, s
function {
  s = function s;
  let DILFlashcardFlipElementRenderer#1;
  let i;
  let d;
  let t;
  let n;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILFlashcardFlipElementRenderer = undefined;
  e = require("dil_core/src/layout/DILV2AutoSpacing");
  r = require("dil_core/src/DILPressableRenderState");
  n = require("dil_renderer/src/DILRenderer");
  t = require("../animation/FlashcardStack");
  d = require("./DILComponentElementRenderer");
  i = {feedbackDisabled: true, exposeAccessibleContent: true};
  let DILFlashcardFlipElementRenderer;
  let <class_fields_init>;
  class DILFlashcardFlipElementRenderer extends d.DILComponentElementRenderer { ... }
  <proto:DILFlashcardFlipElementRenderer>.beginRender = function <atom:0>;
  <proto:DILFlashcardFlipElementRenderer>.setChildren = function <atom:0>;
  <proto:DILFlashcardFlipElementRenderer>.endRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILFlashcardFlipElementRenderer>;
  DILFlashcardFlipElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILFlashcardFlipElementRenderer#1 = function <atom:0>;
  exports.DILFlashcardFlipElementRenderer = DILFlashcardFlipElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILFlashcardFlipElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
