// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=547B file=oai_ui/src/components/ShimmerLines
// args: t
// closure: e, i, l, o, r
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", l.lineSlot);
  e.setAttributeNumber("height", o.lineHeight);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", l.line);
  e.setAttributeString("width", ((100 * t) + "%"));
  e.setAttributeNumber("height", o.barHeight);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=75B file=oai_ui/src/components/ShimmerLines
// closure: e, i, l, o, r
function {
  o.proportionalWidths.map(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=6 cpool=1 bc=446B file=oai_ui/src/components/ShimmerLines
// locals: o, this
// closure: e, i, l, r, d, t
function {
  this = this;
  let o;
  o = this.viewModel;
  e.beginComponent(d.Shimmer, t, undefined, undefined);
  e.setViewModelProperty("enabled", o.enabled);
  e.setViewModelProperty("accessibilityId", o.accessibilityId);
  e.setViewModelProperty("accessibilityLabel", o.accessibilityLabel);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/ShimmerLines
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

// fn <atom:0>  args=3 vars=15 closure=0 cpool=2 bc=590B file=oai_ui/src/components/ShimmerLines
// args: require, module, exports
// locals: e, t, i, r, o, n, s, d, ShimmerLines, <class_fields_init>, ShimmerLines#1, l
function {
  let l;
  let ShimmerLines#1;
  let d;
  let s;
  let n;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ShimmerLines = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "VLDjN9V-2SuqAmcF");
  i = e.makeNodePrototype("layout", undefined, "U35P0mfGkUYpJ129");
  r = e.makeNodePrototype("view", undefined, "PX-SJHFG7Gt7rHg9");
  o = require("oai_core/src/OAITokens");
  n = require("valdi_core/src/Component");
  s = require("valdi_core/src/Style");
  d = require("./Shimmer");
  let ShimmerLines;
  let <class_fields_init>;
  class ShimmerLines extends n.Component { ... }
  <proto:ShimmerLines>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ShimmerLines>;
  ShimmerLines = function <atom:0>;
  // close_loc <class_fields_init>
  ShimmerLines#1 = function <atom:0>;
  exports.ShimmerLines = ShimmerLines#1;
  l = {lineSlot: new s.Style({justifyContent: "center"}), line: new s.Style({backgroundColor: o.OAIColor.BgTertiary, borderRadius: 4})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/ShimmerLines
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
