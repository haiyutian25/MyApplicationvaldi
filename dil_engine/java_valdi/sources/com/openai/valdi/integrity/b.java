package com.openai.valdi.integrity;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.util.Base64;
import com.google.android.gms.common.api.ApiException;
import com.google.android.play.core.integrity.StandardIntegrityException;
import com.snap.valdi.utils.ValdiMarshaller;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.CookieManager;
import java.net.HttpCookie;
import java.net.HttpURLConnection;
import java.net.URI;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;
import org.json.JSONObject;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
public final class b implements DeviceIntegrityService {
    public final Context a;
    public final Handler b = new Handler(Looper.getMainLooper());
    public final Object c = new Object();
    public volatile ew31 d;

    public b(Context context) {
        this.a = context;
    }

    public static String a(DeviceIntegrityRequest deviceIntegrityRequest, URI uri, String str, String str2, CookieManager cookieManager, c cVar) throws DeviceIntegrityPreparationException {
        String strOptString = c(uri, "/backend-api/sentinel/chat-requirements", deviceIntegrityRequest, str, str2, new JSONObject(), cookieManager, cVar).optString("token", "");
        if (s0v0.l0(strOptString)) {
            throw new DeviceIntegrityPreparationException("ChatGPT returned invalid Android device-verification requirements.");
        }
        return strOptString;
    }

    public static JSONObject c(URI uri, String str, DeviceIntegrityRequest deviceIntegrityRequest, String str2, String str3, JSONObject jSONObject, CookieManager cookieManager, c cVar) throws DeviceIntegrityCancelledException {
        cVar.b();
        HttpURLConnection httpURLConnection = (HttpURLConnection) uri.resolve(str).toURL().openConnection();
        AtomicReference atomicReference = cVar.b;
        atomicReference.set(httpURLConnection);
        if (cVar.a.get()) {
            HttpURLConnection httpURLConnection2 = (HttpURLConnection) atomicReference.getAndSet(null);
            if (httpURLConnection2 != null) {
                httpURLConnection2.disconnect();
            }
            throw new DeviceIntegrityCancelledException();
        }
        try {
            httpURLConnection.setConnectTimeout(30000);
            httpURLConnection.setReadTimeout(30000);
            httpURLConnection.setInstanceFollowRedirects(false);
            httpURLConnection.setRequestMethod("POST");
            httpURLConnection.setDoOutput(true);
            httpURLConnection.setRequestProperty("Accept", "application/json");
            httpURLConnection.setRequestProperty("Content-Type", "application/json");
            httpURLConnection.setRequestProperty("Authorization", "Bearer " + deviceIntegrityRequest.get_accessToken());
            httpURLConnection.setRequestProperty("ChatGPT-Account-Id", deviceIntegrityRequest.get_accountId());
            httpURLConnection.setRequestProperty("OAI-Client-Type", "android");
            httpURLConnection.setRequestProperty("OAI-Device-Id", str2);
            httpURLConnection.setRequestProperty("OAI-Package-Name", "com.openai.chatgpt.internal");
            httpURLConnection.setRequestProperty("User-Agent", str3);
            OutputStream outputStream = httpURLConnection.getOutputStream();
            try {
                outputStream.write(jSONObject.toString().getBytes(jae.a));
                outputStream.close();
                int responseCode = httpURLConnection.getResponseCode();
                if (200 > responseCode || responseCode >= 300) {
                    InputStream errorStream = httpURLConnection.getErrorStream();
                    if (errorStream != null) {
                        errorStream.close();
                    }
                    throw new DeviceIntegrityHttpException(responseCode);
                }
                if (str.equals("/backend-api/playintegrity")) {
                    Set<Map.Entry<String, List<String>>> setEntrySet = httpURLConnection.getHeaderFields().entrySet();
                    ArrayList arrayList = new ArrayList();
                    for (Object obj : setEntrySet) {
                        String str4 = (String) ((Map.Entry) obj).getKey();
                        if (str4 != null && str4.equalsIgnoreCase("Set-Cookie")) {
                            arrayList.add(obj);
                        }
                    }
                    ArrayList arrayList2 = new ArrayList();
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        yix yixVar = (List) ((Map.Entry) it.next()).getValue();
                        if (yixVar == null) {
                            yixVar = yix.a;
                        }
                        v8m.D0(arrayList2, (Iterable) yixVar);
                    }
                    Iterator it2 = fvd.t(uri, arrayList2).iterator();
                    while (it2.hasNext()) {
                        cookieManager.getCookieStore().add(uri, (HttpCookie) it2.next());
                    }
                }
                InputStream inputStream = httpURLConnection.getInputStream();
                try {
                    ExecutorService executorService = d.a;
                    ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                    byte[] bArr = new byte[8192];
                    while (true) {
                        int i = inputStream.read(bArr);
                        if (i == -1) {
                            byte[] byteArray = byteArrayOutputStream.toByteArray();
                            inputStream.close();
                            cVar.b();
                            JSONObject jSONObject2 = byteArray.length == 0 ? new JSONObject() : new JSONObject(new String(byteArray, jae.a));
                            httpURLConnection.disconnect();
                            cVar.a();
                            return jSONObject2;
                        }
                        if (byteArrayOutputStream.size() + i > 262144) {
                            throw new DeviceIntegrityPreparationException("ChatGPT returned oversized device-verification requirements.");
                        }
                        byteArrayOutputStream.write(bArr, 0, i);
                    }
                } catch (Throwable th) {
                    try {
                        throw th;
                    } catch (Throwable th2) {
                        vdv0.q(inputStream, th);
                        throw th2;
                    }
                }
            } catch (Throwable th3) {
                try {
                    throw th3;
                } catch (Throwable th4) {
                    vdv0.q(outputStream, th3);
                    throw th4;
                }
            }
        } catch (Throwable th5) {
            httpURLConnection.disconnect();
            cVar.a();
            throw th5;
        }
    }

    public final void b(Context context, DeviceIntegrityRequest deviceIntegrityRequest, URI uri, String str, String str2, CookieManager cookieManager, c cVar) throws DeviceIntegrityPreparationException, DeviceIntegrityCancelledException {
        byte[] bArr = new byte[256];
        new SecureRandom().nextBytes(bArr);
        String strEncodeToString = Base64.encodeToString(bArr, 10);
        c(uri, "/backend-api/playintegrity", deviceIntegrityRequest, str, str2, new JSONObject().put("package_name", "com.openai.chatgpt.internal").put("nonce", strEncodeToString).put("integrity_token", e(context, strEncodeToString, cVar)).put("device_id", str), cookieManager, cVar);
    }

    public final ew31 d(Context context, c cVar) {
        ew31 ew31Var = this.d;
        if (ew31Var != null) {
            return ew31Var;
        }
        synchronized (this.c) {
            ew31 ew31Var2 = this.d;
            if (ew31Var2 != null) {
                return ew31Var2;
            }
            cVar.b();
            sv31 sv31VarC = wz51.c(context);
            nw31 nw31VarA = ow31.a();
            nw31VarA.b(4906872596L);
            ew31 ew31Var3 = (ew31) vcq0.i(sv31VarC.a(nw31VarA.a()), 30000L, TimeUnit.MILLISECONDS);
            cVar.b();
            this.d = ew31Var3;
            return ew31Var3;
        }
    }

    public final String e(Context context, String str, c cVar) throws DeviceIntegrityPreparationException, DeviceIntegrityCancelledException {
        dw31 dw31Var;
        cVar.b();
        nk01 nk01VarA = rw31.a();
        nk01VarA.a = str;
        rw31 rw31VarF = nk01VarA.f();
        ew31 ew31VarD = d(context, cVar);
        try {
            dw31Var = (dw31) vcq0.i(ew31VarD.a(rw31VarF), 30000L, TimeUnit.MILLISECONDS);
        } catch (ExecutionException e) {
            ExecutorService executorService = d.a;
            Throwable cause = e.getCause() != null ? e.getCause() : e;
            if (!(cause instanceof StandardIntegrityException) || ((ApiException) ((StandardIntegrityException) cause)).a.a != -19) {
                throw e;
            }
            synchronized (this.c) {
                if (this.d == ew31VarD) {
                    this.d = null;
                }
                cVar.b();
                dw31Var = (dw31) vcq0.i(d(context, cVar).a(rw31VarF), 30000L, TimeUnit.MILLISECONDS);
            }
        }
        String str2 = dw31Var.a;
        cVar.b();
        if (s0v0.l0(str2)) {
            throw new DeviceIntegrityPreparationException("Google Play did not return a genuine device-integrity token.");
        }
        return str2;
    }

    @Override // com.openai.valdi.integrity.DeviceIntegrityService
    public final DeviceIntegrityTask prepare(DeviceIntegrityRequest deviceIntegrityRequest, DeviceIntegrityCompletion deviceIntegrityCompletion) {
        c cVar = new c();
        d.a.execute(new a(this, deviceIntegrityRequest, cVar, deviceIntegrityCompletion));
        return cVar;
    }

    @Override // com.openai.valdi.integrity.DeviceIntegrityService
    public final int pushToMarshaller(ValdiMarshaller valdiMarshaller) {
        com.snap.valdi.schema.a aVar = com.snap.valdi.utils.b.a;
        return com.snap.valdi.utils.a.a(DeviceIntegrityService.class, valdiMarshaller, this);
    }
}
