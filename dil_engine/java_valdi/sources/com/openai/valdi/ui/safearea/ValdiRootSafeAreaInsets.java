package com.openai.valdi.ui.safearea;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0006\n\u0002\b\f\b\u0007\u0018\u00002\u00020\u0001B)\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0002¢\u0006\u0004\b\u0007\u0010\bR\u0016\u0010\t\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\t\u0010\nR\u0016\u0010\u000b\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000b\u0010\nR\u0016\u0010\f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\nR\u0016\u0010\r\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\n¨\u0006\u000e"}, d2 = {"Lcom/openai/valdi/ui/safearea/ValdiRootSafeAreaInsets;", "Lcom/snap/valdi/utils/b;", "", "topInset", "rightInset", "bottomInset", "leftInset", "<init>", "(DDDD)V", "_topInset", "D", "_rightInset", "_bottomInset", "_leftInset", "modules_valdi_root_safe_area-valdi_root_safe_area_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'topInset':d,'rightInset':d,'bottomInset':d,'leftInset':d", typeReferences = {})
public final class ValdiRootSafeAreaInsets extends b {
    private double _bottomInset;
    private double _leftInset;
    private double _rightInset;
    private double _topInset;

    public ValdiRootSafeAreaInsets(double d, double d2, double d3, double d4) {
        this._topInset = d;
        this._rightInset = d2;
        this._bottomInset = d3;
        this._leftInset = d4;
    }
}
