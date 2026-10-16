// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=76B file=widgets/src/components/cell/style
// args: e
function {
  e.Small50 = "small-50";
  e.Medium56 = "medium-56";
  e.Large66 = "large-66";
  e.Large70 = "large-70";
  e.Spacious = "spacious";
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=3203B file=widgets/src/components/cell/style
// args: require, module, exports
// locals: e, t, o, i, l, r, n, a
function {
  let a;
  let n;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SUBTITLE_DELIMITER = undefined;
  exports.CellPacking = undefined;
  exports.packingRootMinHeights = undefined;
  exports.packingRootVerticalPaddings = undefined;
  exports.packingRootHorizontalPaddings = undefined;
  exports.packingSubtitleMinHeights = undefined;
  exports.style = undefined;
  e = require("valdi_core/src/Style");
  t = require("valdi_core/src/SystemFont");
  o = require("widgets/src/styles/TextStyleFont");
  i = require("widgets/src/styles/semanticColors");
  exports.SUBTITLE_DELIMITER = "�";
  if ((l)) goto L_df;
  l = {};
  exports.CellPacking = {};
  function <atom:0>({});
  {}[l.Spacious] = undefined;
  undefined;
  {}[l.Large70] = undefined;
  undefined;
  {}[l.Large66] = 66;
  66;
  {}[l.Medium56] = 56;
  56;
  {}[l.Small50] = 50;
  50;
  exports.packingRootMinHeights = {};
  {}[l.Spacious] = 10;
  10;
  {}[l.Large70] = 9;
  9;
  {}[l.Large66] = 5;
  5;
  {}[l.Medium56] = 3;
  3;
  {}[l.Small50] = 3;
  3;
  exports.packingRootVerticalPaddings = {};
  {}[l.Spacious] = 16;
  16;
  {}[l.Large70] = 11;
  11;
  {}[l.Large66] = 11;
  11;
  {}[l.Medium56] = 6;
  6;
  {}[l.Small50] = 6;
  6;
  exports.packingRootHorizontalPaddings = {};
  {}[l.Spacious] = undefined;
  undefined;
  {}[l.Large70] = 17;
  17;
  {}[l.Large66] = undefined;
  undefined;
  {}[l.Medium56] = undefined;
  undefined;
  {}[l.Small50] = undefined;
  undefined;
  exports.packingSubtitleMinHeights = {};
  r = new e.Style({display: "flex", flexDirection: "row", alignItems: "center"});
  n = new e.Style({flexShrink: 1});
  a = 9;
  exports.style = {container: {root: r.extend({paddingRight: 11, paddingLeft: 11, paddingTop: 9, paddingBottom: 9}), title: r.extend({}), subtitle: r.extend({marginTop: 1}), accessory: new e.Style({display: "flex", alignItems: "center", justifyContent: "center"}), labels: new e.Style({display: "flex", flexGrow: 1, flexShrink: 1, justifyContent: "center"}), wrappable: new e.Style({flexWrap: "wrap", flexShrink: 1, flexDirection: "row"}), nonWrappable: new e.Style({flexWrap: "no-wrap", flexShrink: 1, flexDirection: "row"})}, label: {title: e.Style.merge(n, new e.Style({font: o.TextStyleFont.BODY, color: i.SemanticColor.Text.PRIMARY})), subtitle: e.Style.merge(n, new e.Style({font: o.TextStyleFont.CAPTION, color: i.SemanticColor.Text.PRIMARY})), delimiter: e.Style.merge(n, new e.Style({font: o.TextStyleFont.CAPTION, color: i.SemanticColor.Text.PRIMARY}), new e.Style({margin: "0 4"})), identity: e.Style.merge(n, new e.Style({font: o.TextStyleFont.CAPTION_EMPHASIS, color: i.SemanticColor.Text.SECONDARY})), reason: e.Style.merge(n, new e.Style({font: t.systemBoldFont(9), lineHeightMultiple: (11 / 9), color: i.SemanticColor.Text.SECONDARY, letterSpacing: 0.2}))}};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/cell/style
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
