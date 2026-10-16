
	function LedgerRecentTransactionsWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerRecentTransactionsWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 280
		});
		if (state.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: state.labels });
		return /* @__PURE__ */ __dil.jsx(LedgerRecentTransactionsView, { state });
	}

