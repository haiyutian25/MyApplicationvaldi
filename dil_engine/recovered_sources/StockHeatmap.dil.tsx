
	const SvgRect = "rect";
	const SvgText = "text";
	const SvgGroup = "g";
	const SvgDefs = "defs";
	const SvgClip = "clipPath";
	const fontSize = (size) => ({
		"2xs": 10,
		xs: 12,
		sm: 14,
		md: 16,
		lg: 18,
		xl: 20
	})[size] ?? 14;
	function StockHeatmap(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("StockHeatmap", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 460
		});
		return /* @__PURE__ */ __dil.jsx(Heatmap, { state });
	}
	function Heatmap({ state }) {
		const wide = DIL.useBreakpoint("sm");
		const { isDark } = DIL.useTheme();
		const clipPrefix = DIL.useId();
		const [activeId, setActiveId] = DIL.useState(state.active_group_id);
		const group = state.groups.find((item) => item.id === activeId);
		const fill = (value) => typeof value === "string" ? value : value[isDark ? "dark" : "light"];
		const width = wide ? 720 : 320;
		const height = wide ? state.desktop_map_height : state.mobile_map_height;
		const tiles = group ? wide ? group.desktop_tiles : group.mobile_tiles : [];
		return /* @__PURE__ */ __dil.jsx("card", {
			background: "surface",
			size: "full",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			padding: {
				top: 5,
				bottom: 5
			}
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "medium"
		}, state.scope_title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.scope_subtitle)), state.groups.length > 1 && /* @__PURE__ */ __dil.jsx("box", { padding: { x: 5 } }, /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.groups.map((item) => ({
				value: item.id,
				label: wide ? item.label : item.short_label
			})),
			value: activeId,
			onChange: setActiveId,
			variant: "ghost",
			size: "md",
			pill: true
		})), group && /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, /* @__PURE__ */ __dil.jsx("box", { padding: { x: 5 } }, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height,
			background: "surface",
			radius: "xl",
			clip: true,
			role: "img",
			ariaLabel: tiles.map((tile) => state.companies[tile.company_index].accessible_label).join("; ")
		}, /* @__PURE__ */ __dil.jsx("svg", {
			width: "100%",
			height,
			viewBox: `0 0 ${width} ${height}`,
			preserveAspectRatio: "none"
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, tiles.map((tile, index) => {
			const company = state.companies[tile.company_index];
			const x = parseFloat(tile.left) * width / 100;
			const y = parseFloat(tile.top) * height / 100;
			const tileWidth = parseFloat(tile.width) * width / 100;
			const tileHeight = parseFloat(tile.height) * height / 100;
			const clipId = `${clipPrefix}-${index}`;
			const tickerSize = fontSize(tile.ticker_size);
			const changeSize = fontSize(tile.change_size);
			return /* @__PURE__ */ __dil.jsx(SvgGroup, { key: company.ticker }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx(SvgDefs, null, /* @__PURE__ */ __dil.jsx(SvgClip, { id: clipId }, /* @__PURE__ */ __dil.jsx(SvgRect, {
				x,
				y,
				width: tileWidth,
				height: tileHeight,
				fill: "white"
			}))), /* @__PURE__ */ __dil.jsx(SvgRect, {
				x,
				y,
				width: tileWidth,
				height: tileHeight,
				fill: fill(company.fill),
				stroke: "white",
				strokeWidth: 1
			}), tile.label_tier === "full" && /* @__PURE__ */ __dil.jsx(SvgGroup, { clipPath: `url(#${clipId})` }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx(SvgText, {
				x: x + 5,
				y: y + 3 + tickerSize,
				fill: "white",
				fontSize: tickerSize,
				fontWeight: 400
			}, company.ticker), /* @__PURE__ */ __dil.jsx(SvgText, {
				x: x + 5,
				y: y + 7 + tickerSize + changeSize,
				fill: "white",
				fontSize: changeSize,
				fontWeight: 400
			}, company.change_text)))));
		}))))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx("row", {
			justify: "between",
			align: "center",
			gap: 3,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: .5
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, "-3%"), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.legend.map((item, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: index,
			width: 9,
			height: 8,
			radius: "xs",
			background: fill(item.fill),
			ariaLabel: item.label
		}))), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, "+3%")), wide && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, state.as_of_text)), !wide && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, state.as_of_text)))));
	}



/* ---- merged ---- */

	const SvgRect = "rect";
	const SvgText = "text";
	const SvgGroup = "g";
	const SvgDefs = "defs";
	const SvgClip = "clipPath";
	const fontSize = (size) => ({
		"2xs": 10,
		xs: 12,
		sm: 14,
		md: 16,
		lg: 18,
		xl: 20
	})[size] ?? 14;
	function StockHeatmap(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("StockHeatmap", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 460
		});
		return /* @__PURE__ */ __dil.jsx(Heatmap, { state });
	}
	function Heatmap({ state }) {
		const wide = DIL.useBreakpoint("sm");
		const { isDark } = DIL.useTheme();
		const clipPrefix = DIL.useId();
		const [activeId, setActiveId] = DIL.useState(state.active_group_id);
		const group = state.groups.find((item) => item.id === activeId);
		const fill = (value) => typeof value === "string" ? value : value[isDark ? "dark" : "light"];
		const width = wide ? 720 : 320;
		const height = wide ? state.desktop_map_height : state.mobile_map_height;
		const tiles = group ? wide ? group.desktop_tiles : group.mobile_tiles : [];
		return /* @__PURE__ */ __dil.jsx("card", {
			background: "surface",
			size: "full",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			padding: {
				top: 5,
				bottom: 5
			}
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "medium"
		}, state.scope_title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.scope_subtitle)), state.groups.length > 1 && /* @__PURE__ */ __dil.jsx("box", { padding: { x: 5 } }, /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.groups.map((item) => ({
				value: item.id,
				label: wide ? item.label : item.short_label
			})),
			value: activeId,
			onChange: setActiveId,
			variant: "ghost",
			size: "md",
			pill: true
		})), group && /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, /* @__PURE__ */ __dil.jsx("box", { padding: { x: 5 } }, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height,
			background: "surface",
			radius: "xl",
			clip: true,
			role: "img",
			ariaLabel: tiles.map((tile) => state.companies[tile.company_index].accessible_label).join("; ")
		}, /* @__PURE__ */ __dil.jsx("svg", {
			width: "100%",
			height,
			viewBox: `0 0 ${width} ${height}`,
			preserveAspectRatio: "none"
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, tiles.map((tile, index) => {
			const company = state.companies[tile.company_index];
			const x = parseFloat(tile.left) * width / 100;
			const y = parseFloat(tile.top) * height / 100;
			const tileWidth = parseFloat(tile.width) * width / 100;
			const tileHeight = parseFloat(tile.height) * height / 100;
			const clipId = `${clipPrefix}-${index}`;
			const tickerSize = fontSize(tile.ticker_size);
			const changeSize = fontSize(tile.change_size);
			return /* @__PURE__ */ __dil.jsx(SvgGroup, { key: company.ticker }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx(SvgDefs, null, /* @__PURE__ */ __dil.jsx(SvgClip, { id: clipId }, /* @__PURE__ */ __dil.jsx(SvgRect, {
				x,
				y,
				width: tileWidth,
				height: tileHeight,
				fill: "white"
			}))), /* @__PURE__ */ __dil.jsx(SvgRect, {
				x,
				y,
				width: tileWidth,
				height: tileHeight,
				fill: fill(company.fill),
				stroke: "white",
				strokeWidth: 1
			}), tile.label_tier === "full" && /* @__PURE__ */ __dil.jsx(SvgGroup, { clipPath: `url(#${clipId})` }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx(SvgText, {
				x: x + 5,
				y: y + 3 + tickerSize,
				fill: "white",
				fontSize: tickerSize,
				fontWeight: 400
			}, company.ticker), /* @__PURE__ */ __dil.jsx(SvgText, {
				x: x + 5,
				y: y + 7 + tickerSize + changeSize,
				fill: "white",
				fontSize: changeSize,
				fontWeight: 400
			}, company.change_text)))));
		}))))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx("row", {
			justify: "between",
			align: "center",
			gap: 3,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: .5
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, "-3%"), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.legend.map((item, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: index,
			width: 9,
			height: 8,
			radius: "xs",
			background: fill(item.fill),
			ariaLabel: item.label
		}))), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, "+3%")), wide && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, state.as_of_text)), !wide && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, state.as_of_text)))));
	}

