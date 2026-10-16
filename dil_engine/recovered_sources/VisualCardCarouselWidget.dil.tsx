
	function VisualCardText({ item }) {
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: 3,
			minWidth: 0,
			width: "100%"
		}, item.title != null && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold",
			underline: item.action_payload || item.url != null ? "dotted" : void 0,
			maxLines: 2,
			truncate: true
		}, item.title), item.caption && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			maxLines: 2,
			truncate: true
		}, item.caption), item.subtitle && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			maxLines: 2,
			truncate: true
		}, item.subtitle), item.source && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			maxLines: 1,
			truncate: true
		}, item.source), item.metadata && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			maxLines: 2,
			truncate: true
		}, item.metadata), item.reason && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			maxLines: 3,
			truncate: true
		}, item.reason), item.summary && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			maxLines: 3,
			truncate: true
		}, item.summary));
	}
	function VisualCardView({ state }) {
		const isMobile = DIL.useIsMobile();
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("title", { size: "sm" }, state.title), /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 3,
			showArrows: !isMobile
		}, state.items.map((item, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: item.url ?? item.title ?? item.query ?? index,
			width: "160px",
			minWidth: "160px",
			variant: "outline",
			background: "surface",
			gap: 0,
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			aspectRatio: "2/3",
			background: "surface-secondary",
			radius: {
				topLeft: "xl",
				topRight: "xl",
				bottomRight: "none",
				bottomLeft: "none"
			},
			clip: true
		}, item.image ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			padding: 0,
			background: "transparent",
			border: 0,
			radius: "none",
			ariaLabel: item.title ?? item.query ?? "",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_image_lightbox",
				payload: {
					images: state.lightbox_images,
					selected_index: item.lightbox_index
				}
			})
		}, /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: item.image,
			upgradeToFullRes: true,
			alt: item.title ?? item.query ?? void 0,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		})) : item.image_is_loading ? /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		}) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			align: "center",
			justify: "center",
			background: "surface-tertiary"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "images",
			color: "secondary"
		}))), item.action_payload != null || item.url != null ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			minWidth: 0,
			padding: 0,
			background: "transparent",
			border: 0,
			radius: "none",
			ariaLabel: item.title ?? item.query ?? "",
			onClick: () => GenUI.dispatchAction(item.action_payload != null ? {
				handler: "client",
				type: "open_entity_detail",
				payload: item.action_payload
			} : {
				handler: "client",
				type: "open_url",
				payload: { url: item.url }
			})
		}, /* @__PURE__ */ __dil.jsx(VisualCardText, { item })) : /* @__PURE__ */ __dil.jsx(VisualCardText, { item })))));
	}
	function VisualCardCarouselWidget(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("VisualCardCarouselWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 350
		});
		return /* @__PURE__ */ __dil.jsx(VisualCardView, { state });
	}

