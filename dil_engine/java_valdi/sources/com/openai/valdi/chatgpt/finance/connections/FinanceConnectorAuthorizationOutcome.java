package com.openai.valdi.chatgpt.finance.connections;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Authorized':0,'Cancelled':1,'Failed':2", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0004\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004¨\u0006\u0005"}, d2 = {"Lcom/openai/valdi/chatgpt/finance/connections/FinanceConnectorAuthorizationOutcome;", "", "Authorized", "Cancelled", "Failed", "modules_chatgpt_finance_connections-chatgpt_finance_connections_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class FinanceConnectorAuthorizationOutcome {
    public static final FinanceConnectorAuthorizationOutcome Authorized;
    public static final FinanceConnectorAuthorizationOutcome Cancelled;
    public static final FinanceConnectorAuthorizationOutcome Failed;
    public static final /* synthetic */ FinanceConnectorAuthorizationOutcome[] a;

    static {
        FinanceConnectorAuthorizationOutcome financeConnectorAuthorizationOutcome = new FinanceConnectorAuthorizationOutcome("Authorized", 0);
        Authorized = financeConnectorAuthorizationOutcome;
        FinanceConnectorAuthorizationOutcome financeConnectorAuthorizationOutcome2 = new FinanceConnectorAuthorizationOutcome("Cancelled", 1);
        Cancelled = financeConnectorAuthorizationOutcome2;
        FinanceConnectorAuthorizationOutcome financeConnectorAuthorizationOutcome3 = new FinanceConnectorAuthorizationOutcome("Failed", 2);
        Failed = financeConnectorAuthorizationOutcome3;
        a = new FinanceConnectorAuthorizationOutcome[]{financeConnectorAuthorizationOutcome, financeConnectorAuthorizationOutcome2, financeConnectorAuthorizationOutcome3};
    }

    public static FinanceConnectorAuthorizationOutcome valueOf(String str) {
        return (FinanceConnectorAuthorizationOutcome) Enum.valueOf(FinanceConnectorAuthorizationOutcome.class, str);
    }

    public static FinanceConnectorAuthorizationOutcome[] values() {
        return (FinanceConnectorAuthorizationOutcome[]) a.clone();
    }
}
