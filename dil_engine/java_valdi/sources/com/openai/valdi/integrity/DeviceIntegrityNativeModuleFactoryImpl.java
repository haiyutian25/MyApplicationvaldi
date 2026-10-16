package com.openai.valdi.integrity;

import android.content.Context;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.context.ValdiContext;
import defpackage.doz0;
import defpackage.owc0;
import defpackage.ptu;
import defpackage.pwc0;
import defpackage.qwz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0007\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u000f\u0010\u0005\u001a\u00020\u0004H\u0016¢\u0006\u0004\b\u0005\u0010\u0006¨\u0006\u0007"}, d2 = {"Lcom/openai/valdi/integrity/DeviceIntegrityNativeModuleFactoryImpl;", "Lpwc0;", "<init>", "()V", "Lowc0;", "onLoadModule", "()Lowc0;", "modules_oai_device_integrity-oai_device_integrity_android_impl_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class DeviceIntegrityNativeModuleFactoryImpl extends pwc0 {
    @Override // defpackage.hqz0
    public owc0 onLoadModule() {
        qwz0 runtime;
        Context context;
        ValdiContext.Companion.getClass();
        ValdiContext valdiContextA = doz0.a();
        return new ptu((valdiContextA == null || (runtime = valdiContextA.getRuntime()) == null || (context = runtime.b) == null) ? null : context.getApplicationContext());
    }
}
