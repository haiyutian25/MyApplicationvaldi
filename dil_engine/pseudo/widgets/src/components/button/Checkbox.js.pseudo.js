// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=219B file=widgets/src/components/button/Checkbox
// closure: this
function {
  if ((this.viewModel.disabled)) goto L_da;
  this.viewModel.onTap(!this.viewModel.on);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=63B file=widgets/src/components/button/Checkbox
// locals: this, this.active_func, new.target, arguments
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
  this.onTap = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=175B file=widgets/src/components/button/Checkbox
// locals: this
// closure: n
function {
  this = this;
  if (!(this.viewModel.on)) goto L_ae;
  return n.SemanticColor.Button.PRIMARY;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=widgets/src/components/button/Checkbox
// locals: this
function {
  this = this;
  if (!(this.viewModel.on)) goto L_49;
  return 0;
  return 1;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=554B file=widgets/src/components/button/Checkbox
// locals: this
// closure: e, t, d
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", d.checkbox);
  e.setAttributeFunction("onTap", this.onTap);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("backgroundColor", this.backgroundColor);
  e.setAttributeNumber("borderWidth", this.borderWidth);
  this.onRenderTick();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=274B file=widgets/src/components/button/Checkbox
// locals: this
// closure: e, o, s
function {
  this = this;
  if (!(this.viewModel.on)) goto L_111;
  e.beginRender(o, undefined);
  e.setAttribute("src", s.default.iconTick);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=7 bc=579B file=widgets/src/components/button/Checkbox
// args: require, module, exports
// locals: e, t, o, r, i, s, n, d, Checkbox, <class_fields_init>, Checkbox#1
function {
  let Checkbox#1;
  let d;
  let n;
  let s;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Checkbox = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "_FotxYHIK51y3hWI");
  o = e.makeNodePrototype("image", undefined, "r3-bYux1uIL9xWD8");
  r = require("valdi_core/src/Component");
  i = require("valdi_core/src/Style");
  s = require("widgets/res");
  n = require("widgets/src/styles/semanticColors");
  d = {checkbox: new i.Style({width: "24", height: "24", borderRadius: "50%", borderColor: n.SemanticColor.Flat.PURE_BLACK, alignItems: "center", justifyContent: "center"})};
  let Checkbox;
  let <class_fields_init>;
  class Checkbox extends r.Component { ... }
  <proto:Checkbox>.backgroundColor = function <atom:0>;
  <proto:Checkbox>.borderWidth = function <atom:0>;
  <proto:Checkbox>.onRender = function <atom:0>;
  <proto:Checkbox>.onRenderTick = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Checkbox>;
  Checkbox = function <atom:0>;
  // close_loc <class_fields_init>
  Checkbox#1 = function <atom:0>;
  exports.Checkbox = Checkbox#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/button/Checkbox
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
