// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=116B file=chatgpt_explore_feed/src/ExploreFeedFeedback
// closure: o, r, t
function {
  return new o.ExploreFeedInteractions(new r.OAINetworkClient(t), t.loggingService);
}

// fn t  args=2 vars=2 closure=3 cpool=1 bc=190B file=chatgpt_explore_feed/src/ExploreFeedFeedback
// args: n, t
// closure: o, r, e
function {
  return e.accountContainerFor(t).resolve(o.ExploreFeedInteractions, function <atom:0>).sendFeedback(n, Date.now());   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=chatgpt_explore_feed/src/ExploreFeedFeedback
// args: e
function {
  e.Up = "up";
  e.Down = "down";
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=151B file=chatgpt_explore_feed/src/ExploreFeedFeedback
// args: require, module, exports
// locals: e, r, o, n, t
function {
  t = function t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreFeedFeedbackPreference = undefined;
  exports.handleExploreFeedFeedbackSelection = undefined;
  e = require("oai_platform_services/src/AccountContainer");
  r = require("oai_platform_services/src/OAINetworkClient");
  o = require("./ExploreFeedInteractions");
  if ((n)) goto L_87;
  n = {};
  exports.ExploreFeedFeedbackPreference = {};
  !function <atom:0>({});
  exports.handleExploreFeedFeedbackSelection = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedFeedback
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
