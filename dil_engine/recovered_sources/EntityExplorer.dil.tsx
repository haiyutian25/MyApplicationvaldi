
	function EntityExplorer(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("EntityExplorer", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 240
		});
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("grid", {
			columns: 2,
			gap: 3
		}, state.entities.map((item, index) => /* @__PURE__ */ __dil.jsx("grid-item", { key: item.render_key ?? index }, /* @__PURE__ */ __dil.jsx(EntityTile, {
			state: item,
			explorer: true
		}))))));
	}

