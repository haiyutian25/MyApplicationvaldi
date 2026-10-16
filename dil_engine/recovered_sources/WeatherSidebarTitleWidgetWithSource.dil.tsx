
	function ResolvedWeatherSidebarTitle({ state }) {
		const [selectedUnit, setSelectedUnit] = DIL.useState(null);
		const unit = selectedUnit ?? state.unit;
		return /* @__PURE__ */ __dil.jsx("box", {
			role: "region",
			ariaLabel: state.region_label,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 2
		}, state.title !== "" && /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "semibold"
		}, state.title), /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minWidth: 0,
			align: "center",
			gap: 1,
			rowGap: 0,
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "nowrap",
			flex: "none"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "normal",
			color: "prose"
		}, state.subtitle), state.weather_ready && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "normal",
			color: "prose"
		}, "
")), state.weather_ready && /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "nowrap",
			flex: "0 1 auto",
			minWidth: 0,
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: state.icon_src,
			alt: state.summary,
			width: 24,
			height: 24,
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", { ariaLabel: unit === "F" ? state.temperature_a11y_label_f : state.temperature_a11y_label_c }, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "normal",
			color: "prose"
		}, unit === "F" ? state.temperature_f : state.temperature_c)), /* @__PURE__ */ __dil.jsx("box", {
			minWidth: 0,
			flex: "1 1 auto"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "normal",
			maxLines: 1,
			truncate: true,
			color: "prose"
		}, state.summary)), /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: unit === "F" ? state.unit_toggle_f_selected_label : state.unit_toggle_c_selected_label,
			padding: {
				x: 1,
				y: .5
			},
			onClick: () => {
				const nextUnit = unit === "F" ? "C" : "F";
				setSelectedUnit(nextUnit);
				GenUI.dispatchAction({
					type: "log_event",
					handler: "client",
					payload: {
						event_name: "chatgpt_widget_action",
						event_data: {
							widget_affordance: "OPTION",
							widget_action_target: "unit",
							widget_action_value: nextUnit,
							surface_location: "SIDEBAR",
							content_reference_type: "forecast"
						}
					}
				});
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "end",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: unit === state.initial_unit ? "semibold" : "normal",
			color: unit === state.initial_unit ? "prose" : "tertiary"
		}, state.initial_unit), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, "/"), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: unit === state.initial_unit ? "normal" : "semibold",
			color: unit === state.initial_unit ? "tertiary" : "prose"
		}, state.initial_unit === "F" ? "C" : "F")))))));
	}
	function WeatherSidebarTitleWidgetWithSource(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("WeatherSidebarTitleWidgetWithSource", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 60
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedWeatherSidebarTitle, { state });
	}



/* ---- merged ---- */

	function ResolvedWeatherSidebarTitle({ state }) {
		const [selectedUnit, setSelectedUnit] = DIL.useState(null);
		const unit = selectedUnit ?? state.unit;
		return /* @__PURE__ */ __dil.jsx("box", {
			role: "region",
			ariaLabel: state.region_label,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 2
		}, state.title !== "" && /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "semibold"
		}, state.title), /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minWidth: 0,
			align: "center",
			gap: 1,
			rowGap: 0,
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "nowrap",
			flex: "none"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "normal",
			color: "prose"
		}, state.subtitle), state.weather_ready && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "normal",
			color: "prose"
		}, "
")), state.weather_ready && /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "nowrap",
			flex: "0 1 auto",
			minWidth: 0,
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: state.icon_src,
			alt: state.summary,
			width: 24,
			height: 24,
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", { ariaLabel: unit === "F" ? state.temperature_a11y_label_f : state.temperature_a11y_label_c }, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "normal",
			color: "prose"
		}, unit === "F" ? state.temperature_f : state.temperature_c)), /* @__PURE__ */ __dil.jsx("box", {
			minWidth: 0,
			flex: "1 1 auto"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "normal",
			maxLines: 1,
			truncate: true,
			color: "prose"
		}, state.summary)), /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: unit === "F" ? state.unit_toggle_f_selected_label : state.unit_toggle_c_selected_label,
			padding: {
				x: 1,
				y: .5
			},
			onClick: () => {
				const nextUnit = unit === "F" ? "C" : "F";
				setSelectedUnit(nextUnit);
				GenUI.dispatchAction({
					type: "log_event",
					handler: "client",
					payload: {
						event_name: "chatgpt_widget_action",
						event_data: {
							widget_affordance: "OPTION",
							widget_action_target: "unit",
							widget_action_value: nextUnit,
							surface_location: "SIDEBAR",
							content_reference_type: "forecast"
						}
					}
				});
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "end",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: unit === state.initial_unit ? "semibold" : "normal",
			color: unit === state.initial_unit ? "prose" : "tertiary"
		}, state.initial_unit), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, "/"), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: unit === state.initial_unit ? "normal" : "semibold",
			color: unit === state.initial_unit ? "tertiary" : "prose"
		}, state.initial_unit === "F" ? "C" : "F")))))));
	}
	function WeatherSidebarTitleWidgetWithSource(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("WeatherSidebarTitleWidgetWithSource", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 60
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedWeatherSidebarTitle, { state });
	}

