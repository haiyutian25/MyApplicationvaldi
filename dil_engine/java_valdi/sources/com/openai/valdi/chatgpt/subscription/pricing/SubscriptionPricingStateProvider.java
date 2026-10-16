package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.bridge_observables.BridgeObservable;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.prz0;
import defpackage.ziv0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\bg\u0018\u00002\u00020\u0001J\u000e\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003H&J\u0010\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\bH\u0016¨\u0006\t"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingStateProvider;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "observeState", "Lcom/snap/valdi/bridge_observables/BridgeObservable;", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeState;", "pushToMarshaller", "", "marshaller", "Lcom/snap/valdi/utils/ValdiMarshaller;", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = ziv0.class, schema = "'observeState':f|m|(): g:'[0]'<r:'[1]'>", typeReferences = {BridgeObservable.class, SubscriptionPricingNativeState.class})
public interface SubscriptionPricingStateProvider extends ValdiMarshallable {
    BridgeObservable<SubscriptionPricingNativeState> observeState();

    int pushToMarshaller(ValdiMarshaller marshaller);
}
