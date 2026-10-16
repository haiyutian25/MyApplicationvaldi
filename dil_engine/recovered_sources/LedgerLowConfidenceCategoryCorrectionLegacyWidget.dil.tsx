
	function ResolvedCorrection({ state }) {
		const [rowsToShow, setRowsToShow] = DIL.useState(3);
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			background: "surface-elevated",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: {
				x: 6,
				top: 5,
				bottom: 4
			}
		}, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.title)), /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: {
				x: 6,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: {
				x: 6,
				bottom: 5
			}
		}, state.transactions.length === 0 && /* @__PURE__ */ __dil.jsx("row", {
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
		}, state.empty_state_label)), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.transactions.slice(0, rowsToShow).map((transaction, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: transaction.id,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			variant: "ghost",
			variantFeedback: true,
			hoverBackground: "surface-tertiary",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_entity_detail",
				payload: {
					category: "ledger_category_correction_prompt",
					query: transaction.category_correction_prompt,
					extraParams: {
						card_id: "ledger-low-confidence-category-correction",
						title: state.title,
						transaction_ids: [transaction.id],
						system_hint: "connector:connector_693864f100e4819093e6ed9b651239f1"
					}
				}
			})
		}, /* @__PURE__ */ __dil.jsx("box", { padding: { y: 3 } }, /* @__PURE__ */ __dil.jsx("row", {
			gap: 4,
			align: "center",
			width: "100%"
		}, transaction.logo_url ? /* @__PURE__ */ __dil.jsx("box", {
			size: 40,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: transaction.logo_url,
			alt: transaction.logo_alt,
			width: 40,
			height: 40,
			fit: "contain",
			hideOnFailure: true
		})) : /* @__PURE__ */ __dil.jsx("box", {
			size: 40,
			background: "alpha-10",
			radius: "full",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: transaction.category_icon || "compass",
			size: "lg",
			color: "primary"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: .5
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "normal",
			maxLines: 1
		}, transaction.display_name), /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			width: "100%",
			minWidth: 0,
			wrap: "nowrap",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("caption", {
			size: "md",
			weight: "normal",
			color: "secondary",
			maxLines: 1
		}, transaction.date_label), /* @__PURE__ */ __dil.jsx("caption", {
			size: "md",
			weight: "normal",
			color: "secondary"
		}, "
"), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("caption", {
			size: "md",
			weight: "normal",
			color: state.sensitive_values_hidden ? "primary" : transaction.amount_value > 0 ? "green-500" : "primary",
			truncate: true,
			maxLines: 1
		}, state.sensitive_values_hidden ? transaction.masked_amount_label : transaction.amount_label)))), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "normal",
			textAlign: "end",
			maxLines: 1,
			truncate: true
		}, transaction.category_label)))), index !== rowsToShow - 1 && index !== state.transactions.length - 1 && /* @__PURE__ */ __dil.jsx("divider", null)))), state.transactions.length > 3 && /* @__PURE__ */ __dil.jsx("box", { padding: { top: 5 } }, /* @__PURE__ */ __dil.jsx("button", {
			variant: "soft",
			block: true,
			onClick: () => setRowsToShow(rowsToShow === 3 ? 999 : 3)
		}, rowsToShow === 3 ? state.labels.show_more : state.labels.show_less)))));
	}
	function LedgerLowConfidenceCategoryCorrectionLegacyWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerLowConfidenceCategoryCorrectionLegacyWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 290
		});
		if (state.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: state.labels });
		return /* @__PURE__ */ __dil.jsx(ResolvedCorrection, { state });
	}

