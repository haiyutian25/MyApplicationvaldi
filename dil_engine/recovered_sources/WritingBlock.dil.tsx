
	function WritingBlock({ children, content, subject, variant }) {
		const body = content ?? children;
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, variant === "email" && subject ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			weight: "medium"
		}, "Subject"), /* @__PURE__ */ __dil.jsx("text", { weight: "semibold" }, subject)), /* @__PURE__ */ __dil.jsx("divider", null)) : /* @__PURE__ */ __dil.jsx("title", null, "Writing Block"), /* @__PURE__ */ __dil.jsx("text", { preserveWhitespace: true }, body)));
	}

