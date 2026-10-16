
	function Gpt5SystemCard(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("Gpt5SystemCard", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 320,
			height: 480
		});
		return /* @__PURE__ */ __dil.jsx(SystemCardView, { state });
	}

