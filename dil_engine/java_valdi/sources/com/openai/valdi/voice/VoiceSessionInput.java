package com.openai.valdi.voice;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import defpackage.m011;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\b\u0007\u0018\u00002\u00020\u0001B\u001f\b\u0017\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0007\u0010\bR\u001c\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u00030\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\t\u0010\nR\u0016\u0010\u000b\u001a\u00020\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000b\u0010\f¨\u0006\r"}, d2 = {"Lcom/openai/valdi/voice/VoiceSessionInput;", "Lcom/snap/valdi/utils/b;", "", "Lm011;", "messages", "Lcom/openai/valdi/voice/VoiceSessionMode;", "mode", "<init>", "(Ljava/util/List;Lcom/openai/valdi/voice/VoiceSessionMode;)V", "_messages", "Ljava/util/List;", "_mode", "Lcom/openai/valdi/voice/VoiceSessionMode;", "modules_oai_voice_service-oai_voice_service_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'messages':a<r:'[0]'>,'mode':r<e>:'[1]'", typeReferences = {m011.class, VoiceSessionMode.class})
public final class VoiceSessionInput extends b {
    private List<m011> _messages;
    private VoiceSessionMode _mode;

    public VoiceSessionInput(List<m011> list, VoiceSessionMode voiceSessionMode) {
        this._messages = list;
        this._mode = voiceSessionMode;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final VoiceSessionMode get_mode() {
        return this._mode;
    }
}
