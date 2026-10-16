// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=100B file=chatgpt_wallet/src/WalletComponent
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
  this.binding = this.resolveBinding();
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=210B file=chatgpt_wallet/src/WalletComponent
// locals: t, this
// closure: a, e
function {
  this = this;
  try { // catch -> L_71
  return a.walletBindingForHost(this.context.walletService);
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_d1
  if (!(e.isLoggingEnabled)) goto L_cd;
  console.warn("Wallet account service binding is unavailable");
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=484B file=chatgpt_wallet/src/WalletComponent
// closure: t, n, b, c, i, g
function {
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", b);
  t.beginComponent(c.Text, i, undefined, undefined);
  t.setViewModelProperty("tone", c.TextTone.Secondary);
  t.setViewModelProperty("value", g.default.walletUnavailable());
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=109B file=chatgpt_wallet/src/WalletComponent
// closure: p, this, v
function {
  return p.withLocalNativeRefs(this.renderer.contextId, v);   // tail call
}

// fn <atom:0>  args=0 vars=5 closure=15 cpool=2 bc=1951B file=chatgpt_wallet/src/WalletComponent
// locals: e, a, d, v, this
// closure: t, n, b, c, i, g, p, s, o, w, u, h, r, C, l
function {
  this = this;
  let v;
  let d;
  let a;
  let e;
  if (!((undefined === this.binding))) goto L_17e;
  t.beginComponent(s.OAITheme, o, undefined, undefined);
  t.setViewModelProperty("fill", true);
  t.setViewModelProperty("mode", s.OAIThemeMode.System);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
  if (!((this.binding.isWalletEnabled == null))) goto L_1cb;
  this.binding.isWalletEnabled;
  this.binding;
  goto L_1ce;
  // [栈深重同步 1 -> 2]
  e = !<?>.call(undefined);
  a = w.isWalletEnrollmentIntroduction(this.context);
  if (!(u.Device.isAndroid())) goto L_2ae;
  d = !u.Device.isWeb();
  if (!(e)) goto L_36a;
  if (!(!a)) goto L_36a;
  t.beginComponent(h.WalletComingSoonContent, r, undefined, undefined);
  t.setViewModelProperty("usesNativeBackground", d);
  t.endComponent();
  return;
  v = w.walletEnrollmentAction(this.context, this.binding.controller);
  t.beginComponent(C.WalletContent, l, undefined, undefined);
  if ((t.hasContext())) goto L_675;
  if (!((undefined === v))) goto L_66b;
  goto L_66d;
  // [栈深重同步 4 -> 3]
  t.setContext({controller: this.binding.controller, navigator: w.walletNavigator(this.context), nativeMenuViewFactory: w.walletNativeMenuViewFactory(this.context), rootSafeArea: w.walletRootSafeArea(this.context), presentationHost: this.context.presentationHost, onCancelIntroduction: w.walletIntroductionCancelAction(this.context), startEnrollment: function <atom:0>});
  t.setViewModelProperty("accountId", this.binding.accountId);
  t.setViewModelProperty("isEnrollmentIntroduction", a);
  t.setViewModelProperty("showsComingSoon", e);
  t.setViewModelProperty("usesNativeBackground", d);
  t.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=26 closure=0 cpool=3 bc=881B file=chatgpt_wallet/src/WalletComponent
// args: require, module, exports
// locals: e, t, o, n, i, r, l, a, s, d, c, v, u, p, m, g, C, h, w, WalletComponent, <class_fields_init>, WalletComponent#1, b
function {
  let b;
  let WalletComponent#1;
  let w;
  let h;
  let C;
  let g;
  let m;
  let p;
  let u;
  let v;
  let c;
  let d;
  let s;
  let a;
  let l;
  let r;
  let i;
  let n;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletComponent = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeComponentPrototype(undefined, "xWss7bkH_CcABQi0");
  n = t.makeNodePrototype("view", undefined, "Jz-xU-f2N1H5ggLl");
  i = t.makeComponentPrototype(["numberOfLines", 0], "GnJXjWpQELz_Fhqv");
  r = t.makeComponentPrototype(undefined, "-LsQn7zwoz5tw4Xd");
  l = t.makeComponentPrototype(undefined, "5q7QXvh3BBZRIJar");
  a = require("chatgpt_wallet_core/src/CreateWalletHostService");
  s = require("oai_core/src/OAITheme");
  d = require("oai_core/src/OAITokens");
  c = require("oai_ui/src/components/Text");
  v = require("valdi_core/src/Component");
  u = require("valdi_core/src/Device");
  p = require("valdi_core/src/NativeReferences");
  m = require("valdi_core/src/Style");
  g = require("./Strings");
  C = require("./WalletContent");
  h = require("./WalletSetupContent");
  w = require("./WalletCapabilities");
  let WalletComponent;
  let <class_fields_init>;
  class WalletComponent extends v.Component { ... }
  <proto:WalletComponent>.resolveBinding = function <atom:0>;
  <proto:WalletComponent>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletComponent>;
  WalletComponent = function <atom:0>;
  // close_loc <class_fields_init>
  WalletComponent#1 = function <atom:0>;
  exports.WalletComponent = WalletComponent#1;
  b = new m.Style({accessibilityId: "wallet.unavailable", backgroundColor: d.OAIColor.BgCanvas, width: "100%", height: "100%", padding: d.OAISpacing.Four});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
