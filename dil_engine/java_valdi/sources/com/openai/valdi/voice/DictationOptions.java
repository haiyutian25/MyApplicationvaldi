package com.openai.valdi.voice;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\b\u0007\u0018\u00002\u00020\u0001B!\b\u0017\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007R\u0018\u0010\b\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\b\u0010\tR\u0018\u0010\n\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\n\u0010\u000b¨\u0006\f"}, d2 = {"Lcom/openai/valdi/voice/DictationOptions;", "Lcom/snap/valdi/utils/b;", "", "language", "Lcom/openai/valdi/voice/DictationSpeakingExerciseContext;", "context", "<init>", "(Ljava/lang/String;Lcom/openai/valdi/voice/DictationSpeakingExerciseContext;)V", "_language", "Ljava/lang/String;", "_context", "Lcom/openai/valdi/voice/DictationSpeakingExerciseContext;", "modules_oai_voice_service-oai_voice_service_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'language':s?,'context':r?:'[0]'", typeReferences = {DictationSpeakingExerciseContext.class})
public final class DictationOptions extends b {
    private DictationSpeakingExerciseContext _context;
    private String _language;

    public DictationOptions(String str, DictationSpeakingExerciseContext dictationSpeakingExerciseContext) {
        this._language = str;
        this._context = dictationSpeakingExerciseContext;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final DictationSpeakingExerciseContext get_context() {
        return this._context;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final String get_language() {
        return this._language;
    }
}
