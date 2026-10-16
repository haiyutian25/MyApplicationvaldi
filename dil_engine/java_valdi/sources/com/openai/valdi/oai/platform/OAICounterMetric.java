package com.openai.valdi.oai.platform;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0006\n\u0002\b\n\b\u0007\u0018\u00002\u00020\u0001B%\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\u0007\u0010\bR\u0016\u0010\t\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\t\u0010\nR\u0016\u0010\u000b\u001a\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000b\u0010\fR\u0018\u0010\r\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\n¨\u0006\u000e"}, d2 = {"Lcom/openai/valdi/oai/platform/OAICounterMetric;", "Lcom/snap/valdi/utils/b;", "", "name", "", "value", "tagsJson", "<init>", "(Ljava/lang/String;DLjava/lang/String;)V", "_name", "Ljava/lang/String;", "_value", "D", "_tagsJson", "modules_oai_metrics_service-oai_metrics_service_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'name':s,'value':d,'tagsJson':s?", typeReferences = {})
public final class OAICounterMetric extends b {
    private String _name;
    private String _tagsJson;
    private double _value;

    public OAICounterMetric(String str, double d, String str2) {
        this._name = str;
        this._value = d;
        this._tagsJson = str2;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_name() {
        return this._name;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final String get_tagsJson() {
        return this._tagsJson;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final double get_value() {
        return this._value;
    }
}
