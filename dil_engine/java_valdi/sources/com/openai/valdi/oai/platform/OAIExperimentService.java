package com.openai.valdi.oai.platform;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.kge0;
import defpackage.prz0;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\bg\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0003H&J\u0010\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\u0003H&J\u0018\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\tH&J\u0018\u0010\r\u001a\u00020\u000e2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u000eH&J\u0018\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u000eH&J\u0018\u0010\u0010\u001a\u00020\u00032\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u0003H&J$\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00030\u00122\u0006\u0010\n\u001a\u00020\u000b2\f\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u00030\u0012H&J\u0010\u0010\u0013\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u0014H&J\u0010\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0018H\u0016¨\u0006\u0019"}, d2 = {"Lcom/openai/valdi/oai/platform/OAIExperimentService;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "getDynamicConfigJson", "", "configName", "getLayer", "Lcom/openai/valdi/oai/platform/OAIExperimentLayer;", "layerName", "getLayerBoolean", "", "key", "Lcom/openai/valdi/oai/platform/OAIExperimentLayerParameterKey;", "defaultValue", "getLayerDouble", "", "getLayerInteger", "getLayerString", "getLayerStringList", "", "isFeatureFlagEnabled", "Lcom/openai/valdi/oai/platform/OAIFeatureFlagKey;", "pushToMarshaller", "", "marshaller", "Lcom/snap/valdi/utils/ValdiMarshaller;", "modules_oai_platform_services-oai_platform_services_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = kge0.class, schema = "'isFeatureFlagEnabled':f|m|(r:'[0]'): b,'getLayerBoolean':f|m|(r:'[1]', b): b,'getLayerInteger':f|m|(r:'[1]', d): d,'getLayerDouble':f|m|(r:'[1]', d): d,'getLayerString':f|m|(r:'[1]', s): s,'getLayerStringList':f|m|(r:'[1]', a<s>): a<s>,'getLayer':f|m|(s): r:'[2]','getDynamicConfigJson':f|m|(s): s", typeReferences = {OAIFeatureFlagKey.class, OAIExperimentLayerParameterKey.class, OAIExperimentLayer.class})
public interface OAIExperimentService extends ValdiMarshallable {
    String getDynamicConfigJson(String configName);

    OAIExperimentLayer getLayer(String layerName);

    boolean getLayerBoolean(OAIExperimentLayerParameterKey key, boolean defaultValue);

    double getLayerDouble(OAIExperimentLayerParameterKey key, double defaultValue);

    double getLayerInteger(OAIExperimentLayerParameterKey key, double defaultValue);

    String getLayerString(OAIExperimentLayerParameterKey key, String defaultValue);

    List<String> getLayerStringList(OAIExperimentLayerParameterKey key, List<String> defaultValue);

    boolean isFeatureFlagEnabled(OAIFeatureFlagKey key);

    int pushToMarshaller(ValdiMarshaller marshaller);
}
