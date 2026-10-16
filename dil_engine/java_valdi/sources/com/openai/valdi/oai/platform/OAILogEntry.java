package com.openai.valdi.oai.platform;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\b\u0007\u0018\u00002\u00020\u0001B%\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0007\u0010\bR\u0016\u0010\t\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\t\u0010\nR\u0016\u0010\u000b\u001a\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000b\u0010\fR\u0018\u0010\r\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\f¨\u0006\u000e"}, d2 = {"Lcom/openai/valdi/oai/platform/OAILogEntry;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/oai/platform/OAILogLevel;", "level", "", "message", "attributesJson", "<init>", "(Lcom/openai/valdi/oai/platform/OAILogLevel;Ljava/lang/String;Ljava/lang/String;)V", "_level", "Lcom/openai/valdi/oai/platform/OAILogLevel;", "_message", "Ljava/lang/String;", "_attributesJson", "modules_oai_platform_services-oai_platform_services_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'level':r<e>:'[0]','message':s,'attributesJson':s?", typeReferences = {OAILogLevel.class})
public final class OAILogEntry extends b {
    private String _attributesJson;
    private OAILogLevel _level;
    private String _message;

    public OAILogEntry(OAILogLevel oAILogLevel, String str, String str2) {
        this._level = oAILogLevel;
        this._message = str;
        this._attributesJson = str2;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_attributesJson() {
        return this._attributesJson;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final OAILogLevel get_level() {
        return this._level;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_message() {
        return this._message;
    }
}
