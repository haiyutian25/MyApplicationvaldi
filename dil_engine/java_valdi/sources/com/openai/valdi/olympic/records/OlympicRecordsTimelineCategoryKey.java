package com.openai.valdi.olympic.records;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'allergies':'allergies','conditions':'conditions','medications':'medications','documents':'documents','metrics':'metrics','immunizations':'immunizations','procedures':'procedures','carePlans':'carePlans'", type = cqz0.b)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\t\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\t¨\u0006\n"}, d2 = {"Lcom/openai/valdi/olympic/records/OlympicRecordsTimelineCategoryKey;", "", "allergies", "conditions", "medications", "documents", "metrics", "immunizations", "procedures", "carePlans", "modules_olympic_records-olympic_records_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class OlympicRecordsTimelineCategoryKey {
    public static final /* synthetic */ OlympicRecordsTimelineCategoryKey[] a;
    public static final OlympicRecordsTimelineCategoryKey allergies;
    public static final OlympicRecordsTimelineCategoryKey carePlans;
    public static final OlympicRecordsTimelineCategoryKey conditions;
    public static final OlympicRecordsTimelineCategoryKey documents;
    public static final OlympicRecordsTimelineCategoryKey immunizations;
    public static final OlympicRecordsTimelineCategoryKey medications;
    public static final OlympicRecordsTimelineCategoryKey metrics;
    public static final OlympicRecordsTimelineCategoryKey procedures;

    static {
        OlympicRecordsTimelineCategoryKey olympicRecordsTimelineCategoryKey = new OlympicRecordsTimelineCategoryKey("allergies", 0);
        allergies = olympicRecordsTimelineCategoryKey;
        OlympicRecordsTimelineCategoryKey olympicRecordsTimelineCategoryKey2 = new OlympicRecordsTimelineCategoryKey("conditions", 1);
        conditions = olympicRecordsTimelineCategoryKey2;
        OlympicRecordsTimelineCategoryKey olympicRecordsTimelineCategoryKey3 = new OlympicRecordsTimelineCategoryKey("medications", 2);
        medications = olympicRecordsTimelineCategoryKey3;
        OlympicRecordsTimelineCategoryKey olympicRecordsTimelineCategoryKey4 = new OlympicRecordsTimelineCategoryKey("documents", 3);
        documents = olympicRecordsTimelineCategoryKey4;
        OlympicRecordsTimelineCategoryKey olympicRecordsTimelineCategoryKey5 = new OlympicRecordsTimelineCategoryKey("metrics", 4);
        metrics = olympicRecordsTimelineCategoryKey5;
        OlympicRecordsTimelineCategoryKey olympicRecordsTimelineCategoryKey6 = new OlympicRecordsTimelineCategoryKey("immunizations", 5);
        immunizations = olympicRecordsTimelineCategoryKey6;
        OlympicRecordsTimelineCategoryKey olympicRecordsTimelineCategoryKey7 = new OlympicRecordsTimelineCategoryKey("procedures", 6);
        procedures = olympicRecordsTimelineCategoryKey7;
        OlympicRecordsTimelineCategoryKey olympicRecordsTimelineCategoryKey8 = new OlympicRecordsTimelineCategoryKey("carePlans", 7);
        carePlans = olympicRecordsTimelineCategoryKey8;
        a = new OlympicRecordsTimelineCategoryKey[]{olympicRecordsTimelineCategoryKey, olympicRecordsTimelineCategoryKey2, olympicRecordsTimelineCategoryKey3, olympicRecordsTimelineCategoryKey4, olympicRecordsTimelineCategoryKey5, olympicRecordsTimelineCategoryKey6, olympicRecordsTimelineCategoryKey7, olympicRecordsTimelineCategoryKey8};
    }

    public static OlympicRecordsTimelineCategoryKey valueOf(String str) {
        return (OlympicRecordsTimelineCategoryKey) Enum.valueOf(OlympicRecordsTimelineCategoryKey.class, str);
    }

    public static OlympicRecordsTimelineCategoryKey[] values() {
        return (OlympicRecordsTimelineCategoryKey[]) a.clone();
    }
}
