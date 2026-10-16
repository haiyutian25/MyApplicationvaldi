// fn <atom:0>  args=0 vars=2 closure=36 cpool=0 bc=8061B file=oai_integration_fixtures/src/fixtures/OAIExperimentServiceFixture
// locals: L, this
// closure: W, e, t, oe, i, N, o, z, n, a, r, s, l, d, u, g, p, v, m, y, b, c, x, V, f, _, w, A, P, S, k, C, I, R, T, M
function {
  this = this;
  let L;
  if (!((this.context.platformServices == null))) goto L_51;
  this.context.platformServices;
  goto L_72;
  L = W(undefined.experimentService);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", oe.root);
  e.beginRender(i, undefined);
  e.setAttributeString("accessibilityLabel", "Experiment service fixture status: ".concat(L.status));
  e.beginComponent(N.Text, o, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.Body);
  if (!(("pass" === L.status))) goto L_2f6;
  goto L_33b;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("tone", N.TextTone.Danger);
  e.setViewModelProperty("value", L.status);
  e.endComponent();
  e.endRender();
  e.beginRender(n, undefined);
  e.beginComponent(N.Text, a, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.BodySmall);
  e.setViewModelProperty("value", "service:".concat(L.serviceStatus));
  e.endComponent();
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeString("accessibilityLabel", "Experiment layer assignment status: ".concat(L.layerStatus));
  e.beginComponent(N.Text, s, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.BodySmall);
  e.setViewModelProperty("value", "layers:".concat(L.layerStatus));
  e.endComponent();
  e.endRender();
  e.beginRender(l, undefined);
  e.beginComponent(N.Text, d, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.BodySmall);
  e.setViewModelProperty("value", "starlight-modal:".concat(L.knownFlagValue));
  e.endComponent();
  e.endRender();
  e.beginRender(u, undefined);
  e.beginComponent(N.Text, g, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.BodySmall);
  e.setViewModelProperty("value", "unknown-flag:".concat(L.unknownFlagValue));
  e.endComponent();
  e.endRender();
  e.beginRender(p, undefined);
  e.setAttributeString("accessibilityLabel", "Assigned boolean layer value: ".concat(L.booleanAssignedValue));
  e.beginComponent(N.Text, v, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.BodySmall);
  e.setViewModelProperty("value", "boolean-assigned:".concat(L.booleanAssignedValue));
  e.endComponent();
  e.endRender();
  e.beginRender(m, undefined);
  e.setAttributeString("accessibilityLabel", "Assigned integer layer value: ".concat(L.integerAssignedValue));
  e.beginComponent(N.Text, y, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.BodySmall);
  e.setViewModelProperty("value", "integer-assigned:".concat(L.integerAssignedValue));
  e.endComponent();
  e.endRender();
  e.beginRender(b, undefined);
  e.setAttributeString("accessibilityLabel", "Assigned double layer value: ".concat(L.doubleAssignedValue));
  e.beginComponent(N.Text, c, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.BodySmall);
  e.setViewModelProperty("value", "double-assigned:".concat(L.doubleAssignedValue));
  e.endComponent();
  e.endRender();
  e.beginRender(x, undefined);
  e.setAttributeString("accessibilityLabel", "Assigned string layer value: ".concat(L.stringAssignedValue));
  e.beginComponent(N.Text, V, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.BodySmall);
  e.setViewModelProperty("value", "string-assigned:".concat(L.stringAssignedValue));
  e.endComponent();
  e.endRender();
  e.beginRender(f, undefined);
  e.setAttributeString("accessibilityLabel", "Assigned string list layer value: ".concat(L.stringListAssignedValue.join(",")));
  e.beginComponent(N.Text, _, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.BodySmall);
  e.setViewModelProperty("value", "string-list-assigned:".concat(L.stringListAssignedValue.join(",")));
  e.endComponent();
  e.endRender();
  e.beginRender(w, undefined);
  e.beginComponent(N.Text, A, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.BodySmall);
  e.setViewModelProperty("value", "boolean-default:".concat(L.booleanDefaultValue));
  e.endComponent();
  e.endRender();
  e.beginRender(P, undefined);
  e.beginComponent(N.Text, S, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.BodySmall);
  e.setViewModelProperty("value", "integer-default:".concat(L.integerDefaultValue));
  e.endComponent();
  e.endRender();
  e.beginRender(k, undefined);
  e.beginComponent(N.Text, C, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.BodySmall);
  e.setViewModelProperty("value", "double-default:".concat(L.doubleDefaultValue));
  e.endComponent();
  e.endRender();
  e.beginRender(I, undefined);
  e.beginComponent(N.Text, R, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.BodySmall);
  e.setViewModelProperty("value", "string-default:".concat(L.stringDefaultValue));
  e.endComponent();
  e.endRender();
  e.beginRender(T, undefined);
  e.beginComponent(N.Text, M, undefined, undefined);
  e.setViewModelProperty("size", z.OAITextSize.BodySmall);
  e.setViewModelProperty("value", "string-list-default:".concat(L.stringListDefaultValue.join(",")));
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_integration_fixtures/src/fixtures/OAIExperimentServiceFixture
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

// fn W  args=1 vars=18 closure=20 cpool=0 bc=1123B file=oai_integration_fixtures/src/fixtures/OAIExperimentServiceFixture
// args: e
// locals: t, i, o, n, a, r, s, l, d, u, g, p, v, m, y, b, c
// closure: Z, D, X, ee, te, ie, $, h, H, j, J, G, B, F, Q, E, U, K, q, Y
function {
  if (!((undefined === e))) goto L_e;
  return Z("missing");   // tail call
  if (!(D.isVersionAtLeast(28))) goto L_45c;
  let c;
  let b;
  let y;
  let m;
  let v;
  let p;
  let g;
  let u;
  let d;
  let l;
  let s;
  let r;
  let a;
  let n;
  let o;
  let i;
  let t;
  t = e.isFeatureFlagEnabled({flagName: X});
  i = e.isFeatureFlagEnabled({flagName: ee});
  o = e.getLayer(te);
  n = o.getBoolean(ie, $);
  a = o.getNumber(ie, h);
  r = o.getNumber(ie, H);
  s = o.getString(ie, j);
  l = o.getStringList(ie, J);
  d = e.getLayer(G);
  u = d.getBoolean("enabled", B);
  g = d.getNumber("count", h);
  p = d.getNumber("ratio", H);
  v = d.getString("label", j);
  m = d.getStringList("items", J);
  if (!((u === F))) goto L_333;
  if (!((g === Q))) goto L_333;
  if (!((p === E))) goto L_333;
  if (!((v === U))) goto L_333;
  y = K(m, q);
  if (!((u === B))) goto L_36b;
  if (!((g === h))) goto L_36b;
  if (!((p === H))) goto L_36b;
  if (!((v === j))) goto L_36b;
  b = K(m, J);
  c = "partial";
  if (!(y)) goto L_384;
  c = "assigned";
  goto L_394;
  // [栈深重同步 1 -> 0]
  if (!(b)) goto L_394;
  c = "defaults";
  "defaults";
  if (!(!i)) goto L_429;
  if (!((n === $))) goto L_429;
  if (!((a === h))) goto L_429;
  if (!((r === H))) goto L_429;
  if (!((s === j))) goto L_429;
  if (!(K(l, J))) goto L_429;
  if ((y)) goto L_420;
  if (!(b)) goto L_429;
  goto L_42e;
  // [栈深重同步 2 -> 1]
  return {booleanAssignedValue: u, booleanDefaultValue: n, doubleAssignedValue: p, doubleDefaultValue: r, integerAssignedValue: g, integerDefaultValue: a, knownFlagValue: t, layerStatus: c, serviceStatus: "present", status: "failure:assertion", stringAssignedValue: v, stringDefaultValue: s, stringListAssignedValue: m, stringListDefaultValue: l, unknownFlagValue: i};
  return Y(e);   // tail call
}

// fn Y  args=1 vars=10 closure=11 cpool=0 bc=567B file=oai_integration_fixtures/src/fixtures/OAIExperimentServiceFixture
// args: e
// locals: t, i, o, n, a, r, s, l, d
// closure: X, ee, te, ie, $, h, H, j, J, K, B
function {
  let d;
  let l;
  let s;
  let r;
  let a;
  let n;
  let o;
  let i;
  let t;
  t = e.isFeatureFlagEnabled({flagName: X});
  i = e.isFeatureFlagEnabled({flagName: ee});
  o = {layerName: te, parameterName: ie};
  n = e.getLayerBoolean(o, $);
  a = e.getLayerInteger(o, h);
  r = e.getLayerDouble(o, H);
  s = e.getLayerString(o, j);
  l = e.getLayerStringList(o, J);
  if (!(!i)) goto L_1a9;
  if (!((n === $))) goto L_1a9;
  if (!((a === h))) goto L_1a9;
  if (!((r === H))) goto L_1a9;
  if (!((s === j))) goto L_1a9;
  d = K(l, J);
  if (!(d)) goto L_204;
  goto L_209;
  // [栈深重同步 2 -> 1]
  return {booleanAssignedValue: B, booleanDefaultValue: n, doubleAssignedValue: H, doubleDefaultValue: r, integerAssignedValue: h, integerDefaultValue: a, knownFlagValue: t, layerStatus: "defaults", serviceStatus: "present", status: "failure:assertion", stringAssignedValue: j, stringDefaultValue: s, stringListAssignedValue: J, stringListDefaultValue: l, unknownFlagValue: i};
}

// fn Z  args=1 vars=1 closure=6 cpool=0 bc=122B file=oai_integration_fixtures/src/fixtures/OAIExperimentServiceFixture
// args: e
// closure: B, $, H, h, j, J
function {
  return {booleanAssignedValue: B, booleanDefaultValue: $, doubleAssignedValue: H, doubleDefaultValue: H, integerAssignedValue: h, integerDefaultValue: h, knownFlagValue: false, layerStatus: "unavailable", serviceStatus: e, status: "failure:unavailable", stringAssignedValue: j, stringDefaultValue: j, stringListAssignedValue: J, stringListDefaultValue: J, unknownFlagValue: false};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=oai_integration_fixtures/src/fixtures/OAIExperimentServiceFixture
// args: e, i
// closure: t
function {
  return (e === t[i]);
}

// fn K  args=2 vars=2 closure=0 cpool=1 bc=49B file=oai_integration_fixtures/src/fixtures/OAIExperimentServiceFixture
// args: e, t
function {
  if (!((e.length === t.length))) goto L_30;
  return e.every(function <atom:0>);
}

// fn <atom:0>  args=3 vars=64 closure=0 cpool=8 bc=2314B file=oai_integration_fixtures/src/fixtures/OAIExperimentServiceFixture
// args: require, module, exports
// locals: e, t, i, o, n, a, r, s, l, d, u, g, p, v, m, y, b, c, x, V, f, _, w, A, P, S, k, C, I, R, T, M, z, N, L, D, O, B, F, $, E, Q, h, H, U, j, q, J, G, OAIExperimentServiceFixture, <class_fields_init>, OAIExperimentServiceFixture#1, W, Y, Z, K, X, ee, te, ie, oe
function {
  W = function W;
  Y = function Y;
  Z = function Z;
  K = function K;
  let oe;
  let ie;
  let te;
  let ee;
  let X;
  let OAIExperimentServiceFixture#1;
  let G;
  let J;
  let q;
  let j;
  let U;
  let H;
  let h;
  let Q;
  let E;
  let $;
  let F;
  let B;
  let O;
  let D;
  let L;
  let N;
  let z;
  let M;
  let T;
  let R;
  let I;
  let C;
  let k;
  let S;
  let P;
  let A;
  let w;
  let _;
  let f;
  let V;
  let x;
  let c;
  let b;
  let y;
  let m;
  let v;
  let p;
  let g;
  let u;
  let d;
  let l;
  let s;
  let r;
  let a;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OAIExperimentServiceFixture = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "GRn1lUwHowxmOJBh");
  i = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.status"], "Y6ikA32zm2s5p7Lj");
  o = e.makeComponentPrototype(undefined, "r96oExaaFRkuBVHK");
  n = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.service_status"], "u7GCRu3xzWJ0ero5");
  a = e.makeComponentPrototype(undefined, "UtOpnu51bQ-QJrhM");
  r = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.layer_status"], "b6QWq2UCl3rmRRVb");
  s = e.makeComponentPrototype(undefined, "4KpfZOH9PbRisAZp");
  l = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.known_flag_value"], "2_LZj7a97MavCyNt");
  d = e.makeComponentPrototype(undefined, "hesExqNUfuIK7sI2");
  u = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.unknown_flag_value"], "wM6czuNEI1MnvAJu");
  g = e.makeComponentPrototype(undefined, "Bch4UenGzfSJUQ2J");
  p = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.boolean_assigned_value"], "x67hgaQVm8asKmbJ");
  v = e.makeComponentPrototype(undefined, "Y6chG6mU1-tb1kHZ");
  m = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.integer_assigned_value"], "toYLBUDVGC8c3H8e");
  y = e.makeComponentPrototype(undefined, "RLjbH5jlxH6R6pro");
  b = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.double_assigned_value"], "UTOdReDfBkGT7rpb");
  c = e.makeComponentPrototype(undefined, "k-mKfFNtu057Ek-W");
  x = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.string_assigned_value"], "aQrQCrv7WImDfWoq");
  V = e.makeComponentPrototype(undefined, "cIBD64OTzv82_m5T");
  f = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.string_list_assigned_value"], "xtqvLOF9kQ2mkVxz");
  _ = e.makeComponentPrototype(undefined, "FdrRgogokGDt24ys");
  w = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.boolean_default_value"], "xmY-pHhuiJlg-w8i");
  A = e.makeComponentPrototype(undefined, "4kCVnIHpUVQBtHNO");
  P = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.integer_default_value"], "mCAwHNYSPykGbDD9");
  S = e.makeComponentPrototype(undefined, "xo0-8ZJQ0I8WZ1xQ");
  k = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.double_default_value"], "Q08eugOXQZmTCA_6");
  C = e.makeComponentPrototype(undefined, "oaameQep76xcPjBA");
  I = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.string_default_value"], "CsR4Tx3AMd-GiANU");
  R = e.makeComponentPrototype(undefined, "FYuappwDeElX5VWy");
  T = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.experiment.service.string_list_default_value"], "7NSF_YTKHrIbvR5c");
  M = e.makeComponentPrototype(undefined, "mlkypyNN1yEogHpx");
  z = require("oai_core/src/OAITokens");
  N = require("oai_ui/src/components/Text");
  L = require("valdi_core/src/Component");
  D = require("valdi_core/src/CompilerIntrinsics");
  O = require("valdi_core/src/Style");
  B = false;
  F = true;
  $ = true;
  E = 2.5;
  Q = 73;
  h = 37;
  H = 1.25;
  U = "assigned-string";
  j = "default-string";
  q = ["assigned-a", "assigned-b"];
  J = ["default-a", "default-b"];
  G = "oai_valdi_integration_fixture";
  let OAIExperimentServiceFixture;
  let <class_fields_init>;
  class OAIExperimentServiceFixture extends L.Component { ... }
  <proto:OAIExperimentServiceFixture>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OAIExperimentServiceFixture>;
  OAIExperimentServiceFixture = function <atom:0>;
  // close_loc <class_fields_init>
  OAIExperimentServiceFixture#1 = function <atom:0>;
  exports.OAIExperimentServiceFixture = OAIExperimentServiceFixture#1;
  X = "starlight-modal";
  ee = "oai-experiment-unknown-flag";
  te = "oai-experiment-unknown-layer";
  ie = "oai-experiment-unknown-parameter";
  oe = {root: new O.Style({flexDirection: "column", gap: 8, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_integration_fixtures/src/fixtures/OAIExperimentServiceFixture
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
