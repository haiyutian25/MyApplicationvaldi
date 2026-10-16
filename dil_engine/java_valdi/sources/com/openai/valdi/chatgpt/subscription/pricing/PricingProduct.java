package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import com.snap.valdi.views.ValdiTextView;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0010\b\u0007\u0018\u00002\u00020\u0001BU\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0002\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\n\u0012\u0006\u0010\r\u001a\u00020\f¢\u0006\u0004\b\u000e\u0010\u000fR\u0016\u0010\u0010\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u0016\u0010\u0012\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0011R\u0016\u0010\u0013\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\u0011R\u0018\u0010\u0014\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0011R\u0016\u0010\u0015\u001a\u00020\u00078\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u0018\u0010\u0017\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0011R\u0018\u0010\u0018\u001a\u0004\u0018\u00010\n8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u0016\u0010\u001a\u001a\u00020\f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010\u001b¨\u0006\u001c"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/PricingProduct;", "Lcom/snap/valdi/utils/b;", "", ValdiTextView.MenuActionIdKey, "offeredPlanId", "billingCyclePrice", "monthlyPrice", "Lcom/openai/valdi/chatgpt/subscription/pricing/PricingBillingPeriod;", "billingPeriod", "introductoryPrice", "", "usageMultiplier", "", "isCurrent", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/openai/valdi/chatgpt/subscription/pricing/PricingBillingPeriod;Ljava/lang/String;Ljava/lang/Double;Z)V", "_id", "Ljava/lang/String;", "_offeredPlanId", "_billingCyclePrice", "_monthlyPrice", "_billingPeriod", "Lcom/openai/valdi/chatgpt/subscription/pricing/PricingBillingPeriod;", "_introductoryPrice", "_usageMultiplier", "Ljava/lang/Double;", "_isCurrent", "Z", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'id':s,'offeredPlanId':s,'billingCyclePrice':s,'monthlyPrice':s?,'billingPeriod':r<e>:'[0]','introductoryPrice':s?,'usageMultiplier':d@?,'isCurrent':b", typeReferences = {PricingBillingPeriod.class})
public final class PricingProduct extends b {
    private String _billingCyclePrice;
    private PricingBillingPeriod _billingPeriod;
    private String _id;
    private String _introductoryPrice;
    private boolean _isCurrent;
    private String _monthlyPrice;
    private String _offeredPlanId;
    private Double _usageMultiplier;

    public PricingProduct(String str, String str2, String str3, String str4, PricingBillingPeriod pricingBillingPeriod, String str5, Double d, boolean z) {
        this._id = str;
        this._offeredPlanId = str2;
        this._billingCyclePrice = str3;
        this._monthlyPrice = str4;
        this._billingPeriod = pricingBillingPeriod;
        this._introductoryPrice = str5;
        this._usageMultiplier = d;
        this._isCurrent = z;
    }
}
