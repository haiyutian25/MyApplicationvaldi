
	function ResolvedAccounts({ state }) {
		const desktop = DIL.useBreakpoint("sm");
		const { isDark } = DIL.useTheme();
		const [activeView, setActiveView] = DIL.useState(state.active_view);
		const view = state.views[activeView];
		const hidden = state.sensitive_values_hidden;
		const chart = /* @__PURE__ */ __dil.jsx("pie-chart", {
			size: 244,
			data: state.chart_categories[activeView].map((category) => ({
				id: category.id,
				label: category.label,
				amount_value: category.amount_value,
				formatted: hidden ? category.percent_label : category.amount_label + " (" + category.percent_label + ")",
				fill: category.color,
				stroke: isDark ? "#303030" : "#ffffff"
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
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: "100%",
			background: "surface-elevated",
			padding: 0,
			radius: "4xl",
			border: 1,
			clip: true
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: {
				x: 6,
				top: 5,
				bottom: 3
			}
		}, /* @__PURE__ */ __dil.jsx("row", { align: "start" }, /* @__PURE__ */ __dil.jsx("col", { flex: "auto" }, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.title)), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			width: "max-content"
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			textAlign: "end",
			maxLines: 1
		}, hidden ? state.labels.masked_value : view.total_value_label))), /* @__PURE__ */ __dil.jsx("segmented-control", {
			variant: "soft",
			size: "md",
			options: state.view_options,
			value: activeView,
			label: state.view_selector_label,
			onChange: setActiveView,
			block: !desktop,
			pill: true
		}), view.currency_conversion.currency_conversion_note && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			weight: "normal",
			color: "secondary"
		}, view.currency_conversion.currency_conversion_note)), view.has_holdings ? desktop ? /* @__PURE__ */ __dil.jsx("row", {
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
		}, chart), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("transition", null, /* @__PURE__ */ __dil.jsx("col", {
			key: activeView,
			minWidth: 0,
			gap: 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, view.categories.map((item, index) => /* @__PURE__ */ __dil.jsx("row", {
			key: item.id,
			align: "center",
			gap: 4,
			width: "100%",
			height: 48,
			border: index === 0 ? void 0 : { top: {
				size: 1,
				color: "subtle"
			} }
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1,
			height: 40,
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			maxLines: 1
		}, item.label), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: 4,
			radius: "full",
			background: "alpha-10",
			width: "100%",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: item.bar_width,
			height: 4,
			radius: "full",
			background: item.color
		})), /* @__PURE__ */ __dil.jsx("box", { height: 3 }))), /* @__PURE__ */ __dil.jsx("box", { align: "end" }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			textAlign: "end"
		}, hidden ? item.percent_label : item.amount_label))))))))) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: {
				x: 6,
				top: 3,
				bottom: 6
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			justify: "center"
		}, chart), /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: {
				top: 3,
				bottom: 3
			}
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })), /* @__PURE__ */ __dil.jsx("transition", null, /* @__PURE__ */ __dil.jsx("col", {
			key: activeView,
			gap: 2
		}, hidden ? view.categories.map((item) => /* @__PURE__ */ __dil.jsx("row", {
			key: item.id,
			align: "center",
			justify: "between",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
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
		}, item.label)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			maxLines: 1
		}, item.percent_label))) : /* @__PURE__ */ __dil.jsx("grid", {
			columns: [
				"minmax(0, 1fr)",
				"max-content",
				"max-content"
			],
			gap: "0.5rem 1rem"
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, view.categories.map((item) => /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("grid-item", { key: item.id + "-label" }, /* @__PURE__ */ __dil.jsx("row", {
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
		}, item.label))), /* @__PURE__ */ __dil.jsx("grid-item", { key: item.id + "-percent" }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			textAlign: "end",
			maxLines: 1
		}, item.percent_label)), /* @__PURE__ */ __dil.jsx("grid-item", { key: item.id + "-amount" }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			textAlign: "end",
			maxLines: 1
		}, item.amount_label))))))))) : /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 6,
			y: 4
		} }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, view.empty_state_label))));
	}
	function LedgerAccountsWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerAccountsWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 400
		});
		if (state.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: state.labels });
		return /* @__PURE__ */ __dil.jsx(ResolvedAccounts, { state });
	}

