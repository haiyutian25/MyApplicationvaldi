
	function FollowUpPillGroup(props) {
		const isMobile = DIL.useIsMobile();
		const { resolutionComplete, state } = useResolvedComponentResult("FollowUpPillGroup", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 120
		});
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%",
			align: "start"
		}, state.actions.map((action) => /* @__PURE__ */ __dil.jsx("button", {
			key: action.id,
			size: isMobile ? "xl" : "lg",
			variant: "outline",
			color: "secondary",
			onClick: () => issueSuggestionTurn(action, "follow_up_pill_group")
		}, action.icon ? /* @__PURE__ */ __dil.jsx("icon", { name: action.icon }) : null, action.label)));
	}

