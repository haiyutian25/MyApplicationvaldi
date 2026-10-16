
	function LearningVoiceModeLauncherCard(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LearningVoiceModeLauncherCard", props);
		if (state) return /* @__PURE__ */ __dil.jsx(LearningVoiceModeLauncherCard$1, state);
		return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
	}

