package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\b\u0007\u0018\u00002\u00020\u0001B\u0019\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007R\u0016\u0010\b\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\b\u0010\tR\u0016\u0010\n\u001a\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\n\u0010\u000b¨\u0006\f"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/SynchronousEditResult;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/collaborativeeditor/EditResult;", "result", "Lcom/openai/valdi/collaborativeeditor/EditorSnapshot;", "snapshot", "<init>", "(Lcom/openai/valdi/collaborativeeditor/EditResult;Lcom/openai/valdi/collaborativeeditor/EditorSnapshot;)V", "_result", "Lcom/openai/valdi/collaborativeeditor/EditResult;", "_snapshot", "Lcom/openai/valdi/collaborativeeditor/EditorSnapshot;", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'result':r:'[0]','snapshot':r:'[1]'", typeReferences = {EditResult.class, EditorSnapshot.class})
public final class SynchronousEditResult extends b {
    private EditResult _result;
    private EditorSnapshot _snapshot;

    public SynchronousEditResult(EditResult editResult, EditorSnapshot editorSnapshot) {
        this._result = editResult;
        this._snapshot = editorSnapshot;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final EditResult get_result() {
        return this._result;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final EditorSnapshot get_snapshot() {
        return this._snapshot;
    }
}
