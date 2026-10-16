// fn i  args=1 vars=1 closure=3 cpool=0 bc=307B file=chatgpt_explore_feed/src/ExploreFeedColors
// args: i
// closure: o, e, r
function {
  if (!(o.Device.isAndroid())) goto L_9f;
  if (!(!o.Device.isWeb())) goto L_9f;
  if (!(!i)) goto L_9f;
  return "#FCFCFC";
  if (!(i)) goto L_c8;
  goto L_ec;
  // [栈深重同步 1 -> 0]
  return e.OAI_LIGHT_COLOR_PALETTE[r.OAIColor.BgCanvas];
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=157B file=chatgpt_explore_feed/src/ExploreFeedColors
// args: require, module, exports
// locals: e, r, o, i
function {
  i = function i;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.EXPLORE_CARD_BACKGROUND = undefined;
  exports.exploreFeedPageColor = undefined;
  e = require("oai_core/src/OAITheme");
  r = require("oai_core/src/OAITokens");
  o = require("valdi_core/src/Device");
  exports.EXPLORE_CARD_BACKGROUND = {light: "surface-elevated", dark: "#181818"};
  exports.exploreFeedPageColor = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedColors
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
