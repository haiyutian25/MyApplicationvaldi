// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=911B file=valdi_ui/src/components/NativeConfirmationDialog
// locals: this
// closure: e, t
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", this.viewModel.style);
  e.setAttribute("actions", this.viewModel.actions);
  e.setAttribute("isPresented", this.viewModel.isPresented);
  e.setAttributeString("message", this.viewModel.message);
  e.setAttributeFunction("onAction", this.viewModel.onAction);
  e.setAttributeFunction("onDismiss", this.viewModel.onDismiss);
  e.setAttributeString("title", this.viewModel.title);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_ui/src/components/NativeConfirmationDialog
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

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=273B file=valdi_ui/src/components/NativeConfirmationDialog
// args: require, module, exports
// locals: e, t, i, NativeConfirmationDialog, <class_fields_init>, NativeConfirmationDialog#1
function {
  let NativeConfirmationDialog#1;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NativeConfirmationDialog = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["iosClass", "ValdiNativeConfirmationDialog"], "y6QtZ2tQWhSa8Paz");
  i = require("valdi_core/src/Component");
  let NativeConfirmationDialog;
  let <class_fields_init>;
  class NativeConfirmationDialog extends i.Component { ... }
  <proto:NativeConfirmationDialog>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeConfirmationDialog>;
  NativeConfirmationDialog = function <atom:0>;
  // close_loc <class_fields_init>
  NativeConfirmationDialog#1 = function <atom:0>;
  exports.NativeConfirmationDialog = NativeConfirmationDialog#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/NativeConfirmationDialog
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
