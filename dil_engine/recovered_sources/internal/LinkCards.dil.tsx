
	function LinkCards({ state }) {
		const attribution = state.attribution;
		const width = DIL.useBreakpoint("sm") ? 280 : "72%";
		if (state.is_loading) return /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 2,
			ariaLabel: state.loading_label
		}, [
			0,
			1,
			2
		].map((index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: index,
			variant: "outline",
			width,
			minWidth: width,
			gap: 0,
			padding: 3
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 16,
			height: 16,
			radius: "md",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		})), /* @__PURE__ */ __dil.jsx("box", {
			width: "55%",
			height: 12,
			radius: "sm",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		}))), /* @__PURE__ */ __dil.jsx("box", {
			width: "85%",
			height: 16,
			radius: "sm",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		})), /* @__PURE__ */ __dil.jsx("box", {
			width: "65%",
			height: 14,
			radius: "sm",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		}))))));
		if (!state.items.length) return null;
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 2,
			ariaLabel: state.carousel_label
		}, state.items.map((item, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: item.url,
			variant: "outline",
			width,
			minWidth: width,
			gap: 0,
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			ariaLabel: item.accessibility_label,
			onClick: () => GenUI.dispatchAction({
				type: "open_url",
				handler: "client",
				payload: {
					url: item.url,
					event_name: "chatgpt_widget_action",
					event_data: {
						widget_name: state.widget_name ?? "web_links_carousel",
						widget_affordance: "option",
						widget_action_target: "web_link",
						widget_action_value: String(index),
						surface_location: "response",
						content_reference_type: state.widget_name ?? "web_links_carousel"
					}
				}
			})
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: "100%",
			gap: 2,
			padding: 3
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			url: item.url,
			size: 16,
			frame: true
		}), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "xs",
			maxLines: 1,
			truncate: true
		}, item.domain)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold",
			maxLines: 1,
			truncate: true
		}, item.title), item.snippet != null && item.snippet !== "" && /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "xs",
			maxLines: 1,
			truncate: true
		}, item.snippet)))))), attribution ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, attribution.label + " ", /* @__PURE__ */ __dil.jsx("pressable", {
			inline: true,
			role: "link",
			padding: 0,
			onClick: () => GenUI.openUrl(attribution.url)
		}, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "xs",
			color: "tertiary"
		}, attribution.name))) : null);
	}



/* ---- merged ---- */

	function LinkCards({ state }) {
		const attribution = state.attribution;
		const width = DIL.useBreakpoint("sm") ? 280 : "72%";
		if (state.is_loading) return /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 2,
			ariaLabel: state.loading_label
		}, [
			0,
			1,
			2
		].map((index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: index,
			variant: "outline",
			width,
			minWidth: width,
			gap: 0,
			padding: 3
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 16,
			height: 16,
			radius: "md",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		})), /* @__PURE__ */ __dil.jsx("box", {
			width: "55%",
			height: 12,
			radius: "sm",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		}))), /* @__PURE__ */ __dil.jsx("box", {
			width: "85%",
			height: 16,
			radius: "sm",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		})), /* @__PURE__ */ __dil.jsx("box", {
			width: "65%",
			height: 14,
			radius: "sm",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		}))))));
		if (!state.items.length) return null;
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 2,
			ariaLabel: state.carousel_label
		}, state.items.map((item, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: item.url,
			variant: "outline",
			width,
			minWidth: width,
			gap: 0,
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			ariaLabel: item.accessibility_label,
			onClick: () => GenUI.dispatchAction({
				type: "open_url",
				handler: "client",
				payload: {
					url: item.url,
					event_name: "chatgpt_widget_action",
					event_data: {
						widget_name: state.widget_name ?? "web_links_carousel",
						widget_affordance: "option",
						widget_action_target: "web_link",
						widget_action_value: String(index),
						surface_location: "response",
						content_reference_type: state.widget_name ?? "web_links_carousel"
					}
				}
			})
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: "100%",
			gap: 2,
			padding: 3
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			url: item.url,
			size: 16,
			frame: true
		}), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "xs",
			maxLines: 1,
			truncate: true
		}, item.domain)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold",
			maxLines: 1,
			truncate: true
		}, item.title), item.snippet != null && item.snippet !== "" && /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "xs",
			maxLines: 1,
			truncate: true
		}, item.snippet)))))), attribution ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, attribution.label + " ", /* @__PURE__ */ __dil.jsx("pressable", {
			inline: true,
			role: "link",
			padding: 0,
			onClick: () => GenUI.openUrl(attribution.url)
		}, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "xs",
			color: "tertiary"
		}, attribution.name))) : null);
	}

