// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=272B file=chatgpt_finance_connections/src/FinanceInstitutionLogo
// args: t, i
// closure: e, this
function {
  if ((t)) goto L_da;
  if (!(e.isLoggingEnabled)) goto L_da;
  if (!((i == null))) goto L_d4;
  i;
  console.warn("Unable to load Finance institution logo ".concat(this.viewModel.institutionId, ": ", "unknown error"));
  if (!(t)) goto L_106;
  goto L_107;
  // [栈深重同步 4 -> 3]
  this.setState({loadState: 2});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=82B file=chatgpt_finance_connections/src/FinanceInstitutionLogo
// locals: this, this.active_func, new.target, arguments
// closure: e, <class_fields_init>
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
  this.state = {loadState: 0};
  this.handleAssetLoad = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=269B file=chatgpt_finance_connections/src/FinanceInstitutionLogo
// args: e
// locals: this
function {
  this = this;
  if (((undefined === e))) goto L_10c;
  if (!((e.institutionId === this.viewModel.institutionId))) goto L_dc;
  if (((e.logo === this.viewModel.logo))) goto L_10c;
  this.setState({loadState: 0});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=670B file=chatgpt_finance_connections/src/FinanceInstitutionLogo
// closure: t, o, g, n, this, d
function {
  t.beginRender(o, undefined);
  t.setAttributeStyle("style", g.financesListStyles.iconSurface);
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", g.financesListStyles.icon);
  t.setAttributeString("accessibilityId", "finance-institution-".concat(this.viewModel.institutionId, "-logo-fallback"));
  t.setAttribute("src", d.default.building);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=356B file=chatgpt_finance_connections/src/FinanceInstitutionLogo
// closure: t, s, g, this
function {
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", g.financesListStyles.iconSurface);
  t.setAttributeString("accessibilityId", "finance-institution-".concat(this.viewModel.institutionId, "-logo-placeholder"));
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=450B file=chatgpt_finance_connections/src/FinanceInstitutionLogo
// closure: t, r, v, this, e
function {
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", v.image);
  t.setAttributeString("accessibilityId", "finance-institution-".concat(this.viewModel.institutionId, "-logo"));
  t.setAttribute("src", e);
  t.setAttributeFunction("onAssetLoad", this.handleAssetLoad);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=9 cpool=3 bc=498B file=chatgpt_finance_connections/src/FinanceInstitutionLogo
// locals: e, a, this
// closure: t, o, g, n, d, s, r, v, i
function {
  this = this;
  let a;
  let e;
  e = this.logoAsset(this.viewModel.logo);
  if (((undefined === e))) goto L_bf;
  a = (2 === this.state.loadState);
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", g.financesListStyles.iconContainer);
  if (!(a)) goto L_168;
  goto L_1b4;
  // [栈深重同步 1 -> 0]
  if (!((0 === this.state.loadState))) goto L_1b4;
  function <atom:0>();
  if (!(!a)) goto L_1c9;
  if (!((undefined !== e))) goto L_1c9;
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=203B file=chatgpt_finance_connections/src/FinanceInstitutionLogo
// args: t
// locals: i
// closure: l, e
function {
  if (!((undefined !== t))) goto L_ca;
  if (!((0 !== t.length))) goto L_ca;
  try { // catch -> L_3e
  return l.makeAssetFromUrl(t);
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_c9
  if (!(e.isLoggingEnabled)) goto L_c5;
  console.warn("Unable to create Finance institution logo asset: ".concat(String(i)));
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=4 bc=899B file=chatgpt_finance_connections/src/FinanceInstitutionLogo
// args: require, module, exports
// locals: e, t, i, o, n, s, r, d, a, l, c, u, g, FinanceInstitutionLogo, <class_fields_init>, FinanceInstitutionLogo#1, v
function {
  let v;
  let FinanceInstitutionLogo#1;
  let g;
  let u;
  let c;
  let l;
  let a;
  let d;
  let r;
  let s;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceInstitutionLogo = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeNodePrototype("view", undefined, "bOcPExGakWTe0UN_");
  o = t.makeNodePrototype("view", undefined, "cCwJ6wlFCcMyooTv");
  n = t.makeNodePrototype("image", undefined, "reN4Wqc5PWM6OizL");
  s = t.makeNodePrototype("view", undefined, "1z6LQn1dbrJnTcao");
  r = t.makeNodePrototype("image", undefined, "nmYQq-YzRBfnLsQ3");
  d = require("dil_icon_assets/res");
  a = require("oai_core/src/OAITokens");
  l = require("valdi_core/src/Asset");
  c = require("valdi_core/src/Component");
  u = require("valdi_core/src/Style");
  g = require("./FinancesListStyles");
  let FinanceInstitutionLogo;
  let <class_fields_init>;
  class FinanceInstitutionLogo extends c.StatefulComponent { ... }
  <proto:FinanceInstitutionLogo>.onViewModelUpdate = function <atom:0>;
  <proto:FinanceInstitutionLogo>.onRender = function <atom:0>;
  <proto:FinanceInstitutionLogo>.logoAsset = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceInstitutionLogo>;
  FinanceInstitutionLogo = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceInstitutionLogo#1 = function <atom:0>;
  exports.FinanceInstitutionLogo = FinanceInstitutionLogo#1;
  v = {image: new u.Style({borderRadius: a.OAIRadius.Pill, height: a.OAISpacing.Four, objectFit: "contain", position: "absolute", width: a.OAISpacing.Four})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_connections/src/FinanceInstitutionLogo
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
