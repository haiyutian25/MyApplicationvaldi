package com.openai.valdi.voice;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'SpeakingExercise':'speaking_exercise'", type = cqz0.b)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0002\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002¨\u0006\u0003"}, d2 = {"Lcom/openai/valdi/voice/DictationContextKind;", "", "SpeakingExercise", "modules_oai_voice_service-oai_voice_service_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class DictationContextKind {
    public static final DictationContextKind SpeakingExercise;
    public static final /* synthetic */ DictationContextKind[] a;

    static {
        DictationContextKind dictationContextKind = new DictationContextKind("SpeakingExercise", 0);
        SpeakingExercise = dictationContextKind;
        a = new DictationContextKind[]{dictationContextKind};
    }

    public static DictationContextKind valueOf(String str) {
        return (DictationContextKind) Enum.valueOf(DictationContextKind.class, str);
    }

    public static DictationContextKind[] values() {
        return (DictationContextKind[]) a.clone();
    }
}
