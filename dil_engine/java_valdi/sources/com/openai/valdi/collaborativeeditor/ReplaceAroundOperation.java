package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\u000b\n\u0002\b\r\b\u0007\u0018\u00002\u00020\u0001B1\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\u0006\u0010\n\u001a\u00020\t¢\u0006\u0004\b\u000b\u0010\fR\u0016\u0010\r\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\u000eR\u0016\u0010\u000f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\u000eR\u0016\u0010\u0010\u001a\u00020\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u0016\u0010\u0012\u001a\u00020\u00078\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013R\u0016\u0010\u0014\u001a\u00020\t8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015¨\u0006\u0016"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/ReplaceAroundOperation;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/collaborativeeditor/EditorRange;", "range", "gap", "Lcom/openai/valdi/collaborativeeditor/DocumentSlice;", "slice", "", "insert", "", "structure", "<init>", "(Lcom/openai/valdi/collaborativeeditor/EditorRange;Lcom/openai/valdi/collaborativeeditor/EditorRange;Lcom/openai/valdi/collaborativeeditor/DocumentSlice;DZ)V", "_range", "Lcom/openai/valdi/collaborativeeditor/EditorRange;", "_gap", "_slice", "Lcom/openai/valdi/collaborativeeditor/DocumentSlice;", "_insert", "D", "_structure", "Z", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'range':r:'[0]','gap':r:'[0]','slice':r:'[1]','insert':d,'structure':b", typeReferences = {EditorRange.class, DocumentSlice.class})
public final class ReplaceAroundOperation extends b {
    private EditorRange _gap;
    private double _insert;
    private EditorRange _range;
    private DocumentSlice _slice;
    private boolean _structure;

    public ReplaceAroundOperation(EditorRange editorRange, EditorRange editorRange2, DocumentSlice documentSlice, double d, boolean z) {
        this._range = editorRange;
        this._gap = editorRange2;
        this._slice = documentSlice;
        this._insert = d;
        this._structure = z;
    }
}
