// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=557B file=oai_ui/src/components/Spacer
// locals: this
// closure: e, t, o
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", o.spacer);
  e.setAttributeNumber("flexGrow", this.resolvedFlex);
  if (!((undefined === this.resolvedFlex))) goto L_120;
  goto L_121;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("flexShrink", 1);
  e.setAttribute("height", this.viewModel.height);
  e.setAttribute("width", this.viewModel.width);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=223B file=oai_ui/src/components/Spacer
// locals: this
function {
  this = this;
  if (!((this.viewModel.flex == null))) goto L_de;
  this.viewModel.flex;
  if (!((undefined === this.viewModel.height))) goto L_dd;
  if (!((undefined === this.viewModel.width))) goto L_dd;
  return 1;
  return undefined;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/Spacer
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

// fn <atom:0>  args=3 vars=11 closure=0 cpool=3 bc=339B file=oai_ui/src/components/Spacer
// args: require, module, exports
// locals: e, t, r, i, Spacer, <class_fields_init>, Spacer#1, o
function {
  let o;
  let Spacer#1;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Spacer = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "ClNYhdoMFTEz49gd");
  r = require("valdi_core/src/Component");
  i = require("valdi_core/src/Style");
  let Spacer;
  let <class_fields_init>;
  class Spacer extends r.Component { ... }
  <proto:Spacer>.onRender = function <atom:0>;
  <proto:Spacer>.resolvedFlex = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Spacer>;
  Spacer = function <atom:0>;
  // close_loc <class_fields_init>
  Spacer#1 = function <atom:0>;
  exports.Spacer = Spacer#1;
  o = {spacer: new i.Style({flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Spacer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
