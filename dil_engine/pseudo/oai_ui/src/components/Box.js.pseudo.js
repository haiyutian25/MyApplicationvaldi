// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=331B file=oai_ui/src/components/Box
// locals: r, this
// closure: o, e, t, s
function {
  this = this;
  let r;
  r = {};
  o.applyOAIBoxAttributes(r, this.viewModel);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", s.box);
  e.setAttributes(r);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/Box
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=373B file=oai_ui/src/components/Box
// args: require, module, exports
// locals: e, t, o, r, i, Box, <class_fields_init>, Box#1, s
function {
  let s;
  let Box#1;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Box = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "Sai76MaVk4DhgVYb");
  o = require("oai_core/src/OAIAttributes");
  r = require("valdi_core/src/Component");
  i = require("valdi_core/src/Style");
  let Box;
  let <class_fields_init>;
  class Box extends r.Component { ... }
  <proto:Box>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Box>;
  Box = function <atom:0>;
  // close_loc <class_fields_init>
  Box#1 = function <atom:0>;
  exports.Box = Box#1;
  s = {box: new i.Style({alignItems: "stretch", flexDirection: "column", flexShrink: 0, overflow: "visible"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Box
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
