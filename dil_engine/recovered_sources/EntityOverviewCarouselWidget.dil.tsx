
	function EntityOverviewCarouselWidget(props) {
		const isSm = DIL.useBreakpoint("sm");
		const { resolutionComplete, state } = useResolvedComponentResult("EntityOverviewCarouselWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 3,
			minWidth: 0
		}, state.title ? /* @__PURE__ */ __dil.jsx("text", { strong: true }, state.title) : null, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 4,
			snap: "mandatory",
			flush: true,
			showArrows: true,
			ariaLabel: state.title
		}, state.items.map((item, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: index,
			variant: "elevated",
			width: isSm ? 360 : "84%",
			padding: 0,
			background: "surface"
		}, /* @__PURE__ */ __dil.jsx(EntityActionSurface, {
			action: item.click_action,
			label: "Open details for " + item.title
		}, /* @__PURE__ */ __dil.jsx(EntityOverviewBody, {
			state: item,
			carousel: true
		}))))));
	}

