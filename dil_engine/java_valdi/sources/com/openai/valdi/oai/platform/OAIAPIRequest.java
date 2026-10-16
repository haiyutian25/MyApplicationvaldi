package com.openai.valdi.oai.platform;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import defpackage.kee0;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\r\b\u0007\u0018\u00002\u00020\u0001BC\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\u0010\b\u0002\u0010\u000b\u001a\n\u0012\u0004\u0012\u00020\n\u0018\u00010\t¢\u0006\u0004\b\f\u0010\rR\u0016\u0010\u000e\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000e\u0010\u000fR\u0016\u0010\u0010\u001a\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u0018\u0010\u0012\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0011R\u0018\u0010\u0013\u001a\u0004\u0018\u00010\u00078\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\u0014R\u001e\u0010\u0015\u001a\n\u0012\u0004\u0012\u00020\n\u0018\u00010\t8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016¨\u0006\u0017"}, d2 = {"Lcom/openai/valdi/oai/platform/OAIAPIRequest;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/oai/platform/OAIAPIRequestMethod;", "method", "", "path", "bodyJson", "", "useSheepGateway", "", "Lkee0;", "headers", "<init>", "(Lcom/openai/valdi/oai/platform/OAIAPIRequestMethod;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/util/List;)V", "_method", "Lcom/openai/valdi/oai/platform/OAIAPIRequestMethod;", "_path", "Ljava/lang/String;", "_bodyJson", "_useSheepGateway", "Ljava/lang/Boolean;", "_headers", "Ljava/util/List;", "modules_oai_platform_services-oai_platform_services_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'method':r:'[0]','path':s,'bodyJson':s?,'useSheepGateway':b@?,'headers':a?<r:'[1]'>", typeReferences = {OAIAPIRequestMethod.class, kee0.class})
public final class OAIAPIRequest extends b {
    private String _bodyJson;
    private List<kee0> _headers;
    private OAIAPIRequestMethod _method;
    private String _path;
    private Boolean _useSheepGateway;

    public OAIAPIRequest(OAIAPIRequestMethod oAIAPIRequestMethod, String str) {
        this._method = oAIAPIRequestMethod;
        this._path = str;
        this._bodyJson = null;
        this._useSheepGateway = null;
        this._headers = null;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_bodyJson() {
        return this._bodyJson;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final List get_headers() {
        return this._headers;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final OAIAPIRequestMethod get_method() {
        return this._method;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final String get_path() {
        return this._path;
    }

    public OAIAPIRequest(OAIAPIRequestMethod oAIAPIRequestMethod, String str, String str2, Boolean bool, List<kee0> list) {
        this._method = oAIAPIRequestMethod;
        this._path = str;
        this._bodyJson = str2;
        this._useSheepGateway = bool;
        this._headers = list;
    }
}
