
	function LedgerSpendByCategoryWidget(props) {
		const result = useResolvedComponentResult("LedgerSpendByCategoryWidget", props);
		if (!result.state) return result.resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 380
		});
		if (result.state.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: result.state.labels });
		return /* @__PURE__ */ __dil.jsx(Resolved, { state: result.state });
	}
	function Resolved({ state }) {
		const wide = DIL.useBreakpoint("sm");
		const [selected, setSelected] = DIL.useState(state.selected_month_index);
		const [showMore, setShowMore] = DIL.useState(false);
		const month = state.month_views[selected];
		const hidden = state.sensitive_values_hidden ?? false;
		const categories = month ? showMore ? month.categories : month.top_categories : [];
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
		}, /* @__PURE__ */ __dil.jsx("title", null, wide ? state.title : state.labels.spending), state.month_views.length > 1 ? /* @__PURE__ */ __dil.jsx("select", {
			name: "selected_month",
			options: state.month_option_groups.length ? state.month_option_groups : state.month_views.map((item) => ({
				label: item.option_label,
				value: item.option_value
			})),
			value: month.option_value,
			onChange: (value) => {
				setSelected(state.month_views.findIndex((item) => item.option_value === value));
				setShowMore(false);
			},
			variant: "ghost",
			size: "sm"
		}) : month ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, month.month) : null, /* @__PURE__ */ __dil.jsx(LedgerConversionNote, { state })), /* @__PURE__ */ __dil.jsx("title", {
			textAlign: "end",
			maxLines: 1
		}, hidden ? state.labels.masked_value : month?.total ?? ""))), /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { x: 6 }
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })), month && month.top_categories.length === 0 ? /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 6,
			bottom: 5
		} }, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			padding: { y: 2 }
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 36,
			background: "alpha-10",
			radius: "full",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "receipt",
			size: "lg",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: .5
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.labels.no_spending_title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.no_spending_description)))) : month ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 6,
			padding: {
				x: 6,
				top: 6,
				bottom: 4
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: .5
		}, month.segments.map((item, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: item.id,
			ariaLabel: item.primary_category,
			radius: {
				topLeft: index === 0 ? "md" : "2xs",
				bottomLeft: index === 0 ? "md" : "2xs",
				topRight: index === month.segments.length - 1 ? "md" : "2xs",
				bottomRight: index === month.segments.length - 1 ? "md" : "2xs"
			},
			background: item.color,
			flex: item.weight,
			minWidth: 3,
			height: 40
		}))), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, categories.map((item, index) => {
			const row = /* @__PURE__ */ __dil.jsx("row", {
				gap: 4,
				align: "center",
				width: "100%",
				padding: { y: wide ? 2 : 1 }
			}, /* @__PURE__ */ __dil.jsx("box", {
				size: 32,
				background: "alpha-10",
				radius: "full",
				align: "center",
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("icon", {
				name: item.icon ?? "compass",
				size: [
					"basket",
					"wine-and-cloche",
					"gift"
				].includes(item.icon ?? "") ? "md" : "lg"
			})), /* @__PURE__ */ __dil.jsx("col", {
				flex: 1,
				minWidth: 0,
				gap: 1,
				height: 40,
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, item.primary_category), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("box", {
				height: 4,
				radius: "full",
				width: "100%",
				background: "alpha-10",
				clip: true
			}, /* @__PURE__ */ __dil.jsx("box", {
				width: `${item.filled_pct}%`,
				height: 4,
				radius: "full",
				background: item.color
			})), /* @__PURE__ */ __dil.jsx("box", { height: 3 }))), /* @__PURE__ */ __dil.jsx("text", {
				textAlign: "end",
				size: "sm",
				color: hidden ? "secondary" : "primary",
				maxLines: 1
			}, hidden ? item.pct_short_label : item.amount));
			return /* @__PURE__ */ __dil.jsx("col", {
				key: item.id,
				gap: 0
			}, index ? /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 }) : null, item.detail_sidebar_enabled ? /* @__PURE__ */ __dil.jsx("pressable", {
				variant: "ghost",
				variantFeedback: true,
				hoverBackground: "surface-tertiary",
				padding: 0,
				radius: "md",
				ariaLabel: item.detail_sidebar_aria_label,
				onClick: () => GenUI.dispatchAction({
					handler: "client",
					type: "open_entity_detail",
					payload: {
						category: "ledger_detail_sidebar",
						query: `${month.month} - ${item.primary_category}`,
						clientParams: { entitySidebarPresentation: {
							titlePlacement: "content",
							leadingBarBorder: "hidden"
						} },
						extraParams: {
							detail_type: "spend_by_category",
							displayTitle: item.primary_category,
							alwaysShowFollowUpButton: true,
							disableFooterActions: true,
							primary_category: item.primary_category,
							primary_category_key: item.primary_category_key,
							month_label: month.month,
							month_start: month.month_start,
							sensitive_values_hidden: hidden,
							monetary_value_references_enabled: state.monetary_value_references_enabled ?? false,
							total_label: state.monetary_value_references_enabled || !hidden ? item.amount : state.labels.masked_value,
							top_detail_label: item.top_detail_label,
							top_detail_amount: state.monetary_value_references_enabled || !hidden ? item.top_detail_amount : state.labels.masked_value,
							top_detail_share_label: item.top_detail_share_label
						}
					}
				})
			}, row) : row);
		}))), month.has_more_categories ? /* @__PURE__ */ __dil.jsx("button", {
			variant: "soft",
			block: true,
			onClick: () => setShowMore(!showMore)
		}, showMore ? state.labels.show_less : state.labels.show_more) : null) : null));
	}

