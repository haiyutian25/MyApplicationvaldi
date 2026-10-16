// fn <atom:0>  args=0 vars=5 closure=3 cpool=0 bc=521B file=widgets/src/components/pickers/IndexPicker
// locals: r, s, n, i, this
// closure: o, e, t
function {
  this = this;
  let i;
  let n;
  let s;
  let r;
  r = this.viewModel;
  s = r.style;
  n = r.labels;
  if (!((r.index == null))) goto L_cb;
  r.index;
  i = o.clamp(0, 0, (n.length - 1));
  e.beginRender(t, undefined);
  e.setAttributeFunction("onChange", r.onChange);
  e.setAttributeNumber("index", i);
  e.setAttribute("labels", n);
  e.setAttributeStyle("style", s);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/pickers/IndexPicker
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

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=295B file=widgets/src/components/pickers/IndexPicker
// args: require, module, exports
// locals: e, t, r, o, IndexPicker, <class_fields_init>, IndexPicker#1
function {
  let IndexPicker#1;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IndexPicker = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["iosClass", "SCComposerIndexPicker", "androidClass", "com.snap.composer.views.ComposerIndexPicker"], "izKVy23-PHCjWjxd");
  r = require("valdi_core/src/Component");
  o = require("foundation/src/number");
  let IndexPicker;
  let <class_fields_init>;
  class IndexPicker extends r.Component { ... }
  <proto:IndexPicker>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:IndexPicker>;
  IndexPicker = function <atom:0>;
  // close_loc <class_fields_init>
  IndexPicker#1 = function <atom:0>;
  exports.IndexPicker = IndexPicker#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/pickers/IndexPicker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
