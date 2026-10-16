
	function TikTokVideoCard({ video_id, position, platform, title, canonical_url, thumbnail_url }) {
		const eventData = {
			platform,
			video_id,
			position,
			provider: "tiktok"
		};
		const providerBadge = /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: "100%",
			padding: 2,
			justify: "end",
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("badge", {
			color: "rgb(0 0 0 / 40%)",
			variant: "solid"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "tiktok",
			color: "white",
			inline: true
		})));
		return /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			clip: true,
			padding: 0,
			gap: 0,
			radius: "2xl",
			background: "transparent",
			border: {
				size: 0,
				color: "transparent"
			},
			ariaLabel: `${title} on TikTok`,
			onClick: () => GenUI.dispatchAction({
				type: "open_url",
				handler: "client",
				payload: {
					url: canonical_url,
					event_name: "video_carousel_outbound_clicked",
					statsig_event_name: "video_carousel_outbound_clicked",
					event_data: eventData
				}
			})
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			aspectRatio: "9/16",
			background: "surface-secondary",
			clip: true,
			...GenUI.logEvent ? { onVisible: () => GenUI.logEvent?.({
				event_name: "video_carousel_impression",
				statsig_event_name: "video_carousel_impression",
				event_data: eventData
			}) } : {}
		}, thumbnail_url ? /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: { content_url: thumbnail_url },
			alt: "",
			width: "100%",
			height: "100%",
			fit: "cover",
			fallback: /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				height: "100%",
				background: "surface-secondary"
			})
		}, providerBadge) : providerBadge));
	}

