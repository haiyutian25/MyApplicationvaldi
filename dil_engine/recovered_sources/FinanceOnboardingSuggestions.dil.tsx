
	function FinanceOnboardingSuggestions(props) {
		const threeColumns = DIL.useBreakpoint("sm");
		const canPrefill = DIL.useAppData((data) => data.opGenui?.supportedClientActions?.includes("prefill_composer") === true);
		const { state, resolutionComplete } = useResolvedComponentResult("FinanceOnboardingSuggestions", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "40rem",
			maxWidth: "100%",
			gap: 6
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("box", { role: "heading" }, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "primary"
		}, state.heading)), /* @__PURE__ */ __dil.jsx("grid", {
			columns: threeColumns ? 3 : 1,
			gap: 3
		}, state.items.map((item) => /* @__PURE__ */ __dil.jsx("grid-item", {
			key: item.action_id,
			minWidth: 0,
			radius: 24,
			border: {
				size: 1,
				color: "subtle"
			},
			background: {
				light: "surface",
				dark: "surface-tertiary"
			}
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: item.label,
			width: "100%",
			height: "100%",
			minHeight: threeColumns ? 150 : 132,
			padding: 4,
			gap: 4,
			direction: "col",
			align: "stretch",
			justify: "between",
			radius: 24,
			variant: "ghost",
			disabled: !canPrefill,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "prefill_composer",
				payload: { prompt: item.query }
			})
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			align: "start",
			justify: "between",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 44,
			minWidth: 44,
			minHeight: 44,
			align: "center",
			justify: "center",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "2xl",
			weight: "normal"
		}, item.emoji)), /* @__PURE__ */ __dil.jsx("icon", {
			name: "plus",
			size: "2xl",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "primary"
		}, item.label)))))), /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			align: "start",
			gap: 6
		}, /* @__PURE__ */ __dil.jsx("divider", {
			spacing: 0,
			color: "subtle"
		}), /* @__PURE__ */ __dil.jsx("box", {
			width: "fit-content",
			maxWidth: "100%",
			radius: 22,
			background: {
				light: "surface",
				dark: "surface-tertiary"
			}
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: state.follow_up.label,
			width: "fit-content",
			height: 44,
			padding: { x: 4 },
			radius: "full",
			border: {
				size: 1,
				color: "subtle"
			},
			onClick: () => GenUI.issueNewTurn(state.follow_up.query, {
				append_to_current_leaf: true,
				followup_metadata: { onboarding: { framework: {
					state: "answer",
					event: state.follow_up.event,
					inputs: {}
				} } }
			})
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center",
			height: "100%",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: state.follow_up.icon,
			size: "sm",
			color: {
				light: "blue-400",
				dark: "blue-200"
			}
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			maxLines: 1,
			color: {
				light: "blue-400",
				dark: "blue-200"
			}
		}, state.follow_up.label))))));
	}

