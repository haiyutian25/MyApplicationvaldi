// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=442B file=valdi_core/src/debugging/DebugConsoleButton
// locals: this
// closure: e, t, d, o
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeFunction("onTap", this.viewModel.onTap);
  e.setAttributeStyle("style", d);
  e.beginRender(o, undefined);
  e.setAttributeString("value", this.viewModel.text);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_core/src/debugging/DebugConsoleButton
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=430B file=valdi_core/src/debugging/DebugConsoleButton
// args: require, module, exports
// locals: e, t, o, n, r, d, DebugButton, <class_fields_init>, DebugButton#1
function {
  let DebugButton#1;
  let d;
  let r;
  let n;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DebugButton = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "8MpUDRx3qfviekhd");
  o = e.makeNodePrototype("label", ["font", "system-bold 12"], "yQ-lhYkQVYQgLYRN");
  n = require("../Component");
  r = require("../Style");
  d = new r.Style({backgroundColor: "white", padding: 8, borderRadius: 12, justifyContent: "center", boxShadow: "0 0 3 rgba(0, 0, 0, 0.15)"});
  let DebugButton;
  let <class_fields_init>;
  class DebugButton extends n.Component { ... }
  <proto:DebugButton>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DebugButton>;
  DebugButton = function <atom:0>;
  // close_loc <class_fields_init>
  DebugButton#1 = function <atom:0>;
  exports.DebugButton = DebugButton#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/DebugConsoleButton
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
