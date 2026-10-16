package com.openai.valdi.memory.settings.ui;

import android.content.Context;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.views.ValdiGeneratedRootView;
import defpackage.kqa0;
import defpackage.r101;
import defpackage.wn20;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 \u00072\u0010\u0012\u0006\u0012\u0004\u0018\u00010\u0002\u0012\u0004\u0012\u00020\u00020\u0001:\u0001\bB\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006¨\u0006\t"}, d2 = {"Lcom/openai/valdi/memory/settings/ui/MemorySettingsScreen;", "Lcom/snap/valdi/views/ValdiGeneratedRootView;", "", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Companion", "kqa0", "modules_memory_settings_ui-memory_settings_ui_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class MemorySettingsScreen extends ValdiGeneratedRootView<Object, Object> {
    public static final kqa0 Companion = new kqa0();

    public MemorySettingsScreen(Context context) {
        super(context);
    }

    public static final /* synthetic */ String access$getComponentPath$cp() {
        return "MemorySettingsScreen@memory_settings_ui/src/MemorySettingsScreen";
    }

    public static final MemorySettingsScreen create(wn20 wn20Var, r101 r101Var) {
        Companion.getClass();
        MemorySettingsScreen memorySettingsScreen = new MemorySettingsScreen(wn20Var.getContext());
        wn20Var.v(memorySettingsScreen, access$getComponentPath$cp(), null, null, null);
        return memorySettingsScreen;
    }

    public static final MemorySettingsScreen create(wn20 wn20Var, Object obj, Object obj2, r101 r101Var, Function1 function1) {
        Companion.getClass();
        MemorySettingsScreen memorySettingsScreen = new MemorySettingsScreen(wn20Var.getContext());
        wn20Var.v(memorySettingsScreen, access$getComponentPath$cp(), obj, obj2, function1);
        return memorySettingsScreen;
    }
}
