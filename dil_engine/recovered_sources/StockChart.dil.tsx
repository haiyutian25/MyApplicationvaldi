
	function ShareButton({ componentKey, label, block = false }) {
		return /* @__PURE__ */ __dil.jsx("button", {
			label,
			block,
			color: "secondary",
			onClick: () => GenUI.dispatchAction({
				type: "share",
				handler: "client",
				payload: { component_key: componentKey }
			}),
			size: "sm",
			uniform: !block,
			variant: block ? "soft" : "ghost"
		}, /* @__PURE__ */ __dil.jsx("icon", { name: "share" }), block ? label : null);
	}
	function ComparisonHeader({ cards, isDesktop }) {
		return /* @__PURE__ */ __dil.jsx("grid", {
			columns: isDesktop ? 2 : 1,
			gap: 4
		}, cards.map((card, index) => /* @__PURE__ */ __dil.jsx("grid-item", { key: `${card.ticker ?? card.company_name}:${index}` }, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "stretch"
		}, /* @__PURE__ */ __dil.jsx("box", {
			background: `${card.color}-400`,
			radius: "full",
			width: 4
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			truncate: true
		}, card.company_name)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "end",
			tabularNums: true
		}, card.price_text)), /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4,
			justify: "between"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, card.ticker && card.ticker !== card.company_name ? `(${card.ticker})` : ""), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "end",
			color: card.price_change_color,
			tabularNums: true
		}, card.price_change_text)))))));
	}
	function ResolvedStockChart({ state, componentKey }) {
		const isDesktop = DIL.useBreakpoint("md");
		const [selectedRange, setSelectedRange] = DIL.useState(state.default_range);
		const [hover, setHover] = DIL.useState(null);
		const range = state.timeframe_configs[selectedRange] ? selectedRange : state.default_range;
		const timeframe = state.timeframe_configs[range];
		const chart = timeframe?.chart;
		const summary = timeframe?.summary ?? state.fallback_summary;
		const hoveredPoint = hover?.range === range ? chart?.data[hover.index] : void 0;
		const comparisonCards = hoveredPoint?.comparison_rows ?? timeframe?.comparison_rows ?? [];
		const metrics = isDesktop ? state.metrics_display : state.metrics_display_mobile;
		return /* @__PURE__ */ __dil.jsx("card", {
			background: "surface",
			size: "full",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 5,
			top: 5
		} }, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1
		}, state.is_comparison_mode ? /* @__PURE__ */ __dil.jsx(ComparisonHeader, {
			cards: comparisonCards,
			isDesktop
		}) : /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.asset_display_name), /* @__PURE__ */ __dil.jsx("title", {
			size: "xl",
			weight: "medium",
			tabularNums: true
		}, hoveredPoint?.price_formatted ?? state.current_price_text), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: summary.price_change_color
		}, summary.price_change_text), summary.trade_date_text ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, summary.trade_date_text) : null, state.after_hours.price_text ? /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.after_hours.price_text), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: state.after_hours.color
		}, state.after_hours.change_text), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: state.after_hours.color
		}, state.after_hours.percent_text), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.after_hours.label)) : null)), state.share_button_variant === "top_right" ? /* @__PURE__ */ __dil.jsx(ShareButton, {
			componentKey,
			label: state.labels.share
		}) : null)), state.timeframe_order.length > 0 ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("segmented-control", {
			block: isDesktop,
			options: state.timeframe_order.map((label) => ({
				value: label,
				label
			})),
			value: range,
			variant: "ghost",
			size: "md",
			onChange: (nextRange) => {
				setSelectedRange(nextRange);
				setHover(null);
				GenUI.dispatchAction({
					type: "log_event",
					handler: "client",
					payload: {
						event_name: "chatgpt_widget_action",
						event_data: {
							widget_affordance: "OPTION",
							widget_action_target: "timeframe",
							widget_action_value: nextRange,
							surface_location: "RESPONSE",
							content_reference_type: "stock"
						}
					}
				});
			}
		})) : null, state.has_timeframe_data && chart ? /* @__PURE__ */ __dil.jsx("box", { padding: {
			left: 5,
			right: 2
		} }, /* @__PURE__ */ __dil.jsx("chart", {
			width: "100%",
			height: isDesktop ? 340 : 240,
			data: chart.data,
			series: chart.series,
			xAxis: chart.xAxis ?? "timestamp",
			yAxis: chart.yAxis ?? void 0,
			tooltipValueFormatter: chart.tooltipValueFormatter,
			disableAnimation: chart.disableAnimation,
			showLegend: false,
			showYAxis: true,
			onHover: (snapshot) => setHover(snapshot.index === null ? null : {
				range,
				index: snapshot.index
			})
		})) : /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			justify: "center",
			minHeight: 340,
			padding: 6
		}, /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, state.labels.no_chart_data)), state.show_metrics && (chart?.series.length ?? 0) <= 1 ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: {
				x: 5,
				top: 2,
				bottom: 5
			}
		}, metrics.map((row, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("grid", {
			columns: isDesktop ? 3 : 2,
			gap: 8
		}, row.cols.map((metric) => /* @__PURE__ */ __dil.jsx("grid-item", { key: metric.label }, /* @__PURE__ */ __dil.jsx("row", {
			gap: .5,
			justify: "between",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, metric.label), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			textAlign: "end"
		}, metric.value)))))))) : null, state.share_button_variant === "bottom" ? /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 5,
			bottom: 5
		} }, /* @__PURE__ */ __dil.jsx(ShareButton, {
			componentKey,
			label: state.labels.share,
			block: true
		})) : null, /* @__PURE__ */ __dil.jsx(FollowUpActionBarPresentation, {
			actions: state.follow_up_actions,
			contentReferenceType: "stock"
		})));
	}
	function StockChart(props) {
		const componentKey = DIL.useAppData((appData) => typeof props.__resolutionId === "string" && appData.opGenui?.componentResults?.[props.__resolutionId] != null ? props.__resolutionId : componentDataKey("StockChart", props));
		const canShare = DIL.useAppData((appData) => appData.opGenui?.supportedClientActions?.includes("share") === true);
		const { state, resolutionComplete } = useResolvedComponentResult("StockChart", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 480
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStockChart, {
			componentKey,
			state: canShare ? state : {
				...state,
				share_button_variant: "none"
			}
		});
	}



/* ---- merged ---- */

	function ShareButton({ componentKey, label, block = false }) {
		return /* @__PURE__ */ __dil.jsx("button", {
			label,
			block,
			color: "secondary",
			onClick: () => GenUI.dispatchAction({
				type: "share",
				handler: "client",
				payload: { component_key: componentKey }
			}),
			size: "sm",
			uniform: !block,
			variant: block ? "soft" : "ghost"
		}, /* @__PURE__ */ __dil.jsx("icon", { name: "share" }), block ? label : null);
	}
	function ComparisonHeader({ cards, isDesktop }) {
		return /* @__PURE__ */ __dil.jsx("grid", {
			columns: isDesktop ? 2 : 1,
			gap: 4
		}, cards.map((card, index) => /* @__PURE__ */ __dil.jsx("grid-item", { key: `${card.ticker ?? card.company_name}:${index}` }, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "stretch"
		}, /* @__PURE__ */ __dil.jsx("box", {
			background: `${card.color}-400`,
			radius: "full",
			width: 4
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			truncate: true
		}, card.company_name)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "end",
			tabularNums: true
		}, card.price_text)), /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4,
			justify: "between"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, card.ticker && card.ticker !== card.company_name ? `(${card.ticker})` : ""), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "end",
			color: card.price_change_color,
			tabularNums: true
		}, card.price_change_text)))))));
	}
	function ResolvedStockChart({ state, componentKey }) {
		const isDesktop = DIL.useBreakpoint("md");
		const [selectedRange, setSelectedRange] = DIL.useState(state.default_range);
		const [hover, setHover] = DIL.useState(null);
		const range = state.timeframe_configs[selectedRange] ? selectedRange : state.default_range;
		const timeframe = state.timeframe_configs[range];
		const chart = timeframe?.chart;
		const summary = timeframe?.summary ?? state.fallback_summary;
		const hoveredPoint = hover?.range === range ? chart?.data[hover.index] : void 0;
		const comparisonCards = hoveredPoint?.comparison_rows ?? timeframe?.comparison_rows ?? [];
		const metrics = isDesktop ? state.metrics_display : state.metrics_display_mobile;
		return /* @__PURE__ */ __dil.jsx("card", {
			background: "surface",
			size: "full",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 5,
			top: 5
		} }, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1
		}, state.is_comparison_mode ? /* @__PURE__ */ __dil.jsx(ComparisonHeader, {
			cards: comparisonCards,
			isDesktop
		}) : /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.asset_display_name), /* @__PURE__ */ __dil.jsx("title", {
			size: "xl",
			weight: "medium",
			tabularNums: true
		}, hoveredPoint?.price_formatted ?? state.current_price_text), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: summary.price_change_color
		}, summary.price_change_text), summary.trade_date_text ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, summary.trade_date_text) : null, state.after_hours.price_text ? /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.after_hours.price_text), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: state.after_hours.color
		}, state.after_hours.change_text), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: state.after_hours.color
		}, state.after_hours.percent_text), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.after_hours.label)) : null)), state.share_button_variant === "top_right" ? /* @__PURE__ */ __dil.jsx(ShareButton, {
			componentKey,
			label: state.labels.share
		}) : null)), state.timeframe_order.length > 0 ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("segmented-control", {
			block: isDesktop,
			options: state.timeframe_order.map((label) => ({
				value: label,
				label
			})),
			value: range,
			variant: "ghost",
			size: "md",
			onChange: (nextRange) => {
				setSelectedRange(nextRange);
				setHover(null);
				GenUI.dispatchAction({
					type: "log_event",
					handler: "client",
					payload: {
						event_name: "chatgpt_widget_action",
						event_data: {
							widget_affordance: "OPTION",
							widget_action_target: "timeframe",
							widget_action_value: nextRange,
							surface_location: "RESPONSE",
							content_reference_type: "stock"
						}
					}
				});
			}
		})) : null, state.has_timeframe_data && chart ? /* @__PURE__ */ __dil.jsx("box", { padding: {
			left: 5,
			right: 2
		} }, /* @__PURE__ */ __dil.jsx("chart", {
			width: "100%",
			height: isDesktop ? 340 : 240,
			data: chart.data,
			series: chart.series,
			xAxis: chart.xAxis ?? "timestamp",
			yAxis: chart.yAxis ?? void 0,
			tooltipValueFormatter: chart.tooltipValueFormatter,
			disableAnimation: chart.disableAnimation,
			showLegend: false,
			showYAxis: true,
			onHover: (snapshot) => setHover(snapshot.index === null ? null : {
				range,
				index: snapshot.index
			})
		})) : /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			justify: "center",
			minHeight: 340,
			padding: 6
		}, /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, state.labels.no_chart_data)), state.show_metrics && (chart?.series.length ?? 0) <= 1 ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: {
				x: 5,
				top: 2,
				bottom: 5
			}
		}, metrics.map((row, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("grid", {
			columns: isDesktop ? 3 : 2,
			gap: 8
		}, row.cols.map((metric) => /* @__PURE__ */ __dil.jsx("grid-item", { key: metric.label }, /* @__PURE__ */ __dil.jsx("row", {
			gap: .5,
			justify: "between",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, metric.label), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			textAlign: "end"
		}, metric.value)))))))) : null, state.share_button_variant === "bottom" ? /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 5,
			bottom: 5
		} }, /* @__PURE__ */ __dil.jsx(ShareButton, {
			componentKey,
			label: state.labels.share,
			block: true
		})) : null, /* @__PURE__ */ __dil.jsx(FollowUpActionBarPresentation, {
			actions: state.follow_up_actions,
			contentReferenceType: "stock"
		})));
	}
	function StockChart(props) {
		const componentKey = DIL.useAppData((appData) => typeof props.__resolutionId === "string" && appData.opGenui?.componentResults?.[props.__resolutionId] != null ? props.__resolutionId : componentDataKey("StockChart", props));
		const canShare = DIL.useAppData((appData) => appData.opGenui?.supportedClientActions?.includes("share") === true);
		const { state, resolutionComplete } = useResolvedComponentResult("StockChart", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 480
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStockChart, {
			componentKey,
			state: canShare ? state : {
				...state,
				share_button_variant: "none"
			}
		});
	}

