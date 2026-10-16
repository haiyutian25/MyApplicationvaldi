
	function FollowUpQuiz(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("FollowUpQuiz", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 160
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedFollowUpQuiz, { state });
	}
	function QuizAnswer({ label, checked, disabled, onChange }) {
		return /* @__PURE__ */ __dil.jsx("checkbox", {
			label,
			shape: "square",
			lineThrough: false,
			checked,
			disabled,
			onChange
		});
	}
	function ResolvedFollowUpQuiz({ state }) {
		const [currentIndex, setCurrentIndex] = DIL.useState(state.current_index ?? 0);
		const [answers, setAnswers] = DIL.useState(state.answers ?? []);
		const currentQuestion = state.questions[currentIndex];
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, state.title !== "" ? /* @__PURE__ */ __dil.jsx("caption", {
			size: "lg",
			color: "secondary"
		}, state.title) : null, state.questions.length > 0 ? /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, currentQuestion ? /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, currentQuestion.answers.map((answer, index) => /* @__PURE__ */ __dil.jsx(QuizAnswer, {
			key: index,
			label: answer,
			checked: answers.some((saved) => saved.index === currentIndex && saved.answer === answer),
			disabled: answers.some((saved) => saved.index === currentIndex),
			onChange: (checked) => {
				if (checked) {
					setAnswers([...answers, {
						index: currentIndex,
						question: currentQuestion.question,
						answer
					}]);
					setCurrentIndex(currentIndex + 1);
				}
			}
		}))) : null, /* @__PURE__ */ __dil.jsx("row", {
			justify: "between",
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("button", {
			size: "sm",
			color: "secondary",
			disabled: currentIndex >= state.questions.length,
			onClick: () => {
				if (currentIndex < state.questions.length) setCurrentIndex(currentIndex + 1);
			}
		}, "Skip"), /* @__PURE__ */ __dil.jsx("button", {
			size: "sm",
			color: "primary",
			disabled: answers.length === 0,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "issue_new_turn",
				payload: { query: state.submit_query_prefix + "\n" + answers.map((answer) => "- " + answer.question + ": " + answer.answer).join("\n") }
			})
		}, state.submit_label))) : /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, "No follow-up questions available.")));
	}

