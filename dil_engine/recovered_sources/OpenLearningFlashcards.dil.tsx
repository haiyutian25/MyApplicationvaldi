
	function OpenLearningFlashcards(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("OpenLearningFlashcards", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 320
		});
		return /* @__PURE__ */ __dil.jsx(FlashcardsView, {
			state,
			componentName: "OpenLearningFlashcards",
			resolutionId: props.__resolutionId ?? componentDataKey("OpenLearningFlashcards", props)
		});
	}

