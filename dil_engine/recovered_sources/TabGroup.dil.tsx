
	function TabGroupView({ state }) {
		const [localActiveTab, setActiveTab] = DIL.useState(void 0);
		const activeTab = localActiveTab === void 0 ? state.active_tab_id : localActiveTab;
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0,
			padding: { bottom: 2 }
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			minWidth: 0,
			scrollable: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 0,
			width: "max-content"
		}, state.tabs.map((tab, index) => /* @__PURE__ */ __dil.jsx("pressable", {
			key: index,
			flex: "0 0 auto",
			padding: {
				left: 2,
				right: 3,
				top: 2,
				bottom: 0
			},
			ariaLabel: tab.label,
			onClick: () => {
				setActiveTab(tab.label);
				if (activeTab !== tab.label) GenUI.dispatchAction({
					handler: "client",
					type: "issue_new_turn",
					payload: { query: tab.query }
				});
			}
		}, /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			gap: .5
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: activeTab === tab.label ? "semibold" : "medium",
			color: activeTab === tab.label ? {
				light: "#202124",
				dark: "#F1F3F4"
			} : {
				light: "#70757A",
				dark: "#9AA0A6"
			}
		}, tab.label), /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 3,
			radius: "xs",
			background: activeTab === tab.label ? {
				light: "#202124",
				dark: "#F1F3F4"
			} : "transparent"
		})))))), /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 1,
			background: {
				light: "#DADCE0",
				dark: "#3C4043"
			}
		}));
	}
	function TabGroup(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("TabGroup", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 44
		});
		return /* @__PURE__ */ __dil.jsx(TabGroupView, { state });
	}

