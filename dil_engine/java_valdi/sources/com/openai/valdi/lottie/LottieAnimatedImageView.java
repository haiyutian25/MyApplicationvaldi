package com.openai.valdi.lottie;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import com.airbnb.lottie.LottieAnimationView;
import com.snap.valdi.callable.ValdiFunction;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.context.ValdiContext;
import com.snap.valdi.utils.InternedStringCPP;
import com.snap.valdi.utils.ValdiMarshaller;
import com.snap.valdi.views.ValdiView;
import defpackage.amz0;
import defpackage.bj90;
import defpackage.cj90;
import defpackage.cm90;
import defpackage.dj90;
import defpackage.ej90;
import defpackage.eoz0;
import defpackage.fj90;
import defpackage.ft8;
import defpackage.hsn;
import defpackage.rl90;
import defpackage.t950;
import defpackage.trz0;
import io.sentry.r;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000v\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0010\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0000\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0013\b\u0007\u0018\u0000 Z2\u00020\u00012\u00020\u00022\u00020\u0003:\u0002[CB\u000f\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u0017\u0010\u000b\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u000f\u0010\r\u001a\u00020\nH\u0002¢\u0006\u0004\b\r\u0010\u000eJ\u000f\u0010\u000f\u001a\u00020\nH\u0002¢\u0006\u0004\b\u000f\u0010\u000eJ\u000f\u0010\u0010\u001a\u00020\nH\u0002¢\u0006\u0004\b\u0010\u0010\u000eJ\u000f\u0010\u0011\u001a\u00020\nH\u0002¢\u0006\u0004\b\u0011\u0010\u000eJ\u000f\u0010\u0012\u001a\u00020\nH\u0002¢\u0006\u0004\b\u0012\u0010\u000eJ\u0011\u0010\u0014\u001a\u0004\u0018\u00010\u0013H\u0002¢\u0006\u0004\b\u0014\u0010\u0015J\u000f\u0010\u0016\u001a\u00020\nH\u0002¢\u0006\u0004\b\u0016\u0010\u000eJ\u001f\u0010\u001a\u001a\u00020\n2\u0006\u0010\u0018\u001a\u00020\u00172\u0006\u0010\u0019\u001a\u00020\u0017H\u0014¢\u0006\u0004\b\u001a\u0010\u001bJ7\u0010\"\u001a\u00020\n2\u0006\u0010\u001d\u001a\u00020\u001c2\u0006\u0010\u001e\u001a\u00020\u00172\u0006\u0010\u001f\u001a\u00020\u00172\u0006\u0010 \u001a\u00020\u00172\u0006\u0010!\u001a\u00020\u0017H\u0014¢\u0006\u0004\b\"\u0010#J\u000f\u0010$\u001a\u00020\nH\u0014¢\u0006\u0004\b$\u0010\u000eJ\u0015\u0010&\u001a\u00020\n2\u0006\u0010%\u001a\u00020\u0013¢\u0006\u0004\b&\u0010'J\u0015\u0010(\u001a\u00020\n2\u0006\u0010%\u001a\u00020\u001c¢\u0006\u0004\b(\u0010)J\u0015\u0010*\u001a\u00020\n2\u0006\u0010%\u001a\u00020\u0013¢\u0006\u0004\b*\u0010'J\u0015\u0010+\u001a\u00020\n2\u0006\u0010%\u001a\u00020\u0013¢\u0006\u0004\b+\u0010'J\u0015\u0010,\u001a\u00020\n2\u0006\u0010%\u001a\u00020\u0013¢\u0006\u0004\b,\u0010'J\u0017\u0010/\u001a\u00020\n2\b\u0010.\u001a\u0004\u0018\u00010-¢\u0006\u0004\b/\u00100J\u0015\u00102\u001a\u00020\n2\u0006\u0010%\u001a\u000201¢\u0006\u0004\b2\u00103J!\u00107\u001a\u00020\n2\b\u00105\u001a\u0004\u0018\u0001042\u0006\u00106\u001a\u00020\u001cH\u0016¢\u0006\u0004\b7\u00108J\u0017\u0010;\u001a\u00020\n2\u0006\u0010:\u001a\u000209H\u0016¢\u0006\u0004\b;\u0010<J\u000f\u0010=\u001a\u00020\nH\u0016¢\u0006\u0004\b=\u0010\u000eR.\u0010>\u001a\u0004\u0018\u00010-2\b\u0010%\u001a\u0004\u0018\u00010-8\u0006@FX\u0086\u000e¢\u0006\u0012\n\u0004\b>\u0010?\u001a\u0004\b@\u0010A\"\u0004\bB\u00100R\u0014\u0010D\u001a\u00020C8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bD\u0010ER\u0014\u0010G\u001a\u00020F8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bG\u0010HR\u0014\u0010J\u001a\u00020I8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bJ\u0010KR\u0018\u0010L\u001a\u0004\u0018\u0001098\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bL\u0010MR\u0016\u0010N\u001a\u00020\u00138\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bN\u0010OR\u0016\u0010P\u001a\u00020\u00138\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bP\u0010OR\u0016\u0010Q\u001a\u00020\u00138\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bQ\u0010OR\u0016\u0010R\u001a\u00020\u00138\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bR\u0010OR\u0018\u0010S\u001a\u0004\u0018\u00010\u00138\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bS\u0010TR\u0018\u0010U\u001a\u0004\u0018\u00010\u00138\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bU\u0010TR\u0018\u0010V\u001a\u0004\u0018\u00010-8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bV\u0010?R\u0016\u0010W\u001a\u00020\u001c8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bW\u0010XR\u0018\u0010Y\u001a\u0004\u0018\u00010-8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bY\u0010?¨\u0006\\"}, d2 = {"Lcom/openai/valdi/lottie/LottieAnimatedImageView;", "Lcom/snap/valdi/views/ValdiView;", "Lamz0;", "Leoz0;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Lbk90;", "composition", "Lruy0;", "onCompositionLoaded", "(Lbk90;)V", "notifyImageDecodedIfNeeded", "()V", "applyTimeWindow", "applyCurrentTime", "updatePlaybackState", "notifyProgress", "", "durationSeconds", "()Ljava/lang/Double;", "clearLoadedAnimation", "", "widthMeasureSpec", "heightMeasureSpec", "onMeasure", "(II)V", "", "changed", "left", "top", "right", "bottom", "onLayout", "(ZIIII)V", "onAttachedToWindow", "value", "setAdvanceRate", "(D)V", "setShouldLoop", "(Z)V", "setCurrentTime", "setAnimationStartTime", "setAnimationEndTime", "Lcom/snap/valdi/callable/ValdiFunction;", "callback", "setOnProgress", "(Lcom/snap/valdi/callable/ValdiFunction;)V", "", "setObjectFit", "(Ljava/lang/String;)V", "", "asset", "shouldFlip", "onAssetChanged", "(Ljava/lang/Object;Z)V", "Lcom/snap/valdi/context/ValdiContext;", "valdiContext", "onMovedToValdiContext", "(Lcom/snap/valdi/context/ValdiContext;)V", "prepareForRecycling", "onImageDecoded", "Lcom/snap/valdi/callable/ValdiFunction;", "getOnImageDecoded", "()Lcom/snap/valdi/callable/ValdiFunction;", "setOnImageDecoded", "Lfj90;", "animationView", "Lfj90;", "Lrl90;", "fontLoader", "Lrl90;", "Lcm90;", "remoteImageAssetLoader", "Lcm90;", "owningValdiContext", "Lcom/snap/valdi/context/ValdiContext;", "advanceRate", "D", "animationStartTimeSeconds", "animationEndTimeSeconds", "currentTimeOffsetSeconds", "decodedHeight", "Ljava/lang/Double;", "decodedWidth", "lastNotifiedOnImageDecoded", "shouldLoop", "Z", "onProgress", "Companion", "ej90", "modules_lottie-lottie_android_impl_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class LottieAnimatedImageView extends ValdiView implements amz0, eoz0 {
    private static final t950 CURRENT_TIME_PROPERTY;
    public static final ej90 Companion = new ej90();
    private static final t950 DURATION_PROPERTY;
    private static final double MILLISECONDS_PER_SECOND = 1000.0d;
    private static final String TAG = "ValdiLottie";
    private static final t950 TIME_PROPERTY;
    private double advanceRate;
    private double animationEndTimeSeconds;
    private double animationStartTimeSeconds;
    private final fj90 animationView;
    private double currentTimeOffsetSeconds;
    private Double decodedHeight;
    private Double decodedWidth;
    private final rl90 fontLoader;
    private ValdiFunction lastNotifiedOnImageDecoded;
    private ValdiFunction onImageDecoded;
    private ValdiFunction onProgress;
    private ValdiContext owningValdiContext;
    private final cm90 remoteImageAssetLoader;
    private boolean shouldLoop;

    static {
        boolean z = trz0.a;
        CURRENT_TIME_PROPERTY = z ? new InternedStringCPP("currentTime", true) : new ep1("currentTime", (byte) 15);
        TIME_PROPERTY = z ? new InternedStringCPP("time", true) : new ep1("time", (byte) 15);
        DURATION_PROPERTY = z ? new InternedStringCPP("duration", true) : new ep1("duration", (byte) 15);
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r0v0, types: [android.view.View, android.widget.ImageView, com.airbnb.lottie.LottieAnimationView, fj90] */
    public LottieAnimatedImageView(Context context) {
        super(context);
        ?? fj90Var = new fj90(context);
        fj90Var.r = true;
        this.animationView = fj90Var;
        byte b = 6;
        this.fontLoader = new rl90(fj90Var, new ft8(this, b));
        this.remoteImageAssetLoader = new cm90(fj90Var, new hsn(this, b), new mco(this, (byte) 2));
        fj90Var.setScaleType(ImageView.ScaleType.FIT_CENTER);
        fj90Var.setRepeatCount(0);
        fj90Var.setClickable(false);
        fj90Var.setFocusable(false);
        fj90Var.setImportantForAccessibility(2);
        ((LottieAnimationView) fj90Var).h.b.addUpdateListener(new bj90(this, (byte) 0));
        fj90Var.a(new cj90(this));
        fj90Var.setFailureListener(dj90.a);
        addView((View) fj90Var, new ViewGroup.LayoutParams(-1, -1));
    }

    private final void applyCurrentTime() {
        double dP;
        Double dDurationSeconds = durationSeconds();
        if (dDurationSeconds != null) {
            double dDoubleValue = dDurationSeconds.doubleValue();
            if (dDoubleValue <= 0.0d) {
                return;
            }
            double dP2 = fum0.p(this.animationStartTimeSeconds, 0.0d, dDoubleValue);
            double d = this.animationEndTimeSeconds;
            double dP3 = fum0.p(d > 0.0d ? d : dDoubleValue, dP2, dDoubleValue);
            double d2 = dP3 - dP2;
            if (!this.shouldLoop || d2 <= 0.0d) {
                dP = fum0.p(dP2 + this.currentTimeOffsetSeconds, dP2, dP3);
            } else {
                ej90 ej90Var = Companion;
                double d3 = this.currentTimeOffsetSeconds;
                ej90Var.getClass();
                dP = (((d3 % d2) + d2) % d2) + dP2;
            }
            this.animationView.setProgress((float) (dP / dDoubleValue));
        }
    }

    private final void applyTimeWindow() {
        Double dDurationSeconds = durationSeconds();
        if (dDurationSeconds != null) {
            double dDoubleValue = dDurationSeconds.doubleValue();
            if (dDoubleValue <= 0.0d) {
                return;
            }
            double dP = fum0.p(this.animationStartTimeSeconds, 0.0d, dDoubleValue);
            double d = this.animationEndTimeSeconds;
            ((LottieAnimationView) this.animationView).h.t((float) (dP / dDoubleValue), (float) (fum0.p(d > 0.0d ? d : dDoubleValue, dP, dDoubleValue) / dDoubleValue));
        }
    }

    private final void clearLoadedAnimation() {
        fj90 fj90Var = this.animationView;
        fj90Var.r = false;
        this.decodedWidth = null;
        this.decodedHeight = null;
        this.lastNotifiedOnImageDecoded = null;
        fj90Var.e();
        this.animationView.setImageDrawable((Drawable) null);
    }

    private final Double durationSeconds() {
        bk90 composition = this.animationView.getComposition();
        if (composition != null) {
            return Double.valueOf(((double) composition.b()) / MILLISECONDS_PER_SECOND);
        }
        return null;
    }

    private final void notifyImageDecodedIfNeeded() {
        Double d;
        ValdiFunction valdiFunction = this.onImageDecoded;
        if (valdiFunction == null || valdiFunction == this.lastNotifiedOnImageDecoded || (d = this.decodedWidth) == null) {
            return;
        }
        double dDoubleValue = d.doubleValue();
        Double d2 = this.decodedHeight;
        if (d2 != null) {
            double dDoubleValue2 = d2.doubleValue();
            this.lastNotifiedOnImageDecoded = valdiFunction;
            ValdiMarshaller valdiMarshallerCreate = ValdiMarshaller.INSTANCE.create();
            try {
                valdiMarshallerCreate.pushDouble(dDoubleValue);
                valdiMarshallerCreate.pushDouble(dDoubleValue2);
                valdiFunction.perform(valdiMarshallerCreate);
            } finally {
                valdiMarshallerCreate.destroy();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void notifyProgress() {
        Double dDurationSeconds = durationSeconds();
        if (dDurationSeconds != null) {
            double dDoubleValue = dDurationSeconds.doubleValue();
            double progress = ((double) this.animationView.getProgress()) * dDoubleValue;
            double dP = progress - fum0.p(this.animationStartTimeSeconds, 0.0d, dDoubleValue);
            if (dP < 0.0d) {
                dP = 0.0d;
            }
            this.currentTimeOffsetSeconds = dP;
            gz8.O(this, CURRENT_TIME_PROPERTY, Double.valueOf(progress));
            ValdiFunction valdiFunction = this.onProgress;
            if (valdiFunction == null) {
                return;
            }
            ValdiMarshaller valdiMarshallerCreate = ValdiMarshaller.INSTANCE.create();
            try {
                int iPushMap = valdiMarshallerCreate.pushMap(2);
                valdiMarshallerCreate.putMapPropertyDouble(TIME_PROPERTY, iPushMap, progress);
                valdiMarshallerCreate.putMapPropertyDouble(DURATION_PROPERTY, iPushMap, dDoubleValue);
                valdiFunction.perform(valdiMarshallerCreate);
            } finally {
                valdiMarshallerCreate.destroy();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void onCompositionLoaded(bk90 composition) {
        this.fontLoader.e(composition);
        this.remoteImageAssetLoader.i(composition);
        applyTimeWindow();
        applyCurrentTime();
        updatePlaybackState();
        this.decodedWidth = Double.valueOf(composition.k.width());
        this.decodedHeight = Double.valueOf(composition.k.height());
        this.lastNotifiedOnImageDecoded = null;
        notifyImageDecodedIfNeeded();
    }

    private final void updatePlaybackState() {
        if (this.animationView.getComposition() == null) {
            return;
        }
        double d = this.advanceRate;
        fj90 fj90Var = this.animationView;
        if (d == 0.0d) {
            ((LottieAnimationView) fj90Var).l = false;
            ((LottieAnimationView) fj90Var).h.j();
        } else {
            fj90Var.setSpeed((float) d);
            fj90 fj90Var2 = this.animationView;
            ((LottieAnimationView) fj90Var2).n.add(yj90.f);
            ((LottieAnimationView) fj90Var2).h.m();
        }
    }

    public final ValdiFunction getOnImageDecoded() {
        return this.onImageDecoded;
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
    @Override // defpackage.amz0
    public void onAssetChanged(Object asset, boolean shouldFlip) {
        this.fontLoader.b();
        this.remoteImageAssetLoader.b();
        if (this.decodedWidth != null && this.decodedHeight != null) {
            this.currentTimeOffsetSeconds = 0.0d;
        }
        this.animationView.setScaleX(shouldFlip ? -1.0f : 1.0f);
        this.animationView.r = asset != null;
        this.decodedWidth = null;
        this.decodedHeight = null;
        this.lastNotifiedOnImageDecoded = null;
        invalidate();
        if (asset == null) {
            clearLoadedAnimation();
            return;
        }
        if (asset instanceof byte[]) {
            this.animationView.j(new ByteArrayInputStream((byte[]) asset), (String) null);
            return;
        }
        if (asset instanceof InputStream) {
            this.animationView.j((InputStream) asset, (String) null);
            return;
        }
        if (asset instanceof bk90) {
            this.animationView.setComposition((bk90) asset);
            return;
        }
        if (!(asset instanceof String)) {
            r.y(TAG, "Ignoring unsupported animated-image asset ".concat(asset.getClass().getName()));
            clearLoadedAnimation();
            return;
        }
        String str = (String) asset;
        if (z0v0.N(s0v0.e1(str).toString(), "{", false)) {
            this.animationView.k(str, (String) null);
        } else {
            r.y(TAG, "Ignoring a non-JSON string animated-image asset");
            clearLoadedAnimation();
        }
    }

    @Override // com.snap.valdi.views.ValdiView, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        this.fontLoader.d();
        this.remoteImageAssetLoader.g();
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
    @Override // com.snap.valdi.views.ValdiView, android.view.ViewGroup, android.view.View
    public void onLayout(boolean changed, int left, int top, int right, int bottom) {
        super.onLayout(changed, left, top, right, bottom);
        this.animationView.layout(0, 0, right - left, bottom - top);
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
    @Override // com.snap.valdi.views.ValdiView, android.view.View
    public void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        this.animationView.measure(View.MeasureSpec.makeMeasureSpec(getMeasuredWidth(), 1073741824), View.MeasureSpec.makeMeasureSpec(getMeasuredHeight(), 1073741824));
    }

    @Override // defpackage.eoz0
    public void onMovedToValdiContext(ValdiContext valdiContext) {
        if (this.owningValdiContext == valdiContext) {
            this.fontLoader.d();
            this.remoteImageAssetLoader.g();
            return;
        }
        this.owningValdiContext = valdiContext;
        rl90 rl90Var = this.fontLoader;
        bk90 bk90Var = rl90Var.c;
        if (bk90Var != null) {
            rl90Var.e(bk90Var);
        }
        cm90 cm90Var = this.remoteImageAssetLoader;
        bk90 bk90Var2 = cm90Var.d;
        if (bk90Var2 == null) {
            return;
        }
        cm90Var.i(bk90Var2);
        cm90Var.a.invalidate();
    }

    @Override // com.snap.valdi.views.ValdiView, defpackage.bwz0
    public void prepareForRecycling() {
        this.fontLoader.b();
        this.remoteImageAssetLoader.b();
        this.owningValdiContext = null;
        fj90 fj90Var = this.animationView;
        fj90Var.r = false;
        fj90Var.e();
        this.animationView.setImageDrawable((Drawable) null);
        this.animationView.setScaleX(1.0f);
        setOnImageDecoded(null);
        this.onProgress = null;
        this.decodedWidth = null;
        this.decodedHeight = null;
    }

    public final void setAdvanceRate(double value) {
        this.advanceRate = value;
        updatePlaybackState();
    }

    public final void setAnimationEndTime(double value) {
        this.animationEndTimeSeconds = value;
        applyTimeWindow();
        applyCurrentTime();
    }

    public final void setAnimationStartTime(double value) {
        this.animationStartTimeSeconds = value;
        applyTimeWindow();
        applyCurrentTime();
    }

    public final void setCurrentTime(double value) {
        this.currentTimeOffsetSeconds = value;
        applyCurrentTime();
    }

    /* JADX WARN: Code duplicated, block: B:20:0x0039  */
    public final void setObjectFit(String value) {
        ImageView.ScaleType scaleType;
        LottieAnimationView lottieAnimationView = this.animationView;
        int iHashCode = value.hashCode();
        if (iHashCode != 3143043) {
            if (iHashCode != 3387192) {
                if (iHashCode == 94852023 && value.equals("cover")) {
                    scaleType = ImageView.ScaleType.CENTER_CROP;
                } else {
                    scaleType = ImageView.ScaleType.FIT_CENTER;
                }
            } else if (value.equals("none")) {
                scaleType = ImageView.ScaleType.CENTER;
            } else {
                scaleType = ImageView.ScaleType.FIT_CENTER;
            }
        } else if (value.equals("fill")) {
            scaleType = ImageView.ScaleType.FIT_XY;
        } else {
            scaleType = ImageView.ScaleType.FIT_CENTER;
        }
        lottieAnimationView.setScaleType(scaleType);
    }

    public final void setOnImageDecoded(ValdiFunction valdiFunction) {
        this.onImageDecoded = valdiFunction;
        if (valdiFunction == null) {
            this.lastNotifiedOnImageDecoded = null;
        } else {
            notifyImageDecodedIfNeeded();
        }
    }

    public final void setOnProgress(ValdiFunction callback) {
        this.onProgress = callback;
    }

    public final void setShouldLoop(boolean value) {
        this.shouldLoop = value;
        this.animationView.setRepeatCount(value ? -1 : 0);
        updatePlaybackState();
    }
}
