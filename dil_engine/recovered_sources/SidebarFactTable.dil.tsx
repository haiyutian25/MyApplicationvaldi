
	function SidebarFactTable(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("SidebarFactTable", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 120
		});
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			border: { top: {
				size: 1,
				color: "subtle"
			} },
			...GenUI.logEvent ? { onVisible: () => GenUI.logEvent?.({
				event_name: "sidebar_fact_table_widget_shown",
				statsig_event_name: "sidebar_fact_table_widget_shown",
				event_data: { widget_name: "sidebar_fact_table" }
			}) } : {}
		}, /* @__PURE__ */ __dil.jsx("table", { columnSizing: "equal" }, /* @__PURE__ */ __dil.jsx("table-section", null, state.facts.map((fact, index) => /* @__PURE__ */ __dil.jsx("table-row", { key: index }, /* @__PURE__ */ __dil.jsx("table-cell", null, /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "start",
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("text", { strong: true }, `${fact.key}:`), fact.entity_name != null ? /* @__PURE__ */ __dil.jsx("pressable", {
			inline: true,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_entity_detail",
				payload: fact.action_payload
			})
		}, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			underline: "dotted"
		}, fact.entity_name)) : /* @__PURE__ */ __dil.jsx("text", null, fact.plain_text))))))));
	}

