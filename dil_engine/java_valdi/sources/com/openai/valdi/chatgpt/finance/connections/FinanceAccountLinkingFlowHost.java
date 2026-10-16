package com.openai.valdi.chatgpt.finance.connections;

import com.snap.valdi.utils.ValdiMarshallable;
import com.snap.valdi.utils.ValdiMarshaller;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes2.dex */
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\bg\u0018\u00002\u00020\u0001J'\u0010\t\u001a\u00020\b2\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u0006H&¢\u0006\u0004\b\t\u0010\nJ\u0017\u0010\r\u001a\u00020\b2\u0006\u0010\f\u001a\u00020\u000bH&¢\u0006\u0004\b\r\u0010\u000eJ\u000f\u0010\u000f\u001a\u00020\bH&¢\u0006\u0004\b\u000f\u0010\u0010J\u0017\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u0012\u001a\u00020\u0011H\u0016¢\u0006\u0004\b\u0014\u0010\u0015¨\u0006\u0016"}, d2 = {"Lcom/openai/valdi/chatgpt/finance/connections/FinanceAccountLinkingFlowHost;", "Lcom/snap/valdi/utils/ValdiMarshallable;", "", "linkToken", "Lcom/openai/valdi/chatgpt/finance/connections/FinancePlaidLaunchOptions;", "launchOptions", "Lcom/openai/valdi/chatgpt/finance/connections/FinanceAccountLinkingFlowEventHandlers;", "eventHandlers", "Lruy0;", "openPlaidLink", "(Ljava/lang/String;Lcom/openai/valdi/chatgpt/finance/connections/FinancePlaidLaunchOptions;Lcom/openai/valdi/chatgpt/finance/connections/FinanceAccountLinkingFlowEventHandlers;)V", "", "accountCount", "onAccountsLinked", "(D)V", "dismiss", "()V", "Lcom/snap/valdi/utils/ValdiMarshaller;", "marshaller", "", "pushToMarshaller", "(Lcom/snap/valdi/utils/ValdiMarshaller;)I", "modules_chatgpt_finance_connections-chatgpt_finance_connections_api_kt_kt"}, k = 1, mv = {1, 8, 0}, xi = 48)
@prz0(propertyReplacements = "", proxyClass = vcz.class, schema = "'openPlaidLink':f|m|(s, r:'[0]', r:'[1]'),'onAccountsLinked':f|m|(d),'dismiss':f|m|()", typeReferences = {FinancePlaidLaunchOptions.class, FinanceAccountLinkingFlowEventHandlers.class})
public interface FinanceAccountLinkingFlowHost extends ValdiMarshallable {
    void dismiss();

    void onAccountsLinked(double accountCount);

    void openPlaidLink(String linkToken, FinancePlaidLaunchOptions launchOptions, FinanceAccountLinkingFlowEventHandlers eventHandlers);

    @Override // com.snap.valdi.utils.ValdiMarshallable
    int pushToMarshaller(ValdiMarshaller marshaller);
}
