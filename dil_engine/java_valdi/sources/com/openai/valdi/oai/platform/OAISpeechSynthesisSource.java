package com.openai.valdi.oai.platform;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import com.snap.valdi.views.ValdiTextView;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0002\b\u000e\b\u0007\u0018\u00002\u00020\u0001BM\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\n\u0010\u000bR\u0016\u0010\f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\rR\u0018\u0010\u000e\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\rR\u0018\u0010\u000f\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\rR\u0018\u0010\u0010\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u0018\u0010\u0012\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\rR\u0018\u0010\u0013\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\r¨\u0006\u0014"}, d2 = {"Lcom/openai/valdi/oai/platform/OAISpeechSynthesisSource;", "Lcom/snap/valdi/utils/b;", "", ValdiTextView.TextKey, "language", "pronunciationHint", "", "playbackSpeed", "version", "source", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Double;Ljava/lang/String;Ljava/lang/String;)V", "_text", "Ljava/lang/String;", "_language", "_pronunciationHint", "_playbackSpeed", "Ljava/lang/Double;", "_version", "_source", "modules_oai_platform_services-oai_platform_services_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'text':s,'language':s?,'pronunciationHint':s?,'playbackSpeed':d@?,'version':s?,'source':s?", typeReferences = {})
public final class OAISpeechSynthesisSource extends b {
    private String _language;
    private Double _playbackSpeed;
    private String _pronunciationHint;
    private String _source;
    private String _text;
    private String _version;

    public OAISpeechSynthesisSource(String str, String str2, String str3, Double d, String str4, String str5) {
        this._text = str;
        this._language = str2;
        this._pronunciationHint = str3;
        this._playbackSpeed = d;
        this._version = str4;
        this._source = str5;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_language() {
        return this._language;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final Double get_playbackSpeed() {
        return this._playbackSpeed;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_pronunciationHint() {
        return this._pronunciationHint;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final String get_source() {
        return this._source;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final String get_text() {
        return this._text;
    }

    /* JADX INFO: renamed from: f, reason: from getter */
    public final String get_version() {
        return this._version;
    }
}
