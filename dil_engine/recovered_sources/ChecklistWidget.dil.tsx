
	function ChecklistWidget(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("ChecklistWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 140
		});
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, state.sections.map((section, index) => /* @__PURE__ */ __dil.jsx(ChecklistSectionView, {
			key: index,
			section
		})));
	}
	function ChecklistSectionView({ section }) {
		const [expanded, setExpanded] = DIL.useState(false);
		const [checked, setChecked] = DIL.useState(section.items.map(() => false));
		const hasOverflow = section.items.length > 4;
		const visibleItems = expanded ? section.items : section.items.slice(0, 4);
		return /* @__PURE__ */ __dil.jsx("col", null, /* @__PURE__ */ __dil.jsx("text", null, section.name), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("animate-group", null, visibleItems.map((item, index) => /* @__PURE__ */ __dil.jsx("row", {
			key: index,
			padding: 2.5,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("checkbox", {
			shape: "square",
			lineThrough: false,
			checked: checked[index] ?? false,
			onChange: (value) => setChecked((previous) => section.items.map((_, itemIndex) => itemIndex === index ? value : previous[itemIndex] ?? false))
		}), /* @__PURE__ */ __dil.jsx("text", null, item)))), hasOverflow ? /* @__PURE__ */ __dil.jsx("box", {
			width: 120,
			padding: { top: 2.5 }
		}, /* @__PURE__ */ __dil.jsx("button", {
			block: true,
			pill: true,
			size: "lg",
			color: "secondary",
			variant: "outline",
			onClick: () => setExpanded(!expanded)
		}, expanded ? "Show less" : `Show ${section.items.length - 4} more`)) : null));
	}

