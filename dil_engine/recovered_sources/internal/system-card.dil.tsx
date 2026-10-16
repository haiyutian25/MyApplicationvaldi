
	function SystemCardRow({ icon, label, children }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 36,
			background: "surface-secondary",
			radius: "sm",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: icon,
			size: "lg"
		})), /* @__PURE__ */ __dil.jsx("col", null, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold"
		}, label), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, children)));
	}
	function SystemCardView({ state }) {
		return /* @__PURE__ */ __dil.jsx("card", { size: "sm" }, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "sparkle",
			size: "lg"
		}), /* @__PURE__ */ __dil.jsx("title", { size: "sm" }, state.title), /* @__PURE__ */ __dil.jsx("spacer", null), /* @__PURE__ */ __dil.jsx("caption", null, state.date.human)), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "wrap"
		}, state.badges.map((badge, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("badge", {
			color: badge.color,
			variant: "soft"
		}, badge.label)))), /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "lab",
			label: "System design"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.design)), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "square-code",
			label: "Model variants"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "wrap"
		}, state.models.map((model, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("badge", { variant: "outline" }, model))))), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "bolt",
			label: "Capabilities"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.capSummary), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "wrap"
		}, state.benchmarks.map((benchmark, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("badge", {
			color: "info",
			variant: "soft"
		}, `${benchmark.label} ${benchmark.value}`))))), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "lifesaver",
			label: "Safety"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.safetySummary)), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "globe",
			label: "Deployment & access"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.accessSummary))));
	}



/* ---- merged ---- */

	function SystemCardRow({ icon, label, children }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 36,
			background: "surface-secondary",
			radius: "sm",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: icon,
			size: "lg"
		})), /* @__PURE__ */ __dil.jsx("col", null, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold"
		}, label), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, children)));
	}
	function SystemCardView({ state }) {
		return /* @__PURE__ */ __dil.jsx("card", { size: "sm" }, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "sparkle",
			size: "lg"
		}), /* @__PURE__ */ __dil.jsx("title", { size: "sm" }, state.title), /* @__PURE__ */ __dil.jsx("spacer", null), /* @__PURE__ */ __dil.jsx("caption", null, state.date.human)), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "wrap"
		}, state.badges.map((badge, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("badge", {
			color: badge.color,
			variant: "soft"
		}, badge.label)))), /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "lab",
			label: "System design"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.design)), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "square-code",
			label: "Model variants"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "wrap"
		}, state.models.map((model, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("badge", { variant: "outline" }, model))))), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "bolt",
			label: "Capabilities"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.capSummary), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "wrap"
		}, state.benchmarks.map((benchmark, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("badge", {
			color: "info",
			variant: "soft"
		}, `${benchmark.label} ${benchmark.value}`))))), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "lifesaver",
			label: "Safety"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.safetySummary)), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "globe",
			label: "Deployment & access"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.accessSummary))));
	}

