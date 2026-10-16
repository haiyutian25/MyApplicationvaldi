
	function OfferSiteSchedule(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("OfferSiteSchedule", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 280,
			height: 56
		});
		return /* @__PURE__ */ __dil.jsx(SuggestAutomationView, { state });
	}

