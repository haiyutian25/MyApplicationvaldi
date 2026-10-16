
	const STEP_MARKER_SIZE = 24;
	const ACTIVE_RING_WIDTH = 2;
	const ACTIVE_RING_RADIUS = (STEP_MARKER_SIZE - ACTIVE_RING_WIDTH) / 2;
	const ACTIVE_RING_CIRCUMFERENCE = 2 * Math.PI * ACTIVE_RING_RADIUS;
	const SvgCircle = "circle";
	function isLanguageLearningPlanType(planType) {
		return planType === "language_learning";
	}
	function PlanSummaryRow({ step, position, variant, expanded, isLast, statusLabel, layout }) {
		const numbered = variant === "numbered" && step.status !== "completed";
		const isLibrary = layout === "library";
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: isLibrary ? 4 : 1,
			align: isLibrary ? "center" : "stretch",
			minHeight: isLibrary ? 56 : isLast ? 20 : 50,
			role: "listitem"
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: isLibrary ? STEP_MARKER_SIZE : 28,
			flex: "0 0 auto",
			align: "center",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: variant === "numbered" ? STEP_MARKER_SIZE : step.status === "in_progress" ? 28 : 20,
			flex: "0 0 auto",
			align: "center",
			justify: "center",
			role: "img",
			ariaLabel: variant === "numbered" ? position + ". " + statusLabel : statusLabel
		}, variant === "numbered" && step.status === "completed" ? /* @__PURE__ */ __dil.jsx("box", {
			size: STEP_MARKER_SIZE,
			radius: "full",
			background: {
				light: "gray-400",
				dark: "gray-600"
			},
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "check",
			size: "md",
			color: "white"
		})) : numbered ? /* @__PURE__ */ __dil.jsx("row", {
			size: STEP_MARKER_SIZE,
			gap: 0,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: STEP_MARKER_SIZE,
			flex: "0 0 auto",
			radius: "full",
			border: true,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			weight: "medium",
			color: "primary",
			tabularNums: true
		}, position)), step.status === "in_progress" && /* @__PURE__ */ __dil.jsx("box", {
			width: 0,
			flex: "0 0 auto",
			align: "end",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: STEP_MARKER_SIZE,
			flex: "0 0 auto"
		}, /* @__PURE__ */ __dil.jsx("svg", {
			size: STEP_MARKER_SIZE,
			viewBox: `0 0 ${STEP_MARKER_SIZE} ${STEP_MARKER_SIZE}`,
			color: "primary"
		}, /* @__PURE__ */ __dil.jsx(SvgCircle, {
			cx: STEP_MARKER_SIZE / 2,
			cy: STEP_MARKER_SIZE / 2,
			r: ACTIVE_RING_RADIUS,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: ACTIVE_RING_WIDTH,
			strokeDasharray: `${ACTIVE_RING_CIRCUMFERENCE / 4} ${ACTIVE_RING_CIRCUMFERENCE}`,
			strokeLinecap: "round",
			transform: `rotate(-90 ${STEP_MARKER_SIZE / 2} ${STEP_MARKER_SIZE / 2})`
		}))))) : /* @__PURE__ */ __dil.jsx("icon", {
			name: step.status === "completed" ? "check-circle-filled" : step.status === "in_progress" ? "spinner" : "empty-circle",
			size: "xl",
			color: step.status === "pending" ? {
				light: "gray-300",
				dark: "gray-600"
			} : step.status === "in_progress" ? "secondary" : "tertiary"
		})), !isLibrary && !isLast && /* @__PURE__ */ __dil.jsx("box", {
			width: 1,
			flex: 1,
			background: {
				light: "#ededed",
				dark: "alpha-10"
			},
			ariaHidden: true
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			flex: 1,
			minWidth: 0,
			padding: { bottom: isLibrary || isLast ? 0 : 2 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			truncate: isLibrary,
			color: step.status === "completed" ? "tertiary" : "primary"
		}, step.title), expanded && step.description && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, step.description)));
	}
	function AutomationPlanSummary(props) {
		const [expanded, setExpanded] = DIL.useState(false);
		const [collapsed, setCollapsed] = DIL.useState(false);
		const { state, resolutionComplete } = useResolvedComponentResult("AutomationPlanSummary", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0,
			padding: { top: props.automation_id ? 3 : 0 }
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 240
		}));
		const currentStepIndex = state.steps?.findIndex((step) => step.status === "in_progress") ?? -1;
		const nextStepIndex = currentStepIndex >= 0 ? currentStepIndex : state.steps?.findIndex((step) => step.status === "pending") ?? -1;
		const previousStepCompleted = nextStepIndex > 0 && state.steps?.[nextStepIndex - 1]?.status === "completed";
		const firstVisibleIndex = expanded ? 0 : nextStepIndex < 0 ? Math.max(0, (state.steps?.length ?? 0) - 3) : Math.max(0, nextStepIndex - (previousStepCompleted ? 1 : 0));
		const visibleSteps = expanded ? state.steps : state.steps?.slice(firstVisibleIndex, firstVisibleIndex + 3);
		const variant = isLanguageLearningPlanType(state.plan_type) ? "numbered" : "default";
		if (state.layout === "library") return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			padding: 8,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: { bottom: 6 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, state.goal_label), /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.title)), /* @__PURE__ */ __dil.jsx("divider", {
			color: "subtle",
			spacing: 0
		}), state.steps == null ? /* @__PURE__ */ __dil.jsx("col", { padding: { y: 5 } }, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, state.summary_error_label)) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { top: 4 },
			role: "list"
		}, state.steps.map((step, index, steps) => /* @__PURE__ */ __dil.jsx(PlanSummaryRow, {
			key: step.id,
			step,
			position: index + 1,
			variant,
			expanded: false,
			isLast: index === steps.length - 1,
			statusLabel: state.status_labels[step.status],
			layout: "library"
		}))));
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0,
			padding: { top: 3 }
		}, /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, state.goal_label), /* @__PURE__ */ __dil.jsx("title", { size: "sm" }, state.title)), /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 2,
			flex: "0 0 auto"
		}, state.show_plan_label && state.hide_plan_label && /* @__PURE__ */ __dil.jsx("pressable", {
			size: 16,
			align: "center",
			justify: "center",
			radius: "full",
			ariaLabel: collapsed ? state.show_plan_label : state.hide_plan_label,
			tooltip: collapsed ? state.show_plan_label : state.hide_plan_label,
			onClick: () => setCollapsed(!collapsed)
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: collapsed ? "expand-large" : "collapse-large",
			size: "md",
			color: "tertiary"
		})), state.steps != null && state.expand_label && state.collapse_label && /* @__PURE__ */ __dil.jsx("pressable", {
			size: 16,
			align: "center",
			justify: "center",
			radius: "full",
			ariaLabel: !collapsed && expanded ? state.collapse_label : state.expand_label,
			tooltip: !collapsed && expanded ? state.collapse_label : state.expand_label,
			onClick: () => {
				setExpanded(collapsed || !expanded);
				setCollapsed(false);
			}
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "dots-horizontal",
			size: "md",
			color: "tertiary"
		})))), !collapsed && /* @__PURE__ */ __dil.jsx("box", {
			height: 1,
			background: {
				light: "#ededed",
				dark: "alpha-10"
			},
			ariaHidden: true
		}), !collapsed && (state.steps == null ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: { y: 5 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, state.summary_error_label)) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			role: "list"
		}, visibleSteps?.map((step, index) => /* @__PURE__ */ __dil.jsx(PlanSummaryRow, {
			key: step.id,
			step,
			position: firstVisibleIndex + index + 1,
			variant,
			expanded,
			isLast: index === visibleSteps.length - 1,
			statusLabel: state.status_labels[step.status]
		}))))));
	}

