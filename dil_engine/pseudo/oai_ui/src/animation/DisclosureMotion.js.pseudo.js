// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=oai_ui/src/animation/DisclosureMotion
// args: e
// closure: this
function {
  this.reduced = e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=47B file=oai_ui/src/animation/DisclosureMotion
// closure: i
function {
  if (!((i == null))) goto L_a;
  i;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.unsubscribe();
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=2 bc=199B file=oai_ui/src/animation/DisclosureMotion
// args: e
// locals: i, this
// closure: <class_fields_init>, t
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let i;
  this.owner = e;
  this.reduced = true;
  if (!((t.getReduceMotion(e.context) == null))) goto L_78;
  t.getReduceMotion(e.context);
  goto L_9e;
  i = undefined.subscribe(function <atom:0>);
  e.registerDisposable(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=117B file=oai_ui/src/animation/DisclosureMotion
// args: e
// locals: this
// closure: i
function {
  this = this;
  if (!(this.reduced)) goto L_2a;
  goto L_74;
  // [栈深重同步 1 -> 0]
  this.owner.animate(i, e);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=262B file=oai_ui/src/animation/DisclosureMotion
// args: require, module, exports
// locals: e, t, DisclosureMotion, <class_fields_init>, DisclosureMotion#1, i
function {
  let i;
  let DisclosureMotion#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DisclosureMotion = undefined;
  e = require("valdi_core/src/AnimationOptions");
  t = require("valdi_ui/src/ReduceMotion");
  let DisclosureMotion;
  let <class_fields_init>;
  class DisclosureMotion extends undefined { ... }
  <proto:DisclosureMotion>.run = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DisclosureMotion>;
  DisclosureMotion = function <atom:0>;
  // close_loc <class_fields_init>
  DisclosureMotion#1 = function <atom:0>;
  exports.DisclosureMotion = DisclosureMotion#1;
  i = {duration: 0.24, curve: e.AnimationCurve.EaseInOut, beginFromCurrentState: true, appearanceBehavior: {enterAttributes: {opacity: 0}, exitAttributes: {opacity: 0}}};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/animation/DisclosureMotion
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
