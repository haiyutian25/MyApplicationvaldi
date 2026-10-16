package com.openai.valdi.chatgpt.wallet.approval;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0010\u000e\n\u0002\b\u000f\b\u0007\u0018\u00002\u00020\u0001Bi\b\u0017\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\r\u0010\u000eR\u0018\u0010\u000f\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\u0010R\u0018\u0010\u0011\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\u0012R\u0018\u0010\u0013\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\u0012R\u0018\u0010\u0014\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0012R\u0018\u0010\u0015\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0015\u0010\u0012R\u0018\u0010\u0016\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0012R\u0018\u0010\u0017\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0012R\u0018\u0010\u0018\u001a\u0004\u0018\u00010\u000b8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019¨\u0006\u001a"}, d2 = {"Lcom/openai/valdi/chatgpt/wallet/approval/WalletApprovalConfiguration;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/chatgpt/wallet/approval/WalletApprovalPresentation;", "presentation", "", "showProductName", "showShippingAddress", "showPaymentMethod", "showCondition", "showShipping", "showReturns", "", "localeIdentifier", "<init>", "(Lcom/openai/valdi/chatgpt/wallet/approval/WalletApprovalPresentation;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/String;)V", "_presentation", "Lcom/openai/valdi/chatgpt/wallet/approval/WalletApprovalPresentation;", "_showProductName", "Ljava/lang/Boolean;", "_showShippingAddress", "_showPaymentMethod", "_showCondition", "_showShipping", "_showReturns", "_localeIdentifier", "Ljava/lang/String;", "modules_chatgpt_wallet_approval-chatgpt_wallet_approval_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'presentation':r?<e>:'[0]','showProductName':b@?,'showShippingAddress':b@?,'showPaymentMethod':b@?,'showCondition':b@?,'showShipping':b@?,'showReturns':b@?,'localeIdentifier':s?", typeReferences = {WalletApprovalPresentation.class})
public final class WalletApprovalConfiguration extends b {
    private String _localeIdentifier;
    private WalletApprovalPresentation _presentation;
    private Boolean _showCondition;
    private Boolean _showPaymentMethod;
    private Boolean _showProductName;
    private Boolean _showReturns;
    private Boolean _showShipping;
    private Boolean _showShippingAddress;

    public WalletApprovalConfiguration(WalletApprovalPresentation walletApprovalPresentation, Boolean bool, Boolean bool2, Boolean bool3, Boolean bool4, Boolean bool5, Boolean bool6, String str) {
        this._presentation = walletApprovalPresentation;
        this._showProductName = bool;
        this._showShippingAddress = bool2;
        this._showPaymentMethod = bool3;
        this._showCondition = bool4;
        this._showShipping = bool5;
        this._showReturns = bool6;
        this._localeIdentifier = str;
    }
}
