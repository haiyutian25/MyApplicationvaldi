package com.openai.valdi.chatgpt.wallet.core;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0010\b\u0007\u0018\u00002\u00020\u0001B9\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0002\u0012\u0006\u0010\u0007\u001a\u00020\u0002\u0012\u0006\u0010\b\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nR\u0016\u0010\u000b\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000b\u0010\fR\u0016\u0010\r\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\fR\u0016\u0010\u000e\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\fR\u0016\u0010\u000f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\fR\u0016\u0010\u0010\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\fR\u0016\u0010\u0011\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\f¨\u0006\u0012"}, d2 = {"Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollmentEntrypoint;", "Lcom/snap/valdi/utils/b;", "", "toolName", "actionName", "connectorID", "linkID", "resourceURI", "resourcePath", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "_toolName", "Ljava/lang/String;", "_actionName", "_connectorID", "_linkID", "_resourceURI", "_resourcePath", "modules_chatgpt_wallet_core-chatgpt_wallet_core_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'toolName':s,'actionName':s,'connectorID':s,'linkID':s,'resourceURI':s,'resourcePath':s", typeReferences = {})
public final class WalletEnrollmentEntrypoint extends b {
    private String _actionName;
    private String _connectorID;
    private String _linkID;
    private String _resourcePath;
    private String _resourceURI;
    private String _toolName;

    public WalletEnrollmentEntrypoint(String str, String str2, String str3, String str4, String str5, String str6) {
        this._toolName = str;
        this._actionName = str2;
        this._connectorID = str3;
        this._linkID = str4;
        this._resourceURI = str5;
        this._resourcePath = str6;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_actionName() {
        return this._actionName;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final String get_connectorID() {
        return this._connectorID;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_linkID() {
        return this._linkID;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final String get_resourcePath() {
        return this._resourcePath;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final String get_resourceURI() {
        return this._resourceURI;
    }

    /* JADX INFO: renamed from: f, reason: from getter */
    public final String get_toolName() {
        return this._toolName;
    }
}
