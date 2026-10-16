
	function ResolvedAutopause({ state }) {
		const isSm = DIL.useBreakpoint("sm");
		const action = (type) => GenUI.dispatchAction({
			type,
			payload: { task_id: state.task_id }
		});
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 0,
			shadow: true
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("box", {
			padding: {
				x: 4,
				y: 3
			},
			background: "surface-secondary"
		}, /* @__PURE__ */ __dil.jsx("text", { size: "md" }, state.task_title)), /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 4,
			y: 4
		} }, /* @__PURE__ */ __dil.jsx("col", {
			gap: isSm ? 4 : 3,
			flex: "auto"
		}, /* @__PURE__ */ __dil.jsx("title", {
			weight: "medium",
			size: "md"
		}, state.prompt), state.show_body && /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, state.body), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("button", {
			color: "primary",
			size: "md",
			onClick: () => action("task.resume")
		}, state.continue_label), /* @__PURE__ */ __dil.jsx("button", {
			variant: "outline",
			color: "primary",
			size: "md",
			uniform: true,
			onClick: () => action("task.settings")
		}, /* @__PURE__ */ __dil.jsx("icon", { name: "settings" })), /* @__PURE__ */ __dil.jsx("button", {
			variant: "outline",
			color: "danger",
			size: "md",
			uniform: true,
			onClick: () => action("task.delete")
		}, /* @__PURE__ */ __dil.jsx("icon", { name: "delete" })))))));
	}
	function TaskAutopauseCard(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("TaskAutopauseCard", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 220
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedAutopause, { state });
	}

