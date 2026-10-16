package com.openai.valdi.chatgpt.explorefeed;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Visible':0,'Covered':1,'Background':2,'Exited':3", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0006"}, d2 = {"Lcom/openai/valdi/chatgpt/explorefeed/FeedItemVisibilityPresentation;", "", "Visible", "Covered", "Background", "Exited", "modules_chatgpt_explore_feed-chatgpt_explore_feed_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class FeedItemVisibilityPresentation {
    public static final FeedItemVisibilityPresentation Background;
    public static final FeedItemVisibilityPresentation Covered;
    public static final FeedItemVisibilityPresentation Exited;
    public static final FeedItemVisibilityPresentation Visible;
    public static final /* synthetic */ FeedItemVisibilityPresentation[] a;

    static {
        FeedItemVisibilityPresentation feedItemVisibilityPresentation = new FeedItemVisibilityPresentation("Visible", 0);
        Visible = feedItemVisibilityPresentation;
        FeedItemVisibilityPresentation feedItemVisibilityPresentation2 = new FeedItemVisibilityPresentation("Covered", 1);
        Covered = feedItemVisibilityPresentation2;
        FeedItemVisibilityPresentation feedItemVisibilityPresentation3 = new FeedItemVisibilityPresentation("Background", 2);
        Background = feedItemVisibilityPresentation3;
        FeedItemVisibilityPresentation feedItemVisibilityPresentation4 = new FeedItemVisibilityPresentation("Exited", 3);
        Exited = feedItemVisibilityPresentation4;
        a = new FeedItemVisibilityPresentation[]{feedItemVisibilityPresentation, feedItemVisibilityPresentation2, feedItemVisibilityPresentation3, feedItemVisibilityPresentation4};
    }

    public static FeedItemVisibilityPresentation valueOf(String str) {
        return (FeedItemVisibilityPresentation) Enum.valueOf(FeedItemVisibilityPresentation.class, str);
    }

    public static FeedItemVisibilityPresentation[] values() {
        return (FeedItemVisibilityPresentation[]) a.clone();
    }
}
