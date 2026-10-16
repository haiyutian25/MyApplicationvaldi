package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.c7l0;
import defpackage.jmz0;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\b\b\u0007\u0018\u00002\u00020\u0001B\u001f\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00050\u0004¢\u0006\u0004\b\u0007\u0010\bR\u0016\u0010\t\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\t\u0010\nR\u001c\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\u00050\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000b\u0010\f¨\u0006\r"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/PresenceSnapshot;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/collaborativeeditor/EditorClientId;", "localClientId", "", "Lc7l0;", "clients", "<init>", "(Lcom/openai/valdi/collaborativeeditor/EditorClientId;Ljava/util/List;)V", "_localClientId", "Lcom/openai/valdi/collaborativeeditor/EditorClientId;", "_clients", "Ljava/util/List;", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'localClientId':r:'[0]','clients':a<r:'[1]'>", typeReferences = {EditorClientId.class, c7l0.class})
public final class PresenceSnapshot extends b {
    private List<c7l0> _clients;
    private EditorClientId _localClientId;

    public PresenceSnapshot(EditorClientId editorClientId, List<c7l0> list) {
        this._localClientId = editorClientId;
        this._clients = list;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final List get_clients() {
        return this._clients;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final EditorClientId get_localClientId() {
        return this._localClientId;
    }
}
