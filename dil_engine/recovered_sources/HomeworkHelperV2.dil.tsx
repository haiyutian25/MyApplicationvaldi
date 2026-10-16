
	function isFollowupChoice(value) {
		return value === "guided" || value === "show_answer" || value === "quiz_me";
	}
	function HomeworkHelperView({ state, componentKey }) {
		const [selectedValue, setSelectedValue] = DIL.useState(state.selected_value);
		const [submitted, setSubmitted] = DIL.useState(state.submitted);
		const submissionLocked = state.prevent_repeated_submission === true && submitted;
		const selectedOption = state.options.find((option) => option.value === selectedValue);
		const disabled = !selectedOption || !isFollowupChoice(selectedValue) && selectedValue !== "voice" || submissionLocked || selectedValue === "voice" && (submitted || state.submitted);
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			border: {
				size: 1,
				color: "default"
			},
			radius: "3xl",
			background: "surface-elevated",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 5,
			top: 5,
			bottom: 3
		} }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: "primary"
		}, state.question)), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, state.options.map((option, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: option.value,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			direction: "col",
			padding: 0,
			radius: "none",
			background: selectedValue === option.value ? "surface-secondary" : "transparent",
			ariaLabel: option.label,
			disabled: submissionLocked,
			onClick: () => {
				if (submissionLocked) return;
				GenUI.dispatchAction({
					handler: "server",
					type: "homework_helper_v2_selection",
					payload: { selected_value: option.value }
				});
				setSelectedValue(option.value);
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			minHeight: 56,
			align: "center",
			gap: 3,
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 24,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 20,
			radius: "full",
			align: "center",
			justify: "center",
			background: selectedValue === option.value ? "surface-inverted" : "surface-elevated",
			border: selectedValue === option.value ? 0 : {
				size: 1,
				color: "default"
			}
		}, selectedValue === option.value && /* @__PURE__ */ __dil.jsx("box", {
			size: 8,
			radius: "full",
			background: "surface"
		}))), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "primary"
		}, option.label)))), index + 1 < state.options.length && /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 1,
			background: "border-subtle"
		})))), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			height: 60,
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx("spacer", null), /* @__PURE__ */ __dil.jsx("box", {
			width: "fit-content",
			background: disabled ? "alpha-05" : void 0,
			radius: "full"
		}, /* @__PURE__ */ __dil.jsx("button", {
			color: "primary",
			variant: "outline",
			size: "lg",
			pill: true,
			disabled,
			onClick: () => {
				if (!selectedOption || disabled) return;
				if (state.prevent_repeated_submission || selectedValue === "voice") setSubmitted(true);
				const event_data = {
					widget_affordance: "OPTION",
					widget_action_target: "learning_mode_submit",
					widget_action_value: selectedValue,
					surface_location: "RESPONSE",
					content_reference_type: "homework_helper_v2"
				};
				if (selectedValue === "voice") GenUI.dispatchAction({
					type: "start_voice_mode",
					handler: "client",
					payload: {
						component_key: componentKey,
						event_source: "homework_helper_v2_widget",
						event_name: "chatgpt_widget_action",
						event_data
					}
				});
				else GenUI.issueNewTurn(selectedOption.label, {
					append_to_current_leaf: true,
					followup_metadata: { homework_helper_v2_choice: selectedValue },
					event_name: "chatgpt_widget_action",
					event_data
				});
			}
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: disabled ? "tertiary" : "primary"
		}, state.submit_label))))));
	}
	function HomeworkHelperV2(props) {
		const componentKey = DIL.useAppData((appData) => typeof props.__resolutionId === "string" && appData.opGenui?.componentResults?.[props.__resolutionId] != null ? props.__resolutionId : componentDataKey("HomeworkHelperV2", props));
		const { resolutionComplete, state } = useResolvedComponentResult("HomeworkHelperV2", {
			...props,
			__resolutionId: componentKey,
			__state: void 0
		});
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 280
		});
		return /* @__PURE__ */ __dil.jsx(HomeworkHelperView, {
			state,
			componentKey
		});
	}

