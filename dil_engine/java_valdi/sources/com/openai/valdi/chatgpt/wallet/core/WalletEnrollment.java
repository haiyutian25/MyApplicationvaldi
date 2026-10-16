package com.openai.valdi.chatgpt.wallet.core;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import com.snap.valdi.views.ValdiTextView;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u000f\b\u0007\u0018\u00002\u00020\u0001BA\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0006\u001a\u00020\u0002\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\u000b\u0010\fR\u0016\u0010\r\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\u000eR\u0016\u0010\u000f\u001a\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\u0010R\u0016\u0010\u0011\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\u000eR\u0016\u0010\u0012\u001a\u00020\u00078\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013R\u0018\u0010\u0014\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u000eR\u0018\u0010\u0015\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0015\u0010\u000e¨\u0006\u0016"}, d2 = {"Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollment;", "Lcom/snap/valdi/utils/b;", "", ValdiTextView.MenuActionIdKey, "Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollmentEntrypoint;", "entrypoint", "initialResultJson", "Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollmentSession;", "session", "viewParamsJson", "savedRegistrationId", "<init>", "(Ljava/lang/String;Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollmentEntrypoint;Ljava/lang/String;Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollmentSession;Ljava/lang/String;Ljava/lang/String;)V", "_id", "Ljava/lang/String;", "_entrypoint", "Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollmentEntrypoint;", "_initialResultJson", "_session", "Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollmentSession;", "_viewParamsJson", "_savedRegistrationId", "modules_chatgpt_wallet_core-chatgpt_wallet_core_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'id':s,'entrypoint':r:'[0]','initialResultJson':s,'session':r:'[1]','viewParamsJson':s?,'savedRegistrationId':s?", typeReferences = {WalletEnrollmentEntrypoint.class, WalletEnrollmentSession.class})
public final class WalletEnrollment extends b {
    private WalletEnrollmentEntrypoint _entrypoint;
    private String _id;
    private String _initialResultJson;
    private String _savedRegistrationId;
    private WalletEnrollmentSession _session;
    private String _viewParamsJson;

    public WalletEnrollment(String str, WalletEnrollmentEntrypoint walletEnrollmentEntrypoint, String str2, WalletEnrollmentSession walletEnrollmentSession, String str3, String str4) {
        this._id = str;
        this._entrypoint = walletEnrollmentEntrypoint;
        this._initialResultJson = str2;
        this._session = walletEnrollmentSession;
        this._viewParamsJson = str3;
        this._savedRegistrationId = str4;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final WalletEnrollmentEntrypoint get_entrypoint() {
        return this._entrypoint;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final String get_id() {
        return this._id;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_initialResultJson() {
        return this._initialResultJson;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final WalletEnrollmentSession get_session() {
        return this._session;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final String get_viewParamsJson() {
        return this._viewParamsJson;
    }
}
