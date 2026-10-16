package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'REPLACE_TEXT':0,'PARAGRAPH_BREAK':1,'LINE_BREAK':2,'DELETE_BACKWARD':3,'DELETE_FORWARD':4,'TOGGLE_MARK':5,'TOGGLE_BLOCK':6,'TOGGLE_LIST':7,'INSERT_DIVIDER':8,'TOGGLE_CHECKED':9,'INDENT':10,'OUTDENT':11,'TAB':12,'TEXT_TRANSACTION':13", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u000f\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\nj\u0002\b\u000bj\u0002\b\fj\u0002\b\rj\u0002\b\u000ej\u0002\b\u000f¨\u0006\u0010"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/EditorInputAction;", "", "REPLACE_TEXT", "PARAGRAPH_BREAK", "LINE_BREAK", "DELETE_BACKWARD", "DELETE_FORWARD", "TOGGLE_MARK", "TOGGLE_BLOCK", "TOGGLE_LIST", "INSERT_DIVIDER", "TOGGLE_CHECKED", "INDENT", "OUTDENT", "TAB", "TEXT_TRANSACTION", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class EditorInputAction {
    public static final EditorInputAction DELETE_BACKWARD;
    public static final EditorInputAction DELETE_FORWARD;
    public static final EditorInputAction INDENT;
    public static final EditorInputAction INSERT_DIVIDER;
    public static final EditorInputAction LINE_BREAK;
    public static final EditorInputAction OUTDENT;
    public static final EditorInputAction PARAGRAPH_BREAK;
    public static final EditorInputAction REPLACE_TEXT;
    public static final EditorInputAction TAB;
    public static final EditorInputAction TEXT_TRANSACTION;
    public static final EditorInputAction TOGGLE_BLOCK;
    public static final EditorInputAction TOGGLE_CHECKED;
    public static final EditorInputAction TOGGLE_LIST;
    public static final EditorInputAction TOGGLE_MARK;
    public static final /* synthetic */ EditorInputAction[] a;

    static {
        EditorInputAction editorInputAction = new EditorInputAction("REPLACE_TEXT", 0);
        REPLACE_TEXT = editorInputAction;
        EditorInputAction editorInputAction2 = new EditorInputAction("PARAGRAPH_BREAK", 1);
        PARAGRAPH_BREAK = editorInputAction2;
        EditorInputAction editorInputAction3 = new EditorInputAction("LINE_BREAK", 2);
        LINE_BREAK = editorInputAction3;
        EditorInputAction editorInputAction4 = new EditorInputAction("DELETE_BACKWARD", 3);
        DELETE_BACKWARD = editorInputAction4;
        EditorInputAction editorInputAction5 = new EditorInputAction("DELETE_FORWARD", 4);
        DELETE_FORWARD = editorInputAction5;
        EditorInputAction editorInputAction6 = new EditorInputAction("TOGGLE_MARK", 5);
        TOGGLE_MARK = editorInputAction6;
        EditorInputAction editorInputAction7 = new EditorInputAction("TOGGLE_BLOCK", 6);
        TOGGLE_BLOCK = editorInputAction7;
        EditorInputAction editorInputAction8 = new EditorInputAction("TOGGLE_LIST", 7);
        TOGGLE_LIST = editorInputAction8;
        EditorInputAction editorInputAction9 = new EditorInputAction("INSERT_DIVIDER", 8);
        INSERT_DIVIDER = editorInputAction9;
        EditorInputAction editorInputAction10 = new EditorInputAction("TOGGLE_CHECKED", 9);
        TOGGLE_CHECKED = editorInputAction10;
        EditorInputAction editorInputAction11 = new EditorInputAction("INDENT", 10);
        INDENT = editorInputAction11;
        EditorInputAction editorInputAction12 = new EditorInputAction("OUTDENT", 11);
        OUTDENT = editorInputAction12;
        EditorInputAction editorInputAction13 = new EditorInputAction("TAB", 12);
        TAB = editorInputAction13;
        EditorInputAction editorInputAction14 = new EditorInputAction("TEXT_TRANSACTION", 13);
        TEXT_TRANSACTION = editorInputAction14;
        a = new EditorInputAction[]{editorInputAction, editorInputAction2, editorInputAction3, editorInputAction4, editorInputAction5, editorInputAction6, editorInputAction7, editorInputAction8, editorInputAction9, editorInputAction10, editorInputAction11, editorInputAction12, editorInputAction13, editorInputAction14};
    }

    public static EditorInputAction valueOf(String str) {
        return (EditorInputAction) Enum.valueOf(EditorInputAction.class, str);
    }

    public static EditorInputAction[] values() {
        return (EditorInputAction[]) a.clone();
    }
}
