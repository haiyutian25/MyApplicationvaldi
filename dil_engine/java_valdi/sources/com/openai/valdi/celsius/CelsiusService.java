package com.openai.valdi.celsius;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.foundation.Cancelable;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.m4e;
import defpackage.prz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\bg\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H\u0016J\u0018\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH&¨\u0006\f"}, d2 = {"Lcom/openai/valdi/celsius/CelsiusService;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "pushToMarshaller", "", "marshaller", "Lcom/snap/valdi/utils/ValdiMarshaller;", "subscribe", "Lcom/snap/valdi/foundation/Cancelable;", "topicId", "", "observer", "Lcom/openai/valdi/celsius/CelsiusObserver;", "modules_oai_celsius-oai_celsius_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = m4e.class, schema = "'subscribe':f|m|(s, r:'[0]'): r:'[1]'", typeReferences = {CelsiusObserver.class, Cancelable.class})
public interface CelsiusService extends ValdiMarshallable {
    int pushToMarshaller(ValdiMarshaller marshaller);

    Cancelable subscribe(String topicId, CelsiusObserver observer);
}
