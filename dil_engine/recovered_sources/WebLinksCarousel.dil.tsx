
	function WebLinksCarousel(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("WebLinksCarousel", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 100
		});
		return /* @__PURE__ */ __dil.jsx(LinkCards, { state });
	}

