
	function LearningFeedback({ result }) {
		if (!result) return null;
		return /* @__PURE__ */ __dil.jsx("col", {
			role: "status",
			gap: "4px"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "center",
			color: result.status === "correct" ? "success" : "warning"
		}, result.label, result.answer ? ` 
 ${result.answer}` : null), result.explanation ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			textAlign: "center"
		}, result.explanation) : null);
	}

