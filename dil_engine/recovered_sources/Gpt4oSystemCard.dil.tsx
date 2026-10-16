
	function Gpt4oSystemCard(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("Gpt4oSystemCard", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 320,
			height: 480
		});
		return /* @__PURE__ */ __dil.jsx(SystemCardView, { state });
	}

