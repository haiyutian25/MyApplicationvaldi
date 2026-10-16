package com.openai.valdi.dil;

import com.snap.valdi.utils.b;
import defpackage.jmz0;
import java.util.Map;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: classes5.dex */
@Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010$\n\u0002\u0010\u0000\n\u0002\b\t\b\u0007\u0018\u00002\u00020\u0001B7\b\u0017\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0018\b\u0002\u0010\u0007\u001a\u0012\u0012\u0004\u0012\u00020\u0002\u0012\u0006\u0012\u0004\u0018\u00010\u0006\u0018\u00010\u0005¢\u0006\u0004\b\b\u0010\tR\u0018\u0010\n\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\n\u0010\u000bR\u0016\u0010\f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\u000bR&\u0010\r\u001a\u0012\u0012\u0004\u0012\u00020\u0002\u0012\u0006\u0012\u0004\u0018\u00010\u0006\u0018\u00010\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/openai/valdi/dil/DILInteractionAttribution;", "Lcom/snap/valdi/utils/b;", "", "widgetName", "dilVersion", "", "", "loggingMetadata", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/util/Map;)V", "_widgetName", "Ljava/lang/String;", "_dilVersion", "_loggingMetadata", "Ljava/util/Map;", "modules_dil_widgets-dil_widgets_api_kt_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'widgetName':s?,'dilVersion':s,'loggingMetadata':m?<s,u>", typeReferences = {})
public final class DILInteractionAttribution extends b {
    private String _dilVersion;
    private Map<String, ? extends Object> _loggingMetadata;
    private String _widgetName;

    public DILInteractionAttribution(String str, String str2, Map<String, ? extends Object> map) {
        this._widgetName = str;
        this._dilVersion = str2;
        this._loggingMetadata = map;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_dilVersion() {
        return this._dilVersion;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final Map get_loggingMetadata() {
        return this._loggingMetadata;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_widgetName() {
        return this._widgetName;
    }
}
