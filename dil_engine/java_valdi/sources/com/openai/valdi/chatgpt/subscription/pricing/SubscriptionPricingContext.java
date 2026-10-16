package com.openai.valdi.chatgpt.subscription.pricing;

import com.openai.valdi.oai.platform.OAIPlatformServices;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\b\u0007\u0018\u00002\u00020\u0001B9\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\f\u0010\rR\u0016\u0010\u000e\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\u000fR\u0016\u0010\u0010\u001a\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u0016\u0010\u0012\u001a\u00020\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013R\u0018\u0010\u0014\u001a\u0004\u0018\u00010\b8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015R\u0018\u0010\u0016\u001a\u0004\u0018\u00010\n8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingContext;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingHost;", "host", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingStateProvider;", "stateProvider", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingExperiments;", "experiments", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingRestoreHost;", "restoreHost", "Lcom/openai/valdi/oai/platform/OAIPlatformServices;", "platformServices", "<init>", "(Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingHost;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingStateProvider;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingExperiments;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingRestoreHost;Lcom/openai/valdi/oai/platform/OAIPlatformServices;)V", "_host", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingHost;", "_stateProvider", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingStateProvider;", "_experiments", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingExperiments;", "_restoreHost", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingRestoreHost;", "_platformServices", "Lcom/openai/valdi/oai/platform/OAIPlatformServices;", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'host':r:'[0]','stateProvider':r:'[1]','experiments':r:'[2]','restoreHost':r?:'[3]','platformServices':r?:'[4]'", typeReferences = {SubscriptionPricingHost.class, SubscriptionPricingStateProvider.class, SubscriptionPricingExperiments.class, SubscriptionPricingRestoreHost.class, OAIPlatformServices.class})
public final class SubscriptionPricingContext extends b {
    private SubscriptionPricingExperiments _experiments;
    private SubscriptionPricingHost _host;
    private OAIPlatformServices _platformServices;
    private SubscriptionPricingRestoreHost _restoreHost;
    private SubscriptionPricingStateProvider _stateProvider;

    public SubscriptionPricingContext(SubscriptionPricingHost subscriptionPricingHost, SubscriptionPricingStateProvider subscriptionPricingStateProvider, SubscriptionPricingExperiments subscriptionPricingExperiments, SubscriptionPricingRestoreHost subscriptionPricingRestoreHost, OAIPlatformServices oAIPlatformServices) {
        this._host = subscriptionPricingHost;
        this._stateProvider = subscriptionPricingStateProvider;
        this._experiments = subscriptionPricingExperiments;
        this._restoreHost = subscriptionPricingRestoreHost;
        this._platformServices = oAIPlatformServices;
    }
}
