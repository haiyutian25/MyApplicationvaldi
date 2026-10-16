package com.openai.valdi.chatgpt.multiplayer;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'IDLE':0,'CONNECTING':1,'SYNCHRONIZING':2,'READY':3,'RETRYING':4,'INACTIVE':5,'SUSPENDED':6,'FAILED':7,'CLOSED':8,'FAILED_RETRYABLE':9,'FAILED_NON_RETRYABLE':10,'SYNCHRONIZED':11", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\r\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\nj\u0002\b\u000bj\u0002\b\fj\u0002\b\r¨\u0006\u000e"}, d2 = {"Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerConnectionState;", "", "IDLE", "CONNECTING", "SYNCHRONIZING", "READY", "RETRYING", "INACTIVE", "SUSPENDED", "FAILED", "CLOSED", "FAILED_RETRYABLE", "FAILED_NON_RETRYABLE", "SYNCHRONIZED", "modules_chatgpt_multiplayer-chatgpt_multiplayer_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class MultiplayerConnectionState {
    public static final MultiplayerConnectionState CLOSED;
    public static final MultiplayerConnectionState CONNECTING;
    public static final MultiplayerConnectionState FAILED;
    public static final MultiplayerConnectionState FAILED_NON_RETRYABLE;
    public static final MultiplayerConnectionState FAILED_RETRYABLE;
    public static final MultiplayerConnectionState IDLE;
    public static final MultiplayerConnectionState INACTIVE;
    public static final MultiplayerConnectionState READY;
    public static final MultiplayerConnectionState RETRYING;
    public static final MultiplayerConnectionState SUSPENDED;
    public static final MultiplayerConnectionState SYNCHRONIZED;
    public static final MultiplayerConnectionState SYNCHRONIZING;
    public static final /* synthetic */ MultiplayerConnectionState[] a;

    static {
        MultiplayerConnectionState multiplayerConnectionState = new MultiplayerConnectionState("IDLE", 0);
        IDLE = multiplayerConnectionState;
        MultiplayerConnectionState multiplayerConnectionState2 = new MultiplayerConnectionState("CONNECTING", 1);
        CONNECTING = multiplayerConnectionState2;
        MultiplayerConnectionState multiplayerConnectionState3 = new MultiplayerConnectionState("SYNCHRONIZING", 2);
        SYNCHRONIZING = multiplayerConnectionState3;
        MultiplayerConnectionState multiplayerConnectionState4 = new MultiplayerConnectionState("READY", 3);
        READY = multiplayerConnectionState4;
        MultiplayerConnectionState multiplayerConnectionState5 = new MultiplayerConnectionState("RETRYING", 4);
        RETRYING = multiplayerConnectionState5;
        MultiplayerConnectionState multiplayerConnectionState6 = new MultiplayerConnectionState("INACTIVE", 5);
        INACTIVE = multiplayerConnectionState6;
        MultiplayerConnectionState multiplayerConnectionState7 = new MultiplayerConnectionState("SUSPENDED", 6);
        SUSPENDED = multiplayerConnectionState7;
        MultiplayerConnectionState multiplayerConnectionState8 = new MultiplayerConnectionState("FAILED", 7);
        FAILED = multiplayerConnectionState8;
        MultiplayerConnectionState multiplayerConnectionState9 = new MultiplayerConnectionState("CLOSED", 8);
        CLOSED = multiplayerConnectionState9;
        MultiplayerConnectionState multiplayerConnectionState10 = new MultiplayerConnectionState("FAILED_RETRYABLE", 9);
        FAILED_RETRYABLE = multiplayerConnectionState10;
        MultiplayerConnectionState multiplayerConnectionState11 = new MultiplayerConnectionState("FAILED_NON_RETRYABLE", 10);
        FAILED_NON_RETRYABLE = multiplayerConnectionState11;
        MultiplayerConnectionState multiplayerConnectionState12 = new MultiplayerConnectionState("SYNCHRONIZED", 11);
        SYNCHRONIZED = multiplayerConnectionState12;
        a = new MultiplayerConnectionState[]{multiplayerConnectionState, multiplayerConnectionState2, multiplayerConnectionState3, multiplayerConnectionState4, multiplayerConnectionState5, multiplayerConnectionState6, multiplayerConnectionState7, multiplayerConnectionState8, multiplayerConnectionState9, multiplayerConnectionState10, multiplayerConnectionState11, multiplayerConnectionState12};
    }

    public static MultiplayerConnectionState valueOf(String str) {
        return (MultiplayerConnectionState) Enum.valueOf(MultiplayerConnectionState.class, str);
    }

    public static MultiplayerConnectionState[] values() {
        return (MultiplayerConnectionState[]) a.clone();
    }
}
