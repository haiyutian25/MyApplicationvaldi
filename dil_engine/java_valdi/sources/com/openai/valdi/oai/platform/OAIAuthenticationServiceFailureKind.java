package com.openai.valdi.oai.platform;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Cancelled':0,'Network':1,'Rejected':2,'Unavailable':3,'Unknown':4", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/openai/valdi/oai/platform/OAIAuthenticationServiceFailureKind;", "", "Cancelled", "Network", "Rejected", "Unavailable", "Unknown", "modules_oai_authentication-oai_authentication_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class OAIAuthenticationServiceFailureKind {
    public static final OAIAuthenticationServiceFailureKind Cancelled;
    public static final OAIAuthenticationServiceFailureKind Network;
    public static final OAIAuthenticationServiceFailureKind Rejected;
    public static final OAIAuthenticationServiceFailureKind Unavailable;
    public static final OAIAuthenticationServiceFailureKind Unknown;
    public static final /* synthetic */ OAIAuthenticationServiceFailureKind[] a;

    static {
        OAIAuthenticationServiceFailureKind oAIAuthenticationServiceFailureKind = new OAIAuthenticationServiceFailureKind("Cancelled", 0);
        Cancelled = oAIAuthenticationServiceFailureKind;
        OAIAuthenticationServiceFailureKind oAIAuthenticationServiceFailureKind2 = new OAIAuthenticationServiceFailureKind("Network", 1);
        Network = oAIAuthenticationServiceFailureKind2;
        OAIAuthenticationServiceFailureKind oAIAuthenticationServiceFailureKind3 = new OAIAuthenticationServiceFailureKind("Rejected", 2);
        Rejected = oAIAuthenticationServiceFailureKind3;
        OAIAuthenticationServiceFailureKind oAIAuthenticationServiceFailureKind4 = new OAIAuthenticationServiceFailureKind("Unavailable", 3);
        Unavailable = oAIAuthenticationServiceFailureKind4;
        OAIAuthenticationServiceFailureKind oAIAuthenticationServiceFailureKind5 = new OAIAuthenticationServiceFailureKind("Unknown", 4);
        Unknown = oAIAuthenticationServiceFailureKind5;
        a = new OAIAuthenticationServiceFailureKind[]{oAIAuthenticationServiceFailureKind, oAIAuthenticationServiceFailureKind2, oAIAuthenticationServiceFailureKind3, oAIAuthenticationServiceFailureKind4, oAIAuthenticationServiceFailureKind5};
    }

    public static OAIAuthenticationServiceFailureKind valueOf(String str) {
        return (OAIAuthenticationServiceFailureKind) Enum.valueOf(OAIAuthenticationServiceFailureKind.class, str);
    }

    public static OAIAuthenticationServiceFailureKind[] values() {
        return (OAIAuthenticationServiceFailureKind[]) a.clone();
    }
}
