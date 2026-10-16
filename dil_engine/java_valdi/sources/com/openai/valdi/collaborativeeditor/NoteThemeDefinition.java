package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.utils.b;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes3.dex */
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\b\u0007\u0018\u00002\u00020\u0001B1\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\u0006\u0010\t\u001a\u00020\u0007¢\u0006\u0004\b\n\u0010\u000bR\u0016\u0010\f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\rR\u0016\u0010\u000e\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\rR\u0016\u0010\u000f\u001a\u00020\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\u0010R\u0016\u0010\u0011\u001a\u00020\u00078\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\u0012R\u0016\u0010\u0013\u001a\u00020\u00078\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\u0012¨\u0006\u0014"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/NoteThemeDefinition;", "Lcom/snap/valdi/utils/b;", "", "id", "name", "Lcom/openai/valdi/collaborativeeditor/NoteThemeFonts;", "fonts", "Lcom/openai/valdi/collaborativeeditor/NoteThemeColors;", "lightColorScheme", "darkColorScheme", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/openai/valdi/collaborativeeditor/NoteThemeFonts;Lcom/openai/valdi/collaborativeeditor/NoteThemeColors;Lcom/openai/valdi/collaborativeeditor/NoteThemeColors;)V", "_id", "Ljava/lang/String;", "_name", "_fonts", "Lcom/openai/valdi/collaborativeeditor/NoteThemeFonts;", "_lightColorScheme", "Lcom/openai/valdi/collaborativeeditor/NoteThemeColors;", "_darkColorScheme", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'id':s,'name':s,'fonts':r:'[0]','lightColorScheme':r:'[1]','darkColorScheme':r:'[1]'", typeReferences = {NoteThemeFonts.class, NoteThemeColors.class})
public final class NoteThemeDefinition extends b {
    private NoteThemeColors _darkColorScheme;
    private NoteThemeFonts _fonts;
    private String _id;
    private NoteThemeColors _lightColorScheme;
    private String _name;

    public NoteThemeDefinition(String str, String str2, NoteThemeFonts noteThemeFonts, NoteThemeColors noteThemeColors, NoteThemeColors noteThemeColors2) {
        this._id = str;
        this._name = str2;
        this._fonts = noteThemeFonts;
        this._lightColorScheme = noteThemeColors;
        this._darkColorScheme = noteThemeColors2;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final NoteThemeColors get_darkColorScheme() {
        return this._darkColorScheme;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final NoteThemeFonts get_fonts() {
        return this._fonts;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_id() {
        return this._id;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final NoteThemeColors get_lightColorScheme() {
        return this._lightColorScheme;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final String get_name() {
        return this._name;
    }
}
