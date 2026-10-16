
	function BusinessGalleryPresentation({ state }) {
		const hasLoggedImpression = DIL.useRef(false);
		const isMobile = DIL.useIsMobile();
		if (state.items.length === 0) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			...GenUI.logEvent ? {
				onVisibleWhen: !hasLoggedImpression.current,
				onVisible: () => {
					hasLoggedImpression.current = true;
					GenUI.logEvent?.({
						event_name: "business_gallery_widget_shown",
						statsig_event_name: "business_gallery_widget_shown",
						event_data: { widget_name: "business_gallery" }
					});
				}
			} : {}
		}, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 3,
			showArrows: !isMobile,
			flush: true
		}, state.items.map((item, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: item.id,
			width: 140,
			minWidth: 140,
			height: 140,
			padding: 0,
			variant: "none"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: 140,
			minWidth: 140,
			height: 140,
			padding: 0,
			radius: "xl",
			background: "transparent",
			ariaLabel: item.alt_text,
			onClick: () => GenUI.dispatchAction({
				type: "open_image_lightbox",
				handler: "client",
				payload: {
					images: state.items,
					selected_index: index
				}
			})
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: item.image_url,
			alt: item.alt_text,
			width: 140,
			height: 140,
			fit: "cover",
			radius: "xl",
			hideOnFailure: true
		}))))));
	}



/* ---- merged ---- */

	function BusinessGalleryPresentation({ state }) {
		const hasLoggedImpression = DIL.useRef(false);
		const isMobile = DIL.useIsMobile();
		if (state.items.length === 0) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			...GenUI.logEvent ? {
				onVisibleWhen: !hasLoggedImpression.current,
				onVisible: () => {
					hasLoggedImpression.current = true;
					GenUI.logEvent?.({
						event_name: "business_gallery_widget_shown",
						statsig_event_name: "business_gallery_widget_shown",
						event_data: { widget_name: "business_gallery" }
					});
				}
			} : {}
		}, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 3,
			showArrows: !isMobile,
			flush: true
		}, state.items.map((item, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: item.id,
			width: 140,
			minWidth: 140,
			height: 140,
			padding: 0,
			variant: "none"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: 140,
			minWidth: 140,
			height: 140,
			padding: 0,
			radius: "xl",
			background: "transparent",
			ariaLabel: item.alt_text,
			onClick: () => GenUI.dispatchAction({
				type: "open_image_lightbox",
				handler: "client",
				payload: {
					images: state.items,
					selected_index: index
				}
			})
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: item.image_url,
			alt: item.alt_text,
			width: 140,
			height: 140,
			fit: "cover",
			radius: "xl",
			hideOnFailure: true
		}))))));
	}

