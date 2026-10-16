package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0000\n\u0002\u0018\u0002\n\u0002\b\f\b\u0007\u0018\u00002\u00020\u0001B;\b\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0010\b\u0002\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\u0005\u0018\u00010\u0004\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\u000b\u0010\fR\u0016\u0010\r\u001a\u00020\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\u000eR\u001e\u0010\u000f\u001a\n\u0012\u0004\u0012\u00020\u0005\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\u0010R\u0018\u0010\u0011\u001a\u0004\u0018\u00010\u00078\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\u0012R\u0018\u0010\u0013\u001a\u0004\u0018\u00010\t8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\u0014¨\u0006\u0015"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/NoteLiveTaskScheduleRepeat;", "Lcom/snap/valdi/utils/b;", "", "isDaily", "", "Lcom/openai/valdi/collaborativeeditor/NoteLiveTaskDayOfWeek;", "weekly", "", "monthly", "Lcom/openai/valdi/collaborativeeditor/NoteLiveTaskScheduleTime;", "endAt", "<init>", "(ZLjava/util/List;Ljava/lang/Double;Lcom/openai/valdi/collaborativeeditor/NoteLiveTaskScheduleTime;)V", "_isDaily", "Z", "_weekly", "Ljava/util/List;", "_monthly", "Ljava/lang/Double;", "_endAt", "Lcom/openai/valdi/collaborativeeditor/NoteLiveTaskScheduleTime;", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'isDaily':b,'weekly':a?<r<e>:'[0]'>,'monthly':d@?,'endAt':r?:'[1]'", typeReferences = {NoteLiveTaskDayOfWeek.class, NoteLiveTaskScheduleTime.class})
public final class NoteLiveTaskScheduleRepeat extends b {
    private NoteLiveTaskScheduleTime _endAt;
    private boolean _isDaily;
    private Double _monthly;
    private List<? extends NoteLiveTaskDayOfWeek> _weekly;

    public NoteLiveTaskScheduleRepeat(boolean z, List<? extends NoteLiveTaskDayOfWeek> list, Double d, NoteLiveTaskScheduleTime noteLiveTaskScheduleTime) {
        this._isDaily = z;
        this._weekly = list;
        this._monthly = d;
        this._endAt = noteLiveTaskScheduleTime;
    }
}
