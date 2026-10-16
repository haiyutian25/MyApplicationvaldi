package com.openai.valdi.oai.platform;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\b\b\u0007\u0018\u00002\u00020\u0001B\u0019\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002¢\u0006\u0004\b\u0005\u0010\u0006R\u0016\u0010\u0007\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0007\u0010\bR\u0016\u0010\t\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\t\u0010\b¨\u0006\n"}, d2 = {"Lcom/openai/valdi/oai/platform/OAIExperimentLayerParameterKey;", "Lcom/snap/valdi/utils/b;", "", "layerName", "parameterName", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "_layerName", "Ljava/lang/String;", "_parameterName", "modules_oai_platform_services-oai_platform_services_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'layerName':s,'parameterName':s", typeReferences = {})
public final class OAIExperimentLayerParameterKey extends b {
    private String _layerName;
    private String _parameterName;

    public OAIExperimentLayerParameterKey(String str, String str2) {
        this._layerName = str;
        this._parameterName = str2;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_layerName() {
        return this._layerName;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final String get_parameterName() {
        return this._parameterName;
    }
}
