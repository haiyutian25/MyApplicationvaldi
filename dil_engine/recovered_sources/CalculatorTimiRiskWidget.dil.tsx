
	function TimiCriterionRow({ criterion, value, onChange }) {
		const selectedHelp = criterion.options.find((option) => option.value === value && option.help)?.help;
		return /* @__PURE__ */ __dil.jsx("box", {
			padding: {
				x: 3,
				y: 3
			},
			radius: "xl",
			background: "surface-secondary",
			border: {
				size: 1,
				color: "subtle"
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3,
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1.5,
			flex: 1,
			minWidth: 220
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, criterion.label), criterion.help && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			preserveWhitespace: true
		}, criterion.help)), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1.5,
			flex: 1,
			minWidth: 260
		}, /* @__PURE__ */ __dil.jsx("box", { padding: { x: 2 } }, criterion.control === "checkbox" ? /* @__PURE__ */ __dil.jsx("segmented-control", {
			label: criterion.label,
			options: [{
				value: "false",
				label: "No 0"
			}, {
				value: "true",
				label: `Yes +${criterion.points}`
			}],
			value: value ? "true" : "false",
			onChange: (nextValue) => onChange(nextValue === "true"),
			block: true,
			size: "md"
		}) : /* @__PURE__ */ __dil.jsx("segmented-control", {
			label: criterion.label,
			options: criterion.options.map((option) => ({
				value: option.value,
				label: option.label
			})),
			value,
			onChange,
			block: true,
			size: "md"
		})), selectedHelp && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			preserveWhitespace: true
		}, selectedHelp))));
	}
	function ResolvedTimiRisk({ state }) {
		const [mode, setMode] = DIL.useState(state.mode);
		const [infoTab, setInfoTab] = DIL.useState(state.info_tab);
		const [values, setValues] = DIL.useState(state.values);
		const activeMode = state.modes[mode];
		const score = activeMode.criteria.reduce((total, criterion) => {
			const value = values[criterion.key];
			return total + (criterion.control === "checkbox" ? value ? criterion.points : 0 : criterion.options.find((option) => option.value === value).points);
		}, 0);
		const risk = activeMode.risk_rows.find((row) => score >= row.min_score && score <= row.max_score);
		const summary = `${activeMode.summary_prefix}: score = ${score}; ${activeMode.risk_heading} = ${risk.exact_risk}`;
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 0,
			background: "surface-primary"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("col", {
			padding: {
				x: 5,
				y: 4
			},
			background: {
				light: "blue-50",
				dark: "blue-400"
			},
			gap: 2.5
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 36,
			height: 4,
			radius: "full",
			background: {
				light: "blue-400",
				dark: "blue-50"
			}
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, "Clinical risk calculator")), /* @__PURE__ */ __dil.jsx("title", {
			size: "xl",
			weight: "medium",
			color: "black"
		}, activeMode.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			preserveWhitespace: true
		}, activeMode.subtitle)), /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			padding: {
				x: 5,
				y: 5
			}
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, "Calculator type"), /* @__PURE__ */ __dil.jsx("box", { padding: { x: 2 } }, /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.mode_options.map((option) => ({
				value: option.key,
				label: option.label
			})),
			value: mode,
			onChange: setMode,
			block: true,
			size: "md"
		}))), /* @__PURE__ */ __dil.jsx("row", {
			align: "stretch",
			gap: 3,
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("box", {
			minWidth: 148,
			padding: {
				x: 4,
				y: 4
			},
			radius: "xl",
			background: "surface-secondary"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, activeMode.score_label), /* @__PURE__ */ __dil.jsx("title", {
			size: "3xl",
			tabularNums: true
		}, String(score)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, activeMode.score_range_label))), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 220,
			padding: {
				x: 4,
				y: 4
			},
			radius: "xl",
			background: "surface-secondary"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 1.5 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, activeMode.risk_heading), /* @__PURE__ */ __dil.jsx("title", {
			size: "2xl",
			tabularNums: true
		}, risk.exact_risk), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, `Rounded bedside display: ${risk.rounded_risk}`), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			preserveWhitespace: true
		}, activeMode.risk_definition)))), /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("row", {
			justify: "between",
			align: "center",
			gap: 2,
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, "Inputs"), /* @__PURE__ */ __dil.jsx("button", {
			variant: "outline",
			size: "sm",
			onClick: () => setValues(state.defaults)
		}, "Reset")), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, activeMode.criteria.map((criterion) => /* @__PURE__ */ __dil.jsx(TimiCriterionRow, {
			key: criterion.key,
			criterion,
			value: values[criterion.key],
			onChange: (value) => setValues((previous) => ({
				...previous,
				[criterion.key]: value
			}))
		})))), /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, "Risk by score"), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, activeMode.risk_rows.map((row) => /* @__PURE__ */ __dil.jsx("row", {
			key: row.score_label,
			justify: "between",
			align: "center",
			gap: 2,
			padding: {
				x: 3,
				y: 2
			},
			radius: "xl",
			background: score >= row.min_score && score <= row.max_score ? "surface-secondary" : "transparent"
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, `Score ${row.score_label}`), score >= row.min_score && score <= row.max_score && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "warning"
		}, "Current")), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			tabularNums: true
		}, row.exact_risk), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, `(${row.rounded_risk} bedside)`)))))), /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, "Notes"), /* @__PURE__ */ __dil.jsx("box", { padding: { x: 2 } }, /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.info_tabs.map((tab) => ({
				value: tab.key,
				label: tab.label
			})),
			value: infoTab,
			onChange: setInfoTab,
			block: true,
			size: "md"
		})), /* @__PURE__ */ __dil.jsx("box", {
			padding: {
				x: 3,
				y: 3
			},
			radius: "xl",
			background: "surface-secondary",
			border: {
				size: 1,
				color: "subtle"
			}
		}, activeMode.info_sections.filter((section) => section.key === infoTab).map((section) => /* @__PURE__ */ __dil.jsx("box", { key: section.key }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			preserveWhitespace: true
		}, section.body))))), /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, "Copyable summary"), /* @__PURE__ */ __dil.jsx("box", {
			padding: {
				x: 3,
				y: 3
			},
			radius: "xl",
			background: "surface-secondary",
			border: {
				size: 1,
				color: "subtle"
			}
		}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, summary)), /* @__PURE__ */ __dil.jsx("button", {
			variant: "outline",
			size: "sm",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "copy",
				payload: { value: summary }
			})
		}, "Copy summary")))));
	}
	function CalculatorTimiRiskWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("CalculatorTimiRiskWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 320
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedTimiRisk, { state });
	}

