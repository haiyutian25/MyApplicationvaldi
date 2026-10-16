package com.openai.valdi.chatgpt.finance;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Sandbox':'SANDBOX','Production':'PRODUCTION'", type = cqz0.b)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0003\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003¨\u0006\u0004"}, d2 = {"Lcom/openai/valdi/chatgpt/finance/FinanceCreditVerificationEnvironment;", "", "Sandbox", "Production", "modules_chatgpt_finance-chatgpt_finance_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class FinanceCreditVerificationEnvironment {
    public static final FinanceCreditVerificationEnvironment Production;
    public static final FinanceCreditVerificationEnvironment Sandbox;
    public static final /* synthetic */ FinanceCreditVerificationEnvironment[] a;

    static {
        FinanceCreditVerificationEnvironment financeCreditVerificationEnvironment = new FinanceCreditVerificationEnvironment("Sandbox", 0);
        Sandbox = financeCreditVerificationEnvironment;
        FinanceCreditVerificationEnvironment financeCreditVerificationEnvironment2 = new FinanceCreditVerificationEnvironment("Production", 1);
        Production = financeCreditVerificationEnvironment2;
        a = new FinanceCreditVerificationEnvironment[]{financeCreditVerificationEnvironment, financeCreditVerificationEnvironment2};
    }

    public static FinanceCreditVerificationEnvironment valueOf(String str) {
        return (FinanceCreditVerificationEnvironment) Enum.valueOf(FinanceCreditVerificationEnvironment.class, str);
    }

    public static FinanceCreditVerificationEnvironment[] values() {
        return (FinanceCreditVerificationEnvironment[]) a.clone();
    }
}
