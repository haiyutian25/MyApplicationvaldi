package com.openai.valdi.integrity;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.jmz0;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\b\n\b\u0007\u0018\u00002\u00020\u0001B1\b\u0017\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\f\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00020\u0004\u0012\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00020\u0004¢\u0006\u0004\b\u0007\u0010\bR\u0018\u0010\t\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\t\u0010\nR\u001c\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000b\u0010\fR\u001c\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\f¨\u0006\u000e"}, d2 = {"Lcom/openai/valdi/integrity/DeviceIntegrityResponse;", "Lcom/snap/valdi/utils/b;", "", "bodyPatchJson", "", "headerNames", "headerValues", "<init>", "(Ljava/lang/String;Ljava/util/List;Ljava/util/List;)V", "_bodyPatchJson", "Ljava/lang/String;", "_headerNames", "Ljava/util/List;", "_headerValues", "modules_oai_device_integrity-oai_device_integrity_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'bodyPatchJson':s?,'headerNames':a<s>,'headerValues':a<s>", typeReferences = {})
public final class DeviceIntegrityResponse extends com.snap.valdi.utils.b {
    private String _bodyPatchJson;
    private List<String> _headerNames;
    private List<String> _headerValues;

    public DeviceIntegrityResponse(String str, List<String> list, List<String> list2) {
        this._bodyPatchJson = str;
        this._headerNames = list;
        this._headerValues = list2;
    }
}
