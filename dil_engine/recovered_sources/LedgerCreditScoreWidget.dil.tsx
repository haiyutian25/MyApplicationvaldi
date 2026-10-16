
	const SvgDefs = "defs";
	const SvgGradient = "linearGradient";
	const SvgStop = "stop";
	const SvgRect = "rect";
	const SvgPath = "path";
	const SvgGroup = "g";
	const SvgMask = "mask";
	const SvgViewport = "svg";
	function LedgerCreditScoreWidget(props) {
		const result = useResolvedComponentResult("LedgerCreditScoreWidget", props);
		if (!result.state) return result.resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 310
		});
		return /* @__PURE__ */ __dil.jsx(Resolved, { state: result.state });
	}
	function Resolved({ state }) {
		const wide = DIL.useBreakpoint("sm");
		const compact = !DIL.useBreakpoint("xs");
		const gradientId = DIL.useId();
		const barMaskId = DIL.useId();
		const [view, setView] = DIL.useState(state.active_view);
		const [period, setPeriod] = DIL.useState(state.selected_period);
		const hidden = state.sensitive_values_hidden ?? false;
		const selectedPeriod = state.history_period_options.some((option) => option.value === period) ? period : state.selected_period;
		const history = state.history_views[selectedPeriod];
		const scorePercent = Math.max(0, Math.min(100, Number(state.score_position.replace("%", ""))));
		const pointerTransform = `translate(${-22 * scorePercent / 100} 0)`;
		const metricRows = Math.ceil(state.metrics.length / (wide ? 3 : 2));
		const historyHeight = 193;
		const bodyHeight = Math.max(40 + historyHeight, 79 + metricRows * 40 + Math.max(0, metricRows - 1) * 16);
		const disclosureLinkUrl = state.disclosure.link_url;
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			background: "surface-elevated",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			padding: {
				x: wide ? 6 : 4,
				top: 5,
				bottom: 5.75
			},
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3,
			justify: "between",
			minWidth: 0,
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			truncate: true
		}, state.labels.title), state.status === "ready" ? /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			tabularNums: true
		}, hidden ? state.labels.masked_score : state.score_label), /* @__PURE__ */ __dil.jsx("popover", {
			showOnHover: true,
			hoverOpenDelay: 80
		}, /* @__PURE__ */ __dil.jsx("popover-trigger", null, /* @__PURE__ */ __dil.jsx("box", {
			size: 24,
			align: "center",
			justify: "center",
			ariaLabel: state.labels.score_details
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "info-circle",
			size: "sm",
			color: "secondary"
		}))), /* @__PURE__ */ __dil.jsx("popover-content", {
			side: "bottom",
			align: "end",
			sideOffset: 6
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 420,
			maxWidth: "100%",
			background: "surface-elevated",
			border: {
				size: 1,
				color: "subtle"
			},
			radius: "lg"
		}, /* @__PURE__ */ __dil.jsx("col", {
			padding: {
				x: 3,
				y: 2
			},
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "primary"
		}, state.disclosure.body ?? state.disclosure.text, state.disclosure.link_text && disclosureLinkUrl ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, " ", /* @__PURE__ */ __dil.jsx("pressable", {
			inline: true,
			role: "link",
			padding: 0,
			onClick: () => GenUI.openUrl(disclosureLinkUrl)
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "primary",
			underline: true
		}, state.disclosure.link_text))) : null)))))) : null), state.status === "ready" && !hidden && state.view_options.length > 1 ? /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.view_options,
			value: view,
			label: state.labels.view_selector,
			onChange: setView,
			block: !wide,
			variant: "soft",
			size: "md",
			pill: true
		}) : null), state.status === "loading" ? /* @__PURE__ */ __dil.jsx("box", { role: "status" }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.loading)) : null, state.status === "empty" ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.no_score) : null, state.status === "ready" && (view === "overview" || hidden) ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			padding: { top: 1.75 },
			minWidth: 0,
			minHeight: bodyHeight
		}, hidden ? /* @__PURE__ */ __dil.jsx("box", {
			height: 32,
			width: "100%",
			radius: "full",
			background: {
				light: "linear-gradient(90deg, #f0f0f0 0%, #d1d5db 100%)",
				dark: "linear-gradient(90deg, #303030 0%, #6b7280 100%)"
			},
			ariaHidden: true
		}) : /* @__PURE__ */ __dil.jsx("box", {
			role: "img",
			ariaLabel: `${state.labels.score_meter}: ${state.score_label}`,
			direction: "row",
			height: 44
		}, /* @__PURE__ */ __dil.jsx(SvgViewport, {
			width: "100%",
			height: 52,
			color: "primary"
		}, /* @__PURE__ */ __dil.jsx(SvgDefs, null, /* @__PURE__ */ __dil.jsx(SvgGradient, {
			id: gradientId,
			x1: "0%",
			y1: "0%",
			x2: "100%",
			y2: "0%",
			gradientUnits: "userSpaceOnUse"
		}, /* @__PURE__ */ __dil.jsx(SvgStop, {
			offset: "0%",
			stopColor: "#ffa4a2"
		}), /* @__PURE__ */ __dil.jsx(SvgStop, {
			offset: "25%",
			stopColor: "#ffb790"
		}), /* @__PURE__ */ __dil.jsx(SvgStop, {
			offset: "50%",
			stopColor: "#ffdb66"
		}), /* @__PURE__ */ __dil.jsx(SvgStop, {
			offset: "75%",
			stopColor: "#66d492"
		}), /* @__PURE__ */ __dil.jsx(SvgStop, {
			offset: "100%",
			stopColor: "#00a240"
		})), /* @__PURE__ */ __dil.jsx(SvgMask, {
			id: barMaskId,
			maskUnits: "userSpaceOnUse",
			maskContentUnits: "userSpaceOnUse",
			x: 0,
			y: 0,
			width: "100%",
			height: 52
		}, /* @__PURE__ */ __dil.jsx(SvgRect, {
			x: 0,
			y: 0,
			width: "100%",
			height: 52,
			rx: 0,
			fill: "white"
		}), /* @__PURE__ */ __dil.jsx(SvgGroup, { transform: pointerTransform }, /* @__PURE__ */ __dil.jsx(SvgViewport, {
			x: `${scorePercent}%`,
			width: "100%",
			height: 52
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M15 40.5V15.5C15 13.567 16.567 12 18.5 12H19.75C20.9926 12 22 10.9926 22 9.75C22 8.50736 20.9926 7.5 19.75 7.5H2.25C1.00736 7.5 0 8.50736 0 9.75C0 10.9926 1.00736 12 2.25 12H4C6.20914 12 8 13.7909 8 16V41.25C8 42.7688 6.76878 44 5.25 44H5C3.61929 44 2.5 45.1193 2.5 46.5C2.5 47.8807 3.61929 49 5 49H19.5C20.8807 49 22 47.8807 22 46.5C22 45.1193 20.8807 44 19.5 44H18.5C16.567 44 15 42.433 15 40.5Z",
			fill: "black"
		}))))), /* @__PURE__ */ __dil.jsx(SvgRect, {
			x: 0,
			y: 12,
			width: "100%",
			height: 32,
			rx: 16,
			fill: `url(#${gradientId})`,
			mask: `url(#${barMaskId})`
		}), /* @__PURE__ */ __dil.jsx(SvgGroup, { transform: pointerTransform }, /* @__PURE__ */ __dil.jsx(SvgViewport, {
			x: `${scorePercent}%`,
			width: "100%",
			height: 52
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M11 11.5C11 11.2239 11.2239 11 11.5 11C11.7761 11 12 11.2239 12 11.5V44.5C12 44.7761 11.7761 45 11.5 45C11.2239 45 11 44.7761 11 44.5V11.5Z",
			fill: "currentColor"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M11.9497 8.83883L14.4853 6.3033C15.1152 5.67334 14.6691 4.59619 13.7782 4.59619H9.41421C8.52331 4.59619 8.07714 5.67334 8.70711 6.3033L11.2426 8.83883C11.4379 9.0341 11.7545 9.0341 11.9497 8.83883Z",
			fill: "currentColor"
		}))))), /* @__PURE__ */ __dil.jsx("box", { padding: { top: 3 } }, /* @__PURE__ */ __dil.jsx("grid", {
			columns: wide ? 3 : 2,
			gap: 4
		}, state.metrics.map((item) => {
			const body = /* @__PURE__ */ __dil.jsx("row", {
				width: "100%",
				gap: 2,
				align: "center"
			}, /* @__PURE__ */ __dil.jsx("box", {
				width: 4,
				height: 33,
				radius: "full",
				background: hidden ? "gray-300" : item.marker_color
			}), /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary",
				truncate: true
			}, item.label), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				color: "primary",
				tabularNums: true,
				truncate: true
			}, hidden ? state.labels.masked_value : item.value_label)));
			return /* @__PURE__ */ __dil.jsx("grid-item", { key: item.key }, /* @__PURE__ */ __dil.jsx("box", { minWidth: 0 }, item.detail_sidebar_enabled ? /* @__PURE__ */ __dil.jsx(CreditFactor, {
				item,
				hidden
			}, body) : body));
		})))) : null, state.status === "ready" && view === "trend" && !hidden ? state.has_history && history ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			minWidth: 0,
			minHeight: bodyHeight
		}, /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.history_period_options,
			value: selectedPeriod,
			label: state.labels.history_range_selector,
			onChange: setPeriod,
			variant: "ghost",
			size: compact ? "xs" : "sm",
			pill: !compact
		}), /* @__PURE__ */ __dil.jsx("box", {
			role: "img",
			ariaLabel: `${state.labels.history_chart}: ${history.points.map((point) => point.accessibility_label).join("; ")}`,
			width: "100%",
			height: historyHeight
		}, /* @__PURE__ */ __dil.jsx("chart", {
			width: "100%",
			height: historyHeight,
			data: history.points,
			series: history.series,
			xAxis: history.x_axis,
			yAxis: history.y_axis ?? { domain: [0, 100] },
			tooltipValueFormatter: { type: "xAxisOnly" },
			showTooltip: true,
			showDots: true,
			showHoverDots: true,
			showGrid: history.y_axis != null,
			showLegend: false,
			showYAxis: history.y_axis != null,
			showTooltipCursor: false,
			disableAnimation: true,
			tooltipPlacement: "abovePoint",
			tooltipOffset: 20
		}))) : /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			align: "center",
			justify: "center",
			gap: 2,
			minHeight: bodyHeight
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "credit-score",
			size: "2xl",
			color: "secondary"
		}), /* @__PURE__ */ __dil.jsx("box", {
			maxWidth: 502,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			textAlign: "center"
		}, state.labels.no_history))) : null, state.status === "ready" && state.report_date_label ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, state.report_date_label) : null));
	}
	function CreditFactor({ item, hidden, children }) {
		const viewed = DIL.useRef(false);
		const factorKey = [
			"payment_history",
			"credit_history",
			"credit_utilization",
			"total_balances",
			"available_credit",
			"credit_checks"
		].includes(item.key) ? item.key : null;
		const logFactorEngagement = (action) => {
			if (!factorKey) return;
			GenUI.dispatchAction({
				handler: "client",
				type: "log_event",
				payload: {
					event_name: "chatgpt_finance_credit_engagement",
					event_data: {
						action,
						source: "credit_score_widget",
						destination: factorKey
					}
				}
			});
		};
		const recordView = () => {
			if (viewed.current) return;
			viewed.current = true;
			logFactorEngagement("viewed");
		};
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			onVisible: factorKey ? recordView : void 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			variant: "ghost",
			variantFeedback: true,
			hoverBackground: "surface-tertiary",
			width: "100%",
			padding: 0,
			radius: "md",
			ariaLabel: item.label,
			onClick: () => {
				recordView();
				logFactorEngagement("clicked");
				GenUI.dispatchAction({
					handler: "client",
					type: "open_entity_detail",
					payload: {
						category: "ledger_detail_sidebar",
						query: item.label,
						clientParams: { entitySidebarPresentation: {
							titlePlacement: "content",
							leadingBarBorder: "hidden",
							contentOwnedHorizontalInset: 20
						} },
						extraParams: {
							detail_type: "credit_health",
							factor_key: item.key,
							displayTitle: item.label,
							disableFollowUpButton: true,
							disableFooterActions: true,
							sensitive_values_hidden: hidden
						}
					}
				});
			}
		}, children));
	}

