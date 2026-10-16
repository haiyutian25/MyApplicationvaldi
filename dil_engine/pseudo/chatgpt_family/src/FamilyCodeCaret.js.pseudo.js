// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=chatgpt_family/src/FamilyCodeCaret
// closure: this
function {
  this.laidOut = true;
  this.startIfReady();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=chatgpt_family/src/FamilyCodeCaret
// closure: this
function {
  this.nativeView = true;
  this.startIfReady();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=133B file=chatgpt_family/src/FamilyCodeCaret
// closure: this
function {
  this.nativeView = false;
  this.stop();
  this.caret.setAttribute("opacity", 1);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=3 bc=171B file=chatgpt_family/src/FamilyCodeCaret
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, s
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
  this.caret = new s.ElementRef();
  this.laidOut = false;
  this.nativeView = false;
  this.layoutComplete = function <atom:0>;
  this.viewCreated = function <atom:0>;
  this.viewDestroyed = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=718B file=chatgpt_family/src/FamilyCodeCaret
// locals: this
// closure: t, e, a
function {
  this = this;
  t.beginRender(e, undefined);
  t.setAttributeRef(this.caret);
  if (!(this.viewModel.after)) goto L_ed;
  goto L_ee;
  // [栈深重同步 4 -> 3]
  t.setAttribute("left", 0);
  if (!(this.viewModel.after)) goto L_163;
  goto L_164;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("translationX", -1);
  t.setAttributeFunction("onLayoutComplete", this.layoutComplete);
  t.setAttributeFunction("onViewCreate", this.viewCreated);
  t.setAttributeFunction("onViewDestroy", this.viewDestroyed);
  t.setAttributeStyle("style", a.caret);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=225B file=chatgpt_family/src/FamilyCodeCaret
// locals: this
function {
  this = this;
  if (!(this.viewModel.reduceMotion)) goto L_bb;
  this.stop();
  goto L_e0;
  // [栈深重同步 1 -> 0]
  this.startIfReady();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=chatgpt_family/src/FamilyCodeCaret
// locals: this
function {
  this = this;
  this.stop();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=277B file=chatgpt_family/src/FamilyCodeCaret
// locals: this
function {
  this = this;
  if (!(!this.isDestroyed())) goto L_114;
  if (!(!this.viewModel.reduceMotion)) goto L_114;
  if (!(this.laidOut)) goto L_114;
  if (!(this.nativeView)) goto L_114;
  if (!((undefined === this.animation))) goto L_114;
  this.blink(0);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=99B file=chatgpt_family/src/FamilyCodeCaret
// locals: t, this
function {
  this = this;
  let t;
  t = this.animation;
  this.animation = undefined;
  if (!((t == null))) goto L_3e;
  t;
  goto L_62;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=76B file=chatgpt_family/src/FamilyCodeCaret
// closure: this, t
function {
  return this.caret.setAttribute("opacity", t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=265B file=chatgpt_family/src/FamilyCodeCaret
// args: i
// closure: this, e, t
function {
  if (!((this.animation === e))) goto L_108;
  this.animation = undefined;
  if ((i)) goto L_108;
  if ((this.isDestroyed())) goto L_108;
  if ((!this.nativeView)) goto L_108;
  if ((this.viewModel.reduceMotion)) goto L_108;
  if (!((0 === t))) goto L_104;
  goto L_105;
  // [栈深重同步 3 -> 2]
  this.blink(0);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=4 bc=157B file=chatgpt_family/src/FamilyCodeCaret
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.createAnimation({duration: 0.55, controlPoints: [0.95, 0, 1, 0]}, function <atom:0>);
  this.animation = e;
  e.start().then(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=7 bc=538B file=chatgpt_family/src/FamilyCodeCaret
// args: require, module, exports
// locals: t, e, i, o, s, r, FamilyCodeCaret, <class_fields_init>, FamilyCodeCaret#1, a
function {
  let a;
  let FamilyCodeCaret#1;
  let r;
  let s;
  let o;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FamilyCodeCaret = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("view", ["accessibilityId", "family.onboarding.code.caret"], "Lp64J4xHDDM5C50-");
  i = require("oai_core/src/OAITokens");
  o = require("valdi_core/src/Component");
  s = require("valdi_core/src/ElementRef");
  r = require("valdi_core/src/Style");
  let FamilyCodeCaret;
  let <class_fields_init>;
  class FamilyCodeCaret extends o.Component { ... }
  <proto:FamilyCodeCaret>.onRender = function <atom:0>;
  <proto:FamilyCodeCaret>.onViewModelUpdate = function <atom:0>;
  <proto:FamilyCodeCaret>.onDestroy = function <atom:0>;
  <proto:FamilyCodeCaret>.startIfReady = function <atom:0>;
  <proto:FamilyCodeCaret>.stop = function <atom:0>;
  <proto:FamilyCodeCaret>.blink = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FamilyCodeCaret>;
  FamilyCodeCaret = function <atom:0>;
  // close_loc <class_fields_init>
  FamilyCodeCaret#1 = function <atom:0>;
  exports.FamilyCodeCaret = FamilyCodeCaret#1;
  a = {caret: new r.Style({position: "absolute", top: "50%", translationY: -12, width: 2, height: 24, borderRadius: 1, backgroundColor: i.OAIColor.TextPrimary, touchEnabled: false, accessibilityNavigation: "ignored"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_family/src/FamilyCodeCaret
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
