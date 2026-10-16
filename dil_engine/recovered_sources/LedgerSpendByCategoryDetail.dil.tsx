
	function LedgerSpendByCategoryDetail(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerSpendByCategoryDetail", props);
		if (!state && resolutionComplete) return props.fallback ?? null;
		if (state?.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: state.labels });
		const loading = !state || state.is_loading;
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: "100%",
			gap: 0,
			padding: { y: 4 }
		}, loading ? /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, [0, 1].map((index) => /* @__PURE__ */ __dil.jsx("col", {
			key: index,
			gap: 1.5,
			padding: { y: 2 }
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			justify: "between",
			width: "100%",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "56%",
			height: 20
		})), /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 64,
			height: 20
		})), /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 16
		}), index !== 1 && /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: .5 }
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })))))) : state.groups.length > 0 ? /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.groups.map((group, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: group.id,
			gap: 1.5,
			padding: { y: 2 }
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			justify: "between",
			width: "100%",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			maxLines: 2
		}, group.label)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "end",
			maxLines: 1
		}, state.sensitive_values_hidden ? state.labels.masked_value : group.subtotal_label)), /* @__PURE__ */ __dil.jsx("box", {
			height: 4,
			radius: "full",
			background: "alpha-10",
			width: "100%",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: "100%",
			width: `${group.filled_pct}%`,
			radius: "full",
			background: "green-500"
		})), index < state.groups.length - 1 && /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: .5 }
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })))))) : /* @__PURE__ */ __dil.jsx("row", {
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
		})), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("caption", { size: "md" }, state.labels.no_detailed_subcategory_breakdown))));
	}



/* ---- merged ---- */

	function LedgerSpendByCategoryDetail(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerSpendByCategoryDetail", props);
		if (!state && resolutionComplete) return props.fallback ?? null;
		if (state?.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: state.labels });
		const loading = !state || state.is_loading;
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: "100%",
			gap: 0,
			padding: { y: 4 }
		}, loading ? /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, [0, 1].map((index) => /* @__PURE__ */ __dil.jsx("col", {
			key: index,
			gap: 1.5,
			padding: { y: 2 }
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			justify: "between",
			width: "100%",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "56%",
			height: 20
		})), /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 64,
			height: 20
		})), /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 16
		}), index !== 1 && /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: .5 }
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })))))) : state.groups.length > 0 ? /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.groups.map((group, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: group.id,
			gap: 1.5,
			padding: { y: 2 }
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			justify: "between",
			width: "100%",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			maxLines: 2
		}, group.label)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "end",
			maxLines: 1
		}, state.sensitive_values_hidden ? state.labels.masked_value : group.subtotal_label)), /* @__PURE__ */ __dil.jsx("box", {
			height: 4,
			radius: "full",
			background: "alpha-10",
			width: "100%",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: "100%",
			width: `${group.filled_pct}%`,
			radius: "full",
			background: "green-500"
		})), index < state.groups.length - 1 && /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: .5 }
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })))))) : /* @__PURE__ */ __dil.jsx("row", {
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
		})), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("caption", { size: "md" }, state.labels.no_detailed_subcategory_breakdown))));
	}

