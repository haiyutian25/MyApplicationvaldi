// fn <atom:0>  args=0 vars=7 closure=4 cpool=0 bc=1110B file=chatgpt_wallet/src/WalletCardScannerComponent
// locals: e, t, i, o, r, n, d
// closure: this, T, P, x
function {
  let d;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  e = this.backdrop.single();
  t = this.guide.single();
  if (((undefined === e))) goto L_e0;
  if (((undefined === t))) goto L_e0;
  if (!(this.isDestroyed())) goto L_e3;
  return;
  i = e.frame;
  o = t.frame;
  if (((i.width <= 0))) goto L_17d;
  if (!((i.height <= 0))) goto L_180;
  return;
  r = T.RenderedElementUtils.absolutePosition(e);
  n = T.RenderedElementUtils.absolutePosition(t);
  d = new P.GeometricPathBuilder(i.width, i.height).roundRectTo((n.x - r.x), (n.y - r.y), o.width, o.height, x, x).build();
  this.blur.setAttribute("maskPath", d);
  this.scrim.setAttribute("maskPath", d);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=173B file=chatgpt_wallet/src/WalletCardScannerComponent
// closure: this
function {
  if ((this.closeRequested)) goto L_ac;
  if ((this.isDestroyed())) goto L_ac;
  this.closeRequested = true;
  this.context.onClose();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=2 bc=299B file=chatgpt_wallet/src/WalletCardScannerComponent
// locals: this, this.active_func, new.target, arguments
// closure: T, P, x, <class_fields_init>, f
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
  this.closeRequested = false;
  this.backdrop = new f.ElementRef();
  this.blur = new f.ElementRef();
  this.scrim = new f.ElementRef();
  this.guide = new f.ElementRef();
  this.updateBackdropMask = function <atom:0>;
  this.close = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=282B file=chatgpt_wallet/src/WalletCardScannerComponent
// closure: e, a, V, I
function {
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", V.title);
  e.setAttributeString("value", I.default.walletScanCardTitle());
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=0 bc=1183B file=chatgpt_wallet/src/WalletCardScannerComponent
// closure: e, c, V, p, this, y, g, u, I, h
function {
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", V.guideSpacing);
  e.endRender();
  e.beginRender(p, undefined);
  e.setAttributeRef(this.guide);
  e.setAttributeStyle("style", V.guide);
  e.beginRender(y, undefined);
  e.setAttributeStyle("style", V.guideOutline);
  e.endRender();
  e.endRender();
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", V.guidanceScroll);
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", V.help);
  e.setAttributeString("value", I.default.walletScanCardHelp());
  e.endRender();
  e.endRender();
  e.beginRender(h, undefined);
  e.setAttributeStyle("style", V.remainingSpace);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=595B file=chatgpt_wallet/src/WalletCardScannerComponent
// closure: e, A, m, I, V, this
function {
  e.beginComponent(A.Button, m, undefined, undefined);
  e.setViewModelProperty("label", I.default.walletScanCardClose());
  e.setViewModelProperty("labelStyle", V.closeLabel);
  e.setViewModelProperty("onPress", this.close);
  e.setViewModelProperty("style", V.close);
  e.setViewModelProperty("variant", A.ButtonVariant.Secondary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=23 cpool=3 bc=2079B file=chatgpt_wallet/src/WalletCardScannerComponent
// closure: e, a, V, I, c, p, this, y, g, u, h, A, m, i, o, r, n, d, C, l, M, s, b
function {
  e.beginRender(i, undefined);
  e.setAttributeFunction("onLayoutComplete", this.updateBackdropMask);
  e.setAttributeStyle("style", V.root);
  e.beginRender(o, undefined);
  e.setAttributeRef(this.backdrop);
  e.setAttributeStyle("style", V.backdrop);
  e.beginRenderWithViewFactory(r, this.context.scannerViewFactory, undefined);
  e.setAttributeStyle("style", V.preview);
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeRef(this.blur);
  e.setAttributeStyle("style", V.blur);
  e.endRender();
  e.beginRender(d, undefined);
  e.setAttributeRef(this.scrim);
  e.setAttributeStyle("style", V.scrim);
  e.endRender();
  e.endRender();
  e.beginComponent(C.SafeArea, l, undefined, undefined);
  e.setViewModelProperty("edges", M);
  e.setViewModelProperty("style", V.header);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.beginComponent(C.SafeArea, s, undefined, undefined);
  e.setViewModelProperty("edges", M);
  e.setViewModelProperty("style", V.body);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.beginComponent(C.SafeArea, b, undefined, undefined);
  e.setViewModelProperty("edges", M);
  e.setViewModelProperty("style", V.footer);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=24 cpool=1 bc=212B file=chatgpt_wallet/src/WalletCardScannerComponent
// locals: this
// closure: e, a, V, I, c, p, y, g, u, h, A, m, i, o, r, n, d, C, l, M, s, b, v, t
function {
  this = this;
  e.beginComponent(v.OAITheme, t, undefined, undefined);
  e.setViewModelProperty("fill", true);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=40 closure=0 cpool=5 bc=3962B file=chatgpt_wallet/src/WalletCardScannerComponent
// args: require, module, exports
// locals: e, t, i, o, r, n, d, l, a, s, c, p, y, g, u, h, b, m, v, S, w, A, C, R, f, P, k, T, I, WalletCardScannerComponent, <class_fields_init>, WalletCardScannerComponent#1, O, x, N, M, V
function {
  let V;
  let M;
  let N;
  let x;
  let O;
  let WalletCardScannerComponent#1;
  let I;
  let T;
  let k;
  let P;
  let f;
  let R;
  let C;
  let A;
  let w;
  let S;
  let v;
  let m;
  let b;
  let h;
  let u;
  let g;
  let y;
  let p;
  let c;
  let s;
  let a;
  let l;
  let d;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletCardScannerComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "QHGf-jXrA_Nmz6ZW");
  i = e.makeNodePrototype("view", undefined, "D8GBzueWaTltXShI");
  o = e.makeNodePrototype("layout", undefined, "ikan8ZObFzdxCgTP");
  r = e.makeNodePrototype("custom-view", undefined, "8fze5hOiXcLjDztW");
  n = e.makeNodePrototype("blur", undefined, "lStY9qiWWTXQkSTT");
  d = e.makeNodePrototype("view", undefined, "1835RD50_64PeNST");
  l = e.makeComponentPrototype(undefined, "pmxACbp-2IMPAD1L");
  a = e.makeNodePrototype("label", undefined, "VUTJvVbvC3IBLei9");
  s = e.makeComponentPrototype(undefined, "LH8tPgtyGd4RzpK-");
  c = e.makeNodePrototype("layout", undefined, "yWH9mfDb7YEfs-gg");
  p = e.makeNodePrototype("layout", undefined, "-EcBNCtdDdFXDUzx");
  y = e.makeNodePrototype("view", undefined, "5wIELEL0btNm5Tdg");
  g = e.makeNodePrototype("scroll", undefined, "8TcWHmeAAnUxk_wa");
  u = e.makeNodePrototype("label", undefined, "IzBgHabZqGZCvodD");
  h = e.makeNodePrototype("layout", undefined, "YWCN2OZV_ULLvzb1");
  b = e.makeComponentPrototype(undefined, "mwSp8VwFtO4--rmX");
  m = e.makeComponentPrototype(["pressedOpacity", 0.6], "Pva9XC5GE5INziBR");
  v = require("oai_core/src/OAITheme");
  S = require("oai_core/src/OAITokens");
  w = require("oai_core/src/OAITypography");
  A = require("oai_ui/src/components/Button");
  C = require("oai_ui/src/components/SafeArea");
  R = require("valdi_core/src/Component");
  f = require("valdi_core/src/ElementRef");
  P = require("valdi_core/src/GeometricPath");
  k = require("valdi_core/src/Style");
  T = require("valdi_core/src/utils/RenderedElementUtils");
  I = require("./Strings");
  let WalletCardScannerComponent;
  let <class_fields_init>;
  class WalletCardScannerComponent extends R.Component { ... }
  <proto:WalletCardScannerComponent>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletCardScannerComponent>;
  WalletCardScannerComponent = function <atom:0>;
  // close_loc <class_fields_init>
  WalletCardScannerComponent#1 = function <atom:0>;
  exports.WalletCardScannerComponent = WalletCardScannerComponent#1;
  O = 2;
  x = 30;
  N = 4;
  M = [C.SafeAreaEdge.Left, C.SafeAreaEdge.Right];
  null;
  w.resolveOAITypography(w.Typography.BodyMedium, {font: undefined, lineHeight: undefined, lineHeightMultiple: (24 / 17)});
  null;
  w.resolveOAITypography(w.DesignTypography.Body, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined});
  null;
  w.resolveOAITypography(w.DesignTypography.Headline, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined});
  V = {root: new k.Style({accessibilityId: "wallet.card-scanner", backgroundColor: "#000000", slowClipping: true, width: "100%", height: "100%"}), backdrop: new k.Style({position: "absolute", top: -2, left: -2, right: -2, bottom: -2}), preview: new k.Style({accessibilityNavigation: "ignored", allowReuse: false, position: "absolute", width: "100%", height: "100%"}), blur: new k.Style({accessibilityNavigation: "ignored", blurStyle: "systemUltraThinMaterialDark", opacity: 0.3, position: "absolute", width: "100%", height: "100%", touchEnabled: false}), scrim: new k.Style({accessibilityNavigation: "ignored", backgroundColor: "#00000080", position: "absolute", width: "100%", height: "100%", touchEnabled: false}), header: new k.Style({width: "100%", paddingTop: 35, paddingLeft: S.OAISpacing.Three, paddingRight: S.OAISpacing.Three}), title: new k.Style({accessibilityCategory: "header", color: S.OAIColor.TextInverseStatic, numberOfLines: 0, textAlign: "center"}), body: new k.Style({alignItems: "center", flexGrow: 1, flexShrink: 1, height: 1, minHeight: 0, paddingLeft: S.OAISpacing.Three, paddingRight: S.OAISpacing.Three, width: "100%"}), guideSpacing: new k.Style({flexShrink: 1, height: 61, minHeight: 16}), guide: new k.Style({aspectRatio: 1.5, flexShrink: 1, minHeight: 0, maxWidth: 480, width: "100%"}), guideOutline: new k.Style({accessibilityId: "wallet.card-scanner.guide", accessibilityNavigation: "ignored", borderColor: S.OAIColor.TextInverseStatic, borderRadius: (x + 4), borderWidth: 4, position: "absolute", top: -4, bottom: -4, left: -4, right: -4, touchEnabled: false}), help: new k.Style({color: S.OAIColor.TextInverseStatic, numberOfLines: 0, textAlign: "center", width: "100%"}), guidanceScroll: new k.Style({accessibilityId: "wallet.card-scanner.guidance", flexShrink: 0, maxHeight: "50%", marginTop: 26, width: "100%"}), remainingSpace: new k.Style({flexGrow: 1}), footer: new k.Style({width: "100%", padding: S.OAISpacing.Three}), close: new k.Style({accessibilityId: "wallet.card-scanner.close", backgroundColor: S.OAIColor.Transparent, borderColor: "#FFFFFF26", width: "100%", height: "auto", minHeight: 54, paddingTop: 15, paddingBottom: 15}), closeLabel: new k.Style({color: S.OAIColor.TextInverseStatic, numberOfLines: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletCardScannerComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
