package com.openai.valdi.dil;

import com.snap.valdi.utils.b;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes5.dex */
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0014\b\u0007\u0018\u00002\u00020\u0001Ba\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\u000b\u0010\fR\u0016\u0010\r\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\u000eR\u0016\u0010\u000f\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\u000eR\u0018\u0010\u0010\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u000eR\u0018\u0010\u0011\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\u000eR\u0018\u0010\u0012\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u000eR\u0018\u0010\u0013\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\u000eR\u0018\u0010\u0014\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010\u000eR\u0018\u0010\u0015\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0015\u0010\u000e¨\u0006\u0016"}, d2 = {"Lcom/openai/valdi/dil/DILRenderFailureAction;", "Lcom/snap/valdi/utils/b;", "", "name", "message", "stack", "phase", "nodePath", "nodeType", "propName", "expression", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "_name", "Ljava/lang/String;", "_message", "_stack", "_phase", "_nodePath", "_nodeType", "_propName", "_expression", "modules_dil_widgets-dil_widgets_api_kt_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'name':s,'message':s,'stack':s?,'phase':s?,'nodePath':s?,'nodeType':s?,'propName':s?,'expression':s?", typeReferences = {})
public final class DILRenderFailureAction extends b {
    private String _expression;
    private String _message;
    private String _name;
    private String _nodePath;
    private String _nodeType;
    private String _phase;
    private String _propName;
    private String _stack;

    public DILRenderFailureAction(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8) {
        this._name = str;
        this._message = str2;
        this._stack = str3;
        this._phase = str4;
        this._nodePath = str5;
        this._nodeType = str6;
        this._propName = str7;
        this._expression = str8;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final String get_expression() {
        return this._expression;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final String get_message() {
        return this._message;
    }

    /* JADX INFO: renamed from: c, reason: from getter */
    public final String get_name() {
        return this._name;
    }

    /* JADX INFO: renamed from: d, reason: from getter */
    public final String get_nodePath() {
        return this._nodePath;
    }

    /* JADX INFO: renamed from: e, reason: from getter */
    public final String get_nodeType() {
        return this._nodeType;
    }

    /* JADX INFO: renamed from: f, reason: from getter */
    public final String get_phase() {
        return this._phase;
    }

    /* JADX INFO: renamed from: g, reason: from getter */
    public final String get_propName() {
        return this._propName;
    }

    /* JADX INFO: renamed from: h, reason: from getter */
    public final String get_stack() {
        return this._stack;
    }
}
