
	function ResolvedFileNavList({ componentKey, items }) {
		const isSm = DIL.useBreakpoint("sm");
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			width: "100%",
			wrap: "wrap"
		}, items.map((item) => /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: item.name,
			key: item.id + ":" + item.item_index,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_file_navlist_item",
				payload: {
					component_key: componentKey,
					item_index: item.item_index
				}
			}),
			width: isSm ? 320 : 205
		}, /* @__PURE__ */ __dil.jsx("card", {
			background: "surface-primary",
			padding: 2.5,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			minWidth: 0,
			width: "100%",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			ariaHidden: true,
			flex: "0 0 auto",
			height: 40,
			justify: "center",
			width: 40
		}, /* @__PURE__ */ __dil.jsx("icon", {
			color: "secondary",
			name: "document",
			size: "2xl"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: .5,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			maxLines: 1,
			size: "sm",
			truncate: true,
			weight: "semibold"
		}, item.name), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			maxLines: 1,
			size: "sm",
			truncate: true
		}, item.description)))))));
	}
	function FileNavList(props) {
		const hideInaccessibleFiles = DIL.useAppData((appData) => appData.opGenui?.hideInaccessibleFiles === true);
		const { resolutionComplete, state } = useResolvedComponentResult("FileNavList", props);
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading files" });
		const items = state.items?.map((item, item_index) => ({
			...item,
			item_index
		})).filter((item) => item.id && item.name && item.is_actionable && (!hideInaccessibleFiles || item.safe_file_url)) ?? [];
		if (items.length === 0) return null;
		return /* @__PURE__ */ __dil.jsx(ResolvedFileNavList, {
			componentKey: props.__resolutionId ?? componentDataKey("FileNavList", props),
			items
		});
	}

