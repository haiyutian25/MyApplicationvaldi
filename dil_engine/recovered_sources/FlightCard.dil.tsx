
	function FlightCard(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("FlightCard", props);
		const isMobile = DIL.useIsMobile();
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading flight" });
		return /* @__PURE__ */ __dil.jsx("card", {
			background: "surface",
			gap: 4,
			padding: 5,
			size: "sm"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 3,
			justify: "between",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: .5,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			minWidth: 0
		}, state.airline_logo_url ? /* @__PURE__ */ __dil.jsx("image", {
			alt: state.airline_logo_alt,
			fit: "contain",
			height: 18,
			hideOnFailure: true,
			radius: "full",
			src: state.airline_logo_url,
			width: 18
		}) : null, /* @__PURE__ */ __dil.jsx("text", {
			maxLines: 1,
			size: "md",
			truncate: true,
			weight: "medium"
		}, state.airline_name)), state.operating_airlines_label ? /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, state.operating_airlines_label) : null, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			maxLines: 1,
			size: "sm",
			truncate: true
		}, state.trip_summary_label)), state.price_label ? /* @__PURE__ */ __dil.jsx("text", {
			maxLines: 1,
			size: "lg",
			textAlign: "end",
			weight: "semibold"
		}, state.price_label) : null), /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 3,
			width: "100%",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: .5,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: isMobile ? "md" : "lg",
			weight: "semibold"
		}, state.departure_time_label), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			weight: "medium"
		}, state.departure_airport_code)), /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			flex: 1,
			gap: 0,
			justify: "center",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			height: 25,
			justify: "between",
			width: "100%"
		}, [
			...[
				0,
				1,
				2
			].map((index) => /* @__PURE__ */ __dil.jsx("box", {
				background: "border-subtle",
				key: `outbound-dot-${index}`,
				radius: "full",
				size: 4
			})),
			...state.duration_label ? [/* @__PURE__ */ __dil.jsx("box", { key: "flight-duration" }, /* @__PURE__ */ __dil.jsx("text", {
				maxLines: 1,
				size: "xs",
				weight: "medium"
			}, state.duration_label))] : [],
			...[
				0,
				1,
				2
			].map((index) => /* @__PURE__ */ __dil.jsx("box", {
				background: "border-subtle",
				key: `arrival-dot-${index}`,
				radius: "full",
				size: 4
			}))
		])), /* @__PURE__ */ __dil.jsx("col", {
			align: "end",
			flex: 1,
			gap: .5,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: isMobile ? "md" : "lg",
			textAlign: "end",
			weight: "semibold"
		}, state.arrival_time_label), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			textAlign: "end",
			weight: "medium"
		}, state.arrival_airport_code))), state.booking_detail_labels?.length ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			width: "100%"
		}, state.booking_detail_labels.map((label, index) => /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			key: `booking-detail-${index}`,
			size: "sm"
		}, label))) : null, state.booking_urls.length ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			width: "100%"
		}, state.booking_urls.map((url) => /* @__PURE__ */ __dil.jsx("button", {
			block: true,
			color: "secondary",
			key: url,
			onClick: () => GenUI.openUrl(url),
			pill: true,
			size: "lg",
			variant: "outline"
		}, state.select_flight_label))) : null);
	}

