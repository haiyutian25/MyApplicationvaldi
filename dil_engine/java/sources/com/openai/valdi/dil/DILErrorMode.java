package com.openai.valdi.dil;

import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: classes5.dex */
@bqz0(propertyReplacements = "", schema = "'REPORT_AND_SKIP_SUBTREE':'report-and-skip-subtree','REPORT_AND_RENDER_DIAGNOSTIC':'report-and-render-diagnostic'", type = cqz0.b)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0003\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003¨\u0006\u0004"}, d2 = {"Lcom/openai/valdi/dil/DILErrorMode;", "", "REPORT_AND_SKIP_SUBTREE", "REPORT_AND_RENDER_DIAGNOSTIC", "modules_dil_widgets-dil_widgets_api_kt_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
public final class DILErrorMode {
    public static final DILErrorMode REPORT_AND_RENDER_DIAGNOSTIC;
    public static final DILErrorMode REPORT_AND_SKIP_SUBTREE;
    public static final /* synthetic */ DILErrorMode[] a;

    static {
        DILErrorMode dILErrorMode = new DILErrorMode("REPORT_AND_SKIP_SUBTREE", 0);
        REPORT_AND_SKIP_SUBTREE = dILErrorMode;
        DILErrorMode dILErrorMode2 = new DILErrorMode("REPORT_AND_RENDER_DIAGNOSTIC", 1);
        REPORT_AND_RENDER_DIAGNOSTIC = dILErrorMode2;
        a = new DILErrorMode[]{dILErrorMode, dILErrorMode2};
    }

    public static DILErrorMode valueOf(String str) {
        return (DILErrorMode) Enum.valueOf(DILErrorMode.class, str);
    }

    public static DILErrorMode[] values() {
        return (DILErrorMode[]) a.clone();
    }
}
