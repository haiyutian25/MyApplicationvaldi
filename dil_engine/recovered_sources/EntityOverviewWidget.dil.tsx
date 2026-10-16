
	function EntityOverviewWidget(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("EntityOverviewWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 200
		});
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: 362
		}, /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			width: "100%",
			padding: 0,
			gap: 1,
			background: "surface"
		}, /* @__PURE__ */ __dil.jsx(EntityActionSurface, {
			action: state.click_action,
			label: "Open details for " + state.title
		}, /* @__PURE__ */ __dil.jsx(EntityOverviewBody, { state }))));
	}

