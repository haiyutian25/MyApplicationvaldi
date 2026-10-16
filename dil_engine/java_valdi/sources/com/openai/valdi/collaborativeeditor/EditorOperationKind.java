package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'REPLACE_RANGE':0,'SET_MARK':1,'SET_BLOCK_TYPE':2,'SET_LIST':3,'INDENT':4,'SET_CHECKED':5,'SET_NODE_ATTRIBUTES':6,'INSERT_SLICE':7,'REMOVE_NODE':8,'REPLACE_AROUND':9,'PASTE':10,'INPUT':11,'SET_DOCUMENT_THEME':12,'UPSERT_LIVE_NOTE':13,'REMOVE_LIVE_NOTE':14", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0010\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\nj\u0002\b\u000bj\u0002\b\fj\u0002\b\rj\u0002\b\u000ej\u0002\b\u000fj\u0002\b\u0010¨\u0006\u0011"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/EditorOperationKind;", "", "REPLACE_RANGE", "SET_MARK", "SET_BLOCK_TYPE", "SET_LIST", "INDENT", "SET_CHECKED", "SET_NODE_ATTRIBUTES", "INSERT_SLICE", "REMOVE_NODE", "REPLACE_AROUND", "PASTE", "INPUT", "SET_DOCUMENT_THEME", "UPSERT_LIVE_NOTE", "REMOVE_LIVE_NOTE", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class EditorOperationKind {
    public static final EditorOperationKind INDENT;
    public static final EditorOperationKind INPUT;
    public static final EditorOperationKind INSERT_SLICE;
    public static final EditorOperationKind PASTE;
    public static final EditorOperationKind REMOVE_LIVE_NOTE;
    public static final EditorOperationKind REMOVE_NODE;
    public static final EditorOperationKind REPLACE_AROUND;
    public static final EditorOperationKind REPLACE_RANGE;
    public static final EditorOperationKind SET_BLOCK_TYPE;
    public static final EditorOperationKind SET_CHECKED;
    public static final EditorOperationKind SET_DOCUMENT_THEME;
    public static final EditorOperationKind SET_LIST;
    public static final EditorOperationKind SET_MARK;
    public static final EditorOperationKind SET_NODE_ATTRIBUTES;
    public static final EditorOperationKind UPSERT_LIVE_NOTE;
    public static final /* synthetic */ EditorOperationKind[] a;

    static {
        EditorOperationKind editorOperationKind = new EditorOperationKind("REPLACE_RANGE", 0);
        REPLACE_RANGE = editorOperationKind;
        EditorOperationKind editorOperationKind2 = new EditorOperationKind("SET_MARK", 1);
        SET_MARK = editorOperationKind2;
        EditorOperationKind editorOperationKind3 = new EditorOperationKind("SET_BLOCK_TYPE", 2);
        SET_BLOCK_TYPE = editorOperationKind3;
        EditorOperationKind editorOperationKind4 = new EditorOperationKind("SET_LIST", 3);
        SET_LIST = editorOperationKind4;
        EditorOperationKind editorOperationKind5 = new EditorOperationKind("INDENT", 4);
        INDENT = editorOperationKind5;
        EditorOperationKind editorOperationKind6 = new EditorOperationKind("SET_CHECKED", 5);
        SET_CHECKED = editorOperationKind6;
        EditorOperationKind editorOperationKind7 = new EditorOperationKind("SET_NODE_ATTRIBUTES", 6);
        SET_NODE_ATTRIBUTES = editorOperationKind7;
        EditorOperationKind editorOperationKind8 = new EditorOperationKind("INSERT_SLICE", 7);
        INSERT_SLICE = editorOperationKind8;
        EditorOperationKind editorOperationKind9 = new EditorOperationKind("REMOVE_NODE", 8);
        REMOVE_NODE = editorOperationKind9;
        EditorOperationKind editorOperationKind10 = new EditorOperationKind("REPLACE_AROUND", 9);
        REPLACE_AROUND = editorOperationKind10;
        EditorOperationKind editorOperationKind11 = new EditorOperationKind("PASTE", 10);
        PASTE = editorOperationKind11;
        EditorOperationKind editorOperationKind12 = new EditorOperationKind("INPUT", 11);
        INPUT = editorOperationKind12;
        EditorOperationKind editorOperationKind13 = new EditorOperationKind("SET_DOCUMENT_THEME", 12);
        SET_DOCUMENT_THEME = editorOperationKind13;
        EditorOperationKind editorOperationKind14 = new EditorOperationKind("UPSERT_LIVE_NOTE", 13);
        UPSERT_LIVE_NOTE = editorOperationKind14;
        EditorOperationKind editorOperationKind15 = new EditorOperationKind("REMOVE_LIVE_NOTE", 14);
        REMOVE_LIVE_NOTE = editorOperationKind15;
        a = new EditorOperationKind[]{editorOperationKind, editorOperationKind2, editorOperationKind3, editorOperationKind4, editorOperationKind5, editorOperationKind6, editorOperationKind7, editorOperationKind8, editorOperationKind9, editorOperationKind10, editorOperationKind11, editorOperationKind12, editorOperationKind13, editorOperationKind14, editorOperationKind15};
    }

    public static EditorOperationKind valueOf(String str) {
        return (EditorOperationKind) Enum.valueOf(EditorOperationKind.class, str);
    }

    public static EditorOperationKind[] values() {
        return (EditorOperationKind[]) a.clone();
    }
}
