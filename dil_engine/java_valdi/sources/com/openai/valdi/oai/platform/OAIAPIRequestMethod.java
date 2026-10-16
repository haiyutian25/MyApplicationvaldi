package com.openai.valdi.oai.platform;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'HTTP_GET':'GET','HTTP_POST':'POST','HTTP_PUT':'PUT','HTTP_PATCH':'PATCH','HTTP_DELETE':'DELETE'", type = cqz0.b)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/openai/valdi/oai/platform/OAIAPIRequestMethod;", "", "HTTP_GET", "HTTP_POST", "HTTP_PUT", "HTTP_PATCH", "HTTP_DELETE", "modules_oai_platform_services-oai_platform_services_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class OAIAPIRequestMethod {
    public static final OAIAPIRequestMethod HTTP_DELETE;
    public static final OAIAPIRequestMethod HTTP_GET;
    public static final OAIAPIRequestMethod HTTP_PATCH;
    public static final OAIAPIRequestMethod HTTP_POST;
    public static final OAIAPIRequestMethod HTTP_PUT;
    public static final /* synthetic */ OAIAPIRequestMethod[] a;

    static {
        OAIAPIRequestMethod oAIAPIRequestMethod = new OAIAPIRequestMethod("HTTP_GET", 0);
        HTTP_GET = oAIAPIRequestMethod;
        OAIAPIRequestMethod oAIAPIRequestMethod2 = new OAIAPIRequestMethod("HTTP_POST", 1);
        HTTP_POST = oAIAPIRequestMethod2;
        OAIAPIRequestMethod oAIAPIRequestMethod3 = new OAIAPIRequestMethod("HTTP_PUT", 2);
        HTTP_PUT = oAIAPIRequestMethod3;
        OAIAPIRequestMethod oAIAPIRequestMethod4 = new OAIAPIRequestMethod("HTTP_PATCH", 3);
        HTTP_PATCH = oAIAPIRequestMethod4;
        OAIAPIRequestMethod oAIAPIRequestMethod5 = new OAIAPIRequestMethod("HTTP_DELETE", 4);
        HTTP_DELETE = oAIAPIRequestMethod5;
        a = new OAIAPIRequestMethod[]{oAIAPIRequestMethod, oAIAPIRequestMethod2, oAIAPIRequestMethod3, oAIAPIRequestMethod4, oAIAPIRequestMethod5};
    }

    public static OAIAPIRequestMethod valueOf(String str) {
        return (OAIAPIRequestMethod) Enum.valueOf(OAIAPIRequestMethod.class, str);
    }

    public static OAIAPIRequestMethod[] values() {
        return (OAIAPIRequestMethod[]) a.clone();
    }
}
