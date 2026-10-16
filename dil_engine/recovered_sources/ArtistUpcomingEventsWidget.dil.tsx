
	function ArtistUpcomingEventsWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("ArtistUpcomingEventsWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 240
		});
		if (state.events.length === 0) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100vw",
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.heading), state.fallback_message && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.fallback_message), /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			border: {
				size: 1,
				color: "default"
			},
			radius: "xl"
		}, state.events.map((event) => /* @__PURE__ */ __dil.jsx("col", {
			key: event.id,
			width: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			gap: 3,
			padding: 3,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 56,
			height: 64,
			background: "surface-secondary",
			border: {
				size: 1,
				color: "default"
			},
			radius: "lg",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			weight: "semibold"
		}, event.month), /* @__PURE__ */ __dil.jsx("text", {
			size: "xl",
			weight: "semibold"
		}, event.day))), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", { weight: "semibold" }, event.venue ?? event.title), /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			wrap: "wrap"
		}, event.location && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, event.location), event.location != null && event.time != null && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, "
"), event.time && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, event.time))), event.ticket_url != null ? /* @__PURE__ */ __dil.jsx("button", {
			color: "primary",
			variant: "outline",
			size: "sm",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_url",
				payload: { url: event.ticket_url }
			})
		}, state.view_tickets_label, /* @__PURE__ */ __dil.jsx("icon", { name: "arrow-up-right" })) : event.detail_url != null && /* @__PURE__ */ __dil.jsx("button", {
			color: "secondary",
			variant: "outline",
			size: "sm",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_url",
				payload: { url: event.detail_url }
			})
		}, state.event_details_label)), /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 1,
			background: "border"
		})))), /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, "Concert data provided by"), /* @__PURE__ */ __dil.jsx("pressable", {
			inline: true,
			ariaLabel: "Open JamBase",
			onClick: () => GenUI.dispatchAction({
				type: "open_url",
				handler: "client",
				payload: {
					url: "https://www.jambase.com/?utm_source=chatgpt.com",
					event_name: "link_widget_clicked",
					event_data: {
						widget_name: "artist_upcoming_events_widget",
						url: "https://www.jambase.com/?utm_source=chatgpt.com"
					}
				}
			})
		}, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "xs",
			color: "secondary",
			underline: true
		}, "JamBase")))));
	}

