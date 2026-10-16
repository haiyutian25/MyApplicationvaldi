package com.openai.valdi.integrity;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Build;
import com.google.android.gms.common.api.ApiException;
import com.google.android.play.core.integrity.StandardIntegrityException;
import java.net.CookieHandler;
import java.net.CookieManager;
import java.net.CookiePolicy;
import java.net.HttpCookie;
import java.net.URI;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
public abstract class d {
    public static final ExecutorService a = Executors.newCachedThreadPool();
    public static final Object b = new Object();
    public static final Object c = new Object();

    public static final CookieManager a() {
        synchronized (b) {
            CookieHandler cookieHandler = CookieHandler.getDefault();
            if (cookieHandler instanceof CookieManager) {
                return (CookieManager) cookieHandler;
            }
            if (cookieHandler != null) {
                throw new DeviceIntegrityPreparationException("The Android host does not expose a compatible secure cookie store.");
            }
            CookieManager cookieManager = new CookieManager(null, CookiePolicy.ACCEPT_ORIGINAL_SERVER);
            CookieHandler.setDefault(cookieManager);
            return cookieManager;
        }
    }

    public static final String b() {
        StringBuilder sb = new StringBuilder("ChatGPT/1.2026.209 (Android ");
        sb.append(Build.VERSION.RELEASE);
        sb.append("; ");
        return qg8.r(sb, Build.MODEL, "; build 2620909)");
    }

    public static final String c(Context context) {
        SharedPreferences sharedPreferences = context.getSharedPreferences("oai_device_integrity", 0);
        String string = sharedPreferences.getString("device_id", null);
        if (string != null) {
            return string;
        }
        synchronized (c) {
            String string2 = sharedPreferences.getString("device_id", null);
            if (string2 != null) {
                return string2;
            }
            String string3 = UUID.randomUUID().toString();
            if (sharedPreferences.edit().putString("device_id", string3).commit()) {
                return string3;
            }
            throw new DeviceIntegrityPreparationException("The Android device identity could not be saved.");
        }
    }

    public static final boolean d(CookieManager cookieManager, URI uri) {
        List<HttpCookie> list = cookieManager.getCookieStore().get(uri);
        if ((list instanceof Collection) && list.isEmpty()) {
            return false;
        }
        Iterator<T> it = list.iterator();
        while (it.hasNext()) {
            if (fvd.m(uri, (HttpCookie) it.next())) {
                return true;
            }
        }
        return false;
    }

    public static final String e(Exception exc) {
        boolean z = exc instanceof ExecutionException;
        Exception cause = exc;
        if (z && exc.getCause() != null) {
            cause = exc;
            cause = exc.getCause();
        }
        cause = exc;
        if (cause instanceof StandardIntegrityException) {
            return qg8.o(((ApiException) ((StandardIntegrityException) cause)).a.a, ").", new StringBuilder("Google Play could not verify this Android device ("));
        }
        if (cause instanceof DeviceIntegrityHttpException) {
            return qg8.o(((DeviceIntegrityHttpException) cause).a, ").", new StringBuilder("ChatGPT device verification failed (HTTP "));
        }
        if (!(cause instanceof DeviceIntegrityPreparationException)) {
            return cause instanceof IllegalArgumentException ? "Device integrity requires valid first-party request identity." : "The Android device could not be verified.";
        }
        String message = cause.getMessage();
        return message == null ? "The Android device could not be verified." : message;
    }
}
