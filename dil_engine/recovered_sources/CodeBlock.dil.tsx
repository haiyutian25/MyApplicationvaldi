
	function CodeBlock({ content, language }) {
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			weight: "medium"
		}, language ?? "code"), /* @__PURE__ */ __dil.jsx("box", {
			background: "surface-secondary",
			padding: 3,
			radius: "md"
		}, /* @__PURE__ */ __dil.jsx("text", {
			preserveWhitespace: true,
			size: "sm"
		}, content))));
	}

