
	function LearningQuiz(props) {
		const componentKey = DIL.useAppData((appData$1) => typeof props.__resolutionId === "string" && appData$1.opGenui?.componentResults?.[props.__resolutionId] != null ? props.__resolutionId : componentDataKey("LearningQuiz", props));
		const canShare = DIL.useAppData((appData$1) => appData$1.opGenui?.supportedClientActions?.includes("share") === true);
		const { state, resolutionComplete } = useResolvedComponentResult("LearningQuiz", props.__resolutionId ? {
			...props,
			__state: void 0
		} : props);
		const appData = DIL.useAppData();
		const isShared = appData.opGenui?.isShared === true;
		const isDesktop = DIL.useBreakpoint("sm");
		if (!state) {
			if (resolutionComplete) return props.fallback ?? null;
			return /* @__PURE__ */ __dil.jsx(QuizFrame, { isDesktop }, /* @__PURE__ */ __dil.jsx(QuizLoading, null));
		}
		const supportedQuestions = state.questions.every((question) => [
			"single_select",
			"multi_select",
			"true_false"
		].includes(question.question_type));
		return /* @__PURE__ */ __dil.jsx(ResolvedLearningQuiz, {
			componentKey,
			state: {
				...state,
				phase: supportedQuestions ? state.phase : "error",
				share_button_variant: canShare ? state.share_button_variant : "none",
				next_quiz_query: isShared ? void 0 : state.next_quiz_query
			},
			allowLocalAnswers: isShared && supportedQuestions,
			actionsReady: supportedQuestions && appData.opGenui?.nativeServerActions?.ready === true
		});
	}

