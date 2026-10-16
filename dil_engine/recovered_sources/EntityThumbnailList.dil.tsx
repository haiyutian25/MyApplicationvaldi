
	function ThumbnailImage({ item, carousel }) {
		const image = item.image ? /* @__PURE__ */ __dil.jsx("search-image", {
			upgradeToFullRes: true,
			key: JSON.stringify([item.image.content_url, item.image.thumbnail_url]),
			searchImage: item.image,
			alt: item.name,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		});
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			background: "surface-secondary",
			border: {
				size: 1,
				color: "subtle"
			},
			radius: carousel ? "xl" : "lg",
			clip: true
		}, item.action_payload && (item.image || carousel) ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			padding: 0,
			background: "transparent",
			border: 0,
			radius: "none",
			ariaLabel: item.name,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_entity_detail",
				payload: item.action_payload
			})
		}, image) : image);
	}
	function ThumbnailName({ item, carousel }) {
		const name = /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "sm",
			weight: carousel ? "medium" : void 0,
			strong: !carousel,
			maxLines: carousel ? 2 : void 0,
			truncate: carousel,
			underline: !carousel && item.action_payload ? "dotted" : void 0
		}, item.name);
		return item.action_payload ? /* @__PURE__ */ __dil.jsx("pressable", {
			inline: !carousel,
			width: carousel ? "100%" : void 0,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_entity_detail",
				payload: item.action_payload
			})
		}, name) : name;
	}
	function ThumbnailListRow({ item }) {
		return /* @__PURE__ */ __dil.jsx("list-item", { marker: /* @__PURE__ */ __dil.jsx(ThumbnailImage, {
			item,
			carousel: false
		}) }, /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx(ThumbnailName, {
			item,
			carousel: false
		}), /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, item.desc)));
	}
	function EntityThumbnailList(props) {
		const isMobile = DIL.useIsMobile();
		const { resolutionComplete, state } = useResolvedComponentResult("EntityThumbnailList", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 140
		});
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			gap: 3,
			...GenUI.logEvent ? { onVisible: () => GenUI.logEvent?.({
				event_name: "entity_thumbnail_list_widget_shown",
				statsig_event_name: "entity_thumbnail_list_widget_shown",
				event_data: {
					widget_name: "entity_thumbnail_list",
					is_carousel: state.is_carousel
				}
			}) } : {}
		}, state.title !== "" ? /* @__PURE__ */ __dil.jsx("title", { size: "sm" }, state.title) : null, state.is_carousel ? /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 3,
			showArrows: !isMobile,
			flush: true
		}, state.entities.map((item, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: index,
			width: 140,
			minWidth: 140,
			padding: 0,
			variant: "none"
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: 140,
			minWidth: 140,
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 140,
			height: 140
		}, /* @__PURE__ */ __dil.jsx(ThumbnailImage, {
			item,
			carousel: true
		})), /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx(ThumbnailName, {
			item,
			carousel: true
		}), item.subtitle !== "" ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 1,
			truncate: true
		}, item.subtitle) : null))))) : /* @__PURE__ */ __dil.jsx("list", { maxMarkerSize: "lg" }, state.entities.map((item, index) => /* @__PURE__ */ __dil.jsx(ThumbnailListRow, {
			key: index,
			item
		}))));
	}

