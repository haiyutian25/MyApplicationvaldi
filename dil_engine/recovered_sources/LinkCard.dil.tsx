
	function LinkCard(props) {
		const needsResolution = !props.url || !props.title;
		const { resolutionComplete, state } = useResolvedComponentResult("LinkCard", props);
		if (!state && needsResolution) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading link" });
		const title = state?.title ?? props.title ?? props.url ?? "Link";
		const url = state?.url ?? props.url ?? "";
		const source = state?.source_label ?? props.subtitle;
		const snippet = state?.snippet ?? props.snippet;
		return /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: `Open ${title}`,
			onClick: () => GenUI.openUrl(url)
		}, /* @__PURE__ */ __dil.jsx("card", {
			gap: 2,
			size: "sm"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			minWidth: 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			frame: true,
			size: 20,
			url
		}), source ? /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			maxLines: 1,
			size: "xs",
			truncate: true
		}, source) : null), /* @__PURE__ */ __dil.jsx("text", {
			color: "prose",
			maxLines: 2,
			size: "sm",
			truncate: true,
			weight: "medium"
		}, title), snippet ? /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			maxLines: 2,
			size: "sm",
			truncate: true
		}, snippet) : null));
	}

