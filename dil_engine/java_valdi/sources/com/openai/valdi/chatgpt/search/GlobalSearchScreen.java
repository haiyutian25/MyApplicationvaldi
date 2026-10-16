package com.openai.valdi.chatgpt.search;

import android.content.Context;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.views.ValdiGeneratedRootView;
import defpackage.ie10;
import defpackage.r101;
import defpackage.wn20;
import defpackage.xc10;
import defpackage.yc10;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 \b2\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00030\u0001:\u0001\tB\u000f\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007¨\u0006\n"}, d2 = {"Lcom/openai/valdi/chatgpt/search/GlobalSearchScreen;", "Lcom/snap/valdi/views/ValdiGeneratedRootView;", "Lie10;", "Lyc10;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Companion", "xc10", "modules_chatgpt_global_search-chatgpt_global_search_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class GlobalSearchScreen extends ValdiGeneratedRootView<ie10, yc10> {
    public static final xc10 Companion = new xc10();

    public GlobalSearchScreen(Context context) {
        super(context);
    }

    public static final /* synthetic */ String access$getComponentPath$cp() {
        return "GlobalSearchScreen@chatgpt_global_search/src/GlobalSearchScreen";
    }

    public static final GlobalSearchScreen create(wn20 wn20Var, r101 r101Var) {
        Companion.getClass();
        GlobalSearchScreen globalSearchScreen = new GlobalSearchScreen(wn20Var.getContext());
        wn20Var.v(globalSearchScreen, access$getComponentPath$cp(), null, null, null);
        return globalSearchScreen;
    }

    public static final GlobalSearchScreen create(wn20 wn20Var, ie10 ie10Var, yc10 yc10Var, r101 r101Var, Function1 function1) {
        Companion.getClass();
        GlobalSearchScreen globalSearchScreen = new GlobalSearchScreen(wn20Var.getContext());
        wn20Var.v(globalSearchScreen, access$getComponentPath$cp(), ie10Var, yc10Var, function1);
        return globalSearchScreen;
    }
}
