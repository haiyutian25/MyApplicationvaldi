package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'STRONG':'strong','BOLD':'bold','EM':'em','ITALIC':'italic','CODE':'code','STRIKETHROUGH':'strikethrough','LINK':'link'", type = cqz0.b)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\b\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\b¨\u0006\t"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/DocumentMarkType;", "", "STRONG", "BOLD", "EM", "ITALIC", "CODE", "STRIKETHROUGH", "LINK", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class DocumentMarkType {
    public static final DocumentMarkType BOLD;
    public static final DocumentMarkType CODE;
    public static final DocumentMarkType EM;
    public static final DocumentMarkType ITALIC;
    public static final DocumentMarkType LINK;
    public static final DocumentMarkType STRIKETHROUGH;
    public static final DocumentMarkType STRONG;
    public static final /* synthetic */ DocumentMarkType[] a;

    static {
        DocumentMarkType documentMarkType = new DocumentMarkType("STRONG", 0);
        STRONG = documentMarkType;
        DocumentMarkType documentMarkType2 = new DocumentMarkType("BOLD", 1);
        BOLD = documentMarkType2;
        DocumentMarkType documentMarkType3 = new DocumentMarkType("EM", 2);
        EM = documentMarkType3;
        DocumentMarkType documentMarkType4 = new DocumentMarkType("ITALIC", 3);
        ITALIC = documentMarkType4;
        DocumentMarkType documentMarkType5 = new DocumentMarkType("CODE", 4);
        CODE = documentMarkType5;
        DocumentMarkType documentMarkType6 = new DocumentMarkType("STRIKETHROUGH", 5);
        STRIKETHROUGH = documentMarkType6;
        DocumentMarkType documentMarkType7 = new DocumentMarkType("LINK", 6);
        LINK = documentMarkType7;
        a = new DocumentMarkType[]{documentMarkType, documentMarkType2, documentMarkType3, documentMarkType4, documentMarkType5, documentMarkType6, documentMarkType7};
    }

    public static DocumentMarkType valueOf(String str) {
        return (DocumentMarkType) Enum.valueOf(DocumentMarkType.class, str);
    }

    public static DocumentMarkType[] values() {
        return (DocumentMarkType[]) a.clone();
    }
}
