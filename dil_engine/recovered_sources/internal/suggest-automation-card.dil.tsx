
	function SuggestAutomationCard({ state }) {
		const { isDark } = DIL.useTheme();
		const [locallySubmitted, setLocallySubmitted] = DIL.useState(false);
		const submitted = state.submitted || locallySubmitted;
		return /* @__PURE__ */ __dil.jsx("box", {
			align: "start",
			width: "100%",
			maxWidth: "100%",
			minWidth: 0,
			...GenUI.logEvent ? { onVisible: () => {
				GenUI.logEvent?.({ event_data: { elicitation_metadata: {
					elicitation_type: "automation_schedule",
					stage: "shown"
				} } });
			} } : {}
		}, /* @__PURE__ */ __dil.jsx("card", {
			width: "100%",
			padding: 0,
			gap: 0,
			radius: "4xl",
			background: "surface",
			shadow: true,
			shadowStyle: isDark ? "none" : "0 4px 16px 0 rgba(0, 0, 0, 0.05)"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			minWidth: 0,
			minHeight: 70,
			align: "stretch",
			background: "surface",
			border: {
				size: 1,
				color: isDark ? "default" : "rgba(0, 0, 0, 0.05)"
			},
			disabled: submitted,
			padding: {
				x: 4,
				y: 3
			},
			radius: "4xl",
			onClick: () => {
				if (submitted) return;
				setLocallySubmitted(true);
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
			width: "100%",
			minWidth: 0,
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 36,
			flex: "none",
			align: "center",
			justify: "center",
			ariaHidden: true
		}, submitted ? /* @__PURE__ */ __dil.jsx("icon", {
			name: "check",
			size: "xl"
		}) : state.emoji ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xl",
			fontSize: 24,
			lineHeight: 32
		}, state.emoji) : /* @__PURE__ */ __dil.jsx("icon", {
			name: "clock",
			size: "xl"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			lineHeight: 24,
			truncate: true
		}, state.label), !submitted && state.setup_label ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary",
			truncate: true
		}, state.setup_label) : null), !submitted ? /* @__PURE__ */ __dil.jsx("box", {
			flex: "none",
			align: "center",
			justify: "center",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "pencil",
			size: "xl",
			color: "tertiary"
		})) : null))));
	}

