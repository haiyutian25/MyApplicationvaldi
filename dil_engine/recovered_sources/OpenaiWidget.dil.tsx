
	function OpenaiWidget(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("OpenaiWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 320,
			height: 260
		});
		return /* @__PURE__ */ __dil.jsx("card", { size: "sm" }, /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			gap: 3,
			padding: {
				top: 5,
				bottom: 4
			}
		}, /* @__PURE__ */ __dil.jsx("box", { background: "surface-elevated-secondary" }, /* @__PURE__ */ __dil.jsx("image", {
			src: state.image,
			alt: "OpenAI logo",
			fit: "contain",
			width: 260,
			height: 70
		})), /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.name), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			textAlign: "center"
		}, state.tagline))), /* @__PURE__ */ __dil.jsx("row", { align: "center" }, /* @__PURE__ */ __dil.jsx("button", { onClick: () => GenUI.dispatchAction({
			type: "link.open",
			payload: { url: state.websiteUrl }
		}) }, "Website"), /* @__PURE__ */ __dil.jsx("button", {
			variant: "outline",
			onClick: () => GenUI.dispatchAction({
				type: "chat.fill",
				payload: { text: state.morePrompt }
			})
		}, "Ask more")));
	}

