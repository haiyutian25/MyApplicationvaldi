
	function LedgerFinanceOnboardingWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerFinanceOnboardingWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 124
		});
		return /* @__PURE__ */ __dil.jsx("pressable", { onClick: () => GenUI.dispatchAction({
			handler: "client",
			type: "mattress_onboarding_card_click",
			payload: {
				card_id: state.id,
				title: state.title,
				thread_mode: state.thread_mode,
				system_hint: state.system_hint,
				...state.action != null ? { action: state.action } : { prompt: state.prompt }
			}
		}) }, /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			background: "surface-elevated",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: 124,
			width: "100%",
			padding: {
				x: 4,
				y: 4
			}
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			height: "100%",
			justify: "start"
		}, /* @__PURE__ */ __dil.jsx("row", { align: "center" }, state.icon_url ? /* @__PURE__ */ __dil.jsx("image", {
			src: state.icon_url,
			alt: "",
			width: 24,
			height: 24,
			fit: "contain",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("icon", {
			name: state.icon,
			size: "xl",
			color: "primary"
		})), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			flex: "auto"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold",
			maxLines: 1
		}, state.title), /* @__PURE__ */ __dil.jsx("caption", {
			size: "md",
			color: "secondary",
			maxLines: 2
		}, state.description)))))));
	}

