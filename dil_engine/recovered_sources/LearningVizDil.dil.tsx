
	function LearningVizDil(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LearningVizDil", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 300
		});
		return /* @__PURE__ */ __dil.jsx(LottieDiagram, { data: state.block_data });
	}

