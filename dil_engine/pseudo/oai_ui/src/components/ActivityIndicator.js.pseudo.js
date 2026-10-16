// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=oai_ui/src/components/ActivityIndicator
// args: e
function {
  e.Small = "small";
  e.Medium = "medium";
  return;
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=0 bc=881B file=oai_ui/src/components/ActivityIndicator
// locals: r, o, this
// closure: c, e, t, n, i
function {
  this = this;
  let o;
  let r;
  r = c(this.viewModel.size);
  o = this.viewModel.accessibilityLabel;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", n.spinner);
  if (!((undefined === o))) goto L_146;
  goto L_14b;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityCategory", "text");
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", o);
  if (!((undefined === o))) goto L_226;
  goto L_22b;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "leaf");
  if (!((this.viewModel.color == null))) goto L_2e5;
  this.viewModel.color;
  e.setAttributeString("color", i.OAIColor.IconSecondary);
  e.setAttributeNumber("height", r);
  e.setAttributeNumber("width", r);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/ActivityIndicator
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

// fn c  args=1 vars=1 closure=1 cpool=0 bc=44B file=oai_ui/src/components/ActivityIndicator
// args: e
// closure: s
function {
  if (!((e === s.Medium))) goto L_29;
  return 24;
  return 20;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=4 bc=383B file=oai_ui/src/components/ActivityIndicator
// args: require, module, exports
// locals: e, t, i, r, o, s, ActivityIndicator, <class_fields_init>, ActivityIndicator#1, c, n
function {
  c = function c;
  let n;
  let ActivityIndicator#1;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ActivityIndicatorSize = undefined;
  exports.ActivityIndicator = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("spinner", undefined, "ohjaPY9aSykXVFsf");
  i = require("oai_core/src/OAITokens");
  r = require("valdi_core/src/Component");
  o = require("valdi_core/src/Style");
  if ((s)) goto L_f2;
  s = {};
  exports.ActivityIndicatorSize = {};
  !function <atom:0>({});
  let ActivityIndicator;
  let <class_fields_init>;
  class ActivityIndicator extends r.Component { ... }
  <proto:ActivityIndicator>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ActivityIndicator>;
  ActivityIndicator = function <atom:0>;
  // close_loc <class_fields_init>
  ActivityIndicator#1 = function <atom:0>;
  exports.ActivityIndicator = ActivityIndicator#1;
  n = {spinner: new o.Style({flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/ActivityIndicator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
