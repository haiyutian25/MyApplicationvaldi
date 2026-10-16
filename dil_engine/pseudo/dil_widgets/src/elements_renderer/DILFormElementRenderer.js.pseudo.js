// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=95B file=dil_widgets/src/elements_renderer/DILFormElementRenderer
// locals: this.active_func, new.target, this
// closure: r, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("form", r.Form);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("form", r.Form);
  this.renderStates = [];
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=92B file=dil_widgets/src/elements_renderer/DILFormElementRenderer
// args: e, r
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, r);
  this.renderStates.push({});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=92B file=dil_widgets/src/elements_renderer/DILFormElementRenderer
// args: e, r
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["setProp"].call(this, e, r);
  if (!(("onSubmit" === e))) goto L_5b;
  if (!(("function" == typeof r))) goto L_5b;
  this.currentRenderState().onSubmit = r;
  r;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=76B file=dil_widgets/src/elements_renderer/DILFormElementRenderer
// closure: t, s, r
function {
  return t.withDILFormRenderState(s, r.render);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=1 bc=222B file=dil_widgets/src/elements_renderer/DILFormElementRenderer
// args: r, n
// locals: s, this, <home_object>
// closure: t, e
function {
  <home_object> = <special_object 4>;
  this = this;
  let s;
  if (!((0 === r.count))) goto L_2f;
  return;
  s = this.currentRenderState();
  super["setChildren"].call(this, {count: r.count, render: e.createReusableCallback(function <atom:0>), renderSelected: r.renderSelected}, n);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=111B file=dil_widgets/src/elements_renderer/DILFormElementRenderer
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  try { // catch -> L_20
  super["endRender"].call(this);
  <?>;
  // gosub (finally 块) 38
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 38
  throw <?>;
  this.renderStates.pop();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=104B file=dil_widgets/src/elements_renderer/DILFormElementRenderer
// locals: e, this
function {
  this = this;
  let e;
  e = this.renderStates[(this.renderStates.length - 1)];
  if (!((undefined === e))) goto L_64;
  throw new Error("DIL v2 form element rendered without an active state.");
  return e;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=6 bc=229B file=dil_widgets/src/elements_renderer/DILFormElementRenderer
// args: require, module, exports
// locals: e, r, t, n, DILFormElementRenderer, <class_fields_init>, DILFormElementRenderer#1
function {
  let DILFormElementRenderer#1;
  let n;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILFormElementRenderer = undefined;
  e = require("valdi_core/src/utils/Callback");
  r = require("../widgets/Form");
  t = require("../widgets/FormRenderState");
  n = require("./DILComponentElementRenderer");
  let DILFormElementRenderer;
  let <class_fields_init>;
  class DILFormElementRenderer extends n.DILComponentElementRenderer { ... }
  <proto:DILFormElementRenderer>.beginRender = function <atom:0>;
  <proto:DILFormElementRenderer>.setProp = function <atom:0>;
  <proto:DILFormElementRenderer>.setChildren = function <atom:0>;
  <proto:DILFormElementRenderer>.endRender = function <atom:0>;
  <proto:DILFormElementRenderer>.currentRenderState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILFormElementRenderer>;
  DILFormElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILFormElementRenderer#1 = function <atom:0>;
  exports.DILFormElementRenderer = DILFormElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILFormElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
