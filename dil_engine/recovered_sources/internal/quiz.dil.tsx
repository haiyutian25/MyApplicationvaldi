
	function QuizFrame({ isDesktop, clip, size = "full", elevated = false, children }) {
		if (elevated) return /* @__PURE__ */ __dil.jsx("card", {
			size,
			padding: 0
		}, children);
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			border: {
				size: 1,
				color: "default"
			},
			radius: "3xl",
			background: isDesktop ? "surface-elevated" : "gray-0",
			clip
		}, children);
	}
	function QuizHeader({ isDesktop, prompt, navigation, utilities }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			wrap: "wrap-reverse",
			align: "end",
			minHeight: 50,
			padding: {
				left: 5,
				right: isDesktop ? 5 : 3,
				top: "10px"
			},
			rowGap: 2,
			columnGap: 4
		}, prompt, /* @__PURE__ */ __dil.jsx("row", {
			flex: "1 0 auto",
			align: "center",
			justify: "between",
			gap: 4
		}, navigation, utilities));
	}
	function QuizIconButton({ label, tooltip, disabled, onClick, children }) {
		return /* @__PURE__ */ __dil.jsx("pressable", {
			size: 36,
			padding: 0,
			radius: "full",
			variant: "ghost",
			align: "center",
			justify: "center",
			ariaLabel: label,
			tooltip,
			disabled,
			onClick
		}, children);
	}
	function QuizChoiceRow({ label, interactive, disabled, onSelect, indicator, content, feedback }) {
		const children = /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4
		}, indicator, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			minHeight: 32,
			justify: "center"
		}, content), feedback));
		return /* @__PURE__ */ __dil.jsx("box", { padding: { x: 2 } }, interactive ? /* @__PURE__ */ __dil.jsx("pressable", {
			minHeight: 46,
			padding: {
				x: 2,
				y: "7px"
			},
			radius: "4xl",
			disabled,
			onClick: onSelect,
			ariaLabel: label
		}, children) : /* @__PURE__ */ __dil.jsx("box", {
			minHeight: 46,
			padding: {
				x: 2,
				y: "7px"
			},
			radius: "4xl",
			role: "group",
			ariaLabel: label
		}, children));
	}



/* ---- merged ---- */

	function QuizFrame({ isDesktop, clip, size = "full", elevated = false, children }) {
		if (elevated) return /* @__PURE__ */ __dil.jsx("card", {
			size,
			padding: 0
		}, children);
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			border: {
				size: 1,
				color: "default"
			},
			radius: "3xl",
			background: isDesktop ? "surface-elevated" : "gray-0",
			clip
		}, children);
	}
	function QuizHeader({ isDesktop, prompt, navigation, utilities }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			wrap: "wrap-reverse",
			align: "end",
			minHeight: 50,
			padding: {
				left: 5,
				right: isDesktop ? 5 : 3,
				top: "10px"
			},
			rowGap: 2,
			columnGap: 4
		}, prompt, /* @__PURE__ */ __dil.jsx("row", {
			flex: "1 0 auto",
			align: "center",
			justify: "between",
			gap: 4
		}, navigation, utilities));
	}
	function QuizIconButton({ label, tooltip, disabled, onClick, children }) {
		return /* @__PURE__ */ __dil.jsx("pressable", {
			size: 36,
			padding: 0,
			radius: "full",
			variant: "ghost",
			align: "center",
			justify: "center",
			ariaLabel: label,
			tooltip,
			disabled,
			onClick
		}, children);
	}
	function QuizChoiceRow({ label, interactive, disabled, onSelect, indicator, content, feedback }) {
		const children = /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4
		}, indicator, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			minHeight: 32,
			justify: "center"
		}, content), feedback));
		return /* @__PURE__ */ __dil.jsx("box", { padding: { x: 2 } }, interactive ? /* @__PURE__ */ __dil.jsx("pressable", {
			minHeight: 46,
			padding: {
				x: 2,
				y: "7px"
			},
			radius: "4xl",
			disabled,
			onClick: onSelect,
			ariaLabel: label
		}, children) : /* @__PURE__ */ __dil.jsx("box", {
			minHeight: 46,
			padding: {
				x: 2,
				y: "7px"
			},
			radius: "4xl",
			role: "group",
			ariaLabel: label
		}, children));
	}

