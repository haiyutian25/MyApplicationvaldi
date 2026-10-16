package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0002\b\n\b\u0007\u0018\u00002\u00020\u0001B'\b\u0017\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005¢\u0006\u0004\b\b\u0010\tR\u001c\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u00030\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\n\u0010\u000bR\u0016\u0010\f\u001a\u00020\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\rR\u0016\u0010\u000e\u001a\u00020\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\r¨\u0006\u000f"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/DocumentSlice;", "Lcom/snap/valdi/utils/b;", "", "Lcom/openai/valdi/collaborativeeditor/DocumentNode;", "content", "", "openStart", "openEnd", "<init>", "(Ljava/util/List;DD)V", "_content", "Ljava/util/List;", "_openStart", "D", "_openEnd", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'content':a<r:'[0]'>,'openStart':d,'openEnd':d", typeReferences = {DocumentNode.class})
public final class DocumentSlice extends b {
    private List<DocumentNode> _content;
    private double _openEnd;
    private double _openStart;

    public DocumentSlice(List<DocumentNode> list, double d, double d2) {
        this._content = list;
        this._openStart = d;
        this._openEnd = d2;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final List get_content() {
        return this._content;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final double get_openEnd() {
        return this._openEnd;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final double get_openStart() {
        return this._openStart;
    }
}
