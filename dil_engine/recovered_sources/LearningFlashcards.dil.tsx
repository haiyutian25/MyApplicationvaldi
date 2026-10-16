
	function LearningFlashcards(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("LearningFlashcards", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 320
		});
		return /* @__PURE__ */ __dil.jsx(FlashcardsView, {
			state,
			componentName: "LearningFlashcards",
			resolutionId: props.__resolutionId ?? componentDataKey("LearningFlashcards", props)
		});
	}

