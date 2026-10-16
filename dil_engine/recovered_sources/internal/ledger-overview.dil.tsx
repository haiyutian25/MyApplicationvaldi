
	function LedgerConversionNote({ state }) {
		const note = state.currency_conversion?.currency_conversion_note;
		return note ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, note) : null;
	}



/* ---- merged ---- */

	function LedgerAvatar({ item, size = 32 }) {
		return item.logo_url ? /* @__PURE__ */ __dil.jsx("box", {
			size,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: item.logo_url,
			width: size,
			height: size,
			fit: "contain",
			hideOnFailure: true
		})) : /* @__PURE__ */ __dil.jsx("box", {
			size,
			radius: "full",
			background: "alpha-10",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: item.icon ?? "compass",
			size: size > 32 ? "xl" : "lg"
		}));
	}
	function LedgerEmpty({ label, icon = "calendar" }) {
		return /* @__PURE__ */ __dil.jsx("row", {
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
			name: icon,
			size: "lg",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, label));
	}



/* ---- merged ---- */

	function LedgerAvatar({ item, size = 32 }) {
		return item.logo_url ? /* @__PURE__ */ __dil.jsx("box", {
			size,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: item.logo_url,
			width: size,
			height: size,
			fit: "contain",
			hideOnFailure: true
		})) : /* @__PURE__ */ __dil.jsx("box", {
			size,
			radius: "full",
			background: "alpha-10",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: item.icon ?? "compass",
			size: size > 32 ? "xl" : "lg"
		}));
	}
	function LedgerEmpty({ label, icon = "calendar" }) {
		return /* @__PURE__ */ __dil.jsx("row", {
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
			name: icon,
			size: "lg",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, label));
	}



/* ---- merged ---- */

	function LedgerConversionNote({ state }) {
		const note = state.currency_conversion?.currency_conversion_note;
		return note ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, note) : null;
	}



/* ---- merged ---- */

	function LedgerAvatar({ item, size = 32 }) {
		return item.logo_url ? /* @__PURE__ */ __dil.jsx("box", {
			size,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: item.logo_url,
			width: size,
			height: size,
			fit: "contain",
			hideOnFailure: true
		})) : /* @__PURE__ */ __dil.jsx("box", {
			size,
			radius: "full",
			background: "alpha-10",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: item.icon ?? "compass",
			size: size > 32 ? "xl" : "lg"
		}));
	}
	function LedgerEmpty({ label, icon = "calendar" }) {
		return /* @__PURE__ */ __dil.jsx("row", {
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
			name: icon,
			size: "lg",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, label));
	}
	function LedgerConversionNote({ state }) {
		const note = state.currency_conversion?.currency_conversion_note;
		return note ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, note) : null;
	}
	function LedgerActivityRow({ item, state, mode, activeView, title }) {
		const wide = DIL.useBreakpoint("sm");
		const hidden = state.sensitive_values_hidden ?? false;
		const amountIsUnknown = mode === "upcoming" && item.amount_is_unknown === true;
		const metadata = mode === "recurring" ? item.frequency : item.next_payment;
		const body = /* @__PURE__ */ __dil.jsx("row", {
			gap: 4,
			align: "center",
			width: "100%",
			padding: { y: wide ? 2 : 2.5 }
		}, /* @__PURE__ */ __dil.jsx(LedgerAvatar, {
			item,
			size: wide ? 32 : 40
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			maxLines: 1,
			size: wide ? "sm" : "md"
		}, item.name ?? ""), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			minWidth: 0,
			width: "100%",
			wrap: "nowrap"
		}, metadata ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 1,
			truncate: true
		}, metadata) : null, metadata && item.account_detail ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.separator_dot) : null, item.account_detail ? /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 1,
			truncate: true
		}, item.account_detail)) : null)), /* @__PURE__ */ __dil.jsx("text", {
			textAlign: "end",
			size: wide ? "sm" : "md",
			maxLines: 1
		}, hidden && !amountIsUnknown && item.amount != null ? state.labels.masked_value : item.amount ?? ""));
		if (!item.detail_sidebar_enabled) return body;
		return /* @__PURE__ */ __dil.jsx("pressable", {
			variant: "ghost",
			variantFeedback: true,
			hoverBackground: "surface-tertiary",
			padding: 0,
			radius: "md",
			ariaLabel: `View details for ${item.name ?? title}`,
			onClick: () => {
				const name = item.name ?? title;
				GenUI.dispatchAction({
					handler: "client",
					type: "open_entity_detail",
					payload: {
						category: "ledger_detail_sidebar",
						query: `${name} ${mode === "recurring" ? "recurring" : "upcoming"} activity`,
						...mode === "upcoming" ? { clientParams: { entitySidebarPresentation: {
							titlePlacement: "content",
							leadingBarBorder: "hidden"
						} } } : {},
						extraParams: {
							detail_type: mode === "recurring" ? "recurring_transaction" : "upcoming_activity",
							displayTitle: name,
							activity_name: name,
							disableFollowUpButton: true,
							disableFooterActions: true,
							flow_scope: mode === "recurring" ? item.flow_type === "inflow" ? "incoming" : "outgoing" : activeView,
							recurring_transaction_id: item.id,
							next_payment: item.next_payment ?? "",
							predicted_next_date: item.predicted_next_date ?? "",
							monetary_value_references_enabled: state.monetary_value_references_enabled ?? false,
							amount_is_unknown: amountIsUnknown,
							amount_label: amountIsUnknown || state.monetary_value_references_enabled || !hidden ? mode === "recurring" ? item.occurrence_amount ?? item.amount ?? "" : item.amount ?? "" : state.labels.masked_value,
							account_name: item.account_detail_expanded || item.account_detail || "",
							frequency: item.frequency ?? "",
							transaction_ids: item.transaction_ids ?? [],
							sensitive_values_hidden: hidden
						}
					}
				});
			}
		}, body);
	}



/* ---- merged ---- */

	function LedgerConversionNote({ state }) {
		const note = state.currency_conversion?.currency_conversion_note;
		return note ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, note) : null;
	}



/* ---- merged ---- */

	function LedgerAvatar({ item, size = 32 }) {
		return item.logo_url ? /* @__PURE__ */ __dil.jsx("box", {
			size,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: item.logo_url,
			width: size,
			height: size,
			fit: "contain",
			hideOnFailure: true
		})) : /* @__PURE__ */ __dil.jsx("box", {
			size,
			radius: "full",
			background: "alpha-10",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: item.icon ?? "compass",
			size: size > 32 ? "xl" : "lg"
		}));
	}
	function LedgerEmpty({ label, icon = "calendar" }) {
		return /* @__PURE__ */ __dil.jsx("row", {
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
			name: icon,
			size: "lg",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, label));
	}
	function LedgerActivityRow({ item, state, mode, activeView, title }) {
		const wide = DIL.useBreakpoint("sm");
		const hidden = state.sensitive_values_hidden ?? false;
		const amountIsUnknown = mode === "upcoming" && item.amount_is_unknown === true;
		const metadata = mode === "recurring" ? item.frequency : item.next_payment;
		const body = /* @__PURE__ */ __dil.jsx("row", {
			gap: 4,
			align: "center",
			width: "100%",
			padding: { y: wide ? 2 : 2.5 }
		}, /* @__PURE__ */ __dil.jsx(LedgerAvatar, {
			item,
			size: wide ? 32 : 40
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			maxLines: 1,
			size: wide ? "sm" : "md"
		}, item.name ?? ""), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			minWidth: 0,
			width: "100%",
			wrap: "nowrap"
		}, metadata ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 1,
			truncate: true
		}, metadata) : null, metadata && item.account_detail ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.separator_dot) : null, item.account_detail ? /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 1,
			truncate: true
		}, item.account_detail)) : null)), /* @__PURE__ */ __dil.jsx("text", {
			textAlign: "end",
			size: wide ? "sm" : "md",
			maxLines: 1
		}, hidden && !amountIsUnknown && item.amount != null ? state.labels.masked_value : item.amount ?? ""));
		if (!item.detail_sidebar_enabled) return body;
		return /* @__PURE__ */ __dil.jsx("pressable", {
			variant: "ghost",
			variantFeedback: true,
			hoverBackground: "surface-tertiary",
			padding: 0,
			radius: "md",
			ariaLabel: `View details for ${item.name ?? title}`,
			onClick: () => {
				const name = item.name ?? title;
				GenUI.dispatchAction({
					handler: "client",
					type: "open_entity_detail",
					payload: {
						category: "ledger_detail_sidebar",
						query: `${name} ${mode === "recurring" ? "recurring" : "upcoming"} activity`,
						...mode === "upcoming" ? { clientParams: { entitySidebarPresentation: {
							titlePlacement: "content",
							leadingBarBorder: "hidden"
						} } } : {},
						extraParams: {
							detail_type: mode === "recurring" ? "recurring_transaction" : "upcoming_activity",
							displayTitle: name,
							activity_name: name,
							disableFollowUpButton: true,
							disableFooterActions: true,
							flow_scope: mode === "recurring" ? item.flow_type === "inflow" ? "incoming" : "outgoing" : activeView,
							recurring_transaction_id: item.id,
							next_payment: item.next_payment ?? "",
							predicted_next_date: item.predicted_next_date ?? "",
							monetary_value_references_enabled: state.monetary_value_references_enabled ?? false,
							amount_is_unknown: amountIsUnknown,
							amount_label: amountIsUnknown || state.monetary_value_references_enabled || !hidden ? mode === "recurring" ? item.occurrence_amount ?? item.amount ?? "" : item.amount ?? "" : state.labels.masked_value,
							account_name: item.account_detail_expanded || item.account_detail || "",
							frequency: item.frequency ?? "",
							transaction_ids: item.transaction_ids ?? [],
							sensitive_values_hidden: hidden
						}
					}
				});
			}
		}, body);
	}

