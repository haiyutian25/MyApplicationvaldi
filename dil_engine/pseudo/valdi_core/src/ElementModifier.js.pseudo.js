// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=101B file=valdi_core/src/ElementModifier
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, n
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
  this.elementRef = new n.ElementRef();
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=231B file=valdi_core/src/ElementModifier
// locals: e, t, this
// closure: i
function {
  this = this;
  let e;
  for (const e of this.viewModel) {
    let t;
    t = e;
    if (!(("string" == typeof t))) goto L_6b;
    if ((i.includes(t))) goto L_de;
    this.elementRef.setAttribute(t, this.viewModel[t]);
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=77B file=valdi_core/src/ElementModifier
// locals: this
// closure: e
function {
  this = this;
  e.renderUnnamedSlot(this, this.elementRef);
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=3 bc=239B file=valdi_core/src/ElementModifier
// args: require, module, exports
// locals: e, t, n, i, ElementModifier, <class_fields_init>, ElementModifier#1
function {
  let ElementModifier#1;
  let i;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ElementModifier = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = require("./Component");
  n = require("./ElementRef");
  i = ["children"];
  let ElementModifier;
  let <class_fields_init>;
  class ElementModifier extends t.Component { ... }
  <proto:ElementModifier>.onViewModelUpdate = function <atom:0>;
  <proto:ElementModifier>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ElementModifier>;
  ElementModifier = function <atom:0>;
  // close_loc <class_fields_init>
  ElementModifier#1 = function <atom:0>;
  exports.ElementModifier = ElementModifier#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/ElementModifier
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
