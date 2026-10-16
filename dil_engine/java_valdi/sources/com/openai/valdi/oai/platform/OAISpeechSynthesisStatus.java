package com.openai.valdi.oai.platform;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Idle':0,'Loading':1,'Playing':2", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0004\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004¨\u0006\u0005"}, d2 = {"Lcom/openai/valdi/oai/platform/OAISpeechSynthesisStatus;", "", "Idle", "Loading", "Playing", "modules_oai_platform_services-oai_platform_services_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class OAISpeechSynthesisStatus {
    public static final OAISpeechSynthesisStatus Idle;
    public static final OAISpeechSynthesisStatus Loading;
    public static final OAISpeechSynthesisStatus Playing;
    public static final /* synthetic */ OAISpeechSynthesisStatus[] a;

    static {
        OAISpeechSynthesisStatus oAISpeechSynthesisStatus = new OAISpeechSynthesisStatus("Idle", 0);
        Idle = oAISpeechSynthesisStatus;
        OAISpeechSynthesisStatus oAISpeechSynthesisStatus2 = new OAISpeechSynthesisStatus("Loading", 1);
        Loading = oAISpeechSynthesisStatus2;
        OAISpeechSynthesisStatus oAISpeechSynthesisStatus3 = new OAISpeechSynthesisStatus("Playing", 2);
        Playing = oAISpeechSynthesisStatus3;
        a = new OAISpeechSynthesisStatus[]{oAISpeechSynthesisStatus, oAISpeechSynthesisStatus2, oAISpeechSynthesisStatus3};
    }

    public static OAISpeechSynthesisStatus valueOf(String str) {
        return (OAISpeechSynthesisStatus) Enum.valueOf(OAISpeechSynthesisStatus.class, str);
    }

    public static OAISpeechSynthesisStatus[] values() {
        return (OAISpeechSynthesisStatus[]) a.clone();
    }
}
