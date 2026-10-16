// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=24B file=dil_widgets/src/DILLinkMetadata
// args: t
// closure: o
function {
  if (((undefined === o[t]))) goto L_17;
  return ("string" == typeof o[t]);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=86B file=dil_widgets/src/DILLinkMetadata
// args: t
// locals: e
// closure: o
function {
  let e;
  e = o[t];
  if (((undefined === e))) goto L_55;
  if (!(("number" == typeof e))) goto L_55;
  if (!(Number.isSafeInteger(e))) goto L_55;
  return (e >= 0);
}

// fn o  args=1 vars=9 closure=4 cpool=2 bc=737B file=dil_widgets/src/DILLinkMetadata
// args: o
// locals: n, i, c, d, u, o#1, i#1, t
// closure: a, t, e, r
function {
  let c;
  let i;
  let n;
  n = new Map();
  if (!((a(o) == null))) goto L_1f;
  a(o);
  goto L_40;
  i = a(undefined.opGenui);
  if (!((i == null))) goto L_4e;
  i;
  goto L_6f;
  c = a(undefined.linkMetadataByUrl);
  if (!((undefined === c))) goto L_7c;
  return n;
  let u;
  let d;
  const _it1 = Object.entries(c);
  goto L_2d4;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  d = <value(_it2)>;
  <done(_it2)>;
  u = <value(_it2)>;
  let i#1;
  let o#1;
  o#1 = a(u);
  if (!((o#1 == null))) goto L_da;
  o#1;
  goto L_fb;
  // [栈深重同步 4 -> 5]
  if (((<value(_it2)> !== <?>.linkType))) goto L_217;
  if ((("string" != typeof o#1.productId))) goto L_217;
  if (((0 === o#1.productId.length))) goto L_217;
  if ((!t.every(function <atom:0>))) goto L_217;
  if (!((undefined !== o#1.hasPopularTag))) goto L_1e9;
  if ((("boolean" != typeof o#1.hasPopularTag))) goto L_217;
  if (!(!e.every(function <atom:0>))) goto L_21f;
  // close_loc o#1
  goto L_2d4;
  i#1 = {linkType: o#1.linkType, productId: o#1.productId};
  let t;
  for (const t of r) {
    if (!((undefined !== o#1[t]))) goto L_29c;
    i#1[t] = o#1[t];
    o#1[t];
    // [栈深重同步 3 -> 6]
  }
  n.set(d, i#1);
  // close_loc o#1
  if (!(<done(_it3)>)) goto L_b2;
  <value(_it3)>;
  return n;
}

// fn n  args=4 vars=10 closure=1 cpool=0 bc=562B file=dil_widgets/src/DILLinkMetadata
// args: t, e, r, o
// locals: n, i, c, d, u, t#1
// closure: a
function {
  let c;
  let i;
  let n;
  if (!(("link" !== e))) goto L_13;
  return;
  if (!((a(t) == null))) goto L_1f;
  a(t);
  goto L_40;
  n = a(undefined.opGenui);
  if (!((n == null))) goto L_4e;
  n;
  goto L_6f;
  i = a(undefined.linkMetadataByUrl);
  if (!((undefined === i))) goto L_79;
  return;
  c = undefined;
  let u;
  let d;
  const _it1 = Object.entries(i);
  goto L_216;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  d = <value(_it2)>;
  <done(_it2)>;
  u = <value(_it2)>;
  let t#1;
  if (((o.canonicalHTTPSNavigationURL(d) !== r))) goto L_216;
  t#1 = a(u);
  if (!((t#1 == null))) goto L_105;
  t#1;
  goto L_126;
  // [栈深重同步 4 -> 5]
  if (((<value(_it2)> != typeof <?>.activationEvent))) goto L_1e5;
  if ((("string" != typeof t#1.activationSurface))) goto L_1e5;
  if (!((n == null))) goto L_190;
  n;
  goto L_1b1;
  if (((t#1.activationSurface !== undefined.interactionSurface))) goto L_1e5;
  if (!((undefined !== c))) goto L_1ed;
  if (!((c !== t#1.activationEvent))) goto L_1ed;
  return undefined;
  // [栈深重同步 0 -> 3]
  c = t#1.activationEvent;
  t#1.activationEvent;
  if (!(<done(<?>)>)) goto L_b1;
  <value(<?>)>;
  if (!((undefined === c))) goto L_228;
  return undefined;
  return {event_name: c};
}

// fn i  args=1 vars=2 closure=1 cpool=0 bc=112B file=dil_widgets/src/DILLinkMetadata
// args: t
// locals: e
// closure: a
function {
  let e;
  if (!((t == null))) goto L_d;
  t;
  goto L_2e;
  if (!((a(undefined.event_data) == null))) goto L_37;
  a(undefined.event_data);
  goto L_58;
  e = undefined.widget_name;
  if ((("care_provider_results_widget" === e))) goto L_6f;
  return ("care_provider_sidebar_widget" === e);
}

// fn a  args=1 vars=1 closure=0 cpool=0 bc=67B file=dil_widgets/src/DILLinkMetadata
// args: t
function {
  if (((null === t))) goto L_3d;
  if ((("object" != typeof t))) goto L_3d;
  if (!(Array.isArray(t))) goto L_41;
  return undefined;
  return t;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=4 bc=223B file=dil_widgets/src/DILLinkMetadata
// args: require, module, exports
// locals: t, e, r, o, n, i, a
function {
  o = function o;
  n = function n;
  i = function i;
  a = function a;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.readDILLinkMetadata = undefined;
  exports.readDILLinkActivation = undefined;
  exports.isDILCareProviderLink = undefined;
  t = ["productEventUuid", "productUrl", "productTitle", "productMerchants", "productProvider", "offerMerchantName", "offerPrice"];
  e = ["offerIndex", "offerCount"];
  // append([], 0, t)
  // append([], t, e)
  [][e] = "hasPopularTag";
  ("hasPopularTag" ++);
  r = [];
  exports.readDILLinkMetadata = o;
  exports.readDILLinkActivation = n;
  exports.isDILCareProviderLink = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILLinkMetadata
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
