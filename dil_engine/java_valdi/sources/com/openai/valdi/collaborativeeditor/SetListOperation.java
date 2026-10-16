package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\f\b\u0007\u0018\u00002\u00020\u0001B5\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\t\u0010\nR\u0016\u0010\u000b\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000b\u0010\fR\u0018\u0010\r\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\u000eR\u0018\u0010\u000f\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\u0010R\u0018\u0010\u0011\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\u000e¨\u0006\u0012"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/SetListOperation;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/collaborativeeditor/EditorRange;", "range", "Lcom/openai/valdi/collaborativeeditor/DocumentNodeType;", "type", "Lcom/openai/valdi/collaborativeeditor/DocumentNodeAttributes;", "attrs", "itemType", "<init>", "(Lcom/openai/valdi/collaborativeeditor/EditorRange;Lcom/openai/valdi/collaborativeeditor/DocumentNodeType;Lcom/openai/valdi/collaborativeeditor/DocumentNodeAttributes;Lcom/openai/valdi/collaborativeeditor/DocumentNodeType;)V", "_range", "Lcom/openai/valdi/collaborativeeditor/EditorRange;", "_type", "Lcom/openai/valdi/collaborativeeditor/DocumentNodeType;", "_attrs", "Lcom/openai/valdi/collaborativeeditor/DocumentNodeAttributes;", "_itemType", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'range':r:'[0]','type':r?:'[1]','attrs':r?:'[2]','itemType':r?:'[1]'", typeReferences = {EditorRange.class, DocumentNodeType.class, DocumentNodeAttributes.class})
public final class SetListOperation extends b {
    private DocumentNodeAttributes _attrs;
    private DocumentNodeType _itemType;
    private EditorRange _range;
    private DocumentNodeType _type;

    public SetListOperation(EditorRange editorRange, DocumentNodeType documentNodeType, DocumentNodeAttributes documentNodeAttributes, DocumentNodeType documentNodeType2) {
        this._range = editorRange;
        this._type = documentNodeType;
        this._attrs = documentNodeAttributes;
        this._itemType = documentNodeType2;
    }
}
