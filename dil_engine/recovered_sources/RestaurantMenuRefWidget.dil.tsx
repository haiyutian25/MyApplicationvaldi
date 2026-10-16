
	function RestaurantMenuRefWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("RestaurantMenuRefWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 166
		});
		return /* @__PURE__ */ __dil.jsx(RestaurantMenu, { state });
	}

