
	function SuggestAutomation(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("SuggestAutomation", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 280,
			height: 48
		});
		if (state.widget_dil_enabled === false) return null;
		return state.use_new_suggest_ui === true && !state.task_opt_in_accept ? /* @__PURE__ */ __dil.jsx(SuggestAutomationCard, { state }) : /* @__PURE__ */ __dil.jsx(SuggestAutomationView, { state });
	}

