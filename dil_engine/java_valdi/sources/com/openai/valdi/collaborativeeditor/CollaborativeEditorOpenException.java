package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u000e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00060\u0001j\u0002`\u0002¨\u0006\u0003"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/CollaborativeEditorOpenException;", "Ljava/lang/Exception;", "Lkotlin/Exception;", "modules_collaborative_editor-collaborative_editor_android_impl_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class CollaborativeEditorOpenException extends Exception {
    public final EditorOpenStatus a;
    public final EditorError b;

    /* JADX WARN: Illegal instructions before constructor call */
    public CollaborativeEditorOpenException(EditorOpenStatus editorOpenStatus, EditorError editorError) {
        String str;
        if (editorError == null || (str = editorError.get_message()) == null) {
            str = "Unable to open collaborative editor: " + editorOpenStatus;
        }
        super(str);
        this.a = editorOpenStatus;
        this.b = editorError;
    }
}
