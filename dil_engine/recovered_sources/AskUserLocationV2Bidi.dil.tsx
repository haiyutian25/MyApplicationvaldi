
	function AskUserLocationV2Bidi(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("AskUserLocationV2Bidi", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 260
		});
		return /* @__PURE__ */ __dil.jsx(AskUserLocationV2, { __state: state });
	}

