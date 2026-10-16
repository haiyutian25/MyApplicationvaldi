package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import defpackage.t4w;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0017\b\u0007\u0018\u00002\u00020\u0001Bo\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\n\u001a\u00020\t\u0012\f\u0010\r\u001a\b\u0012\u0004\u0012\u00020\f0\u000b\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u000e\u0012\u0006\u0010\u0011\u001a\u00020\u0010\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0012\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0014¢\u0006\u0004\b\u0016\u0010\u0017R\u0016\u0010\u0018\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u0016\u0010\u001a\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010\u0019R\u0016\u0010\u001b\u001a\u00020\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u001cR\u0018\u0010\u001d\u001a\u0004\u0018\u00010\u00078\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001d\u0010\u001eR\u0016\u0010\u001f\u001a\u00020\t8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001f\u0010 R\u001c\u0010!\u001a\b\u0012\u0004\u0012\u00020\f0\u000b8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b!\u0010\"R\u0018\u0010#\u001a\u0004\u0018\u00010\u000e8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b#\u0010$R\u0016\u0010%\u001a\u00020\u00108\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b%\u0010&R\u0018\u0010'\u001a\u0004\u0018\u00010\u00128\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b'\u0010(R\u0018\u0010)\u001a\u0004\u0018\u00010\u00148\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b)\u0010*¨\u0006+"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/EditorChange;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/collaborativeeditor/EditorRevision;", "beforeRevision", "revision", "Lcom/openai/valdi/collaborativeeditor/EditorChangeOrigin;", "origin", "", "editId", "Lcom/openai/valdi/collaborativeeditor/EditorSnapshotStatus;", "status", "", "Lt4w;", "patches", "Lcom/openai/valdi/collaborativeeditor/DocumentNodeAttributes;", "documentAttributes", "Lcom/openai/valdi/collaborativeeditor/EditorHistoryState;", "history", "Lcom/openai/valdi/collaborativeeditor/DocumentUpdate;", "update", "Lcom/openai/valdi/collaborativeeditor/EditorSynchronizationState;", "synchronization", "<init>", "(Lcom/openai/valdi/collaborativeeditor/EditorRevision;Lcom/openai/valdi/collaborativeeditor/EditorRevision;Lcom/openai/valdi/collaborativeeditor/EditorChangeOrigin;Ljava/lang/String;Lcom/openai/valdi/collaborativeeditor/EditorSnapshotStatus;Ljava/util/List;Lcom/openai/valdi/collaborativeeditor/DocumentNodeAttributes;Lcom/openai/valdi/collaborativeeditor/EditorHistoryState;Lcom/openai/valdi/collaborativeeditor/DocumentUpdate;Lcom/openai/valdi/collaborativeeditor/EditorSynchronizationState;)V", "_beforeRevision", "Lcom/openai/valdi/collaborativeeditor/EditorRevision;", "_revision", "_origin", "Lcom/openai/valdi/collaborativeeditor/EditorChangeOrigin;", "_editId", "Ljava/lang/String;", "_status", "Lcom/openai/valdi/collaborativeeditor/EditorSnapshotStatus;", "_patches", "Ljava/util/List;", "_documentAttributes", "Lcom/openai/valdi/collaborativeeditor/DocumentNodeAttributes;", "_history", "Lcom/openai/valdi/collaborativeeditor/EditorHistoryState;", "_update", "Lcom/openai/valdi/collaborativeeditor/DocumentUpdate;", "_synchronization", "Lcom/openai/valdi/collaborativeeditor/EditorSynchronizationState;", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'beforeRevision':r:'[0]','revision':r:'[0]','origin':r<e>:'[1]','editId':s?,'status':r<e>:'[2]','patches':a<r:'[3]'>,'documentAttributes':r?:'[4]','history':r:'[5]','update':r?:'[6]','synchronization':r?:'[7]'", typeReferences = {EditorRevision.class, EditorChangeOrigin.class, EditorSnapshotStatus.class, t4w.class, DocumentNodeAttributes.class, EditorHistoryState.class, DocumentUpdate.class, EditorSynchronizationState.class})
public final class EditorChange extends b {
    private EditorRevision _beforeRevision;
    private DocumentNodeAttributes _documentAttributes;
    private String _editId;
    private EditorHistoryState _history;
    private EditorChangeOrigin _origin;
    private List<t4w> _patches;
    private EditorRevision _revision;
    private EditorSnapshotStatus _status;
    private EditorSynchronizationState _synchronization;
    private DocumentUpdate _update;

    public EditorChange(EditorRevision editorRevision, EditorRevision editorRevision2, EditorChangeOrigin editorChangeOrigin, String str, EditorSnapshotStatus editorSnapshotStatus, List<t4w> list, DocumentNodeAttributes documentNodeAttributes, EditorHistoryState editorHistoryState, DocumentUpdate documentUpdate, EditorSynchronizationState editorSynchronizationState) {
        this._beforeRevision = editorRevision;
        this._revision = editorRevision2;
        this._origin = editorChangeOrigin;
        this._editId = str;
        this._status = editorSnapshotStatus;
        this._patches = list;
        this._documentAttributes = documentNodeAttributes;
        this._history = editorHistoryState;
        this._update = documentUpdate;
        this._synchronization = editorSynchronizationState;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final EditorRevision get_beforeRevision() {
        return this._beforeRevision;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final DocumentNodeAttributes get_documentAttributes() {
        return this._documentAttributes;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_editId() {
        return this._editId;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final EditorHistoryState get_history() {
        return this._history;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final EditorChangeOrigin get_origin() {
        return this._origin;
    }

    /* JADX INFO: renamed from: f, reason: from getter */
    public final List get_patches() {
        return this._patches;
    }

    /* JADX INFO: renamed from: g, reason: from getter */
    public final EditorRevision get_revision() {
        return this._revision;
    }

    /* JADX INFO: renamed from: h, reason: from getter */
    public final EditorSnapshotStatus get_status() {
        return this._status;
    }

    /* JADX INFO: renamed from: i, reason: from getter */
    public final DocumentUpdate get_update() {
        return this._update;
    }
}
