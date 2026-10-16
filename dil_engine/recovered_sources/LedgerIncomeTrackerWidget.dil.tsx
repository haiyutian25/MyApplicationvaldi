
	function LedgerIncomeTrackerWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerIncomeTrackerWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 300
		});
		if (state.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: state.labels });
		const next = state.next_paycheck;
		const meta = next ? [
			next.next_payment ?? state.labels.date_unavailable,
			next.frequency,
			next.account_detail
		].filter(Boolean).join(" 
 ") : "";
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			background: "surface-elevated",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			padding: {
				x: 6,
				top: 5,
				bottom: 4
			}
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: .5
		}, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.subtitle)), /* @__PURE__ */ __dil.jsx("box", {
			size: 36,
			radius: "full",
			background: "alpha-10",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "banknote",
			size: "lg",
			color: "secondary"
		}))), /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: {
				x: 6,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })), state.has_income ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			padding: {
				x: 6,
				top: 3,
				bottom: 5
			}
		}, /* @__PURE__ */ __dil.jsx("col", { gap: .5 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.estimated_monthly_income), /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "medium",
			maxLines: 1
		}, state.sensitive_values_hidden ? state.labels.masked_value : state.estimated_monthly_income_label)), /* @__PURE__ */ __dil.jsx("col", { gap: 1.5 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.next_paycheck), next ? /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			width: "100%",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx(LedgerAvatar, { item: {
			...next,
			icon: next.icon ?? "banknote"
		} }), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			maxLines: 1
		}, next.name ?? state.labels.recurring_income), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 1,
			truncate: true
		}, meta)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "end",
			maxLines: 1
		}, state.sensitive_values_hidden && next.amount != null ? state.labels.masked_value : next.amount ?? "")) : /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.no_upcoming_paycheck_found)), /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 }), /* @__PURE__ */ __dil.jsx("col", { gap: .5 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.recurring_income), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			maxLines: 1,
			truncate: true
		}, state.income_sources_label))) : /* @__PURE__ */ __dil.jsx("box", { padding: { x: 6 } }, /* @__PURE__ */ __dil.jsx(LedgerEmpty, { label: state.empty_state_label }))));
	}

