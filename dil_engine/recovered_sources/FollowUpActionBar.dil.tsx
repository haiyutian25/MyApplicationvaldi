
	function FollowUpActionBar(props) {
		const componentKey = DIL.useAppData((appData) => typeof props.__resolutionId === "string" && appData.opGenui?.componentResults?.[props.__resolutionId] != null ? props.__resolutionId : componentDataKey("FollowUpActionBar", props));
		const { resolutionComplete, state } = useResolvedComponentResult("FollowUpActionBar", {
			...props,
			__resolutionId: componentKey
		});
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 64
		});
		if (!state.actions.length) return null;
		const contentReferenceType = state.content_reference_type ?? state.contentReferenceType;
		return state.presentation === "wrapped_pills" ? /* @__PURE__ */ __dil.jsx("col", {
			role: "group",
			ariaLabel: "Suggested follow-ups",
			gap: 2,
			width: "100%",
			align: "start"
		}, state.actions.map((action, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: action.query + "|" + action.label + "|" + index,
			width: "fit-content",
			height: 40,
			flex: "0 1 auto",
			...GenUI.logEvent ? {
				onVisibleWhen: action.onboarding_action_id != null && action.onboarding_action_id !== "",
				onVisible: () => GenUI.logEvent?.({
					event_name: "chatgpt_conversational_onboarding_action_shown",
					statsig_event_name: "chatgpt_conversational_onboarding_action_shown",
					event_data: {
						renderer: action.onboarding_renderer,
						level: action.onboarding_level,
						use_case: action.onboarding_use_case,
						action_id: action.onboarding_action_id,
						source: action.source
					}
				})
			} : {}
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "fit-content",
			height: 40,
			flex: "0 1 auto",
			padding: {
				top: 2,
				right: 4,
				bottom: 2,
				left: 2
			},
			radius: "full",
			border: {
				size: 1,
				color: "default"
			},
			background: "surface",
			clip: true,
			ariaLabel: action.label,
			onClick: () => {
				const loadingBehavior = action.onboarding_action_id || action.source === "image_gen_follow_up_dil_buttons" ? "none" : "auto";
				const options = {
					append_to_current_leaf: true,
					event_source: action.onboarding_client_action !== void 0 ? "conversational_onboarding" : null,
					event_name: action.onboarding_action_id ? "chatgpt_conversational_onboarding_action_clicked" : null,
					statsig_event_name: action.onboarding_action_id ? "chatgpt_conversational_onboarding_action_clicked" : null,
					event_data: {
						renderer: action.onboarding_renderer,
						level: action.onboarding_level,
						use_case: action.onboarding_use_case,
						action_id: action.onboarding_action_id,
						source: action.source
					}
				};
				const followupMetadata = action.source ? {
					followups_v2_followup_clicked: true,
					followups_v2_followup_source: action.source
				} : void 0;
				if (action.onboarding_client_action === "open_image_generation_composer" || action.onboarding_client_action === "start_voice_mode") GenUI.dispatchAction({
					handler: "client",
					type: action.onboarding_client_action,
					loadingBehavior,
					payload: {
						...options,
						...action.onboarding_client_action === "start_voice_mode" ? {
							component_key: componentKey,
							action_index: index
						} : {},
						query: action.query,
						message_metadata: followupMetadata ?? {}
					}
				});
				else GenUI.issueNewTurn(action.query, {
					...options,
					followup_metadata: followupMetadata
				});
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			width: "100%",
			height: "100%"
		}, action.icon_url ? /* @__PURE__ */ __dil.jsx("box", {
			size: 24,
			flex: "0 0 auto"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: action.icon_url,
			alt: "",
			fit: "contain",
			width: 24,
			height: 24,
			hideOnFailure: true
		})) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "normal",
			color: "primary",
			maxLines: 1
		}, action.label)))))) : /* @__PURE__ */ __dil.jsx(FollowUpFooter, {
			actions: state.actions,
			onAction: (action) => GenUI.dispatchAction({
				handler: "client",
				type: "issue_new_turn",
				payload: {
					query: action.query,
					prompt: action.query,
					event_name: "chatgpt_widget_action",
					event_data: {
						widget_affordance: "OPTION",
						widget_action_target: "follow_up",
						widget_action_value: action.label,
						surface_location: "RESPONSE",
						...contentReferenceType ? { content_reference_type: contentReferenceType } : {}
					}
				}
			})
		});
	}

