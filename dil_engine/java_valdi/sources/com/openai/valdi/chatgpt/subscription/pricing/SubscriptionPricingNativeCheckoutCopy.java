package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u001a\b\u0007\u0018\u00002\u00020\u0001Bi\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0002\u0012\u0006\u0010\u0007\u001a\u00020\u0002\u0012\u0006\u0010\b\u001a\u00020\u0002\u0012\u0006\u0010\t\u001a\u00020\u0002\u0012\u0006\u0010\n\u001a\u00020\u0002\u0012\u0006\u0010\u000b\u001a\u00020\u0002\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\u000e\u0010\u000fR\u0016\u0010\u0010\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u0016\u0010\u0012\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0011R\u0016\u0010\u0013\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\u0011R\u0016\u0010\u0014\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0011R\u0016\u0010\u0015\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0015\u0010\u0011R\u0016\u0010\u0016\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0011R\u0016\u0010\u0017\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0011R\u0016\u0010\u0018\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0018\u0010\u0011R\u0016\u0010\u0019\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0019\u0010\u0011R\u0018\u0010\u001a\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010\u0011R\u0018\u0010\u001b\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u0011¨\u0006\u001c"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeCheckoutCopy;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;", "purchase", "applePurchase", "skipOffer", "subscribe", "payWithApple", "webPurchase", "webLink", "webCheckout", "upgradeOnWeb", "promotionPurchase", "promotionLink", "<init>", "(Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;)V", "_purchase", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;", "_applePurchase", "_skipOffer", "_subscribe", "_payWithApple", "_webPurchase", "_webLink", "_webCheckout", "_upgradeOnWeb", "_promotionPurchase", "_promotionLink", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'purchase':r:'[0]','applePurchase':r:'[0]','skipOffer':r:'[0]','subscribe':r:'[0]','payWithApple':r:'[0]','webPurchase':r:'[0]','webLink':r:'[0]','webCheckout':r:'[0]','upgradeOnWeb':r:'[0]','promotionPurchase':r?:'[0]','promotionLink':r?:'[0]'", typeReferences = {SubscriptionPricingNativeText.class})
public final class SubscriptionPricingNativeCheckoutCopy extends b {
    private SubscriptionPricingNativeText _applePurchase;
    private SubscriptionPricingNativeText _payWithApple;
    private SubscriptionPricingNativeText _promotionLink;
    private SubscriptionPricingNativeText _promotionPurchase;
    private SubscriptionPricingNativeText _purchase;
    private SubscriptionPricingNativeText _skipOffer;
    private SubscriptionPricingNativeText _subscribe;
    private SubscriptionPricingNativeText _upgradeOnWeb;
    private SubscriptionPricingNativeText _webCheckout;
    private SubscriptionPricingNativeText _webLink;
    private SubscriptionPricingNativeText _webPurchase;

    public SubscriptionPricingNativeCheckoutCopy(SubscriptionPricingNativeText subscriptionPricingNativeText, SubscriptionPricingNativeText subscriptionPricingNativeText2, SubscriptionPricingNativeText subscriptionPricingNativeText3, SubscriptionPricingNativeText subscriptionPricingNativeText4, SubscriptionPricingNativeText subscriptionPricingNativeText5, SubscriptionPricingNativeText subscriptionPricingNativeText6, SubscriptionPricingNativeText subscriptionPricingNativeText7, SubscriptionPricingNativeText subscriptionPricingNativeText8, SubscriptionPricingNativeText subscriptionPricingNativeText9, SubscriptionPricingNativeText subscriptionPricingNativeText10, SubscriptionPricingNativeText subscriptionPricingNativeText11) {
        this._purchase = subscriptionPricingNativeText;
        this._applePurchase = subscriptionPricingNativeText2;
        this._skipOffer = subscriptionPricingNativeText3;
        this._subscribe = subscriptionPricingNativeText4;
        this._payWithApple = subscriptionPricingNativeText5;
        this._webPurchase = subscriptionPricingNativeText6;
        this._webLink = subscriptionPricingNativeText7;
        this._webCheckout = subscriptionPricingNativeText8;
        this._upgradeOnWeb = subscriptionPricingNativeText9;
        this._promotionPurchase = subscriptionPricingNativeText10;
        this._promotionLink = subscriptionPricingNativeText11;
    }
}
