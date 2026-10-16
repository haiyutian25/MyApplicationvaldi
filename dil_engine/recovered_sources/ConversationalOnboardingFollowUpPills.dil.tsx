
	function ConversationalOnboardingFollowUpPills(props) {
		const componentKey = DIL.useAppData((appData) => typeof props.__resolutionId === "string" && appData.opGenui?.componentResults?.[props.__resolutionId] != null ? props.__resolutionId : componentDataKey("ConversationalOnboardingFollowUpPills", props));
		const { state, resolutionComplete } = useResolvedComponentResult("ConversationalOnboardingFollowUpPills", {
			...props,
			__resolutionId: componentKey
		});
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 80
		});
		return /* @__PURE__ */ __dil.jsx("col", {
			role: "group",
			ariaLabel: "Suggested follow-ups",
			gap: 2,
			width: "100%",
			align: "start"
		}, state.actions.map((item, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: item.onboarding_action_id,
			width: "fit-content",
			height: 40,
			flex: "0 1 auto",
			...GenUI.logEvent ? { onVisible: () => GenUI.logEvent?.({
				event_name: "chatgpt_conversational_onboarding_action_shown",
				statsig_event_name: "chatgpt_conversational_onboarding_action_shown",
				event_data: {
					renderer: item.onboarding_renderer,
					level: item.onboarding_level,
					use_case: item.onboarding_use_case,
					action_id: item.onboarding_action_id,
					source: item.source
				}
			}) } : {}
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
			background: "surface-primary",
			clip: true,
			ariaLabel: item.label,
			onClick: () => {
				const options = {
					append_to_current_leaf: true,
					event_name: "chatgpt_conversational_onboarding_action_clicked",
					statsig_event_name: "chatgpt_conversational_onboarding_action_clicked",
					event_data: {
						renderer: item.onboarding_renderer,
						level: item.onboarding_level,
						use_case: item.onboarding_use_case,
						action_id: item.onboarding_action_id,
						source: item.source
					}
				};
				const followupMetadata = {
					followups_v2_followup_clicked: true,
					followups_v2_followup_source: item.source
				};
				if (item.onboarding_client_action === "start_voice_mode") GenUI.dispatchAction({
					handler: "client",
					type: "start_voice_mode",
					loadingBehavior: "none",
					payload: {
						...options,
						component_key: componentKey,
						action_index: index,
						query: item.query,
						event_source: "conversational_onboarding",
						voice_landing: "conversational_onboarding_voice_v1",
						message_metadata: followupMetadata
					}
				});
				else GenUI.issueNewTurn(item.query, {
					...options,
					event_source: null,
					voice_landing: null,
					followup_metadata: followupMetadata
				});
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			width: "100%",
			height: "100%"
		}, item.icon_url && /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 24,
			height: 24
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: item.icon_url,
			alt: "",
			fit: "contain",
			width: 24,
			height: 24,
			hideOnFailure: true
		})), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "normal",
			color: "primary",
			maxLines: 1
		}, item.label))))));
	}

