// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=3462B file=chatgpt_subscription_pricing/src/WorkPricingStyles
// args: require, module, exports
// locals: e, t, i, r
function {
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.workPricingStyles = undefined;
  e = require("oai_core/src/OAITokens");
  t = require("valdi_core/src/Style");
  i = require("valdi_core/src/SystemFont");
  r = require("./SubscriptionPricingSharedStyles");
  exports.workPricingStyles = {workHeader: t.Style.merge(r.subscriptionPricingSharedStyles.header, new t.Style({zIndex: 1})), workTitle: new t.Style({color: e.OAIColor.TextPrimary, textAlign: "center", numberOfLines: 0}), error: new t.Style({backgroundColor: e.OAIColor.BgStatusError, borderRadius: e.OAIRadius.Lg, padding: 12, width: "100%"}), workHeaderSpacer: new t.Style({flexGrow: 1}), workBody: new t.Style({flexDirection: "column", gap: 16, paddingBottom: 24, paddingLeft: 24, paddingRight: 24, paddingTop: 4, width: "100%"}), iosArtwork: new t.Style({alignItems: "center", justifyContent: "center", height: 56, width: 56}), workCheckoutAction: new t.Style({alignItems: "center", justifyContent: "center", height: "auto", minHeight: 52, paddingBottom: e.OAISpacing.OnePointSeventyFive, paddingTop: e.OAISpacing.OnePointSeventyFive}), workRestoreAction: new t.Style({height: 48, width: "100%"}), workCheckoutLabel: new t.Style({font: i.systemMediumFont(16), lineHeightMultiple: 1.25, letterSpacing: 0.1, numberOfLines: 0, textAlign: "center"}), workRestoreLabel: new t.Style({font: i.systemSemiboldFont(14), lineHeightMultiple: (20 / 14), letterSpacing: 0.1, numberOfLines: 0, textAlign: "center"}), workFooterCopy: new t.Style({gap: e.OAISpacing.Half, marginTop: e.OAISpacing.Two, paddingBottom: e.OAISpacing.Two, width: "100%"}), workDismissAction: new t.Style({alignItems: "center", borderRadius: e.OAIRadius.Pill, height: 44, justifyContent: "center", width: 44}), workHero: new t.Style({alignItems: "center", gap: e.OAISpacing.One, width: "100%"}), workArtwork: new t.Style({accessibilityNavigation: "ignored", height: 64, marginBottom: e.OAISpacing.One, width: 64}), workLargeSparkle: new t.Style({bottom: 0, left: 0, position: "absolute"}), workSmallSparkle: new t.Style({position: "absolute", right: 0, top: 0}), workPlanPicker: new t.Style({backgroundColor: e.OAIColor.BgTertiary, borderRadius: e.OAIRadius.Pill, flexDirection: "row", height: 44, marginLeft: e.OAISpacing.Four, marginRight: e.OAISpacing.Four, padding: 3}), workPlanOption: new t.Style({alignItems: "center", borderRadius: e.OAIRadius.Pill, flexBasis: 0, flexGrow: 1, justifyContent: "center", minWidth: 0, paddingLeft: e.OAISpacing.Half, paddingRight: e.OAISpacing.Half}), workPlan: new t.Style({backgroundColor: e.OAIColor.BgPrimary, borderColor: e.OAIColor.BorderDefault, borderRadius: e.OAIRadius.Xl, borderWidth: 0.5, flexDirection: "column", marginLeft: e.OAISpacing.One, marginRight: e.OAISpacing.One, padding: e.OAISpacing.Two})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/WorkPricingStyles
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
