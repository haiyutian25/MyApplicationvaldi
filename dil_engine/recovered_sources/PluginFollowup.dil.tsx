
	function PluginFollowup(props) {
		const { isDark } = DIL.useTheme();
		const supportedActions = DIL.useAppData((data) => data.opGenui?.supportedClientActions);
		const { state, resolutionComplete } = useResolvedComponentResult("PluginFollowup", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 180,
			height: 44
		});
		if (state.hidden || !supportedActions?.includes("plugin_followup.accept")) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			direction: "col",
			align: "start",
			gap: 4
		}, !state.is_streaming && state.show_contextual_sentence !== false ? /* @__PURE__ */ __dil.jsx("text", { size: "md" }, state.offer.action.contextual_sentence) : null, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "fit-content",
			maxWidth: "100%",
			minHeight: 44,
			padding: {
				y: 3,
				x: 4
			},
			radius: "full",
			border: {
				size: 1,
				color: "default"
			},
			background: "surface",
			ariaLabel: state.offer.action.label,
			disabled: state.pending || state.is_streaming,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "plugin_followup.accept",
				payload: { offer: state.offer }
			})
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 20,
			height: 20,
			flex: "none",
			align: "center",
			justify: "center"
		}, state.icon_url || state.icon_url_dark ? /* @__PURE__ */ __dil.jsx("image", {
			src: (isDark ? state.icon_url_dark : state.icon_url) ?? "",
			alt: "",
			fit: "contain",
			width: 20,
			height: 20,
			radius: "none",
			fallback: /* @__PURE__ */ __dil.jsx("icon", {
				name: "plugin",
				color: "secondary",
				size: "xl"
			})
		}) : /* @__PURE__ */ __dil.jsx("icon", {
			name: "plugin",
			color: "secondary",
			size: "xl"
		})), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "normal",
			color: "primary"
		}, state.offer.action.label))));
	}

