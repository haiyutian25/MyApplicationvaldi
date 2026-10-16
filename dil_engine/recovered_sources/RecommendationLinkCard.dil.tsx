
	function RecommendationLinkCard(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("RecommendationLinkCard", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 128
		});
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			padding: 4,
			radius: "3xl",
			ariaLabel: state.title,
			onClick: () => {
				GenUI.logEvent?.({
					event_name: "link_card_widget_clicked",
					event_data: {
						widget_name: "link_card",
						refid: state.refid,
						url: state.url,
						domain: state.domain
					}
				});
				GenUI.openUrl(state.url);
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minWidth: 0,
			gap: 4,
			align: "center"
		}, state.image_url && /* @__PURE__ */ __dil.jsx("image", {
			src: state.image_url,
			alt: "",
			width: 128,
			height: 96,
			fit: "contain",
			radius: "xl",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "semibold",
			color: "primary"
		}, state.title), state.snippet && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.snippet)))));
	}

