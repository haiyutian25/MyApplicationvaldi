
	function PersistedWidgetDogfoodChecklistWidgetWithSource(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("PersistedWidgetDogfoodChecklistWidgetWithSource", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			weight: "semibold"
		}, state.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, "Ask ChatGPT to add, remove, or check off items.")), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.sections.map((section, index) => /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			key: index
		}, section.name !== "" && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			weight: "medium"
		}, section.name), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, section.items.map((item) => /* @__PURE__ */ __dil.jsx("row", {
			key: item.id,
			align: "center",
			gap: 2,
			padding: 2.5
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 18,
			minSize: 18,
			radius: "sm",
			align: "center",
			justify: "center",
			border: {
				size: 1,
				color: "strong"
			},
			background: item.completed ? "green-500" : "surface"
		}, item.completed && /* @__PURE__ */ __dil.jsx("icon", {
			name: "check",
			size: "xs",
			color: "white"
		})), /* @__PURE__ */ __dil.jsx("text", {
			lineThrough: item.completed,
			color: item.completed ? "secondary" : "primary"
		}, item.text)))))))));
	}

