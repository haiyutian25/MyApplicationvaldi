package com.openai.valdi.olympic.health.home;

import android.content.Context;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.views.ValdiGeneratedRootView;
import defpackage.npe0;
import defpackage.ope0;
import defpackage.r101;
import defpackage.rpe0;
import defpackage.wn20;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 \b2\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00030\u0001:\u0001\tB\u000f\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007¨\u0006\n"}, d2 = {"Lcom/openai/valdi/olympic/health/home/OlympicHealthHomeComponent;", "Lcom/snap/valdi/views/ValdiGeneratedRootView;", "Lrpe0;", "Lope0;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Companion", "npe0", "modules_olympic_health_home-olympic_health_home_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class OlympicHealthHomeComponent extends ValdiGeneratedRootView<rpe0, ope0> {
    public static final npe0 Companion = new npe0();

    public OlympicHealthHomeComponent(Context context) {
        super(context);
    }

    public static final /* synthetic */ String access$getComponentPath$cp() {
        return "OlympicHealthHomeComponent@olympic_health_home/src/OlympicHealthHomeComponent";
    }

    public static final OlympicHealthHomeComponent create(wn20 wn20Var, r101 r101Var) {
        Companion.getClass();
        OlympicHealthHomeComponent olympicHealthHomeComponent = new OlympicHealthHomeComponent(wn20Var.getContext());
        wn20Var.v(olympicHealthHomeComponent, access$getComponentPath$cp(), null, null, null);
        return olympicHealthHomeComponent;
    }

    public static final OlympicHealthHomeComponent create(wn20 wn20Var, rpe0 rpe0Var, ope0 ope0Var, r101 r101Var, Function1 function1) {
        Companion.getClass();
        OlympicHealthHomeComponent olympicHealthHomeComponent = new OlympicHealthHomeComponent(wn20Var.getContext());
        wn20Var.v(olympicHealthHomeComponent, access$getComponentPath$cp(), rpe0Var, ope0Var, function1);
        return olympicHealthHomeComponent;
    }
}
