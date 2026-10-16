package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\f\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0015\b\u0007\u0018\u00002\u00020\u0001B\u0081\u0001\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0002\u0012\u0006\u0010\u0007\u001a\u00020\u0002\u0012\u0006\u0010\b\u001a\u00020\u0002\u0012\u0006\u0010\t\u001a\u00020\u0002\u0012\u0006\u0010\n\u001a\u00020\u0002\u0012\u0006\u0010\u000b\u001a\u00020\u0002\u0012\u0006\u0010\f\u001a\u00020\u0002\u0012\u0006\u0010\r\u001a\u00020\u0002\u0012\u0006\u0010\u000e\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u000f\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u0011¢\u0006\u0004\b\u0013\u0010\u0014R\u0016\u0010\u0015\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u0016\u0010\u0017\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0016R\u0016\u0010\u0018\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0018\u0010\u0016R\u0016\u0010\u0019\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0019\u0010\u0016R\u0016\u0010\u001a\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010\u0016R\u0016\u0010\u001b\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u0016R\u0016\u0010\u001c\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u0016R\u0016\u0010\u001d\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001d\u0010\u0016R\u0016\u0010\u001e\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001e\u0010\u0016R\u0016\u0010\u001f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001f\u0010\u0016R\u0016\u0010 \u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b \u0010\u0016R\u0016\u0010!\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b!\u0010\u0016R\u0018\u0010\"\u001a\u0004\u0018\u00010\u000f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\"\u0010#R\u0018\u0010$\u001a\u0004\u0018\u00010\u00118\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b$\u0010%¨\u0006&"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingAndroidPresentationCopy;", "Lcom/snap/valdi/utils/b;", "", "refreshedPlusUnlimitedTextChat", "refreshedPlusAdvancedModels", "refreshedPlusWorkAgent", "refreshedPlusCodexAgent", "refreshedPlusFileStorage", "refreshedPlusImageCreation", "refreshedPlusEmailCalendarConnections", "refreshedGoUnlimitedTextChat", "refreshedGoMessagesWithTools", "refreshedGoFileStorage", "refreshedGoVoiceChats", "plusRejoinSubtitle", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;", "plusRejoinPurchase", "Lcom/openai/valdi/chatgpt/subscription/pricing/AndroidWorkPricingCopy;", "work", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;Lcom/openai/valdi/chatgpt/subscription/pricing/AndroidWorkPricingCopy;)V", "_refreshedPlusUnlimitedTextChat", "Ljava/lang/String;", "_refreshedPlusAdvancedModels", "_refreshedPlusWorkAgent", "_refreshedPlusCodexAgent", "_refreshedPlusFileStorage", "_refreshedPlusImageCreation", "_refreshedPlusEmailCalendarConnections", "_refreshedGoUnlimitedTextChat", "_refreshedGoMessagesWithTools", "_refreshedGoFileStorage", "_refreshedGoVoiceChats", "_plusRejoinSubtitle", "_plusRejoinPurchase", "Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeText;", "_work", "Lcom/openai/valdi/chatgpt/subscription/pricing/AndroidWorkPricingCopy;", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'refreshedPlusUnlimitedTextChat':s,'refreshedPlusAdvancedModels':s,'refreshedPlusWorkAgent':s,'refreshedPlusCodexAgent':s,'refreshedPlusFileStorage':s,'refreshedPlusImageCreation':s,'refreshedPlusEmailCalendarConnections':s,'refreshedGoUnlimitedTextChat':s,'refreshedGoMessagesWithTools':s,'refreshedGoFileStorage':s,'refreshedGoVoiceChats':s,'plusRejoinSubtitle':s,'plusRejoinPurchase':r?:'[0]','work':r?:'[1]'", typeReferences = {SubscriptionPricingNativeText.class, AndroidWorkPricingCopy.class})
public final class SubscriptionPricingAndroidPresentationCopy extends b {
    private SubscriptionPricingNativeText _plusRejoinPurchase;
    private String _plusRejoinSubtitle;
    private String _refreshedGoFileStorage;
    private String _refreshedGoMessagesWithTools;
    private String _refreshedGoUnlimitedTextChat;
    private String _refreshedGoVoiceChats;
    private String _refreshedPlusAdvancedModels;
    private String _refreshedPlusCodexAgent;
    private String _refreshedPlusEmailCalendarConnections;
    private String _refreshedPlusFileStorage;
    private String _refreshedPlusImageCreation;
    private String _refreshedPlusUnlimitedTextChat;
    private String _refreshedPlusWorkAgent;
    private AndroidWorkPricingCopy _work;

    public SubscriptionPricingAndroidPresentationCopy(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, SubscriptionPricingNativeText subscriptionPricingNativeText, AndroidWorkPricingCopy androidWorkPricingCopy) {
        this._refreshedPlusUnlimitedTextChat = str;
        this._refreshedPlusAdvancedModels = str2;
        this._refreshedPlusWorkAgent = str3;
        this._refreshedPlusCodexAgent = str4;
        this._refreshedPlusFileStorage = str5;
        this._refreshedPlusImageCreation = str6;
        this._refreshedPlusEmailCalendarConnections = str7;
        this._refreshedGoUnlimitedTextChat = str8;
        this._refreshedGoMessagesWithTools = str9;
        this._refreshedGoFileStorage = str10;
        this._refreshedGoVoiceChats = str11;
        this._plusRejoinSubtitle = str12;
        this._plusRejoinPurchase = subscriptionPricingNativeText;
        this._work = androidWorkPricingCopy;
    }
}
