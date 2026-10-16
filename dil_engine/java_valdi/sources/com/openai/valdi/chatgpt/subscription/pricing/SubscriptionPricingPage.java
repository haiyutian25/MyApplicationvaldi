package com.openai.valdi.chatgpt.subscription.pricing;

import android.content.Context;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.views.ValdiGeneratedRootView;
import defpackage.r101;
import defpackage.wiv0;
import defpackage.wn20;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 \u00072\u0010\u0012\u0006\u0012\u0004\u0018\u00010\u0002\u0012\u0004\u0012\u00020\u00020\u0001:\u0001\bB\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006¨\u0006\t"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingPage;", "Lcom/snap/valdi/views/ValdiGeneratedRootView;", "", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Companion", "wiv0", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class SubscriptionPricingPage extends ValdiGeneratedRootView<Object, Object> {
    public static final wiv0 Companion = new wiv0();

    public SubscriptionPricingPage(Context context) {
        super(context);
    }

    public static final /* synthetic */ String access$getComponentPath$cp() {
        return "SubscriptionPricingPage@chatgpt_subscription_pricing/src/SubscriptionPricingPage";
    }

    public static final SubscriptionPricingPage create(wn20 wn20Var, r101 r101Var) {
        Companion.getClass();
        SubscriptionPricingPage subscriptionPricingPage = new SubscriptionPricingPage(wn20Var.getContext());
        wn20Var.v(subscriptionPricingPage, access$getComponentPath$cp(), null, null, null);
        return subscriptionPricingPage;
    }

    public static final SubscriptionPricingPage create(wn20 wn20Var, Object obj, Object obj2, r101 r101Var, Function1 function1) {
        Companion.getClass();
        SubscriptionPricingPage subscriptionPricingPage = new SubscriptionPricingPage(wn20Var.getContext());
        wn20Var.v(subscriptionPricingPage, access$getComponentPath$cp(), obj, obj2, function1);
        return subscriptionPricingPage;
    }
}
