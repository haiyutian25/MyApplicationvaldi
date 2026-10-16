// fn R  args=1 vars=2 closure=3 cpool=0 bc=235B file=chatgpt_family/src/FamilyIntroduction
// args: e
// locals: t
// closure: P, p, w
function {
  let t;
  t = P.get(e);
  if (!((undefined === t))) goto L_e6;
  t = p.makeAssetFromBytes(w.getModuleFileEntryAsBytes("chatgpt_family", "res/welcome/".concat(e, ".png.bin")));
  p.makeAssetFromBytes(w.getModuleFileEntryAsBytes("chatgpt_family", "res/welcome/".concat(e, ".png.bin")));
  P.set(e, t);
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=813B file=chatgpt_family/src/FamilyIntroduction
// args: t
// closure: e, a, C, s, R, y
function {
  e.beginRender(a, t.artwork);
  e.setAttributeStyle("style", C.benefit);
  e.beginRender(s, undefined);
  e.setAttributeString("accessibilityId", "family.onboarding.introduction.artwork.".concat(t.artwork));
  e.setAttribute("src", R(t.artwork));
  e.setAttributeStyle("style", C.illustration);
  e.endRender();
  e.beginRender(y, undefined);
  e.setAttributeString("value", t.text());
  e.setAttributeStyle("style", C.benefitText);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=22 cpool=2 bc=3855B file=chatgpt_family/src/FamilyIntroduction
// locals: m, p, this
// closure: e, a, C, s, R, y, x, A, f, t, o, i, r, h, n, l, d, k, c, g, u, b
function {
  this = this;
  let p;
  let m;
  m = x.getFamilyCarouselLayout(this.viewModel.width, this.viewModel.height, A.Device.getDisplayBottomInset());
  p = {font: f.systemMediumFont((16 * m.scale)), lineHeight: (21 * m.scale), letterSpacing: (-0.32 * m.scale)};
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", C.content);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", C.copy);
  e.beginRender(i, undefined);
  e.beginRender(r, undefined);
  e.setAttributeString("value", h.default.familyIntroductionWelcome());
  e.setAttributeStyle("style", C.title);
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeString("value", h.default.familyIntroductionAgent());
  e.setAttributeStyle("style", C.accentTitle);
  e.endRender();
  e.endRender();
  e.beginRender(l, undefined);
  e.setAttributeString("value", h.default.familyIntroductionSubtitle());
  e.setAttributeStyle("style", C.subtitle);
  e.endRender();
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", C.benefits);
  k.map(function <atom:0>);
  e.endRender();
  e.endRender();
  e.endRender();
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", C.footer);
  e.setAttributeNumber("left", m.nativeFooterSide);
  e.setAttributeNumber("right", m.nativeFooterSide);
  e.setAttributeNumber("bottom", m.nativeFooterBottom);
  e.setAttributeNumber("gap", (12 * m.scale));
  e.beginComponent(g.Button, u, undefined, undefined);
  e.setViewModelProperty("label", h.default.familyWelcomeGetStarted());
  e.setViewModelProperty("onPress", this.viewModel.onGetStarted);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("style", C.primary.extend({height: (48 * m.scale)}));
  e.setViewModelProperty("labelStyle", C.primaryLabel.extend(p));
  e.endComponent();
  e.beginComponent(g.Button, b, undefined, undefined);
  e.setViewModelProperty("label", h.default.familyWelcomeSeeHow());
  e.setViewModelProperty("onPress", this.viewModel.onSeeHow);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("variant", g.ButtonVariant.Ghost);
  e.setViewModelProperty("style", C.secondary.extend({height: (54 * m.scale)}));
  e.setViewModelProperty("labelStyle", C.secondaryLabel.extend(p));
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_family/src/FamilyIntroduction
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

// fn <atom:0>  args=3 vars=37 closure=0 cpool=6 bc=2865B file=chatgpt_family/src/FamilyIntroduction
// args: require, module, exports
// locals: e, t, o, i, r, n, l, d, a, s, y, c, u, b, m, g, p, S, v, f, w, h, x, A, k, P, R, FamilyIntroduction, <class_fields_init>, FamilyIntroduction#1, M, I, N, C
function {
  R = function R;
  let C;
  let N;
  let I;
  let M;
  let FamilyIntroduction#1;
  let P;
  let k;
  let A;
  let x;
  let h;
  let w;
  let f;
  let v;
  let S;
  let p;
  let g;
  let m;
  let b;
  let u;
  let c;
  let y;
  let s;
  let a;
  let d;
  let l;
  let n;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FamilyIntroduction = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("scroll", undefined, "s1cB64U3XijhHxE4");
  o = e.makeNodePrototype("layout", undefined, "x37JpEpAcRfO4H3i");
  i = e.makeNodePrototype("layout", undefined, "wM6SjHRASx0NaWgo");
  r = e.makeNodePrototype("label", undefined, "07MAsY4--l_a_CtU");
  n = e.makeNodePrototype("label", undefined, "z8Gu7svYLagL7Vfb");
  l = e.makeNodePrototype("label", undefined, "Zig-kZKCCZkkaKr_");
  d = e.makeNodePrototype("layout", undefined, "cW9rWaNE_G9uQhtm");
  a = e.makeNodePrototype("layout", undefined, "AGfQSIgMI9-facjN");
  s = e.makeNodePrototype("image", undefined, "MEFVLIRl4sCzkv09");
  y = e.makeNodePrototype("label", undefined, "JgYRlBLEWXkYTDNn");
  c = e.makeNodePrototype("layout", undefined, "ggzNyeloZddtXliB");
  u = e.makeComponentPrototype(["accessibilityId", "family.onboarding.get-started"], "YXblu8x9iwWaKMtN");
  b = e.makeComponentPrototype(["accessibilityId", "family.onboarding.introduction.see-how"], "xckrFHDx4WUYRXPt");
  m = require("oai_core/src/OAITokens");
  g = require("oai_ui/src/components/Button");
  p = require("valdi_core/src/Asset");
  S = require("valdi_core/src/Component");
  v = require("valdi_core/src/Style");
  f = require("valdi_core/src/SystemFont");
  w = require("valdi_core/src/Valdi");
  h = require("./Strings");
  x = require("./FamilyPrototypeMotion");
  A = require("valdi_core/src/Device");
  k = [{artwork: "school-email", text: h.default.familyIntroductionSchool}, {artwork: "schedule", text: h.default.familyIntroductionSchedule}, {artwork: "shared-context", text: h.default.familyIntroductionSharedContext}];
  P = new Map();
  let FamilyIntroduction;
  let <class_fields_init>;
  class FamilyIntroduction extends S.Component { ... }
  <proto:FamilyIntroduction>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FamilyIntroduction>;
  FamilyIntroduction = function <atom:0>;
  // close_loc <class_fields_init>
  FamilyIntroduction#1 = function <atom:0>;
  exports.FamilyIntroduction = FamilyIntroduction#1;
  M = new v.Style({width: "100%", font: f.systemSemiboldFont(34), lineHeight: 41, letterSpacing: 0.41, color: m.OAIColor.TextPrimary, textAlign: "center", numberOfLines: 0});
  I = new v.Style({font: f.systemFont(17), lineHeight: 24, letterSpacing: -0.44, color: m.OAIColor.TextSecondary, numberOfLines: 0});
  N = new v.Style({font: f.systemMediumFont(16), lineHeight: 21, letterSpacing: -0.32});
  C = {content: new v.Style({position: "absolute", left: 24, right: 24, top: 64, bottom: 130, showsVerticalScrollIndicator: false}), copy: new v.Style({width: "100%", gap: 16, paddingBottom: 16}), title: M, accentTitle: M.extend({color: "#3a83f7"}), subtitle: I.extend({width: "100%", textAlign: "center"}), benefits: new v.Style({width: "100%", gap: 24, marginTop: 32}), benefit: new v.Style({width: "100%", flexDirection: "row", alignItems: "center", gap: 12, paddingTop: 4, paddingBottom: 4}), illustration: new v.Style({width: 32, height: 32, flexShrink: 0, objectFit: "contain", accessibilityNavigation: "ignored"}), benefitText: I.extend({flexGrow: 1, flexShrink: 1, flexBasis: 0}), footer: new v.Style({position: "absolute", left: 32, right: 32, bottom: 0, gap: 12}), primary: new v.Style({height: 48, backgroundColor: "#2f7cf5"}), secondary: new v.Style({height: 54}), primaryLabel: N.extend({color: m.OAIColor.TextInverseStatic}), secondaryLabel: N.extend({color: m.OAIColor.TextPrimary})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_family/src/FamilyIntroduction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
