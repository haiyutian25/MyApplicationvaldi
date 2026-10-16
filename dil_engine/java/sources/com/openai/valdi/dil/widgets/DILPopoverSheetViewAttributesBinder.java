package com.openai.valdi.dil.widgets;

import android.content.Context;
import com.snap.valdi.callable.ValdiFunction;
import defpackage.lfs;
import defpackage.mfs;
import defpackage.nfs;
import defpackage.ofs;
import defpackage.pfs;
import defpackage.wr6;
import defpackage.xr6;
import defpackage.yr6;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: classes6.dex */
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0007\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u001f\u0010\u000b\u001a\u00020\n2\u0006\u0010\u0007\u001a\u00020\u00022\u0006\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u0017\u0010\r\u001a\u00020\n2\u0006\u0010\u0007\u001a\u00020\u0002H\u0002¢\u0006\u0004\b\r\u0010\u000eJ\u001f\u0010\u000f\u001a\u00020\n2\u0006\u0010\u0007\u001a\u00020\u00022\u0006\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\u000f\u0010\fJ\u0017\u0010\u0010\u001a\u00020\n2\u0006\u0010\u0007\u001a\u00020\u0002H\u0002¢\u0006\u0004\b\u0010\u0010\u000eJ\u001d\u0010\u0013\u001a\u00020\n2\f\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00020\u0011H\u0016¢\u0006\u0004\b\u0013\u0010\u0014R\u001a\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00020\u00158VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0019"}, d2 = {"Lcom/openai/valdi/dil/widgets/DILPopoverSheetViewAttributesBinder;", "Lwr6;", "Lcom/openai/valdi/dil/widgets/DILPopoverSheetView;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "view", "Lcom/snap/valdi/callable/ValdiFunction;", "value", "Lruy0;", "applyOnDismiss", "(Lcom/openai/valdi/dil/widgets/DILPopoverSheetView;Lcom/snap/valdi/callable/ValdiFunction;)V", "resetOnDismiss", "(Lcom/openai/valdi/dil/widgets/DILPopoverSheetView;)V", "applyOnContentWidthChange", "resetOnContentWidthChange", "Lxr6;", "attributesBindingContext", "bindAttributes", "(Lxr6;)V", "Ljava/lang/Class;", "getViewClass", "()Ljava/lang/Class;", "viewClass", "modules_dil_widgets-dil_widgets_android_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
public final class DILPopoverSheetViewAttributesBinder implements wr6 {
    public DILPopoverSheetViewAttributesBinder(Context context) {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void applyOnContentWidthChange(DILPopoverSheetView view, ValdiFunction value) {
        view.setOnContentWidthChange(value);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void applyOnDismiss(DILPopoverSheetView view, ValdiFunction value) {
        view.setOnDismiss(value);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void resetOnContentWidthChange(DILPopoverSheetView view) {
        view.setOnContentWidthChange(null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void resetOnDismiss(DILPopoverSheetView view) {
        view.setOnDismiss(null);
    }

    @Override // defpackage.wr6
    public void bindAttributes(xr6 attributesBindingContext) {
        nfs nfsVar = new nfs();
        yr6 yr6Var = attributesBindingContext.a;
        byte b = 0;
        yr6Var.b("backgroundColor", false, nfsVar);
        yr6Var.a("showCloseButton", false, new lfs(b));
        yr6Var.a("open", false, new mfs(b));
        yr6Var.g("onDismiss", false, new ofs(attributesBindingContext, this, this));
        yr6Var.g("onContentWidthChange", false, new pfs(attributesBindingContext, this, this));
    }

    @Override // defpackage.wr6
    public Class<DILPopoverSheetView> getViewClass() {
        return DILPopoverSheetView.class;
    }
}
