package com.openai.valdi.chatgpt.wallet.approval;

import android.content.Context;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.views.ValdiGeneratedRootView;
import defpackage.r101;
import defpackage.sa21;
import defpackage.ta21;
import defpackage.va21;
import defpackage.wn20;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 \b2\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00030\u0001:\u0001\tB\u000f\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007¨\u0006\n"}, d2 = {"Lcom/openai/valdi/chatgpt/wallet/approval/WalletApprovalNativeDetails;", "Lcom/snap/valdi/views/ValdiGeneratedRootView;", "Lva21;", "Lta21;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Companion", "sa21", "modules_chatgpt_wallet_approval-chatgpt_wallet_approval_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class WalletApprovalNativeDetails extends ValdiGeneratedRootView<va21, ta21> {
    public static final sa21 Companion = new sa21();

    public WalletApprovalNativeDetails(Context context) {
        super(context);
    }

    public static final /* synthetic */ String access$getComponentPath$cp() {
        return "WalletApprovalNativeDetails@chatgpt_wallet_approval/src/WalletApprovalNativeDetails";
    }

    public static final WalletApprovalNativeDetails create(wn20 wn20Var, r101 r101Var) {
        Companion.getClass();
        WalletApprovalNativeDetails walletApprovalNativeDetails = new WalletApprovalNativeDetails(wn20Var.getContext());
        wn20Var.v(walletApprovalNativeDetails, access$getComponentPath$cp(), null, null, null);
        return walletApprovalNativeDetails;
    }

    public static final WalletApprovalNativeDetails create(wn20 wn20Var, va21 va21Var, ta21 ta21Var, r101 r101Var, Function1 function1) {
        Companion.getClass();
        WalletApprovalNativeDetails walletApprovalNativeDetails = new WalletApprovalNativeDetails(wn20Var.getContext());
        wn20Var.v(walletApprovalNativeDetails, access$getComponentPath$cp(), va21Var, ta21Var, function1);
        return walletApprovalNativeDetails;
    }
}
