
	function HolidayWidget(props) {
		const isDesktop = DIL.useBreakpoint("sm");
		const { resolutionComplete, state } = useResolvedComponentResult("HolidayWidget", props);
		if (state?.is_loading === true || !state && !resolutionComplete) return /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 250
		});
		if (!state) return props.fallback ?? null;
		const heading = /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("title", { weight: "semibold" }, state.holiday_name), /* @__PURE__ */ __dil.jsx("title", { weight: "normal" }, state.holiday_date));
		const descriptor = /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, state.holiday_descriptor);
		const artwork = state.image && /* @__PURE__ */ __dil.jsx("grid-item", null, /* @__PURE__ */ __dil.jsx("image", {
			width: "100%",
			height: "100%",
			aspectRatio: "3/2",
			radius: "none",
			hideOnFailure: true,
			src: `https://persistent.oaistatic.com/sonic/holidays/${state.image}.jpg`
		}));
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 0
		}, state.image != null ? /* @__PURE__ */ __dil.jsx("grid", {
			columns: isDesktop ? 2 : 1,
			gap: 0
		}, !isDesktop && artwork, /* @__PURE__ */ __dil.jsx("grid-item", null, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%",
			justify: "between",
			padding: 5,
			height: "100%"
		}, heading, descriptor)), isDesktop && artwork) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			width: "100%",
			justify: "between",
			padding: 5
		}, heading, /* @__PURE__ */ __dil.jsx("spacer", { minSize: 12 }), descriptor));
	}

