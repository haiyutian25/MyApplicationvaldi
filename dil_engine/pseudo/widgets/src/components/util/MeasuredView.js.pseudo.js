// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=widgets/src/components/util/MeasuredView
// args: e
// closure: this
function {
  return this.setState(e);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=63B file=widgets/src/components/util/MeasuredView
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
  this.onLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=392B file=widgets/src/components/util/MeasuredView
// locals: r, o, this
// closure: e, t, s
function {
  this = this;
  let o;
  let r;
  if (((undefined === undefined))) goto L_43;
  r = <to_object>(undefined).children;
  o = {};
  <to_object>(undefined);
  {children: null};
  goto L_68;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  e.beginRender(t, undefined);
  e.setAttributes(o);
  e.setAttributeFunction("onLayout", this.onLayout);
  if (!(r)) goto L_15f;
  s.whenDefined(this.state, r);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=273B file=widgets/src/components/util/MeasuredView
// args: require, module, exports
// locals: e, t, r, s, MeasuredView, <class_fields_init>, MeasuredView#1
function {
  let MeasuredView#1;
  let s;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MeasuredView = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "nHEOB7azgpXAD45q");
  r = require("valdi_core/src/Component");
  s = require("valdi_core/src/utils/When");
  let MeasuredView;
  let <class_fields_init>;
  class MeasuredView extends r.StatefulComponent { ... }
  <proto:MeasuredView>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MeasuredView>;
  MeasuredView = function <atom:0>;
  // close_loc <class_fields_init>
  MeasuredView#1 = function <atom:0>;
  exports.MeasuredView = MeasuredView#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/util/MeasuredView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
