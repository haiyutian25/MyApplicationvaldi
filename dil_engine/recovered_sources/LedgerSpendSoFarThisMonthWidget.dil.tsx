
	function LedgerSpendSoFarThisMonthWidget(props) {
		const result = useResolvedComponentResult("LedgerSpendSoFarThisMonthWidget", props);
		if (!result.state) return result.resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 420
		});
		if (result.state.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: result.state.labels });
		return /* @__PURE__ */ __dil.jsx(Resolved, { state: result.state });
	}
	function Resolved({ state }) {
		const wide = DIL.useBreakpoint("sm");
		const dark = DIL.useTheme().isDark;
		const [monthIndex, setMonthIndex] = DIL.useState(state.selected_month_index);
		const [comparisonIndex, setComparisonIndex] = DIL.useState(state.selected_comparison_index);
		const [hover, setHover] = DIL.useState(null);
		const month = state.month_views[monthIndex];
		const comparison = comparisonIndex === 0 ? state.month_views[monthIndex + 1] ?? state.oldest_previous_month_series : comparisonIndex === 1 ? state.average_series : state.month_views[comparisonIndex - 2] ?? (comparisonIndex - 2 === state.month_views.length ? state.oldest_previous_month_series : state.average_series);
		const hidden = state.sensitive_values_hidden ?? false;
		const comparisonTotal = month.is_current_month ? comparison.points[month.days_elapsed].cumulative_spend : comparison.total_spend;
		const comparisonLabel = month.is_current_month ? comparison.points[month.days_elapsed].formatted_cumulative_spend : comparison.total_spend_label;
		const delta = hover?.delta ?? Math.round((month.total_spend - comparisonTotal) * 100) / 100;
		const deltaLabel = Math.abs(delta) > .005 ? `${delta > 0 ? state.labels.delta_currency_positive_prefix : state.labels.delta_currency_negative_prefix}${new Intl.NumberFormat(void 0, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		}).format(Math.abs(delta))}${delta > 0 ? state.labels.delta_currency_positive_suffix : state.labels.delta_currency_negative_suffix}` : "";
		const points = month.points.filter((point) => point.day <= month.day_count).map((point) => {
			const selectedAvailable = !month.is_current_month || point.day <= month.days_elapsed;
			const comparisonAvailable = !comparison.is_current_month || point.day <= comparison.days_elapsed;
			const comparisonPoint = comparison.points[point.day];
			return {
				day: point.day,
				hover_enabled: point.day > 0,
				current_month_spend: selectedAvailable ? point.cumulative_spend : null,
				previous_month_spend: comparisonAvailable ? comparisonPoint.cumulative_spend : null,
				previous_month_spend_elapsed: point.day <= month.days_elapsed && comparisonAvailable ? comparisonPoint.cumulative_spend : null,
				previous_month_spend_future: month.is_current_month && !comparison.is_current_month && point.day >= month.days_elapsed && comparisonAvailable ? comparisonPoint.cumulative_spend : null,
				formatted_current_month_spend: selectedAvailable ? point.formatted_cumulative_spend : month.total_spend_label,
				formatted_previous_month_spend: comparisonAvailable ? comparisonPoint.formatted_cumulative_spend : "",
				delta: point.day > 0 && selectedAvailable && comparisonAvailable ? point.cumulative_spend - comparisonPoint.cumulative_spend : 0
			};
		});
		const currentSummary = /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "between",
			gap: 3,
			width: "100%",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2.5,
			align: "center",
			flex: "0 1 auto",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 4,
			height: 40,
			background: "green-500",
			radius: "full"
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 1 auto",
			minWidth: 0,
			width: 172,
			align: "start"
		}, state.month_views.length > 1 ? /* @__PURE__ */ __dil.jsx("select", {
			name: "selected_month",
			options: state.month_option_groups.length ? state.month_option_groups : state.month_views.map((item) => ({
				label: item.option_label,
				value: item.option_value
			})),
			value: month.option_value,
			onChange: (value) => {
				const index = state.month_views.findIndex((item) => item.option_value === value);
				setMonthIndex(index);
				if (comparisonIndex === index + 2) setComparisonIndex(0);
				setHover(null);
			},
			variant: "ghost",
			size: "sm"
		}) : /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, month.summary_label))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			align: "end",
			flex: 1,
			minWidth: wide ? 0 : 68
		}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, hidden ? state.labels.masked_value : hover?.formatted_current_month_spend ?? month.total_spend_label), deltaLabel ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: delta > 0 ? "danger" : "success"
		}, hidden ? state.labels.masked_value : deltaLabel) : null));
		const comparisonSummary = /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "between",
			gap: 3,
			width: "100%",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2.5,
			align: "center",
			flex: "0 1 auto",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 4,
			height: 40,
			background: {
				light: "gray-300",
				dark: "gray-700"
			},
			radius: "full"
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 1 auto",
			minWidth: 0,
			width: 208,
			align: "start"
		}, state.comparison_options.length > 1 ? /* @__PURE__ */ __dil.jsx("select", {
			name: "selected_comparison",
			options: state.comparison_option_groups.map((group) => ({
				label: group.label,
				options: group.options.filter((option) => option.value !== String(monthIndex + 2))
			})),
			value: String(comparisonIndex),
			onChange: (value) => {
				setComparisonIndex(Number(value));
				setHover(null);
			},
			variant: "ghost",
			size: "sm"
		}) : /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, comparison.summary_label))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			align: "end",
			flex: 1,
			minWidth: wide ? 0 : 68
		}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, hidden ? state.labels.masked_value : hover?.formatted_previous_month_spend ?? comparisonLabel)));
		const series = [{
			type: "line",
			curveType: "monotoneX",
			dataKey: "previous_month_spend_elapsed",
			color: dark ? "gray-700" : "gray-300",
			label: comparison.comparison_series_label
		}];
		if (month.is_current_month && !comparison.is_current_month) series.push({
			type: "line",
			curveType: "monotoneX",
			dataKey: "previous_month_spend_future",
			color: dark ? "gray-600" : "gray-200",
			label: comparison.comparison_future_series_label
		});
		series.push({
			type: "area",
			curveType: "monotoneX",
			dataKey: "current_month_spend",
			color: "green-500",
			label: month.current_series_label
		});
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			background: "surface-elevated",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("col", {
			gap: .5,
			padding: {
				x: 6,
				top: 5,
				bottom: 3
			}
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			weight: "medium"
		}, state.month_views.length > 1 ? state.labels.spending : wide ? month.title_label : state.labels.spending)), /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: {
				x: 6,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })), wide ? /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 10,
			wrap: "nowrap",
			padding: {
				x: 6,
				top: 3
			},
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			flex: 1,
			minWidth: 0
		}, currentSummary), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			flex: 1,
			minWidth: 0
		}, comparisonSummary)) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: {
				x: 6,
				top: 3
			},
			width: "100%"
		}, currentSummary, comparisonSummary), month.has_spend_data || comparison.has_spend_data ? /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 6,
			top: wide ? 4 : 3,
			bottom: 6
		} }, /* @__PURE__ */ __dil.jsx("chart", {
			height: wide ? 235 : 199,
			data: points,
			series,
			xAxis: {
				dataKey: "day",
				hide: true,
				axisLine: false,
				labels: month.x_axis_labels,
				ticks: month.x_axis_ticks,
				tickMargin: 8,
				interval: 0,
				padding: "no-gap"
			},
			yAxis: {
				orientation: "right",
				axisLine: false,
				tickFormatter: {
					type: "currency",
					currency: "USD",
					notation: "compact"
				}
			},
			showYAxis: !hidden,
			showLegend: false,
			showTooltip: false,
			showHoverCursor: true,
			hoverIndicatorDataKey: "hover_enabled",
			showIdleHoverIndicator: true,
			showGrid: true,
			disableAnimation: true,
			showDots: false,
			showHoverDots: true,
			onHover: (snapshot) => {
				const point = snapshot.payload;
				setHover(point?.hover_enabled ? point : null);
			}
		})) : /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 6,
			top: 4
		} }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.no_spending_title))));
	}

