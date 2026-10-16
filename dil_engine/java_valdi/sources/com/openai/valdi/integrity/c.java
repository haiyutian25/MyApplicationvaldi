package com.openai.valdi.integrity;

import com.snap.valdi.utils.ValdiMarshaller;
import java.net.HttpURLConnection;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
public final class c implements DeviceIntegrityTask {
    public final AtomicBoolean a = new AtomicBoolean(false);
    public final AtomicReference b = new AtomicReference(null);

    public final void a() {
        this.b.set(null);
    }

    public final void b() throws DeviceIntegrityCancelledException {
        if (this.a.get()) {
            throw new DeviceIntegrityCancelledException();
        }
    }

    @Override // com.openai.valdi.integrity.DeviceIntegrityTask
    public final void cancel() {
        HttpURLConnection httpURLConnection;
        if (!this.a.compareAndSet(false, true) || (httpURLConnection = (HttpURLConnection) this.b.getAndSet(null)) == null) {
            return;
        }
        httpURLConnection.disconnect();
    }

    @Override // com.openai.valdi.integrity.DeviceIntegrityTask
    public final int pushToMarshaller(ValdiMarshaller valdiMarshaller) {
        com.snap.valdi.schema.a aVar = com.snap.valdi.utils.b.a;
        return com.snap.valdi.utils.a.a(DeviceIntegrityTask.class, valdiMarshaller, this);
    }
}
