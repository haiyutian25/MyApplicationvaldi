package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Saved':0,'Saving':1,'Failed':2", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0004\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004¨\u0006\u0005"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/DocumentLocalSaveState;", "", "Saved", "Saving", "Failed", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class DocumentLocalSaveState {
    public static final DocumentLocalSaveState Failed;
    public static final DocumentLocalSaveState Saved;
    public static final DocumentLocalSaveState Saving;
    public static final /* synthetic */ DocumentLocalSaveState[] a;

    static {
        DocumentLocalSaveState documentLocalSaveState = new DocumentLocalSaveState("Saved", 0);
        Saved = documentLocalSaveState;
        DocumentLocalSaveState documentLocalSaveState2 = new DocumentLocalSaveState("Saving", 1);
        Saving = documentLocalSaveState2;
        DocumentLocalSaveState documentLocalSaveState3 = new DocumentLocalSaveState("Failed", 2);
        Failed = documentLocalSaveState3;
        a = new DocumentLocalSaveState[]{documentLocalSaveState, documentLocalSaveState2, documentLocalSaveState3};
    }

    public static DocumentLocalSaveState valueOf(String str) {
        return (DocumentLocalSaveState) Enum.valueOf(DocumentLocalSaveState.class, str);
    }

    public static DocumentLocalSaveState[] values() {
        return (DocumentLocalSaveState[]) a.clone();
    }
}
