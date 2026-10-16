
	function WeatherCurrentWithSource(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("WeatherCurrentWithSource", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 240
		});
		return /* @__PURE__ */ __dil.jsx("card", {
			theme: "dark",
			size: "full",
			padding: {
				y: 8,
				x: 4
			},
			background: state.background
		}, /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: state.conditionImage,
			width: 80,
			height: 80
		}), /* @__PURE__ */ __dil.jsx("title", {
			size: "3xl",
			weight: "normal",
			color: "white"
		}, state.temperature)), /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "white",
			size: "lg"
		}, state.location), /* @__PURE__ */ __dil.jsx("text", {
			color: "white",
			textAlign: "center"
		}, state.conditionDescription))));
	}

