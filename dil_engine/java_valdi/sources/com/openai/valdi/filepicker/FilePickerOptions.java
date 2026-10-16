package com.openai.valdi.filepicker;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.jmz0;
import java.util.List;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\f\b\u0007\u0018\u00002\u00020\u0001B7\b\u0017\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\u0005\u0012\u0006\u0010\n\u001a\u00020\t¢\u0006\u0004\b\u000b\u0010\fR\u001c\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u00030\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\r\u0010\u000eR\u0016\u0010\u000f\u001a\u00020\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u000f\u0010\u0010R\u0016\u0010\u0011\u001a\u00020\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010\u0010R\u0016\u0010\u0012\u001a\u00020\u00058\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010\u0010R\u0016\u0010\u0013\u001a\u00020\t8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010\u0014¨\u0006\u0015"}, d2 = {"Lcom/openai/valdi/filepicker/FilePickerOptions;", "Lcom/snap/valdi/utils/b;", "", "", "acceptedTypes", "", "maximumFileBytes", "maximumFiles", "maximumTotalBytes", "Lcom/openai/valdi/filepicker/FilePickerSource;", "source", "<init>", "(Ljava/util/List;DDDLcom/openai/valdi/filepicker/FilePickerSource;)V", "_acceptedTypes", "Ljava/util/List;", "_maximumFileBytes", "D", "_maximumFiles", "_maximumTotalBytes", "_source", "Lcom/openai/valdi/filepicker/FilePickerSource;", "modules_oai_file_picker-oai_file_picker_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'acceptedTypes':a<s>,'maximumFileBytes':d,'maximumFiles':d,'maximumTotalBytes':d,'source':r<e>:'[0]'", typeReferences = {FilePickerSource.class})
public final class FilePickerOptions extends b {
    private List<String> _acceptedTypes;
    private double _maximumFileBytes;
    private double _maximumFiles;
    private double _maximumTotalBytes;
    private FilePickerSource _source;

    public FilePickerOptions(List<String> list, double d, double d2, double d3, FilePickerSource filePickerSource) {
        this._acceptedTypes = list;
        this._maximumFileBytes = d;
        this._maximumFiles = d2;
        this._maximumTotalBytes = d3;
        this._source = filePickerSource;
    }
}
