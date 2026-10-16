package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Coding':0,'ImageGeneration':1,'PersonalFinance':2", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0004\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004¨\u0006\u0005"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativePersonalizationIntent;", "", "Coding", "ImageGeneration", "PersonalFinance", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class SubscriptionPricingNativePersonalizationIntent {
    public static final SubscriptionPricingNativePersonalizationIntent Coding;
    public static final SubscriptionPricingNativePersonalizationIntent ImageGeneration;
    public static final SubscriptionPricingNativePersonalizationIntent PersonalFinance;
    public static final /* synthetic */ SubscriptionPricingNativePersonalizationIntent[] a;

    static {
        SubscriptionPricingNativePersonalizationIntent subscriptionPricingNativePersonalizationIntent = new SubscriptionPricingNativePersonalizationIntent("Coding", 0);
        Coding = subscriptionPricingNativePersonalizationIntent;
        SubscriptionPricingNativePersonalizationIntent subscriptionPricingNativePersonalizationIntent2 = new SubscriptionPricingNativePersonalizationIntent("ImageGeneration", 1);
        ImageGeneration = subscriptionPricingNativePersonalizationIntent2;
        SubscriptionPricingNativePersonalizationIntent subscriptionPricingNativePersonalizationIntent3 = new SubscriptionPricingNativePersonalizationIntent("PersonalFinance", 2);
        PersonalFinance = subscriptionPricingNativePersonalizationIntent3;
        a = new SubscriptionPricingNativePersonalizationIntent[]{subscriptionPricingNativePersonalizationIntent, subscriptionPricingNativePersonalizationIntent2, subscriptionPricingNativePersonalizationIntent3};
    }

    public static SubscriptionPricingNativePersonalizationIntent valueOf(String str) {
        return (SubscriptionPricingNativePersonalizationIntent) Enum.valueOf(SubscriptionPricingNativePersonalizationIntent.class, str);
    }

    public static SubscriptionPricingNativePersonalizationIntent[] values() {
        return (SubscriptionPricingNativePersonalizationIntent[]) a.clone();
    }
}
