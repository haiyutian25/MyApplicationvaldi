// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=oai_ui/src/components/FeedbackControls
// args: e
function {
  e.Positive = 0;
  e[0] = "Positive";
  e.Negative = 1;
  e[1] = "Negative";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=74B file=oai_ui/src/components/FeedbackControls
// closure: this, n
function {
  this.select(n.Positive);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=74B file=oai_ui/src/components/FeedbackControls
// closure: this, n
function {
  this.select(n.Negative);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=2 bc=77B file=oai_ui/src/components/FeedbackControls
// locals: this, this.active_func, new.target, arguments
// closure: n, <class_fields_init>
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
  this.selectPositive = function <atom:0>;
  this.selectNegative = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=0 bc=2387B file=oai_ui/src/components/FeedbackControls
// locals: this
// closure: e, i, v, l, o, c, n, s, t
function {
  this = this;
  e.beginRender(i, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeStyle("style", v.root);
  e.beginComponent(l.IconButton, o, undefined, undefined);
  e.setViewModelProperty("accessibilityId", c(this.viewModel.accessibilityId, "positive"));
  if (!((this.viewModel.positiveLabel == null))) goto L_22f;
  this.viewModel.positiveLabel;
  e.setViewModelProperty("accessibilityLabel", "Good response");
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  e.setViewModelProperty("onPress", this.selectPositive);
  e.setViewModelProperty("selected", (this.viewModel.value === n.Positive));
  e.setViewModelProperty("size", s.OAIControlSize.Sm);
  e.setViewModelProperty("src", this.viewModel.positiveIcon);
  if (!((undefined === this.viewModel.positiveIcon))) goto L_4e0;
  goto L_4e1;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("symbol", undefined);
  e.endComponent();
  e.beginComponent(l.IconButton, t, undefined, undefined);
  e.setViewModelProperty("accessibilityId", c(this.viewModel.accessibilityId, "negative"));
  if (!((this.viewModel.negativeLabel == null))) goto L_64d;
  this.viewModel.negativeLabel;
  e.setViewModelProperty("accessibilityLabel", "Bad response");
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  e.setViewModelProperty("onPress", this.selectNegative);
  e.setViewModelProperty("selected", (this.viewModel.value === n.Negative));
  e.setViewModelProperty("size", s.OAIControlSize.Sm);
  e.setViewModelProperty("src", this.viewModel.negativeIcon);
  if (!((undefined === this.viewModel.negativeIcon))) goto L_8fe;
  goto L_8ff;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("symbol", undefined);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=148B file=oai_ui/src/components/FeedbackControls
// args: e
// locals: this
function {
  this = this;
  if (!((this.viewModel.value === e))) goto L_8f;
  goto L_90;
  // [栈深重同步 3 -> 2]
  this.viewModel.onChange(e);
  return;
}

// fn c  args=2 vars=2 closure=0 cpool=0 bc=52B file=oai_ui/src/components/FeedbackControls
// args: e, i
function {
  if (!((undefined === e))) goto L_7;
  return undefined;
  return "".concat(e, ".", i);
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=5 bc=591B file=oai_ui/src/components/FeedbackControls
// args: require, module, exports
// locals: e, i, o, t, s, r, d, l, n, FeedbackControls, <class_fields_init>, FeedbackControls#1, c, v
function {
  c = function c;
  let v;
  let FeedbackControls#1;
  let l;
  let d;
  let r;
  let s;
  let t;
  let o;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FeedbackRating = undefined;
  exports.FeedbackControls = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeNodePrototype("view", undefined, "Oryr_n0HphcvgY4H");
  o = e.makeComponentPrototype(undefined, "OQm9ehQ5j6ehWbG_");
  t = e.makeComponentPrototype(undefined, "yo7GblQiCAWir_r7");
  s = require("oai_core/src/OAITokens");
  r = require("valdi_core/src/Component");
  d = require("valdi_core/src/Style");
  l = require("./IconButton");
  if ((n)) goto L_162;
  n = {};
  exports.FeedbackRating = {};
  !function <atom:0>({});
  let FeedbackControls;
  let <class_fields_init>;
  class FeedbackControls extends r.Component { ... }
  <proto:FeedbackControls>.onRender = function <atom:0>;
  <proto:FeedbackControls>.select = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FeedbackControls>;
  FeedbackControls = function <atom:0>;
  // close_loc <class_fields_init>
  FeedbackControls#1 = function <atom:0>;
  exports.FeedbackControls = FeedbackControls#1;
  v = {root: new d.Style({alignItems: "center", flexDirection: "row", gap: s.OAISpacing.Quarter})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/FeedbackControls
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
