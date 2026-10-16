package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\f\b\u0007\u0018\u00002\u00020\u0001B=\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0002\u0012\u0006\u0010\t\u001a\u00020\b¢\u0006\u0004\b\n\u0010\u000bR\u0016\u0010\f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\rR\u0018\u0010\u000e\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\u000fR\u0018\u0010\u0010\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\rR\u0018\u0010\u0011\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\rR\u0016\u0010\u0012\u001a\u00020\b8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013¨\u0006\u0014"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeComparisonContext;", "Lcom/snap/valdi/utils/b;", "", "receiptRestriction", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeSubscription;", "subscription", "restrictedPlanId", "pendingExternalCheckoutPlanId", "", "staticRejoinCheckout", "<init>", "(Ljava/lang/String;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeSubscription;Ljava/lang/String;Ljava/lang/String;Z)V", "_receiptRestriction", "Ljava/lang/String;", "_subscription", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeSubscription;", "_restrictedPlanId", "_pendingExternalCheckoutPlanId", "_staticRejoinCheckout", "Z", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'receiptRestriction':s,'subscription':r?:'[0]','restrictedPlanId':s?,'pendingExternalCheckoutPlanId':s?,'staticRejoinCheckout':b", typeReferences = {SubscriptionPricingNativeSubscription.class})
public final class SubscriptionPricingNativeComparisonContext extends b {
    private String _pendingExternalCheckoutPlanId;
    private String _receiptRestriction;
    private String _restrictedPlanId;
    private boolean _staticRejoinCheckout;
    private SubscriptionPricingNativeSubscription _subscription;

    public SubscriptionPricingNativeComparisonContext(String str, SubscriptionPricingNativeSubscription subscriptionPricingNativeSubscription, String str2, String str3, boolean z) {
        this._receiptRestriction = str;
        this._subscription = subscriptionPricingNativeSubscription;
        this._restrictedPlanId = str2;
        this._pendingExternalCheckoutPlanId = str3;
        this._staticRejoinCheckout = z;
    }
}
