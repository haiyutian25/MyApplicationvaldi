package com.openai.valdi.filesaver;

import android.content.ClipData;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.context.ValdiContext;
import defpackage.a2c0;
import defpackage.doz0;
import defpackage.qwz0;
import defpackage.sxc0;
import defpackage.txc0;
import defpackage.y1c0;
import defpackage.z1c0;
import io.sentry.r;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import kotlin.Metadata;
import kotlin.jvm.functions.Function2;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0007\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J5\u0010\u000b\u001a\u00020\t2\u0006\u0010\u0005\u001a\u00020\u00042\u001c\u0010\n\u001a\u0018\u0012\u0006\u0012\u0004\u0018\u00010\u0007\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\t0\u0006H\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u001f\u0010\u0010\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\r2\u0006\u0010\u000f\u001a\u00020\bH\u0002¢\u0006\u0004\b\u0010\u0010\u0011J\u000f\u0010\u0013\u001a\u00020\u0012H\u0016¢\u0006\u0004\b\u0013\u0010\u0014¨\u0006\u0015"}, d2 = {"Lcom/openai/valdi/filesaver/MobileFileSaverNativeModuleFactoryImpl;", "Ltxc0;", "<init>", "()V", "Lcom/openai/valdi/filesaver/MobileFileSaveRequest;", "request", "Lkotlin/Function2;", "Ly1c0;", "", "Lruy0;", "callback", "saveFile", "(Lcom/openai/valdi/filesaver/MobileFileSaveRequest;Lkotlin/jvm/functions/Function2;)V", "Ljava/io/File;", "directory", "filename", "uniqueDestinationFile", "(Ljava/io/File;Ljava/lang/String;)Ljava/io/File;", "Lsxc0;", "onLoadModule", "()Lsxc0;", "modules_mobile_file_saver-mobile_file_saver_android_impl_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class MobileFileSaverNativeModuleFactoryImpl extends txc0 {
    /* JADX INFO: Access modifiers changed from: private */
    public final void saveFile(MobileFileSaveRequest request, Function2 callback) {
        ruy0 ruy0Var;
        qwz0 runtime;
        ValdiContext.Companion.getClass();
        ValdiContext valdiContextA = doz0.a();
        Context context = (valdiContextA == null || (runtime = valdiContextA.getRuntime()) == null) ? null : runtime.b;
        if (context == null) {
            callback.invoke((Object) null, "Unable to save file without a Valdi Android context");
            return;
        }
        try {
            if (Build.VERSION.SDK_INT >= 29) {
                ContentResolver contentResolver = context.getContentResolver();
                ContentValues contentValues = new ContentValues();
                contentValues.put("_display_name", request.get_filename());
                contentValues.put("mime_type", request.get_mimeType());
                contentValues.put("relative_path", Environment.DIRECTORY_DOWNLOADS);
                Uri uriInsert = contentResolver.insert(yy1.b(), contentValues);
                if (uriInsert == null) {
                    throw new IllegalStateException("Unable to create destination for " + request.get_filename());
                }
                OutputStream outputStreamOpenOutputStream = contentResolver.openOutputStream(uriInsert);
                if (outputStreamOpenOutputStream != null) {
                    try {
                        outputStreamOpenOutputStream.write(request.get_bytes());
                        outputStreamOpenOutputStream.close();
                        ruy0Var = ruy0.a;
                    } catch (Throwable th) {
                        try {
                            throw th;
                        } catch (Throwable th2) {
                            vdv0.q(outputStreamOpenOutputStream, th);
                            throw th2;
                        }
                    }
                } else {
                    ruy0Var = null;
                }
                if (ruy0Var == null) {
                    throw new IllegalStateException("Unable to write " + request.get_filename());
                }
                Intent intent = new Intent("android.intent.action.SEND");
                intent.setType(request.get_mimeType());
                intent.setClipData(ClipData.newUri(contentResolver, request.get_filename(), uriInsert));
                intent.putExtra("android.intent.extra.STREAM", uriInsert);
                intent.putExtra("android.intent.extra.TITLE", request.get_filename());
                intent.putExtra("android.intent.extra.SUBJECT", request.get_filename());
                intent.addFlags(1);
                intent.addFlags(268435456);
                context.startActivity(Intent.createChooser(intent, request.get_filename()).addFlags(268435456));
            } else {
                File externalFilesDir = context.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
                if (externalFilesDir == null) {
                    externalFilesDir = new File(context.getCacheDir(), Environment.DIRECTORY_DOWNLOADS);
                }
                if (!externalFilesDir.exists() && !externalFilesDir.mkdirs()) {
                    throw new IllegalStateException("Unable to create Downloads directory");
                }
                File fileUniqueDestinationFile = uniqueDestinationFile(externalFilesDir, request.get_filename());
                FileOutputStream fileOutputStreamK = r.k(new FileOutputStream(fileUniqueDestinationFile), fileUniqueDestinationFile);
                try {
                    fileOutputStreamK.write(request.get_bytes());
                    fileOutputStreamK.close();
                    MediaScannerConnection.scanFile(context, new String[]{fileUniqueDestinationFile.getAbsolutePath()}, new String[]{request.get_mimeType()}, null);
                } catch (Throwable th3) {
                    try {
                        throw th3;
                    } catch (Throwable th4) {
                        vdv0.q(fileOutputStreamK, th3);
                        throw th4;
                    }
                }
            }
            callback.invoke(new y1c0(true), (Object) null);
        } catch (Exception e) {
            String message = e.getMessage();
            if (message == null) {
                message = "Unable to save file";
            }
            callback.invoke((Object) null, message);
        }
    }

    private final File uniqueDestinationFile(File directory, String filename) {
        String str;
        String strG = a2c0.a.g(filename, "_");
        if (s0v0.l0(strG)) {
            strG = "download";
        }
        String strU0 = s0v0.U0('.', strG, strG);
        String strQ0 = s0v0.Q0('.', strG, "");
        File file = new File(directory, strG);
        int i = 1;
        while (file.exists()) {
            if (strQ0.length() == 0) {
                str = strU0 + " (" + i + ')';
            } else {
                str = strU0 + " (" + i + ")." + strQ0;
            }
            i++;
            file = new File(directory, str);
        }
        return file;
    }

    @Override // defpackage.hqz0
    public sxc0 onLoadModule() {
        return new z1c0(this);
    }
}
