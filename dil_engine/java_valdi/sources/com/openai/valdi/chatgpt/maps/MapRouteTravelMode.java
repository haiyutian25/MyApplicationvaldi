package com.openai.valdi.chatgpt.maps;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Driving':0,'Walking':1,'Cycling':2", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0004\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004¨\u0006\u0005"}, d2 = {"Lcom/openai/valdi/chatgpt/maps/MapRouteTravelMode;", "", "Driving", "Walking", "Cycling", "modules_chatgpt_maps-chatgpt_maps_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class MapRouteTravelMode {
    public static final MapRouteTravelMode Cycling;
    public static final MapRouteTravelMode Driving;
    public static final MapRouteTravelMode Walking;
    public static final /* synthetic */ MapRouteTravelMode[] a;

    static {
        MapRouteTravelMode mapRouteTravelMode = new MapRouteTravelMode("Driving", 0);
        Driving = mapRouteTravelMode;
        MapRouteTravelMode mapRouteTravelMode2 = new MapRouteTravelMode("Walking", 1);
        Walking = mapRouteTravelMode2;
        MapRouteTravelMode mapRouteTravelMode3 = new MapRouteTravelMode("Cycling", 2);
        Cycling = mapRouteTravelMode3;
        a = new MapRouteTravelMode[]{mapRouteTravelMode, mapRouteTravelMode2, mapRouteTravelMode3};
    }

    public static MapRouteTravelMode valueOf(String str) {
        return (MapRouteTravelMode) Enum.valueOf(MapRouteTravelMode.class, str);
    }

    public static MapRouteTravelMode[] values() {
        return (MapRouteTravelMode[]) a.clone();
    }
}
