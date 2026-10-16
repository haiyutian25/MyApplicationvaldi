package com.openai.valdi.compose;

import android.content.Context;
import android.view.MotionEvent;
import android.view.View;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.views.ValdiRootView;
import defpackage.ezz0;
import defpackage.z001;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0000\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0010\b\u0001\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u0019\u0010\t\u001a\u00020\b2\b\u0010\u0007\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b\t\u0010\nJ\u000f\u0010\f\u001a\u00020\u000bH\u0014¢\u0006\u0004\b\f\u0010\rJ\u000f\u0010\u000e\u001a\u00020\u000bH\u0014¢\u0006\u0004\b\u000e\u0010\rJ\u001f\u0010\u0013\u001a\u00020\u000b2\u0006\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u0011H\u0014¢\u0006\u0004\b\u0013\u0010\u0014R$\u0010\u001c\u001a\u0004\u0018\u00010\u00158\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\u0016\u0010\u0017\u001a\u0004\b\u0018\u0010\u0019\"\u0004\b\u001a\u0010\u001bR*\u0010$\u001a\n\u0012\u0004\u0012\u00020\u000b\u0018\u00010\u001d8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\u001e\u0010\u001f\u001a\u0004\b \u0010!\"\u0004\b\"\u0010#R0\u0010,\u001a\u0010\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u000b\u0018\u00010%8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b&\u0010'\u001a\u0004\b(\u0010)\"\u0004\b*\u0010+R$\u00104\u001a\u0004\u0018\u00010-8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b.\u0010/\u001a\u0004\b0\u00101\"\u0004\b2\u00103R*\u0010<\u001a\u00020\b2\u0006\u00105\u001a\u00020\b8\u0006@FX\u0086\u000e¢\u0006\u0012\n\u0004\b6\u00107\u001a\u0004\b8\u00109\"\u0004\b:\u0010;¨\u0006="}, d2 = {"Lcom/openai/valdi/compose/ComposeValdiRootView;", "Lcom/snap/valdi/views/ValdiRootView;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Landroid/view/MotionEvent;", "event", "", "dispatchTouchEvent", "(Landroid/view/MotionEvent;)Z", "Lruy0;", "onAttachedToWindow", "()V", "onDetachedFromWindow", "Landroid/view/View;", "changedView", "", "visibility", "onVisibilityChanged", "(Landroid/view/View;I)V", "", "b1", "Ljava/lang/Object;", "getAttachmentToken", "()Ljava/lang/Object;", "setAttachmentToken", "(Ljava/lang/Object;)V", "attachmentToken", "Lkotlin/Function0;", "c1", "Lkotlin/jvm/functions/Function0;", "getOnRemeasureRequested", "()Lkotlin/jvm/functions/Function0;", "setOnRemeasureRequested", "(Lkotlin/jvm/functions/Function0;)V", "onRemeasureRequested", "Lkotlin/Function1;", "d1", "Lkotlin/jvm/functions/Function1;", "getOnHostPresenceChanged", "()Lkotlin/jvm/functions/Function1;", "setOnHostPresenceChanged", "(Lkotlin/jvm/functions/Function1;)V", "onHostPresenceChanged", "Lz001;", "e1", "Lz001;", "getTouchInterception", "()Lz001;", "setTouchInterception", "(Lz001;)V", "touchInterception", "value", "j1", "Z", "getExcludeFromFocusAndAccessibility", "()Z", "setExcludeFromFocusAndAccessibility", "(Z)V", "excludeFromFocusAndAccessibility", "public"}, k = 1, mv = {2, 4, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class ComposeValdiRootView extends ValdiRootView {
    public static final int $stable = 8;

    /* JADX INFO: renamed from: b1, reason: from kotlin metadata */
    public Object attachmentToken;

    /* JADX INFO: renamed from: c1, reason: from kotlin metadata */
    public Function0 onRemeasureRequested;

    /* JADX INFO: renamed from: d1, reason: from kotlin metadata */
    public Function1 onHostPresenceChanged;

    /* JADX INFO: renamed from: e1, reason: from kotlin metadata */
    public z001 touchInterception;
    public final int f1;
    public final boolean g1;
    public final boolean h1;
    public final int i1;

    /* JADX INFO: renamed from: j1, reason: from kotlin metadata */
    public boolean excludeFromFocusAndAccessibility;

    public ComposeValdiRootView(Context context) {
        super(context);
        this.f1 = getDescendantFocusability();
        this.g1 = isFocusable();
        this.h1 = isFocusableInTouchMode();
        this.i1 = getImportantForAccessibility();
    }

    /* JADX WARN: Code duplicated, block: B:14:0x0031  */
    @Override // com.snap.valdi.views.ValdiRootView, android.view.ViewGroup, android.view.View
    public boolean dispatchTouchEvent(MotionEvent event) {
        boolean z;
        boolean zDispatchTouchEvent = super.dispatchTouchEvent(event);
        z001 z001Var = this.touchInterception;
        if (z001Var != null) {
            if (event != null) {
                z = event.getPointerCount() == 1 && (event.getActionMasked() == 0 || event.getActionMasked() == 2) && canInterceptTouchEventAtPoint((int) event.getX(), (int) event.getY(), ValdiRootView.a.BottomToTop);
            }
            z001Var.a.invoke(Boolean.valueOf(z));
        }
        return zDispatchTouchEvent;
    }

    public final Object getAttachmentToken() {
        return this.attachmentToken;
    }

    public final boolean getExcludeFromFocusAndAccessibility() {
        return this.excludeFromFocusAndAccessibility;
    }

    public final Function1 getOnHostPresenceChanged() {
        return this.onHostPresenceChanged;
    }

    public final Function0 getOnRemeasureRequested() {
        return this.onRemeasureRequested;
    }

    public final z001 getTouchInterception() {
        return this.touchInterception;
    }

    @Override // com.snap.valdi.views.ValdiRootView, com.snap.valdi.views.ValdiView, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        Function1 function1 = this.onHostPresenceChanged;
        if (function1 != null) {
            function1.invoke(Boolean.valueOf(isShown()));
        }
    }

    @Override // com.snap.valdi.views.ValdiRootView, android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        Function1 function1;
        z001 z001Var = this.touchInterception;
        if (z001Var != null && (function1 = z001Var.a) != null) {
            function1.invoke(Boolean.FALSE);
        }
        super.onDetachedFromWindow();
        ezz0.c(new ps(this, this.attachmentToken, (byte) 22));
    }

    @Override // com.snap.valdi.views.ValdiRootView, android.view.View
    public void onVisibilityChanged(View changedView, int visibility) {
        super.onVisibilityChanged(changedView, visibility);
        Function1 function1 = this.onHostPresenceChanged;
        if (function1 != null) {
            function1.invoke(Boolean.valueOf(isAttachedToWindow() && isShown()));
        }
    }

    public final void setAttachmentToken(Object obj) {
        this.attachmentToken = obj;
    }

    public final void setExcludeFromFocusAndAccessibility(boolean z) {
        if (this.excludeFromFocusAndAccessibility == z) {
            return;
        }
        this.excludeFromFocusAndAccessibility = z;
        boolean z2 = false;
        setFocusable(!z && this.g1);
        if (!z && this.h1) {
            z2 = true;
        }
        setFocusableInTouchMode(z2);
        setDescendantFocusability(z ? 393216 : this.f1);
        setImportantForAccessibility(z ? 4 : this.i1);
        if (z) {
            clearFocus();
        }
    }

    public final void setOnHostPresenceChanged(Function1 function1) {
        this.onHostPresenceChanged = function1;
    }

    public final void setOnRemeasureRequested(Function0 function0) {
        this.onRemeasureRequested = function0;
    }

    public final void setTouchInterception(z001 z001Var) {
        this.touchInterception = z001Var;
    }
}
