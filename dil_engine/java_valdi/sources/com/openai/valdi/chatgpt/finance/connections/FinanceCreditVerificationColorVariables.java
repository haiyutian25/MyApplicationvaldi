package com.openai.valdi.chatgpt.finance.connections;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b(\b\u0007\u0018\u00002\u00020\u0001Bá\u0001\b\u0017\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\u0015\u0010\u0016R\u0018\u0010\u0017\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u0018\u0010\u0019\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0019\u0010\u0018R\u0018\u0010\u001a\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018R\u0018\u0010\u001b\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u0018R\u0018\u0010\u001c\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u0018R\u0018\u0010\u001d\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001d\u0010\u0018R\u0018\u0010\u001e\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001e\u0010\u0018R\u0018\u0010\u001f\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001f\u0010\u0018R\u0018\u0010 \u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b \u0010\u0018R\u0018\u0010!\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b!\u0010\u0018R\u0018\u0010\"\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\"\u0010\u0018R\u0018\u0010#\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b#\u0010\u0018R\u0018\u0010$\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b$\u0010\u0018R\u0018\u0010%\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b%\u0010\u0018R\u0018\u0010&\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b&\u0010\u0018R\u0018\u0010'\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b'\u0010\u0018R\u0018\u0010(\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b(\u0010\u0018R\u0018\u0010)\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b)\u0010\u0018¨\u0006*"}, d2 = {"Lcom/openai/valdi/chatgpt/finance/connections/FinanceCreditVerificationColorVariables;", "Lcom/snap/valdi/utils/b;", "", "sheetBg", "border", "headingText", "mutedText", "faintText", "eyebrow", "inputBg", "surface", "focusBorder", "focusRing", "buttonEnabledBg", "buttonEnabledHoverBg", "buttonEnabledText", "buttonDisabledBg", "buttonDisabledText", "errorText", "errorSurface", "logoVariant", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "_sheetBg", "Ljava/lang/String;", "_border", "_headingText", "_mutedText", "_faintText", "_eyebrow", "_inputBg", "_surface", "_focusBorder", "_focusRing", "_buttonEnabledBg", "_buttonEnabledHoverBg", "_buttonEnabledText", "_buttonDisabledBg", "_buttonDisabledText", "_errorText", "_errorSurface", "_logoVariant", "modules_chatgpt_finance_connections-chatgpt_finance_connections_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'sheetBg':s?,'border':s?,'headingText':s?,'mutedText':s?,'faintText':s?,'eyebrow':s?,'inputBg':s?,'surface':s?,'focusBorder':s?,'focusRing':s?,'buttonEnabledBg':s?,'buttonEnabledHoverBg':s?,'buttonEnabledText':s?,'buttonDisabledBg':s?,'buttonDisabledText':s?,'errorText':s?,'errorSurface':s?,'logoVariant':s?", typeReferences = {})
public final class FinanceCreditVerificationColorVariables extends b {
    private String _border;
    private String _buttonDisabledBg;
    private String _buttonDisabledText;
    private String _buttonEnabledBg;
    private String _buttonEnabledHoverBg;
    private String _buttonEnabledText;
    private String _errorSurface;
    private String _errorText;
    private String _eyebrow;
    private String _faintText;
    private String _focusBorder;
    private String _focusRing;
    private String _headingText;
    private String _inputBg;
    private String _logoVariant;
    private String _mutedText;
    private String _sheetBg;
    private String _surface;

    public FinanceCreditVerificationColorVariables(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14, String str15, String str16, String str17, String str18) {
        this._sheetBg = str;
        this._border = str2;
        this._headingText = str3;
        this._mutedText = str4;
        this._faintText = str5;
        this._eyebrow = str6;
        this._inputBg = str7;
        this._surface = str8;
        this._focusBorder = str9;
        this._focusRing = str10;
        this._buttonEnabledBg = str11;
        this._buttonEnabledHoverBg = str12;
        this._buttonEnabledText = str13;
        this._buttonDisabledBg = str14;
        this._buttonDisabledText = str15;
        this._errorText = str16;
        this._errorSurface = str17;
        this._logoVariant = str18;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_border() {
        return this._border;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final String get_buttonDisabledBg() {
        return this._buttonDisabledBg;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_buttonDisabledText() {
        return this._buttonDisabledText;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final String get_buttonEnabledBg() {
        return this._buttonEnabledBg;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final String get_buttonEnabledHoverBg() {
        return this._buttonEnabledHoverBg;
    }

    /* JADX INFO: renamed from: f, reason: from getter */
    public final String get_buttonEnabledText() {
        return this._buttonEnabledText;
    }

    /* JADX INFO: renamed from: g, reason: from getter */
    public final String get_errorSurface() {
        return this._errorSurface;
    }

    /* JADX INFO: renamed from: h, reason: from getter */
    public final String get_errorText() {
        return this._errorText;
    }

    /* JADX INFO: renamed from: i, reason: from getter */
    public final String get_eyebrow() {
        return this._eyebrow;
    }

    /* JADX INFO: renamed from: j, reason: from getter */
    public final String get_faintText() {
        return this._faintText;
    }

    /* JADX INFO: renamed from: k, reason: from getter */
    public final String get_focusBorder() {
        return this._focusBorder;
    }

    /* JADX INFO: renamed from: l, reason: from getter */
    public final String get_focusRing() {
        return this._focusRing;
    }

    /* JADX INFO: renamed from: m, reason: from getter */
    public final String get_headingText() {
        return this._headingText;
    }

    /* JADX INFO: renamed from: n, reason: from getter */
    public final String get_inputBg() {
        return this._inputBg;
    }

    /* JADX INFO: renamed from: o, reason: from getter */
    public final String get_logoVariant() {
        return this._logoVariant;
    }

    /* JADX INFO: renamed from: p, reason: from getter */
    public final String get_mutedText() {
        return this._mutedText;
    }

    /* JADX INFO: renamed from: q, reason: from getter */
    public final String get_sheetBg() {
        return this._sheetBg;
    }

    /* JADX INFO: renamed from: r, reason: from getter */
    public final String get_surface() {
        return this._surface;
    }
}
