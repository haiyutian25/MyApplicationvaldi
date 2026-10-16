
	function AsyncVideoCarousel(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("AsyncVideoCarousel", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 356
		});
		if (state.is_loading && state.items.length === 0) return /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			gap: 2,
			minWidth: 0,
			clip: true
		}, [
			0,
			1,
			2,
			3
		].map((index) => /* @__PURE__ */ __dil.jsx("box", {
			key: index,
			width: 200,
			aspectRatio: "9/16",
			flex: "none",
			radius: "2xl",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			duration: 1e3
		}))));
		if (!state.items.length) return null;
		return /* @__PURE__ */ __dil.jsx(ResolvedVideoCarousel, {
			key: `${props.__resolutionId ?? ""}:${props.video_source_data}`,
			carouselId: props.__resolutionId,
			items: state.items
		});
	}
	function ResolvedVideoCarousel({ carouselId, items }) {
		const isMobile = DIL.useIsMobile();
		const [failedVideoIds, setFailedVideoIds] = DIL.useState([]);
		const videos = items.filter((video) => !failedVideoIds.includes(video.provider_video_id));
		if (!videos.length) return null;
		return /* @__PURE__ */ __dil.jsx("box", { width: "100%" }, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 2,
			snap: "mandatory",
			flush: true,
			ariaLabel: videos[0].title
		}, videos.map((video, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: video.provider_video_id,
			width: 200,
			padding: 0,
			radius: "2xl",
			background: "surface-secondary"
		}, video.provider === "tiktok" ? /* @__PURE__ */ __dil.jsx(TikTokVideoCard, {
			video_id: video.provider_video_id,
			position: index,
			platform: isMobile ? "mobile" : "desktop",
			title: video.title,
			canonical_url: video.canonical_url,
			thumbnail_url: video.thumbnail_url
		}) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			...GenUI.logEvent ? {
				onVisibleKey: index,
				onVisible: () => GenUI.logEvent?.({
					event_name: "video_carousel_impression",
					statsig_event_name: "video_carousel_impression",
					event_data: {
						carousel_id: carouselId,
						platform: isMobile ? "mobile" : "desktop",
						video_id: video.provider_video_id,
						position: index
					}
				})
			} : {}
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			clip: true,
			padding: 0,
			radius: "2xl",
			background: "transparent",
			border: {
				size: 0,
				color: "transparent"
			},
			ariaLabel: `${video.title} on YouTube`,
			onClick: () => {
				const eventData = {
					carousel_id: carouselId,
					platform: isMobile ? "mobile" : "desktop",
					video_id: video.provider_video_id,
					position: index
				};
				GenUI.dispatchAction({
					type: "open_video_lightbox",
					handler: "client",
					payload: {
						video_id: video.provider_video_id,
						title: video.title,
						videos,
						event_name: "video_carousel_lightbox_opened",
						statsig_event_name: "video_carousel_lightbox_opened",
						event_data: eventData
					},
					fallbackAction: {
						type: "open_url",
						handler: "client",
						payload: {
							url: video.canonical_url,
							event_name: "video_carousel_outbound_clicked",
							statsig_event_name: "video_carousel_outbound_clicked",
							event_data: eventData
						}
					}
				});
			}
		}, /* @__PURE__ */ __dil.jsx("youtube", {
			videoId: video.provider_video_id,
			title: `${video.title} on YouTube`,
			aspectRatio: "9/16",
			hoverToPlay: !isMobile,
			showDurationBadge: true,
			showThumbnail: true,
			width: "100%",
			onHover: () => GenUI.logEvent?.({
				event_name: "video_carousel_hovered",
				event_data: {
					carousel_id: carouselId,
					platform: isMobile ? "mobile" : "desktop",
					video_id: video.provider_video_id,
					position: index
				}
			}),
			onPlayerError: () => setFailedVideoIds((previous) => previous.includes(video.provider_video_id) ? previous : [...previous, video.provider_video_id])
		})))))));
	}

