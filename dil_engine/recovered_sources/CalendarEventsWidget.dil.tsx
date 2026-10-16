
	function CalendarEventsWidget(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("CalendarEventsWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 140
		});
		return /* @__PURE__ */ __dil.jsx("card", { size: "md" }, /* @__PURE__ */ __dil.jsx("row", { align: "start" }, /* @__PURE__ */ __dil.jsx("col", {
			align: "start",
			gap: 1,
			width: 80
		}, /* @__PURE__ */ __dil.jsx("caption", {
			size: "lg",
			color: "secondary"
		}, state.date.header), /* @__PURE__ */ __dil.jsx("title", { size: "3xl" }, state.date.subheader)), /* @__PURE__ */ __dil.jsx("col", { flex: "auto" }, /* @__PURE__ */ __dil.jsx(CalendarEventRows, {
			events: state.events,
			locations: true
		}))));
	}

