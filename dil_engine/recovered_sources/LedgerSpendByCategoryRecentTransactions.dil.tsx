
	function LedgerSpendByCategoryRecentTransactions(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerSpendByCategoryRecentTransactions", props);
		if (!state && resolutionComplete) return props.fallback ?? null;
		if (state?.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: state.labels });
		const loading = !state || state.is_loading;
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: "100%",
			gap: 0
		}, loading ? /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, [0, 1].map((index) => /* @__PURE__ */ __dil.jsx("col", {
			key: index,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			width: "100%",
			padding: { y: 2 }
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 32,
			background: "alpha-10",
			radius: "full"
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: .5
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "64%",
			height: 20
		}), /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "42%",
			height: 20
		})), /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 56,
			height: 20
		})), index !== 1 && /* @__PURE__ */ __dil.jsx("divider", null))))) : state.recent_transactions.length > 0 ? /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.recent_transactions.map((transaction, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: transaction.id,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			width: "100%",
			padding: { y: 2 }
		}, /* @__PURE__ */ __dil.jsx(TransactionLogo, {
			src: transaction.logo_url,
			icon: transaction.icon || "compass",
			size: 32,
			iconSize: "md"
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: .5
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			maxLines: 1
		}, transaction.display_name), /* @__PURE__ */ __dil.jsx("caption", {
			size: "sm",
			color: "secondary",
			truncate: true
		}, transaction.date_label)), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			width: "max-content"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "end",
			maxLines: 1
		}, state.sensitive_values_hidden ? state.labels.masked_value : transaction.amount_label))), index < state.recent_transactions.length - 1 && /* @__PURE__ */ __dil.jsx("divider", null))))) : /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 36,
			radius: "full",
			background: "alpha-10",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "receipt",
			size: "lg",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("caption", { size: "md" }, state.labels.no_recent_transactions_for_month))));
	}



/* ---- merged ---- */

	function LedgerSpendByCategoryRecentTransactions(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerSpendByCategoryRecentTransactions", props);
		if (!state && resolutionComplete) return props.fallback ?? null;
		if (state?.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: state.labels });
		const loading = !state || state.is_loading;
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: "100%",
			gap: 0
		}, loading ? /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, [0, 1].map((index) => /* @__PURE__ */ __dil.jsx("col", {
			key: index,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			width: "100%",
			padding: { y: 2 }
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 32,
			background: "alpha-10",
			radius: "full"
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: .5
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "64%",
			height: 20
		}), /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "42%",
			height: 20
		})), /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 56,
			height: 20
		})), index !== 1 && /* @__PURE__ */ __dil.jsx("divider", null))))) : state.recent_transactions.length > 0 ? /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.recent_transactions.map((transaction, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: transaction.id,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			width: "100%",
			padding: { y: 2 }
		}, /* @__PURE__ */ __dil.jsx(TransactionLogo, {
			src: transaction.logo_url,
			icon: transaction.icon || "compass",
			size: 32,
			iconSize: "md"
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: .5
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			maxLines: 1
		}, transaction.display_name), /* @__PURE__ */ __dil.jsx("caption", {
			size: "sm",
			color: "secondary",
			truncate: true
		}, transaction.date_label)), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			width: "max-content"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "end",
			maxLines: 1
		}, state.sensitive_values_hidden ? state.labels.masked_value : transaction.amount_label))), index < state.recent_transactions.length - 1 && /* @__PURE__ */ __dil.jsx("divider", null))))) : /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 36,
			radius: "full",
			background: "alpha-10",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "receipt",
			size: "lg",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("caption", { size: "md" }, state.labels.no_recent_transactions_for_month))));
	}

