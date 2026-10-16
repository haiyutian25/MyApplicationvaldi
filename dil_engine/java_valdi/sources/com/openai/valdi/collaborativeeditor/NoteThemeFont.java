package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.utils.b;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes3.dex */
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0006\n\u0002\b\r\b\u0007\u0018\u00002\u00020\u0001B1\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\b\u0010\tR\u0016\u0010\n\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\n\u0010\u000bR\u0016\u0010\f\u001a\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\rR\u0018\u0010\u000e\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\u000bR\u0018\u0010\u000f\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\u0010¨\u0006\u0011"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/NoteThemeFont;", "Lcom/snap/valdi/utils/b;", "", "family", "", "weight", "ttfUrl", "fontSizeMultiplier", "<init>", "(Ljava/lang/String;DLjava/lang/String;Ljava/lang/Double;)V", "_family", "Ljava/lang/String;", "_weight", "D", "_ttfUrl", "_fontSizeMultiplier", "Ljava/lang/Double;", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'family':s,'weight':d,'ttfUrl':s?,'fontSizeMultiplier':d@?", typeReferences = {})
public final class NoteThemeFont extends b {
    private String _family;
    private Double _fontSizeMultiplier;
    private String _ttfUrl;
    private double _weight;

    public NoteThemeFont(String str, double d, String str2, Double d2) {
        this._family = str;
        this._weight = d;
        this._ttfUrl = str2;
        this._fontSizeMultiplier = d2;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_family() {
        return this._family;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final String get_ttfUrl() {
        return this._ttfUrl;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final double get_weight() {
        return this._weight;
    }
}
