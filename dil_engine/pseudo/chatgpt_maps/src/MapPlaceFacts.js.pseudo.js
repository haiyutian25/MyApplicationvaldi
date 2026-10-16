// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=chatgpt_maps/src/MapPlaceFacts
// args: e
function {
  return (undefined !== e);
}

// fn n  args=2 vars=6 closure=4 cpool=1 bc=708B file=chatgpt_maps/src/MapPlaceFacts
// args: r, o
// locals: l, a, n, c
// closure: t, s, i, e
function {
  let c;
  let n;
  let a;
  let l;
  if (!((r.ratingLabel == null))) goto L_a5;
  r.ratingLabel;
  if (!((undefined === r.rating))) goto L_5c;
  goto L_a5;
  // [栈深重同步 1 -> 0]
  l = t.formatNumber(r.rating, 1, o);
  if (!((undefined === l))) goto L_d2;
  goto L_fe;
  // [栈深重同步 2 -> 1]
  a = [r.label, "★ ".concat(l), r.category].filter(function <atom:0>).join(" • ");
  n = s(r);
  c = i(r);
  if (!((0 === a.length))) goto L_189;
  goto L_1df;
  // [栈深重同步 2 -> 1]
  if (!((n.length > 0))) goto L_25a;
  if (!((c.length > 0))) goto L_25a;
  // append([], 0, n)
  [][n] = {text: " • ", color: e.OAIColor.TextPrimary};
  // append([], ({text: " • ", color: e.OAIColor.TextPrimary} ++), c)
  c;
  goto L_267;
  // [栈深重同步 2 -> 1]
  // append([], 0, n)
  // append([], n, c)
  c;
  if (((undefined !== r.label))) goto L_2b8;
  if (!((undefined !== r.ratingLabel))) goto L_2bd;
  goto L_2be;
  // [栈深重同步 2 -> 1]
  return {details: [{text: a, color: e.OAIColor.TextPrimary}], secondaryDetails: [], detailsLineLimit: 1};
}

// fn s  args=1 vars=2 closure=1 cpool=0 bc=541B file=chatgpt_maps/src/MapPlaceFacts
// args: r
// locals: t
// closure: e
function {
  let t;
  if (!((undefined !== r.priceLabel))) goto L_9f;
  return [{text: r.priceLabel, color: e.OAIColor.TextPrimary}];
  t = r.priceLevel;
  if (((undefined === t))) goto L_d9;
  if (((t < 0))) goto L_d9;
  if (!((t > 4))) goto L_df;
  return [];
  return [{text: r.currencySymbol.repeat(t), color: e.OAIColor.TextPrimary}, {text: r.currencySymbol.repeat((4 - t)), color: e.OAIColor.TextTertiary, accessibilityLabel: ""}];
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=156B file=chatgpt_maps/src/MapPlaceFacts
// args: r
// closure: i, e
function {
  if (!(r.bold)) goto L_51;
  goto L_96;
  // [栈深重同步 2 -> 1]
  return {text: r.text, color: e.OAIColor.TextPrimary};
}

// fn i  args=1 vars=5 closure=5 cpool=1 bc=962B file=chatgpt_maps/src/MapPlaceFacts
// args: t
// locals: a, n, s, i
// closure: e, l, o, r, c
function {
  let i;
  let s;
  let n;
  let a;
  if (!((undefined !== t.hoursLabel))) goto L_a8;
  return [{text: t.hoursLabel, color: e.OAIColor.TextPrimary}];
  a = t.availability;
  if (!((undefined === a))) goto L_d6;
  return [];
  if (!((a === l.PermanentlyClosed))) goto L_19d;
  return [{text: o.default.mapsPlacePermanentlyClosed(), color: e.OAIColor.TextStatusError}];
  if (!((a === l.Open))) goto L_20f;
  goto L_257;
  // [栈深重同步 1 -> 0]
  n = o.default.mapsPlaceClosed();
  s = t.hoursChange;
  if (!((a === l.Open))) goto L_2ea;
  goto L_32f;
  // [栈深重同步 1 -> 0]
  i = e.OAIColor.TextStatusError;
  if (!((undefined === s))) goto L_34c;
  return [{text: n, color: i}];
  return r.Markdown.parseInlines(c(s)).map(function <atom:0>);
}

// fn c  args=1 vars=1 closure=2 cpool=0 bc=611B file=chatgpt_maps/src/MapPlaceFacts
// args: e
// closure: a, o
function {
  if (!((e.kind === a.OpensAt))) goto L_b2;
  return o.default.mapsPlaceOpensAt(e.value);   // tail call
  if (!((e.kind === a.OpensOn))) goto L_142;
  return o.default.mapsPlaceOpensOn(e.value);   // tail call
  if (!((e.kind === a.ClosesAt))) goto L_1d2;
  return o.default.mapsPlaceClosesAt(e.value);   // tail call
  if (!((e.kind === a.ClosesOn))) goto L_262;
  return o.default.mapsPlaceClosesOn(e.value);   // tail call
  e.kind;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_maps/src/MapPlaceFacts
// args: e
function {
  e.Open = 0;
  e[0] = "Open";
  e.Closed = 1;
  e[1] = "Closed";
  e.PermanentlyClosed = 2;
  e[2] = "PermanentlyClosed";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=chatgpt_maps/src/MapPlaceFacts
// args: e
function {
  e.OpensAt = 0;
  e[0] = "OpensAt";
  e.OpensOn = 1;
  e[1] = "OpensOn";
  e.ClosesAt = 2;
  e[2] = "ClosesAt";
  e.ClosesOn = 3;
  e[3] = "ClosesOn";
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=6 bc=211B file=chatgpt_maps/src/MapPlaceFacts
// args: require, module, exports
// locals: e, r, t, o, l, a, n, s, i, c
function {
  n = function n;
  s = function s;
  i = function i;
  c = function c;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MapPlaceAvailability = undefined;
  exports.MapPlaceHoursChangeKind = undefined;
  exports.presentMapPlace = undefined;
  e = require("oai_core/src/OAITokens");
  r = require("markdown/src/Markdown");
  t = require("valdi_core/src/utils/NumberUtils");
  o = require("./Strings");
  if ((l)) goto L_ab;
  l = {};
  exports.MapPlaceAvailability = {};
  !function <atom:0>({});
  if ((a)) goto L_c4;
  a = {};
  exports.MapPlaceHoursChangeKind = {};
  function <atom:0>({});
  exports.presentMapPlace = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_maps/src/MapPlaceFacts
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
