package com.openai.valdi.chatgpt.finance.transactions;

import com.snap.valdi.utils.b;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes5.dex */
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\f\n\u0002\u0010\u000b\n\u0002\b\u001b\b\u0007\u0018\u00002\u00020\u0001B\u0099\u0001\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0002\u0012\u0006\u0010\u0007\u001a\u00020\u0002\u0012\u0006\u0010\b\u001a\u00020\u0002\u0012\u0006\u0010\t\u001a\u00020\u0002\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0002\u0012\u0006\u0010\u000b\u001a\u00020\u0002\u0012\u0006\u0010\f\u001a\u00020\u0002\u0012\u0006\u0010\r\u001a\u00020\u0002\u0012\u0006\u0010\u000e\u001a\u00020\u0002\u0012\u0006\u0010\u0010\u001a\u00020\u000f\u0012\u0006\u0010\u0011\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u0002\u0012\u0006\u0010\u0013\u001a\u00020\u0002\u0012\u0006\u0010\u0014\u001a\u00020\u000f¢\u0006\u0004\b\u0015\u0010\u0016R\u0016\u0010\u0017\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u0016\u0010\u0019\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0019\u0010\u0018R\u0016\u0010\u001a\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018R\u0016\u0010\u001b\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u0018R\u0016\u0010\u001c\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u0018R\u0016\u0010\u001d\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001d\u0010\u0018R\u0016\u0010\u001e\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001e\u0010\u0018R\u0018\u0010\u001f\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001f\u0010\u0018R\u0016\u0010 \u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b \u0010\u0018R\u0016\u0010!\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b!\u0010\u0018R\u0016\u0010\"\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\"\u0010\u0018R\u0016\u0010#\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b#\u0010\u0018R\u0016\u0010$\u001a\u00020\u000f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b$\u0010%R\u0016\u0010&\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b&\u0010\u0018R\u0018\u0010'\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b'\u0010\u0018R\u0016\u0010(\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b(\u0010\u0018R\u0016\u0010)\u001a\u00020\u000f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b)\u0010%¨\u0006*"}, d2 = {"Lcom/openai/valdi/chatgpt/finance/transactions/FinanceTransactionDetailSelection;", "Lcom/snap/valdi/utils/b;", "", "transactionId", "displayTitle", "merchantName", "transactionDate", "dateLabel", "amountLabel", "currencyCode", "accountName", "primaryCategory", "primaryCategoryKey", "primaryCategoryId", "categoryIcon", "", "pending", "monthStart", "logoUrl", "query", "sensitiveValuesHidden", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Z)V", "_transactionId", "Ljava/lang/String;", "_displayTitle", "_merchantName", "_transactionDate", "_dateLabel", "_amountLabel", "_currencyCode", "_accountName", "_primaryCategory", "_primaryCategoryKey", "_primaryCategoryId", "_categoryIcon", "_pending", "Z", "_monthStart", "_logoUrl", "_query", "_sensitiveValuesHidden", "modules_chatgpt_finance_transactions-chatgpt_finance_transactions_api_kt_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'transactionId':s,'displayTitle':s,'merchantName':s,'transactionDate':s,'dateLabel':s,'amountLabel':s,'currencyCode':s,'accountName':s?,'primaryCategory':s,'primaryCategoryKey':s,'primaryCategoryId':s,'categoryIcon':s,'pending':b,'monthStart':s,'logoUrl':s?,'query':s,'sensitiveValuesHidden':b", typeReferences = {})
public final class FinanceTransactionDetailSelection extends b {
    private String _accountName;
    private String _amountLabel;
    private String _categoryIcon;
    private String _currencyCode;
    private String _dateLabel;
    private String _displayTitle;
    private String _logoUrl;
    private String _merchantName;
    private String _monthStart;
    private boolean _pending;
    private String _primaryCategory;
    private String _primaryCategoryId;
    private String _primaryCategoryKey;
    private String _query;
    private boolean _sensitiveValuesHidden;
    private String _transactionDate;
    private String _transactionId;

    public FinanceTransactionDetailSelection(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, boolean z, String str13, String str14, String str15, boolean z2) {
        this._transactionId = str;
        this._displayTitle = str2;
        this._merchantName = str3;
        this._transactionDate = str4;
        this._dateLabel = str5;
        this._amountLabel = str6;
        this._currencyCode = str7;
        this._accountName = str8;
        this._primaryCategory = str9;
        this._primaryCategoryKey = str10;
        this._primaryCategoryId = str11;
        this._categoryIcon = str12;
        this._pending = z;
        this._monthStart = str13;
        this._logoUrl = str14;
        this._query = str15;
        this._sensitiveValuesHidden = z2;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_accountName() {
        return this._accountName;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final String get_amountLabel() {
        return this._amountLabel;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_categoryIcon() {
        return this._categoryIcon;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final String get_currencyCode() {
        return this._currencyCode;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final String get_dateLabel() {
        return this._dateLabel;
    }

    /* JADX INFO: renamed from: f, reason: from getter */
    public final String get_displayTitle() {
        return this._displayTitle;
    }

    /* JADX INFO: renamed from: g, reason: from getter */
    public final String get_logoUrl() {
        return this._logoUrl;
    }

    /* JADX INFO: renamed from: h, reason: from getter */
    public final String get_merchantName() {
        return this._merchantName;
    }

    /* JADX INFO: renamed from: i, reason: from getter */
    public final String get_monthStart() {
        return this._monthStart;
    }

    /* JADX INFO: renamed from: j, reason: from getter */
    public final boolean get_pending() {
        return this._pending;
    }

    /* JADX INFO: renamed from: k, reason: from getter */
    public final String get_primaryCategory() {
        return this._primaryCategory;
    }

    /* JADX INFO: renamed from: l, reason: from getter */
    public final String get_primaryCategoryId() {
        return this._primaryCategoryId;
    }

    /* JADX INFO: renamed from: m, reason: from getter */
    public final String get_primaryCategoryKey() {
        return this._primaryCategoryKey;
    }

    /* JADX INFO: renamed from: n, reason: from getter */
    public final String get_query() {
        return this._query;
    }

    /* JADX INFO: renamed from: o, reason: from getter */
    public final boolean get_sensitiveValuesHidden() {
        return this._sensitiveValuesHidden;
    }

    /* JADX INFO: renamed from: p, reason: from getter */
    public final String get_transactionDate() {
        return this._transactionDate;
    }

    /* JADX INFO: renamed from: q, reason: from getter */
    public final String get_transactionId() {
        return this._transactionId;
    }
}
