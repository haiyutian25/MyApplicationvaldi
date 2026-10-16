
	function LedgerRecurringTransactionsWidget(props) {
		const result = useResolvedComponentResult("LedgerRecurringTransactionsWidget", props);
		if (!result.state) return result.resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 300
		});
		if (result.state.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: result.state.labels });
		return /* @__PURE__ */ __dil.jsx(Resolved, { state: result.state });
	}
	function Resolved({ state }) {
		const wide = DIL.useBreakpoint("sm");
		const [view, setView] = DIL.useState(state.active_view ?? "monthly");
		const [rows, setRows] = DIL.useState(state.rows_to_show ?? 5);
		const items = view === (state.active_view ?? "monthly") ? state.default_recurring_transactions : view === "annual" ? state.annual_recurring_transactions : state.monthly_recurring_transactions;
		const total = view === (state.active_view ?? "monthly") ? state.default_total_label : view === "annual" ? state.annual_total_label : state.monthly_total_label;
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			background: "surface-elevated",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: {
				x: 6,
				top: 5,
				bottom: 3
			}
		}, /* @__PURE__ */ __dil.jsx("row", { align: "start" }, /* @__PURE__ */ __dil.jsx("col", { flex: 1 }, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.label)), /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			textAlign: "end",
			maxLines: 1
		}, state.sensitive_values_hidden ? state.labels.masked_value : total)), state.show_billing_period_tabs ? /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: [{
				value: "monthly",
				label: state.labels.monthly
			}, {
				value: "annual",
				label: state.labels.annual
			}],
			value: view,
			onChange: (value) => {
				setView(value);
				setRows(5);
			},
			block: !wide,
			variant: "soft",
			size: "md",
			pill: true
		}) : /* @__PURE__ */ __dil.jsx("box", {
			height: 24,
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: "secondary"
		}, view === "annual" ? state.labels.annual : state.labels.monthly)), /* @__PURE__ */ __dil.jsx(LedgerConversionNote, { state })), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: {
				x: 6,
				bottom: 5
			}
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, items.length === 0 ? /* @__PURE__ */ __dil.jsx(LedgerEmpty, {
			label: state.labels.no_recurring_activity,
			icon: "reload"
		}) : items.slice(0, rows).map((item, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: item.id,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx(LedgerActivityRow, {
			item,
			state,
			mode: "recurring",
			activeView: view,
			title: state.label
		}), index < Math.min(rows, items.length) - 1 ? /* @__PURE__ */ __dil.jsx("divider", null) : null))), items.length > 5 ? /* @__PURE__ */ __dil.jsx("box", { padding: { top: 5 } }, /* @__PURE__ */ __dil.jsx("button", {
			variant: "soft",
			block: true,
			onClick: () => setRows(rows === 5 ? items.length : 5)
		}, rows === 5 ? state.labels.show_more : state.labels.show_less)) : null)));
	}

