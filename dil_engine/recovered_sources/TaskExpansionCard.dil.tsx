
	function TaskExpansionCard(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("TaskExpansionCard", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 260
		});
		return /* @__PURE__ */ __dil.jsx(ExpansionCardView, {
			state,
			task: {
				emoji: state.task_emoji,
				title: state.task_title,
				showImage: state.show_image
			}
		});
	}

