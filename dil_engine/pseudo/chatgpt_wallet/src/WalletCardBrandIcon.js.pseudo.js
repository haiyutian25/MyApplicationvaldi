// fn <atom:0>  args=0 vars=2 closure=14 cpool=2 bc=2066B file=chatgpt_wallet/src/WalletCardBrandIcon
// locals: m, this
// closure: e, t, b, r, o, v, d, i, n, a, y, s, l, c
function {
  this = this;
  let m;
  if (!((this.viewModel.brand == null))) goto L_50;
  this.viewModel.brand;
  goto L_9e;
  m = undefined.toLowerCase().replace(new RegExp("[^a-z]"), "");
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", b.slot);
  if (!(("visa" === m))) goto L_2e8;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", b.visaCard);
  e.beginRender(o, undefined);
  e.setAttribute("src", v.default.visa);
  e.setAttributeStyle("style", b.visaLogo);
  e.endRender();
  goto L_7e9;
  // [栈深重同步 1 -> 0]
  if (!(("mastercard" === m))) goto L_4b4;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", b.mastercardCard);
  e.beginRender(i, undefined);
  e.setAttribute("src", v.default.mastercard);
  e.setAttributeStyle("style", b.mastercardLogo);
  e.endRender();
  goto L_7e9;
  // [栈深重同步 1 -> 0]
  if ((("amex" === m))) goto L_4ca;
  if (!(("americanexpress" === m))) goto L_68d;
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", b.amexCard);
  e.beginRender(a, undefined);
  e.setAttribute("src", v.default.amex);
  e.setAttributeStyle("style", b.amexLogo);
  e.endRender();
  goto L_7e9;
  // [栈深重同步 1 -> 0]
  e.beginComponent(y.Icon, s, undefined, undefined);
  e.setViewModelProperty("src", l.default.creditCard);
  e.setViewModelProperty("color", c.OAIColor.IconSecondary);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_wallet/src/WalletCardBrandIcon
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
  return this;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=2 bc=1320B file=chatgpt_wallet/src/WalletCardBrandIcon
// args: require, module, exports
// locals: e, t, r, o, d, i, n, a, s, l, c, y, m, u, v, WalletCardBrandIcon, <class_fields_init>, WalletCardBrandIcon#1, g, b
function {
  let b;
  let g;
  let WalletCardBrandIcon#1;
  let v;
  let u;
  let m;
  let y;
  let c;
  let l;
  let s;
  let a;
  let n;
  let i;
  let d;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletCardBrandIcon = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "tITMq9yEGjMMsWkO");
  r = e.makeNodePrototype("view", undefined, "9eV-OxlWY9QctGEy");
  o = e.makeNodePrototype("image", undefined, "mU5lKVKqMDOUFGLy");
  d = e.makeNodePrototype("view", undefined, "Sbax2SsiqAqu4x_Z");
  i = e.makeNodePrototype("image", undefined, "RRWqrysKqcbyOqGX");
  n = e.makeNodePrototype("view", undefined, "AhBSdYVmiWpsxbJw");
  a = e.makeNodePrototype("image", undefined, "RhneyJ84OCnBgF2A");
  s = e.makeComponentPrototype(["size", 28], "s0bIfRHxzvR3CD8T");
  l = require("dil_icon_assets/res");
  c = require("oai_core/src/OAITokens");
  y = require("oai_ui/src/components/Icon");
  m = require("valdi_core/src/Component");
  u = require("valdi_core/src/Style");
  v = require("../res");
  let WalletCardBrandIcon;
  let <class_fields_init>;
  class WalletCardBrandIcon extends m.Component { ... }
  <proto:WalletCardBrandIcon>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletCardBrandIcon>;
  WalletCardBrandIcon = function <atom:0>;
  // close_loc <class_fields_init>
  WalletCardBrandIcon#1 = function <atom:0>;
  exports.WalletCardBrandIcon = WalletCardBrandIcon#1;
  g = new u.Style({width: 28, height: 18, borderRadius: c.OAIRadius.Xs, alignItems: "center", justifyContent: "center"});
  b = {slot: new u.Style({width: 28, height: 28, flexShrink: 0, alignItems: "center", justifyContent: "center", accessibilityNavigation: "ignored"}), visaCard: g.extend({backgroundColor: "#1434CB"}), mastercardCard: g.extend({backgroundColor: "#252525"}), amexCard: g.extend({backgroundColor: "#016FD0"}), visaLogo: new u.Style({width: 21, height: 7}), mastercardLogo: new u.Style({width: 13, height: 8}), amexLogo: new u.Style({width: 21, height: 8, objectFit: "contain"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletCardBrandIcon
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
