// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=oai_ui/src/components/SafeArea
// args: e
function {
  e.Top = 0;
  e[0] = "Top";
  e.Right = 1;
  e[1] = "Right";
  e.Bottom = 2;
  e[2] = "Bottom";
  e.Left = 3;
  e[3] = "Left";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=oai_ui/src/components/SafeArea
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=9 closure=5 cpool=1 bc=872B file=oai_ui/src/components/SafeArea
// locals: r, d, s, a, p, l, c, f, this
// closure: e, o, n, i, t
function {
  this = this;
  let f;
  let c;
  let l;
  let p;
  let a;
  let s;
  let d;
  let r;
  r = {};
  o.applyOAIBoxAttributes(r, this.viewModel);
  if (((undefined === undefined))) goto L_156;
  d = <to_object>(undefined).paddingTop;
  s = <to_object>(undefined).paddingRight;
  a = <to_object>(undefined).paddingBottom;
  p = <to_object>(undefined).paddingLeft;
  l = <to_object>(undefined).ref;
  c = {};
  <to_object>(undefined);
  {paddingTop: null, paddingRight: null, paddingBottom: null, paddingLeft: null, ref: null};
  goto L_15d;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_71;
  // [栈深重同步 1 -> 0]
  f = {top: n(d), right: n(s), bottom: n(a), left: n(p)};
  e.beginComponent(i.SafeArea, t, undefined, undefined);
  e.setViewModelProperties(c);
  e.setViewModelProperty("edges", this.viewModel.edges);
  e.setViewModelProperty("padding", f);
  e.setViewModelProperty("style", this.viewModel.style);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/SafeArea
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

// fn n  args=1 vars=1 closure=0 cpool=0 bc=14B file=oai_ui/src/components/SafeArea
// args: e
function {
  if (!(("number" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=4 bc=320B file=oai_ui/src/components/SafeArea
// args: require, module, exports
// locals: e, t, o, r, i, d, SafeArea, <class_fields_init>, SafeArea#1, n
function {
  n = function n;
  let SafeArea#1;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SafeAreaEdge = undefined;
  exports.SafeArea = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "R6pGtVbWgrc2Xxhb");
  o = require("oai_core/src/OAIAttributes");
  r = require("valdi_core/src/Component");
  i = require("valdi_ui/src/components/SafeArea");
  if ((d)) goto L_ea;
  d = {};
  exports.SafeAreaEdge = {};
  !function <atom:0>({});
  let SafeArea;
  let <class_fields_init>;
  class SafeArea extends r.Component { ... }
  <proto:SafeArea>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SafeArea>;
  SafeArea = function <atom:0>;
  // close_loc <class_fields_init>
  SafeArea#1 = function <atom:0>;
  exports.SafeArea = SafeArea#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/SafeArea
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
