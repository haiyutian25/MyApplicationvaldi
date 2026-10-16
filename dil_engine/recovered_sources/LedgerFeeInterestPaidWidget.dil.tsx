
	function LedgerFeeInterestPaidWidget(props) {
		const result = useResolvedComponentResult("LedgerFeeInterestPaidWidget", props);
		if (!result.state) return result.resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 250
		});
		if (result.state.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: result.state.labels });
		return /* @__PURE__ */ __dil.jsx(Resolved, { state: result.state });
	}
	function Resolved({ state }) {
		const wide = DIL.useBreakpoint("sm");
		const [selected, setSelected] = DIL.useState(state.selected_time_range_index);
		const [rows, setRows] = DIL.useState(state.rows_to_show ?? 5);
		const view = state.time_range_views[selected];
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			background: "surface-elevated",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			padding: {
				x: 6,
				top: 5,
				bottom: 0
			}
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.title), /* @__PURE__ */ __dil.jsx("row", { align: "center" }, /* @__PURE__ */ __dil.jsx("select", {
			name: "selected_time_range",
			options: state.time_range_views.map((item) => ({
				label: item.option_label,
				value: item.option_value
			})),
			value: view.option_value,
			onChange: (value) => {
				setSelected(state.time_range_views.findIndex((item) => item.option_value === value));
				setRows(5);
			},
			variant: "ghost",
			size: "sm"
		}))), /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			textAlign: "end",
			maxLines: 1
		}, state.sensitive_values_hidden ? state.labels.masked_value : view.total_paid_label)), view.total_paid === null ? /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 6,
			bottom: 2
		} }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, view.total_status_label)) : view.currency_conversion?.currency_conversion_note ? /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 6,
			bottom: 2
		} }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, view.currency_conversion.currency_conversion_note)) : null, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: {
				x: 6,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: {
				x: 6,
				bottom: view.transactions.length ? 5 : 0
			}
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, view.transactions.length === 0 && view.total_paid !== null ? /* @__PURE__ */ __dil.jsx(LedgerEmpty, {
			label: view.empty_state_label,
			icon: "check-circle"
		}) : view.transactions.slice(0, rows).map((item, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: item.id,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 4,
			align: "center",
			width: "100%",
			padding: { y: wide ? 2 : 2.5 }
		}, /* @__PURE__ */ __dil.jsx(LedgerAvatar, {
			item: {
				logo_url: item.logo_url,
				icon: item.category_icon ?? "bank"
			},
			size: wide ? 32 : 40
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: wide ? "sm" : "md",
			maxLines: 1
		}, item.display_name), /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			minWidth: 0,
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 1
		}, item.date_label), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, "-"), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			truncate: true,
			maxLines: 1
		}, `${item.category_label} - ${item.account_detail}`)))), /* @__PURE__ */ __dil.jsx("text", {
			textAlign: "end",
			size: wide ? "sm" : "md",
			color: state.sensitive_values_hidden ? "primary" : item.amount_color,
			maxLines: 1
		}, state.sensitive_values_hidden ? item.masked_amount_label : item.amount_label)), index < Math.min(rows, view.transactions.length) - 1 ? /* @__PURE__ */ __dil.jsx("divider", null) : null))), view.transactions.length > 5 ? /* @__PURE__ */ __dil.jsx("box", { padding: { top: 5 } }, /* @__PURE__ */ __dil.jsx("button", {
			variant: "soft",
			block: true,
			onClick: () => setRows(rows === 5 ? view.transactions.length : 5)
		}, rows === 5 ? state.labels.see_more : state.labels.show_less)) : null)));
	}

