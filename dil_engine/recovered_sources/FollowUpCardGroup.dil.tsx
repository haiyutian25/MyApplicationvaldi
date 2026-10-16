
	function FollowUpCardGroup(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("FollowUpCardGroup", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 88
		});
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 3
		}, state.actions.map((action) => /* @__PURE__ */ __dil.jsx("pressable", {
			key: action.id,
			ariaLabel: action.label,
			width: "100%",
			padding: {
				x: 4,
				y: 3
			},
			radius: "4xl",
			border: {
				size: 1,
				color: "subtle"
			},
			variant: "ghost",
			onClick: () => {
				if (action.url != null) {
					GenUI.dispatchAction({
						handler: "client",
						type: "open_url",
						payload: {
							url: action.url,
							event_name: "chatgpt_widget_action",
							event_data: {
								widget_affordance: "OPTION",
								widget_action_target: "follow_up",
								widget_action_value: action.id,
								surface_location: "RESPONSE",
								content_reference_type: "follow_up_card_group"
							}
						}
					});
					return;
				}
				if (action.prefill_new_thread_surface === "work") {
					GenUI.dispatchAction({
						handler: "client",
						type: "navigate_to_feature",
						payload: {
							feature_id: "work",
							prompt: action.query,
							event_name: "chatgpt_widget_action",
							event_data: {
								widget_affordance: "OPTION",
								widget_action_target: "follow_up",
								widget_action_value: action.id,
								surface_location: "RESPONSE",
								content_reference_type: "follow_up_card_group"
							}
						}
					});
					return;
				}
				if (action.query != null) issueSuggestionTurn({
					...action,
					query: action.query
				}, "follow_up_card_group");
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			align: "center",
			gap: 4
		}, action.icon_url ? /* @__PURE__ */ __dil.jsx("box", {
			width: 36,
			height: 36,
			flex: "none"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: action.icon_url,
			alt: "",
			width: 36,
			height: 36,
			fit: "contain",
			hideOnFailure: true
		})) : action.emoji ? /* @__PURE__ */ __dil.jsx("box", {
			width: 36,
			flex: "none",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "2xl",
			weight: "normal"
		}, action.emoji)) : null, /* @__PURE__ */ __dil.jsx("col", {
			flex: "auto",
			minWidth: 0,
			gap: 1,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "primary"
		}, action.label), action.description ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, action.description) : null)))));
	}

