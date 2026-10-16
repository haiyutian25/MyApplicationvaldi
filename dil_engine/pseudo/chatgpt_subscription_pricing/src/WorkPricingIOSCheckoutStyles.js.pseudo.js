// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=4329B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckoutStyles
// args: require, module, exports
// locals: e, t, n, i
function {
  let i;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.workPricingIOSCheckoutStyles = undefined;
  e = require("oai_core/src/OAITokens");
  t = require("valdi_core/src/Style");
  n = require("valdi_core/src/SystemFont");
  i = new t.Style({height: "auto", minHeight: e.OAISpacing.Seven, paddingBottom: e.OAISpacing.Two, paddingTop: e.OAISpacing.Two});
  exports.workPricingIOSCheckoutStyles = {nativeIOSPurchaseRestriction: new t.Style({alignItems: "center", paddingLeft: e.OAISpacing.Four, paddingRight: e.OAISpacing.Four, paddingTop: e.OAISpacing.Two, width: "100%"}), footer: new t.Style({alignItems: "center", flexDirection: "column", flexShrink: 0, gap: e.OAISpacing.One, paddingLeft: e.OAISpacing.Three, paddingRight: e.OAISpacing.Three, paddingTop: e.OAISpacing.OneAndHalf, width: "100%"}), nativeIOSFooterText: new t.Style({alignItems: "center", flexDirection: "column", gap: e.OAISpacing.Half, width: "100%"}), nativeIOSEmptyDisclosure: new t.Style({accessibilityNavigation: "ignored", opacity: 0, width: "100%"}), storeLoadingPurchase: new t.Style({alignItems: "center", justifyContent: "center", minHeight: e.OAISpacing.Seven, width: "100%"}), emptyStorePurchase: new t.Style({accessibilityNavigation: "ignored", height: e.OAISpacing.Seven, opacity: 0, width: "100%"}), secondaryActions: new t.Style({alignItems: "center", flexDirection: "row", gap: e.OAISpacing.One, justifyContent: "center", width: "100%"}), checkoutActions: new t.Style({alignItems: "stretch", gap: e.OAISpacing.One, width: "100%"}), externalCheckoutActionLabel: new t.Style({alignItems: "center", flexDirection: "row", flexShrink: 1, gap: e.OAISpacing.Half, justifyContent: "center", minWidth: 0}), nativeIOSExternalCheckoutIcon: new t.Style({aspectRatio: 1, flexShrink: 0}), nativeIOSExternalCheckoutIconMeasure: new t.Style({accessibilityNavigation: "ignored", opacity: 0, touchEnabled: false}), nativeIOSExternalCheckoutIconImage: new t.Style({accessibilityNavigation: "ignored", bottom: e.OAISpacing.None, left: e.OAISpacing.None, objectFit: "contain", position: "absolute", right: e.OAISpacing.None, top: e.OAISpacing.None, touchEnabled: false}), nativeIOSCheckoutAction: i, nativeIOSLightSecondaryCheckoutAction: t.Style.merge(i, new t.Style({borderColor: e.OAIColor.BorderHeavy})), nativeIOSDarkSecondaryCheckoutAction: t.Style.merge(i, new t.Style({backgroundColor: e.OAIColor.BgGrouped, borderColor: e.OAIColor.BorderDefault})), nativeIOSCheckoutLabel: new t.Style({font: "".concat(n.systemSemiboldFont(17), " body"), lineHeightMultiple: (22 / 17), numberOfLines: 0, textAlign: "center"}), nativeIOSHorizontalCheckoutLabel: new t.Style({font: "".concat(n.systemSemiboldFont(15), " subheadline"), lineHeightMultiple: (20 / 15), numberOfLines: 0, textAlign: "center"}), nativeIOSSecondaryCheckoutAction: new t.Style({height: "auto", minHeight: e.OAISpacing.Two, paddingLeft: e.OAISpacing.None, paddingRight: e.OAISpacing.None, touchAreaExtensionBottom: e.OAISpacing.One, touchAreaExtensionTop: e.OAISpacing.One}), nativeIOSSecondaryCheckoutLabel: new t.Style({font: "".concat(n.systemSemiboldFont(13), " footnote"), lineHeightMultiple: (18 / 13), numberOfLines: 0, textAlign: "center", textDecoration: "underline"}), nativeIOSBrowserLinkLabel: new t.Style({font: "".concat(n.systemSemiboldFont(17), " body"), lineHeightMultiple: (22 / 17), numberOfLines: 0, textAlign: "center", textDecoration: "underline"}), disclosureLink: new t.Style({accessibilityCategory: "link", accessibilityId: "subscription-pricing-disclosure", alignItems: "center", justifyContent: "center", width: "100%"}), localizedDisclosureText: new t.Style({color: e.OAIColor.TextSecondary, flexShrink: 1, numberOfLines: 0, textAlign: "center"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckoutStyles
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
