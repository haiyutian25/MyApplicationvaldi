package com.openai.valdi.chatgpt.wallet;

import com.openai.valdi.chatgpt.wallet.core.WalletConnectionOutcome;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.gvz0;
import defpackage.id21;
import defpackage.prz0;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0004\bg\u0018\u00002\u00020\u0001J\u000f\u0010\u0003\u001a\u00020\u0002H&¢\u0006\u0004\b\u0003\u0010\u0004J#\u0010\b\u001a\u00020\u00022\u0012\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00020\u0005H\u0017¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\r\u001a\u00020\f2\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\r\u0010\u000eR\u0016\u0010\u0012\u001a\u0004\u0018\u00010\u000f8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0010\u0010\u0011¨\u0006\u0013"}, d2 = {"Lcom/openai/valdi/chatgpt/wallet/WalletPresentationHost;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "Lruy0;", "connect", "()V", "Lkotlin/Function1;", "Lcom/openai/valdi/chatgpt/wallet/core/WalletConnectionOutcome;", "completion", "connectWithResult", "(Lkotlin/jvm/functions/Function1;)V", "Lcom/snap/valdi/utils/ValdiMarshaller;", "marshaller", "", "pushToMarshaller", "(Lcom/snap/valdi/utils/ValdiMarshaller;)I", "", "getSupportsConnectionResult", "()Ljava/lang/Boolean;", "supportsConnectionResult", "modules_chatgpt_wallet-chatgpt_wallet_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = id21.class, schema = "'connect':f|m|(),'supportsConnectionResult':b@?,'connectWithResult':f?|m|(f(r<e>:'[0]'))", typeReferences = {WalletConnectionOutcome.class})
public interface WalletPresentationHost extends ValdiMarshallable {
    void connect();

    @gvz0
    void connectWithResult(Function1 completion);

    Boolean getSupportsConnectionResult();

    int pushToMarshaller(ValdiMarshaller marshaller);
}
