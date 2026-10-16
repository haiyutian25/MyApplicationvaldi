
	function LedgerRepairBankConnectionWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerRepairBankConnectionWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 100
		});
		const openRepair = () => GenUI.dispatchAction({
			handler: "client",
			type: "open_entity_detail",
			payload: {
				category: "ledger_add_account_prompt",
				query: state.prompt,
				extraParams: {
					card_id: state.id,
					title: state.title,
					system_hint: state.system_hint,
					ledger_link_id: state.ledger_link_id
				}
			}
		});
		if (state.cta_label && state.ledger_link_id) return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			background: "surface-secondary"
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			width: "100%",
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("title", { size: "sm" }, state.title), /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, state.description)), /* @__PURE__ */ __dil.jsx("button", {
			loading: state.ledger_repair_initializing === true,
			color: "info",
			size: "lg",
			onClick: openRepair
		}, state.cta_label)));
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			background: "surface-elevated"
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "stretch"
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 40,
			background: "orange-500",
			radius: "xl",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "warning",
			color: "white",
			size: "xl"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("row", { align: "center" }, /* @__PURE__ */ __dil.jsx("title", { size: "sm" }, state.title)), /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, state.description))));
	}

