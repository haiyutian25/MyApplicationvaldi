
	function CopyWordRow({ item }) {
		return /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			padding: {
				left: 2,
				right: 2,
				y: 2
			}
		}, /* @__PURE__ */ __dil.jsx("col", null, /* @__PURE__ */ __dil.jsx("title", null, item.value), /* @__PURE__ */ __dil.jsx("text", null, item.description)), /* @__PURE__ */ __dil.jsx("spacer", null), /* @__PURE__ */ __dil.jsx("button", {
			color: "secondary",
			size: "xs",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "copy",
				payload: {
					action: "copy",
					value: item.value
				}
			})
		}, "Copy")), /* @__PURE__ */ __dil.jsx("divider", null));
	}
	function ResolvedCopyWords({ state }) {
		const [expanded, setExpanded] = DIL.useState(false);
		const hasOverflow = state.words.length > 2;
		const visibleWords = expanded ? state.words : state.words.slice(0, 2);
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, hasOverflow ? /* @__PURE__ */ __dil.jsx("animate-group", null, visibleWords.map((item, index) => /* @__PURE__ */ __dil.jsx(CopyWordRow, {
			key: index,
			item
		}))) : /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, visibleWords.map((item, index) => /* @__PURE__ */ __dil.jsx(CopyWordRow, {
			key: index,
			item
		}))), hasOverflow && /* @__PURE__ */ __dil.jsx("box", {
			width: 120,
			padding: { top: 2.5 }
		}, /* @__PURE__ */ __dil.jsx("button", {
			color: "secondary",
			variant: "outline",
			block: true,
			pill: true,
			size: "lg",
			onClick: () => setExpanded(!expanded)
		}, expanded ? "Show less" : `Show ${state.words.length - 2} more`))));
	}
	function CopyWordsWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("CopyWordsWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 160
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedCopyWords, { state });
	}

