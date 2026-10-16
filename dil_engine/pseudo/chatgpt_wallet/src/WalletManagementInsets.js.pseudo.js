// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=68B file=chatgpt_wallet/src/WalletManagementInsets
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
  this.state = {bottomInset: 0};
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_wallet/src/WalletManagementInsets
function {
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=82B file=chatgpt_wallet/src/WalletManagementInsets
// args: <atom:0>
// locals: e
// closure: this
function {
  e = <to_object>(<atom:0>).bottomInset;
  <to_object>(<atom:0>);
  return this.setState({bottomInset: e});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=132B file=chatgpt_wallet/src/WalletManagementInsets
// closure: e, this
function {
  if (!(e.isLoggingEnabled)) goto L_56;
  console.warn("Wallet safe-area observation failed");
  this.setState({bottomInset: 0});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=3 bc=719B file=chatgpt_wallet/src/WalletManagementInsets
// locals: t, o, this
// closure: e, v, l, n, r
function {
  this = this;
  let o;
  let t;
  t = this.context.rootSafeArea;
  if (!((undefined === t))) goto L_54;
  return;
  o = this.context.navigator;
  if (!(v.isNativeIOS())) goto L_181;
  if (!((o == null))) goto L_ce;
  o;
  goto L_ef;
  if (!((undefined !== undefined.setPlatformNavigationBar))) goto L_181;
  this.navigationController = new l.NavigationController(o);
  this.navigationController.setPlatformNavigationBar({title: "", backgroundVisibility: 2}, function <atom:0>);
  return;
  if (!(n.Device.isAndroid())) goto L_2ce;
  if (!(!n.Device.isWeb())) goto L_2ce;
  this.registerDisposable(r.convertBridgeObservableToObservable(t.observeInsets()).subscribe({next: function <atom:0>, error: function <atom:0>}));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=chatgpt_wallet/src/WalletManagementInsets
// locals: this
function {
  this = this;
  if (!((this.navigationController == null))) goto L_2c;
  this.navigationController;
  goto L_50;
  undefined.clearPlatformNavigationBar();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_wallet/src/WalletManagementInsets
// closure: this
function {
  this.viewModel.children(0);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=579B file=chatgpt_wallet/src/WalletManagementInsets
// locals: this
// closure: t, d, o, c
function {
  this = this;
  if (!((undefined !== this.navigationController))) goto L_1b9;
  t.beginComponent(d.SafeArea, o, undefined, undefined);
  t.setViewModelProperty("style", c);
  t.setViewModelProperty("edges", [d.SafeAreaEdge.Top, d.SafeAreaEdge.Bottom]);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
  this.viewModel.children(this.state.bottomInset);
  return;
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=4 bc=544B file=chatgpt_wallet/src/WalletManagementInsets
// args: require, module, exports
// locals: e, t, o, r, i, a, n, s, l, v, d, WalletManagementInsets, <class_fields_init>, WalletManagementInsets#1, c
function {
  let c;
  let WalletManagementInsets#1;
  let d;
  let v;
  let l;
  let s;
  let n;
  let a;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletManagementInsets = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeComponentPrototype(undefined, "JSZVfAs2yBYXb_Ol");
  r = require("bridge_observables/src/utils/convertBridgeObservableToObservable");
  i = require("oai_core/src/OAITokens");
  a = require("valdi_core/src/Component");
  n = require("valdi_core/src/Device");
  s = require("valdi_core/src/Style");
  l = require("valdi_navigation/src/NavigationController");
  v = require("valdi_ui/src/Platform");
  d = require("valdi_ui/src/components/SafeArea");
  let WalletManagementInsets;
  let <class_fields_init>;
  class WalletManagementInsets extends a.StatefulComponent { ... }
  <proto:WalletManagementInsets>.onCreate = function <atom:0>;
  <proto:WalletManagementInsets>.onDestroy = function <atom:0>;
  <proto:WalletManagementInsets>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletManagementInsets>;
  WalletManagementInsets = function <atom:0>;
  // close_loc <class_fields_init>
  WalletManagementInsets#1 = function <atom:0>;
  exports.WalletManagementInsets = WalletManagementInsets#1;
  c = new s.Style({backgroundColor: i.OAIColor.BgCanvasSubtle, width: "100%", height: "100%"});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletManagementInsets
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
