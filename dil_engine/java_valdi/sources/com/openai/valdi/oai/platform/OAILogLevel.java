package com.openai.valdi.oai.platform;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'DEBUG':0,'INFO':1,'WARN':2,'ERROR':3", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0006"}, d2 = {"Lcom/openai/valdi/oai/platform/OAILogLevel;", "", "DEBUG", "INFO", "WARN", "ERROR", "modules_oai_platform_services-oai_platform_services_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class OAILogLevel {
    public static final OAILogLevel DEBUG;
    public static final OAILogLevel ERROR;
    public static final OAILogLevel INFO;
    public static final OAILogLevel WARN;
    public static final /* synthetic */ OAILogLevel[] a;

    static {
        OAILogLevel oAILogLevel = new OAILogLevel("DEBUG", 0);
        DEBUG = oAILogLevel;
        OAILogLevel oAILogLevel2 = new OAILogLevel("INFO", 1);
        INFO = oAILogLevel2;
        OAILogLevel oAILogLevel3 = new OAILogLevel("WARN", 2);
        WARN = oAILogLevel3;
        OAILogLevel oAILogLevel4 = new OAILogLevel("ERROR", 3);
        ERROR = oAILogLevel4;
        a = new OAILogLevel[]{oAILogLevel, oAILogLevel2, oAILogLevel3, oAILogLevel4};
    }

    public static OAILogLevel valueOf(String str) {
        return (OAILogLevel) Enum.valueOf(OAILogLevel.class, str);
    }

    public static OAILogLevel[] values() {
        return (OAILogLevel[]) a.clone();
    }
}
