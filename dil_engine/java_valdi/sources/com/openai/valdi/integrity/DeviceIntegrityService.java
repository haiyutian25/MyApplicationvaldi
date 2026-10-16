package com.openai.valdi.integrity;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.prz0;
import defpackage.qtu;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\bg\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H&J\u0010\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016¨\u0006\f"}, d2 = {"Lcom/openai/valdi/integrity/DeviceIntegrityService;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "prepare", "Lcom/openai/valdi/integrity/DeviceIntegrityTask;", "request", "Lcom/openai/valdi/integrity/DeviceIntegrityRequest;", "completion", "Lcom/openai/valdi/integrity/DeviceIntegrityCompletion;", "pushToMarshaller", "", "marshaller", "Lcom/snap/valdi/utils/ValdiMarshaller;", "modules_oai_device_integrity-oai_device_integrity_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = qtu.class, schema = "'prepare':f|m|(r:'[0]', r:'[1]'): r:'[2]'", typeReferences = {DeviceIntegrityRequest.class, DeviceIntegrityCompletion.class, DeviceIntegrityTask.class})
public interface DeviceIntegrityService extends ValdiMarshallable {
    DeviceIntegrityTask prepare(DeviceIntegrityRequest request, DeviceIntegrityCompletion completion);

    int pushToMarshaller(ValdiMarshaller marshaller);
}
