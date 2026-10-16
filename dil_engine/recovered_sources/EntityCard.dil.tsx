
	function EntityCard(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("EntityCard", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		return /* @__PURE__ */ __dil.jsx(EntityTile, { state });
	}

