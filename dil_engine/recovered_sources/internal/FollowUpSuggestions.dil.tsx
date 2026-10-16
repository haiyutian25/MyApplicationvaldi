
	function FollowUpLinkLabel({ label }) {
		return /* @__PURE__ */ __dil.jsx("text", { inline: true }, /* @__PURE__ */ __dil.jsx("icon", {
			inline: true,
			name: "arrow-curved",
			color: "primary"
		}), /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "md",
			color: "primary",
			underline: "dotted"
		}, " " + label));
	}



/* ---- merged ---- */

	function issueSuggestionTurn(action, contentReferenceType) {
		GenUI.issueNewTurn(action.query, {
			prompt: action.query,
			append_to_current_leaf: true,
			event_name: "chatgpt_widget_action",
			event_data: {
				widget_affordance: "OPTION",
				widget_action_target: "follow_up",
				widget_action_value: action.id,
				surface_location: "RESPONSE",
				content_reference_type: contentReferenceType
			},
			followup_metadata: action.source != null ? {
				followups_v2_followup_clicked: true,
				followups_v2_followup_source: action.source
			} : void 0
		});
	}



/* ---- merged ---- */

	function issueSuggestionTurn(action, contentReferenceType) {
		GenUI.issueNewTurn(action.query, {
			prompt: action.query,
			append_to_current_leaf: true,
			event_name: "chatgpt_widget_action",
			event_data: {
				widget_affordance: "OPTION",
				widget_action_target: "follow_up",
				widget_action_value: action.id,
				surface_location: "RESPONSE",
				content_reference_type: contentReferenceType
			},
			followup_metadata: action.source != null ? {
				followups_v2_followup_clicked: true,
				followups_v2_followup_source: action.source
			} : void 0
		});
	}



/* ---- merged ---- */

	function issueSuggestionTurn(action, contentReferenceType) {
		GenUI.issueNewTurn(action.query, {
			prompt: action.query,
			append_to_current_leaf: true,
			event_name: "chatgpt_widget_action",
			event_data: {
				widget_affordance: "OPTION",
				widget_action_target: "follow_up",
				widget_action_value: action.id,
				surface_location: "RESPONSE",
				content_reference_type: contentReferenceType
			},
			followup_metadata: action.source != null ? {
				followups_v2_followup_clicked: true,
				followups_v2_followup_source: action.source
			} : void 0
		});
	}
	function FollowUpLinkLabel({ label }) {
		return /* @__PURE__ */ __dil.jsx("text", { inline: true }, /* @__PURE__ */ __dil.jsx("icon", {
			inline: true,
			name: "arrow-curved",
			color: "primary"
		}), /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "md",
			color: "primary",
			underline: "dotted"
		}, " " + label));
	}



/* ---- merged ---- */

	function issueSuggestionTurn(action, contentReferenceType) {
		GenUI.issueNewTurn(action.query, {
			prompt: action.query,
			append_to_current_leaf: true,
			event_name: "chatgpt_widget_action",
			event_data: {
				widget_affordance: "OPTION",
				widget_action_target: "follow_up",
				widget_action_value: action.id,
				surface_location: "RESPONSE",
				content_reference_type: contentReferenceType
			},
			followup_metadata: action.source != null ? {
				followups_v2_followup_clicked: true,
				followups_v2_followup_source: action.source
			} : void 0
		});
	}

