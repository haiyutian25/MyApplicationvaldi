
	function EntityReviewsWidget(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("EntityReviewsWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 128
		});
		return /* @__PURE__ */ __dil.jsx(EntityReviewsPresentation, { state });
	}

