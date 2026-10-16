package com.openai.valdi.dil;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import java.util.Map;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010$\n\u0002\u0010\u0000\n\u0002\b\b\b\u0007\u0018\u00002\u00020\u0001B+\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0018\b\u0002\u0010\u0006\u001a\u0012\u0012\u0004\u0012\u00020\u0002\u0012\u0006\u0012\u0004\u0018\u00010\u0005\u0018\u00010\u0004¢\u0006\u0004\b\u0007\u0010\bR\u0016\u0010\t\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\t\u0010\nR&\u0010\u000b\u001a\u0012\u0012\u0004\u0012\u00020\u0002\u0012\u0006\u0012\u0004\u0018\u00010\u0005\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000b\u0010\f¨\u0006\r"}, d2 = {"Lcom/openai/valdi/dil/DILRenderWarningAction;", "Lcom/snap/valdi/utils/b;", "", "message", "", "", "properties", "<init>", "(Ljava/lang/String;Ljava/util/Map;)V", "_message", "Ljava/lang/String;", "_properties", "Ljava/util/Map;", "modules_dil_widgets-dil_widgets_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'message':s,'properties':m?<s,u>", typeReferences = {})
public final class DILRenderWarningAction extends b {
    private String _message;
    private Map<String, ? extends Object> _properties;

    public DILRenderWarningAction(String str, Map<String, ? extends Object> map) {
        this._message = str;
        this._properties = map;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_message() {
        return this._message;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final Map get_properties() {
        return this._properties;
    }
}
