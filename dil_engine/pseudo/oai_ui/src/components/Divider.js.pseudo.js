// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=950B file=oai_ui/src/components/Divider
// locals: r, this
// closure: e, t, s, i
function {
  this = this;
  let r;
  r = (true === this.viewModel.vertical);
  e.beginRender(t, undefined);
  if (!(r)) goto L_cc;
  goto L_f0;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", s.horizontal);
  if (!((this.viewModel.color == null))) goto L_1aa;
  this.viewModel.color;
  e.setAttributeString("backgroundColor", i.OAIColor.BorderSubtle);
  if (!(r)) goto L_1df;
  goto L_222;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("marginBottom", this.viewModel.inset);
  if (!(r)) goto L_299;
  goto L_29a;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("marginLeft", undefined);
  if (!(r)) goto L_311;
  goto L_312;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("marginRight", undefined);
  if (!(r)) goto L_347;
  goto L_38a;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("marginTop", this.viewModel.inset);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/Divider
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=415B file=oai_ui/src/components/Divider
// args: require, module, exports
// locals: e, t, i, r, o, Divider, <class_fields_init>, Divider#1, s
function {
  let s;
  let Divider#1;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Divider = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "zGCLg62rP9Gh_wnQ");
  i = require("oai_core/src/OAITokens");
  r = require("valdi_core/src/Component");
  o = require("valdi_core/src/Style");
  let Divider;
  let <class_fields_init>;
  class Divider extends r.Component { ... }
  <proto:Divider>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Divider>;
  Divider = function <atom:0>;
  // close_loc <class_fields_init>
  Divider#1 = function <atom:0>;
  exports.Divider = Divider#1;
  s = {horizontal: new o.Style({height: 1, width: "100%"}), vertical: new o.Style({height: "100%", width: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Divider
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
