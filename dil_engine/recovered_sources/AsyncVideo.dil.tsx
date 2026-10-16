
	function AsyncVideo(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("AsyncVideo", props);
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading video" });
		const video = state.video;
		if (!video) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			background: "surface-secondary",
			clip: true,
			maxWidth: "100%",
			radius: "3xl",
			width: "640px"
		}, /* @__PURE__ */ __dil.jsx("youtube", {
			aspectRatio: "16 / 9",
			maxWidth: "100%",
			title: video.title,
			videoId: video.video_id,
			width: "100%"
		}));
	}

