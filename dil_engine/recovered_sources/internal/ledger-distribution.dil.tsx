
	function LedgerDistribution({ state }) {
		const wide = DIL.useBreakpoint("sm");
		const dark = DIL.useTheme().isDark;
		const hidden = state.sensitive_values_hidden ?? false;
		const pie = /* @__PURE__ */ __dil.jsx("pie-chart", {
			size: 244,
			data: state.categories.map((category) => ({
				id: category.id,
				label: category.label,
				amount_value: category.amount_value,
				formatted: hidden ? category.percent_label : `${category.amount_label} (${category.percent_label})`,
				fill: typeof category.color === "object" ? dark ? category.color?.dark : category.color?.light : category.color,
				stroke: dark ? "#303030" : "#ffffff"
			})),
			series: [{
				dataKey: "amount_value",
				label: state.labels.value
			}],
			xAxis: "label",
			showLegend: false,
			innerRadius: "49%",
			outerRadius: "100%",
			paddingAngle: 0,
			cornerRadius: 3,
			tooltipAnimationDuration: 0,
			showTooltip: true
		});
		const rows = /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, state.categories.map((item, index) => /* @__PURE__ */ __dil.jsx("row", {
			key: item.id,
			align: "center",
			gap: 4,
			width: "100%",
			height: 48,
			border: index ? { top: {
				size: 1,
				color: "subtle"
			} } : void 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1,
			height: 40,
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			maxLines: 1
		}, item.label), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("box", {
			height: 4,
			radius: "full",
			background: "alpha-10",
			width: "100%",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: 4,
			radius: "full",
			width: item.bar_width,
			background: item.color
		})), /* @__PURE__ */ __dil.jsx("box", { height: 3 }))), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			textAlign: "end"
		}, hidden ? item.percent_label : item.amount_label))));
		const mobileRows = /* @__PURE__ */ __dil.jsx("grid", {
			columns: hidden ? ["minmax(0, 1fr)", "max-content"] : [
				"minmax(0, 1fr)",
				"max-content",
				"max-content"
			],
			gap: "0.5rem 1rem"
		}, state.categories.map((item) => /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("grid-item", { key: `${item.id}-label` }, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 4,
			height: 20,
			radius: "full",
			background: item.color
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 1
		}, item.label))), /* @__PURE__ */ __dil.jsx("grid-item", { key: `${item.id}-percent` }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			textAlign: "end",
			maxLines: 1
		}, item.percent_label)), !hidden ? /* @__PURE__ */ __dil.jsx("grid-item", { key: `${item.id}-amount` }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			textAlign: "end",
			maxLines: 1
		}, item.amount_label)) : null)));
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			background: "surface-elevated",
			padding: 0,
			radius: "4xl",
			border: true
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: {
				x: 6,
				top: 5,
				bottom: 3
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: .5,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("title", null, state.title), state.has_holdings ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.subtitle), /* @__PURE__ */ __dil.jsx(LedgerConversionNote, { state })) : null), /* @__PURE__ */ __dil.jsx("title", null, hidden ? state.labels.masked_value : state.total_value_label))), /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { x: 6 }
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })), state.has_holdings ? wide ? /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 8,
			wrap: "nowrap",
			padding: {
				x: 6,
				top: 3,
				bottom: 6
			},
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 244,
			minWidth: 244,
			align: "center",
			justify: "center"
		}, pie), rows) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: {
				x: 6,
				top: 3,
				bottom: 6
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			justify: "center"
		}, pie), /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { y: 3 }
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })), mobileRows) : /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 6,
			y: 4
		} }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.empty_state_label))));
	}



/* ---- merged ---- */

	function LedgerDistribution({ state }) {
		const wide = DIL.useBreakpoint("sm");
		const dark = DIL.useTheme().isDark;
		const hidden = state.sensitive_values_hidden ?? false;
		const pie = /* @__PURE__ */ __dil.jsx("pie-chart", {
			size: 244,
			data: state.categories.map((category) => ({
				id: category.id,
				label: category.label,
				amount_value: category.amount_value,
				formatted: hidden ? category.percent_label : `${category.amount_label} (${category.percent_label})`,
				fill: typeof category.color === "object" ? dark ? category.color?.dark : category.color?.light : category.color,
				stroke: dark ? "#303030" : "#ffffff"
			})),
			series: [{
				dataKey: "amount_value",
				label: state.labels.value
			}],
			xAxis: "label",
			showLegend: false,
			innerRadius: "49%",
			outerRadius: "100%",
			paddingAngle: 0,
			cornerRadius: 3,
			tooltipAnimationDuration: 0,
			showTooltip: true
		});
		const rows = /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, state.categories.map((item, index) => /* @__PURE__ */ __dil.jsx("row", {
			key: item.id,
			align: "center",
			gap: 4,
			width: "100%",
			height: 48,
			border: index ? { top: {
				size: 1,
				color: "subtle"
			} } : void 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1,
			height: 40,
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			maxLines: 1
		}, item.label), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("box", {
			height: 4,
			radius: "full",
			background: "alpha-10",
			width: "100%",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: 4,
			radius: "full",
			width: item.bar_width,
			background: item.color
		})), /* @__PURE__ */ __dil.jsx("box", { height: 3 }))), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			textAlign: "end"
		}, hidden ? item.percent_label : item.amount_label))));
		const mobileRows = /* @__PURE__ */ __dil.jsx("grid", {
			columns: hidden ? ["minmax(0, 1fr)", "max-content"] : [
				"minmax(0, 1fr)",
				"max-content",
				"max-content"
			],
			gap: "0.5rem 1rem"
		}, state.categories.map((item) => /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("grid-item", { key: `${item.id}-label` }, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 4,
			height: 20,
			radius: "full",
			background: item.color
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 1
		}, item.label))), /* @__PURE__ */ __dil.jsx("grid-item", { key: `${item.id}-percent` }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			textAlign: "end",
			maxLines: 1
		}, item.percent_label)), !hidden ? /* @__PURE__ */ __dil.jsx("grid-item", { key: `${item.id}-amount` }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			textAlign: "end",
			maxLines: 1
		}, item.amount_label)) : null)));
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			background: "surface-elevated",
			padding: 0,
			radius: "4xl",
			border: true
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: {
				x: 6,
				top: 5,
				bottom: 3
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: .5,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("title", null, state.title), state.has_holdings ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.subtitle), /* @__PURE__ */ __dil.jsx(LedgerConversionNote, { state })) : null), /* @__PURE__ */ __dil.jsx("title", null, hidden ? state.labels.masked_value : state.total_value_label))), /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { x: 6 }
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })), state.has_holdings ? wide ? /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 8,
			wrap: "nowrap",
			padding: {
				x: 6,
				top: 3,
				bottom: 6
			},
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 244,
			minWidth: 244,
			align: "center",
			justify: "center"
		}, pie), rows) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: {
				x: 6,
				top: 3,
				bottom: 6
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			justify: "center"
		}, pie), /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { y: 3 }
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })), mobileRows) : /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 6,
			y: 4
		} }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.empty_state_label))));
	}

