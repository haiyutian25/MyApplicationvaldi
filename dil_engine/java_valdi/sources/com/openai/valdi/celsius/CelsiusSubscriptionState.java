package com.openai.valdi.celsius;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Pending':0,'Ready':1", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0003\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003¨\u0006\u0004"}, d2 = {"Lcom/openai/valdi/celsius/CelsiusSubscriptionState;", "", "Pending", "Ready", "modules_oai_celsius-oai_celsius_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class CelsiusSubscriptionState {
    public static final CelsiusSubscriptionState Pending;
    public static final CelsiusSubscriptionState Ready;
    public static final /* synthetic */ CelsiusSubscriptionState[] a;

    static {
        CelsiusSubscriptionState celsiusSubscriptionState = new CelsiusSubscriptionState("Pending", 0);
        Pending = celsiusSubscriptionState;
        CelsiusSubscriptionState celsiusSubscriptionState2 = new CelsiusSubscriptionState("Ready", 1);
        Ready = celsiusSubscriptionState2;
        a = new CelsiusSubscriptionState[]{celsiusSubscriptionState, celsiusSubscriptionState2};
    }

    public static CelsiusSubscriptionState valueOf(String str) {
        return (CelsiusSubscriptionState) Enum.valueOf(CelsiusSubscriptionState.class, str);
    }

    public static CelsiusSubscriptionState[] values() {
        return (CelsiusSubscriptionState[]) a.clone();
    }
}
