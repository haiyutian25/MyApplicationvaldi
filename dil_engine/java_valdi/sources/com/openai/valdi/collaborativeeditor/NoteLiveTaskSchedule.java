package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\b\u0007\u0018\u00002\u00020\u0001B\u001d\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007R\u0016\u0010\b\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\b\u0010\tR\u0018\u0010\n\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\n\u0010\u000b¨\u0006\f"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/NoteLiveTaskSchedule;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/collaborativeeditor/NoteLiveTaskScheduleTime;", "time", "Lcom/openai/valdi/collaborativeeditor/NoteLiveTaskScheduleRepeat;", "repeat", "<init>", "(Lcom/openai/valdi/collaborativeeditor/NoteLiveTaskScheduleTime;Lcom/openai/valdi/collaborativeeditor/NoteLiveTaskScheduleRepeat;)V", "_time", "Lcom/openai/valdi/collaborativeeditor/NoteLiveTaskScheduleTime;", "_repeat", "Lcom/openai/valdi/collaborativeeditor/NoteLiveTaskScheduleRepeat;", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'time':r:'[0]','repeat':r?:'[1]'", typeReferences = {NoteLiveTaskScheduleTime.class, NoteLiveTaskScheduleRepeat.class})
public final class NoteLiveTaskSchedule extends b {
    private NoteLiveTaskScheduleRepeat _repeat;
    private NoteLiveTaskScheduleTime _time;

    public NoteLiveTaskSchedule(NoteLiveTaskScheduleTime noteLiveTaskScheduleTime, NoteLiveTaskScheduleRepeat noteLiveTaskScheduleRepeat) {
        this._time = noteLiveTaskScheduleTime;
        this._repeat = noteLiveTaskScheduleRepeat;
    }
}
