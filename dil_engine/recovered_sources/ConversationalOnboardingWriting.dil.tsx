
	function ResolvedWriting({ state }) {
		const [tab, setTab] = DIL.useState(state.tab);
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(OnboardingTabs, {
			items: [
				{
					id: "translation",
					label: state.translation_tab_label
				},
				{
					id: "professional_email",
					label: state.email_tab_label
				},
				{
					id: "birthday_message",
					label: state.message_tab_label
				}
			],
			selected: tab,
			onChange: setTab,
			useCase: "write",
			source: "conversational_onboarding_interactive_write"
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: { y: 2 },
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(OnboardingQuestion, {
			label: state.ask_me_label,
			gap: 0,
			question: tab === "translation" ? state.translation_question : tab === "professional_email" ? state.email_question : state.message_question
		}), /* @__PURE__ */ __dil.jsx("divider", null), tab === "translation" ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			preserveWhitespace: true
		}, state.translation.source_text), /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			preserveWhitespace: true
		}, state.translation.translated_text)) : tab === "professional_email" ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "semibold"
		}, state.email.subject), /* @__PURE__ */ __dil.jsx(TextOnlyMarkdown, null, state.email.content)) : /* @__PURE__ */ __dil.jsx(TextOnlyMarkdown, null, state.message.content)));
	}
	function ConversationalOnboardingWriting(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("ConversationalOnboardingWriting", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 220
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedWriting, { state });
	}

