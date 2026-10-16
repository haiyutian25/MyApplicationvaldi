
	function NewsCarousel(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("NewsCarousel", props);
		const isSm = DIL.useBreakpoint("sm");
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading news" });
		const items = state.items ?? [];
		return items.length ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			width: "100%"
		}, state.title ? /* @__PURE__ */ __dil.jsx("text", { strong: true }, state.title) : null, /* @__PURE__ */ __dil.jsx("carousel", {
			ariaLabel: "News",
			gap: 4
		}, items.map((item) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			background: "surface-elevated",
			key: item.ref,
			padding: 0,
			variant: "outline",
			width: isSm ? "31.5%" : "47.5%"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			onClick: () => GenUI.openUrl(item.url),
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			height: "100%",
			padding: { bottom: 6 },
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			background: "surface-secondary",
			clip: true,
			height: "144px",
			justify: "center",
			width: "100%"
		}, item.thumbnail_url ? /* @__PURE__ */ __dil.jsx("image", {
			alt: item.title,
			fit: "cover",
			height: "100%",
			radius: "none",
			src: item.thumbnail_url,
			width: "100%"
		}) : /* @__PURE__ */ __dil.jsx("favicon", {
			frame: true,
			size: 40,
			url: item.url
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: { x: 4 },
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			frame: true,
			size: 16,
			url: item.url
		}), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			maxLines: 1,
			size: "xs",
			truncate: true
		}, item.source_label)), /* @__PURE__ */ __dil.jsx("text", {
			maxLines: 5,
			size: "sm"
		}, item.title), item.date_label ? /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "xs"
		}, item.date_label) : null))))))) : null;
	}

