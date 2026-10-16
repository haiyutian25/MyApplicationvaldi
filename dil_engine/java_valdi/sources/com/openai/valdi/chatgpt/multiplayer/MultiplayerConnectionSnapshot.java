package com.openai.valdi.chatgpt.multiplayer;

import com.openai.valdi.collaborativeeditor.DocumentAccess;
import com.openai.valdi.collaborativeeditor.DocumentPersistenceState;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0011\b\u0007\u0018\u00002\u00020\u0001BM\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\b\u001a\u00020\u0006\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b\u0012\u0006\u0010\r\u001a\u00020\u0006¢\u0006\u0004\b\u000e\u0010\u000fR\u0016\u0010\u0010\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u0018\u0010\u0012\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013R\u0016\u0010\u0014\u001a\u00020\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015R\u0016\u0010\u0016\u001a\u00020\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0015R\u0018\u0010\u0017\u001a\u0004\u0018\u00010\t8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u0018\u0010\u0019\u001a\u0004\u0018\u00010\u000b8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0019\u0010\u001aR\u0016\u0010\u001b\u001a\u00020\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u0015¨\u0006\u001c"}, d2 = {"Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerConnectionSnapshot;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerConnectionState;", "state", "Lcom/openai/valdi/collaborativeeditor/DocumentAccess;", "access", "", "canEdit", "synchronized", "Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerFailure;", "failure", "Lcom/openai/valdi/collaborativeeditor/DocumentPersistenceState;", "persistence", "localEditsSynced", "<init>", "(Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerConnectionState;Lcom/openai/valdi/collaborativeeditor/DocumentAccess;ZZLcom/openai/valdi/chatgpt/multiplayer/MultiplayerFailure;Lcom/openai/valdi/collaborativeeditor/DocumentPersistenceState;Z)V", "_state", "Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerConnectionState;", "_access", "Lcom/openai/valdi/collaborativeeditor/DocumentAccess;", "_canEdit", "Z", "_synchronized", "_failure", "Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerFailure;", "_persistence", "Lcom/openai/valdi/collaborativeeditor/DocumentPersistenceState;", "_localEditsSynced", "modules_chatgpt_multiplayer-chatgpt_multiplayer_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'state':r<e>:'[0]','access':r?<e>:'[1]','canEdit':b,'synchronized':b,'failure':r?:'[2]','persistence':r?:'[3]','localEditsSynced':b", typeReferences = {MultiplayerConnectionState.class, DocumentAccess.class, MultiplayerFailure.class, DocumentPersistenceState.class})
public final class MultiplayerConnectionSnapshot extends b {
    private DocumentAccess _access;
    private boolean _canEdit;
    private MultiplayerFailure _failure;
    private boolean _localEditsSynced;
    private DocumentPersistenceState _persistence;
    private MultiplayerConnectionState _state;
    private boolean _synchronized;

    public MultiplayerConnectionSnapshot(MultiplayerConnectionState multiplayerConnectionState, DocumentAccess documentAccess, boolean z, boolean z2, MultiplayerFailure multiplayerFailure, DocumentPersistenceState documentPersistenceState, boolean z3) {
        this._state = multiplayerConnectionState;
        this._access = documentAccess;
        this._canEdit = z;
        this._synchronized = z2;
        this._failure = multiplayerFailure;
        this._persistence = documentPersistenceState;
        this._localEditsSynced = z3;
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
    public final MultiplayerFailure get_failure() {
        return this._failure;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final boolean get_localEditsSynced() {
        return this._localEditsSynced;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final DocumentPersistenceState get_persistence() {
        return this._persistence;
    }

    /* JADX INFO: renamed from: f, reason: from getter */
    public final MultiplayerConnectionState get_state() {
        return this._state;
    }

    /* JADX INFO: renamed from: g, reason: from getter */
    public final boolean get_synchronized() {
        return this._synchronized;
    }
}
