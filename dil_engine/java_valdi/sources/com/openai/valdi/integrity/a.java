package com.openai.valdi.integrity;

import android.content.Context;
import android.os.Handler;
import defpackage.a52;
import defpackage.z42;
import io.sentry.r;
import java.net.CookieManager;
import java.net.URI;
import org.json.JSONObject;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
public final class a implements Runnable {
    public final /* synthetic */ b a;
    public final /* synthetic */ DeviceIntegrityRequest b;
    public final /* synthetic */ c c;
    public final /* synthetic */ DeviceIntegrityCompletion d;

    public a(b bVar, DeviceIntegrityRequest deviceIntegrityRequest, c cVar, DeviceIntegrityCompletion deviceIntegrityCompletion) {
        this.a = bVar;
        this.b = deviceIntegrityRequest;
        this.c = cVar;
        this.d = deviceIntegrityCompletion;
    }

    @Override // java.lang.Runnable
    public final void run() throws Throwable {
        c cVar;
        CookieManager cookieManager;
        String str;
        DeviceIntegrityRequest deviceIntegrityRequest;
        URI uri;
        DeviceIntegrityCompletion deviceIntegrityCompletion = this.d;
        DeviceIntegrityRequest deviceIntegrityRequest2 = this.b;
        b bVar = this.a;
        Handler handler = bVar.b;
        c cVar2 = this.c;
        try {
            try {
                Context context = bVar.a;
                try {
                    if (context == null) {
                        throw new DeviceIntegrityPreparationException("No Android application is available for device verification.");
                    }
                    if (!kr80.m(context.getPackageName(), "com.openai.chatgpt.internal")) {
                        throw new DeviceIntegrityPreparationException("Install the official-debug-signed internal Android application to verify this device.");
                    }
                    URI uriV = fvd.v(deviceIntegrityRequest2.get_baseUrl());
                    String strC = d.c(context);
                    String strB = d.b();
                    CookieManager cookieManagerA = d.a();
                    if (d.d(cookieManagerA, uriV)) {
                        cookieManager = cookieManagerA;
                        str = strC;
                        deviceIntegrityRequest = deviceIntegrityRequest2;
                        uri = uriV;
                    } else {
                        bVar.b(context, deviceIntegrityRequest2, uriV, strC, strB, cookieManagerA, cVar2);
                        cookieManager = cookieManagerA;
                        uri = uriV;
                        if (!d.d(cookieManager, uri)) {
                            throw new DeviceIntegrityPreparationException("ChatGPT did not return a valid device-verification cookie.");
                        }
                        str = strC;
                        deviceIntegrityRequest = deviceIntegrityRequest2;
                    }
                    cVar2 = cVar2;
                    String strA = b.a(deviceIntegrityRequest, uri, str, strB, cookieManager, cVar2);
                    String str2 = str;
                    DeviceIntegrityRequest deviceIntegrityRequest3 = deviceIntegrityRequest;
                    handler.post(new rp00(cVar2, new z42(deviceIntegrityCompletion, str2, strB, strA, new JSONObject().put("bot_token", new JSONObject().put("play_integrity_token", bVar.e(context, fvd.j(deviceIntegrityRequest3.get_accountId(), str2, deviceIntegrityRequest3.get_conversationId(), deviceIntegrityRequest3.get_parentMessageId()), cVar2)).put("chat_requirement_token", strA)).toString()), (byte) 2));
                    cVar2.a();
                    return;
                } catch (Exception e) {
                    e = e;
                }
            } catch (Throwable th) {
                th = th;
                Throwable th2 = th;
                cVar.a();
                throw th2;
            }
        } catch (Exception e2) {
            e = e2;
            cVar = cVar2;
        } catch (Throwable th3) {
            th = th3;
            c cVar3 = cVar2;
            Throwable th4 = th;
            cVar3.a();
            throw th4;
        }
        if (!cVar.a.get()) {
            String strE = d.e(e);
            r.y("OAIDeviceIntegrity", "Android device verification failed: ".concat(strE));
            handler.post(new rp00(cVar, new a52((Object) deviceIntegrityCompletion, (Object) strE, (byte) 0), (byte) 2));
        }
        cVar.a();
    }
}
