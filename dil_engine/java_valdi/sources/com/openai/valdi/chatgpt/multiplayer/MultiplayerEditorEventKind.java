package com.openai.valdi.chatgpt.multiplayer;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'EDITOR':0,'STATE':1,'PARTICIPANTS':2,'PRESENCE_ACTIVITY':3,'FACEPILE':4", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerEditorEventKind;", "", "EDITOR", "STATE", "PARTICIPANTS", "PRESENCE_ACTIVITY", "FACEPILE", "modules_chatgpt_multiplayer-chatgpt_multiplayer_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class MultiplayerEditorEventKind {
    public static final MultiplayerEditorEventKind EDITOR;
    public static final MultiplayerEditorEventKind FACEPILE;
    public static final MultiplayerEditorEventKind PARTICIPANTS;
    public static final MultiplayerEditorEventKind PRESENCE_ACTIVITY;
    public static final MultiplayerEditorEventKind STATE;
    public static final /* synthetic */ MultiplayerEditorEventKind[] a;

    static {
        MultiplayerEditorEventKind multiplayerEditorEventKind = new MultiplayerEditorEventKind("EDITOR", 0);
        EDITOR = multiplayerEditorEventKind;
        MultiplayerEditorEventKind multiplayerEditorEventKind2 = new MultiplayerEditorEventKind("STATE", 1);
        STATE = multiplayerEditorEventKind2;
        MultiplayerEditorEventKind multiplayerEditorEventKind3 = new MultiplayerEditorEventKind("PARTICIPANTS", 2);
        PARTICIPANTS = multiplayerEditorEventKind3;
        MultiplayerEditorEventKind multiplayerEditorEventKind4 = new MultiplayerEditorEventKind("PRESENCE_ACTIVITY", 3);
        PRESENCE_ACTIVITY = multiplayerEditorEventKind4;
        MultiplayerEditorEventKind multiplayerEditorEventKind5 = new MultiplayerEditorEventKind("FACEPILE", 4);
        FACEPILE = multiplayerEditorEventKind5;
        a = new MultiplayerEditorEventKind[]{multiplayerEditorEventKind, multiplayerEditorEventKind2, multiplayerEditorEventKind3, multiplayerEditorEventKind4, multiplayerEditorEventKind5};
    }

    public static MultiplayerEditorEventKind valueOf(String str) {
        return (MultiplayerEditorEventKind) Enum.valueOf(MultiplayerEditorEventKind.class, str);
    }

    public static MultiplayerEditorEventKind[] values() {
        return (MultiplayerEditorEventKind[]) a.clone();
    }
}
