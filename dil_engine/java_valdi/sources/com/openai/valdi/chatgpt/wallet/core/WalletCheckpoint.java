package com.openai.valdi.chatgpt.wallet.core;

import kotlin.Metadata;

/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes5.dex */
@bqz0(propertyReplacements = "", schema = "'SurfaceVisible':0,'AppForeground':1,'UserRefresh':2,'ConnectionDismissed':3", type = cqz0.a)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\b\u0087\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001j\u0002\b\u0002j\u0002\b\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0006"}, d2 = {"Lcom/openai/valdi/chatgpt/wallet/core/WalletCheckpoint;", "", "SurfaceVisible", "AppForeground", "UserRefresh", "ConnectionDismissed", "modules_chatgpt_wallet_core-chatgpt_wallet_core_api_kt_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
public final class WalletCheckpoint {
    public static final WalletCheckpoint AppForeground;
    public static final WalletCheckpoint ConnectionDismissed;
    public static final WalletCheckpoint SurfaceVisible;
    public static final WalletCheckpoint UserRefresh;
    public static final /* synthetic */ WalletCheckpoint[] a;

    static {
        WalletCheckpoint walletCheckpoint = new WalletCheckpoint("SurfaceVisible", 0);
        SurfaceVisible = walletCheckpoint;
        WalletCheckpoint walletCheckpoint2 = new WalletCheckpoint("AppForeground", 1);
        AppForeground = walletCheckpoint2;
        WalletCheckpoint walletCheckpoint3 = new WalletCheckpoint("UserRefresh", 2);
        UserRefresh = walletCheckpoint3;
        WalletCheckpoint walletCheckpoint4 = new WalletCheckpoint("ConnectionDismissed", 3);
        ConnectionDismissed = walletCheckpoint4;
        a = new WalletCheckpoint[]{walletCheckpoint, walletCheckpoint2, walletCheckpoint3, walletCheckpoint4};
    }

    public static WalletCheckpoint valueOf(String str) {
        return (WalletCheckpoint) Enum.valueOf(WalletCheckpoint.class, str);
    }

    public static WalletCheckpoint[] values() {
        return (WalletCheckpoint[]) a.clone();
    }
}
