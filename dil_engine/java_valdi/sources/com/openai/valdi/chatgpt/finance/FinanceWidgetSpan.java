package com.openai.valdi.chatgpt.finance;

import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes5.dex */
@bqz0(propertyReplacements = "", schema = "'Half':1,'Full':2", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0003\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003¨\u0006\u0004"}, d2 = {"Lcom/openai/valdi/chatgpt/finance/FinanceWidgetSpan;", "", "Half", "Full", "modules_chatgpt_finance-chatgpt_finance_api_kt_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
public final class FinanceWidgetSpan {
    public static final FinanceWidgetSpan Full;
    public static final FinanceWidgetSpan Half;
    public static final /* synthetic */ FinanceWidgetSpan[] a;

    static {
        FinanceWidgetSpan financeWidgetSpan = new FinanceWidgetSpan("Half", 0);
        Half = financeWidgetSpan;
        FinanceWidgetSpan financeWidgetSpan2 = new FinanceWidgetSpan("Full", 1);
        Full = financeWidgetSpan2;
        a = new FinanceWidgetSpan[]{financeWidgetSpan, financeWidgetSpan2};
    }

    public static FinanceWidgetSpan valueOf(String str) {
        return (FinanceWidgetSpan) Enum.valueOf(FinanceWidgetSpan.class, str);
    }

    public static FinanceWidgetSpan[] values() {
        return (FinanceWidgetSpan[]) a.clone();
    }
}
