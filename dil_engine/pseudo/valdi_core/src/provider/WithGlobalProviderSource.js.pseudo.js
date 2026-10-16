// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=68B file=valdi_core/src/provider/WithGlobalProviderSource
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
  this.state = {slotKey: 0};
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=430B file=valdi_core/src/provider/WithGlobalProviderSource
// locals: e, this
// closure: r
function {
  this = this;
  let e;
  e = r.getGlobalProviderSource(this.viewModel.globalProviderSourceId);
  if (!(!e)) goto L_ea;
  throw new Error("Could not resolve global ProviderSource with id ".concat(this.viewModel.globalProviderSourceId));
  if (!((e !== this.state.providerSource))) goto L_1ad;
  this.setState({slotKey: (this.state.slotKey + 1), providerSource: e});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=147B file=valdi_core/src/provider/WithGlobalProviderSource
// locals: this
// closure: e
function {
  this = this;
  e.renderUnnamedSlot(this, undefined, this.state.slotKey.toString());
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=valdi_core/src/provider/WithGlobalProviderSource
// locals: this
function {
  this = this;
  return this.state.providerSource;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=4 bc=234B file=valdi_core/src/provider/WithGlobalProviderSource
// args: require, module, exports
// locals: e, o, r, WithGlobalProviderSource, <class_fields_init>, WithGlobalProviderSource#1
function {
  let WithGlobalProviderSource#1;
  let r;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WithGlobalProviderSource = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = require("../Component");
  r = require("./GlobalProviderSource");
  let WithGlobalProviderSource;
  let <class_fields_init>;
  class WithGlobalProviderSource extends o.StatefulComponent { ... }
  <proto:WithGlobalProviderSource>.onViewModelUpdate = function <atom:0>;
  <proto:WithGlobalProviderSource>.onRender = function <atom:0>;
  <proto:WithGlobalProviderSource>.$getProviderSource = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WithGlobalProviderSource>;
  WithGlobalProviderSource = function <atom:0>;
  // close_loc <class_fields_init>
  WithGlobalProviderSource#1 = function <atom:0>;
  exports.WithGlobalProviderSource = WithGlobalProviderSource#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/provider/WithGlobalProviderSource
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
