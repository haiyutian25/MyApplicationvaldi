
	function CalendarEventRows({ events, locations = false }) {
		return /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, events.map((event, index) => /* @__PURE__ */ __dil.jsx("row", {
			key: event.id ?? index,
			align: "center",
			padding: {
				x: 3,
				y: 2
			},
			gap: 3,
			radius: "xl",
			background: event.isNew ? "none" : "surface-secondary",
			border: event.isNew ? {
				size: 1,
				color: event.color,
				style: "dashed"
			} : void 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 4,
			height: 40,
			radius: "full",
			background: event.color
		}), /* @__PURE__ */ __dil.jsx("col", null, /* @__PURE__ */ __dil.jsx("text", null, event.title), locations && event.location != null ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, event.location) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, event.time)), locations || event.isNew ? /* @__PURE__ */ __dil.jsx("spacer", null) : null, event.isNew ? /* @__PURE__ */ __dil.jsx("button", { onClick: () => GenUI.dispatchAction({
			type: "client",
			payload: {
				action: "add_to_calendar",
				item: event
			}
		}) }, "Add") : null)));
	}



/* ---- merged ---- */

	function CalendarEventRows({ events, locations = false }) {
		return /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, events.map((event, index) => /* @__PURE__ */ __dil.jsx("row", {
			key: event.id ?? index,
			align: "center",
			padding: {
				x: 3,
				y: 2
			},
			gap: 3,
			radius: "xl",
			background: event.isNew ? "none" : "surface-secondary",
			border: event.isNew ? {
				size: 1,
				color: event.color,
				style: "dashed"
			} : void 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 4,
			height: 40,
			radius: "full",
			background: event.color
		}), /* @__PURE__ */ __dil.jsx("col", null, /* @__PURE__ */ __dil.jsx("text", null, event.title), locations && event.location != null ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, event.location) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, event.time)), locations || event.isNew ? /* @__PURE__ */ __dil.jsx("spacer", null) : null, event.isNew ? /* @__PURE__ */ __dil.jsx("button", { onClick: () => GenUI.dispatchAction({
			type: "client",
			payload: {
				action: "add_to_calendar",
				item: event
			}
		}) }, "Add") : null)));
	}

