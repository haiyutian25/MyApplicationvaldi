
	function EmailPreview(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("EmailPreview", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 64
		});
		return /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			ariaLabel: `Open ${state.subject}`,
			onClick: () => GenUI.openUrl(state.url)
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			padding: {
				x: 3,
				y: 2.5
			},
			background: "surface-elevated",
			border: {
				size: .5,
				color: "strong"
			},
			radius: "3xl",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3,
			width: "100%",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 36,
			minWidth: 36,
			radius: "full",
			background: "surface-tertiary",
			border: {
				size: 1,
				color: "default"
			},
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: "secondary"
		}, state.sender_initial)), /* @__PURE__ */ __dil.jsx("col", {
			gap: .5,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary",
			truncate: true
		}, state.sender_name), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			maxLines: 2
		}, state.subject)))));
	}

