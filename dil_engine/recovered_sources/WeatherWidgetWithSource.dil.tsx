
	function logOption(target, value) {
		GenUI.dispatchAction({
			type: "log_event",
			handler: "client",
			payload: {
				event_name: "chatgpt_widget_action",
				event_data: {
					widget_affordance: "OPTION",
					widget_action_target: target,
					widget_action_value: value,
					surface_location: "RESPONSE",
					content_reference_type: "forecast"
				}
			}
		});
	}
	function ResolvedWeather({ state, componentKey }) {
		const liveActivity = useIsLiveActivity();
		const { isDark } = DIL.useTheme();
		const [unit, setUnit] = DIL.useState(state.unit ?? state.initial_unit ?? "F");
		const [focus, setFocus] = DIL.useState(state.focus);
		const [focusDate, setFocusDate] = DIL.useState(state.focus_date);
		const [useCurrent, setUseCurrent] = DIL.useState(state.use_current);
		const [followUps, setFollowUps] = DIL.useState(state.follow_up_actions);
		const forecast = state.forecast;
		const day = forecast.daily.find((item) => item.date_key === focusDate);
		const current = useCurrent ? forecast.current : null;
		const temperature = current?.temperature ?? day?.high;
		if (liveActivity) {
			const focusedDay = day ?? forecast.daily[0];
			const summary = current ?? focusedDay;
			const summaryTemperature = current?.temperature ?? focusedDay?.high;
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: 2,
				theme: "dark",
				background: "surface"
			}, summary && summaryTemperature ? /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 2,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("image", {
				src: summary.icon.dark ?? summary.icon.light,
				width: 32,
				height: 32,
				hideOnFailure: true
			}), /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, forecast.location_label), /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, summary.description)), /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				align: "end"
			}, /* @__PURE__ */ __dil.jsx("title", {
				size: "xl",
				weight: "medium"
			}, unit === "F" ? summaryTemperature.label_f : summaryTemperature.label_c), focusedDay && /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, unit === "F" ? `${focusedDay.high.label_f} / ${focusedDay.low.label_f}` : `${focusedDay.high.label_c} / ${focusedDay.low.label_c}`))) : /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, forecast.location_label));
		}
		const scrollToValue = focusDate === forecast.hourly_chart_today_key && forecast.hourly_chart_now_start != null ? forecast.hourly_chart_now_start : focusDate != null ? forecast.hourly_chart_day_start[focusDate] : void 0;
		const points = (forecast.hourly_chart ?? []).map((point) => ({
			timestamp: point.timestamp,
			temp_f: point.temp_f,
			temp_c: point.temp_c,
			precip: point.precip_chance,
			_unit: unit,
			formatted: focus === "precip" ? point.precip_chance == null ? "-" : `${point.precip_chance}%` : (unit === "F" ? point.temp_f : point.temp_c) == null ? "-" : `${Math.round(unit === "F" ? point.temp_f : point.temp_c)}
`
		}));
		return /* @__PURE__ */ __dil.jsx("box", {
			role: "region",
			ariaLabel: state.region_label,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			width: "100%",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "wrap",
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", { role: "heading" }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, forecast.location_label)), state.enable_use_my_location_toggle && /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, "
"), /* @__PURE__ */ __dil.jsx("pressable", {
			inline: true,
			align: "start",
			width: "fit-content",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "request_location_permission",
				payload: { issue_new_turn_query_on_success: state.issue_new_turn_query_on_success }
			})
		}, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "sm",
			weight: "normal",
			color: "secondary",
			underline: "dotted"
		}, state.use_my_location_label)))), state.share_button_variant === "top_right" && /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: state.share_label,
			tooltip: state.share_label,
			padding: 1.5,
			radius: "full",
			onClick: () => GenUI.dispatchAction({
				type: "share",
				handler: "client",
				payload: { component_key: componentKey }
			})
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "share",
			color: "secondary",
			size: "sm"
		}))), temperature && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("spacer", { minSize: 4 }), /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", { ariaLabel: unit === "F" ? temperature.a11y_label_f : temperature.a11y_label_c }, /* @__PURE__ */ __dil.jsx("title", {
			size: "3xl",
			weight: "medium"
		}, current ? `${unit === "F" ? temperature.label_f : temperature.label_c}
`)), /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: unit === "F" ? state.unit_toggle_f_selected_label : state.unit_toggle_c_selected_label,
			padding: {
				x: 2,
				y: .5
			},
			onClick: () => {
				const nextUnit = unit === "F" ? "C" : "F";
				setUnit(nextUnit);
				logOption("unit", nextUnit);
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold"
		}, unit), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, "/"), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: "tertiary"
		}, unit === "F" ? "C" : "F"))))), day && /* @__PURE__ */ __dil.jsx("text", { size: "md" }, day.description), state.show_date_picker && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("spacer", { minSize: 6 }), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			flush: true,
			scrollable: true,
			gap: 0
		}, forecast.daily.map((item) => /* @__PURE__ */ __dil.jsx("pressable", {
			key: item.timestamp,
			ariaLabel: unit === "F" ? item.a11y_label_f : item.a11y_label_c,
			padding: {
				x: 2,
				y: 2
			},
			radius: "lg",
			minWidth: 64,
			flex: 1,
			background: item.date_key === focusDate ? `${item.accent_color}22` : "transparent",
			onClick: () => {
				setFocusDate(item.date_key);
				setUseCurrent(item.date_key === forecast.hourly_chart_today_key && forecast.current != null);
				setFollowUps(state.follow_up_actions_by_date[item.date_key] ?? []);
				logOption("focus_date", item.date_key);
			}
		}, /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			truncate: true
		}, item.label), /* @__PURE__ */ __dil.jsx("image", {
			src: item.icon.light,
			alt: `${item.label}: ${item.description}`,
			width: 28,
			height: 28,
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("text", { weight: "semibold" }, unit === "F" ? item.high.label_f : item.high.label_c), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, unit === "F" ? item.low.label_f : item.low.label_c)))))), /* @__PURE__ */ __dil.jsx("spacer", { minSize: 4 }), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			flush: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			padding: { left: 3 },
			role: "group",
			ariaLabel: state.focus_mode_label
		}, /* @__PURE__ */ __dil.jsx("select", {
			name: "focus_mode",
			options: [{
				label: state.temperature_label,
				value: "temp"
			}, {
				label: state.precipitation_label,
				value: "precip"
			}],
			value: focus,
			onChange: (value) => {
				if (value === "temp" || value === "precip") {
					setFocus(value);
					logOption("focus_mode", value);
				}
			},
			size: "sm",
			variant: "ghost"
		}))), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			flush: true,
			padding: { bottom: 2 }
		}, /* @__PURE__ */ __dil.jsx("chart", {
			data: points,
			series: focus === "precip" ? [{
				type: "bar",
				dataKey: "precip",
				color: "blue"
			}] : [{
				type: "area",
				dataKey: "temp_f",
				color: isDark ? "#F5F5F5" : "#111111",
				fillColor: "#F1A03A",
				curveType: "linear"
			}],
			xAxis: {
				dataKey: "timestamp",
				labels: forecast.hourly_chart_labels,
				ticks: forecast.hourly_chart_ticks,
				axisLine: false,
				type: "number"
			},
			yAxis: { domain: focus === "precip" ? [0, 100] : forecast.hourly_chart_domain_all_f ?? void 0 },
			width: "100%",
			height: 120,
			showLegend: false,
			showTooltip: false,
			showGrid: false,
			showYAxis: false,
			showHoverDots: false,
			showDots: true,
			showValueLabels: true,
			barRadius: 0,
			valueLabelInterval: 3,
			valueLabelOffset: 2,
			scrollable: true,
			disableUserScroll: true,
			visiblePointCount: 24,
			barGap: 0,
			barCategoryGap: "0",
			scrollToValue
		})), state.share_button_variant === "bottom" && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("spacer", { minSize: 3 }), /* @__PURE__ */ __dil.jsx("button", {
			variant: "soft",
			block: true,
			onClick: () => GenUI.dispatchAction({
				type: "share",
				handler: "client",
				payload: { component_key: componentKey }
			})
		}, /* @__PURE__ */ __dil.jsx("icon", { name: "share" }), state.share_label)), /* @__PURE__ */ __dil.jsx(FollowUpActionBarPresentation, {
			actions: followUps,
			contentReferenceType: "forecast"
		})));
	}
	function WeatherWidgetWithSource(props) {
		const componentKey = DIL.useAppData((appData) => typeof props.__resolutionId === "string" && appData.opGenui?.componentResults?.[props.__resolutionId] != null ? props.__resolutionId : componentDataKey("WeatherWidgetWithSource", props));
		const canShare = DIL.useAppData((appData) => appData.opGenui?.supportedClientActions?.includes("share") === true);
		const { state, resolutionComplete } = useResolvedComponentResult("WeatherWidgetWithSource", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 400
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedWeather, {
			componentKey,
			state: canShare ? state : {
				...state,
				share_button_variant: "none"
			}
		});
	}



/* ---- merged ---- */

	function logOption(target, value) {
		GenUI.dispatchAction({
			type: "log_event",
			handler: "client",
			payload: {
				event_name: "chatgpt_widget_action",
				event_data: {
					widget_affordance: "OPTION",
					widget_action_target: target,
					widget_action_value: value,
					surface_location: "RESPONSE",
					content_reference_type: "forecast"
				}
			}
		});
	}
	function ResolvedWeather({ state, componentKey }) {
		const liveActivity = useIsLiveActivity();
		const { isDark } = DIL.useTheme();
		const [unit, setUnit] = DIL.useState(state.unit ?? state.initial_unit ?? "F");
		const [focus, setFocus] = DIL.useState(state.focus);
		const [focusDate, setFocusDate] = DIL.useState(state.focus_date);
		const [useCurrent, setUseCurrent] = DIL.useState(state.use_current);
		const [followUps, setFollowUps] = DIL.useState(state.follow_up_actions);
		const forecast = state.forecast;
		const day = forecast.daily.find((item) => item.date_key === focusDate);
		const current = useCurrent ? forecast.current : null;
		const temperature = current?.temperature ?? day?.high;
		if (liveActivity) {
			const focusedDay = day ?? forecast.daily[0];
			const summary = current ?? focusedDay;
			const summaryTemperature = current?.temperature ?? focusedDay?.high;
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: 2,
				theme: "dark",
				background: "surface"
			}, summary && summaryTemperature ? /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 2,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("image", {
				src: summary.icon.dark ?? summary.icon.light,
				width: 32,
				height: 32,
				hideOnFailure: true
			}), /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, forecast.location_label), /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, summary.description)), /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				align: "end"
			}, /* @__PURE__ */ __dil.jsx("title", {
				size: "xl",
				weight: "medium"
			}, unit === "F" ? summaryTemperature.label_f : summaryTemperature.label_c), focusedDay && /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, unit === "F" ? `${focusedDay.high.label_f} / ${focusedDay.low.label_f}` : `${focusedDay.high.label_c} / ${focusedDay.low.label_c}`))) : /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, forecast.location_label));
		}
		const scrollToValue = focusDate === forecast.hourly_chart_today_key && forecast.hourly_chart_now_start != null ? forecast.hourly_chart_now_start : focusDate != null ? forecast.hourly_chart_day_start[focusDate] : void 0;
		const points = (forecast.hourly_chart ?? []).map((point) => ({
			timestamp: point.timestamp,
			temp_f: point.temp_f,
			temp_c: point.temp_c,
			precip: point.precip_chance,
			_unit: unit,
			formatted: focus === "precip" ? point.precip_chance == null ? "-" : `${point.precip_chance}%` : (unit === "F" ? point.temp_f : point.temp_c) == null ? "-" : `${Math.round(unit === "F" ? point.temp_f : point.temp_c)}
`
		}));
		return /* @__PURE__ */ __dil.jsx("box", {
			role: "region",
			ariaLabel: state.region_label,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			width: "100%",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "wrap",
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", { role: "heading" }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, forecast.location_label)), state.enable_use_my_location_toggle && /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, "
"), /* @__PURE__ */ __dil.jsx("pressable", {
			inline: true,
			align: "start",
			width: "fit-content",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "request_location_permission",
				payload: { issue_new_turn_query_on_success: state.issue_new_turn_query_on_success }
			})
		}, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "sm",
			weight: "normal",
			color: "secondary",
			underline: "dotted"
		}, state.use_my_location_label)))), state.share_button_variant === "top_right" && /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: state.share_label,
			tooltip: state.share_label,
			padding: 1.5,
			radius: "full",
			onClick: () => GenUI.dispatchAction({
				type: "share",
				handler: "client",
				payload: { component_key: componentKey }
			})
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "share",
			color: "secondary",
			size: "sm"
		}))), temperature && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("spacer", { minSize: 4 }), /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", { ariaLabel: unit === "F" ? temperature.a11y_label_f : temperature.a11y_label_c }, /* @__PURE__ */ __dil.jsx("title", {
			size: "3xl",
			weight: "medium"
		}, current ? `${unit === "F" ? temperature.label_f : temperature.label_c}
`)), /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: unit === "F" ? state.unit_toggle_f_selected_label : state.unit_toggle_c_selected_label,
			padding: {
				x: 2,
				y: .5
			},
			onClick: () => {
				const nextUnit = unit === "F" ? "C" : "F";
				setUnit(nextUnit);
				logOption("unit", nextUnit);
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold"
		}, unit), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, "/"), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: "tertiary"
		}, unit === "F" ? "C" : "F"))))), day && /* @__PURE__ */ __dil.jsx("text", { size: "md" }, day.description), state.show_date_picker && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("spacer", { minSize: 6 }), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			flush: true,
			scrollable: true,
			gap: 0
		}, forecast.daily.map((item) => /* @__PURE__ */ __dil.jsx("pressable", {
			key: item.timestamp,
			ariaLabel: unit === "F" ? item.a11y_label_f : item.a11y_label_c,
			padding: {
				x: 2,
				y: 2
			},
			radius: "lg",
			minWidth: 64,
			flex: 1,
			background: item.date_key === focusDate ? `${item.accent_color}22` : "transparent",
			onClick: () => {
				setFocusDate(item.date_key);
				setUseCurrent(item.date_key === forecast.hourly_chart_today_key && forecast.current != null);
				setFollowUps(state.follow_up_actions_by_date[item.date_key] ?? []);
				logOption("focus_date", item.date_key);
			}
		}, /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			truncate: true
		}, item.label), /* @__PURE__ */ __dil.jsx("image", {
			src: item.icon.light,
			alt: `${item.label}: ${item.description}`,
			width: 28,
			height: 28,
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("text", { weight: "semibold" }, unit === "F" ? item.high.label_f : item.high.label_c), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, unit === "F" ? item.low.label_f : item.low.label_c)))))), /* @__PURE__ */ __dil.jsx("spacer", { minSize: 4 }), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			flush: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			padding: { left: 3 },
			role: "group",
			ariaLabel: state.focus_mode_label
		}, /* @__PURE__ */ __dil.jsx("select", {
			name: "focus_mode",
			options: [{
				label: state.temperature_label,
				value: "temp"
			}, {
				label: state.precipitation_label,
				value: "precip"
			}],
			value: focus,
			onChange: (value) => {
				if (value === "temp" || value === "precip") {
					setFocus(value);
					logOption("focus_mode", value);
				}
			},
			size: "sm",
			variant: "ghost"
		}))), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			flush: true,
			padding: { bottom: 2 }
		}, /* @__PURE__ */ __dil.jsx("chart", {
			data: points,
			series: focus === "precip" ? [{
				type: "bar",
				dataKey: "precip",
				color: "blue"
			}] : [{
				type: "area",
				dataKey: "temp_f",
				color: isDark ? "#F5F5F5" : "#111111",
				fillColor: "#F1A03A",
				curveType: "linear"
			}],
			xAxis: {
				dataKey: "timestamp",
				labels: forecast.hourly_chart_labels,
				ticks: forecast.hourly_chart_ticks,
				axisLine: false,
				type: "number"
			},
			yAxis: { domain: focus === "precip" ? [0, 100] : forecast.hourly_chart_domain_all_f ?? void 0 },
			width: "100%",
			height: 120,
			showLegend: false,
			showTooltip: false,
			showGrid: false,
			showYAxis: false,
			showHoverDots: false,
			showDots: true,
			showValueLabels: true,
			barRadius: 0,
			valueLabelInterval: 3,
			valueLabelOffset: 2,
			scrollable: true,
			disableUserScroll: true,
			visiblePointCount: 24,
			barGap: 0,
			barCategoryGap: "0",
			scrollToValue
		})), state.share_button_variant === "bottom" && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("spacer", { minSize: 3 }), /* @__PURE__ */ __dil.jsx("button", {
			variant: "soft",
			block: true,
			onClick: () => GenUI.dispatchAction({
				type: "share",
				handler: "client",
				payload: { component_key: componentKey }
			})
		}, /* @__PURE__ */ __dil.jsx("icon", { name: "share" }), state.share_label)), /* @__PURE__ */ __dil.jsx(FollowUpActionBarPresentation, {
			actions: followUps,
			contentReferenceType: "forecast"
		})));
	}
	function WeatherWidgetWithSource(props) {
		const componentKey = DIL.useAppData((appData) => typeof props.__resolutionId === "string" && appData.opGenui?.componentResults?.[props.__resolutionId] != null ? props.__resolutionId : componentDataKey("WeatherWidgetWithSource", props));
		const canShare = DIL.useAppData((appData) => appData.opGenui?.supportedClientActions?.includes("share") === true);
		const { state, resolutionComplete } = useResolvedComponentResult("WeatherWidgetWithSource", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 400
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedWeather, {
			componentKey,
			state: canShare ? state : {
				...state,
				share_button_variant: "none"
			}
		});
	}

