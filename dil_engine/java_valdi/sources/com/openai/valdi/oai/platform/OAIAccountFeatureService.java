package com.openai.valdi.oai.platform;

import com.snap.valdi.bridge_observables.BridgeObservable;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.afe0;
import defpackage.prz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\bg\u0018\u00002\u00020\u0001J\u0016\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\u0006\u0010\u0005\u001a\u00020\u0006H&J\u0010\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\nH\u0016¨\u0006\u000b"}, d2 = {"Lcom/openai/valdi/oai/platform/OAIAccountFeatureService;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "observeFeature", "Lcom/snap/valdi/bridge_observables/BridgeObservable;", "", "feature", "Lcom/openai/valdi/oai/platform/OAIAccountFeature;", "pushToMarshaller", "", "marshaller", "Lcom/snap/valdi/utils/ValdiMarshaller;", "modules_oai_platform_services-oai_platform_services_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = afe0.class, schema = "'observeFeature':f|m|(r:'[0]'): g:'[1]'<b@>", typeReferences = {OAIAccountFeature.class, BridgeObservable.class})
public interface OAIAccountFeatureService extends ValdiMarshallable {
    BridgeObservable<Boolean> observeFeature(OAIAccountFeature feature);

    int pushToMarshaller(ValdiMarshaller marshaller);
}
