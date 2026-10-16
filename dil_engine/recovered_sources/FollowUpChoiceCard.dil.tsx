
	function FollowUpChoiceCard(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("FollowUpChoiceCard", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 120
		});
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "sm",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 5,
			top: 4,
			bottom: 2
		} }, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "primary"
		}, state.title)), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.actions.map((action, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: action.id,
			gap: 0,
			padding: { x: 3 }
		}, index > 0 ? /* @__PURE__ */ __dil.jsx("box", { padding: { x: 2 } }, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 1,
			background: "border-subtle"
		})) : null, /* @__PURE__ */ __dil.jsx("box", {
			radius: "none",
			background: "transparent"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			align: "stretch",
			padding: 0,
			radius: "none",
			ariaLabel: action.label,
			onClick: () => issueSuggestionTurn(action, "follow_up_choice_card")
		}, /* @__PURE__ */ __dil.jsx("row", {
			minHeight: 56,
			width: "100%",
			align: "center",
			justify: "start",
			gap: 3,
			padding: { x: 3 }
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: action.icon,
			size: "md",
			color: state.appearance === "filled" ? {
				light: "blue-500",
				dark: "blue-400"
			} : "primary"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "primary"
		}, action.label))))))), /* @__PURE__ */ __dil.jsx("box", { height: 12 })));
	}

