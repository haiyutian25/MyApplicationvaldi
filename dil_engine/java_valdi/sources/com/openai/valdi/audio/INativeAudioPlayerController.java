package com.openai.valdi.audio;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.en20;
import defpackage.prz0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0006\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\bg\u0018\u00002\u00020\u0001J\u0019\u0010\u0005\u001a\u00020\u00042\b\u0010\u0003\u001a\u0004\u0018\u00010\u0002H&¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\u0007\u001a\u00020\u0004H&¢\u0006\u0004\b\u0007\u0010\bJ\u000f\u0010\t\u001a\u00020\u0004H&¢\u0006\u0004\b\t\u0010\bJ\u0017\u0010\f\u001a\u00020\u00042\u0006\u0010\u000b\u001a\u00020\nH&¢\u0006\u0004\b\f\u0010\rJ\u0017\u0010\u000f\u001a\u00020\u00042\u0006\u0010\u000e\u001a\u00020\nH&¢\u0006\u0004\b\u000f\u0010\rJ\u0017\u0010\u0012\u001a\u00020\u00042\u0006\u0010\u0011\u001a\u00020\u0010H&¢\u0006\u0004\b\u0012\u0010\u0013J\u000f\u0010\u0014\u001a\u00020\u0004H&¢\u0006\u0004\b\u0014\u0010\bJ\u0017\u0010\u0016\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\nH&¢\u0006\u0004\b\u0016\u0010\rJ\u000f\u0010\u0017\u001a\u00020\u0004H&¢\u0006\u0004\b\u0017\u0010\bJ\u0017\u0010\u001b\u001a\u00020\u001a2\u0006\u0010\u0019\u001a\u00020\u0018H\u0016¢\u0006\u0004\b\u001b\u0010\u001c¨\u0006\u001d"}, d2 = {"Lcom/openai/valdi/audio/INativeAudioPlayerController;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "Lcom/openai/valdi/audio/IAudioPlayerControllerListener;", "listener", "Lruy0;", "setListener", "(Lcom/openai/valdi/audio/IAudioPlayerControllerListener;)V", "play", "()V", "pause", "", "playbackRate", "setRate", "(D)V", "volume", "setVolume", "", "itemUrl", "loadItemWithUrl", "(Ljava/lang/String;)V", "unload", "timeSeconds", "seek", "dispose", "Lcom/snap/valdi/utils/ValdiMarshaller;", "marshaller", "", "pushToMarshaller", "(Lcom/snap/valdi/utils/ValdiMarshaller;)I", "modules_audio_player-audio_player_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = en20.class, schema = "'setListener':f|m|(r?:'[0]'),'play':f|m|(),'pause':f|m|(),'setRate':f|m|(d),'setVolume':f|m|(d),'loadItemWithUrl':f|m|(s),'unload':f|m|(),'seek':f|m|(d),'dispose':f|m|()", typeReferences = {IAudioPlayerControllerListener.class})
public interface INativeAudioPlayerController extends ValdiMarshallable {
    void dispose();

    void loadItemWithUrl(String itemUrl);

    void pause();

    void play();

    int pushToMarshaller(ValdiMarshaller marshaller);

    void seek(double timeSeconds);

    void setListener(IAudioPlayerControllerListener listener);

    void setRate(double playbackRate);

    void setVolume(double volume);

    void unload();
}
