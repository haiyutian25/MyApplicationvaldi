package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.gvz0;
import defpackage.miv0;
import defpackage.prz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\bg\u0018\u00002\u00020\u0001J\u0017\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0003\u001a\u00020\u0002H&¢\u0006\u0004\b\u0005\u0010\u0006J\u0017\u0010\b\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u0002H&¢\u0006\u0004\b\b\u0010\u0006J\u001f\u0010\u000b\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u00022\u0006\u0010\n\u001a\u00020\u0002H&¢\u0006\u0004\b\u000b\u0010\fJ\u001f\u0010\r\u001a\u00020\u00042\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\n\u001a\u00020\u0002H&¢\u0006\u0004\b\r\u0010\fJ\u001f\u0010\u000f\u001a\u00020\u00042\u0006\u0010\u000e\u001a\u00020\u00022\u0006\u0010\n\u001a\u00020\u0002H&¢\u0006\u0004\b\u000f\u0010\fJ\u000f\u0010\u0010\u001a\u00020\u0004H&¢\u0006\u0004\b\u0010\u0010\u0011J\u000f\u0010\u0013\u001a\u00020\u0012H\u0017¢\u0006\u0004\b\u0013\u0010\u0014J\u000f\u0010\u0015\u001a\u00020\u0004H\u0017¢\u0006\u0004\b\u0015\u0010\u0011J\u0017\u0010\u0019\u001a\u00020\u00182\u0006\u0010\u0017\u001a\u00020\u0016H\u0016¢\u0006\u0004\b\u0019\u0010\u001a¨\u0006\u001b"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingHost;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "", "planId", "Lruy0;", "selectPlan", "(Ljava/lang/String;)V", "packageId", "selectPackage", "productId", "requestId", "purchaseWithApple", "(Ljava/lang/String;Ljava/lang/String;)V", "purchaseOnWeb", "documentId", "openLegalDocument", "dismiss", "()V", "", "supportsAppleCheckoutFallback", "()Z", "loadComparisonPlans", "Lcom/snap/valdi/utils/ValdiMarshaller;", "marshaller", "", "pushToMarshaller", "(Lcom/snap/valdi/utils/ValdiMarshaller;)I", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = miv0.class, schema = "'selectPlan':f|m|(s),'selectPackage':f|m|(s),'purchaseWithApple':f|m|(s, s),'purchaseOnWeb':f|m|(s, s),'openLegalDocument':f|m|(s, s),'dismiss':f|m|(),'supportsAppleCheckoutFallback':f?|m|(): b,'loadComparisonPlans':f?|m|()", typeReferences = {})
public interface SubscriptionPricingHost extends ValdiMarshallable {
    void dismiss();

    @gvz0
    void loadComparisonPlans();

    void openLegalDocument(String documentId, String requestId);

    void purchaseOnWeb(String planId, String requestId);

    void purchaseWithApple(String productId, String requestId);

    int pushToMarshaller(ValdiMarshaller marshaller);

    void selectPackage(String packageId);

    void selectPlan(String planId);

    @gvz0
    boolean supportsAppleCheckoutFallback();
}
