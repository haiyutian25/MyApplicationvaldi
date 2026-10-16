package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\b\u0007\u0018\u00002\u00020\u0001B)\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0006¢\u0006\u0004\b\b\u0010\tR\u0016\u0010\n\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\n\u0010\u000bR\u0018\u0010\f\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\rR\u0018\u0010\u000e\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\u000f¨\u0006\u0010"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/AnchorResult;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/collaborativeeditor/EditorRevision;", "revision", "Lcom/openai/valdi/collaborativeeditor/PositionAnchor;", "anchor", "Lcom/openai/valdi/collaborativeeditor/EditorError;", "error", "<init>", "(Lcom/openai/valdi/collaborativeeditor/EditorRevision;Lcom/openai/valdi/collaborativeeditor/PositionAnchor;Lcom/openai/valdi/collaborativeeditor/EditorError;)V", "_revision", "Lcom/openai/valdi/collaborativeeditor/EditorRevision;", "_anchor", "Lcom/openai/valdi/collaborativeeditor/PositionAnchor;", "_error", "Lcom/openai/valdi/collaborativeeditor/EditorError;", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'revision':r:'[0]','anchor':r?:'[1]','error':r?:'[2]'", typeReferences = {EditorRevision.class, PositionAnchor.class, EditorError.class})
public final class AnchorResult extends b {
    private PositionAnchor _anchor;
    private EditorError _error;
    private EditorRevision _revision;

    public AnchorResult(EditorRevision editorRevision, PositionAnchor positionAnchor, EditorError editorError) {
        this._revision = editorRevision;
        this._anchor = positionAnchor;
        this._error = editorError;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final PositionAnchor get_anchor() {
        return this._anchor;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final EditorError get_error() {
        return this._error;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final EditorRevision get_revision() {
        return this._revision;
    }
}
