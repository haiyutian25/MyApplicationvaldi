
	function EventSidebarWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("EventSidebarWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		const actions = [
			{
				url: state.ticket_url,
				label: state.view_tickets_label,
				primary: true,
				confirm: true
			},
			{
				url: state.detail_url,
				label: state.event_details_label,
				primary: false,
				confirm: true
			},
			{
				url: state.directions_label ? state.map_url : null,
				label: state.directions_label,
				primary: false,
				confirm: false
			}
		].filter((action) => action.url != null);
		const locationLabel = state.venue ?? state.address;
		const locationContent = /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			truncate: !state.venue
		}, locationLabel), state.venue && state.address && state.venue !== state.address && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			truncate: true
		}, state.address));
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100vw",
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "semibold"
		}, state.title), /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0
		}, actions.length > 0 && /* @__PURE__ */ __dil.jsx("box", { padding: { bottom: 3 } }, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 2,
			showArrows: false
		}, actions.map((action) => /* @__PURE__ */ __dil.jsx("carousel-item", { key: action.label }, /* @__PURE__ */ __dil.jsx("button", {
			color: "primary",
			variant: action.primary ? "solid" : "outline",
			size: "lg",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_url",
				payload: {
					url: action.url,
					require_safe_url_confirmation: action.confirm
				}
			})
		}, action.label))))), state.schedule && /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minHeight: 44,
			gap: 4,
			padding: { y: 2 },
			align: "center",
			border: { top: {
				size: 1,
				color: "subtle"
			} }
		}, /* @__PURE__ */ __dil.jsx("box", { width: 24 }, /* @__PURE__ */ __dil.jsx("icon", {
			name: "calendar",
			size: "2xl"
		})), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.schedule))), (state.ticket_metadata ?? []).length > 0 && /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minHeight: 44,
			gap: 4,
			padding: { y: 2 },
			align: "center",
			border: { top: {
				size: 1,
				color: "subtle"
			} }
		}, /* @__PURE__ */ __dil.jsx("box", { width: 24 }, /* @__PURE__ */ __dil.jsx("icon", {
			name: "tag",
			size: "2xl"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, state.ticket_metadata?.map((metadata, index) => /* @__PURE__ */ __dil.jsx("text", {
			key: metadata,
			size: "sm",
			weight: index === 0 ? "medium" : "normal",
			color: index === 0 ? "primary" : "secondary"
		}, metadata)))), !state.location_in_map && locationLabel && /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minHeight: 44,
			gap: 4,
			padding: { y: 2 },
			align: "center",
			border: { top: {
				size: 1,
				color: "subtle"
			} }
		}, /* @__PURE__ */ __dil.jsx("box", { width: 24 }, /* @__PURE__ */ __dil.jsx("icon", {
			name: "map-pin",
			size: "2xl"
		})), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, state.map_url && !state.directions_label ? /* @__PURE__ */ __dil.jsx("pressable", { onClick: () => GenUI.dispatchAction({
			handler: "client",
			type: "open_url",
			payload: { url: state.map_url }
		}) }, locationContent) : locationContent)))));
	}

