// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=122B file=oai_integration_fixtures/src/OAIIntegrationFixtureApp
// args: e
// closure: this
function {
  if (!((e !== this.state.selectedFixtureId))) goto L_79;
  this.setState({selectedFixtureId: e});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=220B file=oai_integration_fixtures/src/OAIIntegrationFixtureApp
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
  this.state = {selectedFixtureId: O.resolveIntegrationFixture(this.viewModel.initialFixtureId).id};
  this.selectFixture = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=300B file=oai_integration_fixtures/src/OAIIntegrationFixtureApp
// args: e
// locals: this
// closure: O
function {
  this = this;
  if (!((e == null))) goto L_b;
  e;
  goto L_2c;
  if (!((undefined.initialFixtureId !== this.viewModel.initialFixtureId))) goto L_12b;
  this.setState({selectedFixtureId: O.resolveIntegrationFixture(this.viewModel.initialFixtureId).id});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=oai_integration_fixtures/src/OAIIntegrationFixtureApp
// args: e
// closure: this
function {
  this.renderFixtureApp(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=256B file=oai_integration_fixtures/src/OAIIntegrationFixtureApp
// locals: this
// closure: e, P, t
function {
  this = this;
  e.beginComponent(P.NavigationView, t, undefined, undefined);
  if ((e.hasContext())) goto L_ad;
  e.setContext({hideBackButton: true});
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=oai_integration_fixtures/src/OAIIntegrationFixtureApp
// args: e
// closure: this
function {
  this.renderFixtureButton(e);
  return null;
}

// fn <atom:0>  args=0 vars=0 closure=17 cpool=1 bc=2429B file=oai_integration_fixtures/src/OAIIntegrationFixtureApp
// closure: this, e, i, R, r, h, n, A, d, a, O, s, x, l, u, p, t
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", R.root);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", R.header);
  e.beginComponent(h.Text, n, undefined, undefined);
  e.setViewModelProperty("size", A.OAITextSize.TitleSmall);
  e.endComponent();
  e.beginComponent(h.Text, d, undefined, undefined);
  e.setViewModelProperty("size", A.OAITextSize.BodySmall);
  e.setViewModelProperty("tone", h.TextTone.Secondary);
  e.endComponent();
  e.endRender();
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", R.fixturePicker);
  O.OAI_INTEGRATION_FIXTURES.map(function <atom:0>);
  e.endRender();
  e.beginRender(s, undefined);
  e.setAttributeString("accessibilityId", "oai_integration_fixtures.selected.".concat(x.id));
  e.setAttributeStyle("style", R.selectedFixture);
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", R.fixtureHeader);
  e.beginComponent(h.Text, u, undefined, undefined);
  e.setViewModelProperty("size", A.OAITextSize.LabelLarge);
  e.setViewModelProperty("value", x.title);
  e.endComponent();
  e.beginComponent(h.Text, p, undefined, undefined);
  e.setViewModelProperty("size", A.OAITextSize.BodySmall);
  e.setViewModelProperty("tone", h.TextTone.Secondary);
  e.setViewModelProperty("value", x.subtitle);
  e.endComponent();
  e.endRender();
  this.renderSelectedFixture(x.id, t);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=16 cpool=1 bc=387B file=oai_integration_fixtures/src/OAIIntegrationFixtureApp
// args: t
// locals: x, this
// closure: e, i, R, r, h, n, A, d, a, O, s, l, u, p, g, o
function {
  this = this;
  let x;
  x = O.resolveIntegrationFixture(this.state.selectedFixtureId);
  e.beginComponent(g.OAITheme, o, undefined, undefined);
  e.setViewModelProperty("mode", g.OAIThemeMode.System);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=oai_integration_fixtures/src/OAIIntegrationFixtureApp
// closure: this, t
function {
  return this.selectFixture(t.id);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=1 bc=779B file=oai_integration_fixtures/src/OAIIntegrationFixtureApp
// args: t
// locals: o, this
// closure: e, F, x, A
function {
  this = this;
  let o;
  o = (t.id === this.state.selectedFixtureId);
  e.beginComponent(F.Button, x, undefined, undefined);
  e.setViewModelProperty("accessibilityId", "oai_integration_fixtures.fixture.".concat(t.id));
  e.setViewModelProperty("label", t.title);
  e.setViewModelProperty("onPress", function <atom:0>);
  e.setViewModelProperty("size", A.OAIControlSize.Sm);
  if (!(o)) goto L_29a;
  goto L_2df;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("variant", F.ButtonVariant.Secondary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=15 cpool=0 bc=1913B file=oai_integration_fixtures/src/OAIIntegrationFixtureApp
// args: t, o
// locals: o#1, this
// closure: O, e, f, c, k, m, V, v, w, M, I, T, y, _, C
function {
  this = this;
  if (!((t === O.OAIIntegrationFixtureId.DeviceClipboard))) goto L_c8;
  e.beginComponent(f.OAIDeviceClipboardFixture, c, t, undefined);
  e.endComponent();
  goto L_778;
  if (!((t === O.OAIIntegrationFixtureId.ExperimentService))) goto L_205;
  e.beginComponent(k.OAIExperimentServiceFixture, m, t, undefined);
  if ((e.hasContext())) goto L_1d9;
  e.setContext(this.context);
  e.endComponent();
  goto L_778;
  if (!((t === O.OAIIntegrationFixtureId.NetworkAccountSettings))) goto L_3b2;
  e.beginComponent(V.OAINetworkAccountSettingsFixture, v, t, undefined);
  if ((e.hasContext())) goto L_316;
  e.setContext(this.context);
  e.setViewModelProperty("automaticallyRun", this.viewModel.automaticallyRun);
  e.endComponent();
  goto L_778;
  if (!((t === O.OAIIntegrationFixtureId.Navigation))) goto L_521;
  let o#1;
  o#1 = undefined;
  if (!(w.isVersionAtLeast(5))) goto L_474;
  o#1 = this.context.navigator;
  this.context.navigator;
  e.beginComponent(M.OAINavigationFixture, I, t, undefined);
  e.setViewModelProperty("navigator", o#1);
  e.endComponent();
  goto L_778;
  if (!((t === O.OAIIntegrationFixtureId.PlatformAlert))) goto L_659;
  e.beginComponent(T.OAIPlatformAlertFixture, y, t, undefined);
  e.setViewModelProperty("automaticallyRun", this.viewModel.automaticallyRun);
  e.endComponent();
  goto L_778;
  if (!((t === O.OAIIntegrationFixtureId.WebLauncherOpenURL))) goto L_778;
  e.beginComponent(_.OAIWebLauncherFixture, C, t, undefined);
  if ((e.hasContext())) goto L_74f;
  e.setContext({navigator: o});
  e.endComponent();
  t;
  return;
}

// fn <atom:0>  args=3 vars=41 closure=0 cpool=6 bc=1851B file=oai_integration_fixtures/src/OAIIntegrationFixtureApp
// args: require, module, exports
// locals: e, t, o, i, r, n, d, a, s, l, u, p, x, c, m, v, I, y, C, g, A, F, h, w, S, b, P, O, f, k, M, V, T, _, OAIIntegrationFixtureApp, <class_fields_init>, OAIIntegrationFixtureApp#1, R
function {
  let R;
  let OAIIntegrationFixtureApp#1;
  let _;
  let T;
  let V;
  let M;
  let k;
  let f;
  let O;
  let P;
  let b;
  let S;
  let w;
  let h;
  let F;
  let A;
  let g;
  let C;
  let y;
  let I;
  let v;
  let m;
  let c;
  let x;
  let p;
  let u;
  let l;
  let s;
  let a;
  let d;
  let n;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OAIIntegrationFixtureApp = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "IzXDCwXwrrlD6c6a");
  o = e.makeComponentPrototype(undefined, "A4JhV6yL6Ox1iv9l");
  i = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixtures.root"], "XDET1e7_EwdbpuUx");
  r = e.makeNodePrototype("view", undefined, "Cehye4IDc0YFSHSY");
  n = e.makeComponentPrototype(["value", "Integration fixtures"], "n2tu8SofrDJiD5Un");
  d = e.makeComponentPrototype(["lines", 2, "value", "Shared Valdi probes executed through the host platform services."], "2cajT6kfIVLS5EGP");
  a = e.makeNodePrototype("view", undefined, "GTlFjeHuDYKGkLK3");
  s = e.makeNodePrototype("view", undefined, "4l1R3Q8Ae0M4XMMi");
  l = e.makeNodePrototype("view", undefined, "5NfIUxSGsMnEntNZ");
  u = e.makeComponentPrototype(undefined, "Wi6caz9r4S-qKF9o");
  p = e.makeComponentPrototype(["lines", 2], "gnXOW2e0smCUIfhS");
  x = e.makeComponentPrototype(undefined, "xG_oVjRZglpvfXzh");
  c = e.makeComponentPrototype(undefined, "F_yU_QUOFouv9phy");
  m = e.makeComponentPrototype(undefined, "do9rhR2aiy06F2X0");
  v = e.makeComponentPrototype(undefined, "JejPFb3pnCWTdCDs");
  I = e.makeComponentPrototype(undefined, "CY-R1ExiWXrZNEuW");
  y = e.makeComponentPrototype(undefined, "eEqLICULv4l_NI5u");
  C = e.makeComponentPrototype(undefined, "edTyDAi2Zt0S_t7s");
  g = require("oai_core/src/OAITheme");
  A = require("oai_core/src/OAITokens");
  F = require("oai_ui/src/components/Button");
  h = require("oai_ui/src/components/Text");
  w = require("valdi_core/src/CompilerIntrinsics");
  S = require("valdi_core/src/Component");
  b = require("valdi_core/src/Style");
  P = require("valdi_navigation/src/NavigationView");
  O = require("./OAIIntegrationFixtureModels");
  f = require("./fixtures/OAIDeviceClipboardFixture");
  k = require("./fixtures/OAIExperimentServiceFixture");
  M = require("./fixtures/OAINavigationFixture");
  V = require("./fixtures/OAINetworkAccountSettingsFixture");
  T = require("./fixtures/OAIPlatformAlertFixture");
  _ = require("./fixtures/OAIWebLauncherFixture");
  let OAIIntegrationFixtureApp;
  let <class_fields_init>;
  class OAIIntegrationFixtureApp extends S.StatefulComponent { ... }
  <proto:OAIIntegrationFixtureApp>.onViewModelUpdate = function <atom:0>;
  <proto:OAIIntegrationFixtureApp>.onRender = function <atom:0>;
  <proto:OAIIntegrationFixtureApp>.renderFixtureApp = function <atom:0>;
  <proto:OAIIntegrationFixtureApp>.renderFixtureButton = function <atom:0>;
  <proto:OAIIntegrationFixtureApp>.renderSelectedFixture = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OAIIntegrationFixtureApp>;
  OAIIntegrationFixtureApp = function <atom:0>;
  // close_loc <class_fields_init>
  OAIIntegrationFixtureApp#1 = function <atom:0>;
  exports.OAIIntegrationFixtureApp = OAIIntegrationFixtureApp#1;
  R = {root: new b.Style({backgroundColor: A.OAIColor.BgPrimary, flexDirection: "column", gap: 16, padding: 16, width: "100%"}), header: new b.Style({flexDirection: "column", gap: 4, width: "100%"}), fixturePicker: new b.Style({alignItems: "flex-start", flexDirection: "row", flexWrap: "wrap", gap: 8, width: "100%"}), selectedFixture: new b.Style({flexDirection: "column", gap: 12, width: "100%"}), fixtureHeader: new b.Style({flexDirection: "column", gap: 2, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_integration_fixtures/src/OAIIntegrationFixtureApp
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
