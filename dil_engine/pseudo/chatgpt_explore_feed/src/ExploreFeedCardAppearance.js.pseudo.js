// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=11B file=chatgpt_explore_feed/src/ExploreFeedCardAppearance
// args: e
// closure: d, s
function {
  if (!(d(e))) goto L_9;
  return s(e);
  return e;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=8B file=chatgpt_explore_feed/src/ExploreFeedCardAppearance
// args: e, r
// closure: t
function {
  return (e !== t[r]);
}

// fn s  args=1 vars=4 closure=5 cpool=2 bc=571B file=chatgpt_explore_feed/src/ExploreFeedCardAppearance
// args: e
// locals: r, t, o
// closure: d, s, a, o, exports
function {
  let t;
  let r;
  r = e;
  t = e.children;
  if (!(Array.isArray(t))) goto L_c7;
  let o;
  o = t.map(function <atom:0>);
  if (!(o.some(function <atom:0>))) goto L_c6;
  null;
  e;
  r = {children: o};
  {children: o};
  if (!(a(e))) goto L_104;
  null;
  r;
  r = {background: o.EXPLORE_CARD_BACKGROUND};
  {background: o.EXPLORE_CARD_BACKGROUND};
  if ((("Card" !== e.type))) goto L_1a5;
  if (((true !== e.shadow))) goto L_1a5;
  if (!((undefined !== e.style))) goto L_1ab;
  if (!(!d(e.style))) goto L_1ab;
  return r;
  null;
  r;
  if (!(d(e.style))) goto L_206;
  goto L_207;
  // [栈深重同步 3 -> 2]
  null;
  {};
  return {shadow: false, style: {boxShadow: exports.EXPLORE_CARD_BOX_SHADOW}};
}

// fn a  args=1 vars=1 closure=2 cpool=0 bc=658B file=chatgpt_explore_feed/src/ExploreFeedCardAppearance
// args: r
// closure: d, e
function {
  if (!(("Card" !== r.type))) goto L_51;
  if (!(!!d(r.logging_metadata))) goto L_291;
  if (!((undefined === r.$background))) goto L_291;
  if (!((undefined === r.$style))) goto L_291;
  if (((undefined === r.style))) goto L_193;
  if (!(d(r.style))) goto L_193;
  if (!((undefined === r.style.background))) goto L_193;
  if (!(!!(undefined === r.style.backgroundColor))) goto L_291;
  if (!(("string" == typeof r.background))) goto L_215;
  return ("color-surface-elevated" === e.resolveDILBackgroundColor(r.background));
  if (!(("Card" === r.type))) goto L_291;
  if (!(("soft" !== r.variant))) goto L_291;
  return (undefined === r.background);
}

// fn d  args=1 vars=1 closure=0 cpool=0 bc=63B file=chatgpt_explore_feed/src/ExploreFeedCardAppearance
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=3 bc=356B file=chatgpt_explore_feed/src/ExploreFeedCardAppearance
// args: require, module, exports
// locals: e, r, o, t, s, a, d
function {
  s = function s;
  a = function a;
  d = function d;
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.EXPLORE_CARD_BOX_SHADOW = undefined;
  exports.normalizeExploreCardAppearance = undefined;
  e = require("dil_core/src/colors/DILColor");
  r = require("valdi_core/src/Device");
  o = require("./ExploreFeedColors");
  if (!(r.Device.isWeb())) goto L_cc;
  goto L_11b;
  // [栈深重同步 1 -> 0]
  if (!(r.Device.isDesktop())) goto L_119;
  goto L_11b;
  // [栈深重同步 1 -> 0]
  t = 8;
  exports.EXPLORE_CARD_BOX_SHADOW = "0 4 ".concat(t, " rgba(0, 0, 0, 0.05)");
  exports.normalizeExploreCardAppearance = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedCardAppearance
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
