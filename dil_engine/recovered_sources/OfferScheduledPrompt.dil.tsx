
	function OfferScheduledPrompt(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("OfferScheduledPrompt", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 280,
			height: 48
		});
		return /* @__PURE__ */ __dil.jsx(SuggestAutomationView, { state });
	}

