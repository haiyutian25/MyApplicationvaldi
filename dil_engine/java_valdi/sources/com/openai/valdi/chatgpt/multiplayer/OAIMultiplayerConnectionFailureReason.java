package com.openai.valdi.chatgpt.multiplayer;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'UNKNOWN':0,'RETRYABLE':1,'GRANT_EXPIRED':2,'ADMISSION_DENIED':3,'INVALID_RESPONSE':4,'HOST_REJECTED':5", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007¨\u0006\b"}, d2 = {"Lcom/openai/valdi/chatgpt/multiplayer/OAIMultiplayerConnectionFailureReason;", "", "UNKNOWN", "RETRYABLE", "GRANT_EXPIRED", "ADMISSION_DENIED", "INVALID_RESPONSE", "HOST_REJECTED", "modules_chatgpt_multiplayer-chatgpt_multiplayer_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class OAIMultiplayerConnectionFailureReason {
    public static final OAIMultiplayerConnectionFailureReason ADMISSION_DENIED;
    public static final OAIMultiplayerConnectionFailureReason GRANT_EXPIRED;
    public static final OAIMultiplayerConnectionFailureReason HOST_REJECTED;
    public static final OAIMultiplayerConnectionFailureReason INVALID_RESPONSE;
    public static final OAIMultiplayerConnectionFailureReason RETRYABLE;
    public static final OAIMultiplayerConnectionFailureReason UNKNOWN;
    public static final /* synthetic */ OAIMultiplayerConnectionFailureReason[] a;

    static {
        OAIMultiplayerConnectionFailureReason oAIMultiplayerConnectionFailureReason = new OAIMultiplayerConnectionFailureReason("UNKNOWN", 0);
        UNKNOWN = oAIMultiplayerConnectionFailureReason;
        OAIMultiplayerConnectionFailureReason oAIMultiplayerConnectionFailureReason2 = new OAIMultiplayerConnectionFailureReason("RETRYABLE", 1);
        RETRYABLE = oAIMultiplayerConnectionFailureReason2;
        OAIMultiplayerConnectionFailureReason oAIMultiplayerConnectionFailureReason3 = new OAIMultiplayerConnectionFailureReason("GRANT_EXPIRED", 2);
        GRANT_EXPIRED = oAIMultiplayerConnectionFailureReason3;
        OAIMultiplayerConnectionFailureReason oAIMultiplayerConnectionFailureReason4 = new OAIMultiplayerConnectionFailureReason("ADMISSION_DENIED", 3);
        ADMISSION_DENIED = oAIMultiplayerConnectionFailureReason4;
        OAIMultiplayerConnectionFailureReason oAIMultiplayerConnectionFailureReason5 = new OAIMultiplayerConnectionFailureReason("INVALID_RESPONSE", 4);
        INVALID_RESPONSE = oAIMultiplayerConnectionFailureReason5;
        OAIMultiplayerConnectionFailureReason oAIMultiplayerConnectionFailureReason6 = new OAIMultiplayerConnectionFailureReason("HOST_REJECTED", 5);
        HOST_REJECTED = oAIMultiplayerConnectionFailureReason6;
        a = new OAIMultiplayerConnectionFailureReason[]{oAIMultiplayerConnectionFailureReason, oAIMultiplayerConnectionFailureReason2, oAIMultiplayerConnectionFailureReason3, oAIMultiplayerConnectionFailureReason4, oAIMultiplayerConnectionFailureReason5, oAIMultiplayerConnectionFailureReason6};
    }

    public static OAIMultiplayerConnectionFailureReason valueOf(String str) {
        return (OAIMultiplayerConnectionFailureReason) Enum.valueOf(OAIMultiplayerConnectionFailureReason.class, str);
    }

    public static OAIMultiplayerConnectionFailureReason[] values() {
        return (OAIMultiplayerConnectionFailureReason[]) a.clone();
    }
}
