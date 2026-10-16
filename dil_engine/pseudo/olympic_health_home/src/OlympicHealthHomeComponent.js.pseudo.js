// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=98B file=olympic_health_home/src/OlympicHealthHomeComponent
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, i
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
  this.viewSessionId = i.createOlympicViewSessionId();
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=161B file=olympic_health_home/src/OlympicHealthHomeComponent
// locals: this
// closure: i
function {
  this = this;
  if (!((this.context == null))) goto L_50;
  this.context;
  goto L_71;
  i.trackOlympicNavigationPageViewed(undefined.host, "health_home", "healthHome", this.viewSessionId);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=84B file=olympic_health_home/src/OlympicHealthHomeComponent
// closure: e, o
function {
  e.beginRender(o, undefined);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=3 bc=281B file=olympic_health_home/src/OlympicHealthHomeComponent
// args: require, module, exports
// locals: e, o, t, i, OlympicHealthHomeComponent, <class_fields_init>, OlympicHealthHomeComponent#1
function {
  let OlympicHealthHomeComponent#1;
  let i;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OlympicHealthHomeComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeNodePrototype("view", undefined, "dO75XQ_KGDtMRigC");
  t = require("valdi_core/src/Component");
  i = require("olympic_analytics/src/OlympicNavigationAnalytics");
  let OlympicHealthHomeComponent;
  let <class_fields_init>;
  class OlympicHealthHomeComponent extends t.Component { ... }
  <proto:OlympicHealthHomeComponent>.onCreate = function <atom:0>;
  <proto:OlympicHealthHomeComponent>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OlympicHealthHomeComponent>;
  OlympicHealthHomeComponent = function <atom:0>;
  // close_loc <class_fields_init>
  OlympicHealthHomeComponent#1 = function <atom:0>;
  exports.OlympicHealthHomeComponent = OlympicHealthHomeComponent#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=olympic_health_home/src/OlympicHealthHomeComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
