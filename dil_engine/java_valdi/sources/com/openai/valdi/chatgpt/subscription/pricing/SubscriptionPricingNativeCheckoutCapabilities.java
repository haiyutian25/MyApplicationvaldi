package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import defpackage.riv0;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u001b\b\u0007\u0018\u00002\u00020\u0001B{\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\f\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\n0\t\u0012\u0006\u0010\r\u001a\u00020\f\u0012\u0006\u0010\u000e\u001a\u00020\f\u0012\u0006\u0010\u000f\u001a\u00020\f\u0012\u0006\u0010\u0010\u001a\u00020\f\u0012\u0006\u0010\u0011\u001a\u00020\f\u0012\u0006\u0010\u0012\u001a\u00020\f\u0012\u0006\u0010\u0013\u001a\u00020\f¢\u0006\u0004\b\u0014\u0010\u0015R\u0016\u0010\u0016\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0017R\u0018\u0010\u0018\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u0018\u0010\u001a\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010\u0019R\u0018\u0010\u001b\u001a\u0004\u0018\u00010\u00078\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u001cR\u001c\u0010\u001d\u001a\b\u0012\u0004\u0012\u00020\n0\t8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001d\u0010\u001eR\u0016\u0010\u001f\u001a\u00020\f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001f\u0010 R\u0016\u0010!\u001a\u00020\f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b!\u0010 R\u0016\u0010\"\u001a\u00020\f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\"\u0010 R\u0016\u0010#\u001a\u00020\f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b#\u0010 R\u0016\u0010$\u001a\u00020\f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b$\u0010 R\u0016\u0010%\u001a\u00020\f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b%\u0010 R\u0016\u0010&\u001a\u00020\f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b&\u0010 ¨\u0006'"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeCheckoutCapabilities;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeStoreState;", "storeState", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativePurchaseAvailability;", "applePurchase", "webCheckout", "", "webCheckoutPlanId", "", "Lriv0;", "legalDocuments", "", "canShowExternalPurchaseLink", "isExternalCheckoutDisabled", "isPrimaryPurchaseDisabled", "isPlatformPurchaseInProgress", "isExternalCheckoutInProgress", "isEmailVerificationInProgress", "didPurchase", "<init>", "(Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeStoreState;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativePurchaseAvailability;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativePurchaseAvailability;Ljava/lang/String;Ljava/util/List;ZZZZZZZ)V", "_storeState", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeStoreState;", "_applePurchase", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativePurchaseAvailability;", "_webCheckout", "_webCheckoutPlanId", "Ljava/lang/String;", "_legalDocuments", "Ljava/util/List;", "_canShowExternalPurchaseLink", "Z", "_isExternalCheckoutDisabled", "_isPrimaryPurchaseDisabled", "_isPlatformPurchaseInProgress", "_isExternalCheckoutInProgress", "_isEmailVerificationInProgress", "_didPurchase", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'storeState':r<e>:'[0]','applePurchase':r?:'[1]','webCheckout':r?:'[1]','webCheckoutPlanId':s?,'legalDocuments':a<r:'[2]'>,'canShowExternalPurchaseLink':b,'isExternalCheckoutDisabled':b,'isPrimaryPurchaseDisabled':b,'isPlatformPurchaseInProgress':b,'isExternalCheckoutInProgress':b,'isEmailVerificationInProgress':b,'didPurchase':b", typeReferences = {SubscriptionPricingNativeStoreState.class, SubscriptionPricingNativePurchaseAvailability.class, riv0.class})
public final class SubscriptionPricingNativeCheckoutCapabilities extends b {
    private SubscriptionPricingNativePurchaseAvailability _applePurchase;
    private boolean _canShowExternalPurchaseLink;
    private boolean _didPurchase;
    private boolean _isEmailVerificationInProgress;
    private boolean _isExternalCheckoutDisabled;
    private boolean _isExternalCheckoutInProgress;
    private boolean _isPlatformPurchaseInProgress;
    private boolean _isPrimaryPurchaseDisabled;
    private List<riv0> _legalDocuments;
    private SubscriptionPricingNativeStoreState _storeState;
    private SubscriptionPricingNativePurchaseAvailability _webCheckout;
    private String _webCheckoutPlanId;

    public SubscriptionPricingNativeCheckoutCapabilities(SubscriptionPricingNativeStoreState subscriptionPricingNativeStoreState, SubscriptionPricingNativePurchaseAvailability subscriptionPricingNativePurchaseAvailability, SubscriptionPricingNativePurchaseAvailability subscriptionPricingNativePurchaseAvailability2, String str, List<riv0> list, boolean z, boolean z2, boolean z3, boolean z4, boolean z5, boolean z6, boolean z7) {
        this._storeState = subscriptionPricingNativeStoreState;
        this._applePurchase = subscriptionPricingNativePurchaseAvailability;
        this._webCheckout = subscriptionPricingNativePurchaseAvailability2;
        this._webCheckoutPlanId = str;
        this._legalDocuments = list;
        this._canShowExternalPurchaseLink = z;
        this._isExternalCheckoutDisabled = z2;
        this._isPrimaryPurchaseDisabled = z3;
        this._isPlatformPurchaseInProgress = z4;
        this._isExternalCheckoutInProgress = z5;
        this._isEmailVerificationInProgress = z6;
        this._didPurchase = z7;
    }
}
