package com.openai.valdi.chatgpt.subscription.pricing;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0010\b\u0007\u0018\u00002\u00020\u0001B=\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\u0005\u0012\u0006\u0010\t\u001a\u00020\u0005¢\u0006\u0004\b\n\u0010\u000bR\u0016\u0010\f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\rR\u0016\u0010\u000e\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\rR\u0018\u0010\u000f\u001a\u0004\u0018\u00010\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\u0010R\u0016\u0010\u0011\u001a\u00020\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\u0012R\u0016\u0010\u0013\u001a\u00020\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\u0012R\u0016\u0010\u0014\u001a\u00020\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0012¨\u0006\u0015"}, d2 = {"Lcom/openai/valdi/chatgpt/subscription/pricing/AndroidPricingRefreshConfiguration;", "Lcom/snap/valdi/utils/b;", "", "accentTextColor", "accentIconColor", "", "canOpenComparePlans", "usesNewCopy", "useTrialPlusCopy", "useChurnedPlusCopy", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;ZZZ)V", "_accentTextColor", "Ljava/lang/String;", "_accentIconColor", "_canOpenComparePlans", "Ljava/lang/Boolean;", "_usesNewCopy", "Z", "_useTrialPlusCopy", "_useChurnedPlusCopy", "modules_chatgpt_subscription_pricing-chatgpt_subscription_pricing_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'accentTextColor':s,'accentIconColor':s,'canOpenComparePlans':b@?,'usesNewCopy':b,'useTrialPlusCopy':b,'useChurnedPlusCopy':b", typeReferences = {})
public final class AndroidPricingRefreshConfiguration extends b {
    private String _accentIconColor;
    private String _accentTextColor;
    private Boolean _canOpenComparePlans;
    private boolean _useChurnedPlusCopy;
    private boolean _useTrialPlusCopy;
    private boolean _usesNewCopy;

    public AndroidPricingRefreshConfiguration(String str, String str2, Boolean bool, boolean z, boolean z2, boolean z3) {
        this._accentTextColor = str;
        this._accentIconColor = str2;
        this._canOpenComparePlans = bool;
        this._usesNewCopy = z;
        this._useTrialPlusCopy = z2;
        this._useChurnedPlusCopy = z3;
    }
}
