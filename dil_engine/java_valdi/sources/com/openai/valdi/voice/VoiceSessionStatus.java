package com.openai.valdi.voice;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Connecting':0,'Listening':1,'Thinking':2,'Speaking':3", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0006"}, d2 = {"Lcom/openai/valdi/voice/VoiceSessionStatus;", "", "Connecting", "Listening", "Thinking", "Speaking", "modules_oai_voice_service-oai_voice_service_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class VoiceSessionStatus {
    public static final VoiceSessionStatus Connecting;
    public static final VoiceSessionStatus Listening;
    public static final VoiceSessionStatus Speaking;
    public static final VoiceSessionStatus Thinking;
    public static final /* synthetic */ VoiceSessionStatus[] a;

    static {
        VoiceSessionStatus voiceSessionStatus = new VoiceSessionStatus("Connecting", 0);
        Connecting = voiceSessionStatus;
        VoiceSessionStatus voiceSessionStatus2 = new VoiceSessionStatus("Listening", 1);
        Listening = voiceSessionStatus2;
        VoiceSessionStatus voiceSessionStatus3 = new VoiceSessionStatus("Thinking", 2);
        Thinking = voiceSessionStatus3;
        VoiceSessionStatus voiceSessionStatus4 = new VoiceSessionStatus("Speaking", 3);
        Speaking = voiceSessionStatus4;
        a = new VoiceSessionStatus[]{voiceSessionStatus, voiceSessionStatus2, voiceSessionStatus3, voiceSessionStatus4};
    }

    public static VoiceSessionStatus valueOf(String str) {
        return (VoiceSessionStatus) Enum.valueOf(VoiceSessionStatus.class, str);
    }

    public static VoiceSessionStatus[] values() {
        return (VoiceSessionStatus[]) a.clone();
    }
}
