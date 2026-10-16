package com.openai.valdi.oai.platform;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.fhe0;
import defpackage.prz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\bg\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H&J\u0010\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016¨\u0006\f"}, d2 = {"Lcom/openai/valdi/oai/platform/OAISpeechSynthesisService;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "createSession", "Lcom/openai/valdi/oai/platform/OAISpeechSynthesisSession;", "source", "Lcom/openai/valdi/oai/platform/OAISpeechSynthesisSource;", "observer", "Lcom/openai/valdi/oai/platform/OAISpeechSynthesisObserver;", "pushToMarshaller", "", "marshaller", "Lcom/snap/valdi/utils/ValdiMarshaller;", "modules_oai_platform_services-oai_platform_services_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = fhe0.class, schema = "'createSession':f|m|(r:'[0]', r:'[1]'): r:'[2]'", typeReferences = {OAISpeechSynthesisSource.class, OAISpeechSynthesisObserver.class, OAISpeechSynthesisSession.class})
public interface OAISpeechSynthesisService extends ValdiMarshallable {
    OAISpeechSynthesisSession createSession(OAISpeechSynthesisSource source, OAISpeechSynthesisObserver observer);

    int pushToMarshaller(ValdiMarshaller marshaller);
}
