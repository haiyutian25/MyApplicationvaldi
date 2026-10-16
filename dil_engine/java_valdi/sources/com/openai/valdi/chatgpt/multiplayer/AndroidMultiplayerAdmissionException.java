package com.openai.valdi.chatgpt.multiplayer;

import com.snap.valdi.callable.ValdiFunctionNative;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u000e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0000\u0018\u00002\u00060\u0001j\u0002`\u0002¨\u0006\u0003"}, d2 = {"Lcom/openai/valdi/chatgpt/multiplayer/AndroidMultiplayerAdmissionException;", "Ljava/lang/IllegalArgumentException;", "Lkotlin/IllegalArgumentException;", "modules_chatgpt_multiplayer-chatgpt_multiplayer_android_impl_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class AndroidMultiplayerAdmissionException extends IllegalArgumentException {
    public final OAIMultiplayerConnectionFailureReason a;

    public AndroidMultiplayerAdmissionException(String str) {
        this(str, OAIMultiplayerConnectionFailureReason.INVALID_RESPONSE);
    }

    public AndroidMultiplayerAdmissionException(String str, OAIMultiplayerConnectionFailureReason oAIMultiplayerConnectionFailureReason) {
        super(str);
        this.a = oAIMultiplayerConnectionFailureReason;
    }
}
