package com.openai.valdi.oai.platform;

import com.snap.valdi.bridge_observables.BridgeObservable;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.prz0;
import defpackage.xge0;
import defpackage.zge0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\bg\u0018\u00002\u00020\u0001J\u0015\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002H&¢\u0006\u0004\b\u0004\u0010\u0005J\u000f\u0010\u0007\u001a\u00020\u0006H&¢\u0006\u0004\b\u0007\u0010\bJ\u001d\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000b0\u00022\u0006\u0010\n\u001a\u00020\tH&¢\u0006\u0004\b\f\u0010\rJ\u0017\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u000f\u001a\u00020\u000eH\u0016¢\u0006\u0004\b\u0011\u0010\u0012¨\u0006\u0013"}, d2 = {"Lcom/openai/valdi/oai/platform/OAIPetCatalogDataSource;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "Lcom/snap/valdi/bridge_observables/BridgeObservable;", "Lzge0;", "observeCatalog", "()Lcom/snap/valdi/bridge_observables/BridgeObservable;", "Lruy0;", "refresh", "()V", "", "petId", "", "selectPet", "(Ljava/lang/String;)Lcom/snap/valdi/bridge_observables/BridgeObservable;", "Lcom/snap/valdi/utils/ValdiMarshaller;", "marshaller", "", "pushToMarshaller", "(Lcom/snap/valdi/utils/ValdiMarshaller;)I", "modules_oai_data_sources-oai_data_sources_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = xge0.class, schema = "'observeCatalog':f|m|(): g:'[0]'<r:'[1]'>,'refresh':f|m|(),'selectPet':f|m|(s): g:'[0]'<b@>", typeReferences = {BridgeObservable.class, zge0.class})
public interface OAIPetCatalogDataSource extends ValdiMarshallable {
    BridgeObservable<zge0> observeCatalog();

    int pushToMarshaller(ValdiMarshaller marshaller);

    void refresh();

    BridgeObservable<Boolean> selectPet(String petId);
}
