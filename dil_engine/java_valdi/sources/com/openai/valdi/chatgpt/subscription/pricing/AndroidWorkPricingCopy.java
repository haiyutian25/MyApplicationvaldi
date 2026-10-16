package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import com.snap.valdi.views.ValdiTextView;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0011\b\u0007\u0018\u00002\u00020\u0001BU\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0002\u0012\u0006\u0010\u0007\u001a\u00020\u0002\u0012\u0006\u0010\b\u001a\u00020\u0002\u0012\u0006\u0010\n\u001a\u00020\t\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u0002\u0012\u0006\u0010\f\u001a\u00020\u0002¢\u0006\u0004\b\r\u0010\u000eR\u0016\u0010\u000f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\u0010R\u0016\u0010\u0011\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\u0010R\u0016\u0010\u0012\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0010R\u0016\u0010\u0013\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\u0010R\u0016\u0010\u0014\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0010R\u0016\u0010\u0015\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0015\u0010\u0010R\u0016\u0010\u0016\u001a\u00020\t8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0017R\u0018\u0010\u0018\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0018\u0010\u0010R\u0016\u0010\u0019\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0019\u0010\u0010¨\u0006\u001a"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/AndroidWorkPricingCopy;", "Lcom/snap/valdi/utils/b;", "", ValdiTextView.MenuActionTitleKey, "subtitle", "closeAccessibilityLabel", "coreModel", "smarterModels", "moreMemory", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;", "purchase", "renewalText", "accentForegroundColor", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;Ljava/lang/String;Ljava/lang/String;)V", "_title", "Ljava/lang/String;", "_subtitle", "_closeAccessibilityLabel", "_coreModel", "_smarterModels", "_moreMemory", "_purchase", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;", "_renewalText", "_accentForegroundColor", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'title':s,'subtitle':s,'closeAccessibilityLabel':s,'coreModel':s,'smarterModels':s,'moreMemory':s,'purchase':r:'[0]','renewalText':s?,'accentForegroundColor':s", typeReferences = {SubscriptionPricingNativeText.class})
public final class AndroidWorkPricingCopy extends b {
    private String _accentForegroundColor;
    private String _closeAccessibilityLabel;
    private String _coreModel;
    private String _moreMemory;
    private SubscriptionPricingNativeText _purchase;
    private String _renewalText;
    private String _smarterModels;
    private String _subtitle;
    private String _title;

    public AndroidWorkPricingCopy(String str, String str2, String str3, String str4, String str5, String str6, SubscriptionPricingNativeText subscriptionPricingNativeText, String str7, String str8) {
        this._title = str;
        this._subtitle = str2;
        this._closeAccessibilityLabel = str3;
        this._coreModel = str4;
        this._smarterModels = str5;
        this._moreMemory = str6;
        this._purchase = subscriptionPricingNativeText;
        this._renewalText = str7;
        this._accentForegroundColor = str8;
    }
}
