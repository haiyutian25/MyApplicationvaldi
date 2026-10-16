package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\b\u0007\u0018\u00002\u00020\u0001B9\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\u0006\u0010\t\u001a\u00020\b\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\f\u0010\rR\u0016\u0010\u000e\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\u000fR\u0016\u0010\u0010\u001a\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u0018\u0010\u0012\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013R\u0016\u0010\u0014\u001a\u00020\b8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015R\u0018\u0010\u0016\u001a\u0004\u0018\u00010\n8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/EditorSnapshot;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/collaborativeeditor/EditorRevision;", "revision", "Lcom/openai/valdi/collaborativeeditor/EditorSnapshotStatus;", "status", "Lcom/openai/valdi/collaborativeeditor/EditorDocument;", "document", "Lcom/openai/valdi/collaborativeeditor/EditorHistoryState;", "history", "Lcom/openai/valdi/collaborativeeditor/EditorSynchronizationState;", "synchronization", "<init>", "(Lcom/openai/valdi/collaborativeeditor/EditorRevision;Lcom/openai/valdi/collaborativeeditor/EditorSnapshotStatus;Lcom/openai/valdi/collaborativeeditor/EditorDocument;Lcom/openai/valdi/collaborativeeditor/EditorHistoryState;Lcom/openai/valdi/collaborativeeditor/EditorSynchronizationState;)V", "_revision", "Lcom/openai/valdi/collaborativeeditor/EditorRevision;", "_status", "Lcom/openai/valdi/collaborativeeditor/EditorSnapshotStatus;", "_document", "Lcom/openai/valdi/collaborativeeditor/EditorDocument;", "_history", "Lcom/openai/valdi/collaborativeeditor/EditorHistoryState;", "_synchronization", "Lcom/openai/valdi/collaborativeeditor/EditorSynchronizationState;", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'revision':r:'[0]','status':r<e>:'[1]','document':r?:'[2]','history':r:'[3]','synchronization':r?:'[4]'", typeReferences = {EditorRevision.class, EditorSnapshotStatus.class, EditorDocument.class, EditorHistoryState.class, EditorSynchronizationState.class})
public final class EditorSnapshot extends b {
    private EditorDocument _document;
    private EditorHistoryState _history;
    private EditorRevision _revision;
    private EditorSnapshotStatus _status;
    private EditorSynchronizationState _synchronization;

    public EditorSnapshot(EditorRevision editorRevision, EditorSnapshotStatus editorSnapshotStatus, EditorDocument editorDocument, EditorHistoryState editorHistoryState, EditorSynchronizationState editorSynchronizationState) {
        this._revision = editorRevision;
        this._status = editorSnapshotStatus;
        this._document = editorDocument;
        this._history = editorHistoryState;
        this._synchronization = editorSynchronizationState;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final EditorDocument get_document() {
        return this._document;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final EditorHistoryState get_history() {
        return this._history;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final EditorRevision get_revision() {
        return this._revision;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final EditorSnapshotStatus get_status() {
        return this._status;
    }
}
