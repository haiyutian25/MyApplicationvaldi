package com.openai.valdi.chatgpt.multiplayer;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'CONNECTION':0,'PROTOCOL':1,'DOCUMENT_UNAVAILABLE':2,'EDITOR':3,'PERSISTENCE':4", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerFailureKind;", "", "CONNECTION", "PROTOCOL", "DOCUMENT_UNAVAILABLE", "EDITOR", "PERSISTENCE", "modules_chatgpt_multiplayer-chatgpt_multiplayer_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class MultiplayerFailureKind {
    public static final MultiplayerFailureKind CONNECTION;
    public static final MultiplayerFailureKind DOCUMENT_UNAVAILABLE;
    public static final MultiplayerFailureKind EDITOR;
    public static final MultiplayerFailureKind PERSISTENCE;
    public static final MultiplayerFailureKind PROTOCOL;
    public static final /* synthetic */ MultiplayerFailureKind[] a;

    static {
        MultiplayerFailureKind multiplayerFailureKind = new MultiplayerFailureKind("CONNECTION", 0);
        CONNECTION = multiplayerFailureKind;
        MultiplayerFailureKind multiplayerFailureKind2 = new MultiplayerFailureKind("PROTOCOL", 1);
        PROTOCOL = multiplayerFailureKind2;
        MultiplayerFailureKind multiplayerFailureKind3 = new MultiplayerFailureKind("DOCUMENT_UNAVAILABLE", 2);
        DOCUMENT_UNAVAILABLE = multiplayerFailureKind3;
        MultiplayerFailureKind multiplayerFailureKind4 = new MultiplayerFailureKind("EDITOR", 3);
        EDITOR = multiplayerFailureKind4;
        MultiplayerFailureKind multiplayerFailureKind5 = new MultiplayerFailureKind("PERSISTENCE", 4);
        PERSISTENCE = multiplayerFailureKind5;
        a = new MultiplayerFailureKind[]{multiplayerFailureKind, multiplayerFailureKind2, multiplayerFailureKind3, multiplayerFailureKind4, multiplayerFailureKind5};
    }

    public static MultiplayerFailureKind valueOf(String str) {
        return (MultiplayerFailureKind) Enum.valueOf(MultiplayerFailureKind.class, str);
    }

    public static MultiplayerFailureKind[] values() {
        return (MultiplayerFailureKind[]) a.clone();
    }
}
