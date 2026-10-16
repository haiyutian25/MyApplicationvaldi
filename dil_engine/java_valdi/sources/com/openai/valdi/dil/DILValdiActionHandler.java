package com.openai.valdi.dil;

import com.snap.modules.dil_core.DILCopyContentResponse;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.prz0;
import defpackage.ygs;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\bg\u0018\u00002\u00020\u0001J\u0017\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0003\u001a\u00020\u0002H&¢\u0006\u0004\b\u0005\u0010\u0006J\u0017\u0010\b\u001a\u00020\u00042\u0006\u0010\u0003\u001a\u00020\u0007H&¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\u000b\u001a\u00020\u00042\u0006\u0010\u0003\u001a\u00020\nH&¢\u0006\u0004\b\u000b\u0010\fJ\u000f\u0010\r\u001a\u00020\u0004H&¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\u00020\u00042\u0006\u0010\u0010\u001a\u00020\u000fH&¢\u0006\u0004\b\u0011\u0010\u0012J\u0017\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u0013H\u0016¢\u0006\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"Lcom/openai/valdi/dil/DILValdiActionHandler;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "Lcom/openai/valdi/dil/DILInteractionAction;", "action", "Lruy0;", "interaction", "(Lcom/openai/valdi/dil/DILInteractionAction;)V", "Lcom/openai/valdi/dil/DILRenderFailureAction;", "renderFailure", "(Lcom/openai/valdi/dil/DILRenderFailureAction;)V", "Lcom/openai/valdi/dil/DILRenderWarningAction;", "renderWarning", "(Lcom/openai/valdi/dil/DILRenderWarningAction;)V", "textSelectionCopyCompleted", "()V", "Lcom/snap/modules/dil_core/DILCopyContentResponse;", "response", "copyContentResponse", "(Lcom/snap/modules/dil_core/DILCopyContentResponse;)V", "Lcom/snap/valdi/utils/ValdiMarshaller;", "marshaller", "", "pushToMarshaller", "(Lcom/snap/valdi/utils/ValdiMarshaller;)I", "modules_dil_widgets-dil_widgets_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = ygs.class, schema = "'interaction':f|m|(r:'[0]'),'renderFailure':f|m|(r:'[1]'),'renderWarning':f|m|(r:'[2]'),'textSelectionCopyCompleted':f|m|(),'copyContentResponse':f|m|(r:'[3]')", typeReferences = {DILInteractionAction.class, DILRenderFailureAction.class, DILRenderWarningAction.class, DILCopyContentResponse.class})
public interface DILValdiActionHandler extends ValdiMarshallable {
    void copyContentResponse(DILCopyContentResponse response);

    void interaction(DILInteractionAction action);

    int pushToMarshaller(ValdiMarshaller marshaller);

    void renderFailure(DILRenderFailureAction action);

    void renderWarning(DILRenderWarningAction action);

    void textSelectionCopyCompleted();
}
