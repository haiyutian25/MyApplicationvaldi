
	const SvgPath = "path";
	function launch(payload) {
		GenUI.dispatchAction({
			type: "launch_ecosystem_widget",
			handler: "client",
			payload
		});
	}
	function openUrl(url) {
		GenUI.dispatchAction({
			type: "open_url",
			handler: "client",
			payload: { url }
		});
	}
	function TimeLabel({ label, unavailable = false }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "center",
			height: "100%",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: unavailable ? "tertiary" : "primary",
			maxLines: 1,
			size: "sm",
			textAlign: "center",
			truncate: true,
			weight: "medium"
		}, label));
	}
	function ReservationVoiceCard({ state }) {
		const card = state.voice_card;
		const group = state.groups[0];
		const hasLoggedImpression = DIL.useRef(false);
		if (!card) return null;
		const firstOption = group?.change_options[0];
		const showMore = group && group.mobile_time_slots.length > 5 && (firstOption?.launcher_payload != null || group.requested_launcher_payload != null);
		function openHeading() {
			if (firstOption) if (firstOption.launcher_payload != null) launch(firstOption.launcher_payload);
			else openUrl(firstOption.url);
			else if (group?.requested_launcher_payload != null) launch(group.requested_launcher_payload);
		}
		return /* @__PURE__ */ __dil.jsx("box", {
			width: 362,
			maxWidth: "100%",
			radius: "3xl",
			clip: true,
			...GenUI.logEvent ? {
				onVisibleWhen: !hasLoggedImpression.current,
				onVisible: () => {
					hasLoggedImpression.current = true;
					GenUI.logEvent?.({
						event_name: "reservation_time_pills_widget_shown",
						statsig_event_name: "reservation_time_pills_widget_shown",
						event_data: { widget_name: "reservation_time_pills" }
					});
				}
			} : {}
		}, /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			width: "100%",
			padding: 0,
			gap: 0,
			background: "surface"
		}, card.images.length >= 3 && /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 200,
			background: "surface-secondary",
			radius: {
				topLeft: "3xl",
				topRight: "3xl",
				bottomRight: "none",
				bottomLeft: "none"
			},
			clip: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			width: "100%",
			height: "100%",
			gap: "1px",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "60%",
			height: "100%",
			minWidth: 0,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			padding: 0,
			radius: "none",
			onClick: () => GenUI.dispatchAction({
				type: "open_image_lightbox",
				handler: "client",
				payload: {
					images: card.images,
					selected_index: 0
				}
			})
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: card.images[0].image_url,
			alt: card.images[0].alt_text,
			width: "100%",
			height: "100%",
			fit: "cover",
			radius: "none",
			hideOnFailure: true
		}))), /* @__PURE__ */ __dil.jsx("col", {
			width: "40%",
			height: "100%",
			gap: "1px",
			minWidth: 0,
			minHeight: 0
		}, [1, 2].map((index) => /* @__PURE__ */ __dil.jsx("box", {
			key: index,
			width: "100%",
			flex: 1,
			minWidth: 0,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			padding: 0,
			radius: "none",
			onClick: () => GenUI.dispatchAction({
				type: "open_image_lightbox",
				handler: "client",
				payload: {
					images: card.images,
					selected_index: index
				}
			})
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: card.images[index].image_url,
			alt: card.images[index].alt_text,
			width: "100%",
			height: "100%",
			fit: "cover",
			radius: "none",
			hideOnFailure: true
		}))))))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: {
				x: 5,
				y: 3
			},
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1.5,
			width: "100%",
			minWidth: 0
		}, card.title && (card.click_action != null ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			minWidth: 0,
			padding: 0,
			radius: "md",
			onClick: () => GenUI.dispatchAction(card.click_action)
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "medium",
			underline: "dotted",
			maxLines: 2
		}, card.title)) : /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "medium",
			maxLines: 2
		}, card.title)), card.metadata_label && /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			width: "100%",
			minWidth: 0,
			wrap: "nowrap"
		}, card.has_rating && /* @__PURE__ */ __dil.jsx("text", { color: "primary" }, /* @__PURE__ */ __dil.jsx("svg", {
			viewBox: "0 0 24 24",
			width: 14,
			height: 14
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z",
			fill: "currentColor"
		}))), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			maxLines: 1,
			truncate: true
		}, card.metadata_label))), /* @__PURE__ */ __dil.jsx("divider", {
			spacing: 0,
			color: "subtle"
		}), group && /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			minWidth: 0,
			padding: 0,
			radius: "md",
			onClick: firstOption || group.requested_launcher_payload != null ? openHeading : void 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "between",
			gap: 2,
			width: "100%",
			minWidth: 0,
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			minWidth: 0,
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			maxLines: 1,
			truncate: true
		}, group.request_date_time_label), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, "
"), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: "secondary",
			maxLines: 1,
			truncate: true
		}, group.party_size_label)), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 0,
			padding: { left: 1 },
			wrap: "nowrap"
		}, group.provider_logos.map((logo, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: index,
			background: "surface",
			padding: "2px",
			radius: "full"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: logo.logo_url,
			alt: logo.name ?? group.provider_name,
			width: 20,
			height: 20,
			fit: "contain",
			radius: "full",
			hideOnFailure: true
		})))))), group.mobile_time_slots.length > 0 ? /* @__PURE__ */ __dil.jsx("grid", {
			columns: 3,
			gap: 2
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, group.mobile_time_slots.slice(0, 5).map((slot, index) => /* @__PURE__ */ __dil.jsx("grid-item", { key: index }, slot.is_requested_unavailable ? /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			border: {
				size: 1,
				color: "subtle"
			},
			height: 40,
			justify: "center",
			minWidth: 0,
			padding: { x: 2 },
			radius: "full",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(TimeLabel, {
			label: slot.formatted_time,
			unavailable: true
		})) : /* @__PURE__ */ __dil.jsx("pressable", {
			align: "center",
			border: {
				size: 1,
				color: "default"
			},
			height: 40,
			justify: "center",
			minWidth: 0,
			padding: 0,
			radius: "full",
			width: "100%",
			clip: true,
			onClick: () => {
				if (slot.booking_query != null) GenUI.dispatchAction({
					type: "issue_new_turn",
					handler: "client",
					loadingBehavior: "none",
					payload: {
						query: slot.booking_query,
						append_to_current_leaf: true
					}
				});
				else if (slot.launcher_payload != null) launch(slot.launcher_payload);
				else openUrl(slot.url);
			}
		}, /* @__PURE__ */ __dil.jsx(TimeLabel, { label: slot.formatted_time }))))), showMore && /* @__PURE__ */ __dil.jsx("grid-item", null, /* @__PURE__ */ __dil.jsx("pressable", {
			align: "center",
			border: {
				size: 1,
				color: "default"
			},
			height: 40,
			justify: "center",
			minWidth: 0,
			padding: 0,
			radius: "full",
			width: "100%",
			clip: true,
			onClick: () => {
				const payload = firstOption?.launcher_payload != null ? firstOption.see_more_launcher_payload ?? firstOption.launcher_payload : group.see_more_launcher_payload ?? group.requested_launcher_payload;
				if (payload != null) launch(payload);
			}
		}, /* @__PURE__ */ __dil.jsx(TimeLabel, { label: state.show_more_times_label })))) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, group.empty_state_label), firstOption && /* @__PURE__ */ __dil.jsx("button", {
			block: true,
			variant: "outline",
			size: "md",
			onClick: () => {
				if (firstOption.launcher_payload != null) launch(firstOption.try_again_launcher_payload ?? firstOption.launcher_payload);
				else openUrl(firstOption.url);
			}
		}, group.try_again_label))))));
	}

