
	function ResolvedCorrection({ state }) {
		const desktop = DIL.useBreakpoint("sm");
		const hidden = state.sensitive_values_hidden === true;
		const [rowsToShow, setRowsToShow] = DIL.useState(3);
		const [categories, setCategories] = DIL.useState(state.transactions.map((transaction) => transaction.draft_primary_category_id));
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
			name: "compass",
			size: "lg",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("caption", {
			size: "md",
			color: "secondary"
		}, state.empty_state_label)), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, visible.map((transaction, index) => {
			const details = /* @__PURE__ */ __dil.jsx("row", {
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
			}, transaction.display_name)), /* @__PURE__ */ __dil.jsx("col", {
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
			}, hidden ? transaction.masked_amount_label : transaction.amount_label)));
			return /* @__PURE__ */ __dil.jsx("col", {
				key: transaction.id,
				gap: 0
			}, /* @__PURE__ */ __dil.jsx("box", { padding: index === visible.length - 1 ? { top: desktop ? .5 : 1 } : { y: desktop ? .5 : 1 } }, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, transaction.detail_sidebar_enabled ? /* @__PURE__ */ __dil.jsx("pressable", {
				variant: "ghost",
				variantFeedback: true,
				hoverBackground: "surface-tertiary",
				padding: 0,
				radius: "md",
				border: 0,
				ariaLabel: transaction.detail_sidebar_aria_label,
				onClick: () => openTransactionDetail(transaction, hidden, state.labels.masked_value)
			}, details) : /* @__PURE__ */ __dil.jsx("box", {
				padding: 0,
				radius: "md"
			}, details), /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				padding: { left: desktop ? 12 : 14 },
				width: "max-content"
			}, /* @__PURE__ */ __dil.jsx("select", {
				name: "category_review_category",
				options: state.category_options,
				value: categories[index],
				onChange: (value) => setCategories(categories.map((category, categoryIndex) => categoryIndex === index ? value : category)),
				variant: "ghost",
				size: "sm",
				searchable: false,
				align: "start"
			})))), index < visible.length - 1 && /* @__PURE__ */ __dil.jsx("divider", null));
		})), state.transactions.length > 0 && /* @__PURE__ */ __dil.jsx("box", { padding: { top: 3.5 } }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3,
			width: "100%"
		}, state.transactions.length > 3 && /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("button", {
			variant: "soft",
			block: true,
			onClick: () => setRowsToShow(rowsToShow === 3 ? 999 : 3)
		}, rowsToShow === 3 ? state.labels.show_more : state.labels.show_less)), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("button", {
			variant: "solid",
			block: true,
			onClick: () => GenUI.dispatchAction({
				handler: "server",
				type: "ledger_category_review_save",
				payload: { corrections: state.transactions.map((transaction, index) => ({
					transaction_id: transaction.id,
					target_primary_category: categories[index]
				})) }
			})
		}, state.labels.save)))))));
	}
	function LedgerLowConfidenceCategoryCorrection(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerLowConfidenceCategoryCorrection", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 320
		});
		if (state.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: state.labels });
		return /* @__PURE__ */ __dil.jsx(ResolvedCorrection, { state });
	}



/* ---- merged ---- */

	function ResolvedCorrection({ state }) {
		const desktop = DIL.useBreakpoint("sm");
		const hidden = state.sensitive_values_hidden === true;
		const [rowsToShow, setRowsToShow] = DIL.useState(3);
		const [categories, setCategories] = DIL.useState(state.transactions.map((transaction) => transaction.draft_primary_category_id));
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
			name: "compass",
			size: "lg",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("caption", {
			size: "md",
			color: "secondary"
		}, state.empty_state_label)), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, visible.map((transaction, index) => {
			const details = /* @__PURE__ */ __dil.jsx("row", {
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
			}, transaction.display_name)), /* @__PURE__ */ __dil.jsx("col", {
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
			}, hidden ? transaction.masked_amount_label : transaction.amount_label)));
			return /* @__PURE__ */ __dil.jsx("col", {
				key: transaction.id,
				gap: 0
			}, /* @__PURE__ */ __dil.jsx("box", { padding: index === visible.length - 1 ? { top: desktop ? .5 : 1 } : { y: desktop ? .5 : 1 } }, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, transaction.detail_sidebar_enabled ? /* @__PURE__ */ __dil.jsx("pressable", {
				variant: "ghost",
				variantFeedback: true,
				hoverBackground: "surface-tertiary",
				padding: 0,
				radius: "md",
				border: 0,
				ariaLabel: transaction.detail_sidebar_aria_label,
				onClick: () => openTransactionDetail(transaction, hidden, state.labels.masked_value)
			}, details) : /* @__PURE__ */ __dil.jsx("box", {
				padding: 0,
				radius: "md"
			}, details), /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				padding: { left: desktop ? 12 : 14 },
				width: "max-content"
			}, /* @__PURE__ */ __dil.jsx("select", {
				name: "category_review_category",
				options: state.category_options,
				value: categories[index],
				onChange: (value) => setCategories(categories.map((category, categoryIndex) => categoryIndex === index ? value : category)),
				variant: "ghost",
				size: "sm",
				searchable: false,
				align: "start"
			})))), index < visible.length - 1 && /* @__PURE__ */ __dil.jsx("divider", null));
		})), state.transactions.length > 0 && /* @__PURE__ */ __dil.jsx("box", { padding: { top: 3.5 } }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3,
			width: "100%"
		}, state.transactions.length > 3 && /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("button", {
			variant: "soft",
			block: true,
			onClick: () => setRowsToShow(rowsToShow === 3 ? 999 : 3)
		}, rowsToShow === 3 ? state.labels.show_more : state.labels.show_less)), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("button", {
			variant: "solid",
			block: true,
			onClick: () => GenUI.dispatchAction({
				handler: "server",
				type: "ledger_category_review_save",
				payload: { corrections: state.transactions.map((transaction, index) => ({
					transaction_id: transaction.id,
					target_primary_category: categories[index]
				})) }
			})
		}, state.labels.save)))))));
	}
	function LedgerLowConfidenceCategoryCorrection(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerLowConfidenceCategoryCorrection", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 320
		});
		if (state.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: state.labels });
		return /* @__PURE__ */ __dil.jsx(ResolvedCorrection, { state });
	}

