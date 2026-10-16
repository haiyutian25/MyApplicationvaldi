package com.openai.valdi.chatgpt.multiplayer;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'ADMISSION':0,'NETWORK':1,'AUTHORIZATION':2,'HOST_REJECTED':3,'UNKNOWN':4", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/openai/valdi/chatgpt/multiplayer/OAIMultiplayerConnectionFailureKind;", "", "ADMISSION", "NETWORK", "AUTHORIZATION", "HOST_REJECTED", "UNKNOWN", "modules_chatgpt_multiplayer-chatgpt_multiplayer_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class OAIMultiplayerConnectionFailureKind {
    public static final OAIMultiplayerConnectionFailureKind ADMISSION;
    public static final OAIMultiplayerConnectionFailureKind AUTHORIZATION;
    public static final OAIMultiplayerConnectionFailureKind HOST_REJECTED;
    public static final OAIMultiplayerConnectionFailureKind NETWORK;
    public static final OAIMultiplayerConnectionFailureKind UNKNOWN;
    public static final /* synthetic */ OAIMultiplayerConnectionFailureKind[] a;

    static {
        OAIMultiplayerConnectionFailureKind oAIMultiplayerConnectionFailureKind = new OAIMultiplayerConnectionFailureKind("ADMISSION", 0);
        ADMISSION = oAIMultiplayerConnectionFailureKind;
        OAIMultiplayerConnectionFailureKind oAIMultiplayerConnectionFailureKind2 = new OAIMultiplayerConnectionFailureKind("NETWORK", 1);
        NETWORK = oAIMultiplayerConnectionFailureKind2;
        OAIMultiplayerConnectionFailureKind oAIMultiplayerConnectionFailureKind3 = new OAIMultiplayerConnectionFailureKind("AUTHORIZATION", 2);
        AUTHORIZATION = oAIMultiplayerConnectionFailureKind3;
        OAIMultiplayerConnectionFailureKind oAIMultiplayerConnectionFailureKind4 = new OAIMultiplayerConnectionFailureKind("HOST_REJECTED", 3);
        HOST_REJECTED = oAIMultiplayerConnectionFailureKind4;
        OAIMultiplayerConnectionFailureKind oAIMultiplayerConnectionFailureKind5 = new OAIMultiplayerConnectionFailureKind("UNKNOWN", 4);
        UNKNOWN = oAIMultiplayerConnectionFailureKind5;
        a = new OAIMultiplayerConnectionFailureKind[]{oAIMultiplayerConnectionFailureKind, oAIMultiplayerConnectionFailureKind2, oAIMultiplayerConnectionFailureKind3, oAIMultiplayerConnectionFailureKind4, oAIMultiplayerConnectionFailureKind5};
    }

    public static OAIMultiplayerConnectionFailureKind valueOf(String str) {
        return (OAIMultiplayerConnectionFailureKind) Enum.valueOf(OAIMultiplayerConnectionFailureKind.class, str);
    }

    public static OAIMultiplayerConnectionFailureKind[] values() {
        return (OAIMultiplayerConnectionFailureKind[]) a.clone();
    }
}
