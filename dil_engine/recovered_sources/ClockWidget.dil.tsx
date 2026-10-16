
	const Svg = "svg";
	const SvgText = "text";
	const SvgLine = "line";
	const SvgCircle = "circle";
	function ResolvedClock({ state }) {
		const liveActivity = useIsLiveActivity();
		const isLive = state.fixed_tick == null;
		const now = DIL.useNow(isLive);
		const isMobile = DIL.useIsMobile();
		const isWide = DIL.useBreakpoint("sm");
		const tick = state.fixed_tick ?? now;
		const localSeconds = Math.floor((tick + state.tz_offset_minutes * 6e4) / 1e3);
		const second = (localSeconds % 60 + 60) % 60;
		const minute = (Math.floor(localSeconds / 60) % 60 + 60) % 60;
		const hour = (Math.floor(localSeconds / 3600) % 24 + 24) % 24;
		const timeLabel = (state.time_format === "24h" ? String(hour).padStart(2, "0") : String(hour % 12 || 12)) + ":" + String(minute).padStart(2, "0") + (state.time_format === "12h" ? hour >= 12 ? " PM" : " AM" : "");
		const hourAngle = hour % 12 * 30 + minute * .5;
		const minuteAngle = minute * 6 + second * .1;
		if (liveActivity) return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			padding: 2,
			theme: "dark",
			background: "surface"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "globe",
			size: "xl",
			color: "secondary"
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "medium"
		}, timeLabel), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			truncate: true
		}, state.relative_offset_label ? `${state.location} 
 ${state.relative_offset_label}` : state.location))));
		return /* @__PURE__ */ __dil.jsx("card", {
			size: isMobile || !isWide ? "full" : "sm",
			padding: {
				left: 6,
				right: 4,
				y: 5
			},
			background: "#1c1c1c",
			theme: "dark"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "between",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1.5,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "xl",
			weight: "semibold"
		}, timeLabel), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, state.location), isLive && state.relative_offset_label && /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, state.relative_offset_label))), /* @__PURE__ */ __dil.jsx("box", {
			width: 95,
			height: 95,
			flex: "none",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx(Svg, {
			viewBox: "0 0 95 95",
			size: 95,
			fill: "none"
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12
		].map((mark) => /* @__PURE__ */ __dil.jsx(SvgText, {
			key: mark,
			x: 47.5 + Math.sin(mark * Math.PI / 6) * 40,
			y: 47.5 - Math.cos(mark * Math.PI / 6) * 40,
			fill: "#f5f5f5",
			fontSize: 12,
			fontWeight: 600,
			textAnchor: "middle",
			dominantBaseline: "central"
		}, mark))), /* @__PURE__ */ __dil.jsx(SvgLine, {
			x1: 47.5,
			y1: 47.5,
			x2: 47.5,
			y2: 23.5,
			stroke: "#f5f5f5",
			strokeWidth: 4,
			strokeLinecap: "round",
			transform: `rotate(${hourAngle} 47.5 47.5)`
		}), /* @__PURE__ */ __dil.jsx(SvgLine, {
			x1: 47.5,
			y1: 47.5,
			x2: 47.5,
			y2: 13.5,
			stroke: "#f5f5f5",
			strokeWidth: 3,
			strokeLinecap: "round",
			transform: `rotate(${minuteAngle} 47.5 47.5)`
		}), isLive && /* @__PURE__ */ __dil.jsx(SvgLine, {
			x1: 47.5,
			y1: 53.5,
			x2: 47.5,
			y2: 5.5,
			stroke: "#ffb141",
			strokeWidth: 1.5,
			strokeLinecap: "round",
			transform: `rotate(${second * 6} 47.5 47.5)`
		}), /* @__PURE__ */ __dil.jsx(SvgCircle, {
			cx: 47.5,
			cy: 47.5,
			r: 3,
			fill: "#f5f5f5"
		}), /* @__PURE__ */ __dil.jsx(SvgCircle, {
			cx: 47.5,
			cy: 47.5,
			r: 2,
			fill: "#ffb141"
		})))));
	}
	function ClockWidget(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("ClockWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 135
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedClock, { state });
	}

