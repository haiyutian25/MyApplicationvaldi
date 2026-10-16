// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_maps/src/MapPlaceCardPresentation
// args: e
function {
  return e.text;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_maps/src/MapPlaceCardPresentation
// args: e
function {
  return e.text;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=74B file=chatgpt_maps/src/MapPlaceCardPresentation
// args: e
function {
  if (!((e.accessibilityLabel == null))) goto L_49;
  e.accessibilityLabel;
  return e.text;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=12B file=chatgpt_maps/src/MapPlaceCardPresentation
// args: e
function {
  if (!((undefined !== e))) goto L_b;
  return (e.length > 0);
}

// fn r  args=2 vars=8 closure=2 cpool=4 bc=1059B file=chatgpt_maps/src/MapPlaceCardPresentation
// args: e, r
// locals: o, n, i, s, c, l
// closure: a, t
function {
  let l;
  let c;
  let s;
  let i;
  let n;
  let o;
  if (!(e.currentLocation)) goto L_80;
  goto L_a2;
  // [栈深重同步 1 -> 0]
  o = e.title;
  if (!((e.incomingLeg == null))) goto L_ec;
  e.incomingLeg;
  n = e.routeRole;
  if (!(e.currentLocation)) goto L_180;
  goto L_1a2;
  // [栈深重同步 2 -> 1]
  i = t.presentMapPlace(e.facts, e.locale);
  if (!((0 === r.length))) goto L_217;
  if (!(e.loading)) goto L_217;
  s = !e.currentLocation;
  if (!((r.length > 0))) goto L_26c;
  goto L_2bc;
  // [栈深重同步 1 -> 0]
  if (!(s)) goto L_2bb;
  goto L_2bc;
  // [栈深重同步 1 -> 0]
  c = undefined;
  l = [n, o, i.details.map(function <atom:0>).join(""), i.secondaryDetails.map(function <atom:0>).join(""), c].filter(function <atom:0>).join(", ");
  return {title: o, routeContext: n, place: i, showsLoadingNotes: s, accessibilityLabel: l};
}

// fn o  args=2 vars=4 closure=1 cpool=0 bc=362B file=chatgpt_maps/src/MapPlaceCardPresentation
// args: t, a
// locals: r, o
// closure: e
function {
  let o;
  let r;
  if (!(a)) goto L_c;
  goto L_3f;
  // [栈深重同步 1 -> 0]
  if (!((t == null))) goto L_15;
  t;
  goto L_39;
  if (!((undefined.trim() == null))) goto L_3f;
  undefined.trim();
  r = "";
  o = e.Markdown.parse(r).blocks;
  if (!((1 === o.length))) goto L_12f;
  if (!(("paragraph" === o[0].kind))) goto L_12f;
  return e.Markdown.parseInlines(r);
  if (!((0 === r.length))) goto L_13b;
  return [];
  return [{text: r, bold: false, italic: false, code: false, link: false, href: undefined}];
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=142B file=chatgpt_maps/src/MapPlaceCardPresentation
// args: require, module, exports
// locals: e, t, a, r, o
function {
  r = function r;
  o = function o;
  let a;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.presentMapPlaceCard = undefined;
  exports.parseMapPlaceCardNotes = undefined;
  e = require("markdown/src/Markdown");
  t = require("./MapPlaceFacts");
  a = require("./Strings");
  exports.presentMapPlaceCard = r;
  exports.parseMapPlaceCardNotes = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_maps/src/MapPlaceCardPresentation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
