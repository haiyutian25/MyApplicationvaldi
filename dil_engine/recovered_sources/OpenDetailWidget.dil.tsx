
	function OpenDetailView({ state }) {
		const [expanded, setExpanded] = DIL.useState(false);
		const visible = expanded ? state.actions : state.actions.slice(0, 4);
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, /* @__PURE__ */ __dil.jsx("caption", {
			size: "lg",
			color: "secondary"
		}, state.title), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, visible.map((item, index) => /* @__PURE__ */ __dil.jsx("pressable", {
			key: index,
			padding: 2.5,
			width: "100%",
			ariaLabel: item.label,
			onClick: () => GenUI.dispatchAction({
				type: "client",
				payload: {
					action: state.action,
					query: item.payload != null ? item.payload : item.label
				}
			})
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", null, item.label), /* @__PURE__ */ __dil.jsx("spacer", null), /* @__PURE__ */ __dil.jsx("icon", { name: "chevron-right" }))))), state.actions.length > 4 && /* @__PURE__ */ __dil.jsx("box", { width: 120 }, /* @__PURE__ */ __dil.jsx("button", {
			color: "secondary",
			variant: "outline",
			block: true,
			pill: true,
			size: "lg",
			onClick: () => setExpanded(!expanded)
		}, expanded ? "Show less" : `Show ${state.actions.length - 4} more`)));
	}
	function OpenDetailWidget(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("OpenDetailWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 170
		});
		return /* @__PURE__ */ __dil.jsx(OpenDetailView, { state });
	}

