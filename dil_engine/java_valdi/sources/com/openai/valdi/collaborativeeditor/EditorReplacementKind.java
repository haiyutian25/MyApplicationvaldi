package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'TEXT':0,'SLICE':1,'PARAGRAPH_BREAK':2,'LINE_BREAK':3,'EMPTY':4", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/EditorReplacementKind;", "", "TEXT", "SLICE", "PARAGRAPH_BREAK", "LINE_BREAK", "EMPTY", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class EditorReplacementKind {
    public static final EditorReplacementKind EMPTY;
    public static final EditorReplacementKind LINE_BREAK;
    public static final EditorReplacementKind PARAGRAPH_BREAK;
    public static final EditorReplacementKind SLICE;
    public static final EditorReplacementKind TEXT;
    public static final /* synthetic */ EditorReplacementKind[] a;

    static {
        EditorReplacementKind editorReplacementKind = new EditorReplacementKind("TEXT", 0);
        TEXT = editorReplacementKind;
        EditorReplacementKind editorReplacementKind2 = new EditorReplacementKind("SLICE", 1);
        SLICE = editorReplacementKind2;
        EditorReplacementKind editorReplacementKind3 = new EditorReplacementKind("PARAGRAPH_BREAK", 2);
        PARAGRAPH_BREAK = editorReplacementKind3;
        EditorReplacementKind editorReplacementKind4 = new EditorReplacementKind("LINE_BREAK", 3);
        LINE_BREAK = editorReplacementKind4;
        EditorReplacementKind editorReplacementKind5 = new EditorReplacementKind("EMPTY", 4);
        EMPTY = editorReplacementKind5;
        a = new EditorReplacementKind[]{editorReplacementKind, editorReplacementKind2, editorReplacementKind3, editorReplacementKind4, editorReplacementKind5};
    }

    public static EditorReplacementKind valueOf(String str) {
        return (EditorReplacementKind) Enum.valueOf(EditorReplacementKind.class, str);
    }

    public static EditorReplacementKind[] values() {
        return (EditorReplacementKind[]) a.clone();
    }
}
