
	function InternalPartnerAppWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("InternalPartnerAppWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 116
		});
		return /* @__PURE__ */ __dil.jsx("box", { width: "100%" }, /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			width: 476,
			padding: {
				x: 4,
				y: 3.5
			}
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2.5,
			width: "100%",
			minWidth: 0
		}, state.provider_logo != null && state.provider_logo !== "" && /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			justify: "center",
			width: 32,
			height: 32,
			padding: 1,
			radius: "md",
			background: "surface-elevated"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: state.provider_logo,
			alt: state.title,
			width: 24,
			height: 24,
			fit: "contain",
			hideOnFailure: true
		})), /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			weight: "semibold",
			color: "primary",
			maxLines: 2
		}, state.title)), /* @__PURE__ */ __dil.jsx("button", {
			variant: "outline",
			color: "primary",
			size: "lg",
			block: true,
			disabled: state.launcher_payload == null,
			onClick: () => {
				if (state.launcher_payload != null) GenUI.dispatchAction({
					type: "launch_ecosystem_widget",
					handler: "client",
					payload: state.launcher_payload
				});
			}
		}, state.button_name))));
	}

