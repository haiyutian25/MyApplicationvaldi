package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'MONDAY':0,'TUESDAY':1,'WEDNESDAY':2,'THURSDAY':3,'FRIDAY':4,'SATURDAY':5,'SUNDAY':6", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\b\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\b¨\u0006\t"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/NoteLiveTaskDayOfWeek;", "", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class NoteLiveTaskDayOfWeek {
    public static final NoteLiveTaskDayOfWeek FRIDAY;
    public static final NoteLiveTaskDayOfWeek MONDAY;
    public static final NoteLiveTaskDayOfWeek SATURDAY;
    public static final NoteLiveTaskDayOfWeek SUNDAY;
    public static final NoteLiveTaskDayOfWeek THURSDAY;
    public static final NoteLiveTaskDayOfWeek TUESDAY;
    public static final NoteLiveTaskDayOfWeek WEDNESDAY;
    public static final /* synthetic */ NoteLiveTaskDayOfWeek[] a;

    static {
        NoteLiveTaskDayOfWeek noteLiveTaskDayOfWeek = new NoteLiveTaskDayOfWeek("MONDAY", 0);
        MONDAY = noteLiveTaskDayOfWeek;
        NoteLiveTaskDayOfWeek noteLiveTaskDayOfWeek2 = new NoteLiveTaskDayOfWeek("TUESDAY", 1);
        TUESDAY = noteLiveTaskDayOfWeek2;
        NoteLiveTaskDayOfWeek noteLiveTaskDayOfWeek3 = new NoteLiveTaskDayOfWeek("WEDNESDAY", 2);
        WEDNESDAY = noteLiveTaskDayOfWeek3;
        NoteLiveTaskDayOfWeek noteLiveTaskDayOfWeek4 = new NoteLiveTaskDayOfWeek("THURSDAY", 3);
        THURSDAY = noteLiveTaskDayOfWeek4;
        NoteLiveTaskDayOfWeek noteLiveTaskDayOfWeek5 = new NoteLiveTaskDayOfWeek("FRIDAY", 4);
        FRIDAY = noteLiveTaskDayOfWeek5;
        NoteLiveTaskDayOfWeek noteLiveTaskDayOfWeek6 = new NoteLiveTaskDayOfWeek("SATURDAY", 5);
        SATURDAY = noteLiveTaskDayOfWeek6;
        NoteLiveTaskDayOfWeek noteLiveTaskDayOfWeek7 = new NoteLiveTaskDayOfWeek("SUNDAY", 6);
        SUNDAY = noteLiveTaskDayOfWeek7;
        a = new NoteLiveTaskDayOfWeek[]{noteLiveTaskDayOfWeek, noteLiveTaskDayOfWeek2, noteLiveTaskDayOfWeek3, noteLiveTaskDayOfWeek4, noteLiveTaskDayOfWeek5, noteLiveTaskDayOfWeek6, noteLiveTaskDayOfWeek7};
    }

    public static NoteLiveTaskDayOfWeek valueOf(String str) {
        return (NoteLiveTaskDayOfWeek) Enum.valueOf(NoteLiveTaskDayOfWeek.class, str);
    }

    public static NoteLiveTaskDayOfWeek[] values() {
        return (NoteLiveTaskDayOfWeek[]) a.clone();
    }
}
