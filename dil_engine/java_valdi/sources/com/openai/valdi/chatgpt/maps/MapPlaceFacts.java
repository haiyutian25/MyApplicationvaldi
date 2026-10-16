package com.openai.valdi.chatgpt.maps;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0012\b\u0007\u0018\u00002\u00020\u0001B}\b\u0017\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0002\u0012\u0006\u0010\n\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\u0010\u0010\u0011R\u0018\u0010\u0012\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013R\u0018\u0010\u0014\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015R\u0018\u0010\u0016\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0013R\u0018\u0010\u0017\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0013R\u0018\u0010\u0018\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0018\u0010\u0015R\u0018\u0010\u0019\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0019\u0010\u0013R\u0016\u0010\u001a\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010\u0013R\u0018\u0010\u001b\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u0013R\u0018\u0010\u001c\u001a\u0004\u0018\u00010\f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u001dR\u0018\u0010\u001e\u001a\u0004\u0018\u00010\u000e8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001e\u0010\u001f¨\u0006 "}, d2 = {"Lcom/openai/valdi/chatgpt/maps/MapPlaceFacts;", "Lcom/snap/valdi/utils/b;", "", "label", "", "rating", "ratingLabel", "category", "priceLevel", "priceLabel", "currencySymbol", "hoursLabel", "Lcom/openai/valdi/chatgpt/maps/MapPlaceAvailability;", "availability", "Lcom/openai/valdi/chatgpt/maps/MapPlaceHoursChange;", "hoursChange", "<init>", "(Ljava/lang/String;Ljava/lang/Double;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Double;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/openai/valdi/chatgpt/maps/MapPlaceAvailability;Lcom/openai/valdi/chatgpt/maps/MapPlaceHoursChange;)V", "_label", "Ljava/lang/String;", "_rating", "Ljava/lang/Double;", "_ratingLabel", "_category", "_priceLevel", "_priceLabel", "_currencySymbol", "_hoursLabel", "_availability", "Lcom/openai/valdi/chatgpt/maps/MapPlaceAvailability;", "_hoursChange", "Lcom/openai/valdi/chatgpt/maps/MapPlaceHoursChange;", "modules_chatgpt_maps-chatgpt_maps_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'label':s?,'rating':d@?,'ratingLabel':s?,'category':s?,'priceLevel':d@?,'priceLabel':s?,'currencySymbol':s,'hoursLabel':s?,'availability':r?<e>:'[0]','hoursChange':r?:'[1]'", typeReferences = {MapPlaceAvailability.class, MapPlaceHoursChange.class})
public final class MapPlaceFacts extends b {
    private MapPlaceAvailability _availability;
    private String _category;
    private String _currencySymbol;
    private MapPlaceHoursChange _hoursChange;
    private String _hoursLabel;
    private String _label;
    private String _priceLabel;
    private Double _priceLevel;
    private Double _rating;
    private String _ratingLabel;

    public MapPlaceFacts(String str, Double d, String str2, String str3, Double d2, String str4, String str5, String str6, MapPlaceAvailability mapPlaceAvailability, MapPlaceHoursChange mapPlaceHoursChange) {
        this._label = str;
        this._rating = d;
        this._ratingLabel = str2;
        this._category = str3;
        this._priceLevel = d2;
        this._priceLabel = str4;
        this._currencySymbol = str5;
        this._hoursLabel = str6;
        this._availability = mapPlaceAvailability;
        this._hoursChange = mapPlaceHoursChange;
    }
}
