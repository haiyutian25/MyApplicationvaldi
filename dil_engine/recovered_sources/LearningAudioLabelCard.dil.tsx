
	function LearningAudioLabelCard(props) {
		const { state } = useResolvedComponentResult("LearningAudioLabelCard", props);
		if (state) return /* @__PURE__ */ __dil.jsx(LearningAudioLabelCard$1, state);
		if ("progressLabels" in props) return /* @__PURE__ */ __dil.jsx(LearningAudioLabelCard$1, props);
		return props.fallback ?? null;
	}

