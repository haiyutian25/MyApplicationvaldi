
	function LedgerUpcomingActivityWidget(props) {
		const result = useResolvedComponentResult("LedgerUpcomingActivityWidget", props);
		if (!result.state) return result.resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 300
		});
		if (result.state.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: result.state.labels });
		return /* @__PURE__ */ __dil.jsx(Resolved, { state: result.state });
	}
	function Resolved({ state }) {
		const wide = DIL.useBreakpoint("sm");
		const [view, setView] = DIL.useState(state.active_view);
		const [expanded, setExpanded] = DIL.useState(state.expanded ?? false);
		const top = view === state.active_view ? state.top : view === "incoming" ? state.incoming_top : state.outgoing_top;
		const initialOthers = view === state.active_view ? state.others : view === "incoming" ? state.incoming_others : state.outgoing_others;
		const expandedOthers = (view === "incoming" ? state.incoming_expanded_others : state.outgoing_expanded_others) ?? [];
		const canExpand = expandedOthers.length > initialOthers.length;
		const others = expanded && canExpand ? expandedOthers : initialOthers;
		const items = top ? [top, ...others] : others;
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			background: "surface-elevated",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: {
				x: 6,
				top: 5,
				bottom: 3
			}
		}, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.title), state.show_flow_tabs ? /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: [{
				value: "outgoing",
				label: state.labels.outgoing
			}, {
				value: "incoming",
				label: state.labels.incoming
			}],
			value: view,
			onChange: (value) => {
				setView(value);
				setExpanded(false);
			},
			block: !wide,
			variant: "soft",
			size: "md",
			pill: true
		}) : /* @__PURE__ */ __dil.jsx("box", {
			height: 24,
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: "secondary"
		}, view === "incoming" ? state.labels.incoming : state.labels.outgoing))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: {
				x: 6,
				bottom: 5
			}
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, items.length === 0 ? /* @__PURE__ */ __dil.jsx(LedgerEmpty, { label: state.labels.no_upcoming_activity }) : items.map((item, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: item.id,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx(LedgerActivityRow, {
			item,
			state,
			mode: "upcoming",
			activeView: view,
			title: state.title
		}), index < items.length - 1 ? /* @__PURE__ */ __dil.jsx("divider", null) : null))), canExpand ? /* @__PURE__ */ __dil.jsx("box", { padding: { top: 5 } }, /* @__PURE__ */ __dil.jsx("button", {
			variant: "soft",
			block: true,
			onClick: () => setExpanded(!expanded)
		}, expanded ? state.labels.show_less : state.labels.show_more)) : null)));
	}

