package com.openai.valdi.collaborativeeditor;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'NotDownloaded':0,'Storage':1,'Recovery':2,'UnsupportedSchema':3,'HostUnavailable':4,'Closed':5", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007¨\u0006\b"}, d2 = {"Lcom/openai/valdi/collaborativeeditor/DocumentPersistenceErrorKind;", "", "NotDownloaded", "Storage", "Recovery", "UnsupportedSchema", "HostUnavailable", "Closed", "modules_collaborative_editor-collaborative_editor_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class DocumentPersistenceErrorKind {
    public static final DocumentPersistenceErrorKind Closed;
    public static final DocumentPersistenceErrorKind HostUnavailable;
    public static final DocumentPersistenceErrorKind NotDownloaded;
    public static final DocumentPersistenceErrorKind Recovery;
    public static final DocumentPersistenceErrorKind Storage;
    public static final DocumentPersistenceErrorKind UnsupportedSchema;
    public static final /* synthetic */ DocumentPersistenceErrorKind[] a;

    static {
        DocumentPersistenceErrorKind documentPersistenceErrorKind = new DocumentPersistenceErrorKind("NotDownloaded", 0);
        NotDownloaded = documentPersistenceErrorKind;
        DocumentPersistenceErrorKind documentPersistenceErrorKind2 = new DocumentPersistenceErrorKind("Storage", 1);
        Storage = documentPersistenceErrorKind2;
        DocumentPersistenceErrorKind documentPersistenceErrorKind3 = new DocumentPersistenceErrorKind("Recovery", 2);
        Recovery = documentPersistenceErrorKind3;
        DocumentPersistenceErrorKind documentPersistenceErrorKind4 = new DocumentPersistenceErrorKind("UnsupportedSchema", 3);
        UnsupportedSchema = documentPersistenceErrorKind4;
        DocumentPersistenceErrorKind documentPersistenceErrorKind5 = new DocumentPersistenceErrorKind("HostUnavailable", 4);
        HostUnavailable = documentPersistenceErrorKind5;
        DocumentPersistenceErrorKind documentPersistenceErrorKind6 = new DocumentPersistenceErrorKind("Closed", 5);
        Closed = documentPersistenceErrorKind6;
        a = new DocumentPersistenceErrorKind[]{documentPersistenceErrorKind, documentPersistenceErrorKind2, documentPersistenceErrorKind3, documentPersistenceErrorKind4, documentPersistenceErrorKind5, documentPersistenceErrorKind6};
    }

    public static DocumentPersistenceErrorKind valueOf(String str) {
        return (DocumentPersistenceErrorKind) Enum.valueOf(DocumentPersistenceErrorKind.class, str);
    }

    public static DocumentPersistenceErrorKind[] values() {
        return (DocumentPersistenceErrorKind[]) a.clone();
    }
}
