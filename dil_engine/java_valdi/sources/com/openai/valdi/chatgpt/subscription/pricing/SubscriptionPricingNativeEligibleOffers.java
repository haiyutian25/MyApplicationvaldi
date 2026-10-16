package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import defpackage.qiv0;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\b\u0007\u0018\u00002\u00020\u0001B5\b\u0017\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\u0010\b\u0002\u0010\u0005\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u0004\u0012\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00060\u0004¢\u0006\u0004\b\b\u0010\tR\u0018\u0010\n\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\n\u0010\u000bR\u001e\u0010\f\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\rR\u001c\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00060\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\r¨\u0006\u000f"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeEligibleOffers;", "Lcom/snap/valdi/utils/b;", "", "defaultOfferId", "", "eligiblePurchasePlatforms", "Lqiv0;", "offers", "<init>", "(Ljava/lang/String;Ljava/util/List;Ljava/util/List;)V", "_defaultOfferId", "Ljava/lang/String;", "_eligiblePurchasePlatforms", "Ljava/util/List;", "_offers", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'defaultOfferId':s?,'eligiblePurchasePlatforms':a?<s>,'offers':a<r:'[0]'>", typeReferences = {qiv0.class})
public final class SubscriptionPricingNativeEligibleOffers extends b {
    private String _defaultOfferId;
    private List<String> _eligiblePurchasePlatforms;
    private List<qiv0> _offers;

    public SubscriptionPricingNativeEligibleOffers(String str, List<String> list, List<qiv0> list2) {
        this._defaultOfferId = str;
        this._eligiblePurchasePlatforms = list;
        this._offers = list2;
    }
}
