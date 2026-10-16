// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=widgets/src/components/inputs/TextFieldHandler
// args: e
// locals: this
function {
  this = this;
  return this.elementRef.setAttribute("value", e);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/inputs/TextFieldHandler
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

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=161B file=widgets/src/components/inputs/TextFieldHandler
// args: require, module, exports
// locals: e, TextFieldHandler, <class_fields_init>, TextFieldHandler#1
function {
  let TextFieldHandler#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextFieldHandler = undefined;
  e = require("./TextInputHandler");
  let TextFieldHandler;
  let <class_fields_init>;
  class TextFieldHandler extends e.TextInputHandler { ... }
  <proto:TextFieldHandler>.setValue = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TextFieldHandler>;
  TextFieldHandler = function <atom:0>;
  // close_loc <class_fields_init>
  TextFieldHandler#1 = function <atom:0>;
  exports.TextFieldHandler = TextFieldHandler#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/inputs/TextFieldHandler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
