
	function AskUserDetails(props) {
		const supportedActions = DIL.useAppData((data) => data.opGenui?.supportedClientActions);
		const { state, resolutionComplete } = useResolvedComponentResult("AskUserDetails", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 180,
			height: 40
		});
		if (!state.show_details_cta) return null;
		const enabled = supportedActions?.includes("request_user_input") === true;
		return /* @__PURE__ */ __dil.jsx("box", {
			direction: "col",
			align: "start",
			onVisible: () => GenUI.logEvent?.({ event_name: "ask_user_details_impression" })
		}, state.invitation !== "" ? /* @__PURE__ */ __dil.jsx("text", null, state.invitation) : null, /* @__PURE__ */ __dil.jsx("box", {
			align: "start",
			onVisibleWhen: enabled,
			onVisible: () => GenUI.logEvent?.({ event_name: "ask_user_details_enabled_impression" })
		}, /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			variant: "outline",
			color: "primary",
			disabled: !enabled,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "request_user_input",
				payload: {
					questions: state.questions,
					submit_label: state.submit_label,
					event_name: "ask_user_details_clicked"
				}
			})
		}, /* @__PURE__ */ __dil.jsx("icon", { name: "tasks" }), state.display_button_label)));
	}

