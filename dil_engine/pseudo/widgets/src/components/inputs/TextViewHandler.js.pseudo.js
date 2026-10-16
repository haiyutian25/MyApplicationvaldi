// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=widgets/src/components/inputs/TextViewHandler
// args: e
// locals: this
function {
  this = this;
  return this.elementRef.setAttribute("value", e);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/inputs/TextViewHandler
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

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=161B file=widgets/src/components/inputs/TextViewHandler
// args: require, module, exports
// locals: e, TextViewHandler, <class_fields_init>, TextViewHandler#1
function {
  let TextViewHandler#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextViewHandler = undefined;
  e = require("./TextInputHandler");
  let TextViewHandler;
  let <class_fields_init>;
  class TextViewHandler extends e.TextInputHandler { ... }
  <proto:TextViewHandler>.setValue = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TextViewHandler>;
  TextViewHandler = function <atom:0>;
  // close_loc <class_fields_init>
  TextViewHandler#1 = function <atom:0>;
  exports.TextViewHandler = TextViewHandler#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/inputs/TextViewHandler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
