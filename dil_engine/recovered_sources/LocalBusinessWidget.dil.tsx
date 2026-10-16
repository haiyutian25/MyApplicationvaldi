
	function BusinessLink({ url, label, primary = false }) {
		return url ? /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("button", {
			block: true,
			color: primary ? "primary" : "secondary",
			variant: primary ? "solid" : "outline",
			size: "md",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_url",
				payload: { url }
			})
		}, label)) : null;
	}
	function LocalBusinessWidget(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("LocalBusinessWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 200
		});
		const hasMetadata = state.rating != null || state.category != null || state.price != null || state.open_status != null;
		const hasLinks = Boolean(state.directions_url || state.website_url || state.phone_url);
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: 362
		}, /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			width: "100%",
			padding: 0,
			gap: 0,
			background: "surface"
		}, /* @__PURE__ */ __dil.jsx(EntityActionSurface, {
			action: state.click_action,
			label: "Open business details for " + state.title
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(EntityMosaic, {
			images: state.images,
			title: state.title
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: {
				x: 5,
				top: 4,
				bottom: hasLinks ? 3 : 4
			},
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			maxLines: 2
		}, state.title), hasMetadata ? /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			gap: 2,
			rowGap: 1,
			align: "center",
			justify: "between",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			minWidth: 0,
			maxWidth: "100%",
			wrap: "nowrap",
			flex: 1
		}, state.rating != null ? /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			width: "max-content",
			wrap: "nowrap",
			flex: "none"
		}, /* @__PURE__ */ __dil.jsx(ReviewStar, { size: 16 }), /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "md"
		}, Math.round(state.rating * 10) / 10)) : null, state.category && state.rating != null ? /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "md",
			color: "secondary"
		}, "
") : null, state.category ? /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			maxLines: 1,
			truncate: true
		}, state.category) : null, state.price ? /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			width: "max-content",
			maxWidth: "100%",
			wrap: "nowrap",
			flex: "none"
		}, state.rating != null || state.category ? /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "md",
			color: "secondary"
		}, "
") : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			maxLines: 1,
			truncate: true
		}, state.price)) : null), state.open_status ? /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			minWidth: "max-content",
			wrap: "nowrap",
			flex: "none"
		}, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "md",
			color: state.is_open ? "success" : "secondary"
		}, state.open_status), state.hours_detail ? /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "md"
		}, state.hours_detail) : null) : null) : null))), hasLinks ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: {
				x: 5,
				top: 0,
				bottom: 4
			}
		}, /* @__PURE__ */ __dil.jsx("divider", {
			spacing: 0,
			color: "subtle"
		}), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			width: "100%",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx(BusinessLink, {
			url: state.directions_url,
			label: state.directions_label,
			primary: true
		}), /* @__PURE__ */ __dil.jsx(BusinessLink, {
			url: state.website_url,
			label: state.website_label
		}), /* @__PURE__ */ __dil.jsx(BusinessLink, {
			url: state.phone_url,
			label: state.call_label
		}))) : null));
	}

