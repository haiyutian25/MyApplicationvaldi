// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=127B file=valdi_core/src/Lazy
// args: t
// closure: this
function {
  if (!(!this.state.wasEverVisible)) goto L_7e;
  if (!(t)) goto L_7e;
  this.setState({wasEverVisible: true});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=83B file=valdi_core/src/Lazy
// locals: this, this.active_func, new.target, arguments
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
  this.state = {wasEverVisible: false};
  this.onVisibilityChanged = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=114B file=valdi_core/src/Lazy
// locals: this
// closure: t
function {
  this = this;
  if (!(this.state.wasEverVisible)) goto L_71;
  t.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=2 cpool=0 bc=1090B file=valdi_core/src/Lazy
// locals: i, s, r, o, this
// closure: t, e
function {
  this = this;
  let o;
  let r;
  let s;
  let i;
  i = this.viewModel;
  s = i.estimatedWidth;
  r = i.estimatedHeight;
  if (!((i.lazyLayout == null))) goto L_b4;
  i.lazyLayout;
  if (!((undefined === s))) goto L_b4;
  o = (undefined === r);
  t.beginRender(e, undefined);
  t.setAttributeRef(i.elementRef);
  t.setAttribute("width", i.width);
  t.setAttribute("height", i.height);
  t.setAttribute("left", i.left);
  t.setAttribute("top", i.top);
  t.setAttribute("right", i.right);
  t.setAttribute("bottom", i.bottom);
  t.setAttributeNumber("estimatedWidth", s);
  t.setAttributeNumber("estimatedHeight", r);
  t.setAttribute("lazyLayout", o);
  t.setAttributeFunction("onVisibilityChanged", this.onVisibilityChanged);
  this.renderContents();
  t.endRender();
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=269B file=valdi_core/src/Lazy
// args: require, module, exports
// locals: t, e, i, Lazy, <class_fields_init>, Lazy#1
function {
  let Lazy#1;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Lazy = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("layout", undefined, "d2Bb4fCkYa3HRep4");
  i = require("valdi_core/src/Component");
  let Lazy;
  let <class_fields_init>;
  class Lazy extends i.StatefulComponent { ... }
  <proto:Lazy>.renderContents = function <atom:0>;
  <proto:Lazy>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Lazy>;
  Lazy = function <atom:0>;
  // close_loc <class_fields_init>
  Lazy#1 = function <atom:0>;
  exports.Lazy = Lazy#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/Lazy
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
