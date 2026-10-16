
	function RecommendationCard(props) {
		const canOpenConversation = DIL.useAppData((data) => data.opGenui?.supportedClientActions?.includes("open_conversation") === true);
		const { state, resolutionComplete } = useResolvedComponentResult("RecommendationCard", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 88
		});
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			padding: 4,
			radius: "3xl",
			variant: "ghost",
			align: "stretch",
			ariaLabel: state.title,
			disabled: !canOpenConversation,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_conversation",
				payload: { conversation_id: state.conversation_id }
			})
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			align: "center",
			gap: 4
		}, state.icon_url ? /* @__PURE__ */ __dil.jsx("box", {
			width: 40,
			height: 40,
			flex: "none"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: state.icon_url,
			alt: "",
			width: 40,
			height: 40,
			fit: "contain",
			hideOnFailure: true
		})) : state.emoji ? /* @__PURE__ */ __dil.jsx("box", {
			width: 40,
			flex: "none",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "2xl",
			weight: "normal"
		}, state.emoji)) : null, /* @__PURE__ */ __dil.jsx("col", {
			flex: "auto",
			minWidth: 0,
			gap: 1,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "semibold",
			color: "primary"
		}, state.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.description)))));
	}

