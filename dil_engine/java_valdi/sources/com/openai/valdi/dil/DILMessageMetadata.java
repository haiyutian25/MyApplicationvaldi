package com.openai.valdi.dil;

import com.snap.valdi.utils.b;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes5.dex */
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0014\b\u0007\u0018\u00002\u00020\u0001Bq\b\u0017\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\n\u001a\u00020\t\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\u000e\u0010\u000fR\u0018\u0010\u0010\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u0018\u0010\u0012\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0011R\u0018\u0010\u0013\u001a\u0004\u0018\u00010\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\u0014R\u0018\u0010\u0015\u001a\u0004\u0018\u00010\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0015\u0010\u0014R\u0018\u0010\u0016\u001a\u0004\u0018\u00010\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0014R\u0016\u0010\u0017\u001a\u00020\t8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u0018\u0010\u0019\u001a\u0004\u0018\u00010\t8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0019\u0010\u001aR\u0018\u0010\u001b\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u0011R\u0018\u0010\u001c\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u0011¨\u0006\u001d"}, d2 = {"Lcom/openai/valdi/dil/DILMessageMetadata;", "Lcom/snap/valdi/utils/b;", "", "conversationId", "messageId", "", "contentReferenceIndex", "turnOrdinal", "contentReferenceStartIndex", "", "isModelWrittenDil", "isReadOnly", "widgetType", "widgetName", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Double;Ljava/lang/Double;Ljava/lang/Double;ZLjava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;)V", "_conversationId", "Ljava/lang/String;", "_messageId", "_contentReferenceIndex", "Ljava/lang/Double;", "_turnOrdinal", "_contentReferenceStartIndex", "_isModelWrittenDil", "Z", "_isReadOnly", "Ljava/lang/Boolean;", "_widgetType", "_widgetName", "modules_dil_widgets-dil_widgets_api_kt_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'conversationId':s?,'messageId':s?,'contentReferenceIndex':d@?,'turnOrdinal':d@?,'contentReferenceStartIndex':d@?,'isModelWrittenDil':b,'isReadOnly':b@?,'widgetType':s?,'widgetName':s?", typeReferences = {})
public final class DILMessageMetadata extends b {
    private Double _contentReferenceIndex;
    private Double _contentReferenceStartIndex;
    private String _conversationId;
    private boolean _isModelWrittenDil;
    private Boolean _isReadOnly;
    private String _messageId;
    private Double _turnOrdinal;
    private String _widgetName;
    private String _widgetType;

    public DILMessageMetadata(String str, String str2, Double d, Double d2, Double d3, boolean z, Boolean bool, String str3, String str4) {
        this._conversationId = str;
        this._messageId = str2;
        this._contentReferenceIndex = d;
        this._turnOrdinal = d2;
        this._contentReferenceStartIndex = d3;
        this._isModelWrittenDil = z;
        this._isReadOnly = bool;
        this._widgetType = str3;
        this._widgetName = str4;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final Double get_contentReferenceIndex() {
        return this._contentReferenceIndex;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final Double get_contentReferenceStartIndex() {
        return this._contentReferenceStartIndex;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_conversationId() {
        return this._conversationId;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final String get_messageId() {
        return this._messageId;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final Double get_turnOrdinal() {
        return this._turnOrdinal;
    }

    /* JADX INFO: renamed from: f, reason: from getter */
    public final String get_widgetName() {
        return this._widgetName;
    }

    /* JADX INFO: renamed from: g, reason: from getter */
    public final String get_widgetType() {
        return this._widgetType;
    }

    /* JADX INFO: renamed from: h, reason: from getter */
    public final boolean get_isModelWrittenDil() {
        return this._isModelWrittenDil;
    }

    /* JADX INFO: renamed from: i, reason: from getter */
    public final Boolean get_isReadOnly() {
        return this._isReadOnly;
    }
}
