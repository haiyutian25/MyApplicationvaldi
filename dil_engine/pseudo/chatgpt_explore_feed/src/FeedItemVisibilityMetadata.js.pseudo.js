// fn i  args=2 vars=3 closure=0 cpool=0 bc=589B file=chatgpt_explore_feed/src/FeedItemVisibilityMetadata
// args: i, e
// locals: o
function {
  let o;
  o = i.logging_metadata;
  if (!((undefined !== i.id))) goto L_24c;
  if (!((0 !== i.id.length))) goto L_24c;
  if (!((undefined !== o))) goto L_24c;
  if (!((o.feed_id == null))) goto L_d5;
  o.feed_id;
  return {id: i.id, feedId: e, feedPosition: o.feed_position, homeUnitId: o.home_unit_id, displayType: o.display_type, producer: o.producer, itemType: o.item_type, sectionId: o.section_id, sectionPosition: o.section_position, horizontalGroupId: o.horizontal_group_id, horizontalPosition: o.horizontal_position};
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=chatgpt_explore_feed/src/FeedItemVisibilityMetadata
// args: require, module, exports
// locals: i
function {
  i = function i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.feedItemVisibilityUnit = undefined;
  exports.feedItemVisibilityUnit = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/FeedItemVisibilityMetadata
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
