
	function PersistedWidgetDogfoodExerciseLogWidgetWithSource(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("PersistedWidgetDogfoodExerciseLogWidgetWithSource", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "lg",
			background: "surface-elevated",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: {
				x: 4,
				y: 4
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 4,
			height: 32,
			radius: "full",
			background: "blue-500"
		}), /* @__PURE__ */ __dil.jsx("row", {
			align: "baseline",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "semibold"
		}, state.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, "
"), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.date_label))), /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, state.entries.map((entry) => /* @__PURE__ */ __dil.jsx("row", {
			key: entry.id,
			align: "center",
			justify: "between",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: .5
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, entry.activity), entry.detail && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, entry.detail)), entry.duration_label && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, entry.duration_label)))), /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.duration_summary_label)));
	}

