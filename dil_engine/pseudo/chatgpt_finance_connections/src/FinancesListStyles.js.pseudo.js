// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=2720B file=chatgpt_finance_connections/src/FinancesListStyles
// args: require, module, exports
// locals: e, i, t
function {
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.financesListStyles = undefined;
  e = require("oai_core/src/OAITokens");
  i = require("valdi_core/src/Style");
  t = e.resolveOAITextStyle(e.OAITextSize.BodyLarge);
  exports.financesListStyles = {scroll: new i.Style({flexBasis: 0, flexGrow: 1, flexShrink: 1, minHeight: 0, width: "100%"}), list: new i.Style({flexDirection: "column", gap: e.OAISpacing.Half, paddingBottom: e.OAISpacing.Three, paddingLeft: e.OAISpacing.Three, paddingRight: e.OAISpacing.Three, width: "100%"}), row: new i.Style({alignItems: "center", flexDirection: "row", gap: e.OAISpacing.OneAndHalf, minHeight: e.OAISpacing.Seven, width: "100%"}), title: new i.Style({color: e.OAIColor.TextPrimary, flexGrow: 1, flexShrink: 1, font: t.font, lineHeight: t.lineHeight, minWidth: 0, numberOfLines: 1}), accessory: new i.Style({alignItems: "center", flexShrink: 0, height: e.OAISpacing.Four, justifyContent: "center", width: e.OAISpacing.Four}), chevron: new i.Style({accessibilityNavigation: "ignored", flexShrink: 0, height: e.OAISpacing.TwoPointFive, objectFit: "contain", tint: e.OAIColor.IconTertiary, width: e.OAISpacing.TwoPointFive}), iconContainer: new i.Style({alignItems: "center", backgroundColor: e.OAIColor.BgPrimary, borderColor: e.OAIColor.BorderLight, borderRadius: e.OAIRadius.Pill, borderWidth: 0.5, height: e.OAISpacing.FivePointFive, justifyContent: "center", width: e.OAISpacing.FivePointFive}), iconSurface: new i.Style({accessibilityNavigation: "ignored", alignItems: "center", backgroundColor: e.OAIColor.BgTertiary, borderRadius: e.OAIRadius.Pill, height: e.OAISpacing.Four, justifyContent: "center", width: e.OAISpacing.Four}), icon: new i.Style({accessibilityNavigation: "ignored", height: e.OAISpacing.TwoPointFive, objectFit: "contain", tint: e.OAIColor.IconPrimary, width: e.OAISpacing.TwoPointFive})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_connections/src/FinancesListStyles
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
