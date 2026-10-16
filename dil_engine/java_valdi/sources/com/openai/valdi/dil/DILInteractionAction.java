package com.openai.valdi.dil;

import com.snap.valdi.utils.b;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes5.dex */
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0010\b\u0007\u0018\u00002\u00020\u0001BE\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0002\u0012\u0006\u0010\b\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nR\u0016\u0010\u000b\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000b\u0010\fR\u0016\u0010\r\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\fR\u0018\u0010\u000e\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\fR\u0018\u0010\u000f\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\fR\u0018\u0010\u0010\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\fR\u0016\u0010\u0011\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\f¨\u0006\u0012"}, d2 = {"Lcom/openai/valdi/dil/DILInteractionAction;", "Lcom/snap/valdi/utils/b;", "", "target", "affordance", "widgetName", "value", "hostActionType", "dilVersion", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "_target", "Ljava/lang/String;", "_affordance", "_widgetName", "_value", "_hostActionType", "_dilVersion", "modules_dil_widgets-dil_widgets_api_kt_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'target':s,'affordance':s,'widgetName':s?,'value':s?,'hostActionType':s?,'dilVersion':s", typeReferences = {})
public final class DILInteractionAction extends b {
    private String _affordance;
    private String _dilVersion;
    private String _hostActionType;
    private String _target;
    private String _value;
    private String _widgetName;

    public DILInteractionAction(String str, String str2, String str3, String str4, String str5, String str6) {
        this._target = str;
        this._affordance = str2;
        this._widgetName = str3;
        this._value = str4;
        this._hostActionType = str5;
        this._dilVersion = str6;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_affordance() {
        return this._affordance;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final String get_dilVersion() {
        return this._dilVersion;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_hostActionType() {
        return this._hostActionType;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final String get_target() {
        return this._target;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final String get_value() {
        return this._value;
    }

    /* JADX INFO: renamed from: f, reason: from getter */
    public final String get_widgetName() {
        return this._widgetName;
    }
}
