package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import com.snap.valdi.views.ValdiTextView;
import defpackage.jmz0;
import defpackage.yzw;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001a\b\u0007\u0018\u00002\u00020\u0001B\u009d\u0001\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\u0010\b\u0002\u0010\n\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u000e\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0010\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u0006\u0012\u0010\b\u0002\u0010\u0014\u001a\n\u0012\u0004\u0012\u00020\u0013\u0018\u00010\b\u0012\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u0015\u0012\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0018\u0010\u0019R\u0016\u0010\u001a\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010\u001bR\u0016\u0010\u001c\u001a\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u001dR\u0018\u0010\u001e\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001e\u0010\u001fR\u001e\u0010 \u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b \u0010!R\u0018\u0010\"\u001a\u0004\u0018\u00010\t8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\"\u0010#R\u0018\u0010$\u001a\u0004\u0018\u00010\f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b$\u0010%R\u0018\u0010&\u001a\u0004\u0018\u00010\u000e8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b&\u0010'R\u0018\u0010(\u001a\u0004\u0018\u00010\u00108\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b(\u0010)R\u0018\u0010*\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b*\u0010\u001fR\u001e\u0010+\u001a\n\u0012\u0004\u0012\u00020\u0013\u0018\u00010\b8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b+\u0010!R\u0018\u0010,\u001a\u0004\u0018\u00010\u00158\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b,\u0010-R\u0018\u0010.\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b.\u0010\u001d¨\u0006/"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/EditorInputOperation;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/collaborativeeditor/EditorInputAction;", "action", "Lcom/openai/valdi/collaborativeeditor/EditorRange;", "range", "", ValdiTextView.TextKey, "", "Lcom/openai/valdi/collaborativeeditor/DocumentMark;", "marks", "mark", "Lcom/openai/valdi/collaborativeeditor/EditorBlockStyle;", "blockStyle", "Lcom/openai/valdi/collaborativeeditor/EditorListStyle;", "listStyle", "", "autoformatLists", "sessionId", "Lyzw;", "replacements", "Lcom/openai/valdi/collaborativeeditor/EditorTextRange;", "textSelectionAfter", "selectionAfter", "<init>", "(Lcom/openai/valdi/collaborativeeditor/EditorInputAction;Lcom/openai/valdi/collaborativeeditor/EditorRange;Ljava/lang/String;Ljava/util/List;Lcom/openai/valdi/collaborativeeditor/DocumentMark;Lcom/openai/valdi/collaborativeeditor/EditorBlockStyle;Lcom/openai/valdi/collaborativeeditor/EditorListStyle;Ljava/lang/Boolean;Ljava/lang/String;Ljava/util/List;Lcom/openai/valdi/collaborativeeditor/EditorTextRange;Lcom/openai/valdi/collaborativeeditor/EditorRange;)V", "_action", "Lcom/openai/valdi/collaborativeeditor/EditorInputAction;", "_range", "Lcom/openai/valdi/collaborativeeditor/EditorRange;", "_text", "Ljava/lang/String;", "_marks", "Ljava/util/List;", "_mark", "Lcom/openai/valdi/collaborativeeditor/DocumentMark;", "_blockStyle", "Lcom/openai/valdi/collaborativeeditor/EditorBlockStyle;", "_listStyle", "Lcom/openai/valdi/collaborativeeditor/EditorListStyle;", "_autoformatLists", "Ljava/lang/Boolean;", "_sessionId", "_replacements", "_textSelectionAfter", "Lcom/openai/valdi/collaborativeeditor/EditorTextRange;", "_selectionAfter", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'action':r<e>:'[0]','range':r:'[1]','text':s?,'marks':a?<r:'[2]'>,'mark':r?:'[2]','blockStyle':r?<e>:'[3]','listStyle':r?<e>:'[4]','autoformatLists':b@?,'sessionId':s?,'replacements':a?<r:'[5]'>,'textSelectionAfter':r?:'[6]','selectionAfter':r?:'[1]'", typeReferences = {EditorInputAction.class, EditorRange.class, DocumentMark.class, EditorBlockStyle.class, EditorListStyle.class, yzw.class, EditorTextRange.class})
public final class EditorInputOperation extends b {
    private EditorInputAction _action;
    private Boolean _autoformatLists;
    private EditorBlockStyle _blockStyle;
    private EditorListStyle _listStyle;
    private DocumentMark _mark;
    private List<DocumentMark> _marks;
    private EditorRange _range;
    private List<yzw> _replacements;
    private EditorRange _selectionAfter;
    private String _sessionId;
    private String _text;
    private EditorTextRange _textSelectionAfter;

    public /* synthetic */ EditorInputOperation(EditorInputAction editorInputAction, EditorRange editorRange, String str, ArrayList arrayList, EditorBlockStyle editorBlockStyle, Boolean bool, String str2, EditorRange editorRange2, int i) {
        this(editorInputAction, editorRange, (i & 4) != 0 ? null : str, (i & 8) != 0 ? null : arrayList, null, (i & 32) != 0 ? null : editorBlockStyle, null, (i & 128) != 0 ? null : bool, (i & 256) != 0 ? null : str2, null, null, (i & 2048) != 0 ? null : editorRange2);
    }

    public EditorInputOperation(EditorInputAction editorInputAction, EditorRange editorRange, String str, List<DocumentMark> list, DocumentMark documentMark, EditorBlockStyle editorBlockStyle, EditorListStyle editorListStyle, Boolean bool, String str2, List<yzw> list2, EditorTextRange editorTextRange, EditorRange editorRange2) {
        this._action = editorInputAction;
        this._range = editorRange;
        this._text = str;
        this._marks = list;
        this._mark = documentMark;
        this._blockStyle = editorBlockStyle;
        this._listStyle = editorListStyle;
        this._autoformatLists = bool;
        this._sessionId = str2;
        this._replacements = list2;
        this._textSelectionAfter = editorTextRange;
        this._selectionAfter = editorRange2;
    }
}
