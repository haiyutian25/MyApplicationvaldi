package com.openai.valdi.filesaver;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0012\n\u0002\b\t\b\u0007\u0018\u00002\u00020\u0001B!\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0007\u0010\bR\u0016\u0010\t\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\t\u0010\nR\u0016\u0010\u000b\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000b\u0010\nR\u0016\u0010\f\u001a\u00020\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\r¨\u0006\u000e"}, d2 = {"Lcom/openai/valdi/filesaver/MobileFileSaveRequest;", "Lcom/snap/valdi/utils/b;", "", "filename", "mimeType", "", "bytes", "<init>", "(Ljava/lang/String;Ljava/lang/String;[B)V", "_filename", "Ljava/lang/String;", "_mimeType", "_bytes", "[B", "modules_mobile_file_saver-mobile_file_saver_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'filename':s,'mimeType':s,'bytes':t", typeReferences = {})
public final class MobileFileSaveRequest extends b {
    private byte[] _bytes;
    private String _filename;
    private String _mimeType;

    public MobileFileSaveRequest(String str, String str2, byte[] bArr) {
        this._filename = str;
        this._mimeType = str2;
        this._bytes = bArr;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final byte[] get_bytes() {
        return this._bytes;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final String get_filename() {
        return this._filename;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_mimeType() {
        return this._mimeType;
    }
}
