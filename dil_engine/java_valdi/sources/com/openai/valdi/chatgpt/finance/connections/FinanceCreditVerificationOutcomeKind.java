package com.openai.valdi.chatgpt.finance.connections;

import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes5.dex */
@bqz0(propertyReplacements = "", schema = "'Verified':0,'Cancelled':1,'Failed':2", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0004\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004¨\u0006\u0005"}, d2 = {"Lcom/openai/valdi/chatgpt/finance/connections/FinanceCreditVerificationOutcomeKind;", "", "Verified", "Cancelled", "Failed", "modules_chatgpt_finance_connections-chatgpt_finance_connections_api_kt_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
public final class FinanceCreditVerificationOutcomeKind {
    public static final FinanceCreditVerificationOutcomeKind Cancelled;
    public static final FinanceCreditVerificationOutcomeKind Failed;
    public static final FinanceCreditVerificationOutcomeKind Verified;
    public static final /* synthetic */ FinanceCreditVerificationOutcomeKind[] a;

    static {
        FinanceCreditVerificationOutcomeKind financeCreditVerificationOutcomeKind = new FinanceCreditVerificationOutcomeKind("Verified", 0);
        Verified = financeCreditVerificationOutcomeKind;
        FinanceCreditVerificationOutcomeKind financeCreditVerificationOutcomeKind2 = new FinanceCreditVerificationOutcomeKind("Cancelled", 1);
        Cancelled = financeCreditVerificationOutcomeKind2;
        FinanceCreditVerificationOutcomeKind financeCreditVerificationOutcomeKind3 = new FinanceCreditVerificationOutcomeKind("Failed", 2);
        Failed = financeCreditVerificationOutcomeKind3;
        a = new FinanceCreditVerificationOutcomeKind[]{financeCreditVerificationOutcomeKind, financeCreditVerificationOutcomeKind2, financeCreditVerificationOutcomeKind3};
    }

    public static FinanceCreditVerificationOutcomeKind valueOf(String str) {
        return (FinanceCreditVerificationOutcomeKind) Enum.valueOf(FinanceCreditVerificationOutcomeKind.class, str);
    }

    public static FinanceCreditVerificationOutcomeKind[] values() {
        return (FinanceCreditVerificationOutcomeKind[]) a.clone();
    }
}
