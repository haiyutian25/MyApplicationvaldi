// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=75B file=oai_web_launcher/src/WebPage
// closure: this
function {
  this.navigationController.pop(true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=81B file=oai_web_launcher/src/WebPage
// closure: this
function {
  if (!((this.session == null))) goto L_2c;
  this.session;
  goto L_50;
  undefined.reload();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=oai_web_launcher/src/WebPage
// args: e
// closure: this
function {
  this.setState(e);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=3 bc=178B file=oai_web_launcher/src/WebPage
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, O
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
  this.state = {status: O.WebPageLoadStatus.Loading};
  this.close = function <atom:0>;
  this.retry = function <atom:0>;
  this.handleStateChange = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=303B file=oai_web_launcher/src/WebPage
// locals: e, this
// closure: _, O
function {
  this = this;
  let e;
  e = _.WebView.createController();
  this.session = new O.WebPageSession(e, this.handleStateChange);
  this.session.load(this.viewModel.url);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=93B file=oai_web_launcher/src/WebPage
// locals: this
function {
  this = this;
  if (!((this.session == null))) goto L_2c;
  this.session;
  goto L_50;
  undefined.dispose();
  this.session = undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=0 bc=1357B file=oai_web_launcher/src/WebPage
// closure: t, i, k, n, C, S, r, m, h, s, this, a
function {
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", k.root);
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", k.header);
  t.setAttributeNumber("paddingTop", C.Device.getDisplayTopInset());
  t.beginComponent(S.Text, r, undefined, undefined);
  t.setViewModelProperty("size", m.OAITextSize.TitleSmall);
  t.endComponent();
  t.beginComponent(h.Button, s, undefined, undefined);
  t.setViewModelProperty("onPress", this.close);
  t.setViewModelProperty("size", m.OAIControlSize.Sm);
  t.setViewModelProperty("variant", h.ButtonVariant.Ghost);
  t.endComponent();
  t.endRender();
  t.beginRender(a, undefined);
  t.setAttributeStyle("style", k.content);
  this.renderWebView();
  this.renderStatus();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=13 cpool=1 bc=279B file=oai_web_launcher/src/WebPage
// locals: this
// closure: t, i, k, n, C, S, r, m, h, s, a, b, o
function {
  this = this;
  t.beginComponent(b.OAITheme, o, undefined, undefined);
  t.setViewModelProperty("mode", b.OAIThemeMode.System);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=306B file=oai_web_launcher/src/WebPage
// locals: e, this
// closure: t, d, k
function {
  this = this;
  let e;
  if (!((this.session == null))) goto L_2f;
  this.session;
  goto L_50;
  e = undefined.controller;
  if (!((undefined !== e))) goto L_131;
  t.beginRender(d, undefined);
  t.setAttribute("controller", e);
  t.setAttributeStyle("style", k.webView);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=14 cpool=0 bc=1926B file=oai_web_launcher/src/WebPage
// locals: this
// closure: O, t, l, k, w, c, p, y, S, v, m, g, h, u
function {
  this = this;
  if (!((this.state.status === O.WebPageLoadStatus.Loading))) goto L_222;
  t.beginRender(l, undefined);
  t.setAttributeStyle("style", k.statusOverlay);
  t.beginComponent(w.ActivityIndicator, c, undefined, undefined);
  t.setViewModelProperty("size", w.ActivityIndicatorSize.Medium);
  t.endComponent();
  t.endRender();
  this.state.status;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === O.WebPageLoadStatus.Failed))) goto L_73b;
  t.beginRender(p, undefined);
  t.setAttributeStyle("style", k.statusOverlay);
  t.beginRender(y, undefined);
  t.setAttributeStyle("style", k.errorContent);
  t.beginComponent(S.Text, v, undefined, undefined);
  t.setViewModelProperty("size", m.OAITextSize.TitleSmall);
  t.endComponent();
  t.beginComponent(S.Text, g, undefined, undefined);
  t.setViewModelProperty("size", m.OAITextSize.BodySmall);
  t.setViewModelProperty("tone", S.TextTone.Secondary);
  t.endComponent();
  t.beginComponent(h.Button, u, undefined, undefined);
  t.setViewModelProperty("onPress", this.retry);
  t.setViewModelProperty("size", m.OAIControlSize.Sm);
  t.endComponent();
  t.endRender();
  t.endRender();
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === O.WebPageLoadStatus.Loaded))) goto L_785;
  return;
  // [栈深重同步 0 -> 1]
  return;
}

// fn <atom:0>  args=3 vars=34 closure=0 cpool=6 bc=2431B file=oai_web_launcher/src/WebPage
// args: require, module, exports
// locals: e, t, o, i, n, r, s, a, d, l, c, p, y, v, g, u, b, m, w, h, S, C, P, I, A, _, O, T, WebPage, <class_fields_init>, k
function {
  let k;
  let T;
  let O;
  let _;
  let A;
  let I;
  let P;
  let C;
  let S;
  let h;
  let w;
  let m;
  let b;
  let u;
  let g;
  let v;
  let y;
  let p;
  let c;
  let l;
  let d;
  let a;
  let s;
  let r;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WebPage = undefined;
  e = require("tslib");
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeComponentPrototype(undefined, "pDeWWIEpTQOr1ijC");
  i = t.makeNodePrototype("view", ["accessibilityId", "oai_web_launcher.page"], "Tg7SYTFbBHBAcYW5");
  n = t.makeNodePrototype("view", undefined, "OjoKUa2_Y0yrjwct");
  r = t.makeComponentPrototype(["value", "Help"], "09GiddohnDXiYaMN");
  s = t.makeComponentPrototype(["accessibilityId", "oai_web_launcher.close", "label", "Close"], "YxJ3m7n5_tsbvEqZ");
  a = t.makeNodePrototype("view", undefined, "YjGBNUsOAgajpsvy");
  d = t.makeNodePrototype("webview", ["accessibilityId", "oai_web_launcher.webview"], "TLnD3eJDkMScly4c");
  l = t.makeNodePrototype("view", ["accessibilityId", "oai_web_launcher.loading"], "BSSDi5sCpMGjECOi");
  c = t.makeComponentPrototype(["accessibilityLabel", "Loading web page"], "Osv1uvh6TbdIynOM");
  p = t.makeNodePrototype("view", ["accessibilityId", "oai_web_launcher.error"], "9vri2tAXMSGp4eJL");
  y = t.makeNodePrototype("view", undefined, "v8_--vVvL7CqpoaR");
  v = t.makeComponentPrototype(["value", "Couldn’t load this page"], "aenOt7FiNgBq_y_c");
  g = t.makeComponentPrototype(["lines", 2, "value", "Check your connection and try again."], "WvKNZOkqnULnJcrI");
  u = t.makeComponentPrototype(["accessibilityId", "oai_web_launcher.retry", "label", "Retry"], "I-um2_nbKM8maUto");
  b = require("oai_core/src/OAITheme");
  m = require("oai_core/src/OAITokens");
  w = require("oai_ui/src/components/ActivityIndicator");
  h = require("oai_ui/src/components/Button");
  S = require("oai_ui/src/components/Text");
  C = require("valdi_core/src/Device");
  P = require("valdi_core/src/Style");
  I = require("valdi_navigation/src/NavigationPage");
  A = require("valdi_navigation/src/NavigationPageComponent");
  _ = require("valdi_webview/src/WebView");
  O = require("./WebPageSession");
  let WebPage;
  let <class_fields_init>;
  class WebPage extends A.NavigationPageStatefulComponent { ... }
  <proto:WebPage>.onCreate = function <atom:0>;
  <proto:WebPage>.onDestroy = function <atom:0>;
  <proto:WebPage>.onRender = function <atom:0>;
  <proto:WebPage>.renderWebView = function <atom:0>;
  <proto:WebPage>.renderStatus = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WebPage>;
  WebPage = function <atom:0>;
  // close_loc <class_fields_init>
  T = function <atom:0>;
  exports.WebPage = T;
  T = e.__decorate([I.NavigationPage(module)], T);
  exports.WebPage = e.__decorate([I.NavigationPage(module)], T);
  k = {root: new P.Style({backgroundColor: m.OAIColor.BgPrimary, flexDirection: "column", height: "100%", width: "100%"}), header: new P.Style({alignItems: "center", backgroundColor: m.OAIColor.BgPrimary, flexDirection: "row", justifyContent: "space-between", minHeight: 52, paddingBottom: m.OAISpacing.One, paddingLeft: m.OAISpacing.Two, paddingRight: m.OAISpacing.One}), content: new P.Style({flexGrow: 1, flexShrink: 1, position: "relative", width: "100%"}), webView: new P.Style({height: "100%", width: "100%"}), statusOverlay: new P.Style({alignItems: "center", backgroundColor: m.OAIColor.BgPrimary, height: "100%", justifyContent: "center", left: 0, position: "absolute", top: 0, width: "100%"}), errorContent: new P.Style({alignItems: "center", flexDirection: "column", gap: m.OAISpacing.OneAndHalf, maxWidth: 320, padding: m.OAISpacing.Three})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_web_launcher/src/WebPage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
