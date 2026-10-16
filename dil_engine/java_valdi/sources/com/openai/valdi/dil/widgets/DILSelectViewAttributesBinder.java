package com.openai.valdi.dil.widgets;

import android.content.Context;
import com.snap.valdi.callable.ValdiFunction;
import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bgs;
import defpackage.cgs;
import defpackage.dgs;
import defpackage.egs;
import defpackage.fgs;
import defpackage.g62;
import defpackage.ggs;
import defpackage.hgs;
import defpackage.igs;
import defpackage.jgs;
import defpackage.kgs;
import defpackage.lgs;
import defpackage.mgs;
import defpackage.ngs;
import defpackage.ogs;
import defpackage.pgs;
import defpackage.po2;
import defpackage.qgs;
import defpackage.rgs;
import defpackage.wr6;
import defpackage.xr6;
import defpackage.yr6;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0007\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u001f\u0010\u000b\u001a\u00020\n2\u0006\u0010\u0007\u001a\u00020\u00022\u0006\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u0017\u0010\r\u001a\u00020\n2\u0006\u0010\u0007\u001a\u00020\u0002H\u0002¢\u0006\u0004\b\r\u0010\u000eJ\u001d\u0010\u0011\u001a\u00020\n2\f\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u00020\u000fH\u0016¢\u0006\u0004\b\u0011\u0010\u0012R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0004\u0010\u0013R\u001a\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00020\u00148VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0015\u0010\u0016¨\u0006\u0018"}, d2 = {"Lcom/openai/valdi/dil/widgets/DILSelectViewAttributesBinder;", "Lwr6;", "Lcom/openai/valdi/dil/widgets/DILSelectView;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "view", "Lcom/snap/valdi/callable/ValdiFunction;", "value", "Lruy0;", "applyOnChange", "(Lcom/openai/valdi/dil/widgets/DILSelectView;Lcom/snap/valdi/callable/ValdiFunction;)V", "resetOnChange", "(Lcom/openai/valdi/dil/widgets/DILSelectView;)V", "Lxr6;", "attributesBindingContext", "bindAttributes", "(Lxr6;)V", "Landroid/content/Context;", "Ljava/lang/Class;", "getViewClass", "()Ljava/lang/Class;", "viewClass", "modules_dil_widgets-dil_widgets_android_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class DILSelectViewAttributesBinder implements wr6 {
    private final Context context;

    public DILSelectViewAttributesBinder(Context context) {
        this.context = context;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void applyOnChange(DILSelectView view, ValdiFunction value) {
        view.setOnChange(value);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void resetOnChange(DILSelectView view) {
        view.setOnChange(null);
    }

    @Override // defpackage.wr6
    public void bindAttributes(xr6 attributesBindingContext) {
        rgs rgsVar = new rgs();
        yr6 yr6Var = attributesBindingContext.a;
        yr6Var.g("options", true, rgsVar);
        byte b = 0;
        yr6Var.f("selectedLabel", true, new lgs(b));
        yr6Var.f("selectedValue", true, new mgs());
        yr6Var.f("placeholder", true, new ngs());
        yr6Var.a("selectDisabled", false, new bgs(b));
        yr6Var.a("showsDropdownIcon", true, new po2());
        yr6Var.f("selectSize", true, new ogs(b));
        yr6Var.f("selectVariant", true, new pgs());
        yr6Var.f("optionIndicatorPosition", false, new qgs(b));
        yr6Var.b("selectTextColor", false, new cgs(b));
        yr6Var.b("selectChevronColor", false, new dgs());
        yr6Var.b("selectDisabledColor", false, new egs());
        yr6Var.b("selectFieldBackgroundColor", false, new fgs());
        yr6Var.b("selectPopupBackgroundColor", false, new ggs());
        yr6Var.d("listMaxWidth", false, new hgs(b));
        yr6Var.d("listMinWidth", false, new igs(b));
        yr6Var.d("listWidth", false, new jgs());
        yr6Var.g("onChange", false, new kgs(attributesBindingContext, this, this));
        attributesBindingContext.c(new kxv0(new g62(this, (byte) 3)));
    }

    @Override // defpackage.wr6
    public Class<DILSelectView> getViewClass() {
        return DILSelectView.class;
    }
}
