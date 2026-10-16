package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import com.snap.valdi.views.ValdiTextView;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\r\b\u0007\u0018\u00002\u00020\u0001BE\b\u0017\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\t\u0010\nR\u0018\u0010\u000b\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000b\u0010\fR\u0018\u0010\r\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\fR\u0018\u0010\u000e\u001a\u0004\u0018\u00010\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\u000fR\u0018\u0010\u0010\u001a\u0004\u0018\u00010\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u000fR\u0018\u0010\u0011\u001a\u0004\u0018\u00010\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\u000f¨\u0006\u0012"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/DocumentMarkAttributes;", "Lcom/snap/valdi/utils/b;", "", "href", ValdiTextView.MenuActionTitleKey, "", "disabled", "isAutolink", "isGeneratedAutolink", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;)V", "_href", "Ljava/lang/String;", "_title", "_disabled", "Ljava/lang/Boolean;", "_isAutolink", "_isGeneratedAutolink", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'href':s?,'title':s?,'disabled':b@?,'isAutolink':b@?,'isGeneratedAutolink':b@?", typeReferences = {})
public final class DocumentMarkAttributes extends b {
    private Boolean _disabled;
    private String _href;
    private Boolean _isAutolink;
    private Boolean _isGeneratedAutolink;
    private String _title;

    public DocumentMarkAttributes(String str, String str2, Boolean bool, Boolean bool2, Boolean bool3) {
        this._href = str;
        this._title = str2;
        this._disabled = bool;
        this._isAutolink = bool2;
        this._isGeneratedAutolink = bool3;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final Boolean get_disabled() {
        return this._disabled;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final String get_href() {
        return this._href;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_title() {
        return this._title;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final Boolean get_isAutolink() {
        return this._isAutolink;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final Boolean get_isGeneratedAutolink() {
        return this._isGeneratedAutolink;
    }
}
