
	function LedgerPortfolioDistributionWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerPortfolioDistributionWidget", props);
		if (state?.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: state.labels });
		return state ? /* @__PURE__ */ __dil.jsx(LedgerDistribution, { state }) : resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 350
		});
	}

