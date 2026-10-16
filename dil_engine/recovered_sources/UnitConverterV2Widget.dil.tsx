
	function UnitConverterV2Widget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("UnitConverterV2Widget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 240
		});
		return /* @__PURE__ */ __dil.jsx(UnitConverter, {
			state,
			significant: true
		});
	}

