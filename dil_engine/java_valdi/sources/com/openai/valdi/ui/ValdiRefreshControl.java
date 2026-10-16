package com.openai.valdi.ui;

import android.content.Context;
import android.view.View;
import com.snap.valdi.callable.ValdiFunction;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshaller;
import com.snap.valdi.views.ValdiScrollView;
import defpackage.cwz0;
import defpackage.fwz0;
import defpackage.iqz0;
import defpackage.kqz0;
import defpackage.qdw;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u001b\b\u0007\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005Je\u0010\u0017\u001a\u00020\u00162\u0006\u0010\u0007\u001a\u00020\u00062\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010\f\u001a\u00020\n2\u0006\u0010\r\u001a\u00020\n2\u0006\u0010\u000e\u001a\u00020\n2\u0006\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u0011\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\n2\f\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00140\u0013H\u0016¢\u0006\u0004\b\u0017\u0010\u0018J\u001f\u0010\u001b\u001a\u00020\u00162\u0006\u0010\u0019\u001a\u00020\n2\u0006\u0010\u001a\u001a\u00020\nH\u0014¢\u0006\u0004\b\u001b\u0010\u001cJ7\u0010#\u001a\u00020\u00162\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010\u001f\u001a\u00020\n2\u0006\u0010 \u001a\u00020\n2\u0006\u0010!\u001a\u00020\n2\u0006\u0010\"\u001a\u00020\nH\u0014¢\u0006\u0004\b#\u0010$J\u000f\u0010%\u001a\u00020\u0016H\u0014¢\u0006\u0004\b%\u0010&J\u000f\u0010'\u001a\u00020\u0016H\u0016¢\u0006\u0004\b'\u0010&R$\u0010/\u001a\u0004\u0018\u00010(8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b)\u0010*\u001a\u0004\b+\u0010,\"\u0004\b-\u0010.R*\u00107\u001a\u00020\u001d2\u0006\u00100\u001a\u00020\u001d8\u0006@FX\u0086\u000e¢\u0006\u0012\n\u0004\b1\u00102\u001a\u0004\b3\u00104\"\u0004\b5\u00106R.\u0010>\u001a\u0004\u0018\u00010\n2\b\u00100\u001a\u0004\u0018\u00010\n8\u0006@FX\u0086\u000e¢\u0006\u0012\n\u0004\b8\u00109\u001a\u0004\b:\u0010;\"\u0004\b<\u0010=R.\u0010B\u001a\u0004\u0018\u00010\n2\b\u00100\u001a\u0004\u0018\u00010\n8\u0006@FX\u0086\u000e¢\u0006\u0012\n\u0004\b?\u00109\u001a\u0004\b@\u0010;\"\u0004\bA\u0010=¨\u0006C"}, d2 = {"Lcom/openai/valdi/ui/ValdiRefreshControl;", "Lcom/snap/valdi/views/ValdiScrollView;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Lqdw;", "gesture", "Lkqz0;", "state", "", "x", "y", "offsetX", "offsetY", "", "invertedVelocityX", "invertedVelocityY", "pointerCount", "", "Liqz0;", "pointerLocations", "Lruy0;", "onRecognized", "(Lqdw;Lkqz0;IIIIFFILjava/util/List;)V", "widthMeasureSpec", "heightMeasureSpec", "onMeasure", "(II)V", "", "changed", "left", "top", "right", "bottom", "onLayout", "(ZIIII)V", "onDetachedFromWindow", "()V", "prepareForRecycling", "Lcom/snap/valdi/callable/ValdiFunction;", "h", "Lcom/snap/valdi/callable/ValdiFunction;", "getOnRefresh", "()Lcom/snap/valdi/callable/ValdiFunction;", "setOnRefresh", "(Lcom/snap/valdi/callable/ValdiFunction;)V", "onRefresh", "value", "i", "Z", "getRefreshing", "()Z", "setRefreshing", "(Z)V", "refreshing", "j", "Ljava/lang/Integer;", "getRefreshTint", "()Ljava/lang/Integer;", "setRefreshTint", "(Ljava/lang/Integer;)V", "refreshTint", "k", "getRefreshContainerColor", "setRefreshContainerColor", "refreshContainerColor", "modules_valdi_ui-valdi_ui_android_impl_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class ValdiRefreshControl extends ValdiScrollView {
    public static final int $stable = 8;
    public final float a;
    public final fwz0 b;
    public boolean c;
    public boolean d;
    public int e;
    public boolean f;
    public float g;

    /* JADX INFO: renamed from: h, reason: from kotlin metadata */
    public ValdiFunction onRefresh;

    /* JADX INFO: renamed from: i, reason: from kotlin metadata */
    public boolean refreshing;

    /* JADX INFO: renamed from: j, reason: from kotlin metadata */
    public Integer refreshTint;

    /* JADX INFO: renamed from: k, reason: from kotlin metadata */
    public Integer refreshContainerColor;

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r0v3, types: [android.view.View, fwz0] */
    public ValdiRefreshControl(Context context) {
        super(context);
        this.a = rhm0.c * getResources().getDisplayMetrics().density;
        ?? fwz0Var = new fwz0(context);
        fwz0Var.setEnabled(false);
        fwz0Var.setImportantForAccessibility(2);
        this.b = fwz0Var;
        addView(fwz0Var);
        gz8.w(this, true).a(new cwz0(this));
    }

    public static final void access$resetPull(ValdiRefreshControl valdiRefreshControl) {
        valdiRefreshControl.c = false;
        valdiRefreshControl.g = 0.0f;
        valdiRefreshControl.b();
    }

    public final void b() {
        boolean z = this.refreshing;
        fwz0 fwz0Var = this.b;
        fwz0Var.setRefreshing(z);
        fwz0Var.setDragging(this.c);
        float f = this.g / this.a;
        float fQ = fum0.q(f - 1.0f, 0.0f, 2.0f);
        if (f > 1.0f) {
            f = (1.0f + fQ) - ((fQ * fQ) / 4.0f);
        }
        fwz0Var.setDistanceFraction(f);
    }

    public final ValdiFunction getOnRefresh() {
        return this.onRefresh;
    }

    public final Integer getRefreshContainerColor() {
        return this.refreshContainerColor;
    }

    public final Integer getRefreshTint() {
        return this.refreshTint;
    }

    public final boolean getRefreshing() {
        return this.refreshing;
    }

    @Override // com.snap.valdi.views.ValdiScrollView, android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        this.c = false;
        this.g = 0.0f;
        b();
        super.onDetachedFromWindow();
    }

    /* JADX WARN: Type inference fix 'apply assigned field type' failed
    java.lang.UnsupportedOperationException: ArgType.getObject(), call class: class jadx.core.dex.instructions.args.ArgType$PrimitiveArg
    	at jadx.core.dex.instructions.args.ArgType.getObject(ArgType.java:596)
    	at jadx.core.dex.attributes.nodes.ClassTypeVarsAttr.getTypeVarsMapFor(ClassTypeVarsAttr.java:35)
    	at jadx.core.dex.nodes.utils.TypeUtils.replaceClassGenerics(TypeUtils.java:177)
    	at jadx.core.dex.visitors.typeinference.FixTypesVisitor.insertExplicitUseCast(FixTypesVisitor.java:397)
    	at jadx.core.dex.visitors.typeinference.FixTypesVisitor.tryFieldTypeWithNewCasts(FixTypesVisitor.java:359)
    	at jadx.core.dex.visitors.typeinference.FixTypesVisitor.applyFieldType(FixTypesVisitor.java:309)
    	at jadx.core.dex.visitors.typeinference.FixTypesVisitor.visit(FixTypesVisitor.java:94)
     */
    @Override // com.snap.valdi.views.ValdiScrollView, com.snap.valdi.views.ValdiView, android.view.ViewGroup, android.view.View
    public void onLayout(boolean changed, int left, int top, int right, int bottom) {
        super.onLayout(changed, left, top, right, bottom);
        this.b.layout(0, 0, getWidth(), getHeight());
    }

    /* JADX WARN: Type inference fix 'apply assigned field type' failed
    java.lang.UnsupportedOperationException: ArgType.getObject(), call class: class jadx.core.dex.instructions.args.ArgType$PrimitiveArg
    	at jadx.core.dex.instructions.args.ArgType.getObject(ArgType.java:596)
    	at jadx.core.dex.attributes.nodes.ClassTypeVarsAttr.getTypeVarsMapFor(ClassTypeVarsAttr.java:35)
    	at jadx.core.dex.nodes.utils.TypeUtils.replaceClassGenerics(TypeUtils.java:177)
    	at jadx.core.dex.visitors.typeinference.FixTypesVisitor.insertExplicitUseCast(FixTypesVisitor.java:397)
    	at jadx.core.dex.visitors.typeinference.FixTypesVisitor.tryFieldTypeWithNewCasts(FixTypesVisitor.java:359)
    	at jadx.core.dex.visitors.typeinference.FixTypesVisitor.applyFieldType(FixTypesVisitor.java:309)
    	at jadx.core.dex.visitors.typeinference.FixTypesVisitor.visit(FixTypesVisitor.java:94)
     */
    @Override // com.snap.valdi.views.ValdiScrollView, com.snap.valdi.views.ValdiView, android.view.View
    public void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        this.b.measure(View.MeasureSpec.makeMeasureSpec(getMeasuredWidth(), 1073741824), View.MeasureSpec.makeMeasureSpec(getMeasuredHeight(), 1073741824));
    }

    @Override // com.snap.valdi.views.ValdiScrollView, defpackage.rdw
    public void onRecognized(qdw gesture, kqz0 state, int x, int y, int offsetX, int offsetY, float invertedVelocityX, float invertedVelocityY, int pointerCount, List<iqz0> pointerLocations) {
        float f;
        int i;
        float f2;
        ValdiFunction valdiFunction;
        if (state == kqz0.c) {
            this.d = (this.onRefresh == null || getHorizontalScroll()) ? false : true;
            this.e = getUnclampedContentOffsetY();
            this.c = this.d && !this.refreshing && pointerCount == 1;
        }
        if (pointerCount > 1) {
            this.c = false;
        }
        boolean z = this.c;
        if (z) {
            int i2 = offsetY - this.e;
            if (i2 < 0) {
                i2 = 0;
            }
            f = i2 * 0.5f;
        } else {
            f = 0.0f;
        }
        this.g = f;
        boolean z2 = state == kqz0.e && this.f && z && f > this.a;
        boolean z3 = this.d;
        if (z3) {
            int i3 = this.e;
            if (offsetY <= i3) {
                i3 = offsetY;
            }
            i = i3;
        } else {
            i = offsetY;
        }
        if (!z3 || offsetY < this.e) {
            f2 = invertedVelocityY;
        } else {
            f2 = invertedVelocityY > 0.0f ? 0.0f : invertedVelocityY;
        }
        super.onRecognized(gesture, state, x, y, offsetX, i, invertedVelocityX, f2, pointerCount, pointerLocations);
        int iOrdinal = state.ordinal();
        if (iOrdinal != 1) {
            if (iOrdinal == 2 || iOrdinal == 3) {
                b();
                return;
            } else if (iOrdinal != 4) {
                return;
            }
        }
        this.c = false;
        this.g = 0.0f;
        b();
        if (z2 && isAttachedToWindow() && (valdiFunction = this.onRefresh) != null) {
            setRefreshing(true);
            ValdiMarshaller valdiMarshallerCreate = ValdiMarshaller.INSTANCE.create();
            try {
                if (!valdiFunction.perform(valdiMarshallerCreate)) {
                    setRefreshing(false);
                }
            } finally {
                valdiMarshallerCreate.destroy();
            }
        }
    }

    @Override // com.snap.valdi.views.ValdiScrollView, com.snap.valdi.views.ValdiView, defpackage.bwz0
    public void prepareForRecycling() {
        this.onRefresh = null;
        setRefreshing(false);
        setRefreshTint(null);
        setRefreshContainerColor(null);
        this.c = false;
        this.g = 0.0f;
        b();
        super.prepareForRecycling();
    }

    public final void setOnRefresh(ValdiFunction valdiFunction) {
        this.onRefresh = valdiFunction;
    }

    public final void setRefreshContainerColor(Integer num) {
        long jI;
        this.refreshContainerColor = num;
        if (num != null) {
            jI = x641.I(num.intValue());
        } else {
            int i = h9m.m;
            jI = h9m.l;
        }
        this.b.m17setContainerColor8_81llA(jI);
    }

    public final void setRefreshTint(Integer num) {
        long jI;
        this.refreshTint = num;
        if (num != null) {
            jI = x641.I(num.intValue());
        } else {
            int i = h9m.m;
            jI = h9m.l;
        }
        this.b.m18setTint8_81llA(jI);
    }

    public final void setRefreshing(boolean z) {
        this.refreshing = z;
        if (z) {
            this.c = false;
            this.g = 0.0f;
        }
        b();
    }
}
