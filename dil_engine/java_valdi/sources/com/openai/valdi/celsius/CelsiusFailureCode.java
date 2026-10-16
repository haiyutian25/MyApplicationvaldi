package com.openai.valdi.celsius;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Unavailable':0,'Transport':1,'Protocol':2,'Unknown':3", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0006"}, d2 = {"Lcom/openai/valdi/celsius/CelsiusFailureCode;", "", "Unavailable", "Transport", "Protocol", "Unknown", "modules_oai_celsius-oai_celsius_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class CelsiusFailureCode {
    public static final CelsiusFailureCode Protocol;
    public static final CelsiusFailureCode Transport;
    public static final CelsiusFailureCode Unavailable;
    public static final CelsiusFailureCode Unknown;
    public static final /* synthetic */ CelsiusFailureCode[] a;

    static {
        CelsiusFailureCode celsiusFailureCode = new CelsiusFailureCode("Unavailable", 0);
        Unavailable = celsiusFailureCode;
        CelsiusFailureCode celsiusFailureCode2 = new CelsiusFailureCode("Transport", 1);
        Transport = celsiusFailureCode2;
        CelsiusFailureCode celsiusFailureCode3 = new CelsiusFailureCode("Protocol", 2);
        Protocol = celsiusFailureCode3;
        CelsiusFailureCode celsiusFailureCode4 = new CelsiusFailureCode("Unknown", 3);
        Unknown = celsiusFailureCode4;
        a = new CelsiusFailureCode[]{celsiusFailureCode, celsiusFailureCode2, celsiusFailureCode3, celsiusFailureCode4};
    }

    public static CelsiusFailureCode valueOf(String str) {
        return (CelsiusFailureCode) Enum.valueOf(CelsiusFailureCode.class, str);
    }

    public static CelsiusFailureCode[] values() {
        return (CelsiusFailureCode[]) a.clone();
    }
}
