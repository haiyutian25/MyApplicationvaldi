
	function ConversationFollowUpActionList(props) {
		const componentKey = DIL.useAppData((appData) => typeof props.__resolutionId === "string" && appData.opGenui?.componentResults?.[props.__resolutionId] != null ? props.__resolutionId : componentDataKey("ConversationFollowUpActionList", props));
		const { resolutionComplete, state } = useResolvedComponentResult("ConversationFollowUpActionList", {
			...props,
			__resolutionId: componentKey
		});
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 72
		});
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			width: "100%",
			align: "start"
		}, state.actions.map((action, index) => /* @__PURE__ */ __dil.jsx("pressable", {
			key: action.instance_id,
			inline: true,
			align: "start",
			ariaLabel: action.label,
			onClick: () => {
				if (action.kind === "prompt") GenUI.issueNewTurn(action.query, {
					prompt: action.query,
					append_to_current_leaf: true,
					followup_metadata: {
						followups_v2_followup_clicked: true,
						followups_v2_followup_source: "conversation_followup_suggestions_v1"
					}
				});
				else GenUI.dispatchAction({
					handler: "client",
					type: "start_voice_mode",
					payload: {
						component_key: componentKey,
						action_index: index,
						event_source: "conversation_followup_suggestions_v1"
					}
				});
			}
		}, /* @__PURE__ */ __dil.jsx(FollowUpLinkLabel, { label: action.label }))));
	}

