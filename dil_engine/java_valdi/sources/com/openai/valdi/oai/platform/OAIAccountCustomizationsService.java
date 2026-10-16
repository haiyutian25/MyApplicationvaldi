package com.openai.valdi.oai.platform;

import com.snap.valdi.bridge_observables.BridgeObservable;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.promise.Promise;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.ahe0;
import defpackage.prz0;
import defpackage.vee0;
import defpackage.wee0;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\bg\u0018\u00002\u00020\u0001J\u0015\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002H&¢\u0006\u0004\b\u0004\u0010\u0005J\u001d\u0010\n\u001a\b\u0012\u0004\u0012\u00020\t0\b2\u0006\u0010\u0007\u001a\u00020\u0006H&¢\u0006\u0004\b\n\u0010\u000bJ1\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\t0\b2\f\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u00060\f2\f\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u000e0\fH&¢\u0006\u0004\b\u0010\u0010\u0011J\u001d\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\t0\b2\u0006\u0010\u0012\u001a\u00020\tH&¢\u0006\u0004\b\u0013\u0010\u0014J\u0015\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\t0\bH&¢\u0006\u0004\b\u0015\u0010\u0016J\u0017\u0010\u001a\u001a\u00020\u00192\u0006\u0010\u0018\u001a\u00020\u0017H\u0016¢\u0006\u0004\b\u001a\u0010\u001b¨\u0006\u001c"}, d2 = {"Lcom/openai/valdi/oai/platform/OAIAccountCustomizationsService;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "Lcom/snap/valdi/bridge_observables/BridgeObservable;", "Lwee0;", "observeCustomizations", "()Lcom/snap/valdi/bridge_observables/BridgeObservable;", "Lcom/openai/valdi/oai/platform/OAICustomizationUpdate;", "update", "Lcom/snap/valdi/promise/Promise;", "", "updateCustomization", "(Lcom/openai/valdi/oai/platform/OAICustomizationUpdate;)Lcom/snap/valdi/promise/Promise;", "", "fields", "Lahe0;", "selectedPersonalityTraits", "updateCustomizations", "(Ljava/util/List;Ljava/util/List;)Lcom/snap/valdi/promise/Promise;", "enabled", "setCustomizationsEnabled", "(Z)Lcom/snap/valdi/promise/Promise;", "refresh", "()Lcom/snap/valdi/promise/Promise;", "Lcom/snap/valdi/utils/ValdiMarshaller;", "marshaller", "", "pushToMarshaller", "(Lcom/snap/valdi/utils/ValdiMarshaller;)I", "modules_oai_platform_services-oai_platform_services_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = vee0.class, schema = "'observeCustomizations':f|m|(): g:'[0]'<r:'[1]'>,'updateCustomization':f|m|(r:'[2]'): p<b@>,'updateCustomizations':f|m|(a<r:'[2]'>, a<r:'[3]'>): p<b@>,'setCustomizationsEnabled':f|m|(b): p<b@>,'refresh':f|m|(): p<b@>", typeReferences = {BridgeObservable.class, wee0.class, OAICustomizationUpdate.class, ahe0.class})
public interface OAIAccountCustomizationsService extends ValdiMarshallable {
    BridgeObservable<wee0> observeCustomizations();

    int pushToMarshaller(ValdiMarshaller marshaller);

    Promise<Boolean> refresh();

    Promise<Boolean> setCustomizationsEnabled(boolean enabled);

    Promise<Boolean> updateCustomization(OAICustomizationUpdate update);

    Promise<Boolean> updateCustomizations(List<OAICustomizationUpdate> fields, List<ahe0> selectedPersonalityTraits);
}
