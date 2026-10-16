package com.openai.valdi.olympic.connections;

import android.content.Context;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.views.ValdiGeneratedRootView;
import defpackage.ipe0;
import defpackage.jpe0;
import defpackage.mpe0;
import defpackage.r101;
import defpackage.wn20;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 \b2\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00030\u0001:\u0001\tB\u000f\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007¨\u0006\n"}, d2 = {"Lcom/openai/valdi/olympic/connections/OlympicConnectionsComponent;", "Lcom/snap/valdi/views/ValdiGeneratedRootView;", "Lmpe0;", "Ljpe0;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Companion", "ipe0", "modules_olympic_connections-olympic_connections_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class OlympicConnectionsComponent extends ValdiGeneratedRootView<mpe0, jpe0> {
    public static final ipe0 Companion = new ipe0();

    public OlympicConnectionsComponent(Context context) {
        super(context);
    }

    public static final /* synthetic */ String access$getComponentPath$cp() {
        return "OlympicConnectionsComponent@olympic_connections/src/OlympicConnectionsComponent";
    }

    public static final OlympicConnectionsComponent create(wn20 wn20Var, r101 r101Var) {
        Companion.getClass();
        OlympicConnectionsComponent olympicConnectionsComponent = new OlympicConnectionsComponent(wn20Var.getContext());
        wn20Var.v(olympicConnectionsComponent, access$getComponentPath$cp(), null, null, null);
        return olympicConnectionsComponent;
    }

    public static final OlympicConnectionsComponent create(wn20 wn20Var, mpe0 mpe0Var, jpe0 jpe0Var, r101 r101Var, Function1 function1) {
        Companion.getClass();
        OlympicConnectionsComponent olympicConnectionsComponent = new OlympicConnectionsComponent(wn20Var.getContext());
        wn20Var.v(olympicConnectionsComponent, access$getComponentPath$cp(), mpe0Var, jpe0Var, function1);
        return olympicConnectionsComponent;
    }
}
