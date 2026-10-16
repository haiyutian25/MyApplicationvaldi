
	function LearningAudio({ speech, labels }) {
		const active = speech.status !== "idle";
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			align: "center",
			justify: "center",
			gap: "8px",
			padding: { y: "8px" }
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: !speech.available ? labels.unavailable : active ? labels.stop : labels.play,
			disabled: !speech.available,
			onClick: active ? speech.stop : speech.play,
			width: "48px",
			height: "48px",
			radius: "full",
			background: "gray-75"
		}, /* @__PURE__ */ __dil.jsx("col", {
			ariaHidden: true,
			width: "100%",
			height: "100%",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: active ? "stop" : "play-triangle",
			size: "2xl"
		}))), speech.error ? /* @__PURE__ */ __dil.jsx("box", { role: "status" }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			textAlign: "center"
		}, labels.error)) : null);
	}

