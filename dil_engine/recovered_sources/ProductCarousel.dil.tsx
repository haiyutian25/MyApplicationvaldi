
	function ProductCarousel(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("ProductCarousel", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : null;
		return /* @__PURE__ */ __dil.jsx("box", null);
	}

