package com.openai.valdi.chatgpt.wallet.core;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import com.snap.valdi.views.ValdiTextView;
import defpackage.jmz0;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0010\b\u0007\u0018\u00002\u00020\u0001BU\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0006\u0012\u0006\u0010\t\u001a\u00020\u0002\u0012\f\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000b0\n\u0012\f\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u000b0\n¢\u0006\u0004\b\u000e\u0010\u000fR\u0016\u0010\u0010\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u0018\u0010\u0012\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013R\u0016\u0010\u0014\u001a\u00020\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015R\u0018\u0010\u0016\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0015R\u0016\u0010\u0017\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0011R\u001c\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u000b0\n8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u000b0\n8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010\u0019¨\u0006\u001b"}, d2 = {"Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollmentPresentation;", "Lcom/snap/valdi/utils/b;", "", "showsIntroduction", "Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollment;", "enrollment", "", ValdiTextView.MenuActionTitleKey, "errorMessage", "allowsFormRequestedDismissal", "Lkotlin/Function0;", "Lruy0;", "continueEnrollment", "cancel", "<init>", "(ZLcom/openai/valdi/chatgpt/wallet/core/WalletEnrollment;Ljava/lang/String;Ljava/lang/String;ZLkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V", "_showsIntroduction", "Z", "_enrollment", "Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollment;", "_title", "Ljava/lang/String;", "_errorMessage", "_allowsFormRequestedDismissal", "_continueEnrollment", "Lkotlin/jvm/functions/Function0;", "_cancel", "modules_chatgpt_wallet_core-chatgpt_wallet_core_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'showsIntroduction':b,'enrollment':r?:'[0]','title':s,'errorMessage':s?,'allowsFormRequestedDismissal':b,'continueEnrollment':f(),'cancel':f()", typeReferences = {WalletEnrollment.class})
public final class WalletEnrollmentPresentation extends b {
    private boolean _allowsFormRequestedDismissal;
    private Function0 _cancel;
    private Function0 _continueEnrollment;
    private WalletEnrollment _enrollment;
    private String _errorMessage;
    private boolean _showsIntroduction;
    private String _title;

    public WalletEnrollmentPresentation(boolean z, WalletEnrollment walletEnrollment, String str, String str2, boolean z2, Function0 function0, Function0 function1) {
        this._showsIntroduction = z;
        this._enrollment = walletEnrollment;
        this._title = str;
        this._errorMessage = str2;
        this._allowsFormRequestedDismissal = z2;
        this._continueEnrollment = function0;
        this._cancel = function1;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final boolean get_allowsFormRequestedDismissal() {
        return this._allowsFormRequestedDismissal;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final Function0 get_cancel() {
        return this._cancel;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final Function0 get_continueEnrollment() {
        return this._continueEnrollment;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final WalletEnrollment get_enrollment() {
        return this._enrollment;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final String get_errorMessage() {
        return this._errorMessage;
    }

    /* JADX INFO: renamed from: f, reason: from getter */
    public final boolean get_showsIntroduction() {
        return this._showsIntroduction;
    }

    /* JADX INFO: renamed from: g, reason: from getter */
    public final String get_title() {
        return this._title;
    }
}
