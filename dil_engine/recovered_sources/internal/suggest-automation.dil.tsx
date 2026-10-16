
	function SuggestAutomationView({ state }) {
		const [locallySubmitted, setLocallySubmitted] = DIL.useState(false);
		const submitted = state.submitted || locallySubmitted;
		return /* @__PURE__ */ __dil.jsx("box", {
			align: "start",
			maxWidth: "100%",
			minWidth: 0,
			...GenUI.logEvent ? { onVisible: () => {
				GenUI.logEvent?.({ event_data: { elicitation_metadata: {
					elicitation_type: "automation_schedule",
					stage: "shown"
				} } });
			} } : {}
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			align: "center",
			background: "surface",
			border: {
				size: 1,
				color: "default"
			},
			disabled: submitted,
			height: 48,
			justify: "center",
			maxWidth: "100%",
			padding: {
				left: "13px",
				right: "15px"
			},
			radius: "full",
			onClick: () => {
				if (submitted) return;
				setLocallySubmitted(true);
				if (state.task_opt_in_accept) {
					GenUI.dispatchAction({
						handler: "server",
						type: "task_opt_in_accept",
						payload: { elicitation_metadata: {
							elicitation_type: "automation_schedule",
							stage: "interacted",
							action: "accept"
						} }
					});
					return;
				}
				GenUI.issueNewTurn(state.creation_guidelines, {
					followup_metadata: {
						is_visually_hidden_from_conversation: true,
						suggestion_type: "reply",
						suggested_automation_lifecycle: true,
						suggested_automation_origin_surface: state.origin_surface === "chat" || state.origin_surface === "work" ? state.origin_surface : null,
						suggested_automation_pill_ui_variant: "refreshed"
					},
					event_name: "chatgpt_widget_action",
					statsig_event_name: "suggest_automation_widget_clicked",
					event_data: {
						elicitation_metadata: {
							elicitation_type: "automation_schedule",
							stage: "interacted",
							action: "accept"
						},
						widget_affordance: "OPTION",
						widget_action_target: "automation_suggestion",
						widget_action_value: state.label,
						surface_location: "RESPONSE",
						content_reference_type: "suggest_automation"
					}
				});
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: submitted ? "check" : "clock",
			size: "xl"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium"
		}, state.label))));
	}



/* ---- merged ---- */

	function SuggestAutomationView({ state }) {
		const [locallySubmitted, setLocallySubmitted] = DIL.useState(false);
		const submitted = state.submitted || locallySubmitted;
		return /* @__PURE__ */ __dil.jsx("box", {
			align: "start",
			maxWidth: "100%",
			minWidth: 0,
			...GenUI.logEvent ? { onVisible: () => {
				GenUI.logEvent?.({ event_data: { elicitation_metadata: {
					elicitation_type: "automation_schedule",
					stage: "shown"
				} } });
			} } : {}
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			align: "center",
			background: "surface",
			border: {
				size: 1,
				color: "default"
			},
			disabled: submitted,
			height: 48,
			justify: "center",
			maxWidth: "100%",
			padding: {
				left: "13px",
				right: "15px"
			},
			radius: "full",
			onClick: () => {
				if (submitted) return;
				setLocallySubmitted(true);
				if (state.task_opt_in_accept) {
					GenUI.dispatchAction({
						handler: "server",
						type: "task_opt_in_accept",
						payload: { elicitation_metadata: {
							elicitation_type: "automation_schedule",
							stage: "interacted",
							action: "accept"
						} }
					});
					return;
				}
				GenUI.issueNewTurn(state.creation_guidelines, {
					followup_metadata: {
						is_visually_hidden_from_conversation: true,
						suggestion_type: "reply",
						suggested_automation_lifecycle: true,
						suggested_automation_origin_surface: state.origin_surface === "chat" || state.origin_surface === "work" ? state.origin_surface : null,
						suggested_automation_pill_ui_variant: "refreshed"
					},
					event_name: "chatgpt_widget_action",
					statsig_event_name: "suggest_automation_widget_clicked",
					event_data: {
						elicitation_metadata: {
							elicitation_type: "automation_schedule",
							stage: "interacted",
							action: "accept"
						},
						widget_affordance: "OPTION",
						widget_action_target: "automation_suggestion",
						widget_action_value: state.label,
						surface_location: "RESPONSE",
						content_reference_type: "suggest_automation"
					}
				});
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: submitted ? "check" : "clock",
			size: "xl"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium"
		}, state.label))));
	}



/* ---- merged ---- */

	function SuggestAutomationView({ state }) {
		const [locallySubmitted, setLocallySubmitted] = DIL.useState(false);
		const submitted = state.submitted || locallySubmitted;
		return /* @__PURE__ */ __dil.jsx("box", {
			align: "start",
			maxWidth: "100%",
			minWidth: 0,
			...GenUI.logEvent ? { onVisible: () => {
				GenUI.logEvent?.({ event_data: { elicitation_metadata: {
					elicitation_type: "automation_schedule",
					stage: "shown"
				} } });
			} } : {}
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			align: "center",
			background: "surface",
			border: {
				size: 1,
				color: "default"
			},
			disabled: submitted,
			height: 48,
			justify: "center",
			maxWidth: "100%",
			padding: {
				left: "13px",
				right: "15px"
			},
			radius: "full",
			onClick: () => {
				if (submitted) return;
				setLocallySubmitted(true);
				if (state.task_opt_in_accept) {
					GenUI.dispatchAction({
						handler: "server",
						type: "task_opt_in_accept",
						payload: { elicitation_metadata: {
							elicitation_type: "automation_schedule",
							stage: "interacted",
							action: "accept"
						} }
					});
					return;
				}
				GenUI.issueNewTurn(state.creation_guidelines, {
					followup_metadata: {
						is_visually_hidden_from_conversation: true,
						suggestion_type: "reply",
						suggested_automation_lifecycle: true,
						suggested_automation_origin_surface: state.origin_surface === "chat" || state.origin_surface === "work" ? state.origin_surface : null,
						suggested_automation_pill_ui_variant: "refreshed"
					},
					event_name: "chatgpt_widget_action",
					statsig_event_name: "suggest_automation_widget_clicked",
					event_data: {
						elicitation_metadata: {
							elicitation_type: "automation_schedule",
							stage: "interacted",
							action: "accept"
						},
						widget_affordance: "OPTION",
						widget_action_target: "automation_suggestion",
						widget_action_value: state.label,
						surface_location: "RESPONSE",
						content_reference_type: "suggest_automation"
					}
				});
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: submitted ? "check" : "clock",
			size: "xl"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium"
		}, state.label))));
	}

