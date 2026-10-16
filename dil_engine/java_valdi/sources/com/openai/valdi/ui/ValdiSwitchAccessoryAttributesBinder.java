package com.openai.valdi.ui;

import android.content.Context;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snapchat.client.valdi.NativeBridge;
import defpackage.bzz0;
import defpackage.czz0;
import defpackage.mfs;
import defpackage.muw;
import defpackage.rqr0;
import defpackage.sqr0;
import defpackage.wr6;
import defpackage.xr6;
import defpackage.yr6;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0007\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u001d\u0010\n\u001a\u00020\t2\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00020\u0007H\u0016¢\u0006\u0004\b\n\u0010\u000bR\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0004\u0010\fR \u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00020\r8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b\u000e\u0010\u000f\u001a\u0004\b\u0010\u0010\u0011¨\u0006\u0012"}, d2 = {"Lcom/openai/valdi/ui/ValdiSwitchAccessoryAttributesBinder;", "Lwr6;", "Lcom/openai/valdi/ui/ValdiSwitchAccessory;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Lxr6;", "attributesBindingContext", "Lruy0;", "bindAttributes", "(Lxr6;)V", "Landroid/content/Context;", "Ljava/lang/Class;", "viewClass", "Ljava/lang/Class;", "getViewClass", "()Ljava/lang/Class;", "modules_valdi_ui-valdi_ui_android_impl_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class ValdiSwitchAccessoryAttributesBinder implements wr6 {
    public static final int $stable = 8;
    private final Context context;
    private final Class<ValdiSwitchAccessory> viewClass = ValdiSwitchAccessory.class;

    public ValdiSwitchAccessoryAttributesBinder(Context context) {
        this.context = context;
    }

    @Override // defpackage.wr6
    public void bindAttributes(xr6 attributesBindingContext) {
        mfs mfsVar = new mfs((byte) 3);
        yr6 yr6Var = attributesBindingContext.a;
        yr6Var.a("switchChecked", false, mfsVar);
        yr6Var.a("switchEnabled", false, new muw());
        yr6Var.b("switchCheckedTrackColor", false, new rqr0());
        yr6Var.b("switchTrackColor", false, new sqr0());
        yr6Var.b("switchThumbColor", false, new bzz0());
        NativeBridge.setMeasureDelegate(yr6Var.a, new czz0(this));
    }

    @Override // defpackage.wr6
    public Class<ValdiSwitchAccessory> getViewClass() {
        return this.viewClass;
    }
}
