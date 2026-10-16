// fn e  args=1 vars=1 closure=1 cpool=0 bc=252B file=chatgpt_explore_feed/src/ExploreFeedCardMetadata
// args: e
// closure: r
function {
  // append([], 0, e.candidateIds)
  e.candidateIds;
  return {itemId: e.id, messageId: "explore-feed-".concat(e.id), referenceIndex: 0, widgetName: e.name, widgetType: r(e.dil), candidateIds: []};
}

// fn t  args=1 vars=1 closure=0 cpool=0 bc=211B file=chatgpt_explore_feed/src/ExploreFeedCardMetadata
// args: e
function {
  return {messageId: e.messageId, contentReferenceIndex: e.referenceIndex, contentReferenceStartIndex: e.referenceIndex, isModelWrittenDil: false, isReadOnly: false, widgetName: e.widgetName, widgetType: e.widgetType};
}

// fn r  args=1 vars=2 closure=0 cpool=0 bc=275B file=chatgpt_explore_feed/src/ExploreFeedCardMetadata
// args: e
// locals: t
function {
  let t;
  if (!(("string" == typeof e.type))) goto L_51;
  return e.type;
  t = e.compiledDil;
  if ((("object" != typeof t))) goto L_e6;
  if (((null === t))) goto L_e6;
  if ((Array.isArray(t))) goto L_e6;
  if (!(("string" != typeof t.type))) goto L_ee;
  return "unknown";
  return t.type;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=134B file=chatgpt_explore_feed/src/ExploreFeedCardMetadata
// args: require, module, exports
// locals: e, t, r
function {
  e = function e;
  t = function t;
  r = function r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.EXPLORE_FEED_CARD_PLACEHOLDER_HEIGHT = undefined;
  exports.exploreFeedCardSource = undefined;
  exports.exploreFeedMessageMetadata = undefined;
  exports.EXPLORE_FEED_CARD_PLACEHOLDER_HEIGHT = 160;
  exports.exploreFeedCardSource = e;
  exports.exploreFeedMessageMetadata = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedCardMetadata
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
