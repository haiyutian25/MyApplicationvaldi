
	function LedgerTransactionDetail(props) {
		const mobile = DIL.useIsMobile();
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerTransactionDetail", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 360
		});
		const hidden = state.sensitive_values_hidden;
		const details = [
			{
				key: "merchant",
				label: state.labels.merchant,
				value: state.merchant_name
			},
			{
				key: "date",
				label: state.labels.date,
				value: state.date_label
			},
			{
				key: "account",
				label: state.labels.account,
				value: hidden ? state.labels.masked_value : state.account_name
			},
			{
				key: "category",
				label: state.labels.category,
				value: state.category_label
			}
		];
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 6,
			padding: mobile ? {
				x: 5,
				top: 1,
				bottom: 4
			} : {
				x: 5,
				y: 4
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			height: 48,
			gap: 3,
			align: "center",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(TransactionLogo, {
			src: state.logo_url,
			alt: state.logo_alt,
			icon: state.category_icon,
			size: mobile ? 40 : 32,
			iconSize: "md",
			rounded: false
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, mobile ? /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "bold",
			maxLines: 1
		}, state.display_name) : /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold",
			maxLines: 1
		}, state.display_name), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "normal",
			maxLines: 1
		}, hidden ? state.masked_amount_label : state.amount_label)))), /* @__PURE__ */ __dil.jsx("col", { gap: 5 }, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, details.map((detail, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: detail.key,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			height: mobile || detail.key === "category" ? 56 : void 0,
			align: "center",
			padding: { y: 2.5 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, detail.label), /* @__PURE__ */ __dil.jsx("spacer", null), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "normal",
			maxLines: 1
		}, detail.value)), index < details.length - 1 && (mobile ? /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 1,
			background: "alpha-10"
		}) : /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 }))))), state.budget && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, mobile ? /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 1,
			background: "alpha-10"
		}) : /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 }), /* @__PURE__ */ __dil.jsx("col", {
			height: 71,
			gap: 2,
			padding: { y: 2.5 }
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.budget), /* @__PURE__ */ __dil.jsx("spacer", null), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "normal"
		}, hidden ? state.labels.masked_value : state.budget.limit_label)), /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 4,
			radius: "full",
			background: mobile ? "repeating-linear-gradient(135deg, transparent 0px, transparent 4px, var(--alpha-20) 4px, var(--alpha-20) 5px), var(--alpha-10)" : "alpha-10"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: `${state.budget.progress_pct}%`,
			height: 4,
			radius: "full",
			background: state.budget.bar_color
		}))))), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			height: 53,
			align: "center",
			padding: {
				x: 5,
				y: 3
			}
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: mobile ? "lg" : "md",
			weight: mobile ? "bold" : void 0
		}, state.labels.related_transactions)), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { x: 5 }
		}, state.related_transactions.length > 0 ? state.related_transactions.map((transaction, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: transaction.id,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			variant: "ghost",
			variantFeedback: true,
			hoverBackground: "surface-tertiary",
			width: "100%",
			radius: "md",
			padding: mobile ? {
				x: 2,
				y: 0
			} : void 0,
			border: mobile ? {
				size: 1,
				color: "transparent"
			} : void 0,
			ariaLabel: transaction.detail_sidebar_aria_label,
			onClick: () => openTransactionDetail(transaction, hidden, state.labels.masked_value, true)
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			width: "100%",
			height: mobile ? 66 : 53,
			padding: { y: 2.5 }
		}, /* @__PURE__ */ __dil.jsx(TransactionLogo, {
			src: transaction.logo_url,
			icon: transaction.icon || state.category_icon,
			size: mobile ? 40 : 28,
			iconSize: "sm",
			rounded: false
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: mobile ? "md" : "sm",
			weight: "medium",
			maxLines: 1
		}, transaction.display_name), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 1
		}, transaction.date_label)), /* @__PURE__ */ __dil.jsx("col", {
			align: "end",
			justify: "center",
			gap: 0,
			width: "max-content"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: mobile ? "md" : "sm",
			weight: "normal",
			textAlign: "end",
			maxLines: 1
		}, hidden ? transaction.masked_amount_label : transaction.amount_label), transaction.pending && /* @__PURE__ */ __dil.jsx("caption", {
			size: "md",
			weight: "normal",
			color: "secondary",
			textAlign: "end",
			maxLines: 1
		}, transaction.pending_label)))), index < state.related_transactions.length - 1 && (mobile ? /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 1,
			background: "alpha-10"
		}) : /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })))) : /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.no_related_transactions)))));
	}



/* ---- merged ---- */

	function LedgerTransactionDetail(props) {
		const mobile = DIL.useIsMobile();
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerTransactionDetail", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 360
		});
		const hidden = state.sensitive_values_hidden;
		const details = [
			{
				key: "merchant",
				label: state.labels.merchant,
				value: state.merchant_name
			},
			{
				key: "date",
				label: state.labels.date,
				value: state.date_label
			},
			{
				key: "account",
				label: state.labels.account,
				value: hidden ? state.labels.masked_value : state.account_name
			},
			{
				key: "category",
				label: state.labels.category,
				value: state.category_label
			}
		];
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 6,
			padding: mobile ? {
				x: 5,
				top: 1,
				bottom: 4
			} : {
				x: 5,
				y: 4
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			height: 48,
			gap: 3,
			align: "center",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(TransactionLogo, {
			src: state.logo_url,
			alt: state.logo_alt,
			icon: state.category_icon,
			size: mobile ? 40 : 32,
			iconSize: "md",
			rounded: false
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, mobile ? /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "bold",
			maxLines: 1
		}, state.display_name) : /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold",
			maxLines: 1
		}, state.display_name), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "normal",
			maxLines: 1
		}, hidden ? state.masked_amount_label : state.amount_label)))), /* @__PURE__ */ __dil.jsx("col", { gap: 5 }, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, details.map((detail, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: detail.key,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			height: mobile || detail.key === "category" ? 56 : void 0,
			align: "center",
			padding: { y: 2.5 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, detail.label), /* @__PURE__ */ __dil.jsx("spacer", null), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "normal",
			maxLines: 1
		}, detail.value)), index < details.length - 1 && (mobile ? /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 1,
			background: "alpha-10"
		}) : /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 }))))), state.budget && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, mobile ? /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 1,
			background: "alpha-10"
		}) : /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 }), /* @__PURE__ */ __dil.jsx("col", {
			height: 71,
			gap: 2,
			padding: { y: 2.5 }
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.budget), /* @__PURE__ */ __dil.jsx("spacer", null), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "normal"
		}, hidden ? state.labels.masked_value : state.budget.limit_label)), /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 4,
			radius: "full",
			background: mobile ? "repeating-linear-gradient(135deg, transparent 0px, transparent 4px, var(--alpha-20) 4px, var(--alpha-20) 5px), var(--alpha-10)" : "alpha-10"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: `${state.budget.progress_pct}%`,
			height: 4,
			radius: "full",
			background: state.budget.bar_color
		}))))), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			height: 53,
			align: "center",
			padding: {
				x: 5,
				y: 3
			}
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: mobile ? "lg" : "md",
			weight: mobile ? "bold" : void 0
		}, state.labels.related_transactions)), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { x: 5 }
		}, state.related_transactions.length > 0 ? state.related_transactions.map((transaction, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: transaction.id,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			variant: "ghost",
			variantFeedback: true,
			hoverBackground: "surface-tertiary",
			width: "100%",
			radius: "md",
			padding: mobile ? {
				x: 2,
				y: 0
			} : void 0,
			border: mobile ? {
				size: 1,
				color: "transparent"
			} : void 0,
			ariaLabel: transaction.detail_sidebar_aria_label,
			onClick: () => openTransactionDetail(transaction, hidden, state.labels.masked_value, true)
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			width: "100%",
			height: mobile ? 66 : 53,
			padding: { y: 2.5 }
		}, /* @__PURE__ */ __dil.jsx(TransactionLogo, {
			src: transaction.logo_url,
			icon: transaction.icon || state.category_icon,
			size: mobile ? 40 : 28,
			iconSize: "sm",
			rounded: false
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: mobile ? "md" : "sm",
			weight: "medium",
			maxLines: 1
		}, transaction.display_name), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 1
		}, transaction.date_label)), /* @__PURE__ */ __dil.jsx("col", {
			align: "end",
			justify: "center",
			gap: 0,
			width: "max-content"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: mobile ? "md" : "sm",
			weight: "normal",
			textAlign: "end",
			maxLines: 1
		}, hidden ? transaction.masked_amount_label : transaction.amount_label), transaction.pending && /* @__PURE__ */ __dil.jsx("caption", {
			size: "md",
			weight: "normal",
			color: "secondary",
			textAlign: "end",
			maxLines: 1
		}, transaction.pending_label)))), index < state.related_transactions.length - 1 && (mobile ? /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 1,
			background: "alpha-10"
		}) : /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })))) : /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.no_related_transactions)))));
	}

