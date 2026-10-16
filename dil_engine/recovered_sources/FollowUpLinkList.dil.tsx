
	function FollowUpLinkList(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("FollowUpLinkList", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 72
		});
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			width: "100%",
			align: "start"
		}, state.actions.map((action) => /* @__PURE__ */ __dil.jsx("pressable", {
			key: action.id,
			inline: true,
			align: "start",
			ariaLabel: action.label,
			onClick: () => issueSuggestionTurn(action, "follow_up_link_list")
		}, /* @__PURE__ */ __dil.jsx(FollowUpLinkLabel, { label: action.label }))));
	}

