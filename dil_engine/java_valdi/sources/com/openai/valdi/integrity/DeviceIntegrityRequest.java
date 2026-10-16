package com.openai.valdi.integrity;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u000e\b\u0007\u0018\u00002\u00020\u0001B5\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0002\u0012\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\b\u0010\tR\u0016\u0010\n\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\n\u0010\u000bR\u0016\u0010\f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\u000bR\u0016\u0010\r\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\u000bR\u0018\u0010\u000e\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\u000bR\u0016\u0010\u000f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\u000b¨\u0006\u0010"}, d2 = {"Lcom/openai/valdi/integrity/DeviceIntegrityRequest;", "Lcom/snap/valdi/utils/b;", "", "accountId", "accessToken", "baseUrl", "conversationId", "parentMessageId", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "_accountId", "Ljava/lang/String;", "_accessToken", "_baseUrl", "_conversationId", "_parentMessageId", "modules_oai_device_integrity-oai_device_integrity_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'accountId':s,'accessToken':s,'baseUrl':s,'conversationId':s?,'parentMessageId':s", typeReferences = {})
public final class DeviceIntegrityRequest extends com.snap.valdi.utils.b {
    private String _accessToken;
    private String _accountId;
    private String _baseUrl;
    private String _conversationId;
    private String _parentMessageId;

    public DeviceIntegrityRequest(String str, String str2, String str3, String str4, String str5) {
        this._accountId = str;
        this._accessToken = str2;
        this._baseUrl = str3;
        this._conversationId = str4;
        this._parentMessageId = str5;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_accessToken() {
        return this._accessToken;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final String get_accountId() {
        return this._accountId;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_baseUrl() {
        return this._baseUrl;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final String get_conversationId() {
        return this._conversationId;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final String get_parentMessageId() {
        return this._parentMessageId;
    }
}
