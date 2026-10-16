package com.openai.valdi.chatgpt.finance.connections;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\b\b\u0007\u0018\u00002\u00020\u0001B!\b\u0017\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\u0005\u0010\u0006R\u0018\u0010\u0007\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0007\u0010\bR\u0018\u0010\t\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\t\u0010\b¨\u0006\n"}, d2 = {"Lcom/openai/valdi/chatgpt/finance/connections/FinanceCreditVerificationComponentStyles;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/chatgpt/finance/connections/FinanceCreditVerificationColorVariables;", "light", "dark", "<init>", "(Lcom/openai/valdi/chatgpt/finance/connections/FinanceCreditVerificationColorVariables;Lcom/openai/valdi/chatgpt/finance/connections/FinanceCreditVerificationColorVariables;)V", "_light", "Lcom/openai/valdi/chatgpt/finance/connections/FinanceCreditVerificationColorVariables;", "_dark", "modules_chatgpt_finance_connections-chatgpt_finance_connections_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'light':r?:'[0]','dark':r?:'[0]'", typeReferences = {FinanceCreditVerificationColorVariables.class})
public final class FinanceCreditVerificationComponentStyles extends b {
    private FinanceCreditVerificationColorVariables _dark;
    private FinanceCreditVerificationColorVariables _light;

    public FinanceCreditVerificationComponentStyles(FinanceCreditVerificationColorVariables financeCreditVerificationColorVariables, FinanceCreditVerificationColorVariables financeCreditVerificationColorVariables2) {
        this._light = financeCreditVerificationColorVariables;
        this._dark = financeCreditVerificationColorVariables2;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final FinanceCreditVerificationColorVariables get_dark() {
        return this._dark;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final FinanceCreditVerificationColorVariables get_light() {
        return this._light;
    }
}
