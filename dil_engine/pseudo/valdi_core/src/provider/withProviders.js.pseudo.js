// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=70B file=valdi_core/src/provider/withProviders
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
  this.providersValues = new Array();
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=86B file=valdi_core/src/provider/withProviders
// locals: this
// closure: i, t
function {
  this = this;
  this.providersValues = i.map(t.resolveProviderValue);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=353B file=valdi_core/src/provider/withProviders
// locals: this
// closure: e, s, r
function {
  this = this;
  e.beginComponent(s, r, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  e.setViewModelProperty("providersValues", this.providersValues);
  e.setViewModelProperty("children", this.viewModel.children);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=5 cpool=3 bc=74B file=valdi_core/src/provider/withProviders
// args: s
// locals: ProvidersConsumptionComponent, <class_fields_init>
// closure: i, t, e, r, o
function {
  let ProvidersConsumptionComponent;
  let <class_fields_init>;
  class ProvidersConsumptionComponent extends o.Component { ... }
  <proto:ProvidersConsumptionComponent>.onCreate = function <atom:0>;
  <proto:ProvidersConsumptionComponent>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ProvidersConsumptionComponent>;
  ProvidersConsumptionComponent = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn i  args=1 vars=1 closure=4 cpool=1 bc=7B file=valdi_core/src/provider/withProviders
// args: i
// closure: t, e, r, o
function {
  i = ...0;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/provider/withProviders
// args: e
function {
  return e.getProviderKey();   // tail call
}

// fn s  args=1 vars=1 closure=1 cpool=1 bc=56B file=valdi_core/src/provider/withProviders
// args: e
// closure: i
function {
  e = ...0;
  // append([], 0, e.map(function <atom:0>))
  e.map(function <atom:0>);
  return i.apply(undefined, []);
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=226B file=valdi_core/src/provider/withProviders
// args: require, module, exports
// locals: e, r, o, t, i, s
function {
  i = function i;
  s = function s;
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.withProviderKeys = undefined;
  exports.withProviders = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = e.makeComponentPrototype(undefined, "tZazzKI96uBby6BB");
  o = require("../Component");
  t = require("./resolveProviderValue");
  exports.withProviderKeys = i;
  exports.withProviders = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/provider/withProviders
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
