// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=366B file=dil_widgets/src/widgets/Spacer
// locals: r, this
// closure: e, t, s
function {
  this = this;
  let r;
  if (!((this.viewModel.minSize == null))) goto L_4e;
  this.viewModel.minSize;
  r = 0;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", s.spacer);
  e.setAttributes(this.autoSpacingAttributes);
  e.setAttribute("flexBasis", r);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Spacer
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

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=430B file=dil_widgets/src/widgets/Spacer
// args: require, module, exports
// locals: e, t, r, i, Spacer, <class_fields_init>, Spacer#1, s
function {
  let s;
  let Spacer#1;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Spacer = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "rxNzaUAb6fAkKlu1");
  r = require("dil_core/src/DILComponent");
  i = require("valdi_core/src/Style");
  let Spacer;
  let <class_fields_init>;
  class Spacer extends r.DILComponent { ... }
  <proto:Spacer>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Spacer>;
  Spacer = function <atom:0>;
  // close_loc <class_fields_init>
  Spacer#1 = function <atom:0>;
  exports.Spacer = Spacer#1;
  Spacer#1.dilV2Properties = ["minSize"];
  // append([], 0, r.DIL_COMPONENT_PROPERTIES)
  [][r.DIL_COMPONENT_PROPERTIES] = "minSize";
  ("minSize" ++);
  Spacer#1.properties = [];
  s = {spacer: new i.Style({flexGrow: 1, flexShrink: 1, minWidth: 0, minHeight: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Spacer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
