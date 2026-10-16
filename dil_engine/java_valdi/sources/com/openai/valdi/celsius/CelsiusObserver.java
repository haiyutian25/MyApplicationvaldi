package com.openai.valdi.celsius;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.l4e;
import defpackage.prz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\bg\u0018\u00002\u00020\u0001J\u0017\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0003\u001a\u00020\u0002H&¢\u0006\u0004\b\u0005\u0010\u0006J\u0017\u0010\t\u001a\u00020\u00042\u0006\u0010\b\u001a\u00020\u0007H&¢\u0006\u0004\b\t\u0010\nJ\u000f\u0010\u000b\u001a\u00020\u0004H&¢\u0006\u0004\b\u000b\u0010\fJ\u0017\u0010\u000f\u001a\u00020\u00042\u0006\u0010\u000e\u001a\u00020\rH&¢\u0006\u0004\b\u000f\u0010\u0010J\u0017\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u0012\u001a\u00020\u0011H\u0016¢\u0006\u0004\b\u0014\u0010\u0015¨\u0006\u0016"}, d2 = {"Lcom/openai/valdi/celsius/CelsiusObserver;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "Lcom/openai/valdi/celsius/CelsiusSubscriptionState;", "state", "Lruy0;", "onStateChanged", "(Lcom/openai/valdi/celsius/CelsiusSubscriptionState;)V", "Lcom/openai/valdi/celsius/CelsiusMessageBatch;", "batch", "onMessages", "(Lcom/openai/valdi/celsius/CelsiusMessageBatch;)V", "onInvalidated", "()V", "Lcom/openai/valdi/celsius/CelsiusFailure;", "failure", "onError", "(Lcom/openai/valdi/celsius/CelsiusFailure;)V", "Lcom/snap/valdi/utils/ValdiMarshaller;", "marshaller", "", "pushToMarshaller", "(Lcom/snap/valdi/utils/ValdiMarshaller;)I", "modules_oai_celsius-oai_celsius_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = l4e.class, schema = "'onStateChanged':f|m|(r<e>:'[0]'),'onMessages':f|m|(r:'[1]'),'onInvalidated':f|m|(),'onError':f|m|(r:'[2]')", typeReferences = {CelsiusSubscriptionState.class, CelsiusMessageBatch.class, CelsiusFailure.class})
public interface CelsiusObserver extends ValdiMarshallable {
    void onError(CelsiusFailure failure);

    void onInvalidated();

    void onMessages(CelsiusMessageBatch batch);

    void onStateChanged(CelsiusSubscriptionState state);

    int pushToMarshaller(ValdiMarshaller marshaller);
}
