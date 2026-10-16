package com.openai.valdi.ui.safearea;

import com.snap.valdi.bridge_observables.BridgeObservable;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.gwz0;
import defpackage.prz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\bg\u0018\u00002\u00020\u0001J\u000e\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003H&J\u0010\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\bH\u0016¨\u0006\t"}, d2 = {"Lcom/openai/valdi/ui/safearea/ValdiRootSafeArea;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "observeInsets", "Lcom/snap/valdi/bridge_observables/BridgeObservable;", "Lcom/openai/valdi/ui/safearea/ValdiRootSafeAreaInsets;", "pushToMarshaller", "", "marshaller", "Lcom/snap/valdi/utils/ValdiMarshaller;", "modules_valdi_root_safe_area-valdi_root_safe_area_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = gwz0.class, schema = "'observeInsets':f|m|(): g:'[0]'<r:'[1]'>", typeReferences = {BridgeObservable.class, ValdiRootSafeAreaInsets.class})
public interface ValdiRootSafeArea extends ValdiMarshallable {
    BridgeObservable<ValdiRootSafeAreaInsets> observeInsets();

    int pushToMarshaller(ValdiMarshaller marshaller);
}
