package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'OPENED':0,'UNSUPPORTED_SCHEMA':1,'INVALID_INITIAL_STATE':2", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0004\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004¨\u0006\u0005"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/EditorOpenStatus;", "", "OPENED", "UNSUPPORTED_SCHEMA", "INVALID_INITIAL_STATE", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class EditorOpenStatus {
    public static final EditorOpenStatus INVALID_INITIAL_STATE;
    public static final EditorOpenStatus OPENED;
    public static final EditorOpenStatus UNSUPPORTED_SCHEMA;
    public static final /* synthetic */ EditorOpenStatus[] a;

    static {
        EditorOpenStatus editorOpenStatus = new EditorOpenStatus("OPENED", 0);
        OPENED = editorOpenStatus;
        EditorOpenStatus editorOpenStatus2 = new EditorOpenStatus("UNSUPPORTED_SCHEMA", 1);
        UNSUPPORTED_SCHEMA = editorOpenStatus2;
        EditorOpenStatus editorOpenStatus3 = new EditorOpenStatus("INVALID_INITIAL_STATE", 2);
        INVALID_INITIAL_STATE = editorOpenStatus3;
        a = new EditorOpenStatus[]{editorOpenStatus, editorOpenStatus2, editorOpenStatus3};
    }

    public static EditorOpenStatus valueOf(String str) {
        return (EditorOpenStatus) Enum.valueOf(EditorOpenStatus.class, str);
    }

    public static EditorOpenStatus[] values() {
        return (EditorOpenStatus[]) a.clone();
    }
}
