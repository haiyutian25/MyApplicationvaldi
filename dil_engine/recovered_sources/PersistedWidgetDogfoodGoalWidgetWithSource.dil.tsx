
	function PersistedWidgetDogfoodGoalWidgetWithSource(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("PersistedWidgetDogfoodGoalWidgetWithSource", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 80
		});
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "lg",
			background: "surface-elevated",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3,
			padding: {
				x: 4,
				y: 4
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 4,
			height: 36,
			radius: "full",
			background: "green-500"
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: .5
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			weight: "medium"
		}, state.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, state.target_label)), /* @__PURE__ */ __dil.jsx("icon", {
			name: "target",
			size: "md",
			color: "green-500"
		})));
	}

