
	function ResolvedAdvice({ state }) {
		const [tab, setTab] = DIL.useState(state.tab);
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(OnboardingTabs, {
			items: [
				{
					id: "step_by_step",
					label: state.everyday_fixes_label
				},
				{
					id: "recipe",
					label: state.recipe_tab_label
				},
				{
					id: "quick_fix",
					label: state.troubleshooting_tab_label
				}
			],
			selected: tab,
			onChange: setTab,
			useCase: "how_to",
			source: "conversational_onboarding_interactive_how_to"
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: { y: 4 },
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(OnboardingQuestion, {
			label: state.ask_me_label,
			question: tab === "step_by_step" ? state.plant_question : tab === "recipe" ? state.recipe_question : state.troubleshooting_question
		}), tab === "step_by_step" && /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			justify: "start"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: "https://persistent.oaistatic.com/chatgpt/starter_prompts/input_based_examples/plant_example.png",
			alt: state.plant_image_alt,
			width: 220,
			height: 180,
			fit: "cover",
			radius: "xl",
			hideOnFailure: true
		})), tab !== "recipe" && /* @__PURE__ */ __dil.jsx("divider", null), tab === "step_by_step" ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, state.plant_answer_title), /* @__PURE__ */ __dil.jsx("text", null, state.plant_diagnosis), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.plant_care_steps.map((step, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("text", null, `${index + 1}. ${step}`))))) : tab === "recipe" ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("divider", {
			flush: true,
			color: "default",
			size: 1,
			spacing: 0
		}), /* @__PURE__ */ __dil.jsx("col", {
			padding: {
				x: 0,
				top: 4.5,
				bottom: 2.75
			},
			gap: 1.75,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			weight: "semibold"
		}, state.recipe_tab_label), /* @__PURE__ */ __dil.jsx("title", {
			size: "xl",
			weight: "semibold",
			color: "primary",
			width: "100%"
		}, state.recipe_name)), /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			padding: {
				x: 0,
				top: 2.75,
				bottom: 4
			}
		}, /* @__PURE__ */ __dil.jsx("text-only-markdown", { whiteSpace: "normal" }, state.recipe_content)), /* @__PURE__ */ __dil.jsx("divider", {
			flush: true,
			color: "default",
			size: 1,
			spacing: 0
		})) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, state.troubleshooting_title), /* @__PURE__ */ __dil.jsx("text", null, state.troubleshooting_diagnostic_question), /* @__PURE__ */ __dil.jsx("text", null, state.troubleshooting_next_step))));
	}
	function ConversationalOnboardingAdvice(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("ConversationalOnboardingAdvice", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 420
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedAdvice, { state });
	}

