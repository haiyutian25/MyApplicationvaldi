
	function openTransactionDetail(transaction, hidden, maskedValue, related = false) {
		GenUI.dispatchAction({
			handler: "client",
			type: "open_entity_detail",
			payload: {
				category: "ledger_detail_sidebar",
				query: transaction.display_name + " transaction",
				extraParams: {
					detail_type: "transaction",
					displayTitle: transaction.display_name,
					...related ? { disableFollowUpButton: true } : { alwaysShowFollowUpButton: true },
					disableFooterActions: true,
					transaction_id: transaction.transaction_id,
					logo_url: transaction.logo_url ?? "",
					category_icon: transaction.category_icon,
					merchant_name: transaction.merchant_name,
					transaction_date: transaction.date,
					date_label: transaction.date_label,
					amount_label: hidden ? transaction.masked_amount_label : transaction.amount_label,
					amount_value: hidden ? null : transaction.amount_value,
					currency_code: transaction.currency_code,
					account_id: transaction.account_id ?? "",
					account_name: hidden ? maskedValue : transaction.account_detail,
					primary_category: transaction.category_label,
					primary_category_key: transaction.primary_category_key,
					primary_category_id: transaction.primary_category_id,
					category_confidence_level: transaction.category_confidence_level ?? "",
					category_confidence_label: transaction.category_confidence_label ?? "",
					pending: transaction.pending,
					month_start: transaction.month_start,
					sensitive_values_hidden: hidden
				}
			}
		});
	}
	function TransactionLogo({ src, alt, icon, size, iconSize = "lg", rounded = true }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			size,
			radius: "full",
			background: src ? void 0 : "alpha-10",
			align: "center",
			justify: "center"
		}, src ? /* @__PURE__ */ __dil.jsx("image", {
			src,
			alt,
			width: size,
			height: size,
			radius: rounded ? "full" : void 0,
			fit: "contain",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("icon", {
			name: icon || "compass",
			size: iconSize,
			color: "primary"
		}));
	}



/* ---- merged ---- */

	function openTransactionDetail(transaction, hidden, maskedValue, related = false) {
		GenUI.dispatchAction({
			handler: "client",
			type: "open_entity_detail",
			payload: {
				category: "ledger_detail_sidebar",
				query: transaction.display_name + " transaction",
				extraParams: {
					detail_type: "transaction",
					displayTitle: transaction.display_name,
					...related ? { disableFollowUpButton: true } : { alwaysShowFollowUpButton: true },
					disableFooterActions: true,
					transaction_id: transaction.transaction_id,
					logo_url: transaction.logo_url ?? "",
					category_icon: transaction.category_icon,
					merchant_name: transaction.merchant_name,
					transaction_date: transaction.date,
					date_label: transaction.date_label,
					amount_label: hidden ? transaction.masked_amount_label : transaction.amount_label,
					amount_value: hidden ? null : transaction.amount_value,
					currency_code: transaction.currency_code,
					account_id: transaction.account_id ?? "",
					account_name: hidden ? maskedValue : transaction.account_detail,
					primary_category: transaction.category_label,
					primary_category_key: transaction.primary_category_key,
					primary_category_id: transaction.primary_category_id,
					category_confidence_level: transaction.category_confidence_level ?? "",
					category_confidence_label: transaction.category_confidence_label ?? "",
					pending: transaction.pending,
					month_start: transaction.month_start,
					sensitive_values_hidden: hidden
				}
			}
		});
	}
	function TransactionLogo({ src, alt, icon, size, iconSize = "lg", rounded = true }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			size,
			radius: "full",
			background: src ? void 0 : "alpha-10",
			align: "center",
			justify: "center"
		}, src ? /* @__PURE__ */ __dil.jsx("image", {
			src,
			alt,
			width: size,
			height: size,
			radius: rounded ? "full" : void 0,
			fit: "contain",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("icon", {
			name: icon || "compass",
			size: iconSize,
			color: "primary"
		}));
	}



/* ---- merged ---- */

	function openTransactionDetail(transaction, hidden, maskedValue, related = false) {
		GenUI.dispatchAction({
			handler: "client",
			type: "open_entity_detail",
			payload: {
				category: "ledger_detail_sidebar",
				query: transaction.display_name + " transaction",
				extraParams: {
					detail_type: "transaction",
					displayTitle: transaction.display_name,
					...related ? { disableFollowUpButton: true } : { alwaysShowFollowUpButton: true },
					disableFooterActions: true,
					transaction_id: transaction.transaction_id,
					logo_url: transaction.logo_url ?? "",
					category_icon: transaction.category_icon,
					merchant_name: transaction.merchant_name,
					transaction_date: transaction.date,
					date_label: transaction.date_label,
					amount_label: hidden ? transaction.masked_amount_label : transaction.amount_label,
					amount_value: hidden ? null : transaction.amount_value,
					currency_code: transaction.currency_code,
					account_id: transaction.account_id ?? "",
					account_name: hidden ? maskedValue : transaction.account_detail,
					primary_category: transaction.category_label,
					primary_category_key: transaction.primary_category_key,
					primary_category_id: transaction.primary_category_id,
					category_confidence_level: transaction.category_confidence_level ?? "",
					category_confidence_label: transaction.category_confidence_label ?? "",
					pending: transaction.pending,
					month_start: transaction.month_start,
					sensitive_values_hidden: hidden
				}
			}
		});
	}
	function TransactionLogo({ src, alt, icon, size, iconSize = "lg", rounded = true }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			size,
			radius: "full",
			background: src ? void 0 : "alpha-10",
			align: "center",
			justify: "center"
		}, src ? /* @__PURE__ */ __dil.jsx("image", {
			src,
			alt,
			width: size,
			height: size,
			radius: rounded ? "full" : void 0,
			fit: "contain",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("icon", {
			name: icon || "compass",
			size: iconSize,
			color: "primary"
		}));
	}
	function LedgerRecentTransactionsView({ state }) {
		const desktop = DIL.useBreakpoint("sm");
		const [rowsToShow, setRowsToShow] = DIL.useState(3);
		const hidden = state.sensitive_values_hidden ?? false;
		const visible = state.transactions.slice(0, rowsToShow);
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: "100%",
			background: "surface-elevated",
			padding: 6,
			radius: "4xl",
			border: 1,
			clip: true
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			padding: { bottom: 4 }
		}, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.title)), /* @__PURE__ */ __dil.jsx("box", {
			height: 16,
			width: "100%",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: 1,
			width: "100%",
			background: "border-subtle"
		})), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, state.transactions.length === 0 && /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			padding: { y: 6 }
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
		})), /* @__PURE__ */ __dil.jsx("caption", {
			size: "md",
			color: "secondary"
		}, state.empty_state_label)), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, visible.map((transaction, index) => {
			const content = /* @__PURE__ */ __dil.jsx("box", { padding: { y: desktop ? 2 : 2.5 } }, /* @__PURE__ */ __dil.jsx("row", {
				gap: 4,
				align: "center",
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx(TransactionLogo, {
				src: transaction.logo_url,
				alt: transaction.logo_alt,
				icon: transaction.category_icon,
				size: desktop ? 32 : 40,
				iconSize: desktop ? "lg" : "xl"
			}), /* @__PURE__ */ __dil.jsx("col", {
				flex: 1,
				minWidth: 0,
				gap: 0
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: desktop ? "sm" : "md",
				weight: "normal",
				maxLines: 1
			}, transaction.display_name), /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 1,
				width: "100%",
				minWidth: 0,
				wrap: "nowrap"
			}, /* @__PURE__ */ __dil.jsx("caption", {
				size: "md",
				weight: "normal",
				color: "secondary",
				maxLines: 1
			}, transaction.date_label), /* @__PURE__ */ __dil.jsx("caption", {
				size: "md",
				weight: "normal",
				color: "secondary"
			}, state.labels.separator_dot), /* @__PURE__ */ __dil.jsx("box", {
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("caption", {
				size: "md",
				weight: "normal",
				color: "secondary",
				truncate: true,
				maxLines: 1
			}, hidden ? state.labels.masked_value : transaction.account_detail)))), /* @__PURE__ */ __dil.jsx("col", {
				align: "end",
				justify: "center",
				gap: 0,
				width: "max-content"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: desktop ? "sm" : "md",
				weight: "normal",
				textAlign: "end",
				maxLines: 1,
				color: hidden ? "primary" : transaction.amount_value > 0 ? "green-500" : "primary"
			}, hidden ? transaction.masked_amount_label : transaction.amount_label), transaction.pending && /* @__PURE__ */ __dil.jsx("caption", {
				size: "md",
				weight: "normal",
				color: "secondary",
				textAlign: "end",
				maxLines: 1
			}, transaction.pending_label))));
			return /* @__PURE__ */ __dil.jsx("col", {
				key: transaction.id,
				gap: 0
			}, transaction.detail_sidebar_enabled ? /* @__PURE__ */ __dil.jsx("pressable", {
				variant: "ghost",
				variantFeedback: true,
				hoverBackground: "surface-tertiary",
				padding: 0,
				radius: "md",
				border: 0,
				ariaLabel: transaction.detail_sidebar_aria_label,
				onClick: () => openTransactionDetail(transaction, hidden, state.labels.masked_value)
			}, content) : /* @__PURE__ */ __dil.jsx("box", {
				padding: 0,
				radius: "md"
			}, content), index < visible.length - 1 && /* @__PURE__ */ __dil.jsx("divider", null));
		})), state.transactions.length > 3 && /* @__PURE__ */ __dil.jsx("box", { padding: { top: 5 } }, /* @__PURE__ */ __dil.jsx("button", {
			variant: "soft",
			block: true,
			onClick: () => setRowsToShow(rowsToShow === 3 ? 999 : 3)
		}, rowsToShow === 3 ? state.labels.show_more : state.labels.show_less)))));
	}



/* ---- merged ---- */

	function openTransactionDetail(transaction, hidden, maskedValue, related = false) {
		GenUI.dispatchAction({
			handler: "client",
			type: "open_entity_detail",
			payload: {
				category: "ledger_detail_sidebar",
				query: transaction.display_name + " transaction",
				extraParams: {
					detail_type: "transaction",
					displayTitle: transaction.display_name,
					...related ? { disableFollowUpButton: true } : { alwaysShowFollowUpButton: true },
					disableFooterActions: true,
					transaction_id: transaction.transaction_id,
					logo_url: transaction.logo_url ?? "",
					category_icon: transaction.category_icon,
					merchant_name: transaction.merchant_name,
					transaction_date: transaction.date,
					date_label: transaction.date_label,
					amount_label: hidden ? transaction.masked_amount_label : transaction.amount_label,
					amount_value: hidden ? null : transaction.amount_value,
					currency_code: transaction.currency_code,
					account_id: transaction.account_id ?? "",
					account_name: hidden ? maskedValue : transaction.account_detail,
					primary_category: transaction.category_label,
					primary_category_key: transaction.primary_category_key,
					primary_category_id: transaction.primary_category_id,
					category_confidence_level: transaction.category_confidence_level ?? "",
					category_confidence_label: transaction.category_confidence_label ?? "",
					pending: transaction.pending,
					month_start: transaction.month_start,
					sensitive_values_hidden: hidden
				}
			}
		});
	}
	function TransactionLogo({ src, alt, icon, size, iconSize = "lg", rounded = true }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			size,
			radius: "full",
			background: src ? void 0 : "alpha-10",
			align: "center",
			justify: "center"
		}, src ? /* @__PURE__ */ __dil.jsx("image", {
			src,
			alt,
			width: size,
			height: size,
			radius: rounded ? "full" : void 0,
			fit: "contain",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("icon", {
			name: icon || "compass",
			size: iconSize,
			color: "primary"
		}));
	}
	function LedgerRecentTransactionsView({ state }) {
		const desktop = DIL.useBreakpoint("sm");
		const [rowsToShow, setRowsToShow] = DIL.useState(3);
		const hidden = state.sensitive_values_hidden ?? false;
		const visible = state.transactions.slice(0, rowsToShow);
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: "100%",
			background: "surface-elevated",
			padding: 6,
			radius: "4xl",
			border: 1,
			clip: true
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			padding: { bottom: 4 }
		}, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.title)), /* @__PURE__ */ __dil.jsx("box", {
			height: 16,
			width: "100%",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: 1,
			width: "100%",
			background: "border-subtle"
		})), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, state.transactions.length === 0 && /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			padding: { y: 6 }
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
		})), /* @__PURE__ */ __dil.jsx("caption", {
			size: "md",
			color: "secondary"
		}, state.empty_state_label)), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, visible.map((transaction, index) => {
			const content = /* @__PURE__ */ __dil.jsx("box", { padding: { y: desktop ? 2 : 2.5 } }, /* @__PURE__ */ __dil.jsx("row", {
				gap: 4,
				align: "center",
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx(TransactionLogo, {
				src: transaction.logo_url,
				alt: transaction.logo_alt,
				icon: transaction.category_icon,
				size: desktop ? 32 : 40,
				iconSize: desktop ? "lg" : "xl"
			}), /* @__PURE__ */ __dil.jsx("col", {
				flex: 1,
				minWidth: 0,
				gap: 0
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: desktop ? "sm" : "md",
				weight: "normal",
				maxLines: 1
			}, transaction.display_name), /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 1,
				width: "100%",
				minWidth: 0,
				wrap: "nowrap"
			}, /* @__PURE__ */ __dil.jsx("caption", {
				size: "md",
				weight: "normal",
				color: "secondary",
				maxLines: 1
			}, transaction.date_label), /* @__PURE__ */ __dil.jsx("caption", {
				size: "md",
				weight: "normal",
				color: "secondary"
			}, state.labels.separator_dot), /* @__PURE__ */ __dil.jsx("box", {
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("caption", {
				size: "md",
				weight: "normal",
				color: "secondary",
				truncate: true,
				maxLines: 1
			}, hidden ? state.labels.masked_value : transaction.account_detail)))), /* @__PURE__ */ __dil.jsx("col", {
				align: "end",
				justify: "center",
				gap: 0,
				width: "max-content"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: desktop ? "sm" : "md",
				weight: "normal",
				textAlign: "end",
				maxLines: 1,
				color: hidden ? "primary" : transaction.amount_value > 0 ? "green-500" : "primary"
			}, hidden ? transaction.masked_amount_label : transaction.amount_label), transaction.pending && /* @__PURE__ */ __dil.jsx("caption", {
				size: "md",
				weight: "normal",
				color: "secondary",
				textAlign: "end",
				maxLines: 1
			}, transaction.pending_label))));
			return /* @__PURE__ */ __dil.jsx("col", {
				key: transaction.id,
				gap: 0
			}, transaction.detail_sidebar_enabled ? /* @__PURE__ */ __dil.jsx("pressable", {
				variant: "ghost",
				variantFeedback: true,
				hoverBackground: "surface-tertiary",
				padding: 0,
				radius: "md",
				border: 0,
				ariaLabel: transaction.detail_sidebar_aria_label,
				onClick: () => openTransactionDetail(transaction, hidden, state.labels.masked_value)
			}, content) : /* @__PURE__ */ __dil.jsx("box", {
				padding: 0,
				radius: "md"
			}, content), index < visible.length - 1 && /* @__PURE__ */ __dil.jsx("divider", null));
		})), state.transactions.length > 3 && /* @__PURE__ */ __dil.jsx("box", { padding: { top: 5 } }, /* @__PURE__ */ __dil.jsx("button", {
			variant: "soft",
			block: true,
			onClick: () => setRowsToShow(rowsToShow === 3 ? 999 : 3)
		}, rowsToShow === 3 ? state.labels.show_more : state.labels.show_less)))));
	}



/* ---- merged ---- */

	function TransactionLogo({ src, alt, icon, size, iconSize = "lg", rounded = true }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			size,
			radius: "full",
			background: src ? void 0 : "alpha-10",
			align: "center",
			justify: "center"
		}, src ? /* @__PURE__ */ __dil.jsx("image", {
			src,
			alt,
			width: size,
			height: size,
			radius: rounded ? "full" : void 0,
			fit: "contain",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("icon", {
			name: icon || "compass",
			size: iconSize,
			color: "primary"
		}));
	}



/* ---- merged ---- */

	function TransactionLogo({ src, alt, icon, size, iconSize = "lg", rounded = true }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			size,
			radius: "full",
			background: src ? void 0 : "alpha-10",
			align: "center",
			justify: "center"
		}, src ? /* @__PURE__ */ __dil.jsx("image", {
			src,
			alt,
			width: size,
			height: size,
			radius: rounded ? "full" : void 0,
			fit: "contain",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("icon", {
			name: icon || "compass",
			size: iconSize,
			color: "primary"
		}));
	}



/* ---- merged ---- */

	function openTransactionDetail(transaction, hidden, maskedValue, related = false) {
		GenUI.dispatchAction({
			handler: "client",
			type: "open_entity_detail",
			payload: {
				category: "ledger_detail_sidebar",
				query: transaction.display_name + " transaction",
				extraParams: {
					detail_type: "transaction",
					displayTitle: transaction.display_name,
					...related ? { disableFollowUpButton: true } : { alwaysShowFollowUpButton: true },
					disableFooterActions: true,
					transaction_id: transaction.transaction_id,
					logo_url: transaction.logo_url ?? "",
					category_icon: transaction.category_icon,
					merchant_name: transaction.merchant_name,
					transaction_date: transaction.date,
					date_label: transaction.date_label,
					amount_label: hidden ? transaction.masked_amount_label : transaction.amount_label,
					amount_value: hidden ? null : transaction.amount_value,
					currency_code: transaction.currency_code,
					account_id: transaction.account_id ?? "",
					account_name: hidden ? maskedValue : transaction.account_detail,
					primary_category: transaction.category_label,
					primary_category_key: transaction.primary_category_key,
					primary_category_id: transaction.primary_category_id,
					category_confidence_level: transaction.category_confidence_level ?? "",
					category_confidence_label: transaction.category_confidence_label ?? "",
					pending: transaction.pending,
					month_start: transaction.month_start,
					sensitive_values_hidden: hidden
				}
			}
		});
	}
	function TransactionLogo({ src, alt, icon, size, iconSize = "lg", rounded = true }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			size,
			radius: "full",
			background: src ? void 0 : "alpha-10",
			align: "center",
			justify: "center"
		}, src ? /* @__PURE__ */ __dil.jsx("image", {
			src,
			alt,
			width: size,
			height: size,
			radius: rounded ? "full" : void 0,
			fit: "contain",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("icon", {
			name: icon || "compass",
			size: iconSize,
			color: "primary"
		}));
	}



/* ---- merged ---- */

	function openTransactionDetail(transaction, hidden, maskedValue, related = false) {
		GenUI.dispatchAction({
			handler: "client",
			type: "open_entity_detail",
			payload: {
				category: "ledger_detail_sidebar",
				query: transaction.display_name + " transaction",
				extraParams: {
					detail_type: "transaction",
					displayTitle: transaction.display_name,
					...related ? { disableFollowUpButton: true } : { alwaysShowFollowUpButton: true },
					disableFooterActions: true,
					transaction_id: transaction.transaction_id,
					logo_url: transaction.logo_url ?? "",
					category_icon: transaction.category_icon,
					merchant_name: transaction.merchant_name,
					transaction_date: transaction.date,
					date_label: transaction.date_label,
					amount_label: hidden ? transaction.masked_amount_label : transaction.amount_label,
					amount_value: hidden ? null : transaction.amount_value,
					currency_code: transaction.currency_code,
					account_id: transaction.account_id ?? "",
					account_name: hidden ? maskedValue : transaction.account_detail,
					primary_category: transaction.category_label,
					primary_category_key: transaction.primary_category_key,
					primary_category_id: transaction.primary_category_id,
					category_confidence_level: transaction.category_confidence_level ?? "",
					category_confidence_label: transaction.category_confidence_label ?? "",
					pending: transaction.pending,
					month_start: transaction.month_start,
					sensitive_values_hidden: hidden
				}
			}
		});
	}
	function TransactionLogo({ src, alt, icon, size, iconSize = "lg", rounded = true }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			size,
			radius: "full",
			background: src ? void 0 : "alpha-10",
			align: "center",
			justify: "center"
		}, src ? /* @__PURE__ */ __dil.jsx("image", {
			src,
			alt,
			width: size,
			height: size,
			radius: rounded ? "full" : void 0,
			fit: "contain",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("icon", {
			name: icon || "compass",
			size: iconSize,
			color: "primary"
		}));
	}



/* ---- merged ---- */

	function openTransactionDetail(transaction, hidden, maskedValue, related = false) {
		GenUI.dispatchAction({
			handler: "client",
			type: "open_entity_detail",
			payload: {
				category: "ledger_detail_sidebar",
				query: transaction.display_name + " transaction",
				extraParams: {
					detail_type: "transaction",
					displayTitle: transaction.display_name,
					...related ? { disableFollowUpButton: true } : { alwaysShowFollowUpButton: true },
					disableFooterActions: true,
					transaction_id: transaction.transaction_id,
					logo_url: transaction.logo_url ?? "",
					category_icon: transaction.category_icon,
					merchant_name: transaction.merchant_name,
					transaction_date: transaction.date,
					date_label: transaction.date_label,
					amount_label: hidden ? transaction.masked_amount_label : transaction.amount_label,
					amount_value: hidden ? null : transaction.amount_value,
					currency_code: transaction.currency_code,
					account_id: transaction.account_id ?? "",
					account_name: hidden ? maskedValue : transaction.account_detail,
					primary_category: transaction.category_label,
					primary_category_key: transaction.primary_category_key,
					primary_category_id: transaction.primary_category_id,
					category_confidence_level: transaction.category_confidence_level ?? "",
					category_confidence_label: transaction.category_confidence_label ?? "",
					pending: transaction.pending,
					month_start: transaction.month_start,
					sensitive_values_hidden: hidden
				}
			}
		});
	}
	function TransactionLogo({ src, alt, icon, size, iconSize = "lg", rounded = true }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			size,
			radius: "full",
			background: src ? void 0 : "alpha-10",
			align: "center",
			justify: "center"
		}, src ? /* @__PURE__ */ __dil.jsx("image", {
			src,
			alt,
			width: size,
			height: size,
			radius: rounded ? "full" : void 0,
			fit: "contain",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("icon", {
			name: icon || "compass",
			size: iconSize,
			color: "primary"
		}));
	}
	function LedgerRecentTransactionsView({ state }) {
		const desktop = DIL.useBreakpoint("sm");
		const [rowsToShow, setRowsToShow] = DIL.useState(3);
		const hidden = state.sensitive_values_hidden ?? false;
		const visible = state.transactions.slice(0, rowsToShow);
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: "100%",
			background: "surface-elevated",
			padding: 6,
			radius: "4xl",
			border: 1,
			clip: true
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			padding: { bottom: 4 }
		}, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.title)), /* @__PURE__ */ __dil.jsx("box", {
			height: 16,
			width: "100%",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: 1,
			width: "100%",
			background: "border-subtle"
		})), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, state.transactions.length === 0 && /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			padding: { y: 6 }
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
		})), /* @__PURE__ */ __dil.jsx("caption", {
			size: "md",
			color: "secondary"
		}, state.empty_state_label)), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, visible.map((transaction, index) => {
			const content = /* @__PURE__ */ __dil.jsx("box", { padding: { y: desktop ? 2 : 2.5 } }, /* @__PURE__ */ __dil.jsx("row", {
				gap: 4,
				align: "center",
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx(TransactionLogo, {
				src: transaction.logo_url,
				alt: transaction.logo_alt,
				icon: transaction.category_icon,
				size: desktop ? 32 : 40,
				iconSize: desktop ? "lg" : "xl"
			}), /* @__PURE__ */ __dil.jsx("col", {
				flex: 1,
				minWidth: 0,
				gap: 0
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: desktop ? "sm" : "md",
				weight: "normal",
				maxLines: 1
			}, transaction.display_name), /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 1,
				width: "100%",
				minWidth: 0,
				wrap: "nowrap"
			}, /* @__PURE__ */ __dil.jsx("caption", {
				size: "md",
				weight: "normal",
				color: "secondary",
				maxLines: 1
			}, transaction.date_label), /* @__PURE__ */ __dil.jsx("caption", {
				size: "md",
				weight: "normal",
				color: "secondary"
			}, state.labels.separator_dot), /* @__PURE__ */ __dil.jsx("box", {
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("caption", {
				size: "md",
				weight: "normal",
				color: "secondary",
				truncate: true,
				maxLines: 1
			}, hidden ? state.labels.masked_value : transaction.account_detail)))), /* @__PURE__ */ __dil.jsx("col", {
				align: "end",
				justify: "center",
				gap: 0,
				width: "max-content"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: desktop ? "sm" : "md",
				weight: "normal",
				textAlign: "end",
				maxLines: 1,
				color: hidden ? "primary" : transaction.amount_value > 0 ? "green-500" : "primary"
			}, hidden ? transaction.masked_amount_label : transaction.amount_label), transaction.pending && /* @__PURE__ */ __dil.jsx("caption", {
				size: "md",
				weight: "normal",
				color: "secondary",
				textAlign: "end",
				maxLines: 1
			}, transaction.pending_label))));
			return /* @__PURE__ */ __dil.jsx("col", {
				key: transaction.id,
				gap: 0
			}, transaction.detail_sidebar_enabled ? /* @__PURE__ */ __dil.jsx("pressable", {
				variant: "ghost",
				variantFeedback: true,
				hoverBackground: "surface-tertiary",
				padding: 0,
				radius: "md",
				border: 0,
				ariaLabel: transaction.detail_sidebar_aria_label,
				onClick: () => openTransactionDetail(transaction, hidden, state.labels.masked_value)
			}, content) : /* @__PURE__ */ __dil.jsx("box", {
				padding: 0,
				radius: "md"
			}, content), index < visible.length - 1 && /* @__PURE__ */ __dil.jsx("divider", null));
		})), state.transactions.length > 3 && /* @__PURE__ */ __dil.jsx("box", { padding: { top: 5 } }, /* @__PURE__ */ __dil.jsx("button", {
			variant: "soft",
			block: true,
			onClick: () => setRowsToShow(rowsToShow === 3 ? 999 : 3)
		}, rowsToShow === 3 ? state.labels.show_more : state.labels.show_less)))));
	}

