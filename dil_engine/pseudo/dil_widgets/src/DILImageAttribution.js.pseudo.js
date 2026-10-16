// fn r  args=1 vars=2 closure=2 cpool=0 bc=205B file=dil_widgets/src/DILImageAttribution
// args: e
// locals: r
// closure: i, t
function {
  try { // catch -> L_63
  if (!((e == null))) goto L_10;
  e;
  goto L_60;
  if (!((undefined.experimentService == null))) goto L_39;
  undefined.experimentService;
  goto L_60;
  return (true === undefined.isFeatureFlagEnabled(i));
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_cc
  if (!(t.isLoggingEnabled)) goto L_c7;
  console.warn(("Unable to evaluate native image attribution: " + String(r)));
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn n  args=2 vars=4 closure=1 cpool=4 bc=574B file=dil_widgets/src/DILImageAttribution
// args: t, i
// locals: r, n
// closure: e
function {
  let n;
  let r;
  if (((null === t))) goto L_43;
  if ((("object" != typeof t))) goto L_43;
  if (!(Array.isArray(t))) goto L_46;
  return;
  r = t;
  if (!((false === r.show_url))) goto L_72;
  return;
  if (!((true === r.is_proxied_image))) goto L_e3;
  goto L_107;
  // [栈深重同步 3 -> 2]
  n = i.canonicalHTTPSNavigationURL(r.url);
  if (!((undefined === n))) goto L_113;
  return;
  if (!(("string" == typeof r.attribution))) goto L_1bc;
  if (!((r.attribution.trim().length > 0))) goto L_1bc;
  goto L_238;
  // [栈深重同步 2 -> 1]
  return {href: n, label: e.hostnameFromUrl(n).replace(new RegExp("^www\\."), "").replace(new RegExp("\\.[^.]*$"), "")};
}

// fn a  args=2 vars=2 closure=0 cpool=1 bc=113B file=dil_widgets/src/DILImageAttribution
// args: t, e
function {
  if (!(Number.isFinite(t))) goto L_70;
  if (!(Number.isFinite(e))) goto L_70;
  if (!((t > 0))) goto L_70;
  if (!((e > 0))) goto L_70;
  return ((t / e) >= 0.5999998807907104);
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=3 bc=250B file=dil_widgets/src/DILImageAttribution
// args: require, module, exports
// locals: t, e, i, r, n, o, a
function {
  r = function r;
  n = function n;
  a = function a;
  let o;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_IMAGE_ATTRIBUTION_CONTENT_WIDTH = undefined;
  exports.isDILImageAttributionEnabled = undefined;
  exports.resolveDILImageAttribution = undefined;
  exports.isDILImageAttributionWidthEligible = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("coreutils/src/url");
  exports.DIL_IMAGE_ATTRIBUTION_CONTENT_WIDTH = Symbol("DIL image attribution content width");
  i = {flagName: "chatgpt-web-dil-v2-image-attribution"};
  exports.isDILImageAttributionEnabled = r;
  exports.resolveDILImageAttribution = n;
  o = (2 ** -23);
  exports.isDILImageAttributionWidthEligible = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILImageAttribution
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
