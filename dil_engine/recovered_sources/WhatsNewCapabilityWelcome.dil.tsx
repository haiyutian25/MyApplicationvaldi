
	function WhatsNewCapabilityWelcome(props) {
		const supportedActions = DIL.useAppData((data) => data.opGenui?.supportedClientActions);
		const { state, resolutionComplete } = useResolvedComponentResult("WhatsNewCapabilityWelcome", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 88
		});
		return /* @__PURE__ */ __dil.jsx("col", {
			role: "group",
			gap: 2,
			width: "100%",
			align: "start"
		}, state.items.map((item) => {
			const action = state.whats_new_capability_actions[item.action_id];
			const enabled = action != null && action.type !== "start_voice_mode" && (action.type === "issue_new_turn" || action.type === "open_url" || supportedActions?.includes(action.type));
			return /* @__PURE__ */ __dil.jsx("box", {
				key: item.action_id,
				width: "fit-content",
				maxWidth: "100%",
				onVisible: () => GenUI.logEvent?.({
					event_name: "chatgpt_whats_new_capability_action_shown",
					statsig_event_name: "chatgpt_whats_new_capability_action_shown",
					event_data: {
						renderer: "whats_new_capability",
						level: "welcome",
						use_case: "whats_new_capability",
						action_id: item.action_id,
						source: state.whats_new_capability_campaign_id
					}
				})
			}, /* @__PURE__ */ __dil.jsx("pressable", {
				width: "fit-content",
				maxWidth: "100%",
				height: 40,
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
				ariaLabel: item.label,
				disabled: !enabled,
				onClick: () => {
					if (!action) return;
					if (action.type === "issue_new_turn" && typeof action.payload.query === "string") {
						const { query, message_metadata, ...payload } = action.payload;
						GenUI.issueNewTurn(query, {
							...payload,
							followup_metadata: message_metadata
						});
					} else GenUI.dispatchAction(action);
				}
			}, /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 2,
				width: "100%",
				height: "100%",
				wrap: "nowrap"
			}, /* @__PURE__ */ __dil.jsx("box", {
				width: 24,
				height: 24,
				flex: "none",
				align: "center",
				justify: "center"
			}, item.icon_url != null ? /* @__PURE__ */ __dil.jsx("image", {
				src: item.icon_url,
				alt: "",
				fit: "contain",
				width: 24,
				height: 24,
				fallback: /* @__PURE__ */ __dil.jsx("icon", {
					name: item.action_id === "search" ? "dining-events" : item.action_id === "images" ? "image-square" : "headphones",
					size: "2xl",
					color: "secondary"
				})
			}) : /* @__PURE__ */ __dil.jsx("icon", {
				name: "heart-filled",
				size: "2xl",
				color: "red-500"
			})), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "normal",
				color: "primary",
				maxLines: 1
			}, item.label))));
		}));
	}

