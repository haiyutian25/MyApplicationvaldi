package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import com.snap.valdi.views.ValdiTextView;
import defpackage.jmz0;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\r\b\u0007\u0018\u00002\u00020\u0001BM\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\u0010\b\u0002\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\u0000\u0018\u00010\u0006\u0012\u0010\b\u0002\u0010\t\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u0006\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\f\u0010\rR\u0016\u0010\u000e\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\u000fR\u0018\u0010\u0010\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u001e\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0000\u0018\u00010\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013R\u001e\u0010\u0014\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0013R\u0018\u0010\u0015\u001a\u0004\u0018\u00010\n8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016¨\u0006\u0017"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/DocumentNode;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/collaborativeeditor/DocumentNodeType;", "type", "Lcom/openai/valdi/collaborativeeditor/DocumentNodeAttributes;", "attrs", "", "content", "Lcom/openai/valdi/collaborativeeditor/DocumentMark;", "marks", "", ValdiTextView.TextKey, "<init>", "(Lcom/openai/valdi/collaborativeeditor/DocumentNodeType;Lcom/openai/valdi/collaborativeeditor/DocumentNodeAttributes;Ljava/util/List;Ljava/util/List;Ljava/lang/String;)V", "_type", "Lcom/openai/valdi/collaborativeeditor/DocumentNodeType;", "_attrs", "Lcom/openai/valdi/collaborativeeditor/DocumentNodeAttributes;", "_content", "Ljava/util/List;", "_marks", "_text", "Ljava/lang/String;", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'type':r:'[0]','attrs':r?:'[1]','content':a?<r:'[2]'>,'marks':a?<r:'[3]'>,'text':s?", typeReferences = {DocumentNodeType.class, DocumentNodeAttributes.class, DocumentNode.class, DocumentMark.class})
public final class DocumentNode extends b {
    private DocumentNodeAttributes _attrs;
    private List<DocumentNode> _content;
    private List<DocumentMark> _marks;
    private String _text;
    private DocumentNodeType _type;

    public DocumentNode(DocumentNodeType documentNodeType, DocumentNodeAttributes documentNodeAttributes, List<DocumentNode> list, List<DocumentMark> list2, String str) {
        this._type = documentNodeType;
        this._attrs = documentNodeAttributes;
        this._content = list;
        this._marks = list2;
        this._text = str;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final DocumentNodeAttributes get_attrs() {
        return this._attrs;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final List get_content() {
        return this._content;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final List get_marks() {
        return this._marks;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final String get_text() {
        return this._text;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final DocumentNodeType get_type() {
        return this._type;
    }
}
