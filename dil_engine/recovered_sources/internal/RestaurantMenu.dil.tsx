
	function RestaurantMenu({ state }) {
		const hasLoggedImpression = DIL.useRef(false);
		const mobile = DIL.useIsMobile();
		if (!state.items.length) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			...GenUI.logEvent ? {
				onVisibleWhen: !hasLoggedImpression.current,
				onVisible: () => {
					hasLoggedImpression.current = true;
					GenUI.logEvent?.({
						event_name: "restaurant_menu_widget_shown",
						statsig_event_name: "restaurant_menu_widget_shown",
						event_data: { widget_name: "restaurant_menu" }
					});
				}
			} : {}
		}, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 3,
			showArrows: !mobile,
			flush: true
		}, state.items.map((item, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: item.id,
			width: 140,
			minWidth: 140,
			height: 166,
			padding: 0,
			variant: "none"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: 140,
			minWidth: 140,
			height: 166,
			padding: 0,
			radius: "xl",
			background: "transparent",
			onClick: () => GenUI.dispatchAction({
				type: "open_image_lightbox",
				handler: "client",
				payload: {
					images: state.items,
					selected_index: index
				}
			})
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: 140
		}, /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: {
				url: item.url,
				content_url: item.image_url,
				thumbnail_url: item.image_url
			},
			alt: item.alt_text,
			width: 140,
			height: 140,
			fit: "cover",
			radius: "xl",
			hideOnFailure: true
		}), item.caption && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			maxLines: 1
		}, item.caption)))))));
	}



/* ---- merged ---- */

	function RestaurantMenu({ state }) {
		const hasLoggedImpression = DIL.useRef(false);
		const mobile = DIL.useIsMobile();
		if (!state.items.length) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			...GenUI.logEvent ? {
				onVisibleWhen: !hasLoggedImpression.current,
				onVisible: () => {
					hasLoggedImpression.current = true;
					GenUI.logEvent?.({
						event_name: "restaurant_menu_widget_shown",
						statsig_event_name: "restaurant_menu_widget_shown",
						event_data: { widget_name: "restaurant_menu" }
					});
				}
			} : {}
		}, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 3,
			showArrows: !mobile,
			flush: true
		}, state.items.map((item, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: item.id,
			width: 140,
			minWidth: 140,
			height: 166,
			padding: 0,
			variant: "none"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: 140,
			minWidth: 140,
			height: 166,
			padding: 0,
			radius: "xl",
			background: "transparent",
			onClick: () => GenUI.dispatchAction({
				type: "open_image_lightbox",
				handler: "client",
				payload: {
					images: state.items,
					selected_index: index
				}
			})
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: 140
		}, /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: {
				url: item.url,
				content_url: item.image_url,
				thumbnail_url: item.image_url
			},
			alt: item.alt_text,
			width: 140,
			height: 140,
			fit: "cover",
			radius: "xl",
			hideOnFailure: true
		}), item.caption && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			maxLines: 1
		}, item.caption)))))));
	}

