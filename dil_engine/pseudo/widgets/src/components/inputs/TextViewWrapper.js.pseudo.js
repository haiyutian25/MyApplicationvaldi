// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=3513B file=widgets/src/components/inputs/TextViewWrapper
// locals: i, this
// closure: t, e
function {
  this = this;
  let i;
  i = this.viewModel;
  t.beginRender(e, undefined);
  t.setAttributeRef(this.textInputHandler);
  t.setAttributeFunction("onEditBegin", this.onEditBegin);
  t.setAttributeFunction("onEditEnd", this.onEditEnd);
  t.setAttributeFunction("onLayout", this.onLayout);
  t.setAttribute("style", i.style);
  t.setAttributeString("placeholder", i.placeholder);
  t.setAttributeString("placeholderColor", i.placeholderColor);
  t.setAttribute("value", i.value);
  t.setAttributeString("font", i.font);
  t.setAttributeString("color", i.color);
  t.setAttributeString("tintColor", i.tintColor);
  t.setAttributeFunction("onChange", i.onChange);
  t.setAttributeFunction("onWillChange", i.onWillChange);
  t.setAttributeFunction("onReturn", i.onReturn);
  t.setAttributeFunction("onWillDelete", i.onWillDelete);
  t.setAttribute("selectTextOnFocus", i.selectTextOnFocus);
  t.setAttributeString("textAlign", i.textAlign);
  t.setAttribute("width", i.width);
  t.setAttribute("minWidth", i.minWidth);
  t.setAttribute("maxWidth", i.maxWidth);
  t.setAttribute("height", i.height);
  t.setAttribute("minHeight", i.minHeight);
  t.setAttribute("maxHeight", i.maxHeight);
  t.setAttributeNumber("flexGrow", i.flexGrow);
  t.setAttributeNumber("flexShrink", i.flexShrink);
  t.setAttribute("borderRadius", i.borderRadius);
  t.setAttributeString("backgroundColor", i.backgroundColor);
  t.setAttributeNumber("opacity", i.opacity);
  t.setAttributeString("accessibilityId", i.accessibilityId);
  t.setAttributeString("accessibilityLabel", i.accessibilityLabel);
  t.setAttributeString("autocapitalization", i.autocapitalization);
  t.setAttributeString("autocorrection", i.autocorrection);
  t.setAttributeNumber("characterLimit", i.characterLimit);
  t.setAttributeString("returnType", i.returnType);
  t.setAttribute("closesWhenReturnKeyPressed", i.closesWhenReturnKeyPressed);
  t.setAttributeNumber("touchAreaExtension", i.touchAreaExtension);
  t.setAttribute("enabled", i.enabled);
  t.setAttributeString("keyboardAppearance", i.keyboardAppearance);
  t.setAttributeString("textGravity", i.textGravity);
  t.setAttribute("selection", i.selection);
  t.setAttributeFunction("onSelectionChange", i.onSelectionChange);
  t.setAttributeString("textShadow", i.textShadow);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/inputs/TextViewWrapper
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

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=261B file=widgets/src/components/inputs/TextViewWrapper
// args: require, module, exports
// locals: t, e, i, TextViewWrapper, <class_fields_init>, TextViewWrapper#1
function {
  let TextViewWrapper#1;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextViewWrapper = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("textview", undefined, "eKDc1UGB8t6lq5DY");
  i = require("./TextInputWrapper");
  let TextViewWrapper;
  let <class_fields_init>;
  class TextViewWrapper extends i.TextInputWrapper { ... }
  <proto:TextViewWrapper>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TextViewWrapper>;
  TextViewWrapper = function <atom:0>;
  // close_loc <class_fields_init>
  TextViewWrapper#1 = function <atom:0>;
  exports.TextViewWrapper = TextViewWrapper#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/inputs/TextViewWrapper
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
