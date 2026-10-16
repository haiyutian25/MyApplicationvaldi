package com.openai.valdi.oai.platform;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'MEMORY':'sunshine','REFERENCE_CHAT_HISTORY':'moonshine','IMPROVED_MEMORY':'m3m','GOLDEN_HOUR':'golden_hour','MEMORY_IN_SEARCH':'memory_in_search','INSTANT_ANSWERS':'instant_answers_enabled','TASK_SUGGESTIONS':'task_suggestions_enabled','FILE_LIBRARY_AUTO_REFERENCE':'file_library_auto_reference','IMAGE_GEN_HOLDOUT_OPT_IN':'image_gen_enabled'", type = cqz0.b)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\n\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\n¨\u0006\u000b"}, d2 = {"Lcom/openai/valdi/oai/platform/OAIAccountSettingKey;", "", "MEMORY", "REFERENCE_CHAT_HISTORY", "IMPROVED_MEMORY", "GOLDEN_HOUR", "MEMORY_IN_SEARCH", "INSTANT_ANSWERS", "TASK_SUGGESTIONS", "FILE_LIBRARY_AUTO_REFERENCE", "IMAGE_GEN_HOLDOUT_OPT_IN", "modules_oai_platform_services-oai_platform_services_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class OAIAccountSettingKey {
    public static final OAIAccountSettingKey FILE_LIBRARY_AUTO_REFERENCE;
    public static final OAIAccountSettingKey GOLDEN_HOUR;
    public static final OAIAccountSettingKey IMAGE_GEN_HOLDOUT_OPT_IN;
    public static final OAIAccountSettingKey IMPROVED_MEMORY;
    public static final OAIAccountSettingKey INSTANT_ANSWERS;
    public static final OAIAccountSettingKey MEMORY;
    public static final OAIAccountSettingKey MEMORY_IN_SEARCH;
    public static final OAIAccountSettingKey REFERENCE_CHAT_HISTORY;
    public static final OAIAccountSettingKey TASK_SUGGESTIONS;
    public static final /* synthetic */ OAIAccountSettingKey[] a;

    static {
        OAIAccountSettingKey oAIAccountSettingKey = new OAIAccountSettingKey("MEMORY", 0);
        MEMORY = oAIAccountSettingKey;
        OAIAccountSettingKey oAIAccountSettingKey2 = new OAIAccountSettingKey("REFERENCE_CHAT_HISTORY", 1);
        REFERENCE_CHAT_HISTORY = oAIAccountSettingKey2;
        OAIAccountSettingKey oAIAccountSettingKey3 = new OAIAccountSettingKey("IMPROVED_MEMORY", 2);
        IMPROVED_MEMORY = oAIAccountSettingKey3;
        OAIAccountSettingKey oAIAccountSettingKey4 = new OAIAccountSettingKey("GOLDEN_HOUR", 3);
        GOLDEN_HOUR = oAIAccountSettingKey4;
        OAIAccountSettingKey oAIAccountSettingKey5 = new OAIAccountSettingKey("MEMORY_IN_SEARCH", 4);
        MEMORY_IN_SEARCH = oAIAccountSettingKey5;
        OAIAccountSettingKey oAIAccountSettingKey6 = new OAIAccountSettingKey("INSTANT_ANSWERS", 5);
        INSTANT_ANSWERS = oAIAccountSettingKey6;
        OAIAccountSettingKey oAIAccountSettingKey7 = new OAIAccountSettingKey("TASK_SUGGESTIONS", 6);
        TASK_SUGGESTIONS = oAIAccountSettingKey7;
        OAIAccountSettingKey oAIAccountSettingKey8 = new OAIAccountSettingKey("FILE_LIBRARY_AUTO_REFERENCE", 7);
        FILE_LIBRARY_AUTO_REFERENCE = oAIAccountSettingKey8;
        OAIAccountSettingKey oAIAccountSettingKey9 = new OAIAccountSettingKey("IMAGE_GEN_HOLDOUT_OPT_IN", 8);
        IMAGE_GEN_HOLDOUT_OPT_IN = oAIAccountSettingKey9;
        a = new OAIAccountSettingKey[]{oAIAccountSettingKey, oAIAccountSettingKey2, oAIAccountSettingKey3, oAIAccountSettingKey4, oAIAccountSettingKey5, oAIAccountSettingKey6, oAIAccountSettingKey7, oAIAccountSettingKey8, oAIAccountSettingKey9};
    }

    public static OAIAccountSettingKey valueOf(String str) {
        return (OAIAccountSettingKey) Enum.valueOf(OAIAccountSettingKey.class, str);
    }

    public static OAIAccountSettingKey[] values() {
        return (OAIAccountSettingKey[]) a.clone();
    }
}
