package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\bB\b\u0007\u0018\u00002\u00020\u0001B\u0081\u0002\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0002\u0012\u0006\u0010\u0007\u001a\u00020\u0002\u0012\u0006\u0010\b\u001a\u00020\u0002\u0012\u0006\u0010\t\u001a\u00020\u0002\u0012\u0006\u0010\n\u001a\u00020\u0002\u0012\u0006\u0010\u000b\u001a\u00020\u0002\u0012\u0006\u0010\f\u001a\u00020\u0002\u0012\u0006\u0010\r\u001a\u00020\u0002\u0012\u0006\u0010\u000e\u001a\u00020\u0002\u0012\u0006\u0010\u000f\u001a\u00020\u0002\u0012\u0006\u0010\u0010\u001a\u00020\u0002\u0012\u0006\u0010\u0011\u001a\u00020\u0002\u0012\u0006\u0010\u0012\u001a\u00020\u0002\u0012\u0006\u0010\u0013\u001a\u00020\u0002\u0012\u0006\u0010\u0014\u001a\u00020\u0002\u0012\u0006\u0010\u0015\u001a\u00020\u0002\u0012\u0006\u0010\u0016\u001a\u00020\u0002\u0012\u0006\u0010\u0017\u001a\u00020\u0002\u0012\u0006\u0010\u0018\u001a\u00020\u0002\u0012\u0006\u0010\u0019\u001a\u00020\u0002\u0012\u0006\u0010\u001a\u001a\u00020\u0002\u0012\u0006\u0010\u001b\u001a\u00020\u0002\u0012\u0006\u0010\u001c\u001a\u00020\u0002\u0012\u0006\u0010\u001d\u001a\u00020\u0002\u0012\u0006\u0010\u001e\u001a\u00020\u0002\u0012\u0006\u0010\u001f\u001a\u00020\u0002\u0012\u0006\u0010 \u001a\u00020\u0002\u0012\u0006\u0010!\u001a\u00020\u0002¢\u0006\u0004\b\"\u0010#R\u0016\u0010$\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b$\u0010%R\u0016\u0010&\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b&\u0010%R\u0016\u0010'\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b'\u0010%R\u0016\u0010(\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b(\u0010%R\u0016\u0010)\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b)\u0010%R\u0016\u0010*\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b*\u0010%R\u0016\u0010+\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b+\u0010%R\u0016\u0010,\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b,\u0010%R\u0016\u0010-\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b-\u0010%R\u0016\u0010.\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b.\u0010%R\u0016\u0010/\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b/\u0010%R\u0016\u00100\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b0\u0010%R\u0016\u00101\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b1\u0010%R\u0016\u00102\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b2\u0010%R\u0016\u00103\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b3\u0010%R\u0016\u00104\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b4\u0010%R\u0016\u00105\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b5\u0010%R\u0016\u00106\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b6\u0010%R\u0016\u00107\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b7\u0010%R\u0016\u00108\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b8\u0010%R\u0016\u00109\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b9\u0010%R\u0016\u0010:\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b:\u0010%R\u0016\u0010;\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b;\u0010%R\u0016\u0010<\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b<\u0010%R\u0016\u0010=\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b=\u0010%R\u0016\u0010>\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b>\u0010%R\u0016\u0010?\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b?\u0010%R\u0016\u0010@\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b@\u0010%R\u0016\u0010A\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\bA\u0010%R\u0016\u0010B\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\bB\u0010%R\u0016\u0010C\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\bC\u0010%¨\u0006D"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/SubscriptionPricingNativeFeatureCopy;", "Lcom/snap/valdi/utils/b;", "", "basicModels", "coreModel", "moreMessages", "moreUploads", "goImageCreation", "longerMemory", "noAds", "smarterModels", "moreMessagesAndUploads", "plusImageCreation", "moreMemory", "agentsAndDeepResearch", "earlyAccess", "proFrontierModel", "proCodex", "proDeepResearch", "proUnlimitedModel", "proMaximumMemory", "advancedChatIntelligence", "expandedCodexTokenUsage", "advancedCodingModels", "expandedDataAnalysisTools", "moreParallelTasks", "advancedImageQualityWithThinking", "multiImageOutput", "noWatermarks", "advancedIntelligence", "connectToBankAccounts", "spendingBreakdowns", "billPayReminders", "subscriptionManagement", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "_basicModels", "Ljava/lang/String;", "_coreModel", "_moreMessages", "_moreUploads", "_goImageCreation", "_longerMemory", "_noAds", "_smarterModels", "_moreMessagesAndUploads", "_plusImageCreation", "_moreMemory", "_agentsAndDeepResearch", "_earlyAccess", "_proFrontierModel", "_proCodex", "_proDeepResearch", "_proUnlimitedModel", "_proMaximumMemory", "_advancedChatIntelligence", "_expandedCodexTokenUsage", "_advancedCodingModels", "_expandedDataAnalysisTools", "_moreParallelTasks", "_advancedImageQualityWithThinking", "_multiImageOutput", "_noWatermarks", "_advancedIntelligence", "_connectToBankAccounts", "_spendingBreakdowns", "_billPayReminders", "_subscriptionManagement", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'basicModels':s,'coreModel':s,'moreMessages':s,'moreUploads':s,'goImageCreation':s,'longerMemory':s,'noAds':s,'smarterModels':s,'moreMessagesAndUploads':s,'plusImageCreation':s,'moreMemory':s,'agentsAndDeepResearch':s,'earlyAccess':s,'proFrontierModel':s,'proCodex':s,'proDeepResearch':s,'proUnlimitedModel':s,'proMaximumMemory':s,'advancedChatIntelligence':s,'expandedCodexTokenUsage':s,'advancedCodingModels':s,'expandedDataAnalysisTools':s,'moreParallelTasks':s,'advancedImageQualityWithThinking':s,'multiImageOutput':s,'noWatermarks':s,'advancedIntelligence':s,'connectToBankAccounts':s,'spendingBreakdowns':s,'billPayReminders':s,'subscriptionManagement':s", typeReferences = {})
public final class SubscriptionPricingNativeFeatureCopy extends b {
    private String _advancedChatIntelligence;
    private String _advancedCodingModels;
    private String _advancedImageQualityWithThinking;
    private String _advancedIntelligence;
    private String _agentsAndDeepResearch;
    private String _basicModels;
    private String _billPayReminders;
    private String _connectToBankAccounts;
    private String _coreModel;
    private String _earlyAccess;
    private String _expandedCodexTokenUsage;
    private String _expandedDataAnalysisTools;
    private String _goImageCreation;
    private String _longerMemory;
    private String _moreMemory;
    private String _moreMessages;
    private String _moreMessagesAndUploads;
    private String _moreParallelTasks;
    private String _moreUploads;
    private String _multiImageOutput;
    private String _noAds;
    private String _noWatermarks;
    private String _plusImageCreation;
    private String _proCodex;
    private String _proDeepResearch;
    private String _proFrontierModel;
    private String _proMaximumMemory;
    private String _proUnlimitedModel;
    private String _smarterModels;
    private String _spendingBreakdowns;
    private String _subscriptionManagement;

    public SubscriptionPricingNativeFeatureCopy(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14, String str15, String str16, String str17, String str18, String str19, String str20, String str21, String str22, String str23, String str24, String str25, String str26, String str27, String str28, String str29, String str30, String str31) {
        this._basicModels = str;
        this._coreModel = str2;
        this._moreMessages = str3;
        this._moreUploads = str4;
        this._goImageCreation = str5;
        this._longerMemory = str6;
        this._noAds = str7;
        this._smarterModels = str8;
        this._moreMessagesAndUploads = str9;
        this._plusImageCreation = str10;
        this._moreMemory = str11;
        this._agentsAndDeepResearch = str12;
        this._earlyAccess = str13;
        this._proFrontierModel = str14;
        this._proCodex = str15;
        this._proDeepResearch = str16;
        this._proUnlimitedModel = str17;
        this._proMaximumMemory = str18;
        this._advancedChatIntelligence = str19;
        this._expandedCodexTokenUsage = str20;
        this._advancedCodingModels = str21;
        this._expandedDataAnalysisTools = str22;
        this._moreParallelTasks = str23;
        this._advancedImageQualityWithThinking = str24;
        this._multiImageOutput = str25;
        this._noWatermarks = str26;
        this._advancedIntelligence = str27;
        this._connectToBankAccounts = str28;
        this._spendingBreakdowns = str29;
        this._billPayReminders = str30;
        this._subscriptionManagement = str31;
    }
}
