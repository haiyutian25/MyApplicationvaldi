
	function ResolvedEquity({ state }) {
		const desktop = DIL.useBreakpoint("sm");
		const [rowsToShow, setRowsToShow] = DIL.useState(5);
		const rows = state.rows.slice(0, rowsToShow);
		const headers = [
			state.labels.stock,
			state.labels.price,
			state.labels.day_change_percent,
			state.labels.day_change_value
		];
		const widths = [
			82,
			82,
			96,
			desktop ? 110 : 96
		];
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: "100%",
			background: "surface-elevated",
			padding: 0,
			radius: "4xl",
			border: 1,
			clip: true
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4,
			padding: {
				x: 6,
				top: 5,
				bottom: 3
			}
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: .5
		}, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "normal",
			color: "secondary"
		}, state.as_of_label), state.currency_conversion.currency_conversion_note && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, state.currency_conversion.currency_conversion_note))), /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { x: 6 }
		}, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })), state.has_positions ? /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 6,
			top: desktop ? 1 : 0,
			bottom: 6
		} }, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			minWidth: 0,
			direction: desktop ? void 0 : "row",
			scrollable: !desktop
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: desktop ? "100%" : "max-content",
			padding: { right: desktop ? 0 : 12 }
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("box", {
			height: desktop ? 16 : 32,
			justify: "center",
			padding: { bottom: desktop ? 0 : 1 }
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: desktop ? "between" : "start",
			gap: desktop ? 0 : 4,
			wrap: "nowrap",
			width: desktop ? "100%" : void 0
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, headers.map((label, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: index,
			flex: desktop && index < 3 ? 1 : void 0,
			width: desktop && index < 3 ? void 0 : widths[index],
			minWidth: widths[index],
			padding: { left: desktop && index === 3 ? 3.5 : 0 }
		}, /* @__PURE__ */ __dil.jsx("caption", {
			size: "md",
			weight: "normal",
			color: "secondary",
			truncate: true
		}, label)))))), /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, rows.map((item, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: item.id,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", { padding: index === rows.length - 1 ? { top: 2 } : { y: 2 } }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: desktop ? "between" : "start",
			gap: desktop ? 0 : 4,
			wrap: "nowrap",
			width: desktop ? "100%" : void 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: desktop ? 1 : void 0,
			width: desktop ? void 0 : 82,
			minWidth: 82,
			height: desktop ? void 0 : 46,
			justify: "center",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: desktop ? "sm" : "md",
			weight: "normal",
			truncate: true
		}, item.ticker), /* @__PURE__ */ __dil.jsx("caption", {
			size: "md",
			weight: "normal",
			color: "secondary",
			truncate: true,
			maxLines: 1
		}, item.name)), /* @__PURE__ */ __dil.jsx("box", {
			flex: desktop ? 1 : void 0,
			width: desktop ? void 0 : 82,
			minWidth: 82,
			height: desktop ? void 0 : 46,
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: desktop ? "sm" : "md",
			weight: "normal",
			truncate: true
		}, item.price_label)), /* @__PURE__ */ __dil.jsx("box", {
			flex: desktop ? 1 : void 0,
			width: desktop ? void 0 : 96,
			minWidth: 96,
			height: desktop ? void 0 : 46,
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: desktop ? "sm" : "md",
			weight: "normal",
			truncate: true,
			color: item.day_change_percent_color
		}, (item.day_change_percent_direction === "down" ? state.labels.down_indicator : item.day_change_percent_direction === "up" ? state.labels.up_indicator : "") + item.day_change_percent_label)), /* @__PURE__ */ __dil.jsx("box", {
			width: desktop ? 110 : 96,
			minWidth: desktop ? 110 : 96,
			height: desktop ? void 0 : 46,
			align: desktop ? "end" : void 0,
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			width: 96,
			size: desktop ? "sm" : "md",
			weight: "normal",
			truncate: true,
			color: state.sensitive_values_hidden ? "primary" : item.day_change_value_color
		}, state.sensitive_values_hidden ? state.labels.masked_value : (item.day_change_value_direction === "down" ? state.labels.down_indicator : item.day_change_value_direction === "up" ? state.labels.up_indicator : "") + item.day_change_value_label)))), index < rows.length - 1 && /* @__PURE__ */ __dil.jsx("divider", null))))))), state.rows.length > 5 && /* @__PURE__ */ __dil.jsx("box", { padding: { top: 5 } }, /* @__PURE__ */ __dil.jsx("button", {
			variant: "soft",
			block: true,
			onClick: () => setRowsToShow(rowsToShow === 5 ? 999 : 5)
		}, rowsToShow === 5 ? state.labels.show_more : state.labels.show_less))) : /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 6,
			y: 4
		} }, /* @__PURE__ */ __dil.jsx("caption", { size: "md" }, state.empty_state_label))));
	}
	function LedgerEquityUpdatesWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerEquityUpdatesWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 340
		});
		if (state.has_connected_accounts === false) return /* @__PURE__ */ __dil.jsx(LedgerNoAccounts, { labels: state.labels });
		return /* @__PURE__ */ __dil.jsx(ResolvedEquity, { state });
	}

