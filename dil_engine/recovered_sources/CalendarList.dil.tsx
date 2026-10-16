
	function CalendarList(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("CalendarList", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 140
		});
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, /* @__PURE__ */ __dil.jsx("row", { align: "start" }, /* @__PURE__ */ __dil.jsx("col", {
			align: "start",
			gap: 1,
			width: 80
		}, /* @__PURE__ */ __dil.jsx("caption", {
			size: "lg",
			color: "secondary"
		}, state.date.name), /* @__PURE__ */ __dil.jsx("title", { size: "3xl" }, state.date.number)), /* @__PURE__ */ __dil.jsx("col", { flex: "auto" }, /* @__PURE__ */ __dil.jsx(CalendarEventRows, { events: state.events }), state.prep ? /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			padding: {
				x: 3,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.prep)) : null)));
	}

