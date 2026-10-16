
	function LedgerFinanceStatusBannerWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerFinanceStatusBannerWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 88
		});
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			background: "surface-elevated"
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "stretch"
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 40,
			background: "orange-500",
			radius: "xl",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "warning",
			color: "white",
			size: "xl"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("title", { size: "sm" }, state.title), /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, state.description))));
	}

