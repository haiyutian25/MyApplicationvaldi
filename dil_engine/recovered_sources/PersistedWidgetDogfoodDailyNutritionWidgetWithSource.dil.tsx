
	function PersistedWidgetDogfoodDailyNutritionWidgetWithSource(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("PersistedWidgetDogfoodDailyNutritionWidgetWithSource", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 200
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
		}, state.date_label)), /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 8,
			height: 8,
			radius: "full",
			background: "orange-500"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, "Calories"), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: 5,
			width: "100%",
			radius: "full",
			background: "alpha-10"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: state.calorie_progress_width,
			height: 5,
			radius: "full",
			background: "orange-500"
		}))), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.calorie_progress_label)), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 8,
			height: 8,
			radius: "full",
			background: "green-500"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, "Protein"), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: 5,
			width: "100%",
			radius: "full",
			background: "alpha-10"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: state.protein_progress_width,
			height: 5,
			radius: "full",
			background: "green-500"
		}))), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.protein_progress_label))), /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, state.meals.map((meal) => /* @__PURE__ */ __dil.jsx("row", {
			key: meal.id,
			align: "center",
			justify: "between",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 4,
			height: 4,
			radius: "full",
			background: "border-strong"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, meal.name)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, meal.nutrition_label))))));
	}

