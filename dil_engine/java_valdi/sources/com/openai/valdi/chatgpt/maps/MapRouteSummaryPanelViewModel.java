package com.openai.valdi.chatgpt.maps;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import com.snap.valdi.views.ValdiTextView;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0011\b\u0007\u0018\u00002\u00020\u0001Ba\b\u0017\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\t\u0012\u0006\u0010\f\u001a\u00020\u000b\u0012\u0006\u0010\r\u001a\u00020\u000b¢\u0006\u0004\b\u000e\u0010\u000fR\u0018\u0010\u0010\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u0018\u0010\u0012\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0011R\u0018\u0010\u0013\u001a\u0004\u0018\u00010\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\u0014R\u0018\u0010\u0015\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0015\u0010\u0011R\u0018\u0010\u0016\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0011R\u0018\u0010\u0017\u001a\u0004\u0018\u00010\t8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u0016\u0010\u0019\u001a\u00020\u000b8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0019\u0010\u001aR\u0016\u0010\u001b\u001a\u00020\u000b8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u001a¨\u0006\u001c"}, d2 = {"Lcom/openai/valdi/chatgpt/maps/MapRouteSummaryPanelViewModel;", "Lcom/snap/valdi/utils/b;", "", ValdiTextView.MenuActionTitleKey, "narrative", "Lcom/openai/valdi/chatgpt/maps/MapRouteTravelMode;", "mode", "distance", "duration", "Lcom/openai/valdi/chatgpt/maps/MapRouteDirectionsAvailability;", "directions", "", "compact", "isDarkMode", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/openai/valdi/chatgpt/maps/MapRouteTravelMode;Ljava/lang/String;Ljava/lang/String;Lcom/openai/valdi/chatgpt/maps/MapRouteDirectionsAvailability;ZZ)V", "_title", "Ljava/lang/String;", "_narrative", "_mode", "Lcom/openai/valdi/chatgpt/maps/MapRouteTravelMode;", "_distance", "_duration", "_directions", "Lcom/openai/valdi/chatgpt/maps/MapRouteDirectionsAvailability;", "_compact", "Z", "_isDarkMode", "modules_chatgpt_maps-chatgpt_maps_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'title':s?,'narrative':s?,'mode':r?<e>:'[0]','distance':s?,'duration':s?,'directions':r?:'[1]','compact':b,'isDarkMode':b", typeReferences = {MapRouteTravelMode.class, MapRouteDirectionsAvailability.class})
public final class MapRouteSummaryPanelViewModel extends b {
    private boolean _compact;
    private MapRouteDirectionsAvailability _directions;
    private String _distance;
    private String _duration;
    private boolean _isDarkMode;
    private MapRouteTravelMode _mode;
    private String _narrative;
    private String _title;

    public MapRouteSummaryPanelViewModel(String str, String str2, MapRouteTravelMode mapRouteTravelMode, String str3, String str4, MapRouteDirectionsAvailability mapRouteDirectionsAvailability, boolean z, boolean z2) {
        this._title = str;
        this._narrative = str2;
        this._mode = mapRouteTravelMode;
        this._distance = str3;
        this._duration = str4;
        this._directions = mapRouteDirectionsAvailability;
        this._compact = z;
        this._isDarkMode = z2;
    }
}
