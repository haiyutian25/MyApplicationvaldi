// fn d  args=1 vars=1 closure=2 cpool=0 bc=42B file=valdi_core/src/provider/createProvider
// args: e
// closure: n, t
function {
  return n(t.createProviderKey(e));   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=68B file=valdi_core/src/provider/createProvider
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
  this.state = {providerValueKey: 0};
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=150B file=valdi_core/src/provider/createProvider
// locals: e, this, <home_object>
// closure: i, o
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  super["onCreate"].call(this);
  e = i.resolveProviderSource();
  if ((e)) goto L_6e;
  e = new o.ProviderSourceHead();
  new o.ProviderSourceHead();
  this.startingProviderSource = e;
  this.state = {providerValueKey: 0, providerSource: e};
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=295B file=valdi_core/src/provider/createProvider
// locals: e, r, o, this
// closure: t
function {
  this = this;
  let o;
  let r;
  let e;
  e = this.startingProviderSource;
  if (((undefined === undefined))) goto L_5a;
  r = <to_object>(undefined).providerValueKey;
  <to_object>(undefined);
  goto L_7f;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_33;
  // [栈深重同步 1 -> 0]
  o = e.withValue(t, this.viewModel.value);
  r = (r ++);
  this.setState({providerValueKey: (r ++), providerSource: o});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=valdi_core/src/provider/createProvider
// locals: this
function {
  this = this;
  return this.state.providerSource;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=147B file=valdi_core/src/provider/createProvider
// locals: this
// closure: e
function {
  this = this;
  e.renderUnnamedSlot(this, undefined, this.state.providerValueKey.toString());
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=valdi_core/src/provider/createProvider
// closure: t
function {
  return t;
}

// fn n  args=1 vars=4 closure=4 cpool=6 bc=239B file=valdi_core/src/provider/createProvider
// args: t
// locals: Provider, <class_fields_init>, Provider#1
// closure: i, o, e, r
function {
  let Provider#1;
  let Provider;
  let <class_fields_init>;
  class Provider extends r.StatefulComponent { ... }
  <proto:Provider>.onCreate = function <atom:0>;
  <proto:Provider>.onViewModelUpdate = function <atom:0>;
  <proto:Provider>.$getProviderSource = function <atom:0>;
  <proto:Provider>.onRender = function <atom:0>;
  function <atom:0>.getProviderKey = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Provider>;
  Provider = function <atom:0>;
  // close_loc <class_fields_init>
  Provider#1 = function <atom:0>;
  Object.defineProperty(Provider#1, "name", {value: "".concat(t.keyName, "Provider")});
  return Provider#1;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=200B file=valdi_core/src/provider/createProvider
// args: require, module, exports
// locals: e, r, t, o, i, d, n
function {
  d = function d;
  n = function n;
  let i;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createProviderComponentWithKeyName = undefined;
  exports.createProviderComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = require("../Component");
  t = require("./ProviderKey");
  o = require("./ProviderSource");
  i = require("./resolveProviderSource");
  exports.createProviderComponentWithKeyName = d;
  exports.createProviderComponent = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/provider/createProvider
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
