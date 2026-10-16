package com.openai.valdi.chatgpt.explorefeed;

import com.openai.valdi.dil.DILMessageMetadata;
import com.openai.valdi.dil.DILWidgetActionRequest;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import defpackage.nes;
import defpackage.tgs;
import defpackage.wgs;
import defpackage.xgs;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\r\b\u0007\u0018\u00002\u00020\u0001B\u0097\u0001\b\u0017\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002\u0012\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00050\u0002\u0012\u0018\u0010\u000b\u001a\u0014\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\n0\u0007\u0012\u001e\u0010\u000e\u001a\u001a\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\t\u0012\n\u0012\b\u0012\u0004\u0012\u00020\r0\f0\u0007\u0012\"\b\u0002\u0010\u0010\u001a\u001c\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\t\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u000f0\f\u0018\u00010\u0007\u0012\u0012\u0010\u0013\u001a\u000e\u0012\u0004\u0012\u00020\u0012\u0012\u0004\u0012\u00020\n0\u0011¢\u0006\u0004\b\u0014\u0010\u0015R\u001c\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00030\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0017R\u001c\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00050\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0018\u0010\u0017R(\u0010\u0019\u001a\u0014\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\n0\u00078\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0019\u0010\u001aR.\u0010\u001b\u001a\u001a\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\t\u0012\n\u0012\b\u0012\u0004\u0012\u00020\r0\f0\u00078\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u001aR0\u0010\u001c\u001a\u001c\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\t\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u000f0\f\u0018\u00010\u00078\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u001aR\"\u0010\u001d\u001a\u000e\u0012\u0004\u0012\u00020\u0012\u0012\u0004\u0012\u00020\n0\u00118\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u001d\u0010\u001e¨\u0006\u001f"}, d2 = {"Lcom/openai/valdi/chatgpt/explorefeed/ChatGPTExploreScreenActions;", "Lcom/snap/valdi/utils/b;", "", "", "supportedClientActions", "Lwgs;", "textSelectionMenuActions", "Lkotlin/Function2;", "Lcom/openai/valdi/dil/DILWidgetActionRequest;", "Lcom/openai/valdi/dil/DILMessageMetadata;", "Lruy0;", "handleAction", "Lcom/snap/valdi/promise/Promise;", "Ltgs;", "handleServerAction", "Lnes;", "handleClientAction", "Lkotlin/Function1;", "Lxgs;", "handleTextSelectionAction", "<init>", "(Ljava/util/List;Ljava/util/List;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function1;)V", "_supportedClientActions", "Ljava/util/List;", "_textSelectionMenuActions", "_handleAction", "Lkotlin/jvm/functions/Function2;", "_handleServerAction", "_handleClientAction", "_handleTextSelectionAction", "Lkotlin/jvm/functions/Function1;", "modules_chatgpt_explore_feed-chatgpt_explore_feed_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'supportedClientActions':a<s>,'textSelectionMenuActions':a<r:'[0]'>,'handleAction':f(r:'[1]', r:'[2]'),'handleServerAction':f(r:'[1]', r:'[2]'): p<r:'[3]'>,'handleClientAction':f?(r:'[1]', r:'[2]'): p<r:'[4]'>,'handleTextSelectionAction':f(r:'[5]')", typeReferences = {wgs.class, DILWidgetActionRequest.class, DILMessageMetadata.class, tgs.class, nes.class, xgs.class})
public final class ChatGPTExploreScreenActions extends b {
    private Function2 _handleAction;
    private Function2 _handleClientAction;
    private Function2 _handleServerAction;
    private Function1 _handleTextSelectionAction;
    private List<String> _supportedClientActions;
    private List<wgs> _textSelectionMenuActions;

    public ChatGPTExploreScreenActions(List<String> list, List<wgs> list2, Function2 function2, Function2 function3, Function2 function4, Function1 function1) {
        this._supportedClientActions = list;
        this._textSelectionMenuActions = list2;
        this._handleAction = function2;
        this._handleServerAction = function3;
        this._handleClientAction = function4;
        this._handleTextSelectionAction = function1;
    }
}
