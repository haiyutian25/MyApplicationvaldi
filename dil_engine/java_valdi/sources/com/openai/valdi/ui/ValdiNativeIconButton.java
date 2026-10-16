package com.openai.valdi.ui;

import android.content.Context;
import android.util.AttributeSet;
import android.view.MotionEvent;
import androidx.compose.foundation.layout.b;
import com.snap.valdi.callable.ValdiFunction;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.a101;
import defpackage.bwz0;
import defpackage.msz0;
import defpackage.nc1;
import defpackage.p0n;
import defpackage.y001;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\b\n\u0002\u0010\u000e\n\u0002\b\u0011\b\u0007\u0018\u00002\u00020\u00012\u00020\u00022\u00020\u0003B\u000f\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u000f\u0010\t\u001a\u00020\bH\u0017¢\u0006\u0004\b\t\u0010\nJ\u0017\u0010\u000e\u001a\u00020\r2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0004\b\u000e\u0010\u000fR$\u0010\u0017\u001a\u0004\u0018\u00010\u00108\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\u0011\u0010\u0012\u001a\u0004\b\u0013\u0010\u0014\"\u0004\b\u0015\u0010\u0016R+\u0010 \u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u00188F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b\u001a\u0010\u001b\u001a\u0004\b\u001c\u0010\u001d\"\u0004\b\u001e\u0010\u001fR+\u0010'\u001a\u00020!2\u0006\u0010\u0019\u001a\u00020!8F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b\"\u0010\u001b\u001a\u0004\b#\u0010$\"\u0004\b%\u0010&R+\u0010+\u001a\u00020!2\u0006\u0010\u0019\u001a\u00020!8F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b(\u0010\u001b\u001a\u0004\b)\u0010$\"\u0004\b*\u0010&R/\u00101\u001a\u0004\u0018\u00010\u00182\b\u0010\u0019\u001a\u0004\u0018\u00010\u00188F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b,\u0010\u001b\u001a\u0004\b-\u0010.\"\u0004\b/\u00100¨\u00062"}, d2 = {"Lcom/openai/valdi/ui/ValdiNativeIconButton;", "Lh4;", "La101;", "Lbwz0;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Lruy0;", "Content", "(Ls2n;I)V", "Landroid/view/MotionEvent;", "event", "Ly001;", "processTouchEvent", "(Landroid/view/MotionEvent;)Ly001;", "Lcom/snap/valdi/callable/ValdiFunction;", "j", "Lcom/snap/valdi/callable/ValdiFunction;", "getOnNativePress", "()Lcom/snap/valdi/callable/ValdiFunction;", "setOnNativePress", "(Lcom/snap/valdi/callable/ValdiFunction;)V", "onNativePress", "", "<set-?>", "k", "Lyrc0;", "getButtonEnabled", "()Z", "setButtonEnabled", "(Z)V", "buttonEnabled", "", "l", "getButtonLabel", "()Ljava/lang/String;", "setButtonLabel", "(Ljava/lang/String;)V", "buttonLabel", "m", "getButtonAccessibilityId", "setButtonAccessibilityId", "buttonAccessibilityId", "n", "getButtonSelected", "()Ljava/lang/Boolean;", "setButtonSelected", "(Ljava/lang/Boolean;)V", "buttonSelected", "modules_valdi_ui-valdi_ui_android_impl_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class ValdiNativeIconButton extends h4 implements a101, bwz0 {
    public static final int $stable = 8;

    /* JADX INFO: renamed from: j, reason: from kotlin metadata */
    public ValdiFunction onNativePress;
    public final lqh0 k;
    public final lqh0 l;
    public final lqh0 m;
    public final lqh0 n;

    public ValdiNativeIconButton(Context context) {
        super(context, (AttributeSet) null);
        this.k = d7q0.g(Boolean.FALSE);
        this.l = d7q0.g("");
        this.m = d7q0.g("");
        this.n = d7q0.g((Object) null);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static final void access$dispatchPress(ValdiNativeIconButton valdiNativeIconButton) {
        ValdiFunction valdiFunction;
        if (valdiNativeIconButton.getButtonEnabled() && valdiNativeIconButton.isAttachedToWindow() && (valdiFunction = valdiNativeIconButton.onNativePress) != null) {
            ValdiMarshaller valdiMarshallerCreate = ValdiMarshaller.INSTANCE.create();
            try {
                valdiFunction.perform(valdiMarshallerCreate);
            } finally {
                valdiMarshallerCreate.destroy();
            }
        }
    }

    public void Content(s2n s2nVar, int i) {
        yr00 yr00Var = (yr00) s2nVar;
        yr00Var.p0(-955318880);
        io6.e(new mq5(0, this, ValdiNativeIconButton.class, "dispatchPress", "dispatchPress()V", 0, (byte) 7), xyq0.b(b.e(odc0.a, 1.0f), false, new nc1(this, (byte) 5)), getButtonEnabled(), (mo20) null, p0n.a, yr00Var, 196608, 24);
        l4n0 l4n0VarY = yr00Var.y();
        if (l4n0VarY != null) {
            l4n0VarY.d = new msz0(this, i);
        }
    }

    @Override // defpackage.a101
    public boolean allowsSameViewGestureRecognizers() {
        return false;
    }

    public final String getButtonAccessibilityId() {
        return (String) this.m.getValue();
    }

    public final boolean getButtonEnabled() {
        return ((Boolean) this.k.getValue()).booleanValue();
    }

    public final String getButtonLabel() {
        return (String) this.l.getValue();
    }

    public final Boolean getButtonSelected() {
        return (Boolean) this.n.getValue();
    }

    public final ValdiFunction getOnNativePress() {
        return this.onNativePress;
    }

    @Override // defpackage.a101
    public Boolean hitTest(MotionEvent motionEvent) {
        return null;
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // defpackage.a101
    public y001 processTouchEvent(MotionEvent event) {
        return dispatchTouchEvent(event) ? y001.a : y001.b;
    }

    public final void setButtonAccessibilityId(String str) {
        this.m.setValue(str);
    }

    public final void setButtonEnabled(boolean z) {
        this.k.setValue(Boolean.valueOf(z));
    }

    public final void setButtonLabel(String str) {
        this.l.setValue(str);
    }

    public final void setButtonSelected(Boolean bool) {
        this.n.setValue(bool);
    }

    public final void setOnNativePress(ValdiFunction valdiFunction) {
        this.onNativePress = valdiFunction;
    }

    @Override // defpackage.bwz0
    public void prepareForRecycling() {
    }
}
