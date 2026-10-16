package com.openai.valdi.chatgpt.multiplayer;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'UNKNOWN':0,'NETWORK':1,'SYNCHRONIZATION_TIMEOUT':2,'GRANT_EXPIRED':3,'ACCESS_DENIED':4,'INVALID_RESPONSE':5,'HOST_REJECTED':6,'DOCUMENT_UNAVAILABLE':7,'UPDATE_REJECTED':8,'SERVER_PERSISTENCE':9,'CHECKPOINT':10,'LOCAL_PERSISTENCE':11,'EDITOR':12", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u000e\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\nj\u0002\b\u000bj\u0002\b\fj\u0002\b\rj\u0002\b\u000e¨\u0006\u000f"}, d2 = {"Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerFailureReason;", "", "UNKNOWN", "NETWORK", "SYNCHRONIZATION_TIMEOUT", "GRANT_EXPIRED", "ACCESS_DENIED", "INVALID_RESPONSE", "HOST_REJECTED", "DOCUMENT_UNAVAILABLE", "UPDATE_REJECTED", "SERVER_PERSISTENCE", "CHECKPOINT", "LOCAL_PERSISTENCE", "EDITOR", "modules_chatgpt_multiplayer-chatgpt_multiplayer_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class MultiplayerFailureReason {
    public static final MultiplayerFailureReason ACCESS_DENIED;
    public static final MultiplayerFailureReason CHECKPOINT;
    public static final MultiplayerFailureReason DOCUMENT_UNAVAILABLE;
    public static final MultiplayerFailureReason EDITOR;
    public static final MultiplayerFailureReason GRANT_EXPIRED;
    public static final MultiplayerFailureReason HOST_REJECTED;
    public static final MultiplayerFailureReason INVALID_RESPONSE;
    public static final MultiplayerFailureReason LOCAL_PERSISTENCE;
    public static final MultiplayerFailureReason NETWORK;
    public static final MultiplayerFailureReason SERVER_PERSISTENCE;
    public static final MultiplayerFailureReason SYNCHRONIZATION_TIMEOUT;
    public static final MultiplayerFailureReason UNKNOWN;
    public static final MultiplayerFailureReason UPDATE_REJECTED;
    public static final /* synthetic */ MultiplayerFailureReason[] a;

    static {
        MultiplayerFailureReason multiplayerFailureReason = new MultiplayerFailureReason("UNKNOWN", 0);
        UNKNOWN = multiplayerFailureReason;
        MultiplayerFailureReason multiplayerFailureReason2 = new MultiplayerFailureReason("NETWORK", 1);
        NETWORK = multiplayerFailureReason2;
        MultiplayerFailureReason multiplayerFailureReason3 = new MultiplayerFailureReason("SYNCHRONIZATION_TIMEOUT", 2);
        SYNCHRONIZATION_TIMEOUT = multiplayerFailureReason3;
        MultiplayerFailureReason multiplayerFailureReason4 = new MultiplayerFailureReason("GRANT_EXPIRED", 3);
        GRANT_EXPIRED = multiplayerFailureReason4;
        MultiplayerFailureReason multiplayerFailureReason5 = new MultiplayerFailureReason("ACCESS_DENIED", 4);
        ACCESS_DENIED = multiplayerFailureReason5;
        MultiplayerFailureReason multiplayerFailureReason6 = new MultiplayerFailureReason("INVALID_RESPONSE", 5);
        INVALID_RESPONSE = multiplayerFailureReason6;
        MultiplayerFailureReason multiplayerFailureReason7 = new MultiplayerFailureReason("HOST_REJECTED", 6);
        HOST_REJECTED = multiplayerFailureReason7;
        MultiplayerFailureReason multiplayerFailureReason8 = new MultiplayerFailureReason("DOCUMENT_UNAVAILABLE", 7);
        DOCUMENT_UNAVAILABLE = multiplayerFailureReason8;
        MultiplayerFailureReason multiplayerFailureReason9 = new MultiplayerFailureReason("UPDATE_REJECTED", 8);
        UPDATE_REJECTED = multiplayerFailureReason9;
        MultiplayerFailureReason multiplayerFailureReason10 = new MultiplayerFailureReason("SERVER_PERSISTENCE", 9);
        SERVER_PERSISTENCE = multiplayerFailureReason10;
        MultiplayerFailureReason multiplayerFailureReason11 = new MultiplayerFailureReason("CHECKPOINT", 10);
        CHECKPOINT = multiplayerFailureReason11;
        MultiplayerFailureReason multiplayerFailureReason12 = new MultiplayerFailureReason("LOCAL_PERSISTENCE", 11);
        LOCAL_PERSISTENCE = multiplayerFailureReason12;
        MultiplayerFailureReason multiplayerFailureReason13 = new MultiplayerFailureReason("EDITOR", 12);
        EDITOR = multiplayerFailureReason13;
        a = new MultiplayerFailureReason[]{multiplayerFailureReason, multiplayerFailureReason2, multiplayerFailureReason3, multiplayerFailureReason4, multiplayerFailureReason5, multiplayerFailureReason6, multiplayerFailureReason7, multiplayerFailureReason8, multiplayerFailureReason9, multiplayerFailureReason10, multiplayerFailureReason11, multiplayerFailureReason12, multiplayerFailureReason13};
    }

    public static MultiplayerFailureReason valueOf(String str) {
        return (MultiplayerFailureReason) Enum.valueOf(MultiplayerFailureReason.class, str);
    }

    public static MultiplayerFailureReason[] values() {
        return (MultiplayerFailureReason[]) a.clone();
    }
}
