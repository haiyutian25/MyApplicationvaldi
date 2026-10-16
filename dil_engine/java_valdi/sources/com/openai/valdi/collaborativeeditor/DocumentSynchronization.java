package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\b\u0007\u0018\u00002\u00020\u0001B!\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tR\u0016\u0010\n\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\n\u0010\u000bR\u0016\u0010\f\u001a\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\rR\u0016\u0010\u000e\u001a\u00020\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\u000f¨\u0006\u0010"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/DocumentSynchronization;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/collaborativeeditor/DocumentUpdate;", "update", "Lcom/openai/valdi/collaborativeeditor/SyncState;", "peer", "Lcom/openai/valdi/collaborativeeditor/DocumentAccess;", "access", "<init>", "(Lcom/openai/valdi/collaborativeeditor/DocumentUpdate;Lcom/openai/valdi/collaborativeeditor/SyncState;Lcom/openai/valdi/collaborativeeditor/DocumentAccess;)V", "_update", "Lcom/openai/valdi/collaborativeeditor/DocumentUpdate;", "_peer", "Lcom/openai/valdi/collaborativeeditor/SyncState;", "_access", "Lcom/openai/valdi/collaborativeeditor/DocumentAccess;", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'update':r:'[0]','peer':r:'[1]','access':r<e>:'[2]'", typeReferences = {DocumentUpdate.class, SyncState.class, DocumentAccess.class})
public final class DocumentSynchronization extends b {
    private DocumentAccess _access;
    private SyncState _peer;
    private DocumentUpdate _update;

    public DocumentSynchronization(DocumentUpdate documentUpdate, SyncState syncState, DocumentAccess documentAccess) {
        this._update = documentUpdate;
        this._peer = syncState;
        this._access = documentAccess;
    }
}
