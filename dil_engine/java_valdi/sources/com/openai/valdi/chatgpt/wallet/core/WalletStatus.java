package com.openai.valdi.chatgpt.wallet.core;

import com.snap.valdi.callable.ValdiFunctionNative;
import defpackage.bqz0;
import defpackage.cqz0;
import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@bqz0(propertyReplacements = "", schema = "'Loading':0,'Ready':1,'Error':2,'NotConnected':3,'Unavailable':4", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/openai/valdi/chatgpt/wallet/core/WalletStatus;", "", "Loading", "Ready", "Error", "NotConnected", "Unavailable", "modules_chatgpt_wallet_core-chatgpt_wallet_core_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
public final class WalletStatus {
    public static final WalletStatus Error;
    public static final WalletStatus Loading;
    public static final WalletStatus NotConnected;
    public static final WalletStatus Ready;
    public static final WalletStatus Unavailable;
    public static final /* synthetic */ WalletStatus[] a;

    static {
        WalletStatus walletStatus = new WalletStatus("Loading", 0);
        Loading = walletStatus;
        WalletStatus walletStatus2 = new WalletStatus("Ready", 1);
        Ready = walletStatus2;
        WalletStatus walletStatus3 = new WalletStatus("Error", 2);
        Error = walletStatus3;
        WalletStatus walletStatus4 = new WalletStatus("NotConnected", 3);
        NotConnected = walletStatus4;
        WalletStatus walletStatus5 = new WalletStatus("Unavailable", 4);
        Unavailable = walletStatus5;
        a = new WalletStatus[]{walletStatus, walletStatus2, walletStatus3, walletStatus4, walletStatus5};
    }

    public static WalletStatus valueOf(String str) {
        return (WalletStatus) Enum.valueOf(WalletStatus.class, str);
    }

    public static WalletStatus[] values() {
        return (WalletStatus[]) a.clone();
    }
}
