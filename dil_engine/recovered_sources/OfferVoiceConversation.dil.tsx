
	function OfferVoiceConversation(props) {
		const componentKey = DIL.useAppData((appData) => typeof props.__resolutionId === "string" && appData.opGenui?.componentResults?.[props.__resolutionId] != null ? props.__resolutionId : componentDataKey("OfferVoiceConversation", props));
		const { state, resolutionComplete } = useResolvedComponentResult("OfferVoiceConversation", {
			...props,
			__resolutionId: componentKey
		});
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 180,
			height: 40
		});
		const startVoice = () => GenUI.dispatchAction({
			handler: "client",
			type: "start_voice_mode",
			payload: {
				component_key: componentKey,
				event_source: "offer_voice_conversation_widget",
				event_name: "chatgpt_widget_action",
				event_data: {
					widget_affordance: "OPTION",
					widget_action_target: "start_voice_mode",
					widget_action_value: "voice",
					surface_location: "RESPONSE",
					content_reference_type: "offer_voice_conversation"
				}
			}
		});
		if (state.presentation === "card") return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: state.button_label,
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
			onClick: startVoice
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			align: "center",
			gap: 4
		}, state.icon_url ? /* @__PURE__ */ __dil.jsx("box", { flex: "none" }, /* @__PURE__ */ __dil.jsx("image", {
			src: state.icon_url,
			alt: "",
			width: 36,
			height: 36,
			fit: "contain",
			hideOnFailure: true
		})) : null, /* @__PURE__ */ __dil.jsx("col", {
			flex: "auto",
			minWidth: 0,
			gap: 1,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "primary"
		}, state.button_label), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, state.description ?? "")))));
		return /* @__PURE__ */ __dil.jsx("box", { align: "start" }, /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			variant: "outline",
			color: "primary",
			onClick: startVoice
		}, /* @__PURE__ */ __dil.jsx("icon", { name: "voice-4-bars" }), state.button_label));
	}

