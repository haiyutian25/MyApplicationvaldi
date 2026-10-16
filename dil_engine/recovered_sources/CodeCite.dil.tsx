
	function ResolvedCodeCite({ componentKey, state }) {
		const isMobile = DIL.useIsMobile();
		const [hovered, setHovered] = DIL.useState(false);
		const label = state.display_label;
		const openCitation = () => GenUI.dispatchAction({
			handler: "client",
			type: "open_coding_citation",
			payload: { component_key: componentKey }
		});
		return /* @__PURE__ */ __dil.jsx("popover", {
			hoverOpenDelay: 0,
			showOnHover: true
		}, /* @__PURE__ */ __dil.jsx("popover-trigger", { onClick: openCitation }, /* @__PURE__ */ __dil.jsx("badge", {
			color: hovered ? {
				light: "#e8e8e8",
				dark: "gray-300"
			} : {
				light: "gray-75",
				dark: "gray-400"
			},
			onHover: setHovered,
			padding: {
				x: 1,
				y: 1
			},
			size: "sm",
			variant: "soft",
			weight: "normal"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			ariaLabel: label,
			role: "img"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			color: "secondary",
			name: "file-code",
			size: "md"
		})))), /* @__PURE__ */ __dil.jsx("popover-content", {
			align: "start",
			side: "bottom",
			sideOffset: 4
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			maxWidth: "100%",
			padding: 3,
			width: isMobile ? "100%" : 324
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: label,
			gap: 2,
			onClick: openCitation
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "xs",
			weight: "medium"
		}, state.preview_label), /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("box", {
			background: "surface-tertiary",
			padding: 2,
			radius: "md"
		}, /* @__PURE__ */ __dil.jsx("code", null, state.highlighted_text))))));
	}
	function CodeCite(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("CodeCite", props);
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading code citation" });
		return state.highlighted_text ? /* @__PURE__ */ __dil.jsx(ResolvedCodeCite, {
			componentKey: props.__resolutionId ?? componentDataKey("CodeCite", props),
			state
		}) : null;
	}

