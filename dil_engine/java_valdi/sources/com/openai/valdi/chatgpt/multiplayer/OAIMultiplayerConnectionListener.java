package com.openai.valdi.chatgpt.multiplayer;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.prz0;
import defpackage.tge0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\bg\u0018\u00002\u00020\u0001J\u000f\u0010\u0003\u001a\u00020\u0002H&¢\u0006\u0004\b\u0003\u0010\u0004J\u0017\u0010\u0007\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0005H&¢\u0006\u0004\b\u0007\u0010\bJ\u0017\u0010\u000b\u001a\u00020\u00022\u0006\u0010\n\u001a\u00020\tH&¢\u0006\u0004\b\u000b\u0010\fJ\u0017\u0010\u000f\u001a\u00020\u00022\u0006\u0010\u000e\u001a\u00020\rH&¢\u0006\u0004\b\u000f\u0010\u0010J\u0017\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u0012\u001a\u00020\u0011H\u0016¢\u0006\u0004\b\u0014\u0010\u0015¨\u0006\u0016"}, d2 = {"Lcom/openai/valdi/chatgpt/multiplayer/OAIMultiplayerConnectionListener;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "Lruy0;", "onOpen", "()V", "", "message", "onMessage", "(Ljava/lang/String;)V", "Lcom/openai/valdi/chatgpt/multiplayer/OAIMultiplayerConnectionClose;", "close", "onClose", "(Lcom/openai/valdi/chatgpt/multiplayer/OAIMultiplayerConnectionClose;)V", "Lcom/openai/valdi/chatgpt/multiplayer/OAIMultiplayerConnectionFailure;", "failure", "onFailure", "(Lcom/openai/valdi/chatgpt/multiplayer/OAIMultiplayerConnectionFailure;)V", "Lcom/snap/valdi/utils/ValdiMarshaller;", "marshaller", "", "pushToMarshaller", "(Lcom/snap/valdi/utils/ValdiMarshaller;)I", "modules_chatgpt_multiplayer-chatgpt_multiplayer_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = tge0.class, schema = "'onOpen':f|m|(),'onMessage':f|m|(s),'onClose':f|m|(r:'[0]'),'onFailure':f|m|(r:'[1]')", typeReferences = {OAIMultiplayerConnectionClose.class, OAIMultiplayerConnectionFailure.class})
public interface OAIMultiplayerConnectionListener extends ValdiMarshallable {
    void onClose(OAIMultiplayerConnectionClose close);

    void onFailure(OAIMultiplayerConnectionFailure failure);

    void onMessage(String message);

    void onOpen();

    int pushToMarshaller(ValdiMarshaller marshaller);
}
