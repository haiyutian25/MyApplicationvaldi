package com.openai.valdi.chatgpt.wallet.core;

import com.snap.valdi.bridge_observables.BridgeObservable;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.promise.Promise;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.gvz0;
import defpackage.mc21;
import defpackage.prz0;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000p\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0006\bg\u0018\u00002\u00020\u0001J\u0015\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002H&¢\u0006\u0004\b\u0004\u0010\u0005J\u001f\u0010\t\u001a\u00020\b2\u000e\u0010\u0007\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00060\u0002H\u0017¢\u0006\u0004\b\t\u0010\nJ!\u0010\r\u001a\u00020\b2\u0006\u0010\f\u001a\u00020\u000b2\b\u0010\u0007\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b\r\u0010\u000eJ\u0015\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u000f0\u0002H\u0017¢\u0006\u0004\b\u0010\u0010\u0005J\u0015\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00110\u0002H\u0017¢\u0006\u0004\b\u0012\u0010\u0005J\u001f\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00140\u00132\b\u0010\u0007\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b\u0015\u0010\u0016J\u000f\u0010\u0017\u001a\u00020\bH&¢\u0006\u0004\b\u0017\u0010\u0018J\u0017\u0010\u001a\u001a\u00020\b2\u0006\u0010\u0019\u001a\u00020\u0006H&¢\u0006\u0004\b\u001a\u0010\u001bJ\u0015\u0010\u001d\u001a\b\u0012\u0004\u0012\u00020\b0\u001cH&¢\u0006\u0004\b\u001d\u0010\u001eJ\u001d\u0010!\u001a\b\u0012\u0004\u0012\u00020\b0\u001c2\u0006\u0010 \u001a\u00020\u001fH&¢\u0006\u0004\b!\u0010\"J\u0017\u0010&\u001a\u00020%2\u0006\u0010$\u001a\u00020#H\u0016¢\u0006\u0004\b&\u0010'R\u0014\u0010+\u001a\u00020(8&X¦\u0004¢\u0006\u0006\u001a\u0004\b)\u0010*R\u0016\u0010/\u001a\u0004\u0018\u00010,8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b-\u0010.R\u0016\u00101\u001a\u0004\u0018\u00010,8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b0\u0010.¨\u00062"}, d2 = {"Lcom/openai/valdi/chatgpt/wallet/core/WalletHostService;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "Lcom/snap/valdi/bridge_observables/BridgeObservable;", "Lnc21;", "observeState", "()Lcom/snap/valdi/bridge_observables/BridgeObservable;", "", "source", "Lruy0;", "setOrbitNameSource", "(Lcom/snap/valdi/bridge_observables/BridgeObservable;)V", "Lcom/openai/valdi/chatgpt/wallet/core/WalletCheckpoint;", "checkpoint", "reportCheckpoint", "(Lcom/openai/valdi/chatgpt/wallet/core/WalletCheckpoint;Ljava/lang/String;)V", "Lvd21;", "observeSummary", "Lyb21;", "observeChatEnrollmentElicitationAction", "Lcom/snap/valdi/promise/Promise;", "Lcom/openai/valdi/chatgpt/wallet/core/WalletRefreshOutcome;", "refreshInventory", "(Ljava/lang/String;)Lcom/snap/valdi/promise/Promise;", "refresh", "()V", "sessionId", "enrollmentDismissed", "(Ljava/lang/String;)V", "Lkotlin/Function0;", "beginEnrollment", "()Lkotlin/jvm/functions/Function0;", "Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollmentHost;", "host", "startEnrollment", "(Lcom/openai/valdi/chatgpt/wallet/core/WalletEnrollmentHost;)Lkotlin/jvm/functions/Function0;", "Lcom/snap/valdi/utils/ValdiMarshaller;", "marshaller", "", "pushToMarshaller", "(Lcom/snap/valdi/utils/ValdiMarshaller;)I", "", "getProviderSourceId", "()D", "providerSourceId", "", "getSupportsCheckpoints", "()Ljava/lang/Boolean;", "supportsCheckpoints", "getSupportsSurfaceModels", "supportsSurfaceModels", "modules_chatgpt_wallet_core-chatgpt_wallet_core_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = mc21.class, schema = "'providerSourceId':d,'observeState':f|m|(): g:'[0]'<r:'[1]'>,'setOrbitNameSource':f?|m|(g:'[0]'<s?>),'supportsCheckpoints':b@?,'reportCheckpoint':f?|m|(r<e>:'[2]', s?),'supportsSurfaceModels':b@?,'observeSummary':f?|m|(): g:'[0]'<r:'[3]'>,'observeChatEnrollmentElicitationAction':f?|m|(): g:'[0]'<r:'[4]'>,'refreshInventory':f?|m|(s?): p<r<e>:'[5]'>,'refresh':f|m|(),'enrollmentDismissed':f|m|(s),'beginEnrollment':f|m|(): f(),'startEnrollment':f|m|(r:'[6]'): f()", typeReferences = {BridgeObservable.class, nc21.class, WalletCheckpoint.class, vd21.class, yb21.class, WalletRefreshOutcome.class, WalletEnrollmentHost.class})
public interface WalletHostService extends ValdiMarshallable {
    Function0 beginEnrollment();

    void enrollmentDismissed(String sessionId);

    double getProviderSourceId();

    Boolean getSupportsCheckpoints();

    Boolean getSupportsSurfaceModels();

    @gvz0
    BridgeObservable<yb21> observeChatEnrollmentElicitationAction();

    BridgeObservable<nc21> observeState();

    @gvz0
    BridgeObservable<vd21> observeSummary();

    int pushToMarshaller(ValdiMarshaller marshaller);

    void refresh();

    @gvz0
    Promise<WalletRefreshOutcome> refreshInventory(String source);

    @gvz0
    void reportCheckpoint(WalletCheckpoint checkpoint, String source);

    @gvz0
    void setOrbitNameSource(BridgeObservable<String> source);

    Function0 startEnrollment(WalletEnrollmentHost host);
}
