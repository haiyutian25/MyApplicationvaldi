package com.openai.valdi.beacon.artwork;

import android.content.Context;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.views.ValdiGeneratedRootView;
import defpackage.dx8;
import defpackage.ex8;
import defpackage.gx8;
import defpackage.r101;
import defpackage.wn20;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 \b2\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00030\u0001:\u0001\tB\u000f\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007¨\u0006\n"}, d2 = {"Lcom/openai/valdi/beacon/artwork/BeaconArtwork;", "Lcom/snap/valdi/views/ValdiGeneratedRootView;", "Lgx8;", "Lex8;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Companion", "dx8", "modules_chatgpt_beacon_artwork-chatgpt_beacon_artwork_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class BeaconArtwork extends ValdiGeneratedRootView<gx8, ex8> {
    public static final dx8 Companion = new dx8();

    public BeaconArtwork(Context context) {
        super(context);
    }

    public static final /* synthetic */ String access$getComponentPath$cp() {
        return "BeaconArtwork@chatgpt_beacon_artwork/src/BeaconArtwork";
    }

    public static final BeaconArtwork create(wn20 wn20Var, r101 r101Var) {
        Companion.getClass();
        BeaconArtwork beaconArtwork = new BeaconArtwork(wn20Var.getContext());
        wn20Var.v(beaconArtwork, access$getComponentPath$cp(), null, null, null);
        return beaconArtwork;
    }

    public static final BeaconArtwork create(wn20 wn20Var, gx8 gx8Var, ex8 ex8Var, r101 r101Var, Function1 function1) {
        Companion.getClass();
        BeaconArtwork beaconArtwork = new BeaconArtwork(wn20Var.getContext());
        wn20Var.v(beaconArtwork, access$getComponentPath$cp(), gx8Var, ex8Var, function1);
        return beaconArtwork;
    }
}
