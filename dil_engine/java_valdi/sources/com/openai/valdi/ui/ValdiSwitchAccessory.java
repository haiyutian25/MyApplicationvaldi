package com.openai.valdi.ui;

import android.content.Context;
import android.util.AttributeSet;
import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.klm0;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\b\u000f\b\u0007\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005R+\u0010\u000e\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\u00068F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b\b\u0010\t\u001a\u0004\b\n\u0010\u000b\"\u0004\b\f\u0010\rR+\u0010\u0012\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\u00068F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b\u000f\u0010\t\u001a\u0004\b\u0010\u0010\u000b\"\u0004\b\u0011\u0010\rR1\u0010\u0019\u001a\u00020\u00132\u0006\u0010\u0007\u001a\u00020\u00138F@FX\u0086\u008e\u0002ø\u0001\u0000ø\u0001\u0001¢\u0006\u0012\n\u0004\b\u0014\u0010\t\u001a\u0004\b\u0015\u0010\u0016\"\u0004\b\u0017\u0010\u0018R1\u0010\u001d\u001a\u00020\u00132\u0006\u0010\u0007\u001a\u00020\u00138F@FX\u0086\u008e\u0002ø\u0001\u0000ø\u0001\u0001¢\u0006\u0012\n\u0004\b\u001a\u0010\t\u001a\u0004\b\u001b\u0010\u0016\"\u0004\b\u001c\u0010\u0018R1\u0010!\u001a\u00020\u00132\u0006\u0010\u0007\u001a\u00020\u00138F@FX\u0086\u008e\u0002ø\u0001\u0000ø\u0001\u0001¢\u0006\u0012\n\u0004\b\u001e\u0010\t\u001a\u0004\b\u001f\u0010\u0016\"\u0004\b \u0010\u0018\u0082\u0002\u000b\n\u0005\b¡\u001e0\u0001\n\u0002\b!¨\u0006\""}, d2 = {"Lcom/openai/valdi/ui/ValdiSwitchAccessory;", "Lh4;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "", "<set-?>", "j", "Lyrc0;", "getChecked", "()Z", "setChecked", "(Z)V", "checked", "k", "getSwitchEnabled", "setSwitchEnabled", "switchEnabled", "Lh9m;", "l", "getCheckedTrackColor-0d7_KjU", "()J", "setCheckedTrackColor-8_81llA", "(J)V", "checkedTrackColor", "m", "getTrackColor-0d7_KjU", "setTrackColor-8_81llA", "trackColor", "n", "getThumbColor-0d7_KjU", "setThumbColor-8_81llA", "thumbColor", "modules_valdi_ui-valdi_ui_android_impl_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class ValdiSwitchAccessory extends h4 {
    public final lqh0 j;
    public final lqh0 k;
    public final lqh0 l;
    public final lqh0 m;
    public final lqh0 n;

    public ValdiSwitchAccessory(Context context) {
        super(context, (AttributeSet) null);
        this.j = d7q0.g(Boolean.FALSE);
        this.k = d7q0.g(Boolean.TRUE);
        long j = h9m.l;
        this.l = d7q0.g(new h9m(j));
        this.m = d7q0.g(new h9m(j));
        this.n = d7q0.g(new h9m(j));
    }

    /* JADX WARN: Multi-variable type inference failed */
    public final void Content(s2n s2nVar, int i) {
        fwv0 fwv0VarJ;
        yr00 yr00Var = (yr00) s2nVar;
        yr00Var.p0(1473308758);
        if ((((yr00Var.h(this) ? 4 : 2) | i) & 11) == 2 && yr00Var.L()) {
            yr00Var.f0();
        } else {
            lpn lpnVarB = qv21.b(this);
            boolean z = (lpnVarB == null || (lpnVarB instanceof s4n0)) ? false : true;
            if (z) {
                yr00Var.n0(-1129044716);
                fwv0VarJ = xs51.j(0L, 0L, 0L, ((eem) yr00Var.l(fem.a)).f, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, yr00Var, 65519);
                yr00Var = yr00Var;
                yr00Var.s(false);
            } else {
                yr00Var.n0(-1128915818);
                long jM1getThumbColor0d7_KjU = m1getThumbColor0d7_KjU();
                long jM0getCheckedTrackColor0d7_KjU = m0getCheckedTrackColor0d7_KjU();
                long j = h9m.k;
                fwv0VarJ = xs51.j(jM1getThumbColor0d7_KjU, jM0getCheckedTrackColor0d7_KjU, j, m1getThumbColor0d7_KjU(), m2getTrackColor0d7_KjU(), j, m1getThumbColor0d7_KjU(), m0getCheckedTrackColor0d7_KjU(), j, m1getThumbColor0d7_KjU(), m2getTrackColor0d7_KjU(), j, yr00Var, 34952);
                yr00Var = yr00Var;
                yr00Var.s(false);
            }
            rc51.c(getChecked(), (Function1) null, oy51.c(odc0.a, (z || getSwitchEnabled()) ? 1.0f : 0.55f), getSwitchEnabled(), fwv0VarJ, (hqc0) null, yr00Var, 48, 72);
        }
        l4n0 l4n0VarY = yr00Var.y();
        if (l4n0VarY != null) {
            l4n0VarY.d = new klm0(this, i);
        }
    }

    public final boolean getChecked() {
        return ((Boolean) this.j.getValue()).booleanValue();
    }

    /* JADX INFO: renamed from: getCheckedTrackColor-0d7_KjU, reason: not valid java name */
    public final long m0getCheckedTrackColor0d7_KjU() {
        return ((h9m) this.l.getValue()).a;
    }

    public final boolean getSwitchEnabled() {
        return ((Boolean) this.k.getValue()).booleanValue();
    }

    /* JADX INFO: renamed from: getThumbColor-0d7_KjU, reason: not valid java name */
    public final long m1getThumbColor0d7_KjU() {
        return ((h9m) this.n.getValue()).a;
    }

    /* JADX INFO: renamed from: getTrackColor-0d7_KjU, reason: not valid java name */
    public final long m2getTrackColor0d7_KjU() {
        return ((h9m) this.m.getValue()).a;
    }

    public final void setChecked(boolean z) {
        this.j.setValue(Boolean.valueOf(z));
    }

    /* JADX INFO: renamed from: setCheckedTrackColor-8_81llA, reason: not valid java name */
    public final void m3setCheckedTrackColor8_81llA(long j) {
        this.l.setValue(new h9m(j));
    }

    public final void setSwitchEnabled(boolean z) {
        this.k.setValue(Boolean.valueOf(z));
    }

    /* JADX INFO: renamed from: setThumbColor-8_81llA, reason: not valid java name */
    public final void m4setThumbColor8_81llA(long j) {
        this.n.setValue(new h9m(j));
    }

    /* JADX INFO: renamed from: setTrackColor-8_81llA, reason: not valid java name */
    public final void m5setTrackColor8_81llA(long j) {
        this.m.setValue(new h9m(j));
    }
}
