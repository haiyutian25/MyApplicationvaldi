
	function ImageGenWidget(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("ImageGenWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 300,
			height: 300
		});
		if (state.status === "succeeded") return state.url ? /* @__PURE__ */ __dil.jsx("image", {
			src: state.url,
			height: 300,
			fit: "contain",
			hideOnFailure: true
		}) : null;
		if (state.status === "failed") return /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, state.error || "Image generation failed.");
		return /* @__PURE__ */ __dil.jsx("box", {
			width: 300,
			height: 300,
			background: {
				light: "gray-100",
				dark: "gray-400"
			}
		});
	}

