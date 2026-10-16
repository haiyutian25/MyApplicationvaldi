package com.openai.valdi.chatgpt.maps;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Open':0,'Closed':1,'PermanentlyClosed':2", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0004\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004¨\u0006\u0005"}, d2 = {"Lcom/openai/valdi/chatgpt/maps/MapPlaceAvailability;", "", "Open", "Closed", "PermanentlyClosed", "modules_chatgpt_maps-chatgpt_maps_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class MapPlaceAvailability {
    public static final MapPlaceAvailability Closed;
    public static final MapPlaceAvailability Open;
    public static final MapPlaceAvailability PermanentlyClosed;
    public static final /* synthetic */ MapPlaceAvailability[] a;

    static {
        MapPlaceAvailability mapPlaceAvailability = new MapPlaceAvailability("Open", 0);
        Open = mapPlaceAvailability;
        MapPlaceAvailability mapPlaceAvailability2 = new MapPlaceAvailability("Closed", 1);
        Closed = mapPlaceAvailability2;
        MapPlaceAvailability mapPlaceAvailability3 = new MapPlaceAvailability("PermanentlyClosed", 2);
        PermanentlyClosed = mapPlaceAvailability3;
        a = new MapPlaceAvailability[]{mapPlaceAvailability, mapPlaceAvailability2, mapPlaceAvailability3};
    }

    public static MapPlaceAvailability valueOf(String str) {
        return (MapPlaceAvailability) Enum.valueOf(MapPlaceAvailability.class, str);
    }

    public static MapPlaceAvailability[] values() {
        return (MapPlaceAvailability[]) a.clone();
    }
}
