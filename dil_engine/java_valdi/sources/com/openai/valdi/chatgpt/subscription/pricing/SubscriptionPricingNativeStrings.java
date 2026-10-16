package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0012\b\u0007\u0018\u00002\u00020\u0001BY\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0002\u0012\u0006\u0010\u0007\u001a\u00020\u0002\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010\u000b\u001a\u00020\n\u0012\u0006\u0010\r\u001a\u00020\f\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\u0010\u0010\u0011R\u0016\u0010\u0012\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013R\u0016\u0010\u0014\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0013R\u0016\u0010\u0015\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0015\u0010\u0013R\u0016\u0010\u0016\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0013R\u0016\u0010\u0017\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0013R\u0018\u0010\u0018\u001a\u0004\u0018\u00010\b8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u0016\u0010\u001a\u001a\u00020\n8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010\u001bR\u0016\u0010\u001c\u001a\u00020\f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u001dR\u0018\u0010\u001e\u001a\u0004\u0018\u00010\u000e8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001e\u0010\u001f¨\u0006 "}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeStrings;", "Lcom/snap/valdi/utils/b;", "", "closeAccessibilityLabel", "comparisonFeaturesTitle", "comparisonFreeTitle", "proFeaturesTitle", "actionLoadingTitle", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;", "restoreSubscription", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeFeatureCopy;", "featureCopy", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeCheckoutCopy;", "checkout", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingAndroidPresentationCopy;", "androidPresentationCopy", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeFeatureCopy;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeCheckoutCopy;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingAndroidPresentationCopy;)V", "_closeAccessibilityLabel", "Ljava/lang/String;", "_comparisonFeaturesTitle", "_comparisonFreeTitle", "_proFeaturesTitle", "_actionLoadingTitle", "_restoreSubscription", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;", "_featureCopy", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeFeatureCopy;", "_checkout", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeCheckoutCopy;", "_androidPresentationCopy", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingAndroidPresentationCopy;", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'closeAccessibilityLabel':s,'comparisonFeaturesTitle':s,'comparisonFreeTitle':s,'proFeaturesTitle':s,'actionLoadingTitle':s,'restoreSubscription':r?:'[0]','featureCopy':r:'[1]','checkout':r:'[2]','androidPresentationCopy':r?:'[3]'", typeReferences = {SubscriptionPricingNativeText.class, SubscriptionPricingNativeFeatureCopy.class, SubscriptionPricingNativeCheckoutCopy.class, SubscriptionPricingAndroidPresentationCopy.class})
public final class SubscriptionPricingNativeStrings extends b {
    private String _actionLoadingTitle;
    private SubscriptionPricingAndroidPresentationCopy _androidPresentationCopy;
    private SubscriptionPricingNativeCheckoutCopy _checkout;
    private String _closeAccessibilityLabel;
    private String _comparisonFeaturesTitle;
    private String _comparisonFreeTitle;
    private SubscriptionPricingNativeFeatureCopy _featureCopy;
    private String _proFeaturesTitle;
    private SubscriptionPricingNativeText _restoreSubscription;

    public SubscriptionPricingNativeStrings(String str, String str2, String str3, String str4, String str5, SubscriptionPricingNativeText subscriptionPricingNativeText, SubscriptionPricingNativeFeatureCopy subscriptionPricingNativeFeatureCopy, SubscriptionPricingNativeCheckoutCopy subscriptionPricingNativeCheckoutCopy, SubscriptionPricingAndroidPresentationCopy subscriptionPricingAndroidPresentationCopy) {
        this._closeAccessibilityLabel = str;
        this._comparisonFeaturesTitle = str2;
        this._comparisonFreeTitle = str3;
        this._proFeaturesTitle = str4;
        this._actionLoadingTitle = str5;
        this._restoreSubscription = subscriptionPricingNativeText;
        this._featureCopy = subscriptionPricingNativeFeatureCopy;
        this._checkout = subscriptionPricingNativeCheckoutCopy;
        this._androidPresentationCopy = subscriptionPricingAndroidPresentationCopy;
    }
}
