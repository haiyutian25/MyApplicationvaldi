// fn r  args=2 vars=2 closure=1 cpool=0 bc=220B file=chatgpt_explore_feed/src/ExploreFeedRenderState
// args: o, r
// closure: e
function {
  if (!((r > 0))) goto L_4b;
  return e.ExploreFeedLoadPhase.Loaded;
  if (!((o === e.ExploreFeedLoadPhase.Idle))) goto L_da;
  return e.ExploreFeedLoadPhase.Loading;
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=chatgpt_explore_feed/src/ExploreFeedRenderState
// args: e
function {
  e.Loading = "loading";
  e.Loaded = "loaded";
  e.Error = "error";
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=127B file=chatgpt_explore_feed/src/ExploreFeedRenderState
// args: require, module, exports
// locals: e, o, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreFeedRenderPhase = undefined;
  exports.exploreFeedContentPhase = undefined;
  e = require("./ExploreFeedRequestController");
  if ((o)) goto L_70;
  o = {};
  exports.ExploreFeedRenderPhase = {};
  !function <atom:0>({});
  exports.exploreFeedContentPhase = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
