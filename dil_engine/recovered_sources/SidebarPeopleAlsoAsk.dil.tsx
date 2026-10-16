
	function SidebarPeopleAlsoAsk(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("SidebarPeopleAlsoAsk", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 160
		});
		if (state.suggestions.length === 0) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "40rem",
			maxWidth: "100%",
			gap: 2.5,
			...GenUI.logEvent ? { onVisible: () => GenUI.logEvent?.({
				event_name: "sidebar_people_also_ask_shown",
				statsig_event_name: "sidebar_people_also_ask_shown",
				event_data: {
					category: state.category,
					widget_name: "sidebar_people_also_ask"
				}
			}) } : {}
		}, /* @__PURE__ */ __dil.jsx("box", { width: "100%" }, /* @__PURE__ */ __dil.jsx("table", { dividers: false }, /* @__PURE__ */ __dil.jsx("table-section", { rowDivider: 0 }, state.suggestions.map((suggestion, index) => /* @__PURE__ */ __dil.jsx("table-row", { key: suggestion.prompt_text }, /* @__PURE__ */ __dil.jsx("table-cell", { padding: index === 0 ? {
			top: 0,
			bottom: 1
		} : { y: 1 } }, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			padding: 0,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_entity_detail",
				payload: {
					query: suggestion.prompt_text,
					category: "entity_sidebar_follow_up",
					extraParams: {
						context: state.follow_up_context,
						entity_name: state.entity_name,
						entity_category: state.category
					},
					event_name: "sidebar_people_also_ask_clicked",
					statsig_event_name: "sidebar_people_also_ask_clicked",
					event_data: {
						category: state.category,
						widget_name: "sidebar_people_also_ask",
						widget_affordance: "OPTION",
						widget_action_target: "follow_up",
						widget_action_value: suggestion.prompt_text,
						surface_location: "SIDEBAR",
						content_reference_type: "sidebar_people_also_ask"
					}
				}
			})
		}, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "lg"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			inline: true,
			name: "arrow-curved"
		}), " ", /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			underline: "dotted"
		}, suggestion.prompt_text_first_word), /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			underline: "dotted"
		}, suggestion.prompt_text_after_first_word === "" ? "" : ` ${suggestion.prompt_text_after_first_word}`))))))))));
	}

