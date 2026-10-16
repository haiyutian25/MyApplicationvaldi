package com.openai.valdi.chatgpt.finance.accounts;

import android.content.Context;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.views.ValdiGeneratedRootView;
import defpackage.efz;
import defpackage.ffz;
import defpackage.ifz;
import defpackage.r101;
import defpackage.wn20;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 \b2\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00030\u0001:\u0001\tB\u000f\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007¨\u0006\n"}, d2 = {"Lcom/openai/valdi/chatgpt/finance/accounts/FinanceAccountListComponent;", "Lcom/snap/valdi/views/ValdiGeneratedRootView;", "Lifz;", "Lffz;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Companion", "efz", "modules_chatgpt_finance_accounts-chatgpt_finance_accounts_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class FinanceAccountListComponent extends ValdiGeneratedRootView<ifz, ffz> {
    public static final efz Companion = new efz();

    public FinanceAccountListComponent(Context context) {
        super(context);
    }

    public static final /* synthetic */ String access$getComponentPath$cp() {
        return "FinanceAccountListComponent@chatgpt_finance_accounts/src/FinanceAccountListComponent";
    }

    public static final FinanceAccountListComponent create(wn20 wn20Var, r101 r101Var) {
        Companion.getClass();
        FinanceAccountListComponent financeAccountListComponent = new FinanceAccountListComponent(wn20Var.getContext());
        wn20Var.v(financeAccountListComponent, access$getComponentPath$cp(), null, null, null);
        return financeAccountListComponent;
    }

    public static final FinanceAccountListComponent create(wn20 wn20Var, ifz ifzVar, ffz ffzVar, r101 r101Var, Function1 function1) {
        Companion.getClass();
        FinanceAccountListComponent financeAccountListComponent = new FinanceAccountListComponent(wn20Var.getContext());
        wn20Var.v(financeAccountListComponent, access$getComponentPath$cp(), ifzVar, ffzVar, function1);
        return financeAccountListComponent;
    }
}
