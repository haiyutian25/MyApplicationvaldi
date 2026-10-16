// fn Je  args=1 vars=1 closure=2 cpool=0 bc=148B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: e
// closure: Te, Ve
function {
  if (!(Ve.Device.isDesktop())) goto L_7d;
  null;
  e;
  goto L_7e;
  // [栈深重同步 2 -> 1]
  return Te.resolveOAITypography(e, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined});   // tail call
}

// fn Ke  args=1 vars=1 closure=2 cpool=0 bc=1129B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: e
// closure: Ze, je
function {
  if (!((e.review == null))) goto L_2a;
  e.review;
  goto L_6c;
  if (!((undefined.commitment.kind === Ze.WalletCommitmentKind.OneTime))) goto L_b6;
  undefined.commitment.kind;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === Ze.WalletCommitmentKind.Subscription))) goto L_147;
  return je.default.subscription();   // tail call
  if (!((<?> === Ze.WalletCommitmentKind.FreeTrial))) goto L_1d8;
  return je.default.freeTrial();   // tail call
  if (!((<?> === Ze.WalletCommitmentKind.Deposit))) goto L_269;
  return je.default.deposit();   // tail call
  if (!((<?> === Ze.WalletCommitmentKind.PayLater))) goto L_2fa;
  return je.default.payLater();   // tail call
  if (!((<?> === Ze.WalletCommitmentKind.Installment))) goto L_38b;
  return je.default.installment();   // tail call
  if (!((undefined === e.isRecurring))) goto L_3b3;
  return undefined;
  if (!(e.isRecurring)) goto L_420;
  return je.default.recurringPayment();
  return je.default.oneTimePayment();
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=231B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: e
function {
  if (((undefined === e.quantity))) goto L_4d;
  if (!((1 === e.quantity))) goto L_73;
  goto L_e1;
  // [栈深重同步 2 -> 1]
  return {title: "".concat(e.name, " � ", e.quantity)};
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=214B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: t
// closure: ze, e, g
function {
  null;
  e;
  if (!((g == null))) goto L_ae;
  g;
  goto L_cf;
  return {title: t.label, isEstimatedTax: t.isEstimatedTax, subtitle: ze.formatWalletApprovalTotal({amount: t.amount}, undefined.localeIdentifier)};
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=73B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: this, D
function {
  return this.viewModel.onOpenDetails(D);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=19 cpool=0 bc=1919B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: t, n, rt, r, P, l, L, d, a, je, e, T, s, y, w, Ie, p, Ge, ke
function {
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", rt.copy);
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", rt.inlineTitle);
  t.setAttributeString("value", P);
  t.endRender();
  t.beginRender(l, undefined);
  t.setAttributeStyle("style", rt.inlineSubtitle);
  if (!(L)) goto L_2ad;
  t.beginRender(d, undefined);
  t.setAttributeStyle("style", rt.moreItems);
  t.setAttributeString("value", L);
  t.endRender();
  t.beginRender(a, undefined);
  t.setAttributeStyle("style", rt.summarySubtitle);
  if (!(L)) goto L_382;
  goto L_383;
  // [栈深重同步 6 -> 5]
  t.setAttributeString("value", "".concat("", je.default.merchant(e.merchant)));
  t.endRender();
  t.endRender();
  if (!(T)) goto L_524;
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", rt.summarySubtitle);
  t.setAttributeString("value", T);
  t.endRender();
  t.endRender();
  t.beginRender(y, undefined);
  t.setAttributeStyle("style", rt.inlineTotal);
  t.setAttributeString("value", w);
  t.endRender();
  t.beginComponent(Ie.Icon, p, undefined, undefined);
  t.setViewModelProperty("src", Ge.default.chevron);
  t.setViewModelProperty("color", ke.OAIColor.IconSecondary);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=23 cpool=2 bc=565B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: this, D, t, n, rt, r, P, l, L, d, a, je, e, T, s, y, w, Ie, p, Ge, ke, Ne, o
function {
  t.beginComponent(Ne.Pressable, o, undefined, undefined);
  t.setViewModelProperty("style", rt.inlineHeader);
  t.setViewModelProperty("hoveredStyle", rt.inlineHover);
  t.setViewModelProperty("accessibilityLabel", D.title);
  t.setViewModelProperty("disabled", this.viewModel.disabled);
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=211B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: e
// closure: t, b, rt
function {
  t.beginRender(b, undefined);
  t.setAttributeStyle("style", rt.blocker);
  t.setAttributeString("value", e);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=22 closure=26 cpool=4 bc=8994B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// locals: e, g, w, h, S, x, A, P, f, R, C, k, T, I, N, t, M, V, O, D, L, this
// closure: ze, t, n, rt, r, l, d, a, je, s, y, Ie, p, Ge, ke, Ne, o, b, Ke, Ze, i, m, u, c, v, Qe
function {
  this = this;
  let L;
  let D;
  let O;
  let V;
  let M;
  let N;
  let I;
  let T;
  let k;
  let C;
  let R;
  let f;
  let P;
  let A;
  let x;
  let S;
  let h;
  let w;
  let g;
  let e;
  if (((undefined === undefined))) goto L_d7;
  e = <to_object>(undefined).transaction;
  g = <to_object>(undefined).configuration;
  w = <to_object>(undefined).formattedTotal;
  h = <to_object>(undefined).inline;
  <to_object>(undefined);
  goto L_fe;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_47;
  // [栈深重同步 1 -> 0]
  S = e.review;
  x = (undefined !== S);
  if ((x)) goto L_161;
  if (!((g == null))) goto L_13f;
  g;
  goto L_160;
  if (!((false !== undefined.showProductName))) goto L_189;
  goto L_18a;
  // [栈深重同步 1 -> 0]
  A = undefined;
  if (!((A == null))) goto L_197;
  A;
  goto L_1c2;
  if (!((undefined[0] == null))) goto L_1a1;
  undefined[0];
  goto L_1c2;
  if (!((undefined.displayName == null))) goto L_24d;
  undefined.displayName;
  if (!((A == null))) goto L_1d5;
  A;
  goto L_200;
  if (!((undefined[0] == null))) goto L_1df;
  undefined[0];
  goto L_200;
  if (!((undefined.name == null))) goto L_24d;
  undefined.name;
  P = je.default.purchaseDetails();
  if ((x)) goto L_285;
  if (!((g == null))) goto L_263;
  g;
  goto L_284;
  if (!((false !== undefined.showShipping))) goto L_2ad;
  goto L_2ae;
  // [栈深重同步 1 -> 0]
  f = undefined;
  if ((x)) goto L_2e6;
  if (!((g == null))) goto L_2c4;
  g;
  goto L_2e5;
  if (!((false !== undefined.showShippingAddress))) goto L_30e;
  goto L_30f;
  // [栈深重同步 1 -> 0]
  R = undefined;
  if ((x)) goto L_347;
  if (!((g == null))) goto L_325;
  g;
  goto L_346;
  if (!((false !== undefined.showCondition))) goto L_36f;
  goto L_370;
  // [栈深重同步 1 -> 0]
  C = undefined;
  if ((x)) goto L_3a8;
  if (!((g == null))) goto L_386;
  g;
  goto L_3a7;
  if (!((false !== undefined.showReturns))) goto L_3d0;
  goto L_3d1;
  // [栈深重同步 1 -> 0]
  k = undefined;
  T = Ke(e);
  I = [];
  if (!(T)) goto L_667;
  if (!((S == null))) goto L_41c;
  S;
  goto L_45e;
  null;
  undefined.commitment.details;
  if (!((S == null))) goto L_4c8;
  S;
  goto L_533;
  if (!((undefined.commitment.details == null))) goto L_512;
  undefined.commitment.details;
  goto L_533;
  if (!((undefined.rows == null))) goto L_53b;
  undefined.rows;
  // append([{title: je.default.paymentType(), subtitle: T}], 1, [])
  [];
  if (!((S == null))) goto L_54d;
  S;
  goto L_58f;
  if (!((S == null))) goto L_59a;
  S;
  goto L_605;
  if (!((undefined.commitment.details == null))) goto L_5e4;
  undefined.commitment.details;
  goto L_605;
  I.push({content: {rows: [{title: je.default.paymentType(), subtitle: T}], text: [undefined.commitment.summary, undefined.text].filter(Boolean).join("

")}});
  if (!((A == null))) goto L_69d;
  A;
  goto L_6c3;
  if (!((undefined.map(function <atom:0>) == null))) goto L_6cb;
  undefined.map(function <atom:0>);
  // append([], 0, [])
  if (!((S == null))) goto L_6d7;
  S;
  goto L_71e;
  if (!((undefined.priceBreakdown.map(function <atom:0>) == null))) goto L_726;
  undefined.priceBreakdown.map(function <atom:0>);
  // append([], [], [])
  [];
  I.push({content: {rows: []}, total: {title: je.default.total(), subtitle: w}});
  if (!((S == null))) goto L_79c;
  S;
  goto L_7de;
  if (!((undefined.commitment.kind === Ze.WalletCommitmentKind.OneTime))) goto L_84c;
  goto L_84d;
  // [栈深重同步 1 -> 0]
  N = undefined;
  if ((N)) goto L_8aa;
  if (!((S == null))) goto L_861;
  S;
  goto L_882;
  if ((undefined.agreement)) goto L_8aa;
  if (!(e.termsAndConditionsUrl)) goto L_dd8;
  if (!((N == null))) goto L_933;
  N;
  goto L_97d;
  if (!((undefined.details == null))) goto L_95c;
  undefined.details;
  goto L_97d;
  if (!((undefined.rows == null))) goto L_985;
  undefined.rows;
  // append([], 0, [])
  if (!((S == null))) goto L_991;
  S;
  goto L_9b2;
  if (!(undefined.agreement)) goto L_a51;
  goto L_a54;
  // [栈深重同步 7 -> 6]
  // append([], [], [])
  if (!((S == null))) goto L_a60;
  S;
  goto L_ad3;
  if (!((undefined.agreement == null))) goto L_a89;
  undefined.agreement;
  goto L_ad3;
  if (!((undefined.details == null))) goto L_ab2;
  undefined.details;
  goto L_ad3;
  if (!((undefined.rows == null))) goto L_adb;
  undefined.rows;
  // append([], [], [])
  [];
  if (!((N == null))) goto L_aed;
  N;
  goto L_b0e;
  if (!((N == null))) goto L_b19;
  N;
  goto L_b63;
  if (!((undefined.details == null))) goto L_b42;
  undefined.details;
  goto L_b63;
  if (!((S == null))) goto L_b6e;
  S;
  goto L_be1;
  if (!((undefined.agreement == null))) goto L_b97;
  undefined.agreement;
  goto L_be1;
  if (!((undefined.details == null))) goto L_bc0;
  undefined.details;
  goto L_be1;
  if (!((N == null))) goto L_c4a;
  N;
  goto L_c94;
  if (!((undefined.details == null))) goto L_c73;
  undefined.details;
  goto L_c94;
  if (!((undefined.links == null))) goto L_c9c;
  undefined.links;
  // append([], 0, [])
  if (!((S == null))) goto L_ca8;
  S;
  goto L_d1b;
  if (!((undefined.agreement == null))) goto L_cd1;
  undefined.agreement;
  goto L_d1b;
  if (!((undefined.details == null))) goto L_cfa;
  undefined.details;
  goto L_d1b;
  if (!((undefined.links == null))) goto L_d23;
  undefined.links;
  // append([], [], [])
  if (!(e.termsAndConditionsUrl)) goto L_dc6;
  goto L_dc9;
  // [栈深重同步 7 -> 6]
  // append([], [], [])
  [];
  I.push({title: je.default.termsAndConditions(), content: {rows: [], text: [undefined.summary, undefined.text, undefined.text].filter(Boolean).join("

"), links: []}});
  if ((C)) goto L_e0c;
  if (!((S == null))) goto L_deb;
  S;
  goto L_e0c;
  if (!(undefined.productDetails)) goto L_1087;
  if (!((S == null))) goto L_e91;
  S;
  goto L_eb2;
  null;
  undefined.productDetails;
  if (!(C)) goto L_f3c;
  goto L_f3f;
  // [栈深重同步 7 -> 6]
  // append([], 0, [])
  if (!((S == null))) goto L_f4b;
  S;
  goto L_f95;
  if (!((undefined.productDetails == null))) goto L_f74;
  undefined.productDetails;
  goto L_f95;
  if (!((undefined.rows == null))) goto L_f9d;
  undefined.rows;
  // append([], [], [])
  [];
  if (!((C == null))) goto L_faf;
  C;
  goto L_fd0;
  if (!((S == null))) goto L_fdb;
  S;
  goto L_1025;
  if (!((undefined.productDetails == null))) goto L_1004;
  undefined.productDetails;
  goto L_1025;
  I.push({title: je.default.productDetails(), content: {rows: [], text: [undefined.subtitle, undefined.text].filter(Boolean).join("

")}});
  if ((k)) goto L_10bb;
  if (!((S == null))) goto L_109a;
  S;
  goto L_10bb;
  if (!(undefined.returnDetails)) goto L_12e9;
  if (!((S == null))) goto L_1140;
  S;
  goto L_1161;
  null;
  undefined.returnDetails;
  if (!(k)) goto L_119e;
  goto L_11a1;
  // [栈深重同步 7 -> 6]
  // append([], 0, [])
  if (!((S == null))) goto L_11ad;
  S;
  goto L_11f7;
  if (!((undefined.returnDetails == null))) goto L_11d6;
  undefined.returnDetails;
  goto L_11f7;
  if (!((undefined.rows == null))) goto L_11ff;
  undefined.rows;
  // append([], [], [])
  [];
  if (!((k == null))) goto L_1211;
  k;
  goto L_1232;
  if (!((S == null))) goto L_123d;
  S;
  goto L_1287;
  if (!((undefined.returnDetails == null))) goto L_1266;
  undefined.returnDetails;
  goto L_1287;
  I.push({title: je.default.returnDetails(), content: {rows: [], text: [undefined.subtitle, undefined.text].filter(Boolean).join("

")}});
  let t;
  if (!((e.additionalDisclosures == null))) goto L_1319;
  e.additionalDisclosures;
  for (const t of []) {
    if (!((undefined === t.subtitle))) goto L_136f;
    goto L_1393;
    // [栈深重同步 7 -> 6]
    if (!((t.subtitle == null))) goto L_13e6;
    t.subtitle;
    I.push({title: t.title, content: {text: t.title}});
  }
  if (!((e.sellerName !== e.merchant))) goto L_146e;
  goto L_146f;
  // [栈深重同步 1 -> 0]
  M = undefined;
  if ((M)) goto L_14a4;
  if (!((S == null))) goto L_1483;
  S;
  goto L_14a4;
  if (!(undefined.sellerDetails)) goto L_161e;
  if (!((S == null))) goto L_1529;
  S;
  goto L_154a;
  null;
  undefined.sellerDetails;
  if (!(M)) goto L_15ae;
  goto L_15b1;
  // [栈深重同步 7 -> 6]
  // append([], 0, [])
  if (!((S == null))) goto L_15bd;
  S;
  goto L_1607;
  if (!((undefined.sellerDetails == null))) goto L_15e6;
  undefined.sellerDetails;
  goto L_1607;
  if (!((undefined.rows == null))) goto L_160f;
  undefined.rows;
  // append([], [], [])
  [];
  I.push({title: je.default.sellerDetails(), content: {rows: []}});
  if ((f)) goto L_16a4;
  if (!((S == null))) goto L_1683;
  S;
  goto L_16a4;
  if (!(undefined.deliveryDetails)) goto L_17ac;
  if (!((S == null))) goto L_1703;
  S;
  goto L_1724;
  null;
  undefined.deliveryDetails;
  if (!(f)) goto L_173a;
  goto L_173d;
  // [栈深重同步 8 -> 7]
  // append([], 0, [])
  if (!((S == null))) goto L_1749;
  S;
  goto L_1793;
  if (!((undefined.deliveryDetails == null))) goto L_1772;
  undefined.deliveryDetails;
  goto L_1793;
  if (!((undefined.rows == null))) goto L_179b;
  undefined.rows;
  // append([], [], [])
  [];
  goto L_17af;
  // [栈深重同步 4 -> 3]
  // append([], 0, [])
  if ((R)) goto L_17e3;
  if (!((S == null))) goto L_17c2;
  S;
  goto L_17e3;
  if (!(undefined.destinationDetails)) goto L_1924;
  if (!((S == null))) goto L_1842;
  S;
  goto L_1863;
  null;
  undefined.destinationDetails;
  if (!((S == null))) goto L_1876;
  S;
  goto L_18c0;
  if (!((undefined.destinationDetails == null))) goto L_189f;
  undefined.destinationDetails;
  goto L_18c0;
  goto L_1927;
  // [栈深重同步 4 -> 3]
  // append([], [], [])
  [];
  V = {title: je.default.deliveryDetails(), sections: []};
  if (!((S == null))) goto L_193b;
  S;
  goto L_197d;
  if (((undefined.commitment.kind === Ze.WalletCommitmentKind.Subscription))) goto L_1a8b;
  if (((true === e.isRecurring))) goto L_1a8b;
  if (!((S == null))) goto L_1a03;
  S;
  goto L_1a45;
  O = (undefined.commitment.kind === Ze.WalletCommitmentKind.FreeTrial);
  if (!(O)) goto L_1b10;
  // append([], 0, I)
  // append([], I, V.sections)
  V.sections;
  goto L_1b13;
  // [栈深重同步 2 -> 1]
  D = {title: je.default.purchaseDetails(), sections: I};
  if (!(A)) goto L_1bd5;
  if (!((A.length > 1))) goto L_1bd5;
  if (!((2 === A.length))) goto L_1b7f;
  goto L_1bd6;
  // [栈深重同步 1 -> 0]
  goto L_1bd6;
  // [栈深重同步 1 -> 0]
  L = undefined;
  t.beginRender(i, undefined);
  if (!(h)) goto L_1c58;
  goto L_1c7c;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", rt.content);
  if (!(h)) goto L_1c8b;
  goto L_1f42;
  // [栈深重同步 1 -> 0]
  t.beginRender(m, undefined);
  t.setAttributeStyle("style", rt.header);
  t.beginRender(u, undefined);
  t.setAttributeStyle("style", rt.total);
  t.setAttributeString("value", w);
  t.endRender();
  t.beginRender(c, undefined);
  t.setAttributeStyle("style", rt.merchant);
  t.setAttributeString("value", je.default.merchant(e.merchant));
  t.endRender();
  t.endRender();
  t.beginRender(v, undefined);
  t.setAttributeStyle("style", rt.rows);
  if (!(!h)) goto L_200b;
  if ((x)) goto L_1ffe;
  if (!((g == null))) goto L_1fdc;
  g;
  goto L_1ffd;
  if (!((false !== undefined.showPaymentMethod))) goto L_200b;
  Qe(e, false);
  if (!(!h)) goto L_20ee;
  if (([T, L].filter(Boolean).join(" � "))) goto L_20e7;
  this.row("purchase", Ge.default.cart, P, undefined, undefined, D);
  if (!(!O)) goto L_2276;
  if (!((V.sections.length > 0))) goto L_2276;
  if (!((f == null))) goto L_21a0;
  f;
  goto L_21c1;
  if (!((undefined.title == null))) goto L_220e;
  undefined.title;
  if (!((undefined === R))) goto L_2218;
  goto L_2244;
  // [栈深重同步 6 -> 5]
  if (!((e.shippingAddressSummary == null))) goto L_2244;
  e.shippingAddressSummary;
  if (!((f == null))) goto L_224f;
  f;
  goto L_2270;
  this.row("delivery", Ge.default.delivery, je.default.shipping(), R, undefined.subtitle, V);
  if (!((S == null))) goto L_2282;
  S;
  goto L_22d1;
  if (!((undefined.blockingReasons == null))) goto L_22ab;
  undefined.blockingReasons;
  goto L_22d1;
  undefined.map(function <atom:0>);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: this, l
function {
  return this.viewModel.onOpenDetails(l);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=18 cpool=0 bc=1720B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: _e, t, Ie, w, i, h, rt, S, x, A, o, n, P, r, f, R, Ge, ke
function {
  if (!(_e.isNativeIOS())) goto L_d5;
  t.beginComponent(Ie.Icon, w, undefined, undefined);
  t.setViewModelProperty("src", i);
  goto L_222;
  // [栈深重同步 1 -> 0]
  t.beginRender(h, undefined);
  t.setAttributeStyle("style", rt.iconSlot);
  t.beginComponent(Ie.Icon, S, undefined, undefined);
  t.setViewModelProperty("src", i);
  t.endComponent();
  t.endRender();
  t.beginRender(x, undefined);
  t.setAttributeStyle("style", rt.copy);
  t.beginRender(A, undefined);
  t.setAttributeStyle("style", rt.summaryTitle);
  t.setAttributeString("value", o);
  t.endRender();
  if (!(n)) goto L_453;
  t.beginRender(P, undefined);
  t.setAttributeStyle("style", rt.summarySubtitle);
  t.setAttributeString("value", n);
  t.endRender();
  t.endRender();
  if (!(r)) goto L_55a;
  t.beginRender(f, undefined);
  t.setAttributeStyle("style", rt.trailing);
  t.setAttributeString("value", r);
  t.endRender();
  t.beginComponent(Ie.Icon, R, undefined, undefined);
  t.setViewModelProperty("src", Ge.default.chevron);
  t.setViewModelProperty("color", ke.OAIColor.IconSecondary);
  t.endComponent();
  return;
}

// fn <atom:0>  args=6 vars=7 closure=16 cpool=2 bc=833B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: e, i, o, n, r, l
// locals: this
// closure: _e, t, Ie, w, h, rt, S, x, A, P, f, R, Ge, ke, Ne, g
function {
  this = this;
  t.beginComponent(Ne.Pressable, g, undefined, undefined);
  if (!(this.viewModel.inline)) goto L_e7;
  goto L_10b;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("style", rt.row);
  if (!(this.viewModel.inline)) goto L_1a3;
  goto L_1a4;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("hoveredStyle", undefined);
  t.setViewModelProperty("accessibilityId", "wallet-approval-".concat(e));
  t.setViewModelProperty("accessibilityLabel", l.title);
  t.setViewModelProperty("disabled", this.viewModel.disabled);
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_wallet_approval/src/WalletApprovalSummary
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

// fn Qe  args=2 vars=5 closure=12 cpool=2 bc=1835B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: e, i
// locals: o, n, r
// closure: t, C, rt, je, Pe, k, T, I, N, Ue, Fe, Be
function {
  let r;
  let n;
  let o;
  o = e.paymentMethod;
  if (!((o == null))) goto L_37;
  o;
  goto L_58;
  n = undefined.last4;
  if (!((undefined !== n))) goto L_8e;
  r = new RegExp("^\\d{4}$").test(n);
  t.beginRender(C, undefined);
  if (!(i)) goto L_10d;
  goto L_131;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", rt.row);
  if (!(r)) goto L_1b0;
  goto L_1f8;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityLabel", je.default.wallet());
  t.beginComponent(Pe.WalletCardBrandIcon, k, undefined, undefined);
  if (!((o == null))) goto L_281;
  o;
  goto L_2a2;
  t.setViewModelProperty("brand", undefined.brand);
  t.endComponent();
  t.beginRender(T, undefined);
  t.setAttributeStyle("style", rt.copy);
  t.beginRender(I, undefined);
  t.setAttributeStyle("style", rt.summaryTitle);
  if (!((o == null))) goto L_3fc;
  o;
  goto L_41d;
  if (!((undefined.displayName == null))) goto L_46a;
  undefined.displayName;
  t.setAttributeString("value", je.default.wallet());
  t.endRender();
  if (!(r)) goto L_6da;
  t.beginRender(N, undefined);
  t.setAttributeStyle("style", rt.secondary);
  if (!(Ue)) goto L_683;
  goto L_6af;
  // [栈深重同步 4 -> 3]
  t.setAttribute("value", "•••• ".concat(n));
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=121B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: this
function {
  this.taxOverlay.dismissActiveOverlay();
  this.setState({taxTooltipOpen: false});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=235B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: t, Ie, K, Ce
function {
  t.beginComponent(Ie.Icon, K, undefined, undefined);
  t.setViewModelProperty("src", Ce.default.x);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=15 cpool=1 bc=1661B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: t, Ie, K, Ce, j, z, je, Z, Je, Te, U, Ne, J, rt, this
function {
  t.beginRender(j, undefined);
  t.beginRender(z, undefined);
  t.setAttributeString("accessibilityLabel", "".concat(je.default.estimatedTaxTitle(), ". ", je.default.estimatedTaxExplanation()));
  t.beginRender(Z, undefined);
  t.setAttributes(Je(Te.Typography.FootnoteSemibold));
  t.setAttribute("color", "#FFFFFF");
  t.setAttributeNumber("numberOfLines", 0);
  t.setAttributeString("value", je.default.estimatedTaxTitle());
  t.endRender();
  t.beginRender(U, undefined);
  t.setAttributes(Je(Te.Typography.Footnote));
  t.setAttribute("color", "#FFFFFF");
  t.setAttributeNumber("numberOfLines", 0);
  t.setAttributeString("value", je.default.estimatedTaxExplanation());
  t.endRender();
  t.endRender();
  t.beginComponent(Ne.Pressable, J, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", je.default.closeEstimatedTax());
  t.setViewModelProperty("style", rt.taxTooltipClose);
  t.setViewModelProperty("onPress", this.closeEstimatedTax);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=16 cpool=2 bc=177B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// locals: this, this.active_func, new.target, arguments
// closure: t, Ie, K, Ce, j, z, je, Z, Je, Te, U, Ne, J, rt, <class_fields_init>, fe
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
  this.state = {};
  this.taxAnchors = new Map();
  this.taxOverlay = new fe.DILAnchoredOverlayController();
  this.presentingTaxAlert = false;
  this.closeEstimatedTax = function <atom:0>;
  this.renderTaxOverlay = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=333B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: e
// locals: this
function {
  this = this;
  if (!((e == null))) goto L_b;
  e;
  goto L_2c;
  if (!((undefined.page !== this.viewModel.page))) goto L_e0;
  this.taxAnchors.clear();
  goto L_14c;
  // [栈深重同步 1 -> 0]
  if (!(this.viewModel.disabled)) goto L_14c;
  this.closeEstimatedTax();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=330B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: t, Ie, B, l, ke
function {
  t.beginComponent(Ie.Icon, B, undefined, undefined);
  t.setViewModelProperty("src", l);
  t.setViewModelProperty("flipOnRtl", true);
  t.setViewModelProperty("color", ke.OAIColor.IconPrimary);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=596B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: t, Ie, E, r, Ce, l, ke
function {
  t.beginComponent(Ie.Icon, E, undefined, undefined);
  if (!(r)) goto L_c6;
  goto L_c9;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("src", l);
  if (!(r)) goto L_fe;
  goto L_103;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("systemImageName", "chevron.backward");
  t.setViewModelProperty("flipOnRtl", true);
  if (!(r)) goto L_168;
  goto L_16a;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("size", 24);
  if (!(r)) goto L_1e3;
  goto L_228;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("color", ke.OAIColor.IconPrimary);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=8 closure=28 cpool=2 bc=4418B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// locals: e, i, o, n, r, l, d, this
// closure: t, Ie, B, ke, E, Ce, _e, M, rt, He, V, nt, O, D, We, qe, L, tt, je, Ne, F, W, q, H, it, _, Re, G
function {
  this = this;
  let d;
  let l;
  let r;
  let n;
  let o;
  let i;
  let e;
  if (((undefined === undefined))) goto L_d4;
  e = <to_object>(undefined).page;
  i = <to_object>(undefined).disabled;
  o = <to_object>(undefined).onBack;
  n = <to_object>(undefined).inline;
  r = <to_object>(undefined).modal;
  <to_object>(undefined);
  goto L_fb;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_20;
  // [栈深重同步 1 -> 0]
  if (!(_e.isNativeIOS())) goto L_169;
  goto L_1ae;
  // [栈深重同步 1 -> 0]
  l = Ce.default.arrowLeft;
  if (!(!n)) goto L_1e5;
  if (!(!r)) goto L_1e5;
  d = _e.supportsNativeVariableBlur();
  t.beginRender(M, undefined);
  if (!(n)) goto L_267;
  goto L_28b;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", rt.detailPage);
  if (!(d)) goto L_392;
  t.beginComponent(He.VariableBlur, V, undefined, undefined);
  t.setViewModelProperty("style", rt.detailHeaderBlur);
  t.setViewModelProperty("stops", nt);
  t.endComponent();
  t.beginRender(O, undefined);
  if (!(r)) goto L_413;
  goto L_462;
  // [栈深重同步 4 -> 3]
  if (!(d)) goto L_43e;
  goto L_462;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", rt.detailHeader);
  if (!(this.state.taxTooltipOpen)) goto L_4dc;
  goto L_4e1;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityNavigation", "passthrough");
  if (!(r)) goto L_5e4;
  t.beginRender(D, undefined);
  t.setAttributeStyle("style", rt.modalTitle);
  t.setAttributeString("value", e.title);
  t.endRender();
  if (!(!r)) goto L_879;
  if (!(We.supportsInteractiveGlass(We.ControlMaterial.Glass))) goto L_879;
  t.beginComponent(qe.IconButton, L, undefined, undefined);
  t.setViewModelProperty("style", tt);
  t.setViewModelProperty("material", We.ControlMaterial.Glass);
  t.setViewModelProperty("accessibilityLabel", je.default.back());
  t.setViewModelProperty("disabled", i);
  t.setViewModelProperty("onPress", o);
  t.setUnnamedSlot(function <atom:0>);
  goto L_b52;
  // [栈深重同步 1 -> 0]
  t.beginComponent(Ne.Pressable, F, undefined, undefined);
  if (!(r)) goto L_91e;
  goto L_942;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("style", rt.back);
  if (!(r)) goto L_99a;
  goto L_99b;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("hoveredStyle", undefined);
  if (!(r)) goto L_9d4;
  goto L_9d9;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityId", "wallet-approval-back");
  if (!(r)) goto L_a55;
  goto L_a9d;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityLabel", je.default.back());
  t.setViewModelProperty("disabled", i);
  t.setViewModelProperty("onPress", o);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  if (!(!r)) goto L_c53;
  t.beginRender(W, undefined);
  t.setAttributeStyle("style", rt.detailTitle);
  t.setAttributeString("value", e.title);
  t.endRender();
  if (!(!r)) goto L_d03;
  t.beginRender(q, undefined);
  t.setAttributeStyle("style", rt.headerSpacer);
  t.endRender();
  t.endRender();
  t.beginRender(H, undefined);
  if (!(n)) goto L_dac;
  goto L_dd0;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", rt.detailScroll);
  if (!(d)) goto L_e07;
  goto L_e08;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("fadingEdgeLength", undefined);
  if (!(!d)) goto L_e3e;
  t.setAttribute("fadingEdgeEnd", undefined);
  if (!(this.state.taxTooltipOpen)) goto L_ed6;
  goto L_ed7;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onScroll", undefined);
  if (!(this.state.taxTooltipOpen)) goto L_f6f;
  goto L_f70;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onDragStart", undefined);
  if (!(d)) goto L_1001;
  t.beginRender(_, undefined);
  t.setAttributeNumber("height", it);
  t.endRender();
  this.sections();
  t.beginComponent(Re.DILAnchoredOverlayComponent, G, undefined, undefined);
  t.setViewModelProperty("presenter", this.taxOverlay);
  t.endComponent();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=436B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: e
// locals: this
// closure: _e
function {
  this = this;
  if ((_e.isNativeIOS())) goto L_50;
  if (!(_e.supportsNativeAndroidPlatformAlert())) goto L_7a;
  goto L_1b3;
  // [栈深重同步 1 -> 0]
  this.closeEstimatedTax();
  this.setState({taxTooltipOpen: true});
  this.taxOverlay.presentOverlay({anchorRef: e, tooltip: true, side: "top", align: "center", sideOffset: 8, width: 244, minWidth: "auto", maxWidth: 244, avoidCollisions: true, dismissible: true, onDismiss: this.closeEstimatedTax, renderBody: this.renderTaxOverlay});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=329B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: Ee, je
function {
  return Ee.platformAlert.present({title: je.default.estimatedTaxTitle(), message: je.default.estimatedTaxExplanation(), actions: [{id: "ok", title: je.default.estimatedTaxOk(), role: 1}]});   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=1 bc=301B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// locals: t, this
// closure: Ee, je, De, e
function {
  this = this;
  if (!(!this.presentingTaxAlert)) goto L_12b;
  this.presentingTaxAlert = true;
  try { // catch -> L_b1
  (await De.withLocalNativeRefs(this.renderer.contextId, function <atom:0>));
  <?>;
  // gosub (finally 块) 286
  undefined;
  goto L_12b;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_118
  if (!(e.isLoggingEnabled)) goto L_10d;
  console.warn("Unable to present Wallet estimated-tax information");
  <?>;
  // gosub (finally 块) 286
  undefined;
  goto L_12b;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 286
  throw <?>;
  this.presentingTaxAlert = false;
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: this, n
function {
  return this.openEstimatedTax(n);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=0 bc=720B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: t, Y, rt, e, ee, n, Ie, te, Ce, ke
function {
  t.beginRender(Y, undefined);
  t.setAttributeStyle("style", rt.body);
  t.setAttributeString("value", e.title);
  t.endRender();
  t.beginRender(ee, undefined);
  t.setAttributeRef(n);
  t.beginComponent(Ie.Icon, te, undefined, undefined);
  t.setViewModelProperty("src", Ce.default.infoCircle);
  t.setViewModelProperty("color", ke.OAIColor.IconPrimary);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=14 cpool=2 bc=1304B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: e, i
// locals: o, n, this
// closure: t, Y, rt, ee, Ie, te, Ce, ke, Q, Oe, $, Ne, X, je
function {
  this = this;
  let n;
  let o;
  if (!((true !== e.isEstimatedTax))) goto L_127;
  t.beginRender(Q, undefined);
  t.setAttributeStyle("style", rt.detailKey);
  t.setAttributeString("value", e.title);
  t.endRender();
  return;
  o = this.taxAnchors.get(i);
  if ((o)) goto L_1ed;
  o = new Oe.ElementRef();
  new Oe.ElementRef();
  this.taxAnchors.set(i, o);
  n = o;
  t.beginRender($, undefined);
  t.setAttributeStyle("style", rt.taxAnchor);
  t.beginComponent(Ne.Pressable, X, undefined, undefined);
  t.setViewModelProperty("style", rt.estimatedTaxLabel);
  t.setViewModelProperty("accessibilityId", "wallet-estimated-tax-info-".concat(i));
  t.setViewModelProperty("accessibilityLabel", je.default.estimatedTaxInfo(e.title));
  t.setViewModelProperty("disabled", this.viewModel.disabled);
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=9 cpool=0 bc=1011B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: o, n
// closure: t, le, rt, e, de, ae, this, i, se
function {
  t.beginRender(le, undefined);
  t.setAttributeStyle("style", rt.detailLineGroup);
  if (!((n > 0))) goto L_155;
  if (!(!e.total)) goto L_155;
  t.beginRender(de, undefined);
  t.setAttributeStyle("style", rt.divider);
  t.endRender();
  t.beginRender(ae, undefined);
  t.setAttributeStyle("style", rt.detailLine);
  if (!((true === o.isEstimatedTax))) goto L_22a;
  goto L_22b;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("alignItems", undefined);
  this.lineTitle(o, "".concat(i, "-", n));
  if (!(o.subtitle)) goto L_3a2;
  t.beginRender(se, undefined);
  t.setAttributeStyle("style", rt.detailValue);
  t.setAttributeString("value", o.subtitle);
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=8 cpool=0 bc=629B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: o, n
// closure: _e, this, i, t, we, rt, e, he
function {
  if (!(_e.isNativeIOS())) goto L_52;
  goto L_274;
  // [栈深重同步 1 -> 0]
  t.beginRender(we, undefined);
  t.setAttributeStyle("style", rt.detailLineGroup);
  if (((n > 0))) goto L_178;
  if (!((e.content.rows == null))) goto L_126;
  e.content.rows;
  goto L_127;
  if (!((undefined.length == null))) goto L_12d;
  undefined.length;
  if (((0 > 0))) goto L_178;
  if (!(e.content.text)) goto L_223;
  t.beginRender(he, undefined);
  t.setAttributeStyle("style", rt.divider);
  t.endRender();
  this.detailLink(o, i, n);
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=21 cpool=2 bc=2705B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: e, i
// closure: t, le, rt, de, ae, this, se, _e, we, he, oe, ne, re, ye, pe, me, ue, ce, ve, be, ge
function {
  t.beginRender(oe, undefined);
  t.setAttributeStyle("style", rt.section);
  if (!(e.title)) goto L_199;
  t.beginRender(ne, undefined);
  t.setAttributeStyle("style", rt.sectionTitle);
  t.setAttributeString("value", e.title);
  t.endRender();
  t.beginRender(re, undefined);
  t.setAttributeStyle("style", rt.detailGroup);
  if (!((e.content.rows == null))) goto L_262;
  e.content.rows;
  goto L_288;
  undefined.map(function <atom:0>);
  if (!(e.total)) goto L_6ca;
  t.beginRender(ye, undefined);
  t.setAttributeStyle("style", rt.detailLineGroup);
  t.beginRender(pe, undefined);
  t.setAttributeStyle("style", rt.divider);
  t.endRender();
  t.beginRender(me, undefined);
  t.setAttributeStyle("style", rt.detailLine);
  t.beginRender(ue, undefined);
  t.setAttributeStyle("style", rt.totalKey);
  t.setAttributeString("value", e.total.title);
  t.endRender();
  t.beginRender(ce, undefined);
  t.setAttributeStyle("style", rt.totalValue);
  t.setAttributeString("value", e.total.subtitle);
  t.endRender();
  t.endRender();
  t.endRender();
  if (!(e.content.text)) goto L_9ce;
  t.beginRender(ve, undefined);
  t.setAttributeStyle("style", rt.detailLineGroup);
  if (!((e.content.rows == null))) goto L_7dd;
  e.content.rows;
  goto L_7de;
  if (!((undefined.length == null))) goto L_7e4;
  undefined.length;
  if (!((0 > 0))) goto L_891;
  t.beginRender(be, undefined);
  t.setAttributeStyle("style", rt.divider);
  t.endRender();
  t.beginRender(ge, undefined);
  t.setAttributeStyle("style", rt.body);
  t.setAttributeString("value", e.content.text);
  t.endRender();
  t.endRender();
  if (!((e.content.links == null))) goto L_a1a;
  e.content.links;
  goto L_a40;
  undefined.map(function <atom:0>);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=21 cpool=1 bc=792B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// locals: this
// closure: t, le, rt, de, ae, se, _e, we, he, oe, ne, re, ye, pe, me, ue, ce, ve, be, ge, ie
function {
  this = this;
  t.beginRender(ie, undefined);
  t.setAttributeStyle("style", rt.detailBody);
  if (!(this.state.taxTooltipOpen)) goto L_f4;
  goto L_f9;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityNavigation", "passthrough");
  if (!(this.viewModel.modal)) goto L_16f;
  goto L_171;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingLeft", 16);
  if (!(this.viewModel.modal)) goto L_1e7;
  goto L_1e9;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingRight", 16);
  if (!(this.viewModel.modal)) goto L_25f;
  goto L_261;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingBottom", 40);
  this.viewModel.page.sections.map(function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=104B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: this, e
function {
  return this.viewModel.onOpenLink(e.url);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=635B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// closure: t, xe, rt, e, Ie, Ae, Ce, _e, ke
function {
  t.beginRender(xe, undefined);
  t.setAttributeStyle("style", rt.linkText);
  t.setAttributeString("value", e.label);
  t.endRender();
  t.beginComponent(Ie.Icon, Ae, undefined, undefined);
  t.setViewModelProperty("src", Ce.default.externalLink);
  if (!(_e.isNativeIOS())) goto L_20a;
  goto L_24f;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("color", ke.OAIColor.IconAccent);
  t.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=4 closure=10 cpool=2 bc=577B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: e, i, o
// locals: this
// closure: t, xe, rt, Ie, Ae, Ce, _e, ke, Ne, Se
function {
  this = this;
  t.beginComponent(Ne.Pressable, Se, undefined, undefined);
  t.setViewModelProperty("style", rt.detailLink);
  t.setViewModelProperty("accessibilityId", "wallet-approval-detail-link-".concat(i, "-", o));
  t.setViewModelProperty("accessibilityLabel", e.label);
  t.setViewModelProperty("disabled", this.viewModel.disabled);
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=123 closure=0 cpool=18 bc=10561B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// args: require, module, exports
// locals: e, t, i, o, n, r, l, d, a, s, y, p, m, u, c, v, b, g, w, h, S, x, A, P, f, R, C, k, T, I, N, M, V, O, D, L, B, F, E, W, q, H, _, G, j, z, Z, U, J, K, Q, $, X, Y, ee, te, ie, oe, ne, re, le, de, ae, se, ye, pe, me, ue, ce, ve, be, ge, we, he, Se, xe, Ae, Pe, fe, Re, Ce, ke, Te, Ie, Ne, Me, Ve, Oe, De, Le, Be, Fe, Ee, We, qe, He, _e, Ge, je, ze, Ze, Ue, Je, Ke, WalletApprovalSummary, <class_fields_init>, WalletApprovalSummary#1, Qe, WalletApprovalDetailContent, <class_fields_init>#1, WalletApprovalDetailContent#1, $e, Xe, Ye, et, tt, it, ot, nt, rt
function {
  Je = function Je;
  Ke = function Ke;
  Qe = function Qe;
  let rt;
  let nt;
  let ot;
  let it;
  let tt;
  let et;
  let Ye;
  let Xe;
  let $e;
  let WalletApprovalDetailContent#1;
  let WalletApprovalSummary#1;
  let Ue;
  let Ze;
  let ze;
  let je;
  let Ge;
  let _e;
  let He;
  let qe;
  let We;
  let Ee;
  let Fe;
  let Be;
  let Le;
  let De;
  let Oe;
  let Ve;
  let Me;
  let Ne;
  let Ie;
  let Te;
  let ke;
  let Ce;
  let Re;
  let fe;
  let Pe;
  let Ae;
  let xe;
  let Se;
  let he;
  let we;
  let ge;
  let be;
  let ve;
  let ce;
  let ue;
  let me;
  let pe;
  let ye;
  let se;
  let ae;
  let de;
  let le;
  let re;
  let ne;
  let oe;
  let ie;
  let te;
  let ee;
  let Y;
  let X;
  let $;
  let Q;
  let K;
  let J;
  let U;
  let Z;
  let z;
  let j;
  let G;
  let _;
  let H;
  let q;
  let W;
  let E;
  let F;
  let B;
  let L;
  let D;
  let O;
  let V;
  let M;
  let N;
  let I;
  let T;
  let k;
  let C;
  let R;
  let f;
  let P;
  let A;
  let x;
  let S;
  let h;
  let w;
  let g;
  let b;
  let v;
  let c;
  let u;
  let m;
  let p;
  let y;
  let s;
  let a;
  let d;
  let l;
  let r;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveWalletTypography = undefined;
  exports.WalletApprovalSummary = undefined;
  exports.renderWalletPaymentMethod = undefined;
  exports.WalletApprovalDetailContent = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeNodePrototype("layout", undefined, "1fp0_fIyYbE_DbTX");
  o = t.makeComponentPrototype(["pressedOpacity", 0.6, "accessibilityId", "wallet-approval-purchase"], "14L0N1sDdQ3NOxWS");
  n = t.makeNodePrototype("layout", undefined, "AG5ALjo3gR5x3t_e");
  r = t.makeNodePrototype("label", undefined, "gVn-kWS8I6pQUpJf");
  l = t.makeNodePrototype("layout", undefined, "5-Y_bJjY0J6ETvpd");
  d = t.makeNodePrototype("label", undefined, "j0zbUxiDDTGyl5Qy");
  a = t.makeNodePrototype("label", undefined, "vNHczxajucx9c1Uy");
  s = t.makeNodePrototype("label", undefined, "IGFesf2Px6Tj03FR");
  y = t.makeNodePrototype("label", undefined, "BCeXQ3M9REHUefLu");
  p = t.makeComponentPrototype(["size", 16], "x-h5wxhBasrWKPRi");
  m = t.makeNodePrototype("layout", undefined, "WHql72tcS6-CF6tl");
  u = t.makeNodePrototype("label", undefined, "8QczAyR_txoZUt-P");
  c = t.makeNodePrototype("label", undefined, "wJFA7YFQtLXhtQoM");
  v = t.makeNodePrototype("layout", undefined, "A1-SVD5U0n0uP3BI");
  b = t.makeNodePrototype("label", undefined, "Z7mxce5D95ItdS7l");
  g = t.makeComponentPrototype(["pressedOpacity", 0.6], "CBrVyn1teSBr8XYo");
  w = t.makeComponentPrototype(["size", 20], "QxHddpo09_pxiZm_");
  h = t.makeNodePrototype("layout", undefined, "EfPl5ZjiHU-y4pZq");
  S = t.makeComponentPrototype(["size", 20], "GcxM25u-aFr-_uFJ");
  x = t.makeNodePrototype("layout", undefined, "_eniOQZjRuI9jkCy");
  A = t.makeNodePrototype("label", undefined, "dG3MzBCe5g2v7xfv");
  P = t.makeNodePrototype("label", undefined, "SvF9yp_9Fqdb8Hn4");
  f = t.makeNodePrototype("label", undefined, "c-iGYw67aopFHIxG");
  R = t.makeComponentPrototype(["size", 16], "EdbsRWe615zwdZjB");
  C = t.makeNodePrototype("view", undefined, "8vPNQ0hPf_R0L8lI");
  k = t.makeComponentPrototype(undefined, "XBzazH9iVXrAjmFS");
  T = t.makeNodePrototype("layout", undefined, "PBHayApvtCX9Ng7T");
  I = t.makeNodePrototype("label", undefined, "QvNZ0yIAt9o_iZVa");
  N = t.makeNodePrototype("label", undefined, "cMjMfjayolI8iqhw");
  M = t.makeNodePrototype("layout", undefined, "gUa_m01d0P5gOKmu");
  V = t.makeComponentPrototype(["radius", 2], "lF1qoVoAwIc9fmei");
  O = t.makeNodePrototype("view", undefined, "AZ3S_xg6Ft3brV5H");
  D = t.makeNodePrototype("label", undefined, "p0tZ8LI9ktKdLf7-");
  L = t.makeComponentPrototype(["accessibilityId", "wallet-approval-back"], "xJPH4nl2ca2Zeowy");
  B = t.makeComponentPrototype(["systemImageName", "chevron.backward", "size", 24], "tQczE9RzjlsT3WIM");
  F = t.makeComponentPrototype(["pressedOpacity", 0.6], "2y8FaewVF3NJXj9U");
  E = t.makeComponentPrototype(undefined, "orxLQIfBmctSGA0J");
  W = t.makeNodePrototype("label", undefined, "cLVWsbsqCrSSDT67");
  q = t.makeNodePrototype("layout", undefined, "aVwGh2FZ_vIMgFDc");
  H = t.makeNodePrototype("scroll", undefined, "CjxUtYocejqFN97Z");
  _ = t.makeNodePrototype("layout", undefined, "2Nr861d53z4LGL9-");
  G = t.makeComponentPrototype(["depth", 0], "1T1s5zFIJsWBS-Xi");
  j = t.makeNodePrototype("view", ["accessibilityNavigation", "passthrough", "padding", 12, "flexDirection", "row", "alignItems", "flex-start", "gap", 8], "JwI5kZGFffHNp9jC");
  z = t.makeNodePrototype("view", ["accessibilityCategory", "text", "accessibilityNavigation", "leaf", "flexGrow", 1, "flexShrink", 1, "gap", 2], "k-IkMtvjkdOIO43u");
  Z = t.makeNodePrototype("label", undefined, "T3OHfM9BsQtn5ry2");
  U = t.makeNodePrototype("label", undefined, "keEd8sTTGei1uZC4");
  J = t.makeComponentPrototype(["accessibilityId", "wallet-estimated-tax-close"], "PPrYPOLJCgmxSyO8");
  K = t.makeComponentPrototype(["size", 15, "color", "rgba(255, 255, 255, 0.7)"], "c1FENsRaZRFOJ0MC");
  Q = t.makeNodePrototype("label", undefined, "wEAki1s5wpxRXDh3");
  $ = t.makeNodePrototype("layout", undefined, "srHiiqwHBMj95Gwr");
  X = t.makeComponentPrototype(undefined, "cpwaqoDmqnLGemE5");
  Y = t.makeNodePrototype("label", undefined, "WHJZwBEzNNyoRVlM");
  ee = t.makeNodePrototype("view", undefined, "ycLW9dC6VB_jnyr0");
  te = t.makeComponentPrototype(["size", 16], "C-wA4-62cmgvIi2v");
  ie = t.makeNodePrototype("view", undefined, "zbh1yZv9FqWiLheD");
  oe = t.makeNodePrototype("layout", undefined, "Ae-qeyfq21PJe7Np");
  ne = t.makeNodePrototype("label", undefined, "j3fo4TBabiT4RY3A");
  re = t.makeNodePrototype("view", undefined, "gWJYdE0EuHU-Tbbg");
  le = t.makeNodePrototype("layout", undefined, "7GD9DWlNe_SFq6lO");
  de = t.makeNodePrototype("view", undefined, "doHaMAHeLmTo6Zor");
  ae = t.makeNodePrototype("layout", undefined, "BZYlUXOU8SgXsKzo");
  se = t.makeNodePrototype("label", undefined, "0JV7SoDPfxUv6nJf");
  ye = t.makeNodePrototype("layout", undefined, "0Yno8bA5N6Osls8v");
  pe = t.makeNodePrototype("view", undefined, "XwkaGJGkzERqPoJm");
  me = t.makeNodePrototype("layout", undefined, "ELSlRnR-VJwgbq55");
  ue = t.makeNodePrototype("label", undefined, "uqiu39qT_QCu3GEZ");
  ce = t.makeNodePrototype("label", undefined, "e2JVDzpkClESTzPo");
  ve = t.makeNodePrototype("layout", undefined, "1uOHZskkNlc_mbS3");
  be = t.makeNodePrototype("view", undefined, "WMkDoTn6OtD369QS");
  ge = t.makeNodePrototype("label", undefined, "uZEb5IJH5LuC5a2m");
  we = t.makeNodePrototype("layout", undefined, "NSFiDSfP2ZFqxkcl");
  he = t.makeNodePrototype("view", undefined, "gGgABV215-YXlWWC");
  Se = t.makeComponentPrototype(["accessibilityCategory", "link"], "WjRNZs1rdelTRKEt");
  xe = t.makeNodePrototype("label", undefined, "zIU_qzTZ44H6ZvAO");
  Ae = t.makeComponentPrototype(["size", 20], "L0J9DWu8b-piE-2i");
  Pe = require("chatgpt_wallet/src/WalletCardBrandIcon");
  fe = require("dil_core/src/DILAnchoredOverlay");
  Re = require("dil_core/src/DILAnchoredOverlayComponent");
  Ce = require("dil_icon_assets/res");
  ke = require("oai_core/src/OAITokens");
  Te = require("oai_core/src/OAITypography");
  Ie = require("oai_ui/src/components/Icon");
  Ne = require("oai_ui/src/components/Pressable");
  Me = require("valdi_core/src/Component");
  Ve = require("valdi_core/src/Device");
  Oe = require("valdi_core/src/ElementRef");
  De = require("valdi_core/src/NativeReferences");
  Le = require("valdi_core/src/Style");
  Be = require("valdi_core/src/SystemFont");
  Fe = require("valdi_core/src/utils/AttributedTextBuilder");
  Ee = require("valdi_platform_alert/src/PlatformAlert");
  We = require("valdi_ui/src/ControlMaterial");
  qe = require("valdi_ui/src/components/IconButton");
  He = require("valdi_ui/src/components/VariableBlur");
  _e = require("valdi_ui/src/Platform");
  Ge = require("../res");
  je = require("./Strings");
  ze = require("./WalletApprovalElicitation");
  Ze = require("./WalletApprovalReview");
  if (!(Ve.Device.isIOS())) goto L_13bb;
  if (!(!Ve.Device.isDesktop())) goto L_13bb;
  Ue = !Ve.Device.isWeb();
  exports.resolveWalletTypography = Je;
  let WalletApprovalSummary;
  let <class_fields_init>;
  class WalletApprovalSummary extends Me.Component { ... }
  <proto:WalletApprovalSummary>.onRender = function <atom:0>;
  <proto:WalletApprovalSummary>.row = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletApprovalSummary>;
  WalletApprovalSummary = function <atom:0>;
  // close_loc <class_fields_init>
  WalletApprovalSummary#1 = function <atom:0>;
  exports.WalletApprovalSummary = WalletApprovalSummary#1;
  exports.renderWalletPaymentMethod = Qe;
  let WalletApprovalDetailContent;
  let <class_fields_init>#1;
  class WalletApprovalDetailContent extends Me.StatefulComponent { ... }
  <proto:WalletApprovalDetailContent>.onViewModelUpdate = function <atom:0>;
  <proto:WalletApprovalDetailContent>.onRender = function <atom:0>;
  <proto:WalletApprovalDetailContent>.openEstimatedTax = function <atom:0>;
  <proto:WalletApprovalDetailContent>.presentEstimatedTaxAlert = function <atom:0>;
  <proto:WalletApprovalDetailContent>.lineTitle = function <atom:0>;
  <proto:WalletApprovalDetailContent>.sections = function <atom:0>;
  <proto:WalletApprovalDetailContent>.detailLink = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:WalletApprovalDetailContent>;
  WalletApprovalDetailContent = function <atom:0>;
  // close_loc <class_fields_init>#1
  WalletApprovalDetailContent#1 = function <atom:0>;
  exports.WalletApprovalDetailContent = WalletApprovalDetailContent#1;
  null;
  Je(Te.Typography.Body);
  $e = new Le.Style({color: ke.OAIColor.TextPrimary, numberOfLines: 0, flexShrink: 1});
  null;
  Je(Te.Typography.Subheadline);
  Xe = $e.extend({color: ke.OAIColor.TextSecondary});
  Ye = $e.extend({flexGrow: 1, flexBasis: 0});
  et = $e.extend({textAlign: "right", maxWidth: "65%", color: ke.OAIColor.TextTertiary});
  tt = new Le.Style({width: 44, height: 44, borderRadius: 22, justifyContent: "center", alignItems: "center"});
  it = 93;
  ot = new Le.Style({height: it, flexShrink: 0, paddingLeft: 24, paddingRight: 24, flexDirection: "row", alignItems: "center", gap: 8});
  nt = [{position: 0, alpha: 1}, {position: 1, alpha: 0}];
  if (!(Ue)) goto L_1c69;
  goto L_1c90;
  // [栈深重同步 5 -> 4]
  if (!(Ue)) goto L_1d2b;
  goto L_1d52;
  // [栈深重同步 5 -> 4]
  rt = {taxTooltipClose: new Le.Style({width: 16, height: 16, touchAreaExtension: 14, justifyContent: "center", alignItems: "center"}), iconSlot: new Le.Style({width: 28, height: 28, flexShrink: 0, alignItems: "center", justifyContent: "center", accessibilityNavigation: "ignored"}), content: new Le.Style({width: "100%", gap: 30}), inlineContent: new Le.Style({width: "100%", padding: 20, gap: 20}), inlineHeader: new Le.Style({flexDirection: "row", alignItems: "center", gap: 12, borderRadius: 8}), inlineTitle: $e.extend({font: Be.systemBoldFont(17), numberOfLines: 2}), inlineSubtitle: new Le.Style({flexDirection: "row", flexWrap: "wrap", gap: 4}), moreItems: Xe.extend({color: ke.OAIColor.TextAccent}), inlineHover: new Le.Style({backgroundColor: ke.OAIColor.BgTertiary}), inlineRow: new Le.Style({flexDirection: "row", alignItems: "center", minHeight: 56, gap: 16, borderRadius: 8}), inlinePayment: new Le.Style({flexDirection: "row", alignItems: "center", flexGrow: 1, flexShrink: 1, flexBasis: 160, gap: 12}), header: new Le.Style({alignItems: "center", gap: 4}), total: $e.extend({font: Be.systemBoldFont(44), lineHeight: 52, textAlign: "center"}), inlineTotal: $e.extend({font: Be.systemBoldFont(32), lineHeight: 40, textAlign: "center"}), merchant: Xe.extend({textAlign: "center"}), rows: new Le.Style({gap: 8}), row: new Le.Style({flexDirection: "row", alignItems: "center", backgroundColor: ke.OAIColor.BgTertiary, borderRadius: 16, minHeight: 76, padding: 16, gap: 12}), copy: new Le.Style({flexGrow: 1, flexShrink: 1, flexBasis: 0, gap: 2}), body: $e, secondary: Xe, summaryTitle: $e.extend({numberOfLines: 1}), summarySubtitle: Xe.extend({numberOfLines: 1}), trailing: Xe.extend({maxWidth: "30%", numberOfLines: 2, textAlign: "right"}), blocker: $e.extend({color: ke.OAIColor.TextStatusError}), detailPage: new Le.Style({width: "100%", flexGrow: 1, flexShrink: 1, flexBasis: 0}), inlineDetailPage: new Le.Style({width: "100%", flexShrink: 1}), detailHeader: ot, detailHeaderOverlay: ot.extend({position: "absolute", top: 0, left: 0, right: 0, zIndex: 2}), detailHeaderBlur: new Le.Style({position: "absolute", top: 0, left: 0, right: 0, height: it, zIndex: 1}), detailTitle: $e.extend({font: Be.systemBoldFont(17), flexGrow: 1, textAlign: "center"}), modalHeader: new Le.Style({minHeight: 68, flexShrink: 0, padding: 20, flexDirection: "row", alignItems: "center", gap: 12}), modalTitle: $e.extend({font: Be.systemBoldFont(20), flexGrow: 1}), modalClose: new Le.Style({width: 28, height: 28, borderRadius: 6, justifyContent: "center", alignItems: "center"}), modalCloseHovered: new Le.Style({backgroundColor: ke.OAIColor.BgSecondary}), headerSpacer: new Le.Style({width: 44}), back: tt.extend({backgroundColor: ke.OAIColor.BgSecondary}), detailScroll: new Le.Style({width: "100%", flexGrow: 1, flexShrink: 1, flexBasis: 0, showsVerticalScrollIndicator: true}), inlineDetailScroll: new Le.Style({width: "100%", maxHeight: 320, flexShrink: 1, showsVerticalScrollIndicator: true}), detailBody: new Le.Style({width: "100%", paddingLeft: 16, paddingRight: 16, paddingBottom: 40, gap: 16}), section: new Le.Style({gap: 4}), sectionTitle: Xe.extend({marginLeft: 16, marginRight: 16}), detailGroup: new Le.Style({padding: 16, gap: 10, backgroundColor: ke.OAIColor.BgTertiary, borderRadius: 16}), detailLineGroup: new Le.Style({gap: 15}), detailLine: new Le.Style({flexDirection: "row", justifyContent: "space-between", gap: 12}), taxAnchor: new Le.Style({flexGrow: 1, flexShrink: 1, flexBasis: 0}), estimatedTaxLabel: new Le.Style({flexDirection: "row", alignItems: "center", touchAreaExtensionTop: 12, touchAreaExtensionBottom: 12, gap: 4}), detailKey: Ye, detailValue: et, totalKey: Ye.extend({font: Be.systemBoldFont(17)}), totalValue: et.extend({font: Be.systemBoldFont(17), color: ke.OAIColor.TextPrimary}), divider: new Le.Style({height: 0.5, backgroundColor: ke.OAIColor.BorderDefault, width: "100%", marginTop: 5}), detailLink: new Le.Style({flexDirection: "row", alignItems: "center", minHeight: 44, gap: 8}), linkText: $e.extend({color: ke.OAIColor.TextAccent, flexGrow: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_approval/src/WalletApprovalSummary
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
