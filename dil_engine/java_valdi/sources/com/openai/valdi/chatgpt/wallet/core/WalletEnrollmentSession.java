package com.openai.valdi.chatgpt.wallet.core;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.promise.Promise;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.lc21;
import defpackage.prz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\bg\u0018\u00002\u00020\u0001J\u001e\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0006\u001a\u00020\u0004H&J\u0010\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\nH\u0016J\u000e\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\f0\u0003H&¨\u0006\r"}, d2 = {"Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollmentSession;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "callTool", "Lcom/snap/valdi/promise/Promise;", "", "name", "argsJson", "pushToMarshaller", "", "marshaller", "Lcom/snap/valdi/utils/ValdiMarshaller;", "waitUntilFinished", "Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollmentCompletion;", "modules_chatgpt_wallet_core-chatgpt_wallet_core_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = lc21.class, schema = "'callTool':f|m|(s, s): p<s>,'waitUntilFinished':f|m|(): p<r:'[0]'>", typeReferences = {WalletEnrollmentCompletion.class})
public interface WalletEnrollmentSession extends ValdiMarshallable {
    Promise<String> callTool(String name, String argsJson);

    int pushToMarshaller(ValdiMarshaller marshaller);

    Promise<WalletEnrollmentCompletion> waitUntilFinished();
}
