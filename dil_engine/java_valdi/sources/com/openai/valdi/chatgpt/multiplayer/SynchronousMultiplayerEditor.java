package com.openai.valdi.chatgpt.multiplayer;

import com.openai.valdi.collaborativeeditor.EditorEvent;
import com.openai.valdi.collaborativeeditor.SynchronousCollaborativeEditorEngine;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.promise.Promise;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.prz0;
import defpackage.qyv0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\bg\u0018\u00002\u00020\u0001J\u0015\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002H&¢\u0006\u0004\b\u0004\u0010\u0005J\u0015\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002H&¢\u0006\u0004\b\u0006\u0010\u0005J\u0015\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002H&¢\u0006\u0004\b\u0007\u0010\u0005J\u0015\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002H&¢\u0006\u0004\b\b\u0010\u0005J\u0015\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002H&¢\u0006\u0004\b\t\u0010\u0005J\u0015\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\n0\u0002H&¢\u0006\u0004\b\u000b\u0010\u0005J\u0015\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002H&¢\u0006\u0004\b\f\u0010\u0005J\u001d\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00030\u00022\u0006\u0010\u000e\u001a\u00020\rH&¢\u0006\u0004\b\u000f\u0010\u0010J\u0015\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002H&¢\u0006\u0004\b\u0011\u0010\u0005J\u0017\u0010\u0015\u001a\u00020\u00142\u0006\u0010\u0013\u001a\u00020\u0012H\u0016¢\u0006\u0004\b\u0015\u0010\u0016R\u0014\u0010\u001a\u001a\u00020\u00178&X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0018\u0010\u0019R\u0014\u0010\u001e\u001a\u00020\u001b8&X¦\u0004¢\u0006\u0006\u001a\u0004\b\u001c\u0010\u001d¨\u0006\u001f"}, d2 = {"Lcom/openai/valdi/chatgpt/multiplayer/SynchronousMultiplayerEditor;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "Lcom/snap/valdi/promise/Promise;", "Lruy0;", "connect", "()Lcom/snap/valdi/promise/Promise;", "suspendConnection", "reportActivity", "flushLocalWrites", "requestCheckpointAsync", "Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerFacepileData;", "getFacepileData", "refreshFacepileData", "Lcom/openai/valdi/collaborativeeditor/EditorEvent;", "event", "acceptEditorEvent", "(Lcom/openai/valdi/collaborativeeditor/EditorEvent;)Lcom/snap/valdi/promise/Promise;", "close", "Lcom/snap/valdi/utils/ValdiMarshaller;", "marshaller", "", "pushToMarshaller", "(Lcom/snap/valdi/utils/ValdiMarshaller;)I", "Lcom/openai/valdi/collaborativeeditor/SynchronousCollaborativeEditorEngine;", "getEditor", "()Lcom/openai/valdi/collaborativeeditor/SynchronousCollaborativeEditorEngine;", "editor", "Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerConnectionSnapshot;", "getInitialState", "()Lcom/openai/valdi/chatgpt/multiplayer/MultiplayerConnectionSnapshot;", "initialState", "modules_chatgpt_multiplayer-chatgpt_multiplayer_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = qyv0.class, schema = "'editor':r:'[0]','initialState':r:'[1]','connect':f|m|(): p<v>,'suspendConnection':f|m|(): p<v>,'reportActivity':f|m|(): p<v>,'flushLocalWrites':f|m|(): p<v>,'requestCheckpointAsync':f|m|(): p<v>,'getFacepileData':f|m|(): p<r:'[2]'>,'refreshFacepileData':f|m|(): p<v>,'acceptEditorEvent':f|m|(r:'[3]'): p<v>,'close':f|m|(): p<v>", typeReferences = {SynchronousCollaborativeEditorEngine.class, MultiplayerConnectionSnapshot.class, MultiplayerFacepileData.class, EditorEvent.class})
public interface SynchronousMultiplayerEditor extends ValdiMarshallable {
    Promise<ruy0> acceptEditorEvent(EditorEvent event);

    Promise<ruy0> close();

    Promise<ruy0> connect();

    Promise<ruy0> flushLocalWrites();

    SynchronousCollaborativeEditorEngine getEditor();

    Promise<MultiplayerFacepileData> getFacepileData();

    MultiplayerConnectionSnapshot getInitialState();

    int pushToMarshaller(ValdiMarshaller marshaller);

    Promise<ruy0> refreshFacepileData();

    Promise<ruy0> reportActivity();

    Promise<ruy0> requestCheckpointAsync();

    Promise<ruy0> suspendConnection();
}
