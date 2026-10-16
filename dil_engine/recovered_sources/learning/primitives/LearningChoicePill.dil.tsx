
	function LearningChoicePill({ label, selected, order, disabled, onSelect }) {
		const pill = /* @__PURE__ */ __dil.jsx("row", {
			minHeight: "40px",
			maxWidth: "100%",
			padding: {
				x: "14px",
				y: "4px"
			},
			gap: "8px",
			align: "center",
			justify: "center",
			radius: "full",
			background: selected ? {
				light: "blue-50",
				dark: "blue-900"
			} : "gray-75",
			border: {
				size: 2,
				color: selected ? "gray-900" : "transparent"
			}
		}, selected && order !== void 0 ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold",
			tabularNums: true
		}, order, ".") : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			textAlign: "center",
			color: "primary"
		}, label));
		return /* @__PURE__ */ __dil.jsx("pressable", {
			maxWidth: "100%",
			background: "transparent",
			radius: "full",
			ariaPressed: selected,
			onClick: () => {
				if (!disabled && !selected) onSelect();
			}
		}, pill);
	}

