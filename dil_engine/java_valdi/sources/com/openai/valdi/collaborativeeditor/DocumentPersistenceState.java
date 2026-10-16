package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u000f\b\u0007\u0018\u00002\u00020\u0001BE\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\b\u001a\u00020\u0006\u0012\u0006\u0010\t\u001a\u00020\u0006\u0012\u0006\u0010\n\u001a\u00020\u0006\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\r\u0010\u000eR\u0016\u0010\u000f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\u0010R\u0016\u0010\u0011\u001a\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\u0012R\u0016\u0010\u0013\u001a\u00020\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\u0014R\u0016\u0010\u0015\u001a\u00020\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0015\u0010\u0014R\u0016\u0010\u0016\u001a\u00020\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0014R\u0016\u0010\u0017\u001a\u00020\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0014R\u0018\u0010\u0018\u001a\u0004\u0018\u00010\u000b8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019¨\u0006\u001a"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/DocumentPersistenceState;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/collaborativeeditor/DocumentLocalSaveState;", "localSave", "Lcom/openai/valdi/collaborativeeditor/DocumentAccess;", "access", "", "hasLocalEdits", "hasRetainedChanges", "canEdit", "closed", "Lcom/openai/valdi/collaborativeeditor/DocumentPersistenceError;", "error", "<init>", "(Lcom/openai/valdi/collaborativeeditor/DocumentLocalSaveState;Lcom/openai/valdi/collaborativeeditor/DocumentAccess;ZZZZLcom/openai/valdi/collaborativeeditor/DocumentPersistenceError;)V", "_localSave", "Lcom/openai/valdi/collaborativeeditor/DocumentLocalSaveState;", "_access", "Lcom/openai/valdi/collaborativeeditor/DocumentAccess;", "_hasLocalEdits", "Z", "_hasRetainedChanges", "_canEdit", "_closed", "_error", "Lcom/openai/valdi/collaborativeeditor/DocumentPersistenceError;", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'localSave':r<e>:'[0]','access':r<e>:'[1]','hasLocalEdits':b,'hasRetainedChanges':b,'canEdit':b,'closed':b,'error':r?:'[2]'", typeReferences = {DocumentLocalSaveState.class, DocumentAccess.class, DocumentPersistenceError.class})
public final class DocumentPersistenceState extends b {
    private DocumentAccess _access;
    private boolean _canEdit;
    private boolean _closed;
    private DocumentPersistenceError _error;
    private boolean _hasLocalEdits;
    private boolean _hasRetainedChanges;
    private DocumentLocalSaveState _localSave;

    public DocumentPersistenceState(DocumentLocalSaveState documentLocalSaveState, DocumentAccess documentAccess, boolean z, boolean z2, boolean z3, boolean z4, DocumentPersistenceError documentPersistenceError) {
        this._localSave = documentLocalSaveState;
        this._access = documentAccess;
        this._hasLocalEdits = z;
        this._hasRetainedChanges = z2;
        this._canEdit = z3;
        this._closed = z4;
        this._error = documentPersistenceError;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final DocumentAccess get_access() {
        return this._access;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final boolean get_canEdit() {
        return this._canEdit;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final boolean get_hasRetainedChanges() {
        return this._hasRetainedChanges;
    }
}
