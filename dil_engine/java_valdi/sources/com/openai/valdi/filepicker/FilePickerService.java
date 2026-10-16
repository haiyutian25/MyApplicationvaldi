package com.openai.valdi.filepicker;

import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import defpackage.prz0;
import defpackage.q3z;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\bg\u0018\u00002\u00020\u0001J\u000f\u0010\u0003\u001a\u00020\u0002H&¢\u0006\u0004\b\u0003\u0010\u0004J\u001f\u0010\n\u001a\u00020\t2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\b\u001a\u00020\u0007H&¢\u0006\u0004\b\n\u0010\u000bJ\u0017\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\r\u001a\u00020\fH\u0016¢\u0006\u0004\b\u000f\u0010\u0010¨\u0006\u0011"}, d2 = {"Lcom/openai/valdi/filepicker/FilePickerService;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "Lcom/openai/valdi/filepicker/FilePickerCapabilities;", "getCapabilities", "()Lcom/openai/valdi/filepicker/FilePickerCapabilities;", "Lcom/openai/valdi/filepicker/FilePickerOptions;", "options", "Lcom/openai/valdi/filepicker/FilePickerCompletion;", "completion", "Lruy0;", "pickFiles", "(Lcom/openai/valdi/filepicker/FilePickerOptions;Lcom/openai/valdi/filepicker/FilePickerCompletion;)V", "Lcom/snap/valdi/utils/ValdiMarshaller;", "marshaller", "", "pushToMarshaller", "(Lcom/snap/valdi/utils/ValdiMarshaller;)I", "modules_oai_file_picker-oai_file_picker_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = q3z.class, schema = "'getCapabilities':f|m|(): r:'[0]','pickFiles':f|m|(r:'[1]', r:'[2]')", typeReferences = {FilePickerCapabilities.class, FilePickerOptions.class, FilePickerCompletion.class})
public interface FilePickerService extends ValdiMarshallable {
    FilePickerCapabilities getCapabilities();

    void pickFiles(FilePickerOptions options, FilePickerCompletion completion);

    int pushToMarshaller(ValdiMarshaller marshaller);
}
