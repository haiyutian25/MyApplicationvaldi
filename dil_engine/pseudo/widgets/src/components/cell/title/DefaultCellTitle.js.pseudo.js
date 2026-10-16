// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=101B file=widgets/src/components/cell/title/DefaultCellTitle
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, l
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
  this.titleAccessoryRef = new l.ElementRef();
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=156B file=widgets/src/components/cell/title/DefaultCellTitle
// locals: this
function {
  this = this;
  this.titleAccessoryRef.setAttribute("marginRight", 6);
  this.titleAccessoryRef.setAttribute("marginLeft", 5);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=0 bc=1120B file=widgets/src/components/cell/title/DefaultCellTitle
// locals: i, l, o, this
// closure: e, t, s, r
function {
  this = this;
  let o;
  let l;
  let i;
  if (!((this.viewModel == null))) goto L_33;
  this.viewModel;
  i = {};
  l = i.title;
  if (!((i.numTitleLines == null))) goto L_83;
  i.numTitleLines;
  o = 1;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", s.style.container.title);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", s.style.label.title);
  e.setAttributeString("font", i.font);
  e.setAttributeString("color", i.textColor);
  e.setAttributeString("backgroundColor", this.viewModel.backgroundColor);
  e.setAttributeNumber("numberOfLines", o);
  e.setAttribute("value", l);
  e.setAttributes(i.labelStyleOverride);
  e.endRender();
  e.renderNamedSlot("accessory-title", this, this.titleAccessoryRef);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=3 bc=360B file=widgets/src/components/cell/title/DefaultCellTitle
// args: require, module, exports
// locals: e, t, r, i, l, s, DefaultCellTitle, <class_fields_init>, DefaultCellTitle#1
function {
  let DefaultCellTitle#1;
  let s;
  let l;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DefaultCellTitle = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "bevQMn4EI-zVomAy");
  r = e.makeNodePrototype("label", ["accessibilityId", "result-title"], "GywkhoLnz9lClfOo");
  i = require("valdi_core/src/Component");
  l = require("valdi_core/src/ElementRef");
  s = require("../style");
  let DefaultCellTitle;
  let <class_fields_init>;
  class DefaultCellTitle extends i.Component { ... }
  <proto:DefaultCellTitle>.onCreate = function <atom:0>;
  <proto:DefaultCellTitle>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DefaultCellTitle>;
  DefaultCellTitle = function <atom:0>;
  // close_loc <class_fields_init>
  DefaultCellTitle#1 = function <atom:0>;
  exports.DefaultCellTitle = DefaultCellTitle#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/cell/title/DefaultCellTitle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
