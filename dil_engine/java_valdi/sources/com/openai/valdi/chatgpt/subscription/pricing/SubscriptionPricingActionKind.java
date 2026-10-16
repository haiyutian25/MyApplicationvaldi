package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Purchase':0,'RestorePurchases':1,'OpenExternalCheckout':2,'OpenLegal':3,'Retry':4,'Dismiss':5", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007¨\u0006\b"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingActionKind;", "", "Purchase", "RestorePurchases", "OpenExternalCheckout", "OpenLegal", "Retry", "Dismiss", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class SubscriptionPricingActionKind {
    public static final SubscriptionPricingActionKind Dismiss;
    public static final SubscriptionPricingActionKind OpenExternalCheckout;
    public static final SubscriptionPricingActionKind OpenLegal;
    public static final SubscriptionPricingActionKind Purchase;
    public static final SubscriptionPricingActionKind RestorePurchases;
    public static final SubscriptionPricingActionKind Retry;
    public static final /* synthetic */ SubscriptionPricingActionKind[] a;

    static {
        SubscriptionPricingActionKind subscriptionPricingActionKind = new SubscriptionPricingActionKind("Purchase", 0);
        Purchase = subscriptionPricingActionKind;
        SubscriptionPricingActionKind subscriptionPricingActionKind2 = new SubscriptionPricingActionKind("RestorePurchases", 1);
        RestorePurchases = subscriptionPricingActionKind2;
        SubscriptionPricingActionKind subscriptionPricingActionKind3 = new SubscriptionPricingActionKind("OpenExternalCheckout", 2);
        OpenExternalCheckout = subscriptionPricingActionKind3;
        SubscriptionPricingActionKind subscriptionPricingActionKind4 = new SubscriptionPricingActionKind("OpenLegal", 3);
        OpenLegal = subscriptionPricingActionKind4;
        SubscriptionPricingActionKind subscriptionPricingActionKind5 = new SubscriptionPricingActionKind("Retry", 4);
        Retry = subscriptionPricingActionKind5;
        SubscriptionPricingActionKind subscriptionPricingActionKind6 = new SubscriptionPricingActionKind("Dismiss", 5);
        Dismiss = subscriptionPricingActionKind6;
        a = new SubscriptionPricingActionKind[]{subscriptionPricingActionKind, subscriptionPricingActionKind2, subscriptionPricingActionKind3, subscriptionPricingActionKind4, subscriptionPricingActionKind5, subscriptionPricingActionKind6};
    }

    public static SubscriptionPricingActionKind valueOf(String str) {
        return (SubscriptionPricingActionKind) Enum.valueOf(SubscriptionPricingActionKind.class, str);
    }

    public static SubscriptionPricingActionKind[] values() {
        return (SubscriptionPricingActionKind[]) a.clone();
    }
}
