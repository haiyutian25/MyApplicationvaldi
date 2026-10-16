package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.utils.b;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes3.dex */
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0012\b\u0007\u0018\u00002\u00020\u0001BA\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0002\u0012\u0006\u0010\u0007\u001a\u00020\u0002\u0012\u0006\u0010\b\u001a\u00020\u0002\u0012\u0006\u0010\t\u001a\u00020\u0002¢\u0006\u0004\b\n\u0010\u000bR\u0016\u0010\f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\rR\u0016\u0010\u000e\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\rR\u0016\u0010\u000f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\rR\u0016\u0010\u0010\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\rR\u0016\u0010\u0011\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\rR\u0016\u0010\u0012\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\rR\u0016\u0010\u0013\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\r¨\u0006\u0014"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/NoteThemeFonts;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/collaborativeeditor/NoteThemeFont;", "heading1", "heading2", "heading3", "heading4", "heading5", "heading6", "body", "<init>", "(Lcom/openai/valdi/collaborativeeditor/NoteThemeFont;Lcom/openai/valdi/collaborativeeditor/NoteThemeFont;Lcom/openai/valdi/collaborativeeditor/NoteThemeFont;Lcom/openai/valdi/collaborativeeditor/NoteThemeFont;Lcom/openai/valdi/collaborativeeditor/NoteThemeFont;Lcom/openai/valdi/collaborativeeditor/NoteThemeFont;Lcom/openai/valdi/collaborativeeditor/NoteThemeFont;)V", "_heading1", "Lcom/openai/valdi/collaborativeeditor/NoteThemeFont;", "_heading2", "_heading3", "_heading4", "_heading5", "_heading6", "_body", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'heading1':r:'[0]','heading2':r:'[0]','heading3':r:'[0]','heading4':r:'[0]','heading5':r:'[0]','heading6':r:'[0]','body':r:'[0]'", typeReferences = {NoteThemeFont.class})
public final class NoteThemeFonts extends b {
    private NoteThemeFont _body;
    private NoteThemeFont _heading1;
    private NoteThemeFont _heading2;
    private NoteThemeFont _heading3;
    private NoteThemeFont _heading4;
    private NoteThemeFont _heading5;
    private NoteThemeFont _heading6;

    public NoteThemeFonts(NoteThemeFont noteThemeFont, NoteThemeFont noteThemeFont2, NoteThemeFont noteThemeFont3, NoteThemeFont noteThemeFont4, NoteThemeFont noteThemeFont5, NoteThemeFont noteThemeFont6, NoteThemeFont noteThemeFont7) {
        this._heading1 = noteThemeFont;
        this._heading2 = noteThemeFont2;
        this._heading3 = noteThemeFont3;
        this._heading4 = noteThemeFont4;
        this._heading5 = noteThemeFont5;
        this._heading6 = noteThemeFont6;
        this._body = noteThemeFont7;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final NoteThemeFont get_body() {
        return this._body;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final NoteThemeFont get_heading1() {
        return this._heading1;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final NoteThemeFont get_heading2() {
        return this._heading2;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final NoteThemeFont get_heading3() {
        return this._heading3;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final NoteThemeFont get_heading4() {
        return this._heading4;
    }

    /* JADX INFO: renamed from: f, reason: from getter */
    public final NoteThemeFont get_heading5() {
        return this._heading5;
    }

    /* JADX INFO: renamed from: g, reason: from getter */
    public final NoteThemeFont get_heading6() {
        return this._heading6;
    }
}
