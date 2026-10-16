// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=valdi_core/src/FunctionComponent
// locals: this
function {
  this = this;
  this.viewModel.render();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_core/src/FunctionComponent
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

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=206B file=valdi_core/src/FunctionComponent
// args: require, module, exports
// locals: e, o, FunctionComponent, <class_fields_init>, FunctionComponent#1
function {
  let FunctionComponent#1;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FunctionComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = require("valdi_core/src/Component");
  let FunctionComponent;
  let <class_fields_init>;
  class FunctionComponent extends o.Component { ... }
  <proto:FunctionComponent>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FunctionComponent>;
  FunctionComponent = function <atom:0>;
  // close_loc <class_fields_init>
  FunctionComponent#1 = function <atom:0>;
  exports.FunctionComponent = FunctionComponent#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/FunctionComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
