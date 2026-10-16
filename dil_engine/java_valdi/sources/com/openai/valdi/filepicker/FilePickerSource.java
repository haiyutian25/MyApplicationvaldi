package com.openai.valdi.filepicker;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Files':0,'Photos':1,'Camera':2", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0004\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004¨\u0006\u0005"}, d2 = {"Lcom/openai/valdi/filepicker/FilePickerSource;", "", "Files", "Photos", "Camera", "modules_oai_file_picker-oai_file_picker_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class FilePickerSource {
    public static final FilePickerSource Camera;
    public static final FilePickerSource Files;
    public static final FilePickerSource Photos;
    public static final /* synthetic */ FilePickerSource[] a;

    static {
        FilePickerSource filePickerSource = new FilePickerSource("Files", 0);
        Files = filePickerSource;
        FilePickerSource filePickerSource2 = new FilePickerSource("Photos", 1);
        Photos = filePickerSource2;
        FilePickerSource filePickerSource3 = new FilePickerSource("Camera", 2);
        Camera = filePickerSource3;
        a = new FilePickerSource[]{filePickerSource, filePickerSource2, filePickerSource3};
    }

    public static FilePickerSource valueOf(String str) {
        return (FilePickerSource) Enum.valueOf(FilePickerSource.class, str);
    }

    public static FilePickerSource[] values() {
        return (FilePickerSource[]) a.clone();
    }
}
