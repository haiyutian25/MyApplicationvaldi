
	function ResolvedNewsCarousel({ state }) {
		const isSm = DIL.useBreakpoint("sm");
		const isMobile = DIL.useIsMobile();
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("box", {
			minWidth: 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 3,
			showArrows: !isMobile
		}, state.items.map((item) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: item.ref,
			width: isSm ? 342 : "84%",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			ariaLabel: `Open ${item.title}`,
			onClick: () => GenUI.dispatchAction({
				type: "open_url",
				handler: "client",
				payload: {
					url: item.url,
					event_name: "news_article_widget_carousel_item_clicked",
					event_data: {
						widget_name: "news_article_widget_carousel",
						ref: item.ref,
						url: item.url,
						domain: item.domain
					}
				}
			})
		}, /* @__PURE__ */ __dil.jsx("card", {
			width: "100%",
			size: "sm",
			padding: 4,
			gap: 4,
			shadow: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minWidth: 0,
			align: "start",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minWidth: 0,
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			url: item.url,
			size: 20
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			truncate: true,
			maxLines: 1
		}, item.source_label)), /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			maxLines: 3
		}, item.title)), item.thumbnail_url && /* @__PURE__ */ __dil.jsx("image", {
			src: item.thumbnail_url,
			alt: item.title,
			width: 100,
			height: 100,
			radius: "lg",
			fit: "cover",
			hideOnFailure: true
		})), item.snippet && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 1
		}, item.date_label && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, item.date_label), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "prose",
			maxLines: 4
		}, item.snippet))))))))));
	}
	function NewsArticleWidgetCarousel(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("NewsArticleWidgetCarousel", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 220
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedNewsCarousel, { state });
	}

