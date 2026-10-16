package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'PARAGRAPH':0,'HEADING_1':1,'HEADING_2':2,'HEADING_3':3,'HEADING_4':4,'HEADING_5':5,'HEADING_6':6", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\b\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\b¨\u0006\t"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/EditorBlockStyle;", "", "PARAGRAPH", "HEADING_1", "HEADING_2", "HEADING_3", "HEADING_4", "HEADING_5", "HEADING_6", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class EditorBlockStyle {
    public static final EditorBlockStyle HEADING_1;
    public static final EditorBlockStyle HEADING_2;
    public static final EditorBlockStyle HEADING_3;
    public static final EditorBlockStyle HEADING_4;
    public static final EditorBlockStyle HEADING_5;
    public static final EditorBlockStyle HEADING_6;
    public static final EditorBlockStyle PARAGRAPH;
    public static final /* synthetic */ EditorBlockStyle[] a;

    static {
        EditorBlockStyle editorBlockStyle = new EditorBlockStyle("PARAGRAPH", 0);
        PARAGRAPH = editorBlockStyle;
        EditorBlockStyle editorBlockStyle2 = new EditorBlockStyle("HEADING_1", 1);
        HEADING_1 = editorBlockStyle2;
        EditorBlockStyle editorBlockStyle3 = new EditorBlockStyle("HEADING_2", 2);
        HEADING_2 = editorBlockStyle3;
        EditorBlockStyle editorBlockStyle4 = new EditorBlockStyle("HEADING_3", 3);
        HEADING_3 = editorBlockStyle4;
        EditorBlockStyle editorBlockStyle5 = new EditorBlockStyle("HEADING_4", 4);
        HEADING_4 = editorBlockStyle5;
        EditorBlockStyle editorBlockStyle6 = new EditorBlockStyle("HEADING_5", 5);
        HEADING_5 = editorBlockStyle6;
        EditorBlockStyle editorBlockStyle7 = new EditorBlockStyle("HEADING_6", 6);
        HEADING_6 = editorBlockStyle7;
        a = new EditorBlockStyle[]{editorBlockStyle, editorBlockStyle2, editorBlockStyle3, editorBlockStyle4, editorBlockStyle5, editorBlockStyle6, editorBlockStyle7};
    }

    public static EditorBlockStyle valueOf(String str) {
        return (EditorBlockStyle) Enum.valueOf(EditorBlockStyle.class, str);
    }

    public static EditorBlockStyle[] values() {
        return (EditorBlockStyle[]) a.clone();
    }
}
