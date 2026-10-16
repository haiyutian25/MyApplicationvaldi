package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'View':0,'Edit':1", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0003\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003¨\u0006\u0004"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/DocumentAccess;", "", "View", "Edit", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class DocumentAccess {
    public static final DocumentAccess Edit;
    public static final DocumentAccess View;
    public static final /* synthetic */ DocumentAccess[] a;

    static {
        DocumentAccess documentAccess = new DocumentAccess("View", 0);
        View = documentAccess;
        DocumentAccess documentAccess2 = new DocumentAccess("Edit", 1);
        Edit = documentAccess2;
        a = new DocumentAccess[]{documentAccess, documentAccess2};
    }

    public static DocumentAccess valueOf(String str) {
        return (DocumentAccess) Enum.valueOf(DocumentAccess.class, str);
    }

    public static DocumentAccess[] values() {
        return (DocumentAccess[]) a.clone();
    }
}
