package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'DOC':'doc','PARAGRAPH':'paragraph','HEADING':'heading','BLOCKQUOTE':'blockquote','LIST':'list','BULLET_LIST':'bullet_list','ORDERED_LIST':'ordered_list','REGULAR_LIST_ITEM':'regular_list_item','LIST_ITEM':'list_item','TASK_LIST_ITEM':'task_list_item','CODE_BLOCK':'code_block','HORIZONTAL_RULE':'horizontal_rule','HARD_BREAK':'hard_break','WRITING_BLOCK_IMAGE':'writing_block_image','TABLE':'table','TABLE_ROW':'table_row','TABLE_CELL':'table_cell','TEXT':'text'", type = cqz0.b)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0013\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\nj\u0002\b\u000bj\u0002\b\fj\u0002\b\rj\u0002\b\u000ej\u0002\b\u000fj\u0002\b\u0010j\u0002\b\u0011j\u0002\b\u0012j\u0002\b\u0013¨\u0006\u0014"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/DocumentNodeType;", "", "DOC", "PARAGRAPH", "HEADING", "BLOCKQUOTE", "LIST", "BULLET_LIST", "ORDERED_LIST", "REGULAR_LIST_ITEM", "LIST_ITEM", "TASK_LIST_ITEM", "CODE_BLOCK", "HORIZONTAL_RULE", "HARD_BREAK", "WRITING_BLOCK_IMAGE", "TABLE", "TABLE_ROW", "TABLE_CELL", "TEXT", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class DocumentNodeType {
    public static final DocumentNodeType BLOCKQUOTE;
    public static final DocumentNodeType BULLET_LIST;
    public static final DocumentNodeType CODE_BLOCK;
    public static final DocumentNodeType DOC;
    public static final DocumentNodeType HARD_BREAK;
    public static final DocumentNodeType HEADING;
    public static final DocumentNodeType HORIZONTAL_RULE;
    public static final DocumentNodeType LIST;
    public static final DocumentNodeType LIST_ITEM;
    public static final DocumentNodeType ORDERED_LIST;
    public static final DocumentNodeType PARAGRAPH;
    public static final DocumentNodeType REGULAR_LIST_ITEM;
    public static final DocumentNodeType TABLE;
    public static final DocumentNodeType TABLE_CELL;
    public static final DocumentNodeType TABLE_ROW;
    public static final DocumentNodeType TASK_LIST_ITEM;
    public static final DocumentNodeType TEXT;
    public static final DocumentNodeType WRITING_BLOCK_IMAGE;
    public static final /* synthetic */ DocumentNodeType[] a;

    static {
        DocumentNodeType documentNodeType = new DocumentNodeType("DOC", 0);
        DOC = documentNodeType;
        DocumentNodeType documentNodeType2 = new DocumentNodeType("PARAGRAPH", 1);
        PARAGRAPH = documentNodeType2;
        DocumentNodeType documentNodeType3 = new DocumentNodeType("HEADING", 2);
        HEADING = documentNodeType3;
        DocumentNodeType documentNodeType4 = new DocumentNodeType("BLOCKQUOTE", 3);
        BLOCKQUOTE = documentNodeType4;
        DocumentNodeType documentNodeType5 = new DocumentNodeType("LIST", 4);
        LIST = documentNodeType5;
        DocumentNodeType documentNodeType6 = new DocumentNodeType("BULLET_LIST", 5);
        BULLET_LIST = documentNodeType6;
        DocumentNodeType documentNodeType7 = new DocumentNodeType("ORDERED_LIST", 6);
        ORDERED_LIST = documentNodeType7;
        DocumentNodeType documentNodeType8 = new DocumentNodeType("REGULAR_LIST_ITEM", 7);
        REGULAR_LIST_ITEM = documentNodeType8;
        DocumentNodeType documentNodeType9 = new DocumentNodeType("LIST_ITEM", 8);
        LIST_ITEM = documentNodeType9;
        DocumentNodeType documentNodeType10 = new DocumentNodeType("TASK_LIST_ITEM", 9);
        TASK_LIST_ITEM = documentNodeType10;
        DocumentNodeType documentNodeType11 = new DocumentNodeType("CODE_BLOCK", 10);
        CODE_BLOCK = documentNodeType11;
        DocumentNodeType documentNodeType12 = new DocumentNodeType("HORIZONTAL_RULE", 11);
        HORIZONTAL_RULE = documentNodeType12;
        DocumentNodeType documentNodeType13 = new DocumentNodeType("HARD_BREAK", 12);
        HARD_BREAK = documentNodeType13;
        DocumentNodeType documentNodeType14 = new DocumentNodeType("WRITING_BLOCK_IMAGE", 13);
        WRITING_BLOCK_IMAGE = documentNodeType14;
        DocumentNodeType documentNodeType15 = new DocumentNodeType("TABLE", 14);
        TABLE = documentNodeType15;
        DocumentNodeType documentNodeType16 = new DocumentNodeType("TABLE_ROW", 15);
        TABLE_ROW = documentNodeType16;
        DocumentNodeType documentNodeType17 = new DocumentNodeType("TABLE_CELL", 16);
        TABLE_CELL = documentNodeType17;
        DocumentNodeType documentNodeType18 = new DocumentNodeType("TEXT", 17);
        TEXT = documentNodeType18;
        a = new DocumentNodeType[]{documentNodeType, documentNodeType2, documentNodeType3, documentNodeType4, documentNodeType5, documentNodeType6, documentNodeType7, documentNodeType8, documentNodeType9, documentNodeType10, documentNodeType11, documentNodeType12, documentNodeType13, documentNodeType14, documentNodeType15, documentNodeType16, documentNodeType17, documentNodeType18};
    }

    public static DocumentNodeType valueOf(String str) {
        return (DocumentNodeType) Enum.valueOf(DocumentNodeType.class, str);
    }

    public static DocumentNodeType[] values() {
        return (DocumentNodeType[]) a.clone();
    }
}
