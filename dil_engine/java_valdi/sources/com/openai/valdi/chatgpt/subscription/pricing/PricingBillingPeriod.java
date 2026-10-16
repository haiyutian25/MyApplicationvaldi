package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Daily':0,'Weekly':1,'Monthly':2,'Annual':3,'Lifetime':4", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/PricingBillingPeriod;", "", "Daily", "Weekly", "Monthly", "Annual", "Lifetime", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class PricingBillingPeriod {
    public static final PricingBillingPeriod Annual;
    public static final PricingBillingPeriod Daily;
    public static final PricingBillingPeriod Lifetime;
    public static final PricingBillingPeriod Monthly;
    public static final PricingBillingPeriod Weekly;
    public static final /* synthetic */ PricingBillingPeriod[] a;

    static {
        PricingBillingPeriod pricingBillingPeriod = new PricingBillingPeriod("Daily", 0);
        Daily = pricingBillingPeriod;
        PricingBillingPeriod pricingBillingPeriod2 = new PricingBillingPeriod("Weekly", 1);
        Weekly = pricingBillingPeriod2;
        PricingBillingPeriod pricingBillingPeriod3 = new PricingBillingPeriod("Monthly", 2);
        Monthly = pricingBillingPeriod3;
        PricingBillingPeriod pricingBillingPeriod4 = new PricingBillingPeriod("Annual", 3);
        Annual = pricingBillingPeriod4;
        PricingBillingPeriod pricingBillingPeriod5 = new PricingBillingPeriod("Lifetime", 4);
        Lifetime = pricingBillingPeriod5;
        a = new PricingBillingPeriod[]{pricingBillingPeriod, pricingBillingPeriod2, pricingBillingPeriod3, pricingBillingPeriod4, pricingBillingPeriod5};
    }

    public static PricingBillingPeriod valueOf(String str) {
        return (PricingBillingPeriod) Enum.valueOf(PricingBillingPeriod.class, str);
    }

    public static PricingBillingPeriod[] values() {
        return (PricingBillingPeriod[]) a.clone();
    }
}
