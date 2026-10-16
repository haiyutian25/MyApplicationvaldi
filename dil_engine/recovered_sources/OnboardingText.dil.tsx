
	function OnboardingText(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("OnboardingText", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 48
		});
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("animate", {
			preventInitialTransition: !state.animate_reveal,
			initial: {
				opacity: 0,
				translateY: 4
			},
			enter: {
				opacity: 1,
				translateY: 0,
				duration: 180
			}
		}, /* @__PURE__ */ __dil.jsx("animate-item", null, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 4
		}, state.paragraphs.map((paragraph, index) => /* @__PURE__ */ __dil.jsx("text", {
			key: index,
			size: "md",
			weight: state.emphasize_first_paragraph && index === 0 ? "semibold" : "normal"
		}, paragraph))))));
	}

