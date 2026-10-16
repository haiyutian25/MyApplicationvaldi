package com.openai.valdi.voice;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import defpackage.zr11;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\n\b\u0007\u0018\u00002\u00020\u0001B1\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00050\u0004\u0012\u0010\b\u0002\u0010\t\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u0007¢\u0006\u0004\b\n\u0010\u000bR\u0016\u0010\f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\f\u0010\rR\u001c\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00050\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\u000fR\u001e\u0010\u0010\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u00078\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011¨\u0006\u0012"}, d2 = {"Lcom/openai/valdi/voice/VoiceServiceConfiguration;", "Lcom/snap/valdi/utils/b;", "", "baseUrl", "", "Lzr11;", "requestHeaders", "Lkotlin/Function0;", "Lruy0;", "onUnauthorized", "<init>", "(Ljava/lang/String;Ljava/util/List;Lkotlin/jvm/functions/Function0;)V", "_baseUrl", "Ljava/lang/String;", "_requestHeaders", "Ljava/util/List;", "_onUnauthorized", "Lkotlin/jvm/functions/Function0;", "modules_oai_voice_service-oai_voice_service_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'baseUrl':s,'requestHeaders':a<r:'[0]'>,'onUnauthorized':f?()", typeReferences = {zr11.class})
public final class VoiceServiceConfiguration extends b {
    private String _baseUrl;
    private Function0 _onUnauthorized;
    private List<zr11> _requestHeaders;

    public VoiceServiceConfiguration(String str, List<zr11> list, Function0 function0) {
        this._baseUrl = str;
        this._requestHeaders = list;
        this._onUnauthorized = function0;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_baseUrl() {
        return this._baseUrl;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final Function0 get_onUnauthorized() {
        return this._onUnauthorized;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final List get_requestHeaders() {
        return this._requestHeaders;
    }
}
