
	function ListAutomations(props) {
		const { isDark } = DIL.useTheme();
		const mutedColor = isDark ? "#afafaf" : "tertiary";
		const [hoveredItem, setHoveredItem] = DIL.useState(null);
		const hoverBackground = isDark ? "rgba(65, 65, 65, 0.6)" : "rgba(243, 243, 243, 0.6)";
		const { state, resolutionComplete } = useResolvedComponentResult("ListAutomations", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("box", {
			width: 361,
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 268,
			radius: "28px"
		}));
		if (state.automations.length === 0) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: 361,
			maxWidth: "100%",
			minWidth: 0,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("card", {
			width: "100%",
			padding: 0,
			gap: 0,
			radius: "28px",
			background: "surface",
			shadow: true,
			shadowStyle: isDark ? "none" : "inset 0 1px 0 rgb(255 255 255 / 80%), 0 4px 16px 0 rgba(0, 0, 0, 0.05)"
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			border: {
				size: 1,
				color: isDark || hoveredItem !== null ? "transparent" : "rgba(0, 0, 0, 0.1)"
			},
			radius: "28px",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			height: 62,
			padding: { x: 5 },
			gap: 3,
			align: "center",
			border: { bottom: {
				size: 1,
				color: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
			} }
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "none",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("svg", {
			width: 24,
			height: 24,
			viewBox: "0 0 20 20",
			color: "secondary",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 1.33,
			strokeLinecap: "round"
		}, /* @__PURE__ */ __dil.jsx("path", { d: "M17.5 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 1 1 15 0Z M9.99996 5.8335V9.82757C9.99996 9.93808 9.95606 10.0441 9.87792 10.1222L7.91663 12.0835" }))), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: "secondary",
			lineHeight: 20
		}, state.header_label.toLocaleUpperCase())), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			role: "list"
		}, state.automations.slice(0, 5).map((item) => /* @__PURE__ */ __dil.jsx("box", {
			key: item.id,
			role: "listitem",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: 72,
			padding: { x: 5 },
			minWidth: 0,
			ariaLabel: item.title,
			background: hoveredItem === item.id ? hoverBackground : "transparent",
			onHover: (hovered) => setHoveredItem(hovered ? item.id : null),
			onClick: () => GenUI.openUrl(item.url)
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			height: "100%",
			align: "center",
			justify: "between",
			gap: 4,
			minWidth: 0,
			border: { bottom: {
				size: 1,
				color: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
			} }
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			fontSize: 15,
			lineHeight: 22,
			weight: "medium",
			color: "primary",
			truncate: true
		}, item.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			fontSize: 15,
			lineHeight: 22,
			weight: "normal",
			color: mutedColor,
			truncate: true
		}, item.schedule_label)), /* @__PURE__ */ __dil.jsx("box", {
			flex: "none",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("svg", {
			width: 24,
			height: 24,
			viewBox: "0 0 20 20",
			color: mutedColor
		}, /* @__PURE__ */ __dil.jsx("path", { d: "M6.90425 15.7792C6.64455 16.0389 6.64455 16.461 6.90425 16.7207C7.16395 16.9804 7.58595 16.9804 7.84565 16.7207L13.8007 10.7646C14.2229 10.3422 14.2229 9.65767 13.8007 9.2353L7.84565 3.27925C7.58595 3.01955 7.16395 3.01955 6.90425 3.27925C6.64455 3.53895 6.64455 3.96095 6.90425 4.22065L12.6835 9.99995L6.90425 15.7792Z" })))))))), /* @__PURE__ */ __dil.jsx("pressable", {
			height: 62,
			width: "100%",
			padding: { x: 5 },
			align: "start",
			justify: "center",
			background: hoveredItem === "footer" ? hoverBackground : "transparent",
			onHover: (hovered) => setHoveredItem(hovered ? "footer" : null),
			onClick: () => GenUI.openUrl(state.view_all_url)
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			fontSize: 15,
			lineHeight: 22,
			color: mutedColor
		}, state.view_all_label)))));
	}

