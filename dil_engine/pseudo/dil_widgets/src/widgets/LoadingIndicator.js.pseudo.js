// fn <atom:0>  args=0 vars=2 closure=5 cpool=0 bc=836B file=dil_widgets/src/widgets/LoadingIndicator
// locals: t, this
// closure: s, e, i, n, o
function {
  this = this;
  let t;
  t = s.resolveDILIconSize(this.viewModel.size);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", n.spinner);
  e.setAttributes(this.baseViewAttributes);
  e.setAttributeString("accessibilityLabel", this.accessibilityLabel);
  e.setAttribute("accessibilityStateLiveRegion", this.accessibilityStateLiveRegion);
  e.setAttributeString("alignSelf", this.alignSelf);
  e.setAttributeNumber("width", t);
  e.setAttributeNumber("height", t);
  e.setAttributeString("color", o.resolveDILTextColor(this.viewModel.color, "prose"));
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/LoadingIndicator
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/LoadingIndicator
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/LoadingIndicator
function {
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/LoadingIndicator
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

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=80B file=dil_widgets/src/widgets/LoadingIndicator
// locals: this
function {
  this = this;
  if (!((this.viewModel.label == null))) goto L_4f;
  this.viewModel.label;
  return "Loading";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_widgets/src/widgets/LoadingIndicator
function {
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=dil_widgets/src/widgets/LoadingIndicator
function {
  return "center";
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/LoadingIndicator
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

// fn <atom:0>  args=3 vars=16 closure=0 cpool=9 bc=637B file=dil_widgets/src/widgets/LoadingIndicator
// args: require, module, exports
// locals: e, i, t, r, o, s, LoadingIndicator, <class_fields_init>, LoadingIndicator#1, Loading, <class_fields_init>#1, Loading#1, n
function {
  let n;
  let Loading#1;
  let LoadingIndicator#1;
  let s;
  let o;
  let r;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LoadingIndicator = undefined;
  exports.Loading = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeNodePrototype("spinner", undefined, "BT6mc1onYt17NaQA");
  t = require("dil_core/src/DILComponent");
  r = require("valdi_core/src/Style");
  o = require("dil_core/src/colors/DILColor");
  s = require("./DILWidgetSizes");
  let LoadingIndicator;
  let <class_fields_init>;
  class LoadingIndicator extends t.DILComponent { ... }
  <proto:LoadingIndicator>.onRender = function <atom:0>;
  <proto:LoadingIndicator>.accessibilityLabel = function <atom:0>;
  <proto:LoadingIndicator>.accessibilityStateLiveRegion = function <atom:0>;
  <proto:LoadingIndicator>.alignSelf = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LoadingIndicator>;
  LoadingIndicator = function <atom:0>;
  // close_loc <class_fields_init>
  LoadingIndicator#1 = function <atom:0>;
  exports.LoadingIndicator = LoadingIndicator#1;
  LoadingIndicator#1.dilV2Properties = ["color", "size"];
  // append([], 0, t.DIL_COMPONENT_PROPERTIES)
  [][t.DIL_COMPONENT_PROPERTIES] = "color";
  [][("color" ++)] = "size";
  ("size" ++);
  LoadingIndicator#1.properties = [];
  let Loading;
  let <class_fields_init>#1;
  class Loading extends LoadingIndicator#1 { ... }
  <proto:Loading>.accessibilityLabel = function <atom:0>;
  <proto:Loading>.accessibilityStateLiveRegion = function <atom:0>;
  <proto:Loading>.alignSelf = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:Loading>;
  Loading = function <atom:0>;
  // close_loc <class_fields_init>#1
  Loading#1 = function <atom:0>;
  exports.Loading = Loading#1;
  Loading#1.dilV2Properties = ["label", "size"];
  // append([], 0, LoadingIndicator#1.properties)
  [][LoadingIndicator#1.properties] = "label";
  ("label" ++);
  Loading#1.properties = [];
  n = {spinner: new r.Style({flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/LoadingIndicator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
