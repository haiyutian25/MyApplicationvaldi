package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'APPLIED':0,'NO_CHANGE':1,'REJECTED':2", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0004\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004¨\u0006\u0005"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/EditorResultStatus;", "", "APPLIED", "NO_CHANGE", "REJECTED", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class EditorResultStatus {
    public static final EditorResultStatus APPLIED;
    public static final EditorResultStatus NO_CHANGE;
    public static final EditorResultStatus REJECTED;
    public static final /* synthetic */ EditorResultStatus[] a;

    static {
        EditorResultStatus editorResultStatus = new EditorResultStatus("APPLIED", 0);
        APPLIED = editorResultStatus;
        EditorResultStatus editorResultStatus2 = new EditorResultStatus("NO_CHANGE", 1);
        NO_CHANGE = editorResultStatus2;
        EditorResultStatus editorResultStatus3 = new EditorResultStatus("REJECTED", 2);
        REJECTED = editorResultStatus3;
        a = new EditorResultStatus[]{editorResultStatus, editorResultStatus2, editorResultStatus3};
    }

    public static EditorResultStatus valueOf(String str) {
        return (EditorResultStatus) Enum.valueOf(EditorResultStatus.class, str);
    }

    public static EditorResultStatus[] values() {
        return (EditorResultStatus[]) a.clone();
    }
}
