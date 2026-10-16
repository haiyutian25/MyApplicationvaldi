package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'LOCAL':0,'REMOTE':1,'HISTORY':2", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0004\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004¨\u0006\u0005"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/EditorChangeOrigin;", "", "LOCAL", "REMOTE", "HISTORY", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class EditorChangeOrigin {
    public static final EditorChangeOrigin HISTORY;
    public static final EditorChangeOrigin LOCAL;
    public static final EditorChangeOrigin REMOTE;
    public static final /* synthetic */ EditorChangeOrigin[] a;

    static {
        EditorChangeOrigin editorChangeOrigin = new EditorChangeOrigin("LOCAL", 0);
        LOCAL = editorChangeOrigin;
        EditorChangeOrigin editorChangeOrigin2 = new EditorChangeOrigin("REMOTE", 1);
        REMOTE = editorChangeOrigin2;
        EditorChangeOrigin editorChangeOrigin3 = new EditorChangeOrigin("HISTORY", 2);
        HISTORY = editorChangeOrigin3;
        a = new EditorChangeOrigin[]{editorChangeOrigin, editorChangeOrigin2, editorChangeOrigin3};
    }

    public static EditorChangeOrigin valueOf(String str) {
        return (EditorChangeOrigin) Enum.valueOf(EditorChangeOrigin.class, str);
    }

    public static EditorChangeOrigin[] values() {
        return (EditorChangeOrigin[]) a.clone();
    }
}
