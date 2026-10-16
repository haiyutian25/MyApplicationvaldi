
	function LearningTextChoices({ options, selectedId, disabled = false, onSelect }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: "8px",
			justify: "center",
			align: "center",
			wrap: "wrap"
		}, options.map((option) => /* @__PURE__ */ __dil.jsx(LearningChoicePill, {
			key: option.id,
			label: option.label,
			selected: option.id === selectedId,
			disabled: disabled || selectedId !== null,
			onSelect: () => onSelect(option.id)
		})));
	}

