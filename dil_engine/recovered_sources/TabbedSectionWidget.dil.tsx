
	function TabbedSectionView({ state }) {
		const [activeIndex, setActiveIndex] = DIL.useState(state.active_index ?? 0);
		const activeTab = state.tabs[activeIndex];
		const tabs = state.tabs.map((tab, index) => /* @__PURE__ */ __dil.jsx("button", {
			key: tab.id,
			variant: activeIndex === index ? "solid" : "outline",
			onClick: () => setActiveIndex(index)
		}, tab.label));
		const content = activeTab ? /* @__PURE__ */ __dil.jsx("col", {
			flex: "auto",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, activeTab.title), /* @__PURE__ */ __dil.jsx(TextOnlyMarkdown, null, activeTab.content)) : null;
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, state.vertical_tab ? /* @__PURE__ */ __dil.jsx("row", {
			align: "stretch",
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: { right: 3 },
			border: { right: { size: 1 } }
		}, tabs), content) : /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			wrap: "wrap"
		}, tabs), /* @__PURE__ */ __dil.jsx("divider", null), content));
	}
	function TabbedSectionWidget(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("TabbedSectionWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 160
		});
		return /* @__PURE__ */ __dil.jsx(TabbedSectionView, { state });
	}

