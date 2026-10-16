package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'STALE_REVISION':0,'INVALID_OPERATION':1,'UNSUPPORTED_SCHEMA':2,'INVALID_UPDATE':3,'CLOSED':4,'INVALID_ANCHOR':5,'INTERNAL_ERROR':6,'INVALID_PRESENCE':7,'UNSUPPORTED_MARKDOWN':9", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\n\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\n¨\u0006\u000b"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/EditorErrorCode;", "", "STALE_REVISION", "INVALID_OPERATION", "UNSUPPORTED_SCHEMA", "INVALID_UPDATE", "CLOSED", "INVALID_ANCHOR", "INTERNAL_ERROR", "INVALID_PRESENCE", "UNSUPPORTED_MARKDOWN", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class EditorErrorCode {
    public static final EditorErrorCode CLOSED;
    public static final EditorErrorCode INTERNAL_ERROR;
    public static final EditorErrorCode INVALID_ANCHOR;
    public static final EditorErrorCode INVALID_OPERATION;
    public static final EditorErrorCode INVALID_PRESENCE;
    public static final EditorErrorCode INVALID_UPDATE;
    public static final EditorErrorCode STALE_REVISION;
    public static final EditorErrorCode UNSUPPORTED_MARKDOWN;
    public static final EditorErrorCode UNSUPPORTED_SCHEMA;
    public static final /* synthetic */ EditorErrorCode[] a;

    static {
        EditorErrorCode editorErrorCode = new EditorErrorCode("STALE_REVISION", 0);
        STALE_REVISION = editorErrorCode;
        EditorErrorCode editorErrorCode2 = new EditorErrorCode("INVALID_OPERATION", 1);
        INVALID_OPERATION = editorErrorCode2;
        EditorErrorCode editorErrorCode3 = new EditorErrorCode("UNSUPPORTED_SCHEMA", 2);
        UNSUPPORTED_SCHEMA = editorErrorCode3;
        EditorErrorCode editorErrorCode4 = new EditorErrorCode("INVALID_UPDATE", 3);
        INVALID_UPDATE = editorErrorCode4;
        EditorErrorCode editorErrorCode5 = new EditorErrorCode("CLOSED", 4);
        CLOSED = editorErrorCode5;
        EditorErrorCode editorErrorCode6 = new EditorErrorCode("INVALID_ANCHOR", 5);
        INVALID_ANCHOR = editorErrorCode6;
        EditorErrorCode editorErrorCode7 = new EditorErrorCode("INTERNAL_ERROR", 6);
        INTERNAL_ERROR = editorErrorCode7;
        EditorErrorCode editorErrorCode8 = new EditorErrorCode("INVALID_PRESENCE", 7);
        INVALID_PRESENCE = editorErrorCode8;
        EditorErrorCode editorErrorCode9 = new EditorErrorCode("UNSUPPORTED_MARKDOWN", 8);
        UNSUPPORTED_MARKDOWN = editorErrorCode9;
        a = new EditorErrorCode[]{editorErrorCode, editorErrorCode2, editorErrorCode3, editorErrorCode4, editorErrorCode5, editorErrorCode6, editorErrorCode7, editorErrorCode8, editorErrorCode9};
    }

    public static EditorErrorCode valueOf(String str) {
        return (EditorErrorCode) Enum.valueOf(EditorErrorCode.class, str);
    }

    public static EditorErrorCode[] values() {
        return (EditorErrorCode[]) a.clone();
    }
}
