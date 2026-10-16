package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.utils.b;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes3.dex */
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010 \n\u0002\b\r\b\u0007\u0018\u00002\u00020\u0001BG\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0002\u0012\u0006\u0010\u0007\u001a\u00020\u0002\u0012\u0006\u0010\b\u001a\u00020\u0002\u0012\f\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u00020\t¢\u0006\u0004\b\u000b\u0010\fR\u0016\u0010\r\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\u000eR\u0016\u0010\u000f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\u000eR\u0016\u0010\u0010\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u000eR\u0016\u0010\u0011\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\u000eR\u0016\u0010\u0012\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u000eR\u0016\u0010\u0013\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\u000eR\u001c\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00020\t8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015¨\u0006\u0016"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/NoteThemeColors;", "Lcom/snap/valdi/utils/b;", "", "text", "background", "diff", "link", "monospaceText", "monospaceBackground", "", "collaborators", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;)V", "_text", "Ljava/lang/String;", "_background", "_diff", "_link", "_monospaceText", "_monospaceBackground", "_collaborators", "Ljava/util/List;", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'text':s,'background':s,'diff':s,'link':s,'monospaceText':s,'monospaceBackground':s,'collaborators':a<s>", typeReferences = {})
public final class NoteThemeColors extends b {
    private String _background;
    private List<String> _collaborators;
    private String _diff;
    private String _link;
    private String _monospaceBackground;
    private String _monospaceText;
    private String _text;

    public NoteThemeColors(String str, String str2, String str3, String str4, String str5, String str6, List<String> list) {
        this._text = str;
        this._background = str2;
        this._diff = str3;
        this._link = str4;
        this._monospaceText = str5;
        this._monospaceBackground = str6;
        this._collaborators = list;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_background() {
        return this._background;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final List get_collaborators() {
        return this._collaborators;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_diff() {
        return this._diff;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final String get_link() {
        return this._link;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final String get_monospaceBackground() {
        return this._monospaceBackground;
    }

    /* JADX INFO: renamed from: f, reason: from getter */
    public final String get_monospaceText() {
        return this._monospaceText;
    }

    /* JADX INFO: renamed from: g, reason: from getter */
    public final String get_text() {
        return this._text;
    }
}
