
	function NewsArticleWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("NewsArticleWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		return /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: `Open ${state.title}`,
			onClick: () => GenUI.dispatchAction({
				type: "open_url",
				handler: "client",
				payload: {
					url: state.url,
					event_name: "news_article_widget_clicked",
					event_data: {
						widget_name: "news_article_widget",
						ref: state.ref,
						url: state.url,
						domain: state.domain
					}
				}
			})
		}, /* @__PURE__ */ __dil.jsx("card", {
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
			url: state.url,
			size: 20
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			truncate: true,
			maxLines: 1
		}, state.source_label)), /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			maxLines: 3
		}, state.title)), state.thumbnail_url && /* @__PURE__ */ __dil.jsx("image", {
			src: state.thumbnail_url,
			alt: state.title,
			width: 100,
			height: 100,
			radius: "lg",
			fit: "cover",
			hideOnFailure: true
		})), state.snippet && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 1
		}, state.date_label && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, state.date_label), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "prose",
			maxLines: 4
		}, state.snippet)))));
	}

