package com.openai.valdi.chatgpt.multiplayer;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\b\u0007\u0018\u00002\u00020\u0001B=\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\f\u0010\rR\u0016\u0010\u000e\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\u000fR\u0016\u0010\u0010\u001a\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u0018\u0010\u0012\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013R\u0018\u0010\u0014\u001a\u0004\u0018\u00010\b8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015R\u0018\u0010\u0016\u001a\u0004\u0018\u00010\n8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerFailure;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerFailureKind;", "kind", "", "message", "Lcom/openai/valdi/chatgpt/multiplayer/OAIMultiplayerConnectionFailureReason;", "connectionReason", "", "retryable", "Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerFailureReason;", "reason", "<init>", "(Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerFailureKind;Ljava/lang/String;Lcom/openai/valdi/chatgpt/multiplayer/OAIMultiplayerConnectionFailureReason;Ljava/lang/Boolean;Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerFailureReason;)V", "_kind", "Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerFailureKind;", "_message", "Ljava/lang/String;", "_connectionReason", "Lcom/openai/valdi/chatgpt/multiplayer/OAIMultiplayerConnectionFailureReason;", "_retryable", "Ljava/lang/Boolean;", "_reason", "Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerFailureReason;", "modules_chatgpt_multiplayer-chatgpt_multiplayer_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'kind':r<e>:'[0]','message':s,'connectionReason':r?<e>:'[1]','retryable':b@?,'reason':r?<e>:'[2]'", typeReferences = {MultiplayerFailureKind.class, OAIMultiplayerConnectionFailureReason.class, MultiplayerFailureReason.class})
public final class MultiplayerFailure extends b {
    private OAIMultiplayerConnectionFailureReason _connectionReason;
    private MultiplayerFailureKind _kind;
    private String _message;
    private MultiplayerFailureReason _reason;
    private Boolean _retryable;

    public MultiplayerFailure(MultiplayerFailureKind multiplayerFailureKind, String str, OAIMultiplayerConnectionFailureReason oAIMultiplayerConnectionFailureReason, Boolean bool, MultiplayerFailureReason multiplayerFailureReason) {
        this._kind = multiplayerFailureKind;
        this._message = str;
        this._connectionReason = oAIMultiplayerConnectionFailureReason;
        this._retryable = bool;
        this._reason = multiplayerFailureReason;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final OAIMultiplayerConnectionFailureReason get_connectionReason() {
        return this._connectionReason;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final MultiplayerFailureKind get_kind() {
        return this._kind;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final MultiplayerFailureReason get_reason() {
        return this._reason;
    }
}
