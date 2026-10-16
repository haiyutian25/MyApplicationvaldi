package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.gvz0;
import defpackage.kiv0;
import defpackage.prz0;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0000\bg\u0018\u00002\u00020\u0001J\b\u0010\u0002\u001a\u00020\u0003H&J\b\u0010\u0004\u001a\u00020\u0005H&J\b\u0010\u0006\u001a\u00020\u0007H&J\u0010\u0010\b\u001a\u00020\u00072\u0006\u0010\t\u001a\u00020\u0005H&J\u0010\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0016J\u0010\u0010\u000e\u001a\n\u0012\u0004\u0012\u00020\u0005\u0018\u00010\u000fH\u0017J\b\u0010\u0010\u001a\u00020\u0011H&¨\u0006\u0012"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingExperiments;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "checkoutLayout", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeCheckoutTreatment;", "imageCreationTitle", "", "noAdsEnabled", "", "prefersWebPurchase", "planId", "pushToMarshaller", "", "marshaller", "Lcom/snap/valdi/utils/ValdiMarshaller;", "refreshedPlusFeatureTitles", "", "webPurchaseCopy", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = kiv0.class, schema = "'noAdsEnabled':f|m|(): b,'imageCreationTitle':f|m|(): s,'refreshedPlusFeatureTitles':f?|m|(): a?<s>,'checkoutLayout':f|m|(): r<e>:'[0]','prefersWebPurchase':f|m|(s): b,'webPurchaseCopy':f|m|(): r:'[1]'", typeReferences = {SubscriptionPricingNativeCheckoutTreatment.class, SubscriptionPricingNativeText.class})
public interface SubscriptionPricingExperiments extends ValdiMarshallable {
    SubscriptionPricingNativeCheckoutTreatment checkoutLayout();

    String imageCreationTitle();

    boolean noAdsEnabled();

    boolean prefersWebPurchase(String planId);

    int pushToMarshaller(ValdiMarshaller marshaller);

    @gvz0
    List<String> refreshedPlusFeatureTitles();

    SubscriptionPricingNativeText webPurchaseCopy();
}
