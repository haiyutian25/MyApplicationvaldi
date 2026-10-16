// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=78B file=widgets/src/components/inputs/TextInputHandler
// locals: this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.elementRef = new e.ElementRef();
  this.focusNextCreated = false;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=176B file=widgets/src/components/inputs/TextInputHandler
// locals: e, this
function {
  this = this;
  if (!(this.focusNextCreated)) goto L_29;
  return true;
  let e;
  for (const e of this.elementRef.all()) {
    if (!(this.readFocusValueFromElement(e))) continue;
    return true;
    // [栈深重同步 0 -> 3]
  }
  return false;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=285B file=widgets/src/components/inputs/TextInputHandler
// args: e
// locals: e#1, e#2, this
function {
  this = this;
  if (!(e)) goto L_92;
  let e#1;
  e#1 = this.elementRef.single();
  if (!(e#1)) goto L_83;
  goto L_90;
  // [栈深重同步 1 -> 0]
  this.focusNextCreated = true;
  true;
  return;
  let e#2;
  for (const e#2 of this.elementRef.all()) {
    this.applyFocusValueToElement(e#2, false);
  }
  this.focusNextCreated = false;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=164B file=widgets/src/components/inputs/TextInputHandler
// args: e
// locals: this
function {
  this = this;
  if (!(this.focusNextCreated)) goto L_5c;
  this.focusNextCreated = false;
  this.applyFocusValueToElement(e, true);
  return this.elementRef.onElementCreated(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=widgets/src/components/inputs/TextInputHandler
// args: e
// locals: this
function {
  this = this;
  return this.elementRef.onElementDestroyed(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=widgets/src/components/inputs/TextInputHandler
// args: e
// locals: this
function {
  this = this;
  return this.elementRef.setElements(e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=widgets/src/components/inputs/TextInputHandler
// locals: this
function {
  this = this;
  return this.elementRef.all();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=widgets/src/components/inputs/TextInputHandler
// locals: this
function {
  this = this;
  return this.elementRef.single();   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=44B file=widgets/src/components/inputs/TextInputHandler
// args: e, t
function {
  e.setAttribute("focused", t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=50B file=widgets/src/components/inputs/TextInputHandler
// args: e
function {
  if (!((e.getAttribute("focused") == null))) goto L_31;
  e.getAttribute("focused");
  return false;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=10 bc=190B file=widgets/src/components/inputs/TextInputHandler
// args: require, module, exports
// locals: e, TextInputHandler, <class_fields_init>, TextInputHandler#1
function {
  let TextInputHandler#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextInputHandler = undefined;
  e = require("valdi_core/src/ElementRef");
  let TextInputHandler;
  let <class_fields_init>;
  class TextInputHandler extends undefined { ... }
  <proto:TextInputHandler>.isFocused = function <atom:0>;
  <proto:TextInputHandler>.setFocused = function <atom:0>;
  <proto:TextInputHandler>.onElementCreated = function <atom:0>;
  <proto:TextInputHandler>.onElementDestroyed = function <atom:0>;
  <proto:TextInputHandler>.setElements = function <atom:0>;
  <proto:TextInputHandler>.all = function <atom:0>;
  <proto:TextInputHandler>.single = function <atom:0>;
  <proto:TextInputHandler>.applyFocusValueToElement = function <atom:0>;
  <proto:TextInputHandler>.readFocusValueFromElement = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TextInputHandler>;
  TextInputHandler = function <atom:0>;
  // close_loc <class_fields_init>
  TextInputHandler#1 = function <atom:0>;
  exports.TextInputHandler = TextInputHandler#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/inputs/TextInputHandler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
