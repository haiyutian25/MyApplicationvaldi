
	function MultipleChoiceView({ state }) {
		const [selection, setSelection] = DIL.useState({
			value: state.selected_value,
			status: state.feedback_status,
			open: state.feedback_open,
			hint: state.hint_text,
			error: state.error_message
		});
		DIL.useEffect(() => {
			setSelection({
				value: state.selected_value,
				status: state.feedback_status,
				open: state.feedback_open,
				hint: state.hint_text,
				error: state.error_message
			});
		}, [
			state.selected_value,
			state.feedback_status,
			state.feedback_open,
			state.hint_text,
			state.error_message
		]);
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, state.options.map((option) => {
			const selected = selection.value === option.value;
			const status = selected ? selection.status : void 0;
			const color = status === "correct" ? "success" : status === "incorrect" ? "danger" : "primary";
			return /* @__PURE__ */ __dil.jsx("pressable", {
				key: option.value,
				width: "100%",
				padding: {
					x: 3,
					y: 2
				},
				radius: "lg",
				ariaLabel: option.label,
				background: status === "correct" ? {
					light: "green-50",
					dark: "green-a75"
				} : status === "incorrect" ? {
					light: "red-a50",
					dark: "red-a75"
				} : selected ? {
					light: "rgba(0,0,0,0.04)",
					dark: "rgba(255,255,255,0.06)"
				} : "transparent",
				border: {
					size: 1,
					color: status === "correct" ? {
						light: "green-a50",
						dark: "green-a75"
					} : status === "incorrect" ? {
						light: "red-a50",
						dark: "red-a75"
					} : {
						light: "rgba(0,0,0,0.06)",
						dark: "rgba(255,255,255,0.08)"
					}
				},
				onClick: () => {
					if (state.correct_value) {
						setSelection({
							value: option.value,
							status: state.correct_value === option.value ? "correct" : "incorrect",
							open: state.correct_value !== option.value,
							hint: "",
							error: ""
						});
						GenUI.dispatchAction({
							handler: "server",
							type: "multiple_choice_block_v2_check",
							payload: {
								selected_value: option.value,
								selected_label: option.label
							}
						});
					} else GenUI.dispatchAction({
						handler: "client",
						type: "issue_new_turn",
						payload: { query: option.submission_query }
					});
				}
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				justify: "between",
				gap: 2,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("col", {
				flex: 1,
				gap: 0
			}, /* @__PURE__ */ __dil.jsx("text", {
				textAlign: "start",
				size: "sm"
			}, option.label)), selected && status && /* @__PURE__ */ __dil.jsx("box", {
				size: 24,
				radius: "full",
				align: "center",
				justify: "center",
				background: status === "correct" ? "success-surface" : "danger-surface"
			}, /* @__PURE__ */ __dil.jsx("icon", {
				name: status === "correct" ? "check-lg" : "close-bold",
				size: "md",
				color
			}))), selected && selection.open && (selection.error ? /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "danger"
			}, selection.error) : selection.hint ? /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, selection.hint) : null)));
		})));
	}
	function MultipleChoiceBlockV2(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("MultipleChoiceBlockV2", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		return /* @__PURE__ */ __dil.jsx(MultipleChoiceView, { state });
	}

