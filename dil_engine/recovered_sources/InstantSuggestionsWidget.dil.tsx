
	function InstantSuggestionsWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("InstantSuggestionsWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 160
		});
		if (!state.suggestions.length) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			direction: "col",
			width: "40rem",
			maxWidth: "100%",
			gap: 0,
			...GenUI.logEvent ? { onVisible: () => GenUI.logEvent?.({
				event_name: "instant_suggestions_widget_shown",
				statsig_event_name: "instant_suggestions_widget_shown",
				event_data: {
					category: state.category,
					widget_name: "instant_suggestions"
				}
			}) } : {}
		}, /* @__PURE__ */ __dil.jsx("box", { padding: {
			top: 4,
			x: 0,
			bottom: 1
		} }, /* @__PURE__ */ __dil.jsx("title", { size: "sm" }, state.title)), /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", null, state.suggestions.map((suggestion) => /* @__PURE__ */ __dil.jsx("table-row", { key: suggestion.prompt_text }, /* @__PURE__ */ __dil.jsx("table-cell", { padding: { y: 2 } }, /* @__PURE__ */ __dil.jsx("box", { minHeight: 22 }, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			padding: 0,
			onClick: () => {
				const hint = suggestion.message_metadata?.instant_answer_hint;
				GenUI.issueNewTurn(suggestion.prompt_text, {
					followup_metadata: typeof hint?.answer_id === "string" && typeof hint.referenced_canonical_entity_id === "string" ? { instant_answer_hint: {
						answer_id: hint.answer_id,
						referenced_canonical_entity_id: hint.referenced_canonical_entity_id
					} } : void 0,
					event_name: "chatgpt_widget_action",
					statsig_event_name: "instant_suggestions_widget_clicked",
					event_data: {
						category: state.category,
						widget_name: "instant_suggestions",
						widget_affordance: "OPTION",
						widget_action_target: "follow_up",
						widget_action_value: suggestion.prompt_text,
						surface_location: "SIDEBAR",
						content_reference_type: "instant_suggestions_widget"
					}
				});
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minWidth: 0,
			align: "start",
			gap: 2,
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 20,
			minWidth: 20,
			padding: { top: .5 }
		}, /* @__PURE__ */ __dil.jsx("icon", { name: "arrow-curved" })), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "lg",
			underline: "dotted"
		}, suggestion.prompt_text)))))))))));
	}

