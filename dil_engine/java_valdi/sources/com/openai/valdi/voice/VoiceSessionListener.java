package com.openai.valdi.voice;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.ku11;
import defpackage.prz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0006\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\bg\u0018\u00002\u00020\u0001J\u0017\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0003\u001a\u00020\u0002H&¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\u0007\u001a\u00020\u0004H&¢\u0006\u0004\b\u0007\u0010\bJ\u0017\u0010\u000b\u001a\u00020\u00042\u0006\u0010\n\u001a\u00020\tH&¢\u0006\u0004\b\u000b\u0010\fJ\u000f\u0010\r\u001a\u00020\u0004H&¢\u0006\u0004\b\r\u0010\bJ\u0017\u0010\u0010\u001a\u00020\u00042\u0006\u0010\u000f\u001a\u00020\u000eH&¢\u0006\u0004\b\u0010\u0010\u0011J\u0017\u0010\u0014\u001a\u00020\u00042\u0006\u0010\u0013\u001a\u00020\u0012H&¢\u0006\u0004\b\u0014\u0010\u0015J\u0017\u0010\u0017\u001a\u00020\u00042\u0006\u0010\u0016\u001a\u00020\tH&¢\u0006\u0004\b\u0017\u0010\fJ\u0017\u0010\u0018\u001a\u00020\u00042\u0006\u0010\n\u001a\u00020\tH&¢\u0006\u0004\b\u0018\u0010\fJ\u0017\u0010\u001c\u001a\u00020\u001b2\u0006\u0010\u001a\u001a\u00020\u0019H\u0016¢\u0006\u0004\b\u001c\u0010\u001d¨\u0006\u001e"}, d2 = {"Lcom/openai/valdi/voice/VoiceSessionListener;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "", "level", "Lruy0;", "onAudioLevel", "(D)V", "onAssistantTranscriptComplete", "()V", "", "delta", "onAssistantTranscriptDelta", "(Ljava/lang/String;)V", "onEnded", "Lcom/openai/valdi/voice/VoiceFailure;", "error", "onError", "(Lcom/openai/valdi/voice/VoiceFailure;)V", "Lcom/openai/valdi/voice/VoiceSessionStatus;", "status", "onStatusChange", "(Lcom/openai/valdi/voice/VoiceSessionStatus;)V", "transcript", "onUserTranscript", "onUserTranscriptDelta", "Lcom/snap/valdi/utils/ValdiMarshaller;", "marshaller", "", "pushToMarshaller", "(Lcom/snap/valdi/utils/ValdiMarshaller;)I", "modules_oai_voice_service-oai_voice_service_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = ku11.class, schema = "'onAudioLevel':f|m|(d),'onAssistantTranscriptComplete':f|m|(),'onAssistantTranscriptDelta':f|m|(s),'onEnded':f|m|(),'onError':f|m|(r:'[0]'),'onStatusChange':f|m|(r<e>:'[1]'),'onUserTranscript':f|m|(s),'onUserTranscriptDelta':f|m|(s)", typeReferences = {VoiceFailure.class, VoiceSessionStatus.class})
public interface VoiceSessionListener extends ValdiMarshallable {
    void onAssistantTranscriptComplete();

    void onAssistantTranscriptDelta(String delta);

    void onAudioLevel(double level);

    void onEnded();

    void onError(VoiceFailure error);

    void onStatusChange(VoiceSessionStatus status);

    void onUserTranscript(String transcript);

    void onUserTranscriptDelta(String delta);

    int pushToMarshaller(ValdiMarshaller marshaller);
}
